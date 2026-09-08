const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(i => i.appliance === 'freezer');
const redirects = JSON.parse(fs.readFileSync('redirects.json', 'utf8'));

// The 24 standard produce items (matching oven-produce vegetable counterpart) + 'peppers' collision = 25 items
// Plus 2 adjacent items: 'mashed-potatoes' and 'herbs-in-oil'
const coreVegSlugs = [
  'asparagus', 'bell-pepper', 'peppers', 'broccoli', 'brussels-sprouts',
  'cabbage', 'carrot', 'celery', 'corn', 'cucumber',
  'eggplant', 'garlic', 'ginger', 'green-beans', 'kale',
  'lettuce', 'mushroom', 'onion', 'peas', 'potato',
  'spinach', 'sweet-potato', 'tomato', 'yellow-squash', 'zucchini'
];

const adjacentSlugs = ['mashed-potatoes', 'herbs-in-oil'];

console.log('=== SUMMARY COUNTS ===');
console.log('Core vegetable slugs count (including peppers collision):', coreVegSlugs.length);
console.log('Adjacent slugs count:', adjacentSlugs.length);
console.log('Total candidate count:', coreVegSlugs.length + adjacentSlugs.length);

console.log('\n=== CORE VEGETABLES (25 items) ===');
let safetyIssuesCount = 0;
let faqExpansionCount = 0;
let collisionCount = 1; // peppers vs bell-pepper
let contaminationCount = 0;

coreVegSlugs.forEach(slug => {
  const item = freezer.find(i => i.slug === slug);
  const faqCount = item.faqs ? item.faqs.length : 0;
  
  let issues = [];
  // Safety checks
  if (slug === 'cabbage' && item.safe === 'no') {
    issues.push('Safety: cabbage marked "no" (can be frozen blanched/shredded)');
    safetyIssuesCount++;
  } else if (slug === 'celery' && item.safe === 'no') {
    issues.push('Safety: celery marked "no" (can be frozen for mirepoix/cooking)');
    safetyIssuesCount++;
  } else if (slug === 'lettuce' && item.safe === 'no') {
    issues.push('Safety: lettuce marked "no" (quality loss, not unsafe; consider "depends")');
    safetyIssuesCount++;
  }

  // FAQ check
  if (faqCount < 3) {
    issues.push(`FAQ count = ${faqCount} (< 3)`);
    faqExpansionCount++;
  }

  // Contamination check
  const text = JSON.stringify(item).toLowerCase();
  if (text.includes('dishwasher') || text.includes('top rack') || text.includes('hand wash')) {
    issues.push('Contamination: Dishwasher phrasing');
    contaminationCount++;
  }
  if (text.includes('microwave') && (item.tip || '').includes('microwave')) {
    issues.push('Contamination: Microwave egg phrasing');
    contaminationCount++;
  }
  if (text.includes('wash delicate garments') || text.includes('wool fibers')) {
    issues.push('Contamination: Dryer/laundry phrasing');
    contaminationCount++;
  }

  console.log(`${slug.padEnd(18)} | ${item.item.padEnd(18)} | Material: ${item.material.padEnd(32)} | Safe: ${item.safe.padEnd(8)} | FAQs: ${faqCount} | Issues: ${issues.join('; ') || 'None'}`);
});

console.log('\n=== ADJACENT ITEMS (2 items) ===');
adjacentSlugs.forEach(slug => {
  const item = freezer.find(i => i.slug === slug);
  const faqCount = item.faqs ? item.faqs.length : 0;
  let issues = [];
  if (slug === 'mashed-potatoes') {
    issues.push('Material: misclassified as "Kitchen Appliance Component"');
    issues.push('Contamination: Dishwasher phrasing in keyRisk/tip/learnMore');
    issues.push('Grammar: "a Mashed Potatoes"');
  }
  console.log(`${slug.padEnd(18)} | ${item.item.padEnd(18)} | Material: ${item.material.padEnd(32)} | Safe: ${item.safe.padEnd(8)} | FAQs: ${faqCount} | Issues: ${issues.join('; ')}`);
});

console.log('\n=== STATS ===');
console.log('Safety verdict concerns:', safetyIssuesCount);
console.log('Items needing FAQ expansion (< 3 FAQs):', faqExpansionCount);
console.log('Contamination instances in core veg:', contaminationCount);
console.log('Duplicate / collision slugs:', collisionCount, '(peppers vs bell-pepper)');
