const fs = require('fs');

const b3 = JSON.parse(fs.readFileSync('scratch/cat2_batch3_translations.json', 'utf8'));
const slugs = ['lime', 'mango', 'nectarine', 'orange', 'peach'];

const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

slugs.forEach(slug => {
  es.push(b3[slug].es);
  pt.push(b3[slug].pt);
});

fs.writeFileSync('src/data/items.es.json', JSON.stringify(es, null, 2) + '\n', 'utf8');
fs.writeFileSync('src/data/items.pt.json', JSON.stringify(pt, null, 2) + '\n', 'utf8');

// Immediately re-parse fresh from disk
const esFresh = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const ptFresh = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

console.log('Batch 3 write completed successfully.');
console.log('items.es.json post-write length:', esFresh.length);
console.log('items.pt.json post-write length:', ptFresh.length);
