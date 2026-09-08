const fs = require('fs');

const itemsEn = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezerItems = itemsEn.filter(i => i.appliance === 'freezer');
const freezerSlugs = new Set(freezerItems.map(i => i.slug));

const batch1Path = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/2c8bc618-4548-4760-b0b5-98e267090f20/scratch/cat2_batch1_translations.json';
const batch1Data = JSON.parse(fs.readFileSync(batch1Path, 'utf8'));

const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material',
  'keyRisk', 'tip', 'learnMore'
];

let totalChecks = 0;
let failures = 0;

console.log('=== STRICT VALIDATION PASS: TRANSLATION BATCH 1 (5 ITEMS × 2 LANGUAGES) ===\n');

const slugs = ['apple', 'avocado', 'banana', 'blackberry', 'blueberry'];

slugs.forEach(slug => {
  const enItem = freezerItems.find(i => i.slug === slug);
  const trans = batch1Data[slug];
  if (!trans) {
    console.error(`FAIL: Missing translations for ${slug}`);
    failures++;
    return;
  }

  ['es', 'pt'].forEach(lang => {
    const obj = trans[lang];
    console.log(`Checking [${slug}] - ${lang.toUpperCase()}:`);
    
    // 1. Check all 14 fields exist and are non-empty
    requiredFields.forEach(field => {
      totalChecks++;
      if (obj[field] === undefined || obj[field] === null) {
        console.error(`  FAIL: Missing field '${field}'`);
        failures++;
      } else if (Array.isArray(obj[field])) {
        if (obj[field].length === 0) {
          console.error(`  FAIL: Empty array field '${field}'`);
          failures++;
        }
      } else if (typeof obj[field] === 'string') {
        if (obj[field].trim() === '') {
          console.error(`  FAIL: Empty string field '${field}'`);
          failures++;
        }
      }
    });

    // 2. Exact match of appliance, slug, safe to EN
    totalChecks += 3;
    if (obj.appliance !== 'freezer') {
      console.error(`  FAIL: appliance mismatch (${obj.appliance})`);
      failures++;
    }
    if (obj.slug !== slug) {
      console.error(`  FAIL: slug mismatch (${obj.slug} !== ${slug})`);
      failures++;
    }
    if (obj.safe !== enItem.safe) {
      console.error(`  FAIL: safe mismatch (${obj.safe} !== ${enItem.safe})`);
      failures++;
    }

    // 3. FAQs check (count and non-empty Q/A)
    totalChecks++;
    if (!Array.isArray(obj.faqs) || obj.faqs.length !== 3) {
      console.error(`  FAIL: FAQ count is ${obj.faqs ? obj.faqs.length : 0}, expected 3`);
      failures++;
    } else {
      obj.faqs.forEach((faq, idx) => {
        totalChecks += 2;
        if (!faq.question || faq.question.trim() === '') {
          console.error(`  FAIL: FAQ[${idx}] missing question`);
          failures++;
        }
        if (!faq.answer || faq.answer.trim() === '') {
          console.error(`  FAIL: FAQ[${idx}] missing answer`);
          failures++;
        }
      });
    }

    // 4. relatedItems slug exact canonical match to EN
    totalChecks++;
    const enRels = JSON.stringify(enItem.relatedItems);
    const langRels = JSON.stringify(obj.relatedItems);
    if (enRels !== langRels) {
      console.error(`  FAIL: relatedItems mismatch with EN. EN: ${enRels}, ${lang.toUpperCase()}: ${langRels}`);
      failures++;
    } else {
      obj.relatedItems.forEach(r => {
        totalChecks++;
        if (!freezerSlugs.has(r)) {
          console.error(`  FAIL: relatedItem '${r}' does not exist in freezer items`);
          failures++;
        }
        if (r === slug) {
          console.error(`  FAIL: self-referential relatedItem '${r}'`);
          failures++;
        }
      });
    }
    console.log(`  -> 14 fields present & non-empty; relatedItems matches EN canonical slugs exactly [${obj.relatedItems.join(', ')}]`);
  });

  // 5. Parity between ES and PT
  totalChecks += 2;
  const esTipsLen = trans.es.tips.length;
  const ptTipsLen = trans.pt.tips.length;
  if (esTipsLen !== ptTipsLen) {
    console.error(`FAIL: Tips length mismatch between ES (${esTipsLen}) and PT (${ptTipsLen}) for ${slug}`);
    failures++;
  } else {
    console.log(`  -> Structural parity: tips count matches (ES: ${esTipsLen}, PT: ${ptTipsLen})`);
  }

  const esWarnLen = trans.es.warnings.length;
  const ptWarnLen = trans.pt.warnings.length;
  if (esWarnLen !== ptWarnLen) {
    console.error(`FAIL: Warnings length mismatch between ES (${esWarnLen}) and PT (${ptWarnLen}) for ${slug}`);
    failures++;
  } else {
    console.log(`  -> Structural parity: warnings count matches (ES: ${esWarnLen}, PT: ${ptWarnLen})`);
  }

  console.log('');
});

console.log(`=== SUMMARY: ${totalChecks} checks run across 10 objects. Failures: ${failures} ===`);
if (failures === 0) {
  console.log('STATUS: 100% CLEAN AND PASSING STRICT VALIDATION');
} else {
  process.exit(1);
}
