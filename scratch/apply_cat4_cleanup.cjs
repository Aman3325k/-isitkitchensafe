const fs = require('fs');

const itemsPath = 'src/data/items.json';
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));

// 1. Material taxonomy map
const materialMap = {
  'raw-chicken': 'Raw Poultry',
  'chicken-breast': 'Raw Poultry',
  'chicken-wings': 'Raw Poultry',
  'turkey-breast': 'Raw Poultry',
  'duck-breast': 'Raw Poultry',
  'cooked-chicken': 'Cooked Poultry',
  'beef-steak': 'Raw Red Meat',
  'ground-beef': 'Raw Red Meat',
  'pork-chop': 'Raw Red Meat',
  'bacon': 'Processed Meat',
  'sausage': 'Processed Meat',
  'hot-dogs': 'Processed Meat',
  'deli-meat': 'Processed Meat',
  'salmon': 'Raw Fish',
  'tuna-steak': 'Raw Fish',
  'shrimp': 'Raw Seafood',
  'lobster-tail': 'Raw Seafood',
  'crab-legs': 'Raw Seafood'
};

// 2. Grammar fixes in shortAnswer
const grammarFixes = {
  'raw-chicken': 'Yes, raw chicken is completely safe to freeze.',
  'cooked-chicken': 'Yes, cooked chicken is completely safe to freeze.',
  'ground-beef': 'Yes, ground beef is completely safe to freeze.',
  'bacon': 'Yes, bacon is completely safe to freeze.',
  'deli-meat': 'Yes, deli meat is completely safe to freeze.',
  'hot-dogs': 'Yes, hot dogs are completely safe to freeze.',
  'salmon': 'Yes, salmon is completely safe to freeze.',
  'shrimp': 'Yes, shrimp is completely safe to freeze.'
};

// 3. Related items cleanups
const relatedItemsMap = {
  'cooked-chicken': ['raw-chicken', 'chicken-breast', 'tupperware', 'aluminum-foil'],
  'chicken-wings': ['chicken-breast', 'raw-chicken', 'baking-sheet', 'aluminum-foil'],
  'sausage': ['bacon', 'hot-dogs', 'ground-beef', 'ziploc-bag'],
  'ground-beef': ['beef-steak', 'pork-chop', 'sausage', 'ziploc-bag'],
  'turkey-breast': ['chicken-breast', 'duck-breast', 'deli-meat', 'aluminum-foil'],
  'duck-breast': ['chicken-breast', 'turkey-breast', 'beef-steak', 'aluminum-foil'],
  'beef-steak': ['ground-beef', 'pork-chop', 'aluminum-foil', 'ziploc-bag'],
  'pork-chop': ['bacon', 'sausage', 'beef-steak', 'aluminum-foil'],
  'crab-legs': ['lobster-tail', 'shrimp', 'salmon', 'aluminum-foil'],
  'shrimp': ['salmon', 'lobster-tail', 'crab-legs', 'baking-sheet'],
  'deli-meat': ['bacon', 'hot-dogs', 'cooked-chicken', 'aluminum-foil'],
  'tuna-steak': ['salmon', 'shrimp', 'lobster-tail', 'aluminum-foil'],
  // Also upgrade the remaining meat items to relevant meat/wrap links:
  'raw-chicken': ['chicken-breast', 'chicken-wings', 'cooked-chicken', 'ziploc-bag'],
  'chicken-breast': ['raw-chicken', 'chicken-wings', 'turkey-breast', 'aluminum-foil'],
  'bacon': ['pork-chop', 'sausage', 'hot-dogs', 'aluminum-foil'],
  'hot-dogs': ['sausage', 'bacon', 'deli-meat', 'ziploc-bag'],
  'salmon': ['tuna-steak', 'shrimp', 'lobster-tail', 'aluminum-foil'],
  'lobster-tail': ['crab-legs', 'shrimp', 'tuna-steak', 'baking-sheet']
};

let modifiedCount = 0;

items.forEach(item => {
  if (item.appliance === 'freezer' && materialMap[item.slug]) {
    const slug = item.slug;
    // 1. Material
    item.material = materialMap[slug];

    // 2. Grammar
    if (grammarFixes[slug]) {
      item.shortAnswer = grammarFixes[slug];
    }

    // 3. Related items
    if (relatedItemsMap[slug]) {
      item.relatedItems = relatedItemsMap[slug];
    }

    modifiedCount++;
    console.log(`Updated [${slug}]: material="${item.material}", shortAnswer="${item.shortAnswer}", relatedItems=${JSON.stringify(item.relatedItems)}`);
  }
});

console.log(`\nTotal items modified: ${modifiedCount}`);

fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2) + '\n', 'utf8');
console.log('Saved src/data/items.json successfully.');
