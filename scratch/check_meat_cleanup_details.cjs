const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(x => x.appliance === 'freezer');
const freezerSlugs = new Set(freezer.map(x => x.slug));

const meatSlugs = [
  'raw-chicken', 'cooked-chicken', 'chicken-breast', 'chicken-wings', 
  'turkey-breast', 'duck-breast', 'beef-steak', 'ground-beef', 
  'pork-chop', 'bacon', 'sausage', 'hot-dogs', 'deli-meat', 
  'salmon', 'tuna-steak', 'shrimp', 'lobster-tail', 'crab-legs'
];

console.log('=== CURRENT RELATED ITEMS & SHORT ANSWER FOR ALL 18 MEAT ITEMS ===');
meatSlugs.forEach(s => {
  const it = freezer.find(x => x.slug === s);
  console.log(`\n[${s}]`);
  console.log(`  shortAnswer: "${it.shortAnswer}"`);
  console.log(`  current material: "${it.material}"`);
  console.log(`  relatedItems: ${JSON.stringify(it.relatedItems)}`);
  const invalid = (it.relatedItems || []).filter(r => !freezerSlugs.has(r));
  if (invalid.length > 0) console.log(`  ❌ INVALID: ${JSON.stringify(invalid)}`);
});

console.log('\n=== POTENTIAL RELEVANT FREEZER SLUGS FOR MEAT RELATEDITEMS ===');
console.log('Containers/Wraps:');
['ziploc-bags', 'aluminum-foil', 'baking-sheet', 'mason-jars', 'vacuum-sealer-bags', 'parchment-paper', 'wax-paper', 'freezer-paper', 'plastic-wrap'].forEach(s => {
  if (freezerSlugs.has(s)) console.log(`  - ${s}`);
});

console.log('\nMeat/Poultry/Fish:');
meatSlugs.forEach(s => console.log(`  - ${s}`));
