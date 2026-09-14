const fs = require('node:fs');
const path = require('node:path');

const DIST_DIR = path.resolve(__dirname, '../dist');

const SAMPLE_PAGES = [
  'index.html',
  'ja/index.html',
  'es/index.html',
  'pt/index.html',
  'zh-cn/index.html',
  'dishwasher/index.html',
  'ja/dishwasher/index.html',
  'material/silicone/index.html',
  'ja/material/silicone/index.html',
  'dishwasher/hydroflask/index.html',
  'ja/dishwasher/hydroflask/index.html',
  'blog/things-you-should-never-microwave/index.html',
  'ja/blog/things-you-should-never-microwave/index.html',
  'compare/index.html',
  'how-long/index.html',
  'refreeze/index.html',
  'washing-machine/index.html',
  'what-happens/index.html',
  'about/index.html',
  'contact/index.html',
  'privacy/index.html',
  'terms/index.html',
  'sitemap-page/index.html',
  '404.html',
  '500.html'
];

console.log('====================================================');
console.log('🧪 Validating HTML Samples: Duplicate IDs, Alt Text, Nesting');
console.log('====================================================\n');

let totalErrors = 0;

for (const pageRel of SAMPLE_PAGES) {
  const filePath = path.join(DIST_DIR, pageRel);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  File not found: ${pageRel}`);
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // 1. Check duplicate IDs
  const idRegex = /\bid=["']([^"']+)["']/gi;
  const ids = new Map();
  let match;
  while ((match = idRegex.exec(html)) !== null) {
    const id = match[1];
    ids.set(id, (ids.get(id) || 0) + 1);
  }

  const duplicates = [];
  for (const [id, count] of ids.entries()) {
    if (count > 1) {
      duplicates.push(`${id} (${count}x)`);
    }
  }

  if (duplicates.length > 0) {
    console.error(`❌ [${pageRel}] Duplicate IDs found:`, duplicates.join(', '));
    totalErrors++;
  } else {
    console.log(`✓ [${pageRel}] Zero duplicate IDs`);
  }

  // 2. Check missing img alt
  const imgRegex = /<img\b([^>]*?)>/gi;
  while ((match = imgRegex.exec(html)) !== null) {
    const attrs = match[1];
    if (!/\balt=["'][^"']*["']/i.test(attrs)) {
      console.error(`❌ [${pageRel}] <img> tag missing alt attribute: ${match[0]}`);
      totalErrors++;
    }
  }
}

console.log(`\n====================================================`);
if (totalErrors === 0) {
  console.log('✅ HTML Validation PASSED: 0 duplicate IDs, all images have alt attributes');
} else {
  console.error(`❌ HTML Validation FAILED with ${totalErrors} errors`);
}
console.log('====================================================\n');
