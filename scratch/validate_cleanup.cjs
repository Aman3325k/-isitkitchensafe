const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const redirects = JSON.parse(fs.readFileSync('redirects.json', 'utf8'));
const publicRedirects = fs.readFileSync('public/_redirects', 'utf8');

const freezerItems = items.filter(i => i.appliance === 'freezer');
const freezerSlugs = new Set(freezerItems.map(i => i.slug));

console.log('=== CATEGORY 3 POST-CLEANUP VALIDATION ===');
console.log('Total items in items.json:', items.length);
console.log('Total freezer items:', freezerItems.length);

let totalChecks = 0;
let failures = 0;

function check(desc, condition, detail = '') {
  totalChecks++;
  if (condition) {
    console.log(`  [PASS] ${desc}`);
  } else {
    console.log(`  [FAIL] ${desc} - ${detail}`);
    failures++;
  }
}

// 1. DEDUP VERIFICATION: peppers
console.log('\n--- DEDUP VERIFICATION: peppers -> bell-pepper ---');
const peppersInItems = freezerItems.find(i => i.slug === 'peppers');
check('peppers deleted from items.json', !peppersInItems, peppersInItems ? 'peppers still present in items.json' : '');

const peppersInRedirects = redirects.find(r => r.source === '/freezer/peppers' && r.target === '/freezer/bell-pepper');
check('redirects.json contains /freezer/peppers -> /freezer/bell-pepper', !!peppersInRedirects);

const pubRedirExact = publicRedirects.includes('/freezer/peppers /freezer/bell-pepper 301') &&
                      publicRedirects.includes('/freezer/peppers/ /freezer/bell-pepper 301');
check('public/_redirects contains both /freezer/peppers rules', pubRedirExact);

const bellPepper = freezerItems.find(i => i.slug === 'bell-pepper');
check('bell-pepper has 3 FAQs', bellPepper && bellPepper.faqs && bellPepper.faqs.length === 3);
check('bell-pepper reason has rich content', bellPepper && bellPepper.reason.includes('do not require blanching'));
check('bell-pepper shortAnswer grammar clean', bellPepper && !bellPepper.shortAnswer.includes('a Bell Pepper'));

// The 26 active items in Category 3 / produce & adjacent
const activeSlugs = [
  'asparagus', 'bell-pepper', 'broccoli', 'brussels-sprouts', 'cabbage',
  'carrot', 'celery', 'corn', 'cucumber', 'eggplant',
  'garlic', 'ginger', 'green-beans', 'kale', 'lettuce',
  'mushroom', 'onion', 'peas', 'potato', 'spinach',
  'sweet-potato', 'tomato', 'yellow-squash', 'zucchini',
  'mashed-potatoes', 'herbs-in-oil'
];

console.log(`\n--- INDIVIDUAL ITEM AUDIT (${activeSlugs.length} ACTIVE ITEMS) ---`);

const contaminationTerms = ['dishwasher', 'top rack', 'hand wash', 'detergent', 'coatings', 'microwave', 'dryer', 'laundry', 'garments', 'wool'];
const articlePatterns = [/\ba lettuce\b/i, /\ba celery\b/i, /\ba cabbage\b/i, /\ba broccoli\b/i, /\ba zucchini\b/i, /\ba mashed potatoes\b/i];

activeSlugs.forEach((slug, idx) => {
  const item = freezerItems.find(i => i.slug === slug);
  console.log(`\n[${idx + 1}/${activeSlugs.length}] SLUG: ${slug}`);

  check(`${slug}: exists in freezer items`, !!item);
  if (!item) return;

  // 14 required fields
  const requiredFields = [
    'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
    'tips', 'warnings', 'faqs', 'relatedItems', 'material', 'keyRisk', 'tip', 'learnMore'
  ];
  requiredFields.forEach(f => {
    check(`${slug}: field "${f}" present & non-empty`, item[f] !== undefined && item[f] !== null && item[f] !== '');
  });

  // Safety verdicts
  if (slug === 'cabbage' || slug === 'celery' || slug === 'lettuce') {
    check(`${slug}: safe verdict is "depends"`, item.safe === 'depends', `got "${item.safe}"`);
  } else {
    check(`${slug}: safe verdict is valid`, ['yes', 'no', 'depends'].includes(item.safe), `got "${item.safe}"`);
  }

  // Contamination check
  const text = JSON.stringify(item).toLowerCase();
  let foundContam = [];
  contaminationTerms.forEach(term => {
    if (text.includes(term)) foundContam.push(term);
  });
  check(`${slug}: zero cross-appliance contamination`, foundContam.length === 0, `found: ${foundContam.join(', ')}`);

  // Grammar check in shortAnswer
  let articleError = false;
  articlePatterns.forEach(pat => {
    if (pat.test(item.shortAnswer)) articleError = true;
  });
  check(`${slug}: shortAnswer free of incorrect article`, !articleError, `got: "${item.shortAnswer}"`);

  // Material check for mashed-potatoes
  if (slug === 'mashed-potatoes') {
    check('mashed-potatoes: material is "Prepared Food Product"', item.material === 'Prepared Food Product', `got "${item.material}"`);
  }

  // Related items check
  check(`${slug}: relatedItems is array with >= 3 items`, Array.isArray(item.relatedItems) && item.relatedItems.length >= 3);
  (item.relatedItems || []).forEach(rel => {
    check(`${slug}: relatedItem "${rel}" exists in freezer`, freezerSlugs.has(rel), `"${rel}" not found`);
    check(`${slug}: relatedItem "${rel}" is not self`, rel !== slug);
    check(`${slug}: relatedItem "${rel}" is not deleted peppers`, rel !== 'peppers');
  });
});

console.log('\n========================================');
console.log(`VALIDATION COMPLETE: ${totalChecks} checks run, ${failures} failures`);
console.log('========================================');

if (failures > 0) {
  process.exit(1);
}
