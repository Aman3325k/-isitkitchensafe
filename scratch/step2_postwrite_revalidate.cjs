const fs = require('fs');

const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));

const freezerEn = en.filter(i => i.appliance === 'freezer');
const freezerEnSlugs = new Set(freezerEn.map(i => i.slug));

const slugs = ['asparagus', 'bell-pepper', 'broccoli', 'brussels-sprouts', 'cabbage'];

console.log('=== STEP 2: POST-WRITE RE-VALIDATION (FRESH FROM DISK) ===');
console.log('Live items.es.json count:', es.length);
console.log('Live items.pt.json count:', pt.length);

const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material', 'keyRisk', 'tip', 'learnMore'
];

let totalChecks = 0;
let failures = 0;

function check(desc, cond, detail = '') {
  totalChecks++;
  if (cond) {
    console.log(`  [PASS] ${desc}`);
  } else {
    console.log(`  [FAIL] ${desc} - ${detail}`);
    failures++;
  }
}

slugs.forEach(slug => {
  console.log(`\n--- AUDIT: ${slug} (appliance=freezer) ---`);
  const enItem = freezerEn.find(i => i.slug === slug);
  const esItems = es.filter(i => i.slug === slug && i.appliance === 'freezer');
  const ptItems = pt.filter(i => i.slug === slug && i.appliance === 'freezer');

  check(`${slug}: English source found in items.json`, !!enItem);
  check(`${slug}: exactly 1 entry in live items.es.json for freezer`, esItems.length === 1, `found ${esItems.length}`);
  check(`${slug}: exactly 1 entry in live items.pt.json for freezer`, ptItems.length === 1, `found ${ptItems.length}`);

  if (esItems.length !== 1 || ptItems.length !== 1) return;

  const esItem = esItems[0];
  const ptItem = ptItems[0];

  ['es', 'pt'].forEach(lang => {
    const item = lang === 'es' ? esItem : ptItem;
    requiredFields.forEach(f => {
      check(`${slug} (${lang}): field "${f}" present & non-empty`, item[f] !== undefined && item[f] !== null && item[f] !== '');
    });
    check(`${slug} (${lang}): appliance is "freezer"`, item.appliance === 'freezer');
    check(`${slug} (${lang}): slug is "${slug}"`, item.slug === slug);
    check(`${slug} (${lang}): safe matches EN "${enItem.safe}"`, item.safe === enItem.safe);
    check(`${slug} (${lang}): FAQs count is 3`, Array.isArray(item.faqs) && item.faqs.length === 3);

    (item.faqs || []).forEach((faq, fIdx) => {
      check(`${slug} (${lang}) FAQ ${fIdx + 1}: question non-empty`, (faq.question || '').trim().length > 0);
      check(`${slug} (${lang}) FAQ ${fIdx + 1}: answer non-empty`, (faq.answer || '').trim().length > 0);
    });

    // relatedItems
    check(`${slug} (${lang}): relatedItems exactly matches EN canonical slugs`, JSON.stringify(item.relatedItems) === JSON.stringify(enItem.relatedItems));
    (item.relatedItems || []).forEach(rel => {
      check(`${slug} (${lang}): relatedItem "${rel}" exists in freezer`, freezerEnSlugs.has(rel));
      check(`${slug} (${lang}): relatedItem "${rel}" is not self`, rel !== slug);
    });

    // material taxonomy check
    if (lang === 'es') {
      check(`${slug} (es): material is "Verdura Fresca"`, item.material === 'Verdura Fresca', `got "${item.material}"`);
    } else {
      check(`${slug} (pt): material is "Vegetal Fresco"`, item.material === 'Vegetal Fresco', `got "${item.material}"`);
    }
  });

  // Parity checks between ES and PT
  check(`${slug}: tips count parity (ES=${esItem.tips.length}, PT=${ptItem.tips.length})`, esItem.tips.length === ptItem.tips.length);
  check(`${slug}: warnings count parity (ES=${esItem.warnings.length}, PT=${ptItem.warnings.length})`, esItem.warnings.length === ptItem.warnings.length);
  check(`${slug}: FAQs count parity (ES=${esItem.faqs.length}, PT=${ptItem.faqs.length})`, esItem.faqs.length === ptItem.faqs.length);
});

console.log('\n========================================');
console.log(`POST-WRITE AUDIT COMPLETE: ${totalChecks} checks run, ${failures} failures`);
console.log('========================================');

if (failures > 0) {
  process.exit(1);
}
