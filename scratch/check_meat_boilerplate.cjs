const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(x => x.appliance === 'freezer');

const meatSlugs = [
  'raw-chicken', 'cooked-chicken', 'salmon', 'shrimp', 'ground-beef',
  'bacon', 'deli-meat', 'hot-dogs', 'sausage', 'pork-chop',
  'beef-steak', 'tuna-steak', 'lobster-tail', 'crab-legs', 'chicken-breast',
  'chicken-wings', 'turkey-breast', 'duck-breast'
];

console.log('=== CHECKING BOILERPLATE ACROSS ALL 18 MEAT/SEAFOOD ITEMS ===');
meatSlugs.forEach(slug => {
  const it = freezer.find(x => x.slug === slug);
  console.log(`\n[${slug}]`);
  console.log('  reason:', it.reason.slice(0, 120) + '...');
  console.log('  tips[0]:', it.tips[0]);
  console.log('  warnings[0]:', it.warnings[0]);
  console.log('  keyRisk:', it.keyRisk);
  console.log('  tip:', it.tip);
  console.log('  learnMore:', it.learnMore ? it.learnMore.slice(0, 100) + '...' : 'NONE');
});
