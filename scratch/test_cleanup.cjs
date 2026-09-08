const fs = require('fs');

// Read files
const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const redirects = JSON.parse(fs.readFileSync('redirects.json', 'utf8'));
const publicRedirects = fs.readFileSync('public/_redirects', 'utf8');

console.log('Original items count:', items.length);
const freezerCount = items.filter(i => i.appliance === 'freezer').length;
console.log('Original freezer items count:', freezerCount);

// Verify peppers and bell-pepper exist
const peppersIdx = items.findIndex(i => i.appliance === 'freezer' && i.slug === 'peppers');
const bellIdx = items.findIndex(i => i.appliance === 'freezer' && i.slug === 'bell-pepper');
console.log('peppers index:', peppersIdx, 'bell-pepper index:', bellIdx);

console.log('Test script ran successfully.');
