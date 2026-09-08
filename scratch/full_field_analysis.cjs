const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(i => i.appliance === 'freezer');
const redirects = JSON.parse(fs.readFileSync('redirects.json', 'utf8'));

// All 27 candidate slugs (25 produce/veg + mashed-potatoes + herbs-in-oil)
const candidateSlugs = [
  'lettuce', 'celery', 'cabbage', 'broccoli', 'peppers', 'zucchini',
  'bell-pepper', 'spinach', 'brussels-sprouts', 'kale', 'carrot',
  'onion', 'garlic', 'potato', 'sweet-potato', 'yellow-squash',
  'eggplant', 'asparagus', 'green-beans', 'peas', 'corn',
  'mushroom', 'ginger', 'cucumber', 'tomato',
  'mashed-potatoes', 'herbs-in-oil'
];

console.log('=== FULL FIELD-BY-FIELD ANALYSIS OF VEGETABLE CANDIDATES ===\n');

candidateSlugs.forEach(slug => {
  const item = freezer.find(i => i.slug === slug);
  if (!item) {
    console.log(`MISSING: ${slug}`);
    return;
  }

  console.log(`----------------------------------------`);
  console.log(`SLUG: ${item.slug} | ITEM: ${item.item}`);
  console.log(`SAFE: ${item.safe}`);
  console.log(`MATERIAL: ${item.material}`);
  console.log(`SHORT ANSWER: ${item.shortAnswer}`);
  console.log(`KEY RISK: ${item.keyRisk}`);
  console.log(`TIP: ${item.tip}`);
  console.log(`LEARN MORE: ${item.learnMore}`);
  console.log(`FAQ COUNT: ${item.faqs ? item.faqs.length : 0}`);
  if (item.faqs) {
    item.faqs.forEach((f, idx) => console.log(`  FAQ ${idx+1}: ${f.question}`));
  }
  console.log(`RELATED ITEMS: ${JSON.stringify(item.relatedItems)}`);
  console.log(`TIPS COUNT: ${item.tips ? item.tips.length : 0}`);
  console.log(`WARNINGS COUNT: ${item.warnings ? item.warnings.length : 0}`);
  
  // Flag issues:
  const issues = [];
  const text = JSON.stringify(item).toLowerCase();
  if (text.includes('dishwasher') || text.includes('top rack') || text.includes('hand wash')) {
    issues.push('CRITICAL: Dishwasher contamination');
  }
  if (text.includes('microwave')) {
    issues.push('CRITICAL: Microwave contamination');
  }
  if (text.includes('oven') && !text.includes('freezer')) {
    issues.push('CRITICAL: Oven contamination');
  }
  if ((item.faqs || []).length < 3) {
    issues.push(`FAQ: Only ${(item.faqs || []).length} FAQ(s) (needs 3+)`);
  }
  if (item.reason.includes('halts all enzymatic activity and microbial growth')) {
    issues.push('BOILERPLATE: Generic USDA halts enzymatic activity reason');
  }
  if (item.reason.includes('This item freezes exceptionally well without losing its nutritional value')) {
    issues.push('BOILERPLATE: Generic "This item freezes exceptionally well" reason');
  }
  if (item.reason.includes('This item contains a very high water content')) {
    issues.push('BOILERPLATE: Generic "high water content mush" reason');
  }
  if (item.shortAnswer.match(/^(Yes|No), (do not freeze|a) [A-Z]/)) {
    issues.push('GRAMMAR: Article error in shortAnswer (e.g. "a Lettuce", "a Celery")');
  }
  
  // Check relatedItems for invalid or redirected slugs
  (item.relatedItems || []).forEach(rel => {
    const target = freezer.find(f => f.slug === rel);
    if (!target) {
      // Check if it's a known redirect
      const redir = redirects.find(r => r.source === `/freezer/${rel}`);
      if (redir) {
        issues.push(`RELATED_ITEMS: "${rel}" is a dead/redirected slug -> points to "${redir.target}"`);
      } else {
        issues.push(`RELATED_ITEMS: "${rel}" does NOT exist in freezer`);
      }
    }
  });

  if (issues.length > 0) {
    console.log(`ISSUES FOUND:`);
    issues.forEach(iss => console.log(`  * ${iss}`));
  } else {
    console.log(`ISSUES: None (Clean custom content)`);
  }
  console.log();
});
