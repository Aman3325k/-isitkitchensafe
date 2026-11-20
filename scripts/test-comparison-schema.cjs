// Test harness for Comparisons data & schema across all 5 languages
const fs = require('fs');
const path = require('path');

const locales = ['en', 'es', 'pt', 'zh-cn', 'ja'];
const files = {
  en: path.resolve('src/data/comparisons.json'),
  es: path.resolve('src/data/comparisons.es.json'),
  pt: path.resolve('src/data/comparisons.pt.json'),
  'zh-cn': path.resolve('src/data/comparisons.zh-cn.json'),
  ja: path.resolve('src/data/comparisons.ja.json')
};

const specs = require('../src/data/specs/compare.cjs');
const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const blogs = JSON.parse(fs.readFileSync('src/data/blog.json', 'utf8'));

let totalChecks = 0;
let errors = [];

const datasets = {};
for (const loc of locales) {
  datasets[loc] = JSON.parse(fs.readFileSync(files[loc], 'utf8'));
  console.log(`Loaded ${loc}: ${datasets[loc].length} items`);
  if (datasets[loc].length !== 113) {
    errors.push(`Expected 113 items in ${loc}, got ${datasets[loc].length}`);
  }
}

const canonicalSlugs = datasets['en'].map(c => c.slug);
const wave39Slugs = [
  'enameled-steel-vs-enameled-cast-iron',
  'stoneware-vs-porcelain-bakeware',
  'silicone-sponge-vs-cellulose-sponge',
  'cast-iron-vs-nonstick-waffle-maker',
  'sous-vide-bag-vs-silicone-bag'
];

for (const loc of locales) {
  const list = datasets[loc];
  const slugs = list.map(c => c.slug);

  for (let i = 0; i < canonicalSlugs.length; i++) {
    totalChecks++;
    if (slugs[i] !== canonicalSlugs[i]) {
      errors.push(`Slug mismatch at index ${i} in ${loc}: expected ${canonicalSlugs[i]}, got ${slugs[i]}`);
    }

    const item = list[i];
    totalChecks++;
    if (!item.item1 || !item.item2 || !item.verdict) {
      errors.push(`Missing mandatory fields for ${item.slug} in ${loc}`);
    }

    totalChecks++;
    if (!Array.isArray(item.table) || item.table.length < 3) {
      errors.push(`Table has fewer than 3 rows for ${item.slug} in ${loc}`);
    }

    // For Wave 39 items, assert full rich specs
    if (wave39Slugs.includes(item.slug)) {
      totalChecks++;
      if (!Array.isArray(item.item1Pros) || item.item1Pros.length < 4) {
        errors.push(`item1Pros has fewer than 4 items for Wave 39 item ${item.slug} in ${loc}`);
      }

      totalChecks++;
      if (!Array.isArray(item.item2Pros) || item.item2Pros.length < 4) {
        errors.push(`item2Pros has fewer than 4 items for Wave 39 item ${item.slug} in ${loc}`);
      }

      totalChecks++;
      if (!Array.isArray(item.useCases) || item.useCases.length < 3) {
        errors.push(`useCases has fewer than 3 items for Wave 39 item ${item.slug} in ${loc}`);
      }

      totalChecks++;
      if (!Array.isArray(item.safetyNotes) || item.safetyNotes.length < 3) {
        errors.push(`safetyNotes has fewer than 3 items for Wave 39 item ${item.slug} in ${loc}`);
      }

      totalChecks++;
      if (!Array.isArray(item.faqs) || item.faqs.length < 2) {
        errors.push(`faqs has fewer than 2 items for Wave 39 item ${item.slug} in ${loc}`);
      }

      totalChecks++;
      if (!Array.isArray(item.technicalSpecs) || item.technicalSpecs.length < 3) {
        errors.push(`technicalSpecs has fewer than 3 items for Wave 39 item ${item.slug} in ${loc}`);
      }
    }

    if (loc === 'en') {
      totalChecks++;
      if (!specs[item.slug]) {
        errors.push(`Missing technical spec in compare.cjs for ${item.slug}`);
      }

      // Check wave 39 links explicitly
      if (wave39Slugs.includes(item.slug)) {
        totalChecks++;
        for (const rel of item.relatedComparisons) {
          if (!canonicalSlugs.includes(rel)) {
            errors.push(`Invalid related comparison slug "${rel}" in ${item.slug}`);
          }
        }

        totalChecks++;
        for (const relUrl of item.relatedItems) {
          if (relUrl.startsWith('/tools/')) {
            const toolSlug = relUrl.replace('/tools/', '').replace('/', '');
            if (!fs.existsSync(`src/pages/tools/${toolSlug}.astro`)) {
              errors.push(`Invalid related tool URL "${relUrl}" in ${item.slug}`);
            }
          } else if (relUrl.startsWith('/blog/')) {
            const blogSlug = relUrl.replace('/blog/', '').replace('/', '');
            if (!blogs.some(b => b.slug === blogSlug)) {
              errors.push(`Invalid related blog URL "${relUrl}" in ${item.slug}`);
            }
          } else {
            const parts = relUrl.split('/').filter(Boolean);
            const found = items.find(it => it.appliance === parts[0] && it.slug === parts[1]);
            if (!found) {
              errors.push(`Invalid related item URL "${relUrl}" in ${item.slug}`);
            }
          }
        }
      }
    }
  }
}

console.log('====================================================');
console.log(`Total Checks Executed: ${totalChecks}`);
console.log(`Errors Found: ${errors.length}`);
console.log('====================================================');

if (errors.length > 0) {
  console.error('❌ Errors:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('✅ ALL 113 COMPARISONS VALIDATED ACROSS ALL 5 LANGUAGES WITH ZERO DEFECTS!');
}
