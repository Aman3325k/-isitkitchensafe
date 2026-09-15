import fs from 'fs';
import path from 'path';

const redirectsPath = path.resolve('redirects.json');
const redirects = JSON.parse(fs.readFileSync(redirectsPath, 'utf8'));

const afSlugs = ['gold-silverware', 'silver-silverware', 'mason-jar', 'pacifiers-silicone'];
const fridgeKitchen = [
  'tupperware', 'plastic-container', 'ziploc-bag', 'bento-box', 'aluminum-foil',
  'gold-silverware', 'silver-silverware', 'silicone-spatula', 'baking-sheet',
  'bundt-pan', 'muffin-tin', 'stainless-steel-pan', 'cast-iron-skillet',
  'glass-bowl', 'ceramic-plate', 'paper-plate', 'mason-jar', 'copper-mug',
  'styrofoam-cup', 'travel-mug', 'yeti-tumbler', 'hydro-flask-bottle',
  'stanley-cup-tumbler', 'wine-glass', 'baby-bottles-pack', 'pacifiers-silicone'
];
const fridgeNonKitchen = ['candles-in-fridge', 'batteries', 'wool-sweater'];
const dryerSlugs = ['hats', 'baseball-cap', 'shower-pouf', 'velvet-hanger', 'cloth-diapers'];

const cat1Map = {
  '/refrigerator/cauliflower': '/refrigerator/fresh-cauliflower-head',
  '/oven/mason-jar-in-oven': '/oven/mason-jar',
  '/freezer/cucumbers': '/freezer/cucumber',
  '/freezer/tomatoes': '/freezer/tomato',
  '/freezer/limes': '/freezer/lime',
  '/freezer/raspberries': '/freezer/raspberry',
  '/freezer/ginger-root': '/freezer/ginger',
  '/dryer/denim-jacket': '/dryer/denim-jeans-pure-cotton',
  '/es/dryer/denim-jacket': '/es/dryer/denim-jeans-pure-cotton',
  '/pt/dryer/denim-jacket': '/pt/dryer/denim-jeans-pure-cotton'
};

function getLocalePrefix(src) {
  if (src.startsWith('/es/')) return '/es';
  if (src.startsWith('/pt/')) return '/pt';
  return '';
}

const updates = [];

for (const rule of redirects) {
  const src = rule.source.replace(/\/$/, '');
  const loc = getLocalePrefix(src);
  let newTarget = null;
  let category = null;

  // 1. Air Fryer Safety Contradictions
  if (
    (src.includes('/airfryer/') || src.includes('/air-fryer/')) &&
    afSlugs.some(s => src.endsWith('/' + s))
  ) {
    newTarget = `${loc}/airfryer`;
    category = 'Priority 1 (Air Fryer Safety)';
  }
  // 2. Category 1 Overlooked Existing Pages
  else if (cat1Map[src]) {
    newTarget = cat1Map[src];
    category = 'Priority 2 (Category 1 Overlooked)';
  }
  // 3. Category 2 Refrigerator Non-Food
  else if (src.includes('/refrigerator/')) {
    const slug = src.split('/refrigerator/')[1];
    if (fridgeKitchen.includes(slug)) {
      newTarget = `${loc}/refrigerator`;
      category = 'Priority 3 (Category 2 Fridge Kitchen)';
    } else if (fridgeNonKitchen.includes(slug)) {
      newTarget = `${loc}/material`;
      category = 'Priority 3 (Category 2 Fridge Non-Kitchen)';
    }
  }
  // 4. Category 3 Dryer Contradictions
  else if (src.includes('/dryer/')) {
    const slug = src.split('/dryer/')[1];
    if (dryerSlugs.includes(slug)) {
      newTarget = `${loc}/dryer`;
      category = 'Priority 3 (Category 3 Dryer)';
    }
  }

  if (newTarget && newTarget !== rule.target) {
    updates.push({
      rule,
      source: rule.source,
      oldTarget: rule.target,
      newTarget,
      category
    });
  }
}

console.log(`🔍 Total rules to update: ${updates.length}`);
const breakdown = {};
for (const u of updates) {
  breakdown[u.category] = (breakdown[u.category] || 0) + 1;
}
console.log('📊 Breakdown:', breakdown);

if (process.argv.includes('--apply')) {
  for (const u of updates) {
    u.rule.target = u.newTarget;
  }
  fs.writeFileSync(redirectsPath, JSON.stringify(redirects, null, 2) + '\n', 'utf8');
  console.log(`💾 Successfully updated ${updates.length} rules in redirects.json!`);
} else {
  console.log('ℹ️ Dry run only. Pass --apply to write changes.');
}
