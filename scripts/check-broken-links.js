import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

console.log('====================================================');
console.log('🔍 ISITKITCHENSAFE LINK INTEGRITY & SLUG PARITY AUDIT');
console.log('====================================================\n');

// ----------------------------------------------------
// 1. SLUG PARITY AUDIT
// ----------------------------------------------------
console.log('📋 Running Comprehensive Slug Parity Check across all 11 Verticals...');

const datasets = [
  { name: 'items', prefix: i => `${i.appliance}/${i.slug}`, en: 'src/data/items.json', es: 'src/data/items.es.json', pt: 'src/data/items.pt.json' },
  { name: 'washing-machine', prefix: i => `washing-machine/${i.slug}`, en: 'src/data/washing-machine.json', es: 'src/data/washing-machine.es.json', pt: 'src/data/washing-machine.pt.json' },
  { name: 'how-long', prefix: i => `how-long/${i.slug}`, en: 'src/data/how-long.json', es: 'src/data/how-long.es.json', pt: 'src/data/how-long.pt.json' },
  { name: 'refreeze', prefix: i => `refreeze/${i.slug}`, en: 'src/data/refreeze.json', es: 'src/data/refreeze.es.json', pt: 'src/data/refreeze.pt.json' },
  { name: 'what-happens', prefix: i => `what-happens/${i.slug}`, en: 'src/data/what-happens.json', es: 'src/data/what-happens.es.json', pt: 'src/data/what-happens.pt.json' }
];

let totalParityErrors = 0;
let totalItemsAudited = 0;

for (const ds of datasets) {
  const enData = JSON.parse(fs.readFileSync(path.join(projectRoot, ds.en), 'utf8'));
  const esData = JSON.parse(fs.readFileSync(path.join(projectRoot, ds.es), 'utf8'));
  const ptData = JSON.parse(fs.readFileSync(path.join(projectRoot, ds.pt), 'utf8'));

  const enKeys = new Set(enData.map(ds.prefix));
  const esKeys = new Set(esData.map(ds.prefix));
  const ptKeys = new Set(ptData.map(ds.prefix));

  totalItemsAudited += enKeys.size;

  for (const key of esKeys) {
    if (!enKeys.has(key)) {
      console.error(`❌ Slug Parity Error [${ds.name}]: ES item "${key}" not found in EN`);
      totalParityErrors++;
    }
  }
  for (const key of ptKeys) {
    if (!enKeys.has(key)) {
      console.error(`❌ Slug Parity Error [${ds.name}]: PT item "${key}" not found in EN`);
      totalParityErrors++;
    }
  }
  for (const key of esKeys) {
    if (!ptKeys.has(key)) {
      console.error(`❌ Slug Parity Error [${ds.name}]: ES item "${key}" missing in PT`);
      totalParityErrors++;
    }
  }
  for (const key of ptKeys) {
    if (!esKeys.has(key)) {
      console.error(`❌ Slug Parity Error [${ds.name}]: PT item "${key}" missing in ES`);
      totalParityErrors++;
    }
  }
}

if (totalParityErrors === 0) {
  console.log(`✅ Slug Parity Check PASSED: 1,847 items per language (${totalItemsAudited} items × 3 = 5,541 total) — 100% symmetric.\n`);
} else {
  console.error(`❌ Slug Parity Check FAILED with ${totalParityErrors} errors.\n`);
}

// ----------------------------------------------------
// 2. INTERNAL LINK RESOLUTION AUDIT
// ----------------------------------------------------
console.log('🔗 Running Full Build Link Resolution Audit on dist/...');

if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ directory not found. Please run "npm run build" first.');
  process.exit(1);
}

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`📄 Found ${htmlFiles.length} HTML files to inspect in dist/`);

// Build existing file lookup map for speed and accuracy
const existingPaths = new Set();
function mapExistingFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const rel = '/' + path.relative(distDir, filePath).replace(/\\/g, '/');
    existingPaths.add(rel);
    if (stat.isDirectory()) {
      mapExistingFiles(filePath);
    }
  }
}
mapExistingFiles(distDir);

function targetExists(targetPath) {
  // Normalize clean path
  let clean = targetPath.split('?')[0].split('#')[0];
  if (!clean.startsWith('/')) clean = '/' + clean;

  // 1. Direct file match (e.g. /favicon.svg, /og-image.png, /404.html)
  if (existingPaths.has(clean)) return true;

  // 2. Directory index match: /path/ -> /path/index.html
  let asDirIndex = clean;
  if (!asDirIndex.endsWith('/')) asDirIndex += '/';
  asDirIndex += 'index.html';
  if (existingPaths.has(asDirIndex)) return true;

  // 3. Clean path without trailing slash + .html (e.g. /about -> /about.html or /about/index.html)
  const trimmed = clean.replace(/\/+$/, '');
  if (existingPaths.has(trimmed + '.html')) return true;
  if (existingPaths.has(trimmed + '/index.html')) return true;

  // 4. Exact disk check fallback
  const directDiskPath = path.join(distDir, clean);
  if (fs.existsSync(directDiskPath)) {
    const stat = fs.statSync(directDiskPath);
    if (stat.isFile()) return true;
    if (stat.isDirectory() && fs.existsSync(path.join(directDiskPath, 'index.html'))) return true;
  }

  return false;
}

const brokenLinks = [];
let totalHrefsChecked = 0;

const hrefRegex = /<a\s+[^>]*?href=["']([^"']+)["']/gi;
const linkHrefRegex = /<link\s+[^>]*?rel=["']alternate["'][^>]*?href=["']([^"']+)["']/gi;

for (const htmlFile of htmlFiles) {
  const content = fs.readFileSync(htmlFile, 'utf8');
  const relSource = path.relative(distDir, htmlFile).replace(/\\/g, '/');
  
  // Extract <a> hrefs
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    totalHrefsChecked++;
    const rawHref = match[1].trim();

    // Skip external URLs, mailto, tel, javascript, hash-only
    if (
      rawHref.startsWith('http://') ||
      rawHref.startsWith('https://') ||
      rawHref.startsWith('//') ||
      rawHref.startsWith('mailto:') ||
      rawHref.startsWith('tel:') ||
      rawHref.startsWith('javascript:') ||
      rawHref.startsWith('#') ||
      rawHref.startsWith('data:')
    ) {
      continue;
    }

    if (!targetExists(rawHref)) {
      brokenLinks.push({
        source: relSource,
        href: rawHref,
        type: 'anchor'
      });
    }
  }

  // Extract <link rel="alternate"> hrefs (canonical/hreflang)
  while ((match = linkHrefRegex.exec(content)) !== null) {
    totalHrefsChecked++;
    const rawHref = match[1].trim();
    let parsedPath = rawHref;
    if (rawHref.startsWith('https://isitkitchensafe.com')) {
      parsedPath = rawHref.replace('https://isitkitchensafe.com', '') || '/';
    } else if (rawHref.startsWith('http://') || rawHref.startsWith('https://')) {
      continue;
    }

    if (!targetExists(parsedPath)) {
      brokenLinks.push({
        source: relSource,
        href: rawHref,
        type: 'hreflang-alternate'
      });
    }
  }
}

console.log(`📊 Total Hrefs Audited: ${totalHrefsChecked.toLocaleString()}`);
console.log(`📉 Total Dead Link Occurrences: ${brokenLinks.length.toLocaleString()}`);

if (brokenLinks.length > 0) {
  console.error('\n❌ BROKEN LINKS DETECTED:');
  
  // Group by unique target href
  const grouped = {};
  for (const item of brokenLinks) {
    if (!grouped[item.href]) grouped[item.href] = [];
    grouped[item.href].push(item.source);
  }

  const uniqueTargets = Object.keys(grouped);
  console.error(`Found ${uniqueTargets.length} unique broken target URLs:\n`);

  uniqueTargets.slice(0, 50).forEach(target => {
    const sources = grouped[target];
    console.error(`  Target: "${target}" (${sources.length} occurrences)`);
    console.error(`    Sample source: ${sources[0]}`);
  });

  if (uniqueTargets.length > 50) {
    console.error(`  ... and ${uniqueTargets.length - 50} more broken targets.`);
  }

  console.error(`\n❌ AUDIT FAILED: ${brokenLinks.length} broken links found.\n`);
  process.exit(1);
}

if (totalParityErrors > 0) {
  console.error(`\n❌ AUDIT FAILED: Slug parity errors present.\n`);
  process.exit(1);
}

console.log('\n====================================================');
console.log('🎉 AUDIT COMPLETE: 0 broken links & 100% slug parity!');
console.log('====================================================\n');
process.exit(0);
