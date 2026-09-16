const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const PORT = 9226;
const PROD_URL = 'https://isitkitchensafe.com';
const OUT_DIR = path.resolve(__dirname, '../qa-screenshots/live-verification');
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

async function main() {
  console.log('====================================================');
  console.log('🌐 LIVE Post-Deployment Verification (https://isitkitchensafe.com)');
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

    console.log('1. Spot-checking Mobile Hamburger at 320px, 360px, 375px...');
    for (const w of [320, 360, 375]) {
      await cdp.setViewport(w, 800, true);
      await cdp.send('Page.navigate', { url: `${PROD_URL}/?v=live_post_deploy_${Date.now()}` });
      await sleep(1000);

      const btn = await cdp.eval(`(() => {
        const el = document.getElementById('mobile-menu-toggle');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { width: r.width, height: r.height, marginRight: window.innerWidth - r.right };
      })()`);
      console.log(`  Width ${w}px: toggle size=${btn?.width}x${btn?.height}px, right margin=${btn?.marginRight}px`);
      await cdp.captureScreenshot(`live-hamburger-${w}px.png`, { x: 0, y: 0, width: w, height: 120, scale: 2 });
    }

    console.log('\n2. Checking 1280px-1679px Desktop Nav Dropdown...');
    await cdp.setViewport(1366, 768, false);
    await cdp.send('Page.navigate', { url: `${PROD_URL}/?v=live_post_deploy_nav` });
    await sleep(1000);
    const navDropdowns = await cdp.eval(`(() => {
      const triggers = document.querySelectorAll('button[aria-expanded], [data-dropdown-trigger]');
      return Array.from(triggers).map(t => t.textContent.trim()).filter(Boolean);
    })()`);
    console.log(`  Found dropdown triggers at 1366px:`, navDropdowns);
    await cdp.captureScreenshot(`live-nav-1366px.png`, { x: 0, y: 0, width: 1366, height: 120, scale: 2 });

    console.log('\n3. Checking Live Custom Search Combobox (L2)...');
    await cdp.eval(`(() => {
      const input = document.getElementById('global-search-input');
      if (input) {
        input.focus();
        input.value = 'hydro';
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    })()`);
    await sleep(1200);

    const liveDropdown = await cdp.eval(`(() => {
      const dd = document.getElementById('global-search-dropdown');
      if (!dd) return { exists: false };
      return {
        exists: true,
        visible: !dd.classList.contains('hidden'),
        options: dd.querySelectorAll('[role="option"]').length
      };
    })()`);
    console.log(`  Live Search Dropdown exists: ${liveDropdown.exists}, visible: ${liveDropdown.visible}, options: ${liveDropdown.options}`);

    console.log('\n4. Checking Live Breadcrumb Touch Targets (M1, L1)...');
    await cdp.setViewport(375, 800, true);
    await cdp.send('Page.navigate', { url: `${PROD_URL}/dishwasher/hydroflask/?v=live_post_deploy` });
    await sleep(1000);
    const breadcrumbs = await cdp.eval(`(() => {
      const links = document.querySelectorAll('nav[aria-label="Breadcrumb"] a');
      return Array.from(links).map(a => {
        const r = a.getBoundingClientRect();
        return { text: a.textContent.trim(), height: Math.round(r.height) };
      });
    })()`);
    console.log(`  Live Breadcrumbs:`, breadcrumbs);

    console.log('\n5. Console Errors Logged:');
    if (cdp.consoleErrors.length === 0) {
      console.log('  ✓ 0 console errors detected across live sessions!');
    } else {
      console.log(`  ❌ Console errors:`, cdp.consoleErrors);
    }

    await cdp.close();
    chromeProcess.kill();
    console.log('\n✅ Live post-deploy verification complete!');

  } catch (err) {
    console.error('❌ Live post-deploy verification failed:', err);
    chromeProcess.kill();
  }
}

main();
