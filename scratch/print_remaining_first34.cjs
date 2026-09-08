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

const accountedSlugs = new Set([...cat1, ...cat2, ...cat3]);
const remaining = freezer.filter(x => !accountedSlugs.has(x.slug));

console.log('=== ITEMS 1 to 34 of REMAINING ===');
remaining.slice(0, 34).forEach((x, i) => {
  console.log(`${(i + 1).toString().padStart(3)}. ${x.slug.padEnd(25)} | ${x.item.padEnd(25)} | ${x.material.padEnd(35)} | safe: ${x.safe.padEnd(7)} | faqs: ${x.faqs ? x.faqs.length : 0}`);
});
