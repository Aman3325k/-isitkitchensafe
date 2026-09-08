const fs = require('fs');

const draft = JSON.parse(fs.readFileSync('scratch/cat3_batch3_translations.json', 'utf8'));
const esPath = 'src/data/items.es.json';
const ptPath = 'src/data/items.pt.json';

const esData = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const ptData = JSON.parse(fs.readFileSync(ptPath, 'utf8'));

console.log(`Initial ES count: ${esData.length}`);
console.log(`Initial PT count: ${ptData.length}`);

// Append items
draft.es.forEach(item => esData.push(item));
draft.pt.forEach(item => ptData.push(item));

fs.writeFileSync(esPath, JSON.stringify(esData, null, 2) + '\n', 'utf8');
fs.writeFileSync(ptPath, JSON.stringify(ptData, null, 2) + '\n', 'utf8');

console.log(`Updated ES count: ${esData.length} (expected 696)`);
console.log(`Updated PT count: ${ptData.length} (expected 696)`);
