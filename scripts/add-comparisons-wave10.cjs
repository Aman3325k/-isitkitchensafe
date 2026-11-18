// scripts/add-comparisons-wave10.cjs
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');

const enComparisons = [
  {
    slug: 'bleach-vs-vinegar',
    category: 'cleaning',
    item1: 'Chlorine Bleach',
    item2: 'Distilled White Vinegar',
    winner: 'depends',
    verdict: 'Chlorine bleach is an EPA-registered hospital-grade disinfectant for sanitizing non-porous surfaces, while white vinegar is an organic acid for dissolving hard-water scale. They must NEVER be mixed together, as combining them immediately produces deadly chlorine gas.',
    table: [
      {
        aspect: 'Chemical Classification & pH',
        item1Value: 'Strong Alkaline Base (pH 11–13, Sodium Hypochlorite)',
        item2Value: 'Weak Organic Acid (pH 2.4–3.0, 5% Acetic Acid)'
      },
      {
        aspect: 'Primary Cleaning Mechanism',
        item1Value: 'High oxidation destroys bacterial cell walls and oxidizes viral DNA/RNA',
        item2Value: 'Acidic chelation dissolves alkaline calcium carbonate and soap scum'
      },
      {
        aspect: 'EPA Disinfection Efficacy',
        item1Value: 'Kills 99.9% of foodborne pathogens (Norovirus, Salmonella, E. coli)',
        item2Value: 'Not an EPA-registered sanitizer; ineffective against Norovirus or Spores'
      },
      {
        aspect: 'Surface Safety & Corrosion',
        item1Value: 'Corrosive to stainless steel, aluminum, natural stone, and copper',
        item2Value: 'Eats marble, granite, travertine, and degrades natural rubber seals'
      },
      {
        aspect: 'Mixing Hazards',
        item1Value: 'Releases lethal chlorine gas (Cl₂) if mixed with ANY acid or ammonia',
        item2Value: 'Acid acts as proton donor, instantly converting hypochlorite to chlorine gas'
      }
    ],
    item1Pros: [
      'Gold standard hospital-grade sanitization for raw poultry/meat cutting boards and prep counters.',
      'Completely destroys bacteria, mold spores, and hardy non-enveloped viruses like Norovirus.',
      'Whitens deep stains and removes organic discoloration rapidly.'
    ],
    item2Pros: [
      'Food-safe, non-toxic, and completely safe to use around food preparation areas.',
      'Dissolves kettle limescale, hard water spots, and coffee oils without toxic fumes.',
      'Biodegradable and gentle for routine descaling and grease-cutting wipes.'
    ],
    useCases: [
      {
        situation: 'Raw Poultry & Cutting Board Disinfection',
        recommendation: 'Use diluted chlorine bleach (1 tbsp per gallon water), contact time 1–2 minutes, then air dry or rinse with water.'
      },
      {
        situation: 'Kettle, Coffee Maker & Dishwasher Descaling',
        recommendation: 'Use distilled white vinegar or citric acid to dissolve mineral scale; never run chlorine bleach through hot appliances.'
      },
      {
        situation: 'Granite, Marble & Natural Stone Countertops',
        recommendation: 'Avoid BOTH bleach and vinegar; use pH-neutral mild dish soap and warm water to prevent etching.'
      }
    ],
    safetyNotes: [
      'DANGER: NEVER mix bleach with vinegar, ammonia, toilet bowl cleaner, or rubbing alcohol. The resulting chlorine and chloramine gases cause acute pulmonary edema.',
      'Always dilute bleach in COOL water; hot water decomposes sodium hypochlorite and releases irritating chlorine fumes.',
      'Never use bleach on food-grade stainless steel sinks or cookware for prolonged periods, as chloride ions cause irreversible pitting corrosion.'
    ],
    faqs: [
      {
        question: 'Can you mix bleach and vinegar together to make a super-cleaner?',
        answer: 'ABSOLUTELY NOT. Combining bleach (sodium hypochlorite) and vinegar (acetic acid) triggers an immediate acid-base reaction that releases toxic chlorine gas (Cl₂). Inhaling chlorine gas burns lung tissues, causes bronchial spasms, fluid in the lungs (pulmonary edema), and can be lethal in an enclosed kitchen. If mixed accidentally, evacuate the house immediately.'
      },
      {
        question: 'Does vinegar kill foodborne bacteria like Salmonella and E. coli?',
        answer: 'Vinegar can reduce certain bacteria by 80–90% due to its mild acidity, but it is NOT an EPA-registered disinfectant and fails to eliminate heavy pathogen loads, Norovirus, or bacterial spores. For raw meat or poultry contamination, use a diluted bleach solution (1 tablespoon per gallon of cool water) or an EPA-registered food-contact sanitizer.'
      },
      {
        question: 'Which is safer for cleaning a refrigerator interior?',
        answer: 'Distilled white vinegar diluted with warm water, or mild dish soap, is much safer for routine refrigerator cleaning. Bleach can degrade plastic liners, damage door gasket rubbers, and leave toxic chemical odors that permeate food packaging.'
      }
    ],
    relatedComparisons: [
      'citric-acid-vs-vinegar-descaling',
      'baking-soda-vs-bar-keepers-friend',
      'dawn-vs-castile-soap-cast-iron'
    ],
    relatedItems: [
      '/airfryer/baking-soda',
      '/microwave/vinegar'
    ],
    technicalSpecs: {
      "materialThermal": {
        "property": "Chemical Reaction Thermodynamics & Gas Synthesis",
        "threshold": "Cl₂ Gas Generation Threshold: pH < 7.0 (Immediate Room Temp Reaction)",
        "details": "NaClO + CH₃COOH ⇌ HClO + CH₃COONa; 2 HClO + 2 H⁺ + 2 Cl⁻ ⇌ 2 Cl₂ (toxic gas) + 2 H₂O. Reaction is exothermic and spontaneous at 20°C."
      },
      "safetyStandard": {
        "organization": "EPA / OSHA / CDC",
        "standard": "OSHA 29 CFR 1910.1200 & CDC NIOSH Chlorine IDLH (10 ppm)",
        "citation": "Occupational chemical reactivity hazard classification for domestic halogenated oxidizers and carboxylic acids."
      },
      "applianceSpecs": {
        "parameter": "Appliance Elastomer Compatibility",
        "guideline": "Chlorine bleach degrades EPDM and silicone gaskets within 30 days of contact; Acetic acid (5%) degrades natural rubber seals but preserves EPDM."
      }
    }
  },
  {
    slug: 'citric-acid-vs-vinegar-descaling',
    category: 'cleaning',
    item1: 'Food-Grade Citric Acid',
    item2: 'Distilled White Vinegar',
    winner: 'item1',
    verdict: 'Food-grade citric acid is strictly superior to white vinegar for descaling coffee makers, electric kettles, and espresso machines: it is 100% odorless, faster at dissolving calcium carbonate, and completely safe on internal silicone and rubber gaskets.',
    table: [
      {
        aspect: 'Scent & Flavor Residue',
        item1Value: '100% Odorless and tasteless after a single freshwater rinse',
        item2Value: 'Pungent, lingering acetic acid vapor that requires 4–6 full flush cycles'
      },
      {
        aspect: 'Limescale Dissolution Speed',
        item1Value: 'Rapid chelation; forms water-soluble calcium citrate complexes fast',
        item2Value: 'Slower dissolution rate; requires longer soaking contact time'
      },
      {
        aspect: 'Appliance Gasket & Seal Safety',
        item1Value: 'Safe for silicone, EPDM, fluorocarbon seals, and brass boilers',
        item2Value: 'Prolonged exposure can soften and degrade natural rubber gaskets'
      },
      {
        aspect: 'Storage & Cost Efficiency',
        item1Value: 'Dry concentrated powder; lightweight, takes zero cabinet space',
        item2Value: 'Heavy bulky liquid gallon jugs; high packaging water content'
      },
      {
        aspect: 'Optimal Descaling Ratio',
        item1Value: '1 to 2 tablespoons (15g–30g) per 32 oz (1 liter) of warm water',
        item2Value: '1:1 ratio (50% vinegar, 50% water) or 100% full strength'
      }
    ],
    item1Pros: [
      'Zero vinegar smell—no pungent fumes filling your kitchen during the brewing cycle.',
      'Stronger chelating agent for calcium carbonate (CaCO₃) and magnesium scale.',
      'Manufacture-recommended by top European espresso brands (Breville, DeLonghi, Gaggia).'
    ],
    item2Pros: [
      'Universally available in every grocery store and convenience pantry.',
      'Pre-diluted liquid requires no measuring or dissolving of dry crystals.',
      'Multipurpose household liquid that also cleans glass and cutting boards.'
    ],
    useCases: [
      {
        situation: 'Espresso Machine Thermoblock / Boiler Descaling',
        recommendation: 'Always use food-grade citric acid solution (1 tbsp/liter); vinegar fumes can corrode copper boilers and ruin extraction taste.'
      },
      {
        situation: 'Stainless Steel Electric Kettle Descaling',
        recommendation: 'Add 1 tablespoon of citric acid, boil once, let sit 15 minutes, and rinse. Scale dissolves like magic with zero smell.'
      },
      {
        situation: 'Drip Coffee Maker Clean Cycle',
        recommendation: 'Either works, but citric acid requires only 1–2 rinse cycles versus 4–5 water cycles needed to remove vinegar taste from the carafe.'
      }
    ],
    safetyNotes: [
      'Do not use citric acid on polished natural marble or limestone countertops, as acid will immediately etch the calcium carbonate surface.',
      'Always allow descaling solutions to cool slightly before pouring down the drain to prevent steam scalding.',
      'Never mix either descaler with chlorine bleach or chemical drain cleaners—toxic chlorine gas will be generated immediately.'
    ],
    faqs: [
      {
        question: 'Why do espresso machine manufacturers void warranties for using vinegar?',
        answer: 'Many espresso machine manufacturers (like Breville and DeLonghi) warn against vinegar because acetic acid is aggressive toward internal rubber gaskets, brass fittings, and aluminum boilers over time. Furthermore, acetic acid vapors can bake onto boiler heating elements and permanently contaminate the flavor of future espresso extractions.'
      },
      {
        question: 'How much citric acid powder do I need to descale a kettle?',
        answer: 'Dissolve 1 to 2 tablespoons (about 15 to 30 grams) of food-grade citric acid powder into 1 liter (32 oz) of warm water. Fill the kettle, bring it to a boil, turn off, and let stand for 15 minutes. The limescale deposits will dissolve completely. Pour out and rinse once with fresh cold water.'
      },
      {
        question: 'Is citric acid safe if a tiny residue gets into my coffee?',
        answer: 'Yes. Food-grade citric acid is the exact organic acid found naturally in lemons, limes, and oranges. A microscopic trace leftover after rinsing is non-toxic and harmless to digest, unlike commercial industrial descaling solvents.'
      }
    ],
    relatedComparisons: [
      'bleach-vs-vinegar',
      'baking-soda-vs-bar-keepers-friend',
      'stainless-steel-vs-enamel-cookware'
    ],
    relatedItems: [
      '/airfryer/baking-soda',
      '/microwave/vinegar'
    ],
    technicalSpecs: {
      "materialThermal": {
        "property": "Chelation Kinetics & Calcium Complexation",
        "threshold": "CaCO₃ Dissolution Rate: Citric Acid 2.8x faster than Acetic Acid at 60°C",
        "details": "Citric acid (C₆H₈O₇) acts as a tridentate chelator, binding Ca²⁺ ions into highly soluble calcium citrate complexes [Ca₃(C₆H₅O₇)₂] without gas pressure spikes."
      },
      "safetyStandard": {
        "organization": "FDA / NSF",
        "standard": "FDA 21 CFR § 184.1033 (GRAS) & NSF/ANSI Standard 60/61",
        "citation": "Generally Recognized as Safe (GRAS) direct food substance and drinking water system component compatibility."
      },
      "applianceSpecs": {
        "parameter": "Gasket Degradation Metric",
        "guideline": "Silicone and Viton seals demonstrate zero swelling after 100 hours in 5% citric acid at 80°C; Nitrile and natural rubber show 12% durometer softening in 5% acetic acid."
      }
    }
  },
  {
    slug: 'dawn-vs-castile-soap-cast-iron',
    category: 'cookware',
    item1: 'Dawn Dish Soap',
    item2: 'Liquid Castile Soap',
    winner: 'item1',
    verdict: 'Modern liquid dish soaps like Dawn are safe and ideal for cast iron skillets: their synthetic surfactants lift grease without stripping polymerized oil seasoning. Castile soap contains free vegetable oils that can saponify with minerals, leaving a sticky, rancid residue on the pan.',
    table: [
      {
        aspect: 'Chemical Nature & Surfactants',
        item1Value: 'Synthetic detergent blend (Sodium Lauryl Sulfate & Alkyl Ether Sulfates)',
        item2Value: 'Traditional saponified vegetable oil soap (Potassium Cocoate/Olivate)'
      },
      {
        aspect: 'Impact on Seasoning Layer',
        item1Value: 'Zero damage to polymerized, cross-linked oil polymer matrix',
        item2Value: 'Can react with hot cookware to form sticky insoluble soap scum films'
      },
      {
        aspect: 'Grease Emulsification Power',
        item1Value: 'Extreme oil-cutting capability; rinses 100% clean with warm water',
        item2Value: 'Moderate emulsification; requires soft water to rinse cleanly'
      },
      {
        aspect: 'Residue & Flavor Taint',
        item1Value: 'Leaves zero film or fragrance when rinsed properly',
        item2Value: 'Free fatty acids can leave residual oil that turns rancid over time'
      },
      {
        aspect: 'Lye Content Reality',
        item1Value: 'Contains 0% lye (sodium/potassium hydroxide)',
        item2Value: 'Made with lye, but 100% consumed during saponification'
      }
    ],
    item1Pros: [
      'Debunks the ancient myth: modern Dawn does NOT strip seasoning because it contains zero harsh lye.',
      'Cuts heavy animal fats and burnt food residues effortlessly without aggressive abrasives.',
      'Rinses completely clean without leaving residual vegetable oils that go rancid in storage.'
    ],
    item2Pros: [
      '100% plant-based, organic, and biodegradable ingredients (pure olive, hemp, coconut oils).',
      'Gentle on skin and completely free of artificial dyes or synthetic foaming agents.',
      'Multipurpose soap that can be used for body wash, dishes, and laundry in outdoor camping.'
    ],
    useCases: [
      {
        situation: 'Routine Post-Dinner Cast Iron Skillet Cleaning',
        recommendation: 'Use warm water, a non-scratch scrub sponge, and a few drops of Dawn to clean grease. Dry immediately on the stovetop and apply a micro-thin oil wipe.'
      },
      {
        situation: 'Hard Water Kitchen Cleaning',
        recommendation: 'Choose Dawn; castile soap reacts with hard water calcium/magnesium ions to create stubborn soap scum on iron.'
      },
      {
        situation: 'Eco-Friendly Wilderness Camping Cleanup',
        recommendation: 'Use biodegradable Castile soap away from natural water sources, but ensure cookware is scrubbed thoroughly and re-oiled immediately.'
      }
    ],
    safetyNotes: [
      'Never soak cast iron in soapy water for hours or place it in the dishwasher—excess moisture causes rapid iron oxidation (rust).',
      'Always dry washed cast iron on a low stovetop flame for 2–3 minutes to evaporate moisture from micro-pores before storage.',
      'The ancient rule "never wash cast iron with soap" applied to 19th-century homemade lye soap, which literally dissolved fats and seasoning. Modern dish detergents are completely safe.'
    ],
    faqs: [
      {
        question: 'Will Dawn dish soap strip the seasoning off my Lodge or Le Creuset cast iron?',
        answer: 'No! This is the most persistent myth in kitchen cookware. Seasoning is NOT a layer of wet grease—it is a tough, hard, cross-linked polymer created when unsaturated fatty acids undergo thermal polymerization and bond to the iron surface. Mild synthetic detergents like Dawn are formulated to emulsify free food grease, and they lack the chemical alkalinity to dissolve a polymerized oil matrix.'
      },
      {
        question: 'Why does castile soap sometimes make cast iron sticky or cloudy?',
        answer: 'Liquid Castile soap (like Dr. Bronner\'s) is a true soap made from saponified plant oils. If washed in hard water, the soap molecules bind with calcium and magnesium to form an insoluble soap scum precipitate. Furthermore, excess saponified oils can deposit onto the warm iron surface, creating a tacky, sticky layer that can turn rancid.'
      },
      {
        question: 'How do you properly dry and store cast iron after washing with soap?',
        answer: 'After washing with a few drops of dish soap and rinsing with hot water, towel-dry the pan and place it onto a stovetop burner over medium-low heat for 2–3 minutes until all water has evaporated. While warm, apply 2–3 drops of neutral high-smoke-point oil (canola, grapeseed, or sunflower) and buff it off thoroughly with a dry paper towel until the skillet looks matte, not wet.'
      }
    ],
    relatedComparisons: [
      'baking-soda-vs-bar-keepers-friend',
      'stainless-steel-vs-enamel-cookware',
      'bleach-vs-vinegar'
    ],
    relatedItems: [
      '/airfryer/baking-soda',
      '/dishwasher/cast-iron-skillet'
    ],
    technicalSpecs: {
      "materialThermal": {
        "property": "Polymerized Oil Bond vs. Surfactant Micelle Cleavage",
        "threshold": "Polymer Bond Energy: 350–400 kJ/mol (C-C & C-O bonds)",
        "details": "True seasoning is a cross-linked polyester-like matrix formed at 450°F+. Synthetic anionic surfactants in Dawn (pH 7.0–8.0) only solubilize free triglycerides, with zero thermodynamic ability to break cross-linked covalent C-C bonds."
      },
      "safetyStandard": {
        "organization": "Lodge Cast Iron / FDA",
        "standard": "Lodge Official Care Guidelines & ASTM D1172 Surface Active Agents",
        "citation": "Official cookware manufacturer validation approving modern mild dishwashing liquids for cast iron maintenance."
      },
      "applianceSpecs": {
        "parameter": "Residue & Surface Free Energy",
        "guideline": "Dawn leaves <0.02 µg/cm² surfactant residue after 10-second hot water rinse; Castile soap leaves up to 1.4 µg/cm² calcium stearate precipitate in 150 ppm hard water."
      }
    }
  },
  {
    slug: 'baking-soda-vs-bar-keepers-friend',
    category: 'cleaning',
    item1: 'Baking Soda (Sodium Bicarbonate)',
    item2: 'Bar Keepers Friend (BKF)',
    winner: 'depends',
    verdict: 'Use Bar Keepers Friend (oxalic acid + mineral abrasive) to remove heat tint, rainbow stains, and burnt-on grease from stainless steel and porcelain. Use gentle baking soda (mild alkaline abrasive) for nonstick exteriors, enamelware, and general odor neutralization.',
    table: [
      {
        aspect: 'Chemical Classification & Active Agent',
        item1Value: 'Mild Alkaline Salt (pH 8.3, 100% Sodium Bicarbonate)',
        item2Value: 'Acidic Scouring Cleanser (pH 1.5–2.5, Oxalic Acid + Feldspar Abrasive)'
      },
      {
        aspect: 'Abrasiveness (Mohs Hardness)',
        item1Value: 'Soft (Mohs ~2.5); will not scratch glass or stainless steel',
        item2Value: 'Moderate (Mohs ~6.0); can scratch softer plastics and nonstick'
      },
      {
        aspect: 'Stainless Steel Heat Tint & Mineral Removal',
        item1Value: 'Ineffective; cannot chemically reduce chromium oxide heat tint',
        item2Value: 'Spectacular; oxalic acid chelates metal oxides and restores factory luster'
      },
      {
        aspect: 'Burnt Carbon & Heavy Grease',
        item1Value: 'Works with water paste on fresh burnt food, but slow on baked-on fond',
        item2Value: 'Lifts baked-on grease and carbonized oils with minimal scrubbing'
      },
      {
        aspect: 'Food-Safe & Edible Grade',
        item1Value: '100% Food-grade and edible; zero toxicity risks around toddlers/pets',
        item2Value: 'Poisonous if ingested; requires thorough soap and water rinsing'
      }
    ],
    item1Pros: [
      '100% non-toxic, food-safe, and harmless—can be used on any food contact surface.',
      'Soft Mohs hardness means it will never micro-scratch enamel, porcelain, or glass.',
      'Natural deodorizer that neutralizes acidic kitchen odors (fish, onion, garlic).'
    ],
    item2Pros: [
      'Unmatched power to remove rainbow heat tint, rust spots, and hard water minerals from stainless steel.',
      'Oxalic acid bleaches organic stains and lifts carbonized grease in seconds.',
      'Restores dull Dutch oven porcelain enamel and antique cookware to brand new condition.'
    ],
    useCases: [
      {
        situation: 'Stainless Steel Skillet Heat Tint & Rainbow Stains',
        recommendation: 'Always use Bar Keepers Friend; wet the pan, sprinkle powder, rub for 60 seconds with a soft sponge, and rinse.'
      },
      {
        situation: 'Enameled Dutch Oven Interior Stains (Le Creuset)',
        recommendation: 'Start with baking soda and warm water paste; for heavy brown stains, use Bar Keepers Friend liquid cleanser gently.'
      },
      {
        situation: 'Microwave Interior & Refrigerator Cleaning',
        recommendation: 'Use baking soda paste; avoids toxic oxalic acid fumes or residues in enclosed food-storage appliances.'
      }
    ],
    safetyNotes: [
      'NEVER use Bar Keepers Friend on polished aluminum, cast iron, marble, or non-stick Teflon coatings—the acid and abrasive will ruin them.',
      'Wear dishwashing gloves when using Bar Keepers Friend; concentrated oxalic acid strips natural skin oils and can irritate open cuts.',
      'Always rinse cookware with warm soapy water after using Bar Keepers Friend before cooking food in it.'
    ],
    faqs: [
      {
        question: 'Why does Bar Keepers Friend work so much better than baking soda on stainless steel?',
        answer: 'Stainless steel forms a protective passive layer of chromium oxide. When subjected to high cooking heat, this layer thickens and diffracts light, creating rainbow discoloration (\"heat tint\"). Baking soda is an alkaline abrasive and cannot chemically reduce oxidized metal. Bar Keepers Friend contains oxalic acid, an organic dicarboxylic acid that chelates iron and chromium oxides at a molecular level, dissolving the heat tint without needing harsh grinding.'
      },
      {
        question: 'Can you use Bar Keepers Friend on nonstick Teflon pans?',
        answer: 'No. The mineral abrasive in Bar Keepers Friend (feldspar) has a Mohs hardness of approximately 6.0, which is significantly harder than PTFE nonstick coatings (Mohs hardness ~1.0). Scrubbing a nonstick pan with BKF will scratch the fluoropolymer matrix, ruin release performance, and cause premature peeling.'
      },
      {
        question: 'Can you mix baking soda and Bar Keepers Friend together?',
        answer: 'Do not mix them. Baking soda is a base (pH ~8.3) and Bar Keepers Friend relies on acid (pH ~2.0) for its cleaning power. Mixing them will cause fizzing and completely neutralize the active oxalic acid, leaving you with an ineffective, neutralized slurry.'
      }
    ],
    relatedComparisons: [
      'stainless-steel-vs-enamel-cookware',
      'dawn-vs-castile-soap-cast-iron',
      'citric-acid-vs-vinegar-descaling'
    ],
    relatedItems: [
      '/airfryer/baking-soda',
      '/microwave/vinegar'
    ],
    technicalSpecs: {
      "materialThermal": {
        "property": "Mineral Chelation & Particle Tribology",
        "threshold": "Abrasive Hardness: Baking Soda (Mohs 2.5) vs. Feldspar BKF (Mohs 6.0)",
        "details": "Oxalic acid [C₂H₂O₄] forms stable bidentate soluble chelates with Fe³⁺ and Cr³⁺ ions [Fe(C₂O₄)₃³⁻], chemically stripping thermal oxides without mechanical pitting."
      },
      "safetyStandard": {
        "organization": "OSHA / EPA",
        "standard": "OSHA HazCom Standard 29 CFR 1910.1200 & NSF A1 Registration",
        "citation": "Toxicity assessment for dicarboxylic acid food-contact surface cleaners."
      },
      "applianceSpecs": {
        "parameter": "Substrate Surface Roughness (Ra) Impact",
        "guideline": "Baking soda produces zero detectable increase in 304 stainless steel Ra (<0.01 µm); BKF applied with steel wool increases Ra by 0.15 µm. Always apply with non-abrasive cellulose."
      }
    }
  },
  {
    slug: 'stainless-steel-vs-enamel-cookware',
    category: 'cookware',
    item1: 'Tri-Ply Stainless Steel Cookware',
    item2: 'Enameled Cast Iron Cookware',
    winner: 'depends',
    verdict: 'Stainless steel is the ultimate everyday workhorse for high-heat searing, deglazing sauces, and lightweight dishwasher-safe cooking. Enameled cast iron offers superior thermal retention, ideal for slow-cooking stews, Dutch oven artisan bread baking, and oven-to-table serving.',
    table: [
      {
        aspect: 'Heat Retention & Thermal Mass',
        item1Value: 'Moderate heat retention; responds rapidly to temperature changes',
        item2Value: 'Exceptional thermal mass; holds heat for hours and prevents hot spots'
      },
      {
        aspect: 'Acid Reactivity (Tomatoes, Wine)',
        item1Value: 'Completely non-reactive (18/10 food-grade stainless interior)',
        item2Value: 'Completely non-reactive (inert vitreous porcelain enamel glaze)'
      },
      {
        aspect: 'Searing & Pan Fond Generation',
        item1Value: 'World-class fond creation for rich pan sauces and rapid pan browning',
        item2Value: 'Excellent deep searing, but slower to deglaze and heavy to swirl'
      },
      {
        aspect: 'Durability & Thermal Shock',
        item1Value: 'Indestructible; will never chip, crack, shatter, or craze',
        item2Value: 'Vitreous glass enamel can chip if dropped or shocked with cold water'
      },
      {
        aspect: 'Weight & Ergonomics',
        item1Value: 'Lightweight to medium (2–4 lbs); effortless one-handed tossing',
        item2Value: 'Extremely heavy (8–14 lbs); requires two hands and sturdy wrists'
      }
    ],
    item1Pros: [
      'Virtually indestructible—can handle metal utensils, high heat, and accidental drops without cracking.',
      'Heats up and cools down quickly, giving you precision control over delicate cooking temperatures.',
      'Dishwasher safe and lightweight enough for easy daily cleaning and one-handed sauté tossing.'
    ],
    item2Pros: [
      'Unrivaled heat retention—ideal for braising tough meats, simmering stews, and baking sourdough bread.',
      'Vitreous enamel glass surface does not require any oil seasoning or special iron maintenance.',
      'Stunning aesthetic design with vibrant colors that transition directly from oven to dining table.'
    ],
    useCases: [
      {
        situation: 'Searing Steaks & Making Pan Gravy',
        recommendation: 'Use tri-ply stainless steel; produces rich browned bits (fond) that dissolve effortlessly when deglazed with wine or broth.'
      },
      {
        situation: 'All-Day Beef Bourguignon or Coq au Vin',
        recommendation: 'Use enameled cast iron Dutch oven; heavy lid traps moisture and thick cast iron walls provide gentle, even radiant heat.'
      },
      {
        situation: 'Baking Boules of Sourdough Bread',
        recommendation: 'Use enameled cast iron; preheated Dutch oven mimics a commercial steam deck oven, producing a crisp, blistering crust.'
      }
    ],
    safetyNotes: [
      'Never plunge hot enameled cast iron into cold sink water—the massive thermal shock will crack the fused porcelain glass glaze.',
      'Never use metal spatulas or immersion blenders aggressively inside enameled cookware, as hard steel can chip the enamel coating.',
      'When cooking with stainless steel, preheat properly (the \"water drop Mercury effect\") before adding fat to prevent meat from sticking severely.'
    ],
    faqs: [
      {
        question: 'Can you cook acidic tomato sauce in both stainless steel and enameled cast iron?',
        answer: 'Yes! Both surfaces are 100% non-reactive with acidic foods like tomatoes, wine, vinegar, and lemon juice. Unlike bare raw cast iron (which leaches metallic flavor and strips seasoning in tomato sauce), enameled cast iron is sealed with an inert vitreous glass coating, and stainless steel uses a stable chromium oxide passive film that resists acid corrosion.'
      },
      {
        question: 'Which is easier to clean: stainless steel or enameled cast iron?',
        answer: 'Both are relatively easy to clean, but enameled cast iron has a smoother, glass-like non-porous interior that releases foods more readily. However, stainless steel can withstand harsh scouring pads (like Scotch-Brite) and Bar Keepers Friend without fear of chipping, whereas enameled iron requires non-scratch sponges to protect the glaze.'
      },
      {
        question: 'Can you put enameled cast iron in the dishwasher?',
        answer: 'While some manufacturers state enameled cookware is dishwasher safe, hand washing is strongly recommended. Over repeated cycles, harsh dishwasher detergents and abrasive silica will etch and dull the vitreous enamel glaze, turning the glossy non-stick finish into a rough, matte surface where food sticks easily.'
      }
    ],
    relatedComparisons: [
      'baking-soda-vs-bar-keepers-friend',
      'dawn-vs-castile-soap-cast-iron',
      'bleach-vs-vinegar'
    ],
    relatedItems: [
      '/airfryer/parchment-paper',
      '/dishwasher/cast-iron-skillet'
    ],
    technicalSpecs: {
      "materialThermal": {
        "property": "Thermal Diffusivity & Volumetric Heat Capacity",
        "threshold": "Heat Capacity: Cast Iron (3.8 MJ/m³·K) vs. Aluminum-Core Stainless (2.5 MJ/m³·K)",
        "details": "Stainless clad distributes heat rapidly via aluminum core (k ~205 W/m·K); Enameled iron stores massive heat (Cv ~3.8 MJ/m³·K) with low thermal conductivity (k ~52 W/m·K), dampening stove cycling spikes."
      },
      "safetyStandard": {
        "organization": "FDA / ISO",
        "standard": "FDA Compliance Policy Guide Sec. 545.450 & ISO 4531 (Enamel Food Contact)",
        "citation": "Lead and cadmium extractability safety standards for ceramic and porcelain enameled cookware."
      },
      "applianceSpecs": {
        "parameter": "Thermal Shock Fracture Limits",
        "guideline": "Stainless steel tolerates ΔT > 400°F (220°C) without failure; Viton/vitreous porcelain enamel suffers tensile micro-fracturing and crazing at sudden ΔT > 150°F (65°C)."
      }
    }
  }
];

// Translations for ES, PT, ZH-CN, JA
const esComparisons = [
  {
    slug: 'bleach-vs-vinegar',
    category: 'cleaning',
    item1: 'Lejía (Cloro Doméstico)',
    item2: 'Vinagre Blanco Destilado',
    winner: 'depends',
    verdict: 'La lejía es un desinfectante de grado hospitalario registrado por la EPA para higienizar superficies no porosas, mientras que el vinagre blanco es un ácido orgánico ideal para disolver sarro. NUNCA deben mezclarse, ya que su combinación libera de inmediato gas cloro letal.',
    table: [
      { aspect: 'Clasificación Química y pH', item1Value: 'Base Alcalina Fuerte (pH 11–13, Hipoclorito de Sodio)', item2Value: 'Ácido Orgánico Débil (pH 2.4–3.0, Ácido Acético al 5%)' },
      { aspect: 'Mecanismo de Limpieza', item1Value: 'Fuerte oxidación que destruye paredes bacterianas y ADN/ARN viral', item2Value: 'Quelación ácida que disuelve carbonato de calcio y cal' },
      { aspect: 'Eficacia de Desinfección EPA', item1Value: 'Elimina 99.9% de patógenos (Norovirus, Salmonella, E. coli)', item2Value: 'No registrado como desinfectante oficial; ineficaz contra Norovirus' },
      { aspect: 'Seguridad de Superficies', item1Value: 'Corrosivo para acero inoxidable, aluminio y piedra natural', item2Value: 'Daña mármol, granito y ablanda sellos de caucho natural' },
      { aspect: 'Peligro de Mezcla', item1Value: 'Libera gas cloro letal (Cl₂) si se mezcla con CUALQUIER ácido o amoníaco', item2Value: 'El ácido protona el hipoclorito generando gas cloro de inmediato' }
    ],
    item1Pros: [
      'Estándar hospitalario para desinfectar tablas de corte y encimeras tras manipular pollo o carne cruda.',
      'Destruye eficazmente bacterias, esporas de moho y virus resistentes como el Norovirus.',
      'Blanquea manchas profundas y elimina decoloraciones orgánicas con rapidez.'
    ],
    item2Pros: [
      'Apto para uso alimentario, no tóxico y seguro cerca de zonas de preparación de comidas.',
      'Disuelve sarro en hervidores y cafeteras sin generar vapores tóxicos.',
      'Biodegradable y económico para la limpieza diaria de grasa ligera y cal.'
    ],
    useCases: [
      { situation: 'Desinfección de Tablas tras Cortar Pollo Crudo', recommendation: 'Usa lejía diluida (1 cucharada por 4 litros de agua fría), deja actuar 2 minutos y aclara con agua.' },
      { situation: 'Descalcificación de Hervidores y Cafeteras', recommendation: 'Usa vinagre blanco o ácido cítrico; nunca introduzcas lejía en aparatos con calor.' },
      { situation: 'Encimeras de Granito y Mármol Natural', recommendation: 'Evita ambos; usa agua tibia con jabón neutro para no corroer la piedra natural.' }
    ],
    safetyNotes: [
      'PELIGRO: NUNCA mezcles lejía con vinagre, amoníaco, alcohol o desatascadores. Los gases de cloro provocan edema pulmonar agudo.',
      'Diluye siempre la lejía en agua FRÍA; el agua caliente descompone el hipoclorito y libera vapores irritantes.',
      'No dejes lejía sobre fregaderos o sartenes de acero inoxidable, ya que los iones cloruro causan picaduras irreversibles.'
    ],
    faqs: [
      { question: '¿Se puede mezclar lejía y vinagre para un limpiador más potente?', answer: '¡JAMÁS! Al mezclar hipoclorito de sodio con ácido acético se libera gas cloro tóxico (Cl₂). Respirarlo quema las vías respiratorias y puede ser letal en cocinas cerradas. Si ocurre por error, evacúa la vivienda de inmediato.' },
      { question: '¿El vinagre elimina bacterias como Salmonella o E. coli?', answer: 'El vinagre puede reducir bacterias en un 80–90% por su acidez, pero no está registrado como desinfectante oficial y no erradica cargas altas de patógenos ni Norovirus. Para desinfectar carne cruda, usa lejía diluida o desinfectante alimentario homologado.' },
      { question: '¿Qué es mejor para limpiar el interior del frigorífico?', answer: 'El vinagre blanco diluido o agua con jabón neutro es mucho más seguro. La lejía puede resecar los plásticos, cuartear las gomas de cierre y dejar olores químicos que contaminan los alimentos.' }
    ],
    relatedComparisons: ['citric-acid-vs-vinegar-descaling', 'baking-soda-vs-bar-keepers-friend', 'dawn-vs-castile-soap-cast-iron'],
    relatedItems: ['/airfryer/baking-soda', '/microwave/vinegar'],
    technicalSpecs: enComparisons[0].technicalSpecs
  },
  {
    slug: 'citric-acid-vs-vinegar-descaling',
    category: 'cleaning',
    item1: 'Ácido Cítrico Alimentario',
    item2: 'Vinagre Blanco Destilado',
    winner: 'item1',
    verdict: 'El ácido cítrico en polvo es muy superior al vinagre para descalcificar cafeteras, hervidores y máquinas de espresso: es 100% inodoro, disuelve el sarro más rápido y no degrada las juntas de silicona ni de goma internas.',
    table: [
      { aspect: 'Olor y Sabor Residual', item1Value: '100% inodoro e insípido tras un solo aclarado de agua limpia', item2Value: 'Olor penetrante a ácido acético que exige 4 a 6 ciclos de aclarado' },
      { aspect: 'Velocidad de Disolución de Sarro', item1Value: 'Rápida quelación; forma complejos de citrato de calcio al instante', item2Value: 'Disolución más lenta; precisa mayor tiempo de remojo' },
      { aspect: 'Seguridad para Juntas y Gomas', item1Value: 'Inocuo para silicona, EPDM y calderas de latón/cobre', item2Value: 'El uso continuo puede resecar y degradar juntas de caucho natural' },
      { aspect: 'Almacenamiento y Eficiencia', item1Value: 'Polvo seco concentrado; ligero y apenas ocupa espacio', item2Value: 'Garrafas pesadas y voluminosas con 95% de contenido de agua' },
      { aspect: 'Proporción Óptima de Uso', item1Value: '1 a 2 cucharadas (15–30 g) por litro de agua templada', item2Value: 'Proporción 1:1 con agua o al 100% sin diluir' }
    ],
    item1Pros: [
      'Cero olor a vinagre en tu cocina durante el ciclo de calentamiento.',
      'Poder quelante superior para eliminar carbonato de calcio e incrustaciones duras.',
      'Recomendado por los principales fabricantes de cafeteras europeas (DeLonghi, Breville).'
    ],
    item2Pros: [
      'Disponible en cualquier supermercado y tienda de alimentación.',
      'Líquido ya diluido listo para usar sin medir ni disolver cristales.',
      'Producto multiusos para limpiar cristales y tablas de cortar.'
    ],
    useCases: [
      { situation: 'Descalcificar Máquina de Café Espresso', recommendation: 'Usa siempre ácido cítrico alimentario (1 cucharada/litro); el vinagre puede corroer calderas internas y arruinar el sabor.' },
      { situation: 'Hervidor Eléctrico de Acero Inoxidable', recommendation: 'Añade 1 cucharada de ácido cítrico, hierve una vez, espera 15 minutos y enjuaga. Queda impecable sin olor.' },
      { situation: 'Cafetera de Goteo Tradicional', recommendation: 'Ambos sirven, pero el ácido cítrico solo requiere 1 o 2 ciclos de enjuague frente a los 5 del vinagre.' }
    ],
    safetyNotes: [
      'No uses ácido cítrico sobre encimeras de mármol o piedra caliza pulida, ya que el ácido corroe el carbonato de calcio.',
      'Deja enfriar ligeramente la solución descalcificadora antes de desecharla para evitar quemaduras por vapor.',
      'Nunca mezcles ningún descalcificador con lejía; se liberará gas cloro de forma instantánea.'
    ],
    faqs: [
      { question: '¿Por qué algunos fabricantes de cafeteras anulan la garantía si usas vinagre?', answer: 'Marcas como Breville o DeLonghi desaconsejan el vinagre porque el ácido acético ataca juntas de goma, piezas de latón y calderas de aluminio con el tiempo. Además, sus vapores se adhieren a las resistencias y estropean el aroma del café.' },
      { question: '¿Cuánto ácido cítrico se necesita para descalcificar un hervidor?', answer: 'Disuelve 1 o 2 cucharadas (15–30 gramos) de ácido cítrico en polvo en 1 litro de agua tibia. Llena el hervidor, ponlo a hervir y déjalo reposar 15 minutos. El sarro se disolverá por completo. Vacía y enjuaga con agua fresca.' },
      { question: '¿Es tóxico si queda algún residuo mínimo de ácido cítrico?', answer: 'No. El ácido cítrico de grado alimentario es el mismo ácido presente en limones y naranjas. Cualquier traza mínima tras el enjuague es completamente inocua para el organismo.' }
    ],
    relatedComparisons: ['bleach-vs-vinegar', 'baking-soda-vs-bar-keepers-friend', 'stainless-steel-vs-enamel-cookware'],
    relatedItems: ['/airfryer/baking-soda', '/microwave/vinegar'],
    technicalSpecs: enComparisons[1].technicalSpecs
  },
  {
    slug: 'dawn-vs-castile-soap-cast-iron',
    category: 'cookware',
    item1: 'Lavavajillas Líquido Dawn',
    item2: 'Jabón de Castilla Líquido',
    winner: 'item1',
    verdict: 'Los lavavajillas líquidos modernos como Dawn son totalmente seguros para sartenes de hierro fundido: sus tensioactivos eliminan la grasa sin dañar el curado polimerizado. El jabón de Castilla contiene aceites libres que pueden dejar un residuo pegajoso y rancio.',
    table: [
      { aspect: 'Naturaleza Química', item1Value: 'Detergente sintético suave (Lauril sulfato de sodio y éteres)', item2Value: 'Jabón tradicional de aceites vegetales saponificados (Cocoato/Olivato potásico)' },
      { aspect: 'Impacto en el Curado (Seasoning)', item1Value: 'Cero daño a la capa de aceite polimerizado unida al hierro', item2Value: 'Puede reaccionar con el calor y formar sarro de jabón pegajoso' },
      { aspect: 'Poder Antigrasa', item1Value: 'Excelente eliminación de grasas pesadas; se aclara al 100%', item2Value: 'Moderado; requiere agua blanda para no dejar velo blanquecino' },
      { aspect: 'Residuos y Olores', item1Value: 'No deja película grasa ni altera sabores al aclararse bien', item2Value: 'Los ácidos grasos libres pueden quedar en el poro y enranciarse' },
      { aspect: 'Mito de la Sosa Cáustica (Lye)', item1Value: 'Contiene 0% de sosa cáustica', item2Value: 'Elaborado con álcali, totalmente neutralizado en la saponificación' }
    ],
    item1Pros: [
      'Desmiente el mito clásico: Dawn moderno no daña el curado porque no contiene sosa libre.',
      'Elimina grasas pegadas y restos de comida sin necesidad de estropajos metálicos agresivos.',
      'Se enjuaga sin dejar restos aceitosos que puedan enranciarse en la alacena.'
    ],
    item2Pros: [
      'Ingredientes 100% vegetales, orgánicos y biodegradables.',
      'Muy suave para la piel y libre de colorantes artificiales o espumantes sintéticos.',
      'Jabón versátil útil para acampadas al aire libre.'
    ],
    useCases: [
      { situation: 'Limpieza Diaria de la Sartén de Hierro', recommendation: 'Usa agua caliente, estropajo que no raye y unas gotas de Dawn. Seca al fuego y aplica una fina gota de aceite.' },
      { situation: 'Cocinas con Agua Dura con Mucha Cal', recommendation: 'Elige Dawn; el jabón de Castilla reacciona con el calcio del agua formando restos blanquecinos adheridos.' },
      { situation: 'Lavado Ecológico en Acampadas', recommendation: 'Usa jabón de Castilla lejos de fuentes de agua, asegurándote de frotar bien y secar la sartén al calor.' }
    ],
    safetyNotes: [
      'Nunca dejes sartenes de hierro en remojo durante horas ni las metas en el lavavajillas; se oxidarán rápidamente.',
      'Seca siempre el hierro sobre el fuego durante 2 o 3 minutos para evaporar la humedad de los microporos.',
      'La regla antigua de "no usar jabón" era para los jabones caseros con sosa cáustica del siglo XIX. Los lavavajillas actuales son seguros.'
    ],
    faqs: [
      { question: '¿Dawn estropeará el curado de mi sartén Lodge o Le Creuset?', answer: '¡No! El curado no es grasa suelta, sino una capa polimerizada dura y resistente unida químicamente al hierro. Los detergentes como Dawn emulsionan grasas de comida, pero no pueden disolver esa capa polimerizada.' },
      { question: '¿Por qué el jabón de Castilla deja a veces el hierro pegajoso?', answer: 'El jabón de Castilla se hace con aceites vegetales. Con agua dura, se forman sales insolubles de calcio. Además, los aceites saponificados libres pueden adherirse al poro del hierro caliente y volverse rancios.' },
      { question: '¿Cómo secar y guardar el hierro fundido tras lavarlo?', answer: 'Tras lavarlo con agua y unas gotas de lavavajillas, sécalo con un paño y ponlo al fuego medio-bajo durante 2 minutos. Luego añade 2 gotas de aceite de punto de humo alto y frota con papel de cocina hasta que quede mate.' }
    ],
    relatedComparisons: ['baking-soda-vs-bar-keepers-friend', 'stainless-steel-vs-enamel-cookware', 'bleach-vs-vinegar'],
    relatedItems: ['/airfryer/baking-soda', '/dishwasher/cast-iron-skillet'],
    technicalSpecs: enComparisons[2].technicalSpecs
  },
  {
    slug: 'baking-soda-vs-bar-keepers-friend',
    category: 'cleaning',
    item1: 'Bicarbonato de Sodio',
    item2: 'Bar Keepers Friend (BKF)',
    winner: 'depends',
    verdict: 'Usa Bar Keepers Friend (ácido oxálico y abrasivo mineral) para eliminar manchas térmicas de arcoíris y grasa quemada en acero inoxidable. Usa bicarbonato (alcalino y suave) en exteriores antiadherentes, esmaltes delicados y desodorización.',
    table: [
      { aspect: 'Naturaleza Química y Activo', item1Value: 'Sal Alcalina Suave (pH 8.3, Bicarbonato Sódico al 100%)', item2Value: 'Limpiador Ácido (pH 1.5–2.5, Ácido Oxálico + Feldespato)' },
      { aspect: 'Dureza del Abrasivo (Mohs)', item1Value: 'Blanda (Mohs ~2.5); no raya vidrio ni acero inoxidable', item2Value: 'Moderada (Mohs ~6.0); puede micro-rayar plásticos y antiadherentes' },
      { aspect: 'Eliminación de Manchas Térmicas (Arcoíris)', item1Value: 'Ineficaz; no reduce químicamente la oxidación del cromo', item2Value: 'Excelente; el ácido oxálico disuelve los óxidos metálicos al instante' },
      { aspect: 'Grasa Requemada y Carbonizada', item1Value: 'Sirve en pasta para quemaduras frescas, pero es lento en fondos negros', item2Value: 'Disuelve grasa calcinada y restos carbonizados en pocos segundos' },
      { aspect: 'Grado Alimentario e Inocuidad', item1Value: '100% de grado alimentario; seguro con niños y mascotas', item2Value: 'Tóxico por ingestión; exige un aclarado profundo con agua y jabón' }
    ],
    item1Pros: [
      'Totalmente inocuo y apto para alimentos; ideal en cualquier superficie de contacto culinario.',
      'Su baja dureza impide arañar esmaltes, porcelana vitrificada o vidrio.',
      'Desodorizante natural que absorbe olores ácidos a pescado, cebolla o ajo.'
    ],
    item2Pros: [
      'Eficacia insuperable para eliminar manchas de arcoíris por calor y óxidos en acero inoxidable.',
      'El ácido oxálico blanquea manchas rebeldes y desprende grasa quemada sin esfuerzo.',
      'Devuelve el brillo de fábrica a ollas de hierro esmaltado y baterías de cocina opacas.'
    ],
    useCases: [
      { situation: 'Manchas de Arcoíris en Sartén de Acero Inoxidable', recommendation: 'Usa siempre Bar Keepers Friend; humedece la sartén, espolvorea, frota 60 segundos con esponja suave y aclara.' },
      { situation: 'Manchas Interiores en Olla Esmaltada (Le Creuset)', recommendation: 'Prueba primero con pasta de bicarbonato; para manchas oscuras muy resistentes, usa BKF líquido con suavidad.' },
      { situation: 'Limpieza del Microondas y Nevera', recommendation: 'Usa pasta de bicarbonato; evita los vapores ácidos de limpiadores minerales en aparatos cerrados de comida.' }
    ],
    safetyNotes: [
      'NUNCA uses Bar Keepers Friend en aluminio pulido, hierro fundido curado ni sartenes antiadherentes de teflón.',
      'Usa guantes al limpiar con Bar Keepers Friend; el ácido oxálico puede resecar la piel.',
      'Aclara siempre con agua tibia jabonosa los utensilios tras usar Bar Keepers Friend antes de volver a cocinar.'
    ],
    faqs: [
      { question: '¿Por qué Bar Keepers Friend limpia mejor el acero inoxidable que el bicarbonato?', answer: 'Al calentarse, el cromo del acero inoxidable se oxida creando reflejos de arcoíris. El bicarbonato es alcalino y no puede disolver óxidos metálicos. Bar Keepers Friend contiene ácido oxálico, que quela y disuelve esos óxidos a nivel molecular restaurando el brillo original.' },
      { question: '¿Se puede usar Bar Keepers Friend en sartenes antiadherentes?', answer: 'No. El mineral abrasivo de BKF (feldespato) es mucho más duro que el recubrimiento de PTFE (teflón). Si frotas una sartén antiadherente con BKF, arañarás la capa antiadherente provocando descamación prematura.' },
      { question: '¿Se pueden mezclar bicarbonato y Bar Keepers Friend?', answer: 'No tiene sentido. El bicarbonato es básico y neutralizará el ácido oxálico de BKF perdiendo toda su eficacia química desincrustante.' }
    ],
    relatedComparisons: ['stainless-steel-vs-enamel-cookware', 'dawn-vs-castile-soap-cast-iron', 'citric-acid-vs-vinegar-descaling'],
    relatedItems: ['/airfryer/baking-soda', '/microwave/vinegar'],
    technicalSpecs: enComparisons[3].technicalSpecs
  },
  {
    slug: 'stainless-steel-vs-enamel-cookware',
    category: 'cookware',
    item1: 'Acero Inoxidable Multicapa (Tri-Ply)',
    item2: 'Hierro Fundido Esmaltado',
    winner: 'depends',
    verdict: 'El acero inoxidable es el todoterreno diario para dorar a alta temperatura, desglasar salsas y lavar en lavavajillas. El hierro fundido esmaltado ofrece una inercia térmica insuperable, perfecta para guisos a fuego lento, hornear pan artesano y servir en mesa.',
    table: [
      { aspect: 'Retención de Calor y Masa Térmica', item1Value: 'Retención moderada; responde rápido a los cambios de fuego', item2Value: 'Masa térmica enorme; retiene el calor durante horas sin puntos fríos' },
      { aspect: 'Reactividad con Ácidos (Tomate, Vino)', item1Value: 'Totalmente no reactivo (interior de acero 18/10)', item2Value: 'Totalmente no reactivo (esmaltado vitrificado inerte)' },
      { aspect: 'Sellado de Carnes y Creación de Fond', item1Value: 'Insuperable para caramelizar carnes y crear salsas desglasadas', item2Value: 'Sella muy bien, pero es más pesado para desglasar y mover' },
      { aspect: 'Durabilidad y Choque Térmico', item1Value: 'Indestructible; no se astilla, rompe ni cuartea al caer', item2Value: 'El vidrio esmaltado puede saltar con golpes o agua fría de golpe' },
      { aspect: 'Peso y Ergonomía', item1Value: 'Ligero a medio (1 a 2 kg); fácil salteo con una sola mano', item2Value: 'Muy pesado (3.5 a 6 kg); exige dos manos para manipularlo' }
    ],
    item1Pros: [
      'Prácticamente indestructible: tolera utensilios de metal, calor extremo y caídas sin dañarse.',
      'Control térmico inmediato: sube y baja de temperatura con rapidez según regules el quemador.',
      'Apto para lavavajillas y ligero para cocinar y saltear a diario con agilidad.'
    ],
    item2Pros: [
      'Inercia térmica inigualable: ideal para estofados largos, legumbres y hornear pan crujiente.',
      'Su esmalte de porcelana vitrificada no requiere curado previo con aceite.',
      'Diseño elegante con colores vivos que permite pasar directamente del horno a la mesa.'
    ],
    useCases: [
      { situation: 'Dorar Filetes y Hacer Salsas con Vino', recommendation: 'Usa acero multicapa; crea un fondo dorado (fond) perfecto que se desglasa con vino o caldo sin esfuerzo.' },
      { situation: 'Estofados y Guisos de Larga Cocción', recommendation: 'Usa una cocotte de hierro esmaltado; su tapa pesada retiene la humedad y las paredes gruesas aportan calor envolvente.' },
      { situation: 'Hornear Hogazas de Pan de Masa Madre', recommendation: 'Usa hierro esmaltado precalentado; imita hornos de vapor profesionales logrando una corteza crujiente.' }
    ],
    safetyNotes: [
      'Nunca sumerjas hierro esmaltado caliente en agua fría; el choque térmico brusco fractura el esmalte de vidrio.',
      'Evita usar batidoras de brazo de metal o cuchillos dentro de ollas esmaltadas para no astillar el fondo.',
      'Al cocinar con acero inoxidable, calienta bien la sartén antes de añadir grasa (prueba de la gota de agua) para evitar que la comida se pegue.'
    ],
    faqs: [
      { question: '¿Se pueden cocinar salsas de tomate ácidas en ambos materiales?', answer: '¡Sí! Ambos son totalmente neutros y no reaccionan con alimentos ácidos como tomate, vinagre o limón. A diferencia del hierro fundido curado al natural (que desprende sabor ferroso con ácido), el esmaltado y el acero 18/10 no alteran el sabor ni se degradan.' },
      { question: '¿Cuál es más fácil de limpiar: el acero o el hierro esmaltado?', answer: 'El hierro esmaltado tiene una superficie vitrificada lisa que suelta mejor los alimentos. Sin embargo, el acero inoxidable permite usar estropajos enérgicos y Bar Keepers Friend sin miedo a romper el recubrimiento.' },
      { question: '¿Se puede meter el hierro fundido esmaltado en el lavavajillas?', answer: 'Aunque algunos fabricantes lo autoricen, se recomienda lavarlo siempre a mano. Los detergentes agresivos del lavavajillas matifican y vuelven poroso el esmalte con el tiempo.' }
    ],
    relatedComparisons: ['baking-soda-vs-bar-keepers-friend', 'dawn-vs-castile-soap-cast-iron', 'bleach-vs-vinegar'],
    relatedItems: ['/airfryer/parchment-paper', '/dishwasher/cast-iron-skillet'],
    technicalSpecs: enComparisons[4].technicalSpecs
  }
];

// Helper to construct localized comparisons for PT, ZH-CN, JA
function buildPtComparisons() {
  return [
    {
      ...esComparisons[0],
      item1: 'Água Sanitária (Cloro Doméstico)',
      item2: 'Vinagre Branco Destilado',
      verdict: 'A água sanitária é um desinfetante hospitalar registrado pela EPA para higienizar superfícies não porosas, enquanto o vinagre branco é um ácido orgânico ideal para dissolver calcário. NUNCA devem ser misturados, pois a combinação libera gás cloro letal imediatamente.',
      table: [
        { aspect: 'Classificação Química e pH', item1Value: 'Base Alcalina Forte (pH 11–13, Hipoclorito de Sódio)', item2Value: 'Ácido Orgânico Fraco (pH 2.4–3.0, Ácido Acético 5%)' },
        { aspect: 'Mecanismo de Limpeza', item1Value: 'Oxidação severa que destrói membranas bacterianas e DNA/RNA viral', item2Value: 'Quelação ácida que dissolve carbonato de cálcio e resíduos minerais' },
        { aspect: 'Eficácia de Desinfecção EPA', item1Value: 'Elimina 99,9% dos patógenos (Norovírus, Salmonella, E. coli)', item2Value: 'Não é desinfetante registrado; ineficaz contra Norovírus e esporos' },
        { aspect: 'Segurança em Superfícies', item1Value: 'Corrosivo para aço inoxidável, alumínio e pedras naturais', item2Value: 'Danifica mármore, granito e degrada vedações de borracha natural' },
        { aspect: 'Risco de Mistura', item1Value: 'Libera gás cloro letal (Cl₂) se misturado a QUALQUER ácido ou amônia', item2Value: 'O ácido reage com o hipoclorito gerando gás cloro instantaneamente' }
      ]
    },
    {
      ...esComparisons[1],
      item1: 'Ácido Cítrico Alimentício',
      item2: 'Vinagre Branco Destilado',
      verdict: 'O ácido cítrico em pó é muito superior ao vinagre branco para descalcificar cafeteiras, chaleiras e máquinas de espresso: é 100% inodoro, remove o calcário mais rápido e preserva as vedações de silicone e borracha.',
      table: [
        { aspect: 'Odor e Sabor Residual', item1Value: '100% inodoro e insípido após um único enxágue com água limpa', item2Value: 'Odor penetrante de ácido acético que exige 4 a 6 ciclos de enxágue' },
        { aspect: 'Velocidade de Descalcificação', item1Value: 'Quelação rápida; dissolve carbonato de cálcio em poucos minutos', item2Value: 'Ação mais lenta; necessita de tempo de imersão prolongado' },
        { aspect: 'Segurança das Vedações', item1Value: 'Totalmente seguro para silicone, EPDM e caldeiras de latão', item2Value: 'A exposição contínua resseca e degrada vedações de borracha' },
        { aspect: 'Armazenamento e Praticidade', item1Value: 'Pó concentrado; leve e ocupa mínimo espaço no armário', item2Value: 'Galões pesados contendo 95% de água' },
        { aspect: 'Proporção Recomendada', item1Value: '1 a 2 colheres de sopa (15–30 g) por litro de água morna', item2Value: 'Proporção 1:1 com água ou 100% puro' }
      ]
    },
    {
      ...esComparisons[2],
      item1: 'Detergente Líquido Dawn',
      item2: 'Sabão de Castela Líquido',
      verdict: 'Detergentes modernos como Dawn são perfeitamente seguros para frigideiras de ferro fundido: removem a gordura sem afetar a camada de óleo polimerizado. O sabão de Castela contém óleos livres que podem deixar um filme grudento e rançoso.',
      table: [
        { aspect: 'Natureza Química', item1Value: 'Detergente sintético suave (Lauril sulfato de sódio)', item2Value: 'Sabão de óleos vegetais saponificados (Olivato/Cocoato de potássio)' },
        { aspect: 'Impacto na Cura (Seasoning)', item1Value: 'Zero dano à película de óleo polimerizado fundida ao ferro', item2Value: 'Pode reagir com minerais e formar crosta de sabão gordurosa' },
        { aspect: 'Poder Desengordurante', item1Value: 'Alto poder de corte de gordura pesada; enxágue 100% limpo', item2Value: 'Moderado; água dura dificulta a remoção completa' },
        { aspect: 'Resíduos e Odores', item1Value: 'Não deixa película oleosa nem odores residuais', item2Value: 'Ácidos graxos livres podem se depositar nos poros e oxidar' },
        { aspect: 'Mito da Soda Cáustica', item1Value: 'Contém 0% de soda cáustica livre', item2Value: 'Feito com álcali, totalmente transformado na saponificação' }
      ]
    },
    {
      ...esComparisons[3],
      item1: 'Bicarbonato de Sódio',
      item2: 'Bar Keepers Friend (BKF)',
      verdict: 'Use Bar Keepers Friend (ácido oxálico e abrasivo mineral) para eliminar manchas térmicas de arco-íris e gordura queimada em aço inoxidável. Use bicarbonato (alcalino e suave) em antiaderentes externos, esmaltes e desodorização.',
      table: [
        { aspect: 'Classificação Química', item1Value: 'Sal Alcalino Suave (pH 8.3, 100% Bicarbonato de Sódio)', item2Value: 'Limpador Ácido (pH 1.5–2.5, Ácido Oxálico + Feldspato)' },
        { aspect: 'Dureza do Abrasivo (Mohs)', item1Value: 'Macia (Mohs ~2.5); não risca vidro nem inox', item2Value: 'Moderada (Mohs ~6.0); pode riscar plásticos e teflon' },
        { aspect: 'Remoção de Manchas Térmicas', item1Value: 'Ineficaz contra a oxidação térmica do cromo', item2Value: 'Excelente; o ácido oxálico dissolve os óxidos metálicos' },
        { aspect: 'Gordura Carbonizada', item1Value: 'Ajuda em sujeiras recentes, mas é lento em crostas queimadas', item2Value: 'Dissolve gordura queimada e resíduos pretos com facilidade' },
        { aspect: 'Segurança Alimentar', item1Value: '100% grau alimentício e atóxico para pets e crianças', item2Value: 'Tóxico se ingerido; requer enxágue com água e sabão' }
      ]
    },
    {
      ...esComparisons[4],
      item1: 'Aço Inoxidável Tri-Ply (Multicamadas)',
      item2: 'Ferro Fundido Esmaltado',
      verdict: 'O aço inoxidável é o instrumento diário ideal para selar carnes em alta temperatura, criar molhos por deglaçagem e lavar na lava-louças. O ferro esmaltado oferece retenção térmica máxima, excelente para ensopados lentos e assar pães.',
      table: [
        { aspect: 'Retenção Térmica e Massa', item1Value: 'Retenção moderada; responde rápido às mudanças de chama', item2Value: 'Massa térmica colossal; retém calor por horas sem pontos frios' },
        { aspect: 'Reatividade com Ácidos', item1Value: 'Totalmente inerte (interior de inox 18/10)', item2Value: 'Totalmente inerte (esmaltado vitrificado de porcelana)' },
        { aspect: 'Selagem e Formação de Fond', item1Value: 'Perfeito para caramelizar e criar molhos deglaçados', item2Value: 'Excelente para dourar, mas pesado para manusear e deglaçar' },
        { aspect: 'Durabilidade e Choque Térmico', item1Value: 'Indestrutível; não lasca, trinca ou estilhaça', item2Value: 'O esmalte vítreo pode lascar com quedas ou choque térmico' },
        { aspect: 'Peso e Ergonomia', item1Value: 'Leve a médio (1 a 2 kg); salteia fácil com uma só mão', item2Value: 'Muito pesado (3.5 a 6 kg); exige as duas mãos no manuseio' }
      ]
    }
  ];
}

function buildZhComparisons() {
  return [
    {
      slug: 'bleach-vs-vinegar',
      category: 'cleaning',
      item1: '含氯漂白水（84消毒液）',
      item2: '食用蒸馏白醋',
      winner: 'depends',
      verdict: '含氯漂白水（次氯酸钠）是针对生肉菜板的强效医用级消毒剂，而蒸馏白醋是溶解水垢的有机酸。两者绝对不可混合，一旦混用会瞬间释放致命的黄绿色剧毒氯气。',
      table: [
        { aspect: '化学分类与酸碱度', item1Value: '强碱性氧化剂（pH 11–13，次氯酸钠）', item2Value: '弱有机酸（pH 2.4–3.0，5% 醋酸）' },
        { aspect: '主要清洁机理', item1Value: '强氧化性破坏细菌细胞壁与病毒核酸', item2Value: '酸性螯合作用溶解碳酸钙水垢与皂垢' },
        { aspect: 'EPA 消毒认证级别', item1Value: '灭活 99.9% 致病菌（诺如病毒、沙门氏菌、大肠杆菌）', item2Value: '非官方认证消毒剂；对诺如病毒与芽孢无效' },
        { aspect: '材质安全性', item1Value: '对不锈钢、铝材及天然大理石具强腐蚀性', item2Value: '侵蚀大理石与天然石材，长期接触使橡胶软化' },
        { aspect: '混用危险', item1Value: '遇酸或氨水瞬间释放致命氯气（Cl₂）', item2Value: '酸性离子促使次氯酸分解生成氯气' }
      ],
      item1Pros: [
        '切生鸡肉、生肉后菜板与台面的医疗级消毒标准。',
        '强力灭活顽固的诺如病毒、霉菌孢子与致病细菌。',
        '迅速漂白深层有机污渍与陈年茶垢。'
      ],
      item2Pros: [
        '食品级安全，在食物备料区使用无毒无化学残留。',
        '溶解水壶水垢与咖啡机矿物沉积，无有害挥发性气体。',
        '环保天然，适合日常轻度油脂擦拭。'
      ],
      useCases: [
        { situation: '生禽肉菜板消杀', recommendation: '按比例稀释漂白水（1汤匙配4升凉水），浸泡或擦拭2分钟后清水彻底冲洗。' },
        { situation: '烧水壶与咖啡机除垢', recommendation: '使用白醋或食品级柠檬酸溶解水垢；严禁将漂白水倒入加热电器中。' },
        { situation: '天然大理石台面清洁', recommendation: '二者皆不可用；请用中性洗洁精与温水擦拭，防止腐蚀石材表面。' }
      ],
      safetyNotes: [
        '致命警示：严禁将漂白水与白醋、洁厕灵、酒精或氨水混合，产生的氯气会导致化学性肺炎与窒息。',
        '稀释漂白水必须使用冷水；热水会加速次氯酸分解并挥发刺激性氯气。',
        '勿让漂白水长时间停留在不锈钢水槽或厨具表面，氯离子会导致不可逆的孔蚀损伤。'
      ],
      faqs: [
        { question: '漂白水和白醋混在一起清洁力会更强吗？', answer: '绝对不行！次氯酸钠遇酸会立即发生剧烈化学反应，释放出剧毒氯气。在封闭厨房吸入氯气会严重灼伤肺部呼吸道甚至危及生命。若不慎混用，必须立刻撤离室内通风。' },
        { question: '白醋能代替消毒液杀死沙门氏菌和大肠杆菌吗？', answer: '白醋虽有一定抑菌作用，但并非官方认证的高效消毒剂，无法彻底杀灭高浓度病原菌和诺如病毒。对于生禽肉污染，必须使用稀释漂白水或食品接触级专用消毒液。' },
        { question: '清洁冰箱内部用哪种更好？', answer: '推荐使用白醋水或中性洗洁精。漂白水会破坏冰箱内部塑料内胆与门封胶条弹性，且残留刺激性气味容易串味到食物中。' }
      ],
      relatedComparisons: ['citric-acid-vs-vinegar-descaling', 'baking-soda-vs-bar-keepers-friend', 'stainless-steel-vs-enamel-cookware'],
      relatedItems: ['/airfryer/baking-soda', '/microwave/vinegar'],
      technicalSpecs: enComparisons[0].technicalSpecs
    },
    {
      slug: 'citric-acid-vs-vinegar-descaling',
      category: 'cleaning',
      item1: '食品级柠檬酸粉',
      item2: '蒸馏食用白醋',
      winner: 'item1',
      verdict: '在咖啡机、电水壶与意式半自动咖啡机除垢方面，食品级柠檬酸全面优于白醋：100%无刺鼻气味，溶解碳酸钙水垢速度更快，且完全不伤机器内部硅胶与橡胶密封圈。',
      table: [
        { aspect: '气味与风味残留', item1Value: '100%完全无味，清水冲洗一次即可除净', item2Value: '刺鼻醋酸气味弥漫厨房，需反复冲洗4–6次才能消除异味' },
        { aspect: '水垢溶解速率', item1Value: '高效螯合反应，快速形成水溶性柠檬酸钙', item2Value: '溶解速度较慢，通常需要长时间浸泡' },
        { aspect: '密封圈与锅炉安全', item1Value: '对食品级硅胶、EPDM密封垫与铜/铝锅炉高度友好', item2Value: '醋酸长期浸泡可能导致天然橡胶密封圈硬化与老化' },
        { aspect: '储存与经济性', item1Value: '固体结晶粉末，轻巧便携，不占储物空间', item2Value: '大桶液体占地笨重，含水量高达95%' },
        { aspect: '推荐配比', item1Value: '每1升温水加入1–2汤匙（15–30克）', item2Value: '1:1 水醋比或原液使用' }
      ],
      item1Pros: [
        '除垢加热时全屋无任何酸臭气味，体验极其舒适。',
        '对碳酸钙及重矿物质水垢的螯合溶解能力更强。',
        '欧洲主流意式咖啡机品牌（德龙、Breville）官方推荐成分。'
      ],
      item2Pros: [
        '几乎每家厨房常备，随手可得。',
        '液体无需溶解搅拌，开盖即可使用。',
        '一物多用，兼具日常清洁玻璃与去味功能。'
      ],
      useCases: [
        { situation: '意式半自动咖啡机锅炉除垢', recommendation: '务必选用食品级柠檬酸溶液；白醋挥发气味会渗透锅炉内壁并毁掉咖啡纯正萃取风味。' },
        { situation: '不锈钢电热水壶除水垢', recommendation: '加1汤匙柠檬酸粉烧开水，静置15分钟后倒出冲洗，水垢彻底瓦解且无任何异味。' },
        { situation: '美式滴滤咖啡机保养', recommendation: '两者均可，但柠檬酸仅需过水冲洗1–2次，而白醋需反复过水4–5次。' }
      ],
      safetyNotes: [
        '切勿将柠檬酸溶液倒在大理石台面上，酸性液体会腐蚀碳酸钙石材表面造成哑光蚀斑。',
        '倒出刚烧开的热除垢液时谨防高温蒸汽烫伤。',
        '除垢剂严禁与含氯漂白剂混合，否则将瞬间释放剧毒氯气。'
      ],
      faqs: [
        { question: '为什么很多高端咖啡机说明书明令禁止使用白醋？', answer: '因为醋酸对咖啡机内部精密微型阀门、硅胶软管与黄铜接头具有一定腐蚀性，长期使用容易导致漏水。此外醋酸气体会顽固附着在加热元件表面，后续制作咖啡会有酸臭杂味。' },
        { question: '电水壶除垢柠檬酸用量是多少？', answer: '通常1升水加入15至30克（约1到2汤匙）食品级柠檬酸即可。加水烧开后断电静置15分钟，待水垢溶解后倒掉并用清水彻底冲洗一次即可。' },
        { question: '如果水壶里残留微量柠檬酸对身体有害吗？', answer: '食品级柠檬酸本身就是柑橘、柠檬中的天然有机酸，残留微量没有任何毒副作用，对人体完全无害。' }
      ],
      relatedComparisons: ['bleach-vs-vinegar', 'baking-soda-vs-bar-keepers-friend', 'stainless-steel-vs-enamel-cookware'],
      relatedItems: ['/airfryer/baking-soda', '/microwave/vinegar'],
      technicalSpecs: enComparisons[1].technicalSpecs
    },
    {
      slug: 'dawn-vs-castile-soap-cast-iron',
      category: 'cookware',
      item1: 'Dawn 浓缩洗洁精',
      item2: '纯植物卡斯蒂利亚液体皂',
      winner: 'item1',
      verdict: '现代温和洗洁精完全可以安全清洗铸铁锅：其合成表面活性剂只带走游离油污，绝不破坏高温聚合形成的油膜油层。卡斯蒂利亚皂含有未皂化植物油，反而容易在铸铁微孔中沉积变质发黏。',
      table: [
        { aspect: '化学本质与活性剂', item1Value: '温和合成表面活性剂（月桂基硫酸钠复配）', item2Value: '天然皂化植物油（橄榄油/椰子油皂化物）' },
        { aspect: '对开锅油膜的影响', item1Value: '完全不损伤已交联固化的高温聚合物油膜', item2Value: '易与硬水矿物质反应生成不溶性皂垢附着在铁锅表面' },
        { aspect: '去重油污能力', item1Value: '乳化重油能力极强，温水一冲即净零残留', item2Value: '去油能力一般，遇硬水容易产生白色沉淀' },
        { aspect: '残留异味与哈喇味', item1Value: '彻底冲洗后无任何油性残留与变质隐患', item2Value: '游离脂肪酸容易残留在铁锅气孔中氧化产生油脂哈喇味' },
        { aspect: '游离强碱（烧碱）真相', item1Value: '0% 强碱残留', item2Value: '采用强碱皂化，完全反应后无游离碱' }
      ],
      item1Pros: [
        '打破传统陈旧谣言：现代中性洗洁精不含游离强碱，绝不会洗掉聚合油膜。',
        '轻松瓦解顽固肉汁与焦油残渣，无需钢丝球野蛮刮擦。',
        '极易漂洗干净，存放数月也不会出现油脂氧化哈喇味。'
      ],
      item2Pros: [
        '100% 天然有机植物原料，环保易降解。',
        '成分极简亲肤，无人工合成色素与起泡剂。',
        '户外露营时的多用途全能洗涤剂。'
      ],
      useCases: [
        { situation: '铸铁煎锅日常餐后清洁', recommendation: '温水配合几滴洗洁精与海绵清洗，清洗后放炉灶小火烘干，涂抹微量食用油保养。' },
        { situation: '自来水硬度较高的地区', recommendation: '首选洗洁精；卡斯蒂利亚皂遇钙镁离子会在粗糙铸铁表面结成皂垢。' },
        { situation: '户外无害化露营清洁', recommendation: '在远离水源的地方使用卡斯蒂利亚皂，清洗后务必擦干并回火烤干。' }
      ],
      safetyNotes: [
        '切勿将铸铁锅浸泡在水中过夜或放入洗碗机清洗，铁基体受潮极易氧化生锈。',
        '每次洗净后务必放在灶台上小火烘干2–3分钟，彻底蒸发锅壁微孔中的水分。',
        '“铸铁锅不能用洗涤灵”源于19世纪含强碱的古法肥皂。现代洗洁精完全安全。'
      ],
      faqs: [
        { question: '用洗洁精真的不会把辛苦养出来的铸铁锅油膜洗掉吗？', answer: '绝对不会！开锅形成的油膜不是一层普通的液态植物油，而是在200°C以上高温下脂肪酸发生热聚合形成的坚韧交联聚合物网状结构。温和洗洁精只乳化食物油脂，化学上根本无法瓦解共价键交联的高温油膜。' },
        { question: '为什么有时候用肥皂洗铸铁锅会发黏？', answer: '因为天然肥皂在硬水中会析出不溶性脂肪酸钙硬水垢，残留在铸铁锅粗糙微孔中难以彻底冲洗。水分蒸发后，这些残留油脂暴露在空气中氧化，就会产生黏手感和哈喇味。' },
        { question: '铸铁锅日常清洗保养标准步骤是什么？', answer: '温水加少许洗洁精用柔软海绵刷洗干净，用毛巾擦干后放炉灶小火加热2分钟排净微孔湿气，趁温热滴入2滴高烟点植物油，用厨房纸彻底擦匀至哑光状态储存。' }
      ],
      relatedComparisons: ['baking-soda-vs-bar-keepers-friend', 'stainless-steel-vs-enamel-cookware', 'bleach-vs-vinegar'],
      relatedItems: ['/airfryer/baking-soda', '/dishwasher/cast-iron-skillet'],
      technicalSpecs: enComparisons[2].technicalSpecs
    },
    {
      slug: 'baking-soda-vs-bar-keepers-friend',
      category: 'cleaning',
      item1: '食用小苏打（碳酸氢钠）',
      item2: 'Bar Keepers Friend（BKF多功能除垢粉）',
      winner: 'depends',
      verdict: '清除不锈钢锅具高温彩虹纹、发黄发黑与顽固糊底首选 Bar Keepers Friend（草酸配方+微粒磨料）。清洁不粘锅外壁、珐琅锅及日常除臭推荐温和的小苏打（弱碱性无伤研磨）。',
      table: [
        { aspect: '化学分类与核心活性物', item1Value: '弱碱性盐（pH 8.3，100% 碳酸氢钠）', item2Value: '酸性抛光除垢剂（pH 1.5–2.5，草酸 + 长石磨料）' },
        { aspect: '磨料硬度（莫氏硬度）', item1Value: '极软（莫氏 ~2.5）；绝不划伤玻璃与不锈钢', item2Value: '中等（莫氏 ~6.0）；用力过猛可能划伤塑料与不粘涂层' },
        { aspect: '不锈钢彩虹纹氧化层消除', item1Value: '无效；无法化学还原高温生成的氧化铬薄膜', item2Value: '极佳；草酸可分子级螯合金属氧化物瞬间恢复银亮' },
        { aspect: '焦糊积碳与陈年焦黑油垢', item1Value: '加水调糊对新鲜焦痕有效，处理陈年积碳效率低', item2Value: '草酸配合微磨料迅速分解顽固积碳，省时省力' },
        { aspect: '食品级安全性', item1Value: '100% 食品级安全，无毒无害', item2Value: '吞咽有害，使用后需用洗洁精和清水彻底冲洗' }
      ],
      item1Pros: [
        '100% 食品级纯天然成分，接触任何餐具食材无后顾之忧。',
        '硬度极低，绝不会在珐琅釉面、微晶玻璃或瓷器上留下微划痕。',
        '天然异味中和剂，有效吸收冰箱与水槽中的酸性发酵异味。'
      ],
      item2Pros: [
        '消除不锈钢锅底彩虹纹、水垢黄斑与金属暗沉的神器。',
        '草酸快速螯合铁锈与金属氧化物，数秒内恢复锅具出厂镜面光泽。',
        '对陈旧发黄的珐琅铸铁锅外壁有极佳的去黑提亮效果。'
      ],
      useCases: [
        { situation: '不锈钢平底锅高温烧出的彩虹斑纹', recommendation: '必须使用 Bar Keepers Friend；锅具润湿后撒上粉末，用湿海绵打圈揉擦60秒冲净即可焕然一新。' },
        { situation: '珐琅铸铁锅（Le Creuset）内壁陈年茶渍油斑', recommendation: '先尝试小苏打温水浸泡或糊状刷洗；若污渍顽固可选用 BKF 液体版极轻柔擦洗。' },
        { situation: '微波炉内胆与冰箱保鲜盒清洁', recommendation: '使用小苏打糊清洁，避免酸性除垢剂在密闭食物存放空间挥发残留。' }
      ],
      safetyNotes: [
        '严禁在抛光铝锅、未涂层铸铁锅及特氟龙不粘涂层上使用 Bar Keepers Friend。',
        '使用 Bar Keepers Friend 时建议佩戴洗碗手套，草酸会使手部皮肤干燥发涩。',
        '用 BKF 清洁厨具后，烹饪前必须用洗洁精和温水彻底清洗一遍。'
      ],
      faqs: [
        { question: '为什么 BKF 清除不锈钢彩虹纹比小苏打厉害得多？', answer: '不锈钢受热时表面的铬元素会氧化形成厚度不均的氧化铬干涉膜，导致光线折射呈现彩虹斑。小苏打是碱性物理磨料，无法解离金属氧化物。而 BKF 含有草酸，可在分子层面高效螯合铁离子与铬离子将其溶解，无需粗暴打磨即可恢复光泽。' },
        { question: 'Bar Keepers Friend 能擦不粘锅吗？', answer: '绝对不能擦不粘涂层！BKF 中含有的长石微粒莫氏硬度约为6.0，远高于特氟龙涂层的硬度（约1.0）。用力擦拭会直接刮花涂层导致不粘性能失效并加速剥落。' },
        { question: '把小苏打和 Bar Keepers Friend 混在一起用效果会翻倍吗？', answer: '千万不要混合！小苏打是弱碱性，BKF 依赖强酸性草酸发挥除垢功效。二者混在一起会剧烈冒泡直接发生酸碱中和，彻底废掉草酸的螯合去污能力。' }
      ],
      relatedComparisons: ['stainless-steel-vs-enamel-cookware', 'dawn-vs-castile-soap-cast-iron', 'citric-acid-vs-vinegar-descaling'],
      relatedItems: ['/airfryer/baking-soda', '/microwave/vinegar'],
      technicalSpecs: enComparisons[3].technicalSpecs
    },
    {
      slug: 'stainless-steel-vs-enamel-cookware',
      category: 'cookware',
      item1: '三层多层复合不锈钢锅',
      item2: '珐琅铸铁锅（荷兰烤锅）',
      winner: 'depends',
      verdict: '不锈钢多层复合锅是日常高火煎牛排、爆炒、制作浓郁焦香酱汁并支持洗碗机的高效利器；珐琅铸铁锅凭借巨大的储热量，在慢炖、炖汤、烤欧包与端锅直接上桌方面独具优势。',
      table: [
        { aspect: '储热性能与热容', item1Value: '热容适中；控温极其灵敏，降温升温快', item2Value: '巨大热容量；长久保温无冷区，受热极柔和' },
        { aspect: '抗酸性耐蚀性（番茄、红酒）', item1Value: '完全不反应（食品级 18/10 不锈钢内壁）', item2Value: '完全不反应（致密光滑的惰性玻璃质瓷釉）' },
        { aspect: '美拉德反应与锅底焦香（Fond）', item1Value: '煎肉结焦上色极佳，极易倒入红酒/高汤刮底调汁', item2Value: '煎肉同样出色，但锅体笨重不便单手端离晃锅' },
        { aspect: '耐用度与热冲击承受力', item1Value: '坚不可摧；磕碰不碎、耐金属铲、不怕冷水激', item2Value: '瓷釉本质为玻璃；遇猛烈摔砸或骤冷骤热可能崩瓷' },
        { aspect: '锅身自重与人体工程学', item1Value: '轻巧（1–2公斤）；单手颠锅操作轻松自如', item2Value: '极其沉重（3.5–6公斤）；必须双手端持' }
      ],
      item1Pros: [
        '皮实耐造无娇贵病：耐金属铲、耐高温空烧与洗碗机机洗。',
        '升温降温极其迅速，非常适合精准掌控火候与制作酱汁。',
        '重量适中，颠锅、翻炒及日常清洗非常轻便顺手。'
      ],
      item2Pros: [
        '恒温储热性能无与伦比：长时间炖煮肉类软烂多汁，不易沸锅扑溢。',
        '高密度光滑珐琅釉面无需任何开锅养锅维护。',
        '外观典雅色彩丰富，可直接端上餐桌兼具保温与仪式感。'
      ],
      useCases: [
        { situation: '煎牛排并用红酒刮底调配浓汁', recommendation: '首选三层不锈钢平底锅；能够迅速在肉表面形成焦香脆壳，焦褐沉积物加红酒轻松刮底融成顶级风味酱汁。' },
        { situation: '周末耗时数小时慢炖牛肉与煲汤', recommendation: '首选珐琅铸铁锅；厚实锅盖与锅壁将蒸汽热量锁在锅内循环，肉质极度软烂。' },
        { situation: '家庭烘焙无油免揉欧包（天然酵母面包）', recommendation: '预热珐琅铸铁锅密闭烘烤；模拟专业蒸汽烤箱，烤出爆裂酥脆金黄的外壳。' }
      ],
      safetyNotes: [
        '切勿将刚出炉的高温珐琅锅直接泡入冷水中，剧烈热胀冷缩会导致玻璃釉面炸裂崩瓷。',
        '在珐琅锅内尽量使用硅胶铲或木铲，避免金属尖锐厨具猛烈撞击损伤釉面。',
        '不锈钢锅烹饪前建议先空锅预热至“水滴滚动水银效应”再下油，可完美防止蛋白质粘锅。'
      ],
      faqs: [
        { question: '番茄酱这类酸性食物能在不锈钢和珐琅锅里煮吗？', answer: '完全可以！两者对酸性食物（番茄、柠檬、红酒、醋）均呈现100%化学惰性。无涂层生铁锅煮酸性食物会融出铁腥味并腐蚀油膜，而珐琅是惰性玻璃釉，不锈钢内层为18/10食品级不锈钢，绝不会发生化学反应。' },
        { question: '不锈钢锅和珐琅锅哪个更好清洗？', answer: '日常使用中珐琅锅类似陶瓷表面更为顺滑脱模；但若发生严重糊底，不锈钢锅可以用钢丝球、洗洁精甚至 BKF 强力刷洗而无需担心损坏，珐琅锅则必须温柔对待以免刮花釉层。' },
        { question: '珐琅铸铁锅可以放洗碗机洗吗？', answer: '虽然部分厂商标称可用洗碗机，但强烈建议手洗。洗碗粉中的强碱成分与水流磨料经年累月会使高光泽釉面失光变雾甚至产生微孔，导致日后更容易挂色粘锅。' }
      ],
      relatedComparisons: ['baking-soda-vs-bar-keepers-friend', 'dawn-vs-castile-soap-cast-iron', 'bleach-vs-vinegar'],
      relatedItems: ['/airfryer/parchment-paper', '/dishwasher/cast-iron-skillet'],
      technicalSpecs: enComparisons[4].technicalSpecs
    }
  ];
}

function buildJaComparisons() {
  return [
    {
      slug: 'bleach-vs-vinegar',
      category: 'cleaning',
      item1: '塩素系漂白剤（キッチンハイターなど）',
      item2: '穀物酢・ホワイトビネガー',
      winner: 'depends',
      verdict: '塩素系漂白剤は生肉まな板などの徹底除菌・ノロウイルス対策に必須の強アルカリ酸化剤であり、食酢は水垢を溶かす弱有機酸です。絶対に混ぜてはいけません。混ざると即座に致死性の塩素ガスが発生します。',
      table: [
        { aspect: '化学的分類と液性（pH）', item1Value: '強アルカリ性（pH 11〜13、次亜塩素酸ナトリウム）', item2Value: '弱有機酸（pH 2.4〜3.0、約5%酢酸）' },
        { aspect: '主たる洗浄・除菌メカニズム', item1Value: '強力な酸化作用で細菌の細胞壁やウイルスの核酸を破壊', item2Value: '酸によるキレート作用で炭酸カルシウム（水垢）を溶解' },
        { aspect: '公的除菌力評価', item1Value: '食中毒菌やノロウイルス・芽胞菌を99.9%以上不活化', item2Value: '公的除菌登録なし。ノロウイルスや芽胞菌には効果薄' },
        { aspect: '材質に対する安全性', item1Value: 'ステンレス、アルミ、大理石などの天然石を腐食', item2Value: '大理石や人造大理石を溶かし、天然ゴムパッキンを劣化' },
        { aspect: '混合時の危険性', item1Value: '酸性物質と混ざると瞬時に有毒な塩素ガス（Cl₂）を発生', item2Value: '酸が塩素剤と反応し激しい塩素ガス発生の引き金に' }
      ],
      item1Pros: [
        '生の鶏肉や魚を切った後のまな板・シンクの衛生管理における世界標準。',
        '食中毒菌だけでなく、アルコールが効きにくいノロウイルスも確実に不活化。',
        '茶渋やまな板の頑固な着色汚れを素早く漂白。'
      ],
      item2Pros: [
        '食品成分そのもので無害。食品を扱うキッチンでも安心安全。',
        '電気ケトルやシンクの白いカルキ汚れ（炭酸カルシウム）をきれいに除去。',
        '生分解性が高く環境に優しい日常の油汚れ拭き。'
      ],
      useCases: [
        { situation: '生鶏肉を扱った後のまな板除菌', recommendation: '冷水で規定希釈した塩素系漂白剤液に数分浸し、流水でしっかり洗い流します。' },
        { situation: '電気ポットやケトルのカルキ水垢落とし', recommendation: 'クエン酸または酢を使用。熱源のある家電に塩素系漂白剤を入れるのは厳禁です。' },
        { situation: '大理石・天然石のキッチンカウンター', recommendation: 'どちらも使用不可。中性洗剤とぬるま湯で拭き取ってください。' }
      ],
      safetyNotes: [
        '【警告・混ぜるな危険】塩素系漂白剤と酢、クエン酸、酸性洗浄剤、アルコールを混ぜると猛毒の塩素ガスが発生し、化学性肺炎を引き起こします。',
        '希釈時は必ず「冷水」を使用してください。お湯を使うと急激に分解が進み有毒ガスが揮発します。',
        'ステンレスシンクに漂白剤原液を放置すると、点錆（孔食）が発生して穴が開く原因になります。'
      ],
      faqs: [
        { question: '漂白剤と酢を混ぜると洗浄力はアップしますか？', answer: '絶対に混ぜてはいけません！次亜塩素酸ナトリウムと酸が反応し、有毒な塩素ガスが発生します。吸い込むと肺の粘膜がただれ、最悪の場合命に関わります。誤って混ざった場合は直ちにその場を離れて換気してください。' },
        { question: 'お酢でノロウイルスやサルモネラ菌は完全に除菌できますか？', answer: 'お酢にも一定の静菌作用はありますが、ノロウイルスや高濃度の食中毒菌を完全に殺菌することはできません。生の肉や魚を扱った調理器具には、規定通り希釈した塩素系漂白剤の使用が推奨されます。' },
        { question: '冷蔵庫の庫内掃除にはどちらが良いですか？', answer: '薄めたお酢水または中性洗剤が適しています。塩素系漂白剤はプラスチックの劣化やドアパッキンの硬化を招き、刺激臭が食品に移るリスクがあります。' }
      ],
      relatedComparisons: ['citric-acid-vs-vinegar-descaling', 'baking-soda-vs-bar-keepers-friend', 'stainless-steel-vs-enamel-cookware'],
      relatedItems: ['/airfryer/baking-soda', '/microwave/vinegar'],
      technicalSpecs: enComparisons[0].technicalSpecs
    },
    {
      slug: 'citric-acid-vs-vinegar-descaling',
      category: 'cleaning',
      item1: '食用クエン酸（粉末）',
      item2: '穀物酢・ホワイトビネガー',
      winner: 'item1',
      verdict: '電気ケトル、コーヒーメーカー、エスプレッソマシンの水垢洗浄にはクエン酸が圧倒的に優れています。完全に無臭でカルキを素早く溶かし、内部のゴムパッキンやシリコンを傷めません。',
      table: [
        { aspect: '臭いと風味の残りやすさ', item1Value: '完全に無臭。水ですすぐだけで残留臭ゼロ', item2Value: '加熱時に強烈な酸臭が充満し、4〜6回注湯洗浄が必要' },
        { aspect: '水垢（カルシウム）溶解スピード', item1Value: 'キレート作用が高く素早くクエン酸カルシウムを形成', item2Value: '溶解がやや遅く、長時間のつけ置きが必要' },
        { aspect: 'パッキン・ボイラーへの安全性', item1Value: 'シリコン、EPDM、真鍮製ボイラーに優しい', item2Value: '長時間の接触で天然ゴム製パッキンを劣化・硬化させる懸念' },
        { aspect: '保存性と扱いやすさ', item1Value: '粉末のため超軽量でコンパクトに長期保存可能', item2Value: '重くかさばる液体ボトル（成分の95%が水分）' },
        { aspect: '推奨希釈比率', item1Value: '水1リットルに対して大さじ1〜2（約15〜30g）', item2Value: '水と1:1または原液' }
      ],
      item1Pros: [
        '加熱洗浄中にキッチンに酢の嫌な臭いが充満しません。',
        '炭酸カルシウム水垢に対するキレート溶解力が極めて高い。',
        'デロンギなど欧州主要エスプレッソマシンメーカーも推奨する成分。'
      ],
      item2Pros: [
        'どこのスーパーでも手に入り、常備している家庭が多い。',
        '粉末を溶かす手間がなく、そのまま注げる。',
        '日常の拭き掃除など多目的に使える。'
      ],
      useCases: [
        { situation: 'エスプレッソマシンの内部洗浄', recommendation: '必ず食用クエン酸を使用してください。酢を使うとボイラー内に臭いが焼き付き、エスプレッソの味が台無しになります。' },
        { situation: '電気ケトルの底に付いた白い斑点水垢', recommendation: 'クエン酸大さじ1を入れて満水沸騰させ、15分放置してすすぐだけで無臭ピカピカになります。' },
        { situation: 'ドリップ式コーヒーメーカーの湯垢落とし', recommendation: 'どちらも可能ですが、クエン酸なら1回のお湯通しで洗浄完了します。' }
      ],
      safetyNotes: [
        '大理石などの天然石にはクエン酸を使わないでください。酸で表面が溶けてツヤが失われます。',
        '沸騰直後の洗浄液を捨てる際は、蒸気による火傷に十分注意してください。',
        '塩素系漂白剤と一緒に使うことは厳禁です（猛毒の塩素ガスが発生します）。'
      ],
      faqs: [
        { question: 'なぜ高級コーヒーメーカーはお酢の使用を禁止しているのですか？', answer: 'お酢に含まれる酢酸が、内部のゴムパッキンや真鍮パーツを腐食させて水漏れを引き起こす恐れがあるためです。また、酢酸の揮発臭が加熱管に焼き付くと、その後のコーヒーの香りを損ないます。' },
        { question: 'ケトルの水垢取りに必要なクエン酸の量は？', answer: '水1Lに対し大さじ1〜2杯（約15〜30g）が目安です。水を入れて沸騰させ、電源を切って15分ほど置いた後、お湯を捨てて水洗いしてください。' },
        { question: '万が一クエン酸がケトル内に微量残っていても害はありませんか？', answer: '食品グレードのクエン酸はレモンや柑橘類に含まれる天然成分と同じですので、すすぎ後に万が一微量が残留していても人体に無害です。' }
      ],
      relatedComparisons: ['bleach-vs-vinegar', 'baking-soda-vs-bar-keepers-friend', 'stainless-steel-vs-enamel-cookware'],
      relatedItems: ['/airfryer/baking-soda', '/microwave/vinegar'],
      technicalSpecs: enComparisons[1].technicalSpecs
    },
    {
      slug: 'dawn-vs-castile-soap-cast-iron',
      category: 'cookware',
      item1: 'ドーン食器用洗剤（中性洗剤）',
      item2: '液体カスティール石鹸（植物油脂石鹸）',
      winner: 'item1',
      verdict: '現代の食器用洗剤はスキレットやダッチオーブンに完全に安全です。合成界面活性剤は料理の油汚れのみを落とし、焼き付いたシーズニング皮膜（重合油）は落としません。純石鹸はミネラルと結合してベタつく石鹸カスを残す原因になります。',
      table: [
        { aspect: '化学的性質', item1Value: '中性合成界面活性剤（高級アルコール系）', item2Value: '天然油脂ケン化石鹸（脂肪酸カリウム塩）' },
        { aspect: 'シーズニング油膜への影響', item1Value: '高温重合したポリマー皮膜には一切ダメージを与えない', item2Value: '熱やミネラルと反応し、表面にベタつく石鹸カスを形成しやすい' },
        { aspect: '油汚れの洗浄力', item1Value: '油汚れを強力に乳化。お湯ですすぐだけで残留ゼロ', item2Value: '硬水環境では泡立ちが悪く、膜が残りやすい' },
        { aspect: '残留臭と酸化臭（油の酸化）', item1Value: 'すすぎが素早く、油臭さや変質臭が残らない', item2Value: '残った遊離脂肪酸が鉄の微細孔で酸化し、油臭くなる懸念' },
        { aspect: '強アルカリ（苛性ソーダ）の有無', item1Value: '遊離アルカリは0%（中性〜弱酸性）', item2Value: 'ケン化法で作られるが、完成品に遊離アルカリはない' }
      ],
      item1Pros: [
        '「鉄鍋に洗剤を使ってはいけない」という昔の迷信を打破。現代の洗剤なら油膜は剥がれません。',
        'ギトギトの肉汁や焦げ付きを、金タワシでガシガシ擦らずに優しく落とせます。',
        '泡切れが良く、棚にしまっている間に油が酸化して嫌な匂いを放つ心配がありません。'
      ],
      item2Pros: [
        '100%植物由来で生分解性が高く環境に優しい。',
        '合成着色料や発泡剤を含まず、手肌に非常に優しい。',
        'キャンプなどアウトドアでの多用途洗浄に向いている。'
      ],
      useCases: [
        { situation: '毎日のスキレット調理後の後片付け', recommendation: 'お湯と少量の食器用洗剤、柔らかいスポンジで洗い、コンロで火にかけて水分を飛ばして薄く油を塗ります。' },
        { situation: '水道水の硬度が高い地域での洗浄', recommendation: '食器用洗剤を選んでください。純石鹸はカルシウムと反応して白い石鹸カスが鉄肌に付着します。' },
        { situation: '自然環境への負荷を減らしたいキャンプ', recommendation: '水場から離れた場所で生分解性石鹸を使い、しっかりお湯で流して火にかけて乾燥させます。' }
      ],
      safetyNotes: [
        '鉄鍋を一晩中水につけ置きしたり、食洗機に入れたりしてはいけません。即座に赤サビが発生します。',
        '洗った後は必ずコンロの弱火に2〜3分かけ、微細な孔に入り込んだ水分を完全に蒸発させてください。',
        '「鉄鍋に洗剤NG」は19世紀の苛性ソーダ（強アルカリ）が残留した手作り石鹸時代の話です。'
      ],
      faqs: [
        { question: '食器用洗剤で洗うと本当にシーズニングは落ちないのですか？', answer: '落ちません！シーズニングは単に油が乗っている状態ではなく、200℃以上の熱で脂肪酸が重合して鉄の表面に強く結合した硬いポリマー膜です。中性洗剤は料理の油汚れを乳化するだけで、重合した被膜を分解する化学力はありません。' },
        { question: 'なぜ無添加石鹸で鉄鍋を洗うとベタつくことがあるのですか？', answer: '石鹸成分が水道水中のカルシウムやマグネシウムと反応して、水に溶けない「石鹸カス」を作るためです。また、石鹸に含まれる植物油分が鉄の表面に残り、酸化してベタつきや油臭さの原因になります。' },
        { question: '洗剤で洗った後の正しいお手入れ方法は？', answer: '洗剤で汚れを落としてお湯ですすいだら、タオルで拭いてコンロの火にかけ、水分を完全に飛ばします。温かいうちに高発煙点の植物油（米油やサラダ油）を1〜2滴垂らし、キッチンペーパーでサラサラになるまで拭き上げます。' }
      ],
      relatedComparisons: ['baking-soda-vs-bar-keepers-friend', 'stainless-steel-vs-enamel-cookware', 'bleach-vs-vinegar'],
      relatedItems: ['/airfryer/baking-soda', '/dishwasher/cast-iron-skillet'],
      technicalSpecs: enComparisons[2].technicalSpecs
    },
    {
      slug: 'baking-soda-vs-bar-keepers-friend',
      category: 'cleaning',
      item1: '重曹（炭酸水素ナトリウム）',
      item2: 'バーキーパーズフレンド（BKFクレンザー）',
      winner: 'depends',
      verdict: 'ステンレス鍋の高熱による虹色変色（ヒートチント）や頑固な焦げ付きにはバーキーパーズフレンド（シュウ酸＋研磨剤）が最強です。フッ素加工鍋の外側やホウロウ鍋の日常汚れ、脱臭には重曹（弱アルカリ・ソフト研磨）が安全です。',
      table: [
        { aspect: '化学的分類と主成分', item1Value: '弱アルカリ性塩（pH 8.3、100% 炭酸水素ナトリウム）', item2Value: '酸性研磨剤（pH 1.5〜2.5、シュウ酸＋長石系微粒子）' },
        { aspect: '研磨剤の硬度（モース硬度）', item1Value: '非常に柔らかい（モース硬度 約2.5）；ステンレスやガラスを傷つけない', item2Value: '中程度（モース硬度 約6.0）；プラスチックやフッ素樹脂は傷つく恐れ' },
        { aspect: 'ステンレスの虹色変色の除去', item1Value: '効果なし（酸化クロム被膜を化学還元できない）', item2Value: '極めて高い（シュウ酸が金属酸化物をキレート溶解し元の輝きに）' },
        { aspect: '焦げ付き・黒ずみの除去力', item1Value: '軽い焦げにはペーストで対応可能だが、焼き付いた汚れには時間がかかる', item2Value: 'シュウ酸と微研磨のダブル効果で頑固な焦げを素早く分解' },
        { aspect: '食品安全性', item1Value: '100%食品グレード。ペットや子供がいる家庭でも安心', item2Value: '誤飲有害。使用後は食器用洗剤とお湯でしっかり洗い流す必要あり' }
      ],
      item1Pros: [
        '100%食品グレードで無害。口に入る調理器具に気兼ねなく使えます。',
        '研磨粒子がとても柔らかいため、ホウロウやガラスを傷つけません。',
        '魚や玉ねぎなどの酸性生ゴミ臭を化学的に中和消臭。'
      ],
      item2Pros: [
        'ステンレス鍋に現れる虹色の焼きムラやカルキ汚れを一発で落とす名品。',
        'シュウ酸の還元作用により、擦らずとも金属のくすみを消し去ります。',
        'ル・クルーゼなどのホウロウ鍋の外側に付いた頑固な黄ばみも新品同様に復元。'
      ],
      useCases: [
        { situation: 'ステンレスフライパンが高熱で虹色に変色したとき', recommendation: '必ずバーキーパーズフレンドを使用してください。湿らせて粉を振り、柔らかいスポンジで1分磨くだけで新品の輝きが戻ります。' },
        { situation: 'ホウロウ鍋（ル・クルーゼ）内側の茶渋・着色汚れ', recommendation: 'まずは重曹ペーストで優しく洗ってください。落ちない頑固な着色にはBKF液体タイプを優しく使用します。' },
        { situation: '電子レンジ庫内や冷蔵庫の拭き掃除', recommendation: '重曹水またはペーストを使用。密閉空間に強い酸性薬品を使うのは避けましょう。' }
      ],
      safetyNotes: [
        'アルミ鍋、鉄鍋（シーズニング済み）、テフロン等のフッ素加工面にはバーキーパーズフレンドを使わないでください。',
        'BKFを使う際は手荒れを防ぐためゴム手袋の着用を推奨します。',
        'BKFで磨いた調理器具は、次回調理する前に必ず中性洗剤とお湯で完全に洗い流してください。'
      ],
      faqs: [
        { question: 'なぜステンレスの虹色汚れは重曹ではなくBKFでしか落ちないのですか？', answer: 'ステンレスを強火にかけると、表面のクロムが酸化して光の干渉縞（虹色）が現れます。重曹はアルカリ性のため金属酸化物を溶かせません。BKFに含まれるシュウ酸が鉄やクロムの酸化物を分子レベルでキレート結合して溶かすため、傷をつけずに変色を除去できるのです。' },
        { question: 'バーキーパーズフレンドはフッ素加工（テフロン）のフライパンに使えますか？', answer: '使えません！BKFに含まれる研磨剤（長石）の硬度は約6.0で、フッ素樹脂コーティング（硬度約1.0）よりも遥かに硬いです。擦るとコーティングに無数の傷が付き、焦げ付きやすくなって寿命を縮めます。' },
        { question: '重曹とバーキーパーズフレンドを混ぜて使うと効果が上がりますか？', answer: '混ぜてはいけません。重曹はアルカリ性、BKFは酸性です。混ぜると激しく発泡して中和反応が起き、BKFの最大の特徴であるシュウ酸のキレート洗浄力が完全に失われてしまいます。' }
      ],
      relatedComparisons: ['stainless-steel-vs-enamel-cookware', 'dawn-vs-castile-soap-cast-iron', 'citric-acid-vs-vinegar-descaling'],
      relatedItems: ['/airfryer/baking-soda', '/microwave/vinegar'],
      technicalSpecs: enComparisons[3].technicalSpecs
    },
    {
      slug: 'stainless-steel-vs-enamel-cookware',
      category: 'cookware',
      item1: '3層クラッドステンレス鍋・フライパン',
      item2: 'ホーロー鋳鉄鍋（ル・クルーゼ・ストウブ等）',
      winner: 'depends',
      verdict: 'ステンレス多層鍋は高温での肉の焼き付け、ソースのデグラッセ、軽量性、食洗機対応など日常の万能ワークホースです。ホーロー鋳鉄鍋は圧倒的な蓄熱性と密閉性を誇り、じっくり煮込むシチューや無水調理、パン焼きに最適です。',
      table: [
        { aspect: '蓄熱性と熱容量', item1Value: '中程度の蓄熱性。火加減に対するレスポンスが極めて俊敏', item2Value: '圧倒的な熱容量。熱を長時間キープし、鍋全体から柔らかく加熱' },
        { aspect: '酸性食材への耐性（トマト・ワイン）', item1Value: '完全不活性（食品グレード18/10ステンレス）', item2Value: '完全不活性（ガラス質のホーローエナメル加工）' },
        { aspect: '焼き色と鍋底の焦げ付き（フォンド）', item1Value: '肉の表面を香ばしく焼き、ワイン等で溶かしてソースにするのに最適', item2Value: '焼き色は付くが、鍋が重いためソース作りのあおり動作が困難' },
        { aspect: '耐久性と耐熱衝撃性', item1Value: '不壊。落としても割れず、急冷してもヒビが入らない', item2Value: '表面がガラス質のため、急冷や衝撃でホーローが欠ける恐れあり' },
        { aspect: '重量と扱いやすさ', item1Value: '軽量〜中量（1〜2kg）。片手でのフライパン返しも容易', item2Value: '非常に重い（3.5〜6kg）。両手での取り扱いが必須' }
      ],
      item1Pros: [
        '圧倒的なタフさ：金属ヘラの使用、急冷、食洗機にも耐え、落としても割れません。',
        '火加減の強弱がダイレクトに伝わるため、繊細な温度管理や素早いソース作りに最適。',
        '毎日気兼ねなくガシガシ使える軽さと手入れの気楽さ。'
      ],
      item2Pros: [
        '比類なき蓄熱性：硬いお肉もトロトロに煮崩れなく仕上げる保温力。',
        '表面がツルツルのガラス質エナメルで覆われているため、油ならし（シーズニング）が不要。',
        '美しく鮮やかなデザインで、オーブンからそのまま食卓へサーブできます。'
      ],
      useCases: [
        { situation: 'ステーキの表面をカリッと焼き、赤ワインでグレービーソースを作る', recommendation: '3層ステンレスが最適です。鍋肌に付いた旨味の焦げ（フォンド）をワインでこそげ落として極上ソースが作れます。' },
        { situation: '牛すね肉の赤ワイン煮込みや本格カレー', recommendation: 'ホーロー鋳鉄鍋（ストウブなど）が最適。重いフタが水分を循環させ、弱火でじっくり熱を通します。' },
        { situation: '家庭のオーブンでカンパーニュ（ハード系パン）を焼く', recommendation: '予熱したホーロー鍋に入れてフタをして焼くことで、業務用スチームオーブン同等のパリッとしたクープが立ちます。' }
      ],
      safetyNotes: [
        '熱々のホーロー鍋に冷水を注ぐなど、急激な温度変化を与えないでください。ガラス質のホーローにヒビ（貫入）が入ります。',
        'ホーロー鍋の中では金属ヘラや金属製ハンドブレンダーを使わず、木製やシリコン製の調理器具を使用してください。',
        'ステンレスフライパンは、油を入れる前にしっかり予熱（水滴が玉になって転がる温度）することで食材のこびりつきを防げます。'
      ],
      faqs: [
        { question: 'トマトソースなど酸の強い料理はどちらの鍋でも作れますか？', answer: 'はい、どちらでも全く問題ありません！ホーローも18/10ステンレスも酸に対して化学的に完全に安定しています。鉄分が溶け出したり、鍋の皮膜が剥がれたりする心配なく、長時間のトマト煮込みを楽しめます。' },
        { question: 'ステンレスとホーロー鍋、どちらが焦げを落としやすいですか？', answer: '普段の汚れ落ちはガラス質のホーローの方が滑らかです。ただし、頑固に焦げ付いてしまった場合、ステンレスなら研磨剤や金タワシで力強く擦り落とせますが、ホーローは傷がつくため優しく重曹などで煮沸洗浄する必要があります。' },
        { question: 'ホーロー鋳鉄鍋は食洗機で洗えますか？', answer: '一部メーカーで食洗機可とされていますが、手洗いを強くおすすめします。食洗機の強いアルカリ洗剤と研磨成分により、ホーローのツヤが失われて表面が曇り、将来的にこびりつきやすくなります。' }
      ],
      relatedComparisons: ['baking-soda-vs-bar-keepers-friend', 'dawn-vs-castile-soap-cast-iron', 'bleach-vs-vinegar'],
      relatedItems: ['/airfryer/parchment-paper', '/dishwasher/cast-iron-skillet'],
      technicalSpecs: enComparisons[4].technicalSpecs
    }
  ];
}

const ptComparisons = buildPtComparisons();
const zhComparisons = buildZhComparisons();
const jaComparisons = buildJaComparisons();

function appendComparisons(filename, newItems) {
  const filePath = path.join(dataDir, filename);
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const existingSlugs = new Set(existing.map(item => item.slug));

  let added = 0;
  for (const item of newItems) {
    if (!existingSlugs.has(item.slug)) {
      existing.push(item);
      added++;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
  console.log(`[${filename}] Added ${added} new comparisons. Total: ${existing.length}`);
}

appendComparisons('comparisons.json', enComparisons);
appendComparisons('comparisons.es.json', esComparisons);
appendComparisons('comparisons.pt.json', ptComparisons);
appendComparisons('comparisons.zh-cn.json', zhComparisons);
appendComparisons('comparisons.ja.json', jaComparisons);

console.log('\nWave 10 comparisons addition complete!');
