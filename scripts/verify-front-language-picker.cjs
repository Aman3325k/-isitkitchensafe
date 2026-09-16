const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const PORT = 9228;
const BASE_URL = 'https://isitkitchensafe.com';
const OUT_DIR = path.resolve(__dirname, '../qa-screenshots/language-front-verify-live');
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
      }, 15000);

      this.callbacks.set(id, {
        resolve: (val) => { clearTimeout(timer); resolve(val); },
        reject: (err) => { clearTimeout(timer); reject(err); }
      });

      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(`Eval error: ${res.exceptionDetails.text}`);
    }
    return res.result ? res.result.value : undefined;
  }

  async setViewport(width, height, isMobile = false) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 2,
      mobile: isMobile
    });
    await this.send('Emulation.setVisibleSize', { width, height });
  }

  async captureScreenshot(filename, clip = null) {
    const params = { format: 'png' };
    if (clip) params.clip = clip;
    const res = await this.send('Page.captureScreenshot', params);
    const buffer = Buffer.from(res.data, 'base64');
    fs.writeFileSync(path.join(OUT_DIR, filename), buffer);
  }

  async close() {
    if (this.ws) this.ws.close();
  }
}

async function run() {
  console.log('====================================================');
  console.log('🌐 CDP Verification: LanguagePicker in the Front Header');
  console.log('====================================================\n');

  const chromePath = getChromePath();
  const chromeProcess = spawn(chromePath, [
    `--remote-debugging-port=${PORT}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars'
  ]);

  await sleep(2000);

  try {
    const tabs = await requestJson(`http://127.0.0.1:${PORT}/json`);
    const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
    const cdp = new CDPClient(pageTab.webSocketDebuggerUrl);
    await cdp.connect();

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('DOM.enable');

    const widths = [320, 360, 375, 414, 768, 1280];
    for (const w of widths) {
      await cdp.setViewport(w, 800, w < 1024);
      await cdp.send('Page.navigate', { url: `${BASE_URL}/?v=${w}` });
      await sleep(600);

      const headerData = await cdp.eval(`(() => {
        const logo = document.getElementById('site-logo')?.getBoundingClientRect();
        const search = document.getElementById('global-search-input')?.getBoundingClientRect();
        const langBtn = document.querySelector('header [data-language-picker] [data-picker-button]')?.getBoundingClientRect();
        const themeBtn = document.getElementById('theme-toggle')?.getBoundingClientRect();
        const menuBtn = document.getElementById('mobile-menu-toggle')?.getBoundingClientRect();

        const docEl = document.documentElement;
        const scrollW = Math.max(docEl.scrollWidth, document.body.scrollWidth);
        const clientW = docEl.clientWidth;
        const overflow = scrollW > clientW;

        const langVisible = langBtn && langBtn.width > 0 && langBtn.height > 0;
        const menuVisible = menuBtn && menuBtn.width > 0 && menuBtn.height > 0;

        return {
          windowWidth: window.innerWidth,
          scrollW,
          clientW,
          overflow,
          logo: logo ? { width: Math.round(logo.width), height: Math.round(logo.height) } : null,
          search: search ? { width: Math.round(search.width), height: Math.round(search.height) } : null,
          lang: langBtn ? { width: Math.round(langBtn.width), height: Math.round(langBtn.height), left: Math.round(langBtn.left) } : null,
          theme: themeBtn ? { width: Math.round(themeBtn.width), height: Math.round(themeBtn.height) } : null,
          menu: menuBtn ? { width: Math.round(menuBtn.width), height: Math.round(menuBtn.height), right: Math.round(menuBtn.right), marginRight: Math.round(window.innerWidth - menuBtn.right) } : null,
          langVisible
        };
      })()`);

      console.log(`[Viewport ${w}px]:`);
      console.log(`  Overflow: ${headerData.overflow} (scrollW: ${headerData.scrollW}, clientW: ${headerData.clientW})`);
      console.log(`  LanguagePicker in Front: ${headerData.langVisible} (size: ${headerData.lang?.width}x${headerData.lang?.height}px)`);
      console.log(`  Search input width: ${headerData.search?.width}px`);
      console.log(`  Mobile Menu toggle right margin: ${headerData.menu?.marginRight}px (width: ${headerData.menu?.width}px)`);

      await cdp.captureScreenshot(`header-${w}px.png`, { x: 0, y: 0, width: w, height: 80, scale: 2 });

      // Test opening the language dropdown
      if (w <= 375 || w === 1280) {
        console.log(`  Opening Language Picker Dropdown at ${w}px...`);
        await cdp.eval(`document.querySelector('header [data-language-picker] [data-picker-button]').click()`);
        await sleep(300);

        const dropdownRect = await cdp.eval(`(() => {
          const dd = document.querySelector('header [data-language-picker] [data-picker-dropdown]');
          if (!dd) return null;
          const r = dd.getBoundingClientRect();
          const isVisible = !dd.classList.contains('hidden');
          const offScreenLeft = r.left < 0;
          const offScreenRight = r.right > window.innerWidth;
          const items = dd.querySelectorAll('a').length;
          return {
            isVisible,
            left: Math.round(r.left),
            right: Math.round(r.right),
            width: Math.round(r.width),
            items,
            offScreenLeft,
            offScreenRight
          };
        })()`);

        console.log(`  Dropdown: visible=${dropdownRect.isVisible}, width=${dropdownRect.width}px, items=${dropdownRect.items}, offLeft=${dropdownRect.offScreenLeft}, offRight=${dropdownRect.offScreenRight}`);
        await cdp.captureScreenshot(`header-dropdown-open-${w}px.png`, { x: 0, y: 0, width: w, height: 350, scale: 2 });

        // Close it again
        await cdp.eval(`document.querySelector('header [data-language-picker] [data-picker-button]').click()`);
        await sleep(200);
      }
      console.log('');
    }

    await cdp.close();
    chromeProcess.kill();
    console.log('✅ Language picker verification complete!');

  } catch (err) {
    console.error('❌ Verification failed:', err);
    chromeProcess.kill();
  }
}

run();
