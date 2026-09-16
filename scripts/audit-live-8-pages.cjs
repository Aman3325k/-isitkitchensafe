const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const BASE_URL = 'https://isitkitchensafe.com';
const REPORTS_DIR = path.resolve(__dirname, '../lighthouse-reports/final-8-pages');
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

const PAGES = [
  { name: 'Homepage (EN)', path: '/', locale: 'en' },
  { name: 'Homepage (JA)', path: '/ja/', locale: 'ja' },
  { name: 'Item Detail (EN)', path: '/dishwasher/hydroflask/', locale: 'en' },
  { name: 'Item Detail (JA)', path: '/ja/dishwasher/hydroflask/', locale: 'ja' },
  { name: 'Category Listing (EN)', path: '/dishwasher/', locale: 'en' },
  { name: 'Category Listing (JA)', path: '/ja/dishwasher/', locale: 'ja' },
  { name: 'Material Hub (EN)', path: '/material/silicone/', locale: 'en' },
  { name: 'Blog Article (EN)', path: '/blog/things-you-should-never-microwave/', locale: 'en' }
];

const results = [];

console.log('========================================================================');
console.log('🚀 RUNNING LIVE 8-PAGE MOBILE AUDIT ON PRODUCTION (CWV & A11Y)');
console.log('========================================================================\n');

for (const page of PAGES) {
  const jsonPath = path.join(REPORTS_DIR, `live-${page.name.replace(/[^a-zA-Z0-9]/g, '_')}.json`);
  const targetUrl = `${BASE_URL}${page.path}?v=live_final_${Date.now()}`;

  console.log(`▶ Auditing [MOBILE] ${page.name} (${page.path})...`);

  const flags = [
    targetUrl,
    '--chrome-flags=--headless --no-sandbox',
    '--output=json',
    `--output-path=${jsonPath}`,
    '--only-categories=performance,accessibility,seo',
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

    const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
    const lhr = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    const perf = Math.round((lhr.categories.performance?.score || 0) * 100);
    const a11y = Math.round((lhr.categories.accessibility?.score || 0) * 100);
    const seo = Math.round((lhr.categories.seo?.score || 0) * 100);

    const fcpMs = Math.round(lhr.audits['first-contentful-paint']?.numericValue || 0);
    const lcpMs = Math.round(lhr.audits['largest-contentful-paint']?.numericValue || 0);
    const tbtMs = Math.round(lhr.audits['total-blocking-time']?.numericValue || 0);
    const cls = Number((lhr.audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3));

    console.log(`  ✓ Done in ${durationSec}s | Perf: ${perf} | A11y: ${a11y} | SEO: ${seo} | FCP: ${fcpMs}ms | LCP: ${lcpMs}ms | TBT: ${tbtMs}ms | CLS: ${cls}\n`);

    results.push({
      name: page.name,
      path: page.path,
      perf,
      a11y,
      seo,
      fcpMs,
      lcpMs,
      tbtMs,
      cls
    });
  } catch (err) {
    console.error(`  ❌ Error auditing ${page.name}:`, err.message);
  }
}

fs.writeFileSync(path.join(REPORTS_DIR, 'summary.json'), JSON.stringify(results, null, 2), 'utf8');
console.log('✅ All 8 live page audits complete. Written to lighthouse-reports/final-8-pages/summary.json');
