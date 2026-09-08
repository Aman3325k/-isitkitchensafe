const fs = require('fs');
const path = require('path');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(x => x.appliance === 'freezer');

const cat1 = Object.keys(require(path.join(__dirname, '../scripts/translations/freezer-containers-materials-gear.cjs')));
const cat2 = [
  'apple', 'avocado', 'banana', 'blackberry', 'blueberry',
  'cantaloupe', 'cherry', 'grape', 'honeydew', 'lemon',
  'lime', 'mango', 'nectarine', 'orange', 'peach',
  'pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'
];
const cat3 = [
  'asparagus', 'bell-pepper', 'broccoli', 'brussels-sprouts', 'cabbage',
  'carrot', 'celery', 'corn', 'cucumber', 'eggplant',
  'garlic', 'ginger', 'green-beans', 'kale', 'lettuce',
  'mushroom', 'onion', 'peas', 'potato', 'spinach',
  'sweet-potato', 'tomato', 'yellow-squash', 'zucchini', 'mashed-potatoes',
  'herbs-in-oil'
];

const accounted = new Set([...cat1, ...cat2, ...cat3]);
const remaining = freezer.filter(x => !accounted.has(x.slug));

console.log('=== REMAINING FREEZER ITEMS BY LOGICAL DOMAIN ===');
const domains = {
  'Meat & Seafood': [],
  'Eggs': [],
  'Dairy & Dairy Alternatives': [],
  'Grains, Bread, Pasta & Dough': [],
  'Oils, Fats, Condiments & Sauces': [],
  'Beverages': [],
  'Sweets, Baking & Misc': []
};

remaining.forEach(item => {
  const s = item.slug;
  if (['raw-chicken', 'cooked-chicken', 'salmon', 'shrimp', 'ground-beef', 'bacon', 'deli-meat', 'hot-dogs', 'sausage', 'pork-chop', 'beef-steak', 'tuna-steak', 'lobster-tail', 'crab-legs', 'chicken-breast', 'chicken-wings', 'turkey-breast', 'duck-breast'].includes(s)) {
    domains['Meat & Seafood'].push(item);
  } else if (['egg', 'hard-boiled-eggs'].includes(s)) {
    domains['Eggs'].push(item);
  } else if (['milk', 'cheese', 'butter', 'cream-cheese', 'sour-cream', 'yogurt', 'ice-cream-refreezing', 'whipped-cream', 'heavy-cream', 'cottage-cheese', 'cheddar-cheese', 'mozzarella-cheese', 'tofu'].includes(s)) {
    domains['Dairy & Dairy Alternatives'].push(item);
  } else if (['bread', 'cooked-rice', 'cooked-pasta', 'white-rice', 'brown-rice', 'quinoa', 'lentils', 'oatmeal', 'spaghetti', 'macaroni', 'white-bread', 'whole-wheat-bread', 'sourdough-bread', 'croissant', 'bagel', 'pita-bread', 'tortilla', 'pizza-dough', 'cookie-dough'].includes(s)) {
    domains['Grains, Bread, Pasta & Dough'].push(item);
  } else if (['ketchup', 'mustard', 'peanut-butter', 'pesto', 'avocado-oil', 'olive-oil', 'vegetable-oil', 'coconut-oil', 'almond-butter', 'mayonnaise', 'soy-sauce', 'hot-sauce', 'salad-dressing', 'hummus', 'guacamole', 'salsa'].includes(s)) {
    domains['Oils, Fats, Condiments & Sauces'].push(item);
  } else if (['wine', 'beer', 'juice', 'coffee', 'energy-drinks', 'kombucha', 'sparkling-water', 'protein-shakes', 'smoothies', 'tea', 'soda', 'orange-juice', 'apple-juice'].includes(s)) {
    domains['Beverages'].push(item);
  } else {
    domains['Sweets, Baking & Misc'].push(item);
  }
});

for (const [dom, list] of Object.entries(domains)) {
  console.log(`\n${dom} (${list.length} items):`);
  list.forEach(x => console.log(`  ${x.slug.padEnd(25)} | ${x.item.padEnd(25)} | ${x.material}`));
}
