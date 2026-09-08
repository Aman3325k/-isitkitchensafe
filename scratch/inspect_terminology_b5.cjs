const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const slugs = ['sweet-potato', 'tomato', 'yellow-squash', 'zucchini', 'mashed-potatoes'];

console.log('=== SLUG OCCURRENCES ACROSS ALL APPLIANCES ===');
slugs.forEach(s => {
  console.log(`\n--- ${s} ---`);
  const enMatches = en.filter(x => x.slug === s);
  enMatches.forEach(m => {
    const esMatch = es.find(x => x.slug === s && x.appliance === m.appliance);
    const ptMatch = pt.find(x => x.slug === s && x.appliance === m.appliance);
    console.log(`Appliance [${m.appliance}]:`);
    console.log(`  EN: item="${m.item}", material="${m.material}", safe="${m.safe}"`);
    console.log(`  ES: item="${esMatch ? esMatch.item : 'NOT FOUND'}", material="${esMatch ? esMatch.material : 'NOT FOUND'}"`);
    console.log(`  PT: item="${ptMatch ? ptMatch.item : 'NOT FOUND'}", material="${ptMatch ? ptMatch.material : 'NOT FOUND'}"`);
  });
});

console.log('\n=== MATERIAL CHECK: "Fresh Fruit (High Moisture)" PRECEDENTS ===');
const enHighMoisture = en.filter(x => x.material && x.material.includes('High Moisture'));
enHighMoisture.forEach(m => {
  const esMatch = es.find(x => x.slug === m.slug && x.appliance === m.appliance);
  const ptMatch = pt.find(x => x.slug === m.slug && x.appliance === m.appliance);
  if (esMatch || ptMatch) {
    console.log(`[${m.appliance}/${m.slug}] EN material: "${m.material}" -> ES: "${esMatch?.material}", PT: "${ptMatch?.material}"`);
  }
});

console.log('\n=== MATERIAL CHECK: "Prepared Food Product" PRECEDENTS ===');
const enPrepared = en.filter(x => x.material === 'Prepared Food Product');
console.log(`Total EN items with "Prepared Food Product": ${enPrepared.length}`);
enPrepared.slice(0, 10).forEach(m => {
  const esMatch = es.find(x => x.slug === m.slug && x.appliance === m.appliance);
  const ptMatch = pt.find(x => x.slug === m.slug && x.appliance === m.appliance);
  if (esMatch || ptMatch) {
    console.log(`[${m.appliance}/${m.slug}] EN: "${m.item}" -> ES: "${esMatch?.item}" [${esMatch?.material}], PT: "${ptMatch?.item}" [${ptMatch?.material}]`);
  }
});

console.log('\n=== ES/PT UNIQUE TRANSLATIONS FOR "Prepared Food Product" IN LIVE DB ===');
const esMaterialsForPrepared = new Set();
const ptMaterialsForPrepared = new Set();
enPrepared.forEach(m => {
  const esMatch = es.find(x => x.slug === m.slug && x.appliance === m.appliance);
  const ptMatch = pt.find(x => x.slug === m.slug && x.appliance === m.appliance);
  if (esMatch?.material) esMaterialsForPrepared.add(esMatch.material);
  if (ptMatch?.material) ptMaterialsForPrepared.add(ptMatch.material);
});
console.log('ES materials for Prepared Food Product:', Array.from(esMaterialsForPrepared));
console.log('PT materials for Prepared Food Product:', Array.from(ptMaterialsForPrepared));
