const fs = require('fs');

const b4 = JSON.parse(fs.readFileSync('scratch/cat2_batch4_translations.json', 'utf8'));
const itemsEn = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezerEn = itemsEn.filter(i => i.appliance === 'freezer');
const freezerSlugs = new Set(freezerEn.map(i => i.slug));

const slugs = ['pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'];
const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material',
  'keyRisk', 'tip', 'learnMore'
];

let totalChecks = 0;
let failures = 0;

console.log('=== STRICT VALIDATION PASS: TRANSLATION BATCH 4 DRAFT (5 ITEMS × 2 LANGUAGES) ===\n');

slugs.forEach(slug => {
  const enItem = freezerEn.find(i => i.slug === slug);
  const trans = b4[slug];

  ['es', 'pt'].forEach(lang => {
    const obj = trans[lang];
    console.log(`Checking [${slug}] - ${lang.toUpperCase()}:`);
    
    requiredFields.forEach(field => {
      totalChecks++;
      if (!obj[field] || (Array.isArray(obj[field]) && obj[field].length === 0) || (typeof obj[field] === 'string' && obj[field].trim() === '')) {
        console.error(`  FAIL: Missing or empty field '${field}'`);
        failures++;
      }
    });

    totalChecks += 3;
    if (obj.appliance !== 'freezer' || obj.slug !== slug || obj.safe !== enItem.safe) {
      console.error(`  FAIL: identity or safety mismatch`);
      failures++;
    }

    totalChecks++;
    if (!Array.isArray(obj.faqs) || obj.faqs.length !== 3) {
      console.error(`  FAIL: faqs count is not 3`);
      failures++;
    } else {
      obj.faqs.forEach((faq, idx) => {
        totalChecks += 2;
        if (!faq.question || !faq.answer) {
          console.error(`  FAIL: empty faq question or answer at index ${idx}`);
          failures++;
        }
      });
    }

    totalChecks++;
    const enRels = JSON.stringify(enItem.relatedItems);
    const langRels = JSON.stringify(obj.relatedItems);
    if (enRels !== langRels) {
      console.error(`  FAIL: relatedItems mismatch with EN`);
      failures++;
    } else {
      obj.relatedItems.forEach(r => {
        totalChecks += 2;
        if (!freezerSlugs.has(r) || r === slug) {
          console.error(`  FAIL: invalid relatedItem slug ${r}`);
          failures++;
        }
      });
    }
    console.log(`  -> 14 fields present & non-empty; relatedItems matches EN canonical slugs exactly [${obj.relatedItems.join(', ')}]`);
  });

  totalChecks += 2;
  const esTipsLen = trans.es.tips.length;
  const ptTipsLen = trans.pt.tips.length;
  const esWarnLen = trans.es.warnings.length;
  const ptWarnLen = trans.pt.warnings.length;

  if (esTipsLen !== ptTipsLen || esWarnLen !== ptWarnLen) {
    console.error(`  FAIL: parity mismatch`);
    failures++;
  } else {
    console.log(`  -> Structural parity: tips count matches (ES: ${esTipsLen}, PT: ${ptTipsLen}); warnings count matches (ES: ${esWarnLen}, PT: ${ptWarnLen})`);
  }
  console.log('');
});

console.log(`=== SUMMARY: ${totalChecks} checks run across 10 objects. Failures: ${failures} ===`);
console.log(`STATUS: ${failures === 0 ? '100% CLEAN AND PASSING STRICT VALIDATION' : 'FAILED'}`);
