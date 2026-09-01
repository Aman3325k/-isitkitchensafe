const fs = require('fs');
const items = require('../src/data/items.json');

const reasonCount = {};
for (const item of items) {
  const reason = item.reason.trim();
  if (!reasonCount[reason]) {
    reasonCount[reason] = [];
  }
  reasonCount[reason].push({
    item: item.item,
    appliance: item.appliance,
    slug: item.slug
  });
}

const duplicates = {};
let i = 1;
for (const [reason, list] of Object.entries(reasonCount)) {
  if (list.length > 1) {
    duplicates[`cat_${i}`] = { reason, items: list };
    i++;
  }
}

fs.writeFileSync('scripts/duplicates_extract.json', JSON.stringify(duplicates, null, 2));
console.log('Extracted duplicates to scripts/duplicates_extract.json');
