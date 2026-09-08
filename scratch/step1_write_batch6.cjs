const fs = require('fs');

const draft = JSON.parse(fs.readFileSync('scratch/cat3_batch6_translations.json', 'utf8'));

const esPath = 'src/data/items.es.json';
const ptPath = 'src/data/items.pt.json';

const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));

console.log(`Baseline ES count: ${es.length}`);
console.log(`Baseline PT count: ${pt.length}`);

if (es.length !== 706 || pt.length !== 706) {
  console.error(`ERROR: Expected baseline 706, got ES=${es.length}, PT=${pt.length}`);
  process.exit(1);
}

const slug = 'herbs-in-oil';
if (es.some(x => x.slug === slug && x.appliance === 'freezer')) {
  console.error(`ERROR: ${slug} already exists in ES freezer!`);
  process.exit(1);
}
if (pt.some(x => x.slug === slug && x.appliance === 'freezer')) {
  console.error(`ERROR: ${slug} already exists in PT freezer!`);
  process.exit(1);
}

// Append
draft.es.forEach(item => es.push(item));
draft.pt.forEach(item => pt.push(item));

console.log(`New ES count: ${es.length}`);
console.log(`New PT count: ${pt.length}`);

if (es.length !== 707 || pt.length !== 707) {
  console.error(`ERROR: Expected 707 items, got ES=${es.length}, PT=${pt.length}`);
  process.exit(1);
}

fs.writeFileSync(esPath, JSON.stringify(es, null, 2) + '\n', 'utf8');
fs.writeFileSync(ptPath, JSON.stringify(pt, null, 2) + '\n', 'utf8');

console.log('Successfully wrote Batch 6 to items.es.json and items.pt.json.');
