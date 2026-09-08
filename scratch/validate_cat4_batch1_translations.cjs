const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const esLive = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const ptLive = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const draftPath = 'scratch/cat4_batch1_translations.json';
if (!fs.existsSync(draftPath)) {
  console.error(`ERROR: ${draftPath} does not exist!`);
  process.exit(1);
}

const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));

const expectedSlugs = ['raw-chicken', 'cooked-chicken', 'chicken-breast', 'chicken-wings', 'turkey-breast'];
const expectedFields = [
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

// Check top-level arrays
assert(Array.isArray(draft.es) && draft.es.length === 5, 'draft.es has 5 items');
assert(Array.isArray(draft.pt) && draft.pt.length === 5, 'draft.pt has 5 items');

['es', 'pt'].forEach(lang => {
  const items = draft[lang];
  console.log(`\n--- Validating ${lang.toUpperCase()} draft ---`);

  items.forEach((item, idx) => {
    const slug = item.slug;
    const enItem = en.find(x => x.slug === slug && x.appliance === 'freezer');
    assert(enItem !== undefined, `[${lang}][${slug}] exists in EN source`);

    // Check slug matches order
    assert(slug === expectedSlugs[idx], `[${lang}][${slug}] is at expected index ${idx}`);

    // Check appliance
    assert(item.appliance === 'freezer', `[${lang}][${slug}] appliance is freezer`);

    // Check all 14 fields present and no extra fields
    const actualFields = Object.keys(item);
    assert(actualFields.length === 14, `[${lang}][${slug}] has exactly 14 fields (got ${actualFields.length})`);
    expectedFields.forEach(f => {
      assert(item[f] !== undefined && item[f] !== null, `[${lang}][${slug}] field ${f} is present`);
      if (typeof item[f] === 'string') {
        assert(item[f].trim().length > 0, `[${lang}][${slug}] field ${f} is non-empty`);
        assert(!item[f].includes('TODO') && !item[f].includes('TBD'), `[${lang}][${slug}] field ${f} has no placeholders`);
      }
    });

    // Check safe verdict matches EN
    assert(item.safe === enItem.safe, `[${lang}][${slug}] safe (${item.safe}) matches EN (${enItem.safe})`);

    // Check tips count and content
    assert(Array.isArray(item.tips) && item.tips.length === enItem.tips.length, `[${lang}][${slug}] tips count (${item.tips.length}) matches EN (${enItem.tips.length})`);
    item.tips.forEach((t, i) => {
      assert(typeof t === 'string' && t.trim().length > 0, `[${lang}][${slug}] tip ${i} is non-empty`);
    });

    // Check warnings count and content
    assert(Array.isArray(item.warnings) && item.warnings.length === enItem.warnings.length, `[${lang}][${slug}] warnings count (${item.warnings.length}) matches EN (${enItem.warnings.length})`);
    item.warnings.forEach((w, i) => {
      assert(typeof w === 'string' && w.trim().length > 0, `[${lang}][${slug}] warning ${i} is non-empty`);
    });

    // Check faqs count and structure
    assert(Array.isArray(item.faqs) && item.faqs.length === 3, `[${lang}][${slug}] faqs count is exactly 3`);
    assert(item.faqs.length === enItem.faqs.length, `[${lang}][${slug}] faqs count matches EN (${enItem.faqs.length})`);
    item.faqs.forEach((faq, i) => {
      assert(typeof faq.question === 'string' && faq.question.trim().length > 0, `[${lang}][${slug}] faq[${i}].question is non-empty`);
      assert(typeof faq.answer === 'string' && faq.answer.trim().length > 0, `[${lang}][${slug}] faq[${i}].answer is non-empty`);
    });

    // Check relatedItems exact match with EN
    assert(Array.isArray(item.relatedItems), `[${lang}][${slug}] relatedItems is array`);
    assert(JSON.stringify(item.relatedItems) === JSON.stringify(enItem.relatedItems), `[${lang}][${slug}] relatedItems matches EN canonical slugs exactly`);
    item.relatedItems.forEach(relSlug => {
      const relEn = en.find(x => x.slug === relSlug && x.appliance === 'freezer');
      assert(relEn !== undefined, `[${lang}][${slug}] relatedItem ${relSlug} exists in EN freezer items`);
    });

    // Check material taxonomy
    const expectedMaterial = materialExpectations[slug][lang];
    assert(item.material === expectedMaterial, `[${lang}][${slug}] material is "${item.material}" (expected "${expectedMaterial}")`);

    // Check collision against live DB
    const liveMatch = (lang === 'es' ? esLive : ptLive).find(x => x.slug === slug && x.appliance === 'freezer');
    assert(liveMatch === undefined, `[${lang}][${slug}] does NOT collide with live DB`);
  });
});

console.log(`\n=== VALIDATION SUMMARY ===`);
console.log(`Total assertions passed: ${passed}`);
console.log(`Total assertions failed: ${failed}`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL AUDIT CHECKS PASSED PERFECTLY!');
}
