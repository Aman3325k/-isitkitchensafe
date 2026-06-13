const fs = require('fs');
const path = require('path');

// Helper to format string into title case
function titleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const dataDir = path.join(__dirname, '../src/data');

// ----------------------------------------------------
// Helper: Load Existing Data File
// ----------------------------------------------------
function loadDataFile(filename) {
  const filePath = path.join(dataDir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File does not exist: ${filePath}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// ----------------------------------------------------
// Helper: Save Data File
// ----------------------------------------------------
function saveDataFile(filename, data) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Saved ${filename} with ${data.length} total items.`);
}

// ----------------------------------------------------
// 1. EXPAND how-long.json
// ----------------------------------------------------
const howLongData = loadDataFile('how-long.json');
const newHowLongSpecs = [
  // Fridge (52 items)
  { slug: "cooked-pork-fridge", item: "cooked-pork", location: "fridge", duration: "3-4 Days", safe: "yes" },
  { slug: "cooked-lamb-fridge", item: "cooked-lamb", location: "fridge", duration: "3-4 Days", safe: "yes" },
  { slug: "cooked-fish-fridge", item: "cooked-fish", location: "fridge", duration: "3-4 Days", safe: "yes" },
  { slug: "cooked-quinoa-fridge", item: "cooked-quinoa", location: "fridge", duration: "3-5 Days", safe: "yes" },
  { slug: "cooked-lentils-fridge", item: "cooked-lentils", location: "fridge", duration: "3-5 Days", safe: "yes" },
  { slug: "cooked-oatmeal-fridge", item: "cooked-oatmeal", location: "fridge", duration: "3-5 Days", safe: "yes" },
  { slug: "smoothie-fridge", item: "smoothie", location: "fridge", duration: "1-2 Days", safe: "yes" },
  { slug: "fresh-juice-fridge", item: "fresh-juice", location: "fridge", duration: "2-3 Days", safe: "yes" },
  { slug: "bone-broth-fridge", item: "bone-broth", location: "fridge", duration: "3-4 Days", safe: "yes" },
  { slug: "gravy-fridge", item: "gravy", location: "fridge", duration: "1-2 Days", safe: "yes" },
  { slug: "hollandaise-fridge", item: "hollandaise-sauce", location: "fridge", duration: "1-2 Days", safe: "yes" },
  { slug: "caesar-dressing-fridge", item: "caesar-dressing", location: "fridge", duration: "1-2 Weeks", safe: "yes" },
  { slug: "ranch-dressing-fridge", item: "ranch-dressing", location: "fridge", duration: "1-2 Months", safe: "yes" },
  { slug: "tahini-fridge", item: "tahini", location: "fridge", duration: "3 Months", safe: "yes" },
  { slug: "baba-ganoush-fridge", item: "baba-ganoush", location: "fridge", duration: "3-4 Days", safe: "yes" },
  { slug: "tzatziki-fridge", item: "tzatziki", location: "fridge", duration: "3-4 Days", safe: "yes" },
  { slug: "pesto-fridge", item: "pesto", location: "fridge", duration: "1-2 Weeks", safe: "yes" },
  { slug: "marinara-sauce-fridge", item: "marinara-sauce", location: "fridge", duration: "5-7 Days", safe: "yes" },
  { slug: "alfredo-sauce-fridge", item: "alfredo-sauce", location: "fridge", duration: "3-4 Days", safe: "yes" },
  { slug: "bbq-sauce-fridge", item: "bbq-sauce", location: "fridge", duration: "4-6 Months", safe: "yes" },
  { slug: "teriyaki-sauce-fridge", item: "teriyaki-sauce", location: "fridge", duration: "4-6 Months", safe: "yes" },
  { slug: "fish-sauce-fridge", item: "fish-sauce", location: "fridge", duration: "1-2 Years", safe: "yes" },
  { slug: "oyster-sauce-fridge", item: "oyster-sauce", location: "fridge", duration: "3-6 Months", safe: "yes" },
  { slug: "hoisin-sauce-fridge", item: "hoisin-sauce", location: "fridge", duration: "3-6 Months", safe: "yes" },
  { slug: "hot-sauce-fridge", item: "hot-sauce", location: "fridge", duration: "1-2 Years", safe: "yes" },
  { slug: "sriracha-fridge", item: "sriracha", location: "fridge", duration: "1-2 Years", safe: "yes" },
  { slug: "maple-syrup-fridge", item: "maple-syrup", location: "fridge", duration: "1 Year", safe: "yes" },
  { slug: "jam-fridge", item: "jam", location: "fridge", duration: "6-12 Months", safe: "yes" },
  { slug: "jelly-fridge", item: "jelly", location: "fridge", duration: "6-12 Months", safe: "yes" },
  { slug: "almond-butter-fridge", item: "almond-butter", location: "fridge", duration: "3-6 Months", safe: "yes" },
  { slug: "nutella-fridge", item: "nutella", location: "fridge", duration: "1-2 Months", safe: "yes" },
  { slug: "ricotta-fridge", item: "ricotta-cheese", location: "fridge", duration: "1-2 Weeks", safe: "yes" },
  { slug: "brie-fridge", item: "brie-cheese", location: "fridge", duration: "1-2 Weeks", safe: "yes" },
  { slug: "blue-cheese-fridge", item: "blue-cheese", location: "fridge", duration: "3-4 Weeks", safe: "yes" },
  { slug: "feta-fridge", item: "feta-cheese", location: "fridge", duration: "1-2 Weeks", safe: "yes" },
  { slug: "goat-cheese-fridge", item: "goat-cheese", location: "fridge", duration: "1-2 Weeks", safe: "yes" },
  { slug: "provolone-fridge", item: "provolone-cheese", location: "fridge", duration: "3-4 Weeks", safe: "yes" },
  { slug: "swiss-cheese-fridge", item: "swiss-cheese", location: "fridge", duration: "3-4 Weeks", safe: "yes" },
  { slug: "tofu-fridge", item: "tofu", location: "fridge", duration: "1 Week", safe: "yes" },
  { slug: "tempeh-fridge", item: "tempeh", location: "fridge", duration: "1-2 Weeks", safe: "yes" },
  { slug: "deli-turkey-fridge", item: "deli-turkey", location: "fridge", duration: "3-5 Days", safe: "yes" },
  { slug: "smoked-salmon-fridge", item: "smoked-salmon", location: "fridge", duration: "1-2 Weeks", safe: "yes" },
  { slug: "canned-tuna-opened-fridge", item: "canned-tuna", location: "fridge", duration: "3-4 Days", safe: "yes" },
  { slug: "fresh-pasta-fridge", item: "fresh-pasta", location: "fridge", duration: "2-3 Days", safe: "yes" },
  { slug: "fresh-gnocchi-fridge", item: "fresh-gnocchi", location: "fridge", duration: "2-3 Days", safe: "yes" },
  { slug: "wonton-wrappers-fridge", item: "wonton-wrappers", location: "fridge", duration: "1-2 Weeks", safe: "yes" },
  { slug: "pie-crust-fridge", item: "pie-crust-dough", location: "fridge", duration: "3 Days", safe: "yes" },
  { slug: "pizza-dough-fridge", item: "pizza-dough", location: "fridge", duration: "3 Days", safe: "yes" },
  { slug: "tortillas-fridge", item: "tortillas", location: "fridge", duration: "1-2 Months", safe: "yes" },
  { slug: "pita-bread-fridge", item: "pita-bread", location: "fridge", duration: "1 Week", safe: "yes" },
  { slug: "naan-fridge", item: "naan-bread", location: "fridge", duration: "1 Week", safe: "yes" },
  { slug: "sourdough-fridge", item: "sourdough-bread", location: "fridge", duration: "3-5 Days", safe: "yes" },
  // Counter (13 items)
  { slug: "avocado-counter", item: "avocado", location: "counter", duration: "3-4 Days", safe: "yes" },
  { slug: "mango-counter", item: "mango", location: "counter", duration: "3-5 Days", safe: "yes" },
  { slug: "peaches-counter", item: "peaches", location: "counter", duration: "3-5 Days", safe: "yes" },
  { slug: "pears-counter", item: "pears", location: "counter", duration: "3-5 Days", safe: "yes" },
  { slug: "kiwi-counter", item: "kiwi", location: "counter", duration: "3-5 Days", safe: "yes" },
  { slug: "plums-counter", item: "plums", location: "counter", duration: "3-5 Days", safe: "yes" },
  { slug: "nectarines-counter", item: "nectarines", location: "counter", duration: "3-5 Days", safe: "yes" },
  { slug: "papaya-counter", item: "papaya", location: "counter", duration: "3-5 Days", safe: "yes" },
  { slug: "pineapple-counter", item: "pineapple", location: "counter", duration: "2-3 Days", safe: "yes" },
  { slug: "watermelon-counter", item: "watermelon", location: "counter", duration: "1-2 Weeks", safe: "yes" },
  { slug: "cantaloupe-counter", item: "cantaloupe", location: "counter", duration: "1 Week", safe: "yes" },
  { slug: "cherries-counter", item: "cherries", location: "counter", duration: "3-4 Days", safe: "yes" },
  { slug: "berries-counter", item: "berries", location: "counter", duration: "1-2 Days", safe: "yes" },
  // Freezer (35 items)
  { slug: "ground-pork-freezer", item: "ground-pork", location: "freezer", duration: "3-4 Months", safe: "yes" },
  { slug: "ground-lamb-freezer", item: "ground-lamb", location: "freezer", duration: "3-4 Months", safe: "yes" },
  { slug: "ground-turkey-freezer", item: "ground-turkey", location: "freezer", duration: "3-4 Months", safe: "yes" },
  { slug: "pork-chops-freezer", item: "pork-chops", location: "freezer", duration: "4-6 Months", safe: "yes" },
  { slug: "lamb-chops-freezer", item: "lamb-chops", location: "freezer", duration: "4-6 Months", safe: "yes" },
  { slug: "duck-freezer", item: "duck", location: "freezer", duration: "6 Months", safe: "yes" },
  { slug: "crab-freezer", item: "crab-meat", location: "freezer", duration: "9-12 Months", safe: "yes" },
  { slug: "lobster-freezer", item: "lobster-meat", location: "freezer", duration: "9-12 Months", safe: "yes" },
  { slug: "scallops-freezer", item: "scallops", location: "freezer", duration: "3-6 Months", safe: "yes" },
  { slug: "tilapia-freezer", item: "tilapia-fish", location: "freezer", duration: "6-8 Months", safe: "yes" },
  { slug: "cod-freezer", item: "cod-fish", location: "freezer", duration: "6-8 Months", safe: "yes" },
  { slug: "tuna-steak-freezer", item: "tuna-steak", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "cooked-quinoa-freezer", item: "cooked-quinoa", location: "freezer", duration: "1-2 Months", safe: "yes" },
  { slug: "cooked-lentils-freezer", item: "cooked-lentils", location: "freezer", duration: "1-2 Months", safe: "yes" },
  { slug: "cooked-oatmeal-freezer", item: "cooked-oatmeal", location: "freezer", duration: "1-2 Months", safe: "yes" },
  { slug: "soup-dumplings-freezer", item: "soup-dumplings", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "tamales-freezer", item: "tamales", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "empanadas-freezer", item: "empanadas", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "pot-pies-freezer", item: "pot-pies", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "quiche-freezer", item: "quiche", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "casserole-freezer", item: "casserole-meals", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "meatballs-freezer", item: "meatballs", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "meatloaf-freezer", item: "meatloaf", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "pulled-pork-freezer", item: "pulled-pork", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "mac-and-cheese-freezer", item: "mac-and-cheese", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "stuffed-peppers-freezer", item: "stuffed-peppers", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "enchiladas-freezer", item: "enchiladas", location: "freezer", duration: "2-3 Months", safe: "yes" },
  { slug: "burritos-freezer", item: "burritos", location: "freezer", duration: "2-3 Months", safe: "yes" }
];

let addedHowLongCount = 0;
newHowLongSpecs.forEach(spec => {
  const exists = howLongData.some(item => item.slug === spec.slug);
  if (!exists) {
    const itemTitle = titleCase(spec.item);
    const locTitle = spec.location === 'fridge' ? 'Refrigerator' : titleCase(spec.location);
    const shortAnswer = `In general, ${spec.item.replace(/-/g, ' ')} will last for ${spec.duration} in the ${spec.location}.`;
    const reason = `According to USDA and FDA safety guidelines, keeping ${spec.item.replace(/-/g, ' ')} stored correctly in the ${spec.location} preserves both its food safety profile and flavor quality. Cold temperatures below 40°F significantly inhibit the growth of pathogenic bacteria such as Salmonella and Listeria.\n\nHowever, storing it beyond the recommended timeframe can lead to mold development, texture degradation, and localized spoilage. Always ensure containers are sealed completely.`;
    const storageTips = [
      `Store in an airtight container or zip-top heavy-duty storage bag.`,
      `Place in the center or lower back shelf of the ${spec.location} where temperatures are most stable.`,
      `Label the packaging with the purchase or preparation date.`
    ];
    const spoilageSigns = [
      `A pungent, sour, or off odor indicating active bacterial breakdown.`,
      `Visible white, green, or grey mold growth on the item surface.`,
      `A sticky, slimy film or a mushy texture that differs from its fresh state.`
    ];
    const faqs = [
      { question: `Is it safe to consume past the ${spec.duration} window?`, answer: `No, it is not recommended. Pathogenic bacteria can multiply to dangerous levels without causing visible signs of spoilage or smell.` },
      { question: `What is the optimal container for storage?`, answer: `Glass food storage containers with locking, airtight lids are best as they prevent oxygen exposure and odors.` },
      { question: `Can I freeze this item to extend its lifespan?`, answer: `Yes, freezing stops bacterial activity completely. The item will remain safe indefinitely, though quality and texture may decline.` }
    ];

    howLongData.push({
      item: itemTitle,
      slug: spec.slug,
      location: spec.location,
      duration: spec.duration,
      safe: spec.safe,
      shortAnswer: shortAnswer,
      reason: reason,
      storageTips: storageTips,
      spoilageSigns: spoilageSigns,
      faqs: faqs,
      relatedItems: []
    });
    addedHowLongCount++;
  }
});
console.log(`Added ${addedHowLongCount} new items to how-long.json`);

// ----------------------------------------------------
// 2. EXPAND washing-machine.json
// ----------------------------------------------------
const washingMachineData = loadDataFile('washing-machine.json');
const newWashingSpecs = [
  { item: "ballet-flats", safe: "no" },
  { item: "loafers", safe: "no" },
  { item: "espadrilles", safe: "no" },
  { item: "moccasins", safe: "no" },
  { item: "water-shoes", safe: "yes" },
  { item: "hiking-boots", safe: "no" },
  { item: "work-boots", safe: "no" },
  { item: "chelsea-boots", safe: "no" },
  { item: "ankle-boots", safe: "no" },
  { item: "sandals", safe: "depends" },
  { item: "birkenstocks", safe: "no" },
  { item: "chacos", safe: "yes" },
  { item: "pajamas", safe: "yes" },
  { item: "robe", safe: "yes" },
  { item: "cardigan", safe: "depends" },
  { item: "polo-shirt", safe: "yes" },
  { item: "dress-shirt", safe: "yes" },
  { item: "blazer", safe: "no" },
  { item: "trench-coat", safe: "depends" },
  { item: "puffer-jacket", safe: "depends" },
  { item: "vest", safe: "yes" },
  { item: "cargo-pants", safe: "yes" },
  { item: "chinos", safe: "yes" },
  { item: "shorts", safe: "yes" },
  { item: "skirt", safe: "yes" },
  { item: "dress", safe: "depends" },
  { item: "jumpsuit", safe: "yes" },
  { item: "overalls", safe: "yes" },
  { item: "swimwear", safe: "no" }, // swimsuits are listed as no in design
  { item: "wetsuit", safe: "no" },
  { item: "cycling-shorts", safe: "depends" },
  { item: "knee-pads", safe: "depends" },
  { item: "shin-guards", safe: "depends" },
  { item: "boxing-gloves", safe: "no" },
  { item: "gardening-gloves", safe: "yes" },
  { item: "oven-mitts", safe: "yes" },
  { item: "pot-holders", safe: "yes" },
  { item: "apron", safe: "yes" },
  { item: "fabric-face-mask", safe: "yes" },
  { item: "neck-gaiter", safe: "yes" },
  { item: "cooling-towel", safe: "yes" },
  { item: "resistance-bands", safe: "no" },
  { item: "sleeping-bag", safe: "depends" },
  { item: "football-jersey", safe: "depends" },
  { item: "basketball-jersey", safe: "depends" },
  { item: "baseball-cap-new", safe: "no" },
  { item: "winter-gloves", safe: "depends" },
  { item: "scarf", safe: "depends" },
  { item: "beanie", safe: "yes" },
  { item: "leg-warmers", safe: "yes" },
  { item: "compression-sleeve", safe: "yes" }
];

let addedWashingCount = 0;
newWashingSpecs.forEach(spec => {
  const slug = spec.item;
  const exists = washingMachineData.some(item => item.slug === slug);
  if (!exists) {
    const itemTitle = titleCase(spec.item === 'baseball-cap-new' ? 'baseball-cap' : spec.item);
    let shortAnswer = "";
    let reason = "";
    let instructions = [];
    let warnings = [];
    let settings = { waterTemp: "Cold", cycleType: "Delicate", spinSpeed: "Low" };

    if (spec.safe === 'yes') {
      shortAnswer = `Yes, you can wash a ${itemTitle.replace(/-/g, ' ')} in the washing machine.`;
      reason = `Washing a ${itemTitle.replace(/-/g, ' ')} in the machine is perfectly safe as the fibers can easily withstand moisture, tumbling action, and detergents without falling apart or shrinking.\n\nJust ensure you use a mesh bag for smaller accessories and clean any lint traps.`;
      instructions = [
        `Place the item inside a mesh laundry bag to prevent tangling.`,
        `Use a mild, liquid detergent.`,
        `Select a standard or delicate cycle configuration.`
      ];
      warnings = [
        `Avoid using fabric softeners which can leave residue.`,
        `Do not overload the machine drum.`
      ];
      settings = { waterTemp: "Warm", cycleType: "Regular", spinSpeed: "Medium" };
    } else if (spec.safe === 'no') {
      shortAnswer = `No, do not wash a ${itemTitle.replace(/-/g, ' ')} in the washing machine.`;
      reason = `The mechanical agitation and hot water of a washing machine will ruin the structural properties of a ${itemTitle.replace(/-/g, ' ')}.\n\nFor example, heat and water break down adhesives in shoes, warp wool structures permanently, and can ruin electronics or leather materials.`;
      instructions = [
        `Hand clean the exterior using a damp microfiber cloth.`,
        `Use specialized foam cleansers for leather or suede.`,
        `Spot clean stains immediately with mild soap.`
      ];
      warnings = [
        `Machine washing will cause permanent shrinkage, fiber matting, or glue failure.`,
        `Mechanical spin cycles can stretch or distort the item beyond repair.`
      ];
    } else {
      shortAnswer = `Yes, but you can only wash a ${itemTitle.replace(/-/g, ' ')} under specific settings.`;
      reason = `Washing this item in the machine depends on the fabric and details. Lightweight items are safe on gentle cycles, but heavy agitation or high temperatures will melt glues or shrink fibers.\n\nAlways use cold water and a protective laundry bag to cushion the mechanical impact.`;
      instructions = [
        `Place inside a zippered mesh wash bag.`,
        `Use cold water and a gentle liquid laundry soap.`,
        `Always air dry or tumble dry on a no-heat setting.`
      ];
      warnings = [
        `Never use hot water, which dissolves protective structural adhesives.`,
        `Avoid high spin speeds which twist and stretch the fabric.`
      ];
    }

    const faqs = [
      { question: `Will machine washing void the warranty?`, answer: `Yes, most premium shoe and specialty clothing manufacturers void warranties if machine washed.` },
      { question: `Can I use bleach?`, answer: `No, bleach is too harsh and can dissolve fibers or yellow synthetic glues.` },
      { question: `How should I dry this item?`, answer: `Air drying in a cool, ventilated area away from direct heat is always safest.` }
    ];

    washingMachineData.push({
      item: itemTitle,
      slug: slug,
      safe: spec.safe,
      shortAnswer: shortAnswer,
      reason: reason,
      instructions: instructions,
      warnings: warnings,
      settings: settings,
      faqs: faqs,
      relatedItems: []
    });
    addedWashingCount++;
  }
});
console.log(`Added ${addedWashingCount} new items to washing-machine.json`);

// ----------------------------------------------------
// 3. EXPAND refreeze.json
// ----------------------------------------------------
const refreezeData = loadDataFile('refreeze.json');
const newRefreezeSpecs = [
  { item: "cooked-pork", safe: "yes" },
  { item: "cooked-lamb", safe: "yes" },
  { item: "cooked-duck", safe: "yes" },
  { item: "cooked-crab", safe: "yes" },
  { item: "cooked-lobster", safe: "yes" },
  { item: "cooked-scallops", safe: "yes" },
  { item: "cooked-tilapia", safe: "yes" },
  { item: "cooked-cod", safe: "yes" },
  { item: "dumplings", safe: "yes" },
  { item: "tamales", safe: "yes" },
  { item: "empanadas", safe: "yes" },
  { item: "pot-pie", safe: "yes" },
  { item: "quiche", safe: "yes" },
  { item: "casserole", safe: "yes" },
  { item: "meatballs", safe: "yes" },
  { item: "meatloaf", safe: "yes" },
  { item: "pulled-pork", safe: "yes" },
  { item: "mac-and-cheese", safe: "yes" },
  { item: "stuffed-peppers", safe: "yes" },
  { item: "enchiladas", safe: "yes" },
  { item: "raw-pork", safe: "depends" },
  { item: "raw-lamb", safe: "depends" },
  { item: "raw-duck", safe: "depends" },
  { item: "cream-cheese-refreeze", safe: "no" },
  { item: "ricotta-refreeze", safe: "no" },
  { item: "brie-refreeze", safe: "no" },
  { item: "feta-refreeze", safe: "no" },
  { item: "mixed-vegetables", safe: "yes" },
  { item: "edamame", safe: "yes" },
  { item: "tofu-frozen", safe: "yes" },
  { item: "tempeh-frozen", safe: "yes" },
  { item: "smoothie-packs", safe: "yes" },
  { item: "juice-concentrate", safe: "yes" },
  { item: "bone-broth-frozen", safe: "yes" },
  { item: "stock-frozen", safe: "yes" },
  { item: "cooked-quinoa-refreeze", safe: "yes" },
  { item: "cooked-lentils-refreeze", safe: "yes" },
  { item: "cookie-dough-refreeze", safe: "yes" },
  { item: "bread-dough-refreeze", safe: "yes" },
  { item: "pie-crust-refreeze", safe: "yes" }
];

let addedRefreezeCount = 0;
newRefreezeSpecs.forEach(spec => {
  const slug = spec.item;
  const exists = refreezeData.some(item => item.slug === slug);
  if (!exists) {
    const itemTitle = titleCase(spec.item.replace(/-refreeze|-frozen/g, ''));
    let shortAnswer = "";
    let reason = "";
    let instructions = [];
    let warnings = [];

    if (spec.safe === 'yes') {
      shortAnswer = `Yes, you can safely refreeze ${itemTitle.replace(/-/g, ' ')}.`;
      reason = `According to USDA food safety guidelines, food stored constantly below 0°F remains safe indefinitely. You can refreeze ${itemTitle.replace(/-/g, ' ')} without cooking it first, provided it was thawed inside the refrigerator.\n\nBe aware that freezing causes minor structural changes and water separation, which might slightly degrade the texture.`;
      instructions = [
        `Wrap the item tightly in plastic wrap to minimize air contact.`,
        `Place in a heavy-duty freezer bag and squeeze out excess air.`,
        `Refreeze as quickly as possible to prevent large ice crystal growth.`
      ];
      warnings = [
        `Avoid refreezing if it was left at room temperature for over 2 hours.`,
        `Refreezing dairy-heavy items may cause significant fat separation.`
      ];
    } else if (spec.safe === 'no') {
      shortAnswer = `No, you should never refreeze ${itemTitle.replace(/-/g, ' ')}.`;
      reason = `Refreezing ${itemTitle.replace(/-/g, ' ')} is highly unsafe due to rapid bacterial multiplication during the thawing phase. Once thawed, the food holds enough moisture for microbes to flourish.\n\nRefreezing doesn't kill existing bacteria, it only pauses them. Additionally, the cell structure of dairy products like cream or yogurt completely collapses, separating it into watery and solid parts.`;
      instructions = [
        `Consume the item immediately after thawing.`,
        `Cook the item thoroughly if it is meat, then freeze the cooked dish.`,
        `Discard if it has been kept in the danger zone (above 40°F) for too long.`
      ];
      warnings = [
        `Refreezing raw items thawed at room temperature can cause severe food poisoning.`,
        `Separated dairy products will have an unpalatable, gritty texture.`
      ];
    } else {
      shortAnswer = `Yes, but only if it was thawed safely in the refrigerator.`;
      reason = `Refreezing raw meats like ${itemTitle.replace(/-/g, ' ')} is safe only if the meat was thawed at refrigerator temperatures (below 40°F).\n\nIf it was thawed on the counter or in warm water, bacteria will have multiplied on the surface, making refreezing extremely dangerous. Note that refreezing raw meat causes moisture loss, making it dry when eventually cooked.`;
      instructions = [
        `Confirm the meat was thawed exclusively in the refrigerator.`,
        `Wrap tightly in multiple layers of freezer wrap or foil.`,
        `Write the date on the bag and freeze at 0°F.`
      ];
      warnings = [
        `Never refreeze raw meat that has turned grey, smells off, or feels slimy.`,
        `Do not refreeze if the meat was kept out of the cold for more than 2 hours.`
      ];
    }

    const faqs = [
      { question: `Does refreezing kill bacteria?`, answer: `No, freezing does not kill bacteria; it only puts them in a dormant state. Only cooking to safe temperatures kills them.` },
      { question: `How many times can you refreeze food?`, answer: `Technically, you can refreeze multiple times if kept cold, but quality degrades significantly with each cycle.` },
      { question: `Is it safe to refreeze cooked food?`, answer: `Yes, you can refreeze cooked leftovers within 3 to 4 days, provided they were stored correctly.` }
    ];

    refreezeData.push({
      item: itemTitle,
      slug: slug,
      safe: spec.safe,
      shortAnswer: shortAnswer,
      reason: reason,
      instructions: instructions,
      warnings: warnings,
      faqs: faqs,
      relatedItems: []
    });
    addedRefreezeCount++;
  }
});
console.log(`Added ${addedRefreezeCount} new items to refreeze.json`);

// ----------------------------------------------------
// 4. EXPAND what-happens.json
// ----------------------------------------------------
const whatHappensData = loadDataFile('what-happens.json');
const newWhatHappensSpecs = [
  { scenario: "microwave-styrofoam-cup", dangerLevel: "dangerous" },
  { scenario: "microwave-paper-bag", dangerLevel: "dangerous" },
  { scenario: "microwave-sealed-container", dangerLevel: "dangerous" },
  { scenario: "microwave-hot-peppers", dangerLevel: "dangerous" },
  { scenario: "microwave-breast-milk", dangerLevel: "caution" },
  { scenario: "microwave-frozen-meat-wrong", dangerLevel: "caution" },
  { scenario: "run-dishwasher-empty", dangerLevel: "safe" },
  { scenario: "put-copper-in-dishwasher", dangerLevel: "caution" },
  { scenario: "put-gold-utensils-in-dishwasher", dangerLevel: "caution" },
  { scenario: "use-dish-soap-in-dishwasher", dangerLevel: "dangerous" },
  { scenario: "put-non-stick-in-dishwasher", dangerLevel: "caution" },
  { scenario: "preheat-oven-too-long", dangerLevel: "caution" },
  { scenario: "leave-food-in-oven-overnight", dangerLevel: "dangerous" },
  { scenario: "put-cold-dish-in-hot-oven", dangerLevel: "caution" },
  { scenario: "open-oven-too-often", dangerLevel: "safe" },
  { scenario: "freeze-food-in-original-packaging", dangerLevel: "safe" },
  { scenario: "freeze-wet-food", dangerLevel: "safe" },
  { scenario: "keep-freezer-too-full", dangerLevel: "safe" },
  { scenario: "keep-freezer-too-empty", dangerLevel: "safe" },
  { scenario: "freeze-cooked-rice-wrong", dangerLevel: "dangerous" },
  { scenario: "freeze-bread-wrong", dangerLevel: "safe" },
  { scenario: "eat-pink-chicken", dangerLevel: "dangerous" },
  { scenario: "eat-raw-cookie-dough", dangerLevel: "dangerous" },
  { scenario: "eat-food-after-power-outage", dangerLevel: "dangerous" },
  { scenario: "drink-from-damaged-can", dangerLevel: "dangerous" },
  { scenario: "eat-moldy-bread", dangerLevel: "dangerous" },
  { scenario: "cross-contaminate-raw-meat", dangerLevel: "dangerous" },
  { scenario: "leave-rice-out-overnight", dangerLevel: "dangerous" },
  { scenario: "eat-undercooked-pork", dangerLevel: "dangerous" },
  { scenario: "mix-bleach-and-vinegar", dangerLevel: "dangerous" },
  { scenario: "mix-bleach-and-ammonia", dangerLevel: "dangerous" },
  { scenario: "put-hot-pan-in-cold-water", dangerLevel: "caution" },
  { scenario: "eat-freezer-burned-meat", dangerLevel: "safe" },
  { scenario: "eat-food-left-out-overnight", dangerLevel: "dangerous" },
  { scenario: "eat-expired-eggs", dangerLevel: "caution" },
  { scenario: "drink-expired-milk", dangerLevel: "caution" },
  { scenario: "boil-dry-pot", dangerLevel: "dangerous" },
  { scenario: "put-cold-glass-on-hot-stove", dangerLevel: "dangerous" },
  { scenario: "leave-gas-stove-on", dangerLevel: "dangerous" },
  { scenario: "use-aluminum-foil-on-oven-bottom", dangerLevel: "dangerous" }
];

let addedWhatHappensCount = 0;
newWhatHappensSpecs.forEach(entry => {
  const slug = entry.scenario;
  const exists = whatHappensData.some(item => item.slug === slug);
  if (!exists) {
    const scenarioTitle = titleCase(entry.scenario);
    let shortAnswer = "";
    let reason = "";
    let healthImpact = "";
    let actions = [];
    let prevention = [];

    if (entry.dangerLevel === 'dangerous') {
      shortAnswer = `It is extremely dangerous to ${entry.scenario.replace(/-/g, ' ')}.`;
      reason = `Doing this poses an immediate safety hazard, fire risk, or chemical threat.\n\nFor example, heating foil or closed containers in a microwave builds massive electrical arcs or pressure that ignite fires and explode. Similarly, eating contaminated raw food or green-sprouting potatoes introduces dangerous toxins, and mixing cleaning chemicals releases lethal gases that cause irreversible lung damage instantly.`;
      healthImpact = `Exposure can lead to severe inhalation burns, chemical poisoning, structure fires, or explosion injuries.`;
      actions = [
        `Turn off the appliance power immediately if safe to do so.`,
        `Evacuate the area if smoke or heavy gas forms.`,
        `Seek emergency medical attention if fumes are inhaled.`
      ];
      prevention = [
        `Double-check container labels before microwaving or baking.`,
        `Never mix cleaning chemicals together under any circumstance.`
      ];
    } else if (entry.dangerLevel === 'caution') {
      shortAnswer = `Be cautious, as doing this can cause damage or minor safety issues.`;
      reason = `While not immediately life-threatening, doing this will likely ruin your appliance, cookware, or food.\n\nFor example, washing cast iron or chef's knives in the dishwasher ruins their seasoning and edges, while freezing soda cans or eggs in shell leads to messy, pressurized explosions that are difficult to clean.`;
      healthImpact = `Minimal health risks unless contaminated food is consumed, but high likelihood of property damage.`;
      actions = [
        `Allow hot cookware or surfaces to cool naturally.`,
        `Slowly clean up any spills or mess inside the appliance.`,
        `Inspect the appliance surfaces for cracks or mechanical damage.`
      ];
      prevention = [
        `Hand wash kitchen knives, wood cutting boards, and cast iron.`,
        `Leave adequate headspace or avoid freezing tightly sealed containers.`
      ];
    } else {
      shortAnswer = `It is safe, though it may result in a loss of food quality.`;
      reason = `Doing this is safe to do, and won't cause fires or release chemical toxins.\n\nFor example, freezer burn on ice cream or meat dry-crystallizes the food, affecting taste and mouthfeel, but it remains fully pathogen-safe to eat. Running a dishwasher without soap will simply rinse dishes without sanitizing them.`;
      healthImpact = `None, the food or action remains completely non-toxic and pathogen-safe.`;
      actions = [
        `Cut off freezer-burned spots before cooking meat.`,
        `Re-run dishes with proper detergent if they did not get fully clean.`
      ];
      prevention = [
        `Wrap frozen food in airtight heavy-duty packaging.`,
        `Routinely monitor detergent levels before starting cycles.`
      ];
    }

    const faqs = [
      { question: `Can this cause a household fire?`, answer: `Yes, if the action involves dry paper in the oven, or arcing metals in the microwave, it can ignite a fire within seconds.` },
      { question: `Is the damage covered by appliance warranties?`, answer: `Generally, no. Damage caused by user misuse (like putting non-safe materials inside) is excluded.` },
      { question: `What should I do first if an appliance starts sparking?`, answer: `Unplug the appliance from the wall socket or flip the kitchen circuit breaker before touching the machine.` }
    ];

    whatHappensData.push({
      item: scenarioTitle,
      slug: slug,
      dangerLevel: entry.dangerLevel,
      shortAnswer: shortAnswer,
      reason: reason,
      healthImpact: healthImpact,
      actions: actions,
      prevention: prevention,
      faqs: faqs,
      relatedItems: []
    });
    addedWhatHappensCount++;
  }
});
console.log(`Added ${addedWhatHappensCount} new items to what-happens.json`);

// ----------------------------------------------------
// 5. RESOLVE RELATED ITEMS SLUGS FOR ALL CATEGORIES
// ----------------------------------------------------
howLongData.forEach(item => {
  const siblings = howLongData.filter(i => i.slug !== item.slug);
  const shuffled = siblings.sort(() => 0.5 - Math.random()).slice(0, 5);
  item.relatedItems = shuffled.map(i => i.slug);
});

washingMachineData.forEach(item => {
  const siblings = washingMachineData.filter(i => i.slug !== item.slug);
  const shuffled = siblings.sort(() => 0.5 - Math.random()).slice(0, 5);
  item.relatedItems = shuffled.map(i => i.slug);
});

refreezeData.forEach(item => {
  const siblings = refreezeData.filter(i => i.slug !== item.slug);
  const shuffled = siblings.sort(() => 0.5 - Math.random()).slice(0, 5);
  item.relatedItems = shuffled.map(i => i.slug);
});

whatHappensData.forEach(item => {
  const siblings = whatHappensData.filter(i => i.slug !== item.slug);
  const shuffled = siblings.sort(() => 0.5 - Math.random()).slice(0, 5);
  item.relatedItems = shuffled.map(i => i.slug);
});

// ----------------------------------------------------
// 6. SAVE TO DATA DIRECTORY
// ----------------------------------------------------
saveDataFile('how-long.json', howLongData);
saveDataFile('washing-machine.json', washingMachineData);
saveDataFile('refreeze.json', refreezeData);
saveDataFile('what-happens.json', whatHappensData);

console.log('Database Phase 3 expansion complete!');
