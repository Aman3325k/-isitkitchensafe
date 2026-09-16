const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const WIDTHS = [320, 360, 375, 390, 414, 430, 640, 768, 834, 1024, 1200, 1280, 1366, 1440, 1536, 1680, 1920];
const OUT_DIR = path.resolve(__dirname, '../qa-screenshots/hamburger-diag');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
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
      }, 10000);
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
    '--remote-debugging-port=9223',
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
      const list = await requestJson('http://127.0.0.1:9223/json/list');
      if (list && list.length > 0 && list[0].webSocketDebuggerUrl) {
        wsUrl = list[0].webSocketDebuggerUrl;
        break;
      }
    } catch {}
  }

  if (!wsUrl) {
    chromeProc.kill();
    throw new Error('Chrome remote debug failed');
  }

  const client = new CDPClient(wsUrl);
  await client.connect();
  await client.send('Page.enable');
  await client.send('Runtime.enable');

  const pages = [
    { lang: 'en', url: 'http://127.0.0.1:4321/' },
    { lang: 'ja', url: 'http://127.0.0.1:4321/ja/' }
  ];

  const results = [];

  for (const page of pages) {
    await client.send('Page.navigate', { url: page.url });
    await sleep(1000);

    for (const w of WIDTHS) {
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: w,
        height: 800,
        deviceScaleFactor: 1,
        mobile: w < 1024
      });
      await sleep(250);

      const metrics = await client.send('Runtime.evaluate', {
        expression: `
          (function() {
            const header = document.querySelector('header');
            const logo = document.getElementById('site-logo');
            const search = document.getElementById('global-search-form');
            const searchInput = document.getElementById('global-search-input');
            const langPicker = document.querySelector('[data-language-picker]');
            const themeToggle = document.getElementById('theme-toggle');
            const mobileToggle = document.getElementById('mobile-menu-toggle');
            const desktopNav = document.getElementById('desktop-nav');
            const endGroup = themeToggle ? themeToggle.parentElement : null;

            function getInfo(el) {
              if (!el) return null;
              const r = el.getBoundingClientRect();
              const s = window.getComputedStyle(el);
              return {
                visible: s.display !== 'none' && s.visibility !== 'hidden',
                display: s.display,
                x: Math.round(r.x),
                y: Math.round(r.y),
                right: Math.round(r.right),
                width: Math.round(r.width),
                height: Math.round(r.height)
              };
            }

            return {
              windowWidth: window.innerWidth,
              header: getInfo(header),
              logo: getInfo(logo),
              search: getInfo(search),
              searchInput: getInfo(searchInput),
              langPicker: getInfo(langPicker),
              themeToggle: getInfo(themeToggle),
              mobileToggle: getInfo(mobileToggle),
              desktopNav: getInfo(desktopNav),
              endGroup: getInfo(endGroup),
              isClipped: mobileToggle ? (mobileToggle.getBoundingClientRect().right > window.innerWidth) : false,
              clipAmount: mobileToggle ? Math.max(0, Math.round(mobileToggle.getBoundingClientRect().right - window.innerWidth)) : 0
            };
          })()
        `,
        returnByValue: true
      });

      const res = metrics.result.value;

      // Capture screenshot of header (0 to 120px height)
      const shot = await client.send('Page.captureScreenshot', {
        format: 'png',
        clip: {
          x: 0,
          y: 0,
          width: w,
          height: 100,
          scale: 1
        }
      });

      const imgName = `header-${page.lang}-${w}px.png`;
      fs.writeFileSync(path.join(OUT_DIR, imgName), Buffer.from(shot.data, 'base64'));

      results.push({
        lang: page.lang,
        width: w,
        image: imgName,
        metrics: res
      });

      console.log(`[${page.lang}] ${w}px: MobileToggle visible=${res.mobileToggle?.visible} (w=${res.mobileToggle?.width}px, right=${res.mobileToggle?.right}px vs win=${w}px). Clipped=${res.isClipped} (${res.clipAmount}px). DesktopNav=${res.desktopNav?.visible}`);
    }
  }

  client.close();
  chromeProc.kill();

  fs.writeFileSync(path.join(OUT_DIR, 'results.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log('Done! Results written to:', path.join(OUT_DIR, 'results.json'));
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
