const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-26';

console.log('=== GENERATING WAVE 84 AUTHORITATIVE SAFETY GUIDES (125 -> 128 across 5 languages) ===');

const guidesEn = [
  {
    slug: 'freezing-mason-jars-vacuum-bags-frost-free-freezer-burn-safety',
    title: 'Freezing Mason Jars, Vacuum-Sealed Fish & Frost-Free Meat: Preventing Glass Shatter, Ice Sublimation & Anaerobic Botulism Hazards',
    category: 'freezer',
    excerpt: 'Why shouldered Mason jars explode in freezers, how frost-free defrost cycles drive ice sublimation and MDA rancidity, and the FDA rule requiring you to slit vacuum-sealed fish bags before thawing.',
    date: waveDate,
    readTime: '17 min read',
    author: 'IsItKitchenSafe',
    intro: 'Home freezing seems effortless until a batch of broth shatters a Mason jar across the bottom shelf, prime ribeye emerges coated in white snow with leathery gray edges, or a vacuum-sealed salmon fillet is left thawing inside an airtight pouch. Every one of those kitchen mishaps stems from well-defined food physics and microbiology: liquid water expands roughly 9% upon freezing into hexagonal ice crystals, frost-free freezers warm intermittently to melt evaporator coils—pumping water vapor out of food into package frost—and oxygen-free vacuum packaging creates an anaerobic pocket where cold-tolerant Clostridium botulinum Type E can generate deadly neurotoxin above 38°F (3.3°C). Mastering jar geometry, vapor-barrier packaging, and safe thawing preserves both peak culinary quality and strict USDA/FDA safety.',
    sections: [
      {
        title: 'Why Regular Mason Jars Shatter in Freezers: 9% Ice Expansion & Shouldered Stress',
        content: 'When liquid soup, bone broth, or tomato sauce freezes to 32°F (0°C) and below, hydrogen-bonded water molecules rearrange into an open hexagonal crystalline lattice that occupies approximately 9% more volume than liquid water. In standard narrow-mouth or regular-mouth Mason jars, curved glass shoulders act as a mechanical bottleneck: as ice freezes inward from the walls and pushes upward, the expanding ice plug jams against the curved shoulder, generating immense hoop tensile stress that fractures the annealed soda-lime glass. Only straight-sided, wide-mouth jars explicitly labeled freezer-safe (typically 8 oz or 16 oz / 1 pint)—filled leaving a full 1-inch (2.5 cm) expansion headspace and refrigerated completely cold before freezing with lids left loose until solid—reliably absorb upward expansion.',
        type: 'warning',
        boxText: 'MASON JAR FREEZER RULE: Never freeze liquids in narrow-neck or shouldered glass jars. Use straight-sided wide-mouth pint jars, chill food first, leave ≥1 inch (2.5 cm) headspace, and keep lids loose until frozen solid.'
      },
      {
        title: 'Frost-Free Defrost Cycles (0°F to 25°F) & Ice Sublimation Kinetics',
        content: 'Even at a steady 0°F (-18°C), solid ice exerts an equilibrium vapor pressure of roughly 125.4 Pascals (0.94 mmHg). Worse, residential frost-free (auto-defrost) freezers activate internal heating elements every 8 to 12 hours to melt frost off evaporator coils, swinging cabinet air from 0°F up toward 25°F (-18°C to -4°C). That repeated thermal swing creates a steep vapor-pressure deficit (P_ice > P_air) whenever meat sits in permeable supermarket PVC stretch wrap (WVTR ~4.8 g/m²/24hr) or loose air pockets. Ice crystals sublimate directly from solid to vapor, migrating out of surface muscle cells and re-freezing as snowy frost on the inside of the bag while leaving desiccated microscopic "honeycomb" cavities behind.',
        type: 'fact',
        boxText: 'FROST-FREE PHYSICS: Auto-defrost cycles swing freezer air every 8–12 hours, driving solid-to-vapor sublimation out of poorly wrapped food and turning internal moisture into snowy bag frost.'
      },
      {
        title: 'MDA Lipid Peroxidation & USDA Safety: Quality Defect vs. Food Poisoning',
        content: 'Once sublimation empties surface pores, oxygen diffuses deep into unprotected cell membranes and initiates free-radical auto-oxidation of polyunsaturated fatty acids (PUFAs), yielding malondialdehyde (MDA) and volatile hexanal. Meat-science TBARS benchmarks indicate sensory rancidity ("stale cardboard") becomes pronounced above 2.0 mg MDA/kg, while actin and myosin proteins form irreversible disulfide cross-links that chew tough and dry. Crucially, the USDA Food Safety and Inspection Service (FSIS) confirms freezer burn is strictly a quality loss, NOT foodborne spoilage: pathogens like Salmonella, E. coli, and Listeria cannot multiply at or below 0°F (-18°C). You can salvage affected steaks and roasts by trimming the outermost 1.5–3 mm dry crust while semi-frozen and braising low-and-slow in acidic liquids (wine, tomatoes, broth).',
        type: 'tip',
        boxText: 'USDA SALVAGE RULE: Freezer-burned meat is 100% safe against bacterial illness at ≤0°F (-18°C). Shave off the outer 2 mm dry rind semi-frozen and cook via acidic wet-heat braising rather than dry searing.'
      },
      {
        title: 'The Vacuum-Sealed Fish Botulism Trap: Always Slit Pouches Before Thawing',
        content: 'Multi-layer nylon/EVOH vacuum pouches (<0.05 g/m²/24hr WVTR and <15 cc/m²/24hr O₂ transmission) eliminate headspace air and extend pristine freezer quality 3 to 5 times longer than foam trays. However, vacuum sealing introduces an overlooked microbiological hazard during thawing: non-proteolytic Clostridium botulinum Type E spores commonly present on raw fish and seafood can germinate and produce heat-labile botulinum neurotoxin in oxygen-free environments at temperatures as low as 38°F (3.3°C)—within the range of many residential refrigerators! FDA Seafood HACCP guidance explicitly instructs consumers to cut, slit, or open vacuum-sealed fish packaging (or remove from the bag onto a plate) BEFORE thawing in a refrigerator below 38°F.',
        type: 'warning',
        boxText: 'CRITICAL FDA VACUUM-FISH RULE: Non-proteolytic C. botulinum Type E can grow in sealed oxygen-free pouches above 38°F (3.3°C). Always slit open or remove vacuum-sealed seafood from airtight pouches before thawing.'
      },
      {
        title: 'Safe Thawing Methods: Why Hot Water & Counter Thawing Fail',
        content: 'Never thaw frozen meat or poultry on a warm kitchen counter or submerged in hot water. While the core remains frozen solid, exterior tissue enters the 40°F–140°F (4.4°C–60°C) Danger Zone, allowing surface bacteria to double every 20 minutes. Choose one of three USDA-approved thawing paths: (1) Refrigerator thawing at ≤38°F–40°F (allow ~24 hours per 4–5 lb / 1.8–2.3 kg, placing meat in a bottom-shelf drip tray); (2) Cold-water thawing in a leak-proof bag submerged in cold tap water (≤70°F / 21°C), changing the water every 30 minutes (~30 minutes per pound); or (3) Microwave defrosting only when cooking immediately afterward.',
        type: 'success',
        boxText: '3 SAFE THAW PATHS: Fridge (≤40°F, 24h per 4–5 lb), submerged cold tap water changed every 30 minutes, or microwave defrost followed by immediate cooking—never hot water or room-temperature counters.'
      }
    ],
    conclusion: 'Preventing freezer failures takes three engineering habits: match jar geometry to 9% ice expansion (straight-sided wide-mouth pints with 1-inch headspace), block frost-free sublimation with EVOH vacuum pouches or foil-plus-freezer-bag double wraps, and slit open vacuum-sealed fish and low-acid pouches before refrigerator or cold-water thawing.',
    faqs: [
      {
        question: 'Can you freeze liquids in Mason jars without them breaking?',
        answer: 'Only if you use straight-sided, wide-mouth freezer-safe jars (such as 8 oz or 16 oz pints with no curved shoulder), chill the liquid completely in the fridge first, leave at least 1 inch (2.5 cm) of headspace for 9% ice expansion, and leave the lid loose until frozen solid.'
      },
      {
        question: 'Do I have to cut open vacuum-sealed fish before thawing it in the fridge?',
        answer: 'Yes. FDA guidance warns that non-proteolytic Clostridium botulinum Type E spores on seafood can grow and produce botulinum toxin inside sealed oxygen-free vacuum bags at temperatures above 38°F (3.3°C). Always slit the bag or remove the fish onto a covered dish before thawing.'
      },
      {
        question: 'Is freezer-burned meat safe to eat or does it cause food poisoning?',
        answer: 'According to USDA FSIS, freezer-burned meat is 100% microbiologically safe to eat. Pathogenic bacteria cannot multiply at 0°F (-18°C) or below. Freezer burn is physical ice sublimation and lipid oxidation—simply trim the outer 2 mm dry edge and cook with moist heat.'
      },
      {
        question: 'Why does frost-free freezer meat get freezer burn faster than chest freezer meat?',
        answer: 'Frost-free upright freezers run heating elements every 8–12 hours, swinging temperatures from 0°F up toward 25°F (-18°C to -4°C). That repeated pressure gradient drives ice sublimation out of food into package snow much faster than a static manual-defrost deep chest freezer.'
      },
      {
        question: 'Can I thaw frozen chicken or vacuum-sealed steak in warm or hot water?',
        answer: 'No. Warm or hot water rapidly warms the outer surface into the 40°F–140°F Danger Zone while the interior is still frozen, multiplying pathogens. Use a refrigerator, cold tap water changed every 30 minutes, or cook directly from frozen allowing 50% longer cooking time.'
      }
    ],
    relatedTools: [
      { name: 'Freezer Burn, Ice Sublimation & Lipid Peroxidation Modeler', url: '/tools/freezer-burn-sublimation-modeler/' },
      { name: 'USDA Meat & Turkey Safe Thawing Calculator', url: '/tools/meat-thawing-calculator/' },
      { name: 'Appliance Thermal Shock & Shatter Threshold Simulator', url: '/tools/thermal-shock-simulator/' }
    ]
  },
  {
    slug: 'recycled-cardboard-mosh-moah-bamboo-melamine-eu-2026-safety',
    title: 'Recycled Food Boxes (MOSH/MOAH) & "Eco Bamboo-Melamine" Mugs: Inside the 2026 EU Mineral Oil Limits, Genotoxic Ink Migration & Formaldehyde Bans',
    category: 'materials',
    excerpt: 'Why recycled pizza and cereal boxes leach mineral oil aromatic hydrocarbons (MOAH), what the May 2026 EU vote sets for 2027 limits, and why "eco bamboo-melamine" tableware was banned for formaldehyde leaching.',
    date: waveDate,
    readTime: '17 min read',
    author: 'IsItKitchenSafe',
    intro: 'Two of the most misleading "eco-friendly" packaging and tableware trends in modern kitchens are unlined recycled paperboard boxes holding hot, greasy foods and "natural bamboo fiber" mugs or kids plates marketed as green alternatives to plastic. On May 13, 2026, the European Union Standing Committee on Plants, Animals, Food and Feed (SCoPAFF) formally voted to adopt legally binding maximum levels for genotoxic Mineral Oil Aromatic Hydrocarbons (MOAH) under Regulation (EU) 2023/915 (taking effect January 1, 2027), alongside EU-wide enforcement bans withdrawing unauthorized "bamboo-melamine" composite dishware after repeated formaldehyde and melamine migration failures. Knowing how hydrocarbons migrate through cardboard and why heated bamboo-resin cups leach carcinogens keeps unintended chemical residues out of family meals.',
    sections: [
      {
        title: 'EU 2026 Vote on MOAH & MOSH: Why Recycled Paperboard Leaches Into Pizza & Cereal',
        content: 'Mineral Oil Hydrocarbons fall into two chemical families evaluated by EFSA: Mineral Oil Saturated Hydrocarbons (MOSH, tracked under 2026–2029 EU monitoring frameworks) and Mineral Oil Aromatic Hydrocarbons (MOAH). EFSA concluded that 3- to 7-ring polyaromatic MOAH fractions can act as genotoxic carcinogens with no safe intake threshold. On May 13, 2026, EU SCoPAFF approved binding legal MOAH maximum levels (C10–C50) effective January 1, 2027: 0.50 mg/kg for low-fat dry foods (≤4% fat like flour and cereals), 1.0 mg/kg for medium-fat foods (>4% to ≤50% fat), and 2.0 mg/kg for high-fat foods (>50% fat, with phased step-downs for specific oils through 2030). Recycled corrugated pizza cartons, takeout boxes, and unlined cardboard packets contain residual newspaper inks, adhesives, and lubricant oils that volatilize and partition rapidly into hot cheese, oils, and dry grains unless blocked by an internal PET/EVOH functional barrier.',
        type: 'warning',
        boxText: 'MOAH MIGRATION RULE: Genotoxic MOAH (C10–C50) migrates from recycled paperboard inks into hot greasy pizza and dry cereals. Always transfer hot takeout out of cardboard cartons onto ceramic or glass plates immediately.'
      },
      {
        title: 'The EU "Bamboo-Melamine" Ban: Why "Eco" Bamboo Mugs Leach Formaldehyde',
        content: 'Walk into a gift shop or search online for "eco bamboo travel mug" or "bamboo kids bowl" and most rigid products are NOT pure bamboo—they are molded melamine-formaldehyde thermoset plastic mixed with ground bamboo or corn grass flour. Under Regulation (EU) No 10/2011 and EC No 1935/2004, ground bamboo fiber is an unauthorized plastic additive (classified as a grass, not an evaluated wood flour). Worse, hydrophilic plant fibers swell when exposed to hot coffee, tea (85°C–95°C), acidic juice (pH < 4.5), or microwave heat, cracking the melamine-formaldehyde polymer network. Across EU RASFF market crackdowns, bamboo-melamine mugs repeatedly leached carcinogenic formaldehyde far above the 15 mg/kg Specific Migration Limit (SML) and melamine monomer above the 2.5 mg/kg SML—prompting EU-wide withdrawals while EFSA SVHC screening also flagged melamine for male reproductive toxicity reassessment.',
        type: 'warning',
        boxText: 'BAMBOO-MELAMINE BAN: Composite "bamboo fiber" mugs and kids bowls contain unauthorized melamine-formaldehyde resin that hydrolyzes in hot drinks or acidic foods, leaching formaldehyde (>15 mg/kg SML) and melamine (>2.5 mg/kg SML).'
      },
      {
        title: 'EFSA Styrene (#6 PS) Re-Assessment (40 µg/kg SML) & Takeout Container Limits',
        content: 'Consumers often confuse polystyrene (#6 PS) foam clamshells with recycled cardboard or bioplastics. In its scientific re-evaluation of oral styrene exposure from food contact materials, EFSA concluded styrene does not induce genotoxicity after oral dietary exposure at realistic intake levels and supported codifying a strict 40 µg/kg (40 ppb) Specific Migration Limit under Regulation (EU) No 10/2011. Even with that oral benchmark, #6 PS softens at 160°F–195°F (70°C–90°C) and fails structural integrity in microwaves or hot greasy oil—meaning hot soups, sizzling stir-fries, and reheated leftovers still belong in glass or porcelain rather than #6 foam or rigid polystyrene lids.',
        type: 'fact',
        boxText: 'STYRENE & HOT TAKEOUT: EFSA set a tight 40 µg/kg Specific Migration Limit for #6 polystyrene food contact, and #6 PS softens above 70°C—never microwave or store boiling foods in #6 Styrofoam or PS lids.'
      },
      {
        title: 'How to Spot Unlined Recycled Paperboard & Composite Melamine Traps at Home',
        content: 'Run a 30-second pantry and cupboard audit: (1) Check reusable matte travel mugs and children’s divided trays—if they feel rigid, warm-matte, and claim "bamboo fiber / melamine-free" without naming 100% solid carved wood, silicone, #5 PP, or steel, check product disclosures or retire them from hot/acidic use; (2) Never reheat pizza, pastries, or fried chicken inside folded recycled delivery boxes or grease-stained takeout cartons; (3) Store bulk dry grains, rolled oats, pasta, and nuts in airtight borosilicate glass Mason jars instead of bare unlined cardboard boxes in warm pantries where volatile mineral oils accumulate over months.',
        type: 'tip',
        boxText: '30-SECOND PANTRY AUDIT: Decant dry oats, flour, and cereal out of bare recycled cardboard into glass jars, and never use rigid "bamboo fiber" composite mugs for boiling coffee, tea, or microwaving.'
      },
      {
        title: 'Zero-Migration Kitchen Swaps: Glass, Porcelain, 304/316 Steel & Solid Hardwood',
        content: 'Eliminating packaging hydrocarbon and resin-monomer migration does not require specialty cookware: (1) Serving & Reheating—transfer hot takeout pizza, curry, and soup immediately onto lead-free porcelain, stoneware, or Type 3.3 borosilicate glass; (2) Kids Tableware & Travel Mugs—choose electropolished 304 (18/8) or 316 stainless steel (non-microwave), tempered borosilicate glass with silicone sleeves, or verified 100% platinum-cured silicone; (3) Cutting & Serving Boards—pick pure oiled solid maple, walnut, or beechwood rather than resin-bound bamboo composite fibers.',
        type: 'success',
        boxText: 'INERT UPGRADES: Swap "bamboo-melamine" cups and bare recycled takeout cartons for Type 3.3 borosilicate glass, glazed porcelain, or 304/316 stainless steel to eliminate MOAH, styrene, and formaldehyde migration.'
      }
    ],
    conclusion: 'Marketing buzzwords like "recycled fiber" and "eco bamboo" do not guarantee chemical safety in contact with hot or fatty foods. By transferring hot takeout out of recycled paperboard immediately, decanting dry staples into glass jars, and replacing unauthorized bamboo-melamine composite tableware with inert glass, porcelain, or 304 stainless steel, you stay well ahead of 2026–2027 EU food-contact protections.',
    faqs: [
      {
        question: 'Are "eco-friendly" bamboo coffee mugs and kids plates safe for hot drinks?',
        answer: 'No, if they are rigid composite "bamboo-melamine" ware. The EU banned bamboo-melamine composite dishware because ground bamboo is an unauthorized plastic additive that causes cracks and accelerates migration of carcinogenic formaldehyde (>15 mg/kg SML) and melamine (>2.5 mg/kg SML) into hot tea, coffee, or acidic juices.'
      },
      {
        question: 'What are MOSH and MOAH in food packaging and why did the EU set 2027 limits?',
        answer: 'MOSH (Mineral Oil Saturated Hydrocarbons) and MOAH (Mineral Oil Aromatic Hydrocarbons) migrate into food from recycled paperboard inks, adhesives, and machinery oils. Because 3- to 7-ring MOAH fractions can be genotoxic carcinogens, EU SCoPAFF voted in May 2026 to enforce binding MOAH caps (0.50–2.0 mg/kg depending on fat content) starting January 1, 2027.'
      },
      {
        question: 'Is it safe to reheat leftover pizza inside the cardboard delivery box?',
        answer: 'No. Heating corrugated recycled pizza boxes accelerates volatilization and grease-partition extraction of residual printing inks, adhesives, and mineral oil hydrocarbons (MOSH/MOAH) directly into melted cheese, while cardboard also poses an oven/air-fryer fire risk.'
      },
      {
        question: 'Did EFSA ban styrene (#6 PS) takeout containers completely?',
        answer: 'No. In its re-evaluation, EFSA concluded styrene does not cause genotoxicity via oral dietary intake at realistic levels and backed a strict 40 µg/kg Specific Migration Limit. However, #6 polystyrene still softens at 70°C–90°C, so you should never microwave food in #6 containers.'
      },
      {
        question: 'How do I know if my dry food box protects against MOAH migration?',
        answer: 'Internal plastic barrier pouches made of PET, EVOH, or polyamide significantly slow mineral oil vapor transfer compared with bare recycled paperboard. For long-term storage of flour, oats, cereal, and nuts, transfer contents into airtight glass or food-grade #5 PP containers.'
      }
    ],
    relatedTools: [
      { name: 'Kitchen Plastic Leaching & Hot Food Container Checker', url: '/tools/kitchen-plastic-leaching-checker/' },
      { name: 'Dishwasher Melamine Formaldehyde & Cyanuric Acid Simulator', url: '/tools/dishwasher-melamine-leaching-simulator/' },
      { name: 'Plastic Recycling Code (#1–#7) Safety Checker', url: '/tools/plastic-code-checker/' }
    ]
  },
  {
    slug: 'galanz-retro-fridge-frigidaire-range-2026-cpsc-recalls-guide',
    title: '2026 Major Kitchen Appliance Recalls: Galanz Retro Fridge Fires, Frigidaire Gas Range Delayed Ignition & Front-Knob Range Fires — Check Your Serial Number',
    category: 'appliances',
    excerpt: 'Check active 2026 CPSC recalls for ~121,680 Galanz retro refrigerators (34 fires, 1 fatality), ~174,800 Frigidaire gas ranges (Recall #26-333 delayed ignition burns), and LG/Samsung front-knob range fire remedies.',
    date: waveDate,
    readTime: '17 min read',
    author: 'IsItKitchenSafe',
    intro: 'While small countertop gadgets dominate social media recall alerts, several of the highest-consequence 2026 U.S. Consumer Product Safety Commission (CPSC) actions involve full-size kitchen appliances running continuously in family homes. In July 2026, CPSC recalled roughly 121,680 Galanz retro refrigerators after 34 fire reports—including one fatal fire—stemming from an internal electrical short circuit; in March 2026, CPSC Recall #26-333 targeted approximately 174,800 Frigidaire, Frigidaire Gallery, and Frigidaire Professional gas ranges after 62 reports of delayed bake-burner ignition and 30 burn injuries; and hundreds of thousands of LG and Samsung front-knob slide-in electric ranges carry ongoing fire-prevention recalls alongside the CPSC November 19, 2026 holiday cooking safety warning. Checking your rear nameplate and oven-drawer serial sticker today takes under two minutes.',
    sections: [
      {
        title: 'Galanz Retro Refrigerators (July 30, 2026 CPSC Recall): 34 Fires & 1 Fatality',
        content: 'On July 30, 2026, the CPSC recalled approximately 121,680 Galanz Retro Refrigerators in the U.S. (plus over 10,000 units in Canada) sold at Home Depot and Amazon.com from January 2019 through September 2022 for $330–$520. Internal electrical components can short circuit and ignite, with CPSC documenting 34 fire reports including one fatality reported by a local fire department. Check the white rating label on the upper left-hand corner on the back of the fridge: affected models are BCD-215V-62H, GLR76TRDER, GLR76TBKER, GLR76TBEER, and GLR76TWEER bearing YYYYMM date codes from 201812 through 202012 (December 2018–December 2020). Unplug the refrigerator immediately, transfer perishables to a safe unit, and contact Galanz Americas (888-462-0579 or GalanzRetroFridgeRecall.expertinquiry.com) for a free technician in-home repair.',
        type: 'warning',
        boxText: 'GALANZ RETRO FRIDGE RECALL (JUL 2026): Unplug models BCD-215V-62H, GLR76TRDER, GLR76TBKER, GLR76TBEER, or GLR76TWEER (date codes 201812–202012) immediately due to short-circuit fire/fatality risk and book a free repair.'
      },
      {
        title: 'Frigidaire Gas Ranges (March 19, 2026 CPSC Recall #26-333): Delayed Bake-Burner Ignition',
        content: 'Issued March 19, 2026 under CPSC Recall #26-333, Electrolux Group recalled roughly 174,800 U.S. units (plus ~5,300 in Canada) of Frigidaire, Frigidaire Gallery, and Frigidaire Professional gas ranges sold nationwide at Lowe’s, Home Depot, and Frigidaire.com between June 2025 and January 2026. The CPSC logged 62 reports of delayed oven bake-burner ignition resulting in 30 burn injuries when accumulated gas ignites suddenly inside the cavity. Pull out the bottom storage drawer beneath the oven to check the nameplate: 23 models are covered—including FCFG3062AB/AS/AW, FCFG3083AS, FCRG3051BB/BS/BW, FCRG3052BB/BS/BW, FCRG3062AB/AS/AW, FCRG306LAF, FCRG3083AD/AS, GCFG3059BF, GCFG3060BD/BF, GCFG3070BF, GCRG3060BD/BF, and PCFG3080AF—within serial numbers VF52200000 through VF54399999. Stop using the OVEN immediately (CPSC notes the stovetop burners remain safe to use) and contact Electrolux (866-291-7633 or GasOvenBurnerRecall.com) for free in-home bake-burner replacement.',
        type: 'warning',
        boxText: 'FRIGIDAIRE RECALL #26-333 (MAR 2026): Stop using the oven immediately on affected models (serials VF52200000–VF54399999) due to delayed gas ignition flash burns; cooktop burners remain usable while awaiting free burner replacement.'
      },
      {
        title: 'LG & Samsung Slide-In Range Front-Knob Fires + CPSC Nov 19, 2026 Holiday Alert',
        content: 'Front-mounted control knobs on modern slide-in electric and induction ranges sit right at waist, toddler, and large-dog height—causing accidental bumps that turn burners onto high heat when pizza boxes, cutting boards, or empty cookware sit on the glass surface. Roughly 500,000 LG slide-in electric ranges and major Samsung slide-in electric range lines carry active CPSC recalls providing free warning decals, Control Lock guidance, or physical knob lock/cover kits. Ahead of peak winter cooking, the CPSC’s November 19, 2026 Holiday Kitchen Safety campaign reinforced three essential rules: engage the electronic Control Lock whenever the range is idle, keep all paper, plastic, and wood strictly off cooktop glass, and never leave stovetop frying unattended.',
        type: 'fact',
        boxText: 'FRONT-KNOB FIRE PREVENTION: Engage Control Lock / install free LG or Samsung recall knob covers, and never rest cardboard boxes, plastic lids, or mail on a front-knob cooktop—even briefly.'
      },
      {
        title: 'Where to Find Hidden Model, Serial & Date Plates on Major Kitchen Appliances',
        content: 'Unlike small blenders or coffee makers, large appliance rating stickers are tucked out of sight to protect them from heat and grease: (1) Refrigerators—check the upper-left rear exterior cabinet (Galanz) or interior upper-right fresh-food wall; (2) Ranges & Ovens—slide out the bottom warming/storage drawer completely and shine a phone flashlight along the inner left or right vertical chassis frame; (3) Countertop Air Fryer Ovens & Multi-Cookers (such as Gourmia GTF7530 under Nov 5, 2026 Recall #27-069 or Tristar Y6D-36 under Oct 15, 2026 Warning #27-030)—check the underside base plate once cooled and unplugged. Snap a clear photo of every label so you can verify recalls in seconds.',
        type: 'tip',
        boxText: '2-MINUTE AUDIT: Photograph the nameplate on the back of compact fridges, inside the bottom oven drawer of gas/electric ranges, and beneath countertop appliances—then verify against CPSC.gov before buying secondhand.'
      },
      {
        title: 'Secondhand & Rental Kitchen Checklist: Why Unrepaired Recalls Linger Years Later',
        content: 'Rental apartments, dorm kitchens, Airbnb properties, and Facebook Marketplace resales are the #1 vector where recalled appliances stay plugged in years after federal warnings. Under U.S. law, it is illegal to resell or donate any recalled consumer product—yet unreturned retro mini-fridges from 2019–2020 and recently moved-in 2025–2026 gas ranges frequently evade manufacturer mailers sent to original owners. Always verify model and serial numbers on move-in day, confirm free technician repairs have been completed (look for service completion stickers or manufacturer confirmation), and report unsafe appliance incidents at SaferProducts.gov.',
        type: 'success',
        boxText: 'RENTAL & RESALE RULE: Verify major fridge and stove serial numbers on move-in or before secondhand purchase. Free CPSC recall repairs apply to current owners even without original store receipts.'
      }
    ],
    conclusion: 'Two minutes with a phone flashlight can prevent an electrical kitchen fire or delayed gas-oven flash burn. Inspect rear labels on 2019–2022 Galanz retro refrigerators, check lower-drawer serial plates on 2025–2026 Frigidaire gas ranges (Recall #26-333), lock front knobs on LG and Samsung slide-in ranges, and claim free CPSC-mandated in-home repairs immediately.',
    faqs: [
      {
        question: 'Which Galanz retro refrigerators are recalled in 2026 and how dangerous is the defect?',
        answer: 'The July 30, 2026 CPSC recall covers ~121,680 U.S. units of models BCD-215V-62H, GLR76TRDER, GLR76TBKER, GLR76TBEER, and GLR76TWEER with rear label date codes 201812–202012. Internal electrical components can short circuit and ignite (34 fires and 1 fatality reported). Unplug immediately and contact Galanz for free repair.'
      },
      {
        question: 'Can I still use the stovetop on my recalled Frigidaire gas range (Recall #26-333)?',
        answer: 'Yes. According to the March 19, 2026 CPSC Recall #26-333 notice (models like FCFG3083AS, FCRG3083AS, GCFG3060BF, serials VF52200000–VF54399999), you must stop using the oven immediately due to delayed bake-burner ignition, but you may continue safely using the stovetop surface burners until Electrolux installs the free replacement burner.'
      },
      {
        question: 'Where is the date code on a Galanz retro fridge or serial number on a Frigidaire range?',
        answer: 'On Galanz retro refrigerators, the model number and YYYYMM date code are on a white label in the upper left-hand corner on the back of the unit. On Frigidaire gas ranges, pull out the bottom drawer beneath the oven to locate the model and serial nameplate.'
      },
      {
        question: 'Do I need my original store receipt to get a free CPSC appliance repair?',
        answer: 'No. Under federal CPSC recalls for Galanz refrigerators, Frigidaire gas ranges, and LG/Samsung slide-in ranges, free technician repairs or knob guard kits are provided to current owners regardless of whether you kept the receipt or bought the home with the appliance installed.'
      },
      {
        question: 'How do I stop pets or kids from accidentally turning on front-knob electric stoves?',
        answer: 'Use the built-in Control Lock button on the control panel whenever you finish cooking, order the free recall knob lock/cover kit from LG or Samsung if your model qualifies, and never leave paper towels, pizza boxes, or cutting boards sitting on top of the range.'
      }
    ],
    relatedTools: [
      { name: 'Barcode & Product Packaging Recalls Scanner', url: '/tools/product-recalls-scanner/' },
      { name: 'Kitchen Grease Fire, Electrical & Burn Emergency Guide', url: '/tools/kitchen-fire-emergency-guide/' },
      { name: 'Kitchen Hazard Emergency Triage & Containment Tool', url: '/tools/kitchen-hazard-emergency-triage/' }
    ]
  }
];

const guidesEs = [
  {
    slug: 'freezing-mason-jars-vacuum-bags-frost-free-freezer-burn-safety',
    title: 'Congelar Frascos Mason, Pescado al Vacío y Carne en Congelador No-Frost: Cómo Evitar Roturas de Vidrio, Sublimación y Riesgo de Botulismo',
    category: 'freezer',
    excerpt: 'Por qué estallan los frascos Mason con hombro al congelar caldos, cómo los ciclos no-frost causan quemadura por frío (MDA) y la norma FDA de abrir bolsas al vacío de pescado antes de descongelar.',
    date: waveDate,
    readTime: '17 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Congelar comida en casa parece sencillo hasta que un caldo hace estallar un frasco de vidrio en la estantería, un filete aparece cubierto de nieve con bordes grises acartonados o un salmón envasado al vacío se descongela dentro de la bolsa sellada. Cada uno de estos fallos responde a leyes claras de física y microbiología: el agua líquida se expande un 9% al congelarse en cristales hexagonales, los congeladores no-frost se calientan cada 8–12 horas y extraen la humedad de los alimentos por sublimación, y los envases al vacío crean un ambiente sin oxígeno donde Clostridium botulinum tipo E puede generar toxina por encima de 3,3°C (38°F). Dominar la geometría del envase, la barrera contra el vapor y la descongelación segura protege tanto la calidad como la salud.',
    sections: [
      {
        title: 'Por Qué Estallan los Frascos Mason en el Congelador: Expansión del 9% del Hielo',
        content: 'Al congelarse a 0°C (32°F) o menos, las moléculas de agua de caldos, sopas o salsas forman cristales hexagonales que ocupan aproximadamente un 9% más de volumen. En los frascos Mason convencionales con cuello estrecho u hombro curvo, ese hombro actúa como un embudo mecánico: al avanzar el hielo desde las paredes hacia arriba, queda atrapado bajo el cuello generando una enorme tensión de tracción que fractura el vidrio sódico-cálcico. Solo deben congelarse líquidos en frascos de boca ancha y paredes rectas aptos para congelador (generalmente hasta 470 ml / 1 pinta), dejando mínimo 2,5 cm (1 pulgada) de espacio libre arriba, enfriándolos antes en nevera y dejando la tapa floja hasta que estén completamente congelados.',
        type: 'warning',
        boxText: 'REGLA PARA FRASCOS EN CONGELADOR: Jamás congele líquidos en frascos con hombro o cuello estrecho. Use frascos rectos de boca ancha, enfríe primero en nevera, deje ≥2,5 cm libres y mantenga la tapa sin apretar hasta que solidifiquen.'
      },
      {
        title: 'Ciclos No-Frost (-18°C a -4°C) y Cinética de Sublimación del Hielo',
        content: 'Incluso a -18°C (0°F), el hielo sólido ejerce una presión de vapor cercana a 125,4 Pascales (0,94 mmHg). En los congeladores domésticos no-frost (descongelación automática), una resistencia eléctrica calienta el evaporador cada 8 a 12 horas, haciendo oscilar el aire interno entre -18°C y -4°C (0°F a 25°F). Ese salto térmico genera un fuerte déficit de presión de vapor cuando la carne se guarda en bandejas de supermercado con film PVC permeable (~4,8 g/m²/24h) o con bolsas de aire atrapado: el hielo sólido se sublima directamente a vapor, escapa del músculo dejando poros microscópicos en "panal" y se vuelve escarcha blanca dentro de la bolsa.',
        type: 'fact',
        boxText: 'FÍSICA NO-FROST: Los ciclos de descongelación automática cada 8–12 horas impulsan la sublimación directa de hielo a vapor, deshidratando las fibras musculares y acumulando nieve en el interior del plástico.'
      },
      {
        title: 'Peroxidación Lipídica (MDA) y Regla USDA: Defecto de Calidad vs. Intoxicación',
        content: 'Cuando la sublimación vacía los poros superficiales, el oxígeno penetra en las membranas celulares y oxida los ácidos grasos poliinsaturados (PUFA), generando malondialdehído (MDA) y hexanal volátil. Los ensayos TBARS muestran que por encima de 2,0 mg MDA/kg aparece un claro sabor rancio a cartón viejo y las proteínas actina y miosina forman enlaces cruzados irreversibles que endurecen la carne. Aun así, el USDA FSIS confirma que la quemadura por congelación es un problema de calidad, NO una intoxicación alimentaria: patógenos como Salmonella, E. coli y Listeria no se multiplican a -18°C (0°F) o menos. Puede rescatar las piezas recortando los 1,5–3 mm exteriores secos mientras están semicongeladas y guisándolas a fuego lento en líquidos ácidos (tomate, vino, caldo).',
        type: 'tip',
        boxText: 'RESCATE USDA: La carne con quemadura por congelación es 100% segura frente a bacterias a ≤-18°C. Recorte los 2 mm exteriores secos estando semicongelada y cocínela en estofados húmedos con acidez, nunca a la plancha seca.'
      },
      {
        title: 'La Trampa del Botulismo en Pescado al Vacío: Corte la Bolsa Antes de Descongelar',
        content: 'Las bolsas multicapa de nylon/EVOH selladas al vacío (<0,05 g/m²/24h WVTR) eliminan el aire interior y triplican la vida útil en congelación frente a las bandejas comunes. Sin embargo, crean un riesgo microbiológico crítico al descongelar: las esporas no proteolíticas de Clostridium botulinum tipo E presentes en pescado y marisco crudo pueden germinar y producir neurotoxina botulínica en ausencia de oxígeno a temperaturas tan bajas como 3,3°C (38°F), dentro del rango real de muchas neveras domésticas. La guía FDA exige cortar, perforar o retirar el pescado de su bolsa hermética al vacío ANTES de descongelarlo en el refrigerador.',
        type: 'warning',
        boxText: 'NORMA CRÍTICA FDA PARA PESCADO AL VACÍO: C. botulinum tipo E puede crecer sin oxígeno por encima de 3,3°C (38°F). Corte o abra siempre la bolsa sellada al vacío antes de descongelar pescado o mariscos en la nevera.'
      },
      {
        title: 'Métodos Seguros de Descongelación: Por Qué Fallan el Agua Caliente y la Encimera',
        content: 'Nunca descongele carne o pescado en la encimera a temperatura ambiente ni sumergido en agua caliente. Mientras el núcleo sigue helado, la superficie entra rápidamente en la Zona de Peligro de 4,4°C a 60°C (40°F–140°F), donde las bacterias duplican su población cada 20 minutos. Emplee solo tres métodos aprobados por el USDA: (1) Refrigerador a ≤4°C (~24 horas por cada 2–2,5 kg en una bandeja inferior); (2) Agua fría corriente o sumergida (≤21°C) en bolsa hermética cambiando el agua cada 30 minutos (~30 minutos por cada 450 g); o (3) Descongelación en microondas únicamente si va a cocinar el alimento de inmediato.',
        type: 'success',
        boxText: '3 VÍAS SEGURAS: Nevera (≤4°C), agua fría cambiada cada 30 minutos en bolsa hermética, o microondas con cocción inmediata; jamás agua caliente ni encimera.'
      }
    ],
    conclusion: 'Evitar accidentes en el congelador exige tres hábitos simples: use frascos de paredes rectas con 2,5 cm de holgura para compensar el 9% de expansión del hielo, frene la sublimación no-frost con vacío EVOH o doble envoltura con aluminio y abra siempre las bolsas de pescado al vacío antes de descongelarlas.',
    faqs: [
      {
        question: '¿Se pueden congelar caldos en frascos Mason de vidrio sin que se rompan?',
        answer: 'Solo en frascos de boca ancha y paredes rectas sin hombro curvo (habitualmente hasta 470 ml / 1 pinta), enfriando primero el líquido en la nevera, dejando mínimo 2,5 cm (1 pulgada) libres arriba y manteniendo la tapa floja hasta que el contenido quede sólido.'
      },
      {
        question: '¿Es obligatorio cortar la bolsa al vacío del pescado antes de descongelarlo?',
        answer: 'Sí. La FDA advierte que las esporas de Clostridium botulinum tipo E pueden germinar y producir toxina dentro de bolsas herméticas sin oxígeno si la nevera supera los 3,3°C (38°F). Corte la bolsa o pase el pescado a un plato cubierto antes de descongelarlo.'
      },
      {
        question: '¿Es peligroso comer carne con quemadura por congelación?',
        answer: 'No. Según el USDA FSIS, la carne con quemadura por frío es 100% segura frente a intoxicaciones bacterianas porque los patógenos no crecen a -18°C (0°F). Es solo deshidratación física y oxidación lipídica: recorte 2 mm externos y guísela en salsa o caldo.'
      },
      {
        question: '¿Por qué los congeladores no-frost queman la comida más rápido que los arcones manuales?',
        answer: 'Los congeladores no-frost activan resistencias térmicas cada 8–12 horas, elevando el aire de -18°C hasta unos -4°C. Esas oscilaciones impulsan la sublimación del hielo fuera de la comida y crean abundante escarcha dentro del paquete.'
      },
      {
        question: '¿Puedo descongelar carne congelada en agua caliente para ahorrar tiempo?',
        answer: 'No. El agua tibia o caliente coloca el exterior de la carne en la Zona de Peligro (4,4°C–60°C) mientras el centro sigue congelado, disparando el crecimiento bacteriano. Use nevera, agua fría cambiada cada 30 minutos o cocine directamente desde congelado sumando 50% más de tiempo.'
      }
    ],
    relatedTools: [
      { name: 'Modelo de Quemadura por Congelación y Sublimación', url: '/es/tools/freezer-burn-sublimation-modeler/' },
      { name: 'Calculadora USDA de Descongelamento y Tiempo Seguro', url: '/es/tools/meat-thawing-calculator/' },
      { name: 'Simulador de Choque Térmico y Rotura de Vidrio', url: '/es/tools/thermal-shock-simulator/' }
    ]
  },
  {
    slug: 'recycled-cardboard-mosh-moah-bamboo-melamine-eu-2026-safety',
    title: 'Cajas de Cartón Reciclado (MOSH/MOAH) y Tazas de "Bambú-Melamina": Nuevos Límites UE 2026–2027 a Aceites Minerales y Prohibición del Formaldehído',
    category: 'materials',
    excerpt: 'Cómo migran los hidrocarburos aromáticos MOAH de cajas de pizza y cereales recicladas (votación UE de mayo 2026 para 2027) y por qué la UE retiró las vajillas de "fibra de bambú" con melamina.',
    date: waveDate,
    readTime: '17 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Dos falsas promesas ecológicas dominan las cocinas modernas: los envases de cartón reciclado sin barrera en contacto directo con comidas calientes o grasas, y las tazas o platos infantiles de "fibra de bambú ecológica" vendidos como alternativa verde al plástico. El 13 de mayo de 2026, el comité SCoPAFF de la Unión Europea aprobó límites máximos legales vinculantes para los Hidrocarburos Aromáticos de Aceite Mineral (MOAH) modificando el Reglamento (UE) 2023/915 (en vigor el 1 de enero de 2027), sumándose a la prohibición europea de la vajilla compuesta de "bambú-melamina" por superar ampliamente los límites de migración de formaldehído y melamina. Comprender estas rutas químicas evita contaminantes genotóxicos y monómeros en la mesa familiar.',
    sections: [
      {
        title: 'Votación UE 2026 sobre MOAH y MOSH: Por Qué el Cartón Reciclado Migra a Pizza y Cereales',
        content: 'La EFSA divide los hidrocarburos de aceite mineral en saturados (MOSH, bajo vigilancia europea 2026–2029) y aromáticos (MOAH). Dado que ciertas fracciones de MOAH con 3 a 7 anillos aromáticos pueden ser carcinógenas y genotóxicas sin un umbral seguro, el 13 de mayo de 2026 el comité SCoPAFF aprobó límites legales vinculantes para MOAH (C10–C50) aplicables desde el 1 de enero de 2027: 0,50 mg/kg en alimentos secos bajos en grasa (≤4% grasa), 1,0 mg/kg en grasa media (>4% a ≤50%) y 2,0 mg/kg en alto contenido graso (>50%, con descensos progresivos hasta 2030 en aceites específicos). El cartón reciclado de cajas de pizza, cereales y envases de comida rápida conserva tintas de impresión, adhesivos y lubricantes cuyos vapores de MOAH migran fácilmente hacia grasas calientes o harinas secas si no existe una barrera plástica interna (PET/EVOH).',
        type: 'warning',
        boxText: 'MIGRACIÓN MOAH: Los hidrocarburos genotóxicos MOAH (C10–C50) migran de tintas en cartón reciclado hacia pizzas calientes y cereales secos. Pase la comida caliente de cajas de cartón a platos de cerámica o vidrio al instante.'
      },
      {
        title: 'Prohibición UE del "Bambú-Melamina": Por Qué las Tazas de Fibra Vegetal Liberan Formaldehído',
        content: 'La mayoría de las tazas reutilizables y platos infantiles etiquetados como "fibra de bambú natural" NO son madera maciza: están moldeados con resina termoestable de melamina-formaldehído mezclada con polvo de bambú o maíz molido. Bajo los Reglamentos (UE) n.º 10/2011 y (CE) n.º 1935/2004, la fibra de bambú (gramínea, no madera autorizada) es un aditivo no permitido en plásticos alimentarios. Peor aún, las fibras vegetales absorben humedad y generan microfisuras cuando entran en contacto con café hirviendo, té (85°C–95°C) o zumos ácidos, disparando la migración de formaldehído cancerígeno por encima del límite legal (SML 15 mg/kg) y melamina por encima de 2,5 mg/kg, sustancia además señalada en cribados SVHC por posible toxicidad reproductiva masculina.',
        type: 'warning',
        boxText: 'PROHIBICIÓN BAMBÚ-MELAMINA: Las tazas rígidas de "fibra de bambú" usan resina de melamina-formaldehído no autorizada que se agrieta con calor o ácido, liberando formaldehído (>15 mg/kg) y melamina (>2,5 mg/kg).'
      },
      {
        title: 'Reevaluación EFSA del Estireno (#6 PS, Límite 40 µg/kg) en Envases para Llevar',
        content: 'Los envases térmicos de espuma (#6 poliestireno o PS) y tapas rígidas suelen confundirse con bioplásticos o cartón. En su dictamen científico actualizado sobre exposición oral al estireno en materiales en contacto con alimentos, la EFSA concluyó que el estireno no induce genotoxicidad por vía oral en dosis dietéticas reales y respaldó fijar un estricto Límite de Migración Específica de 40 µg/kg (40 ppb) bajo el Reglamento (UE) n.º 10/2011. Pese a ello, el poliestireno #6 se ablanda entre 70°C y 90°C y se deforma en microondas o con caldos grasos hirviendo, por lo que nunca debe recalentarse comida en espuma #6.',
        type: 'fact',
        boxText: 'ESTIRENO Y COMIDA CALIENTE: La EFSA respaldó un estricto límite de 40 µg/kg para el poliestireno #6, pero este polímero se reblandece desde 70°C; jamás use envases #6 PS en microondas.'
      },
      {
        title: 'Auditoría de 30 Segundos en Despensa y Alacena Contra Envases Problemáticos',
        content: 'Revise sus utensilios y alimentos secos en medio minuto: (1) Retire de líquidos calientes, lavavajillas y microondas cualquier taza mate o plato infantil de "fibra de bambú" o compuesto vegetal rígido; (2) Jamás recaliente pizza, pollo frito o pasteles dentro de cajas de cartón reciclado manchadas de aceite; (3) Trasvase avena, harina, pasta, cereales y frutos secos desde cajas de cartón sin bolsa barrera interior a frascos herméticos de vidrio borosilicato para frenar la acumulación lenta de aceites minerales.',
        type: 'tip',
        boxText: 'AUDITORÍA DE 30 SEGUNDOS: Pase cereales, harinas y frutos secos de cartón simple a tarros de vidrio, y retire cualquier taza rígida de "fibra de bambú" del café caliente, té o microondas.'
      },
      {
        title: 'Alternativas Seguras Sin Migración: Vidrio Borosilicato, Porcelana e Inox 304/316',
        content: 'Evitar hidrocarburos minerales y resinas aminoplásticas es sencillo con materiales inertes: (1) Para servir y recalentar comida para llevar, pase siempre el alimento a platos de porcelana vitrificada, loza sin plomo o vidrio borosilicato 3.3; (2) Para vajilla infantil y termos de café, elija acero inoxidable 304 (18/8) o 316 (no apto microondas), vidrio templado con funda de silicona o silicona 100% curada con platino; (3) Para tablas de cortar, opte por madera maciza entera (arce, haya, nogal) tratada con aceite mineral USP en lugar de compuestos prensados de bambú con resina.',
        type: 'success',
        boxText: 'CAMBIOS INERTES: Sustituya tazas de bambú-melamina y cartón reciclado en comidas calientes por vidrio borosilicato 3.3, porcelana o acero inoxidable 304/316 para eliminar migración química.'
      }
    ],
    conclusion: 'Etiquetas como "reciclado" o "fibra de bambú eco" no equivalen a seguridad química frente a alimentos calientes o grasos. Retirar de inmediato la comida caliente de cajas de cartón reciclado, guardar secos en vidrio y descartar vajillas compuestas de bambú-melamina protege su cocina bajo las normas europeas más exigentes de 2026–2027.',
    faqs: [
      {
        question: '¿Son seguras las tazas ecológicas de fibra de bambú para café o té caliente?',
        answer: 'No si son compuestos rígidos de bambú-melamina. La Unión Europea prohibió estas vajillas porque el polvo de bambú es un aditivo no autorizado que fisura la resina de melamina-formaldehído con líquidos calientes o ácidos, liberando formaldehído (>15 mg/kg) y melamina (>2,5 mg/kg).'
      },
      {
        question: '¿Qué son los MOSH y MOAH del cartón reciclado y qué cambia en 2027?',
        answer: 'Son hidrocarburos saturados (MOSH) y aromáticos (MOAH) de aceites minerales presentes en tintas de cartón reciclado y lubricantes. Como ciertos MOAH son genotóxicos y cancerígenos, la UE votó en mayo de 2026 límites obligatorios de 0,50 a 2,0 mg/kg efectivos desde el 1 de enero de 2027.'
      },
      {
        question: '¿Es seguro recalentar pizza dentro de la caja de cartón en el horno o freidora de aire?',
        answer: 'No. El calor acelera la evaporación y transferencia de hidrocarburos MOAH, tintas y adhesivos del cartón reciclado hacia el queso graso derretido, además de representar un grave riesgo de incendio.'
      },
      {
        question: '¿Prohibió la EFSA los envases de poliestireno #6 PS?',
        answer: 'No por completo: la EFSA determinó que el estireno no resulta genotóxico por vía oral en niveles dietéticos reales y respaldó un estricto límite de migración de 40 µg/kg. Sin embargo, el #6 PS se deforma desde los 70°C, por lo que no debe usarse en microondas ni con alimentos hirviendo.'
      },
      {
        question: '¿Cómo sé si una caja de cereales o pasta bloquea los aceites minerales?',
        answer: 'Las bolsas plásticas interiores de PET, EVOH o poliamida actúan como barrera funcional frente a los vapores de MOAH del cartón exterior. Si el alimento toca directamente el cartón impreso sin bolsa barrera, conviene pasarlo a frascos de vidrio.'
      }
    ],
    relatedTools: [
      { name: 'Verificador de Plásticos Seguros para Comida Caliente', url: '/es/tools/kitchen-plastic-leaching-checker/' },
      { name: 'Simulador de Lixiviación de Formaldehído en Melamina', url: '/es/tools/dishwasher-melamine-leaching-simulator/' },
      { name: 'Verificador de Códigos de Plástico (#1–#7)', url: '/es/tools/plastic-code-checker/' }
    ]
  },
  {
    slug: 'galanz-retro-fridge-frigidaire-range-2026-cpsc-recalls-guide',
    title: 'Retiros de Grandes Electrodomésticos 2026 (CPSC): Incendios en Neveras Galanz Retro, Estufas a Gas Frigidaire y Mandos Frontales LG/Samsung',
    category: 'appliances',
    excerpt: 'Verifique modelos y series de los retiros CPSC 2026 para ~121.680 refrigeradores Galanz Retro (34 incendios, 1 víctima mortal), ~174.800 estufas Frigidaire (#26-333) y seguridad en mandos frontales LG y Samsung.',
    date: waveDate,
    readTime: '17 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Aunque las alertas virales suelen centrarse en pequeños electrodomésticos, varios de los retiros más graves de la CPSC de Estados Unidos en 2026 afectan a grandes equipos conectados día y noche en la cocina. El 30 de julio de 2026, la CPSC ordenó el retiro de unas 121.680 neveras Galanz Retro tras 34 incendios —incluida una muerte— por cortocircuito eléctrico interno; el 19 de marzo de 2026, el Retiro #26-333 afectó a cerca de 174.800 estufas a gas Frigidaire, Frigidaire Gallery y Frigidaire Professional tras 62 reportes de encendido retardado y 30 quemaduras; y cientos de miles de estufas eléctricas de perillas frontales LG y Samsung cuentan con avisos activos junto a la campaña navideña CPSC del 19 de noviembre de 2026. Revisar sus etiquetas de serie lleva menos de dos minutos.',
    sections: [
      {
        title: 'Neveras Galanz Retro (Retiro CPSC 30 de Julio 2026): 34 Incendios y 1 Fallecimiento',
        content: 'El 30 de julio de 2026, la CPSC retiró aproximadamente 121.680 refrigeradores Galanz Retro en EE. UU. (y más de 10.000 en Canadá) vendidos en Home Depot y Amazon entre enero de 2019 y septiembre de 2022. Sus componentes eléctricos internos pueden sufrir un cortocircuito e incendiarse: la CPSC registró 34 incendios, incluido un fallecimiento reportado por bomberos locales. Revise la etiqueta blanca en la esquina superior izquierda trasera del equipo: afecta a los modelos BCD-215V-62H, GLR76TRDER, GLR76TBKER, GLR76TBEER y GLR76TWEER con códigos de fecha YYYYMM entre 201812 y 202012 (diciembre 2018 a diciembre 2020). Desenchufe la nevera de inmediato y contacte a Galanz Americas (888-462-0579) para recibir reparación gratuita a domicilio.',
        type: 'warning',
        boxText: 'RETIRO GALANZ RETRO (JUL 2026): Desenchufe al instante los modelos BCD-215V-62H, GLR76TRDER, GLR76TBKER, GLR76TBEER o GLR76TWEER (códigos 201812–202012) por riesgo mortal de incendio eléctrico y solicite reparación gratuita.'
      },
      {
        title: 'Estufas a Gas Frigidaire (Retiro CPSC #26-333 del 19 de Marzo 2026): Encendido Retardado',
        content: 'Publicado el 19 de marzo de 2026 bajo el número CPSC #26-333, Electrolux retiró ~174.800 estufas a gas Frigidaire, Frigidaire Gallery y Frigidaire Professional en EE. UU. (~5.300 en Canadá) vendidas entre junio de 2025 y enero de 2026. El quemador de horneado puede sufrir encendido retardado provocando una deflagración al acumularse gas (62 reportes y 30 quemaduras). Abra el cajón inferior debajo del horno para leer la placa metálica: incluye 23 modelos (como FCFG3062AB/AS/AW, FCFG3083AS, FCRG3051BB/BS/BW, FCRG3083AD/AS, GCFG3060BD/BF, GCFG3070BF, GCRG3060BD/BF y PCFG3080AF) con números de serie VF52200000 a VF54399999. Deje de usar el HORNO de inmediato (los quemadores superiores siguen siendo seguros) y solicite instalación gratuita de un quemador nuevo en GasOvenBurnerRecall.com o al 866-291-7633.',
        type: 'warning',
        boxText: 'RETIRO FRIGIDAIRE #26-333 (MAR 2026): Deje de usar el horno en series VF52200000–VF54399999 por encendido retardado de gas; los quemadores superiores pueden seguir usándose mientras llega el técnico gratuito.'
      },
      {
        title: 'Incendios por Perillas Frontales LG/Samsung y Alerta CPSC del 19 de Noviembre 2026',
        content: 'Las perillas frontales en estufas eléctricas deslizables quedan a la altura de la cintura, niños pequeños y mascotas, facilitando activaciones accidentales al rozarlas y encendiendo cajas de pizza, tablas o sartenes dejadas sobre la placa. Unas 500.000 estufas LG y amplias líneas Samsung cuentan con retiros activos para entregar etiquetas, recordar el uso del bloqueo infantil (Control Lock) o instalar protectores de perillas gratuitos. Además, la alerta festiva CPSC del 19 de noviembre de 2026 recordó activar siempre el bloqueo del panel, mantener la vitrocerámica despejada y nunca abandonar sartenes con aceite caliente.',
        type: 'fact',
        boxText: 'PREVENCIÓN EN MANDOS FRONTALES: Active el Control Lock o instale los protectores gratuitos del retiro LG/Samsung, y nunca apoye cartón, plástico ni paños sobre la placa apagada.'
      },
      {
        title: 'Dónde Localizar Placas de Modelo, Serie y Fecha en Grandes Equipos',
        content: 'Las placas de identificación suelen ocultarse lejos del calor y la grasa: (1) Refrigeradores: busque la etiqueta blanca en la esquina superior izquierda trasera (Galanz) o en la pared interior superior derecha; (2) Estufas y Hornos: retire completamente el cajón inferior e ilumine el marco lateral interno con la linterna del teléfono; (3) Hornos Air Fryer y Ollas Eléctricas (como Gourmia GTF7530 bajo el Retiro #27-069 del 5 de noviembre 2026 o Tristar Y6D-36 bajo la Alerta #27-030 del 15 de octubre 2026): revise la etiqueta metálica inferior con el equipo frío y desenchufado. Tome una foto a cada placa para futuras comprobaciones.',
        type: 'tip',
        boxText: 'INSPECCIÓN EN 2 MINUTOS: Fotografíe las etiquetas de la parte trasera de neveras compactas, el marco del cajón inferior de estufas y la base de pequeños electrodomésticos para verificarlos en segundos.'
      },
      {
        title: 'Viviendas de Alquiler y Segunda Mano: Por Qué Persisten Aparatos Retirados',
        content: 'Pisos de alquiler, residencias estudiantiles y ventas entre particulares son el principal foco donde equipos retirados siguen conectados años después. Aunque la ley prohíbe revender o donar productos bajo retiro CPSC, muchas neveras retro 2019–2020 y estufas 2025–2026 cambian de manos sin que el aviso llegue al nuevo usuario. Compruebe siempre el número de serie al mudarse o comprar usado: las reparaciones gratuitas ordenadas por la CPSC cubren al propietario actual sin necesidad de factura original.',
        type: 'success',
        boxText: 'ALQUILER Y SEGUNDA MANO: Verifique los números de serie al mudarse. Las reparaciones gratuitas por retiro CPSC aplican aunque no conserve el recibo original de compra.'
      }
    ],
    conclusion: 'Dos minutos con una linterna pueden evitar un incendio eléctrico nocturno o una llamarada en el horno de gas. Revise la parte trasera de neveras Galanz Retro 2019–2022, inspeccione el cajón inferior de estufas Frigidaire 2025–2026 (Retiro #26-333), bloquee las perillas frontales LG/Samsung y solicite reparaciones oficiales gratuitas.',
    faqs: [
      {
        question: '¿Qué neveras Galanz Retro están retiradas en 2026 y cuál es el peligro?',
        answer: 'El retiro CPSC del 30 de julio de 2026 abarca ~121.680 unidades en EE. UU. de los modelos BCD-215V-62H, GLR76TRDER, GLR76TBKER, GLR76TBEER y GLR76TWEER con códigos de fecha 201812–202012. Un cortocircuito interno puede provocar incendios (34 reportes y 1 fallecimiento). Desenchúfela de inmediato y solicite reparación gratuita.'
      },
      {
        question: '¿Puedo usar los quemadores superiores de mi estufa a gas Frigidaire retirada (#26-333)?',
        answer: 'Sí. Según el aviso CPSC #26-333 del 19 de marzo de 2026 (series VF52200000–VF54399999), debe dejar de usar el HORNO de inmediato por riesgo de encendido retardado y quemaduras, pero los quemadores de la cubierta superior siguen siendo seguros mientras Electrolux instala el nuevo quemador.'
      },
      {
        question: '¿Dónde encuentro el código de fecha en la nevera Galanz y la serie en Frigidaire?',
        answer: 'En las neveras Galanz Retro está en la etiqueta blanca de la esquina superior izquierda trasera (formato YYYYMM). En las estufas Frigidaire debe abrir el cajón inferior debajo del horno para ver la placa metálica con el modelo y serie.'
      },
      {
        question: '¿Necesito el ticket de compra original para recibir la reparación gratuita del retiro?',
        answer: 'No. En los retiros federales CPSC de Galanz, Frigidaire, LG y Samsung, el servicio técnico gratuito o los kits protectores se entregan al usuario actual sin exigir recibo de compra.'
      },
      {
        question: '¿Cómo evitar que mascotas o niños enciendan por accidente estufas de mandos frontales?',
        answer: 'Active siempre la función Control Lock del panel digital, instale el protector de perillas del fabricante si su estufa LG o Samsung está cubierta y jamás deje cajas de cartón, tablas o paños sobre la placa.'
      }
    ],
    relatedTools: [
      { name: 'Escáner de Códigos de Barras y Retiros CPSC/FDA', url: '/es/tools/product-recalls-scanner/' },
      { name: 'Guía de Emergencia: Fuego de Aceite, Eléctrico y Quemaduras', url: '/es/tools/kitchen-fire-emergency-guide/' },
      { name: 'Triaje de Emergencias y Riesgos en Cocina', url: '/es/tools/kitchen-hazard-emergency-triage/' }
    ]
  }
];

const guidesPt = [
  {
    slug: 'freezing-mason-jars-vacuum-bags-frost-free-freezer-burn-safety',
    title: 'Congelar Potes de Vidro Mason, Peixe a Vácuo e Carnes no Freezer Frost-Free: Evitando Estilhaços, Sublimação e Risco de Botulismo',
    category: 'freezer',
    excerpt: 'Por que potes de vidro com ombro estouram no freezer, como ciclos frost-free geram queimadura de gelo (MDA) e a regra FDA de cortar embalagens a vácuo de peixe antes de descongelar.',
    date: waveDate,
    readTime: '17 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Congelar alimentos parece simples até um caldo estourar um pote de vidro na prateleira, um bife sair coberto de neve com bordas acinzentadas e duras, ou um filé de salmão embalado a vácuo descongelar dentro do saco fechado. Cada erro decorre de física e microbiologia bem conhecidas: a água expande cerca de 9% ao virar gelo hexagonal, freezers frost-free aquecem periodicamente para derreter gelo da serpentina — puxando umidade do alimento por sublimação — e o vácuo cria um ambiente anaeróbico onde esporos de Clostridium botulinum tipo E produzem toxina acima de 3,3°C (38°F). Dominar o formato do pote, a barreira de vapor e o descongelamento seguro protege o sabor e a saúde.',
    sections: [
      {
        title: 'Por Que Potes Mason Estouram no Freezer: Expansão de 9% do Gelo e Gargalo',
        content: 'Quando caldos, sopas ou molhos congelam a 0°C (32°F) ou menos, as moléculas de água formam cristais hexagonais que ocupam aproximadamente 9% mais volume. Em potes Mason tradicionais de boca estreita ou ombro curvo, esse ombro cria um gargalo mecânico: à medida que o gelo congela das paredes para o centro e sobe, trava contra a curva do vidro e gera tensão radial capaz de partir o vidro sódico-cálcico. Só congele líquidos em potes retos de boca larga próprios para freezer (geralmente até 470 ml), deixando ao menos 2,5 cm (1 polegada) livres no topo, resfriando antes na geladeira e deixando a tampa frouxa até congelar totalmente.',
        type: 'warning',
        boxText: 'REGRA PARA VIDRO NO FREEZER: Nunca congele líquidos em potes com ombro ou gargalo estreito. Use potes de parede reta e boca larga, resfrie antes, deixe ≥2,5 cm livres e mantenha a tampa solta até solidificar.'
      },
      {
        title: 'Ciclos Frost-Free (-18°C a -4°C) e Cinética de Sublimação do Gelo',
        content: 'Mesmo a -18°C (0°F), o gelo sólido exerce pressão de vapor próxima a 125,4 Pascals (0,94 mmHg). Em freezers frost-free (degelo automático), resistências elétricas aquecem a cada 8 a 12 horas para derreter gelo da serpentina, fazendo o ar oscilar entre -18°C e -4°C (0°F a 25°F). Essa variação cria um forte gradiente de pressão de vapor quando a carne está em bandejas de supermercado com filme PVC permeável (~4,8 g/m²/24h) ou bolsas com ar preso: o gelo sublima direto para vapor, deixa poros microscópicos vazios na carne e congela como neve branca na parede do saco.',
        type: 'fact',
        boxText: 'FÍSICA FROST-FREE: Os ciclos automáticos de degelo a cada 8–12 horas forçam a sublimação direta de gelo em vapor, ressecando fibras musculares e formando neve interna na embalagem.'
      },
      {
        title: 'Peroxidação Lipídica (MDA) e Regra USDA: Defeito de Qualidade vs. Intoxicação',
        content: 'Quando a sublimação esvazia os poros superficiais, o oxigênio penetra nas membranas celulares e oxida gorduras poli-insaturadas, gerando malondialdeído (MDA) e hexanal volátil. Ensaios TBARS apontam ranço nítido ("gosto de papelão") acima de 2,0 mg MDA/kg, enquanto proteínas actina e miosina formam ligações cruzadas rígidas. Ainda assim, o USDA FSIS confirma que a queimadura de frio é apenas perda de qualidade, NÃO contaminação bacteriana: Salmonella, E. coli e Listeria ficam totalmente dormentes a ≤-18°C (0°F). Apare os 1,5–3 mm externos secos com faca afiada (semicongelado) e cozinhe em ensopados úmidos com molhos ácidos (tomate, vinho, caldo).',
        type: 'tip',
        boxText: 'RESGATE USDA: Carne com queimadura de gelo é 100% segura contra bactérias a ≤-18°C. Corte fora os 2 mm externos ressecados e use cozimento lento em líquido ácido, nunca grelha seca.'
      },
      {
        title: 'Armadilha do Botulismo em Peixe a Vácuo: Corte o Saco Antes de Descongelar',
        content: 'Sacos multicamadas de nylon/EVOH selados a vácuo (<0,05 g/m²/24h WVTR) bloqueiam ar e vapor, triplicando a vida útil no freezer frente a bandejas comuns. Porém, o vácuo exige cuidado crítico no descongelamento: esporos não proteolíticos de Clostridium botulinum tipo E presentes em peixes e frutos do mar podem germinar e produzir neurotoxina botulínica sem oxigênio a partir de 3,3°C (38°F) — temperatura comum em geladeiras domésticas! A norma FDA orienta cortar, furar ou retirar o peixe da embalagem hermética a vácuo ANTES de descongelar na geladeira.',
        type: 'warning',
        boxText: 'REGRA CRÍTICA FDA PARA PEIXE A VÁCUO: C. botulinum tipo E cresce em embalagens sem oxigênio acima de 3,3°C (38°F). Sempre corte ou abra o saco a vácuo antes de descongelar frutos do mar.'
      },
      {
        title: 'Descongelamento Seguro: Por Que Água Quente e Bancada São Perigosas',
        content: 'Nunca descongele carnes ou peixes na pia em temperatura ambiente nem em água morna ou quente: a superfície entra rapidamente na Zona de Perigo de 4,4°C a 60°C (40°F–140°F), multiplicando bactérias a cada 20 minutos enquanto o centro segue congelado. Use três vias seguras do USDA: (1) Geladeira a ≤4°C (~24h a cada 2–2,5 kg em bandeja na prateleira inferior); (2) Água fria (≤21°C) em saco bem vedado trocando a água a cada 30 minutos (~30 min por 450 g); ou (3) Micro-ondas somente se for cozinhar imediatamente em seguida.',
        type: 'success',
        boxText: '3 VIAS SEGURAS: Geladeira (≤4°C), água fria trocada a cada 30 minutos em saco vedado, ou micro-ondas com preparo imediato — jamais água quente ou temperatura ambiente.'
      }
    ],
    conclusion: 'Evitar falhas no freezer exige três hábitos práticos: use potes de parede reta com 2,5 cm de folga para a expansão de 9% do gelo, barre a sublimação frost-free com vácuo EVOH ou dupla camada de alumínio e sempre abra sacos a vácuo de peixe antes de descongelar.',
    faqs: [
      {
        question: 'Posso congelar sopas e caldos em potes de vidro Mason sem quebrar?',
        answer: 'Apenas em potes de boca larga e paredes retas próprios para freezer (sem ombro curvo, até ~470 ml), resfriando antes na geladeira, deixando pelo menos 2,5 cm de espaço livre no topo e mantendo a tampa frouxa até congelar por completo.'
      },
      {
        question: 'Preciso mesmo abrir a embalagem a vácuo do peixe antes de descongelar na geladeira?',
        answer: 'Sim. A FDA alerta que esporos de Clostridium botulinum tipo E podem produzir toxina em sacos sem oxigênio acima de 3,3°C (38°F). Faça um corte na embalagem ou passe o filé para um prato coberto antes de descongelar.'
      },
      {
        question: 'Carne com queimadura de congelador faz mal à saúde?',
        answer: 'Não. Segundo o USDA FSIS, carne com queimadura de gelo é 100% segura do ponto de vista microbiológico, pois bactérias não se multiplicam a -18°C (0°F). É apenas desidratação e oxidação lipídica: apare 2 mm externos e cozinhe em ensopado.'
      },
      {
        question: 'Por que o freezer frost-free resseca mais a carne do que um freezer horizontal manual?',
        answer: 'Freezers frost-free acionam aquecedores a cada 8–12 horas, elevando o ar de -18°C para cerca de -4°C. Essa oscilação gera pressão de vapor que puxa água da carne para formar neve dentro do saco.'
      },
      {
        question: 'Posso descongelar carne em água quente se for cozinhar logo depois?',
        answer: 'Não. Água morna ou quente leva o exterior da carne rapidamente para a Zona de Perigo (4,4°C–60°C) enquanto o miolo continua congelado. Prefira geladeira, água fria trocada a cada 30 minutos ou cozimento direto do congelado.'
      }
    ],
    relatedTools: [
      { name: 'Modelador de Queimadura de Congelamento e Sublimação', url: '/pt/tools/freezer-burn-sublimation-modeler/' },
      { name: 'Calculadora USDA de Descongelamento Seguro', url: '/pt/tools/meat-thawing-calculator/' },
      { name: 'Simulador de Choque Térmico e Ruptura de Vidro', url: '/pt/tools/thermal-shock-simulator/' }
    ]
  },
  {
    slug: 'recycled-cardboard-mosh-moah-bamboo-melamine-eu-2026-safety',
    title: 'Caixas de Papelão Reciclado (MOSH/MOAH) e Canecas de "Bambu-Melamina": Os Novos Limites da UE 2026–2027 e Proibição do Formaldeído',
    category: 'materials',
    excerpt: 'Como hidrocarbonetos aromáticos MOAH migram de caixas recicladas de pizza e cereais (votação UE maio 2026 para 2027) e por que a UE baniu louças de "fibra de bambu" com melamina.',
    date: waveDate,
    readTime: '17 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Duas tendências vendidas como "sustentáveis" escondem riscos reais quando tocam alimentos quentes ou gordurosos: papelão reciclado sem barreira interna usado em caixas de pizza e cereais, e canecas ou pratos infantis de "fibra de bambu natural". Em 13 de maio de 2026, o comitê SCoPAFF da União Europeia aprovou limites máximos legais obrigatórios para Hidrocarbonetos Aromáticos de Óleo Mineral (MOAH) no Regulamento (UE) 2023/915 (vigência em 1º de janeiro de 2027), reforçando também o banimento europeu contra utensílios compostos de "bambu-melamina" devido à migração excessiva de formaldeído e melamina. Entender essas rotas químicas protege toda a família.',
    sections: [
      {
        title: 'Votação UE 2026 para MOAH e MOSH: Por Que Papelão Reciclado Migra para Pizza e Cereais',
        content: 'A EFSA classifica os hidrocarbonetos de óleo mineral em saturados (MOSH, sob monitoramento europeu 2026–2029) e aromáticos (MOAH). Como frações MOAH de 3 a 7 anéis podem ser cancerígenas genotóxicas sem dose segura, em 13 de maio de 2026 o comitê SCoPAFF aprovou limites máximos legais de MOAH (C10–C50) a partir de 1º de janeiro de 2027: 0,50 mg/kg para secos com baixa gordura (≤4%), 1,0 mg/kg para média gordura (>4% a ≤50%) e 2,0 mg/kg para alta gordura (>50%, com redução gradual em certos óleos até 2030). Caixas recicladas de pizza, cereais e delivery retêm tintas de impressão, colas e lubrificantes cujos vapores de MOAH migram para queijo quente e farinhas caso não haja película barreira interna (PET/EVOH).',
        type: 'warning',
        boxText: 'MIGRAÇÃO MOAH: Hidrocarbonetos genotóxicos MOAH (C10–C50) migram de tintas em papelão reciclado para pizza quente e cereais. Transfira alimentos quentes de caixas de delivery para pratos de vidro ou porcelana imediatamente.'
      },
      {
        title: 'Proibição na UE do "Bambu-Melamina": Por Que Canecas de Fibra Vegetal Liberam Formaldeído',
        content: 'A maioria das canecas e pratinhos infantis vendidos como "fibra de bambu ecológica" NÃO é bambu puro: são feitos de resina termofixa de melamina-formaldeído misturada com pó de bambú ou milho. Sob os Regulamentos (UE) 10/2011 e (CE) 1935/2004, a fibra de bambú não é um aditivo plástico autorizado. Quando expostas a café fervendo, chá (85°C–95°C), suco ácido ou micro-ondas, as fibras vegetais incham e criam microfissuras na resina, liberando formaldeído cancerígeno bem acima do limite de 15 mg/kg e monômero de melamina acima de 2,5 mg/kg — substância também sinalizada para reavaliação de toxicidade reprodutiva masculina.',
        type: 'warning',
        boxText: 'BANIMENTO BAMBU-MELAMINA: Louças rígidas de "fibra de bambu" contêm resina não autorizada de melamina-formaldeído que racha com calor ou acidez, migrando formaldeído (>15 mg/kg) e melamina (>2,5 mg/kg).'
      },
      {
        title: 'Reavaliação EFSA do Estireno (#6 PS, Limite 40 µg/kg) em Embalagens Delivery',
        content: 'Embalagens térmicas de isopor (#6 poliestireno / PS) e tampas plásticas rígidas também exigem cautela térmica. Em sua reavaliação científica sobre exposição oral ao estireno via materiais em contato com alimentos, a EFSA concluiu que o estireno não provoca genotoxicidade oral em níveis dietéticos realistas e apoiou o rigoroso Limite de Migração Específica de 40 µg/kg (40 ppb) no Regulamento (UE) 10/2011. Ainda assim, o #6 PS amolece entre 70°C e 90°C e falha em micro-ondas ou sopas fervendo — jamais aqueça refeições em isopor #6.',
        type: 'fact',
        boxText: 'ESTIRENO E CALOR: A EFSA confirmou o limite restrito de 40 µg/kg para poliestireno #6, mas o material amolece acima de 70°C; nunca leve potes ou isopor #6 PS ao micro-ondas.'
      },
      {
        title: 'Auditoria de 30 Segundos na Despensa e Armário Contra Materiais de Risco',
        content: 'Faça uma revisão rápida hoje: (1) Retire de líquidos quentes, sucos ácidos e lava-louças qualquer caneca ou prato infantil rígido de "fibra de bambú"; (2) Nunca reaqueça pizza ou frituras dentro da caixa de papelão reciclado manchada de gordura; (3) Transfira aveia, farinha, macarrão, cereais e castanhas de caixas de papelão sem saco barreira interno para potes herméticos de vidro borossilicato.',
        type: 'tip',
        boxText: 'AUDITORIA EM 30 SEGUNDOS: Passe grãos e farinhas de papelão direto para potes de vidro e retire canecas rígidas de "fibra de bambú" do café quente, chá e micro-ondas.'
      },
      {
        title: 'Substituições Inertes Sem Migração: Vidro Borossilicato, Porcelana e Inox 304/316',
        content: 'Trocar para materiais seguros é prático: (1) Servir e reaquecer: passe delivery quente na hora para pratos de porcelana vitrificada ou vidro borossilicato 3.3; (2) Louça infantil e copos térmicos: prefira aço inoxidável 304 (18/8) ou 316 (não vai ao micro-ondas), vidro temperado com capa protetora ou silicone 100% curado com platina; (3) Tábuas e tigelas: escolha madeira maciça inteiriça (bordo, faia, nogueira) com óleo mineral USP no lugar de compostos prensados de fibra com resina.',
        type: 'success',
        boxText: 'TROCAS INERTES: Substitua compostos bambú-melamina e papelão reciclado quente por vidro borossilicato 3.3, porcelana ou inox 304/316 para zerar migração de MOAH, estireno e formaldeído.'
      }
    ],
    conclusion: 'Selos "reciclado" ou "bambu eco" não garantem segurança química em alimentos quentes ou gordurosos. Transferir delivery para pratos inertes, armazenar secos em vidro e eliminar compostos bambú-melamina coloca sua cozinha em linha com as proteções europeias de 2026–2027.',
    faqs: [
      {
        question: 'Canecas ecológicas de fibra de bambú são seguras para café e chá quentes?',
        answer: 'Não quando são compostos rígidos de bambú-melamina. A UE proibiu esses produtos porque o pó de bambú não é autorizado em plásticos e causa microfissuras que liberam formaldeído (>15 mg/kg) e melamina (>2,5 mg/kg) em bebidas quentes ou ácidas.'
      },
      {
        question: 'O que são MOSH e MOAH no papelão reciclado e o que muda em 2027?',
        answer: 'São hidrocarbonetos saturados (MOSH) e aromáticos (MOAH) vindos de tintas de papelão reciclado e óleos de máquina. Como frações MOAH são genotóxicas e cancerígenas, a UE aprovou em maio de 2026 limites legais de 0,50 a 2,0 mg/kg válidos a partir de 1º de janeiro de 2027.'
      },
      {
        question: 'Posso esquentar pizza dentro da caixa de papelão no forno ou air fryer?',
        answer: 'Não. O calor acelera a migração de hidrocarbonetos MOAH, tintas e colas do papelão reciclado para o queijo gorduroso, além de criar risco de incêndio no aparelho.'
      },
      {
        question: 'A EFSA proibiu totalmente embalagens de poliestireno #6 PS?',
        answer: 'Não totalmente: a EFSA concluiu que o estireno não causa genotoxicidade oral em níveis dietéticos usuais e manteve o limite rigoroso de 40 µg/kg. Porém, como o #6 PS deforma a 70°C–90°C, nunca deve ir ao micro-ondas.'
      },
      {
        question: 'Como saber se a caixa de cereal protege contra migração de MOAH?',
        answer: 'Sacos internos de plástico PET, EVOH ou poliamida funcionam como barreira contra vapores de MOAH do papelão externo. Se o alimento encosta direto no papelão sem saco interno, transfira para potes de vidro.'
      }
    ],
    relatedTools: [
      { name: 'Verificador de Plásticos para Comida Quente', url: '/pt/tools/kitchen-plastic-leaching-checker/' },
      { name: 'Simulador de Formaldeído em Melamina na Lava-Louças', url: '/pt/tools/dishwasher-melamine-leaching-simulator/' },
      { name: 'Verificador de Códigos de Plástico (#1–#7)', url: '/pt/tools/plastic-code-checker/' }
    ]
  },
  {
    slug: 'galanz-retro-fridge-frigidaire-range-2026-cpsc-recalls-guide',
    title: 'Recalls de Grandes Eletrodomésticos 2026 (CPSC): Incêndios em Geladeiras Galanz Retro, Fogões a Gás Frigidaire e Botões Frontais LG/Samsung',
    category: 'appliances',
    excerpt: 'Confira modelos e séries dos recalls CPSC 2026 para ~121.680 geladeiras Galanz Retro (34 incêndios, 1 morte), ~174.800 fogões Frigidaire (#26-333) e travas frontais LG/Samsung.',
    date: waveDate,
    readTime: '17 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Embora alertas virais costumem focar em eletroportáteis, alguns dos maiores alertas de segurança da CPSC americana em 2026 envolvem grandes eletrodomésticos ligados continuamente na cozinha. Em 30 de julho de 2026, a CPSC anunciou o recall de ~121.680 geladeiras Galanz Retro após 34 relatos de incêndio — incluindo uma morte — por curto-circuito interno; em 19 de março de 2026, o Recall #26-333 atingiu ~174.800 fogões a gás Frigidaire, Frigidaire Gallery e Frigidaire Professional após 62 casos de ignição retardada no forno e 30 queimaduras; além de recalls ativos para botões frontais em fogões LG e Samsung e o alerta de feriados da CPSC em 19 de novembro de 2026. Conferir as etiquetas do seu aparelho leva menos de dois minutos.',
    sections: [
      {
        title: 'Geladeiras Galanz Retro (Recall CPSC 30 de Julho 2026): 34 Incêndios e 1 Óbito',
        content: 'Em 30 de julho de 2026, a CPSC recolheu cerca de 121.680 geladeiras Galanz Retro nos EUA (mais de 10.000 no Canadá) vendidas entre janeiro de 2019 e setembro de 2022. Componentes elétricos internos podem entrar em curto e pegar fogo — com 34 incêndios registrados, incluindo uma vítima fatal. Verifique a etiqueta branca no canto superior esquerdo traseiro: envolve os modelos BCD-215V-62H, GLR76TRDER, GLR76TBKER, GLR76TBEER e GLR76TWEER com códigos YYYYMM entre 201812 e 202012 (dez/2018 a dez/2020). Desligue da tomada imediatamente e contate a Galanz Americas (888-462-0579) para reparo gratuito em domicílio.',
        type: 'warning',
        boxText: 'RECALL GALANZ RETRO (JUL 2026): Desligue imediatamente os modelos BCD-215V-62H, GLR76TRDER, GLR76TBKER, GLR76TBEER ou GLR76TWEER (códigos 201812–202012) por risco grave de incêndio elétrico e agende reparo gratuito.'
      },
      {
        title: 'Fogões a Gás Frigidaire (Recall CPSC #26-333 de 19 de Março 2026): Ignição Retardada',
        content: 'Emitido em 19 de março de 2026 (CPSC #26-333), o grupo Electrolux recolheu ~174.800 fogões a gás Frigidaire, Frigidaire Gallery e Frigidaire Professional nos EUA (~5.300 no Canadá) vendidos de junho de 2025 a janeiro de 2026. O queimador inferior do forno pode atrasar a ignição e gerar labareda súbita (62 relatos e 30 queimaduras). Puxe a gaveta inferior abaixo do forno para checar a placa: abrange 23 modelos (como FCFG3062AB/AS/AW, FCFG3083AS, FCRG3051BB/BS/BW, FCRG3083AD/AS, GCFG3060BD/BF, GCFG3070BF, GCRG3060BD/BF e PCFG3080AF) na faixa de série VF52200000 a VF54399999. Pare de usar o FORNO imediatamente (os queimadores da mesa superior seguem seguros) e agende troca gratuita em GasOvenBurnerRecall.com ou 866-291-7633.',
        type: 'warning',
        boxText: 'RECALL FRIGIDAIRE #26-333 (MAR 2026): Pare de usar o forno nas séries VF52200000–VF54399999 por ignição retardada; as bocas superiores continuam liberadas enquanto aguarda o técnico gratuito.'
      },
      {
        title: 'Incêndios em Botões Frontais LG/Samsung e Alerta CPSC de 19 de Novembro 2026',
        content: 'Botões montados na frente de fogões elétricos ficam na altura de quadris, crianças e cães, causando acionamento involuntário ao encostar e incendiando caixas de pizza, tábuas ou utensílios deixados sobre o tampo. Cerca de 500.000 fogões LG e linhas Samsung possuem recalls ativos oferecendo avisos, trava de painel (Control Lock) ou kits gratuitos de cobertura para botões. Além disso, o alerta de segurança da CPSC de 19 de novembro de 2026 reforçou: ative sempre o bloqueio do painel, mantenha o cooktop 100% livre de papéis e plásticos e nunca deixe óleo aquecendo sem supervisão.',
        type: 'fact',
        boxText: 'PREVENÇÃO EM BOTÕES FRONTAIS: Use sempre o Control Lock ou instale capas gratuitas de recall LG/Samsung, e jamais apoie caixas de papelão, tampas plásticas ou panos no fogão.'
      },
      {
        title: 'Onde Encontrar Placas de Modelo, Série e Data em Grandes Eletrodomésticos',
        content: 'Etiquetas de grandes aparelhos ficam escondidas do calor: (1) Geladeiras: canto superior esquerdo traseiro (Galanz) ou parede interna direita do refrigerador; (2) Fogões e Fornos: puxe toda a gaveta inferior e ilumine a lateral da estrutura com o celular; (3) Air Fryers e Panelas de Pressão (como Gourmia GTF7530 do Recall #27-069 de nov/2026 ou Tristar Y6D-36 do Alerta #27-030 de out/2026): confira a base inferior fria e desligada. Fotografe todas as etiquetas para checagens rápidas.',
        type: 'tip',
        boxText: 'AUDITORIA EM 2 MINUTOS: Fotografe a etiqueta traseira da geladeira compacta, a lateral da gaveta inferior do fogão e a base de portáteis para consultar recalls em segundos.'
      },
      {
        title: 'Imóveis Alugados e Usados: Por Que Produtos Recolhidos Continuam em Uso',
        content: 'Apartamentos alugados, kits universitários e vendas de usados concentram aparelhos com recall nunca atendido. Embora seja proibido revender itens sob recall CPSC, geladeiras retro 2019–2020 e fogões 2025–2026 frequentemente mudam de endereço sem notificação ao novo morador. Cheque sempre modelo e série ao se mudar: reparos gratuitos ordenados pela CPSC valem para o dono atual mesmo sem nota fiscal.',
        type: 'success',
        boxText: 'REGRA DE ALUGUEL E USADOS: Confira séries de geladeira e fogão ao entrar em novo imóvel. O reparo gratuito do recall CPSC independe de nota fiscal original.'
      }
    ],
    conclusion: 'Dois minutos com uma lanterna evitam incêndios elétricos ou labaredas em fornos a gás. Confira etiquetas traseiras de geladeiras Galanz Retro 2019–2022, a gaveta inferior de fogões Frigidaire 2025–2026 (#26-333), trave botões frontais LG/Samsung e acione o reparo gratuito oficial.',
    faqs: [
      {
        question: 'Quais geladeiras Galanz Retro tiveram recall em 2026 e qual o risco?',
        answer: 'O recall CPSC de 30 de julho de 2026 cobre ~121.680 unidades nos EUA dos modelos BCD-215V-62H, GLR76TRDER, GLR76TBKER, GLR76TBEER e GLR76TWEER com códigos de data 201812–202012. Um curto interno pode causar incêndio (34 casos e 1 morte). Desligue da tomada e solicite reparo gratuito.'
      },
      {
        question: 'Posso usar as bocas de cima do meu fogão a gás Frigidaire no recall #26-333?',
        answer: 'Sim. Conforme o Recall CPSC #26-333 de 19 de março de 2026 (séries VF52200000–VF54399999), pare de usar o FORNO imediatamente devido à ignição retardada do queimador inferior, mas os queimadores superiores permanecem seguros até a troca gratuita pela Electrolux.'
      },
      {
        question: 'Onde fica o código de data da geladeira Galanz e a série do fogão Frigidaire?',
        answer: 'Na Galanz Retro, modelo e código YYYYMM ficam na etiqueta branca do canto superior esquerdo traseiro. No fogão Frigidaire, puxe totalmente a gaveta inferior abaixo do forno para ver a plaqueta de modelo e série.'
      },
      {
        question: 'Preciso da nota fiscal original para receber o conserto gratuito?',
        answer: 'Não. Os reparos domiciliares e kits protetores dos recalls federais CPSC da Galanz, Frigidaire, LG e Samsung são fornecidos gratuitamente ao proprietário atual sem exigir comprovante de compra.'
      },
      {
        question: 'Como evitar que cães ou crianças liguem fogões com botões na frente?',
        answer: 'Ative o Control Lock do painel eletrônico após cozinhar, solicite a trava ou capa gratuita do recall LG/Samsung quando aplicável e nunca deixe caixas, tábuas ou panos sobre o tampo.'
      }
    ],
    relatedTools: [
      { name: 'Scanner de Código de Barras e Recalls CPSC/FDA', url: '/pt/tools/product-recalls-scanner/' },
      { name: 'Guia de Emergência: Fogo de Óleo, Elétrico e Queimaduras', url: '/pt/tools/kitchen-fire-emergency-guide/' },
      { name: 'Triagem de Emergências e Riscos na Cozinha', url: '/pt/tools/kitchen-hazard-emergency-triage/' }
    ]
  }
];

const guidesZh = [
  {
    slug: 'freezing-mason-jars-vacuum-bags-frost-free-freezer-burn-safety',
    title: '梅森玻璃罐冷冻、真空海鲜与无霜冰箱冻烧安全指南：防止玻璃胀裂、冰晶升华与厌氧肉毒杆菌风险',
    category: 'freezer',
    excerpt: '解析为什么带肩玻璃罐冷冻汤汁会炸裂、无霜冰箱化霜循环如何加速冰晶升华与MDA哈喇氧化，以及FDA要求真空海鲜解冻前必须剪开包装的关键规则。',
    date: waveDate,
    readTime: '17 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '家用冷冻看似简单，却频频发生玻璃罐在冷冻格炸裂、牛排结满白霜并出现发灰硬皮，或真空密封三文鱼在袋内直接解冻的安全隐患。这些问题的背后都有严密的物理与微生物学规律：液态水结成六方冰晶时体积会膨胀约 9%，无霜风冷冰箱每隔 8–12 小时加热除霜会驱动水分直接升华流失，而抽空氧气的真空袋在 3.3°C（38°F）以上反而可能成为耐寒肉毒杆菌产毒的温床。掌握容器几何、阻隔包装与正确解冻法则，才能兼顾美味与食品安全。',
    sections: [
      {
        title: '为什么带肩梅森玻璃罐冷冻易碎：9% 结冰膨胀与瓶肩瓶颈应力',
        content: '当高汤、酱汁或清水降温至 0°C（32°F）以下结冰时，水分子形成开放的六方冰晶格，体积比液态水膨胀约 9%。常规窄口或带弧形瓶肩的梅森罐在结冰时，贴壁先冻的冰壳会向内挤压并向上顶推未冻液体，受阻于收窄的弧形瓶肩，瞬间产生剧烈环向拉应力导致普通钠钙玻璃炸裂。若需用玻璃冷冻液体，必须选用明确标注可冷冻的直筒广口罐（通常不超过 470 毫升 / 1 品脱），先冷藏彻底降温，顶部留出至少 2.5 厘米（1 英寸）膨胀空隙，并等完全冻实后再拧紧瓶盖。',
        type: 'warning',
        boxText: '玻璃冷冻铁律：严禁使用带肩窄口玻璃罐冷冻液体。仅限直筒广口冷冻罐，先冷藏降温、预留 ≥2.5 厘米膨胀顶隙，冻实前保持盖子微松。'
      },
      {
        title: '无霜冰箱化霜循环（-18°C 至 -4°C）与冰晶直接升华动力学',
        content: '即使在稳定的 -18°C（0°F）下，固态冰仍具有约 125.4 Pa（0.94 mmHg）的饱和蒸气压。在无霜（自动除霜）冰箱中，加热丝每 8–12 小时启动一次融化蒸发器霜层，使风道温度周期性从 -18°C 波动回升至 -4°C（25°F）。当肉类只包裹透气率较高的超市普通 PVC 保鲜膜（水蒸气透过率约 4.8 g/m²/24h）或袋内残留空气时，温变形成的水蒸气压差会持续把肌细胞水分直接升华为水蒸气，在包装内壁凝华成厚白霜，而在肉表留下蜂窝状干孔。',
        type: 'fact',
        boxText: '无霜升华原理：自动除霜每 8–12 小时引发温度波动，驱动封装不严的肉类表面冰晶直接升华逃逸，水分在袋内结成白霜并使肉质呈海绵状干瘪。'
      },
      {
        title: 'MDA 脂质过氧化与 USDA 判定：风味劣化而非细菌食物中毒',
        content: '表层冰晶升华掏空水分屏障后，氧气长驱直入氧化多不饱和脂肪酸（PUFA），生成丙二醛（MDA）与己醛。肉类科学 TBARS 指标显示，当 MDA 超过 2.0 mg/kg 时即产生明显的陈旧纸板哈喇味，肌动蛋白与肌球蛋白交联硬化导致口感如橡胶。不过美国农业部（USDA FSIS）明确指出：冻烧属于品质退化，并非细菌腐败——在 -18°C（0°F）或更低温度下，沙门氏菌、大肠杆菌和李斯特菌均完全停滞，不会引起食源性疾病。可在半解冻状态下用利刀削去最外层 1.5–3 毫米干皮，再用番茄、红酒等弱酸汤汁低温湿热慢炖挽救口感。',
        type: 'tip',
        boxText: 'USDA 挽救法则：冻烧肉在 ≤-18°C 下无细菌致病风险。半解冻时削去外层约 2 毫米干燥氧化表皮，改用酸性高汤湿热慢炖，切忌干煎干烤。'
      },
      {
        title: '真空密封海鲜的肉毒杆菌陷阱：解冻前务必剪开或拆袋',
        content: '多层尼龙/EVOH 共挤真空密封袋（水蒸气透过率 <0.05 g/m²/24h）能抽尽顶隙空气，将无冻烧保鲜期延长 3–5 倍。但真空封装在解冻阶段隐藏了严重生物风险：生鲜鱼虾贝类上常见的非蛋白水解型 E 型肉毒梭菌芽孢，在无氧且温度高于 3.3°C（38°F）时即可萌发并分泌致命肉毒神经毒素——而许多家用冷藏室实测温度正处于 4°C–6°C！FDA 水产 HACCP 规范明确要求：所有真空密封鱼类及低酸食品在放入冰箱冷藏解冻前，必须先剪开真空袋或取出盛盘通风。',
        type: 'warning',
        boxText: 'FDA 真空海鲜强制规则：E 型肉毒杆菌可在高于 3.3°C 的无氧真空袋内产毒。冷藏解冻真空鱼虾前，务必先剪开袋口或拆封放入带盖餐盘。'
      },
      {
        title: '三大安全解冻路径：严禁热水泡解与室温台面解冻',
        content: '切勿将冻肉放在厨房台面室温解冻，也绝不能用温热水浸泡加速。当肉块中心仍坚硬冰冻时，外层会迅速升温进入 4.4°C–60°C（40°F–140°F）细菌危险温区，致病菌每 20 分钟即可翻倍。请严格遵循 USDA 认可的三种安全解冻法：（1）冷藏解冻（≤4°C，每 2–2.5 千克约需 24 小时，底层接盘防滴水）；（2）防漏密封袋浸入冷水（≤21°C），每 30 分钟换一次冷水（约每 450 克需 30 分钟）；（3）微波炉解冻后必须立即下锅彻底煮熟。',
        type: 'success',
        boxText: '三大安全解冻法：≤4°C 冰箱冷藏、密封袋冷水浸泡且每 30 分钟换水、或微波解冻后立刻烹煮——严禁热水或室温摊放。'
      }
    ],
    conclusion: '科学避开冷冻陷阱只需三步：按 9% 结冰膨胀选用直筒广口玻璃罐并留足 2.5 厘米空隙；用 EVOH 真空袋或双层铝箔封锁无霜温差升华；冷藏解冻真空密封海鲜前务必先剪开封口通氧。',
    faqs: [
      {
        question: '玻璃梅森罐能直接放进冰箱冷冻室冻汤吗？',
        answer: '仅限无弧形瓶肩的直筒广口冷冻款玻璃罐（建议 ≤470 ml），且须先冷藏降温、顶部留出至少 2.5 厘米膨胀空间，并在完全冻实前保持盖子微松，否则 9% 冰膨胀极易撑裂瓶肩。'
      },
      {
        question: '为什么 FDA 规定真空包装鱼肉解冻前一定要剪开口子？',
        answer: '海鲜表面常携带耐寒非蛋白水解型 E 型肉毒梭菌芽孢，在缺乏氧气且高于 3.3°C（38°F）的密闭真空袋中能快速生长并产生剧毒肉毒素，剪开袋口引入氧气可阻断厌氧产毒环境。'
      },
      {
        question: '出现冻烧斑块的肉吃了会食物中毒吗？',
        answer: '不会。USDA FSIS 确认 ≤-18°C 下致病菌无法增殖，冻烧只是物理水分升华和油脂氧化（MDA）。削去外层约 2 毫米干皮后用炖煮方式烹饪即可安全食用。'
      },
      {
        question: '为什么风冷无霜冰箱比老式直冷冰柜更容易冻烧？',
        answer: '风冷冰箱每 8–12 小时就会开启化霜加热丝，使库温反复升至 -4°C 左右。这种周期性温差与低湿风循环会剧烈抽取包装内肉类的水分形成白霜。'
      },
      {
        question: '用热水浸泡快速解冻冻肉有什么危险？',
        answer: '热水会让肉的表面迅速进入 4.4°C–60°C 细菌快速繁殖危险区，而内部尚未化开，大幅提高沙门氏菌等污染风险。应改用冷藏室或每 30 分钟换水一次的冷水浸泡法。'
      }
    ],
    relatedTools: [
      { name: '冷冻灼伤、冰晶升华与脂质过氧化测算模型', url: '/zh-cn/tools/freezer-burn-sublimation-modeler/' },
      { name: 'USDA 肉类与火鸡安全解冻时间计算器', url: '/zh-cn/tools/meat-thawing-calculator/' },
      { name: '厨具热冲击与玻璃炸裂风险模拟器', url: '/zh-cn/tools/thermal-shock-simulator/' }
    ]
  },
  {
    slug: 'recycled-cardboard-mosh-moah-bamboo-melamine-eu-2026-safety',
    title: '再生纸盒（MOSH/MOAH）与“竹纤维密胺”水杯隐患：解析 2026 欧盟矿物油新限值、油墨致癌迁移与甲醛禁令',
    category: 'materials',
    excerpt: '详述再生披萨盒与麦片盒如何渗出遗传毒性矿物油芳烃 MOAH（2026 年 5 月欧盟投票敲定 2027 强制上限），以及欧盟全面封杀“竹纤维密胺”餐具的甲醛超标科学真相。',
    date: waveDate,
    readTime: '17 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '厨房里最容易让人误以为“环保无毒”的两类日用品，正是直接盛装热油外卖的未覆膜再生纸盒，以及主打“天然竹纤维可降解”的硬质水杯与儿童餐盘。2026 年 5 月 13 日，欧盟动植物食品饲料常设委员会（SCoPAFF）正式投票通过修订法规 (EU) 2023/915，针对具备遗传毒性与致癌潜力的芳香烃矿物油（MOAH）设定自 2027 年 1 月 1 日起生效的强制法定上限；与此同时，欧盟监管机构已长期对违规混入竹粉的“竹纤维密胺”复合餐具实施下架禁令，原因正是其遇热饮酸性食物会释放超标甲醛与三聚氰胺单体。',
    sections: [
      {
        title: '2026 欧盟 MOAH/MOSH 立法转折：再生纸盒油墨如何渗透进热披萨与谷物',
        content: '欧洲食品安全局（EFSA）将矿物油烃类划分为饱和烃（MOSH，纳入 2026–2029 欧盟持续监测框架）与芳香烃（MOAH）。其中含 3 至 7 个苯环的 MOAH 组分具有遗传毒性及致癌风险，无法设定安全摄入下限。2026 年 5 月 13 日欧盟 SCoPAFF 通过强制上限（C10–C50 范围，2027 年 1 月 1 日执行）：低脂干粮（脂肪 ≤4%）上限 0.50 mg/kg，中脂食品（>4% 至 ≤50%）上限 1.0 mg/kg，高脂食品（>50%）上限 2.0 mg/kg（部分植物油至 2030 年分步收紧）。未设 PET/EVOH 功能阻隔内衬的再生瓦楞披萨盒与麦片纸盒含有回收油墨、黏合剂与机械润滑油残余，MOAH 会随常温挥发或借热油脂快速迁移至食物。',
        type: 'warning',
        boxText: 'MOAH 迁移警示：再生纸板油墨中的遗传毒性 MOAH（C10–C50）会渗入热披萨油脂与散装谷物。热外卖拿到手请立刻转移到瓷盘或玻璃盘中，切勿带纸盒复热。'
      },
      {
        title: '欧盟禁售“竹纤维密胺”复合餐具：热水泡茶为何超标释放甲醛',
        content: '市面大量宣称“环保竹纤维”的硬质咖啡随行杯与儿童分格餐盘，并非整块原竹切削，而是将磨碎的竹粉或玉米秸秆粉混入密胺-甲醛（三聚氰胺甲醛）热固性塑料模压而成。依据欧盟食品接触法规 (EU) No 10/2011 与 (EC) No 1935/2004，竹子属于草本植物而非获批木粉填料，属于非法未授权添加物。更严重的是，亲水植物纤维吸水膨胀后会撑裂高分子交联网络，遇到 85°C–95°C 热茶咖啡、酸性果汁或微波加热时，剧烈水解释放出致癌甲醛（远超 15 mg/kg 特定迁移限值）与三聚氰胺（超过 2.5 mg/kg 限值；EFSA SVHC 筛查亦关注其男性生殖毒性风险）。',
        type: 'warning',
        boxText: '竹纤维密胺禁令：所谓“竹纤维环保杯盘”实为违规添加竹粉的密胺甲醛树脂，遇热饮与酸性食物会开裂渗出超标甲醛（>15 mg/kg）及三聚氰胺（>2.5 mg/kg）。'
      },
      {
        title: 'EFSA 苯乙烯（#6 PS）再评估（40 µg/kg 限值）与一次性餐盖热变形边界',
        content: '白色发泡外卖盒（#6 聚苯乙烯 PS）及透明硬质热饮盖常与再生纸盒混用。在最新科学意见中，EFSA 重新评估了经口饮食暴露途径，指出在正常膳食接触水平下苯乙烯不具经口遗传毒性，并支持在欧盟塑料法规 (EU) No 10/2011 中设立极严格的 40 µg/kg（40 ppb）特定迁移上限。尽管如此，#6 聚苯乙烯的热软化点仅 70°C–90°C，遇微波炉或滚烫油脂依然会软化塌陷并加速残留单体迁移，因此绝对禁止将 #6 外卖盒送入微波炉。',
        type: 'fact',
        boxText: '苯乙烯热红线：EFSA 支持对 #6 聚苯乙烯实行 40 µg/kg 严格迁移限值，且该材质 70°C 即开始软化——切勿用 #6 发泡餐盒或透明 PS 盖进行微波加热。'
      },
      {
        title: '30 秒厨房橱柜与储粮区自查清单',
        content: '花半分钟清理两类高频隐患：（1）检查家中所有磨砂哑光硬质“竹纤维”水杯、婴儿分格碗，立即停止用于盛装滚烫饮品、番茄酸汤、洗碗机高温烘干及微波加热；（2）切勿连同纸质外卖盒、带油污再生披萨盒直接放进烤箱或空气炸锅加热；（3）长期存放面粉、燕麦、意面和坚果时，不要直接敞放在无内衬塑料袋的裸露纸盒内，应分装进密封玻璃罐中以防气相矿物油缓慢富集。',
        type: 'tip',
        boxText: '30 秒自查行动：将无阻隔内袋纸盒中的干粮杂粮倒入玻璃密封罐；立刻淘汰“竹纤维环保塑料”杯碗的热饮和微波用途。'
      },
      {
        title: '零迁移安全替代材质：高硼硅玻璃、纯釉瓷与 304/316 不锈钢',
        content: '彻底规避矿物油与甲醛单体迁移无需昂贵设备：（1）分装与复热：热外卖回家后立刻换入无铅釉陶瓷盘或 3.3 型高硼硅玻璃碗中复热；（2）儿童餐具与随行杯：优先选择电抛光 304（18/8）或 316 医用级不锈钢（不可进微波炉）、带硅胶护套的钢化高硼硅玻璃杯，或通过检测的 100% 铂金硫化硅胶；（3）案板与托盘：选用纯实木整木（糖枫木、榉木、胡桃木，定期涂抹食品级矿物油），避开胶水压合复合竹纤维制品。',
        type: 'success',
        boxText: '纯净替代方案：用 3.3 高硼硅玻璃、釉面纯瓷及 304/316 不锈钢取代热食再生纸盒与竹纤维密胺餐具，从源头阻断 MOAH、甲醛与苯乙烯迁移。'
      }
    ],
    conclusion: '包装上印着“再生环保”或“天然竹纤维”并不意味着适合接触热油或酸性食物。坚持热外卖立刻换盘、干货谷物转存玻璃罐，并将竹纤维密胺复合杯碗升级为高硼硅玻璃、纯瓷或 304 不锈钢，即可牢牢守住 2026–2027 欧盟最高级别食品接触安全标准。',
    faqs: [
      {
        question: '“天然竹纤维”咖啡随行杯和儿童餐盘能装热水或热汤吗？',
        answer: '不能（若为硬质竹粉密胺复合材料）。欧盟已明令查禁竹纤维密胺餐具，因为未经授权的竹粉填料在热水（85°C–95°C）或酸性果汁中会吸水微裂，导致密胺树脂超标释放致癌甲醛（>15 mg/kg）与三聚氰胺（>2.5 mg/kg）。'
      },
      {
        question: '再生纸盒里的 MOSH 和 MOAH 是什么？2027 年新规限制多大？',
        answer: '它们是再生纸浆油墨、胶粘剂与机械油脂残留的饱和烃（MOSH）与芳香烃（MOAH）。因 3–7 环 MOAH 具遗传毒性及致癌风险，欧盟 SCoPAFF 于 2026 年 5 月投票通过 2027 年 1 月 1 日起实施法定上限（按食品脂肪含量限 0.50 至 2.0 mg/kg）。'
      },
      {
        question: '可以直接连着披萨纸盒放进烤箱或空气炸锅加热剩披萨吗？',
        answer: '绝对不行。高温不仅让纸盒存在引燃火灾风险，更会成倍加速再生纸板中的 MOAH 芳烃、油墨及胶水溶剂向融化奶酪油脂中热萃取迁移。'
      },
      {
        question: 'EFSA 对 #6 聚苯乙烯（泡沫外卖盒）的最新评估是怎么说的？',
        answer: 'EFSA 科学评估认为正常膳食经口摄入苯乙烯不具遗传毒性，并支持将其在塑料接触材料中的特定迁移限值严格锁定在 40 µg/kg。但 #6 塑料在 70°C–90°C 即发生软化，因此仍严禁进微波炉。'
      },
      {
        question: '如何判断家里的纸盒麦片或意面有没有防矿物油迁移保护？',
        answer: '如果纸盒内部配有完整密封的 PET、EVOH 或尼龙复合塑料内袋，可有效阻隔外部纸板挥发出的 MOAH 蒸汽；若食物直接接触无内衬裸纸板，建议尽快分装进玻璃密封罐。'
      }
    ],
    relatedTools: [
      { name: '热食塑料化学迁移与安全容器核查器', url: '/zh-cn/tools/kitchen-plastic-leaching-checker/' },
      { name: '密胺餐具洗碗机甲醛与氰尿酸溶出模拟器', url: '/zh-cn/tools/dishwasher-melamine-leaching-simulator/' },
      { name: '塑料编码 #1–#7 厨房安全查询器', url: '/zh-cn/tools/plastic-code-checker/' }
    ]
  },
  {
    slug: 'galanz-retro-fridge-frigidaire-range-2026-cpsc-recalls-guide',
    title: '2026 年大家电重大召回汇总（CPSC）：Galanz 复古冰箱电气起火、Frigidaire 燃气灶延迟点火爆燃与 LG/三星前置旋钮误触召回核查',
    category: 'appliances',
    excerpt: '立即核查 2026 CPSC 重大召回名单：约 12.17 万台 Galanz 复古冰箱（34 起火灾及 1 例死亡）、约 17.48 万台 Frigidaire 燃气灶（#26-333 烤箱延迟点火烫伤）及 LG/三星前置旋钮防护。',
    date: waveDate,
    readTime: '17 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '相比频繁登上热搜的小家电，2026 年美国消费品安全委员会（CPSC）发布的几起高危大家电召回，涉及的正是全年 24 小时通电或直接连接燃气的家庭核心厨电。2026 年 7 月 30 日，CPSC 召回约 121,680 台 Galanz（格兰仕）复古造型冰箱（已报告 34 起起火事件及 1 例死亡）；2026 年 3 月 19 日，CPSC 召回编号 #26-333 涉及约 174,800 台 Frigidaire 燃气灶（报告 62 起烤箱延迟点火及 30 起烧烫伤）；同时约 50 万台 LG 与多款三星前置旋钮电灶正处于召回防护中，配合 CPSC 于 2026 年 11 月 19 日发布的冬季厨房火灾预警。只需两分钟核对机身铭牌，即可排除重大火灾与爆燃隐患。',
    sections: [
      {
        title: 'Galanz 复古冰箱召回（2026 年 7 月 30 日 CPSC 公告）：34 起火灾与 1 例死亡',
        content: '2026 年 7 月 30 日，CPSC 宣布召回美国约 121,680 台（加拿大逾 1 万台）Galanz Retro 复古系列冰箱（2019 年 1 月至 2022 年 9 月在 Home Depot 与 Amazon 销售）。其内部电气元件可能发生短路引燃，CPSC 已接到 34 起起火报告，其中地方消防部门确认造成 1 人死亡。请查看冰箱背面左上角的白色铭牌标签：受影响型号为 BCD-215V-62H、GLR76TRDER、GLR76TBKER、GLR76TBEER 与 GLR76TWEER，且生产日期代码（YYYYMM 格式）在 201812 至 202012 之间（2018 年 12 月至 2020 年 12 月）。请立即拔掉电源插头停用，并致电 Galanz Americas（888-462-0579）预约技师免费上门维修。',
        type: 'warning',
        boxText: 'GALANZ 复古冰箱召回（2026年7月）：若机身背面左上角标签型号为 BCD-215V-62H 或 GLR76TRDER/TBKER/TBEER/TWEER（日期码 201812–202012），请立即断电并申请免费上门维修。'
      },
      {
        title: 'Frigidaire 燃气灶召回（2026 年 3 月 19 日 CPSC #26-333）：烤箱燃烧器延迟点火',
        content: '2026 年 3 月 19 日发布的 CPSC 召回 #26-333 涉及 Electrolux 旗下约 174,800 台美国版（加拿大约 5,300 台）Frigidaire、Frigidaire Gallery 与 Frigidaire Professional 燃气灶（2025 年 6 月至 2026 年 1 月销售）。其烤箱烘烤燃烧器存在延迟点火缺陷，燃气积聚后瞬间爆燃已导致 62 起报告和 30 起灼伤。拉出烤箱最下方的储物抽屉查看框架铭牌：共覆盖 23 个型号（含 FCFG3062AB/AS/AW、FCFG3083AS、FCRG3051BB/BS/BW、FCRG3083AD/AS、GCFG3060BD/BF、GCFG3070BF、GCRG3060BD/BF、PCFG3080AF 等），序列号区间为 VF52200000 至 VF54399999。请立即停用下方的“烤箱”功能（CPSC 明确说明灶台上方明火炉头可继续安全使用），联系 Electrolux（866-291-7633 或 GasOvenBurnerRecall.com）免费更换全新燃烧器。',
        type: 'warning',
        boxText: 'FRIGIDAIRE 召回 #26-333（2026年3月）：序列号 VF52200000–VF54399999 机型立即停用下方烤箱（上方明火灶头仍可安全使用），联系官方免费上门更换燃烧器。'
      },
      {
        title: 'LG / 三星前置旋钮误触火灾召回与 CPSC 11 月 19 日节假日防火警告',
        content: '嵌入式电灶/电磁炉的前置旋钮恰好处于腰部、幼童及大型宠物碰撞高度，走动误碰即可悄无声息打开炉头，引燃台面上暂放的披萨纸盒、塑料菜板或空锅。约 50 万台 LG 电灶及多款三星嵌入式电灶已纳入 CPSC 前置旋钮火灾召回，免费提供警示贴纸、面板控制锁（Control Lock）指引或物理旋钮保护罩。结合 CPSC 于 2026 年 11 月 19 日发布的假期厨房防火警报，务必养成习惯：做完饭立即开启 Control Lock，灶台玻璃表面绝不堆放任何纸盒、塑料或抹布。',
        type: 'fact',
        boxText: '前置旋钮防火守则：烹调完毕立即按下 Control Lock 锁键或安装 LG/三星免费防误触旋钮盖，切勿把纸盒、砧板等任何物品暂放在电灶面板上。'
      },
      {
        title: '大家电隐藏型号与序列号铭牌定位指南（2 分钟自查）',
        content: '大家电标签常藏在远离高温和油烟的位置：（1）紧凑型/复古冰箱：位于机身背面左上角或冷藏室右侧内壁；（2）立式燃气灶与电灶：需将烤箱底部的储物抽屉完全拉出，用手电筒照射两侧内框查看金属铭牌；（3）台面空气炸锅烤箱或电压力锅（如 2026 年 11 月 5 日召回 #27-069 的 Gourmia GTF7530 或 10 月 15 日预警 #27-030 的 Tristar Y6D-36）：待彻底断电冷却后翻看底部铭牌。建议用手机拍照存档所有家电铭牌，随时一键比对。',
        type: 'tip',
        boxText: '2 分钟拍照建档：拍下小冰箱背面标签、燃气灶底层抽屉内侧铭牌以及台面电器底牌，买二手厨电或搬家入住时可秒查官方召回。'
      },
      {
        title: '租房与二手厨电盲区：为什么多年后召回隐患依然存在',
        content: '出租屋、公寓短租房及二手交易平台是召回电器长期“隐身通电”的重灾区。尽管美国联邦法律禁止转售或捐赠已召回商品，但 2019–2020 批次二手复古小冰箱及随机售出的 2025–2026 款燃气灶往往已易主，厂商无法联系到现住户。入住租房或购入二手大件时务必先核查序列号：所有 CPSC 强制免费上门维修或配件寄送均面向现任持有人开放，无需提供原始购物小票。',
        type: 'success',
        boxText: '租房与二手核查：入住新居第一天先查冰箱与炉灶序列号；CPSC 召回的免费维修不要求保留原始购物凭证。'
      }
    ],
    conclusion: '花两分钟拿起手机手电筒核对铭牌，就能避免夜间电气短路火灾或燃气烤箱延迟爆燃。请立即排查 2019–2022 售出的 Galanz 复古冰箱背面标签、检查 2025–2026 Frigidaire 燃气灶底层抽屉序列号（#26-333），并锁定 LG/三星前置灶具旋钮，及时申领免费官方维修。',
    faqs: [
      {
        question: '2026 年哪些 Galanz 复古冰箱被召回？起火原因是什么？',
        answer: '2026 年 7 月 30 日 CPSC 召回美国约 121,680 台 BCD-215V-62H、GLR76TRDER、GLR76TBKER、GLR76TBEER 与 GLR76TWEER 型号复古冰箱（背面日期码 201812–202012）。内部电气部件可能短路起火（已报 34 起火灾及 1 例死亡）。请立即断电并联系官方免费维修。'
      },
      {
        question: '在 Frigidaire #26-333 召回完成维修前，灶台上面的明火炉头还能用吗？',
        answer: '可以。2026 年 3 月 19 日 CPSC 召回 #26-333（序列号 VF52200000–VF54399999）明确指出仅需立即停用下方的“烤箱”功能（因烘烤燃烧器延迟点火有烧伤风险），灶台顶部炉头仍可安全正常使用。'
      },
      {
        question: 'Galanz 冰箱的日期码和 Frigidaire 燃气灶的序列号贴在哪里？',
        answer: 'Galanz 复古冰箱的型号与 YYYYMM 日期码位于机身背面左上角的白色标签上；Frigidaire 燃气灶的型号与序列号铭牌需将烤箱下方储物抽屉拉出后在框体内侧查看。'
      },
      {
        question: '房东配的冰箱或二手买来的灶具没有购物小票，还能享受 CPSC 免费召回维修吗？',
        answer: '可以。Galanz、Frigidaire（Electrolux）、LG 与三星的 CPSC 联邦召回免费上门维修或旋钮保护套件均面向当前实际使用人提供，无需原始购买发票。'
      },
      {
        question: '如何防止宠物或小孩误碰打开前置旋钮电灶引发火灾？',
        answer: '每次烹饪结束后按下控制面板的 Control Lock 童锁键，若属于 LG 或三星召回适用机型应立即申领免费旋钮锁定护盖，且切忌在炉灶表面摆放任何纸盒或塑料器皿。'
      }
    ],
    relatedTools: [
      { name: '商品条码与 CPSC/FDA 官方召回扫描查询器', url: '/zh-cn/tools/product-recalls-scanner/' },
      { name: '厨房油锅起火、电气火灾与烫伤急救指南', url: '/zh-cn/tools/kitchen-fire-emergency-guide/' },
      { name: '厨房危险应急处置与分诊指南', url: '/zh-cn/tools/kitchen-hazard-emergency-triage/' }
    ]
  }
];

const guidesJa = [
  {
    slug: 'freezing-mason-jars-vacuum-bags-frost-free-freezer-burn-safety',
    title: 'ガラス保存瓶の冷凍破損・真空パック魚介のボツリヌス菌・自動霜取り冷凍庫の冷凍焼け対策（USDA・FDA基準）',
    category: 'freezer',
    excerpt: '肩付きメイソンジャーが冷凍庫で割れる9%膨張の物理、ファン式自動霜取りが氷昇華とMDA脂質酸化を加速する仕組み、FDAが定める真空魚介類の解凍前開封ルールを解説。',
    date: waveDate,
    readTime: '17分で読めます',
    author: 'IsItKitchenSafe',
    intro: '食材の冷凍保存は手軽に見えますが、スープを入れたガラス瓶が冷凍室で破裂したり、ステーキが白くパサパサに冷凍焼けしたり、真空パックのサーモンを密封したまま解凍したりする危険な落とし穴が潜んでいます。これらはすべて明確な物理・微生物学の法則によるものです。水は凍ると体積が約9%膨張し、ファン式（自動霜取り）冷凍庫は8〜12時間ごとに内部温度を上げて氷の昇華を強制し、無酸素の真空袋は3.3°C（38°F）以上でE型ボツリヌス菌の毒素産生を許します。容器形状・防湿バリア・安全な解凍法を正しく把握しましょう。',
    sections: [
      {
        title: 'なぜガラス保存瓶が冷凍庫で割れるのか：水の9%体積膨張と瓶肩の応力集中',
        content: 'スープや出汁が0°C（32°F）以下に凍結すると、水分子が六方晶の氷格子を組むため液体の約1.09倍（9%増）の体積に膨張します。くびれや肩（ショルダー）がある一般的なメイソンジャーでは、壁面から凍り始めた氷の栓が狭い肩口に引っかかり、逃げ場を失った膨張圧がソーダ石灰ガラスを割る強い引張応力を生みます。ガラス容器で液体を冷凍する場合は、必ず冷凍対応のストレート型広口瓶（16 oz / 約470 mL以下）を使い、冷蔵室で十分冷やしてから上部2.5 cm（1インチ）以上のヘッドスペースを残し、完全に凍り切るまでフタを緩めておく必要があります。',
        type: 'warning',
        boxText: 'ガラス瓶冷凍ルール：くびれ・肩のある瓶での液体冷凍は厳禁。必ず冷凍対応のストレート型広口瓶を用い、予冷後に2.5 cm以上の余白を残して完全凍結まで蓋を緩めてください。'
      },
      {
        title: '自動霜取り（ファン式）冷凍庫の温度変動（-18°C〜-4°C）と氷昇華のメカニズム',
        content: '家庭用標準温度-18°C（0°F）でも氷は約125.4 Paの平衡蒸気圧を持ちます。さらに現代主流のファン式（自動霜取り）冷凍庫は、冷却器（エバポレーター）の霜を溶かすため8〜12時間ごとにヒーターが作動し、庫内空気が-18°Cから一時的に-4°C付近まで上昇します。スーパーの薄いPVCラップ（水蒸気透過度 約4.8 g/m²/24h）や隙間のある袋のまま保存すると、この温度差が水蒸気圧差を生み、肉表面の氷が液体を経ずに水蒸気へ直接昇華して袋内側に白い雪状の霜を作り、組織内に乾燥した「蜂の巣状の空洞」を残します。',
        type: 'fact',
        boxText: 'ファン式冷凍庫の物理：8〜12時間ごとの霜取り昇温が氷の直接昇華を促進し、包装内への白霜付着と肉表層の多孔質乾燥を引き起こします。'
      },
      {
        title: '脂質過酸化（MDA）とUSDA安全基準：品質劣化と食中毒の違い',
        content: '昇華で水分バリアを失った細胞膜に酸素が侵入すると、多価不飽和脂肪酸が自動酸化し、マロンジアルデヒド（MDA）やヘキサナールが生じます。TBARS値が2.0 mg MDA/kgを超えると「古紙・酸化油」のような不快臭が目立ち、ミオシン等のタンパク質も架橋硬化してゴム状の食感になります。ただし米国農務省（USDA FSIS）は、冷凍焼けは品質劣化であり食中毒ではないと明言しています。-18°C以下ではサルモネラ菌や大腸菌、リステリア菌は増殖できないため微生物学的には100%安全です。半解凍状態で表面1.5〜3 mmの乾燥層をナイフで削ぎ落とし、トマトやワインなど酸味のある煮込み料理で救出できます。',
        type: 'tip',
        boxText: 'USDAレスキュー法：-18°C以下の冷凍焼け肉で細菌性食中毒は起きません。表面2 mmの乾燥部を削ぎ落とし、乾熱焼きではなく酸味のある湿熱煮込み料理に調理してください。'
      },
      {
        title: '真空パック魚介類のボツリヌス菌罠：解凍前に必ず袋を切り開くこと',
        content: 'EVOH/ナイロン多層真空パック（WVTR <0.05 g/m²/24h）は空気を遮断し、冷凍鮮度をトレイ包装の3〜5倍延ばします。しかし解凍時には重大な注意点があります。生鮮魚介類に付着しやすい非タンパク質分解性E型ボツリヌス菌の芽胞は、酸素のない真空袋内で温度が3.3°C（38°F）を超えると発芽・増殖し、神経毒素を生成する恐れがあります（多くの家庭用冷蔵庫は3.3°Cを上回ります）。FDA水産HACCP指針は、真空パック魚介類を冷蔵庫で解凍する前に必ず袋に切れ目を入れるか取り出して皿に移すよう義務付けています。',
        type: 'warning',
        boxText: 'FDA真空魚介の必須ルール：E型ボツリヌス菌は3.3°C超の無酸素袋内で毒素を作る恐れがあります。冷蔵解凍する前に必ず真空パックの封を切るか別容器へ移してください。'
      },
      {
        title: '安全な3つの解凍ルート：お湯解凍・室温放置が危険な理由',
        content: '冷凍肉や魚をキッチンの常温台に放置したり、お湯に浸けたりしてはいけません。中心が凍ったままでも外側が瞬時に4.4°C〜60°Cの危険温度帯に入り、菌が20分ごとに倍増します。USDA推奨の安全な解凍法は次の3つだけです。（1）4°C以下の冷蔵庫内（2〜2.5 kgあたり約24時間、ドリップ受け皿を使用）；（2）密閉袋に入れて21°C以下の冷水（流水または30分ごとに水を全交換、450 gあたり約30分）；（3）電子レンジ解凍（解凍直後に必ず加熱調理する場合のみ）。',
        type: 'success',
        boxText: '安全な解凍3原則：冷蔵庫（4°C以下）、30分ごとに水を替える冷水浸漬、または解凍直後に加熱する電子レンジ解凍のみ。お湯と常温放置は厳禁です。'
      }
    ],
    conclusion: '冷凍トラブルを防ぐ鍵は3つあります。9%膨張を逃がすストレート型広口瓶（余白2.5 cm）、EVOH真空パックやアルミ二重包みによる昇華防止、そして真空魚介類を冷蔵庫で解凍する前の「袋の事前開封」です。',
    faqs: [
      {
        question: 'メイソンジャーなどのガラス瓶にスープを入れて冷凍しても大丈夫ですか？',
        answer: '肩（くびれ）のないストレート形状の冷凍対応広口瓶（470 mL以下）を使い、事前に冷蔵冷却して上部2.5 cm以上の余白を取り、完全に凍るまで蓋を緩めたままにする場合のみ安全です。通常の肩付き瓶は9%膨張で割れます。'
      },
      {
        question: '真空パックの魚を解凍するとき、なぜ必ず袋を開けないといけないのですか？',
        answer: 'FDAの警告通り、魚介類に潜むE型ボツリヌス菌芽胞は、酸素のない密封真空袋内で温度が3.3°C（38°F）を超えると増殖してボツリヌス毒素を産生する危険があるためです。解凍前に必ず切り込みを入れるか袋から出してください。'
      },
      {
        question: '冷凍焼けして白く変色したお肉を食べると食中毒になりますか？',
        answer: 'いいえ。USDA FSISによると、-18°C以下で保管された冷凍焼け肉は病原菌が増殖しないため微生物学的に安全です。表面の乾燥・酸化層（約2 mm）を切り落としてシチューなど湿熱調理に使うのが最適です。'
      },
      {
        question: 'ファン式（自動霜取り）冷凍庫だと、なぜ直冷式より冷凍焼けしやすいのですか？',
        answer: '自動霜取りヒーターが8〜12時間ごとに作動し、庫内が-18°Cから-4°C前後まで周期的に上昇するためです。この温度と蒸気圧の変動が食材の水分を急速に引き出して袋内の霜へと変えます。'
      },
      {
        question: 'お湯やぬるま湯に浸けて冷凍肉を急速解凍してはいけませんか？',
        answer: '厳禁です。中心部が凍っていても表面が急速に4.4°C〜60°Cの危険温度帯に入り細菌が爆発的に増えます。冷蔵庫内または30分ごとに水を替える冷水での解凍、もしくは凍ったまま長めに加熱調理してください。'
      }
    ],
    relatedTools: [
      { name: '冷凍焼け・氷昇華・脂質過酸化モデラー', url: '/ja/tools/freezer-burn-sublimation-modeler/' },
      { name: 'USDA 肉・七面鳥 安全解凍時間計算機', url: '/ja/tools/meat-thawing-calculator/' },
      { name: '調理器具の熱衝撃・破損閾値シミュレーター', url: '/ja/tools/thermal-shock-simulator/' }
    ]
  },
  {
    slug: 'recycled-cardboard-mosh-moah-bamboo-melamine-eu-2026-safety',
    title: '再生段ボール食品箱（MOSH/MOAH）と「エコ竹メラミン食器」の危険性：2026年EU鉱物油規制とホルムアルデヒド溶出禁止の全貌',
    category: 'materials',
    excerpt: 'ピザ箱やシリアル箱から移行する遺伝毒性MOAH（2026年5月EU採択・2027年義務化）の仕組みと、耐熱・酸でホルムアルデヒドが溶出する「竹繊維メラミン」食器の欧州回収理由を解説。',
    date: waveDate,
    readTime: '17分で読めます',
    author: 'IsItKitchenSafe',
    intro: '近年のキッチンで「エコ・サステナブル」と誤解されやすい代表的な2つの落とし穴が、無加工の再生紙箱に温かい油物を直接入れること、そして「天然竹繊維（バンブーファイバー）製」として売られる硬質なマグカップや子ども用プレートです。2026年5月13日、EU常任委員会（SCoPAFF）は発がん性・遺伝毒性の恐れがある芳香族鉱物油（MOAH）について、規則 (EU) 2023/915 を改正する法的上限値（2027年1月1日適用）を正式可決しました。同時に欧州では、基準を超えるホルムアルデヒドとメラミン溶出を理由に「竹メラミン複合食器」の販売禁止とリコールが進められています。',
    sections: [
      {
        title: '2026年5月EU採択のMOAH/MOSH規制：再生段ボールのインクがピザ・穀物へ移行する理由',
        content: '欧州食品安全機関（EFSA）は食品接触材料からの鉱物油を飽和炭化水素（MOSH：2026〜2029年監視対象）と芳香族炭化水素（MOAH）に分類しています。3〜7環のMOAHには遺伝毒性発がん物質が含まれる可能性があり安全閾値が設定できないため、2026年5月13日にEU SCoPAFFは2027年1月1日発効の法的上限（C10–C50）を承認しました（低脂肪乾燥食品≤4%は0.50 mg/kg、中脂肪>4%〜≤50%は1.0 mg/kg、高脂肪>50%は2.0 mg/kg）。再生紙のピザ箱・テイクアウト容器・内袋なしシリアル箱には古紙インキや接着剤・潤滑油由来のMOAHが残留し、熱いチーズの油分や長期保管の穀物へ容易に移行します（PET/EVOH等の機能性バリア内袋がない場合）。',
        type: 'warning',
        boxText: 'MOAH移行警告：再生段ボールの古紙インクに含まれる遺伝毒性MOAH（C10–C50）は熱いピザの油分や乾燥シリアルへ移行します。温かいテイクアウトはすぐ陶器皿やガラス皿へ移し替えてください。'
      },
      {
        title: 'EU「竹メラミン」複合食器の全面禁止：熱い飲み物でホルムアルデヒドが溶出する仕組み',
        content: '「天然バンブーファイバー製マグカップ・キッズプレート」として流通する硬質製品の多くは純粋な竹ではなく、砕いた竹粉やトウモロコシ粉をメラミン・ホルムアルデヒド樹脂に練り込んだプラスチック複合品です。EU規則 (EU) No 10/2011 および (EC) No 1935/2004 では、草本である竹粉はプラスチック添加剤として未承認です。さらに植物繊維が熱いコーヒー・紅茶（85〜95°C）や酸性ジュース、電子レンジで吸湿膨張すると樹脂網目に微細な亀裂が入り、発がん性のホルムアルデヒド（特定移行限度 15 mg/kg超）および腎毒性・生殖毒性懸念でSVHC再評価対象となったメラミン（2.5 mg/kg超）が大量溶出します。',
        type: 'warning',
        boxText: '竹メラミン禁止警告：硬質「竹ファイバー食器」は未承認のメラミン樹脂複合材であり、熱い飲み物や酸味食品でひび割れてホルムアルデヒド（>15 mg/kg）とメラミン（>2.5 mg/kg）を溶出します。'
      },
      {
        title: 'EFSAスチレン（#6 PS）再評価（40 µg/kg制限）とテイクアウト容器の耐熱限界',
        content: '発泡スチロール容器や使い捨てカップ蓋（#6 ポリスチレン PS）について、EFSAは最新の科学的意見書で現実的な経口摂取レベルでは遺伝毒性を示さないと評価しつつ、規則 (EU) No 10/2011 に基づく厳格な特定移行限度 40 µg/kg（40 ppb）の導入を支持しました。ただし #6 PS の熱変形温度は70〜90°Cと低いため、熱い汁物や電子レンジ加熱では軟化・変形し残留スチレンモノマー移行リスクが跳ね上がります。',
        type: 'fact',
        boxText: 'スチレンと耐熱限界：EFSAは #6 PS に40 µg/kgの厳格な溶出基準を支持しましたが、70°C以上で軟化するため電子レンジ加熱や熱湯利用は絶対不可です。'
      },
      {
        title: '30秒キッチン点検：危険な紙容器・複合カップを見分けるチェックリスト',
        content: '今すぐ戸棚とパントリーを30秒確認しましょう。（1）つや消しの硬質な「竹ファイバー」マグカップや子ども用プレートは、熱いお茶・コーヒー・酸性果汁・食洗機・電子レンジから即時撤去する；（2）油染みの付いた再生段ボールのピザ箱ごとオーブンやトースターで温め直さない；（3）内袋（プラスチックバリア）のない再生紙箱に入った小麦粉・オートミール・パスタ・ナッツは密閉ガラス瓶に移し替える。',
        type: 'tip',
        boxText: '30秒パントリー点検：内袋なしの紙箱に入った穀物・乾物はガラス瓶へ移し、硬質「バンブーファイバー」製マグや皿での熱い飲料・電子レンジ使用を中止してください。'
      },
      {
        title: '化学物質ゼロ移行の安全素材：ホウケイ酸ガラス・磁器・304/316ステンレス',
        content: '安全な代替は非常にシンプルです。（1）配膳と再加熱：熱いデリバリー料理はすぐ無鉛磁器皿かタイプ3.3耐熱ホウケイ酸ガラス皿に移す；（2）子ども用食器・タンブラー：電子レンジ非対応なら304（18/8）または316ステンレス製、レンジ可ならシリコンカバー付き耐熱ガラスまたは100%プラチナ硬化シリコン製を選ぶ；（3）まな板・トレー：樹脂で固めた竹複合材ではなく無垢の一枚板（カエデ・ブナ・ヒノキ）を選ぶことで化学溶出を完全に防げます。',
        type: 'success',
        boxText: '不活性素材への切替：竹メラミン食器や高温再生紙箱を避け、耐熱ホウケイ酸ガラス・磁器・304/316ステンレスを使うことでMOAH・ホルムアルデヒド・スチレン移行をゼロにできます。'
      }
    ],
    conclusion: '「再生紙」や「天然バンブー」という表示は、熱い食べ物や油分と接する際の化学的安全性を保証しません。温かいテイクアウトはすぐ陶器やガラスに移し、乾物はガラス瓶で保存し、竹メラミン複合食器を不活性素材へ置き換えることが2026〜2027年最新の安全対策です。',
    faqs: [
      {
        question: '「エコな竹ファイバー製」マグカップや子ども用皿は熱い飲み物に使えますか？',
        answer: '硬質な竹メラミン複合食器であれば避けるべきです。EUでは未承認の竹粉が熱や酸で膨張してメラミン樹脂を劣化させ、規制値を超えるホルムアルデヒド（>15 mg/kg）とメラミン（>2.5 mg/kg）を溶出するため回収・販売禁止となっています。'
      },
      {
        question: '再生紙パッケージのMOSH・MOAHとは何ですか？2027年EU規制とは？',
        answer: '古紙インクや接着剤・機械油に由来する飽和鉱物油（MOSH）と芳香族鉱物油（MOAH）です。3〜7環MOAHに遺伝毒性・発がん性懸念があるため、2026年5月のEU採択により2027年1月1日から脂肪分に応じ0.50〜2.0 mg/kgの法的上限が適用されます。'
      },
      {
        question: '冷めたピザを段ボール箱ごとオーブンやトースターで温め直してもいいですか？',
        answer: '不可です。加熱により再生段ボールのMOAHやインキ成分が溶けたチーズの脂肪分へ急速移行するうえ、段ボールが発火する重大な火災リスクがあります。'
      },
      {
        question: 'EFSAは #6 ポリスチレン容器（発泡スチロール等）を全面禁止しましたか？',
        answer: 'いいえ。EFSAは通常の食事レベルでの経口摂取では遺伝毒性を示さないと結論付け、40 µg/kgの厳しい特定移行限度設定を支持しました。ただし70〜90°Cで軟化するため電子レンジ加熱には使えません。'
      },
      {
        question: 'シリアルや麺類の紙箱がMOAHを防げるかどうかはどう見分けますか？',
        answer: '外箱の内側にPET・EVOH・ポリアミドなどの気密プラスチック内袋が入っていれば移行を大幅に防げます。食品が印刷紙箱に直接触れている場合はガラス保存瓶へ移してください。'
      }
    ],
    relatedTools: [
      { name: '熱食品プラスチック溶出・安全容器チェッカー', url: '/ja/tools/kitchen-plastic-leaching-checker/' },
      { name: 'メラミン食器 食洗機ホルムアルデヒド溶出シミュレーター', url: '/ja/tools/dishwasher-melamine-leaching-simulator/' },
      { name: 'プラスチック識別番号（#1〜#7）安全チェッカー', url: '/ja/tools/plastic-code-checker/' }
    ]
  },
  {
    slug: 'galanz-retro-fridge-frigidaire-range-2026-cpsc-recalls-guide',
    title: '2026年 大型キッチン家電リコール総点検（CPSC）：Galanzレトロ冷蔵庫火災・Frigidaireガスレンジ遅延点火・LG/Samsung前面ツマミ対策',
    category: 'appliances',
    excerpt: '2026年米国CPSC大型家電リコールを確認：Galanzレトロ冷蔵庫約12.17万台（火災34件・死亡1件）、Frigidaireガスオーブン約17.48万台（#26-333遅延点火火傷）、LG/Samsung前面ノブ火災対策。',
    date: waveDate,
    readTime: '17分で読めます',
    author: 'IsItKitchenSafe',
    intro: 'SNSで注目されやすい卓上家電だけでなく、2026年に米国消費者製品安全委員会（CPSC）が発出した最も深刻な安全措置には、家庭内で常時通電・ガス接続されている大型キッチン家電が含まれます。2026年7月30日、CPSCは内部電気短絡による発火（火災34件・死亡1件報告）を受け、Galanzレトロ冷蔵庫約121,680台をリコール。2026年3月19日には、オーブン下部バーナーの遅延点火で30件の火傷が発生したFrigidaireガスレンジ約174,800台（リコール #26-333）を発表しました。さらにLG・Samsungの前面ツマミ電気レンジの誤操作火災リコールおよび2026年11月19日のCPSC年末調理火災警告を踏まえ、2分で型番を点検しましょう。',
    sections: [
      {
        title: 'Galanzレトロ冷蔵庫リコール（2026年7月30日 CPSC）：火災34件・死亡1件',
        content: '2026年7月30日、CPSCは2019年1月〜2022年9月にHome DepotやAmazonで販売されたGalanzレトロ冷蔵庫（米国約121,680台・カナダ1万台超）をリコールしました。内部電気部品がショートして発火する恐れがあり、地元消防報告の死亡1件を含む34件の火災が発生しています。本体背面左上の白いラベルを確認してください。対象は型番 BCD-215V-62H、GLR76TRDER、GLR76TBKER、GLR76TBEER、GLR76TWEER で、製造年月コード（YYYYMM）が 201812〜202012（2018年12月〜2020年12月）の製品です。直ちにコンセントを抜き使用を中止し、Galanz Americas（888-462-0579）へ無料出張修理を依頼してください。',
        type: 'warning',
        boxText: 'GALANZ冷蔵庫リコール（2026年7月）：背面左上ラベルが BCD-215V-62H や GLR76TRDER 等で日付コード 201812–202012 の場合、即座に電源プラグを抜いて無料修理を申し込んでください。'
      },
      {
        title: 'Frigidaireガスレンジ（2026年3月19日 CPSC #26-333）：オーブン遅延点火による火傷',
        content: '2026年3月19日発表のCPSCリコール #26-333では、2025年6月〜2026年1月販売のFrigidaire／Gallery／Professionalガスレンジ約174,800台（カナダ約5,300台）が対象となりました。オーブンのベイクバーナーが遅延点火して溜まったガスが一気に燃え上がる不具合により、62件の異常報告と30件の火傷事故が起きています。オーブン下段の収納引き出しを引き出して内枠の銘板を確認してください。FCFG3062AB/AS/AW、FCFG3083AS、FCRG3083AD/AS、GCFG3060BD/BF、PCFG3080AFなど23型番のシリアル範囲 VF52200000〜VF54399999 が該当します。オーブン部の使用を直ちに中止し（上部コンロバーナーは引き続き安全に使用可能）、Electrolux（866-291-7633 / GasOvenBurnerRecall.com）で無料の新型バーナー交換を受けてください。',
        type: 'warning',
        boxText: 'FRIGIDAIRE #26-333（2026年3月）：シリアル VF52200000–VF54399999 の対象機種はオーブン使用を即時停止してください（上部ガス口は修理前でも安全に使用可能です）。'
      },
      {
        title: 'LG・Samsung前面ツマミレンジ誤作動火災と2026年11月19日CPSC防火警告',
        content: 'スライドイン式電気・IHレンジの前面ノブは大人腰部や幼児・大型犬の高さにあり、体が軽く触れただけで電源がオンになり、コンロ上に置いたピザ箱やまな板に引火する事故が多発しています。約50万台のLG電気レンジや主要Samsung前面ツマミ機種では、警告ラベルやコントロールロック案内、無料ノブカバーキットの提供リコールが進行中です。また2026年11月19日のCPSC年末厨房防火キャンペーンは、調理後のControl Lock常時作動、ガラストップ上の可燃物厳禁、揚げ物中の無離席を強く呼びかけています。',
        type: 'fact',
        boxText: '前面ノブ火災防止：使用後は必ず Control Lock（操作ロック）を有効化し、該当するLG/Samsung製レンジは無料ノブ保護カバーを取り付け、天板に段ボール等を置かないでください。'
      },
      {
        title: '大型キッチン家電の隠れた型番・シリアル番号チェック手順（2分点検）',
        content: '大型家電の銘板は熱や油汚れを避けて目立たない箇所に貼られています。（1）冷蔵庫：背面左上の白ラベル（Galanz）または冷蔵室内部の右側面壁；（2）レンジ・オーブン：最下段の収納引き出しを完全に引き抜き、スマホのライトでフレーム左右内縁を確認；（3）卓上エアフライヤーオーブン・電気圧力鍋（2026年11月5日リコール #27-069 Gourmia GTF7530 や10月15日警告 #27-030 Tristar Y6D-36等）：冷却・電源オフ後に本体底面の銘板を確認。全家電のラベルをスマホ撮影しておくと即座に照合できます。',
        type: 'tip',
        boxText: '2分撮影点検：小型冷蔵庫の背面ラベル、レンジ下部引き出し内側の銘板、卓上家電の底面シリアルを写真保存し、中古品購入前にも必ずCPSC検索を行ってください。'
      },
      {
        title: '賃貸物件・中古市場の盲点：何年も未修理のまま残るリコール家電',
        content: '米国ではリコール製品の再販・譲渡が違法であるにもかかわらず、賃貸アパート、学生寮、個人間売買を通じて2019〜2020年製レトロ冷蔵庫や2025〜2026年製レンジが元の購入者への通知が届かないまま使われ続けています。入居初日や中古購入時は必ずシリアル番号を確認してください。CPSC命令による無料出張修理や保護カバー配布は、レシートや購入証明がなくても現在の所有者に無償提供されます。',
        type: 'success',
        boxText: '賃貸・中古の確認：入居時に冷蔵庫とコンロの型番・シリアルを必ず照会しましょう。CPSCリコールの無料修理は元の領収書がなくても受けられます。'
      }
    ],
    conclusion: 'スマホのライトで2分間銘板を確認するだけで、深夜の電気火災やガスオーブン遅延点火事故を未然に防げます。2019〜2022年販売のGalanzレトロ冷蔵庫背面ラベル、2025〜2026年製Frigidaireガスレンジ引き出し内銘板（#26-333）、LG/Samsung前面ノブを確認し、無料の公式修理を申し込んでください。',
    faqs: [
      {
        question: '2026年にリコールされたGalanzレトロ冷蔵庫の対象型番と危険内容は？',
        answer: '2026年7月30日発表のCPSCリコールでは、米国約121,680台の BCD-215V-62H、GLR76TRDER、GLR76TBKER、GLR76TBEER、GLR76TWEER（製造日付コード 201812–202012）が対象です。内部電気部品の短絡により火災（34件・死亡1件報告）が起きるため、即座に電源を抜き無料修理を依頼してください。'
      },
      {
        question: 'Frigidaireガスレンジのリコール #26-333 対象機種でも上部コンロは使えますか？',
        answer: 'はい。2026年3月19日発表のCPSCリコール #26-333（シリアル VF52200000–VF54399999）では、遅延点火の危険がある下部のオーブン使用のみ即時中止とし、上部のコンロバーナーは無料交換修理を待つ間も安全に使用可能と明記されています。'
      },
      {
        question: 'Galanz冷蔵庫の日付コードやFrigidaireのシリアル番号はどこにありますか？',
        answer: 'Galanzレトロ冷蔵庫は背面左上の白いラベルに型番とYYYYMM日付コードが印字されています。Frigidaireガスレンジはオーブン下の収納引き出しを抜いた内枠に銘板があります。'
      },
      {
        question: '購入時のレシートがなくても無料のリコール出張修理を受けられますか？',
        answer: 'はい。Galanz、Frigidaire（Electrolux）、LG、Samsungの各CPSCリコール対応（無料修理やノブ保護キット）は、領収書の有無を問わず現在の所有者に無償提供されます。'
      },
      {
        question: 'ペットや子どもが前面ツマミ式コンロを誤って回す火災を防ぐ方法は？',
        answer: '調理後は必ず操作パネルのControl Lockをオンにし、リコール対象のLG・Samsung製なら無料ノブ保護カバーを取り付け、コンロ天板の上に紙箱やまな板を絶対に置かないでください。'
      }
    ],
    relatedTools: [
      { name: '製品バーコード＆CPSC・FDAリコールスキャナー', url: '/ja/tools/product-recalls-scanner/' },
      { name: '油火災・電気火災・やけど緊急応急ガイド', url: '/ja/tools/kitchen-fire-emergency-guide/' },
      { name: 'キッチン危険緊急トリアージ・安全対応ツール', url: '/ja/tools/kitchen-hazard-emergency-triage/' }
    ]
  }
];

function appendGuides(filename, newGuides) {
  const filePath = path.resolve('src/data', filename);
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const existingSlugs = new Set(existing.map(g => g.slug));
  let added = 0;

  for (const guide of newGuides) {
    if (!existingSlugs.has(guide.slug)) {
      existing.push(guide);
      existingSlugs.add(guide.slug);
      added++;
    } else {
      console.log(`ℹ️ Skipping existing slug in ${filename}: ${guide.slug}`);
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
  console.log(`✅ ${filename}: added ${added} guides (total: ${existing.length})`);
}

appendGuides('blog.json', guidesEn);
appendGuides('blog.es.json', guidesEs);
appendGuides('blog.pt.json', guidesPt);
appendGuides('blog.zh-cn.json', guidesZh);
appendGuides('blog.ja.json', guidesJa);

console.log('\n🎉 Wave 84 guide injection complete across all 5 languages (125 -> 128)!');
