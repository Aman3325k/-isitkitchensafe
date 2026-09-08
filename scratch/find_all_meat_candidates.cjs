const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(x => x.appliance === 'freezer');

console.log('=== SEARCHING ALL 176 FREEZER ITEMS FOR MEAT/SEAFOOD/PROTEIN ===');
freezer.forEach((x, i) => {
  const text = JSON.stringify(x).toLowerCase();
  const isCandidate = x.material === 'Animal Protein' || 
                      x.material.toLowerCase().includes('meat') ||
                      x.material.toLowerCase().includes('poultry') ||
                      x.material.toLowerCase().includes('fish') ||
                      x.material.toLowerCase().includes('seafood') ||
                      x.slug.includes('chicken') || x.slug.includes('beef') ||
                      x.slug.includes('pork') || x.slug.includes('fish') ||
                      x.slug.includes('salmon') || x.slug.includes('tuna') ||
                      x.slug.includes('shrimp') || x.slug.includes('crab') ||
                      x.slug.includes('lobster') || x.slug.includes('steak') ||
                      x.slug.includes('bacon') || x.slug.includes('sausage') ||
                      x.slug.includes('turkey') || x.slug.includes('duck') ||
                      x.slug.includes('lamb') || x.slug.includes('meat') ||
                      x.slug.includes('egg');

  if (isCandidate) {
    console.log(`${x.slug.padEnd(25)} | ${x.item.padEnd(20)} | ${x.material.padEnd(30)} | safe: ${x.safe.padEnd(7)} | faqs: ${x.faqs.length}`);
  }
});
