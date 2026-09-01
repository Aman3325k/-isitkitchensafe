const fs = require('fs');
const path = require('path');

const itemsPath = path.join(__dirname, '../src/data/items.json');
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));

const flaggedItems = [];

for (const item of items) {
  if (item.specific_warning && item.specific_warning.includes('[NEEDS REVIEW]')) {
    flaggedItems.push({
      item: item.item,
      appliance: item.appliance,
      material: item.material || 'N/A'
    });
    
    // Track as internal metadata
    item.needsReview = true;
    
    // Remove the unverified specific_warning entirely so it falls back to the old UI
    delete item.specific_warning;
  }
}

// Sort flagged items by material type, then by item name
flaggedItems.sort((a, b) => {
  if (a.material < b.material) return -1;
  if (a.material > b.material) return 1;
  if (a.item < b.item) return -1;
  if (a.item > b.item) return 1;
  return 0;
});

// Create CSV content
let csv = 'Material,Appliance,Item\n';
for (const f of flaggedItems) {
  // Escape quotes if needed
  const material = f.material.includes(',') ? `"${f.material}"` : f.material;
  const item = f.item.includes(',') ? `"${f.item}"` : f.item;
  csv += `${material},${f.appliance},${item}\n`;
}

fs.writeFileSync(path.join(__dirname, '../flagged_items_backlog.csv'), csv);
fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));

console.log(`Finalized items.json. Generated flagged_items_backlog.csv with ${flaggedItems.length} items.`);
