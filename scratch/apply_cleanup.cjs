const fs = require('fs');
const path = require('path');

const itemsPath = 'src/data/items.json';
const redirectsPath = 'redirects.json';
const publicRedirectsPath = 'public/_redirects';

const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));
const redirects = JSON.parse(fs.readFileSync(redirectsPath, 'utf8'));
let publicRedirects = fs.readFileSync(publicRedirectsPath, 'utf8');

console.log('--- EXECUTING CATEGORY 3 CLEANUP ---');

// 1. DEDUP: Merge peppers's content into bell-pepper, delete peppers
const peppersIdx = items.findIndex(i => i.appliance === 'freezer' && i.slug === 'peppers');
const bellIdx = items.findIndex(i => i.appliance === 'freezer' && i.slug === 'bell-pepper');

if (peppersIdx === -1 || bellIdx === -1) {
  console.error('ERROR: Could not find peppers or bell-pepper in items.json');
  process.exit(1);
}

const peppersItem = items[peppersIdx];

items[bellIdx] = {
  item: 'Bell Pepper',
  appliance: 'freezer',
  slug: 'bell-pepper',
  safe: 'yes',
  shortAnswer: 'Yes, bell peppers are completely safe to freeze without blanching.',
  reason: 'Bell peppers are among the easiest vegetables to freeze because they do not require blanching before freezing. Freezing halts enzyme activity and preserves their bright color, vitamin C, and sweet flavor for up to 10 months. While thawing softens their raw crispness, frozen bell peppers are perfect for fajitas, stir-fries, soups, stews, and roasted dishes.',
  tips: [
    'Wash, core, and seed bell peppers, then slice into strips or dice before freezing.',
    'Flash-freeze pepper slices on a baking sheet in a single layer for 1 hour so they remain loose and easy to portion.',
    'Add frozen pepper strips directly to hot skillets or simmering soups without thawing first.'
  ],
  warnings: [
    'Thawed bell peppers lose their raw, crunchy bite and are not suitable for fresh salad platters or raw veggie dips.',
    'Avoid packing moist, freshly washed peppers directly into bags without patting dry, as surface ice promotes freezer burn.'
  ],
  faqs: [
    {
      question: 'Do you have to blanch bell peppers before freezing them?',
      answer: 'No, unlike most vegetables, bell peppers have low enzyme activity and freeze wonderfully raw without any blanching.'
    },
    {
      question: 'Can you freeze whole bell peppers?',
      answer: 'Yes, you can freeze whole cored bell peppers for future stuffed peppers, or slice them into strips for convenient daily cooking.'
    },
    {
      question: 'How long do frozen bell peppers last in the freezer?',
      answer: 'Diced or sliced bell peppers sealed in airtight freezer bags remain flavorful and nutritious for up to 10 to 12 months at 0°F (-18°C).'
    }
  ],
  relatedItems: ['onion', 'zucchini', 'tomato', 'mushroom'],
  material: 'Fresh Vegetable',
  keyRisk: 'Loss of crispness for raw eating',
  tip: 'Freeze raw bell pepper strips in a single layer on a baking sheet before bagging so they don\'t freeze into a solid clump.',
  learnMore: 'Bell peppers have low levels of enzymatic browning agents, allowing them to freeze raw without blanching. Ice crystals soften cell walls, making them ideal for cooked sautés.'
};

// Delete peppers from items.json
items.splice(peppersIdx, 1);
console.log('1. Dedup completed: peppers deleted, content merged into bell-pepper.');

// Add redirects
const redirectExistsJson = redirects.some(r => r.source === '/freezer/peppers');
if (!redirectExistsJson) {
  redirects.push({ source: '/freezer/peppers', target: '/freezer/bell-pepper' });
}

if (!publicRedirects.includes('/freezer/peppers ')) {
  publicRedirects = publicRedirects.trimEnd() + '\n/freezer/peppers /freezer/bell-pepper 301\n/freezer/peppers/ /freezer/bell-pepper 301\n';
}
console.log('Redirects updated in redirects.json and public/_redirects.');

// Helper to update item
function updateFreezerItem(slug, updater) {
  const item = items.find(i => i.appliance === 'freezer' && i.slug === slug);
  if (!item) {
    console.error(`ERROR: Item not found: ${slug}`);
    process.exit(1);
  }
  updater(item);
}

// 2. SAFETY VERDICT FIXES (cabbage, celery, lettuce)
updateFreezerItem('cabbage', item => {
  item.safe = 'depends';
  item.shortAnswer = 'It depends. Raw cabbage turns limp and watery upon thawing, making it unsuitable for fresh coleslaw, but shredded or blanched cabbage freezes well for cooked dishes, soups, and casseroles.';
  item.reason = 'Cabbage has a high water content (over 90%) that forms large ice crystals when frozen, rupturing cell walls and destroying the crisp snap required for raw salads. However, freezing is completely safe and excellent for preserving cabbage intended for cooked recipes. Blanching shredded cabbage or whole leaves for 1 to 2 minutes deactivates enzymes, preserving flavor, color, and nutritional value for up to 9 months.';
  item.tips = [
    'Shred cabbage or separate whole leaves and blanch in boiling water for 90 seconds before ice-bathing and drying thoroughly.',
    'Flash-freeze shredded blanched cabbage in a single layer on a baking sheet before packing into freezer bags.',
    'Toss frozen cabbage directly into boiling soups, stir-fries, or braises without thawing.'
  ];
  item.warnings = [
    'Never expect thawed cabbage to retain its crunchy, crisp texture for raw salads or fresh slaws.',
    'Unblanched cabbage frozen for more than 4 to 6 weeks can develop bitter off-flavors and a dull gray tint due to active enzymes.'
  ];
  item.faqs = [
    {
      question: 'Can you freeze raw cabbage without blanching?',
      answer: 'You can freeze raw shredded cabbage for quick use within 4 to 8 weeks, but blanching first stops enzymatic breakdown and extends quality to 9 months.'
    },
    {
      question: 'Can you make coleslaw with thawed cabbage?',
      answer: 'No, thawed cabbage loses its turgor pressure and becomes limp and watery, so it cannot provide the crunch needed for fresh coleslaw.'
    },
    {
      question: 'Can you freeze whole heads of cabbage?',
      answer: 'Freezing whole unblanched heads takes up excessive freezer space and makes thawing uneven; it is far better to core and wedge or shred the head first.'
    }
  ];
  item.keyRisk = 'Cellular collapse & texture loss for raw use';
  item.tip = 'Blanch shredded cabbage for 90 seconds before freezing to lock in color and prevent enzyme-driven bitterness.';
  item.learnMore = 'Ice crystal formation punctures cell walls in cabbage, which eliminates crispness upon thawing. Blanching halts polyphenol oxidases and peroxidase enzymes, preserving cooked culinary quality.';
  item.relatedItems = ['broccoli', 'carrot', 'onion', 'kale'];
});

updateFreezerItem('celery', item => {
  item.safe = 'depends';
  item.shortAnswer = 'It depends. Celery loses its crisp crunch upon thawing and cannot be used for raw salads or crudités, but chopped frozen celery is excellent for cooked soups, stews, and mirepoix.';
  item.reason = 'Celery consists of roughly 95% water encased in rigid, fibrous cell structures. Freezing crystallizes this internal moisture, irrevocably puncturing cell walls so that thawed celery goes limp and soft. However, freezing preserves celery\'s aromatic oils, earthy flavor, and nutrients, making it safe and highly convenient for cooking bases, stuffing, stocks, and sauces.';
  item.tips = [
    'Wash, dry, and chop celery into small dice or slices before freezing so it is recipe-ready.',
    'Flash-freeze diced celery on a baking sheet for 1 hour so the pieces remain loose in the storage bag.',
    'Drop frozen celery directly into hot oil or simmering broth without thawing to avoid water pooling.'
  ];
  item.warnings = [
    'Do not attempt to use thawed celery for fresh vegetable platters, dips, or crisp salads.',
    'Raw unblanched celery should be used within 2 months, as active enzymes gradually degrade aroma and color.'
  ];
  item.faqs = [
    {
      question: 'Can you eat thawed celery raw?',
      answer: 'No, thawed celery is soft and watery because ice crystals rupture its cellular structure, completely eliminating its crisp snap.'
    },
    {
      question: 'Do you need to blanch celery before freezing?',
      answer: 'Blanching is optional if using within 2 months for soups, but blanching diced celery for 3 minutes preserves flavor and texture for up to 10 months.'
    },
    {
      question: 'Can you freeze celery leaves?',
      answer: 'Yes, celery leaves freeze exceptionally well and pack concentrated herbal flavor for stocks, broths, and seasoning blends.'
    }
  ];
  item.keyRisk = 'Turgor loss & limp texture for fresh eating';
  item.tip = 'Dice celery and freeze in single portions to toss straight into hot pans for mirepoix or soup bases.';
  item.learnMore = 'Celery stems rely on hydrostatic turgor pressure within parenchyma cells for their characteristic crunch. Sub-zero freezing ruptures these membranes, permanently softening the stalks.';
  item.relatedItems = ['carrot', 'onion', 'garlic', 'bell-pepper'];
});

updateFreezerItem('lettuce', item => {
  item.safe = 'depends';
  item.shortAnswer = 'It depends. Freezing ruins the crisp, leafy texture of lettuce for raw salads, but frozen lettuce is safe and works well blended into green smoothies, soups, and vegetable purees.';
  item.reason = 'Lettuce has a water content of nearly 95%. When frozen, expanding ice crystals puncture delicate cell walls, causing thawed leaves to collapse into a limp, soggy, unappealing mass. While this cellular collapse eliminates any hope of using it in crisp salads, the vegetable remains safe to consume, retaining its chlorophyll, folate, and vitamins when blended into hot soups or morning smoothies.';
  item.tips = [
    'Wash and spin lettuce completely dry, then puree with a splash of water and freeze in ice cube trays for easy smoothie portions.',
    'Hardier greens like romaine and butterhead hold up better when frozen than delicate loose-leaf lettuces.',
    'Add frozen lettuce purees directly to simmering vegetable soups or curries during the final minutes of cooking.'
  ];
  item.warnings = [
    'Never attempt to thaw frozen lettuce leaves for sandwiches, wraps, or fresh salads.',
    'Avoid freezing whole heads of iceberg lettuce; the dense water core freezes unevenly and becomes slimy when thawed.'
  ];
  item.faqs = [
    {
      question: 'Can you use frozen lettuce in a salad?',
      answer: 'No, freezing permanently destroys the cellular rigidity of lettuce, leaving thawed leaves limp, translucent, and soggy.'
    },
    {
      question: 'How can you use frozen lettuce?',
      answer: 'Frozen lettuce is best pureed into green smoothies, stirred into creamy vegetable soups, or braised like cooked greens in Asian stir-fries.'
    },
    {
      question: 'Can you freeze shredded lettuce?',
      answer: 'Shredded lettuce can be frozen in airtight bags for cooked applications, but freezing it pureed into ice cube trays is much easier to store and measure.'
    }
  ];
  item.keyRisk = 'Cellular lysis & total loss of leaf crispness';
  item.tip = 'Puree washed lettuce with a small amount of water and freeze in ice cube trays to drop into smoothies or soups.';
  item.learnMore = 'Plant cells in salad greens are maintained by vacuole turgor pressure. Freezing crystallizes vacuolar water, rupturing membrane integrity and causing irreversible leaf wilting upon thawing.';
  item.relatedItems = ['spinach', 'kale', 'cucumber', 'celery'];
});
console.log('2. Safety verdicts fixed: cabbage, celery, lettuce.');

// 3. CROSS-CONTAMINATION FIXES (asparagus, eggplant, sweet-potato, mashed-potatoes)
updateFreezerItem('asparagus', item => {
  item.keyRisk = 'Tip mushiness & woody fiber toughening';
  item.tip = 'Blanch asparagus spears in boiling water for 2 to 4 minutes based on stalk thickness, then chill immediately in an ice bath before freezing.';
  item.learnMore = 'Asparagus spears contain active enzymes that quickly turn stalks tough and stringy. Blanching halts enzymatic action, locks in bright green chlorophyll, and preserves tender spear tips for up to 10 months.';
  item.relatedItems = ['green-beans', 'broccoli', 'peas', 'baking-sheet'];
});

updateFreezerItem('eggplant', item => {
  item.keyRisk = 'Enzymatic browning & spongy waterlogging';
  item.tip = 'Steam-blanch sliced eggplant or roast it thoroughly before freezing, adding a splash of lemon juice to prevent flesh discoloration.';
  item.learnMore = 'Raw eggplant flesh has a sponge-like cellular structure loaded with polyphenol oxidase. Freezing raw causes severe browning and a rubbery texture; pre-cooking or steam-blanching deactivates enzymes and stabilizes texture.';
  item.relatedItems = ['zucchini', 'bell-pepper', 'tomato', 'yellow-squash'];
});

updateFreezerItem('sweet-potato', item => {
  item.keyRisk = 'Enzymatic hardening & moisture weeping';
  item.tip = 'Bake, boil, or steam sweet potatoes until fully tender before freezing as whole baked tubers, cubes, or mashed puree.';
  item.learnMore = 'Raw sweet potatoes turn hard, develop an unpleasant off-flavor, and discolor in the freezer due to active enzymes. Cooking gelatinizes starches and converts them to maltose, locking in sweetness and smooth texture.';
  item.relatedItems = ['potato', 'carrot', 'mashed-potatoes', 'baking-sheet'];
});

updateFreezerItem('mashed-potatoes', item => {
  item.material = 'Prepared Food Product';
  item.shortAnswer = 'Yes, mashed potatoes freeze exceptionally well when prepared with butter or cream.';
  item.reason = 'Mashed potatoes freeze remarkably well, especially when prepared with butter, milk, or cream. Fat coats the starch granules, preventing watery separation during freezing and thawing. Portioning mashed potatoes into individual mounds on a baking sheet before transferring them to airtight freezer bags makes quick weeknight dinners effortless.';
  item.keyRisk = 'Retrogradation & watery graininess upon thawing';
  item.tip = 'Add plenty of butter or cream before freezing, as dairy fats coat starch granules and prevent a watery separation.';
  item.learnMore = 'Starch molecules in cooked potatoes undergo retrogradation at freezing temperatures, squeezing out bound water. Incorporating fats from cream or butter binds the starch gel, ensuring a velvety texture when reheated.';
  item.relatedItems = ['potato', 'sweet-potato', 'butter', 'heavy-cream'];
});
console.log('3. Cross-contamination fixed: asparagus, eggplant, sweet-potato, mashed-potatoes.');

// 4. DEAD/NONSENSE relatedItems fixes + 5. GRAMMAR FIXES
updateFreezerItem('broccoli', item => {
  item.shortAnswer = 'Yes, broccoli is completely safe to freeze, especially when cut into florets and blanched first.';
  item.reason = 'Broccoli freezes exceptionally well, retaining its vibrant green color, crisp-tender texture, and high levels of vitamin C and sulforaphane. Blanching florets in boiling water for 3 minutes before freezing is recommended to inactivate ripening enzymes that would otherwise cause yellowing and off-flavors.';
  item.tips = [
    'Cut broccoli heads into uniform florets and blanch in boiling water for 3 minutes, then cool immediately in an ice bath.',
    'Flash-freeze blanched florets in a single layer on a parchment-lined baking sheet before transferring to freezer bags.',
    'Add frozen florets directly to boiling pasta water, stir-fries, or steaming baskets without thawing.'
  ];
  item.warnings = [
    'Freezing raw, unblanched broccoli causes florets to turn rubbery, develop a bitter taste, and discolor within 4 to 6 weeks.',
    'Thawed broccoli will not have the rigid crispness of raw broccoli; use it for cooking rather than raw veggie platters.'
  ];
  item.relatedItems = ['zucchini', 'green-beans', 'peas', 'carrot'];
});

updateFreezerItem('zucchini', item => {
  item.shortAnswer = 'Yes, zucchini is completely safe to freeze when sliced and blanched, or grated and drained for baking.';
  item.reason = 'Zucchini has a high moisture content (roughly 95%), so freezing it changes its cell structure. While thawed zucchini becomes too soft for raw salads, it freezes wonderfully for cooking. Sliced and blanched rounds are perfect for soups and casseroles, while shredded zucchini frozen in measured portions is ideal for zucchini bread, muffins, and fritters.';
  item.tips = [
    'Grate zucchini and squeeze out excess moisture with a clean kitchen towel before freezing in 1-cup portions for baking.',
    'Blanch zucchini slices in boiling water for 1 to 2 minutes, then chill in ice water to maintain color and firmness.',
    'Toss frozen zucchini slices directly into simmering sauces, stir-fries, or stews without thawing first.'
  ];
  item.warnings = [
    'Thawed zucchini releases significant water and loses firmness; never attempt to use thawed raw zucchini for fresh salads.',
    'Unblanched frozen zucchini slices can become watery and mushy much faster than properly blanched batches.'
  ];
  item.relatedItems = ['yellow-squash', 'eggplant', 'bell-pepper', 'tomato'];
});

updateFreezerItem('carrot', item => {
  item.relatedItems = ['celery', 'onion', 'peas', 'green-beans'];
});

updateFreezerItem('garlic', item => {
  item.relatedItems = ['onion', 'ginger', 'herbs-in-oil', 'bell-pepper'];
});

updateFreezerItem('ginger', item => {
  item.relatedItems = ['garlic', 'onion', 'lemon', 'smoothies'];
});

updateFreezerItem('green-beans', item => {
  item.relatedItems = ['asparagus', 'peas', 'corn', 'broccoli'];
});

updateFreezerItem('spinach', item => {
  item.relatedItems = ['kale', 'broccoli', 'smoothies', 'lettuce'];
});

updateFreezerItem('kale', item => {
  item.relatedItems = ['spinach', 'broccoli', 'brussels-sprouts', 'smoothies'];
});

updateFreezerItem('brussels-sprouts', item => {
  item.relatedItems = ['broccoli', 'cabbage', 'kale', 'baking-sheet'];
});

updateFreezerItem('corn', item => {
  item.relatedItems = ['peas', 'green-beans', 'bell-pepper', 'baking-sheet'];
});

updateFreezerItem('mushroom', item => {
  item.relatedItems = ['onion', 'garlic', 'zucchini', 'bell-pepper'];
});

updateFreezerItem('onion', item => {
  item.relatedItems = ['garlic', 'bell-pepper', 'celery', 'carrot'];
});

updateFreezerItem('peas', item => {
  item.relatedItems = ['corn', 'carrot', 'green-beans', 'broccoli'];
});

updateFreezerItem('yellow-squash', item => {
  item.relatedItems = ['zucchini', 'eggplant', 'bell-pepper', 'tomato'];
});

console.log('4 & 5. Related items and grammar updated.');

// Write back to files
fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2) + '\n', 'utf8');
fs.writeFileSync(redirectsPath, JSON.stringify(redirects, null, 2) + '\n', 'utf8');
fs.writeFileSync(publicRedirectsPath, publicRedirects, 'utf8');

console.log('All files written successfully.');
console.log('New items.json length:', items.length);
console.log('New freezer count:', items.filter(i => i.appliance === 'freezer').length);
