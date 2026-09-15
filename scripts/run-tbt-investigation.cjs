const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const REPORTS_DIR = path.resolve(__dirname, '../lighthouse-reports/tbt-investigation');
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

const TEST_TARGETS = [
  {
    id: 'homepage-en-normal',
    name: 'Homepage EN (Live Edge)',
    url: 'https://isitkitchensafe.com/'
  },
  {
    id: 'homepage-en-fresh',
    name: 'Homepage EN (Cache-Bypassed Fresh Origin)',
    url: 'https://isitkitchensafe.com/?cf_cache_bypass=fresh_test'
  },
  {
    id: 'item-detail-en',
    name: 'Item Detail EN (/dishwasher/hydroflask/)',
    url: 'https://isitkitchensafe.com/dishwasher/hydroflask/'
  },
  {
    id: 'category-listing-en',
    name: 'Category Listing EN (/dishwasher/)',
    url: 'https://isitkitchensafe.com/dishwasher/'
  }
];

const CONDITIONS = [
  { id: 'normal', name: 'Analytics Active (As-Is)', blocked: false },
  { id: 'blocked', name: 'Analytics Blocked (GTAG + Beacon)', blocked: true }
];

const results = [];

console.log('========================================================================');
console.log('🔬 STARTING LIVE MOBILE TBT INVESTIGATION & CAUSE ISOLATION MATRIX');
console.log('========================================================================\n');

for (const target of TEST_TARGETS) {
  for (const condition of CONDITIONS) {
    const slug = `${target.id}-${condition.id}`;
    const reportPath = path.join(REPORTS_DIR, `${slug}.json`);

    console.log(`▶ Auditing [${condition.name}] on ${target.name}...`);
    console.log(`  URL: ${target.url}`);

    const flags = [
      target.url,
      '--chrome-flags=--headless --no-sandbox',
      '--output=json',
      `--output-path=${reportPath}`,
      '--only-categories=performance',
      '--quiet'
    ];

    if (condition.blocked) {
      flags.push('--blocked-url-patterns=*googletagmanager.com*');
      flags.push('--blocked-url-patterns=*google-analytics.com*');
      flags.push('--blocked-url-patterns=*cloudflareinsights.com*');
    }

    const startTime = Date.now();
    try {
      execFileSync('npx.cmd', ['lighthouse', ...flags], {
        stdio: 'pipe',
        timeout: 120000,
        encoding: 'utf8',
        shell: true
      });

      const lhr = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

      const perfScore = Math.round((lhr.categories.performance?.score || 0) * 100);
      const fcpMs = lhr.audits['first-contentful-paint']?.numericValue || 0;
      const lcpMs = lhr.audits['largest-contentful-paint']?.numericValue || 0;
      const tbtMs = lhr.audits['total-blocking-time']?.numericValue || 0;
      const ttiMs = lhr.audits['interactive']?.numericValue || 0;
      const cls = lhr.audits['cumulative-layout-shift']?.numericValue || 0;
      const speedIndex = lhr.audits['speed-index']?.numericValue || 0;

      const rawLongTasks = lhr.audits['long-tasks']?.details?.items || [];
      const longTasks = rawLongTasks.map(t => {
        const start = Math.round(t.startTime);
        const dur = Math.round(t.duration);
        const end = start + dur;
        const isPostFcp = start >= fcpMs || end > fcpMs;
        const blockingMs = isPostFcp ? Math.max(0, dur - 50) : 0;
        return {
          url: t.url,
          startTime: start,
          duration: dur,
          endTime: end,
          isPostFcp,
          blockingMs
        };
      });

      const bootupItems = (lhr.audits['bootup-time']?.details?.items || []).map(b => ({
        url: b.url,
        totalMs: Math.round(b.total),
        scriptingMs: Math.round(b.scripting),
        parseCompileMs: Math.round(b.scriptParseCompile)
      }));

      const mainThreadItems = (lhr.audits['mainthread-work-breakdown']?.details?.items || []).map(m => ({
        category: m.groupLabel || m.group,
        durationMs: Math.round(m.duration)
      }));

      const entry = {
        targetId: target.id,
        targetName: target.name,
        targetUrl: target.url,
        conditionId: condition.id,
        conditionName: condition.name,
        auditDurationSec: ((Date.now() - startTime) / 1000).toFixed(1),
        perfScore,
        metrics: {
          fcpMs: Math.round(fcpMs),
          lcpMs: Math.round(lcpMs),
          tbtMs: Math.round(tbtMs),
          ttiMs: Math.round(ttiMs),
          cls: Number(cls.toFixed(3)),
          speedIndexMs: Math.round(speedIndex)
        },
        longTasks,
        bootupItems,
        mainThreadItems
      };

      results.push(entry);

      console.log(`  ✓ Done in ${entry.auditDurationSec}s | Perf: ${perfScore} | FCP: ${Math.round(fcpMs)}ms | LCP: ${Math.round(lcpMs)}ms | TBT: ${Math.round(tbtMs)}ms | TTI: ${Math.round(ttiMs)}ms`);
      console.log(`    Long tasks count: ${longTasks.length} (Post-FCP blocking sum: ${longTasks.reduce((s, t) => s + t.blockingMs, 0)}ms)\n`);
    } catch (err) {
      console.error(`  ❌ Error auditing ${target.name} [${condition.name}]:`, err.message);
    }
  }
}

fs.writeFileSync(path.join(REPORTS_DIR, 'investigation-summary.json'), JSON.stringify(results, null, 2), 'utf8');
console.log('========================================================================');
console.log('✅ Investigation Complete! Summary saved to lighthouse-reports/tbt-investigation/investigation-summary.json');
console.log('========================================================================');
