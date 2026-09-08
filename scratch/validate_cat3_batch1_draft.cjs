const fs = require('fs');
const crypto = require('crypto');

const draftPath = 'scratch/cat3_batch1_translations.json';
const raw = fs.readFileSync(draftPath, 'utf8');
const sha256 = crypto.createHash('sha256').update(raw).digest('hex');

console.log('=== DRAFT INTEGRITY CHECK ===');
console.log('Draft file:', draftPath);
console.log('SHA256:', sha256);
console.log('Byte length:', raw.length);

const parsed = JSON.parse(raw);
const slugs = Object.keys(parsed);
console.log('Slugs found:', slugs);
console.log('Slug count:', slugs.length);

const expectedSlugs = ['asparagus', 'bell-pepper', 'broccoli', 'brussels-sprouts', 'cabbage'];
let allSlugsMatch = slugs.length === expectedSlugs.length && slugs.every(s => expectedSlugs.includes(s));
console.log('Slugs match expected 5 exactly:', allSlugsMatch);

// Pre-write duplicate check against live items.es.json and items.pt.json
console.log('\n=== PRE-WRITE DUPLICATE CHECK (FREEZER) ===');
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezerEn = en.filter(i => i.appliance === 'freezer');
const freezerEnSlugs = new Set(freezerEn.map(i => i.slug));

let collisionFound = false;
console.log('Slug'.padEnd(18) + 'items.es.json exists(freezer)'.padEnd(32) + 'items.pt.json exists(freezer)');
console.log('-'.repeat(75));
slugs.forEach(slug => {
  const esMatch = es.some(i => i.slug === slug && i.appliance === 'freezer');
  const ptMatch = pt.some(i => i.slug === slug && i.appliance === 'freezer');
  console.log(slug.padEnd(18) + String(esMatch).padEnd(32) + String(ptMatch));
  if (esMatch || ptMatch) collisionFound = true;
});
console.log('Collision found:', collisionFound);

// Strict 14-field validation & parity
console.log('\n=== STRICT 14-FIELD & STRUCTURAL PARITY AUDIT ===');
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
  console.log(`\n--- AUDIT: ${slug} ---`);
  const enItem = freezerEn.find(i => i.slug === slug);
  const esItem = parsed[slug].es;
  const ptItem = parsed[slug].pt;

  check(`${slug}: English source found in items.json`, !!enItem);
  check(`${slug}: ES object present`, !!esItem);
  check(`${slug}: PT object present`, !!ptItem);

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
      check(`${slug} (es): material is "Verdura Fresca"`, item.material === 'Verdura Fresca');
    } else {
      check(`${slug} (pt): material is "Vegetal Fresco"`, item.material === 'Vegetal Fresco');
    }
  });

  // Parity checks between ES and PT
  check(`${slug}: tips count parity (ES=${esItem.tips.length}, PT=${ptItem.tips.length})`, esItem.tips.length === ptItem.tips.length);
  check(`${slug}: warnings count parity (ES=${esItem.warnings.length}, PT=${ptItem.warnings.length})`, esItem.warnings.length === ptItem.warnings.length);
  check(`${slug}: FAQs count parity (ES=${esItem.faqs.length}, PT=${ptItem.faqs.length})`, esItem.faqs.length === ptItem.faqs.length);
});

console.log('\n========================================');
console.log(`VALIDATION COMPLETE: ${totalChecks} checks run, ${failures} failures`);
console.log('========================================');
