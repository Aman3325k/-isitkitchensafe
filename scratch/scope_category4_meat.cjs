const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(i => i.appliance === 'freezer');

console.log(`Total freezer items in items.json: ${freezer.length}`);

// Let's check materials across all freezer items
const allMaterials = {};
freezer.forEach(i => {
  allMaterials[i.material] = (allMaterials[i.material] || 0) + 1;
});
console.log('\nAll materials in freezer:');
console.log(allMaterials);

// Let's check oven-meat-dairy.cjs if it exists
let ovenMeatDairy = {};
try {
  ovenMeatDairy = require('../scripts/translations/oven-meat-dairy.cjs');
  console.log('\noven-meat-dairy.cjs keys count:', Object.keys(ovenMeatDairy).length);
  console.log('Sample keys from oven-meat-dairy:', Object.keys(ovenMeatDairy).slice(0, 15));
} catch (e) {
  console.log('Could not load oven-meat-dairy.cjs:', e.message);
}

// Identify meat/seafood items
// We look at materials like: Raw Meat, Raw Poultry, Raw Seafood, Raw Fish, Processed Meat, Cooked Meat, etc.
// And also check keywords in slug/item
const meatKeywords = [
  'meat', 'poultry', 'beef', 'pork', 'chicken', 'turkey', 'lamb', 'duck',
  'bacon', 'sausage', 'ham', 'steak', 'rib', 'fish', 'salmon', 'tuna',
  'shrimp', 'prawn', 'crab', 'lobster', 'seafood', 'clam', 'mussel', 'oyster',
  'scallop', 'squid', 'octopus', 'venison', 'veal', 'hot-dog', 'bologna',
  'pepperoni', 'salami', 'prosciutto', 'anchov', 'sardine', 'cod', 'tilapia',
  'halibut', 'trout', 'meatball', 'patt'
];

const meatItems = freezer.filter(item => {
  const mat = (item.material || '').toLowerCase();
  const slug = item.slug.toLowerCase();
  const name = item.item.toLowerCase();

  const isMeatMaterial = mat.includes('meat') || mat.includes('poultry') || 
                         mat.includes('seafood') || mat.includes('fish') || 
                         mat.includes('pork') || mat.includes('beef') || 
                         mat.includes('animal') || mat.includes('protein');

  const hasMeatKeyword = meatKeywords.some(k => slug.includes(k) || name.includes(k));

  return isMeatMaterial || hasMeatKeyword;
});

console.log(`\nFound ${meatItems.length} candidate meat/seafood items in freezer:`);
meatItems.forEach(i => {
  console.log(`- slug: "${i.slug}", item: "${i.item}", material: "${i.material}", safe: "${i.safe}", faqs: ${i.faqs ? i.faqs.length : 0}`);
});

// Let's also inspect items that are NOT in Category 1, 2, or 3
const cat1 = require('../scripts/translations/freezer-containers-materials-gear.cjs');
const cat1Slugs = new Set(Object.keys(cat1));
const cat2Slugs = new Set([
  'apple', 'avocado', 'banana', 'blackberry', 'blueberry',
  'cantaloupe', 'cherry', 'grape', 'honeydew', 'lemon',
  'lime', 'mango', 'nectarine', 'orange', 'peach',
  'pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'
]);
const cat3Slugs = new Set([
  'asparagus', 'bell-pepper', 'broccoli', 'brussels-sprouts', 'cabbage',
  'carrot', 'celery', 'corn', 'cucumber', 'eggplant',
  'garlic', 'ginger', 'green-beans', 'kale', 'lettuce',
  'mushroom', 'onion', 'peas', 'potato', 'spinach',
  'sweet-potato', 'tomato', 'yellow-squash', 'zucchini', 'mashed-potatoes',
  'herbs-in-oil'
]);

const remainingFreezer = freezer.filter(i => !cat1Slugs.has(i.slug) && !cat2Slugs.has(i.slug) && !cat3Slugs.has(i.slug));
console.log(`\nRemaining freezer items (not in Cat 1, 2, or 3): ${remainingFreezer.length}`);
remainingFreezer.forEach(i => {
  console.log(`  [${i.slug.padEnd(25)}] item="${i.item.padEnd(20)}" material="${i.material}" safe="${i.safe}"`);
});
