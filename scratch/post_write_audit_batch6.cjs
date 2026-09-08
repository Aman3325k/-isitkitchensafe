const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const expectedFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material', 'keyRisk', 'tip', 'learnMore'
];

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
  } else {
    failed++;
    console.error(`FAIL: ${message}`);
  }
}

console.log('=== STEP 2: POST-WRITE RE-VALIDATION (HERBS-IN-OIL) FRESH FROM DISK ===');
assert(es.length === 707, `ES total count is 707 (got ${es.length})`);
assert(pt.length === 707, `PT total count is 707 (got ${pt.length})`);

const enItem = en.find(x => x.slug === 'herbs-in-oil' && x.appliance === 'freezer');
assert(enItem !== undefined, 'Canonical EN herbs-in-oil exists');

['es', 'pt'].forEach(lang => {
  const db = lang === 'es' ? es : pt;
  console.log(`\n--- Auditing ${lang.toUpperCase()} from disk ---`);

  const liveMatches = db.filter(x => x.slug === 'herbs-in-oil' && x.appliance === 'freezer');
  assert(liveMatches.length === 1, `[${lang}] exactly 1 entry for herbs-in-oil`);
  const live = liveMatches[0];

  const actualFields = Object.keys(live);
  assert(actualFields.length === 14, `[${lang}] exactly 14 fields (got ${actualFields.length})`);
  expectedFields.forEach(f => {
    assert(live[f] !== undefined && live[f] !== null, `[${lang}] field ${f} is present`);
    if (typeof live[f] === 'string') {
      assert(live[f].trim().length > 0, `[${lang}] field ${f} is non-empty`);
      assert(!live[f].includes('TODO') && !live[f].includes('TBD'), `[${lang}] field ${f} has no placeholders`);
    }
  });

  assert(live.safe === enItem.safe, `[${lang}] safe matches EN (${live.safe})`);

  assert(Array.isArray(live.tips) && live.tips.length === 3, `[${lang}] tips count is 3`);
  live.tips.forEach((t, i) => {
    assert(typeof t === 'string' && t.trim().length > 0, `[${lang}] tip[${i}] is non-empty`);
  });

  assert(Array.isArray(live.warnings) && live.warnings.length === 2, `[${lang}] warnings count is 2`);
  live.warnings.forEach((w, i) => {
    assert(typeof w === 'string' && w.trim().length > 0, `[${lang}] warning[${i}] is non-empty`);
  });

  assert(Array.isArray(live.faqs) && live.faqs.length === 3, `[${lang}] faqs count is 3`);
  live.faqs.forEach((faq, i) => {
    assert(typeof faq.question === 'string' && faq.question.trim().length > 0, `[${lang}] faq[${i}].question is non-empty`);
    assert(typeof faq.answer === 'string' && faq.answer.trim().length > 0, `[${lang}] faq[${i}].answer is non-empty`);
  });

  assert(Array.isArray(live.relatedItems), `[${lang}] relatedItems is array`);
  assert(JSON.stringify(live.relatedItems) === JSON.stringify(enItem.relatedItems), `[${lang}] relatedItems matches canonical EN`);
  live.relatedItems.forEach(relSlug => {
    const relEn = en.find(x => x.slug === relSlug && x.appliance === 'freezer');
    assert(relEn !== undefined, `[${lang}] relatedItem ${relSlug} exists in freezer`);
  });

  const expectedMat = lang === 'es' ? 'Hierbas Frescas en Grasa Vegetal' : 'Ervas Frescas em Gordura Vegetal';
  assert(live.material === expectedMat, `[${lang}] material matches "${expectedMat}"`);
});

console.log('\n=== STEP 4: FULL DUPLICATE-SLUG SCAN ACROSS ENTIRE FREEZER SUBSET ===');
['es', 'pt'].forEach(lang => {
  const db = lang === 'es' ? es : pt;
  const freezerItems = db.filter(x => x.appliance === 'freezer');
  console.log(`Total freezer items in ${lang.toUpperCase()}: ${freezerItems.length}`);
  assert(freezerItems.length === 80, `[${lang}] total freezer items is exactly 80 (got ${freezerItems.length})`);

  const seenSlugs = new Map();
  const duplicates = [];

  freezerItems.forEach(item => {
    if (seenSlugs.has(item.slug)) {
      duplicates.push(item.slug);
    } else {
      seenSlugs.set(item.slug, true);
    }
  });

  assert(duplicates.length === 0, `[${lang}] 0 duplicate slugs (duplicates: ${duplicates.join(', ') || 'none'})`);
  console.log(`[${lang}] Unique freezer slugs: ${seenSlugs.size} / ${freezerItems.length}`);
});

console.log(`\nValidation Summary: passed=${passed}, failed=${failed}`);
if (failed > 0) {
  console.error('AUDIT FAILED!');
  process.exit(1);
} else {
  console.log('AUDIT PASSED PERFECTLY!');
}
