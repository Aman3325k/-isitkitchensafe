const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const BREAKPOINTS = [
  { width: 320, height: 568, name: 'mobile-320' },
  { width: 375, height: 667, name: 'mobile-375' },
  { width: 414, height: 896, name: 'mobile-414' },
  { width: 768, height: 1024, name: 'tablet-768' },
  { width: 834, height: 1112, name: 'tablet-834' },
  { width: 1024, height: 768, name: 'desktop-1024' },
  { width: 1280, height: 800, name: 'desktop-1280' },
  { width: 1440, height: 900, name: 'desktop-1440' },
  { width: 1920, height: 1080, name: 'desktop-1920' }
];

const PAGES = [
  { id: 'home-en', path: '/' },
  { id: 'home-ja', path: '/ja/' },
  { id: 'material-en', path: '/material/silicone/' },
  { id: 'material-ja', path: '/ja/material/silicone/' },
  { id: 'category-en', path: '/dishwasher/' },
  { id: 'category-ja', path: '/ja/dishwasher/' },
  { id: 'item-en', path: '/dishwasher/hydroflask/' },
  { id: 'item-ja', path: '/ja/dishwasher/hydroflask/' },
  { id: 'blog-en', path: '/blog/things-you-should-never-microwave/' },
  { id: 'blog-ja', path: '/ja/blog/things-you-should-never-microwave/' },
  { id: 'compare-en', path: '/compare/' }
];

const SCREENSHOTS_DIR = path.resolve(__dirname, '../qa-screenshots');
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

function getChromePath() {
  const possiblePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe'
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  return 'chrome';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function requestJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 0;
    this.callbacks = new Map();
    this.events = [];
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = err => reject(err);
      this.ws.onmessage = msg => {
        const payload = JSON.parse(msg.data);
        if (payload.id && this.callbacks.has(payload.id)) {
          const cb = this.callbacks.get(payload.id);
          this.callbacks.delete(payload.id);
          if (payload.error) cb.reject(payload.error);
          else cb.resolve(payload.result);
        } else if (payload.method) {
          this.events.push(payload);
        }
      };
    });
  }

  async send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.callbacks.delete(id);
        reject(new Error(`Timeout waiting for ${method}`));
      }, 10000);
      this.callbacks.set(id, {
        resolve: (res) => { clearTimeout(timer); resolve(res); },
        reject: (err) => { clearTimeout(timer); reject(err); }
      });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

async function runAudit() {
  const chromePath = getChromePath();
  const userDataDir = path.resolve(__dirname, '../.chrome-audit-profile');
  if (!fs.existsSync(userDataDir)) {
    fs.mkdirSync(userDataDir, { recursive: true });
  }

  console.log('🚀 Launching Chrome Headless with Remote Debugging...');
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-background-networking',
    '--disable-sync',
    '--disable-translate',
    '--hide-scrollbars',
    '--mute-audio',
    'about:blank'
  ], { stdio: 'ignore' });

  // Wait for remote debugging to be ready
  let wsUrl = null;
  for (let i = 0; i < 30; i++) {
    await sleep(500);
    try {
      const list = await requestJson('http://127.0.0.1:9222/json/list');
      if (list && list.length > 0 && list[0].webSocketDebuggerUrl) {
        wsUrl = list[0].webSocketDebuggerUrl;
        break;
      }
    } catch {}
  }

  if (!wsUrl) {
    chromeProc.kill();
    throw new Error('Failed to connect to Chrome debugging port');
  }

  console.log('Connected to Chrome CDP:', wsUrl);
  const client = new CDPClient(wsUrl);
  await client.connect();

  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Log.enable');

  const auditReport = [];

  for (const page of PAGES) {
    const pageUrl = `http://127.0.0.1:4321${page.path}`;
    console.log(`\n========================================`);
    console.log(`🔍 Auditing Page: ${page.id} (${page.path})`);
    console.log(`========================================`);

    // Navigate to page
    await client.send('Page.navigate', { url: pageUrl });
    await sleep(1000);

    for (const bp of BREAKPOINTS) {
      // Emulate viewport
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: bp.width,
        height: bp.height,
        deviceScaleFactor: 1,
        mobile: bp.width < 1024
      });
      await sleep(300);

      // Evaluate in page context
      const evalResult = await client.send('Runtime.evaluate', {
        expression: `
          (function() {
            const issues = {
              horizontalOverflow: false,
              overflowWidth: 0,
              windowWidth: window.innerWidth,
              overflowCulprits: [],
              overlappingElements: [],
              smallTouchTargets: [],
              textTruncation: []
            };

            const docEl = document.documentElement;
            const winWidth = window.innerWidth;
            if (docEl.scrollWidth > winWidth + 1) {
              issues.horizontalOverflow = true;
              issues.overflowWidth = docEl.scrollWidth;
              document.querySelectorAll('*').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.right > winWidth + 2 && rect.width > 0 && rect.height > 0) {
                  const style = window.getComputedStyle(el);
                  if (style.display !== 'none' && style.visibility !== 'hidden') {
                    issues.overflowCulprits.push({
                      tag: el.tagName.toLowerCase(),
                      id: el.id || null,
                      className: el.className ? String(el.className).substring(0, 100) : null,
                      right: Math.round(rect.right),
                      width: Math.round(rect.width)
                    });
                  }
                }
              });
              issues.overflowCulprits = issues.overflowCulprits.slice(0, 5);
            }

            // Touch target audit (for mobile < 768)
            if (winWidth < 768) {
              const interactiveEls = document.querySelectorAll('button, a, input, select, summary');
              interactiveEls.forEach(el => {
                if (el.closest('#mobile-menu.hidden') || el.closest('#cookie-consent-banner.hidden')) return;
                const rect = el.getBoundingClientRect();
                const style = window.getComputedStyle(el);
                if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return;
                if (rect.width > 0 && rect.height > 0) {
                  if (rect.width < 43.5 || rect.height < 43.5) {
                    // Ignore inline links within running text paragraphs
                    if (el.tagName === 'A' && el.parentElement && /^(P|LI)$/.test(el.parentElement.tagName) && !el.className.includes('btn') && !el.className.includes('badge')) {
                      return;
                    }
                    issues.smallTouchTargets.push({
                      tag: el.tagName.toLowerCase(),
                      id: el.id || null,
                      text: (el.innerText || el.getAttribute('aria-label') || '').trim().substring(0, 40),
                      width: Math.round(rect.width),
                      height: Math.round(rect.height),
                      className: el.className ? String(el.className).substring(0, 80) : ''
                    });
                  }
                }
              });
            }

            // Overlap check on key interactive/structural components
            const candidates = Array.from(document.querySelectorAll('header *, main h1, main h2, main .badge, main form *, .item-card, header form *'));
            const rectMap = [];
            for (const el of candidates) {
              const rect = el.getBoundingClientRect();
              const style = window.getComputedStyle(el);
              if (style.display === 'none' || style.visibility === 'hidden' || rect.width <= 0 || rect.height <= 0) continue;
              rectMap.push({ el, rect, style });
            }

            for (let i = 0; i < rectMap.length; i++) {
              for (let j = i + 1; j < rectMap.length; j++) {
                const a = rectMap[i];
                const b = rectMap[j];
                if (a.el.contains(b.el) || b.el.contains(a.el)) continue;

                const overlapX = Math.max(0, Math.min(a.rect.right, b.rect.right) - Math.max(a.rect.left, b.rect.left));
                const overlapY = Math.max(0, Math.min(a.rect.bottom, b.rect.bottom) - Math.max(a.rect.top, b.rect.top));

                if (overlapX > 4 && overlapY > 4) {
                  issues.overlappingElements.push({
                    elemA: {
                      tag: a.el.tagName.toLowerCase(),
                      id: a.el.id || null,
                      className: a.el.className ? String(a.el.className).substring(0, 60) : '',
                      text: (a.el.innerText || '').trim().substring(0, 30),
                      rect: { x: Math.round(a.rect.x), y: Math.round(a.rect.y), w: Math.round(a.rect.w), h: Math.round(a.rect.h) }
                    },
                    elemB: {
                      tag: b.el.tagName.toLowerCase(),
                      id: b.el.id || null,
                      className: b.el.className ? String(b.el.className).substring(0, 60) : '',
                      text: (b.el.innerText || '').trim().substring(0, 30),
                      rect: { x: Math.round(b.rect.x), y: Math.round(b.rect.y), w: Math.round(b.rect.w), h: Math.round(b.rect.h) }
                    },
                    overlapArea: Math.round(overlapX * overlapY)
                  });
                }
              }
            }

            return issues;
          })()
        `,
        returnByValue: true
      });

      const pageIssues = evalResult.result?.value || {};

      // Take screenshot
      const shotResult = await client.send('Page.captureScreenshot', {
        format: 'png',
        clip: {
          x: 0,
          y: 0,
          width: bp.width,
          height: Math.min(bp.height, 1200),
          scale: 1
        }
      });

      const shotFileName = `${page.id}-${bp.width}px.png`;
      const shotPath = path.join(SCREENSHOTS_DIR, shotFileName);
      fs.writeFileSync(shotPath, Buffer.from(shotResult.data, 'base64'));

      const resultEntry = {
        pageId: page.id,
        path: page.path,
        breakpoint: bp.width,
        breakpointName: bp.name,
        screenshot: shotFileName,
        issues: pageIssues
      };

      auditReport.push(resultEntry);

      const hasProblems = pageIssues.horizontalOverflow || (pageIssues.overlappingElements && pageIssues.overlappingElements.length > 0) || (pageIssues.smallTouchTargets && pageIssues.smallTouchTargets.length > 0);
      if (hasProblems) {
        console.log(`  ❌ [${bp.width}px]: Overflow=${pageIssues.horizontalOverflow} (doc=${pageIssues.overflowWidth}px, win=${bp.width}px) | Overlaps=${pageIssues.overlappingElements?.length || 0} | SmallTouch=${pageIssues.smallTouchTargets?.length || 0}`);
        if (pageIssues.overlappingElements?.length > 0) {
          pageIssues.overlappingElements.forEach(ov => {
            console.log(`     ⚠️ OVERLAP: "${ov.elemA.tag}.${ov.elemA.className}" vs "${ov.elemB.tag}.${ov.elemB.className}"`);
          });
        }
        if (pageIssues.overflowCulprits?.length > 0) {
          console.log(`     ⚠️ CULPRITS:`, pageIssues.overflowCulprits);
        }
      } else {
        console.log(`  ✓ [${bp.width}px]: Clean layout, no overflow or collisions`);
      }
    }
  }

  client.close();
  chromeProc.kill();

  const reportPath = path.resolve(__dirname, '../responsive-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(auditReport, null, 2), 'utf8');
  console.log(`\n====================================================`);
  console.log(`🎉 Responsive Audit Complete! Report saved to: ${reportPath}`);
  console.log(`====================================================\n`);
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
