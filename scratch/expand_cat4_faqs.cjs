const fs = require('fs');

const itemsPath = 'src/data/items.json';
const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));

const cat4Faqs = {
  'raw-chicken': [
    {
      question: "How long can whole raw chicken stay frozen without losing quality?",
      answer: "A whole raw chicken maintains peak flavor and texture for up to 12 months at 0°F (-18°C), whereas cut pieces maintain peak quality for 9 months; while frozen poultry remains safe indefinitely, lipid oxidation eventually causes off-flavors."
    },
    {
      question: "What is the safest way to thaw frozen raw chicken?",
      answer: "Thaw raw chicken slowly on the bottom refrigerator shelf inside a rimmed container to catch juices, allowing roughly 24 hours per 5 pounds; never thaw raw poultry on the counter, where surface temperatures enter the 40°F–140°F danger zone for rapid Salmonella proliferation."
    },
    {
      question: "Can you freeze raw chicken directly in its supermarket plastic-wrapped foam tray?",
      answer: "Store packaging is gas-permeable and traps air pockets that promote rapid freezer burn within 1 to 2 months; for longer storage, overwrap the original packaging in heavy-duty aluminum foil or transfer the chicken to airtight vacuum-sealed freezer bags."
    }
  ],
  'cooked-chicken': [
    {
      question: "How long can cooked chicken remain in the freezer before developing off-flavors?",
      answer: "Cooked chicken maintains optimal quality for 3 to 4 months at 0°F (-18°C); beyond this window, reheated flavor degradation—known as \"warmed-over flavor\" caused by polyunsaturated fatty acid oxidation—becomes noticeable upon reheating."
    },
    {
      question: "Can frozen cooked chicken be reheated straight from the freezer without thawing?",
      answer: "Yes, shredded or diced cooked chicken can be added directly into simmering soups, stews, and casseroles without prior thawing, provided it reaches an internal temperature of 165°F (74°C)."
    },
    {
      question: "How do you prevent cooked chicken from becoming dry and stringy after freezing?",
      answer: "Freeze cooked chicken submerged in a splash of broth, gravy, or sauce in an airtight container; the liquid coats the lean meat fibers, insulating them from freezer air and preventing moisture migration during frozen storage."
    }
  ],
  'chicken-breast': [
    {
      question: "How long do boneless, skinless chicken breasts stay fresh in the freezer?",
      answer: "Boneless chicken breasts preserve optimal moisture and texture for 9 months at 0°F (-18°C); because chicken breasts have virtually no intramuscular fat, they are exceptionally prone to sublimation and freezer burn if not sealed airtight."
    },
    {
      question: "How quickly can frozen chicken breasts be thawed safely using the cold water method?",
      answer: "Submerge vacuum-sealed or leakproof bags of chicken breasts in a bowl of cold tap water, changing the water every 30 minutes; individual breasts thaw in 30 to 45 minutes and must be cooked immediately afterward."
    },
    {
      question: "Does freezing tenderize tough or fibrous chicken breasts?",
      answer: "No, freezing does not tenderize poultry muscle tissue; ice crystals rupture cell walls causing fluid loss (drip loss) upon thawing, meaning frozen chicken breasts can actually dry out faster during cooking if overcooked past 165°F (74°C)."
    }
  ],
  'chicken-wings': [
    {
      question: "How long can raw chicken wings be frozen while keeping their skin crispy when cooked?",
      answer: "Raw chicken wings store well for 6 to 9 months at 0°F (-18°C); freezing past 9 months causes moisture ice crystals to damage the skin's dermal layer, making it harder to achieve blistered, crispy skin when frying or air-frying."
    },
    {
      question: "What is the best method to freeze individual chicken wings so they do not clump?",
      answer: "Arrange raw wings in a single layer on a parchment-lined baking sheet and flash-freeze for 2 to 3 hours until rock-hard, then transfer the loose wings into a heavy-duty freezer bag to pull individual portions easily."
    },
    {
      question: "Can you air-fry or bake chicken wings directly from a frozen state?",
      answer: "Yes, chicken wings can be cooked straight from frozen in an oven or air fryer by adding 5 to 10 minutes to the total cooking time and verifying an internal temperature of at least 165°F (74°C) with an instant-read thermometer."
    }
  ],
  'turkey-breast': [
    {
      question: "How long can a whole or boneless turkey breast be stored in the freezer?",
      answer: "Whole or bone-in raw turkey breasts maintain peak eating quality for 9 to 12 months at 0°F (-18°C); due to their large physical mass, vacuum-sealing is strongly recommended to prevent surface dehydration over extended storage."
    },
    {
      question: "How long does a whole frozen turkey breast take to thaw safely in the refrigerator?",
      answer: "A 4- to 8-pound frozen turkey breast requires 24 to 48 hours (approximately 24 hours per 4 to 5 pounds) to defrost fully in a refrigerator set at 38°F (3°C); never accelerate thawing with hot water, which creates surface bacterial spikes."
    },
    {
      question: "Can commercial turkey breasts pre-injected with sodium solution be frozen safely?",
      answer: "Yes, self-basting turkey breasts containing saline broth freeze exceptionally well because the added sodium and phosphates help bind water within protein fibers, reducing drip loss and textural toughness when thawed."
    }
  ],
  'duck-breast': [
    {
      question: "Why does duck breast have a shorter freezer shelf life than chicken breast?",
      answer: "Raw duck breasts maintain peak quality for only 6 months at 0°F (-18°C); unlike lean chicken, duck breast has a thick layer of unsaturated subcutaneous fat that oxidizes and turns rancid more rapidly under prolonged exposure to freezer temperatures."
    },
    {
      question: "How should frozen duck breast be thawed to ensure the fat renders properly?",
      answer: "Thaw duck breast overnight in the refrigerator, pat the skin completely dry with paper towels, and allow it to come to room temperature for 15 minutes before scoring the fat cap; pan-searing cold or damp thawed skin prevents clean fat rendering."
    },
    {
      question: "Can thawed duck breast be refrozen if kept continuously refrigerated?",
      answer: "While technically safe if defrosted below 40°F (4°C), refreezing duck breast damages the red muscle fibers and releases precious myoglobin-rich juices, resulting in a drier, chewier sear upon cooking."
    }
  ],
  'beef-steak': [
    {
      question: "How long can prime and choice beef steaks stay frozen without sacrificing tenderness?",
      answer: "Tightly vacuum-sealed beef steaks maintain exceptional tenderness, juiciness, and flavor for 6 to 12 months at 0°F (-18°C); dense intact muscle fibers and saturated beef tallow resist freeze damage far better than minced meats."
    },
    {
      question: "Can you sear a frozen beef steak directly without thawing?",
      answer: "Yes, thick-cut steaks (at least 1.5 inches) can be reverse-seared or seared directly from frozen in a screaming-hot cast iron skillet before finishing in a low oven; this minimizes the gray overcooked band while preserving a juicy medium-rare center."
    },
    {
      question: "How should beef steak be wrapped to prevent freezer burn?",
      answer: "Press plastic wrap directly against the steak surface to eliminate all oxygen contact, wrap tightly in heavy-duty aluminum foil, and insert into a freezer bag; or vacuum-seal to eliminate surface ice sublimation entirely."
    }
  ],
  'ground-beef': [
    {
      question: "Why does ground beef lose quality in the freezer faster than whole steaks?",
      answer: "Ground beef maintains prime quality for only 3 to 4 months at 0°F (-18°C); the grinding process incorporates oxygen throughout the meat mass, drastically accelerating lipid oxidation and turning the red myoglobin gray-brown over time."
    },
    {
      question: "What are the approved safe methods for thawing frozen ground beef?",
      answer: "Thaw ground beef overnight in the refrigerator, in a leakproof bag submerged in cold water for 1 hour (changing water every 30 minutes), or in the microwave on defrost mode; ground beef thawed in the microwave or cold water must be cooked immediately."
    },
    {
      question: "What is the most space-efficient and rapid-thawing way to freeze bulk ground beef?",
      answer: "Flatten 1-pound portions of ground beef inside quart-sized freezer bags with a rolling pin until 1/2-inch thick before freezing; thin slabs freeze solid within 2 hours, thaw in under 15 minutes in cold water, and stack like books in the freezer."
    }
  ],
  'pork-chop': [
    {
      question: "How long can raw pork chops be kept in the freezer before tasting stale?",
      answer: "Bone-in and boneless pork chops maintain top eating quality for 4 to 6 months at 0°F (-18°C); pork fat contains higher concentrations of polyunsaturated fatty acids than beef fat, making it slightly more susceptible to freezer rancidity over prolonged storage."
    },
    {
      question: "Should pork chops be brined before freezing or after thawing?",
      answer: "Brine pork chops after thawing; freezing pre-brined pork chops causes the dissolved salt to lower the freezing point of intracellular water, promoting larger, coarser ice crystal formation that degrades muscle texture."
    },
    {
      question: "Why should you remove pork chops from the grocery foam tray before freezing?",
      answer: "Thin plastic wrap over porous polystyrene trays allows continuous air permeability; wrap pork chops tightly in moisture-vapor-proof freezer paper or heavy aluminum foil to prevent surface desiccation and chalky white patches."
    }
  ],
  'bacon': [
    {
      question: "Why does cured bacon have a shorter recommended freezer life than fresh pork?",
      answer: "Vacuum-sealed bacon maintains quality for only 1 to 2 months in the freezer; sodium chloride (table salt) in the cure accelerates the oxidation of unsaturated fats even at subzero temperatures, causing rancid off-flavors much faster than in unsalted meats."
    },
    {
      question: "How can you freeze bacon so individual strips can be removed without thawing the whole package?",
      answer: "Roll individual bacon strips into loose spirals, freeze them upright on a baking sheet until solid, and transfer the frozen rosettes into a zip-top freezer bag to cook single rashers directly on a hot skillet whenever needed."
    },
    {
      question: "Can frozen bacon slices be cooked directly in a skillet?",
      answer: "Yes, frozen bacon strips separate quickly over low-to-medium heat in a skillet; place the frozen block or strips directly in a cold pan, heating gradually so the fat melts as the strips thaw and crisp evenly."
    }
  ],
  'sausage': [
    {
      question: "How long can raw and smoked sausages stay frozen before losing quality?",
      answer: "Raw sausage links and bulk patties retain quality for 1 to 2 months, while fully cooked or smoked sausages maintain quality for up to 2 months at 0°F (-18°C); added salts and aromatic spices catalyze fat breakdown and flavor fading during frozen storage."
    },
    {
      question: "How should fresh sausage links be thawed to prevent casings from bursting?",
      answer: "Thaw fresh sausage links slowly in the refrigerator overnight; rapid thawing in warm water or microwaves softens and tears the natural collagen or hog casings, causing them to rupture and leak juices when seared."
    },
    {
      question: "Is it safe to refreeze raw sausage that was defrosted in the refrigerator?",
      answer: "Yes, raw sausage defrosted in a refrigerator maintained below 40°F (4°C) can be refrozen within 1 to 2 days without safety risks, though you may experience slight moisture loss and texture softening from a second freeze-thaw cycle."
    }
  ],
  'hot-dogs': [
    {
      question: "How long can unopened packages of hot dogs be frozen safely?",
      answer: "Hot dogs retain peak flavor and snap for 1 to 2 months at 0°F (-18°C); because hot dogs are cured and emulsified with sodium phosphates that hold water tightly, their bouncy texture survives freezing exceptionally well compared to whole cuts."
    },
    {
      question: "Can hot dogs be boiled, steamed, or grilled straight from frozen?",
      answer: "Yes, frozen hot dogs can be dropped directly into boiling water for 5 to 6 minutes or placed over indirect grill heat for 8 to 10 minutes until heated through to a steaming 165°F (74°C) without prior defrosting."
    },
    {
      question: "What is the best way to freeze leftover hot dogs from an opened package?",
      answer: "Pat individual hot dogs dry with paper towels to eliminate surface condensation, wrap them tightly in pairs using plastic wrap or foil, and place them inside a freezer bag to prevent icy surface glazing and rubbery skins."
    }
  ],
  'deli-meat': [
    {
      question: "How long can sliced deli meats be frozen before texture suffers?",
      answer: "Unopened vacuum-sealed packs of sliced deli meat keep well for 1 to 2 months at 0°F (-18°C); after thawing, some fluid separation (syneresis) is normal due to the high moisture and thin cross-section of cold-cut slices."
    },
    {
      question: "Which types of deli meats freeze best?",
      answer: "Cured deli meats like ham, salami, and bologna freeze with far less textural damage than whole-muscle roasted cuts like sliced turkey or roast beef, which tend to become slightly wet, spongy, and fragile upon thawing."
    },
    {
      question: "What is the best way to serve deli meat that has been previously frozen?",
      answer: "Because thawing often leaves cold cuts damp and crumbly for fresh cold sandwiches, previously frozen deli meat is best repurposed into hot preparations like paninis, omelets, grilled cheese, or hot skillet melts."
    }
  ],
  'salmon': [
    {
      question: "Why does salmon have a shorter freezer shelf life than lean white fish?",
      answer: "Raw salmon fillets maintain top culinary quality for 2 to 3 months at 0°F (-18°C); salmon's high concentration of delicate omega-3 polyunsaturated fatty acids oxidizes rapidly in the presence of air, causing fishy, rancid off-notes."
    },
    {
      question: "Why must vacuum-sealed salmon be cut open before thawing?",
      answer: "Always slit open or remove commercial vacuum packaging before thawing salmon in the refrigerator; thawing in an airtight anaerobic package at 38°F–40°F creates a hazardous breeding ground for non-proteolytic Clostridium botulinum type E spores."
    },
    {
      question: "Can you bake or air-fry a salmon fillet straight from the freezer?",
      answer: "Yes, rinse any surface frost under cold water, pat dry, brush with oil, and bake at 425°F (220°C) for 15 to 18 minutes; cooking from frozen prevents overcooking the delicate center and preserves moist, flaky albumin."
    }
  ],
  'tuna-steak': [
    {
      question: "What is the primary safety concern when thawing frozen tuna steaks?",
      answer: "Thaw tuna steaks strictly under refrigeration below 38°F (3°C); temperature abuse during thawing allows spoilage bacteria to convert free histidine in the dark muscle into histamine, causing acute scombroid poisoning that cannot be destroyed by subsequent cooking."
    },
    {
      question: "Why does frozen tuna steak turn from ruby red to dull brown in the freezer?",
      answer: "Freezing oxidizes bright red oxymyoglobin into dull brownish metmyoglobin over 2 to 3 months; while cosmetically altered and less appealing for raw sashimi, the tuna remains safe to consume when cooked through."
    },
    {
      question: "Should vacuum-sealed tuna steaks be removed from packaging before thawing?",
      answer: "Yes, remove tuna steaks from their vacuum-sealed plastic pouches before thawing in the refrigerator to allow oxygen circulation, eliminating the risk of anaerobic Clostridium botulinum growth during the defrosting cycle."
    }
  ],
  'shrimp': [
    {
      question: "How long can raw frozen shrimp be stored before quality declines?",
      answer: "Commercial raw shrimp protected by a frozen water glaze maintains excellent sweet flavor and snap for 6 to 12 months at 0°F (-18°C); unglazed or poorly wrapped shrimp dehydrates rapidly, turning white, tough, and fibrous."
    },
    {
      question: "How do you thaw frozen shrimp quickly without making them mushy?",
      answer: "Place frozen shrimp in a colander set inside a bowl of cold tap water for 10 to 15 minutes, gently stirring occasionally until pliable; drain immediately and pat dry with paper towels; never thaw shrimp under warm water, which par-cooks the delicate exterior."
    },
    {
      question: "Is it better to freeze shrimp with the shell on or peeled?",
      answer: "Shell-on shrimp withstands freezing significantly better than peeled shrimp because the chitinous exoskeleton forms a natural physical barrier that shields delicate surface flesh from dry freezer air and freezer burn."
    }
  ],
  'lobster-tail': [
    {
      question: "Why must raw lobster tails be blanched or frozen rapidly after harvest?",
      answer: "Raw frozen lobster tails keep for 6 to 9 months at 0°F (-18°C); freezing must occur immediately after harvesting because proteolytic enzymes naturally present inside raw lobster shells rapidly degrade the meat, turning it into unpalatable mush upon thawing if left unmanaged."
    },
    {
      question: "What is the proper procedure for thawing frozen lobster tails before cooking?",
      answer: "Thaw lobster tails in the refrigerator for 12 to 24 hours on a plate covered with plastic wrap; thawing slowly in cold temperatures ensures the meat separates cleanly from the inner shell wall without tearing when butterflied."
    },
    {
      question: "Can you boil or steam lobster tails directly from the freezer?",
      answer: "Never cook lobster tails directly from frozen; the outer flesh near the shell will become tough, rubbery, and overcooked before the thick, dense center thaws and cooks to a safe 140°F–145°F (60°C–63°C)."
    }
  ],
  'crab-legs': [
    {
      question: "Are frozen crab legs from the supermarket raw or cooked, and how long do they last?",
      answer: "Nearly all frozen supermarket crab legs are pre-cooked immediately after catch and glazed in ice; they retain sweet ocean flavor and tender texture for 6 to 9 months at 0°F (-18°C) if kept sealed in airtight plastic bags."
    },
    {
      question: "What is the best method to reheat frozen crab legs without thawing?",
      answer: "Place frozen crab legs directly into a steamer basket over boiling water, cover tightly with a lid, and steam for 6 to 8 minutes; since they are already cooked, steaming straight from frozen gently warms the meat without drying it out."
    },
    {
      question: "How should crab legs be thawed if you prefer cold crab salad or grilling?",
      answer: "Place frozen crab legs in a large shallow dish covered with plastic wrap and defrost in the refrigerator for 12 to 16 hours; drain any melted glaze promptly so the crab meat does not sit in standing water and become soggy."
    }
  ]
};

let count = 0;
items.forEach(item => {
  if (item.appliance === 'freezer' && cat4Faqs[item.slug]) {
    item.faqs = cat4Faqs[item.slug];
    count++;
    console.log(`Updated FAQs for [${item.slug}] (${item.faqs.length} FAQs)`);
  }
});

console.log(`\nUpdated ${count} items.`);
fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2) + '\n', 'utf8');
console.log('Saved src/data/items.json successfully.');
