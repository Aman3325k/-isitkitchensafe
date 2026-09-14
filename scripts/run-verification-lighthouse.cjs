const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const BASE_URL = 'http://127.0.0.1:4321';
const REPORTS_DIR = path.resolve(__dirname, '../lighthouse-reports');
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

const PAGES = [
  { name: 'homepage-en', path: '/', locale: 'en' },
  { name: 'homepage-ja', path: '/ja/', locale: 'ja' },
  { name: 'category-en', path: '/dishwasher/', locale: 'en' },
  { name: 'item-en', path: '/dishwasher/hydroflask/', locale: 'en' }
];

const results = [];

console.log('====================================================');
console.log('🚀 Running Target Lighthouse Verification (Mobile)');
console.log('====================================================\n');

for (const page of PAGES) {
  const jsonPath = path.join(REPORTS_DIR, `verify-${page.name}-mobile.json`);
  const targetUrl = `${BASE_URL}${page.path}`;

  console.log(`▶ Auditing [MOBILE] ${page.name} (${page.path})...`);

  const flags = [
    targetUrl,
    '--chrome-flags=--headless --no-sandbox',
    '--output=json',
    `--output-path=${jsonPath}`,
    '--only-categories=performance,accessibility,best-practices,seo',
    '--quiet'
  ];

  const startTime = Date.now();
  try {
    execFileSync('npx.cmd', ['lighthouse', ...flags], {
      stdio: 'pipe',
      timeout: 120000,
      encoding: 'utf8',
      shell: true,
      env: { ...process.env, CHROME_PATH: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' }
    });

    const durationMs = Date.now() - startTime;
    const lhr = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    const scores = {
      performance: Math.round((lhr.categories.performance?.score || 0) * 100),
      accessibility: Math.round((lhr.categories.accessibility?.score || 0) * 100),
      bestPractices: Math.round((lhr.categories['best-practices']?.score || 0) * 100),
      seo: Math.round((lhr.categories.seo?.score || 0) * 100),
    };

    const cwv = {
      fcp: lhr.audits['first-contentful-paint']?.displayValue || 'N/A',
      lcp: lhr.audits['largest-contentful-paint']?.displayValue || 'N/A',
      tbt: lhr.audits['total-blocking-time']?.displayValue || 'N/A',
      tbtMs: lhr.audits['total-blocking-time']?.numericValue || 0,
      cls: lhr.audits['cumulative-layout-shift']?.displayValue || 'N/A',
      speedIndex: lhr.audits['speed-index']?.displayValue || 'N/A',
      tti: lhr.audits['interactive']?.displayValue || 'N/A',
      maxFid: lhr.audits['max-potential-fid']?.displayValue || 'N/A'
    };

    const renderBlocking = lhr.audits['render-blocking-insight']?.displayValue || lhr.audits['render-blocking-resources']?.displayValue || 'None (Pass)';

    console.log(`  ✓ Done in ${(durationMs / 1000).toFixed(1)}s: Perf=${scores.performance} | FCP=${cwv.fcp} | LCP=${cwv.lcp} | TBT=${cwv.tbt} (${Math.round(cwv.tbtMs)}ms) | CLS=${cwv.cls} | Render-blocking: ${renderBlocking}\n`);

    results.push({
      page: page.name,
      path: page.path,
      scores,
      cwv,
      renderBlocking
    });
  } catch (err) {
    console.error(`  ❌ Error auditing ${page.name}:`, err.message);
  }
}

fs.writeFileSync(path.join(REPORTS_DIR, 'verify-summary.json'), JSON.stringify(results, null, 2), 'utf8');
console.log('✅ Verification suite complete. Summary written to lighthouse-reports/verify-summary.json');
