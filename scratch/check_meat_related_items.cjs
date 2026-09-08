const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(x => x.appliance === 'freezer');
const freezerSlugs = new Set(freezer.map(x => x.slug));

const meatSlugs = [
  'raw-chicken', 'cooked-chicken', 'salmon', 'shrimp', 'ground-beef',
  'bacon', 'deli-meat', 'hot-dogs', 'sausage', 'pork-chop',
  'beef-steak', 'tuna-steak', 'lobster-tail', 'crab-legs', 'chicken-breast',
  'chicken-wings', 'turkey-breast', 'duck-breast'
];

console.log('=== RELATED ITEMS VALIDITY FOR MEAT/SEAFOOD ===');
meatSlugs.forEach(slug => {
  const item = freezer.find(x => x.slug === slug);
  const rels = item.relatedItems || [];
  const invalid = rels.filter(r => !freezerSlugs.has(r));
  const weird = rels.filter(r => ['memory-foam', 'pacifiers', 'couch-cushions', 'shoes'].includes(r));
  console.log(`[${slug}]: ${JSON.stringify(rels)}`);
  if (invalid.length > 0) {
    console.log(`   ❌ INVALID SLUGS (not in freezer): ${JSON.stringify(invalid)}`);
  }
  if (weird.length > 0) {
    console.log(`   ⚠️ BIZARRE/NON-FOOD SLUGS: ${JSON.stringify(weird)}`);
  }
});
