const fs = require('fs');
const path = require('path');

const TARGET_PATH = path.join(__dirname, '../src/data/items.json');

// Helper to format string into title case
function titleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Load existing items
let itemsList = [];
if (fs.existsSync(TARGET_PATH)) {
  itemsList = JSON.parse(fs.readFileSync(TARGET_PATH, 'utf-8'));
  console.log(`Loaded existing items.json with ${itemsList.length} items.`);
} else {
  console.error(`Error: items.json not found!`);
  process.exit(1);
}

// Appliances list
const appliances = ['dishwasher', 'microwave', 'freezer', 'oven', 'dryer', 'airfryer', 'refrigerator'];

// Master item types and specs
const newItemsSpecs = [
  // Foods
  { name: "Bacon", slug: "bacon", type: "food-meat" },
  { name: "Sausage", slug: "sausage", type: "food-meat" },
  { name: "Pork Chop", slug: "pork-chop", type: "food-meat" },
  { name: "Beef Steak", slug: "beef-steak", type: "food-meat" },
  { name: "Ground Beef", slug: "ground-beef", type: "food-meat" },
  { name: "Salmon Fillet", slug: "salmon-fillet", type: "food-meat" },
  { name: "Tuna Steak", slug: "tuna-steak", type: "food-meat" },
  { name: "Shrimp", slug: "shrimp", type: "food-meat" },
  { name: "Lobster Tail", slug: "lobster-tail", type: "food-meat" },
  { name: "Crab Legs", slug: "crab-legs", type: "food-meat" },
  { name: "Chicken Breast", slug: "chicken-breast", type: "food-meat" },
  { name: "Chicken Wings", slug: "chicken-wings", type: "food-meat" },
  { name: "Turkey Breast", slug: "turkey-breast", type: "food-meat" },
  { name: "Duck Breast", slug: "duck-breast", type: "food-meat" },
  { name: "Egg", slug: "egg", type: "food-egg" },
  { name: "Milk", slug: "milk", type: "food-dairy" },
  { name: "Butter", slug: "butter", type: "food-dairy" },
  { name: "Cheddar Cheese", slug: "cheddar-cheese", type: "food-dairy" },
  { name: "Mozzarella Cheese", slug: "mozzarella-cheese", type: "food-dairy" },
  { name: "Cream Cheese", slug: "cream-cheese", type: "food-dairy" },
  { name: "Yogurt", slug: "yogurt", type: "food-dairy" },
  { name: "Heavy Cream", slug: "heavy-cream", type: "food-dairy" },
  { name: "Sour Cream", slug: "sour-cream", type: "food-dairy" },
  { name: "Tofu", slug: "tofu", type: "food-tofu" },
  { name: "Tempeh", slug: "tempeh", type: "food-tofu" },
  { name: "Apple", slug: "apple", type: "food-fruit" },
  { name: "Banana", slug: "banana", type: "food-fruit" },
  { name: "Orange", slug: "orange", type: "food-fruit" },
  { name: "Strawberry", slug: "strawberry", type: "food-fruit" },
  { name: "Blueberry", slug: "blueberry", type: "food-fruit" },
  { name: "Raspberry", slug: "raspberry", type: "food-fruit" },
  { name: "Blackberry", slug: "blackberry", type: "food-fruit" },
  { name: "Grape", slug: "grape", type: "food-fruit" },
  { name: "Watermelon", slug: "watermelon", type: "food-fruit" },
  { name: "Cantaloupe", slug: "cantaloupe", type: "food-fruit" },
  { name: "Honeydew", slug: "honeydew", type: "food-fruit" },
  { name: "Peach", slug: "peach", type: "food-fruit" },
  { name: "Plum", slug: "plum", type: "food-fruit" },
  { name: "Nectarine", slug: "nectarine", type: "food-fruit" },
  { name: "Cherry", slug: "cherry", type: "food-fruit" },
  { name: "Mango", slug: "mango", type: "food-fruit" },
  { name: "Pineapple", slug: "pineapple", type: "food-fruit" },
  { name: "Avocado", slug: "avocado", type: "food-fruit" },
  { name: "Tomato", slug: "tomato", type: "food-fruit" },
  { name: "Cucumber", slug: "cucumber", type: "food-vegetable" },
  { name: "Bell Pepper", slug: "bell-pepper", type: "food-vegetable" },
  { name: "Spinach", slug: "spinach", type: "food-vegetable" },
  { name: "Lettuce", slug: "lettuce", type: "food-vegetable" },
  { name: "Broccoli", slug: "broccoli", type: "food-vegetable" },
  { name: "Cauliflower", slug: "cauliflower", type: "food-vegetable" },
  { name: "Brussels Sprouts", slug: "brussels-sprouts", type: "food-vegetable" },
  { name: "Cabbage", slug: "cabbage", type: "food-vegetable" },
  { name: "Kale", slug: "kale", type: "food-vegetable" },
  { name: "Carrot", slug: "carrot", type: "food-vegetable" },
  { name: "Celery", slug: "celery", type: "food-vegetable" },
  { name: "Onion", slug: "onion", type: "food-vegetable" },
  { name: "Garlic", slug: "garlic", type: "food-vegetable" },
  { name: "Potato", slug: "potato", type: "food-vegetable" },
  { name: "Sweet Potato", slug: "sweet-potato", type: "food-vegetable" },
  { name: "Zucchini", slug: "zucchini", type: "food-vegetable" },
  { name: "Yellow Squash", slug: "yellow-squash", type: "food-vegetable" },
  { name: "Eggplant", slug: "eggplant", type: "food-vegetable" },
  { name: "Asparagus", slug: "asparagus", type: "food-vegetable" },
  { name: "Green Beans", slug: "green-beans", type: "food-vegetable" },
  { name: "Peas", slug: "peas", type: "food-vegetable" },
  { name: "Corn", slug: "corn", type: "food-vegetable" },
  { name: "Mushroom", slug: "mushroom", type: "food-vegetable" },
  { name: "Ginger", slug: "ginger", type: "food-vegetable" },
  { name: "Lemon", slug: "lemon", type: "food-fruit" },
  { name: "Lime", slug: "lime", type: "food-fruit" },
  { name: "White Rice", slug: "white-rice", type: "food-leftover" },
  { name: "Brown Rice", slug: "brown-rice", type: "food-leftover" },
  { name: "Quinoa", slug: "quinoa", type: "food-leftover" },
  { name: "Lentils", slug: "lentils", type: "food-leftover" },
  { name: "Oatmeal", slug: "oatmeal", type: "food-leftover" },
  { name: "Spaghetti", slug: "spaghetti", type: "food-leftover" },
  { name: "Macaroni", slug: "macaroni", type: "food-leftover" },
  { name: "White Bread", slug: "white-bread", type: "food-leftover" },
  { name: "Whole Wheat Bread", slug: "whole-wheat-bread", type: "food-leftover" },
  { name: "Sourdough Bread", slug: "sourdough-bread", type: "food-leftover" },
  { name: "Croissant", slug: "croissant", type: "food-leftover" },
  { name: "Bagel", slug: "bagel", type: "food-leftover" },
  { name: "Pita Bread", slug: "pita-bread", type: "food-leftover" },
  { name: "Tortilla", slug: "tortilla", type: "food-leftover" },
  { name: "Pizza Dough", slug: "pizza-dough", type: "food-leftover" },
  { name: "Cookie Dough", slug: "cookie-dough", type: "food-leftover" },
  { name: "Chocolate Chip Cookies", slug: "chocolate-chip-cookies", type: "food-leftover" },
  { name: "Cake", slug: "cake", type: "food-leftover" },
  { name: "Muffin", slug: "muffin", type: "food-leftover" },
  { name: "Pie", slug: "pie", type: "food-leftover" },
  { name: "Brownie", slug: "brownie", type: "food-leftover" },
  { name: "Honey", slug: "honey", type: "food-sauce" },
  { name: "Maple Syrup", slug: "maple-syrup", type: "food-sauce" },
  { name: "Olive Oil", slug: "olive-oil", type: "food-sauce" },
  { name: "Vegetable Oil", slug: "vegetable-oil", type: "food-sauce" },
  { name: "Coconut Oil", slug: "coconut-oil", type: "food-sauce" },
  { name: "Peanut Butter", slug: "peanut-butter", type: "food-sauce" },
  { name: "Almond Butter", slug: "almond-butter", type: "food-sauce" },
  { name: "Nutella", slug: "nutella", type: "food-sauce" },
  { name: "Jam", slug: "jam", type: "food-sauce" },
  { name: "Jelly", slug: "jelly", type: "food-sauce" },
  { name: "Mayonnaise", slug: "mayonnaise", type: "food-sauce" },
  { name: "Ketchup", slug: "ketchup", type: "food-sauce" },
  { name: "Mustard", slug: "mustard", type: "food-sauce" },
  { name: "Soy Sauce", slug: "soy-sauce", type: "food-sauce" },
  { name: "Hot Sauce", slug: "hot-sauce", type: "food-sauce" },
  { name: "Salad Dressing", slug: "salad-dressing", type: "food-sauce" },
  { name: "Hummus", slug: "hummus", type: "food-sauce" },
  { name: "Guacamole", slug: "guacamole", type: "food-sauce" },
  { name: "Salsa", slug: "salsa", type: "food-sauce" },
  { name: "Coffee", slug: "coffee", type: "food-drink" },
  { name: "Tea", slug: "tea", type: "food-drink" },
  { name: "Soda", slug: "soda", type: "food-drink" },
  { name: "Orange Juice", slug: "orange-juice", type: "food-drink" },
  { name: "Apple Juice", slug: "apple-juice", type: "food-drink" },
  { name: "Wine", slug: "wine", type: "food-drink" },
  { name: "Beer", slug: "beer", type: "food-drink" },

  // Kitchenware & Objects
  { name: "Glass Bowl", slug: "glass-bowl", type: "cookware-glass" },
  { name: "Ceramic Plate", slug: "ceramic-plate", type: "cookware-glass" },
  { name: "Paper Plate", slug: "paper-plate", type: "cookware-paper" },
  { name: "Plastic Container", slug: "plastic-container", type: "cookware-plastic" },
  { name: "Styrofoam Cup", slug: "styrofoam-cup", type: "cookware-styrofoam" },
  { name: "Aluminum Foil", slug: "aluminum-foil", type: "cookware-metal" },
  { name: "Stainless Steel Pan", slug: "stainless-steel-pan", type: "cookware-metal" },
  { name: "Cast Iron Skillet", slug: "cast-iron-skillet", type: "cookware-cast-iron" },
  { name: "Copper Mug", slug: "copper-mug", type: "cookware-metal" },
  { name: "Wooden Spoon", slug: "wooden-spoon", type: "cookware-wood" },
  { name: "Wooden Cutting Board", slug: "wooden-cutting-board", type: "cookware-wood" },
  { name: "Silicone Spatula", slug: "silicone-spatula", type: "cookware-silicone" },
  { name: "Mason Jar", slug: "mason-jar", type: "cookware-glass" },
  { name: "Ziploc Bag", slug: "ziploc-bag", type: "cookware-plastic" },
  { name: "Tupperware", slug: "tupperware", type: "cookware-plastic" },
  { name: "Bento Box", slug: "bento-box", type: "cookware-plastic" },
  { name: "Wine Glass", slug: "wine-glass", type: "cookware-glass" },
  { name: "Travel Mug", slug: "travel-mug", type: "cookware-metal" },
  { name: "Yeti Tumbler", slug: "yeti-tumbler", type: "cookware-metal" },
  { name: "Hydro Flask", slug: "hydro-flask-bottle", type: "cookware-metal" },
  { name: "Stanley Cup", slug: "stanley-cup-tumbler", type: "cookware-metal" },
  { name: "Muffin Tin", slug: "muffin-tin", type: "cookware-metal" },
  { name: "Baking Sheet", slug: "baking-sheet", type: "cookware-metal" },
  { name: "Bundt Pan", slug: "bundt-pan", type: "cookware-metal" },
  { name: "Gold Silverware", slug: "gold-silverware", type: "cookware-gold" },
  { name: "Silver Silverware", slug: "silver-silverware", type: "cookware-metal" },
  { name: "Baby Bottles", slug: "baby-bottles-pack", type: "cookware-plastic" },
  { name: "Pacifiers", slug: "pacifiers-silicone", type: "cookware-silicone" },
  { name: "Sponges", slug: "cleaning-sponges", type: "cleaning-sponge" },
  { name: "Steel Wool", slug: "steel-wool-scour", type: "cookware-metal" },
  
  // Clothes / Fabrics / Shoes
  { name: "Memory Foam", slug: "memory-foam", type: "item-fabric" },
  { name: "Crocs", slug: "crocs-shoes", type: "item-shoe" },
  { name: "Running Shoes", slug: "running-shoes", type: "item-shoe" },
  { name: "Wool Sweater", slug: "wool-sweater", type: "item-fabric" }
];

// Helper to determine safety and write realistic contents
function determineSafetyAndContent(appliance, spec) {
  const { name, type } = spec;
  let safe = "no";
  let shortAnswer = "";
  let reason = "";
  let tips = [];
  let warnings = [];
  let faqs = [];

  // Classification rules across appliances
  if (appliance === 'dishwasher') {
    if (type.startsWith('food-')) {
      safe = "no";
      shortAnswer = `No, you should never put ${name} in the dishwasher.`;
      reason = `You should never put food items like ${name} in the dishwasher. Dishwashers are designed for cleaning cookware and tableware, not for food preparation or washing food ingredients.\n\nThe high heat, strong alkaline detergents, and dirty recirculated water will ruin the food, leave toxic chemical residues, and potentially clog the appliance's filtration and drain systems.`;
      tips = [
        `Wash fresh produce by hand under cold running tap water instead.`,
        `Keep food scraps out of the dishwasher to prevent drain clogging.`,
        `Scrape dishes clean before loading them into the dishwasher racks.`
      ];
      warnings = [
        `Chemical dishwasher detergents leave highly toxic residues on edible food.`,
        `Food particles can easily bypass filters and ruin the dishwasher's drain pump.`
      ];
      faqs = [
        { question: `Can you wash vegetables in a dishwasher?`, answer: `No, this is highly discouraged. The heat and water pressure will turn them mushy, and detergent residues make them unsafe to eat.` },
        { question: `Does the dishwasher sterilize food?`, answer: `No, the dishwasher uses recirculated dirty water which will contaminate foods with bacteria and soap.` },
        { question: `What if I run the dishwasher without soap?`, answer: `Even without soap, food particles will clog the pump, and the heat will cook or ruin the items.` }
      ];
    } else {
      // Non-food items
      if (type === 'cookware-glass' || type === 'cookware-silicone') {
        safe = "yes";
        shortAnswer = `Yes, you can safely wash a ${name} in the dishwasher.`;
        reason = `This item is manufactured from highly durable, heat-resistant materials designed to withstand dishwasher environments.\n\nWhether composed of tempered borosilicate glass, food-grade silicone, or sturdy glazed ceramic, the ${name} will not warp, rust, or release toxic chemicals when exposed to hot water and dishwasher cleaning agents.`;
        tips = [
          `Place lighter silicone items on the top rack so they don't get tossed by water jets.`,
          `Avoid overcrowding the dishwasher so water can circulate around the item.`,
          `Ensure glass dishes do not knock against each other during the cycle to prevent chipping.`
        ];
        warnings = [
          `Thin non-tempered glass can shatter due to sudden temperature changes.`,
          `Avoid using highly abrasive powders that can scratch glass surfaces.`
        ];
        faqs = [
          { question: `Is silicone dishwasher safe?`, answer: `Yes, high-quality food-grade silicone spatulas and molds can easily withstand dishwasher heat.` },
          { question: `Can glass turn cloudy in the dishwasher?`, answer: `Yes, hard water or etching from harsh detergents can leave glass cloudy over time.` },
          { question: `Is it better to hand wash glassware?`, answer: `Standard glassware is fine in the machine, but delicate crystal stems should be washed by hand.` }
        ];
      } else if (type === 'cookware-plastic') {
        safe = "depends";
        shortAnswer = `Yes, but only if the ${name} is explicitly labeled as dishwasher safe.`;
        reason = `Many plastic materials have a low melting point and can warp or release harmful microplastics when exposed to the high heat of a dishwasher's drying cycle.\n\nAlways check the bottom of the item for the dishwasher-safe symbol. If safe, place it exclusively on the top rack, away from the bottom heating element.`;
        tips = [
          `Place all plastic containers on the top rack of the dishwasher.`,
          `Use the 'Air Dry' setting instead of 'Heated Dry' to prevent warping.`,
          `Secure lightweight plastic lids so they do not fall onto the heating coil.`
        ];
        warnings = [
          `Thin single-use plastics will melt and warp in the dishwasher.`,
          `Heated plastic can leach chemicals like BPA and phthalates into subsequent foods.`
        ];
        faqs = [
          { question: `Where is the dishwasher-safe symbol?`, answer: `It is typically located on the bottom of the container, showing a plate with water drops.` },
          { question: `Can warped plastic be fixed?`, answer: `No, once plastic is warped by heat, its molecular structure is permanently altered.` },
          { question: `Is BPA-free plastic safe to wash?`, answer: `Yes, if labeled dishwasher safe, but top-rack placement is still highly recommended.` }
        ];
      } else if (type === 'cookware-metal' || type === 'cookware-cast-iron' || type === 'cookware-wood' || type === 'cookware-gold' || type === 'cleaning-sponge') {
        safe = "no";
        shortAnswer = `No, you should never wash a ${name} in the dishwasher.`;
        reason = `Dishwasher detergents are highly alkaline and contain abrasive particles designed to strip grease. When you put reactive materials like wood, cast iron, copper, or fine gold trim in the dishwasher, the environment destroys them.\n\nWood splits and warps, cast iron strips its seasoning and rusts, and gold coatings are worn away by the abrasive wash cycle.`;
        tips = [
          `Hand wash these items using a soft sponge, warm water, and mild dish soap.`,
          `Dry metal and wooden utensils immediately with a clean towel after hand washing.`,
          `Oil wooden cutting boards regularly with food-grade mineral oil to prevent cracking.`
        ];
        warnings = [
          `Washing cast iron in the dishwasher strips the protective seasoning and causes rust.`,
          `Machine washing wooden cutting boards will warp the wood and harbor bacteria in splits.`
        ];
        faqs = [
          { question: `Why does metal tarnish in the dishwasher?`, answer: `The harsh chemicals and hot water oxidize reactive metals like copper, aluminum, and brass.` },
          { question: `Can I save rusted cast iron?`, answer: `Yes, scrub off the rust and re-season the pan with oil in the oven.` },
          { question: `What happens if a wooden spoon splits?`, answer: `Split spoons can harbor bacteria and food particles in the cracks and should be replaced.` }
        ];
      } else {
        safe = "no";
        shortAnswer = `No, do not wash a ${name} in the dishwasher.`;
        reason = `The mechanical agitation, abrasive soap, and high temperatures of a dishwasher are highly damaging to fabrics, shoes, and non-kitchen items like ${name}.\n\nWashing these in the machine will destroy the items and can ruin the dishwasher pumps.`;
        tips = [
          `Clean fabric items in the laundry washing machine according to care labels.`,
          `Wipe shoes or structural items with a damp cloth instead of dishwashing them.`
        ];
        warnings = [
          `Fabric fibers will expand, clog dishwasher filters, and damage pump impellers.`
        ];
        faqs = [
          { question: `Can you wash sneakers in the dishwasher?`, answer: `No, this is highly discouraged as it will melt glues and damage both the shoe and the machine.` }
        ];
      }
    }
  } else if (appliance === 'microwave') {
    if (type.startsWith('food-')) {
      if (type === 'food-egg') {
        safe = "no";
        shortAnswer = `No, you should never microwave a whole raw egg in its shell.`;
        reason = `Microwaving a whole egg in its shell builds up high steam pressure inside. Since the pressure cannot escape through the rigid shell, it can explode violently either inside the appliance or immediately after removal, causing severe steam burns.\n\nAlways crack eggs first, beat them, or use a microwave-safe egg poacher with venting.`;
        tips = [
          `Crack the egg into a microwave-safe cup and prick the yolk with a toothpick before heating.`,
          `Cover the dish with a paper towel to prevent any splatter.`,
          `Microwave in short, 15-second intervals on medium power.`
        ];
        warnings = [
          `Never microwave a whole egg in its shell, as it acts like a pressure bomb.`,
          `Even boiled eggs in shells can explode if reheated in the microwave.`
        ];
        faqs = [
          { question: `Why do eggs explode in the microwave?`, answer: `The microwave heats the moisture inside the egg extremely fast, creating steam that cannot escape the shell.` },
          { question: `Is it safe to microwave scrambled eggs?`, answer: `Yes, scrambled egg mixtures are perfectly safe to microwave when cooked in intervals.` },
          { question: `How do I reheat a hard-boiled egg?`, answer: `Slice it in half first to release internal steam pockets before microwaving.` }
        ];
      } else {
        safe = "yes";
        shortAnswer = `Yes, you can safely microwave ${name}.`;
        reason = `Microwaving ${name} is a safe and convenient method to heat or cook this food item. Because microwaves excite water molecules to heat food quickly, it preserves most water-soluble nutrients compared to boiling.\n\nEnsure you heat the food in a microwave-safe container and cover it to retain moisture and prevent splatters.`;
        tips = [
          `Use microwave-safe glass or ceramic containers instead of plastic.`,
          `Stir the food halfway through heating to prevent cold spots where bacteria can survive.`,
          `Use a damp paper towel as a cover to lock in steam and keep the food moist.`
        ];
        warnings = [
          `Never microwave food in closed or sealed containers, as steam pressure will cause them to explode.`,
          `Avoid using containers with metallic trim or aluminum foil inside the microwave.`
        ];
        faqs = [
          { question: `Does microwaving food destroy nutrients?`, answer: `No, because microwaving cooks food quickly and uses little water, it preserves nutrients very well.` },
          { question: `Why is the bowl hot but the food is cold?`, answer: `If a container absorbs microwave energy directly, it gets hot while leaving the food cold. Use a different bowl.` },
          { question: `Is it safe to microwave raw meat?`, answer: `Yes, but it can cook unevenly, so cook in intervals and verify temperature with a meat thermometer.` }
        ];
      }
    } else {
      // Non-foods in microwave
      if (type === 'cookware-glass' || type === 'cookware-silicone') {
        safe = "yes";
        shortAnswer = `Yes, a ${name} is microwave safe.`;
        reason = `This material does not absorb electromagnetic radiation and does not contain free electrons. The microwave energy passes directly through the ${name} to heat the food inside.\n\nTempered glass and food-grade silicone are highly resistant to thermal expansion, making them ideal containers.`;
        tips = [
          `Verify the item has a 'Microwave Safe' label on the bottom.`,
          `Avoid using crystal glass which can contain metal oxides or lead.`,
          `Ensure the container does not have a sealed lid when heating.`
        ];
        warnings = [
          `Do not put cold glass containers in a hot microwave, as thermal shock can crack them.`
        ];
        faqs = [
          { question: `Can Pyrex go in the microwave?`, answer: `Yes, Pyrex is made of tempered glass and is highly microwave-safe.` }
        ];
      } else if (type === 'cookware-plastic') {
        safe = "depends";
        shortAnswer = `Yes, but only if the ${name} is explicitly labeled as microwave safe.`;
        reason = `Plastics not rated for the microwave can melt when in contact with hot fats or sugars in food. This melting process leaches dangerous plasticizers (such as BPA or phthalates) directly into your food.\n\nOnly use containers certified by the manufacturer as microwave-safe.`;
        tips = [
          `Check the bottom of the plastic container for the wave symbol.`,
          `Avoid reheating foods high in oil or sugar in plastic containers.`,
          `Transfer food to a glass or ceramic plate if the plastic container is scratched or worn.`
        ];
        warnings = [
          `Heating food in non-safe plastic containers is a primary source of chemical contamination.`
        ];
        faqs = [
          { question: `What does the microwave symbol look like?`, answer: `It is usually a square with wavy lines inside, representing microwave waves.` }
        ];
      } else {
        safe = "no";
        shortAnswer = `No, you must never put a ${name} in the microwave.`;
        reason = `Putting metals, wood, styrofoam, or fabrics like ${name} in the microwave is extremely dangerous. Metals reflect microwave energy, causing electrical arcing and fires. Wood dries out and cracks or catches fire, and styrofoam melts and leaches toxic styrene monomer into food.\n\nRunning these items in the microwave poses severe fire, health, and appliance hazards.`;
        tips = [
          `Always transfer takeout food from styrofoam containers to glass plates before heating.`,
          `Never use foil or metal twist ties inside the microwave.`
        ];
        warnings = [
          `Metal in the microwave causes sparks (arcing) that can instantly ignite fires.`,
          `Melted polystyrene container chemicals are classified as suspected carcinogens.`
        ];
        faqs = [
          { question: `Why does metal spark in the microwave?`, answer: `Electromagnetic waves build up electrical charges in metals, which jump as sparks (arcing) to the walls.` }
        ];
      }
    }
  } else if (appliance === 'freezer') {
    if (type.startsWith('food-')) {
      if (type === 'food-egg') {
        safe = "depends";
        shortAnswer = `Yes, but you must crack the egg out of its shell first.`;
        reason = `Freezing raw eggs in their shells causes the water inside the egg white to expand. This expansion cracks the shell, exposing the egg to bacteria and freezer air.\n\nTo freeze eggs safely, crack them into a container, beat them gently with a pinch of salt or sugar, and seal them in an airtight freezer bag.`;
        tips = [
          `Beat yolks and whites together before freezing to maintain a smooth texture.`,
          `Freeze eggs in silicone ice cube trays for easy portion control.`,
          `Thaw frozen eggs slowly inside the refrigerator before cooking.`
        ];
        warnings = [
          `Never freeze whole eggs in shells, as they will crack and contaminate your freezer.`,
          `Egg yolks can become extremely gelatinous and unusable if frozen without salt or sugar.`
        ];
        faqs = [
          { question: `How long do frozen eggs last?`, answer: `Raw beaten eggs can be frozen safely for up to 1 year for best quality.` }
        ];
      } else {
        safe = "yes";
        shortAnswer = `Yes, you can safely freeze ${name}.`;
        reason = `Freezing ${name} at 0°F (-18°C) halts all enzymatic activity and microbial growth, preserving the food indefinitely. According to the USDA, frozen food remains safe to eat forever.\n\nHowever, moisture loss from dry freezer air can cause freezer burn, which ruins flavor and texture, so proper packaging is essential.`;
        tips = [
          `Squeeze out all air from freezer bags before sealing to prevent freezer burn.`,
          `Write the date and name of the food on the container before freezing.`,
          `Cool hot cooked food to room temp or chill in the fridge before placing it in the freezer.`
        ];
        warnings = [
          `Freezing hot food raises the freezer temperature, risking bacterial growth in adjacent foods.`,
          `Do not freeze food in standard grocery store packaging which is not airtight.`
        ];
        faqs = [
          { question: `Does freezing kill bacteria?`, answer: `No, freezing only inactivates microbes. Once thawed, bacteria multiply just like fresh food.` }
        ];
      }
    } else {
      // Non-foods in freezer
      if (type === 'cookware-glass') {
        safe = "depends";
        shortAnswer = `Yes, but only if the glass container is tempered and has headspace.`;
        reason = `Liquids expand by about 9% when frozen. If you freeze food in a rigid glass jar without leaving at least an inch of headspace, the pressure will shatter the glass.\n\nAlways use wide-mouth, tempered canning jars (like Mason jars) and leave headspace, or use plastic/silicone containers.`;
        tips = [
          `Leave at least 1 to 2 inches of headspace for liquids to expand.`,
          `Use wide-mouth jars designed for freezing (without a curved shoulder).`,
          `Let the glass container thaw slowly in the fridge to prevent thermal shock.`
        ];
        warnings = [
          `Thin non-tempered glass will easily crack or shatter under freezing pressures.`
        ];
        faqs = [
          { question: `Can mason jars be frozen?`, answer: `Yes, but only wide-mouth mason jars, leaving space for expansion.` }
        ];
      } else if (type === 'cookware-wood') {
        safe = "no";
        shortAnswer = `No, do not store wooden items in the freezer.`;
        reason = `Wood contains natural moisture. Storing a ${name} in the freezer causes this moisture to freeze and expand, warping and cracking the wood fibers.\n\nOnce cracked, the wood is ruined and can harbor bacteria when returned to room temp.`;
        tips = [
          `Store wooden spoons and cutting boards in a dry, room-temperature cupboard.`
        ];
        warnings = [
          `Freezing weakens the glue joints in laminated wood boards, causing them to split.`
        ];
        faqs = [
          { question: `Does freezing sanitize wood?`, answer: `No, it does not. Bacteria will survive and reactivate once the wood warms up.` }
        ];
      } else {
        safe = "yes";
        shortAnswer = `Yes, you can safely put a ${name} in the freezer.`;
        reason = `This material is stable at cold temperatures and does not contain water that will expand or shatter the container.\n\nPlastics, metals, and silicone items are perfectly fine in the freezer.`;
        tips = [
          `Ensure plastic containers are freezer-safe so they do not become brittle and crack.`,
          `Use silicone bags as reusable, eco-friendly freezer storage.`
        ];
        warnings = [
          `Some plastics become very brittle at 0°F and can shatter if dropped.`
        ];
        faqs = [
          { question: `Is silicone freezer safe?`, answer: `Yes, food-grade silicone remains flexible and safe even in extreme cold.` }
        ];
      }
    }
  } else if (appliance === 'oven') {
    if (type.startsWith('food-')) {
      safe = "yes";
      shortAnswer = `Yes, baking or roasting ${name} in the oven is safe.`;
      reason = `Cooking ${name} in the oven is a standard, safe culinary method. Oven cooking allows heat to surround the food, cooking it evenly to safe internal temperatures.\n\nAlways use a food thermometer to verify that meats reach safe minimum internal temperatures (165°F for poultry, 145°F for beef/pork/fish).`;
      tips = [
        `Use oven-safe cookware like stainless steel, cast iron, or tempered glass.`,
        `Preheat the oven fully before inserting food for even cooking.`,
        `Place food on the middle rack to prevent the bottom from burning.`
      ];
      warnings = [
        `Never cook raw meat in an oven set lower than 325°F to avoid food safety danger zones.`,
        `Keep plastic wrap and non-oven-safe materials completely out of the oven.`
      ];
      faqs = [
        { question: `What is the safe temperature for chicken?`, answer: `Cook chicken to an internal temperature of 165°F as measured by a food thermometer.` },
        { question: `Can I put plastic wrap in the oven?`, answer: `No, plastic wrap will melt immediately, ruining the food and creating toxic fumes.` }
      ];
    } else {
      // Non-foods in oven
      if (type === 'cookware-metal' || type === 'cookware-cast-iron' || type === 'cookware-glass' || type === 'cookware-silicone') {
        safe = "yes";
        if (type === 'cookware-glass') {
          safe = "depends";
          shortAnswer = `Yes, but only if the glass is tempered and labeled oven-safe.`;
          reason = `Tempered glass (like Pyrex) is designed to handle oven temperatures. However, it is still vulnerable to thermal shock (rapid temperature changes).\n\nNever place hot glass on a cold countertop, wet surface, or expose it to direct broiler flame.`;
        } else {
          shortAnswer = `Yes, you can safely use a ${name} in the oven.`;
          reason = `This material is highly heat-resistant and will not melt, warp, or release toxic chemicals at standard baking temperatures (up to 450°F or 500°F).\n\nStainless steel, cast iron, and food-grade silicone are excellent choices for oven cooking.`;
        }
        tips = [
          `Always verify the manufacturer's maximum temperature rating.`,
          `Use dry oven mitts to handle hot pans to prevent steam burns.`,
          `Allow glassware to heat up and cool down gradually.`
        ];
        warnings = [
          `Do not use items with plastic or wooden handles in the oven unless they are rated safe.`,
          `Exceeding silicone's temperature limit (usually 425°F-450°F) will degrade the material.`
        ];
        faqs = [
          { question: `Is silicone oven safe?`, answer: `Yes, most food-grade silicone is oven safe up to 450°F.` }
        ];
      } else {
        safe = "no";
        shortAnswer = `No, you must never put a ${name} in the oven.`;
        reason = `Materials like plastic, wood, paper, or styrofoam will melt, release toxic fumes, or catch fire inside the hot oven.\n\nOnly use cookware specifically labeled as oven-safe.`;
        tips = [
          `Use parchment paper instead of wax paper, which melts and catches fire.`
        ];
        warnings = [
          `Plastics will melt into a toxic pool, permanently ruining your oven and food.`,
          `Dry paper and cardboard pose a severe fire hazard inside a hot oven.`
        ];
        faqs = [
          { question: `Is wax paper oven safe?`, answer: `No, wax paper is coated in wax which melts and can ignite. Use parchment paper instead.` }
        ];
      }
    }
  } else if (appliance === 'dryer') {
    if (type.startsWith('item-fabric') || type.startsWith('item-shoe')) {
      if (type === 'item-shoe') {
        safe = "no";
        shortAnswer = `No, do not put ${name} in the clothes dryer.`;
        reason = `Clothes dryers operate at high temperatures (up to 150°F) which can warp and melt the synthetic glues, plastics, and rubbers in shoes.\n\nTumbling shoes in the dryer can also damage the drum or paddle structure of the appliance. Air drying in a shade is always recommended.`;
        tips = [
          `Air dry shoes in a well-ventilated space.`,
          `Wipe them down with a dry towel immediately to speed up drying.`,
          `If you must dry them, tie the laces to the dryer door to prevent tumbling.`
        ];
        warnings = [
          `High dryer heat will shrink rubber and melt structural adhesives.`,
          `Tumbling heavy shoes creates loud noise and can dent the dryer metal drum.`
        ];
        faqs = [
          { question: `Will drying shoes shrink them?`, answer: `Yes, resin or rubber shoes can shrink by multiple sizes under high heat.` }
        ];
      } else {
        safe = "yes";
        shortAnswer = `Yes, you can safely put ${name} in the dryer.`;
        reason = `Most standard fabrics can withstand dryer heat and tumbling without shrinking or structural failure.\n\nTumbling fabric items on standard settings is the most convenient way to dry and fluff them.`;
        tips = [
          `Use the delicate or low-heat setting for premium fabrics.`,
          `Clean the lint filter before starting the cycle to maintain airflow.`,
          `Remove items promptly to minimize wrinkles.`
        ];
        warnings = [
          `Check care labels for wool or silk garments, as heat will shrink them.`
        ];
        faqs = [
          { question: `Does high heat wear out clothes?`, answer: `Yes, excessive heat breaks down fibers over time, producing lint. Use low heat when possible.` }
        ];
      }
    } else {
      safe = "no";
      shortAnswer = `No, you must never put ${name} in a clothes dryer.`;
      reason = `The clothes dryer is designed strictly for fabrics. Placing food items, hard containers, or cookware in the dryer will create a massive mess, cause damage, and is a major fire hazard.\n\nKeep all food, liquids, and hard objects out of the clothes dryer.`;
      tips = [
        `Dry fabrics only, and make sure pockets are emptied of keys, coins, or tissues.`
      ];
      warnings = [
        `Plastics and oils can easily ignite or melt in the high heat of a clothes dryer.`
      ];
      faqs = [
        { question: `Can I dry a wet cell phone?`, answer: `No! The heat will destroy the battery and electronics immediately.` }
      ];
    }
  } else if (appliance === 'airfryer') {
    if (type.startsWith('food-')) {
      safe = "yes";
      shortAnswer = `Yes, cooking ${name} in the air fryer is highly recommended.`;
      reason = `The air fryer works like a compact convection oven, circulating hot air around food. Cooking ${name} in the air fryer gives crispy results with very little oil.\n\nEnsure items are not packed too tightly so the air can circulate freely.`;
      tips = [
        `Preheat the air fryer for 2-3 minutes for best results.`,
        `Shake the basket halfway through cooking to ensure even browning.`,
        `Use a light mist of oil using a pump spray bottle rather than aerosol sprays.`
      ];
      warnings = [
        `Avoid adding loose parchment paper or foil without food on top to weight it down.`,
        `Do not cook foods with wet batters, as the batter will drip and burn.`
      ];
      faqs = [
        { question: `Do I need to preheat?`, answer: `It is not required, but preheating helps achieve a crispier texture.` }
      ];
    } else {
      // Non-foods in airfryer
      if (type === 'cookware-metal' || type === 'cookware-silicone' || type === 'cookware-glass') {
        safe = "yes";
        if (type === 'cookware-glass') {
          safe = "depends";
          shortAnswer = `Yes, but only if the glass is tempered and labeled oven-safe.`;
          reason = `An air fryer operates under the same heating principles as an oven, but heats up much faster. Tempered glass containers are safe, but thin glassware will shatter from the rapid heat change.\n\nAlways use oven-safe pans or silicone inserts.`;
        } else {
          shortAnswer = `Yes, a ${name} is safe to use in the air fryer.`;
          reason = `Any cookware or container that is oven-safe (such as stainless steel, cast iron, or food-grade silicone) can be safely placed in the air fryer basket.\n\nEnsure the pan is small enough to allow air to circulate around the sides.`;
        }
        tips = [
          `Use silicone liners to keep the air fryer basket clean.`,
          `Make sure the pan fits comfortably without blocking all airflow.`,
          `Handle hot containers with silicone tongs or mitts.`
        ];
        warnings = [
          `Never use plastic or wood containers, as they will melt or catch fire.`
        ];
        faqs = [
          { question: `Is foil safe in the air fryer?`, answer: `Yes, but it must be weighted down by food so it doesn't blow into the heating element.` }
        ];
      } else {
        safe = "no";
        shortAnswer = `No, never place a ${name} in the air fryer.`;
        reason = `Plastics, paper plates, or wood will melt, catch fire, or release toxic chemical fumes inside the high-heat, high-airflow environment of the air fryer.\n\nStick to oven-safe metal, glass, or silicone accessories.`;
        tips = [
          `Use specialized air fryer paper liners that are sized to fit your basket.`
        ];
        warnings = [
          `Plastics will melt into a pool, permanently ruining your air fryer.`
        ];
        faqs = [
          { question: `Can I use plastic plates in the air fryer?`, answer: `No, air fryer temperatures easily melt all standard food plastics.` }
        ];
      }
    }
  } else if (appliance === 'refrigerator') {
    if (type.startsWith('food-')) {
      if (name === 'Tomato' || name === 'Potato' || name === 'Onion' || name === 'Garlic' || name === 'Honey' || name === 'White Bread' || name === 'Whole Wheat Bread' || name === 'Sourdough Bread' || name === 'Avocado') {
        safe = "no";
        shortAnswer = `No, you should not refrigerate ${name}.`;
        reason = `Storing ${name} in the refrigerator ruins its texture, flavor, or storage life. For potatoes, cold converts starch to sugar, while tomatoes become mealy and flavorless.\n\nHoney crystallizes into a solid mass, and bread goes stale much faster in the cold air. Store these items in a cool, dark pantry or on the counter.`;
        tips = [
          `Store honey in a sealed jar in your dry pantry.`,
          `Keep potatoes and onions in separate, well-ventilated baskets in the dark pantry.`,
          `Store fresh bread at room temperature or slice and freeze it for long-term use.`
        ];
        warnings = [
          `Refrigerating onions accelerates mold growth due to high humidity.`,
          `Never store raw potatoes in the fridge, as high sugar leads to acrylamide formation when fried.`
        ];
        faqs = [
          { question: `Why does bread go stale in the fridge?`, answer: `The cold temperature accelerates starch recrystallization, drying the bread.` }
        ];
      } else {
        safe = "yes";
        shortAnswer = `Yes, you should store ${name} in the refrigerator.`;
        reason = `Refrigerating ${name} below 40°F (4°C) is critical to slow the growth of pathogenic bacteria like Salmonella and Listeria. Storing it in the fridge preserves its freshness, nutritional value, and flavor.\n\nKeep items in sealed airtight containers to prevent drying out and cross-contamination.`;
        tips = [
          `Store raw meat and poultry on the bottom shelf to prevent juices from dripping on other foods.`,
          `Keep the refrigerator temperature set between 35°F and 38°F.`,
          `Use the humidity drawers (crispers) to keep leafy greens crisp.`
        ];
        warnings = [
          `Leaving perishable food at room temperature for over 2 hours allows rapid bacterial growth.`,
          `Do not store opened canned goods directly in the tin cans in the fridge.`
        ];
        faqs = [
          { question: `What is the danger zone for food?`, answer: `The USDA defines the danger zone as 40°F to 140°F, where bacteria multiply rapidly.` }
        ];
      }
    } else {
      // Non-foods in refrigerator
      safe = "yes";
      shortAnswer = `Yes, a ${name} can be safely placed in the refrigerator.`;
      reason = `This material is fully stable at standard refrigerator temperatures (35°F to 40°F). Storing items in the fridge does not degrade the material and is safe.\n\nGlass, plastics, silicone, and metals are all perfectly fine.`;
      tips = [
        `Use airtight containers to prevent odor transfer inside the fridge.`
      ];
      warnings = [
        `Ensure hot cookware has cooled before placing it on cold glass refrigerator shelves.`
      ];
      faqs = [
        { question: `Is plastic safe in the fridge?`, answer: `Yes, standard food plastics are fully refrigerator-safe.` }
      ];
    }
  }

  return {
    item: name,
    appliance: appliance,
    slug: spec.slug,
    safe: safe,
    shortAnswer: shortAnswer,
    reason: reason,
    tips: tips,
    warnings: warnings,
    faqs: faqs,
    relatedItems: []
  };
}

// Generate the new items
let addedCount = 0;
newItemsSpecs.forEach(spec => {
  appliances.forEach(appliance => {
    // Check if combo already exists
    const exists = itemsList.some(item => item.slug === spec.slug && item.appliance === appliance);
    if (!exists) {
      const generated = determineSafetyAndContent(appliance, spec);
      itemsList.push(generated);
      addedCount++;
    }
  });
});

console.log(`Added ${addedCount} new combinations to itemsList.`);

// Regenerate related items for all items to ensure links exist
itemsList.forEach((item) => {
  const siblings = itemsList.filter(i => i.appliance === item.appliance && i.slug !== item.slug);
  const shuffled = siblings.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 4).map(i => i.slug);
  item.relatedItems = selected;
});

// Self-validation check
console.log(`Total items in expanded list: ${itemsList.length}`);

// Ensure unique combos
const combinations = new Set();
itemsList.forEach(item => {
  const combo = `${item.appliance}/${item.slug}`;
  if (combinations.has(combo)) {
    console.error(`Error: Duplicate combination found: ${combo}`);
    process.exit(1);
  }
  combinations.add(combo);
});

// Save back
fs.writeFileSync(TARGET_PATH, JSON.stringify(itemsList, null, 2), 'utf-8');
console.log(`Successfully expanded items.json with ${itemsList.length} items.`);
