const { spawn } = require('node:child_process');
const fs = require('node:fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  console.log('Launching headless Chrome to verify GA4 network loading...');
  const chrome = spawn(CHROME_PATH, [
    '--headless',
    '--remote-debugging-port=9222',
    '--no-sandbox',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
    const wsUrl = pageTab.webSocketDebuggerUrl;
    console.log('Connected to Chrome Page Tab via CDP:', wsUrl);

    const ws = new WebSocket(wsUrl);
    await new Promise(r => ws.onopen = r);

    let id = 1;
    function send(method, params = {}) {
      return new Promise(resolve => {
        const msgId = id++;
        const handler = (e) => {
          const data = JSON.parse(e.data);
          if (data.id === msgId) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    const requestedUrls = [];
    ws.addEventListener('message', (e) => {
      const data = JSON.parse(e.data);
      if (data.method === 'Network.requestWillBeSent') {
        requestedUrls.push(data.params.request.url);
      }
    });

    await send('Network.enable');
    await send('Page.enable');

    console.log('\n--- TEST 1: GA4 Loading on User Interaction ---');
    await send('Page.navigate', { url: 'https://isitkitchensafe.com/?v=cdp_verify_interaction' });
    await new Promise(r => setTimeout(r, 2000));

    const beforeInteractionHasGtag = requestedUrls.some(u => u.includes('gtag/js'));
    console.log('Before interaction: gtag/js requested?', beforeInteractionHasGtag);

    console.log('Simulating user interaction (pointerdown on window)...');
    await send('Runtime.evaluate', {
      expression: `window.dispatchEvent(new Event('pointerdown'));`
    });

    await new Promise(r => setTimeout(r, 2500));
    const afterInteractionHasGtag = requestedUrls.some(u => u.includes('gtag/js'));
    console.log('After interaction: gtag/js requested?', afterInteractionHasGtag);

    const dataLayerStatus = await send('Runtime.evaluate', {
      expression: `JSON.stringify(window.dataLayer || [])`
    });
    console.log('DataLayer length after interaction:', JSON.parse(dataLayerStatus.result.value || '[]').length);

    console.log('\n--- TEST 2: GA4 EU Consent Gating ---');
    requestedUrls.length = 0;
    // Set region = eu and no consent
    await send('Page.addScriptToEvaluateOnNewDocument', {
      source: `window.__VISITOR_REGION__ = 'eu'; localStorage.removeItem('cookie-consent');`
    });
    await send('Page.navigate', { url: 'https://isitkitchensafe.com/?v=cdp_verify_eu' });
    await new Promise(r => setTimeout(r, 2000));

    // Simulate interaction in EU before consent
    await send('Runtime.evaluate', {
      expression: `document.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));`
    });
    await new Promise(r => setTimeout(r, 1000));
    const euBeforeConsentHasGtag = requestedUrls.some(u => u.includes('gtag/js'));
    console.log('In EU before consent: gtag/js requested after interaction?', euBeforeConsentHasGtag);

    // Grant consent
    console.log('Dispatching cookie-consent-accepted...');
    await send('Runtime.evaluate', {
      expression: `window.dispatchEvent(new CustomEvent('cookie-consent-accepted'));`
    });
    await new Promise(r => setTimeout(r, 2000));
    const euAfterConsentHasGtag = requestedUrls.some(u => u.includes('gtag/js'));
    console.log('In EU after consent: gtag/js requested?', euAfterConsentHasGtag);

    ws.close();
  } catch (err) {
    console.error('CDP test error:', err.message);
  } finally {
    chrome.kill();
    console.log('\nCDP test finished.');
  }
}

run();
