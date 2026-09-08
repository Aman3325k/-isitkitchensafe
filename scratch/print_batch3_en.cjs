const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));

const slugs = ['garlic', 'ginger', 'green-beans', 'kale', 'lettuce'];
slugs.forEach(slug => {
  const item = en.find(i => i.appliance === 'freezer' && i.slug === slug);
  console.log(`=== ${slug.toUpperCase()} ===`);
  console.log(JSON.stringify(item, null, 2));
});
