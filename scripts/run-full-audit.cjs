const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const OUT_DIR = path.resolve(__dirname, '../qa-screenshots/full-audit');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  // Mobile
  { id: 'mobile-320', width: 320, height: 568, isMobile: true },
  { id: 'mobile-360', width: 360, height: 800, isMobile: true },
  { id: 'mobile-375-short', width: 375, height: 667, isMobile: true },
  { id: 'mobile-375-tall', width: 375, height: 932, isMobile: true },
  { id: 'mobile-390', width: 390, height: 844, isMobile: true },
  { id: 'mobile-414', width: 414, height: 896, isMobile: true },
  { id: 'mobile-430', width: 430, height: 932, isMobile: true },
  // Tablet
  { id: 'tablet-768-port', width: 768, height: 1024, isMobile: true },
  { id: 'tablet-810', width: 810, height: 1080, isMobile: true },
  { id: 'tablet-834', width: 834, height: 1112, isMobile: true },
  { id: 'tablet-1024-land', width: 1024, height: 768, isMobile: false },
  // Laptop / Desktop
  { id: 'desktop-1280', width: 1280, height: 800, isMobile: false },
  { id: 'desktop-1366', width: 1366, height: 768, isMobile: false },
  { id: 'desktop-1440', width: 1440, height: 900, isMobile: false },
  { id: 'desktop-1536', width: 1536, height: 864, isMobile: false },
  { id: 'desktop-1680', width: 1680, height: 1050, isMobile: false },
  { id: 'desktop-1920', width: 1920, height: 1080, isMobile: false },
  { id: 'desktop-2560', width: 2560, height: 1440, isMobile: false }
];

const TEMPLATES = [
  { id: 'homepage-en', path: '/', name: 'Homepage (EN)' },
  { id: 'homepage-ja', path: '/ja/', name: 'Homepage (JA)' },
  { id: 'appliance-dishwasher', path: '/dishwasher/', name: 'Appliance Hub (Dishwasher)' },
  { id: 'appliance-refrigerator', path: '/refrigerator/', name: 'Appliance Hub (Refrigerator)' },
  { id: 'appliance-dishwasher-ja', path: '/ja/dishwasher/', name: 'Appliance Hub (JA Dishwasher)' },
  { id: 'item-hydroflask', path: '/dishwasher/hydroflask/', name: 'Item Detail (Hydro Flask)' },
  { id: 'item-castiron', path: '/dishwasher/cast-iron-skillet/', name: 'Item Detail (Cast Iron)' },
  { id: 'compare-index', path: '/compare/', name: 'Compare Index' },
  { id: 'compare-detail', path: '/compare/air-fryer-vs-convection-oven/', name: 'Compare Detail' },
  { id: 'blog-index', path: '/blog/', name: 'Blog Index' },
  { id: 'blog-article', path: '/blog/things-you-should-never-microwave/', name: 'Blog Article' },
  { id: 'material-index', path: '/material/', name: 'Material Hub' },
  { id: 'material-metal', path: '/material/metal/', name: 'Material Detail (Metal)' },
  { id: 'vertical-how-long', path: '/how-long/', name: 'Vertical (How Long)' },
  { id: 'vertical-refreeze', path: '/refreeze/', name: 'Vertical (Refreeze)' },
  { id: 'vertical-what-happens', path: '/what-happens/', name: 'Vertical (What Happens)' },
  { id: 'vertical-washing-machine', path: '/washing-machine/', name: 'Vertical (Washing Machine)' },
  { id: 'error-404', path: '/404.html', name: '404 Page' },
  { id: 'locale-es-dishwasher', path: '/es/dishwasher/', name: 'Locale ES (Dishwasher)' }
];

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
      }, 15000);
      this.callbacks.set(id, {
        resolve: (res) => { clearTimeout(timer); resolve(res); },
        reject: (err) => { clearTimeout(timer); reject(err); }
      });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function run() {
  const chromePath = getChromePath();
  const userDataDir = path.resolve(__dirname, '../.chrome-audit-profile');

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9224',
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

  let wsUrl = null;
  for (let i = 0; i < 30; i++) {
    await sleep(500);
    try {
      const list = await requestJson('http://127.0.0.1:9224/json/list');
      if (list && list.length > 0 && list[0].webSocketDebuggerUrl) {
        wsUrl = list[0].webSocketDebuggerUrl;
        break;
      }
    } catch {}
  }

  if (!wsUrl) {
    chromeProc.kill();
    throw new Error('Chrome remote debug connection failed');
  }

  const client = new CDPClient(wsUrl);
  await client.connect();
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('DOM.enable');

  const fullReport = {
    generatedAt: new Date().toISOString(),
    templatesAudited: TEMPLATES.length,
    viewportsAudited: VIEWPORTS.length,
    results: [],
    issues: []
  };

  console.log(`Starting Full Visual UX Audit across ${TEMPLATES.length} templates and ${VIEWPORTS.length} viewports...`);

  // Selected key viewports for visual matrix to keep screenshot count manageable and focused
  const KEY_VIEWPORT_IDS = [
    'mobile-320', 'mobile-360', 'mobile-375-short', 'mobile-375-tall', 'mobile-390', 'mobile-430',
    'tablet-768-port', 'tablet-1024-land',
    'desktop-1280', 'desktop-1366', 'desktop-1440', 'desktop-1680', 'desktop-1920', 'desktop-2560'
  ];
  const keyViewports = VIEWPORTS.filter(v => KEY_VIEWPORT_IDS.includes(v.id));

  for (const tmpl of TEMPLATES) {
    console.log(`\n======================================================`);
    console.log(`Auditing Template: ${tmpl.name} (${tmpl.path})`);
    console.log(`======================================================`);

    const pageUrl = `http://127.0.0.1:4321${tmpl.path}`;
    await client.send('Page.navigate', { url: pageUrl });
    await sleep(800);

    for (const vp of keyViewports) {
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.isMobile
      });
      await sleep(300);

      // Deep layout & visual evaluation in page context
      const evalRes = await client.send('Runtime.evaluate', {
        expression: `
          (function() {
            const winW = window.innerWidth;
            const winH = window.innerHeight;
            const report = {
              viewport: { width: winW, height: winH },
              overflowElements: [],
              smallTouchTargets: [],
              excessiveLineLengths: [],
              overlappingInteractive: [],
              lowContrastElements: [],
              accessibilityIssues: []
            };

            // 1. Elements clipped/overflowing right viewport boundary
            document.querySelectorAll('header, nav, main, footer, section, div, h1, h2, h3, p, a, button, input').forEach(el => {
              const r = el.getBoundingClientRect();
              const s = window.getComputedStyle(el);
              if (s.display === 'none' || s.visibility === 'hidden' || r.width === 0 || r.height === 0) return;
              if (el.closest('#mobile-menu.hidden') || el.closest('#cookie-consent-banner.hidden')) return;

              if (r.right > winW + 2) {
                // Check if it has an ancestor with overflow-x: auto (scrollable tables/lists)
                let parent = el.parentElement;
                let isScrollable = false;
                while (parent && parent !== document.body) {
                  const ps = window.getComputedStyle(parent);
                  if (ps.overflowX === 'auto' || ps.overflowX === 'scroll') {
                    isScrollable = true;
                    break;
                  }
                  parent = parent.parentElement;
                }
                if (!isScrollable) {
                  report.overflowElements.push({
                    tag: el.tagName.toLowerCase(),
                    id: el.id || null,
                    class: (el.className || '').toString().substring(0, 70),
                    right: Math.round(r.right),
                    overflowPx: Math.round(r.right - winW),
                    text: (el.innerText || el.getAttribute('aria-label') || '').trim().substring(0, 30)
                  });
                }
              }
            });
            report.overflowElements = report.overflowElements.slice(0, 5);

            // 2. Touch targets < 44px
            if (winW < 1024) {
              document.querySelectorAll('a, button, input[type="text"], input[type="submit"], summary').forEach(el => {
                if (el.closest('#mobile-menu.hidden') || el.closest('#cookie-consent-banner.hidden')) return;
                const r = el.getBoundingClientRect();
                const s = window.getComputedStyle(el);
                if (s.display === 'none' || s.visibility === 'hidden' || r.width === 0 || r.height === 0) return;
                // Ignore standard inline link inside body paragraphs unless styled as badge/button
                if (el.tagName === 'A' && el.parentElement && /^(P|LI)$/.test(el.parentElement.tagName) && !el.className.includes('btn') && !el.className.includes('badge') && !el.className.includes('rounded')) {
                  return;
                }
                if (r.width < 43.5 || r.height < 43.5) {
                  report.smallTouchTargets.push({
                    tag: el.tagName.toLowerCase(),
                    id: el.id || null,
                    class: (el.className || '').toString().substring(0, 60),
                    width: Math.round(r.width),
                    height: Math.round(r.height),
                    text: (el.innerText || el.getAttribute('aria-label') || '').trim().substring(0, 35)
                  });
                }
              });
              report.smallTouchTargets = report.smallTouchTargets.slice(0, 10);
            }

            // 3. Desktop line length > 90 characters
            if (winW >= 1280) {
              document.querySelectorAll('main p').forEach(p => {
                const s = window.getComputedStyle(p);
                if (s.display === 'none' || s.visibility === 'hidden') return;
                const r = p.getBoundingClientRect();
                const text = p.innerText.trim();
                if (text.length > 100 && r.width > 850) {
                  report.excessiveLineLengths.push({
                    width: Math.round(r.width),
                    charCount: text.length,
                    sample: text.substring(0, 60) + '...'
                  });
                }
              });
              report.excessiveLineLengths = report.excessiveLineLengths.slice(0, 3);
            }

            // 4. Color contrast checks on signature cards
            document.querySelectorAll('.bg-signature-forest, .bg-signature-coral, .bg-error-bg').forEach(card => {
              const cs = window.getComputedStyle(card);
              card.querySelectorAll('span, p, strong, h3').forEach(child => {
                const childStyle = window.getComputedStyle(child);
                const color = childStyle.color;
                // Check if color is dark charcoal inside dark background
                if (color.includes('rgb(18, 22, 31)') || color.includes('rgb(24, 29, 38)') || color.includes('rgb(51, 56, 64)')) {
                  report.lowContrastElements.push({
                    cardClass: card.className.substring(0, 40),
                    element: child.tagName.toLowerCase(),
                    text: child.innerText.substring(0, 35),
                    computedColor: color
                  });
                }
              });
            });

            return report;
          })()
        `,
        returnByValue: true
      });

      const auditData = evalRes.result.value;

      // Capture Above-the-fold screenshot
      const atfShot = await client.send('Page.captureScreenshot', {
        format: 'png',
        clip: {
          x: 0,
          y: 0,
          width: vp.width,
          height: Math.min(vp.height, 900),
          scale: 1
        }
      });

      const atfFilename = `${tmpl.id}-${vp.id}-atf.png`;
      fs.writeFileSync(path.join(OUT_DIR, atfFilename), Buffer.from(atfShot.data, 'base64'));

      // If key desktop/mobile, also capture full page
      let fullFilename = null;
      if (['mobile-375-short', 'desktop-1366'].includes(vp.id)) {
        const layoutMetrics = await client.send('Page.getLayoutMetrics');
        const contentHeight = Math.min(Math.round(layoutMetrics.contentSize?.height || 2000), 5000);
        const fullShot = await client.send('Page.captureScreenshot', {
          format: 'png',
          clip: {
            x: 0,
            y: 0,
            width: vp.width,
            height: contentHeight,
            scale: 1
          }
        });
        fullFilename = `${tmpl.id}-${vp.id}-full.png`;
        fs.writeFileSync(path.join(OUT_DIR, fullFilename), Buffer.from(fullShot.data, 'base64'));
      }

      fullReport.results.push({
        template: tmpl.id,
        templateName: tmpl.name,
        viewport: vp.id,
        width: vp.width,
        height: vp.height,
        atfScreenshot: atfFilename,
        fullScreenshot: fullFilename,
        data: auditData
      });

      const issuesCount = auditData.overflowElements.length + auditData.smallTouchTargets.length + auditData.lowContrastElements.length;
      if (issuesCount > 0) {
        console.log(`  ⚠️ [${vp.id}]: Overflow=${auditData.overflowElements.length} | SmallTouch=${auditData.smallTouchTargets.length} | LowContrast=${auditData.lowContrastElements.length}`);
      } else {
        console.log(`  ✓ [${vp.id}]: Clean layout`);
      }
    }
  }

  // TEST INTERACTIVE STATES
  console.log(`\n======================================================`);
  console.log(`Auditing Interactive States (Mobile Menu, Search, Banner, More Menu)`);
  console.log(`======================================================`);

  // State 1: Mobile Menu Open at 375px
  await client.send('Emulation.setDeviceMetricsOverride', { width: 375, height: 667, deviceScaleFactor: 1, mobile: true });
  await client.send('Page.navigate', { url: 'http://127.0.0.1:4321/' });
  await sleep(600);
  await client.send('Runtime.evaluate', {
    expression: `document.getElementById('mobile-menu-toggle')?.click();`
  });
  await sleep(400);
  const menuShot = await client.send('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 375, height: 667, scale: 1 }
  });
  fs.writeFileSync(path.join(OUT_DIR, 'interactive-mobile-menu-open.png'), Buffer.from(menuShot.data, 'base64'));
  console.log(`  ✓ Captured: interactive-mobile-menu-open.png`);

  // State 2: Search input focused with datalist options
  await client.send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
  await client.send('Page.navigate', { url: 'http://127.0.0.1:4321/' });
  await sleep(600);
  await client.send('Runtime.evaluate', {
    expression: `
      const input = document.getElementById('global-search-input');
      if (input) {
        input.focus();
        input.value = 'foil';
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    `
  });
  await sleep(500);
  const searchShot = await client.send('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 1366, height: 400, scale: 1 }
  });
  fs.writeFileSync(path.join(OUT_DIR, 'interactive-search-focused.png'), Buffer.from(searchShot.data, 'base64'));
  console.log(`  ✓ Captured: interactive-search-focused.png`);

  // State 3: Cookie Banner visible above-the-fold
  await client.send('Emulation.setDeviceMetricsOverride', { width: 375, height: 667, deviceScaleFactor: 1, mobile: true });
  await client.send('Runtime.evaluate', {
    expression: `
      localStorage.removeItem('cookie-consent');
      const b = document.getElementById('cookie-consent-banner');
      if (b) {
        b.classList.remove('hidden');
        b.classList.remove('translate-y-4', 'opacity-0');
        b.classList.add('translate-y-0', 'opacity-100');
      }
    `
  });
  await sleep(300);
  const bannerShot = await client.send('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 375, height: 667, scale: 1 }
  });
  fs.writeFileSync(path.join(OUT_DIR, 'interactive-cookie-banner-mobile.png'), Buffer.from(bannerShot.data, 'base64'));
  console.log(`  ✓ Captured: interactive-cookie-banner-mobile.png`);

  // State 4: Desktop More Menu Open at 1366px
  await client.send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });
  await client.send('Page.navigate', { url: 'http://127.0.0.1:4321/' });
  await sleep(600);
  await client.send('Runtime.evaluate', {
    expression: `
      const dropdown = document.querySelector('#desktop-more-menu > div');
      if (dropdown) dropdown.classList.remove('hidden');
    `
  });
  await sleep(300);
  const moreMenuShot = await client.send('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 1366, height: 350, scale: 1 }
  });
  fs.writeFileSync(path.join(OUT_DIR, 'interactive-desktop-more-menu-open.png'), Buffer.from(moreMenuShot.data, 'base64'));
  console.log(`  ✓ Captured: interactive-desktop-more-menu-open.png`);

  // State 5: Item Detail Page with FAQs expanded at 375px
  await client.send('Emulation.setDeviceMetricsOverride', { width: 375, height: 800, deviceScaleFactor: 1, mobile: true });
  await client.send('Page.navigate', { url: 'http://127.0.0.1:4321/dishwasher/cast-iron-skillet/' });
  await sleep(800);
  await client.send('Runtime.evaluate', {
    expression: `
      document.querySelectorAll('details').forEach(d => d.open = true);
    `
  });
  await sleep(400);
  const faqShot = await client.send('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 400, width: 375, height: 800, scale: 1 }
  });
  fs.writeFileSync(path.join(OUT_DIR, 'interactive-item-faqs-expanded.png'), Buffer.from(faqShot.data, 'base64'));
  console.log(`  ✓ Captured: interactive-item-faqs-expanded.png`);

  client.close();
  chromeProc.kill();

  fs.writeFileSync(path.join(OUT_DIR, 'full-audit-report.json'), JSON.stringify(fullReport, null, 2), 'utf8');
  console.log(`\n🎉 Full Visual Audit complete! Report written to ${path.join(OUT_DIR, 'full-audit-report.json')}`);
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
