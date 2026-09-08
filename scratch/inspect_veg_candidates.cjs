const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(i => i.appliance === 'freezer');

// Let's define the vegetable candidates
const vegSlugs = [
  // The 22 Fresh Vegetable items
  'lettuce', 'celery', 'cabbage', 'broccoli', 'peppers', 'zucchini',
  'bell-pepper', 'spinach', 'brussels-sprouts', 'kale', 'carrot',
  'onion', 'garlic', 'sweet-potato', 'yellow-squash', 'eggplant',
  'asparagus', 'green-beans', 'peas', 'corn', 'mushroom', 'ginger',
  // High moisture vegetable
  'cucumber',
  // Starchy tuber
  'potato',
  // High moisture fruit (culinary vegetable)
  'tomato',
  // Edge candidates
  'mashed-potatoes',
  'herbs-in-oil'
];

console.log('--- DETAILS OF CANDIDATES ---');
vegSlugs.forEach(slug => {
  const item = freezer.find(i => i.slug === slug);
  if (!item) {
    console.log(`SLUG NOT FOUND: ${slug}`);
    return;
  }
  const faqCount = item.faqs ? item.faqs.length : 0;
  console.log(`Slug: ${item.slug.padEnd(18)} | Item: ${item.item.padEnd(18)} | Safe: ${item.safe.padEnd(8)} | FAQs: ${faqCount} | Material: ${item.material}`);
});
