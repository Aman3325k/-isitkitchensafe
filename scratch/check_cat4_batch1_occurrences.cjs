const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));

const slugs = ['raw-chicken', 'cooked-chicken', 'chicken-breast', 'chicken-wings', 'turkey-breast'];

console.log('=== CHECKING SLUGS ACROSS ALL APPLIANCES ===');
slugs.forEach(s => {
  console.log(`\n--- ${s} ---`);
  const enMatches = en.filter(x => x.slug === s);
  enMatches.forEach(m => {
    const esMatch = es.find(x => x.slug === s && x.appliance === m.appliance);
    const ptMatch = pt.find(x => x.slug === s && x.appliance === m.appliance);
    console.log(`[${m.appliance}]: EN item="${m.item}", material="${m.material}"`);
    console.log(`  ES: item="${esMatch?.item}", material="${esMatch?.material}"`);
    console.log(`  PT: item="${ptMatch?.item}", material="${ptMatch?.material}"`);
  });
});

console.log('\n=== CHECKING OVEN-MEAT-DAIRY TRANSLATIONS ===');
try {
  const ovenMeat = require('./scripts/translations/oven-meat-dairy.cjs');
  ['chicken-breast', 'chicken-wings', 'turkey-breast'].forEach(s => {
    if (ovenMeat[s]) {
      console.log(`[oven-meat-dairy] ${s}:`);
      console.log('  ES:', ovenMeat[s].es ? ovenMeat[s].es.item : 'none', '| material:', ovenMeat[s].es?.material);
      console.log('  PT:', ovenMeat[s].pt ? ovenMeat[s].pt.item : 'none', '| material:', ovenMeat[s].pt?.material);
    }
  });
} catch (e) {
  console.log('Error loading oven-meat-dairy:', e.message);
}
