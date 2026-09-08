const fs = require('fs');

const itemsEn = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezerItems = itemsEn.filter(i => i.appliance === 'freezer');
const freezerSlugs = new Set(freezerItems.map(i => i.slug));

const itemsEs = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const itemsPt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const slugs = ['pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'];
const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material',
  'keyRisk', 'tip', 'learnMore'
];

let totalChecks = 0;
let failures = 0;

console.log('=== STEP 6: POST-WRITE RE-VALIDATION FOR BATCH 4 (FRESH FROM DISK) ===\n');

slugs.forEach(slug => {
  const enItem = freezerItems.find(i => i.slug === slug);
  const esItem = itemsEs.find(i => i.slug === slug && i.appliance === 'freezer');
  const ptItem = itemsPt.find(i => i.slug === slug && i.appliance === 'freezer');

  console.log('------------------------------------------------------------');
  console.log('ITEM:', slug);

  if (!enItem) {
    console.error('FAIL: Missing English freezer item for slug:', slug);
    failures++;
    return;
  }
  if (!esItem) {
    console.error('FAIL: Missing ES item on disk for slug:', slug);
    failures++;
    return;
  }
  if (!ptItem) {
    console.error('FAIL: Missing PT item on disk for slug:', slug);
    failures++;
    return;
  }

  const langMap = { ES: esItem, PT: ptItem };

  for (const [lang, obj] of Object.entries(langMap)) {
    console.log(`Checking [${slug}] - ${lang}:`);
    
    // 1. All 14 fields present and non-empty
    let fieldsValid = true;
    for (const field of requiredFields) {
      totalChecks++;
      if (obj[field] === undefined || obj[field] === null) {
        console.error(`  FAIL [${lang}]: Missing field '${field}'`);
        failures++;
        fieldsValid = false;
      } else if (Array.isArray(obj[field])) {
        if (obj[field].length === 0) {
          console.error(`  FAIL [${lang}]: Empty array for field '${field}'`);
          failures++;
          fieldsValid = false;
        }
      } else if (typeof obj[field] === 'string') {
        if (obj[field].trim() === '') {
          console.error(`  FAIL [${lang}]: Empty string for field '${field}'`);
          failures++;
          fieldsValid = false;
        }
      }
    }
    if (fieldsValid) {
      console.log(`  ✓ All 14 fields present and non-empty`);
    }

    // 2. Exact appliance, slug, safe
    totalChecks += 3;
    if (obj.appliance !== 'freezer') {
      console.error(`  FAIL [${lang}]: appliance mismatch (${obj.appliance})`);
      failures++;
    }
    if (obj.slug !== slug) {
      console.error(`  FAIL [${lang}]: slug mismatch (${obj.slug} !== ${slug})`);
      failures++;
    }
    if (obj.safe !== enItem.safe) {
      console.error(`  FAIL [${lang}]: safe mismatch (${obj.safe} !== ${enItem.safe})`);
      failures++;
    }

    // 3. FAQs check
    totalChecks++;
    if (!Array.isArray(obj.faqs) || obj.faqs.length < 3) {
      console.error(`  FAIL [${lang}]: faqs array invalid length (${obj.faqs ? obj.faqs.length : 0})`);
      failures++;
    } else {
      obj.faqs.forEach((faq, idx) => {
        totalChecks += 2;
        if (!faq.question || typeof faq.question !== 'string' || faq.question.trim() === '') {
          console.error(`  FAIL [${lang}]: FAQ[${idx}] question is empty or missing`);
          failures++;
        }
        if (!faq.answer || typeof faq.answer !== 'string' || faq.answer.trim() === '') {
          console.error(`  FAIL [${lang}]: FAQ[${idx}] answer is empty or missing`);
          failures++;
        }
      });
      console.log(`  ✓ FAQs valid (${obj.faqs.length} Q&As)`);
    }

    // 4. relatedItems check
    totalChecks++;
    const enRels = JSON.stringify(enItem.relatedItems);
    const langRels = JSON.stringify(obj.relatedItems);
    if (enRels !== langRels) {
      console.error(`  FAIL [${lang}]: relatedItems mismatch with EN. EN: ${enRels}, ${lang}: ${langRels}`);
      failures++;
    } else {
      console.log(`  ✓ relatedItems matches EN canonical slugs: [${obj.relatedItems.join(', ')}]`);
    }

    obj.relatedItems.forEach(r => {
      totalChecks += 2;
      if (!freezerSlugs.has(r)) {
        console.error(`  FAIL [${lang}]: relatedItem '${r}' does not exist in items.json with appliance === 'freezer'`);
        failures++;
      }
      if (r === slug) {
        console.error(`  FAIL [${lang}]: self-referential relatedItem '${r}'`);
        failures++;
      }
    });
    console.log(`  ✓ relatedItems existence and no-self-reference verified`);
  }

  // 5. Parity check between ES and PT
  totalChecks += 2;
  const esTips = esItem.tips.length;
  const ptTips = ptItem.tips.length;
  if (esTips !== ptTips) {
    console.error(`FAIL: Tips length mismatch between ES (${esTips}) and PT (${ptTips}) for ${slug}`);
    failures++;
  } else {
    console.log(`  ✓ Structural parity: tips count matches (ES: ${esTips}, PT: ${ptTips})`);
  }

  const esWarn = esItem.warnings.length;
  const ptWarn = ptItem.warnings.length;
  if (esWarn !== ptWarn) {
    console.error(`FAIL: Warnings length mismatch between ES (${esWarn}) and PT (${ptWarn}) for ${slug}`);
    failures++;
  } else {
    console.log(`  ✓ Structural parity: warnings count matches (ES: ${esWarn}, PT: ${ptWarn})`);
  }
});

console.log('\n============================================================');
console.log(`TOTAL CHECKS: ${totalChecks} | FAILURES: ${failures}`);
if (failures === 0) {
  console.log('STATUS: STEP 6 VALIDATION PASSED WITH 0 FAILURES');
} else {
  console.error('STATUS: STEP 6 VALIDATION FAILED');
  process.exit(1);
}
