const fs = require('fs');

console.log('=== FULL CATEGORY 3 INTEGRITY CHECK (ALL 26 ITEMS) ===\n');

// 1. Confirm end-to-end parseability of entire files
let esRaw, ptRaw, enRaw;
let itemsEs, itemsPt, itemsEn;

try {
  esRaw = fs.readFileSync('src/data/items.es.json', 'utf8');
  itemsEs = JSON.parse(esRaw);
  console.log('1. items.es.json is fully valid, parseable JSON end-to-end (Byte size:', esRaw.length, ')');
} catch (e) {
  console.error('FAIL: items.es.json failed to parse end-to-end:', e.message);
  process.exit(1);
}

try {
  ptRaw = fs.readFileSync('src/data/items.pt.json', 'utf8');
  itemsPt = JSON.parse(ptRaw);
  console.log('   items.pt.json is fully valid, parseable JSON end-to-end (Byte size:', ptRaw.length, ')');
} catch (e) {
  console.error('FAIL: items.pt.json failed to parse end-to-end:', e.message);
  process.exit(1);
}

try {
  enRaw = fs.readFileSync('src/data/items.json', 'utf8');
  itemsEn = JSON.parse(enRaw);
  console.log('   items.json (reference) is fully valid, parseable JSON end-to-end\n');
} catch (e) {
  console.error('FAIL: items.json failed to parse:', e.message);
  process.exit(1);
}

// 2. Confirm item counts
const oldBaselinePreCat3 = 681;
const expectedCount = 707;
const esCount = itemsEs.length;
const ptCount = itemsPt.length;
const esDelta = esCount - oldBaselinePreCat3;
const ptDelta = ptCount - oldBaselinePreCat3;

console.log('2. Item Count Verification:');
console.log(`   items.es.json -> Baseline pre-Cat3: ${oldBaselinePreCat3}, New Count: ${esCount}, Delta: +${esDelta}`);
console.log(`   items.pt.json -> Baseline pre-Cat3: ${oldBaselinePreCat3}, New Count: ${ptCount}, Delta: +${ptDelta}`);

let countFailures = false;
if (esCount !== expectedCount || esDelta !== 26) {
  console.error(`   FAIL: items.es.json count mismatch! Expected ${expectedCount}, got ${esCount}`);
  countFailures = true;
}
if (ptCount !== expectedCount || ptDelta !== 26) {
  console.error(`   FAIL: items.pt.json count mismatch! Expected ${expectedCount}, got ${ptCount}`);
  countFailures = true;
}
if (countFailures) process.exit(1);
console.log('   ✓ Both files match exact expected count (707, +26 Category 3 items).\n');

// 3. Strict validator pass across all 26 Category 3 items
const all26Slugs = [
  // Batch 1
  'asparagus', 'bell-pepper', 'broccoli', 'brussels-sprouts', 'cabbage',
  // Batch 2
  'carrot', 'celery', 'corn', 'cucumber', 'eggplant',
  // Batch 3
  'garlic', 'ginger', 'green-beans', 'kale', 'lettuce',
  // Batch 4
  'mushroom', 'onion', 'peas', 'potato', 'spinach',
  // Batch 5
  'sweet-potato', 'tomato', 'yellow-squash', 'zucchini', 'mashed-potatoes',
  // Batch 6
  'herbs-in-oil'
];

const freezerEn = itemsEn.filter(i => i.appliance === 'freezer');
const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material',
  'keyRisk', 'tip', 'learnMore'
];

let totalChecks = 0;
let failures = 0;

function check(cond, msg) {
  totalChecks++;
  if (!cond) {
    failures++;
    console.error(`  FAIL: ${msg}`);
  }
}

console.log('3. Strict validator pass across all 26 Category 3 items (fresh from disk):');

const categorySummaryRows = [];

all26Slugs.forEach((slug, idx) => {
  const enItem = freezerEn.find(i => i.slug === slug);
  const esItem = itemsEs.find(i => i.slug === slug && i.appliance === 'freezer');
  const ptItem = itemsPt.find(i => i.slug === slug && i.appliance === 'freezer');

  check(enItem !== undefined, `[${slug}] Canonical EN freezer item exists`);
  check(esItem !== undefined, `[${slug}] ES freezer item exists on disk`);
  check(ptItem !== undefined, `[${slug}] PT freezer item exists on disk`);

  if (!enItem || !esItem || !ptItem) return;

  // Track summary
  categorySummaryRows.push({
    index: idx + 1,
    slug,
    enName: enItem.item,
    esName: esItem.item,
    ptName: ptItem.item,
    safe: enItem.safe,
    materialEN: enItem.material,
    materialES: esItem.material,
    materialPT: ptItem.material,
    faqsCount: enItem.faqs.length
  });

  [ { lang: 'ES', item: esItem }, { lang: 'PT', item: ptItem } ].forEach(({ lang, item }) => {
    // 14 fields
    const keys = Object.keys(item);
    check(keys.length === 14, `[${lang}][${slug}] has exactly 14 fields (got ${keys.length})`);

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
    check(Array.isArray(item.faqs) && item.faqs.length === 3, `[${lang}][${slug}] faqs count is 3 (got ${item.faqs?.length})`);
    check(item.faqs.length === enItem.faqs.length, `[${lang}][${slug}] faqs count matches EN (${item.faqs.length} vs ${enItem.faqs.length})`);

    // FAQ structure
    item.faqs.forEach((faq, fIdx) => {
      check(typeof faq.question === 'string' && faq.question.trim().length > 0, `[${lang}][${slug}] faq[${fIdx}].question is empty`);
      check(typeof faq.answer === 'string' && faq.answer.trim().length > 0, `[${lang}][${slug}] faq[${fIdx}].answer is empty`);
    });

    // Related items
    check(Array.isArray(item.relatedItems), `[${lang}][${slug}] relatedItems is not an array`);
    check(JSON.stringify(item.relatedItems) === JSON.stringify(enItem.relatedItems), `[${lang}][${slug}] relatedItems mismatch with EN`);
    item.relatedItems.forEach(rSlug => {
      check(freezerEn.some(f => f.slug === rSlug), `[${lang}][${slug}] relatedItem '${rSlug}' not found in EN freezer items`);
    });
  });
});

console.log(`\nStrict validator pass finished: ${totalChecks} checks run across all 26 items.`);

// 4. Duplicate check across freezer items
console.log('\n4. Duplicate slug scan across entire freezer subset:');
['ES', 'PT'].forEach(lang => {
  const db = lang === 'ES' ? itemsEs : itemsPt;
  const freezerItems = db.filter(i => i.appliance === 'freezer');
  check(freezerItems.length === 80, `[${lang}] freezer subset has exactly 80 items (got ${freezerItems.length})`);

  const seen = new Set();
  const dupes = [];
  freezerItems.forEach(i => {
    if (seen.has(i.slug)) dupes.push(i.slug);
    seen.add(i.slug);
  });
  check(dupes.length === 0, `[${lang}] duplicate slugs found: ${dupes.join(', ') || 'none'}`);
  console.log(`   ✓ [${lang}] Freezer items: ${freezerItems.length}/80, Unique slugs: ${seen.size} (0 duplicates)`);
});

console.log(`\n=== INTEGRITY AUDIT RESULTS ===`);
console.log(`Total checks: ${totalChecks}`);
console.log(`Failures: ${failures}`);

if (failures > 0) {
  console.error('\nCATEGORY 3 INTEGRITY CHECK FAILED!');
  process.exit(1);
} else {
  console.log('\nALL 26 CATEGORY 3 ITEMS PASSED FULL INTEGRITY AUDIT WITH 100% COMPLIANCE!');
}

// Output formatted table data
console.log('\n=== CATEGORY 3 (VEGETABLES) COMPLETE INVENTORY (26/26) ===');
console.table(categorySummaryRows.map(r => ({
  '#': r.index,
  'Slug': r.slug,
  'EN Title': r.enName,
  'ES Title': r.esName,
  'PT Title': r.ptName,
  'Verdict': r.safe,
  'ES Material': r.materialES,
  'PT Material': r.materialPT,
  'FAQs': r.faqsCount
})));
