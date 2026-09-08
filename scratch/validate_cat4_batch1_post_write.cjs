const fs = require('fs');

console.log('=== STEP 2: POST-WRITE RE-VALIDATION FRESH FROM DISK ===\n');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const batchSlugs = ['raw-chicken', 'cooked-chicken', 'chicken-breast', 'chicken-wings', 'turkey-breast'];
const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material', 'keyRisk', 'tip', 'learnMore'
];

const materialExpectations = {
  'raw-chicken': { es: 'Carne de Ave Cruda', pt: 'Carne de Ave Crua' },
  'cooked-chicken': { es: 'Carne de Ave Cocida', pt: 'Carne de Ave Cozida' },
  'chicken-breast': { es: 'Carne de Ave Cruda', pt: 'Carne de Ave Crua' },
  'chicken-wings': { es: 'Carne de Ave Cruda', pt: 'Carne de Ave Crua' },
  'turkey-breast': { es: 'Carne de Ave Cruda', pt: 'Carne de Ave Crua' }
};

let totalChecks = 0;
let failures = 0;

function check(condition, message) {
  totalChecks++;
  if (!condition) {
    failures++;
    console.error(`  FAIL: ${message}`);
  }
}

check(es.length === 712, `items.es.json total count is 712 (got ${es.length})`);
check(pt.length === 712, `items.pt.json total count is 712 (got ${pt.length})`);

['es', 'pt'].forEach(lang => {
  const db = lang === 'es' ? es : pt;
  console.log(`\n--- Validating ${lang.toUpperCase()} fresh from disk ---`);

  batchSlugs.forEach((slug, idx) => {
    const enItem = en.find(x => x.slug === slug && x.appliance === 'freezer');
    check(enItem !== undefined, `[${lang}][${slug}] EN freezer item exists`);

    const liveMatches = db.filter(x => x.slug === slug && x.appliance === 'freezer');
    check(liveMatches.length === 1, `[${lang}][${slug}] exactly 1 entry on disk (got ${liveMatches.length})`);
    if (liveMatches.length !== 1) return;

    const item = liveMatches[0];
    console.log(`[${idx + 1}/5] '${slug}' (${item.item}):`);

    // 14 fields
    const actualFields = Object.keys(item);
    check(actualFields.length === 14, `[${lang}][${slug}] exactly 14 fields (got ${actualFields.length})`);
    requiredFields.forEach(f => {
      check(item[f] !== undefined && item[f] !== null, `[${lang}][${slug}] missing field '${f}'`);
      if (typeof item[f] === 'string') {
        check(item[f].trim().length > 0, `[${lang}][${slug}] field '${f}' is empty string`);
        check(!item[f].includes('TODO') && !item[f].includes('TBD'), `[${lang}][${slug}] field '${f}' contains placeholder`);
      }
    });

    // Parity with EN
    check(item.safe === enItem.safe, `[${lang}][${slug}] safe mismatch: ${item.safe} vs ${enItem.safe}`);
    check(Array.isArray(item.tips) && item.tips.length === enItem.tips.length, `[${lang}][${slug}] tips count mismatch: ${item.tips?.length} vs ${enItem.tips.length}`);
    check(Array.isArray(item.warnings) && item.warnings.length === enItem.warnings.length, `[${lang}][${slug}] warnings count mismatch: ${item.warnings?.length} vs ${enItem.warnings.length}`);
    check(Array.isArray(item.faqs) && item.faqs.length === 3, `[${lang}][${slug}] faqs count is exactly 3`);
    check(item.faqs.length === enItem.faqs.length, `[${lang}][${slug}] faqs count matches EN (${item.faqs.length} vs ${enItem.faqs.length})`);

    // FAQ structure
    item.faqs.forEach((faq, fIdx) => {
      check(typeof faq.question === 'string' && faq.question.trim().length > 0, `[${lang}][${slug}] FAQ ${fIdx + 1} question is non-empty`);
      check(typeof faq.answer === 'string' && faq.answer.trim().length > 0, `[${lang}][${slug}] FAQ ${fIdx + 1} answer is non-empty`);
    });

    // Related items
    check(Array.isArray(item.relatedItems), `[${lang}][${slug}] relatedItems is not an array`);
    check(JSON.stringify(item.relatedItems) === JSON.stringify(enItem.relatedItems), `[${lang}][${slug}] relatedItems matches canonical EN`);
    item.relatedItems.forEach(rSlug => {
      const existsInEn = en.some(x => x.slug === rSlug && x.appliance === 'freezer');
      check(existsInEn, `[${lang}][${slug}] relatedItem '${rSlug}' does not exist in EN freezer items`);
    });

    // Material taxonomy
    const expMat = materialExpectations[slug][lang];
    check(item.material === expMat, `[${lang}][${slug}] material is '${item.material}', expected '${expMat}'`);

    console.log(`   ✓ 14 fields valid | material: "${item.material}" | FAQs: ${item.faqs.length} | related: [${item.relatedItems.join(', ')}]`);
  });
});

console.log('\n=== STEP 3: DUPLICATE-SLUG SCAN ACROSS ENTIRE FREEZER VERTICAL ===\n');

['es', 'pt'].forEach(lang => {
  const db = lang === 'es' ? es : pt;
  const freezerItems = db.filter(x => x.appliance === 'freezer');
  console.log(`Scanning ${lang.toUpperCase()} freezer vertical (${freezerItems.length} items):`);
  check(freezerItems.length === 85, `[${lang}] total freezer items is exactly 85 (got ${freezerItems.length})`);

  const seen = new Set();
  const duplicates = [];

  freezerItems.forEach(item => {
    if (seen.has(item.slug)) {
      duplicates.push(item.slug);
    }
    seen.add(item.slug);
  });

  check(duplicates.length === 0, `[${lang}] duplicate slugs found in freezer: ${duplicates.join(', ') || 'none'}`);
  console.log(`   Total freezer entries: ${freezerItems.length}`);
  console.log(`   Unique freezer slugs:  ${seen.size}`);
  console.log(`   Duplicate slugs found: ${duplicates.length} (${duplicates.join(', ') || 'none'})\n`);
});

console.log(`=== AUDIT SUMMARY ===`);
console.log(`Total checks performed: ${totalChecks}`);
console.log(`Failures detected: ${failures}`);

if (failures > 0) {
  console.error('\nPOST-WRITE AUDIT FAILED!');
  process.exit(1);
} else {
  console.log('\nALL CHECKS PASSED PERFECTLY WITH 0 FAILURES!');
}
