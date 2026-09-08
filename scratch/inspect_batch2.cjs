const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const targetSlugs = ['carrot', 'celery', 'corn', 'cucumber', 'eggplant'];

console.log('=== ENGLISH FREEZER SOURCE ITEMS ===');
const enFreezer = en.filter(item => item.appliance === 'freezer' && targetSlugs.includes(item.slug));
enFreezer.forEach(item => {
  console.log(`\nSlug: ${item.slug}`);
  console.log(`Name: ${item.name}`);
  console.log(`Appliance: ${item.appliance}`);
  console.log(`Category: ${item.category}`);
  console.log(`Material: ${item.material}`);
  console.log(`Safe: ${item.safe}`);
  console.log(`Short Answer: ${item.shortAnswer}`);
  console.log(`Reason: ${item.reason}`);
  console.log(`Key Risk: ${item.keyRisk}`);
  console.log(`Tips count: ${item.tips?.length || 0}`);
  console.log(`Warnings count: ${item.warnings?.length || 0}`);
  console.log(`FAQ count: ${item.faqs?.length || 0}`);
  console.log(`Related Items: ${JSON.stringify(item.relatedItems)}`);
});

console.log('\n=== EXISTING ES TRANSLATIONS IN OTHER APPLIANCES ===');
targetSlugs.forEach(slug => {
  const esMatches = es.filter(item => item.slug === slug);
  console.log(`Slug: ${slug} (found ${esMatches.length} in ES)`);
  esMatches.forEach(m => {
    console.log(`  [${m.appliance}] name: "${m.name}", material: "${m.material}"`);
  });
});

console.log('\n=== EXISTING PT TRANSLATIONS IN OTHER APPLIANCES ===');
targetSlugs.forEach(slug => {
  const ptMatches = pt.filter(item => item.slug === slug);
  console.log(`Slug: ${slug} (found ${ptMatches.length} in PT)`);
  ptMatches.forEach(m => {
    console.log(`  [${m.appliance}] name: "${m.name}", material: "${m.material}"`);
  });
});

console.log('\n=== MATERIAL TAXONOMY FOR HIGH MOISTURE OR VEGETABLES ===');
const findMaterials = (items, lang) => {
  const mats = new Set();
  items.forEach(i => {
    if (i.material && (i.material.toLowerCase().includes('moisture') || i.material.toLowerCase().includes('humed') || i.material.toLowerCase().includes('umid') || i.material.toLowerCase().includes('veget') || i.material.toLowerCase().includes('verdur') || i.material.toLowerCase().includes('fresc'))) {
      mats.add(i.material);
    }
  });
  console.log(`${lang} matching materials:`, Array.from(mats));
};

findMaterials(en, 'EN');
findMaterials(es, 'ES');
findMaterials(pt, 'PT');
