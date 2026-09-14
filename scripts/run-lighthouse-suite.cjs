const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const REPORT_TAG = process.argv[2] || 'baseline';
const BASE_URL = 'http://127.0.0.1:4321';
const REPORTS_DIR = path.resolve(__dirname, '../lighthouse-reports');
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

const PAGES = [
  { type: 'homepage', path: '/', locale: 'en' },
  { type: 'homepage', path: '/ja/', locale: 'ja' },
  { type: 'material-hub', path: '/material/silicone/', locale: 'en' },
  { type: 'material-hub', path: '/ja/material/silicone/', locale: 'ja' },
  { type: 'category-listing', path: '/dishwasher/', locale: 'en' },
  { type: 'category-listing', path: '/ja/dishwasher/', locale: 'ja' },
  { type: 'individual-item', path: '/dishwasher/hydroflask/', locale: 'en' },
  { type: 'individual-item', path: '/ja/dishwasher/hydroflask/', locale: 'ja' },
  { type: 'blog-article', path: '/blog/things-you-should-never-microwave/', locale: 'en' },
  { type: 'blog-article', path: '/ja/blog/things-you-should-never-microwave/', locale: 'ja' }
];

const DEVICES = ['mobile', 'desktop'];

console.log(`====================================================`);
console.log(`🚀 Starting Lighthouse Suite [${REPORT_TAG.toUpperCase()}]`);
console.log(`Total audits: ${PAGES.length} pages × 2 devices = ${PAGES.length * DEVICES.length} runs`);
console.log(`====================================================\n`);

const results = [];

for (const page of PAGES) {
  for (const device of DEVICES) {
    const slug = `${page.locale}-${page.type}-${device}`;
    const jsonPath = path.join(REPORTS_DIR, `${REPORT_TAG}-${slug}.json`);
    const targetUrl = `${BASE_URL}${page.path}`;

    console.log(`▶ Running [${device.toUpperCase()}] ${page.locale.toUpperCase()} ${page.type} (${page.path})...`);

    const flags = [
      targetUrl,
      '--chrome-flags=--headless --no-sandbox',
      '--output=json',
      `--output-path=${jsonPath}`,
      '--only-categories=performance,accessibility,best-practices,seo',
      '--quiet'
    ];

    if (device === 'desktop') {
      flags.push('--preset=desktop');
    }

    const startTime = Date.now();
    try {
      execFileSync('npx.cmd', ['lighthouse', ...flags], {
        stdio: 'pipe',
        timeout: 120000,
        encoding: 'utf8',
        shell: true
      });

      const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

      const scores = {
        performance: Math.round((raw.categories.performance?.score || 0) * 100),
        accessibility: Math.round((raw.categories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((raw.categories['best-practices']?.score || 0) * 100),
        seo: Math.round((raw.categories.seo?.score || 0) * 100)
      };

      const cwv = {
        fcp: raw.audits['first-contentful-paint']?.displayValue || 'N/A',
        lcp: raw.audits['largest-contentful-paint']?.displayValue || 'N/A',
        tbt: raw.audits['total-blocking-time']?.displayValue || 'N/A',
        cls: raw.audits['cumulative-layout-shift']?.displayValue || 'N/A',
        speedIndex: raw.audits['speed-index']?.displayValue || 'N/A',
        tti: raw.audits['interactive']?.displayValue || 'N/A'
      };

      const issues = [];
      for (const [id, audit] of Object.entries(raw.audits)) {
        if (audit.score !== null && audit.score < 1 && audit.scoreDisplayMode !== 'notApplicable' && audit.scoreDisplayMode !== 'informative') {
          issues.push({
            id,
            title: audit.title,
            score: audit.score,
            displayValue: audit.displayValue || '',
            explanation: audit.explanation || ''
          });
        }
      }

      const summary = {
        tag: REPORT_TAG,
        locale: page.locale,
        pageType: page.type,
        path: page.path,
        device,
        durationMs: Date.now() - startTime,
        scores,
        cwv,
        issues
      };

      results.push(summary);
      console.log(`  ✓ Done in ${(summary.durationMs / 1000).toFixed(1)}s: Perf=${scores.performance} A11y=${scores.accessibility} BP=${scores.bestPractices} SEO=${scores.seo} | LCP=${cwv.lcp} CLS=${cwv.cls} TBT=${cwv.tbt}`);
      if (issues.length > 0) {
        console.log(`  ⚠️  Flagged ${issues.length} audit items: ${issues.map(i => i.id).join(', ')}`);
      }
    } catch (err) {
      console.error(`  ❌ Failed: ${err.message}`);
      results.push({
        tag: REPORT_TAG,
        locale: page.locale,
        pageType: page.type,
        path: page.path,
        device,
        error: err.message
      });
    }
  }
}

const summaryFile = path.join(REPORTS_DIR, `summary-${REPORT_TAG}.json`);
fs.writeFileSync(summaryFile, JSON.stringify(results, null, 2), 'utf8');
console.log(`\n====================================================`);
console.log(`📊 Suite Completed! Summary written to: ${summaryFile}`);
console.log(`====================================================\n`);
