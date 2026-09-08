const fs = require('fs');
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const slugs = ['carrot', 'celery', 'corn', 'cucumber', 'eggplant'];

console.log('=== ES TRANSLATIONS IN OTHER APPLIANCES ===');
slugs.forEach(slug => {
  const matches = es.filter(i => i.slug === slug);
  console.log(`\nSlug: ${slug} (${matches.length} matches)`);
  matches.forEach(m => {
    console.log(`  [${m.appliance}] item: "${m.item}", material: "${m.material}"`);
  });
});

console.log('\n=== PT TRANSLATIONS IN OTHER APPLIANCES ===');
slugs.forEach(slug => {
  const matches = pt.filter(i => i.slug === slug);
  console.log(`\nSlug: ${slug} (${matches.length} matches)`);
  matches.forEach(m => {
    console.log(`  [${m.appliance}] item: "${m.item}", material: "${m.material}"`);
  });
});
