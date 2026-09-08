const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const batch5Slugs = ['sweet-potato', 'tomato', 'yellow-squash', 'zucchini', 'mashed-potatoes'];
const expectedFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material', 'keyRisk', 'tip', 'learnMore'
];

const materialExpectations = {
  'sweet-potato': { es: 'Verdura Fresca', pt: 'Vegetal Fresco' },
  'tomato': { es: 'Fruta Fresca (Alta Humedad)', pt: 'Fruta Fresca (Alta Umidade)' },
  'yellow-squash': { es: 'Verdura Fresca', pt: 'Vegetal Fresco' },
  'zucchini': { es: 'Verdura Fresca', pt: 'Vegetal Fresco' },
  'mashed-potatoes': { es: 'Alimento Preparado', pt: 'Alimento Preparado' }
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

console.log(`=== POST-WRITE AUDIT FRESH FROM DISK ===`);
assert(es.length === 706, `ES total count is 706 (got ${es.length})`);
assert(pt.length === 706, `PT total count is 706 (got ${pt.length})`);

['es', 'pt'].forEach(lang => {
  const db = lang === 'es' ? es : pt;
  console.log(`\n--- Auditing ${lang.toUpperCase()} from disk ---`);

  batch5Slugs.forEach(slug => {
    const enItem = en.find(x => x.slug === slug && x.appliance === 'freezer');
    const liveMatches = db.filter(x => x.slug === slug && x.appliance === 'freezer');

    assert(liveMatches.length === 1, `[${lang}][${slug}] has exactly 1 entry in DB (got ${liveMatches.length})`);
    const liveItem = liveMatches[0];

    // Fields check
    const actualFields = Object.keys(liveItem);
    assert(actualFields.length === 14, `[${lang}][${slug}] has exactly 14 fields (got ${actualFields.length})`);
    expectedFields.forEach(f => {
      assert(liveItem[f] !== undefined && liveItem[f] !== null, `[${lang}][${slug}] field ${f} is present`);
      if (typeof liveItem[f] === 'string') {
        assert(liveItem[f].trim().length > 0, `[${lang}][${slug}] field ${f} is non-empty`);
        assert(!liveItem[f].includes('TODO') && !liveItem[f].includes('TBD'), `[${lang}][${slug}] field ${f} has no placeholders`);
      }
    });

    // Safe verdict
    assert(liveItem.safe === enItem.safe, `[${lang}][${slug}] safe matches EN (${liveItem.safe} === ${enItem.safe})`);

    // Tips
    assert(Array.isArray(liveItem.tips) && liveItem.tips.length === enItem.tips.length, `[${lang}][${slug}] tips count matches EN (${liveItem.tips.length})`);
    liveItem.tips.forEach((t, i) => {
      assert(typeof t === 'string' && t.trim().length > 0, `[${lang}][${slug}] tip[${i}] is non-empty`);
    });

    // Warnings
    assert(Array.isArray(liveItem.warnings) && liveItem.warnings.length === enItem.warnings.length, `[${lang}][${slug}] warnings count matches EN (${liveItem.warnings.length})`);
    liveItem.warnings.forEach((w, i) => {
      assert(typeof w === 'string' && w.trim().length > 0, `[${lang}][${slug}] warning[${i}] is non-empty`);
    });

    // FAQs
    assert(Array.isArray(liveItem.faqs) && liveItem.faqs.length === 3, `[${lang}][${slug}] faqs count is 3`);
    assert(liveItem.faqs.length === enItem.faqs.length, `[${lang}][${slug}] faqs count matches EN (${liveItem.faqs.length})`);
    liveItem.faqs.forEach((faq, i) => {
      assert(typeof faq.question === 'string' && faq.question.trim().length > 0, `[${lang}][${slug}] faq[${i}].question is non-empty`);
      assert(typeof faq.answer === 'string' && faq.answer.trim().length > 0, `[${lang}][${slug}] faq[${i}].answer is non-empty`);
    });

    // Related Items
    assert(Array.isArray(liveItem.relatedItems), `[${lang}][${slug}] relatedItems is array`);
    assert(JSON.stringify(liveItem.relatedItems) === JSON.stringify(enItem.relatedItems), `[${lang}][${slug}] relatedItems exactly matches EN canonical slugs`);
    liveItem.relatedItems.forEach(relSlug => {
      const relEn = en.find(x => x.slug === relSlug && x.appliance === 'freezer');
      assert(relEn !== undefined, `[${lang}][${slug}] relatedItem ${relSlug} exists in EN freezer items`);
    });

    // Material
    const expectedMaterial = materialExpectations[slug][lang];
    assert(liveItem.material === expectedMaterial, `[${lang}][${slug}] material is "${liveItem.material}" (expected "${expectedMaterial}")`);

    // Nuance for tomato
    if (slug === 'tomato') {
      assert(liveItem.safe === 'depends', `[${lang}][tomato] safe is depends`);
      const fullText = (liveItem.shortAnswer + ' ' + liveItem.reason).toLowerCase();
      assert(fullText.includes(lang === 'es' ? 'salsa' : 'molho') || fullText.includes(lang === 'es' ? 'cocin' : 'cozid'), `[${lang}][tomato] cooked/sauce nuance present`);
    }
  });
});

console.log('\n=== FULL DUPLICATE-SLUG SCAN ACROSS ENTIRE FREEZER SUBSET ===');
['es', 'pt'].forEach(lang => {
  const db = lang === 'es' ? es : pt;
  const freezerItems = db.filter(x => x.appliance === 'freezer');
  console.log(`Total freezer items in ${lang.toUpperCase()}: ${freezerItems.length}`);
  assert(freezerItems.length === 79, `${lang.toUpperCase()} has exactly 79 freezer items`);

  const seenSlugs = new Map();
  const duplicates = [];

  freezerItems.forEach(item => {
    if (seenSlugs.has(item.slug)) {
      duplicates.push(item.slug);
    } else {
      seenSlugs.set(item.slug, true);
    }
  });

  assert(duplicates.length === 0, `[${lang}] 0 duplicate slugs across all freezer items (found: ${duplicates.join(', ') || 'none'})`);
  console.log(`[${lang}] Unique freezer slugs: ${seenSlugs.size} / ${freezerItems.length}`);
});

console.log(`\n=== FINAL AUDIT RESULT ===`);
console.log(`Total assertions passed: ${passed}`);
console.log(`Total assertions failed: ${failed}`);

if (failed > 0) {
  console.error('AUDIT FAILED! DO NOT COMMIT!');
  process.exit(1);
} else {
  console.log('AUDIT PASSED PERFECTLY!');
}
