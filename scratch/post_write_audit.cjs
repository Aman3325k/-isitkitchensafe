const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material', 'keyRisk',
  'tip', 'learnMore'
];

const targetSlugs = ['carrot', 'celery', 'corn', 'cucumber', 'eggplant'];

let checks = 0;
let errors = [];

function check(desc, cond) {
  checks++;
  if (!cond) {
    errors.push(`FAIL: ${desc}`);
  }
}

// 1. Total counts
check('ES total count is 691', es.length === 691);
check('PT total count is 691', pt.length === 691);

// 2. Full 14-field and structural parity check for the 5 items
['es', 'pt'].forEach(lang => {
  const db = lang === 'es' ? es : pt;

  targetSlugs.forEach(slug => {
    const itemsFound = db.filter(i => i.appliance === 'freezer' && i.slug === slug);
    check(`[${lang}][${slug}] exactly one entry in freezer`, itemsFound.length === 1);
    const item = itemsFound[0];
    if (!item) return;

    check(`[${lang}][${slug}] appliance is freezer`, item.appliance === 'freezer');
    check(`[${lang}][${slug}] slug is ${slug}`, item.slug === slug);

    requiredFields.forEach(f => {
      check(`[${lang}][${slug}] field "${f}" exists and is non-empty`, item[f] !== undefined && item[f] !== null && item[f] !== '');
    });

    const enMatch = en.find(i => i.appliance === 'freezer' && i.slug === slug);
    check(`[${lang}][${slug}] English source found`, !!enMatch);
    if (enMatch) {
      check(`[${lang}][${slug}] safe matches EN (${enMatch.safe})`, item.safe === enMatch.safe);
      check(`[${lang}][${slug}] tips count matches EN (${enMatch.tips.length})`, item.tips && item.tips.length === enMatch.tips.length);
      check(`[${lang}][${slug}] warnings count matches EN (${enMatch.warnings.length})`, item.warnings && item.warnings.length === enMatch.warnings.length);
      check(`[${lang}][${slug}] faqs count matches EN (${enMatch.faqs.length})`, item.faqs && item.faqs.length === enMatch.faqs.length);
      check(`[${lang}][${slug}] relatedItems match EN exactly`, JSON.stringify(item.relatedItems) === JSON.stringify(enMatch.relatedItems));

      if (item.faqs) {
        item.faqs.forEach((faq, fIdx) => {
          check(`[${lang}][${slug}] FAQ ${fIdx + 1} has question string`, typeof faq.question === 'string' && faq.question.length > 5);
          check(`[${lang}][${slug}] FAQ ${fIdx + 1} has answer string`, typeof faq.answer === 'string' && faq.answer.length > 10);
        });
      }
    }

    if (item.relatedItems) {
      item.relatedItems.forEach(rSlug => {
        const rItem = en.find(i => i.appliance === 'freezer' && i.slug === rSlug);
        check(`[${lang}][${slug}] relatedItem "${rSlug}" exists in EN freezer`, !!rItem);
      });
    }

    if (['celery', 'cucumber'].includes(slug)) {
      check(`[${lang}][${slug}] safe verdict is depends`, item.safe === 'depends');
      check(`[${lang}][${slug}] shortAnswer starts with "Depende"`, item.shortAnswer.startsWith('Depende'));
    }
  });
});

// 3. Full duplicate-slug scan across the ENTIRE freezer vertical in both files
console.log('\n--- SCANNING FULL FREEZER VERTICAL FOR DUPLICATES ---');
['es', 'pt'].forEach(lang => {
  const db = lang === 'es' ? es : pt;
  const freezerItems = db.filter(i => i.appliance === 'freezer');
  console.log(`[${lang}] Total freezer items on disk: ${freezerItems.length}`);
  
  const slugCounts = new Map();
  freezerItems.forEach(i => {
    slugCounts.set(i.slug, (slugCounts.get(i.slug) || 0) + 1);
  });

  let dupes = 0;
  for (const [s, count] of slugCounts.entries()) {
    if (count > 1) {
      dupes++;
      check(`[${lang}] duplicate freezer slug "${s}" (count: ${count})`, false);
    }
  }
  check(`[${lang}] zero duplicate slugs in freezer subset`, dupes === 0);
  console.log(`[${lang}] Unique freezer slugs: ${slugCounts.size} (duplicates: ${dupes})`);
});

console.log(`\nRan ${checks} total post-write checks.`);
if (errors.length === 0) {
  console.log('ALL POST-WRITE AUDIT CHECKS PASSED with 0 errors.');
} else {
  console.log(`FAILURES DETECTED (${errors.length}):`);
  errors.forEach(e => console.log('  ', e));
  process.exit(1);
}
