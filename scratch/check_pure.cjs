const fs = require('fs');
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

console.log('ES matches for puré:');
es.filter(i => i.item.toLowerCase().includes('puré')).forEach(i => console.log('  [' + i.appliance + '] ' + i.slug + ': "' + i.item + '"'));

console.log('PT matches for purê:');
pt.filter(i => i.item.toLowerCase().includes('purê')).forEach(i => console.log('  [' + i.appliance + '] ' + i.slug + ': "' + i.item + '"'));
