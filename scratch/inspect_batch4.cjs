const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const targetSlugs = ['mushroom', 'onion', 'peas', 'potato', 'spinach'];

console.log('=== ENGLISH FREEZER SOURCE ITEMS ===');
const enFreezer = en.filter(item => item.appliance === 'freezer' && targetSlugs.includes(item.slug));
targetSlugs.forEach(slug => {
  const item = enFreezer.find(i => i.slug === slug);
  if (!item) {
    console.log(`MISSING FROM EN: ${slug}`);
    return;
  }
  console.log(`\nSlug: ${item.slug}`);
  console.log(`Item: ${item.item}`);
  console.log(`Appliance: ${item.appliance}`);
  console.log(`Material: ${item.material}`);
  console.log(`Safe: ${item.safe}`);
  console.log(`Short Answer: ${item.shortAnswer}`);
  console.log(`Reason: ${item.reason}`);
  console.log(`Key Risk: ${item.keyRisk}`);
  console.log(`Tip: ${item.tip}`);
  console.log(`Learn More: ${item.learnMore}`);
  console.log(`Tips count: ${item.tips?.length || 0}`);
  console.log(`Warnings count: ${item.warnings?.length || 0}`);
  console.log(`FAQ count: ${item.faqs?.length || 0}`);
  console.log(`Related Items: ${JSON.stringify(item.relatedItems)}`);
});

console.log('\n=== EXISTING ES TRANSLATIONS IN OTHER APPLIANCES ===');
targetSlugs.forEach(slug => {
  const esMatches = es.filter(item => item.slug === slug);
  console.log(`Slug: ${slug} (${esMatches.length} matches in ES)`);
  esMatches.forEach(m => {
    console.log(`  [${m.appliance}] item: "${m.item}", material: "${m.material}"`);
  });
});

console.log('\n=== EXISTING PT TRANSLATIONS IN OTHER APPLIANCES ===');
targetSlugs.forEach(slug => {
  const ptMatches = pt.filter(item => item.slug === slug);
  console.log(`Slug: ${slug} (${ptMatches.length} matches in PT)`);
  ptMatches.forEach(m => {
    console.log(`  [${m.appliance}] item: "${m.item}", material: "${m.material}"`);
  });
});

console.log('\n=== CHECK MATERIAL "Starchy Tuber" ACROSS ALL DATABASES ===');
['potato', 'sweet-potato'].forEach(slug => {
  console.log(`Slug: ${slug}`);
  ['dishwasher', 'microwave', 'oven', 'freezer'].forEach(app => {
    const e = en.find(i => i.appliance === app && i.slug === slug);
    const s = es.find(i => i.appliance === app && i.slug === slug);
    const p = pt.find(i => i.appliance === app && i.slug === slug);
    if (e) console.log(`  [${app}] EN: "${e.item}" material="${e.material}"`);
    if (s) console.log(`  [${app}] ES: "${s.item}" material="${s.material}"`);
    if (p) console.log(`  [${app}] PT: "${p.item}" material="${p.material}"`);
  });
});

console.log('\n=== ALL UNIQUE MATERIALS IN ES/PT CONTAINING TUBER OR ALMIDON/AMIDO ===');
const tuberMatsES = new Set();
es.forEach(i => {
  if (i.material && (i.material.toLowerCase().includes('tuber') || i.material.toLowerCase().includes('almid') || i.material.toLowerCase().includes('fecul'))) {
    tuberMatsES.add(i.material);
  }
});
console.log('ES tuber materials:', Array.from(tuberMatsES));

const tuberMatsPT = new Set();
pt.forEach(i => {
  if (i.material && (i.material.toLowerCase().includes('tuber') || i.material.toLowerCase().includes('amid') || i.material.toLowerCase().includes('fecul'))) {
    tuberMatsPT.add(i.material);
  }
});
console.log('PT tuber materials:', Array.from(tuberMatsPT));
