const fs = require('fs');
const path = require('path');

const drinkware = require('./translations/dishwasher-drinkware.cjs');
const cookware = require('./translations/dishwasher-cookware.cjs');
const knives = require('./translations/dishwasher-knives.cjs');
const appliances = require('./translations/dishwasher-appliances.cjs');
const utensils = require('./translations/dishwasher-utensils.cjs');
const tableware = require('./translations/dishwasher-tableware.cjs');
const misc = require('./translations/dishwasher-misc.cjs');
const { foodNames, generateFoodTranslation } = require('./translations/dishwasher-foods.cjs');

const itemsPath = path.resolve(__dirname, '../src/data/items.json');
const itemsEsPath = path.resolve(__dirname, '../src/data/items.es.json');
const itemsPtPath = path.resolve(__dirname, '../src/data/items.pt.json');

const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));
const itemsEs = JSON.parse(fs.readFileSync(itemsEsPath, 'utf8'));
const itemsPt = JSON.parse(fs.readFileSync(itemsPtPath, 'utf8'));

const dwItems = items.filter(i => i.appliance === 'dishwasher');
console.log(`Found ${dwItems.length} total dishwasher items in items.json.`);

const nonFoodMap = {
  ...drinkware,
  ...cookware,
  ...knives,
  ...appliances,
  ...utensils,
  ...tableware,
  ...misc
};

// Existing translated items in items.es.json / items.pt.json
const esMap = new Map(itemsEs.map(i => [`${i.appliance}/${i.slug}`, i]));
const ptMap = new Map(itemsPt.map(i => [`${i.appliance}/${i.slug}`, i]));

let addedEs = 0;
let addedPt = 0;
let missingTranslations = [];

for (const orig of dwItems) {
  const key = `${orig.appliance}/${orig.slug}`;

  // If already exists in locale file (e.g. hydroflask), keep existing
  if (esMap.has(key) && ptMap.has(key)) {
    continue;
  }

  let translation;
  if (nonFoodMap[orig.slug]) {
    translation = nonFoodMap[orig.slug];
  } else if (foodNames[orig.slug]) {
    translation = generateFoodTranslation(orig.slug, orig);
  } else {
    missingTranslations.push(orig.slug);
    continue;
  }

  // Build full Spanish entry
  const esEntry = {
    appliance: orig.appliance,
    slug: orig.slug,
    safe: orig.safe,
    relatedItems: orig.relatedItems,
    item: translation.es.item || orig.item,
    shortAnswer: translation.es.shortAnswer,
    reason: translation.es.reason,
    tips: translation.es.tips,
    warnings: translation.es.warnings,
    faqs: translation.es.faqs,
    material: translation.es.material || orig.material,
    keyRisk: translation.es.keyRisk || orig.keyRisk,
    tip: translation.es.tip || orig.tip,
    learnMore: translation.es.learnMore || orig.learnMore
  };

  // Build full Portuguese entry
  const ptEntry = {
    appliance: orig.appliance,
    slug: orig.slug,
    safe: orig.safe,
    relatedItems: orig.relatedItems,
    item: translation.pt.item || orig.item,
    shortAnswer: translation.pt.shortAnswer,
    reason: translation.pt.reason,
    tips: translation.pt.tips,
    warnings: translation.pt.warnings,
    faqs: translation.pt.faqs,
    material: translation.pt.material || orig.material,
    keyRisk: translation.pt.keyRisk || orig.keyRisk,
    tip: translation.pt.tip || orig.tip,
    learnMore: translation.pt.learnMore || orig.learnMore
  };

  if (!esMap.has(key)) {
    itemsEs.push(esEntry);
    esMap.set(key, esEntry);
    addedEs++;
  }
  if (!ptMap.has(key)) {
    itemsPt.push(ptEntry);
    ptMap.set(key, ptEntry);
    addedPt++;
  }
}

if (missingTranslations.length > 0) {
  console.error(`ERROR: Missing translations for ${missingTranslations.length} items:`, missingTranslations);
  process.exit(1);
}

fs.writeFileSync(itemsEsPath, JSON.stringify(itemsEs, null, 2), 'utf8');
fs.writeFileSync(itemsPtPath, JSON.stringify(itemsPt, null, 2), 'utf8');

console.log(`Successfully updated items.es.json (added ${addedEs}, total now ${itemsEs.length})`);
console.log(`Successfully updated items.pt.json (added ${addedPt}, total now ${itemsPt.length})`);
