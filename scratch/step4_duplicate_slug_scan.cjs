const fs = require('fs');

const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

console.log('=== FULL FREEZER DUPLICATE-SLUG SCAN ===');

['es', 'pt'].forEach(lang => {
  const file = lang === 'es' ? es : pt;
  const freezerItems = file.filter(i => i.appliance === 'freezer');
  const slugs = freezerItems.map(i => i.slug);
  const slugCounts = {};
  const duplicates = [];

  slugs.forEach(s => {
    slugCounts[s] = (slugCounts[s] || 0) + 1;
    if (slugCounts[s] === 2) duplicates.push(s);
  });

  const uniqueCount = Object.keys(slugCounts).length;
  console.log(`\n[${lang.toUpperCase()}] Total freezer items: ${freezerItems.length}`);
  console.log(`[${lang.toUpperCase()}] Unique freezer slugs: ${uniqueCount}`);
  console.log(`[${lang.toUpperCase()}] Duplicate slugs count: ${duplicates.length}`);
  if (duplicates.length > 0) {
    console.error(`[${lang.toUpperCase()}] DUPLICATES FOUND:`, duplicates);
    process.exit(1);
  } else {
    console.log(`[${lang.toUpperCase()}] ZERO duplicate slugs across freezer vertical.`);
  }
});
