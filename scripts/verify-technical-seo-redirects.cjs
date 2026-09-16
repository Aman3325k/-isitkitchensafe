const https = require('node:https');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.request(url, { method: 'GET', ...options }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve({
        status: res.statusCode,
        headers: res.headers,
        body
      }));
    });
    req.on('error', reject);
    req.end();
  });
}

async function run() {
  console.log('========================================================================');
  console.log('🔍 2.1 TECHNICAL SEO & 2.2 REDIRECT INTEGRITY LIVE VERIFICATION');
  console.log('========================================================================\n');

  const report = {
    wwwRedirects: [],
    trailingSlashRedirects: [],
    sitemapCheck: null,
    safetyContradictions: [],
    tumblerChecks: [],
    redirectBudget: null
  };

  // --- 2.1.1 WWW to non-WWW 301 Redirects ---
  console.log('--- 2.1.1 WWW to non-WWW Redirects ---');
  const wwwPaths = ['/', '/dishwasher/hydroflask/', '/about/'];
  for (const p of wwwPaths) {
    const url = `https://www.isitkitchensafe.com${p}`;
    try {
      const res = await request(url);
      const loc = res.headers['location'] || '';
      const is301 = res.status === 301;
      const expectedLoc = `https://isitkitchensafe.com${p}`;
      const pass = is301 && (loc === expectedLoc || loc === expectedLoc.replace(/\/$/, '') || loc.startsWith('https://isitkitchensafe.com'));
      console.log(`  ${url} -> Status ${res.status}, Location: ${loc} -> ${pass ? '✓ PASS' : '❌ FAIL'}`);
      report.wwwRedirects.push({ url, status: res.status, location: loc, pass });
    } catch (e) {
      console.log(`  ${url} -> Error: ${e.message}`);
      report.wwwRedirects.push({ url, error: e.message, pass: false });
    }
  }

  // --- 2.1.2 Trailing Slash 301 Redirects (Originally Broken URLs) ---
  console.log('\n--- 2.1.2 10 Trailing Slash URLs (Must return 301, not 308) ---');
  const trailingSlashTestUrls = [
    '/dishwasher/hydroflask',
    '/microwave/styrofoam',
    '/freezer/avocado',
    '/oven/wax-paper',
    '/airfryer/aluminum-foil',
    '/refrigerator/bread',
    '/dryer/wool-sweater',
    '/how-long/cooked-chicken',
    '/material/cast-iron',
    '/compare/microwave-vs-oven-for-pizza'
  ];

  for (const p of trailingSlashTestUrls) {
    const url = `https://isitkitchensafe.com${p}`;
    const res = await request(url);
    const loc = res.headers['location'] || '';
    const is301 = res.status === 301;
    const is308 = res.status === 308;
    const pass = is301 && loc.endsWith('/');
    console.log(`  ${p} -> Status: ${res.status} (is 301: ${is301}, is 308: ${is308}), Location: ${loc} -> ${pass ? '✓ PASS' : '❌ FAIL'}`);
    report.trailingSlashRedirects.push({ path: p, status: res.status, location: loc, pass });
  }

  // --- 2.1.3 Sitemap Audit ---
  console.log('\n--- 2.1.3 Sitemap Audit ---');
  try {
    const sitemapRes = await request('https://isitkitchensafe.com/sitemap.xml');
    const sitemapContent = sitemapRes.body;
    let totalUrls = 0;
    let wwwCount = (sitemapContent.match(/https:\/\/www\.isitkitchensafe\.com/g) || []).length;
    let subSitemaps = Array.from(sitemapContent.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)).map(m => m[1]);

    if (subSitemaps.length > 0 && sitemapContent.includes('<sitemapindex')) {
      console.log(`  sitemap.xml is an index with ${subSitemaps.length} sub-sitemaps.`);
      for (const sub of subSitemaps) {
        const subRes = await request(sub);
        const urlMatches = subRes.body.match(/<loc>https:\/\/isitkitchensafe\.com\/[^<]+<\/loc>/g) || [];
        totalUrls += urlMatches.length;
        const subWww = (subRes.body.match(/https:\/\/www\.isitkitchensafe\.com/g) || []).length;
        wwwCount += subWww;
      }
    } else {
      const urlMatches = sitemapContent.match(/<loc>https:\/\/isitkitchensafe\.com\/[^<]+<\/loc>/g) || [];
      totalUrls = urlMatches.length;
    }

    console.log(`  Total Sitemap URLs: ${totalUrls}`);
    console.log(`  WWW URLs leaked into Sitemap: ${wwwCount}`);
    const sitemapPass = totalUrls >= 9600 && wwwCount === 0;
    console.log(`  Sitemap Audit: ${sitemapPass ? '✓ PASS' : '❌ FAIL'}`);
    report.sitemapCheck = { totalUrls, wwwCount, pass: sitemapPass };
  } catch (e) {
    console.error('  Sitemap error:', e.message);
  }

  // --- 2.2.1 Two-Tier Redirect System Budget ---
  console.log('\n--- 2.2.1 Redirect System Budget & Configuration ---');
  const edgeMapPath = path.resolve(__dirname, '../functions/_redirects-map.js');
  const staticRedirectsPath = path.resolve(__dirname, '../dist/_redirects');
  
  let edgeEntries = 0;
  if (fs.existsSync(edgeMapPath)) {
    const content = fs.readFileSync(edgeMapPath, 'utf8');
    const match = content.match(/"([^"]+)":\s*"([^"]+)"/g);
    edgeEntries = match ? match.length : 0;
  }

  let staticLines = 0;
  if (fs.existsSync(staticRedirectsPath)) {
    const lines = fs.readFileSync(staticRedirectsPath, 'utf8').split('\n').filter(l => l.trim().length > 0);
    staticLines = lines.length;
  }

  console.log(`  Edge Map Entries: ${edgeEntries}`);
  console.log(`  Static _redirects lines: ${staticLines} / 2,000 limit`);
  const budgetPass = edgeEntries >= 1400 && staticLines <= 2000;
  console.log(`  Budget Status: ${budgetPass ? '✓ PASS' : '❌ FAIL'}`);
  report.redirectBudget = { edgeEntries, staticLines, pass: budgetPass };

  // --- 2.2.2 Spot-Check Safety Contradictions ---
  console.log('\n--- 2.2.2 Safety Contradiction Spot-Checks ---');
  const safetyChecks = [
    { url: 'https://isitkitchensafe.com/airfryer/gold-silverware/', forbiddenTarget: '/airfryer/aluminum-foil/' },
    { url: 'https://isitkitchensafe.com/airfryer/mason-jar/', forbiddenTarget: '/airfryer/glass-bowl/' },
    { url: 'https://isitkitchensafe.com/airfryer/pacifiers-silicone/', forbiddenTarget: '/airfryer/silicone-baking-mat/' }
  ];

  for (const s of safetyChecks) {
    const res = await request(s.url);
    const loc = res.headers['location'] || '';
    const isSafe = loc !== s.forbiddenTarget && !loc.includes(s.forbiddenTarget.slice(1, -1));
    console.log(`  ${s.url} -> Status: ${res.status}, Location: ${loc}`);
    console.log(`    Forbidden Target: ${s.forbiddenTarget} -> Safe? ${isSafe ? '✓ PASS' : '❌ FAIL (Contradiction!)'}`);
    report.safetyContradictions.push({ url: s.url, status: res.status, location: loc, pass: isSafe });
  }

  // --- 2.2.3 Spot-Check Stanley Cup Tumbler Distinct Targets ---
  console.log('\n--- 2.2.3 Stanley Cup Tumbler Topical Targeting ---');
  const tumblerChecks = [
    'https://isitkitchensafe.com/refrigerator/stanley-cup-tumbler/',
    'https://isitkitchensafe.com/dishwasher/stanley-cup-tumbler/'
  ];

  for (const u of tumblerChecks) {
    const res = await request(u);
    const loc = res.headers['location'] || '';
    console.log(`  ${u} -> Status: ${res.status}, Location: ${loc}`);
    report.tumblerChecks.push({ url: u, status: res.status, location: loc });
  }

  fs.writeFileSync(path.resolve(__dirname, '../lighthouse-reports/seo-redirect-audit.json'), JSON.stringify(report, null, 2));
  console.log('\nAudit complete. Written to lighthouse-reports/seo-redirect-audit.json');
}

run();
