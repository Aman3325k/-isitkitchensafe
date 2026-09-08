const fs = require('fs');
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const esFreezerMats = new Set(es.filter(i => i.appliance === 'freezer').map(i => i.material));
const ptFreezerMats = new Set(pt.filter(i => i.appliance === 'freezer').map(i => i.material));

console.log('ES Freezer materials:');
esFreezerMats.forEach(m => console.log('  ', m));

console.log('\nPT Freezer materials:');
ptFreezerMats.forEach(m => console.log('  ', m));
