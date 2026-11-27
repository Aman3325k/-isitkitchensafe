import blogData from '../data/blog.json';

const SITE_URL = 'https://isitkitchensafe.com';
const FEED_URL = `${SITE_URL}/rss.xml`;

interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  intro?: string;
  date: string;
  author?: string;
}

interface FeedItem {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  description: string;
  category: string;
  timestamp: number;
}

function escapeXml(value: string): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function parseUtcDate(dateStr: string): Date {
  const iso = /^\d{4}-\d{2}-\d{2}$/.test(dateStr) ? `${dateStr}T12:00:00Z` : dateStr;
  const parsed = new Date(iso);
  return Number.isNaN(parsed.getTime()) ? new Date('2026-06-13T12:00:00Z') : parsed;
}

const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/wooden-utensil-biofilm-modeler/',
    title: 'Wooden Spoon & Utensil Micro-Crack Bacterial Biofilm & Moisture Modeler',
    description: 'Model hardwood grain porosity, dishwasher hygroscopic stress cracking, laminated bamboo glue hydrolysis, USP mineral oil vs. rancid cooking oils, Staph Enterotoxin A survival, and the 1-mm retirement rule.',
    date: '2026-11-27'
  },
  {
    path: '/tools/refrigerator-cross-contamination-modeler/',
    title: 'Refrigerator Raw Meat Cross-Contamination & Bio-Aerosol Modeler',
    description: 'Model raw meat drip capillarity, wire shelf liquid cascade, convection fan airborne bio-aerosol dispersal, 4°C psychrotrophic Listeria proliferation, and 200 ppm NaOCl vs. 5% vinegar sanitization kinetics.',
    date: '2026-11-27'
  },
  {
    path: '/tools/refrigerator-defrost-safety-modeler/',
    title: 'Refrigerator Warm / Freezer Cold Defrost Failure & Pathogen Modeler',
    description: 'Model blocked evaporator air ducts, bi-metal defrost thermostat continuity (0.0-0.5 Ω vs. OL), Listeria 48°F proliferation, heat-stable S. aureus Enterotoxin A/B irreversibility, and USDA cold-chain food triage.',
    date: '2026-11-26'
  },
  {
    path: '/tools/range-hood-extraction-efficiency-modeler/',
    title: 'Kitchen Exhaust Range Hood VOC, NO2 & PM2.5 Extraction Efficiency Modeler',
    description: 'Model gas stove nitrogen dioxide plumes, cooking oil PM2.5 aerosol dispersal, duct aerodynamic friction, capture velocity, and pediatric asthma inhalation risks.',
    date: '2026-11-26'
  },
  {
    path: '/tools/freezer-burn-sublimation-modeler/',
    title: 'Freezer Burn, Ice Sublimation & Lipid Peroxidation Modeler',
    description:
      'Model solid-to-vapor ice sublimation kinetics in frost-free freezers, TBARS malondialdehyde (MDA) lipid peroxidation, EVOH vacuum vs. store-wrap moisture loss, 2mm knife trimming, and wet-heat salvage protocols.',
    date: '2026-11-26'
  },
  {
    path: '/tools/dishwasher-thermal-sanitize-calculator/',
    title: 'Dishwasher Thermal Sanitize & Norovirus Lethality Calculator',
    description:
      'Model NSF/ANSI 184 residential sanitize cycles (≥150°F), Bigelow D-value thermal inactivation kinetics, sodium percarbonate oxygen bleach synergy, blocked spray-arm shadow zones, and C. botulinum spore canning limits.',
    date: '2026-11-26'
  },
  {
    path: '/tools/glass-cooktop-fracture-simulator/',
    title: 'Glass Cooktop Point-Load & Thermal Shock Fracture Simulator',
    description:
      'Model Hertzian cone cracking, point impacts from dropped canned goods, cast iron abrasive shear, sugar spalling pit formation, and 240V electrical liquid seepage risks on ceramic glass cooktops.',
    date: '2026-11-26'
  },
  {
    path: '/tools/silicone-bakeware-oligomer-analyzer/',
    title: 'Silicone Bakeware Cyclic Thermal Breakdown & Oligomer Volatilization Analyzer',
    description:
      'Model cyclic siloxane oligomer (D4, D5, D6) thermal volatilization, fatty food lipid extraction kinetics, and post-curing tempering purity against BfR Recommendation XV and FDA limits.',
    date: '2026-11-26'
  },
  {
    path: '/tools/plastic-blender-jar-hydrolysis-modeler/',
    title: 'Plastic Blender Jar Microcrack Bisphenol-A & Phthalate Hydrolysis Modeler',
    description:
      'Model hydrolytic polymer cleavage, cavitation shear erosion, and chemical leaching (BPA, phthalates, and cyclic oligomers) from micro-cracked blender jars during hot soup and acidic smoothie preparation.',
    date: '2026-11-26'
  },
  {
    path: '/tools/induction-cooktop-delamination-modeler/',
    title: 'Induction Cooktop Thermal Shock Delamination & Acoustic Micro-Crack Modeler',
    description:
      'Model glass-ceramic interfacial acoustic stress, mechanical resonance from warped cookware bases, thermal shock gradients, and micro-crack expansion under rapid induction heating transients (20°C to 280°C in 30s).',
    date: '2026-11-23'
  },
  {
    path: '/tools/air-fryer-pah-resuspension-modeler/',
    title: 'Air Fryer Polycyclic Aromatic Hydrocarbon (PAH) Thermal Resuspension & Inhalation Modeler',
    description:
      'Model fatty acid pyrolytic aerosolization from previous cooking residue baked onto air fryer heating elements and fan cowls, calculating resuspension rates of Benzo[a]pyrene and particulate PM2.5.',
    date: '2026-11-23'
  },
  {
    path: '/tools/cold-brew-nitro-biofilm-modeler/',
    title: 'Cold Brew Commercial Nitro Dispenser Biofilm & Pressure Line Modeler',
    description:
      'Model high-pressure N2/N2O draft line biofilm kinetics, psychrotrophic bacterial proliferation (Pseudomonas, Acetobacter), fungal hyphae stagnation, and CIP chemical sanitization failure under NSF/ANSI Standard 18.',
    date: '2026-11-23'
  },
  {
    path: '/tools/food-processor-blade-fatigue-modeler/',
    title: 'Food Processor Centrifugal Stress & Polycarbonate Blade Fatigue Modeler',
    description:
      'Model rotational biomechanics, S-blade centrifugal g-forces up to 1,000g, dishwasher alkaline crazing in polycarbonate work bowls, and stainless steel micro-chipping hazards.',
    date: '2026-11-22'
  },
  {
    path: '/tools/espresso-machine-heavy-metal-modeler/',
    title: 'Espresso Machine Thermoblock Heavy Metal Leaching & Lead Descaling Modeler',
    description:
      'Model brass boiler and thermoblock lead and copper leaching during 92°C–96°C 9-bar extraction, citric acid descaling corrosion, and certified post-clean flushing protocols.',
    date: '2026-11-22'
  },
  {
    path: '/tools/blender-blade-cavitation-safety-modeler/',
    title: 'Blender Blade Friction Thermal Degradation & Micro-Cavitation Safety Modeler',
    description:
      'Model 20,000+ RPM blade tip vortex cavitation, viscous friction heating, sealed bullet cup steam explosion hazards, and blade bearing grease migration risks.',
    date: '2026-11-22'
  },
  {
    path: '/tools/immersion-blender-grease-leaching-modeler/',
    title: 'Immersion Blender Bearing Grease & Shaft Seal Leaching Modeler',
    description:
      'Simulate high-rpm rotor cavitation, sub-surface NBR lip seal thermal wear, petroleum hydrocarbon grease leaching into hot soup emulsions, and NSF H1 vs non-food-grade grease toxicity thresholds.',
    date: '2026-11-22'
  },
  {
    path: '/tools/silicone-spatula-oligomer-leaching-modeler/',
    title: 'Silicone Spatula & Utensil High-Heat Oligomer Leaching Modeler',
    description:
      'Simulate thermal depolymerization of silicone spatulas in 200°C+ cooking oils, model lipophilic extraction of cyclic siloxanes (D4–D6), evaluate pinch-test mineral fillers, and detect dishwasher detergent absorption.',
    date: '2026-11-22'
  },
  {
    path: '/tools/stainless-steel-heavy-metal-leaching-modeler/',
    title: 'Stainless Steel Heavy Metal (Nickel & Chromium) Acidic Leaching Modeler',
    description:
      'Simulate nickel and chromium ion dissolution during acidic simmering (pH < 4.0), compare 304 vs 316 vs 430 alloys, model new pan leaching spikes, and evaluate systemic nickel allergy risks.',
    date: '2026-11-22'
  },
  {
    path: '/tools/copper-cookware-toxicity-modeler/',
    title: 'Copper Cookware & Acidic Food Leaching & Verdigris Modeler',
    description:
      'Model copper ion dissolution in acidic reductions (pH < 6.0), tin lining erosion, toxic verdigris salt formation, and evaluate gastric irritation thresholds against the FDA Food Code Quarter Rule.',
    date: '2026-11-22',
  },
  {
    path: '/tools/cast-iron-seasoning-degradation-modeler/',
    title: 'Cast Iron & Carbon Steel Seasoning Degradation Modeler',
    description:
      'Model lipid polymer crosslinking degradation, acid-catalyzed ester hydrolysis, ferrous vs ferric ion leaching kinetics, and dietary iron intake during acidic cooking.',
    date: '2026-11-21',
  },
  {
    path: '/tools/melamine-tableware-formaldehyde-modeler/',
    title: 'Melamine Tableware Formaldehyde & Cyanuric Acid Leaching Modeler',
    description:
      'Model formaldehyde and melamine resin thermal breakdown kinetics, dielectric microwave superheating, acid hydrolysis, and cyanurate nephrolithiasis risk.',
    date: '2026-11-21',
  },
  {
    path: '/tools/oven-self-cleaning-pyrolysis-simulator/',
    title: 'Oven Self-Cleaning Pyrolysis Fume & Off-Gassing Simulator',
    description:
      'Model 500°C pyrolytic thermal decomposition, PTFE gasket fluoropolymer degradation, toxic carbon monoxide spikes, and avian respiratory lethality risks.',
    date: '2026-11-21',
  },
  {
    path: '/tools/air-fryer-lipid-oxidation-modeler/',
    title: 'Air Fryer vs Deep Fryer Lipid Oxidation & 4-HNE Modeler',
    description:
      'Model forced-air convection oxygen flux, polyunsaturated fatty acid bis-allylic radical cascades, cytotoxic 4-hydroxy-2-nonenal (4-HNE) generation, and oil reuse degradation thresholds.',
    date: '2026-11-21',
  },
  {
    path: '/tools/charcoal-gas-grill-pah-hca-modeler/',
    title: 'Charcoal vs Gas Grill PAH & HCA Carcinogen Modeler',
    description:
      'Model fat drip pyrolysis on 750°C embers, volatile Benzo[a]pyrene convective smoke condensation, surface creatine-amino Maillard condensation (PhIP/MeIQx), and antioxidant marinade reduction under EU Regulation 835/2011.',
    date: '2026-11-21',
  },
  {
    path: '/tools/canned-food-bpa-leaching-modeler/',
    title: 'Canned Food BPA & Epoxy Phenolic Liner Leaching Modeler',
    description:
      'Model BADGE epoxy resin degradation, acid-hydrolysis kinetics in canned tomatoes, lipophilic extraction in oily fish, can dent micro-fracturing, and EFSA 2023 Tolerable Daily Intake thresholds.',
    date: '2026-11-21',
  },
  {
    path: '/tools/microwave-popcorn-pfas-modeler/',
    title: 'Microwave Popcorn Bag Fluorinated PFOA / PFAS Surfactant Modeler',
    description:
      'Model fluorotelomer alcohol (FTOH) and perfluoroalkyl acid (PFAA) greaseproofing migration into molten fats at 200°C, microwave susceptor thermal kinetics, and steam puff inhalation exposure.',
    date: '2026-11-20',
  },
  {
    path: '/tools/air-fryer-teflon-fluoropolymer-modeler/',
    title: 'Air Fryer Teflon Basket Fluoropolymer Degradation & Thermal Micro-Plume Modeler',
    description:
      'Simulate PTFE pyrolysis kinetics at 200°C–240°C in high-velocity forced convection air streams, radiant dry-run overheating, ultrafine particle (UFP) outgassing, and avian toxicity risks under FDA 21 CFR 177.1550.',
    date: '2026-11-20',
  },
  {
    path: '/tools/aluminum-foil-acidic-leaching-simulator/',
    title: 'Aluminum Foil & Cookware Acidic Leaching & Neurotoxicity Simulator',
    description:
      'Model amphoteric oxide breakdown, organic acid chelation (citric, malic, acetic), thermal Arrhenius kinetics at 220°C, galvanic pitting, and EFSA Tolerable Weekly Intake exceedance.',
    date: '2026-11-20',
  },
  {
    path: '/tools/microwave-plastic-steam-cover-modeler/',
    title: 'Microwave Plastic Steam Cover Phthalate Condensate Modeler',
    description:
      'Model microwave steam condensation reflux, plasticizer and bisphenol extraction kinetics, fat-splatter lipid partitioning, and endocrine toxicity risk under EU Regulation 10/2011 and EFSA standards.',
    date: '2026-11-20',
  },
  {
    path: '/tools/electric-kettle-nickel-modeler/',
    title: 'Electric Kettle Nickel Leaching & Scale Thermal Decoupling Modeler',
    description:
      'Model heavy metal nickel leaching kinetics into boiled drinking water against WHO 20 µg/L limits, calcium carbonate limescale thermal impedance, and heating element burnout.',
    date: '2026-11-20',
  },
  {
    path: '/tools/wooden-cutting-board-pathogen-modeler/',
    title: 'Wooden Cutting Board Deep-Groove Pathogen Desorption & Sanitization Modeler',
    description:
      'Model Salmonella and Campylobacter capillary trapping within wood xylem vessels vs knife scars in plastic, calculating dehydration kinetics and sanitization efficacy across maple, teak, and acacia.',
    date: '2026-11-20',
  },
  {
    path: '/tools/plastic-water-kettle-microplastic-simulator/',
    title: 'Plastic Water Kettle Micro-Crack & Leaching Simulator',
    description:
      'Calculate microplastic particle shedding (particles/L) and nickel leaching from polypropylene electric kettles, micro-crack degradation, boiling cycles, and acidic descaling. Nature Food (2020) & WHO standards.',
    date: '2026-11-20',
  },
  {
    path: '/tools/dishwasher-melamine-leaching-simulator/',
    title: 'Dishwasher Melamine Formaldehyde & Cyanuric Acid Leaching Simulator',
    description:
      'Calculate formaldehyde (HCHO) and melamine monomer migration from dishwasher heat cycles (>70°C / 158°F), caustic alkaline detergents, and microwave damage. EU Regulation 10/2011 & German BfR standards.',
    date: '2026-11-19',
  },
  {
    path: '/tools/electric-kettle-descaling-leaching-simulator/',
    title: 'Electric Kettle Nickel, Microplastics & Descaling Leaching Simulator',
    description:
      'Simulate heavy metal nickel ion leaching (>70 µg/L), boiling polypropylene microplastic shedding, and safe citric acid vs. vinegar limescale descaling in electric kettles. WHO and BfR standards.',
    date: '2026-11-19',
  },
  {
    path: '/tools/air-fryer-liner-fire-hazard-simulator/',
    title: 'Air Fryer Parchment vs. Silicone Liner Airflow Obstruction & Fire Hazard Simulator',
    description:
      'Simulate aerodynamic suction lift into glowing heating coils (400°C–600°C), convective bottom airflow loss, scorch limits, and PFAS-free parchment safety in air fryers. Verified via CPSC and FDA standards.',
    date: '2026-11-19',
  },
  {
    path: '/tools/microwave-steam-splash-simulator/',
    title: 'Microwave Steam Splash, Venting & Warped Container Leaching Simulator',
    description:
      'Calculate scald explosion, steam pressurization, vacuum warping, and condensation droplet chemical reflux risks when microwaving food in plastic containers. Verified via ACS Nano 2023 & FDA standards.',
    date: '2026-11-19',
  },
  {
    path: '/tools/kitchen-plastic-leaching-checker/',
    title: 'Kitchen Plastic Leaching & Hot Food Safe Container Checker',
    description:
      'Evidence-based interactive calculator: calculate BPA, BPS, phthalates, and microplastic leaching risks when heating or storing hot, acidic, or fatty foods in plastic containers (#1 to #7). Verified with ACS Nano 2023 & FDA 21 CFR § 177 standards.',
    date: '2026-11-19',
  },
  {
    path: '/tools/dishwasher-rinse-aid-scale-troubleshooter/',
    title: 'Dishwasher Rinse Aid, White Film & Water Hardness Scale Troubleshooter',
    description:
      'Evidence-based troubleshooter: distinguish removable calcium carbonate limescale from permanent silica glass etching with a 5-minute vinegar soak test, calibrate rinse aid dosage by local water hardness (GPG/PPM), evaluate JACI 2022 alcohol ethoxylate gut barrier safety, and follow safe citric acid descaling protocols.',
    date: '2026-11-19',
  },
  {
    path: '/tools/outdoor-grill-bbq-safety-checker/',
    title: 'Outdoor Grill, BBQ, Smoker & Griddle Safety & Charcoal/Propane Checker',
    description:
      'Interactive CDC, NFPA & USDA outdoor grilling safety checker: perform the 50/50 soapy water propane leak test, prevent wire grill brush bristle ingestion emergencies, check indoor carbon monoxide clearance, and verify safe internal meat cooking temperatures.',
    date: '2026-11-19',
  },
  {
    path: '/tools/coffee-tea-brew-safety-checker/',
    title: 'Coffee, Espresso, Cold Brew & Tea Safe Brewing, Storage & Kettle Material Checker',
    description:
      'Interactive CDC, FDA & SCA coffee, cold brew, kombucha & tea safety checker: inspect 10 drink storage limits (sun tea warnings, botulism cold-brew risks, 2-hour milk coffee rule), compare 7 kettle & brewer materials for microplastics/leaching, and toggle °F/°C brew temperatures.',
    date: '2026-11-19',
  },
  {
    path: '/tools/knife-care-cutting-board-matcher/',
    title: 'Kitchen Knife Care, Honing vs. Sharpening & Safe Cutting Board Matcher',
    description:
      'Interactive Rockwell HRC knife care & USDA FSIS cutting board matcher: test 5 knife steel profiles (15° Japanese vs. 20° Western, serrated, ceramic) against 8 board materials (end-grain wood, Hinoki, Hasegawa rubber, HDPE plastic, bamboo, glass/titanium) for honing rods, whetstones, dishwasher safety & raw-meat sanitation.',
    date: '2026-11-18',
  },
  {
    path: '/tools/slow-cooker-food-safety-checker/',
    title: 'Slow Cooker & Crock-Pot Food Safety Checker: Frozen Meat, Kidney Beans & Power Outage Guide',
    description:
      'Interactive USDA FSIS & FDA slow cooker food safety checker: test fill level (1/2 to 2/3), HIGH/LOW/Keep-Warm, and power outage discard rules live, plus look up 16 everyday foods, red kidney bean lectin safety, leftovers, plastic liners, and ceramic stoneware thermal-shock rules.',
    date: '2026-11-18',
  },
  {
    path: '/tools/instant-pot-pressure-release-checker/',
    title: 'Pressure Cooker & Instant Pot Fill-Line & Release Safety Checker',
    description:
      'Interactive Instant Pot & stovetop pressure cooker safety checker grounded in UL 1026 & USDA standards: check 1/2 MAX vs. 2/3 MAX fill lines, Natural (NPR) vs. Quick Release (QR) timing, foaming valve-clog risk, minimum thin liquid by pot size (3-qt, 6-qt, 8-qt, stovetop), and BURN notice prevention across 22 foods.',
    date: '2026-11-18',
  },
  {
    path: '/tools/kitchen-fire-emergency-guide/',
    title: 'Kitchen Grease Fire, Electrical & Burn Emergency First-Response Guide',
    description:
      'Instant NFPA, USFA/FEMA & American Red Cross kitchen emergency guide: interactive DO vs. NEVER DO first-response triage for grease pan fires, oven/microwave fires, electrical fires, gas leaks & cooking oil burns — plus a 6-tool fire extinguisher matcher and printable fridge safety poster.',
    date: '2026-11-18',
  },
  {
    path: '/tools/oven-rack-bakeware-heat-adjuster/',
    title: 'Oven Rack Position, Convection & Bakeware Material Heat Adjuster',
    description:
      'Calculate exact baking temperature and time adjustments across 6 pan materials (bright aluminum, dark nonstick, glass Pyrex, ceramic stoneware, cast iron, silicone) and 10 classic dishes — with interactive 5-rack oven visualization, convection fan conversion (-25°F / -15°C), and broiler thermal-shock safety alerts.',
    date: '2026-11-18',
  },
  {
    path: '/tools/moldy-food-safety-checker/',
    title: 'USDA Moldy Food Cut-Around vs. Throw-Out Safety Checker',
    description:
      'Check the official USDA FSIS chart for 24 moldy foods: when you can safely cut 1 inch (2.5 cm) around hard cheese, salami, or firm veggies vs. when invisible mold roots & mycotoxins mean discarding bread, berries, jam, cream cheese, peanut butter, and leftovers.',
    date: '2026-11-18',
  },
  {
    path: '/tools/food-allergy-cross-contact-checker/',
    title: 'Kitchen Food Allergy & Cross-Contact Cleaning/Cookware Safety Checker',
    description:
      'Check which shared kitchen appliances, cookware, and surfaces can be safely decontaminated for Top 9 FDA food allergens & Celiac disease. Step-by-step FDA/FARE cleaning protocols for toasters, air fryers, fryer oil, cast iron, wooden boards, sponges, and counters.',
    date: '2026-11-18',
  },
  {
    path: '/tools/pantry-dry-goods-shelf-life-checker/',
    title: 'Pantry, Spices & Dry Goods Shelf-Life & Safety Lookup (USDA Standards)',
    description:
      'Look up food safety expiration rules across 30 pantry staples (rice, flours, spices, honey, canned goods, leaveners). Includes USDA FSIS dented can botulism triage and 30-second baking powder fizz tests.',
    date: '2026-11-18',
  },
  {
    path: '/tools/kitchen-symbol-decoder/',
    title: 'Kitchen Bottom Symbol Decoder — Plastic Codes #1–#7 & Appliance Icons',
    description:
      'Instantly decode the stamped symbols on the bottom of bowls, Tupperware, cups, and pans. Check plastic recycling numbers #1–#7, microwave waves, wine glass & fork, and induction coil icons.',
    date: '2026-11-18',
  },
  {
    path: '/tools/meat-thawing-calculator/',
    title: 'USDA Meat & Turkey Safe Thawing Time Calculator',
    description:
      'Calculate Fridge, Cold Water, Microwave, and Cook-From-Frozen schedules across 10 meat cuts with exact Start Thawing By dates and USDA FSIS safe internal temperatures.',
    date: '2026-11-18',
  },
  {
    path: '/tools/plastic-code-checker/',
    title: 'Plastic Recycling Code (#1–#7) Kitchen Safety Checker',
    description:
      'Interactive kitchen safety lookup for PET, HDPE, PVC, LDPE, PP, PS, Polycarbonate, Tritan, and PLA plastic resin codes #1–#7 across microwave, dishwasher, freezer, and hot liquids.',
    date: '2026-11-18',
  },
  {
    path: '/tools/air-fryer-oven-converter/',
    title: 'Air Fryer, Convection Oven & Gas Mark Conversion Calculator',
    description:
      'Instant °F / °C / Gas Mark 1–9 conversion plus air fryer time/temp reduction and real-time parchment, silicone, and PTFE thermal safety alerts.',
    date: '2026-11-18',
  },
  {
    path: '/tools/cookware-oven-temp-lookup/',
    title: 'Cookware & Bakeware Safe Oven Temperature Lookup',
    description:
      'Live oven temperature and broiler safety check across 24 cookware and bakeware brands and materials including HexClad, Le Creuset, Caraway, Lodge, Pyrex, silicone, and parchment paper.',
    date: '2026-11-18',
  },
  {
    path: '/tools/internal-cooking-temp-chart/',
    title: 'USDA Safe Internal Cooking Temperature Chart & Doneness Lookup',
    description:
      'Interactive USDA FSIS minimum safe internal cooking temperatures, live °F/°C toggle, thermometer probe checker, rest timers, and printable fridge chart across 24 cuts of meat, poultry, seafood, eggs, and leftovers.',
    date: '2026-11-18',
  },
  {
    path: '/tools/microwave-wattage-converter/',
    title: 'Microwave Wattage Time Converter (600W–1250W) & Food Safety Calculator',
    description:
      'Convert microwave cooking times across 600W, 700W, 800W, 900W, 1000W, 1100W, 1200W, and 1250W Inverter ovens with power-level adjustments (30%–100%), halfway stir checkpoints, standing time, and USDA 165°F (74°C) cold-spot safety rules.',
    date: '2026-11-18',
  },
  {
    path: '/tools/power-outage-food-safety-checker/',
    title: 'Fridge & Freezer Power Outage Food Safety Checker (USDA & CDC)',
    description:
      'Check which refrigerator and freezer foods to keep, cook, refreeze, or discard after a blackout. Instant USDA FSIS & CDC 4-hour fridge, 24h/48h freezer, and 40°F thermometer triage across 22 food categories.',
    date: '2026-11-18',
  },
  {
    path: '/tools/baby-bottle-safety-checker/',
    title: 'Baby Bottle, Sippy Cup & Kids Kitchenware Safety Checker (AAP, FDA & CDC)',
    description:
      'Check microwave, dishwasher, steam/boil sterilizer, UV-C, and freezer safety for 14 nursery and pediatric materials: #5 PP, glass, silicone, PPSU, melamine plates, stainless straw cups, and breast milk bags with AAP scald alerts.',
    date: '2026-11-18',
  },
  {
    path: '/tools/cooking-oil-smoke-point-finder/',
    title: 'Cooking Oil Smoke Point & Safe Frying Temperature Finder (USDA & AOCS)',
    description:
      'Compare USDA & AOCS smoke points, oxidative stability, and safe cooking temperatures across 28 culinary oils & fats. Interactive temperature simulator for cold dressings, sauteing, deep frying, air frying, and high-heat cast iron searing.',
    date: '2026-11-18',
  },
  {
    path: '/tools/induction-cookware-compatibility-checker/',
    title: 'Induction Cookware Compatibility & 3-Second Magnet Test Checker',
    description:
      'Check if 24 popular cookware materials and brands work on induction cooktops. Includes a 3-second magnet test simulator, glass scratch-risk warnings, and pacemaker safety clearance tips.',
    date: '2026-11-18',
  },
  {
    path: '/tools/dishwasher-detergent-dosage-calculator/',
    title: 'Dishwasher Detergent, Rinse Aid & Hard Water Safety Calculator',
    description:
      'Calculate exact main-wash and pre-wash detergent doses (tbsp/mL), calibrate rinse aid dials (1–6), differentiate removable hard-water film from permanent glass etching, and triage Dawn dish soap foam emergencies.',
    date: '2026-11-18',
  },
  {
    path: '/tools/kitchen-safety-iq-quiz/',
    title: 'Interactive Kitchen Safety IQ Quiz (USDA, FDA & CDC Scientific Challenge)',
    description:
      'Test your food safety instincts against empirical science across 12 high-stakes household myths (poultry washing, sniff test, toaster jams, microwave flash boiling, fried rice toxin) with shareable emoji score card.',
    date: '2026-11-18',
  },
  {
    path: '/tools/cast-iron-seasoning-troubleshooter/',
    title: 'Cast Iron & Carbon Steel Seasoning & Rust Troubleshooter',
    description:
      'Diagnose sticky seasoning, flaking black flecks, orange surface rust, acid stripping, and fishy smell. Step-by-step restoration protocols with oven temperature and grapeseed/crisco polymerization guides.',
    date: '2026-11-18',
  },
  {
    path: '/tools/fridge-organization-zone-planner/',
    title: 'Interactive Refrigerator Organization & Safe Shelf-Zone Planner (USDA & FDA)',
    description:
      'USDA top-to-bottom refrigerator shelf zone mapper to prevent cross-contamination. Drag-and-drop or select ready-to-eat foods, raw poultry, meats, produce crispers, and milk door alerts.',
    date: '2026-11-18',
  },
  {
    path: '/tools/cleaner-mixing-danger-checker/',
    title: 'Kitchen Cleaner Mixing Danger Checker: Bleach, Vinegar, Ammonia & Peroxide',
    description:
      'Interactive toxic gas reaction matrix for household cleaners — check bleach, vinegar, ammonia, hydrogen peroxide, rubbing alcohol, and drain openers for chlorine, chloramine, chloroform, and peracetic acid hazards plus emergency guidance.',
    date: '2026-11-18',
  },
  {
    path: '/tools/appliance-descaling-calculator/',
    title: 'Coffee Maker, Electric Kettle & Espresso Descaling Ratio Calculator',
    description:
      'Calculate exact citric acid and white vinegar descaling ratios by reservoir volume, check aluminum and brass boiler corrosion alerts, and build hard-water descale schedules for drip brewers, electric kettles, Keurig, Nespresso, and espresso machines.',
    date: '2026-11-18',
  },
  {
    path: '/tools/leftover-shelf-life-calculator/',
    title: 'Leftover Shelf Life & Safe Storage Calculator',
    description:
      'Check how long cooked leftovers, meats, dairy, soups, and meal prep stay safe in the refrigerator, freezer, or at room temperature using USDA and FDA food safety guidelines.',
    date: '2026-11-18',
  },
  {
    path: '/tools/pan-scratch-inspector/',
    title: 'AI Pan Scratch & Damage Inspector — Free Teflon Safety Checker',
    description:
      'Upload a photo of your scratched non-stick skillet or frying pan to instantly detect coating wear, calculate microplastic shedding risk, and get an authoritative safety verdict.',
    date: '2026-11-18',
  },
  {
    path: '/tools/cookware-brand-transparency-index/',
    title: 'Cookware Brand Transparency & Greenwashing Index (2026)',
    description:
      'Search 25 top global cookware brands to detect hidden PTFE fluoropolymers, review third-party laboratory leaching audits, and decode misleading PFOA-free claims.',
    date: '2026-11-18',
  },
  {
    path: '/tools/culinary-oil-smoke-point-simulator/',
    title: 'Culinary Oil Smoke Point & Carcinogenic Aldehyde Simulator',
    description:
      'Compare smoke points versus true oxidative stability across 20 culinary oils and estimate 4-HNE, MDA, and acrolein formation under frying and searing temperatures.',
    date: '2026-11-18',
  },
];

export async function GET(): Promise<Response> {
  const blogItems: FeedItem[] = (blogData as BlogPost[])
    .map((post) => {
      const dateObj = parseUtcDate(post.date);
      const url = `${SITE_URL}/blog/${post.slug}/`;
      return {
        title: post.title,
        link: url,
        guid: url,
        pubDate: dateObj.toUTCString(),
        description: post.excerpt || post.intro || post.title,
        category: 'Kitchen Safety Guides',
        timestamp: dateObj.getTime(),
      };
    })
    .sort((a, b) => b.timestamp - a.timestamp || a.title.localeCompare(b.title));

  const toolItems: FeedItem[] = curatedTools.map((tool) => {
    const dateObj = parseUtcDate(tool.date);
    const url = `${SITE_URL}${tool.path}`;
    return {
      title: tool.title,
      link: url,
      guid: url,
      pubDate: dateObj.toUTCString(),
      description: tool.description,
      category: 'Interactive Tools',
      timestamp: dateObj.getTime(),
    };
  });

  const allItems = [...blogItems, ...toolItems];
  const latestTimestamp = allItems.reduce(
    (max, item) => (item.timestamp > max ? item.timestamp : max),
    0
  );
  const lastBuildDate = new Date(
    latestTimestamp || Date.parse('2026-11-18T12:00:00Z')
  ).toUTCString();

  const itemsXml = allItems
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="true">${escapeXml(item.guid)}</guid>
      <pubDate>${escapeXml(item.pubDate)}</pubDate>
      <category>${escapeXml(item.category)}</category>
      <description>${escapeXml(item.description)}</description>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml('IsItKitchenSafe — Kitchen Safety Guides & Interactive Tools')}</title>
    <link>${SITE_URL}/</link>
    <description>${escapeXml('Evidence-based kitchen safety guides, cookware material science, food storage rules, and interactive consumer tools from IsItKitchenSafe.')}</description>
    <language>en-us</language>
    <lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
