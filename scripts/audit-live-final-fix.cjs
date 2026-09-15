const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const BASE_URL = 'https://isitkitchensafe.com';
const REPORTS_DIR = path.resolve(__dirname, '../lighthouse-reports/final-fix');
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

const PAGES = [
  { name: 'homepage-en', path: '/', locale: 'en' },
  { name: 'homepage-ja', path: '/ja/', locale: 'ja' },
  { name: 'item-detail-en', path: '/dishwasher/hydroflask/', locale: 'en' },
  { name: 'item-detail-ja', path: '/ja/dishwasher/hydroflask/', locale: 'ja' },
  { name: 'category-listing-en', path: '/dishwasher/', locale: 'en' },
  { name: 'category-listing-ja', path: '/ja/dishwasher/', locale: 'ja' },
  { name: 'material-hub-en', path: '/material/silicone/', locale: 'en' },
  { name: 'blog-article-en', path: '/blog/things-you-should-never-microwave/', locale: 'en' }
];

const results = [];

console.log('========================================================================');
console.log('🚀 RUNNING FINAL LIVE AUDIT ON COMMIT 007df61 (8 PAGES, MOBILE)');
console.log('========================================================================\n');

async function run() {
  for (const page of PAGES) {
    const targetUrl = `${BASE_URL}${page.path}?v=final_fix_007df61`;
    const jsonPath = path.join(REPORTS_DIR, `live-${page.name}-mobile.json`);

    console.log(`▶ Auditing [MOBILE] ${page.name} (${page.path})...`);

    const flags = [
      targetUrl,
      '--chrome-flags=--headless --no-sandbox',
      '--output=json',
      `--output-path=${jsonPath}`,
      '--only-categories=performance',
      '--quiet'
    ];

    const startTime = Date.now();
    try {
      execFileSync('npx.cmd', ['lighthouse', ...flags], {
        stdio: 'pipe',
        timeout: 120000,
        encoding: 'utf8',
        shell: true
      });

      const lhr = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

      const perfScore = Math.round((lhr.categories.performance?.score || 0) * 100);
      const fcpMs = Math.round(lhr.audits['first-contentful-paint']?.numericValue || 0);
      const lcpMs = Math.round(lhr.audits['largest-contentful-paint']?.numericValue || 0);
      const tbtMs = Math.round(lhr.audits['total-blocking-time']?.numericValue || 0);
      const ttiMs = Math.round(lhr.audits['interactive']?.numericValue || 0);
      const cls = Number((lhr.audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3));

      const rawLongTasks = lhr.audits['long-tasks']?.details?.items || [];
      const longTasks = rawLongTasks.map(t => ({
        url: t.url,
        duration: Math.round(t.duration),
        startTime: Math.round(t.startTime),
        blockingMs: Math.max(0, Math.round(t.duration) - 50)
      }));

      const summary = {
        name: page.name,
        path: page.path,
        durationSec: ((Date.now() - startTime) / 1000).toFixed(1),
        perfScore,
        metrics: { fcpMs, lcpMs, tbtMs, ttiMs, cls },
        longTasks
      };

      results.push(summary);
      console.log(`  ✓ ${page.name}: Perf=${perfScore} | FCP=${fcpMs}ms | LCP=${lcpMs}ms | TBT=${tbtMs}ms | TTI=${ttiMs}ms | CLS=${cls}`);
      console.log(`    Long tasks count: ${longTasks.length} (Post-FCP blocking sum: ${longTasks.filter(t => t.startTime >= fcpMs).reduce((s, t) => s + t.blockingMs, 0)}ms)\n`);
    } catch (err) {
      console.error(`  ❌ Failed: ${page.name}: ${err.message}`);
    }
  }

  fs.writeFileSync(path.join(REPORTS_DIR, 'summary-final-fix.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log('========================================================================');
  console.log('✅ Final fix audit suite complete! Summary written to lighthouse-reports/final-fix/summary-final-fix.json');
  console.log('========================================================================');
}

run();
