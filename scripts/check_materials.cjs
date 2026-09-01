const items = require('../src/data/items.json');
const dupes = items.filter(i => i.specific_warning);
const materialCounts = {};
dupes.forEach(i => {
  const m = i.material || 'N/A';
  materialCounts[m] = (materialCounts[m] || 0) + 1;
});
console.log('--- Material Counts for the 389 modified items ---');
for (const [m, c] of Object.entries(materialCounts)) {
  console.log(`${c} items: ${m}`);
}

console.log('\n--- Requested Items ---');
const requested = ['Wok', 'Enameled Cast Iron', 'Bamboo Cups', 'Aluminum Foil', 'Styrofoam'];
const found = items.filter(i => requested.includes(i.item) && i.specific_warning);
console.log(JSON.stringify(found.map(i => ({ item: i.item, appliance: i.appliance, material: i.material || 'N/A', warning: i.specific_warning })), null, 2));
