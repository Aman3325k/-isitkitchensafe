const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));

console.log(`Total items: ${data.length}`);

// check for lorem ipsum or dummy content
let dummyCount = 0;
let uniqueNames = new Set();
data.forEach(item => {
    uniqueNames.add(item.item);
    if (JSON.stringify(item).toLowerCase().includes('lorem ipsum') || JSON.stringify(item).toLowerCase().includes('todo') || JSON.stringify(item).toLowerCase().includes('placeholder')) {
        dummyCount++;
    }
});

console.log(`Unique items: ${uniqueNames.size}`);
console.log(`Items with dummy content (lorem/todo/placeholder): ${dummyCount}`);

// check for doorway/thin-content patterns
// Are there many entries with exactly the same reason but different item names?
let reasons = {};
data.forEach(item => {
    if (!reasons[item.reason]) {
        reasons[item.reason] = [];
    }
    reasons[item.reason].push(item.item);
});

let duplicates = 0;
Object.values(reasons).forEach(list => {
    if (list.length > 5) { // identical reason for more than 5 items
        duplicates += list.length;
        console.log(`Warning: Found identical reason text for ${list.length} items. Example: ${list.slice(0, 3).join(', ')}...`);
    }
});
console.log(`Total items with duplicated (thin) content reason text: ${duplicates}`);

// Let's also check the schema of the first few items
console.log('\nSchema of first item:', Object.keys(data[0]));
console.log(data[0]);

