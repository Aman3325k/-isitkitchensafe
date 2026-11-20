const fs = require('fs');
const path = require('path');

const wave40Date = '2026-11-20';

// 1. English Guides
const enGuides = [
  {
    slug: 'copper-cookware-acidic-food-verdigris-toxicity',
    title: 'Cooking with Copper Cookware: Acidic Food Chelation, Verdigris Toxicity (pH < 6), Unlined Copper Risks & Tin/Stainless Linings',
    excerpt: 'Is it dangerous to cook tomato sauce or deglaze with wine in a copper pan? Learn about cupric ion leaching, verdigris poisoning, FDA 21 CFR prohibitions for foods with pH < 6.0, and retinning thresholds.',
    date: wave40Date,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'Copper cookware is revered by professional chefs and culinary enthusiasts for its unrivaled thermal conductivity (398 W/m·K), which is twenty times higher than stainless steel and twice as responsive as aluminum. This allows instant, razor-sharp heat distribution with zero localized hot spots. However, elemental copper is electrochemically reactive. When bare copper comes into contact with acidic food matrices—such as tomatoes, citrus, wine, or vinegar—it rapidly undergoes chemical dissolution. Furthermore, moisture and organic acids form verdigris, a toxic blue-green patina composed of copper carbonate and copper acetate. Here is the materials science of copper ion chelation, acute cupric gastrointestinal toxicity, FDA food contact regulations, and how to safely maintain lined copper vessels.',
    sections: [
      {
        title: '1. Metallurgy & Thermodynamics: Thermal Response vs. Electrochemical Reactivity',
        content: 'Copper sits in group 11 of the periodic table alongside silver and gold, possessing outstanding electrical and thermal conductivity. However, unlike noble metals, copper oxidizes readily in atmospheric moisture and heat, forming cuprous oxide (Cu2O, red) and cupric oxide (CuO, black). While these thin oxide layers provide mild passivity in neutral environments, they possess negligible chemical resistance against low-pH culinary acids. Metallic copper has a standard reduction potential of +0.34 V, meaning it is readily attacked by proton-donating organic acids in the presence of dissolved oxygen (2Cu + O2 + 4H+ → 2Cu2+ + 2H2O).',
        type: 'fact',
        boxText: 'Copper offers peerless thermal conductivity but readily oxidizes. In the presence of oxygen and heat, organic acids actively dissolve copper oxides directly into ionic copper.'
      },
      {
        title: '2. Acidic Chelation Kinetics (pH < 6.0) & The FDA Prohibition',
        content: 'The United States FDA Food Code (Section 4-101.14) and FDA Compliance Policy Guide Sec. 545.450 explicitly prohibit unlined copper, brass, and bronze from coming into direct contact with food that has a pH below 6.0. Common culinary staples fall far below this safety boundary: tomato marinara (pH 4.0–4.3), white and red wine (pH 3.0–3.6), balsamic vinegar (pH 2.4–2.8), and lemon juice (pH 2.0–2.4). Simmering tomato sauce in an unlined copper pan for 30 minutes at 95°C dissolves copper at rates exceeding 15 to 45 mg/kg of food, easily surpassing acute toxicity thresholds in a single meal.',
        type: 'danger',
        boxText: 'The FDA strictly bans unlined copper for foods with pH < 6.0. Simmering tomato sauce, wine, or vinegar in bare copper leaches massive concentrations of copper ions into food.'
      },
      {
        title: '3. Verdigris Poisoning: The Toxic Blue-Green Patina',
        content: 'When copper cookware is stored damp or exposed to airborne acetic and carbonic acids, it develops a pale blue-green powdery crust known as verdigris (basic copper carbonate CuCO3·Cu(OH)2 and copper(II) acetate Cu(CH3COO)2·[Cu(OH)2]3·2H2O). Verdigris is water-soluble and highly bioavailable. Ingestion of basic copper salts triggers violent gastrointestinal irritation within 15 to 45 minutes, manifested by acute nausea, metallic vomiting, severe abdominal colic, and watery diarrhea. In severe cases, systemic copper absorption induces acute intravascular hemolysis, jaundice, and hepatocellular necrosis.',
        type: 'warning',
        boxText: 'Verdigris is a toxic, water-soluble copper patina that forms in humid kitchens. Consuming food contaminated with verdigris causes violent vomiting, gastrointestinal pain, and liver toxicity.'
      },
      {
        title: '4. Protective Linings: Pure Tin Retinning vs. 304 Stainless Cladding',
        content: 'To harness copper thermal conductivity while eliminating toxicity, traditional artisan cookware is lined with a hand-wiped layer of 99.9% pure food-grade tin (Sn). Tin is chemically inert and does not react with acids down to pH 2.0. However, tin has a low melting point of 232°C (450°F), meaning an empty or dry pan will liquefy the tin lining in seconds. If the tin lining wears through to reveal a patch of bare copper larger than a US quarter (approx. 24 mm), the pan must be professionally retinned before cooking acidic food. Modern multi-ply copper cookware features a permanently bonded 0.2 mm lining of 304 (18/10) stainless steel, which eliminates melting risks and never requires retinning.',
        type: 'tip',
        boxText: 'Tin linings protect against copper leaching but melt at 232°C (450°F). If exposed bare copper exceeds the size of a coin, retin the pan. Alternatively, choose stainless-clad copper.'
      },
      {
        title: '5. Safe Culinary Exceptions: Jam Making & Sugar Confectionery',
        content: 'There are two celebrated classical exceptions where bare unlined copper is not only safe, but actively preferred by pastry chefs: 1) Whipping egg whites: copper ions (Cu2+) form a benign coordination complex with the egg white protein conalbumin (ovotransferrin), preventing over-whipping and creating ultra-stable, glossy meringues. 2) Sugar confectionery & high-sugar fruit jams: in sugar boiling at 110°C–120°C, the high sucrose concentration (exceeding 60° Brix) depresses water activity (aw < 0.80), dramatically reducing proton mobility and preventing chemical copper dissolution during rapid boiling.',
        type: 'fact',
        boxText: 'Bare copper is traditionally safe for whipping egg whites (conalbumin stabilization) and high-sugar jam making where low water activity inhibits ionic metal dissolution.'
      }
    ],
    conclusion: 'Copper cookware is a master-class culinary tool that requires rigorous scientific understanding. Never cook acidic foods (tomatoes, wine, vinegar, citrus) in unlined copper vessels. Always inspect traditional tin-lined copper for worn spots larger than a coin, avoid dry preheating above 230°C to protect the tin, and scrub away any blue-green verdigris using a flour-salt-vinegar paste followed by hot soapy water. For zero-maintenance durability, modern 304 stainless steel-lined copper delivers pure thermal performance with zero chemical migration.',
    faqs: [
      {
        question: 'Why does the FDA prohibit unlined copper for foods with a pH below 6.0?',
        answer: 'The FDA Food Code (Section 4-101.14) prohibits unlined copper because organic acids in foods below pH 6.0 (such as tomato sauce, wine, vinegar, and citrus) strip protective copper oxides and rapidly dissolve copper into ionic forms (Cu2+). Ingesting high concentrations of copper causes acute gastrointestinal toxicity, nausea, and vomiting.'
      },
      {
        question: 'What is verdigris and how toxic is it if ingested?',
        answer: 'Verdigris is a pale blue-green crust consisting of basic copper carbonate and copper acetate formed when bare copper reacts with air, moisture, and culinary acids. It is highly water-soluble and toxic. Ingesting even small amounts triggers severe stomach cramps, nausea, vomiting, and diarrhea within minutes.'
      },
      {
        question: 'When does a tin-lined copper pan need to be retinned?',
        answer: 'A tin-lined copper pan needs retinning when the protective tin layer wears away to expose patches of bare copper. Culinary standards state that if the exposed copper area exceeds the size of a standard coin (approx. 2 cm to 2.5 cm / 1 inch), or if multiple smaller scratches accumulate across the cooking surface, it must be retinned before preparing acidic foods.'
      },
      {
        question: 'Why can egg whites and high-sugar jams be cooked in bare unlined copper?',
        answer: 'Egg whites contain the protein conalbumin, which binds trace copper ions into a stable complex that reinforces foam structure without creating toxicity. In jam making, extreme sugar concentration binds free water molecules, depressing water activity and preventing the acid-metal reaction from dissolving copper during rapid boiling.'
      },
      {
        question: 'Is stainless steel-clad copper better than traditional tin-lined copper?',
        answer: 'For most home cooks, stainless steel-clad copper (e.g., Mauviel 150S or Falk Culinair) is far superior. The 304 stainless steel interior is completely non-reactive, cannot melt if dry-heated, cannot be scratched by metal utensils, and never requires expensive retinning, while still providing 90% of pure copper thermal responsiveness.'
      }
    ],
    relatedTools: [
      {
        name: 'Copper Cookware Toxicity & Acidic Leaching Modeler',
        url: '/tools/copper-cookware-toxicity-modeler/'
      },
      {
        name: 'Kitchenware Toxic Leaching & PFAS Risk Scorecard',
        url: '/tools/toxic-leaching-scorecard/'
      },
      {
        name: 'Safe Kitchenware Material Swap Calculator',
        url: '/tools/material-swap-calculator/'
      },
      {
        name: 'Cookware & Bakeware Safe Oven Temperature Lookup',
        url: '/tools/cookware-oven-temp-lookup/'
      }
    ]
  },
  {
    slug: 'melamine-dishes-microwave-dishwasher-formaldehyde-safety',
    title: 'Melamine Dinnerware Safety: Microwave Prohibitions, Formaldehyde & Cyanuric Acid Leaching, Acidic Foods & BfR Limits',
    excerpt: 'Is it dangerous to heat food on melamine plates or bowls? Understand melamine-formaldehyde resin chemistry, why microwaving is strictly banned, high-temperature dishwasher damage, and BfR safety thresholds.',
    date: wave40Date,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'Melamine dinnerware, bowls, and serving platters are ubiquitous in family households, picnics, and casual dining due to their vibrant colors, lightweight design, and shatterproof durability. Derived from thermosetting melamine-formaldehyde resins, these plastic-like dishes feel solid and ceramic-like. However, the chemical bonds holding melamine and formaldehyde together are thermally and hydrolytically unstable. Exposing melamine tableware to microwaves, boiling soups, acidic citrus, or caustic dishwasher cycles breaks the polymer cross-links, releasing free formaldehyde gas and melamine monomer directly into food. Here is the materials toxicology, European BfR and US FDA safety limits, and strict usage guidelines for melamine tableware.',
    sections: [
      {
        title: '1. Resin Chemistry: Melamine-Formaldehyde Cross-Linking and Residual Monomers',
        content: 'Melamine tableware is manufactured via the polycondensation of 1,3,5-triazine-2,4,6-triamine (melamine) with formaldehyde (HCHO) under high heat and pressure, forming a rigid thermoset network. In properly cured industrial resins, polymer chains are tightly cross-linked. However, curing is never 100% complete; trace amounts of unreacted residual formaldehyde and free melamine monomers remain trapped within the polymer matrix. When exposed to heat and moisture, the ether and methylene bridges in the resin undergo hydrolytic cleavage, releasing these volatile and toxic monomers into the adjacent food contact layer.',
        type: 'fact',
        boxText: 'Melamine dinnerware is made from formaldehyde and melamine resins. Heat and acid break the polymer bonds, releasing free formaldehyde and toxic melamine monomers into hot food.'
      },
      {
        title: '2. Why Microwaving Melamine Is Strictly Prohibited: Dielectric Breakdown',
        content: 'The FDA, European Commission, and consumer safety agencies worldwide strictly forbid placing melamine tableware in microwave ovens. Unlike microwave-safe polypropylene (PP) or borosilicate glass, melamine-formaldehyde resin is a polar dielectric material that absorbs 2.45 GHz microwave radiation directly. Instead of passing through the dish to heat only the food, microwaves induce rapid dielectric friction inside the dish material itself. The resin superheats to over 140°C–160°C in seconds, causing thermal bubbling, surface scorching, charring, and massive chemical outgassing of formaldehyde gas directly into the food.',
        type: 'danger',
        boxText: 'Never microwave melamine plates or bowls. Melamine absorbs microwave radiation directly, superheating beyond 140°C, charring the dish, and outgassing toxic formaldehyde into food.'
      },
      {
        title: '3. Acidic Foods & The BfR 70°C Migration Threshold',
        content: 'In 2019, the German Federal Institute for Risk Assessment (BfR Opinion No. 046/2019) conducted exhaustive testing on melamine tableware and bamboo-melamine composite dishes. The BfR concluded that while melamine is toxicologically safe for serving cold or ambient foods (salads, sandwiches, fruit), serving hot liquids above 70°C (158°F)—such as boiling chicken noodle soup, oatmeal, coffee, or hot tomato sauce—triggers a massive surge in chemical migration. Under EU Regulation No. 10/2011, the Specific Migration Limit (SML) is 15 mg/kg for formaldehyde and 2.5 mg/kg for melamine. In hot acidic test simulant (3% acetic acid at 100°C), tested melamine dishes exceeded the legal formaldehyde limit by up to 300-fold.',
        type: 'warning',
        boxText: 'German BfR testing proves serving hot foods above 70°C (158°F) in melamine releases up to 300 times the legal European limit for toxic formaldehyde, especially with acidic soups.'
      },
      {
        title: '4. Dishwasher Sanitizing & Alkaline Hydrolysis Degradation',
        content: 'Commercial and residential dishwasher sanitize cycles routinely operate at water temperatures between 65°C and 75°C (150°F–167°F) paired with highly alkaline detergents (pH 10.5–12.0) containing sodium percarbonate and enzymes. This combination causes alkaline surface hydrolysis of the melamine matrix. Over dozens of wash cycles, the glossy protective surface glaze erodes, leaving a chalky, micro-pitted finish. These micro-crevices harbor food stains, absorb oils, and accelerate subsequent chemical leaching. If a melamine dish feels rough, chalky, discolored, or shows cutlery scratch grooves, its protective barrier is destroyed and it must be discarded.',
        type: 'warning',
        boxText: 'High-temperature dishwasher cycles and caustic alkaline detergents erode the protective glaze of melamine. Discard any melamine tableware that appears chalky, dull, or deeply scratched.'
      },
      {
        title: '5. Safe Dinnerware Alternatives for Families & Children',
        content: 'For families seeking shatterproof or child-friendly dinnerware without chemical leaching risks, multiple certified non-toxic materials are available: 1) Tempered Opal Glass (e.g., Corelle Vitrelle): virtually unbreakable, 100% non-porous, chemically inert, microwave-safe, and dishwasher-safe. 2) Platinum-Cured Food-Grade Silicone: flexible, unbreakable, heat-resistant to 220°C (428°F), and completely free of formaldehyde, BPA, and phthalates. 3) 304 Food-Grade Stainless Steel: indestructible, dishwasher-safe, emits zero chemical migrants, and is ideal for toddler plates and camping bowls (not for microwave use).',
        type: 'tip',
        boxText: 'Upgrade from melamine to tempered opal glass (Corelle), platinum-cured food-grade silicone, or 304 food-grade stainless steel bowls for guaranteed toxin-free family dining.'
      }
    ],
    conclusion: 'Melamine dinnerware is durable and visually appealing for cold salads, dry sandwiches, and room-temperature snacks, but it has no place in high-heat culinary applications. Never place melamine tableware in a microwave, never pour boiling soup or hot tomato stew directly into melamine bowls, and discard dishes showing chalky glaze erosion or deep knife cuts. For safe high-temperature and microwave heating, rely exclusively on tempered glass, ceramic stoneware, and food-grade silicone.',
    faqs: [
      {
        question: 'Can I microwave food on a melamine plate or bowl?',
        answer: 'No. Microwaving melamine tableware is strictly prohibited by the FDA and global health agencies. Melamine resin absorbs microwave radiation directly, rapidly superheating the dish material, breaking polymer bonds, and releasing high concentrations of toxic formaldehyde gas and melamine monomer into your food.'
      },
      {
        question: 'Is it safe to serve hot soup in a melamine bowl?',
        answer: 'Public health authorities, including the German BfR, recommend against serving hot liquids above 70°C (158°F) in melamine bowls. Boiling chicken soup, chili, or acidic tomato stew accelerates hydrolytic breakdown of the resin, causing formaldehyde and melamine leaching that frequently exceeds legal safety limits.'
      },
      {
        question: 'What are the European BfR and FDA limits for melamine and formaldehyde migration?',
        answer: 'Under EU Regulation (EU) No 10/2011, the Specific Migration Limit (SML) for formaldehyde is 15 mg/kg of food, and for melamine it is 2.5 mg/kg. The FDA Tolerable Daily Intake (TDI) for melamine is 0.063 mg per kilogram of body weight per day. Repeated exposure above these thresholds causes kidney damage and bladder stones.'
      },
      {
        question: 'Are melamine dishes safe in the dishwasher?',
        answer: 'While many melamine products are labeled top-rack dishwasher safe, high-temperature wash cycles (>70°C / 158°F) and harsh alkaline detergents slowly degrade the protective resin glaze over time. Once the dish becomes chalky, dull, discolored, or rough to the touch, chemical migration accelerates and the dish must be replaced.'
      },
      {
        question: 'What are the health risks of chronic melamine and formaldehyde ingestion?',
        answer: 'Formaldehyde is a classified human carcinogen that causes gastrointestinal irritation, ulceration, and systemic inflammation upon chronic ingestion. Melamine is excreted through the kidneys; chronic low-dose ingestion leads to the formation of insoluble melamine-cyanurate crystal calculi, resulting in kidney stones, tubular obstruction, and chronic renal failure.'
      }
    ],
    relatedTools: [
      {
        name: 'Dishwasher Melamine Formaldehyde & Cyanuric Acid Leaching Simulator',
        url: '/tools/dishwasher-melamine-leaching-simulator/'
      },
      {
        name: 'Microwave Plastic Steam Cover Phthalate Condensate Modeler',
        url: '/tools/microwave-plastic-steam-cover-modeler/'
      },
      {
        name: 'Kitchen Plastic Leaching Checker',
        url: '/tools/kitchen-plastic-leaching-checker/'
      },
      {
        name: 'Kitchen Bottom Symbol Decoder & Plastic Codes #1–#7',
        url: '/tools/kitchen-symbol-decoder/'
      }
    ]
  },
  {
    slug: 'air-fryer-preheating-empty-teflon-fume-hazards',
    title: 'Preheating an Empty Air Fryer: Radiant Overheating, PTFE Pyrolysis at 240°C, Polymer Fume Fever & Pet Bird Safety',
    excerpt: 'Should you preheat an air fryer empty? Discover the physics of radiant heat spikes without food moisture, why PTFE Teflon breaks down at 240°C in under 4 minutes, polymer fume fever, and fatal pet bird toxicity.',
    date: wave40Date,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'Air fryers have revolutionized domestic cooking by delivering crispy, golden-brown foods in half the time of conventional convection ovens. Many recipe books and online cooking tutorials instruct users to "preheat your air fryer for 3 to 5 minutes on high" to achieve maximum crispiness. However, preheating an empty air fryer equipped with a traditional PTFE (Teflon) non-stick basket creates an extreme thermodynamic hazard. Without food present to absorb radiant energy through water vaporization, localized metal temperatures surge past safe fluoropolymer thresholds in under 4 minutes. Here is the engineering thermodynamics of air fryer heat flux, the kinetics of PTFE thermal pyrolysis, polymer fume fever in humans, and the catastrophic danger overheated air fryers pose to pet birds.',
    sections: [
      {
        title: '1. Thermodynamic Heat Flux: Convective Stripping vs. Radiant Superheating',
        content: 'An air fryer functions via high-velocity forced convection paired with an intense radiant heating coil. A 1,500 to 2,000 watt exposed electric heating element is suspended a mere 3 to 5 centimeters directly above the cooking basket. When active, this nichrome coil glows red-hot at temperatures between 500°C and 700°C (932°F–1292°F). When food is in the basket, direct infrared radiant flux is captured and dissipated by water moisture inside the food. Vaporizing water requires an immense amount of energy—the latent heat of vaporization (2,260 kJ/kg)—which acts as a dynamic thermodynamic governor, keeping basket surface temperatures safely below 180°C (356°F).',
        type: 'fact',
        boxText: 'Food moisture absorbs massive thermal energy through water vaporization, keeping air fryer baskets below 180°C. In an empty basket, this cooling mechanism is completely missing.'
      },
      {
        title: '2. The Dry-Preheat Spike: Exceeding 240°C in Under 4 Minutes',
        content: 'When an empty air fryer is preheated on high (200°C / 400°F setting), there is zero evaporative heat sink. The high-speed fan (3,000 RPM) recirculates increasingly hot air while the glowing radiant element relentlessly bombards the dark, matte-black non-stick coating. Because dark surfaces exhibit high radiant emissivity and absorptivity (ε ≈ 0.95), thermocouple testing reveals that the metal basket directly beneath the heating element reaches 240°C–270°C (464°F–518°F) within 3.5 to 5 minutes—even though the unit thermostat reads only 190°C. This localized thermal overshoot severely exceeds the continuous thermal operating ceiling of polytetrafluoroethylene (PTFE, 260°C).',
        type: 'danger',
        boxText: 'Empty preheating bombards dark non-stick baskets with infrared radiation, causing localized hotspots to surge past 250°C in under 4 minutes, triggering rapid PTFE thermal breakdown.'
      },
      {
        title: '3. PTFE Pyrolysis Breakdown: Ultrafine Particles (UFPs) and Toxic Fluorinated Gases',
        content: 'Thermal degradation of PTFE begins sub-microscopically at approximately 200°C (392°F). Between 230°C and 260°C, the carbon-fluorine polymer backbone undergoes chain scission and micro-fissuring, ejecting dense plumes of airborne ultrafine particles (UFPs, <100 nanometers) at concentrations exceeding 100,000 particles/cm³. Above 260°C (500°F), true chemical pyrolysis occurs: PTFE decomposes into toxic fluorocarbon gases, including perfluoroisobutene (PFIB, ten times more toxic than phosgene), carbonyl fluoride (COF2, which reacts with lung moisture to form hydrofluoric acid), and trifluoroacetic acid (TFA).',
        type: 'warning',
        boxText: 'Above 230°C, degrading PTFE emits millions of airborne ultrafine nanoplastic particles. Above 260°C, active pyrolysis releases lethal carbonyl fluoride and fluorinated acid vapors.'
      },
      {
        title: '4. Avian Respiratory Lethality: Why Pet Birds Die in Minutes',
        content: 'The airborne pyrolysis products of overheated PTFE are notoriously fatal to pet birds (parrots, cockatiels, parakeets, canaries). Avian respiratory systems are fundamentally different from mammals: birds possess non-expandable parabronchial lungs connected to an extensive network of nine thin-walled air sacs that circulate air unidirectionally. Their blood-gas diffusion barrier is one-third the thickness of human alveolar membranes. Inhaling minute, sub-parts-per-billion concentrations of PTFE ultrafine particles induces catastrophic pulmonary hemorrhage, acute pulmonary edema, and asphyxiation in birds within 15 to 30 minutes, even when humans in the house notice no odor.',
        type: 'warning',
        boxText: 'Birds possess ultra-thin respiratory membranes and unidirectional lungs. Inhaling trace fluoropolymer fumes from an overheated air fryer causes fatal lung hemorrhage in 15 to 30 minutes.'
      },
      {
        title: '5. Safe Preheating Protocols & Non-Toxic Air Fryer Basket Alternatives',
        content: 'To eliminate fluoropolymer fume risks while still achieving maximum food crispiness: 1) Skip empty preheating: modern air fryers reach full cooking temperature in under 90 seconds once loaded with food, making empty preheating functionally unnecessary. 2) Never preheat with empty parchment paper: loose parchment paper gets sucked upward by the vortex into the 600°C heating element, causing instantaneous kitchen fires. 3) Upgrade to non-toxic basket materials: replace Teflon baskets with solid 304 food-grade stainless steel mesh baskets, sol-gel mineral ceramic baskets (100% PTFE/PFAS-free, stable up to 450°C), or panoramic borosilicate glass drawers.',
        type: 'tip',
        boxText: 'Never preheat an air fryer empty. Load food immediately, which naturally buffers heat. Upgrade to 304 stainless steel or ceramic sol-gel baskets for 100% non-toxic, indestructible cooking.'
      }
    ],
    conclusion: 'Empty preheating of PTFE non-stick air fryer baskets is an unnecessary culinary practice that exposes non-stick coatings to destructive thermal overshoots beyond 240°C. The resulting emission of ultrafine particles and fluorochemical gases permanently degrades non-stick coatings, presents polymer fume fever risks to humans, and poses an immediate fatal hazard to pet birds. Load food from cold, ensure proper kitchen range hood ventilation, or upgrade to stainless steel or ceramic air fryer baskets for permanent peace of mind.',
    faqs: [
      {
        question: 'Do air fryer manufacturers recommend preheating the unit empty?',
        answer: 'While some user manuals mention preheating for 2 to 3 minutes, materials safety engineers strongly advise against empty preheating for PTFE non-stick baskets. Without food to absorb radiant heat, the dark basket metal can overshoot 240°C–260°C in minutes, accelerating coating peeling and emitting toxic fluoropolymer micro-particles.'
      },
      {
        question: 'At what temperature does the non-stick coating in an air fryer begin breaking down?',
        answer: 'Polytetrafluoroethylene (PTFE) begins sub-microscopic thermal decomposition at approximately 200°C (392°F). Significant emissions of airborne ultrafine particles (<100 nm) occur between 230°C and 260°C. Above 260°C (500°F), active pyrolysis releases toxic fluorinated gases including carbonyl fluoride and trifluoroacetic acid.'
      },
      {
        question: 'Why are pet birds so uniquely vulnerable to air fryer fumes?',
        answer: 'Birds have an extremely efficient unidirectional respiratory system with air sacs and a blood-gas barrier three times thinner than humans. Minute concentrations of aerosolized fluoropolymers that cause no noticeable symptoms in humans trigger acute pulmonary edema, intra-alveolar hemorrhage, and rapid death in birds within 15 to 30 minutes.'
      },
      {
        question: 'What is polymer fume fever ("Teflon flu") in humans?',
        answer: 'Polymer fume fever is an acute, temporary influenza-like syndrome caused by inhaling the thermal degradation products of overheated PTFE. Symptoms typically develop 4 to 8 hours after exposure and include chest tightness, chills, fever, headache, shivering, and a dry cough, usually resolving within 24 to 48 hours.'
      },
      {
        question: 'Can I put parchment paper in an air fryer while preheating?',
        answer: 'Never put parchment paper in an empty air fryer during preheating. The high-velocity convection vortex (over 3,000 RPM) will lift the lightweight unweighted paper directly into the red-hot 600°C electrical heating element at the top of the chamber, causing an immediate open flame and kitchen fire.'
      }
    ],
    relatedTools: [
      {
        name: 'Air Fryer Teflon Basket Fluoropolymer Degradation & Thermal Micro-Plume Modeler',
        url: '/tools/air-fryer-teflon-fluoropolymer-modeler/'
      },
      {
        name: 'Air Fryer Parchment vs. Silicone Liner Airflow & Fire Hazard Simulator',
        url: '/tools/air-fryer-liner-fire-hazard-simulator/'
      },
      {
        name: 'AI Pan Scratch & Coating Damage Inspector',
        url: '/tools/pan-scratch-inspector/'
      },
      {
        name: 'Air Fryer, Convection Oven & Gas Mark Conversion Calculator',
        url: '/tools/air-fryer-oven-converter/'
      }
    ]
  }
];

// Helper to convert English guide to localized guide
function localizeGuides(lang) {
  if (lang === 'es') {
    return [
      {
        slug: 'copper-cookware-acidic-food-verdigris-toxicity',
        title: 'Cocinar en Utensilios de Cobre: Quelación Ácida, Toxicidad del Cardenillo (pH < 6), Riesgos del Cobre sin Revestir y Estaño/Inox',
        excerpt: '¿Es peligroso cocinar salsa de tomate o desglasar con vino en una sartén de cobre? Conozca la lixiviación de iones cúpricos, el envenenamiento por cardenillo, las prohibiciones de la FDA para pH < 6.0 y los límites de reestañado.',
        date: wave40Date,
        readTime: '9 min de lectura',
        author: 'IsItKitchenSafe',
        intro: 'Los utensilios de cocina de cobre son venerados por chefs profesionales por su inigualable conductividad térmica (398 W/m·K), veinte veces superior al acero inoxidable. Sin embargo, el cobre elemental es electroquímicamente reactivo. Al entrar en contacto con matrices ácidas como tomate, vino o vinagre, se disuelve rápidamente. Además, la humedad forma cardenillo (pátina azul verdosa de carbonato y acetato de cobre), altamente tóxico. Aquí analizamos la ciencia de la quelación del cobre, la toxicidad gastrointestinal y el mantenimiento seguro de ollas estañadas.',
        sections: [
          {
            title: '1. Metalurgia y Termodinámica: Respuesta Térmica vs. Reactividad Electroquímica',
            content: 'El cobre posee una conductividad eléctrica y térmica sobresaliente. Sin embargo, a diferencia de los metales nobles, se oxida con facilidad ante la humedad y el calor formando óxidos de cobre (Cu2O y CuO). En presencia de ácidos culinarios y oxígeno, estos óxidos se disuelven velozmente liberando iones cúpricos libres (2Cu + O2 + 4H+ → 2Cu2+ + 2H2O).',
            type: 'fact',
            boxText: 'El cobre conduce el calor con máxima rapidez pero se oxida fácilmente. Los ácidos y el oxígeno disuelven el cobre hacia formas iónicas solubles.'
          },
          {
            title: '2. Cinética de Quelación Ácida (pH < 6.0) y Prohibición de la FDA',
            content: 'El Código Alimentario de la FDA (Sección 4-101.14) prohíbe expresamente el uso de cobre sin revestir en contacto con alimentos con un pH inferior a 6.0. El tomate (pH 4.0–4.3), el vino (pH 3.0–3.6) y el vinagre (pH 2.4–2.8) disuelven cobre a tasas de 15 a 45 mg/kg en 30 minutos de cocción a 95°C, superando de inmediato los umbrales de toxicidad aguda.',
            type: 'danger',
            boxText: 'La FDA prohíbe el cobre sin revestir para alimentos con pH menor a 6.0. Cocinar tomate o vino en cobre desnudo transfiere dosis tóxicas de metal a la comida.'
          },
          {
            title: '3. Envenenamiento por Cardenillo: La Pátina Azul Verdosa Tóxica',
            content: 'Cuando el cobre se guarda húmedo o reacciona con vapores ácidos, genera una capa azul verdosa pulverulenta llamada cardenillo (carbonato y acetato de cobre). Es muy soluble y biodisponible. Su ingestión causa náuseas intensas, vómitos de color verdoso, cólicos severos y diarrea en 15 a 45 minutos. En dosis altas, provoca hemólisis y daño hepático.',
            type: 'warning',
            boxText: 'El cardenillo es una pátina tóxica y soluble en agua. Consumir alimentos contaminados con cardenillo provoca vómitos violentos y cólicos agudos.'
          },
          {
            title: '4. Revestimientos Protectores: Reestañado Puro vs. Acero Inoxidable 304',
            content: 'Para evitar la intoxicación, el cobre tradicional se recubre con estaño puro al 99.9%. El estaño es químicamente inerte ante los ácidos, pero se funde a solo 232°C (450°F). Si el desgaste deja ver cobre expuesto mayor que una moneda, debe reestañarse. El cobre moderno revestido con acero inoxidable 304 de 0.2 mm elimina el riesgo de fundición y nunca requiere reestañado.',
            type: 'tip',
            boxText: 'El estaño protege contra el cobre pero se funde a 232°C. Si el cobre desnudo supera el tamaño de una moneda, reestañe la sartén o elija cobre con acero inoxidable.'
          },
          {
            title: '5. Excepciones Culinarias Seguras: Mermeladas y Claras a Punto de Nieve',
            content: 'Existen dos excepciones clásicas seguras en cobre desnudo: 1) Montar claras de huevo: los iones de cobre se unen a la conalbúmina estabilizando la espuma sin riesgo tóxico. 2) Mermeladas de alto contenido de azúcar: la enorme concentración de sacarosa (>60° Brix) reduce la actividad de agua (aw < 0.80), impidiendo que los ácidos ataquen el cobre durante el hervor rápido.',
            type: 'fact',
            boxText: 'El cobre desnudo es seguro tradicionalmente para montar claras (unión a la conalbúmina) y mermeladas muy azucaradas donde la baja actividad de agua frena la corrosión.'
          }
        ],
        conclusion: 'El cobre es un instrumento culinario excepcional pero requiere rigor científico. Nunca cocine salsas ácidas (tomate, vino, limón) en cobre sin revestir. Revise que el estaño protector no esté desgastado y limpie cualquier rastro de cardenillo azul verdoso antes de cocinar.',
        faqs: [
          {
            question: '¿Por qué la FDA prohíbe el cobre sin revestir para alimentos con pH menor a 6.0?',
            answer: 'Porque los ácidos orgánicos de alimentos como tomates, vinagre, vino y cítricos disuelven activamente los óxidos de cobre, liberando grandes cantidades de iones de cobre que causan intoxicación gastrointestinal aguda, vómitos y náuseas.'
          },
          {
            question: '¿Qué es el cardenillo y qué tan tóxico es al ingerirse?',
            answer: 'El cardenillo es una costra azul verdosa de carbonato y acetato de cobre formada por la humedad y ácidos del aire. Es muy soluble y altamente tóxico; una pequeña cantidad ingerida produce cólicos y vómitos violentos en pocos minutos.'
          },
          {
            question: '¿Cuándo es necesario reestañar una sartén de cobre con estaño?',
            answer: 'Cuando el estaño se desgasta y deja al descubierto parches de cobre del tamaño de una moneda de 2 cm o múltiples arañazos profundos. En ese estado, no debe usarse para cocinar platos ácidos hasta ser reestañada.'
          },
          {
            question: '¿Por qué se pueden batir claras y hacer mermeladas en cobre sin revestir?',
            answer: 'Las claras contienen conalbúmina, una proteína que neutraliza trazas de cobre formando un complejo que estabiliza el merengue. En mermeladas con alto azúcar, la baja actividad del agua impide la disolución del metal.'
          },
          {
            question: '¿El cobre revestido de acero inoxidable es mejor que el cobre tradicional con estaño?',
            answer: 'Sí, para la gran mayoría de cocineros. El interior de acero inoxidable 304 no reacciona con ácidos, no se derrite si se calienta en seco, resiste utensilios metálicos y nunca necesita reestañado, manteniendo el 90% de la respuesta térmica del cobre.'
          }
        ],
        relatedTools: [
          {
            name: 'Modelador de Toxicidad y Lixiviación en Utensilios de Cobre',
            url: '/es/tools/copper-cookware-toxicity-modeler/'
          },
          {
            name: 'Tarjeta de Puntuación de Lixiviación Tóxica y PFAS',
            url: '/es/tools/toxic-leaching-scorecard/'
          },
          {
            name: 'Calculadora de Sustitución Segura de Materiales',
            url: '/es/tools/material-swap-calculator/'
          },
          {
            name: 'Buscador de Temperatura de Horno para Utensilios de Cocina',
            url: '/es/tools/cookware-oven-temp-lookup/'
          }
        ]
      },
      {
        slug: 'melamine-dishes-microwave-dishwasher-formaldehyde-safety',
        title: 'Seguridad de la Vajilla de Melamina: Prohibición en Microondas, Lixiviación de Formaldehído, Alimentos Calientes y Límites del BfR',
        excerpt: '¿Es peligroso calentar comida en platos o boles de melamina? Descubra la química de las resinas de melamina-formaldehído, por qué el microondas está vetado, el daño del lavavajillas y las normas europeas del BfR.',
        date: wave40Date,
        readTime: '9 min de lectura',
        author: 'IsItKitchenSafe',
        intro: 'La vajilla de melamina es muy popular en hogares y pícnics por su ligereza y resistencia a roturas. Fabricados con resina de melamina-formaldehído termoendurecible, estos platos parecen cerámica sólida. Sin embargo, los enlaces químicos de la resina son inestables ante el calor intenso y los ácidos. Calentar platos de melamina en el microondas o servir sopas hirviendo rompe las cadenas de polímero, liberando formaldehído gaseoso y melamina directamente en los alimentos. Aquí revisamos los límites de migración del BfR alemán y la FDA estadounidense.',
        sections: [
          {
            title: '1. Química de Resinas: Condensación Melamina-Formaldehído y Monómeros Residuales',
            content: 'La vajilla de melamina se produce policondensando melamina con formaldehído bajo calor y presión. Aunque la resina queda reticulada, siempre quedan restos de monómeros no reaccionados atrapados en la matriz. Con calor y humedad, los enlaces éter y metileno sufren hidrólisis, liberando formaldehído y melamina hacia la comida.',
            type: 'fact',
            boxText: 'La melamina contiene resinas de formaldehído. El calor y los ácidos rompen los enlaces poliméricos y liberan monómeros tóxicos en los alimentos.'
          },
          {
            title: '2. Por Qué el Microondas Está Estrictamente Prohibido: Ruptura Dieléctrica',
            content: 'La FDA y las autoridades europeas prohíben meter melamina al microondas. A diferencia del polipropileno o el vidrio, la melamina es un material dieléctrico polar que absorbe directamente las microondas a 2.45 GHz. El plato se sobrecalienta a más de 140°C–160°C en segundos, provocando ampollas, carbonización y una intensa emisión de formaldehído gaseoso.',
            type: 'danger',
            boxText: 'Nunca use melamina en el microondas. Absorbe la radiación directamente, sobrecalentándose a más de 140°C y contaminando la comida con vapores de formaldehído.'
          },
          {
            title: '3. Alimentos Ácidos y el Umbral Crítico de 70°C del BfR Alemán',
            content: 'El Instituto Federal Alemán para la Evaluación de Riesgos (BfR) demostró que la melamina es segura para alimentos fríos o templados, pero verter líquidos a más de 70°C (sopas hirviendo, café, salsa de tomate caliente) dispara la migración química. En pruebas con ácido acético a 100°C, la lixiviación de formaldehído superó hasta 300 veces el límite legal europeo (15 mg/kg).',
            type: 'warning',
            boxText: 'El BfR demostró que servir comida a más de 70°C en melamina libera hasta 300 veces el límite legal de formaldehído, sobre todo con caldos ácidos.'
          },
          {
            title: '4. Ciclos de Lavavajillas e Hidrólisis Alcalina: Erosión del Brillo',
            content: 'Los ciclos higiénicos del lavavajillas (>65°C) con detergentes cáusticos (pH 11–12) desgastan el esmalte de la melamina. Con los lavados, la superficie se vuelve blanquecina, porosa y áspera al tacto, acumulando suciedad y multiplicando la liberación de químicos. Si un plato de melamina pierde el brillo o tiene cortes de cuchillo, debe desecharse.',
            type: 'warning',
            boxText: 'El lavavajillas a alta temperatura y los detergentes alcalinos degradan el esmalte protector de la melamina. Deseche platos blanquecinos o rayados.'
          },
          {
            title: '5. Alternativas Seguras para Familias: Vidrio Templado Opal, Silicona y Acero 304',
            content: 'Las opciones libres de tóxicos para familias incluyen: 1) Vidrio opal templado (Corelle): irrompible en caídas cotidianas, 100% inerte, apto para microondas y lavavajillas. 2) Silicona curada con platino de grado alimentario: irrompible, libre de formaldehído y BPA. 3) Acero inoxidable 304: indestructible, apto para lavavajillas y sin migración química.',
            type: 'tip',
            boxText: 'Reemplace la melamina por vidrio opal templado (Corelle), silicona platino o acero inoxidable 304 para comidas familiares totalmente seguras.'
          }
        ],
        conclusion: 'La vajilla de melamina sirve para ensaladas frías y bocadillos, pero jamás debe usarse en caliente ni en el microondas. Ante cualquier pérdida de brillo o rayas de cuchillo, sustitúyala por vidrio templado o cerámica.',
        faqs: [
          {
            question: '¿Puedo calentar comida en el microondas en un plato o bol de melamina?',
            answer: 'No. La melamina absorbe directamente la radiación electromagnética, se sobrecalienta rápidamente por encima de 140°C y desprende gas formaldehído y melamina hacia los alimentos.'
          },
          {
            question: '¿Es seguro servir sopa hirviendo o comida ácida en un bol de melamina?',
            answer: 'No se recomienda. El BfR alemán advierte que los líquidos a más de 70°C (158°F) degradan la resina y multiplican la migración de formaldehído muy por encima de los límites legales de seguridad.'
          },
          {
            question: '¿Cuáles son los límites de migración de formaldehído y melamina según el BfR y la FDA?',
            answer: 'El Reglamento UE 10/2011 fija un límite de migración específica de 15 mg/kg para formaldehído y 2.5 mg/kg para melamina. La FDA establece una ingesta diaria tolerable de 0.063 mg/kg de peso corporal.'
          },
          {
            question: '¿Se pueden lavar los platos de melamina en el lavavajillas?',
            answer: 'Aunque se indiquen como aptos, los lavados a alta temperatura y los detergentes fuertemente alcalinos erosionan el brillo protector. Cuando el plato queda blanquecino o áspero, debe desecharse.'
          },
          {
            question: '¿Cuáles son los riesgos para la salud de ingerir formaldehído y melamina a largo plazo?',
            answer: 'El formaldehído es un carcinógeno conocido que irrita el tracto gastrointestinal. La melamina se excreta por los riñones y su acumulación crónica forma cálculos insolubles que causan daño y fallo renal.'
          }
        ],
        relatedTools: [
          {
            name: 'Simulador de Lixiviación de Formaldehído y Ácido Cianúrico en Melamina',
            url: '/es/tools/dishwasher-melamine-leaching-simulator/'
          },
          {
            name: 'Modelador de Condensado de Ftalatos en Tapas Plásticas de Microondas',
            url: '/es/tools/microwave-plastic-steam-cover-modeler/'
          },
          {
            name: 'Verificador de Lixiviación en Plásticos de Cocina',
            url: '/es/tools/kitchen-plastic-leaching-checker/'
          },
          {
            name: 'Decodificador de Símbolos de Cocina y Códigos #1–#7',
            url: '/es/tools/kitchen-symbol-decoder/'
          }
        ]
      },
      {
        slug: 'air-fryer-preheating-empty-teflon-fume-hazards',
        title: 'Precalentar la Freidora de Aire Vacía: Sobrecalentamiento Radiante, Pirólisis de PTFE a 240°C, Fiebre por Humos de Polímeros y Aves',
        excerpt: '¿Se debe precalentar la freidora de aire sin comida? Conozca la física de los picos de calor radiante sin humedad, la degradación de teflón a más de 240°C en 4 minutos, la fiebre por polímeros y la letalidad en aves.',
        date: wave40Date,
        readTime: '9 min de lectura',
        author: 'IsItKitchenSafe',
        intro: 'Muchas recetas recomiendan precalentar la freidora de aire vacía durante 3 a 5 minutos a máxima potencia. Sin embargo, hacer esto con una cesta de teflón (PTFE) genera un severo peligro termodinámico. Sin comida que absorba el calor radiante mediante la evaporación de agua, el metal oscuro de la cesta supera los 240°C–270°C en menos de 4 minutos, desencadenando la pirólisis del teflón y emitiendo partículas ultrafinas y gases tóxicos letales para las aves domésticas. Aquí analizamos la termodinámica de convección, la toxicología del PTFE y cómo cocinar con total seguridad.',
        sections: [
          {
            title: '1. Termodinámica del Calor: Convección Forzada vs. Radiación Infrarroja',
            content: 'Las freidoras de aire combinan ventiladores de alta velocidad con una resistencia eléctrica incandescente situada a solo 3–5 cm de la cesta. Cuando hay comida, la evaporación del agua (calor latente de 2.260 kJ/kg) actúa como freno térmico manteniendo la cesta por debajo de 180°C. Si la cesta está vacía, ese freno térmico desaparece por completo.',
            type: 'fact',
            boxText: 'La humedad de los alimentos absorbe calor por evaporación y mantiene la cesta a menos de 180°C. Sin comida, la cesta se sobrecalienta descontroladamente.'
          },
          {
            title: '2. El Pico Térmico en Seco: Superar los 240°C en Menos de 4 Minutos',
            content: 'Al precalentar en vacío a 200°C, la radiación infrarroja incide sobre el revestimiento negro mate, que absorbe casi toda la energía térmica. Mediciones con termopares demuestran que la cesta metálica alcanza 240°C–270°C en menos de 4 minutos, superando el límite seguro continuo del teflón (260°C).',
            type: 'danger',
            boxText: 'El precalentamiento vacío dispara la temperatura de la cesta por encima de 250°C en 4 minutos, provocando la descomposición del revestimiento antiadherente.'
          },
          {
            title: '3. Pirólisis del Teflón: Partículas Ultrafinas (UFP) y Gases Fluorados',
            content: 'El teflón (PTFE) comienza su degradación submicroscópica a 200°C. A partir de 230°C libera densas plumas de partículas ultrafinas respirables (<100 nm). Por encima de 260°C, la pirólisis activa libera fluoruro de carbonilo (COF2), perfluoroisobuteno (PFIB) y ácido trifluoroacético (TFA).',
            type: 'warning',
            boxText: 'A más de 230°C, el teflón emite millones de nanopartículas de plástico al aire. Por encima de 260°C, emite gases fluorados corrosivos y altamente tóxicos.'
          },
          {
            title: '4. Letalidad Respiratoria Aviar: Por Qué los Pájaros Mueren en Minutos',
            content: 'El sistema respiratorio de las aves posee sacos aéreos y una membrana capilar tres veces más delgada que la de los mamíferos. Inhalar cantidades minúsculas de vapores de teflón causa hemorragia pulmonar fulminante y asfixia en loros y canarios en 15 a 30 minutos, incluso cuando las personas en la casa no perciben ningún olor.',
            type: 'warning',
            boxText: 'Los pulmones de las aves son hipersensibles a los fluoropolímeros. Los humos de teflón sobrecalentado matan pájaros domésticos por asfixia en 15 a 30 minutos.'
          },
          {
            title: '5. Protocolos Seguros y Cestas Libres de Tóxicos (Acero 304, Cerámica Sol-Gel, Vidrio)',
            content: 'Para cocinar seguro: 1) No precaliente en vacío: la freidora alcanza temperatura con la comida dentro en 90 segundos. 2) Nunca use papel pergamino suelto en el precalentamiento: el vórtice de aire lo succionará hacia la resistencia incandescente provocando un incendio. 3) Cambie a cestas de acero 304, cerámica mineral sol-gel o cajones de vidrio templado.',
            type: 'tip',
            boxText: 'No precaliente la freidora vacía. Coloque los alimentos desde el inicio o elija cestas de acero inoxidable 304 o cerámica mineral sin teflón.'
          }
        ],
        conclusion: 'Precalentar la freidora de aire vacía es una práctica innecesaria que daña las cestas de teflón y emite gases tóxicos peligrosos para las personas y letales para las aves domésticas. Introduzca la comida desde el principio o use cestas de acero inoxidable sin revestimiento.',
        faqs: [
          {
            question: '¿Recomiendan los fabricantes precalentar la freidora de aire vacía?',
            answer: 'Aunque algunos manuales mencionan precalentar 2 o 3 minutos, los ingenieros de materiales desaconsejan hacerlo con cestas de teflón vacías, ya que la temperatura supera los 250°C en minutos y degrada el recubrimiento.'
          },
          {
            question: '¿A qué temperatura comienza a degradarse el teflón de una freidora de aire?',
            answer: 'El PTFE inicia su descomposición submicroscópica a 200°C (392°F). Entre 230°C y 260°C emite millones de partículas ultrafinas, y por encima de 260°C sufre pirólisis liberando gases fluorados tóxicos.'
          },
          {
            question: '¿Por qué los pájaros domésticos son tan vulnerables a los humos de teflón?',
            answer: 'Porque tienen sacos aéreos y una membrana sangre-gas tres veces más fina que los mamíferos. Concentraciones ínfimas de gases de teflón provocan edema pulmonar masivo y asfixia en 15 a 30 minutos.'
          },
          {
            question: '¿Qué es la fiebre por humos de polímeros ("gripe del teflón") en humanos?',
            answer: 'Es un cuadro similar a la gripe provocado por inhalar vapores de teflón sobrecalentado. Produce opresión torácica, escalofríos, fiebre, dolor de cabeza y tos seca entre 4 y 8 horas tras la exposición.'
          },
          {
            question: '¿Se puede poner papel pergamino en la freidora durante el precalentamiento?',
            answer: 'Nunca sin comida que lo sujete. El potente flujo de aire (más de 3.000 RPM) levanta el papel hacia la resistencia incandescente a 600°C provocando fuego instantáneo en la cocina.'
          }
        ],
        relatedTools: [
          {
            name: 'Modelador de Degradación de Cestas de Teflón en Freidoras de Aire',
            url: '/es/tools/air-fryer-teflon-fluoropolymer-modeler/'
          },
          {
            name: 'Simulador de Riesgo de Incendio por Papel en Freidoras de Aire',
            url: '/es/tools/air-fryer-liner-fire-hazard-simulator/'
          },
          {
            name: 'Inspector de Arañazos en Sartenes con IA',
            url: '/es/tools/pan-scratch-inspector/'
          },
          {
            name: 'Conversor de Freidora de Aire, Horno y Gas Mark',
            url: '/es/tools/air-fryer-oven-converter/'
          }
        ]
      }
    ];
  }

  if (lang === 'pt') {
    return [
      {
        slug: 'copper-cookware-acidic-food-verdigris-toxicity',
        title: 'Cozinhar em Panelas de Cobre: Quelação Ácida, Toxicidade do Azinhavre (pH < 6), Riscos do Cobre sem Revestimento e Estanho/Inox',
        excerpt: 'É perigoso cozinhar molho de tomate ou deglaçar com vinho em panela de cobre? Conheça a lixiviação de íons cúpricos, o envenenamento por azinhavre, as proibições da FDA para pH < 6.0 e limites de estanhagem.',
        date: wave40Date,
        readTime: '9 min de leitura',
        author: 'IsItKitchenSafe',
        intro: 'Panelas de cobre são consagradas na alta gastronomia por sua excepcional condutividade térmica (398 W/m·K), vinte vezes superior ao aço inox. No entanto, o cobre metálico é eletroquimicamente reativo. Em contato com alimentos ácidos (tomate, vinho, vinagre), dissolve-se rapidamente. Além disso, a umidade forma o azinhavre (pátina verde-azulada tóxica). Veja a química da quelação do cobre, riscos de toxicidade gastrointestinal e manutenção segura.',
        sections: [
          {
            title: '1. Metalurgia e Termodinâmica: Resposta Térmica vs. Reatividade Eletroquímica',
            content: 'O cobre oxida facilmente sob calor e umidade formando óxidos (Cu2O e CuO). Na presença de oxigênio e ácidos alimentares com prótons livres, esses óxidos são prontamente dissolvidos em íons de cobre solúveis (2Cu + O2 + 4H+ → 2Cu2+ + 2H2O).',
            type: 'fact',
            boxText: 'O cobre tem condutividade térmica inigualável, mas oxida com facilidade. Ácidos culinários e oxigênio dissolvem o cobre em íons tóxicos.'
          },
          {
            title: '2. Cinética de Quelação Ácida (pH < 6.0) e Proibição da FDA',
            content: 'O Código Alimentar da FDA (Seção 4-101.14) proíbe o contato de cobre sem revestimento com alimentos com pH abaixo de 6.0. Molho de tomate (pH 4.0–4.3), vinho (pH 3.0–3.6) e vinagre (pH 2.4–2.8) extraem de 15 a 45 mg/kg de cobre em 30 minutos a 95°C, superando limites de toxicidade aguda.',
            type: 'danger',
            boxText: 'A FDA proíbe cobre não revestido para alimentos com pH < 6.0. Molhos ácidos dissolvem doses elevadas de cobre diretamente na comida.'
          },
          {
            title: '3. Envenenamento por Azinhavre: A Pátina Verde-Azulada Tóxica',
            content: 'Ao ser guardado úmido ou exposto a vapores ácidos, o cobre desenvolve azinhavre (carbonato e acetato básico de cobre). É altamente solúvel e biodisponível. Sua ingestão provoca náuseas, vômitos metálicos, cólicas abdominais fortes e diarreia em 15 a 45 minutos.',
            type: 'warning',
            boxText: 'O azinhavre é uma crosta tóxica e solúvel em água. Comer alimentos contaminados com azinhavre causa cólicas agudas e vômitos intensos.'
          },
          {
            title: '4. Revestimentos Protetores: Estanhagem Tradicional vs. Clad de Aço Inox 304',
            content: 'Panelas de cobre artesanais recebem banho de estanho 99.9% puro, que é inerte contra ácidos mas funde a 232°C. Se o cobre exposto passar do tamanho de uma moeda, a panela deve ser reestanhada. Panelas modernas com camada interna de aço inox 304 nunca precisam de reestanhagem e não derretem.',
            type: 'tip',
            boxText: 'O estanho protege o cobre mas funde a 232°C. Se o cobre exposto for maior que uma moeda, reestanhe ou use cobre revestido com aço inox 304.'
          },
          {
            title: '5. Exceções Culinárias Seguras: Geleias e Claras em Neve',
            content: 'O cobre nu é tradicionalmente seguro em dois casos: 1) Claras em neve: íons de cobre ligam-se à conalbumina estabilizando a espuma sem risco tóxico. 2) Geleias com alta concentração de açúcar (>60° Brix): a baixa atividade de água (aw < 0.80) impede a corrosão do metal durante a fervura.',
            type: 'fact',
            boxText: 'O cobre sem forro é tradicionalmente seguro para bater claras em neve e fazer geleias com alto teor de açúcar, onde a água livre é reduzida.'
          }
        ],
        conclusion: 'O cobre é uma ferramenta culinária nobre, mas exige cuidados estritos. Nunca cozinhe molhos ácidos em cobre sem revestimento, verifique o estado do estanho e remova qualquer mancha de azinhavre antes de cozinhar.',
        faqs: [
          {
            question: 'Por que a FDA proíbe cobre sem revestimento para alimentos com pH menor que 6.0?',
            answer: 'Porque ácidos em tomates, vinho, vinagre e frutas cítricas dissolvem os óxidos de cobre, gerando concentrações perigosas de íons cúpricos que causam náuseas, vômitos e intoxicação alimentar aguda.'
          },
          {
            question: 'O que é o azinhavre e qual a sua toxicidade?',
            answer: 'É uma crosta verde-azulada de carbonato e acetato de cobre formada pela umidade e ácidos do ar. É muito solúvel e tóxica, provocando cólicas severas e vômitos rápidos se ingerida.'
          },
          {
            question: 'Quando uma panela de cobre estanhada precisa ser reestanhada?',
            answer: 'Quando o desgaste revelar áreas de cobre nu maiores que uma moeda de 2 cm ou múltiplos riscos profundos, exigindo nova estanhagem antes do preparo de alimentos ácidos.'
          },
          {
            question: 'Por que claras em neve e geleias podem ser feitas em cobre sem revestimento?',
            answer: 'A proteína conalbumina das claras liga-se ao cobre estabilizando o merengue. Já nas geleias com muito açúcar, a baixa atividade de água impede a reação ácida com o cobre.'
          },
          {
            question: 'O cobre revestido com aço inoxidável é melhor que o estanhado?',
            answer: 'Sim, para a maioria dos cozinheiros. O interior em aço inox 304 não reage com ácidos, não derrete em fogo alto, resiste a talheres metálicos e nunca precisa de reestanhagem.'
          }
        ],
        relatedTools: [
          {
            name: 'Modelador de Toxicidade e Lixiviação em Panelas de Cobre',
            url: '/pt/tools/copper-cookware-toxicity-modeler/'
          },
          {
            name: 'Placar de Risco de Lixiviação Tóxica e PFAS',
            url: '/pt/tools/toxic-leaching-scorecard/'
          },
          {
            name: 'Calculadora de Troca Segura de Materiais',
            url: '/pt/tools/material-swap-calculator/'
          },
          {
            name: 'Consulta de Temperatura de Forno para Panelas',
            url: '/pt/tools/cookware-oven-temp-lookup/'
          }
        ]
      },
      {
        slug: 'melamine-dishes-microwave-dishwasher-formaldehyde-safety',
        title: 'Segurança da Louça de Melamina: Proibição em Micro-ondas, Lixiviação de Formaldeído, Alimentos Quentes e Limites do BfR',
        excerpt: 'É perigoso aquecer alimentos em pratos ou tigelas de melamina? Conheça a química das resinas de melamina-formaldeído, por que o micro-ondas é proibido, danos da lava-louças e normas do BfR.',
        date: wave40Date,
        readTime: '9 min de leitura',
        author: 'IsItKitchenSafe',
        intro: 'Pratos e tigelas de melamina são comuns em piqueniques e famílias por serem leves e inquebráveis. Fabricados a partir de resina termofixa de melamina-formaldeído, esses utensílios parecem cerâmica sólida. No entanto, o calor intenso e os ácidos quebram suas cadeias poliméricas, liberando gás formaldeído e monômeros de melamina diretamente na comida. Veja os limites de segurança da União Europeia (BfR) e da FDA.',
        sections: [
          {
            title: '1. Química das Resinas: Melamina-Formaldeído e Monômeros Residuais',
            content: 'A melamina é sintetizada com formaldeído sob alta temperatura. Embora reticulada, sobram monômeros livres na resina. Sob calor e umidade, as pontes do polímero sofrem hidrólise, liberando formaldeído volátil e melamina tóxica para os alimentos.',
            type: 'fact',
            boxText: 'Louças de melamina contêm formaldeído e melamina. Calor e acidez degradam o polímero e liberam substâncias químicas nos alimentos.'
          },
          {
            title: '2. Por Que o Micro-ondas É Estritamente Proibido: Ruptura Dielétrica',
            content: 'A melamina absorve diretamente a radiação micro-ondas a 2.45 GHz. O prato superaquece a mais de 140°C em segundos, formando bolhas, queimaduras superficiais e liberação maciça de gás formaldeído para os alimentos.',
            type: 'danger',
            boxText: 'Nunca use melamina no micro-ondas. Ela absorve a radiação, passa de 140°C em segundos e contamina a comida com formaldeído gasoso.'
          },
          {
            title: '3. Alimentos Ácidos e o Limite Crítico de 70°C do BfR Alemão',
            content: 'O Instituto Alemão de Avaliação de Risco (BfR) provou que a melamina é segura para comidas frias, mas verter líquidos acima de 70°C (sopas quentes, café, molho de tomate) dispara a lixiviação química, superando em até 300 vezes os limites europeus (15 mg/kg para formaldeído).',
            type: 'warning',
            boxText: 'O BfR comprovou que alimentos acima de 70°C em melamina liberam até 300 vezes o limite legal de formaldeído, especialmente com sopas ácidas.'
          },
          {
            title: '4. Lava-Louças e Hidrólise Alcalina: Desgaste do Esmalte',
            content: 'Ciclos quentes de lava-louças com detergentes alcalinos fortes (pH 11) desgastam a camada protetora da melamina. A superfície fica esbranquiçada e áspera, facilitando a proliferação bacteriana e a lixiviação tóxica. Descarte pratos opacos ou riscados.',
            type: 'warning',
            boxText: 'Água quente e detergentes de lava-louças desgastam o esmalte protetor. Descarte louças de melamina que fiquem ásperas, foscas ou riscadas.'
          },
          {
            title: '5. Alternativas Seguras para Famílias: Vidro Opalino, Silicone e Inox 304',
            content: 'Substitutos seguros incluem: 1) Vidro opalino temperado (Corelle): resistente a quedas, 100% inerte e seguro em micro-ondas. 2) Silicone cura platina: livre de BPA e formaldeído. 3) Aço inox 304: indestrutível e livre de químicos.',
            type: 'tip',
            boxText: 'Prefira vidro opalino temperado (Corelle), silicone platina ou aço inox 304 para refeições familiares com total segurança química.'
          }
        ],
        conclusion: 'A melamina serve para saladas frias e lanches secos, mas nunca deve ser levada ao micro-ondas ou usada para sopas pelando. Ao sinal de desgaste ou riscos, substitua por vidro temperado ou cerâmica.',
        faqs: [
          {
            question: 'Posso aquecer comida no micro-ondas em prato de melamina?',
            answer: 'Não. A melamina absorve as micro-ondas diretamente, superaquecendo a mais de 140°C e liberando vapores tóxicos de formaldeído e melamina na comida.'
          },
          {
            question: 'É seguro servir sopa quente em tigela de melamina?',
            answer: 'Não é recomendado pelo BfR alemão para alimentos acima de 70°C (158°F), pois a alta temperatura acelera a quebra química da resina.'
          },
          {
            question: 'Quais são os limites de migração do BfR e da FDA?',
            answer: 'A norma europeia UE 10/2011 limita a migração a 15 mg/kg para formaldeído e 2.5 mg/kg para melamina. A FDA estabelece limite de 0.063 mg/kg/dia.'
          },
          {
            question: 'Louças de melamina podem ir na máquina de lavar louça?',
            answer: 'Embora muitos rótulos permitam, lavagens quentes repetidas e sabão cáustico desgastam o esmalte. Quando o prato ficar fosco ou áspero, deve ser substituído.'
          },
          {
            question: 'Quais os riscos da ingestão crônica de formaldeído e melamina?',
            answer: 'O formaldeído é cancerígeno e irrita o sistema digestivo. A melamina acumula-se nos rins e pode formar cálculos urinários e causar insuficiência renal.'
          }
        ],
        relatedTools: [
          {
            name: 'Simulador de Lixiviação de Formaldeído em Melamina na Lava-Louças',
            url: '/pt/tools/dishwasher-melamine-leaching-simulator/'
          },
          {
            name: 'Modelador de Condensado de Ftalatos em Tampas de Micro-ondas',
            url: '/pt/tools/microwave-plastic-steam-cover-modeler/'
          },
          {
            name: 'Verificador de Lixiviação em Plásticos de Cozinha',
            url: '/pt/tools/kitchen-plastic-leaching-checker/'
          },
          {
            name: 'Decodificador de Símbolos de Cozinha e Códigos #1–#7',
            url: '/pt/tools/kitchen-symbol-decoder/'
          }
        ]
      },
      {
        slug: 'air-fryer-preheating-empty-teflon-fume-hazards',
        title: 'Pré-Aquecer a Air Fryer Vazia: Superaquecimento Radiante, Pirólise de PTFE a 240°C, Febre de Polímeros e Riscos a Aves',
        excerpt: 'Deve-se pré-aquecer a air fryer vazia? Entenda os picos de calor radiante sem umidade, a quebra do teflon a 240°C em 4 minutos, febre dos polímeros e perigo mortal para pássaros.',
        date: wave40Date,
        readTime: '9 min de leitura',
        author: 'IsItKitchenSafe',
        intro: 'Muitas receitas mandam pré-aquecer a air fryer vazia por 3 a 5 minutos. Porém, em cestos com revestimento antiaderente de teflon (PTFE), isso gera superaquecimento radiante extremo. Sem comida para absorver calor pela evaporação de água, o metal do cesto ultrapassa 240°C–270°C em 4 minutos, iniciando a pirólise do teflon e emitindo nanopartículas e gases tóxicos fulminantes para aves de estimação. Veja a física do calor, a toxicologia do PTFE e como operar com segurança.',
        sections: [
          {
            title: '1. Termodinâmica do Calor: Convecção Forçada vs. Radiação Infravermelha',
            content: 'A serpentina incandescente a 500°C–700°C fica a apenas 3–5 cm do cesto. Com comida, a evaporação da água consome calor latente (2.260 kJ/kg), mantendo o cesto abaixo de 180°C. Com o cesto vazio, esse amortecedor térmico desaparece.',
            type: 'fact',
            boxText: 'A umidade da comida absorve calor e mantém o cesto seguro abaixo de 180°C. Vazio, o cesto aquece de forma descontrolada.'
          },
          {
            title: '2. O Pico Térmico a Seco: Passando de 240°C em Menos de 4 Minutos',
            content: 'Ao pré-aquecer a 200°C no painel, o cesto preto fosco absorve intensa radiação infravermelha, atingindo 240°C–270°C em 3 a 4 minutos, superando o limite térmico contínuo do PTFE (260°C).',
            type: 'danger',
            boxText: 'O pré-aquecimento a seco faz pontos do cesto ultrapassarem 250°C em 4 minutos, iniciando a quebra rápida do revestimento antiaderente.'
          },
          {
            title: '3. Pirólise do Teflon: Partículas Ultrafinas (UFP) e Gases Fluorados',
            content: 'O PTFE inicia degradação submicroscópica a 200°C. Entre 230°C e 260°C emite densas nuvens de partículas ultrafinas (<100 nm). Acima de 260°C, a pirólise libera fluoreto de carbonila e ácido trifluoroacético.',
            type: 'warning',
            boxText: 'Acima de 230°C o teflon emite milhões de partículas ultrafinas respiráveis. Acima de 260°C, ocorrem emissões de gases fluorados corrosivos.'
          },
          {
            title: '4. Letalidade para Aves: Por Que Pássaros Morrem em Minutos',
            content: 'Aves têm sacos aéreos e membrana respiratória três vezes mais fina que os mamíferos. A inalação de traços de fumaça de teflon causa hemorragia pulmonar aguda e asfixia em calopsitas e canários em 15 a 30 minutos.',
            type: 'warning',
            boxText: 'Pássaros têm pulmões ultrassensíveis aos vapores de teflon. Fumaça de air fryer superaquecida mata aves por asfixia em 15 a 30 minutos.'
          },
          {
            title: '5. Práticas Seguras e Cestos Livres de Tóxicos (Inox 304, Cerâmica, Vidro)',
            content: 'Dicas práticas: 1) Não pré-aqueça vazio: a air fryer esquenta em 90 segundos com o alimento dentro. 2) Nunca pré-aqueça com papel manteiga solto (risco de fogo na serpentina). 3) Escolha cestos de aço inox 304 ou cerâmica mineral.',
            type: 'tip',
            boxText: 'Não pré-aqueça a air fryer vazia. Coloque o alimento desde o início ou adote cestos de aço inox 304 ou cerâmica mineral sem teflon.'
          }
        ],
        conclusion: 'Pré-aquecer a air fryer vazia com cesto de teflon é arriscado e desnecessário. Coloque o alimento desde o início para absorver o calor radiante ou opte por cestos de inox para total tranquilidade.',
        faqs: [
          {
            question: 'Fabricantes recomendam pré-aquecer a air fryer vazia?',
            answer: 'Embora alguns manuais mencionem pré-aquecer, engenheiros de materiais desaconselham com cestos de teflon vazios, pois a temperatura sobe rápido demais e degrada o revestimento.'
          },
          {
            question: 'A que temperatura o teflon da air fryer começa a se degradar?',
            answer: 'A degradação submicroscópica inicia-se a 200°C (392°F). Emissões fortes de partículas ocorrem a partir de 230°C e quebra ativa com gases perigosos acima de 260°C.'
          },
          {
            question: 'Por que pássaros de estimação são tão sensíveis à fumaça de teflon?',
            answer: 'Seu sistema respiratório é extremamente eficiente e suas paredes capilares são muito finas. Qualquer traço de fumaça fluorada causa hemorragia pulmonar fatal em minutos.'
          },
          {
            question: 'O que é a febre dos polímeros ("gripe do teflon") em humanos?',
            answer: 'É uma reação aguda temporária por inalação de vapores de teflon superaquecido, com febre, calafrios, tosse seca e dor de cabeça que surgem de 4 a 8 horas após a exposição.'
          },
          {
            question: 'Pode-se usar papel manteiga durante o pré-aquecimento?',
            answer: 'Nunca sem alimento em cima. O fluxo de ar forte vai sugar o papel solto contra a resistência incandescente a 600°C, causando fogo instantâneo.'
          }
        ],
        relatedTools: [
          {
            name: 'Modelador de Degradação de Cestos de Teflon em Air Fryers',
            url: '/pt/tools/air-fryer-teflon-fluoropolymer-modeler/'
          },
          {
            name: 'Simulador de Risco de Fogo por Forros em Air Fryer',
            url: '/pt/tools/air-fryer-liner-fire-hazard-simulator/'
          },
          {
            name: 'Inspetor de Danos e Arranhões em Panelas com IA',
            url: '/pt/tools/pan-scratch-inspector/'
          },
          {
            name: 'Conversor de Air Fryer, Forno e Gas Mark',
            url: '/pt/tools/air-fryer-oven-converter/'
          }
        ]
      }
    ];
  }

  if (lang === 'zh-cn') {
    return [
      {
        slug: 'copper-cookware-acidic-food-verdigris-toxicity',
        title: '铜锅烹饪与酸性食物螯合溶出：铜绿毒性（pH < 6）、裸铜健康风险与镀锡/不锈钢复合衬里科学指南',
        excerpt: '用纯铜锅炖番茄牛腩或加红酒脱凝安全吗？深度解析铜离子螯合溶出动力学、剧毒铜绿中毒机理、FDA 21 CFR 针对 pH < 6.0 酸性食物的绝对禁令及挂锡翻新安全红线。',
        date: wave40Date,
        readTime: '9 分钟阅读',
        author: 'IsItKitchenSafe',
        intro: '纯铜锅具因其卓越的导热系数（398 W/m·K，是不锈钢的20倍、铝的2倍）被专业法餐大厨与美食爱好者奉为顶级厨具，能实现即时控温且完全杜绝局部热点。然而，单质金属铜在电化学上具有极高反应活性。当裸铜与番茄、红酒、柠檬或食醋等酸性食物接触时，金属铜会发生急剧的酸性氧化溶解。在潮湿环境下，裸铜表面更极易生成含碱式碳酸铜与乙酸铜的剧毒铜绿。本文深度剖析铜离子溶出动力学、急性铜中毒机理、FDA 食品安全法规及挂锡铜锅的日常安全养护。',
        sections: [
          {
            title: '1. 冶金学与热力学：无与伦比的导热性 vs 电化学高反应活性',
            content: '铜位于元素周期表第11族，具有极高的导电导热性能。但与贵金属不同，铜在空气、水分与受热条件下极易氧化生成氧化亚铜与氧化铜。氧化铜皮膜极薄，在遇到低pH烹饪有机酸时完全丧失化学抗蚀能力，在溶解氧与氢离子攻击下快速溶解为剧毒的可溶性二价铜离子（2Cu + O2 + 4H+ → 2Cu2+ + 2H2O）。',
            type: 'fact',
            boxText: '铜导热极快但化学性质活泼。在氧气与高温下，烹饪有机酸会迅速溶解表面氧化层并析出高浓度游离铜离子。'
          },
          {
            title: '2. 酸性螯合溶出动力学（pH < 6.0）与美国 FDA 严令禁令',
            content: '美国 FDA 食品法典（第 4-101.14 节）与依规指南明确禁止未经涂层的裸铜、黄铜或青铜直接接触 pH < 6.0 的食物。日常食材如番茄意面酱（pH 4.0–4.3）、红白葡萄酒（pH 3.0–3.6）、香醋（pH 2.4–2.8）及柠檬汁（pH 2.0–2.4）均远超此限。在95°C下炖煮番茄酱30分钟，裸铜溶出速率高达15–45 mg/kg，一顿饭即远超人体急性中毒耐受上限。',
            type: 'danger',
            boxText: '美国 FDA 严禁无衬里裸铜烹饪 pH < 6.0 的食物。在裸铜锅中炖煮番茄、酒类或食醋会导致铜离子严重超标溶出。'
          },
          {
            title: '3. 铜绿中毒：蓝绿色粉末状剧毒结晶',
            content: '铜锅受潮或接触空气中的醋酸及二氧化碳时，表面会生成一层淡蓝绿色的粉末状结晶，即“铜绿”（碱式碳酸铜与碱式乙酸铜）。铜绿易溶于水且生物利用度极高，误食可在15至45分钟内引发剧烈胃肠黏膜刺激，表现为急性恶心、金属味呕吐物、剧烈腹绞痛和水样腹泻；严重吸收可诱发溶血与急性肝细胞坏死。',
            type: 'warning',
            boxText: '铜绿是受潮铜器析出的剧毒水溶性结晶。误食沾染铜绿的食物会引发急性剧烈呕吐、胃肠绞痛与肝损伤。'
          },
          {
            title: '4. 安全防护衬层：纯锡手工挂锡 vs 304食品级不锈钢复合',
            content: '传统法式铜锅内壁采用99.9%食品级纯锡手工刮擦挂锡隔离，锡在低至pH 2.0的酸性环境下依然惰性稳定。但锡熔点极低（仅232°C / 450°F），干烧极易熔化脱锡。若锅内裸铜磨损露铜面积超过一角硬币大小，必须重新翻新挂锡。现代多层复合铜锅内壁采用0.2毫米304不锈钢永久压合，彻底杜绝熔化与露铜隐患。',
            type: 'tip',
            boxText: '锡涂层可隔绝铜毒但熔点仅232°C。露铜超过硬币大小需重新挂锡，亦可选用免维护的304不锈钢内胆复合铜锅。'
          },
          {
            title: '5. 经典烹饪安全特例：果酱熬制与法式打发蛋白',
            content: '传统西点中有两项裸铜安全特例：1）打发蛋白霜：微量铜离子能与蛋白中的伴白蛋白结合成极其稳定的惰性配合物，防止打发过度并使蛋白霜坚挺有光泽。2）高糖水果果酱熬制：在110°C–120°C熬糖时，极高的糖分浓度（>60° Brix）大幅降低了游离水活度（aw < 0.80），极大抑制了酸解铜离子的迁移。',
            type: 'fact',
            boxText: '裸铜传统上安全用于打发蛋白霜（蛋白配合物稳定气泡）与超高糖度熬果酱，低水活度抑制了酸性溶出反应。'
          }
        ],
        conclusion: '铜锅是顶级烹饪利器，但必须严格遵循材料科学。严禁用无涂层裸铜烹调番茄、红酒、醋或柠檬等酸性菜肴；定期检查挂锡层磨损状况，及时清除蓝绿色铜绿锈斑。选择现代304不锈钢内胆铜锅可免去挂锡维护，安心享受顶级导热控温。',
        faqs: [
          {
            question: '为什么美国 FDA 严禁裸铜接触 pH < 6.0 的食物？',
            answer: '因为酸性食物中的有机酸（番茄、柠檬、醋、酒等）会瞬间剥除铜表面的氧化保护层，促使大量金属铜快速溶出为游离二价铜离子，极易引发人体急性铜中毒、剧烈恶心和呕吐。'
          },
          {
            question: '什么是铜绿？误食后毒性有多大？',
            answer: '铜绿是铜在空气中与水分、二氧化碳及有机酸反应生成的碱式碳酸铜与碱式乙酸铜，呈蓝绿色粉末状。它极易溶于胃酸被人体吸收，摄入微量即可在短时间内引起严重胃部痉挛、呕吐及腹泻。'
          },
          {
            question: '挂锡铜锅磨损到什么程度必须重新挂锡？',
            answer: '行业公认的安全标准是：如果锅底露出的裸铜斑块面积超过一枚一角硬币大小（约2厘米直径），或者布满多条深划痕，必须立即送去重新挂锡，否则不可继续烹饪酸性食物。'
          },
          {
            question: '为什么可以用纯铜碗打发蛋白和熬制高糖果酱？',
            answer: '鸡蛋清中的伴白蛋白能主动捕获微量铜离子形成无毒的强化结构，延缓消泡；而熬制果酱时由于高糖度使自由水活度降至极低，阻断了酸性离子对金属铜的浸出腐蚀。'
          },
          {
            question: '不锈钢复合铜锅是否比传统挂锡铜锅更好？',
            answer: '对绝大多数家庭厨师而言是的。304不锈钢内壁永不氧化锈蚀、可抵御金属铲刮擦、干烧不熔化且终身无需翻新挂锡，同时能传承纯铜锅90%以上的极速导热性能。'
          }
        ],
        relatedTools: [
          {
            name: '铜制厨具重金属毒性与酸性食物溶出模拟器',
            url: '/zh-cn/tools/copper-cookware-toxicity-modeler/'
          },
          {
            name: '厨房器皿有害物质溶出与 PFAS 风险评分卡',
            url: '/zh-cn/tools/toxic-leaching-scorecard/'
          },
          {
            name: '安全厨具材料替代换算计算器',
            url: '/zh-cn/tools/material-swap-calculator/'
          },
          {
            name: '锅具烤箱安全耐热温度速查器',
            url: '/zh-cn/tools/cookware-oven-temp-lookup/'
          }
        ]
      },
      {
        slug: 'melamine-dishes-microwave-dishwasher-formaldehyde-safety',
        title: '密胺餐具与仿瓷碗安全指南：微波炉加热禁令、甲醛与三聚氰胺高温溶出机理及德国 BfR 安全限值',
        excerpt: '用仿瓷密胺碗加热剩菜或喝热汤安全吗？深度解析密胺-甲醛树脂化学特性、微波诱发介电击穿机理、洗碗机高温碱蚀老化及德国联邦风险评估研究所（BfR）迁移安全限值。',
        date: wave40Date,
        readTime: '9 分钟阅读',
        author: 'IsItKitchenSafe',
        intro: '密胺餐具（仿瓷餐具）因其质地轻盈、色彩丰富且防摔耐磨，广泛应用于家庭、户外野餐及快餐厅。密胺餐具本质上属于三聚氰胺-甲醛热固性高分子聚合物，手感宛如陶瓷。然而，维系该树脂交联网络的高分子化学键在高温与酸性介质下极不稳定。将密胺餐具送入微波炉、盛装滚烫热汤或经历洗碗机强碱冲洗，会导致聚合物链水解断裂，向食物中持续析出游离甲醛气体与三聚氰胺单体。本文解读密胺材料毒理学、欧洲 BfR 与美国 FDA 安全红线。',
        sections: [
          {
            title: '1. 树脂化学：三聚氰胺-甲醛聚缩合与游离残存单体',
            content: '密胺餐具由三聚氰胺与甲醛在高温高压下缩聚固化成三维网状热固性树脂。工业固化反应无法达到100%完全聚合，成品塑料基质内部总会残存未反应的游离甲醛与三聚氰胺单体分子。一旦接触高温液体与烹饪弱酸，树脂中的醚键与次甲基桥键会迅速发生水解裂解，将毒性单体持续释放到食物中。',
            type: 'fact',
            boxText: '密胺餐具由甲醛与三聚氰胺聚合成型。高温与酸性环境会裂解树脂化学键，向食物中释放游离甲醛与三聚氰胺。'
          },
          {
            title: '2. 为什么微波炉加热密胺餐具被绝对严禁：介电击穿与暴沸焦化',
            content: '美国 FDA 与欧盟食品安全局严禁将密胺餐具放入微波炉。不同于聚丙烯（PP）或耐热玻璃，密胺树脂本身是强极性介质材料，会直接强烈吸收 2.45 GHz 的微波辐射能量产生内部剧烈分子摩擦。密胺餐具在短短几十秒内自身温度飙升至 140°C–160°C 以上，导致材质起泡、焦化糊底并剧烈喷放气态甲醛废气。',
            type: 'danger',
            boxText: '绝对不可将密胺餐具放入微波炉加热！密胺会直接吸收微波急剧升温至140°C以上，发生焦化分解并向食物挥发剧毒甲醛气体。'
          },
          {
            title: '3. 酸性食物与德国 BfR 70°C 迁移临界阈值',
            content: '德国联邦风险评估研究所（BfR 第 046/2019 号评估意见）对密胺及竹纤维密胺餐具进行了长期浸出测试：盛装冷食或常温沙拉无毒害风险，但一旦盛装超过 70°C（158°F）的热液（如热鸡汤、热燕麦粥、热咖啡或番茄汤），化学迁移量呈指数级暴增。欧盟法规规定甲醛特定迁移限值（SML）为 15 mg/kg。在 100°C 酸性浸出试验中，部分密胺餐具甲醛析出量超标达 300 倍。',
            type: 'warning',
            boxText: '德国 BfR 科学实验证实：用密胺碗盛放超过 70°C 的热食物或热汤，甲醛溶出量超标可达欧洲法定上限的 300 倍。'
          },
          {
            title: '4. 洗碗机高温消毒与强碱水解腐蚀：保护釉层老化脱落',
            content: '洗碗机高温消毒（>65°C）配合高碱性洗碗块（pH 11.0–12.0），会加速密胺表面的碱性水解腐蚀。经多次机洗后，密胺原本光洁的保护釉层逐步剥蚀，表面变得发白、暗哑且粗糙粉化。这些微孔易积聚食物残渣与油垢，且金属刀叉划痕更会呈倍数放大有害物质的析出。',
            type: 'warning',
            boxText: '洗碗机高温热水与强碱洗涤剂会腐蚀剥蚀密胺保护釉。表面发白暗哑、手感粗糙或有明显刀痕的密胺碗必须立即停用淘汰。'
          },
          {
            title: '5. 家庭与儿童餐具的安全无毒替代方案',
            content: '针对儿童与防摔需求，可选用以下安全认证材质：1）钢化乳白玻璃（如康宁 Corelle）：轻薄耐摔、表面致密零孔隙、耐微波且耐高温机洗。2）食品级铂金硫化硅胶：耐温可达 220°C，完全不含甲醛、BPA 与塑化剂。3）304 食品级不锈钢：坚固耐摔、无任何化学溶出隐患（不可入微波炉）。',
            type: 'tip',
            boxText: '建议家庭将密胺餐具升级替换为钢化乳白玻璃（康宁）、食品级铂金硅胶或304食品级不锈钢餐具，彻底告别甲醛毒素威胁。'
          }
        ],
        conclusion: '密胺餐具仅适合盛装凉拌菜、三明治或常温水果，绝不可用于微波炉加热，也不可盛装滚烫热汤或酸性高热菜肴。一旦表面出现发白、发涩或刀划痕迹，应立即淘汰换新。微波与高温烹调请始终依赖耐热玻璃、高瓷或纯不锈钢器皿。',
        faqs: [
          {
            question: '我可以用密胺碗放进微波炉里热菜吗？',
            answer: '绝对不可以。密胺树脂会直接吸收微波高频辐射而在数十秒内超温自热至140°C以上，造成餐具起泡碳化，向菜品中释放高浓度甲醛气体与三聚氰胺化学分子。'
          },
          {
            question: '用仿瓷密胺碗盛热汤喝安全吗？',
            answer: '德国 BfR 明确建议不要用密胺碗盛装超过 70°C 的食物或热汤。刚出锅的热鸡汤或酸辣汤会破坏密胺高分子结构，引发甲醛溶出量严重超标。'
          },
          {
            question: '欧盟 BfR 与美国 FDA 对密胺甲醛迁移量有何限值？',
            answer: '欧盟 EU 10/2011 法规规定甲醛特定迁移上限（SML）为 15 mg/kg，三聚氰胺为 2.5 mg/kg。美国 FDA 规定的三聚氰胺每日耐受摄入量为每公斤体重 0.063 mg。'
          },
          {
            question: '仿瓷密胺餐具可以放进洗碗机清洗吗？',
            answer: '虽然标有耐机洗，但洗碗机高温冲洗（>65°C）与强碱洗涤剂会逐步水解侵蚀保护光泽层。一旦餐具表面发乌、泛白或变粗糙，有害物质溶出会大幅加剧，必须更换。'
          },
          {
            question: '长期微量摄入甲醛与三聚氰胺会对人体造成什么健康危害？',
            answer: '甲醛为世界卫生组织确定的一类致癌物，长期摄入损伤胃肠道黏膜并增加消化系统癌变风险；三聚氰胺通过肾脏代谢，与体内物质结合易形成肾结石与尿道结石，诱发肾功能衰竭。'
          }
        ],
        relatedTools: [
          {
            name: '洗碗机密胺餐具甲醛与氰尿酸溶出模拟器',
            url: '/zh-cn/tools/dishwasher-melamine-leaching-simulator/'
          },
          {
            name: '微波炉塑料加热防溅盖邻苯二甲酸酯冷凝回流模拟器',
            url: '/zh-cn/tools/microwave-plastic-steam-cover-modeler/'
          },
          {
            name: '厨房塑料高温溶出与热食安全容器查询器',
            url: '/zh-cn/tools/kitchen-plastic-leaching-checker/'
          },
          {
            name: '厨具底部安全标志识别器与塑料代码 #1–#7',
            url: '/zh-cn/tools/kitchen-symbol-decoder/'
          }
        ]
      },
      {
        slug: 'air-fryer-preheating-empty-teflon-fume-hazards',
        title: '空气炸锅空炸预热健康隐患：无食材辐射过热超温（>240°C）、特氟龙热解毒气、聚合物烟雾热与宠物鸟致命性解析',
        excerpt: '空气炸锅烹饪前到底需要空锅预热吗？深入剖析空腔无水分吸热下的红外辐射剧烈升温效应、特氟龙涂层在 240°C 下 4 分钟快速热解动力学、特氟龙流感及对宠物鸟的致命性呼吸毒害。',
        date: wave40Date,
        readTime: '9 分钟阅读',
        author: 'IsItKitchenSafe',
        intro: '空气炸锅凭借高速热风对流技术，能以传统烤箱一半的时间烤出外酥里嫩的美食。不少食谱与网络视频常建议“先将空气炸锅空锅高温预热 3 到 5 分钟”。然而，在配有传统聚四氟乙烯（PTFE / 特氟龙）涂层炸篮的空气炸锅中进行空炸预热，潜藏着极大的材料热力学风险。在完全没有食材水分通过蒸发吸热缓冲的情况下，炸篮局部表面温度可在 4 分钟内突破 240°C–270°C，引发特氟龙涂层严重热解脱气，释放超细纳米颗粒与氟化物有毒气体，更对室内宠物鸟构成致命杀伤力。本文深度剖析热力学热流机理、涂层降解毒理学与无害炸锅材质。',
        sections: [
          {
            title: '1. 热力学热流：强制对流剪切 vs 裸露发热管的极限红外辐射',
            content: '空气炸锅由 1,500–2,000 瓦的大功率发热管与高速离心风机驱动。炽热的发热管温度高达 500°C–700°C，悬挂在距离炸篮仅 3–5 厘米的正上方。有食物时，食材内部水分剧烈蒸发吸收大量汽化潜热（2,260 kJ/kg），充当了天然的恒温保护阀，将炸篮表面牢牢锚定在 180°C 安全温度以内。而一旦炸篮排空，这一散热缓冲机制彻底消失。',
            type: 'fact',
            boxText: '食材水分汽化吸收大量热量，保护炸篮温度低于 180°C。空锅预热时完全失去此冷却缓冲，涂层温度急剧失控。'
          },
          {
            title: '2. 干燥空炸温度飙升：4 分钟内冲破 240°C–270°C 危险红线',
            content: '当设置 200°C 空烧预热时，高速热风不断循环，正上方的红外发热管对黑色磨砂涂层炸篮进行无阻挡辐射。由于黑色表面具有极高的热辐射吸收率（ε ≈ 0.95），热电偶实测显示炸篮底部在短短 3.5 到 5 分钟内即突破 240°C–270°C（464°F–518°F），严重超越了特氟龙聚合物（PTFE）安全耐受上限。',
            type: 'danger',
            boxText: '空炸预热使炸篮吸收极强红外辐射，局部温度可在 4 分钟内飙升至 250°C 以上，瞬间触发特氟龙高分子涂层的热解破裂。'
          },
          {
            title: '3. 特氟龙热解机理：超细纳米颗粒（UFP）与剧毒含氟气体释放',
            content: 'PTFE 涂层在 200°C 起即发生亚微观的热解分解；升至 230°C–260°C 时，碳氟主链发生断裂，向室内空气喷射高密度的超细纳米颗粒（UFP，粒径 <100 纳米，浓度超 10 万颗/cm³）；超过 260°C 时发生剧烈化学热解，释放全氟异丁烯（PFIB，毒性为光气的 10 倍）、氟化羰（COF2，遇水水解为氢氟酸）和三氟乙酸（TFA）。',
            type: 'warning',
            boxText: '超过 230°C 时，特氟龙向空气喷发大量可吸入纳米塑料颗粒；超过 260°C 时，热解释放剧毒含氟腐蚀性酸气。'
          },
          {
            title: '4. 宠物鸟的致命呼吸危机：为什么鸟类会在数十分钟内窒息死亡',
            content: '特氟龙过热废气对室内家养宠物鸟（鹦鹉、玄凤、金丝雀）具有毁灭性剧毒。鸟类拥有特有的九大单向气囊呼吸系统，血气交换毛细血管壁厚度仅为人类的三分之一。吸入即便十亿分之一（ppb）浓度的含氟热解超细微粒，就会在 15 至 30 分钟内引发鸟类急性肺水肿、广泛性肺泡大出血与急性窒息致死，而此时处于同一房间的人类往往毫无察觉。',
            type: 'warning',
            boxText: '鸟类呼吸系统极薄且高度通透。空气炸锅特氟龙过热烟雾会在 15 至 30 分钟内导致鹦鹉和金丝雀肺泡出血窒息死亡。'
          },
          {
            title: '5. 正确使用规范与无毒替代炸篮（304 不锈钢、矿物陶瓷、高硼硅玻璃）',
            content: '确保健康安全的烹饪方式包括：1）无需空锅预热：现代空气炸锅加入食材后升温极快，空烧预热既浪费电又损伤涂层。2）切勿空锅放烘焙纸预热：无重物压实的高温对流涡流会将烘焙纸吸附至发热管，瞬间引燃厨房火灾。3）升级选购无涂层炸锅：如食品级 304 不锈钢网篮、完全不含 PFAS 的矿物溶胶陶瓷炸篮或全景高硼硅耐热玻璃抽屉。',
            type: 'tip',
            boxText: '严禁空锅预热空气炸锅。放入食材即开即烤；或选用无涂层 304 不锈钢或矿物陶瓷炸篮，享受持久无毒的酥脆美食。'
          }
        ],
        conclusion: '空锅高温预热配有特氟龙涂层的空气炸锅毫无必要且风险巨大，极易引发涂层加速老化脱漆、室内纳米颗粒超标及对宠物鸟的致命毒害。建议广大用户食材随装随烤，保持厨房油烟机通风，或直接换用不锈钢与陶瓷内胆空气炸锅。',
        faqs: [
          {
            question: '空气炸锅说明书上写着需要预热，到底该不该预热？',
            answer: '材料工程专家强烈建议：如果使用的是特氟龙不粘涂层炸篮，切勿空锅预热。放入食材后空气炸锅升温极快（90秒内达标），空炸预热只会让局部金属超温剥落涂层并释放毒气。'
          },
          {
            question: '空气炸锅不粘涂层在多少度开始分解？',
            answer: '特氟龙（PTFE）在约 200°C（392°F）即开始亚微观缓慢热分解；230°C–260°C 释放大量可吸入超细微粒（<100 nm）；超过 260°C（500°F）后发生快速热解，释放氟化羰等有毒酸气。'
          },
          {
            question: '为什么宠物鸟对空气炸锅烟雾如此敏感？',
            answer: '鸟类的呼吸系统由单向循环气囊组成，肺毛细血管极薄，气体吸收率数倍于哺乳动物。极微量特氟龙分解气溶胶就会使鸟类肺部发生急性充血和水肿，常在半小时内暴毙。'
          },
          {
            question: '什么是特氟龙流感（聚合物烟雾热）？',
            answer: '聚合物烟雾热是人类吸入过热分解的特氟龙气溶胶后引发的一种急性类似重感冒的综合征，常在暴露后4到8小时发作，表现为胸闷、寒战、发热、头痛、咳嗽和关节酸痛，通常在24到48小时后逐渐缓解。'
          },
          {
            question: '预热时可以在空气炸锅里提前铺烘焙纸吗？',
            answer: '绝对不行。没有食物压重的烘焙纸会被每分钟3000转的高速狂风直接卷吸到顶部 600°C 炽热的发热管上，引发明火点燃，瞬间造成厨房火灾。'
          }
        ],
        relatedTools: [
          {
            name: '空气炸锅特氟龙涂层热解脱落与微羽流挥发动力学模拟器',
            url: '/zh-cn/tools/air-fryer-teflon-fluoropolymer-modeler/'
          },
          {
            name: '空气炸锅垫纸气流阻隔与发热管起火模拟器',
            url: '/zh-cn/tools/air-fryer-liner-fire-hazard-simulator/'
          },
          {
            name: 'AI 锅具划痕磨损与不粘涂层安全检测器',
            url: '/zh-cn/tools/pan-scratch-inspector/'
          },
          {
            name: '空气炸锅、对流烤箱与燃气档位换算器',
            url: '/zh-cn/tools/air-fryer-oven-converter/'
          }
        ]
      }
    ];
  }

  if (lang === 'ja') {
    return [
      {
        slug: 'copper-cookware-acidic-food-verdigris-toxicity',
        title: '銅鍋・銅製調理器具の酸性食品キレート溶出：緑青（ろくしょう）の毒性（pH < 6）、無垢銅の健康リスク＆錫引き・ステンレス多層の科学',
        excerpt: '銅鍋でトマトソースやワイン煮込みを作るのは危険？銅イオンのキレート溶出動力学、緑青（塩基性炭酸銅）の毒性、FDAによるpH 6.0未満の禁止規定、錫引き（焼き付け）の補修基準を材料科学で徹底解説。',
        date: wave40Date,
        readTime: '9 分で読める',
        author: 'IsItKitchenSafe',
        intro: '銅製調理器具は、ステンレス鋼の20倍、アルミニウムの2倍におよぶ圧倒的な熱伝導率（398 W/m·K）を誇り、一流シェフや菓子職人から最高峰の鍋として愛用されています。しかし、単体金属の銅は電気化学的に極めて活性です。トマト、柑橘類、ワイン、食酢などの酸性食品と接触すると、銅イオンが急激に溶出します。さらに湿気によって生じる青緑色の錆「緑青（ろくしょう）」は水溶性で強い毒性を持ちます。本稿では、銅の酸キレート溶解、急性銅中毒リスク、米FDAの安全基準および内面コーティングの正しい保守法を解説します。',
        sections: [
          {
            title: '1. 金属工学と熱力学：驚異の熱応答性 vs 高い電気化学的反応性',
            content: '銅は周期表第11族に属し、銀や金と並ぶ最高水準の熱伝導率を有します。しかし貴金属とは異なり、熱と湿気によって容易に酸化銅（Cu2OおよびCuO）の被膜を形成します。この極薄酸化被膜は中性環境では安定ですが、酸性食品に晒されると溶解酸素の存在下で容易に破壊され、可溶性の銅イオン（Cu2+）として食品中へ溶出します（2Cu + O2 + 4H+ → 2Cu2+ + 2H2O）。',
            type: 'fact',
            boxText: '銅は熱伝導率が極めて高い反面、酸化しやすい金属です。酸性食品と酸素の存在下で、銅酸化物は速やかにイオン化して溶出します。'
          },
          {
            title: '2. 酸性キレート溶解動力学（pH < 6.0）と米FDAの明確な禁止規定',
            content: '米食品医薬品局（FDA）のフードコード（第4-101.14条）では、pH 6.0未満の酸性食品が内面未処理の銅、真鍮、青銅と直接接触することを厳格に禁止しています。トマトソース（pH 4.0–4.3）、ワイン（pH 3.0–3.6）、酢（pH 2.4–2.8）を無垢の銅鍋で95℃・30分間煮込むと、食品1kgあたり15〜45mg以上の銅が溶出し、急性中毒基準を容易に超過します。',
            type: 'danger',
            boxText: '米FDAはpH 6.0未満の酸性食品に無垢の銅鍋を使用することを禁止しています。トマトやワインを裸の銅で煮ると危険な量の銅が溶出します。'
          },
          {
            title: '3. 緑青（ろくしょう）中毒：青緑色の粉末状有毒結晶',
            content: '銅鍋が湿った状態で放置されたり酸性蒸気に触れると、表面に「緑青」（塩基性炭酸銅および塩基性酢酸銅）と呼ばれる青緑色の錆が発生します。緑青は水溶性で生体吸収率が高く、摂取後15〜45分以内に激しい消化器刺激を引き起こし、緑色の嘔吐、激しい腹痛、水様性下痢を誘発します。大量摂取は溶血や肝不全の原因となります。',
            type: 'warning',
            boxText: '緑青は水に溶けやすく体内に吸収されやすい有毒物質です。緑青が付着した食品を摂取すると、激しい嘔吐や胃痙攣、肝機能障害を引き起こします。'
          },
          {
            title: '4. 安全な保護内面：伝統的な錫（すず）引き vs 304ステンレス多層クラッド',
            content: '銅の毒性溶出を防ぐため、伝統的な銅鍋の内面には99.9%の純錫が手作業で焼き付けられています。錫は酸に強いですが、融点がわずか232℃（450°F）と低く、空焚きすると数秒で融解します。錫が摩耗して一円玉以上の大きさの銅が露出した場合は、再錫引きが必要です。現代の高級多層銅鍋は内面に304ステンレス（0.2mm）を圧着しており、融解の心配がなく再錫引きも不要です。',
            type: 'tip',
            boxText: '内面の錫は酸を守りますが232℃で溶けます。銅の露出が一円玉大を超えたら再錫引きが必要です。メンテ不要のステンレス内面銅鍋も推奨されます。'
          },
          {
            title: '5. 伝統的な安全調理の例外：メレンゲの泡立て＆高糖度ジャム',
            content: '伝統的フランス料理において裸の無垢銅鍋が安全かつ推奨される2つの例外：1）卵白の泡立て（メレンゲ）：微量の銅イオンが卵白のコンアルブミン（オボトランスフェリン）と結合して強固な複合体を形成し、泡立ちを安定化させます。2）高糖度フルーツジャム作り：砂糖が60%以上の高濃度では自由水の活性（aw < 0.80）が極端に低下し、銅が酸によってイオン化溶出する反応が阻害されます。',
            type: 'fact',
            boxText: 'メレンゲの泡立て（タンパク質結合）と高糖度のジャム作りでは、水分活性が低いため裸の銅鍋を伝統的に安全に使用できます。'
          }
        ],
        conclusion: '銅鍋は卓越した熱伝導率を持つ一生モノの調理器具ですが、正しい材料知識が不可欠です。無垢の裸銅でトマトやワインなどの酸性料理を煮込むことは絶対に避け、錫引きの摩耗や青緑色の緑青をこまめに点検してください。日常使いには再錫引き不要のステンレス内面複合銅鍋が最も安心です。',
        faqs: [
          {
            question: 'なぜ米FDAはpH 6.0未満の食品に無垢の銅鍋を禁止しているのですか？',
            answer: 'トマト、酢、ワイン、レモンなどの有機酸が銅の酸化皮膜を破壊し、高濃度の二価銅イオンが急速に溶出するためです。これを摂取すると急性胃腸炎、激しい吐き気、嘔吐を引き起こします。'
          },
          {
            question: '緑青（ろくしょう）とは何ですか？食べるとどんな毒性がありますか？',
            answer: '緑青は銅が空気中の湿気や二酸化炭素・有機酸と反応して生じる青緑色の錆（塩基性炭酸銅など）です。水溶性で体内に吸収されやすく、誤食すると激しい腹部疝痛や緑色嘔吐、下痢を引き起こします。'
          },
          {
            question: '錫引き銅鍋はどの程度摩耗したら再錫引きに出すべきですか？',
            answer: '鍋底の内側に露出した銅の面積が一円硬貨（直径約2cm）以上の大きさになった場合、または多数の深い引っかき傷で下地の銅が見えている場合は、酸性食品を調理する前に専門業者で再錫引きが必要です。'
          },
          {
            question: 'なぜ無垢の銅ボウルで卵白を泡立てたりジャムを煮るのは安全なのですか？',
            answer: '卵白中のコンアルブミンというタンパク質が微量の銅と安定した錯体を形成して気泡を強固にするためです。また果物ジャムは極めて糖度が高いため自由水が奪われ、銅の酸溶解が起こりにくいためです。'
          },
          {
            question: 'ステンレス内張りの銅鍋は昔ながらの錫引き銅鍋より優れていますか？',
            answer: '一般的な家庭料理にはステンレス内張りが圧倒的に優れています。304ステンレスは酸と反応せず、空焚きでも溶けず、金属ヘラで傷つかず、再錫引きの手間も不要で、銅特有の優れた熱伝導性を享受できます。'
          }
        ],
        relatedTools: [
          {
            name: '銅製調理器具の重金属毒性＆酸性食品溶出シミュレーター',
            url: '/ja/tools/copper-cookware-toxicity-modeler/'
          },
          {
            name: '調理器具の有害化学物質溶出＆PFASリスクスコアカード',
            url: '/ja/tools/toxic-leaching-scorecard/'
          },
          {
            name: '安全な調理器具素材スワップ計算ツール',
            url: '/ja/tools/material-swap-calculator/'
          },
          {
            name: '鍋・焼き型オーブン耐熱温度ファインダー',
            url: '/ja/tools/cookware-oven-temp-lookup/'
          }
        ]
      },
      {
        slug: 'melamine-dishes-microwave-dishwasher-formaldehyde-safety',
        title: 'メラミン食器の安全性：電子レンジ厳禁の理由、ホルムアルデヒド・シアヌル酸の加熱溶出＆ドイツBfR基準',
        excerpt: 'メラミン食器で熱いスープを飲んだり電子レンジで温めるのは危険？メラミン・ホルムアルデヒド樹脂の特性、誘電加熱による熱分解、食洗機による劣化、ドイツ連邦リスク評価研究所（BfR）の溶出限度を徹底解説。',
        date: wave40Date,
        readTime: '9 分で読める',
        author: 'IsItKitchenSafe',
        intro: 'メラミン食器は、軽くて割れにくく陶器のような質感を持つため、子ども用食器、ピクニック、外食チェーンなどで広く利用されています。メラミン樹脂は熱硬化性高分子ですが、過度の熱や酸性条件に対して化学的に不安定です。電子レンジ加熱や沸騰直後のスープの注ぎ入れ、アルカリ性の高い食洗機洗浄によってポリマー結合が加水分解され、有毒なホルムアルデヒドガスやメラミンモノマーが食品へ溶出します。ドイツBfRや米FDAの基準をもとに解説します。',
        sections: [
          {
            title: '1. 樹脂化学：メラミン・ホルムアルデヒド重縮合と残留モノマー',
            content: 'メラミン樹脂はメラミンとホルムアルデヒドを高温高圧で重縮合させて作られます。工業的な硬化反応でも未反応の遊離ホルムアルデヒドが樹脂内にわずかに残留します。熱と水分に晒されるとエーテル結合が加水分解を受け、揮発性・毒性を持つモノマーが食品接触面に染み出します。',
            type: 'fact',
            boxText: 'メラミン食器はホルムアルデヒドとメラミンから合成されます。熱や酸で化学結合が切れ、有毒な未反応モノマーが食品へ溶出します。'
          },
          {
            title: '2. 電子レンジ加熱が厳禁とされる理由：誘電破壊と異常加熱',
            content: '米FDAや各国の保健機関はメラミン食器の電子レンジ使用を禁止しています。ポリプロピレンや耐熱ガラスと異なり、メラミン樹脂はマイクロ波（2.45 GHz）を直接吸収する強極性誘電体です。皿自体が数十秒で140℃〜160℃以上に異常加熱し、水ぶくれ・焦げつきを起こして高濃度のホルムアルデヒドガスを食品中に噴出します。',
            type: 'danger',
            boxText: 'メラミン食器の電子レンジ加熱は絶対に禁止です！樹脂自体がマイクロ波を吸収して140℃以上に達し、有毒なホルムアルデヒドガスを放出します。'
          },
          {
            title: '3. 酸性食品とドイツBfRの70℃移行閾値',
            content: 'ドイツ連邦リスク評価研究所（BfR 意見書No.046/2019）の実験によると、冷たいサラダや果物では安全ですが、70℃（158°F）を超える熱い汁物（熱湯スープ、コーヒー、トマト煮込み）を入れると溶出量が爆発的に増加します。EU基準（EU 10/2011）の特定移行限度（SML：ホルムアルデヒド 15 mg/kg）に対し、100℃の酸性試験では最大300倍ものホルムアルデヒドが溶出しました。',
            type: 'warning',
            boxText: 'ドイツBfRの試験により、メラミン容器に70℃以上の熱い酸性汁物を注ぐと、法定上限の最大300倍のホルムアルデヒドが溶出することが判明しました。'
          },
          {
            title: '4. 食洗機の高温洗浄とアルカリ加水分解：表面釉薬の劣化',
            content: '食洗機の高温洗浄（>65℃）と強アルカリ洗剤（pH 11以上）の組み合わせは、メラミン表面の光沢層を徐々に加水分解・侵食します。洗浄を重ねると表面が白っぽく粉を吹き、ザラザラした微小な傷が生じます。この状態になると化学物質の溶出が急激に加速するため、直ちに廃棄する必要があります。',
            type: 'warning',
            boxText: '高温の食洗機と強力アルカリ洗剤はメラミンの保護膜を腐食させます。表面が白濁・ザラついたりナイフ傷のあるメラミン食器は廃棄してください。'
          },
          {
            title: '5. 子どもや家庭向けの安全な代替食器素材',
            content: '安全な割れにくい代替品として以下が推奨されます：1）強化オパールガラス（Corelleなど）：落としても割れにくく、非多孔質で電子レンジ・食洗機完全対応。2）プラチナ硬化食品グレードシリコン：ホルムアルデヒドやBPA完全フリー。3）304食品用ステンレス鋼：壊れず化学物質が溶出しない安心素材（電子レンジ不可）。',
            type: 'tip',
            boxText: 'メラミン食器から強化オパールガラス（コレール）、プラチナシリコン、または304ステンレス食器に切り替えることで、化学物質のリスクを根絶できます。'
          }
        ],
        conclusion: 'メラミン食器は冷たいサラダや常温のパンには適していますが、電子レンジや熱湯スープなどの高温環境では絶対に使用してはいけません。表面が曇ったり傷がついた食器は廃棄し、耐熱ガラスや磁器、ステンレス食器を活用してください。',
        faqs: [
          {
            question: 'メラミン皿やボウルを電子レンジで温めてもいいですか？',
            answer: '絶対に不可です。メラミン樹脂がマイクロ波を直接吸収して140℃以上に達し、器が焦げたり変形すると同時に、発がん性のあるホルムアルデヒドガスが食品に溶け出します。'
          },
          {
            question: '熱いスープをメラミンボウルに注ぐのは危険ですか？',
            answer: 'ドイツBfRは70℃（158°F）以上の熱い液体をメラミン食器に注ぐことを警告しています。沸騰直後のスープや酸性シチューは樹脂を分解し、ホルムアルデヒドを大量溶出させます。'
          },
          {
            question: 'EU基準（BfR）と米FDAのメラミン・ホルムアルデヒド溶出上限は？',
            answer: 'EU規則 10/2011では特定移行限度（SML）としてホルムアルデヒドが15 mg/kg、メラミンが2.5 mg/kgと定められています。米FDAの耐容一日摂取量は体重1kgあたり0.063mgです。'
          },
          {
            question: 'メラミン食器は食洗機で洗っても大丈夫ですか？',
            answer: '食洗機対応と記載されていても、高温のお湯と強アルカリ洗剤によって保護被膜が徐々に劣化します。白っぽく変色したり表面がザラついてきたら化学物質の溶出が増えるため買い替えてください。'
          },
          {
            question: 'ホルムアルデヒドとメラミンを慢性的に摂取するとどんな健康被害がありますか？',
            answer: 'ホルムアルデヒドはヒトに対する発がん性が確認されており、消化管粘膜の炎症を引き起こします。メラミンは腎臓から排泄されますが、微量蓄積により不溶性の結石を形成し腎障害の原因となります。'
          }
        ],
        relatedTools: [
          {
            name: '食洗機メラミン食器ホルムアルデヒド・シアヌル酸溶出シミュレーター',
            url: '/ja/tools/dishwasher-melamine-leaching-simulator/'
          },
          {
            name: '電子レンジ用プラスチック蒸気カバー フタル酸エステル結露滴下モデル',
            url: '/ja/tools/microwave-plastic-steam-cover-modeler/'
          },
          {
            name: 'プラスチック食品容器の化学物質溶出・熱食安全チェッカー',
            url: '/ja/tools/kitchen-plastic-leaching-checker/'
          },
          {
            name: 'キッチン用品マーク解読ツール＆プラスチック識別番号 #1〜#7',
            url: '/ja/tools/kitchen-symbol-decoder/'
          }
        ]
      },
      {
        slug: 'air-fryer-preheating-empty-teflon-fume-hazards',
        title: 'ノンフライヤーの空焚き予熱リスク：食材なし放射過熱（>240℃）、テフロン熱分解ガス、ポリマー煙熱＆飼い鳥への致死性',
        excerpt: 'ノンフライヤーを使う前に空の状態で予熱していませんか？水分吸熱のない放射熱暴走、テフロン被膜が240℃で急速熱分解する物理法則、ポリマー煙熱（テフロン風邪）、飼い鳥の急性致死リスクを解説。',
        date: wave40Date,
        readTime: '9 分で読める',
        author: 'IsItKitchenSafe',
        intro: 'ノンフライヤーは高速熱風対流によって、従来のオーブンの半分の時間でカリッとした揚げ物料理が作れる人気の家電です。しかし、多くのレシピ本が推奨する「高温で3〜5分空焚き予熱する」という行為は、テフロン（PTFE）加工バスケットにとって重大な熱力学的リスクをもたらします。食材の水分蒸発による吸熱冷却がないため、バスケットの金属表面は4分以内に240℃〜270℃を突破し、テフロンの熱分解とナノ粒子・フッ素毒ガスの放出を引き起こします。熱流工学と鳥類への致死性を科学的に解説します。',
        sections: [
          {
            title: '1. 熱流工学：強制対流熱伝達 vs 発熱ヒーターからの強烈な赤外線放射',
            content: 'ノンフライヤーは1,500〜2,000Wの強力ヒーターと高速ファンで動作します。ヒーターは500℃〜700℃の赤熱状態になり、バスケットのわずか3〜5cm直上に位置しています。食材が入っている場合、水分の蒸発潜熱（2,260 kJ/kg）が莫大な熱エネルギーを吸収し、バスケット表面温度を180℃以下に安全に抑制します。しかし空焚きの場合、この冷却制御が完全に失われます。',
            type: 'fact',
            boxText: '食材の水分蒸発が熱を吸収し、バスケットを180℃以下に保ちます。空の状態で予熱するとこの冷却機能が働かず異常加熱します。'
          },
          {
            title: '2. 空焚き予熱の熱スパイク：4分未満で240℃〜270℃を突破',
            content: '200℃設定で空焚き予熱を行うと、高速熱風が循環し、直上の発熱体からマットブラックのバスケット塗装へ強烈な放射熱が照射されます。黒色面は赤外線吸収率（ε ≈ 0.95）が極めて高いため、熱電対の計測ではバスケット金属が3.5〜5分以内に240℃〜270℃に達し、PTFEの安全常用限界温度（260℃）を軽々と超えます。',
            type: 'danger',
            boxText: '食材なしの予熱により、赤外線放射でバスケット温度が4分以内に250℃を突破し、テフロンコーティングの熱分解が始まります。'
          },
          {
            title: '3. テフロンの熱分解：超微小粒子（UFP）と有害含フッ素ガスの放出',
            content: 'PTFEは200℃付近から微細な熱分解を開始します。230℃〜260℃に達すると炭素-フッ素主鎖が断裂し、空気中に高密度の超微小粒子（UFP、100nm未満、10万個/cm³以上）を放出します。260℃を超えると急激な化学熱分解が起こり、ホスゲンの10倍の毒性を持つパーフルオロイソブテン（PFIB）、フッ化カルボニル、トリフルオロ酢酸などの有害ガスを発生させます。',
            type: 'warning',
            boxText: '230℃以上でテフロンからナノプラスチック超微粒子が空気中に飛散し、260℃以上では猛毒のフッ化カルボニルガスなどが発生します。'
          },
          {
            title: '4. 飼い鳥への致死性：小鳥が数十分で命を落とす理由',
            content: '加熱分解したPTFEガスは、インコ、オカメインコ、文鳥、カナリアなどの小鳥にとって極めて致命的です。鳥類は気のうを持つ高効率の一方向呼吸システムを持ち、毛細血管壁は人間の3分の1の薄さしかありません。超微量のテフロン煙を吸入するだけで、人間が無臭と感じている間に、15〜30分で急性肺出血と重度の肺水腫を引き起こし死に至ります。',
            type: 'warning',
            boxText: '鳥類の呼吸器はフッ素ガスに極度に敏感です。過熱したテフロンの煙は、インコや小鳥をわずか15〜30分で急性呼吸不全により窒息死させます。'
          },
          {
            title: '5. 安全な予熱ルールと有害物質フリーの代替バスケット（304ステンレス、セラミック、ガラス）',
            content: '安全な使い方の基本：1）空焚き予熱はしない：食材を入れてから加熱しても90秒程度で調理温度に到達するため予熱は不要です。2）食材を乗せていないクッキングシートを入れない：熱風でシートが巻き上がりヒーターに接触して引火火災を起こします。3）304ステンレス製メッシュバスケット、無機セラミックゾルゲル加工、ホウケイ酸ガラス製引き出しなどの安心素材を選びましょう。',
            type: 'tip',
            boxText: 'ノンフライヤーの空焚き予热は不要です。食材を最初から入れて調理するか、テフロン不使用の304ステンレスやセラミック製バスケットを選びましょう。'
          }
        ],
        conclusion: 'テフロン加工のノンフライヤーを空の状態で予熱することは、コーティングの剥離寿命を縮め、有毒なナノ粒子を室内に放散させ、愛鳥に命の危険を及ぼすリスクの高い行為です。食材を最初から入れて加熱するか、ステンレスやセラミック加工の調理器具をご活用ください。',
        faqs: [
          {
            question: 'ノンフライヤーの取扱説明書に予熱が必要と書かれていますが、不要ですか？',
            answer: '材料工学の観点からは、テフロン加工バスケットを空の状態で予熱することは推奨されません。食材を入れてからスイッチを入れても1分半で適温に達するため、空焚き過熱のリスクを避けるべきです。'
          },
          {
            question: 'ノンフライヤーのテフロンコーティングは何℃から劣化・分解しますか？',
            answer: 'PTFEは200℃（392°F）から微細な熱劣化が始まり、230℃〜260℃でナノ粒子状の煙（UFP）が放出され、260℃（500°F）を超えると有害なフッ素系有毒ガスへと本格的に熱分解します。'
          },
          {
            question: 'なぜ小鳥やインコはテフロンの煙にこれほど弱いのですか？',
            answer: '鳥類は気のうを持つ特殊な呼吸器構造を持ち、肺のガス交換膜が人間の3分の1と極薄であるためです。微小なフッ素粒子が毛細血管を直接破壊し、急性肺水腫と大出血を誘発します。'
          },
          {
            question: '人間におけるポリマー煙熱（テフロン風邪）とは何ですか？',
            answer: '高温分解したPTFEガスを吸入することで起きる一時的なインフルエンザ様疾患です。吸入後4〜8時間で胸の圧迫感、悪寒、発熱、頭痛、咳、倦怠感が生じ、通常24〜48時間で回復します。'
          },
          {
            question: '予熱の段階でクッキングシートを敷いておいても大丈夫ですか？',
            answer: '絶対にやめてください。食材の重みがないシートは3,000rpm以上の高速熱風に巻き上げられ、上部の600℃赤熱ヒーターに触れて瞬時に激しく発火し火災事故になります。'
          }
        ],
        relatedTools: [
          {
            name: 'ノンフライヤーのテフロン劣化・微小粒子熱分解シミュレーター',
            url: '/ja/tools/air-fryer-teflon-fluoropolymer-modeler/'
          },
          {
            name: 'エアフライヤー用シート気流遮断＆電熱線発火シミュレーター',
            url: '/ja/tools/air-fryer-liner-fire-hazard-simulator/'
          },
          {
            name: 'AI フライパン傷・フッ素コーティング損傷診断ツール',
            url: '/ja/tools/pan-scratch-inspector/'
          },
          {
            name: 'ノンフライヤー・コンベクション・ガスマーク変換ツール',
            url: '/ja/tools/air-fryer-oven-converter/'
          }
        ]
      }
    ];
  }
}

// 2. Load existing files and append guides
const files = [
  { path: 'src/data/blog.json', lang: 'en', guides: enGuides },
  { path: 'src/data/blog.es.json', lang: 'es', guides: localizeGuides('es') },
  { path: 'src/data/blog.pt.json', lang: 'pt', guides: localizeGuides('pt') },
  { path: 'src/data/blog.zh-cn.json', lang: 'zh-cn', guides: localizeGuides('zh-cn') },
  { path: 'src/data/blog.ja.json', lang: 'ja', guides: localizeGuides('ja') }
];

for (const f of files) {
  const fullPath = path.resolve(f.path);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  console.log(`Initial ${f.lang} blog posts count:`, data.length);
  
  for (const guide of f.guides) {
    const existingIdx = data.findIndex(p => p.slug === guide.slug);
    if (existingIdx >= 0) {
      data[existingIdx] = guide;
      console.log(`Updated existing post ${guide.slug} in ${f.lang}`);
    } else {
      data.push(guide);
      console.log(`Added new post ${guide.slug} to ${f.lang}`);
    }
  }

  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Final ${f.lang} blog posts count:`, data.length);
}

console.log('\n✅ All 3 guides added across all 5 languages successfully!');
