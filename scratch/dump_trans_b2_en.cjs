const fs = require('fs');

const itemsEn = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const slugs = ['cantaloupe', 'cherry', 'grape', 'honeydew', 'lemon'];

slugs.forEach(slug => {
  const item = itemsEn.find(i => i.slug === slug && i.appliance === 'freezer');
  console.log(`=== ${slug.toUpperCase()} (EN LIVE) ===`);
  console.log(JSON.stringify(item, null, 2));
  console.log('');
});
