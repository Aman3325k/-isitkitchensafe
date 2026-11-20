// Test harness for Wave 43 Comparisons data & schema across all 5 languages
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
  if (datasets[loc].length !== 123) {
    errors.push(`Expected 123 items in ${loc}, got ${datasets[loc].length}`);
  }
}

const canonicalSlugs = datasets['en'].map(c => c.slug);
const wave43Slugs = [
  'stainless-steel-vs-plastic-colander',
  'glass-vs-wood-cutting-board',
  'ceramic-vs-stainless-steel-knife',
  'stainless-steel-vs-glass-mixing-bowls',
  'enameled-cast-iron-vs-stainless-steel-dutch-oven'
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

    // For Wave 43 items, assert full rich specs
    if (wave43Slugs.includes(item.slug)) {
      totalChecks++;
      if (!Array.isArray(item.item1Pros) || item.item1Pros.length < 4) {
        errors.push(`item1Pros has fewer than 4 items for Wave 43 item ${item.slug} in ${loc}`);
      }

      totalChecks++;
      if (!Array.isArray(item.item2Pros) || item.item2Pros.length < 4) {
        errors.push(`item2Pros has fewer than 4 items for Wave 43 item ${item.slug} in ${loc}`);
      }

      totalChecks++;
      if (!Array.isArray(item.useCases) || item.useCases.length < 3) {
        errors.push(`useCases has fewer than 3 items for Wave 43 item ${item.slug} in ${loc}`);
      }

      totalChecks++;
      if (!Array.isArray(item.safetyNotes) || item.safetyNotes.length < 3) {
        errors.push(`safetyNotes has fewer than 3 items for Wave 43 item ${item.slug} in ${loc}`);
      }

      totalChecks++;
      if (!Array.isArray(item.faqs) || item.faqs.length < 2) {
        errors.push(`faqs has fewer than 2 items for Wave 43 item ${item.slug} in ${loc}`);
      }

      totalChecks++;
      if (!Array.isArray(item.technicalSpecs) || item.technicalSpecs.length < 3) {
        errors.push(`technicalSpecs has fewer than 3 items for Wave 43 item ${item.slug} in ${loc}`);
      }
    }

    if (loc === 'en') {
      totalChecks++;
      if (!specs[item.slug]) {
        errors.push(`Missing technical spec in compare.cjs for ${item.slug}`);
      }

      // Check wave 43 links explicitly
      if (wave43Slugs.includes(item.slug)) {
        if (item.relatedComparisons) {
          for (const rel of item.relatedComparisons) {
            totalChecks++;
            if (!canonicalSlugs.includes(rel)) {
              errors.push(`Dead relatedComparison slug "${rel}" in ${item.slug}`);
            }
          }
        }

        if (item.relatedItems) {
          for (const relItem of item.relatedItems) {
            totalChecks++;
            // Must be valid tool, item or vertical
            const cleanPath = relItem.replace(/^\//, '').replace(/\/$/, '');
            const parts = cleanPath.split('/');
            if (parts[0] === 'tools') {
              const toolFileAstro = path.resolve(`src/pages/tools/${parts[1]}.astro`);
              if (!fs.existsSync(toolFileAstro)) {
                errors.push(`Dead tool link "${relItem}" in ${item.slug}`);
              }
            } else if (parts.length === 2) {
              const vertical = parts[0];
              const itemSlug = parts[1];
              const itemExists = items.some(it => it.slug === itemSlug);
              if (!itemExists) {
                errors.push(`Dead item link "${relItem}" in ${item.slug}`);
              }
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
if (errors.length > 0) {
  console.error('Validation Errors:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('✅ ALL 123 COMPARISONS VALIDATED ACROSS ALL 5 LANGUAGES WITH ZERO DEFECTS!');
}
