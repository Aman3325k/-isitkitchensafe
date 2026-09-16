const fs = require('node:fs');
const path = require('node:path');

function getSampleFiles(dir, max = 100) {
  const files = [];
  function scan(d) {
    if (files.length >= max) return;
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      if (files.length >= max) return;
      const full = path.join(d, e.name);
      if (e.isDirectory()) {
        scan(full);
      } else if (e.name === 'index.html') {
        files.push(full);
      }
    }
  }
  scan(dir);
  return files;
}

const samples = getSampleFiles(path.resolve('dist'), 200);
console.log(`Inspecting ${samples.length} HTML files for SEO Meta Tag integrity...`);

let missingTitle = 0;
let missingDesc = 0;
let missingCanonical = 0;
let nonCanonicalSlash = 0;
let hreflangIssues = 0;

for (const f of samples) {
  const content = fs.readFileSync(f, 'utf8');

  // Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch || titleMatch[1].trim().length === 0) missingTitle++;

  // Meta Description
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!descMatch || descMatch[1].trim().length === 0) missingDesc++;

  // Canonical
  const canonMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  if (!canonMatch || canonMatch[1].trim().length === 0) {
    missingCanonical++;
  } else {
    const href = canonMatch[1];
    if (!href.endsWith('/')) nonCanonicalSlash++;
  }

  // Hreflang
  const hreflangs = Array.from(content.matchAll(/<link\s+rel="alternate"\s+hreflang="([^"]*)"\s+href="([^"]*)"/gi));
  if (hreflangs.length > 0) {
    for (const h of hreflangs) {
      if (!h[2].endsWith('/')) hreflangIssues++;
    }
  }
}

console.log(`Results across ${samples.length} sample pages:`);
console.log(`- Missing <title>: ${missingTitle}`);
console.log(`- Missing <meta description>: ${missingDesc}`);
console.log(`- Missing <link rel="canonical">: ${missingCanonical}`);
console.log(`- Canonical without trailing slash: ${nonCanonicalSlash}`);
console.log(`- Hreflang without trailing slash: ${hreflangIssues}`);
