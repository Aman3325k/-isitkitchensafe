#!/usr/bin/env node

/**
 * IsItKitchenSafe - IndexNow Real-Time Discovery Engine
 * 
 * Automatically submits high-priority website URLs to Bing, Yandex, Seznam,
 * and IndexNow-enabled search engines & AI crawlers for instant indexing.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'isitkitchensafe.com';
const INDEXNOW_KEY = 'c7b41e89f92d44748d88df1762e8412e';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// Collect priority URLs
function collectPriorityUrls() {
  const urls = new Set();
  const root = `https://${HOST}`;

  // Core pages
  urls.add(`${root}/`);
  urls.add(`${root}/about/`);
  urls.add(`${root}/privacy/`);
  urls.add(`${root}/terms/`);
  urls.add(`${root}/disclaimer/`);
  urls.add(`${root}/sitemap-page/`);
  urls.add(`${root}/tools/`);
  urls.add(`${root}/blog/`);
  urls.add(`${root}/compare/`);
  urls.add(`${root}/material/`);
  urls.add(`${root}/how-long/`);
  urls.add(`${root}/refreeze/`);
  urls.add(`${root}/washing-machine/`);
  urls.add(`${root}/what-happens/`);

  // Appliances
  const appliances = ['dishwasher', 'microwave', 'freezer', 'oven', 'dryer', 'airfryer', 'refrigerator'];
  appliances.forEach(app => urls.add(`${root}/${app}/`));

  // High-volume consumer items
  const itemsPath = path.join(__dirname, '../src/data/items.json');
  if (fs.existsSync(itemsPath)) {
    try {
      const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));
      // Prioritize top items
      items.forEach(i => {
        urls.add(`${root}/${i.appliance}/${i.slug}/`);
      });
    } catch (e) {
      console.warn('⚠️ Could not load items.json:', e.message);
    }
  }

  // Blog posts
  const blogPath = path.join(__dirname, '../src/data/blog.json');
  if (fs.existsSync(blogPath)) {
    try {
      const blogs = JSON.parse(fs.readFileSync(blogPath, 'utf8'));
      blogs.forEach(b => urls.add(`${root}/blog/${b.slug}/`));
    } catch (e) {}
  }

  // How long guides
  const howLongPath = path.join(__dirname, '../src/data/how-long.json');
  if (fs.existsSync(howLongPath)) {
    try {
      const hl = JSON.parse(fs.readFileSync(howLongPath, 'utf8'));
      hl.forEach(h => urls.add(`${root}/how-long/${h.slug}/`));
    } catch (e) {}
  }

  // Tools
  const toolsDir = path.join(__dirname, '../src/pages/tools');
  if (fs.existsSync(toolsDir)) {
    try {
      const toolFiles = fs.readdirSync(toolsDir).filter(f => f.endsWith('.astro') && f !== 'index.astro');
      toolFiles.forEach(tf => {
        const slug = tf.replace('.astro', '');
        urls.add(`${root}/tools/${slug}/`);
      });
    } catch (e) {}
  }

  return Array.from(urls);
}

// Send HTTP POST request
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
        'User-Agent': 'IsItKitchenSafe-IndexNow-Bot/1.0 (+https://isitkitchensafe.com)'
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
  console.log('🚀 [IndexNow Engine] Starting real-time submission to search engines...');
  const allUrls = collectPriorityUrls();
  console.log(`📊 [IndexNow Engine] Collected ${allUrls.length} priority canonical URLs.`);

  // Chunk into batches of up to 5,000 URLs (IndexNow limit is 10,000)
  const batchSize = 1000;
  const batches = [];
  for (let i = 0; i < allUrls.length; i += batchSize) {
    batches.push(allUrls.slice(i, i + batchSize));
  }

  console.log(`📦 [IndexNow Engine] Prepared ${batches.length} submission batch(es).`);

  const endpoints = [
    { host: 'api.indexnow.org', path: '/indexnow', name: 'IndexNow Central (Bing, Yandex, Seznam)' },
    { host: 'www.bing.com', path: '/indexnow', name: 'Microsoft Bing Directly' }
  ];

  for (let b = 0; b < batches.length; b++) {
    const batch = batches[b];
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch
    };

    console.log(`\n📤 [Batch ${b + 1}/${batches.length}] Submitting ${batch.length} URLs...`);

    for (const ep of endpoints) {
      try {
        console.log(`   Pinging ${ep.name}...`);
        const res = await sendIndexNow(ep.host, ep.path, payload);
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
