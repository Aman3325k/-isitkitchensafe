const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));

const slugs = ['carrot', 'celery', 'corn', 'cucumber', 'eggplant'];
const items = en.filter(i => i.appliance === 'freezer' && slugs.includes(i.slug));

// Sort in requested order
const sorted = slugs.map(s => items.find(i => i.slug === s));
console.log(JSON.stringify(sorted, null, 2));
