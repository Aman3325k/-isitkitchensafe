const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dataDir = path.join(__dirname, 'src/data');
const files = ['items.json', 'how-long.json', 'refreeze.json', 'washing-machine.json', 'what-happens.json'];

// Helper to format string into title case
function titleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Classification function
function classifyItem(name, type, file, appliance, location, slug) {
  name = (name || "").toLowerCase();
  type = (type || "").toLowerCase();
  file = (file || "").toLowerCase();
  appliance = (appliance || "").toLowerCase();
  location = (location || "").toLowerCase();
  slug = (slug || "").toLowerCase();

  let material = "Processed Material";
  let keyRisk = "Safety hazard";
  let tip = "Consult manufacturer guidelines.";
  let learnMore = "Always refer to the manufacturer manual and official safety guidelines for your specific item.";

  // 1. Double-Walled Vacuum Stainless Steel Bottles/Flasks/Mugs
  if (
    slug.includes("hydroflask") || slug.includes("hydro-flask") ||
    slug.includes("yeti") || slug.includes("stanley") ||
    slug.includes("swell") || slug.includes("klean-kanteen") ||
    slug.includes("thermos") || slug.includes("camelbak") ||
    slug.includes("nalgene") || slug.includes("contigo") ||
    slug.includes("owala") || slug.includes("travel-mug") ||
    name.includes("hydro flask") || name.includes("yeti") ||
    name.includes("stanley cup") || name.includes("s'well") ||
    name.includes("klean kanteen") || name.includes("thermos") ||
    name.includes("camelbak") || name.includes("nalgene") ||
    name.includes("contigo") || name.includes("owala") ||
    name.includes("travel mug") || name.includes("vacuum flask")
  ) {
    return {
      material: "Insulated Stainless Steel",
      keyRisk: "Vacuum seal compromise & paint peeling",
      tip: "Always hand wash vacuum insulated bottles; avoid placing them in the dishwasher or microwave.",
      learnMore: "High heat and pressure break the welded vacuum seal between the steel layers, destroying their insulation properties. Dishwasher heat also flakes and chips outer powder-coated finishes."
    };
  }

  // 2. Empty Appliance / Nothing (e.g. Microwave Nothing)
  if (
    slug.includes("nothing") || slug.includes("empty") ||
    name.includes("nothing") || name.includes("empty")
  ) {
    return {
      material: "Air / Empty Cavity",
      keyRisk: "Magnetron reflection & overheating",
      tip: "Never run a microwave or other cooking appliance completely empty.",
      learnMore: "Running a microwave empty prevents wave absorption, reflecting the electromagnetic energy back into the magnetron and causing severe internal damage or fire."
    };
  }

  // 3. Superheated Liquids / Water / Drinks
  if (
    slug.includes("water") || slug.includes("kombucha") || slug.includes("beer") || slug.includes("wine") || slug.includes("soda") || slug.includes("drinks") ||
    name.includes("water") || name.includes("kombucha") || name.includes("beer") || name.includes("wine") || name.includes("soda") || name.includes("drinks")
  ) {
    return {
      material: "Liquid Beverage",
      keyRisk: "Superheating & container bursting",
      tip: "Avoid heating liquids past their boiling point; use a wooden stir stick to prevent eruption.",
      learnMore: "Smooth containers allow liquids to superheat past their boiling point without bubbling, causing a violent eruption when disturbed. Sealed drinks will burst under pressure."
    };
  }

  // 4. Cleaning Chemicals / Detergent Overflow
  if (
    slug.includes("detergent") || slug.includes("soap") || slug.includes("bleach") || slug.includes("ammonia") || slug.includes("vinegar") ||
    name.includes("detergent") || name.includes("soap") || name.includes("bleach") || name.includes("ammonia") || name.includes("vinegar")
  ) {
    return {
      material: "Cleaning Chemical Compound",
      keyRisk: "Excessive foaming & toxic gas emission",
      tip: "Only use formulated dishwasher detergents; never mix household chemicals like bleach and ammonia.",
      learnMore: "Standard dish soaps create excessive foam that overflows the washer tub. Mixing bleach with acids (vinegar) or bases (ammonia) releases highly toxic chloramine or chlorine gases."
    };
  }

  // 5. Behavioral Scenarios: Freezer door open
  if (slug.includes("freezer-door-open")) {
    return {
      material: "Appliance Operation",
      keyRisk: "Frost buildup & compressor overload",
      tip: "Ensure the freezer door is tightly closed and check the door seal gasket periodically.",
      learnMore: "Leaving the door open lets warm, humid air flow in, causing heavy frost to build up on evaporator coils and forcing the compressor to run continuously to the point of failure."
    };
  }

  // 6. Behavioral Scenarios: Refrigerator door open
  if (slug.includes("fridge-door-open")) {
    return {
      material: "Appliance Operation",
      keyRisk: "Internal temperature rise & food spoilage",
      tip: "Close the door completely; check that large containers are not blocking the door shut.",
      learnMore: "Leaving the refrigerator door open lets cold air escape, pushing the internal temperature into the Danger Zone (above 40°F) and accelerating bacterial growth on perishables."
    };
  }

  // 7. Behavioral Scenarios: Oven / Stove left on or preheated too long
  if (
    slug.includes("oven-on") || slug.includes("stove-on") || slug.includes("oven-too-long") || slug.includes("oven-overnight") || slug.includes("preheat-oven") || slug.includes("food-in-oven-overnight") || slug.includes("open-oven-too-often") || slug.includes("preheat-oven-too-long") || slug.includes("leave-food-in-oven-overnight") || slug.includes("open-oven-too-often")
  ) {
    return {
      material: "Thermal Appliance Operation",
      keyRisk: "Extreme fire hazard & component failure",
      tip: "Always double-check dial settings before leaving the kitchen; use automatic timers.",
      learnMore: "Unattended heating elements running for extended periods run the risk of structural overheating, melting insulation, or igniting grease or food residues."
    };
  }

  // 8. Behavioral Scenarios: Food left out overnight / Power outage / original packaging / wet food / freezer full / power outage
  if (
    slug.includes("left-out-overnight") || slug.includes("power-outage") || slug.includes("undercooked") || slug.includes("original-packaging") || slug.includes("wet-food") || slug.includes("freezer-too-full") || slug.includes("power-outage")
  ) {
    return {
      material: "Perishable Food Scenario / Storage Practice",
      keyRisk: "Pathogenic bacterial multiplication & slow freezing",
      tip: "Discard perishable items kept above 40°F (4°C) for longer than two hours; package foods properly.",
      learnMore: "Leaving perishables at room temperature allows bacteria to multiply rapidly. Overpacking or incorrect packaging leads to frost burn, slow freezing, and temperature spikes."
    };
  }

  // 9. Behavioral Scenarios: Freezing practices (hot food)
  if (
    slug.includes("freeze-hot-food")
  ) {
    return {
      material: "Food Storage Practice",
      keyRisk: "Slow freezing & ambient temperature rise",
      tip: "Cool foods to room temperature before freezing; leave adequate space for airflow.",
      learnMore: "Hot food raises the local freezer temperature, risking partial thaw of adjacent items. Overpacking blocks the fan airflow, delaying the freezing process and causing larger ice crystals."
    };
  }

  // 10. Styrofoam / Polystyrene Takeout
  if (
    slug.includes("styrofoam") || slug.includes("foam-cup") || slug.includes("ramen-cup") || slug.includes("takeout") ||
    name.includes("styrofoam") || name.includes("foam cup") || name.includes("ramen cup") || name.includes("takeout")
  ) {
    return {
      material: "Expanded Polystyrene (EPS)",
      keyRisk: "Melting & toxic chemical leaching",
      tip: "Never microwave or heat Styrofoam unless the manufacturer label explicitly states 'microwave-safe'.",
      learnMore: "Polystyrene has a low melting point. Heat causes it to breakdown and release toxic styrene monomers into foods and beverages."
    };
  }

  // 11. Kitchen Appliance Component (Basket, Lid, Vitamix, Air Fryer, Inner Pot, Cups, Mug, Pan, Wok, Skillet, Pot, Press, Tool)
  if (
    slug.includes("lid") || slug.includes("basket") || slug.includes("inner-pot") || slug.includes("container") || slug.includes("cups") || slug.includes("mug") || slug.includes("pan") || slug.includes("wok") || slug.includes("skillet") || slug.includes("pot") || slug.includes("press") || slug.includes("tool") || slug.includes("non-stick-oven") ||
    name.includes("lid") || name.includes("basket") || name.includes("inner pot") || name.includes("container") || name.includes("vitamix") || name.includes("blender") || name.includes("cups") || name.includes("mug") || name.includes("pan") || name.includes("wok") || name.includes("skillet") || name.includes("pot") || name.includes("press") || name.includes("tool") || name.includes("non-stick oven")
  ) {
    return {
      material: "Kitchen Appliance Component",
      keyRisk: "Thermal distortion & coating wear",
      tip: "Hand wash to protect coatings; place plastic components on the top rack of the dishwasher only.",
      learnMore: "Engineered plastics and non-stick coatings are heat-tolerant, but harsh cycles can shrink gaskets, warp outer rims, and strip non-stick layers over time."
    };
  }

  // 12. Eggs / Poultry Products
  if (
    slug.includes("egg") || slug.includes("eggs") ||
    name.includes("egg") || name.includes("eggs")
  ) {
    return {
      material: "Poultry Product (Eggs)",
      keyRisk: "Pressure explosion & pathogen growth",
      tip: "Never microwave raw eggs in their shells; store fresh eggs below 40°F (4°C) to prevent Salmonella.",
      learnMore: "Microwaving eggs in shells generates steam pressure that causes rapid explosions. In storage, eggs are perishable and support bacterial multiplication at room temperature."
    };
  }

  // 13. Perishable Dairy Products (cheese types: mozzarella, parmesan, cheddar, swiss, feta, brie, ricotta, yogurt, milk, cream, butter, margarine, whey)
  if (
    slug.includes("dairy") || slug.includes("cheese") || slug.includes("mayo") || slug.includes("yogurt") || slug.includes("milk") || slug.includes("cream") || slug.includes("butter") || slug.includes("tofu") || slug.includes("mozzarella") || slug.includes("parmesan") || slug.includes("cheddar") || slug.includes("swiss") || slug.includes("feta") || slug.includes("brie") || slug.includes("ricotta") || slug.includes("margarine") || slug.includes("protein-shake") || slug.includes("protein") ||
    name.includes("dairy") || name.includes("cheese") || name.includes("mayo") || name.includes("yogurt") || name.includes("milk") || name.includes("cream") || name.includes("butter") || name.includes("tofu") || name.includes("mozzarella") || name.includes("parmesan") || name.includes("cheddar") || name.includes("swiss") || name.includes("feta") || name.includes("brie") || name.includes("ricotta") || name.includes("margarine") || name.includes("protein shake") || name.includes("protein") ||
    type.includes("dairy")
  ) {
    return {
      material: "Perishable Dairy / Soy / Protein Product",
      keyRisk: "Rapid bacterial growth & emulsion collapse",
      tip: "Store tightly sealed below 40°F (4°C) and check for separation or off-odors before using.",
      learnMore: "Dairy, soy, and protein shakes are highly perishable products with rich nutrient contents. When left in the temperature Danger Zone, bacteria propagate rapidly, causing safety hazards."
    };
  }

  // 14. Oils / Fats / Mist
  if (
    slug.includes("oil") || slug.includes("mist") || slug.includes("butter") || slug.includes("grease") || slug.includes("cooking-spray") || slug.includes("rub") ||
    name.includes("oil") || name.includes("mist") || name.includes("butter") || name.includes("grease") || name.includes("cooking spray") || name.includes("rub")
  ) {
    return {
      material: "Cooking Oil / Liquid Fat / Seasoning",
      keyRisk: "Thermal oxidation & fire danger",
      tip: "Keep cooking oils away from direct heat; store in a dark, cool pantry.",
      learnMore: "Heating cooking oils past their smoke points degrades their molecular structure, producing harmful free radicals and creating extreme kitchen fire risks."
    };
  }

  // 15. Animal Protein (Sausage, Meat, Pork, Chicken, Bacon, Salmon, Seafood, Beef, Scallops, Tilapia, Cod, Ham, Ribs, Patty, patties, meatballs, meatloaf, wings, nuggets, hot-dog, hot-dogs, cold-cuts)
  if (
    slug.includes("meat") || slug.includes("chicken") || slug.includes("beef") || slug.includes("pork") || slug.includes("bacon") || slug.includes("sausage") || slug.includes("salmon") || slug.includes("fish") || slug.includes("turkey") || slug.includes("steak") || slug.includes("duck") || slug.includes("lamb") || slug.includes("shrimp") || slug.includes("lobster") || slug.includes("crab") || slug.includes("tuna") || slug.includes("ham") || slug.includes("ribs") || slug.includes("scallops") || slug.includes("tilapia") || slug.includes("cod") || slug.includes("patty") || slug.includes("patties") || slug.includes("meatballs") || slug.includes("meatloaf") || slug.includes("wings") || slug.includes("nuggets") || slug.includes("hot-dog") || slug.includes("hot-dogs") || slug.includes("cold-cuts") ||
    name.includes("meat") || name.includes("chicken") || name.includes("beef") || name.includes("pork") || name.includes("bacon") || name.includes("sausage") || name.includes("salmon") || name.includes("fish") || name.includes("turkey") || name.includes("steak") || name.includes("duck") || name.includes("lamb") || name.includes("shrimp") || name.includes("lobster") || name.includes("crab") || name.includes("tuna") || name.includes("ham") || name.includes("ribs") || name.includes("scallops") || name.includes("tilapia") || name.includes("cod") || name.includes("patty") || name.includes("patties") || name.includes("meatballs") || name.includes("meatloaf") || name.includes("wings") || name.includes("nuggets") || name.includes("hot dog") || name.includes("hot dogs") || name.includes("cold cuts") ||
    type.includes("protein")
  ) {
    return {
      material: "Animal Protein",
      keyRisk: "Pathogenic contamination (Salmonella, E. coli)",
      tip: "Thaw raw meats in the refrigerator below 40°F (4°C) and cook to safe internal temperatures.",
      learnMore: "Raw meat holds rich moisture and nutrients, serving as an ideal host for pathogens. Only cooking to safe internal temperatures destroys bacteria."
    };
  }

  // 16. Shoes / Footwear
  if (
    slug.includes("shoes") || slug.includes("sneakers") || slug.includes("converse") || slug.includes("vans") || slug.includes("boots") || slug.includes("flip-flops") || slug.includes("flats") || slug.includes("heels") || slug.includes("footwear") || slug.includes("hey-dudes") || slug.includes("cleats") || slug.includes("slippers") || slug.includes("loafers") || slug.includes("espadrilles") || slug.includes("moccasins") || slug.includes("sandals") || slug.includes("chacos") || slug.includes("birkenstocks") ||
    name.includes("shoes") || name.includes("sneakers") || name.includes("converse") || name.includes("vans") || name.includes("boots") || name.includes("flip flops") || name.includes("flats") || name.includes("heels") || name.includes("footwear") || name.includes("hey dudes") || name.includes("cleats") || name.includes("slippers") || name.includes("loafers") || name.includes("espadrilles") || name.includes("moccasins") || name.includes("sandals") || name.includes("chacos") || name.includes("birkenstocks")
  ) {
    return {
      material: "Synthetic and Natural Footwear Materials",
      keyRisk: "Glue degradation & thermal warping",
      tip: "Clean with cold water and mild detergent; air dry out of direct heat and sunlight.",
      learnMore: "High washing machine and dryer heat melts assembly adhesives, shrinks rubber midsoles, and warps canvas, leather, or synthetic materials."
    };
  }

  // 17. Silicone
  if (type.includes("silicone") || name.includes("silicone") || name.includes("spatula") || name.includes("pacifier") || name.includes("baking mat") || name.includes("ice cube trays") || name.includes("liner") || name.includes("tongs")) {
    return {
      material: "Food-Grade Silicone",
      keyRisk: "High-heat thermal stability",
      tip: "Ensure the silicone accessory is rated for high heat up to 450°F (230°C).",
      learnMore: "Silicone is highly heat-resistant and chemically inert, making it ideal for kitchen appliances, but low-quality silicone containing fillers can leach chemicals."
    };
  }

  // 18. Plastics / Polymers / Resin (Tritan, plastic, crocs, polyester, nylon, synthetic)
  if (type.includes("plastic") || type.includes("tupperware") || type.includes("resin") || name.includes("plastic") || name.includes("tupperware") || name.includes("rubber") || name.includes("acrylic") || name.includes("crocs") || name.includes("nylon") || name.includes("shaker") || name.includes("solo cup") || name.includes("ziploc") || name.includes("melamine") || name.includes("bento") || name.includes("sippy") || name.includes("baby bottle") || name.includes("polyester") || name.includes("spandex") || name.includes("polymer") || name.includes("synthetic")) {
    return {
      material: "Polymer Plastic",
      keyRisk: "Chemical leaching & thermal warping",
      tip: "Always check for 'microwave-safe' or 'dishwasher-safe' stamps on the bottom of the item.",
      learnMore: "Plastics can melt or release harmful microplastics and chemical compounds like BPA under high heat. In dryers, high temperatures can warp or degrade synthetic polymers."
    };
  }

  // 19. Fruits / Vegetables / Herbs / Produce (corn, peas, bean, beans, sprouts, carrots, broccoli, spinach, lettuce, cabbage, celery, potato, potatoes, tomato, tomatoes, onion, garlic, ginger, pepper, peppers, chili, chilis, tropical, cut fruits, nectarines, papaya, cherries, squash)
  if (
    slug.includes("fruit") || slug.includes("fruits") || slug.includes("vegetables") || slug.includes("basil") || slug.includes("herbs") || slug.includes("potatoes") || slug.includes("tomatoes") || slug.includes("beans") || slug.includes("sprouts") || slug.includes("kale") || slug.includes("avocado") || slug.includes("mango") || slug.includes("peach") || slug.includes("pear") || slug.includes("kiwi") || slug.includes("plum") || slug.includes("banana") || slug.includes("pineapple") || slug.includes("melon") || slug.includes("cherry") || slug.includes("berry") || slug.includes("grape") || slug.includes("apple") || slug.includes("orange") || slug.includes("lemon") || slug.includes("lime") || slug.includes("tomato") || slug.includes("potato") || slug.includes("spinach") || slug.includes("lettuce") || slug.includes("cucumber") || slug.includes("celery") || slug.includes("cabbage") || slug.includes("broccoli") || slug.includes("carrot") || slug.includes("pepper") || slug.includes("mushroom") || slug.includes("zucchini") || slug.includes("onion") || slug.includes("garlic") || slug.includes("ginger") || slug.includes("berries") || slug.includes("edamame") || slug.includes("corn") || slug.includes("peas") || slug.includes("bean") || slug.includes("beans") || slug.includes("carrots") || slug.includes("chili") || slug.includes("chilis") || slug.includes("peppers") || slug.includes("tropical") || slug.includes("cut-fruits") || slug.includes("nectarine") || slug.includes("nectarines") || slug.includes("papaya") || slug.includes("papayas") || slug.includes("cherries") || slug.includes("squash") ||
    name.includes("fruit") || name.includes("vegetable") || name.includes("basil") || name.includes("herb") || name.includes("potato") || name.includes("tomato") || name.includes("bean") || name.includes("sprout") || name.includes("kale") || name.includes("avocado") || name.includes("mango") || name.includes("peach") || name.includes("pear") || name.includes("kiwi") || name.includes("plum") || name.includes("banana") || name.includes("pineapple") || name.includes("melon") || name.includes("cherry") || name.includes("berry") || name.includes("grape") || name.includes("apple") || name.includes("orange") || name.includes("lemon") || name.includes("lime") || name.includes("tomato") || name.includes("potato") || name.includes("spinach") || name.includes("lettuce") || name.includes("cucumber") || name.includes("celery") || name.includes("cabbage") || name.includes("broccoli") || name.includes("carrot") || name.includes("pepper") || name.includes("mushroom") || name.includes("zucchini") || name.includes("onion") || name.includes("garlic") || name.includes("ginger") || name.includes("berries") || name.includes("edamame") || name.includes("corn") || name.includes("peas") || name.includes("bean") || name.includes("beans") || name.includes("carrots") || name.includes("chili") || name.includes("chilis") || name.includes("peppers") || name.includes("tropical") || name.includes("cut fruits") || name.includes("nectarine") || name.includes("nectarines") || name.includes("papaya") || name.includes("papayas") || name.includes("cherries") || name.includes("squash") ||
    type.includes("fruit") || type.includes("veg")
  ) {
    const isFruit = slug.includes("fruit") || slug.includes("avocado") || slug.includes("mango") || slug.includes("peach") || slug.includes("pear") || slug.includes("kiwi") || slug.includes("plum") || slug.includes("banana") || slug.includes("pineapple") || slug.includes("melon") || slug.includes("cherry") || slug.includes("berry") || slug.includes("grape") || slug.includes("apple") || slug.includes("orange") || slug.includes("lemon") || slug.includes("lime") || slug.includes("tomato") || slug.includes("tropical") || slug.includes("cut-fruits") || slug.includes("nectarine") || slug.includes("nectarines") || slug.includes("papaya") || slug.includes("papayas") || slug.includes("cherries") || name.includes("fruit") || name.includes("avocado") || name.includes("mango") || name.includes("peach") || name.includes("pear") || name.includes("kiwi") || name.includes("plum") || name.includes("banana") || name.includes("pineapple") || name.includes("melon") || name.includes("cherry") || name.includes("berry") || name.includes("grape") || name.includes("apple") || name.includes("orange") || name.includes("lemon") || name.includes("lime") || name.includes("tomato") || name.includes("tropical") || name.includes("cut fruits") || name.includes("nectarine") || name.includes("nectarines") || name.includes("papaya") || name.includes("papayas") || name.includes("cherries") || type.includes("fruit");
    return {
      material: isFruit ? "Fresh Fruit" : "Fresh Vegetable",
      keyRisk: "Cellular structure collapse & moisture loss",
      tip: "Store whole produce in cool, humid crisper drawers; wash right before eating.",
      learnMore: "Freezing produce crystallizes internal water, rupturing plant cell walls. Upon thawing or heating, this leads to a limp, watery, and mushy texture."
    };
  }

  // 20. Metals / Alloys
  if (type.includes("metal") || type.includes("aluminum") || type.includes("copper") || type.includes("steel") || type.includes("cast-iron") || type.includes("yeti") || type.includes("vacuum") || name.includes("metal") || name.includes("foil") || name.includes("aluminum") || name.includes("copper") || name.includes("steel") || name.includes("iron") || name.includes("brass") || name.includes("gold") || name.includes("silver") || name.includes("pewter") || name.includes("pan") || name.includes("wok") || name.includes("whisk") || name.includes("tongs") || name.includes("grater") || name.includes("peeler") || name.includes("thermometer") || name.includes("sheet") || name.includes("tin") || name.includes("skillet") || name.includes("shears") || name.includes("knife") || name.includes("blade") || name.includes("can") || name.includes("dutch oven") || name.includes("silverware") || name.includes("rack") || name.includes("carafe") || name.includes("shears") || slug.includes("fork") || slug.includes("spoon") || slug.includes("knife") || slug.includes("foil") || slug.includes("metal") || slug.includes("steel") || slug.includes("silverware") || name.includes("fork") || name.includes("spoon") || name.includes("knife") || name.includes("foil") || name.includes("metal") || name.includes("steel") || name.includes("silverware")) {
    const isCastIron = name.includes("cast iron") || type.includes("cast-iron") || slug.includes("cast-iron");
    const isCopper = name.includes("copper") || type.includes("copper") || slug.includes("copper");
    const isAluminum = name.includes("aluminum") || type.includes("aluminum") || slug.includes("aluminum");
    const isGoldSilver = name.includes("gold") || name.includes("silver") || slug.includes("gold") || slug.includes("silver");
    return {
      material: isCastIron ? "Cast Iron" :
                isCopper ? "Copper Metal" :
                isAluminum ? "Aluminum Metal" :
                isGoldSilver ? "Precious Metal / Trim" : "Stainless Steel / Alloy Metal",
      keyRisk: "Electromagnetic arcing, oxidation, & rust",
      tip: "Hand wash metal cookware to preserve seasoning and coatings; never put metals in the microwave.",
      learnMore: "Metals reflect microwave waves, causing high electrical currents that build arcs and trigger fires. High humidity in dishwashers promotes rust on vulnerable metal surfaces."
    };
  }

  // 21. Glass
  if (type.includes("glass") || type.includes("crystal") || name.includes("glass") || name.includes("pyrex") || name.includes("jar") || name.includes("carafe") || name.includes("corelle")) {
    const isCrystal = name.includes("crystal") || type.includes("crystal") || slug.includes("crystal");
    const isPyrex = name.includes("pyrex") || name.includes("tempered") || slug.includes("pyrex");
    return {
      material: isCrystal ? "Lead Crystal Glass" :
                isPyrex ? "Tempered Borosilicate Glass" : "Soda-Lime Glass",
      keyRisk: "Thermal shock fracturing",
      tip: "Avoid sudden temperature changes, such as moving glass directly from the freezer to a preheated oven.",
      learnMore: "Glass is susceptible to thermal shock, where rapid temperature transitions cause uneven thermal expansion and structural shattering."
    };
  }

  // 22. Ceramics / Clay / Stoneware
  if (type.includes("ceramic") || type.includes("stoneware") || type.includes("porcelain") || name.includes("ceramic") || name.includes("stone") || name.includes("mug") || name.includes("plate") || name.includes("dish") || name.includes("china") || name.includes("ramekin") || name.includes("terracotta") || name.includes("corningware") || name.includes("creuset")) {
    const isPorcelain = name.includes("porcelain") || name.includes("china") || slug.includes("porcelain") || slug.includes("china");
    return {
      material: isPorcelain ? "Glazed Porcelain / China" : "Clay-Based Ceramic / Stoneware",
      keyRisk: "Moisture absorption & glaze cracking",
      tip: "Ensure ceramics are fully glazed; check that vintage items do not contain toxic lead-based glazes.",
      learnMore: "Unglazed or micro-cracked ceramics absorb moisture that turns to steam under heat, causing the item to burst or crack. Metal accents will spark in the microwave."
    };
  }

  // 23. Wood / Bamboo
  if (type.includes("wood") || name.includes("wood") || name.includes("bamboo") || name.includes("board") || name.includes("spoon") || name.includes("skewers") || name.includes("butcher")) {
    return {
      material: "Natural Wood / Bamboo",
      keyRisk: "Splitting, warping, & localized charring",
      tip: "Always hand wash wooden utensils and dry them immediately; apply food-safe mineral oil monthly.",
      learnMore: "High heat and moisture cause wood to swell and warp. Once dried out, cracks form that harbor bacteria. Under microwave or oven heat, dry wood can combust."
    };
  }

  // 24. Paper / Cardboard
  if (type.includes("paper") || type.includes("cardboard") || name.includes("paper") || name.includes("cardboard") || name.includes("box") || name.includes("newspaper") || name.includes("towel") || name.includes("carton")) {
    return {
      material: "Cellulose Paper / Cardboard",
      keyRisk: "Grease leakage & high combustion risk",
      tip: "Only heat paper items specifically rated for high-heat food contact, like parchment paper.",
      learnMore: "Dry paper has a low ignition point and can easily catch fire near heating elements. Glues and inks on printed cardboard can melt and release toxic chemical vapors."
    };
  }

  // 25. Fabrics / Garments / Apparel / Bedding / Home Textile (comforter, duvet, pet toys, dog bed, reusable bags, sleeping bag, pot holders, oven mitts, microfiber cloths, rag, sheets, fanny pack, bag, pouches, warmers, cashmere)
  if (type.includes("cloth") || type.includes("wool") || type.includes("delicate") || type.includes("sturdy") || type.includes("spandex") || type.includes("down") || name.includes("shirt") || name.includes("sweater") || name.includes("jacket") || name.includes("blanket") || name.includes("bra") || name.includes("socks") || name.includes("leggings") || name.includes("suit") || name.includes("garment") || name.includes("curtain") || name.includes("pillow") || name.includes("trousers") || name.includes("jeans") || name.includes("coat") || name.includes("fabric") || name.includes("scarf") || name.includes("beanie") || name.includes("glove") || name.includes("pajamas") || name.includes("towel") || name.includes("apron") || name.includes("backpack") || name.includes("mat") || name.includes("robe") || name.includes("cardigan") || name.includes("skirt") || name.includes("dress") || name.includes("jumpsuit") || name.includes("overalls") || name.includes("jersey") || name.includes("cap") || name.includes("sleeve") || slug.includes("pillow") || slug.includes("tablecloth") || slug.includes("diaper") || slug.includes("pouf") || slug.includes("apparel") || slug.includes("wear") || slug.includes("hoodie") || slug.includes("comforter") || slug.includes("duvet") || slug.includes("toys") || slug.includes("bed") || slug.includes("bag") || slug.includes("holder") || slug.includes("mitt") || slug.includes("cloth") || slug.includes("cloths") || slug.includes("rag") || slug.includes("sheets") || slug.includes("pack") || slug.includes("bag") || slug.includes("bags") || slug.includes("case") || slug.includes("warmers") || slug.includes("ties") || slug.includes("cashmere") || slug.includes("foam") || slug.includes("shorts") || slug.includes("gaiter") || slug.includes("guards") || slug.includes("pads") || slug.includes("bands") || slug.includes("chinos") || slug.includes("blazer") || slug.includes("vest") || slug.includes("tie") || name.includes("comforter") || name.includes("duvet") || name.includes("toys") || name.includes("bed") || name.includes("bag") || name.includes("holder") || name.includes("mitt") || name.includes("cloth") || name.includes("cloths") || name.includes("rag") || name.includes("sheets") || name.includes("pack") || name.includes("bag") || name.includes("bags") || name.includes("case") || name.includes("warmers") || name.includes("ties") || name.includes("cashmere") || name.includes("foam") || name.includes("shorts") || name.includes("gaiter") || name.includes("guards") || name.includes("pads") || name.includes("bands") || name.includes("chinos") || name.includes("blazer") || name.includes("vest") || name.includes("tie") || slug.includes("stuffed") || slug.includes("hat") || slug.includes("hanger") || slug.includes("tights") || slug.includes("sequin") || name.includes("stuffed") || name.includes("hat") || name.includes("hanger") || name.includes("tights") || name.includes("sequin")) {
    const isWool = name.includes("wool") || name.includes("cashmere") || type.includes("wool") || slug.includes("cashmere");
    const isSilk = name.includes("silk") || type.includes("delicate") || slug.includes("silk");
    const isCotton = name.includes("cotton") || type.includes("sturdy") || name.includes("denim") || name.includes("jeans") || slug.includes("jeans");
    return {
      material: isWool ? "Animal-Fiber Wool" :
                isSilk ? "Natural Silk Fiber" :
                isCotton ? "Natural Cotton Fiber" : "Synthetic Polyester Blend",
      keyRisk: "Friction shrinkage & elastic degradation",
      tip: "Wash delicate garments inside a mesh wash bag and air dry to maintain shape and size.",
      learnMore: "Agitation and high temperature cause wool fibers to felt and shrink, while heat relaxes and weakens elastane (spandex) threads, ruining the elasticity of athletic wear."
    };
  }

  // 26. Prepared Grains / Cooked Food / Pantry / Liquids / starches / bread / pastry / dessert / sauces / condiments (spaghetti)
  if (type.includes("pantry") || type.includes("drink") || name.includes("quinoa") || name.includes("lentils") || name.includes("oatmeal") || name.includes("pasta") || name.includes("gnocchi") || name.includes("wrappers") || name.includes("crust") || name.includes("dough") || name.includes("tortillas") || name.includes("bread") || name.includes("naan") || name.includes("pita") || name.includes("sourdough") || name.includes("dumpling") || name.includes("tamales") || name.includes("empanada") || name.includes("pie") || name.includes("quiche") || name.includes("casserole") || name.includes("rice") || name.includes("soup") || name.includes("smoothie") || name.includes("juice") || name.includes("stock") || name.includes("broth") || name.includes("gravy") || name.includes("sauce") || name.includes("dressing") || name.includes("tahini") || name.includes("ganoush") || name.includes("tzatziki") || name.includes("pesto") || name.includes("syrup") || name.includes("jam") || name.includes("jelly") || name.includes("nutella") || name.includes("yeast") || name.includes("nut") || name.includes("honey") || name.includes("chocolate") || name.includes("cake") || name.includes("cookie") || name.includes("coffee") || name.includes("tea") || name.includes("beer") || name.includes("wine") || name.includes("soda") || name.includes("water") || name.includes("ketchup") || name.includes("mustard") || name.includes("mayo") || slug.includes("pizza") || slug.includes("dinner") || slug.includes("ramen") || slug.includes("fries") || slug.includes("burritos") || slug.includes("roll") || slug.includes("tots") || slug.includes("chips") || slug.includes("biscuits") || slug.includes("waffles") || slug.includes("marshmallows") || slug.includes("pancakes") || slug.includes("chili") || slug.includes("lasagna") || slug.includes("muffins") || slug.includes("bagels") || slug.includes("hummus") || slug.includes("guacamole") || slug.includes("salsa") || slug.includes("brownies") || slug.includes("croissants") || slug.includes("enchiladas") || slug.includes("sriracha") || slug.includes("tempeh") || slug.includes("baby-food") || slug.includes("hot-pockets") || slug.includes("batter") || slug.includes("leftover") || slug.includes("chinese") || slug.includes("spaghetti") || slug.includes("macaroni") || slug.includes("croissant") || slug.includes("tortilla") || slug.includes("muffin") || slug.includes("brownie") || name.includes("hummus") || name.includes("guacamole") || name.includes("salsa") || name.includes("brownies") || name.includes("croissants") || name.includes("enchiladas") || name.includes("sriracha") || name.includes("tempeh") || name.includes("baby food") || name.includes("hot pockets") || name.includes("batter") || name.includes("leftover") || name.includes("chinese") || name.includes("spaghetti") || name.includes("macaroni") || name.includes("croissant") || name.includes("tortilla") || name.includes("muffin") || name.includes("brownie")) {
    return {
      material: "Prepared Food Product",
      keyRisk: "Texture degradation & bacterial spore hazard",
      tip: "Cool cooked foods quickly and reheat to at least 165°F (74°C) before serving.",
      learnMore: "Starches and cooked foods hold moisture that can foster Bacillus cereus or other heat-tolerant bacterial spores if kept in the danger zone."
    };
  }

  // 27. Toothpicks / Skewers
  if (slug.includes("toothpick") || name.includes("toothpick") || name.includes("skewers") || slug.includes("skewers")) {
    return {
      material: "Natural Wood / Bamboo",
      keyRisk: "High combustion risk & splintering",
      tip: "Soak wooden toothpicks or skewers in water before high-heat appliance use.",
      learnMore: "Dry wood has a low ignition point and can easily catch fire under intense dry heat in ovens, air fryers, or microwave environments."
    };
  }

  // 28. Household / Chemicals / Wax / Specialty
  if (name.includes("candle") || name.includes("wax") || name.includes("batteries") || name.includes("cd") || name.includes("soap") || name.includes("polish") || name.includes("perfume") || name.includes("sponge") || name.includes("wool") || name.includes("ties") || name.includes("lip gloss") || name.includes("flower") || name.includes("seeds") || slug.includes("lipstick") || slug.includes("cosmetic") || slug.includes("warmers") || slug.includes("brush") || slug.includes("sponge") || slug.includes("pouf") || slug.includes("toys") || slug.includes("bed") || slug.includes("case") || slug.includes("bags") || slug.includes("collar") || slug.includes("belt") || name.includes("collar") || name.includes("belt")) {
    return {
      material: name.includes("batteries") ? "Electrochemical Cell" :
                name.includes("candle") || name.includes("lip gloss") || slug.includes("lipstick") ? "Paraffin / Natural Wax" : "Specialty Household Item",
      keyRisk: "Chemical leakage, structural melting, & fire hazards",
      tip: "Keep active batteries in a dry, room-temperature drawer; never freeze or heat chemicals.",
      learnMore: "Extreme hot or cold temperatures crack battery seals (causing leakages) and alter chemical compounds in cosmetics, wax, and liquid cleansers, rendering them useless."
    };
  }

  return { material, keyRisk, tip, learnMore };
}

// Perform dry run
files.forEach(f => {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf-8'));
  let genericCount = 0;
  let sampleGenerics = [];
  
  data.forEach(e => {
    const specs = classifyItem(
      e.item || e.slug,
      e.type || "",
      f,
      e.appliance || "",
      e.location || "",
      e.slug || ""
    );
    if (specs.material === 'Processed Material') {
      genericCount++;
      sampleGenerics.push(e.item + ' (' + e.slug + ')');
    }
  });
  console.log(f, 'generic count after refinement:', genericCount, 'total:', data.length);
  if (sampleGenerics.length > 0) {
    console.log('  Samples:', sampleGenerics.slice(0, 15).join(', '));
  }
});


// ----------------------------------------------------
// 1. Identify Unique Items Dynamically (Skipped list)
// ----------------------------------------------------
const reasonMap = new Map();
const allEntries = [];

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    data.forEach((entry, idx) => {
      let norm = entry.reason || '';
      const itemText = entry.item || '';
      if (itemText) {
        const itemRegex = new RegExp(itemText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
        norm = norm.replace(itemRegex, '[ITEM]');
      }
      if (entry.appliance) {
        const appRegex = new RegExp(entry.appliance.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
        norm = norm.replace(appRegex, '[APPLIANCE]');
      }
      if (entry.location) {
        const locRegex = new RegExp(entry.location.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
        norm = norm.replace(locRegex, '[LOCATION]');
      }

      const record = { file, index: idx, slug: entry.slug || '', item: entry.item || '', norm };
      allEntries.push(record);

      if (!reasonMap.has(norm)) {
        reasonMap.set(norm, []);
      }
      reasonMap.get(norm).push(record);
    });
  }
});

// Identify uniques
const uniqueKeys = new Set();
for (const [norm, records] of reasonMap.entries()) {
  if (records.length === 1) {
    uniqueKeys.add(`${records[0].file}:${records[0].index}`);
  }
}

console.log(`Identified ${uniqueKeys.size} unique hand-crafted entries in the database to be skipped.`);

// ----------------------------------------------------
// 2. Queue Non-Unique Items for Batch Processing
// ----------------------------------------------------
const migrationQueue = [];

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    data.forEach((entry, idx) => {
      const key = `${file}:${idx}`;
      if (!uniqueKeys.has(key)) {
        // Queue it for migration
        migrationQueue.push({ file, index: idx, entry });
      }
    });
  }
});

console.log(`Total non-unique items queued for migration: ${migrationQueue.length}`);

// ----------------------------------------------------
// 3. Batch Migrator Execution
// ----------------------------------------------------
const BATCH_SIZE = 50;
const totalBatches = Math.ceil(migrationQueue.length / BATCH_SIZE);

console.log(`Starting migration in ${totalBatches} batches of ${BATCH_SIZE} items...`);

for (let batchIdx = 0; batchIdx < totalBatches; batchIdx++) {
  const start = batchIdx * BATCH_SIZE;
  const end = Math.min(start + BATCH_SIZE, migrationQueue.length);
  const currentBatch = migrationQueue.slice(start, end);

  console.log(`\n--- PROCESSING BATCH ${batchIdx + 1}/${totalBatches} (Items ${start + 1} to ${end}) ---`);

  // Group batch operations by file to minimize read/write disk cycles
  const fileGroups = {};
  currentBatch.forEach(item => {
    if (!fileGroups[item.file]) fileGroups[item.file] = [];
    fileGroups[item.file].push(item);
  });

  // Apply classifications and write to files
  Object.keys(fileGroups).forEach(file => {
    const filePath = path.join(dataDir, file);
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    fileGroups[file].forEach(item => {
      const entry = fileData[item.index];
      // Get classification parameters
      const specs = classifyItem(
        entry.item || entry.slug,
        entry.type || "",
        file,
        entry.appliance || "",
        entry.location || "",
        entry.slug || ""
      );

      // Add fields
      entry.material = specs.material;
      entry.keyRisk = specs.keyRisk;
      entry.tip = specs.tip;
      entry.learnMore = specs.learnMore;
    });

    // Write file back to disk
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf-8');
  });

  // Run build compile test
  console.log(`Batch ${batchIdx + 1} changes written. Compiling Astro build...`);
  try {
    execSync('npm run build', { cwd: path.join(__dirname), stdio: 'ignore' });
    console.log(`✓ Batch ${batchIdx + 1}/${totalBatches} compiled successfully!`);
  } catch (err) {
    console.error(`✕ Compilation FAILED at batch ${batchIdx + 1}!`);
    console.error(err);
    process.exit(1);
  }
}

console.log('\n=============================================');
console.log('Database batch migration complete successfully!');
console.log('=============================================');
