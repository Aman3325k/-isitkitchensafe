const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const esLive = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const ptLive = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const draftPath = 'scratch/cat3_batch6_translations.json';
if (!fs.existsSync(draftPath)) {
  console.error(`ERROR: ${draftPath} does not exist!`);
  process.exit(1);
}

const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));

const expectedFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material', 'keyRisk', 'tip', 'learnMore'
];

const materialExpectations = {
  es: 'Hierbas Frescas en Grasa Vegetal',
  pt: 'Ervas Frescas em Gordura Vegetal'
};

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

assert(Array.isArray(draft.es) && draft.es.length === 1, 'draft.es has exactly 1 item');
assert(Array.isArray(draft.pt) && draft.pt.length === 1, 'draft.pt has exactly 1 item');

const enItem = en.find(x => x.slug === 'herbs-in-oil' && x.appliance === 'freezer');
assert(enItem !== undefined, 'herbs-in-oil exists in EN source');

['es', 'pt'].forEach(lang => {
  const items = draft[lang];
  console.log(`\n--- Validating ${lang.toUpperCase()} draft ---`);

  const item = items[0];
  const slug = item.slug;

  assert(slug === 'herbs-in-oil', `[${lang}] slug is herbs-in-oil`);
  assert(item.appliance === 'freezer', `[${lang}] appliance is freezer`);

  // Check 14 fields
  const actualFields = Object.keys(item);
  assert(actualFields.length === 14, `[${lang}] exactly 14 fields (got ${actualFields.length})`);
  expectedFields.forEach(f => {
    assert(item[f] !== undefined && item[f] !== null, `[${lang}] field ${f} is present`);
    if (typeof item[f] === 'string') {
      assert(item[f].trim().length > 0, `[${lang}] field ${f} is non-empty`);
      assert(!item[f].includes('TODO') && !item[f].includes('TBD'), `[${lang}] field ${f} has no placeholders`);
    }
  });

  // Safe verdict
  assert(item.safe === enItem.safe, `[${lang}] safe matches EN (${item.safe} === ${enItem.safe})`);

  // Tips
  assert(Array.isArray(item.tips) && item.tips.length === 3, `[${lang}] tips count is 3`);
  item.tips.forEach((t, i) => {
    assert(typeof t === 'string' && t.trim().length > 0, `[${lang}] tip[${i}] is non-empty`);
  });

  // Warnings
  assert(Array.isArray(item.warnings) && item.warnings.length === 2, `[${lang}] warnings count is 2`);
  item.warnings.forEach((w, i) => {
    assert(typeof w === 'string' && w.trim().length > 0, `[${lang}] warning[${i}] is non-empty`);
  });

  // FAQs
  assert(Array.isArray(item.faqs) && item.faqs.length === 3, `[${lang}] faqs count is 3`);
  item.faqs.forEach((faq, i) => {
    assert(typeof faq.question === 'string' && faq.question.trim().length > 0, `[${lang}] faq[${i}].question is non-empty`);
    assert(typeof faq.answer === 'string' && faq.answer.trim().length > 0, `[${lang}] faq[${i}].answer is non-empty`);
  });

  // Related items
  assert(Array.isArray(item.relatedItems), `[${lang}] relatedItems is array`);
  assert(JSON.stringify(item.relatedItems) === JSON.stringify(enItem.relatedItems), `[${lang}] relatedItems matches EN canonical slugs exactly`);
  item.relatedItems.forEach(relSlug => {
    const relEn = en.find(x => x.slug === relSlug && x.appliance === 'freezer');
    assert(relEn !== undefined, `[${lang}] relatedItem "${relSlug}" exists in EN freezer items`);
  });

  // Material
  assert(item.material === materialExpectations[lang], `[${lang}] material matches "${materialExpectations[lang]}" (got "${item.material}")`);

  // Collision
  const liveMatch = (lang === 'es' ? esLive : ptLive).find(x => x.slug === slug && x.appliance === 'freezer');
  assert(liveMatch === undefined, `[${lang}] does NOT collide with live DB`);
});

console.log(`\n=== VALIDATION SUMMARY ===`);
console.log(`Total assertions passed: ${passed}`);
console.log(`Total assertions failed: ${failed}`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL AUDIT CHECKS PASSED PERFECTLY!');
}
