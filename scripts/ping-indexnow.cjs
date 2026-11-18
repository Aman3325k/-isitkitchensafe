#!/usr/bin/env node

/**
 * IsItKitchenSafe - IndexNow Real-Time Discovery Engine
 *
 * Submits high-priority consumer URLs and built sitemap URLs to Bing, Yandex,
 * Seznam, and IndexNow-enabled search engines & AI crawlers for instant indexing.
 *
 * Usage:
 *   node scripts/ping-indexnow.cjs            # Validate and submit live POSTs
 *   node scripts/ping-indexnow.cjs --dry-run  # Full validation without HTTP POSTs
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'isitkitchensafe.com';
const ROOT_URL = `https://${HOST}`;
const INDEXNOW_KEY = 'c7b41e89f92d44748d88df1762e8412e';
const KEY_LOCATION = `${ROOT_URL}/${INDEXNOW_KEY}.txt`;
const BATCH_SIZE = 1000;
const INDEXNOW_MAX_URLS_PER_BATCH = 10000;
const LOCALES = ['es', 'pt', 'zh-cn', 'ja'];
const APPLIANCES = ['dishwasher', 'microwave', 'freezer', 'oven', 'dryer', 'airfryer', 'refrigerator'];

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_KEY_FILE = path.join(PROJECT_ROOT, 'public', `${INDEXNOW_KEY}.txt`);
const DIST_DIR = path.join(PROJECT_ROOT, 'dist');
const DIST_KEY_FILE = path.join(DIST_DIR, `${INDEXNOW_KEY}.txt`);
const PRIMARY_SITEMAP_FILE = path.join(DIST_DIR, 'sitemap-0.xml');

function parseCliArgs(argv) {
  const args = new Set(argv.slice(2));
  return {
    dryRun: args.has('--dry-run') || args.has('-n'),
    help: args.has('--help') || args.has('-h')
  };
}

function printUsage() {
  console.log(`Usage: node scripts/ping-indexnow.cjs [--dry-run]

Options:
  --dry-run, -n   Validate key file, dist/sitemap-0.xml extraction, priority consumer
                  URLs, and payload batching without sending live HTTP POST requests.
  --help, -h      Show this help message.`);
}

function readJsonSafe(relPath, fallback = []) {
  const absPath = path.join(PROJECT_ROOT, relPath);
  if (!fs.existsSync(absPath)) {
    return { exists: false, data: fallback, error: null };
  }
  try {
    return { exists: true, data: JSON.parse(fs.readFileSync(absPath, 'utf8')), error: null };
  } catch (err) {
    return { exists: true, data: fallback, error: err.message };
  }
}

// 1. Validate IndexNow key file presence and content
function verifyKeyFile() {
  const errors = [];
  const warnings = [];

  const publicExists = fs.existsSync(PUBLIC_KEY_FILE);
  let publicMatches = false;
  if (!publicExists) {
    errors.push(`Missing IndexNow key file at public/${INDEXNOW_KEY}.txt`);
  } else {
    const content = fs.readFileSync(PUBLIC_KEY_FILE, 'utf8').trim();
    publicMatches = content === INDEXNOW_KEY;
    if (!publicMatches) {
      errors.push(`IndexNow key file mismatch in public/${INDEXNOW_KEY}.txt (expected "${INDEXNOW_KEY}")`);
    }
  }

  const distExists = fs.existsSync(DIST_DIR);
  const distKeyExists = distExists && fs.existsSync(DIST_KEY_FILE);
  let distKeyMatches = false;
  if (distExists) {
    if (!distKeyExists) {
      warnings.push(`Build directory exists but dist/${INDEXNOW_KEY}.txt is missing (run npm run build).`);
    } else {
      const distContent = fs.readFileSync(DIST_KEY_FILE, 'utf8').trim();
      distKeyMatches = distContent === INDEXNOW_KEY;
      if (!distKeyMatches) {
        errors.push(`IndexNow key file mismatch in dist/${INDEXNOW_KEY}.txt`);
      }
    }
  }

  return {
    ok: errors.length === 0,
    publicExists,
    publicMatches,
    distExists,
    distKeyExists,
    distKeyMatches,
    errors,
    warnings
  };
}

// 2. Collect priority consumer URLs directly from source datasets & allowlist
function collectPriorityUrls() {
  const urls = new Set();
  const stats = {
    coreHubs: 0,
    consumerToolsAllowlisted: 0,
    consumerToolsUrls: 0,
    blogs: 0,
    comparisons: 0,
    howLong: 0,
    refreeze: 0,
    items: 0
  };

  // Core EN pages & E-E-A-T / retention hubs
  const corePaths = [
    '/',
    '/about/',
    '/methodology/',
    '/saved/',
    '/privacy/',
    '/terms/',
    '/disclaimer/',
    '/sitemap-page/',
    '/tools/',
    '/blog/',
    '/compare/',
    '/material/',
    '/how-long/',
    '/refreeze/',
    '/washing-machine/',
    '/what-happens/',
    '/rss.xml'
  ];
  corePaths.forEach(p => urls.add(`${ROOT_URL}${p}`));

  // All 7 appliance hubs (EN + localized)
  APPLIANCES.forEach(app => {
    urls.add(`${ROOT_URL}/${app}/`);
    LOCALES.forEach(lang => urls.add(`${ROOT_URL}/${lang}/${app}/`));
  });

  // High-priority localized hubs
  const localizedHubPaths = ['/', '/tools/', '/methodology/', '/saved/', '/blog/', '/compare/'];
  LOCALES.forEach(lang => {
    localizedHubPaths.forEach(p => urls.add(`${ROOT_URL}/${lang}${p}`));
  });
  stats.coreHubs = urls.size;

  // Allowlisted Google-indexed Consumer Kitchen Safety Tools (5 languages)
  const allowlistRes = readJsonSafe('src/data/consumer-tools-allowlist.json', []);
  if (allowlistRes.error) {
    console.warn(`⚠️ Could not load consumer-tools-allowlist.json: ${allowlistRes.error}`);
  }
  const allowlistedToolSlugs = Array.isArray(allowlistRes.data) ? allowlistRes.data : [];
  stats.consumerToolsAllowlisted = allowlistedToolSlugs.length;

  const beforeToolUrls = urls.size;
  allowlistedToolSlugs.forEach(slug => {
    urls.add(`${ROOT_URL}/tools/${slug}/`);
    LOCALES.forEach(lang => urls.add(`${ROOT_URL}/${lang}/tools/${slug}/`));
  });
  stats.consumerToolsUrls = urls.size - beforeToolUrls;

  // Multilingual Blog Guides (100% 5-language slug parity)
  const blogRes = readJsonSafe('src/data/blog.json', []);
  if (blogRes.error) {
    console.warn(`⚠️ Could not load blog.json: ${blogRes.error}`);
  }
  if (Array.isArray(blogRes.data)) {
    stats.blogs = blogRes.data.length;
    blogRes.data.forEach(b => {
      if (!b || !b.slug) return;
      urls.add(`${ROOT_URL}/blog/${b.slug}/`);
      LOCALES.forEach(lang => urls.add(`${ROOT_URL}/${lang}/blog/${b.slug}/`));
    });
  }

  // High-Intent Brand & Material Comparisons
  const comparisonsRes = readJsonSafe('src/data/comparisons.json', []);
  if (Array.isArray(comparisonsRes.data)) {
    stats.comparisons = comparisonsRes.data.length;
    comparisonsRes.data.forEach(c => {
      if (c && c.slug) urls.add(`${ROOT_URL}/compare/${c.slug}/`);
    });
  }

  // How-Long food storage guides
  const howLongRes = readJsonSafe('src/data/how-long.json', []);
  if (Array.isArray(howLongRes.data)) {
    stats.howLong = howLongRes.data.length;
    howLongRes.data.forEach(h => {
      if (h && h.slug) urls.add(`${ROOT_URL}/how-long/${h.slug}/`);
    });
  }

  // Refreeze guides
  const refreezeRes = readJsonSafe('src/data/refreeze.json', []);
  if (Array.isArray(refreezeRes.data)) {
    stats.refreeze = refreezeRes.data.length;
    refreezeRes.data.forEach(r => {
      if (r && r.slug) urls.add(`${ROOT_URL}/refreeze/${r.slug}/`);
    });
  }

  // High-volume consumer appliance items
  const itemsRes = readJsonSafe('src/data/items.json', []);
  if (itemsRes.error) {
    console.warn(`⚠️ Could not load items.json: ${itemsRes.error}`);
  }
  if (Array.isArray(itemsRes.data)) {
    stats.items = itemsRes.data.length;
    itemsRes.data.forEach(i => {
      if (i && i.appliance && i.slug) {
        urls.add(`${ROOT_URL}/${i.appliance}/${i.slug}/`);
      }
    });
  }

  return {
    urls: Array.from(urls),
    allowlistedToolSlugs,
    stats
  };
}

// 3. Extract canonical URLs from built dist/sitemap-0.xml (and any extra shards)
function extractSitemapUrls() {
  if (!fs.existsSync(PRIMARY_SITEMAP_FILE)) {
    return {
      exists: false,
      filesScanned: [],
      urls: [],
      invalidHostCount: 0
    };
  }

  const sitemapFiles = [PRIMARY_SITEMAP_FILE];
  try {
    const extraShards = fs
      .readdirSync(DIST_DIR)
      .filter(name => /^sitemap-\d+\.xml$/i.test(name) && name.toLowerCase() !== 'sitemap-0.xml')
      .sort()
      .map(name => path.join(DIST_DIR, name));
    sitemapFiles.push(...extraShards);
  } catch (e) {}

  const urlSet = new Set();
  let invalidHostCount = 0;
  const locRegex = /<loc>\s*(https?:\/\/[^<\s]+)\s*<\/loc>/gi;

  for (const filePath of sitemapFiles) {
    const xml = fs.readFileSync(filePath, 'utf8');
    let match;
    while ((match = locRegex.exec(xml)) !== null) {
      const candidate = match[1].trim();
      if (candidate.startsWith(`${ROOT_URL}/`) || candidate === ROOT_URL) {
        urlSet.add(candidate);
      } else {
        invalidHostCount++;
      }
    }
  }

  return {
    exists: true,
    filesScanned: sitemapFiles.map(f => path.relative(PROJECT_ROOT, f)),
    urls: Array.from(urlSet),
    invalidHostCount
  };
}

// 4. Build & validate IndexNow JSON batch payloads
function buildAndValidateBatches(allUrls) {
  const batches = [];
  const validationErrors = [];
  let totalPayloadBytes = 0;

  for (let i = 0; i < allUrls.length; i += BATCH_SIZE) {
    const urlList = allUrls.slice(i, i + BATCH_SIZE);
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList
    };

    if (urlList.length === 0 || urlList.length > INDEXNOW_MAX_URLS_PER_BATCH) {
      validationErrors.push(`Batch ${batches.length + 1} has invalid urlList size (${urlList.length})`);
    }

    const badUrl = urlList.find(u => !u.startsWith(`${ROOT_URL}/`) && u !== ROOT_URL);
    if (badUrl) {
      validationErrors.push(`Batch ${batches.length + 1} contains non-${HOST} URL: ${badUrl}`);
    }

    const serialized = JSON.stringify(payload);
    const bytes = Buffer.byteLength(serialized, 'utf8');
    totalPayloadBytes += bytes;

    batches.push({
      index: batches.length + 1,
      payload,
      bytes
    });
  }

  return {
    ok: validationErrors.length === 0 && batches.length > 0,
    batches,
    totalPayloadBytes,
    validationErrors
  };
}

// 5. Verify priority consumer URLs are represented in the merged submission set
function verifyPriorityConsumerInclusion(mergedUrlSet, allowlistedToolSlugs) {
  const requiredConsumerHubs = [
    `${ROOT_URL}/`,
    `${ROOT_URL}/tools/`,
    `${ROOT_URL}/methodology/`,
    `${ROOT_URL}/saved/`,
    `${ROOT_URL}/blog/`,
    `${ROOT_URL}/compare/`,
    `${ROOT_URL}/rss.xml`,
    ...APPLIANCES.map(app => `${ROOT_URL}/${app}/`)
  ];

  const missingHubs = requiredConsumerHubs.filter(u => !mergedUrlSet.has(u));
  const missingTools = allowlistedToolSlugs
    .map(slug => `${ROOT_URL}/tools/${slug}/`)
    .filter(u => !mergedUrlSet.has(u));

  return {
    ok: missingHubs.length === 0 && missingTools.length === 0,
    hubsChecked: requiredConsumerHubs.length,
    hubsPresent: requiredConsumerHubs.length - missingHubs.length,
    toolsChecked: allowlistedToolSlugs.length,
    toolsPresent: allowlistedToolSlugs.length - missingTools.length,
    missingHubs,
    missingTools
  };
}

// Send HTTP POST request (never invoked in --dry-run mode)
function sendIndexNow(endpointHost, endpointPath, payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const options = {
      hostname: endpointHost,
      port: 443,
      path: endpointPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data),
        'User-Agent': 'IsItKitchenSafe-IndexNow-Bot/1.1 (+https://isitkitchensafe.com)'
      },
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body
        });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('IndexNow request timed out (10s)'));
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(data);
    req.end();
  });
}

async function main() {
  const { dryRun, help } = parseCliArgs(process.argv);
  if (help) {
    printUsage();
    return;
  }

  const modeLabel = dryRun ? 'DRY-RUN VERIFICATION' : 'LIVE SUBMISSION';
  console.log(`🚀 [IndexNow Engine] Starting ${modeLabel} for ${HOST}...`);

  // Step 1: Key file validation
  const keyCheck = verifyKeyFile();
  if (keyCheck.ok) {
    const distNote = keyCheck.distExists
      ? (keyCheck.distKeyMatches ? ' + dist key verified' : ' (dist key missing)')
      : ' (dist/ not built yet — skipped build artifact check)';
    console.log(`🔑 [Key Check] PASS: public/${INDEXNOW_KEY}.txt verified${distNote}`);
  } else {
    keyCheck.errors.forEach(err => console.error(`❌ [Key Check] FAIL: ${err}`));
    process.exit(1);
  }
  keyCheck.warnings.forEach(warn => console.warn(`⚠️ [Key Check] ${warn}`));

  // Step 2: Collect priority consumer URLs
  const priority = collectPriorityUrls();
  console.log(
    `📊 [Priority URLs] Collected ${priority.urls.length} consumer URLs ` +
    `(hubs: ${priority.stats.coreHubs}, allowlisted tools: ${priority.stats.consumerToolsAllowlisted} × 5 langs = ${priority.stats.consumerToolsUrls}, ` +
    `blogs: ${priority.stats.blogs} × 5 langs, comparisons: ${priority.stats.comparisons}, how-long: ${priority.stats.howLong}, ` +
    `refreeze: ${priority.stats.refreeze}, items: ${priority.stats.items})`
  );

  // Step 3: Extract URLs from dist/sitemap-0.xml when available
  const sitemap = extractSitemapUrls();
  if (sitemap.exists) {
    console.log(
      `🗺️ [Sitemap Check] Extracted ${sitemap.urls.length} canonical URLs from ${sitemap.filesScanned.join(', ')}` +
      (sitemap.invalidHostCount > 0 ? ` (filtered ${sitemap.invalidHostCount} non-${HOST} URLs)` : '')
    );
  } else {
    console.log(
      `ℹ️ [Sitemap Check] dist/sitemap-0.xml not found (run "npm run build" to include full sitemap URLs); ` +
      `proceeding with source-derived priority consumer URLs.`
    );
  }

  // Merge: keep priority consumer URLs first so Batch 1 always leads with highest-intent pages
  const mergedSet = new Set([...priority.urls, ...sitemap.urls]);
  const allUrls = Array.from(mergedSet);
  console.log(`🔗 [URL Set] Total deduplicated submission URLs: ${allUrls.length}`);

  // Step 4: Verify priority consumer inclusion
  const inclusion = verifyPriorityConsumerInclusion(mergedSet, priority.allowlistedToolSlugs);
  if (inclusion.ok) {
    console.log(
      `✅ [Consumer Priority Check] PASS: ${inclusion.hubsPresent}/${inclusion.hubsChecked} core consumer hubs & ` +
      `${inclusion.toolsPresent}/${inclusion.toolsChecked} allowlisted consumer tools present.`
    );
  } else {
    console.error('❌ [Consumer Priority Check] FAIL: Missing required consumer URLs.');
    if (inclusion.missingHubs.length) console.error('   Missing hubs:', inclusion.missingHubs.join(', '));
    if (inclusion.missingTools.length) console.error('   Missing tools:', inclusion.missingTools.join(', '));
    process.exit(1);
  }

  // Step 5: Build & validate IndexNow JSON batches
  const batchCheck = buildAndValidateBatches(allUrls);
  if (!batchCheck.ok) {
    batchCheck.validationErrors.forEach(err => console.error(`❌ [Batch Validation] ${err}`));
    process.exit(1);
  }
  console.log(
    `📦 [Batch Validation] PASS: Prepared ${batchCheck.batches.length} batch(es) ` +
    `(max ${BATCH_SIZE}/batch, IndexNow limit ${INDEXNOW_MAX_URLS_PER_BATCH}, ` +
    `total payload ${(batchCheck.totalPayloadBytes / 1024).toFixed(1)} KB).`
  );

  const endpoints = [
    { host: 'api.indexnow.org', path: '/indexnow', name: 'IndexNow Central (Bing, Yandex, Seznam)' },
    { host: 'www.bing.com', path: '/indexnow', name: 'Microsoft Bing Directly' }
  ];

  // Dry-run stops cleanly here with zero outbound HTTP calls
  if (dryRun) {
    const sampleTools = priority.allowlistedToolSlugs
      .slice(-5)
      .map(slug => `${ROOT_URL}/tools/${slug}/`);

    console.log('\n🧪 [DRY-RUN SUMMARY]');
    console.log(`   Key Location : ${KEY_LOCATION}`);
    console.log(`   Target Hosts : ${endpoints.map(ep => `${ep.host}${ep.path}`).join(', ')}`);
    console.log(`   Batch Plan   : ${batchCheck.batches.map(b => `#${b.index}:${b.payload.urlList.length} urls (${(b.bytes / 1024).toFixed(1)} KB)`).join(' | ')}`);
    console.log(`   Sample Tools : ${sampleTools.join(', ')}`);
    console.log('   Network I/O  : 0 HTTP requests sent (--dry-run enabled)');
    console.log('\n✅ [IndexNow Engine] Dry-run verification passed with exit code 0!');
    return;
  }

  // Live submission mode
  for (const batch of batchCheck.batches) {
    console.log(`\n📤 [Batch ${batch.index}/${batchCheck.batches.length}] Submitting ${batch.payload.urlList.length} URLs...`);

    for (const ep of endpoints) {
      try {
        console.log(`   Pinging ${ep.name}...`);
        const res = await sendIndexNow(ep.host, ep.path, batch.payload);
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`   ✅ Success (${res.statusCode} ${res.statusMessage}) from ${ep.host}`);
        } else {
          console.log(`   ℹ️ Response (${res.statusCode} ${res.statusMessage}) from ${ep.host}`);
        }
      } catch (err) {
        console.log(`   ⚠️ Network notice for ${ep.host}: ${err.message}`);
      }
    }
  }

  console.log('\n🎉 [IndexNow Engine] Submission workflow completed!');
}

main().catch(err => {
  console.error('Fatal IndexNow error:', err);
  process.exit(1);
});
