const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(x => x.appliance === 'freezer');

// Core meat and seafood items
const meatSlugs = [
  'raw-chicken', 'cooked-chicken', 'salmon', 'shrimp', 'ground-beef',
  'bacon', 'deli-meat', 'hot-dogs', 'sausage', 'pork-chop',
  'beef-steak', 'tuna-steak', 'lobster-tail', 'crab-legs', 'chicken-breast',
  'chicken-wings', 'turkey-breast', 'duck-breast'
];

// Egg items
const eggSlugs = ['egg', 'hard-boiled-eggs'];

const allTargetSlugs = [...meatSlugs, ...eggSlugs];

const targetItems = allTargetSlugs.map(s => freezer.find(x => x.slug === s)).filter(Boolean);

console.log(`Auditing ${targetItems.length} candidate items...\n`);

const foreignAppliances = [
  'dishwasher', 'microwave', 'oven', 'stove', 'laundry', 'dryer', 
  'detergent', 'prerise', 'rinse cycle', 'top rack', 'bottom rack', 
  'heating element', 'radiation', 'spin cycle', 'tumble'
];

targetItems.forEach((item, idx) => {
  console.log(`--------------------------------------------------------------------------------`);
  console.log(`[${idx + 1}] Item: "${item.item}" | Slug: "${item.slug}"`);
  console.log(`    Material: "${item.material}"`);
  console.log(`    Safe: "${item.safe}"`);
  console.log(`    FAQ count: ${item.faqs ? item.faqs.length : 0}`);
  console.log(`    Short Answer: "${item.shortAnswer}"`);
  console.log(`    Key Risk: "${item.keyRisk}"`);
  console.log(`    Tip: "${item.tip}"`);
  console.log(`    Related Items: ${JSON.stringify(item.relatedItems)}`);

  // Check cross-contamination
  const fullText = JSON.stringify(item).toLowerCase();
  const matchedForeign = foreignAppliances.filter(w => fullText.includes(w));
  if (matchedForeign.length > 0) {
    console.log(`    ⚠️ CONTAMINATION DETECTED: contains ${JSON.stringify(matchedForeign)}`);
    // Find where
    for (const [key, val] of Object.entries(item)) {
      const valStr = JSON.stringify(val).toLowerCase();
      const foundInField = matchedForeign.filter(w => valStr.includes(w));
      if (foundInField.length > 0) {
        console.log(`       -> Field "${key}": matched ${JSON.stringify(foundInField)}`);
      }
    }
  }

  // Check FAQs
  if (item.faqs) {
    console.log(`    FAQs:`);
    item.faqs.forEach((faq, fIdx) => {
      console.log(`       Q${fIdx + 1}: ${faq.question}`);
    });
  }
});
