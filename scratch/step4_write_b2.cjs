const fs = require('fs');

const b2 = JSON.parse(fs.readFileSync('C:/Users/ASUS/.gemini/antigravity-ide/brain/2c8bc618-4548-4760-b0b5-98e267090f20/scratch/cat2_batch2_translations.json', 'utf8'));
const slugs = ['cantaloupe', 'cherry', 'grape', 'honeydew', 'lemon'];

const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

slugs.forEach(slug => {
  es.push(b2[slug].es);
  pt.push(b2[slug].pt);
});

fs.writeFileSync('src/data/items.es.json', JSON.stringify(es, null, 2) + '\n', 'utf8');
fs.writeFileSync('src/data/items.pt.json', JSON.stringify(pt, null, 2) + '\n', 'utf8');

// Immediately re-parse fresh from disk
const esFresh = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const ptFresh = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

console.log('Batch 2 write completed successfully.');
console.log('items.es.json post-write length:', esFresh.length);
console.log('items.pt.json post-write length:', ptFresh.length);
