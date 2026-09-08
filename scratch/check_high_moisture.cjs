const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

console.log('=== EN items with High Moisture or similar in material ===');
en.forEach(i => {
  if (i.material && i.material.toLowerCase().includes('moisture')) {
    console.log(`[${i.appliance}] ${i.slug}: material="${i.material}"`);
  }
});

console.log('=== ES items with humedad or similar in material ===');
es.forEach(i => {
  if (i.material && (i.material.toLowerCase().includes('humed') || i.material.toLowerCase().includes('agua') || i.material.toLowerCase().includes('moisture'))) {
    console.log(`[${i.appliance}] ${i.slug}: material="${i.material}"`);
  }
});

console.log('=== PT items with umidade or similar in material ===');
pt.forEach(i => {
  if (i.material && (i.material.toLowerCase().includes('umid') || i.material.toLowerCase().includes('água') || i.material.toLowerCase().includes('moisture'))) {
    console.log(`[${i.appliance}] ${i.slug}: material="${i.material}"`);
  }
});

console.log('=== Check how cucumber, watermelon, tomato, strawberry, etc. have materials in freezer ===');
const checkSlugs = ['cucumber', 'watermelon', 'tomato', 'strawberry', 'cantaloupe', 'honeydew'];
checkSlugs.forEach(slug => {
  const enMatch = en.find(i => i.appliance === 'freezer' && i.slug === slug);
  const esMatch = es.find(i => i.appliance === 'freezer' && i.slug === slug);
  const ptMatch = pt.find(i => i.appliance === 'freezer' && i.slug === slug);
  console.log(`\nSlug: ${slug}`);
  if (enMatch) console.log(`  EN: material="${enMatch.material}"`);
  if (esMatch) console.log(`  ES: material="${esMatch.material}"`);
  if (ptMatch) console.log(`  PT: material="${ptMatch.material}"`);
});
