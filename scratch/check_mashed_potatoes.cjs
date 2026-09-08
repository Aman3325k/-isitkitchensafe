const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

['sweet-potato', 'tomato', 'yellow-squash', 'zucchini', 'mashed-potatoes'].forEach(slug => {
  console.log(`\n=== SLUG: ${slug} ===`);
  ['dishwasher', 'microwave', 'oven', 'freezer'].forEach(app => {
    const e = en.find(i => i.appliance === app && i.slug === slug);
    const s = es.find(i => i.appliance === app && i.slug === slug);
    const p = pt.find(i => i.appliance === app && i.slug === slug);
    if (e) console.log(`  [${app}] EN: item="${e.item}" material="${e.material}" safe="${e.safe}"`);
    if (s) console.log(`  [${app}] ES: item="${s.item}" material="${s.material}" safe="${s.safe}"`);
    if (p) console.log(`  [${app}] PT: item="${p.item}" material="${p.material}" safe="${p.safe}"`);
  });
});
