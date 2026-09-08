const fs = require('fs');

const esPath = 'src/data/items.es.json';
const ptPath = 'src/data/items.pt.json';
const draftPath = 'scratch/cat3_batch1_translations.json';

const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));

console.log('Pre-write items.es.json count:', es.length);
console.log('Pre-write items.pt.json count:', pt.length);

if (es.length !== 681 || pt.length !== 681) {
  console.error('ERROR: Baseline item count is not 681!');
  process.exit(1);
}

const slugs = ['asparagus', 'bell-pepper', 'broccoli', 'brussels-sprouts', 'cabbage'];

slugs.forEach(slug => {
  if (!draft[slug] || !draft[slug].es || !draft[slug].pt) {
    console.error(`ERROR: Missing draft translation for ${slug}`);
    process.exit(1);
  }
  es.push(draft[slug].es);
  pt.push(draft[slug].pt);
});

fs.writeFileSync(esPath, JSON.stringify(es, null, 2) + '\n', 'utf8');
fs.writeFileSync(ptPath, JSON.stringify(pt, null, 2) + '\n', 'utf8');

// Immediately re-parse fresh from disk
const reEs = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const rePt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));

console.log('Post-write items.es.json count:', reEs.length);
console.log('Post-write items.pt.json count:', rePt.length);

if (reEs.length === 686 && rePt.length === 686) {
  console.log('Write step successful! (Both files +5 = 686)');
} else {
  console.error('ERROR: Post-write counts do not match expected 686!');
  process.exit(1);
}
