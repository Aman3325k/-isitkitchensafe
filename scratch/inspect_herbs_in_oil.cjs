const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

console.log('=== ENGLISH SOURCE: herbs-in-oil ===');
const enItem = en.find(x => x.slug === 'herbs-in-oil' && x.appliance === 'freezer');
console.log(JSON.stringify(enItem, null, 2));

console.log('\n=== RELATED ITEMS CHECK (appliance === "freezer") ===');
const relSlugs = enItem.relatedItems;
relSlugs.forEach(slug => {
  const match = en.find(x => x.slug === slug && x.appliance === 'freezer');
  console.log(`Related slug: "${slug}" -> exists in freezer? ${match !== undefined} (item: "${match?.item}")`);
});

console.log('\n=== CROSS-REFERENCE: herbs-in-oil across other appliances ===');
const enOccurrences = en.filter(x => x.slug === 'herbs-in-oil');
enOccurrences.forEach(m => {
  const esMatch = es.find(x => x.slug === m.slug && x.appliance === m.appliance);
  const ptMatch = pt.find(x => x.slug === m.slug && x.appliance === m.appliance);
  console.log(`Appliance [${m.appliance}]: EN item="${m.item}", material="${m.material}"`);
  console.log(`  ES: item="${esMatch?.item}", material="${esMatch?.material}"`);
  console.log(`  PT: item="${ptMatch?.item}", material="${ptMatch?.material}"`);
});

console.log('\n=== CROSS-REFERENCE: "herb" or "oil" slugs across all appliances ===');
const herbOilItems = en.filter(x => x.slug.includes('herb') || x.slug.includes('oil'));
console.log('Total items matching herb/oil:', herbOilItems.length);
herbOilItems.forEach(m => {
  const esMatch = es.find(x => x.slug === m.slug && x.appliance === m.appliance);
  const ptMatch = pt.find(x => x.slug === m.slug && x.appliance === m.appliance);
  if (esMatch || ptMatch) {
    console.log(`[${m.appliance}/${m.slug}] EN: "${m.item}" -> ES: "${esMatch?.item}", PT: "${ptMatch?.item}"`);
  }
});

console.log('\n=== MATERIAL CHECK: "Fresh Herbs in Vegetable Fat" ===');
const matMatches = en.filter(x => x.material && (x.material.includes('Herb') || x.material.includes('Fat') || x.material === 'Fresh Herbs in Vegetable Fat'));
console.log(`EN items with matching material: ${matMatches.length}`);
matMatches.forEach(m => {
  const esMatch = es.find(x => x.slug === m.slug && x.appliance === m.appliance);
  const ptMatch = pt.find(x => x.slug === m.slug && x.appliance === m.appliance);
  console.log(`[${m.appliance}/${m.slug}] material="${m.material}" -> ES="${esMatch?.material}", PT="${ptMatch?.material}"`);
});
