const fs = require('fs');

const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));

const batch1Slugs = ['asparagus', 'bell-pepper', 'broccoli', 'brussels-sprouts', 'cabbage'];

console.log('=== TERMINOLOGY CROSS-REFERENCE ===');
batch1Slugs.forEach(slug => {
  console.log(`\n--- SLUG: ${slug} ---`);
  const esMatches = es.filter(i => i.slug === slug);
  const ptMatches = pt.filter(i => i.slug === slug);
  const enMatches = en.filter(i => i.slug === slug);

  console.log('English item names:', enMatches.map(i => `${i.appliance}: "${i.item}"`));
  console.log('Spanish item names:', esMatches.map(i => `${i.appliance}: "${i.item}"`));
  console.log('Portuguese item names:', ptMatches.map(i => `${i.appliance}: "${i.item}"`));
});

console.log('\n=== MATERIAL TAXONOMY FOR "Fresh Vegetable" ===');
const enFreshVeg = en.filter(i => i.material === 'Fresh Vegetable');
console.log('EN items with "Fresh Vegetable":', enFreshVeg.length);

const esVegMaterials = new Set(es.filter(i => batch1Slugs.includes(i.slug)).map(i => i.material));
console.log('Existing ES materials for batch 1 slugs:', Array.from(esVegMaterials));

const ptVegMaterials = new Set(pt.filter(i => batch1Slugs.includes(i.slug)).map(i => i.material));
console.log('Existing PT materials for batch 1 slugs:', Array.from(ptVegMaterials));

// Check what ES/PT material strings exist across the entire files
const esMatSet = new Set(es.map(i => i.material).filter(Boolean));
console.log('All ES materials matching vegetable/verdura:', Array.from(esMatSet).filter(m => /vegetal|verdura/i.test(m)));

const ptMatSet = new Set(pt.map(i => i.material).filter(Boolean));
console.log('All PT materials matching vegetal/legume/verdura:', Array.from(ptMatSet).filter(m => /vegetal|legume|verdura/i.test(m)));
