const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const PORT = 9227;
const PROD_URL = 'https://isitkitchensafe.com';
const OUT_DIR = path.resolve(__dirname, '../qa-screenshots/final-cross-cutting');
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
    this.consoleErrors = [];
    this.networkRequests = [];
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = err => reject(err);
      this.ws.onmessage = msg => {
        const payload = JSON.parse(msg.data);
        if (payload.method === 'Runtime.exceptionThrown') {
          this.consoleErrors.push(payload.params.exceptionDetails?.text || 'Unknown exception');
        }
        if (payload.method === 'Log.entryAdded' && payload.params.entry?.level === 'error') {
          this.consoleErrors.push(payload.params.entry.text);
        }
        if (payload.method === 'Network.requestWillBeSent') {
          this.networkRequests.push(payload.params.request.url);
        }
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
  console.log('========================================================================');
  console.log('🔬 2.4 & 2.5 CROSS-CUTTING REGRESSION & CONSOLE AUDIT (CDP)');
  console.log('========================================================================\n');

  const chromePath = getChromePath();
  const chromeProcess = spawn(chromePath, [
    `--remote-debugging-port=${PORT}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars'
  ]);

  await sleep(2000);

  const report = {
    consoleErrorsByTemplate: [],
    viewportChecks: [],
    searchCombobox: null,
    cookieBanner: null
  };

  try {
    const tabs = await requestJson(`http://127.0.0.1:${PORT}/json`);
    const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
    const cdp = new CDPClient(pageTab.webSocketDebuggerUrl);
    await cdp.connect();

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('DOM.enable');
    await cdp.send('Network.enable');

    // 1. Check Console Errors across all 11 major templates (EN + Non-English)
    console.log('--- 1. Testing Console Errors Across 10 Templates (EN & JA/ES) ---');
    const templates = [
      { name: 'Homepage (EN)', path: '/' },
      { name: 'Homepage (JA)', path: '/ja/' },
      { name: 'Item Detail (EN)', path: '/dishwasher/hydroflask/' },
      { name: 'Item Detail (JA)', path: '/ja/dishwasher/hydroflask/' },
      { name: 'Category Hub (EN)', path: '/dishwasher/' },
      { name: 'Material Hub (EN)', path: '/material/silicone/' },
      { name: 'Compare Detail (EN)', path: '/compare/microwave-vs-oven-reheating-pizza/' },
      { name: 'Blog Article (EN)', path: '/blog/things-you-should-never-microwave/' },
      { name: 'How Long (EN)', path: '/how-long/cooked-chicken-in-fridge/' },
      { name: 'Washing Machine (EN)', path: '/washing-machine/sneakers/' }
    ];

    for (const t of templates) {
      cdp.consoleErrors.length = 0;
      await cdp.send('Page.navigate', { url: `${PROD_URL}${t.path}?v=console_check_${Date.now()}` });
      await sleep(1000);
      const errors = [...cdp.consoleErrors];
      const pass = errors.length === 0;
      console.log(`  ${t.name} (${t.path}): ${errors.length} console errors -> ${pass ? '✓ PASS' : '❌ ' + errors.join('; ')}`);
      report.consoleErrorsByTemplate.push({ name: t.name, path: t.path, errors, pass });
    }

    // 2. Viewport Checks (320px, 768px, 1366px, 1920px) on Homepage, Item Detail, Category Hub
    console.log('\n--- 2. Multi-Viewport Responsive & Overflow Verification ---');
    const viewports = [
      { width: 320, height: 800, isMobile: true, name: '320px' },
      { width: 768, height: 1024, isMobile: true, name: '768px' },
      { width: 1366, height: 768, isMobile: false, name: '1366px' },
      { width: 1920, height: 1080, isMobile: false, name: '1920px' }
    ];

    const vpPages = [
      { name: 'Homepage', path: '/' },
      { name: 'Item Detail', path: '/dishwasher/hydroflask/' },
      { name: 'Category Hub', path: '/dishwasher/' }
    ];

    for (const vp of viewports) {
      await cdp.setViewport(vp.width, vp.height, vp.isMobile);
      for (const page of vpPages) {
        await cdp.send('Page.navigate', { url: `${PROD_URL}${page.path}?v=vp_${vp.name}` });
        await sleep(600);

        const geom = await cdp.eval(`(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollW = Math.max(docEl.scrollWidth, body.scrollWidth);
          const clientW = docEl.clientWidth;
          const overflow = scrollW > clientW;
          
          let hamburgerRightMargin = null;
          const btn = document.getElementById('mobile-menu-toggle');
          if (btn && btn.offsetWidth > 0) {
            hamburgerRightMargin = window.innerWidth - btn.getBoundingClientRect().right;
          }

          let moreDropdownVisible = false;
          const moreTrigger = document.querySelector('[data-dropdown-trigger], button:has(+ div)');
          return { scrollW, clientW, overflow, hamburgerRightMargin };
        })()`);

        const overflowPass = !geom.overflow;
        console.log(`  [${vp.name}] ${page.name}: scrollW=${geom.scrollW}, clientW=${geom.clientW} (Overflow: ${geom.overflow}) | Toggle right margin: ${geom.hamburgerRightMargin !== null ? geom.hamburgerRightMargin + 'px' : 'N/A'}`);
        report.viewportChecks.push({ viewport: vp.name, page: page.name, ...geom, pass: overflowPass });
        await cdp.captureScreenshot(`vp-${vp.name}-${page.name}.png`);
      }
    }

    // 3. Search Combobox in Dark Mode
    console.log('\n--- 3. Search Combobox Interaction in Dark Mode ---');
    await cdp.setViewport(1280, 800, false);
    await cdp.send('Page.navigate', { url: `${PROD_URL}/?v=combobox_test` });
    await sleep(600);

    // Switch to dark mode
    await cdp.eval(`document.documentElement.classList.add('dark')`);
    await sleep(300);

    cdp.networkRequests.length = 0;
    // Type into global search input
    await cdp.eval(`(() => {
      const input = document.getElementById('global-search-input');
      input.focus();
      input.value = 'cast';
      input.dispatchEvent(new Event('input', { bubbles: true }));
    })()`);
    await sleep(1000);

    const comboboxData = await cdp.eval(`(() => {
      const dd = document.getElementById('global-search-dropdown');
      if (!dd) return { exists: false };
      const style = window.getComputedStyle(dd);
      const options = dd.querySelectorAll('[role=\"option\"]');
      return {
        exists: true,
        visible: !dd.classList.contains('hidden'),
        optionsCount: options.length,
        firstOption: options[0] ? options[0].textContent.trim().replace(/\\s+/g, ' ') : null,
        bgColor: style.backgroundColor,
        color: style.color,
        isWhiteBox: style.backgroundColor === 'rgb(255, 255, 255)' || style.backgroundColor === '#ffffff'
      };
    })()`);

    const hasLoadedIndex = cdp.networkRequests.some(u => u.includes('search-index.json'));
    console.log(`  Search index fetched on interaction: ${hasLoadedIndex}`);
    console.log(`  Combobox: visible=${comboboxData.visible}, options=${comboboxData.optionsCount}, first="${comboboxData.firstOption}"`);
    console.log(`  Background: ${comboboxData.bgColor}, Text: ${comboboxData.color}, Stark White: ${comboboxData.isWhiteBox}`);
    report.searchCombobox = { ...comboboxData, lazyLoaded: hasLoadedIndex, pass: comboboxData.visible && !comboboxData.isWhiteBox };
    await cdp.captureScreenshot('search-combobox-dark-live.png');

    // 4. Cookie Banner Interaction & Gating
    console.log('\n--- 4. Cookie Banner Interaction & Stacking ---');
    await cdp.setViewport(375, 667, true);
    await cdp.eval(`(() => {
      localStorage.removeItem('cookie-consent');
      window.location.reload();
    })()`);
    await sleep(1000);

    const cookieState = await cdp.eval(`(() => {
      const banner = document.getElementById('cookie-consent-banner');
      const menu = document.getElementById('mobile-menu');
      const toggle = document.getElementById('mobile-menu-toggle');
      if (toggle) toggle.click();
      const menuZ = parseInt(window.getComputedStyle(menu).zIndex) || 0;
      const bannerZ = parseInt(window.getComputedStyle(banner).zIndex) || 0;
      return {
        bannerExists: !!banner,
        menuZ,
        bannerZ,
        menuAboveBanner: menuZ > bannerZ
      };
    })()`);
    console.log(`  Cookie Banner exists: ${cookieState.bannerExists}`);
    console.log(`  Mobile Menu Z-index (${cookieState.menuZ}) > Cookie Banner Z-index (${cookieState.bannerZ}): ${cookieState.menuAboveBanner}`);
    report.cookieBanner = { ...cookieState, pass: cookieState.menuAboveBanner };
    await cdp.captureScreenshot('cookie-menu-stacking-live.png');

    await cdp.close();
    chromeProcess.kill();

    fs.writeFileSync(path.join(OUT_DIR, 'cross-cutting-report.json'), JSON.stringify(report, null, 2), 'utf8');
    console.log('\n✅ Cross-cutting regression audit complete!');

  } catch (err) {
    console.error('❌ Error during cross-cutting check:', err);
    chromeProcess.kill();
  }
}

run();
