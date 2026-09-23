const fs = require('fs');
const path = require('path');

const itemsPath = path.resolve('src/data/items.json');
const howLongPath = path.resolve('src/data/how-long.json');
const refreezePath = path.resolve('src/data/refreeze.json');
const whatHappensPath = path.resolve('src/data/what-happens.json');
const comparePath = path.resolve('src/data/comparisons.json');

const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));
const howLong = JSON.parse(fs.readFileSync(howLongPath, 'utf8'));
const refreeze = JSON.parse(fs.readFileSync(refreezePath, 'utf8'));
const whatHappens = JSON.parse(fs.readFileSync(whatHappensPath, 'utf8'));
const compare = JSON.parse(fs.readFileSync(comparePath, 'utf8'));

const verticals = [
  'airfryer',
  'refrigerator',
  'oven',
  'freezer',
  'dishwasher',
  'microwave',
  'dryer'
];

console.log('=== SUMMARY OF VERTICAL COUNTS ===');
let grandTotal = 0;

verticals.forEach((v, idx) => {
  const vItems = items.filter(i => i.appliance === v);
  const batches = Math.ceil(vItems.length / 12);
  grandTotal += vItems.length;
  console.log(`${idx + 1}. ${v}: ${vItems.length} items (${batches} batches)`);
});

const auxiliary = [
  { name: 'how-long', data: howLong },
  { name: 'refreeze', data: refreeze },
  { name: 'what-happens', data: whatHappens },
  { name: 'compare', data: compare },
];

auxiliary.forEach((a, idx) => {
  const batches = Math.ceil(a.data.length / 12);
  grandTotal += a.data.length;
  console.log(`${verticals.length + idx + 1}. ${a.name}: ${a.data.length} items (${batches} batches)`);
});

console.log(`12. material: 8 categories (1 batch)`);
grandTotal += 8;

console.log(`Grand Total Items across all 12 categories: ${grandTotal}`);
