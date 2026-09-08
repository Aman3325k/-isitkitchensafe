const fs = require('fs');

const b4 = JSON.parse(fs.readFileSync('scratch/cat2_batch4_translations.json', 'utf8'));
const slugs = ['pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'];

const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

slugs.forEach(slug => {
  es.push(b4[slug].es);
  pt.push(b4[slug].pt);
});

fs.writeFileSync('src/data/items.es.json', JSON.stringify(es, null, 2) + '\n', 'utf8');
fs.writeFileSync('src/data/items.pt.json', JSON.stringify(pt, null, 2) + '\n', 'utf8');

// Immediately re-parse fresh from disk
const esFresh = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const ptFresh = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

console.log('Batch 4 write completed successfully.');
console.log('items.es.json post-write length:', esFresh.length);
console.log('items.pt.json post-write length:', ptFresh.length);
