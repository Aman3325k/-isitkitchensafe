const https = require('https');

const BASE_URL = 'https://isitkitchensafe.com';

const testUrls = [
  // Homepages
  '/',
  '/es/',
  '/pt/',
  '/ja/',
  '/zh-cn/',

  // Appliance Hubs
  '/dishwasher/',
  '/microwave/',
  '/freezer/',
  '/oven/',
  '/dryer/',
  '/airfryer/',
  '/refrigerator/',
  '/es/dishwasher/',
  '/pt/dishwasher/',
  '/ja/dishwasher/',
  '/zh-cn/dishwasher/',

  // Specific Appliance Items
  '/dishwasher/hydroflask/',
  '/es/dishwasher/hydroflask/',
  '/pt/dishwasher/hydroflask/',
  '/ja/dishwasher/hydroflask/',
  '/zh-cn/dishwasher/hydroflask/',
  '/microwave/styrofoam/',
  '/es/microwave/styrofoam/',
  '/freezer/avocado/',
  '/es/freezer/avocado/',
  '/oven/aluminum-foil/',
  '/es/oven/aluminum-foil/',
  '/dryer/wool-blanket/',
  '/airfryer/parchment-paper/',
  '/refrigerator/butter/',

  // Additional Verticals
  '/washing-machine/',
  '/washing-machine/backpack/',
  '/es/washing-machine/backpack/',
  '/how-long/',
  '/how-long/milk-in-fridge/',
  '/es/how-long/milk-in-fridge/',
  '/refreeze/',
  '/refreeze/chicken/',
  '/es/refreeze/chicken/',
  '/what-happens/',
  '/what-happens/microwave-metal-spoon/',
  '/es/what-happens/microwave-metal-spoon/',
  '/compare/',
  '/compare/air-fryer-vs-microwave/',
  '/es/compare/air-fryer-vs-microwave/',
  '/material/glass/',
  '/es/material/glass/',
  '/blog/',
  '/blog/things-you-should-never-microwave/',
  '/es/blog/things-you-should-never-microwave/',

  // Core Pages
  '/about/',
  '/es/about/',
  '/contact/',
  '/privacy/',
  '/terms/',
  '/sitemap-page/',
  '/robots.txt',
  '/sitemap.xml',
  '/sitemap-0.xml'
];

function fetchUrl(targetPath) {
  return new Promise((resolve) => {
    const fullUrl = targetPath.startsWith('http') ? targetPath : `${BASE_URL}${targetPath}`;
    const req = https.get(fullUrl, { headers: { 'User-Agent': 'ProductionAuditBot/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          url: fullUrl,
          path: targetPath,
          status: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });
    req.on('error', err => resolve({ url: fullUrl, path: targetPath, error: err.message }));
  });
}

async function runAudit() {
  console.log('====================================================');
  console.log(`🚀 CRAWLING LIVE PRODUCTION: ${BASE_URL}`);
  console.log(`Auditing ${testUrls.length} key representative URLs...`);
  console.log('====================================================\n');

  let passed = 0;
  let failures = [];
  const relatedLinksToCheck = new Set();

  for (const urlPath of testUrls) {
    const res = await fetchUrl(urlPath);
    if (res.error) {
      console.error(`❌ NETWORK ERROR: ${urlPath} -> ${res.error}`);
      failures.push({ path: urlPath, issue: res.error });
      continue;
    }

    if (urlPath === '/robots.txt') {
      if (res.status === 200 && res.body.includes('User-agent: *')) {
        console.log(`✅ [200] robots.txt is live & accessible`);
        passed++;
      } else {
        failures.push({ path: urlPath, issue: `Unexpected robots.txt status: ${res.status}` });
      }
      continue;
    }

    if (urlPath.includes('sitemap')) {
      if (res.status === 200 && (res.body.includes('<sitemapindex') || res.body.includes('<urlset'))) {
        console.log(`✅ [200] ${urlPath} is valid XML sitemap`);
        passed++;
      } else {
        failures.push({ path: urlPath, issue: `Unexpected sitemap status: ${res.status}` });
      }
      continue;
    }

    // HTML Page Audits
    const issues = [];
    if (res.status !== 200) {
      issues.push(`Status code: ${res.status}`);
    }

    // Headers check
    const xRobots = res.headers['x-robots-tag'];
    if (xRobots && xRobots.includes('noindex')) {
      issues.push(`X-Robots-Tag contains noindex: ${xRobots}`);
    }

    // Meta robots check
    const robotsMetaMatch = res.body.match(/<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i);
    if (robotsMetaMatch && robotsMetaMatch[1].includes('noindex')) {
      issues.push(`HTML meta robots contains noindex: ${robotsMetaMatch[1]}`);
    }

    // Canonical check
    const canonicalMatch = res.body.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
                           res.body.match(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
    if (!canonicalMatch) {
      issues.push('Missing canonical tag');
    } else {
      const canonical = canonicalMatch[1];
      const expectedUrl = `${BASE_URL}${urlPath}`;
      if (canonical !== expectedUrl) {
        issues.push(`Canonical mismatch: expected ${expectedUrl}, got ${canonical}`);
      }
    }

    // Hreflang check for content pages
    const hreflangs = [];
    const hreflangRegex = /<link[^>]+hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi;
    let hMatch;
    while ((hMatch = hreflangRegex.exec(res.body)) !== null) {
      hreflangs.push({ lang: hMatch[1], href: hMatch[2] });
    }

    // Schema check
    const hasSchema = res.body.includes('application/ld+json');
    const hasFaqSchema = res.body.includes('"FAQPage"');

    // Extract related items internal links
    const relatedSectionMatch = res.body.match(/<section[^>]*class="[^"]*related[^"]*"[\s\S]*?<\/section>/i) ||
                                res.body.match(/Related (?:Items|Guides|Combos)[\s\S]*?<\/section>/i);
    if (relatedSectionMatch) {
      const hrefRegex = /href=["'](\/[^"']+)["']/g;
      let rMatch;
      while ((rMatch = hrefRegex.exec(relatedSectionMatch[0])) !== null) {
        if (!rMatch[1].startsWith('/#') && rMatch[1].endsWith('/')) {
          relatedLinksToCheck.add(rMatch[1]);
        }
      }
    }

    if (issues.length === 0) {
      console.log(`✅ [200 OK] ${urlPath} (Canonical OK, Hreflangs: ${hreflangs.length}, FAQ Schema: ${hasFaqSchema})`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${urlPath}: ${issues.join(' | ')}`);
      failures.push({ path: urlPath, issues });
    }
  }

  console.log(`\n----------------------------------------------------`);
  console.log(`Checked ${testUrls.length} pages. Passed: ${passed}, Failed: ${failures.length}`);

  // Now spot-check 15 related items links from live pages
  const sampleRelated = Array.from(relatedLinksToCheck).slice(0, 15);
  console.log(`\n🔗 Spot-checking ${sampleRelated.length} related items links from live pages...`);
  let relatedPassed = 0;
  for (const rPath of sampleRelated) {
    const res = await fetchUrl(rPath);
    if (res.status === 200) {
      console.log(`  ✅ [200 OK] Related link: ${rPath}`);
      relatedPassed++;
    } else {
      console.error(`  ❌ [${res.status}] Broken related link: ${rPath}`);
      failures.push({ path: rPath, issue: `Broken related link status: ${res.status}` });
    }
  }

  console.log(`\n====================================================`);
  console.log(`🎉 LIVE AUDIT SUMMARY:`);
  console.log(`Core URLs Passed: ${passed} / ${testUrls.length}`);
  console.log(`Related Links Passed: ${relatedPassed} / ${sampleRelated.length}`);
  console.log(`Total Failures Detected: ${failures.length}`);
  console.log('====================================================\n');
}

runAudit();
