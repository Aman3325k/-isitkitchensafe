const fs = require('fs');

console.log('=== CATEGORY 4 (MEAT & SEAFOOD) POST-CLEANUP VALIDATOR ===\n');

const itemsPath = 'src/data/items.json';
let items;
try {
  items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));
  console.log(`1. items.json successfully parsed. Total entries: ${items.length}`);
} catch (e) {
  console.error(`FAIL: Could not parse items.json: ${e.message}`);
  process.exit(1);
}

const freezer = items.filter(x => x.appliance === 'freezer');
console.log(`2. Total freezer items: ${freezer.length}`);

const freezerSlugs = new Set(freezer.map(x => x.slug));
let totalChecks = 0;
let failures = 0;

function check(condition, message) {
  totalChecks++;
  if (!condition) {
    failures++;
    console.error(`  FAIL: ${message}`);
  }
}

const meatSlugs = [
  'raw-chicken', 'cooked-chicken', 'chicken-breast', 'chicken-wings', 
  'turkey-breast', 'duck-breast', 'beef-steak', 'ground-beef', 
  'pork-chop', 'bacon', 'sausage', 'hot-dogs', 'deli-meat', 
  'salmon', 'tuna-steak', 'shrimp', 'lobster-tail', 'crab-legs'
];

const expectedMaterials = {
  'raw-chicken': 'Raw Poultry',
  'chicken-breast': 'Raw Poultry',
  'chicken-wings': 'Raw Poultry',
  'turkey-breast': 'Raw Poultry',
  'duck-breast': 'Raw Poultry',
  'cooked-chicken': 'Cooked Poultry',
  'beef-steak': 'Raw Red Meat',
  'ground-beef': 'Raw Red Meat',
  'pork-chop': 'Raw Red Meat',
  'bacon': 'Processed Meat',
  'sausage': 'Processed Meat',
  'hot-dogs': 'Processed Meat',
  'deli-meat': 'Processed Meat',
  'salmon': 'Raw Fish',
  'tuna-steak': 'Raw Fish',
  'shrimp': 'Raw Seafood',
  'lobster-tail': 'Raw Seafood',
  'crab-legs': 'Raw Seafood'
};

const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material',
  'keyRisk', 'tip', 'learnMore'
];

console.log('\n3. Validating all 18 Category 4 items:');

meatSlugs.forEach((slug, idx) => {
  const item = freezer.find(x => x.slug === slug);
  check(item !== undefined, `[${slug}] item exists in freezer`);
  if (!item) return;

  console.log(`\n[${idx + 1}/18] Checking slug: '${slug}' (${item.item})`);

  // Fields check
  requiredFields.forEach(f => {
    check(item[f] !== undefined && item[f] !== null, `[${slug}] missing required field '${f}'`);
    if (typeof item[f] === 'string') {
      check(item[f].trim().length > 0, `[${slug}] field '${f}' is empty string`);
    }
  });

  // Material check
  const expMat = expectedMaterials[slug];
  check(item.material === expMat, `[${slug}] material is '${item.material}', expected '${expMat}'`);

  // Grammar check
  const badPatterns = [/a Raw Chicken/i, /a Cooked Chicken/i, /a Ground Beef/i, /a Bacon/i, /a Deli Meat/i, /a Hot Dogs/i, /a Salmon/i, /a Shrimp/i];
  badPatterns.forEach(pat => {
    check(!pat.test(item.shortAnswer), `[${slug}] shortAnswer matches bad grammar pattern: ${pat}`);
  });

  // Safety verdict check
  check(item.safe === 'yes', `[${slug}] safe verdict is '${item.safe}', expected 'yes'`);

  // Related items check
  check(Array.isArray(item.relatedItems) && item.relatedItems.length >= 3, `[${slug}] relatedItems has at least 3 items (got ${item.relatedItems?.length})`);
  const seenRels = new Set();
  (item.relatedItems || []).forEach(relSlug => {
    check(relSlug !== slug, `[${slug}] relatedItem links to self: '${relSlug}'`);
    check(!seenRels.has(relSlug), `[${slug}] duplicate relatedItem: '${relSlug}'`);
    seenRels.add(relSlug);
    check(freezerSlugs.has(relSlug), `[${slug}] relatedItem '${relSlug}' does NOT exist in freezer catalog (DANGLING LINK!)`);
  });

  console.log(`   ✓ material: "${item.material}"`);
  console.log(`   ✓ shortAnswer: "${item.shortAnswer}"`);
  console.log(`   ✓ relatedItems: [${item.relatedItems.join(', ')}] (all valid freezer slugs)`);
});

// 4. Duplicate slug scan across entire freezer subset
console.log('\n4. Duplicate slug scan across entire freezer subset (176 items):');
const allSeen = new Set();
const dupes = [];
freezer.forEach(i => {
  if (allSeen.has(i.slug)) dupes.push(i.slug);
  allSeen.add(i.slug);
});
check(dupes.length === 0, `Duplicate slugs found in freezer: ${dupes.join(', ')}`);
console.log(`   ✓ Total freezer entries: ${freezer.length}, Unique slugs: ${allSeen.size} (0 duplicates)`);

console.log(`\n=== VALIDATION SUMMARY ===`);
console.log(`Total checks performed: ${totalChecks}`);
console.log(`Failures detected: ${failures}`);

if (failures > 0) {
  console.error('\nVALIDATOR FAILED! DO NOT COMMIT.');
  process.exit(1);
} else {
  console.log('\nALL 18 CATEGORY 4 ITEMS PASSED VALIDATION WITH 0 FAILURES!');
}
