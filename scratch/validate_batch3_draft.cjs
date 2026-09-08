const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const esLive = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const ptLive = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));
const draft = JSON.parse(fs.readFileSync('scratch/cat3_batch3_translations.json', 'utf8'));

const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material', 'keyRisk',
  'tip', 'learnMore'
];

const targetSlugs = ['garlic', 'ginger', 'green-beans', 'kale', 'lettuce'];

let checks = 0;
let errors = [];

function check(desc, cond) {
  checks++;
  if (!cond) {
    errors.push(`FAIL: ${desc}`);
  }
}

check('Draft has "es" array', Array.isArray(draft.es));
check('Draft has "pt" array', Array.isArray(draft.pt));
check('Draft "es" has 5 items', draft.es && draft.es.length === 5);
check('Draft "pt" has 5 items', draft.pt && draft.pt.length === 5);

['es', 'pt'].forEach(lang => {
  const items = draft[lang];
  if (!items) return;

  items.forEach((item, idx) => {
    const slug = targetSlugs[idx];
    check(`[${lang}][${slug}] slug matches index`, item.slug === slug);
    check(`[${lang}][${slug}] appliance is freezer`, item.appliance === 'freezer');

    // 14 fields check
    requiredFields.forEach(f => {
      check(`[${lang}][${slug}] has field "${f}"`, item[f] !== undefined && item[f] !== null && item[f] !== '');
    });

    // Material check
    const expectedMaterial = lang === 'es' ? 'Verdura Fresca' : 'Vegetal Fresco';
    check(`[${lang}][${slug}] material is "${expectedMaterial}"`, item.material === expectedMaterial);

    // Check against English source
    const enMatch = en.find(i => i.appliance === 'freezer' && i.slug === slug);
    check(`[${lang}][${slug}] found in English source`, !!enMatch);
    if (enMatch) {
      check(`[${lang}][${slug}] safe matches EN (${enMatch.safe})`, item.safe === enMatch.safe);
      check(`[${lang}][${slug}] tips count matches EN (${enMatch.tips.length})`, item.tips && item.tips.length === enMatch.tips.length);
      check(`[${lang}][${slug}] warnings count matches EN (${enMatch.warnings.length})`, item.warnings && item.warnings.length === enMatch.warnings.length);
      check(`[${lang}][${slug}] faqs count matches EN (${enMatch.faqs.length})`, item.faqs && item.faqs.length === enMatch.faqs.length);
      check(`[${lang}][${slug}] relatedItems match EN exactly`, JSON.stringify(item.relatedItems) === JSON.stringify(enMatch.relatedItems));

      // Check faqs internal structure
      if (item.faqs) {
        item.faqs.forEach((faq, fIdx) => {
          check(`[${lang}][${slug}] FAQ ${fIdx + 1} has question`, typeof faq.question === 'string' && faq.question.length > 5);
          check(`[${lang}][${slug}] FAQ ${fIdx + 1} has answer`, typeof faq.answer === 'string' && faq.answer.length > 10);
        });
      }
    }

    // Check no collision with live database
    const liveDb = lang === 'es' ? esLive : ptLive;
    const exists = liveDb.find(i => i.appliance === 'freezer' && i.slug === slug);
    check(`[${lang}][${slug}] does NOT exist in live ${lang} DB`, !exists);

    // Check related items all exist in EN freezer
    if (item.relatedItems) {
      item.relatedItems.forEach(rSlug => {
        const rItem = en.find(i => i.appliance === 'freezer' && i.slug === rSlug);
        check(`[${lang}][${slug}] relatedItem "${rSlug}" exists in EN freezer`, !!rItem);
      });
    }

    // Check depends nuance for lettuce
    if (slug === 'lettuce') {
      check(`[${lang}][${slug}] safe verdict is depends`, item.safe === 'depends');
      const startWord = 'Depende';
      check(`[${lang}][${slug}] shortAnswer starts with "${startWord}"`, item.shortAnswer.startsWith(startWord));
    }
  });
});

console.log(`Ran ${checks} checks.`);
if (errors.length === 0) {
  console.log('ALL CHECKS PASSED with 0 errors.');
} else {
  console.log(`${errors.length} ERRORS FOUND:`);
  errors.forEach(e => console.log('  ', e));
}
