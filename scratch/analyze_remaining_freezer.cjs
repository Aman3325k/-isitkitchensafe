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

console.log(`Cat 1 count: ${cat1.length}`);
console.log(`Cat 2 count: ${cat2.length}`);
console.log(`Cat 3 count: ${cat3.length}`);
console.log(`Sum Cat 1+2+3: ${cat1.length + cat2.length + cat3.length}`);
console.log(`Total freezer in items.json: ${freezer.length}`);

const accountedSlugs = new Set([...cat1, ...cat2, ...cat3]);
const remaining = freezer.filter(x => !accountedSlugs.has(x.slug));
console.log(`Remaining freezer items: ${remaining.length}`);

console.log('\n=== ALL REMAINING FREEZER ITEMS ===');
remaining.forEach((x, i) => {
  console.log(`${(i + 1).toString().padStart(3)}. ${x.slug.padEnd(25)} | ${x.item.padEnd(25)} | ${x.material.padEnd(35)} | safe: ${x.safe.padEnd(7)} | faqs: ${x.faqs ? x.faqs.length : 0}`);
});

// Let's also check oven-meat-dairy.cjs
const ovenMeatDairy = require(path.join(__dirname, '../scripts/translations/oven-meat-dairy.cjs'));
console.log('\n=== OVEN MEAT DAIRY ITEMS IN OVEN ===');
const ovenSlugs = Object.keys(ovenMeatDairy);
console.log(`Oven meat/dairy items count: ${ovenSlugs.length}`);
console.log(ovenSlugs);
