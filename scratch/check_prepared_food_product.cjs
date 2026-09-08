const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

console.log('=== CHECK ALL ITEMS WITH "Prepared" IN EN MATERIAL ===');
en.forEach(i => {
  if (i.material && i.material.toLowerCase().includes('prepared')) {
    const esMatch = es.find(e => e.appliance === i.appliance && e.slug === i.slug);
    const ptMatch = pt.find(p => p.appliance === i.appliance && p.slug === i.slug);
    console.log(`[${i.appliance}] ${i.slug}:`);
    console.log(`   EN material: "${i.material}"`);
    console.log(`   ES material: "${esMatch?.material}"`);
    console.log(`   PT material: "${ptMatch?.material}"`);
  }
});
