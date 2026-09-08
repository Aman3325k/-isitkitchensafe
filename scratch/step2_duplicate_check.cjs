const fs = require('fs');
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));
const slugs = ['pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'];
console.log('Slug'.padEnd(15) + 'items.es.json exists(freezer)'.padEnd(30) + 'items.pt.json exists(freezer)');
console.log('-'.repeat(75));
let collisionFound = false;
slugs.forEach(slug => {
  const esMatch = es.some(i => i.slug === slug && i.appliance === 'freezer');
  const ptMatch = pt.some(i => i.slug === slug && i.appliance === 'freezer');
  console.log(slug.padEnd(15) + String(esMatch).padEnd(30) + String(ptMatch));
  if (esMatch || ptMatch) collisionFound = true;
});
console.log('-'.repeat(75));
console.log('Collision found:', collisionFound);
if (collisionFound) process.exit(1);
