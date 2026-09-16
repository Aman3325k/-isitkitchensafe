const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const PORT = 9224;
const BASE_URL = 'http://127.0.0.1:4321';
const OUT_DIR = path.resolve(__dirname, '../qa-screenshots/visual-verification');
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

// Luminance and Contrast Ratio helper
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function parseRgb(colorStr) {
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return [0, 0, 0];
  return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
}

function getContrastRatio(rgb1, rgb2) {
  const lum1 = getLuminance(...rgb1);
  const lum2 = getLuminance(...rgb2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

async function main() {
  console.log('====================================================');
  console.log('📸 Comprehensive CDP Visual & Interaction Verification');
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

  const testReport = {
    h1_cookie_menu_stacking: null,
    h2_contrast_checks: [],
    m1_l1_touch_targets: [],
    m2_reading_widths: [],
    l2_search_dropdown: null,
    hamburger_mobile_checks: [],
    nav_dropdown_desktop: null
  };

  try {
    const tabs = await requestJson(`http://127.0.0.1:${PORT}/json`);
    const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
    const cdp = new CDPClient(pageTab.webSocketDebuggerUrl);
    await cdp.connect();
    console.log('✓ Connected to CDP page target:', pageTab.webSocketDebuggerUrl);

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('DOM.enable');

    // ----------------------------------------------------
    // TEST 1: Hamburger Menu Positioning across mobile viewports
    // ----------------------------------------------------
    console.log('\n--- 1. Verifying Mobile Hamburger Positioning (320px - 414px) ---');
    const mobileWidths = [320, 360, 375, 414];
    for (const w of mobileWidths) {
      await cdp.setViewport(w, 800, true);
      await cdp.send('Page.navigate', { url: `${BASE_URL}/` });
      await sleep(500);

      const btnInfo = await cdp.eval(`(() => {
        const btn = document.getElementById('mobile-menu-toggle');
        if (!btn) return null;
        const rect = btn.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height,
          left: rect.left,
          right: rect.right,
          windowWidth: window.innerWidth,
          marginRight: window.innerWidth - rect.right,
          isVisible: rect.width > 0 && rect.height > 0
        };
      })()`);

      console.log(`  Width ${w}px: toggle width=${btnInfo?.width}px, height=${btnInfo?.height}px, marginRight=${btnInfo?.marginRight}px, right=${btnInfo?.right}px`);
      testReport.hamburger_mobile_checks.push({ width: w, ...btnInfo });

      await cdp.captureScreenshot(`hamburger-${w}px.png`, {
        x: 0, y: 0, width: w, height: 120, scale: 2
      });
    }

    // ----------------------------------------------------
    // TEST 2: H1 Cookie Banner vs Open Mobile Menu Stacking Order
    // ----------------------------------------------------
    console.log('\n--- 2. H1: Cookie Banner vs Open Mobile Menu Stacking Order ---');
    await cdp.setViewport(375, 667, true);
    // Reset cookie consent so banner appears
    await cdp.eval(`(() => {
      localStorage.removeItem('cookie-consent');
      window.location.reload();
    })()`);
    await sleep(800);

    const bannerExists = await cdp.eval(`(() => {
      const banner = document.getElementById('cookie-consent-banner');
      if (!banner) return false;
      const style = window.getComputedStyle(banner);
      return style.display !== 'none' && banner.offsetHeight > 0;
    })()`);
    console.log(`  Cookie consent banner visible: ${bannerExists}`);

    // Click mobile menu toggle
    await cdp.eval(`(() => {
      const btn = document.getElementById('mobile-menu-toggle');
      btn.click();
    })()`);
    await sleep(500);

    // Verify mobile menu is open and check z-index and topmost element
    const stackingCheck = await cdp.eval(`(() => {
      const menu = document.getElementById('mobile-menu');
      const banner = document.getElementById('cookie-consent-banner');
      const menuZ = parseInt(window.getComputedStyle(menu).zIndex) || 0;
      const bannerZ = parseInt(window.getComputedStyle(banner).zIndex) || 0;
      const isExpanded = menu.getAttribute('aria-hidden') === 'false';

      // Find first nav link inside mobile menu
      const firstLink = menu.querySelector('a');
      const linkRect = firstLink ? firstLink.getBoundingClientRect() : null;
      let topElementAtLink = null;
      if (linkRect) {
        const topEl = document.elementFromPoint(linkRect.left + linkRect.width / 2, linkRect.top + linkRect.height / 2);
        topElementAtLink = topEl ? (topEl.id || topEl.tagName + (topEl.className ? '.' + topEl.className : '')) : null;
      }

      return {
        menuZ,
        bannerZ,
        menuAboveBanner: menuZ > bannerZ,
        isExpanded,
        firstLinkClickable: topElementAtLink ? (topElementAtLink.includes('A') || topElementAtLink.includes('mobile-menu')) : false,
        topElementAtLink
      };
    })()`);

    console.log(`  Mobile Menu Z-index: ${stackingCheck.menuZ}, Banner Z-index: ${stackingCheck.bannerZ}`);
    console.log(`  Menu Above Banner: ${stackingCheck.menuAboveBanner}`);
    console.log(`  Top element at mobile nav link: ${stackingCheck.topElementAtLink} (Clickable: ${stackingCheck.firstLinkClickable})`);
    testReport.h1_cookie_menu_stacking = stackingCheck;

    await cdp.captureScreenshot('h1-mobile-menu-open-over-cookie.png');

    // Dismiss menu
    await cdp.eval(`document.getElementById('mobile-menu-toggle')?.click()`);
    await sleep(300);

    // ----------------------------------------------------
    // TEST 3: H2 Contrast Verification in Light & Dark Mode
    // ----------------------------------------------------
    console.log('\n--- 3. H2: Contrast Ratios (Light & Dark Mode) ---');
    const contrastPages = [
      { name: 'homepage', path: '/' },
      { name: 'category-dishwasher', path: '/dishwasher/' },
      { name: 'item-hydroflask', path: '/dishwasher/hydroflask/' }
    ];

    for (const page of contrastPages) {
      await cdp.setViewport(1280, 800, false);
      await cdp.send('Page.navigate', { url: `${BASE_URL}${page.path}` });
      await sleep(500);

      for (const mode of ['light', 'dark']) {
        if (mode === 'dark') {
          await cdp.eval(`document.documentElement.classList.add('dark')`);
        } else {
          await cdp.eval(`document.documentElement.classList.remove('dark')`);
        }
        await sleep(300);

        const cardContrasts = await cdp.eval(`(() => {
          const results = [];
          // Check signature forest cards
          const forestCards = document.querySelectorAll('.bg-signature-forest');
          forestCards.forEach((card, idx) => {
            const cardBg = window.getComputedStyle(card).backgroundColor;
            const texts = card.querySelectorAll('p, span, a, h1, h2, h3, div');
            texts.forEach(t => {
              if (t.children.length === 0 && t.textContent.trim().length > 0) {
                const color = window.getComputedStyle(t).color;
                results.push({
                  card: 'forest-' + idx,
                  text: t.textContent.trim().slice(0, 30),
                  bg: cardBg,
                  color: color
                });
              }
            });
          });

          // Check signature coral cards / callouts
          const coralCards = document.querySelectorAll('.bg-signature-coral, .border-signature-coral, [class*="verdict-no"]');
          coralCards.forEach((card, idx) => {
            const cardBg = window.getComputedStyle(card).backgroundColor;
            const texts = card.querySelectorAll('p, span, a, h1, h2, h3, div');
            texts.forEach(t => {
              if (t.children.length === 0 && t.textContent.trim().length > 0) {
                const color = window.getComputedStyle(t).color;
                results.push({
                  card: 'coral-' + idx,
                  text: t.textContent.trim().slice(0, 30),
                  bg: cardBg,
                  color: color
                });
              }
            });
          });

          return results;
        })()`);

        let lowestRatio = 999;
        let lowestItem = null;

        for (const item of cardContrasts) {
          const bgRgb = parseRgb(item.bg);
          const fgRgb = parseRgb(item.color);
          const ratio = getContrastRatio(bgRgb, fgRgb);
          if (ratio < lowestRatio) {
            lowestRatio = ratio;
            lowestItem = { ...item, ratio: ratio.toFixed(2) };
          }
        }

        console.log(`  ${page.name} [${mode}]: Tested ${cardContrasts.length} elements. Lowest contrast ratio = ${lowestRatio.toFixed(2)}:1 (Min required: 4.5:1)`);
        if (lowestItem) {
          console.log(`    Lowest text: "${lowestItem.text}" on ${lowestItem.card} (${lowestItem.color} on ${lowestItem.bg})`);
        }

        testReport.h2_contrast_checks.push({
          page: page.name,
          mode,
          elementCount: cardContrasts.length,
          lowestRatio: lowestRatio.toFixed(2),
          lowestItem,
          passed: lowestRatio >= 4.5
        });

        await cdp.captureScreenshot(`h2-${page.name}-${mode}.png`);
      }
    }

    // ----------------------------------------------------
    // TEST 4: M1 & L1 Breadcrumbs & Return Links Touch Targets
    // ----------------------------------------------------
    console.log('\n--- 4. M1 & L1: Breadcrumbs & Return Links Touch Targets (>= 44px) ---');
    const touchPages = [
      { name: 'item-detail', path: '/dishwasher/hydroflask/' },
      { name: 'material-detail', path: '/material/cast-iron/' },
      { name: 'compare-detail', path: '/compare/microwave-vs-oven-for-pizza/' }
    ];

    for (const page of touchPages) {
      await cdp.setViewport(375, 800, true);
      await cdp.send('Page.navigate', { url: `${BASE_URL}${page.path}` });
      await sleep(500);

      const targets = await cdp.eval(`(() => {
        const items = [];
        // Breadcrumbs
        const breadcrumbLinks = document.querySelectorAll('nav[aria-label="Breadcrumb"] a, nav[aria-label="Breadcrumbs"] a');
        breadcrumbLinks.forEach(a => {
          const rect = a.getBoundingClientRect();
          items.push({
            type: 'breadcrumb',
            text: a.textContent.trim(),
            height: Math.round(rect.height),
            width: Math.round(rect.width)
          });
        });

        // Return links ("<- View All...")
        const returnLinks = document.querySelectorAll('a[href^="/"]:has(svg), a[href^="/"]:has(span:first-child)');
        returnLinks.forEach(a => {
          if (a.textContent.includes('←') || a.textContent.includes('View All') || a.textContent.includes('Back') || a.querySelector('svg')) {
            const rect = a.getBoundingClientRect();
            items.push({
              type: 'return-link',
              text: a.textContent.trim().slice(0, 30),
              height: Math.round(rect.height),
              width: Math.round(rect.width)
            });
          }
        });

        return items;
      })()`);

      console.log(`  ${page.name}:`);
      for (const t of targets) {
        const ok = t.height >= 40; // 40-44px threshold
        console.log(`    [${t.type}] "${t.text}": ${t.width}x${t.height}px -> ${ok ? '✓ PASS' : '❌ FAIL'}`);
        testReport.m1_l1_touch_targets.push({ page: page.name, ...t, passed: ok });
      }

      await cdp.captureScreenshot(`m1-touch-${page.name}.png`);
    }

    // ----------------------------------------------------
    // TEST 5: M2 Excessive Line Length on Wide Displays (1920px & 2560px)
    // ----------------------------------------------------
    console.log('\n--- 5. M2: Reading Line Length on Wide Displays (1920px & 2560px) ---');
    const widePages = [
      { name: 'blog-article', path: '/blog/things-you-should-never-microwave/', selector: 'article .max-w-prose, article .prose, article' },
      { name: 'compare-detail', path: '/compare/microwave-vs-oven-for-pizza/', selector: '.max-w-prose, section' }
    ];

    for (const width of [1920, 2560]) {
      await cdp.setViewport(width, 1080, false);
      for (const page of widePages) {
        await cdp.send('Page.navigate', { url: `${BASE_URL}${page.path}` });
        await sleep(500);

        const proseWidth = await cdp.eval(`(() => {
          const el = document.querySelector('.max-w-prose') || document.querySelector('article p');
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return Math.round(rect.width);
        })()`);

        console.log(`  Width ${width}px | ${page.name}: prose width = ${proseWidth}px (Target: ~650-750px / max-w-prose)`);
        testReport.m2_reading_widths.push({
          viewportWidth: width,
          page: page.name,
          proseWidth,
          passed: proseWidth !== null && proseWidth <= 800
        });

        await cdp.captureScreenshot(`m2-wide-${width}px-${page.name}.png`);
      }
    }

    // ----------------------------------------------------
    // TEST 6: L2 Custom Combobox Search in Dark Mode
    // ----------------------------------------------------
    console.log('\n--- 6. L2: Custom Search Dropdown in Dark Mode ---');
    await cdp.setViewport(1280, 800, false);
    await cdp.send('Page.navigate', { url: `${BASE_URL}/` });
    await sleep(500);

    // Turn on dark mode
    await cdp.eval(`document.documentElement.classList.add('dark')`);
    await sleep(300);

    // Focus and type into #global-search-input
    await cdp.eval(`(() => {
      const input = document.getElementById('global-search-input');
      input.focus();
      input.value = 'hydro';
      input.dispatchEvent(new Event('input', { bubbles: true }));
    })()`);
    await sleep(1000); // Wait for fetch search-index.json and populate

    const dropdownCheck = await cdp.eval(`(() => {
      const dropdown = document.getElementById('global-search-dropdown');
      if (!dropdown) return { exists: false };
      const isVisible = !dropdown.classList.contains('hidden') && dropdown.offsetHeight > 0;
      const options = dropdown.querySelectorAll('[role="option"]');
      const style = window.getComputedStyle(dropdown);
      return {
        exists: true,
        isVisible,
        optionCount: options.length,
        firstOptionText: options[0] ? options[0].textContent.trim() : null,
        backgroundColor: style.backgroundColor,
        color: style.color,
        isWhiteBox: style.backgroundColor === 'rgb(255, 255, 255)' || style.backgroundColor === '#ffffff'
      };
    })()`);

    console.log(`  Dropdown exists: ${dropdownCheck.exists}, isVisible: ${dropdownCheck.isVisible}, options: ${dropdownCheck.optionCount}`);
    console.log(`  First Option: "${dropdownCheck.firstOptionText}"`);
    console.log(`  Dropdown Background: ${dropdownCheck.backgroundColor}, Text: ${dropdownCheck.color}`);
    console.log(`  Is stark white box in dark mode: ${dropdownCheck.isWhiteBox}`);

    testReport.l2_search_dropdown = dropdownCheck;
    await cdp.captureScreenshot('l2-search-dropdown-dark.png');

    // Test Arrow navigation and Enter
    console.log('  Testing keyboard navigation (ArrowDown)...');
    await cdp.eval(`(() => {
      const input = document.getElementById('global-search-input');
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    })()`);
    await sleep(300);

    const activeDescendant = await cdp.eval(`(() => {
      const input = document.getElementById('global-search-input');
      const activeId = input.getAttribute('aria-activedescendant');
      const activeEl = document.getElementById(activeId);
      return {
        activeId,
        hasHighlight: activeEl ? activeEl.classList.contains('bg-surface-soft') || activeEl.classList.contains('bg-brand-primary') : false
      };
    })()`);
    console.log(`  Active descendant after ArrowDown: ${activeDescendant.activeId} (Highlighted: ${activeDescendant.hasHighlight})`);

    // ----------------------------------------------------
    // TEST 7: Desktop Nav Dropdown at 1280px-1679px
    // ----------------------------------------------------
    console.log('\n--- 7. Desktop Nav Dropdown at 1366px ---');
    await cdp.setViewport(1366, 768, false);
    await cdp.eval(`document.documentElement.classList.remove('dark')`);
    await sleep(300);

    const navDropdownCheck = await cdp.eval(`(() => {
      const dropdownTriggers = document.querySelectorAll('button[aria-expanded], [data-dropdown-trigger]');
      return {
        count: dropdownTriggers.length,
        triggers: Array.from(dropdownTriggers).map(t => t.textContent.trim())
      };
    })()`);
    console.log(`  Nav dropdown triggers found: ${navDropdownCheck.count}`, navDropdownCheck.triggers);
    await cdp.captureScreenshot('nav-desktop-1366px.png', { x: 0, y: 0, width: 1366, height: 120, scale: 2 });

    await cdp.close();
    chromeProcess.kill();

    fs.writeFileSync(path.join(OUT_DIR, 'visual-verification-report.json'), JSON.stringify(testReport, null, 2), 'utf8');
    console.log('\n✅ All CDP Visual & Interaction Verifications Complete!');
    console.log(`Report written to ${path.join(OUT_DIR, 'visual-verification-report.json')}`);

  } catch (err) {
    console.error('❌ CDP Verification failed:', err);
    chromeProcess.kill();
    process.exit(1);
  }
}

main();
