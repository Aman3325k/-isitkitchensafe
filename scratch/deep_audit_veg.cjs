const fs = require('fs');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezer = items.filter(i => i.appliance === 'freezer');
const redirects = JSON.parse(fs.readFileSync('redirects.json', 'utf8'));

// Potential vegetable items
const candidateSlugs = [
  'lettuce', 'celery', 'cabbage', 'broccoli', 'peppers', 'zucchini',
  'bell-pepper', 'spinach', 'brussels-sprouts', 'kale', 'carrot',
  'onion', 'garlic', 'potato', 'sweet-potato', 'yellow-squash',
  'eggplant', 'asparagus', 'green-beans', 'peas', 'corn',
  'mushroom', 'ginger', 'cucumber', 'tomato',
  'mashed-potatoes', 'herbs-in-oil'
];

console.log('--- COMPREHENSIVE AUDIT ---');

const crossTerms = ['dishwasher', 'microwave', 'oven', 'stove', 'wash', 'rack', 'cycle', 'detergent', 'heat', 'bake', 'roast', 'broil'];

const auditResults = candidateSlugs.map(slug => {
  const item = freezer.find(i => i.slug === slug);
  if (!item) return { slug, missing: true };

  const allText = [
    item.item, item.shortAnswer, item.reason,
    ...(item.tips || []), ...(item.warnings || []),
    ...(item.faqs || []).map(f => f.question + ' ' + f.answer),
    item.keyRisk || '', item.tip || '', item.learnMore || ''
  ].join(' ').toLowerCase();

  // Contamination check
  const contaminations = [];
  if (allText.includes('dishwasher') || allText.includes('top rack') || allText.includes('hand wash') || allText.includes('detergent')) {
    contaminations.push('Dishwasher phrasing detected');
  }
  if (allText.includes('microwave') && !slug.includes('microwave')) {
    // Check context of microwave
    const matches = allText.match(/microwave[a-z]*/g);
    contaminations.push(`Microwave mention: ${matches ? matches.join(', ') : ''}`);
  }
  if (allText.includes('oven') && !allText.includes('freezer')) {
    contaminations.push('Oven phrasing');
  }

  // Check boilerplate
  const isBoilerplate = (item.reason || '').includes('halts all enzymatic activity and microbial growth') ||
                        (item.reason || '').includes('This item freezes exceptionally well without losing its nutritional value');

  // FAQ check
  const faqCount = item.faqs ? item.faqs.length : 0;
  const isGenericFaq = faqCount === 1 && item.faqs[0].question.includes('Does freezing kill bacteria?');

  return {
    slug: item.slug,
    name: item.item,
    material: item.material,
    safe: item.safe,
    faqCount,
    isBoilerplate,
    isGenericFaq,
    contaminations,
    shortAnswer: item.shortAnswer,
    reasonStart: (item.reason || '').slice(0, 100).replace(/\n/g, ' ')
  };
});

console.log(JSON.stringify(auditResults, null, 2));
