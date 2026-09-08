const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(i => i.appliance === 'freezer');
console.log('Total freezer items in items.json:', freezer.length);

const cat1 = Object.keys(require('../scripts/translations/freezer-containers-materials-gear.cjs'));
const cat2 = [
  'apple', 'avocado', 'banana', 'blackberry', 'blueberry',
  'cantaloupe', 'cherry', 'grape', 'honeydew', 'lemon',
  'lime', 'mango', 'nectarine', 'orange', 'peach',
  'pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'
];

console.log('Cat 1 count:', cat1.length);
console.log('Cat 2 count:', cat2.length);

const remaining = freezer.filter(i => !cat1.includes(i.slug) && !cat2.includes(i.slug));
console.log('Remaining count:', remaining.length);

// Let's inspect every single remaining item
remaining.forEach((item, idx) => {
  console.log(`${String(idx + 1).padStart(3)}: ${item.slug.padEnd(25)} | ${item.item.padEnd(25)} | ${item.material}`);
});
