const fs = require('fs');

const cat1 = require('../scripts/translations/freezer-containers-materials-gear.cjs');
console.log('Category 1 items in freezer-containers-materials-gear.cjs:', Object.keys(cat1).length);
const cat1Slugs = Object.keys(cat1);
console.log('Cat 1 slugs:', cat1Slugs);

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(i => i.appliance === 'freezer');
console.log('Total freezer items:', freezer.length);

// Category 2 slugs from previous batches
const cat2Slugs = [
  'apple', 'avocado', 'banana', 'blackberry', 'blueberry',
  'cantaloupe', 'cherry', 'grape', 'honeydew', 'lemon',
  'lime', 'mango', 'nectarine', 'orange', 'peach',
  'pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'
];
console.log('Category 2 count:', cat2Slugs.length);

// What about remaining items? Let's check vegetables!
const vegKeywords = ['vegetable', 'tuber', 'herb', 'plant'];
const vegItems = freezer.filter(i => {
  if (cat1Slugs.includes(i.slug) || cat2Slugs.includes(i.slug)) return false;
  const mat = (i.material || '').toLowerCase();
  const slug = i.slug.toLowerCase();
  const item = i.item.toLowerCase();
  return mat.includes('vegetable') || mat.includes('tuber') || mat.includes('herb');
});

console.log('\nPotential Vegetable items by material:');
vegItems.forEach(i => console.log(i.slug.padEnd(25), '|', i.item.padEnd(20), '|', i.material));
