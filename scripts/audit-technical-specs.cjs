const fs = require('fs');
const path = require('path');

// Helper to determine if an item is an actual non-food item (utensils, cookware, containers, textiles, tools)
function isNonFoodItem(item) {
  if (item.appliance === 'dryer') return true;
  if (item.appliance === 'refrigerator') return false;

  const m = (item.material || '').toLowerCase();
  const s = (item.slug || '').toLowerCase();
  const name = (item.item || item.slug || '').toLowerCase();

  // If item is explicitly a vessel, container, utensil, tool, cookware, tableware, or textile:
  const toolRegex = /(knife|knives|peeler|cup|cups|spatula|grater|thermometer|flute|flutes|glass|glasses|pot|pots|pan|pans|dish|dishes|tray|trays|rack|racks|board|boards|opener|masher|whisk|scourer|sponge|cloth|towel|bottle|bottles|mug|mugs|flask|thermos|tumbler|tub|tubs|box|boxes|basket|baskets|tin|tins|sheet|sheets|pacifier|pacifiers|cutlery|silverware|fork|forks|spoon|spoons)/i;
  const foodExceptions = /^(pot-roast|potato|potatoes|butter|peanut-butter|almond-butter|cookie-dough|chicken-breast|chicken-wings|vegetable-juice-blend|raw-fermented-sauerkraut|kalamata-olives-in-brine|green-olives-stuffed|miso-paste-fermented-tub|opened-red-wine-bottle|opened-white-wine-bottle|opened-beer-bottle-can)$/;

  if (foodExceptions.test(s)) {
    return false;
  }

  if (toolRegex.test(s) || toolRegex.test(name)) {
    // If it's a food stored in a container in refrigerator/freezer/pantry:
    if (['refrigerator', 'freezer', 'pantry'].includes(item.appliance)) {
      if (/wine|beer|juice|sauerkraut|olives|cider|soda|miso/.test(s)) {
        return false;
      }
    }
    return true;
  }

  // Explicit food/beverage keywords
  const foodKeywords = [
    'fruit', 'vegetable', 'protein', 'poultry', 'dairy', 'meat', 'seafood', 'fish',
    'pork', 'beef', 'tuber', 'dough', 'flour', 'bread', 'pastry', 'extract', 'puree',
    'juice', 'wine', 'beer', 'cider', 'soda', 'beverage', 'syrup', 'honey', 'oil',
    'fat', 'seasoning', 'sauce', 'condiment', 'dressing', 'spread', 'cereal', 'grain',
    'rice', 'pasta', 'seed', 'nut', 'bean', 'lentil', 'egg', 'cheese', 'yogurt',
    'butter', 'sugar', 'chocolate', 'mustard', 'mayo', 'vinegar', 'pickle', 'olive',
    'brine', 'cabbage', 'herb', 'spice', 'mushroom', 'prepared food', 'tea', 'coffee',
    'miso', 'ferment'
  ];

  if (foodKeywords.some(fk => s.includes(fk) || name.includes(fk))) {
    return false;
  }

  // Non-food materials
  const nonFoodMaterials = [
    'stainless steel', 'alloy metal', 'cast iron', 'copper', 'aluminum', 'precious metal',
    'polymer plastic', 'expanded polystyrene', 'soda-lime glass', 'borosilicate glass',
    'ceramic', 'porcelain', 'lead crystal', 'cotton', 'wool', 'silk', 'synthetic polyester',
    'footwear', 'silicone', 'cellulose paper', 'cardboard', 'wood', 'bamboo', 'appliance component',
    'foam rubber', 'rubber', 'latex', 'glass', 'metal', 'croslite', 'pyroceram', 'stoneware',
    'steel fibers', 'mesh', 'leather'
  ];

  for (const nfm of nonFoodMaterials) {
    if (m.includes(nfm)) {
      const hasFoodMat = /extract|juice|fruit|vegetable|meat|protein|dairy|puree|oil|fat|cabbage|olives|flour|dough/.test(m);
      if (!hasFoodMat) return true;
    }
  }

  return false;
}

// Check standard citation for specific reference code
function hasSpecificStandardCode(standardStr) {
  if (!standardStr) return false;
  const s = standardStr.trim();

  // Explicit vague umbrella phrases with no specific number
  if (/^manufacturer\b/i.test(s) && !/\d/.test(s)) return false;
  if (/care standards?$/i.test(s) && !/\d/.test(s)) return false;
  if (/guidelines?$/i.test(s) && !/§|\d/.test(s)) return false;
  if (/standards?$/i.test(s) && !/§|\d|iso|astm|ansi|nsf|ul|cpsc|fda|usda/i.test(s)) return false;

  // Patterns indicating specific standard code/number:
  // e.g., §, CFR, ANSI, ISO, ASTM, NFPA, UL, EN, DIN, TM\d+, Part \d+, IEC, BS, NSF, 9 CFR, 21 CFR, 16 CFR
  const specificPatterns = [
    /§\s*\d/,
    /\bCFR\b/i,
    /\bANSI\b/i,
    /\bISO\s*\d/i,
    /\bASTM\s*[A-Z]?\d+/i,
    /\bNFPA\s*\d+/i,
    /\bUL\s*\d+/i,
    /\bEN\s*\d+/i,
    /\bDIN\s*\d+/i,
    /\bNSF(\/ANSI)?\s*\d+/i,
    /\bSATRA\s+TM\s*\d+/i,
    /\bPart\s*\d+/i,
    /\bIEC\s*\d+/i,
    /\bBS\s*\d+/i,
    /\bMIL-STD/i
  ];

  return specificPatterns.some(pat => pat.test(s));
}

function auditItem(item, vertical) {
  const issues = [];
  const specs = item.technicalSpecs;
  if (!specs) return issues;

  const matThermal = specs.materialThermal || {};
  const safetyStd = specs.safetyStandard || {};
  const appSpec = specs.applianceSpecs || {};

  const textAll = [
    matThermal.property || '',
    matThermal.threshold || '',
    matThermal.details || '',
    safetyStd.organization || '',
    safetyStd.standard || '',
    safetyStd.citation || '',
    appSpec.parameter || '',
    appSpec.guideline || ''
  ].join(' ');

  const textLower = textAll.toLowerCase();

  // RULE A: Food-safety/pathogen cooking concepts applied to non-food items
  const foodSafetyTerms = [
    'microbiological lethality', 'pathogen lethality', 'salmonella', 'listeria',
    'internal core doneness', 'internal cooking temperatures', 'calibrated digital food thermometer',
    'internal core temp', 'vegetative pathogens', 'e. coli', 'campylobacter',
    'cooking raw animal foods', 'parasite destruction'
  ];

  if (vertical !== 'how-long' && vertical !== 'refreeze') {
    const isNonFood = isNonFoodItem(item);
    if (isNonFood) {
      const trippedTerms = foodSafetyTerms.filter(t => textLower.includes(t));
      if (trippedTerms.length > 0) {
        issues.push({
          rule: 'RULE_A_FOOD_SAFETY_ON_NON_FOOD',
          detail: `Non-food item (${item.item || item.slug}) has food safety pathogen terms: [${trippedTerms.join(', ')}]`
        });
      }
    }
  }

  // RULE B: Contradictory Material
  const itemMat = (item.material || '').toLowerCase();
  const itemName = (item.item || item.slug || '').toLowerCase();
  const itemSlug = (item.slug || '').toLowerCase();

  // B1: Cotton item with synthetic polyester / PET specs
  if (itemMat.includes('cotton') || itemName.includes('cotton')) {
    if (textLower.includes('pet softening') || textLower.includes('synthetic polyester and nylon')) {
      issues.push({
        rule: 'RULE_B_MATERIAL_CONTRADICTION',
        detail: `Cotton item has synthetic polyester/PET specifications.`
      });
    }
  }

  // B2: Glass item with thermoplastic / polypropylene specs
  if (itemMat.includes('glass') || itemName.includes('glass')) {
    if (textLower.includes('polypropylene melts') || textLower.includes('heat deflection temperature')) {
      issues.push({
        rule: 'RULE_B_MATERIAL_CONTRADICTION',
        detail: `Glass item has thermoplastic/polypropylene specifications.`
      });
    }
  }

  // B3: Wood/bamboo item with metal arcing specs
  if (itemMat.includes('wood') || itemMat.includes('bamboo') || itemName.includes('wood') || itemName.includes('bamboo')) {
    if (textLower.includes('dielectric arcing in rf fields') || textLower.includes('austenitic stainless steel')) {
      issues.push({
        rule: 'RULE_B_MATERIAL_CONTRADICTION',
        detail: `Wood/bamboo item has metal arcing specifications.`
      });
    }
  }

  // B4: Metal item with starch / pastry / dough specs
  if (itemMat.includes('metal') || itemMat.includes('steel') || itemMat.includes('iron') || itemMat.includes('copper')) {
    if (textLower.includes('starch gelatinization') || textLower.includes('pectin breakdown')) {
      issues.push({
        rule: 'RULE_B_MATERIAL_CONTRADICTION',
        detail: `Metal item has starch/pectin specifications.`
      });
    }
  }

  // B5: Food item with tableware/dishwasher durability specs ("chemically inert materials that withstand repeated wash cycles")
  if (!isNonFoodItem(item) && textLower.includes('repeated wash cycles')) {
    issues.push({
      rule: 'RULE_B_MATERIAL_CONTRADICTION',
      detail: `Food item (${item.item || item.slug}) has tableware dishwasher durability specifications ("chemically inert materials that withstand repeated wash cycles").`
    });
  }

  // B6: Non-meat food item in oven with raw poultry/meat pathogen lethality (Salmonella/Listeria)
  if (vertical === 'oven' && !isNonFoodItem(item)) {
    const isMeatOrPoultryOrEgg = /(?:chicken|turkey|duck|beef|pork|lamb|steak|bacon|sausage|meat|salmon|tuna|fish|shrimp|lobster|crab|(?:^|-)eggs?(?:-|$))/.test(itemSlug) && itemSlug !== 'eggplant';
    if (!isMeatOrPoultryOrEgg && textLower.includes('salmonella')) {
      issues.push({
        rule: 'RULE_B_MATERIAL_CONTRADICTION',
        detail: `Non-meat food item (${item.item || item.slug}) has raw meat/poultry pathogen lethality specifications (Salmonella/Listeria).`
      });
    }
  }

  // RULE C: Vague umbrella citations without specific standard number/code
  const std = safetyStd.standard || '';
  if (!hasSpecificStandardCode(std)) {
    issues.push({
      rule: 'RULE_C_VAGUE_UMBRELLA_CITATION',
      detail: `Standard "${std}" lacks a specific verifiable code/number (e.g. CFR, ANSI, ASTM, ISO, UL, NFPA, §).`
    });
  }

  return issues;
}

// Run audit across all 12 verticals
const datasets = [
  { name: 'airfryer', file: 'src/data/items.json', isAux: false },
  { name: 'refrigerator', file: 'src/data/items.json', isAux: false },
  { name: 'oven', file: 'src/data/items.json', isAux: false },
  { name: 'freezer', file: 'src/data/items.json', isAux: false },
  { name: 'dishwasher', file: 'src/data/items.json', isAux: false },
  { name: 'microwave', file: 'src/data/items.json', isAux: false },
  { name: 'dryer', file: 'src/data/items.json', isAux: false },
  { name: 'how-long', file: 'src/data/how-long.json', isAux: true },
  { name: 'refreeze', file: 'src/data/refreeze.json', isAux: true },
  { name: 'what-happens', file: 'src/data/what-happens.json', isAux: true },
  { name: 'compare', file: 'src/data/comparisons.json', isAux: true },
  { name: 'material', file: 'src/data/specs/material.json', isAux: true }
];

const flaggedByRule = {
  RULE_A_FOOD_SAFETY_ON_NON_FOOD: [],
  RULE_B_MATERIAL_CONTRADICTION: [],
  RULE_C_VAGUE_UMBRELLA_CITATION: []
};

let totalEvaluated = 0;
const allFlagged = [];

for (const ds of datasets) {
  let items = [];
  if (ds.name === 'material') {
    const raw = JSON.parse(fs.readFileSync(ds.file, 'utf8'));
    items = Object.keys(raw).map(k => ({ slug: k, item: k, technicalSpecs: raw[k] }));
  } else {
    const raw = JSON.parse(fs.readFileSync(ds.file, 'utf8'));
    items = ds.isAux ? raw : raw.filter(i => i.appliance === ds.name);
  }

  for (const item of items) {
    totalEvaluated++;
    const issues = auditItem(item, ds.name);
    if (issues.length > 0) {
      allFlagged.push({
        vertical: ds.name,
        slug: item.slug,
        item: item.item || item.slug,
        issues
      });
      for (const iss of issues) {
        flaggedByRule[iss.rule].push({
          vertical: ds.name,
          slug: item.slug,
          item: item.item || item.slug,
          detail: iss.detail,
          standard: item.technicalSpecs?.safetyStandard?.standard || ''
        });
      }
    }
  }
}

// Write full flagged output to JSON file
fs.writeFileSync('logs/task1_flagged_items.json', JSON.stringify({
  totalEvaluated,
  distinctFlaggedCount: allFlagged.length,
  countsByRule: {
    RULE_A: flaggedByRule.RULE_A_FOOD_SAFETY_ON_NON_FOOD.length,
    RULE_B: flaggedByRule.RULE_B_MATERIAL_CONTRADICTION.length,
    RULE_C: flaggedByRule.RULE_C_VAGUE_UMBRELLA_CITATION.length
  },
  flaggedByRule,
  allFlagged
}, null, 2));

console.log('====================================================');
console.log('🔍 REFINED AUDIT COMPLETE');
console.log('====================================================');
console.log(`Total evaluated: ${totalEvaluated}`);
console.log(`Distinct flagged items: ${allFlagged.length}`);
console.log(`Rule A (Food safety on non-food): ${flaggedByRule.RULE_A_FOOD_SAFETY_ON_NON_FOOD.length}`);
console.log(`Rule B (Material contradictions): ${flaggedByRule.RULE_B_MATERIAL_CONTRADICTION.length}`);
console.log(`Rule C (Vague umbrella citations): ${flaggedByRule.RULE_C_VAGUE_UMBRELLA_CITATION.length}`);
console.log('====================================================');
