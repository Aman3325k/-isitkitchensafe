const fs = require('fs');
const path = require('path');

const wave46Date = '2026-11-21';

// 1. English Guides
const enGuides = [
  {
    slug: 'melamine-plate-microwave-formaldehyde-leaching-risks',
    title: 'Melamine Plates & Dinnerware in the Microwave: Thermal Depolymerization, Formaldehyde Gas Release, Monomer Leaching & FDA/EU Migration Safety',
    excerpt: 'Can you microwave melamine plates? Explore melamine-formaldehyde thermoset resin depolymerization, microwave dielectric heating hazards, free formaldehyde and cyanuric acid monomer leaching, and FDA/EU safety limits.',
    date: wave46Date,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'Melamine tableware—ubiquitous in outdoor dining, children’s dinner sets, and casual restaurants—is renowned for its ceramic-like luster, shatter resistance, and lightweight utility. However, placing melamine plates, bowls, or mugs into a microwave oven is one of the most hazardous domestic kitchen practices. Unlike microwave-safe ceramics and borosilicate glass, melamine is an organic thermosetting aminoplast polymer synthesized through the condensation of melamine and formaldehyde. When exposed to microwave radiation and high temperatures, its cross-linked molecular network undergoes rapid hydrolytic and thermal depolymerization, off-gassing volatile formaldehyde and leaching toxic monomers into your food. Here is the macromolecular chemistry, toxicological data, and regulatory guidance on keeping melamine safely out of microwave radiation.',
    sections: [
      {
        title: '1. Resin Chemistry: The Melamine-Formaldehyde Cross-Linked Network',
        content: 'Melamine dinnerware is fabricated from melamine-formaldehyde (MF) resin, an amino-plastic thermoset material. During manufacturing, 1,3,5-triazine-2,4,6-triamine (melamine) is reacted with formaldehyde (CH2O) under heat and pressure with cellulose fiber reinforcements. This forms highly cross-linked methylene and dimethylene ether bridge networks. Because it is a thermoset rather than a thermoplastic, it does not melt when heated; instead, when thermal thresholds are exceeded, the covalent cross-links irreversibly degrade. In stable room-temperature conditions, well-cured MF resin is inert and resistant to physical impacts. However, residual uncured monomers and acid-sensitive ether bridges remain locked within the polymeric matrix, vulnerable to thermodynamic cleavage.',
        type: 'fact',
        boxText: 'Melamine tableware is a thermoset polymer formed from formaldehyde and melamine monomers. It does not melt, but degrades chemically under intense heat.'
      },
      {
        title: '2. Dielectric Heating in Microwaves: Direct Polar Excitation & Thermal Hotspots',
        content: 'Microwave ovens operate at a frequency of 2.45 GHz, designed to oscillate polar molecules—primarily water—in food to generate heat. While true microwave-safe materials (such as pyrex glass or unglazed high-fired stoneware) have very low dielectric loss factors and remain transparent to microwaves, melamine resin exhibits significant dielectric loss. The polar amine and ether groups in the resin actively absorb microwave electromagnetic radiation. Consequently, the plate heats up simultaneously with the food, frequently reaching localized surface temperatures exceeding 100°C to 140°C (212°F–284°F). This direct dielectric excitation severely stresses the polymer matrix, accelerating bond cleavage far faster than conventional convective heating.',
        type: 'danger',
        boxText: 'Melamine absorbs microwave radiation directly, creating intense internal hot spots that rupture polymer chains.'
      },
      {
        title: '3. Formaldehyde Leaching: IARC Group 1 Carcinogen Ingestion & Off-Gassing',
        content: 'The most alarming consequence of microwaving melamine is the liberation of free formaldehyde. The International Agency for Research on Cancer (IARC) classifies formaldehyde as a Group 1 known human carcinogen. Under elevated temperatures and acidic conditions (such as tomato sauce, citrus, or vinegar dressing with pH < 4.5), the ether linkages in MF resin undergo acid-catalyzed hydrolysis, decomposing back into formaldehyde monomers. Controlled food-contact migration studies demonstrate that microwaving acidic meals in melamine plates increases formaldehyde migration by over 2,000%, frequently exceeding the European Union Specific Migration Limit (SML) of 15 mg/kg food. Ingested formaldehyde causes acute gastric epithelial irritation and micro-ulcerations, while vaporized formaldehyde irritates the respiratory tract.',
        type: 'danger',
        boxText: 'Heating acidic foods in melamine releases free formaldehyde into the food, exceeding EU safety limits by multiple orders of magnitude.'
      },
      {
        title: '4. Melamine Monomer Migration: Nephrotoxicity & Micro-Crystallization',
        content: 'Simultaneously, melamine monomers migrate from the decomposing resin into food matrices. While melamine alone has moderate oral toxicity, clinical and toxicological research revealed that when ingested, melamine reacts with endogenous trace cyanuric acid to form insoluble melamine cyanurate precipitates. These micro-crystals deposit in the renal collecting ducts and distal tubules, acting as physical abrasive stones that cause tubular obstruction, interstitial nephritis, hematuria, and chronic renal failure. The European Food Safety Authority (EFSA) established a Tolerable Daily Intake (TDI) of 0.2 mg/kg body weight/day, with a strict specific migration limit of 2.5 mg/kg food contact material—limits that microwaved or crazed melamine readily violates.',
        type: 'warning',
        boxText: 'Migrated melamine co-crystallizes in kidney tubules, creating acute risk of renal gravel and tissue damage.'
      },
      {
        title: '5. Regulatory Bans, Dishwasher Crazing & Everyday Safety Rules',
        content: 'Both the US Food and Drug Administration (FDA) and the German Federal Institute for Risk Assessment (BfR) issue unequivocal warnings: Never microwave food or beverages in melamine tableware. In commercial dining and domestic kitchens, prolonged dishwasher cleaning with harsh alkaline detergents also induces microscopic surface fissures ("crazing"). These hairline cracks increase the exposed surface area of the core resin, drastically increasing monomer leaching even during room-temperature serving. To maintain food safety: 1) Reserve melamine strictly for cold or room-temperature serving (salads, snacks); 2) Never heat, microwave, or bake with melamine; 3) Discard any melamine plates showing dullness, discoloration, or surface roughness; 4) For all microwave cooking and reheating, utilize borosilicate glass, oven-safe stoneware, or microwave-certified ceramics.',
        type: 'fact',
        boxText: 'Never microwave melamine. Discard pieces with surface crazing, and use borosilicate glass or high-fired ceramic for all reheating.'
      }
    ],
    takeaways: [
      'Melamine plates are thermoset aminoplast resins that undergo hydrolytic depolymerization when microwaved.',
      'Melamine actively absorbs microwave radiation, resulting in localized plate heating above 120°C and thermal fracturing.',
      'Heating causes acid-catalyzed leaching of free formaldehyde (IARC Group 1 carcinogen) into food, far exceeding EU SML thresholds.',
      'Leached melamine monomers can form insoluble crystals in the kidneys, posing significant nephrotoxic hazards.',
      'Never microwave melamine tableware; discard cracked or crazed dinnerware, and use borosilicate glass or glazed ceramic for reheating.'
    ]
  },
  {
    slug: 'air-fryer-reheating-oil-lipid-oxidation-toxic-aldehydes',
    title: 'Reheating Oily Foods in the Air Fryer: High-Velocity Convection Lipid Peroxidation, Cytotoxic Aldehydes (MDA & 4-HNE), Acrolein & Oil Re-use Limits',
    excerpt: 'Does reheating fried foods in an air fryer create toxic oxidized fats? Explore forced-convection lipid peroxidation, cytotoxic aldehyde formation (MDA, 4-HNE, acrolein), and scientific reheating limits.',
    date: wave46Date,
    readTime: '10 min read',
    author: 'IsItKitchenSafe',
    intro: 'Air fryers have revolutionized domestic cooking, transforming soggy leftovers into crispy meals in minutes. By circulating superheated air at hurricane-like velocities around a perforated basket, air fryers rapidly dehydrate the food’s surface to restore culinary crunch. However, when repeatedly reheating foods rich in commercial cooking oils—such as french fries, chicken wings, or battered fish—this high-velocity convective airflow creates an ideal biochemical environment for severe lipid peroxidation. Polyunsaturated fatty acids in the residual oil react with atmospheric oxygen, generating cytotoxic aldehydes, lipid hydroperoxides, and volatile acrolein. Here is the lipid chemistry of air fryer reheating, the physiological impact of oxidized cooking oils, and the culinary protocols to crisp your leftovers safely.',
    sections: [
      {
        title: '1. The Aerodynamic Engine: Forced Convection & Enhanced Oxygen Interfacial Exposure',
        content: 'An air fryer functions via high-velocity forced convection, utilizing a top-mounted heating element paired with a high-RPM radial fan that drives air currents at velocities exceeding 2 to 3 meters per second. This creates intense boundary-layer turbulence over the food surface. While this mechanism accelerates evaporative heat transfer to yield exceptional crispness, it also continuously shears the thin oil film coating the food. By exponentially expanding the surface-area-to-volume ratio of the lipid layer and saturating it with fresh atmospheric oxygen at temperatures between 160°C and 200°C (320°F–400°F), the air fryer acts as a powerful industrial oxidizer, accelerating radical-mediated lipid oxidation far faster than static oven reheating or shallow pan warming.',
        type: 'fact',
        boxText: 'High-speed turbulent air circulation forces continuous oxygen into hot oil films, dramatically accelerating oxidative cracking.'
      },
      {
        title: '2. Lipid Peroxidation Mechanics: Radical Cascades in Polyunsaturated Fatty Acids',
        content: 'Commercial fried foods are predominantly prepared using refined seed oils—such as soybean, corn, canola, and sunflower oil—which are rich in polyunsaturated fatty acids (PUFAs), notably linoleic acid (18:2) and alpha-linolenic acid (18:3). PUFAs contain bis-allylic methylene carbons located between double bonds, which possess remarkably weak C-H bond dissociation energies (~322 kJ/mol). Under high air fryer temperatures, hydrogen atoms are abstracted by thermal energy and oxygen radicals, creating conjugated diene lipid radicals. These instantly react with molecular oxygen to form toxic lipid peroxyl radicals (LOO•), initiating an auto-catalytic chain reaction that generates dense concentrations of unstable lipid hydroperoxides (LOOH).',
        type: 'warning',
        boxText: 'Polyunsaturated seed oils break down rapidly under convection heat into lipid hydroperoxides and reactive oxygen species.'
      },
      {
        title: '3. Cytotoxic Aldehydes: Malondialdehyde (MDA), 4-HNE & DNA Adduct Formation',
        content: 'As lipid hydroperoxides decompose on hot food surfaces, they cleave into toxic, non-volatile secondary oxidation products. The most biologically hazardous are reactive alpha,beta-unsaturated aldehydes, specifically Malondialdehyde (MDA) and 4-Hydroxy-2-nonenal (4-HNE). Extensively researched in food toxicology and clinical oncology, MDA and 4-HNE are potent electrophiles that bind covalently to cellular DNA bases (forming mutagenic M1dG adducts) and protein cysteine residues. Consuming foods laden with high concentrations of lipid peroxidation end-products induces systemic oxidative stress, endothelial dysfunction, gut mucosal micro-inflammation, and accelerated atherogenesis.',
        type: 'danger',
        boxText: 'Degraded oils generate MDA and 4-HNE, toxic electrophilic aldehydes that damage intestinal cells and cross-link cellular DNA.'
      },
      {
        title: '4. Acrolein Formation & Respiratory Convection Exposure',
        content: 'When leftover fats drip into the bottom catch tray of the air fryer, they are subjected to continuous radiant heat without the cooling evaporative effect of water. Temperatures in the drip pan frequently surpass 200°C (400°F), inducing thermal dehydration of glycerol backbones into acrolein (2-propenal)—a potent lacrimator and mucosal irritant historically deployed as a chemical warfare agent. The intense convective fan aerosolizes acrolein and oxidized lipid micro-droplets directly into kitchen air. Inhaling these fumes causes throat irritation and pulmonary inflammation, while food in the upper basket absorbs the bitter, acrid condensation.',
        type: 'danger',
        boxText: 'Overheated oil in the drip tray dehydrates into acrolein, an airborne irritant that circulates onto food and into kitchen air.'
      },
      {
        title: '5. The Safe Reheating Protocol: Temperatures, Fats & Drip-Tray Hygiene',
        content: 'You do not need to abandon your air fryer to protect yourself from oxidized lipids; adopting simple culinary adjustments prevents toxic degradation: 1) Moderate Reheating Temperatures: Never reheat oily leftovers at 200°C (400°F); set the air fryer to 140°C–160°C (285°F–320°F) for 3 to 5 minutes, which re-crisps starch without triggering secondary aldehyde cascades; 2) Single Reheat Rule: Never reheat the same portion of fried food multiple times; each thermal cycle exponentially increases 4-HNE accumulation; 3) Oil Selection: When misting foods with cooking oil, use high-stability oils rich in monounsaturated fats (extra virgin olive oil, high-oleic avocado oil) or clarified butter (ghee) rather than refined polyunsaturated seed oils; 4) Daily Drip-Pan Degreasing: Wash the bottom catch tray after every use to prevent rancid, pyrolyzed oils from smoking during subsequent cooks.',
        type: 'fact',
        boxText: 'Reheat at 150°C for brief intervals, avoid repeated re-frying, mist with monounsaturated oils, and thoroughly clean the drip tray after each cook.'
      }
    ],
    takeaways: [
      'High-velocity convective airflow exponentially increases oxygen contact with hot oil films, driving accelerated lipid peroxidation.',
      'Polyunsaturated seed oils (soybean, canola, corn) readily decompose under air fryer heat into mutagenic aldehydes (MDA, 4-HNE).',
      'Overheating residual oil in the catch tray generates acrolein, an irritant aerosol that degrades air quality and food flavor.',
      'Keep reheating temperatures between 140°C and 160°C for short durations rather than maxing out at 200°C.',
      'Avoid multiple reheat cycles of the same fried food, use stable monounsaturated oils for misting, and clean the drip pan diligently.'
    ]
  },
  {
    slug: 'slow-cooker-kidney-bean-phytohaemagglutinin-lectin-safety',
    title: 'Cooking Kidney Beans in a Slow Cooker: Phytohaemagglutinin (PHA) Lectin Toxicity, Thermal Activation Pitfalls & 100°C Boil Inactivation Protocol',
    excerpt: 'Why can raw kidney beans in a slow cooker cause severe food poisoning? Discover phytohaemagglutinin (PHA) lectin biochemistry, paradoxical low-heat toxicity amplification, and the mandatory 100°C boiling protocol.',
    date: wave46Date,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'Slow cookers are celebrated for their set-it-and-forget-it convenience, simmering hearty stews, chilis, and curries over 6 to 8 hours while you work. However, adding raw or soaked dry red kidney beans directly into a slow cooker recipe can result in acute, debilitating food poisoning. Red kidney beans contain potent concentrations of phytohaemagglutinin (PHA), a carbohydrate-binding plant lectin designed to deter herbivores. Crucially, the low operational temperatures of domestic slow cookers (typically 70°C–80°C / 160°F–176°F) not only fail to destroy this toxic protein, but actually increase its biological toxicity by up to five-fold. Here is the biochemistry of lectin toxicity, the pathology of red bean poisoning, and the non-negotiable 3-step culinary protocol to render legumes completely safe.',
    sections: [
      {
        title: '1. What is Phytohaemagglutinin? The Legume Defense Glycoprotein',
        content: 'Phytohaemagglutinin (PHA) is a globular plant lectin belonging to the Phaseoleae protein superfamily, synthesized by legumes such as red kidney beans (Phaseolus vulgaris), black beans, and cannellini beans as an evolutionary chemical defense against insects and fungi. PHA is a tetrameric glycoprotein composed of erythroagglutinating (E) and leucoagglutinating (L) subunits that bind with high affinity to specific cell-surface glycans and carbohydrate receptors. Raw red kidney beans are extraordinarily rich in PHA, containing between 20,000 and 70,000 hemagglutinating units (hau) per gram of dry legume. By comparison, white beans (cannellini) contain about one-third of this amount, and broad beans contain significantly less.',
        type: 'fact',
        boxText: 'Phytohaemagglutinin (PHA) is a potent defense lectin concentrated in raw kidney beans at up to 70,000 hemagglutinating units per gram.'
      },
      {
        title: '2. The Slow Cooker Trap: Paradoxical 5-Fold Toxicity Amplification at 80°C',
        content: 'The primary danger of slow cooking kidney beans lies in the thermal kinematics of lectin denaturation. To destroy the complex tertiary structure of the PHA tetramer and abolish its biological binding affinity, temperatures must reach a rolling boil of 100°C (212°F) for a sustained period. When a slow cooker is set to "Low", the cooking vessel typically warms gradually and plateaus between 70°C and 80°C (160°F–176°F). Decades of food microbiology investigations, synthesized in the FDA Bad Bug Book, demonstrate that heating raw kidney beans to 80°C partially unfolds the protein matrix without hydrolyzing peptide bonds. This structural alteration exposes active carbohydrate-binding sites, increasing hemagglutinating activity by nearly 500% compared to raw beans.',
        type: 'danger',
        boxText: 'Cooking kidney beans at 80°C in a slow cooker does NOT destroy lectins—it structurally amplifies their toxicity up to five times.'
      },
      {
        title: '3. Clinical Pathology: Acute Enterocyte Clumping, Microvilli Shedding & Symptoms',
        content: 'Ingesting as few as 4 or 5 undercooked kidney beans from an improperly heated slow cooker batch can trigger severe clinical food poisoning within 1 to 3 hours. Upon reaching the proximal small intestine, active PHA lectins bind avidly to glycosylated receptors on the apical membranes of enterocytes (intestinal epithelial cells). This cross-links cellular membranes, inducing rapid red blood cell clumping (erythroagglutination) and causing the microvilli brush border to shed into the intestinal lumen. The acute mucosal destruction triggers sudden, explosive gastrointestinal distress characterized by projectile vomiting, acute nausea, and profuse diarrhea. While healthy individuals generally recover within 24 to 48 hours, the dehydration and electrolyte depletion can be severe.',
        type: 'warning',
        boxText: 'Symptoms appear within 1–3 hours: violent nausea, projectile vomiting, and diarrhea caused by acute intestinal cell agglutination.'
      },
      {
        title: '4. Canned Beans vs Dry Beans: The Industrial Retort Advantage',
        content: 'Home cooks often wonder whether canned kidney beans present the same risk when tossed into a slow cooker recipe. The answer is an absolute no: commercially canned kidney beans are completely safe and can be added directly to any slow cooker dish without pre-boiling. During commercial packaging, canned beans undergo an industrial retort process—cooked under high steam pressure at 121°C (250°F) for 20 to 30 minutes to achieve commercial sterility. This extreme thermal and pressure profile completely denatures all PHA lectins, reducing hemagglutinating activity to negligible baseline levels (under 200–400 hau/g), well below any physiological threshold.',
        type: 'fact',
        boxText: 'Commercially canned kidney beans have already undergone 121°C pressure retort sterilization and are completely safe for direct slow cooking.'
      },
      {
        title: '5. The Mandatory 3-Step Inactivation Protocol for Dry Beans',
        content: 'If you choose to cook dried red kidney beans from scratch, you must execute this mandatory, scientifically validated preparation protocol before the beans ever touch a slow cooker: 1) Cold Water Soak: Soak dried beans in generous cold water for at least 8 to 12 hours. Drain and completely discard the soaking water (which holds leached oligosaccharides and free lectins); 2) Vigorously Boil for 30 Minutes: Place soaked beans in a large pot of fresh cold water, bring to an active, rolling boil (100°C / 212°F), and boil uncovered for at least 10 minutes (30 minutes is recommended for culinary tenderness and complete margin of safety). Never simmer below a boil; 3) Transfer to Recipe: Only after the rolling boil has completely deactivated the PHA lectin can the beans be drained and added to your slow cooker, chili pot, or soup to finish cooking.',
        type: 'fact',
        boxText: 'Soak dry beans for 8–12 hours, discard water, and vigorously boil at 100°C for at least 10–30 minutes before adding to any slow cooker recipe.'
      }
    ],
    takeaways: [
      'Raw red kidney beans contain high concentrations of phytohaemagglutinin (PHA), a potent digestive lectin.',
      'Slow cooking dry beans at 70°C–80°C increases lectin toxicity by up to five-fold rather than destroying it.',
      'Consuming undercooked beans causes sudden, severe nausea, projectile vomiting, and diarrhea within 1 to 3 hours.',
      'Commercially canned kidney beans are pre-cooked under pressure at 121°C and are completely safe for direct use.',
      'Always soak dry beans, discard soaking water, and boil vigorously at 100°C for at least 10 to 30 minutes before slow cooking.'
    ]
  }
];

// Helper to translate to ES, PT, ZH, JA
console.log('--- Generating Multilingual Guides for Wave 46 (68 -> 71) ---');

// Write English first
const enPath = path.resolve('src/data/blog.json');
let enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

enGuides.forEach(g => {
  if (!enData.some(item => item.slug === g.slug)) {
    enData.push(g);
    console.log(`✅ Added EN guide: ${g.slug}`);
  }
});
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n', 'utf8');

// 2. Spanish Guides
const esGuides = [
  {
    slug: 'melamine-plate-microwave-formaldehyde-leaching-risks',
    title: 'Platos y Vajillas de Melamina en el Microondas: Despolimerización Térmica, Emisión de Formaldehído y Seguridad Alimentaria FDA/UE',
    excerpt: '¿Se pueden calentar platos de melamina en el microondas? Descubra la despolimerización de la resina de melamina-formaldehído, riesgos de calentamiento dieléctrico y límites de migración de la UE y FDA.',
    date: wave46Date,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'La vajilla de melamina es muy apreciada por su resistencia a los golpes, ligereza y acabado cerámico. Sin embargo, introducir platos o cuencos de melamina en el microondas es una de las prácticas más peligrosas en la cocina doméstica. La melamina es un polímero termoestable aminoplástico sintetizado mediante la condensación de melamina y formaldehído. Al someterse a radiación microondas y altas temperaturas, sufre una rápida despolimerización hidrolítica, liberando formaldehído gaseoso y monómeros tóxicos en los alimentos. Analizamos la química macromolecular, los datos toxicológicos y las normas internacionales para proteger su cocina.',
    sections: [
      {
        title: '1. Química de Resinas: La Red Entrecruzada de Melamina-Formaldehído',
        content: 'La vajilla de melamina se fabrica a partir de resina de melamina-formaldehído (MF), un plástico termoestable. Durante su síntesis, la melamina se combina con formaldehído bajo presión y calor, formando una red rígida con puentes de metileno. Al ser termoestable, no se funde al calentarse; en su lugar, al superar ciertos umbrales térmicos, los enlaces covalentes se degradan irreversiblemente. Aunque a temperatura ambiente es inerte, los enlaces son vulnerables a la escisión en condiciones de calor intenso y acidez.',
        type: 'fact',
        boxText: 'La melamina es un polímero termoestable. No se derrite con el calor, sino que se descompone químicamente liberando compuestos tóxicos.'
      },
      {
        title: '2. Calentamiento Dieléctrico en Microondas: Puntos Calientes Térmicos',
        content: 'Los microondas calientan haciendo oscilar moléculas polares como el agua a 2.45 GHz. A diferencia del vidrio o la cerámica refractaria, la resina de melamina posee una alta pérdida dieléctrica. Los grupos amina y éter absorben directamente la radiación electromagnética, elevando la temperatura del plato por encima de los 100°C–140°C y provocando tensiones mecánicas internas que rompen la matriz polimérica.',
        type: 'danger',
        boxText: 'La melamina absorbe directamente las microondas, generando puntos calientes que destruyen su estructura molecular.'
      },
      {
        title: '3. Lixiviación de Formaldehído: Ingestión de Carcinógeno del Grupo 1 del IARC',
        content: 'El mayor peligro es la liberación de formaldehído libre, clasificado como carcinógeno del Grupo 1 por la IARC. En presencia de calor y alimentos ácidos (salsa de tomate, cítricos o vinagre), los puentes de resina sufren hidrólisis ácida. Estudios de migración demuestran que calentar platos con melamina en el microondas multiplica la migración de formaldehído por más del 2,000%, superando con creces el límite de migración específica (LME) de la Unión Europea de 15 mg/kg.',
        type: 'danger',
        boxText: 'Calentar alimentos ácidos en melamina libera formaldehído, superando ampliamente los límites de seguridad alimentaria.'
      },
      {
        title: '4. Migración de Monómeros de Melamina y Nefrotoxicidad',
        content: 'Simultáneamente, los monómeros de melamina migran hacia los alimentos. En el organismo, la melamina reacciona con trazas de ácido cianúrico formando cristales insolubles de cianurato de melamina que se depositan en los túbulos renales, provocando microlesiones, cálculos y riesgo de insuficiencia renal aguda.',
        type: 'warning',
        boxText: 'La melamina ingerida puede cristalizar en los riñones, generando microobstrucciones y daños tisulares graves.'
      },
      {
        title: '5. Prohibiciones Regulatorias y Protocolo de Seguridad en el Hogar',
        content: 'Tanto la FDA estadounidense como el Instituto Federal Alemán para la Evaluación de Riesgos (BfR) prohíben calentar vajilla de melamina en el microondas. Además, el lavado frecuente en lavavajillas con detergentes agresivos produce microfisuras superficiales que aumentan la migración química. Utilice la melamina solo para servir platos fríos o a temperatura ambiente y recurra a vidrio de borosilicato o cerámica para calentar.',
        type: 'fact',
        boxText: 'Nunca use melamina en el microondas. Deseche platos agrietados y caliente siempre en vidrio o cerámica.'
      }
    ],
    takeaways: [
      'La melamina es una resina termoestable que se despolimeriza hidrolíticamente al calentarse en el microondas.',
      'Absorbe directamente la radiación electromagnética, generando calor excesivo y grietas estructurales.',
      'Libera formaldehído (carcinógeno humano IARC Grupo 1) en alimentos calientes y ácidos.',
      'Los monómeros de melamina pueden precipitar en los riñones formando cristales nefrotóxicos.',
      'Nunca caliente vajilla de melamina en el microondas; use siempre vidrio o cerámica de calidad.'
    ]
  },
  {
    slug: 'air-fryer-reheating-oil-lipid-oxidation-toxic-aldehydes',
    title: 'Recalentar Alimentos Grasos en la Freidora de Aire: Peroxidación Lipídica por Convección, Aldehídos Citotóxicos (MDA y 4-HNE) y Acroleína',
    excerpt: '¿Es tóxico recalentar frituras en la freidora de aire? Explore la peroxidación de lípidos por convección forzada, generación de aldehídos citotóxicos (MDA, 4-HNE, acroleína) y pautas culinarias seguras.',
    date: wave46Date,
    readTime: '10 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Las freidoras de aire son las reinas de la cocina moderna, devolviendo el crujiente a las sobras en cuestión de minutos. Sin embargo, al recalentar alimentos previamente fritos en aceites vegetales refinados—como patatas fritas, alitas de pollo o empanados—el flujo de aire caliente a alta velocidad acelera la peroxidación lipídica. Los ácidos grasos poliinsaturados reaccionan con el oxígeno disponible, generando aldehídos citotóxicos, hidroperóxidos lipídicos y acroleína volátil. Examinamos la química de los lípidos recalentados y las reglas de oro para crujir sus platos con total seguridad.',
    sections: [
      {
        title: '1. Convección Forzada y Máxima Exposición al Oxígeno',
        content: 'Una freidora de aire hace circular aire a más de 2–3 metros por segundo a temperaturas de entre 160°C y 200°C. Esta turbulencia extrema aumenta de forma exponencial la superficie de contacto entre la película de aceite y el oxígeno atmosférico, actuando como un oxidante catalítico mucho más agresivo que un horno convencional o el calentamiento en sartén.',
        type: 'fact',
        boxText: 'La turbulencia de aire caliente inyecta oxígeno continuo en las capas finas de aceite, multiplicando la oxidación térmica.'
      },
      {
        title: '2. Mecanismos de Peroxidación en Aceites de Semillas Poliinsaturados',
        content: 'Los fritos comerciales suelen elaborarse con aceites de soja, maíz o girasol, ricos en ácidos grasos poliinsaturados (AGPI). Los enlaces bis-alílicos de estos aceites son muy sensibles a la rotura por calor, desencadenando reacciones en cadena que producen radicales libres peroxilo e hidroperóxidos lipídicos altamente inestables.',
        type: 'warning',
        boxText: 'Los aceites de semillas poliinsaturados se descomponen rápidamente en la freidora de aire produciendo radicales libres.'
      },
      {
        title: '3. Aldehídos Citotóxicos: Malondialdehído (MDA), 4-HNE y Daño al ADN',
        content: 'Al degradarse, los hidroperóxidos forman aldehídos secundarios reactivos como el malondialdehído (MDA) y el 4-hidroxi-2-nonenal (4-HNE). Estos compuestos electrofílicos se unen al ADN celular formando aductos mutagénicos y oxidando proteínas, lo que promueve estrés oxidativo sistémico e inflamación gastrointestinal.',
        type: 'danger',
        boxText: 'El aceite degradado produce MDA y 4-HNE, toxinas que dañan las células intestinales y reaccionan con el ADN.'
      },
      {
        title: '4. Formación de Acroleína y Vapores Irritantes en la Bandeja Colectora',
        content: 'La grasa que gotea en el fondo de la freidora supera los 200°C sin evaporación de agua, deshidratando el glicerol en acroleína, un gas irritante que el ventilador recircula hacia los alimentos y la cocina.',
        type: 'danger',
        boxText: 'El aceite recalentado en la bandeja inferior genera acroleína, un gas irritante que contamina el aire y los alimentos.'
      },
      {
        title: '5. Guía Culinaria para un Recalentado Seguro',
        content: 'Para evitar la formación de compuestos tóxicos: 1) Ajuste la temperatura entre 140°C y 160°C durante 3–5 minutos; 2) No recaliente el mismo alimento más de una vez; 3) Si pulveriza aceite, elija aceites estables como aceite de oliva virgen extra o aceite de aguacate; 4) Limpie la bandeja recolectora después de cada uso para evitar humos rancios.',
        type: 'fact',
        boxText: 'Recaliente a 150°C, evite ciclos repetidos, use aceites monoinsaturados y limpie la bandeja recolectora tras cada uso.'
      }
    ],
    takeaways: [
      'El flujo de aire a alta velocidad acelera la peroxidación de aceites residuales en alimentos fritos.',
      'Los aceites poliinsaturados generan aldehídos citotóxicos como MDA y 4-HNE con el calor de convección.',
      'La grasa recalentada en la bandeja colectora emite acroleína, un aerosol irritante.',
      'Recaliente a temperaturas moderadas (140°C–160°C) durante pocos minutos.',
      'Nunca recaliente la misma comida varias veces y limpie siempre la grasa acumulada en la cesta.'
    ]
  },
  {
    slug: 'slow-cooker-kidney-bean-phytohaemagglutinin-lectin-safety',
    title: 'Cocinar Alubias Rojas en Olla de Cocción Lenta: Toxicidad de la Lectina Fitohemaglutinina (PHA) y Protocolo de Hervido a 100°C',
    excerpt: '¿Por qué cocinar alubias rojas crudas en una olla lenta puede causar intoxicación grave? Descubra la fitohemaglutinina (PHA), la activación tóxica a 80°C y el protocolo de hervido obligatorio.',
    date: wave46Date,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Las ollas de cocción lenta son el epítome de la comodidad culinaria, permitiendo preparar guisos y estofados a fuego lento durante horas. Sin embargo, añadir alubias rojas (frijoles rojos) secas o simplemente remojadas a una olla de cocción lenta puede causar una intoxicación alimentaria aguda. Las alubias rojas contienen fitohemaglutinina (PHA), una lectina vegetal de defensa. Las bajas temperaturas de estas ollas (70°C–80°C) no solo son incapaces de desactivar la lectina, sino que pueden multiplicar su toxicidad hasta por cinco. Explicamos la patología de la PHA y los 3 pasos obligatorios para cocinar legumbres con seguridad.',
    sections: [
      {
        title: '1. ¿Qué es la Fitohemaglutinina (PHA)?',
        content: 'La fitohemaglutinina (PHA) es una glicoproteína tetramérica producida por legumbres como las alubias rojas (Phaseolus vulgaris). Funciona como defensa natural contra plagas. Las alubias rojas crudas contienen concentraciones extremadamente altas, oscilando entre 20,000 y 70,000 unidades de hemaglutinación (hau/g).',
        type: 'fact',
        boxText: 'La fitohemaglutinina es una potente lectina presente en alubias rojas crudas en concentraciones de hasta 70,000 unidades/g.'
      },
      {
        title: '2. La Trampa de la Olla Lenta: Aumento de Toxicidad a 80°C',
        content: 'Para desnaturalizar la PHA es indispensable alcanzar un hervor vigoroso a 100°C durante varios minutos. A 70°C–80°C (temperatura habitual en ollas lentas en posición "Baja"), la proteína se desestabiliza parcialmente pero no se desnaturaliza, exponiendo más sitios de unión que multiplican su actividad tóxica casi un 500%.',
        type: 'danger',
        boxText: 'Cocinar alubias a 80°C en olla lenta NO destruye las lectinas: puede multiplicar su toxicidad hasta cinco veces.'
      },
      {
        title: '3. Cuadro Clínico: Gastroenteritis Aguda e Inflamación Intestinal',
        content: 'Consumir tan solo 4 o 5 alubias mal cocidas desencadena síntomas graves entre 1 y 3 horas después de la ingesta: náuseas intensas, vómitos explosivos y diarrea profusa debidos a la aglutinación de células en la mucosa del intestino delgado.',
        type: 'warning',
        boxText: 'La intoxicación aparece en 1–3 horas con vómitos violentos y diarrea provocados por el daño a las vellosidades intestinales.'
      },
      {
        title: '4. Alubias de Bote vs Alubias Secas: El Proceso Térmico Industrial',
        content: 'Las alubias rojas cocidas en conserva (de bote) son totalmente seguras para añadir directamente a la olla lenta. Durante su fabricación pasan por autoclaves a 121°C bajo presión, inactivando por completo cualquier residuo de lectina.',
        type: 'fact',
        boxText: 'Las alubias cocidas de bote han sido esterilizadas a 121°C en autoclave y son 100% seguras para usar de inmediato.'
      },
      {
        title: '5. El Protocolo Inquebrantable de 3 Pasos para Alubias Secas',
        content: 'Si usa alubias secas: 1) Remojo previo de 8 a 12 horas en agua fría y descarte completo del agua de remojo; 2) Hervido a borbotones activo a 100°C durante un mínimo de 10 a 30 minutos en agua limpia; 3) Solo tras ese hervor pueden escurrirse y transferirse a la olla lenta para terminar la receta.',
        type: 'fact',
        boxText: 'Remoje 12 horas, tire el agua y hierva a 100°C durante 10–30 minutos antes de añadir a la olla lenta.'
      }
    ],
    takeaways: [
      'Las alubias rojas crudas contienen niveles muy altos de fitohemaglutinina (PHA), una lectina gastrointestinal tóxica.',
      'Las temperaturas bajas de las ollas lentas (70°C–80°C) aumentan la toxicidad en vez de neutralizarla.',
      'Comer alubias semicrudas causa vómitos violentos y diarrea aguda en menos de 3 horas.',
      'Las alubias en conserva ya están esterilizadas a 121°C y pueden añadirse directamente.',
      'Hierva siempre las alubias secas a 100°C durante 10 a 30 minutos antes de cocinarlas a fuego lento.'
    ]
  }
];

const esPath = path.resolve('src/data/blog.es.json');
let esData = JSON.parse(fs.readFileSync(esPath, 'utf8'));
esGuides.forEach(g => {
  if (!esData.some(item => item.slug === g.slug)) {
    esData.push(g);
    console.log(`✅ Added ES guide: ${g.slug}`);
  }
});
fs.writeFileSync(esPath, JSON.stringify(esData, null, 2) + '\n', 'utf8');

// 3. Portuguese Guides
const ptGuides = [
  {
    slug: 'melamine-plate-microwave-formaldehyde-leaching-risks',
    title: 'Pratos e Louças de Melamina no Micro-ondas: Despolimerização Térmica, Emissão de Formaldeído e Segurança Alimentar FDA/UE',
    excerpt: 'Pode colocar pratos de melamina no micro-ondas? Conheça a despolimerização da resina de melamina-formaldeído, riscos de aquecimento dielétrico e limites de migração da UE e FDA.',
    date: wave46Date,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Louças de melamina são populares pela resistência a impactos, leveza e aparência cerâmica. No entanto, aquecer pratos ou tigelas de melamina no micro-ondas é uma das práticas mais perigosas na cozinha doméstica. A melamina é um polímero termorrígido aminoplástico obtido pela condensação de melamina e formaldeído. Ao entrar em contato com micro-ondas e altas temperaturas, sofre despolimerização hidrolítica acelerada, liberando formaldeído gasoso e monômeros tóxicos nos alimentos. Analisamos a química macromolecular, os impactos toxicológicos e as diretrizes regulatórias.',
    sections: [
      {
        title: '1. Química da Resina: A Rede Entrecruzada de Melamina-Formaldeído',
        content: 'Utensílios de melamina são feitos de resina melamina-formaldeído (MF), um polímero termorrígido. Sob calor e pressão, monômeros de melamina e formaldeído criam pontes de metileno rígidas. Por ser termorrígida, ela não derrete, mas se decompõe quimicamente ao atingir temperaturas elevadas, liberando compostos residuais.',
        type: 'fact',
        boxText: 'A melamina é um polímero termorrígido. Não derrete, mas degrada-se sob calor intenso liberando toxinas.'
      },
      {
        title: '2. Aquecimento Dielétrico no Micro-ondas e Pontos Quentes',
        content: 'O micro-ondas opera a 2.45 GHz excitando moléculas polares. A resina de melamina possui alto fator de perda dielétrica e absorve diretamente as ondas, atingindo facilmente 120°C–140°C e rompendo as cadeias poliméricas.',
        type: 'danger',
        boxText: 'A melamina absorve ativamente as micro-ondas, gerando superaquecimento que quebra suas ligações químicas.'
      },
      {
        title: '3. Liberação de Formaldeído: Carcinógeno Humano Grupo 1 da IARC',
        content: 'O maior risco é a liberação de formaldeído livre, classificado como carcinógeno humano Grupo 1 pela IARC. Com calor e alimentos ácidos (tomate, limão), a hidrólise ácida faz a migração de formaldeído disparar em mais de 2.000%, superando amplamente o limite de migração específica da União Europeia (15 mg/kg).',
        type: 'danger',
        boxText: 'Aquecer alimentos ácidos em melamina libera formaldeído em níveis muito acima dos padrões sanitários.'
      },
      {
        title: '4. Migração de Melamina e Nefrotoxicidade Renal',
        content: 'Os monômeros de melamina que migram para a comida reagem no organismo com ácido cianúrico endógeno, formando microcristais insolúveis de cianurato de melamina que obstruem os túbulos renais, causando lesões renais agudas.',
        type: 'warning',
        boxText: 'A melamina absorvida pode cristalizar nos rins, provocando cálculos microscópicos e danos nos túbulos renais.'
      },
      {
        title: '5. Alertas Sanitários e Uso Seguro no Cotidiano',
        content: 'A FDA e o Instituto Alemão de Avaliação de Risco (BfR) desaconselham categoricamente aquecer melamina no micro-ondas. Lavagens frequentes na máquina de lavar louça causam microfissuras que aumentam a lixiviação. Use melamina somente para servir pratos frios e aqueça refeições em vidro borossilicato ou cerâmica.',
        type: 'fact',
        boxText: 'Nunca use melamina no micro-ondas. Descarte itens com fissuras e aqueça comida em vidro ou cerâmica refratária.'
      }
    ],
    takeaways: [
      'A melamina despolimeriza-se ao ser aquecida no micro-ondas, liberando monômeros perigosos.',
      'Absorve radiação micro-ondas diretamente, causando aquecimento desigual e microfraturas.',
      'Libera formaldeído livre (carcinógeno Grupo 1) em contato com alimentos aquecidos e ácidos.',
      'A melamina ingerida pode formar cristais e causar nefrototoxicidade renal aguda.',
      'Nunca coloque melamina no micro-ondas; use vidro borossilicato ou cerâmica para reaquecer.'
    ]
  },
  {
    slug: 'air-fryer-reheating-oil-lipid-oxidation-toxic-aldehydes',
    title: 'Reaquecer Alimentos Oleosos na Air Fryer: Peroxidação Lipídica por Convecção, Aldeídos Citotóxicos (MDA e 4-HNE) e Acroleína',
    excerpt: 'Reaquecer frituras na air fryer é seguro? Conheça a peroxidação lipídica por convecção forçada, geração de aldeídos citotóxicos (MDA, 4-HNE, acroleína) e limites culinários saudáveis.',
    date: wave46Date,
    readTime: '10 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'A air fryer tornou-se indispensável por devolver a crocância a sobras de comida em poucos minutos. Contudo, ao reaquecer alimentos ricos em óleos vegetais refinados—como batatas fritas, frango empanado ou salgados—o fluxo de ar superaquecido em alta velocidade cria o cenário ideal para intensa peroxidação lipídica. Ácidos graxos poli-insaturados reagem com o oxigênio, formando aldeídos citotóxicos, hidroperóxidos lipídicos e acroleína volátil. Entenda a bioquímica das gorduras oxidadas e saiba como aquecer suas refeições com segurança.',
    sections: [
      {
        title: '1. Convecção Forçada e Exposição Contínua ao Oxigênio',
        content: 'A turbulência gerada pelo ventilador a 2–3 m/s e 160°C–200°C aumenta drasticamente a área superficial da camada de óleo exposta ao oxigênio atmosférico, atuando como um potente acelerador da oxidação lipídica.',
        type: 'fact',
        boxText: 'O ar em alta velocidade injeta oxigênio constante na camada de óleo aquecida, acelerando a oxidação térmica.'
      },
      {
        title: '2. Oxidação de Gorduras Poli-insaturadas em Óleos de Sementes',
        content: 'Óleos de soja, milho e girassol possuem ligações duplas frágeis que sofrem quebra térmica imediata, iniciando reações em cadeia que formam hidroperóxidos lipídicos reativos.',
        type: 'warning',
        boxText: 'Óleos de sementes ricos em gorduras poli-insaturadas degradam-se rapidamente no calor da convecção.'
      },
      {
        title: '3. Aldeídos Tóxicos: MDA, 4-HNE e Danos Celulares ao DNA',
        content: 'Os hidroperóxidos decompõem-se em compostos perigosos como o malondialdeído (MDA) e o 4-hidroxi-2-nonenal (4-HNE). Estes aldeídos atacam bases do DNA e proteínas celulares, gerando estresse oxidativo e inflamação intestinal.',
        type: 'danger',
        boxText: 'O óleo oxidado libera MDA e 4-HNE, substâncias citotóxicas que interagem com o DNA celular.'
      },
      {
        title: '4. Formação de Acroleína e Vapores Tóxicos no Cesto',
        content: 'A gordura residual no fundo do cesto ultrapassa 200°C sem resfriamento por água, transformando glicerol em acroleína, um gás irritante para as vias aéreas que o ventilador espalha no ar e sobre os alimentos.',
        type: 'danger',
        boxText: 'O óleo acumulado no fundo gera acroleína, um gás irritante que impregna a comida e o ar da cozinha.'
      },
      {
        title: '5. Regras Práticas para Reaquecer Alimentos sem Riscos',
        content: 'Reaqueça alimentos em temperaturas de 140°C–160°C por apenas 3 a 5 minutos; não reaqueça o mesmo alimento várias vezes; use azeite de oliva ou óleo de abacate para borrifar; e lave sempre a bandeja coletora após o uso.',
        type: 'fact',
        boxText: 'Aqueça a 150°C, evite reaquecimentos sucessivos, prefira azeite de oliva e mantenha o cesto sempre limpo.'
      }
    ],
    takeaways: [
      'A convecção turbulenta acelera a peroxidação de óleos residuais em alimentos fritos.',
      'Óleos de soja e milho geram aldeídos mutagênicos (MDA, 4-HNE) quando superaquecidos.',
      'Gordura acumulada no fundo do cesto queima e emite acroleína volátil prejudicial.',
      'Ajuste o reaquecimento para 140°C–160°C por tempos curtos.',
      'Evite reaquecer frituras múltiplas vezes e lave a cesta regularmente.'
    ]
  },
  {
    slug: 'slow-cooker-kidney-bean-phytohaemagglutinin-lectin-safety',
    title: 'Cozinhar Feijão Vermelho na Panela Elétrica Lenta: Toxicidade da Lectina Fito-hemaglutinina (PHA) e Protocolo de Fervura a 100°C',
    excerpt: 'Por que cozinhar feijão vermelho cru na panela lenta pode causar intoxicação alimentar grave? Entenda a fito-hemaglutinina (PHA), a ativação a 80°C e o protocolo obrigatório de fervura.',
    date: wave46Date,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Panelas de cozimento lento (slow cookers) são práticas para caldos e ensopados. No entanto, colocar feijão vermelho cru ou apenas demolhado diretamente na panela lenta pode causar intoxicação alimentar severa. O feijão vermelho contém fito-hemaglutinina (PHA), uma lectina vegetal de defesa. As temperaturas amenas da panela lenta (70°C–80°C) não desativam a proteína e podem aumentar sua toxicidade em até 5 vezes. Conheça os riscos biológicos e o método correto de preparo.',
    sections: [
      {
        title: '1. O que é a Fito-hemaglutinina (PHA)?',
        content: 'A fito-hemaglutinina (PHA) é uma lectina presente no feijão vermelho cru em concentrações de 20.000 a 70.000 unidades de hemaglutinação por grama, atuando como defesa natural da planta contra pragas.',
        type: 'fact',
        boxText: 'A fito-hemaglutinina é uma potente lectina presente no feijão vermelho cru em níveis de até 70.000 unidades/g.'
      },
      {
        title: '2. A Armadilha da Panela Lenta: Multiplicação da Toxicidade a 80°C',
        content: 'Para inativar a PHA é preciso ferver a água a 100°C. A 70°C–80°C, a molécula sofre desdobramento parcial sem quebra de ligações peptídicas, amplificando sua afinidade e capacidade tóxica em quase 500%.',
        type: 'danger',
        boxText: 'Cozinhar feijão a 80°C na panela lenta NÃO elimina a lectina: pode torná-la até cinco vezes mais tóxica.'
      },
      {
        title: '3. Quadro Clínico: Gastroenterite Aguda e Aglutinação Celular',
        content: 'Basta ingerir 4 ou 5 grãos semicruzes para desencadear náuseas severas, vômitos intensos e diarreia profusa em 1 a 3 horas, devido à aglutinação de células na mucosa intestinal.',
        type: 'warning',
        boxText: 'Os sintomas surgem em 1–3 horas: vômitos e diarreia causados por danos na mucosa do intestino delgado.'
      },
      {
        title: '4. Feijão em Lata vs Feijão Seco: O Papel da Autoclave Industrial',
        content: 'Feijão vermelho em conserva (enlatado) é totalmente seguro para colocar direto na panela lenta, pois já passou por autoclave sob vapor a 121°C na indústria, destruindo toda a lectina.',
        type: 'fact',
        boxText: 'O feijão em conserva já foi cozido a 121°C sob pressão industrial e pode ir direto para a panela lenta.'
      },
      {
        title: '5. Protocolo Obrigatório de 3 Etapas para Feijão Seco',
        content: 'Para feijão cru seco: 1) Deixe de molho por 8 a 12 horas e descarte toda a água do molho; 2) Ferva vigorosamente em água limpa a 100°C por no mínimo 10 a 30 minutos; 3) Somente após essa fervura transfira o feijão para a panela lenta.',
        type: 'fact',
        boxText: 'Deixe de molho por 12 horas, descarte a água e ferva a 100°C por 10–30 minutos antes de colocar na panela lenta.'
      }
    ],
    takeaways: [
      'O feijão vermelho cru possui alta concentração de fito-hemaglutinina (PHA), uma lectina tóxica.',
      'O cozimento a 70°C–80°C na panela lenta amplia a toxicidade em vez de neutralizá-la.',
      'Comer poucos grãos mal cozidos provoca vômitos violentos e diarreia em poucas horas.',
      'Feijão em lata é esterilizado a 121°C e pode ser usado com total segurança.',
      'Ferva sempre o feijão seco em borbulhas a 100°C por 10 a 30 minutos antes de colocar na panela lenta.'
    ]
  }
];

const ptPath = path.resolve('src/data/blog.pt.json');
let ptData = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
ptGuides.forEach(g => {
  if (!ptData.some(item => item.slug === g.slug)) {
    ptData.push(g);
    console.log(`✅ Added PT guide: ${g.slug}`);
  }
});
fs.writeFileSync(ptPath, JSON.stringify(ptData, null, 2) + '\n', 'utf8');

// 4. Chinese Guides
const zhGuides = [
  {
    slug: 'melamine-plate-microwave-formaldehyde-leaching-risks',
    title: '密胺餐具与仿瓷碗能否微波加热？热解聚甲醛气体挥发、单体溶出机制与FDA/欧盟迁移安全标准',
    excerpt: '密胺仿瓷碗可以放进微波炉加热吗？深入解析密胺甲醛热固性树脂的热解聚危害、微波介质损耗发热、游离甲醛与三聚氰胺溶出毒性以及欧盟法规迁移阈值。',
    date: wave46Date,
    readTime: '9分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '密胺餐具（仿瓷餐具）以其酷似陶瓷的光泽、卓越的抗摔防跌性能和轻巧质地，在家庭快餐、儿童餐具以及野餐中广泛使用。然而，将密胺碗、碟或杯子放入微波炉加热，是厨房中最危险的操作之一。密胺属于氨基塑料热固性聚合物，由三聚氰胺与甲醛缩聚而成。当暴露于微波辐射和高温环境中时，其交联聚合物网络会迅速发生酸催化水解与热解聚，挥发出一类致癌物甲醛气体，并将剧毒单体溶入食物。本文通过高分子化学与毒理学数据，揭示密胺微波加热的安全底线。',
    sections: [
      {
        title: '1. 树脂化学结构：密胺-甲醛热固性高分子交联网络',
        content: '密胺餐具由密胺-甲醛（MF）树脂与纤维素填料在高温高压下压制固化而成。三聚氰胺单体与甲醛反应形成刚性的次甲基与醚键交联骨架。由于属于热固性聚合物，它受热不会软化融化，而是在超过热阈值时发生不可逆的共价键降解。在室温环境下，固化良好的密胺非常稳定，但在酸性和微波高温下，未反应残留单体与醚键骨架极易断裂分解。',
        type: 'fact',
        boxText: '密胺仿瓷是由甲醛和三聚氰胺缩聚而成的热固性塑料，遇高温不会融化，而是发生化学分解释放毒性单体。'
      },
      {
        title: '2. 微波介质损耗机制：分子偶极极化与局部微观爆聚发热',
        content: '微波炉以2.45 GHz电磁波震荡极性分子（主要是水）产生热量。不同于耐热玻璃或陶瓷等低介电损耗材料，密胺树脂本身具有显著的介电损耗特性。树脂中的极性氨基和醚基会直接吸收微波电磁辐射，导致餐具自身温度迅速飙升至100°C–140°C以上，产生严重的微观局部过热应力，加速聚合物降解。',
        type: 'danger',
        boxText: '密胺餐具会直接吸收微波电磁辐射发生自发性过热，造成微观聚合物网络爆裂降解。'
      },
      {
        title: '3. 游离甲醛溶出：IARC一类致癌物摄入与呼吸道挥发危害',
        content: '密胺微波加热最严重的危险是甲醛的大量释放。国际癌症研究机构（IARC）将甲醛列为一类已知人类致癌物。在高温与酸性介质（如番茄酱、柑橘、醋酸环境pH < 4.5）作用下，密胺餐具的醚键发生酸催化水解，甲醛溶出量激增2000%以上，远远超出欧盟食品接触材料特定迁移限量（SML 15 mg/kg），引发胃肠粘膜损伤与呼吸道急性刺激。',
        type: 'danger',
        boxText: '微波加热酸性食品会导致密胺释放大量游离甲醛，严重超出欧盟法规安全限量。'
      },
      {
        title: '4. 三聚氰胺单体迁移：肾小管结晶与急性肾损伤机制',
        content: '与此同时，三聚氰胺单体也大量迁移进入食物。在人体吸收后，三聚氰胺与微量三聚氰酸结合形成极难溶解的三聚氰胺氰尿酸盐结晶，沉积在肾脏远端肾小管和集合管中，引发机械性肾小管梗阻、血尿及肾损伤。欧洲食品安全局（EFSA）规定三聚氰胺迁移限量为2.5 mg/kg，而微波加热极易打破该安全红线。',
        type: 'warning',
        boxText: '摄入的三聚氰胺会在肾脏形成不溶性结晶，引发肾结石及急性肾脏病变风险。'
      },
      {
        title: '5. 监管禁令、洗碗机老化裂纹与家庭安全防线',
        content: '美国FDA与德国联邦风险评估研究所（BfR）明确警示：严禁使用微波炉加热密胺餐具。此外，洗碗机强碱性洗涤剂长期冲刷会导致密胺表面产生微裂纹（冰裂纹），使得内部树脂暴露面积暴增，甚至在室温下也会加大单体析出。日常安全法则：1）密胺仅用于盛放冷食或室温食物；2）绝不加热或微波；3）出现哑光、发黄或划痕立即废弃；4）微波加热务必选择高硼硅玻璃或高温烧制陶瓷。',
        type: 'fact',
        boxText: '密胺严禁微波加热。表面出现裂纹或褪光应立即废弃，加热食物请使用耐热高硼硅玻璃或陶瓷。'
      }
    ],
    takeaways: [
      '密胺餐具是热固性氨基树脂，微波加热会引发严重的热解聚水解反应。',
      '密胺会直接吸收微波电磁辐射导致餐具过热裂解，温度可超130°C。',
      '加热会导致游离甲醛（IARC一类致癌物）超量溶出，超过欧盟标准数倍。',
      '迁移的三聚氰胺会在肾脏沉积形成结晶，对泌尿系统产生显著肾毒性。',
      '密胺餐具切勿放入微波炉，微波烹饪请选用高硼硅玻璃或安全陶瓷碗。'
    ]
  },
  {
    slug: 'air-fryer-reheating-oil-lipid-oxidation-toxic-aldehydes',
    title: '空气炸锅反复复热油炸食品安全吗？高风速对流油脂过氧化、细胞毒性醛类（MDA与4-HNE）及丙烯醛生成机制',
    excerpt: '用空气炸锅复热剩炸鸡、薯条会产生有害氧化油脂吗？深入探讨强制对流油脂过氧化反应、MDA/4-HNE等细胞毒性醛类生成及科学复热温度建议。',
    date: wave46Date,
    readTime: '10分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '空气炸锅凭借其高速热风对流技术，能让剩饭菜和炸鸡在几分钟内恢复酥脆口感。然而，当频繁用空气炸锅复热富含植物油的精炼油炸食品时，高风速热对流环境极易催化剧烈的油脂过氧化反应。残留在食物表面的多不饱和脂肪酸在高温高氧环境下迅速分解，生成具有细胞毒性的高活性醛类、脂质过氧化氢物以及挥发性丙烯醛。本文从脂质化学角度解析空气炸锅复热机理，助您在享受酥脆的同时守护全家健康。',
    sections: [
      {
        title: '1. 空气动力学原理：强制热对流与超高氧气接触界面的氧化催化',
        content: '空气炸锅依靠高转速离心风机以2–3米/秒的速度驱动热对流，在食物表面形成高湍流边界层。这种机制能迅速蒸发表面水汽形成酥脆外壳，但也成倍放大了表面油脂薄膜与空气中氧气的接触面积。在160°C–200°C高温下，空气炸锅相当于一台微型工业氧化催化器，其油脂氧化速率远超传统静态烤箱或平底锅加热。',
        type: 'fact',
        boxText: '高速热风不断将新鲜氧气注入食物表面的热油脂薄层，极大催化了油脂的热氧化裂解。'
      },
      {
        title: '2. 脂质过氧化机理：精炼多不饱和脂肪酸自由基链式反应',
        content: '商业外卖油炸食品多使用大豆油、玉米油或葵花籽油等富含亚油酸的多不饱和脂肪酸（PUFA）。其分子中的双烯丙基亚甲基碳氢键结合能极弱，受热后迅速脱氢形成自由基，并与氧气结合生成过氧自由基，开启不可逆的自催化链式裂解，大量积聚脂质过氧化氢物。',
        type: 'warning',
        boxText: '精炼植物种子油在空气炸锅对流受热时迅速分解，产生大量自由基与脂质过氧化氢物。'
      },
      {
        title: '3. 细胞毒性醛类：丙二醛（MDA）、4-HNE与DNA加合物形成',
        content: '脂质过氧化氢物进一步降解生成极具毒性的二级氧化产物，其中以丙二醛（MDA）和4-羟基-2-壬烯醛（4-HNE）最具代表性。它们属于高活性亲电试剂，能与细胞膜蛋白结合，并与DNA碱基发生烷基化反应生成致突变加合物，引发全身氧化应激与肠道上皮细胞炎症。',
        type: 'danger',
        boxText: '过度氧化的油脂会生成MDA和4-HNE等醛类毒素，损伤肠道细胞并与细胞DNA发生交联。'
      },
      {
        title: '4. 丙烯醛生成与炸篮底盘过热油烟危害',
        content: '滴落到炸篮底部的油脂在没有水分蒸发保护的情况下温度可达200°C以上，甘油骨架受热脱水分解生成强刺激性有毒气体丙烯醛（Acrolein）。高速热风将丙烯醛气溶胶吹散在食物上并散发至厨房空气中，吸入会引起咽喉与气管刺激。',
        type: 'danger',
        boxText: '滴落在底部的残油超温裂解会生成强刺激性丙烯醛气体，污染厨房空气并附着在食物表面。'
      },
      {
        title: '5. 科学低危害复热指南：温控、油品与清洁维护',
        content: '科学降低风险的复热原则：1）温和温度复热：避免200°C高温，建议调至140°C–160°C温和加热3–5分钟即可达到酥脆效果；2）单次复热法则：绝不反复多次加热同一份油炸食物；3）补充油品选择：若需喷油，选用单不饱和脂肪酸丰富的高稳定性油类（特级初榨橄榄油、牛油果油）或澄清黄油；4）每次清洗底盘：使用后彻底清洁炸锅底盘积油，防止陈年残油在下次烹饪时氧化冒烟。',
        type: 'fact',
        boxText: '复热温度控制在150°C左右，避免二次反复加热，选用高烟点单不饱和油，并及时清洗底盘残油。'
      }
    ],
    takeaways: [
      '空气炸锅的高速热对流显著加速了食物残留油脂的氧化分解速度。',
      '富含多不饱和脂肪酸的种子油在高温加热下易产生MDA和4-HNE等有害醛类。',
      '炸篮底部过热残油会裂解产生挥发性丙烯醛，产生刺鼻烟气并附着于食物。',
      '复热时建议将温度设定在140°C–160°C，短时间加热即可恢复酥脆。',
      '避免同一批食物反复复热，喷油首选耐氧化油类，并及时洗净炸篮油垢。'
    ]
  },
  {
    slug: 'slow-cooker-kidney-bean-phytohaemagglutinin-lectin-safety',
    title: '慢炖锅煮红芸豆中毒风险警示：植物凝集素（PHA）80°C毒性倍增机制与100°C沸水灭活指南',
    excerpt: '为什么生红芸豆直接放进慢炖锅煮会引发严重中毒？解析植物血凝素（PHA）凝集素化学机制、80°C低温反而使毒性激增5倍的生物学悖论及灭活三部曲。',
    date: wave46Date,
    readTime: '9分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '电炖锅和慢炖锅（Slow Cooker）以其长达6至8小时的低温慢炖功能，成为制作浓汤、炖肉和豆泥的省心神器。然而，将生的或仅经过冷水浸泡的干红芸豆直接加入慢炖锅烹煮，是造成急性食物中毒的高发原因。红芸豆天然富含植物血凝素（Phytohaemagglutinin, PHA），属于植物自我防卫性凝集素。慢炖锅低火档温度通常仅在70°C–80°C之间，不仅无法破坏该毒性蛋白，反而会导致其毒性暴增近5倍。本文详解凝集素毒理学机制及安全烹饪法则。',
    sections: [
      {
        title: '1. 什么是植物血凝素（PHA）？豆科植物的天然化学防御武器',
        content: '植物血凝素（PHA）是红芸豆（Phaseolus vulgaris）等豆类植物种子中合成的四聚体糖蛋白凝集素，用于抵御昆虫和真菌啃食。未煮熟的红芸豆中PHA浓度极高，每克生豆含有20,000至70,000个血凝单位（hau）。白芸豆中的含量约为红芸豆的三分之一，而其他豆类含量相对更低。',
        type: 'fact',
        boxText: '植物血凝素（PHA）是红芸豆中的天然毒性凝集素，生豆中含量高达每克70,000血凝单位。'
      },
      {
        title: '2. 慢炖锅温度陷阱：80°C低温竟使凝集素毒性暴增5倍',
        content: 'PHA蛋白结构的彻底变性需要达到100°C充分沸腾。当慢炖锅开启"Low"低火档时，锅内水温缓慢上升并维持在70°C–80°C之间。美国FDA《坏细菌书》（Bad Bug Book）汇编的微生物与毒理学实验证明：80°C加热会使PHA空间构象部分解折叠，暴露更多活性糖结合位点，导致其血凝毒性比未加热生豆暴增近500%。',
        type: 'danger',
        boxText: '在80°C慢炖锅中加热红芸豆不仅无法解毒，反而会使凝集素毒性剧增近5倍。'
      },
      {
        title: '3. 急性中毒病理：小肠上皮细胞凝集与剧烈胃肠炎症状',
        content: '食用仅4至5颗未煮熟的红芸豆，即可在进食后1至3小时内诱发急性食物中毒。未灭活的PHA与小肠上皮细胞表面的糖蛋白受体强力结合，引发肠粘膜微绒毛大面积脱落与细胞凝集，导致突发性剧烈恶心、喷射状呕吐以及急性腹泻。',
        type: 'warning',
        boxText: '中毒潜伏期仅1–3小时，表现为剧烈喷射状呕吐和腹泻，由小肠上皮细胞被凝集素损伤引起。'
      },
      {
        title: '4. 罐头豆子 vs 干豆子：工业高压灭菌的安全性优势',
        content: '超市购买的熟红芸豆罐头（熟豆）可以直接倒入慢炖锅中使用。因为罐头食品在工业封装过程中经历了121°C高压蒸汽杀菌（Retort）长达20–30分钟，凝集素已被彻底破坏至200–400 hau/g以下的安全基线，完全不具备生物毒性。',
        type: 'fact',
        boxText: '市售红芸豆罐头已经过121°C高压完全灭活，可以直接加入慢炖锅烹饪无需二次预沸。'
      },
      {
        title: '5. 干芸豆安全烹饪必经的“沸水灭活三部曲”',
        content: '烹煮干红芸豆的唯一安全法则：1）冷水浸泡：浸泡8至12小时，泡完后务必将浸泡水完全倒掉（不可用原水煮汤）；2）100°C沸水滚煮：换用足量新鲜清水，大火烧至彻底沸腾（100°C），保持剧烈滚沸至少10至30分钟；3）转移慢炖：只有经过沸水充分灭活后的红芸豆，方可捞出加入慢炖锅中与其他食材继续炖煮。',
        type: 'fact',
        boxText: '干豆必须浸泡12小时并倒掉泡豆水，用新鲜清水在100°C大火滚煮10–30分钟后，方可放入慢炖锅。'
      }
    ],
    takeaways: [
      '生红芸豆富含高毒性植物血凝素（PHA），对人体消化道粘膜具有强破坏性。',
      '慢炖锅70°C–80°C低温加热无法破坏凝集素，反而会导致其毒性激增5倍。',
      '误食微量欠熟豆子即可在1–3小时内引发喷射状呕吐和剧烈腹泻。',
      '市售红芸豆罐头已经过121°C工业高压灭活，可安全直接用于慢炖。',
      '干红芸豆必须在100°C沸水中剧烈滚煮10–30分钟彻底灭活后，才可放入慢炖锅炖煮。'
    ]
  }
];

const zhPath = path.resolve('src/data/blog.zh-cn.json');
let zhData = JSON.parse(fs.readFileSync(zhPath, 'utf8'));
zhGuides.forEach(g => {
  if (!zhData.some(item => item.slug === g.slug)) {
    zhData.push(g);
    console.log(`✅ Added ZH guide: ${g.slug}`);
  }
});
fs.writeFileSync(zhPath, JSON.stringify(zhData, null, 2) + '\n', 'utf8');

// 5. Japanese Guides
const jaGuides = [
  {
    slug: 'melamine-plate-microwave-formaldehyde-leaching-risks',
    title: 'メラミン食器の電子レンジ加熱はなぜ危険か？熱解重合によるホルムアルデヒド揮発・モノマー溶出機構とFDA/EU安全基準',
    excerpt: 'メラミン食器を電子レンジで加熱してはいけない科学的理由とは？アミノプラスト樹脂の熱分解、マイクロ波誘電加熱リスク、遊離ホルムアルデヒドおよびメラミン溶出毒性を徹底解説。',
    date: wave46Date,
    readTime: '9分で読める',
    author: 'IsItKitchenSafe',
    intro: 'メラミン食器は、陶器のような滑らかな質感、割れにくさ、軽さから、子ども用食器やアウトドア、外食産業で幅広く愛用されています。しかし、メラミン製の皿やボウルを電子レンジで加熱することは、家庭のキッチンにおいて極めて危険な行為です。メラミン樹脂は三量体メラミンとホルムアルデヒドの縮合重合によって作られた熱硬化性アミノ樹脂です。電子レンジの電磁波と高温にさらされると、架橋高分子構造が急激に熱分解・加水分解を起こし、発がん性物質であるホルムアルデヒドガスを放出し、有害モノマーが食品へ溶出します。高分子化学と毒性学の視点からそのリスクを検証します。',
    sections: [
      {
        title: '1. 樹脂化学：メラミン・ホルムアルデヒド熱硬化性三次元架橋構造',
        content: 'メラミン食器は、三量体メラミン（1,3,5-トリアジン-2,4,6-トリアミン）とホルムアルデヒドを高温高圧下で縮合させた熱硬化性樹脂です。メチレン結合による堅牢な網目構造を持つため、熱可塑性プラスチックのように溶融することはありませんが、限界温度を超えると不可逆的な熱分解が進行します。常温では安定していますが、高温下や酸性環境では結合が断裂しやすくなります。',
        type: 'fact',
        boxText: 'メラミン樹脂は熱硬化性高分子です。熱で溶けることはありませんが、高温下で化学分解し有害モノマーを放出します。'
      },
      {
        title: '2. 電子レンジの誘電加熱リスク：局所的高温とマイクロクラック',
        content: '電子レンジ（2.45 GHz）は水分子などの極性分子を振動させて加熱します。耐熱ガラスと異なり、メラミン樹脂は誘電損失が高く、樹脂中の極性官能基が電磁波を直接吸収します。その結果、器自体が急激に120℃〜140℃以上に達し、内部応力によって微細なクラックが発生し急速に劣化します。',
        type: 'danger',
        boxText: 'メラミン樹脂は電磁波を直接吸収して自己発熱し、130℃以上の局所過熱により分子結合が崩壊します。'
      },
      {
        title: '3. 遊離ホルムアルデヒドの溶出：IARCグループ1発がん物質の危険性',
        content: '最大のリスクは遊離ホルムアルデヒドの溶出です。国際がん研究機関（IARC）はホルムアルデヒドを「ヒトに対する発がん性がある（グループ1）」と分類しています。熱と酸（トマトソース、酢、柑橘類）の作用により、樹脂の結合が酸触媒加水分解を起こし、欧州連合（EU）の特定移行限界値（15 mg/kg）を2,000%以上も超過するホルムアルデヒドが食品中に溶出します。',
        type: 'danger',
        boxText: '酸性食品をメラミン食器でレンジ加熱すると、ホルムアルデヒドがEU規制値を大幅に超えて溶出します。'
      },
      {
        title: '4. メラミンモノマーの移行と腎臓結晶化毒性',
        content: '同時に、メラミンモノマーも食品中に移行します。体内に入ったメラミンは微量のシアヌル酸と結合して極めて水に溶けにくいシアヌル酸メラミン結晶を形成します。これが腎臓の尿細管に沈着し、閉塞性腎障害や結石、急性腎不全を引き起こす恐れがあります。欧州食品安全機関（EFSA）は耐容一日摂取量を厳格に定めています。',
        type: 'warning',
        boxText: '摂取されたメラミンは腎臓で難溶性結晶を作り、急性腎障害や尿路結石を引き起こすリスクがあります。'
      },
      {
        title: '5. 各国規制・食洗機の劣化・安全な使用ルール',
        content: '米FDAおよびドイツ連邦リスク評価研究所（BfR）は、メラミン食器の電子レンジ加熱を固く禁じています。また、食洗機でのアルカリ洗剤洗浄の繰り返しも表面に微細なひび割れを生じさせ、溶出量を増やします。安全のための鉄則：1）メラミンは冷菜や常温料理の盛り付け専用とする；2）絶対にレンジ加熱しない；3）表面の光沢が失われたり変色したものは廃棄する；4）レンジ加熱には耐熱ガラスや陶磁器を使用する。',
        type: 'fact',
        boxText: 'メラミンはレンジ加熱厳禁です。ひび割れたものは処分し、加熱には耐熱ガラスや陶磁器を使用してください。'
      }
    ],
    takeaways: [
      'メラミン食器は熱硬化性アミノ樹脂であり、レンジ加熱により急激に熱加水分解します。',
      '電磁波を直接吸収して器自体が120℃以上に過熱し、構造劣化を招きます。',
      '発がん性物質である遊離ホルムアルデヒドが基準値を超えて食品に溶出します。',
      '溶出したメラミンは腎臓で結晶化し、尿細管閉塞や腎障害を引き起こす恐れがあります。',
      'メラミン食器のレンジ使用は避け、加熱調理には必ず耐熱ガラスや磁器を使用しましょう。'
    ]
  },
  {
    slug: 'air-fryer-reheating-oil-lipid-oxidation-toxic-aldehydes',
    title: 'ノンフライヤーでの揚げ物温め直しは安全か？高風速熱対流による脂質過酸化、細胞毒性アルデヒド（MDA・4-HNE）とアクロレイン発生',
    excerpt: 'ノンフライヤーで揚げ物を再加熱すると有害な過酸化脂質が増えるのか？強制対流による油脂熱酸化、MDA・4-HNEなどの細胞毒性アルデヒド生成機構と安全な再加熱温度。',
    date: wave46Date,
    readTime: '10分で読める',
    author: 'IsItKitchenSafe',
    intro: 'ノンフライヤー（エアフライヤー）は、冷めた揚げ物や惣菜を数分でサクサクに復活させる便利な調理家電です。しかし、植物油を多く含む揚げ物を頻繁に高温再加熱すると、強力な熱風対流によって油脂の過酸化反応が急激に進行します。油膜中の多価不飽和脂肪酸が空気中の酸素と反応し、細胞毒性を持つアルデヒド類や揮発性アクロレインを生成します。脂質化学の視点から、健康被害を防ぎつつ美味しく温め直す科学的プロトコルを解説します。',
    sections: [
      {
        title: '1. 熱風対流による酸素接触面積の増大と急速酸化',
        content: 'ノンフライヤーは毎秒2〜3mの超高速熱風を循環させ、食品表面の境界層に激しい乱流を生じさせます。これにより水分を素早く蒸発させてサクサク感を出しますが、同時に高温（160℃〜200℃）の油膜に大量の酸素を連続供給するため、オーブンやフライパンよりも激しい油脂酸化反応を引き起こします。',
        type: 'fact',
        boxText: '高速熱風が熱い油膜に酸素を絶え間なく送り込み、油脂の熱分解と酸化を劇的に加速させます。'
      },
      {
        title: '2. 多価不飽和脂肪酸（PUFA）のラジカル連鎖反応',
        content: '市販の揚げ物に多用される大豆油やキャノーラ油、コーン油はリノール酸などの多価不飽和脂肪酸を豊富に含みます。その炭素-水素結合は熱で切断されやすく、ラジカル連鎖反応によって極めて不安定な脂質ヒドロペルオキシドが大量に蓄積されます。',
        type: 'warning',
        boxText: '植物油に含まれる多価不飽和脂肪酸はノンフライヤーの対流熱で急速に分解し、過酸化脂質に変化します。'
      },
      {
        title: '3. 細胞毒性アルデヒド：マロンジアルデヒド（MDA）と4-HNEの脅威',
        content: '過酸化脂質はさらに分解され、マロンジアルデヒド（MDA）や4-ヒドロキシ-2-ノネナール（4-HNE）などの有害な二次酸化生成物を生じます。これらは強力な求電子剤としてDNAや細胞タンパク質と結合し、腸内上皮の炎症や動脈硬化のリスクを高めることが報告されています。',
        type: 'danger',
        boxText: '劣化した油はMDAや4-HNEなどの毒性アルデヒドを生成し、細胞膜やDNAにダメージを与えます。'
      },
      {
        title: '4. 底面トレイでのアクロレイン揮発と気道刺激',
        content: 'バスケット底面に落ちた油は水分の冷却効果がないため200℃以上に達し、グリセロールが脱水して強い刺激臭を持つアクロレインガスへ変化します。ファンによってアクロレインのエアロゾルが食品や室内に拡散し、喉や気道を刺激します。',
        type: 'danger',
        boxText: '底に溜まった油が過熱すると刺激性アクロレインガスが発生し、室内空気や食品を汚染します。'
      },
      {
        title: '5. 安全で健康的な温め直しのルール',
        content: '健康を守る再加熱法：1）設定温度を140℃〜160℃に抑え、3〜5分の短時間で加熱する；2）同じ揚げ物を何度も再加熱しない；3）油をスプレーする場合は酸化安定性の高いオリーブオイルやアボカドオイルを選ぶ；4）バスケット底面に溜まった油は使用後毎回きれいに洗浄する。',
        type: 'fact',
        boxText: '150℃前後の短時間加熱を心がけ、複数回の再加熱を避け、トレイの油は毎回きれいに洗いましょう。'
      }
    ],
    takeaways: [
      'ノンフライヤーの高速熱風は揚げ物の油膜の酸化を大幅に加速させます。',
      '植物種子油の再加熱により、MDAや4-HNEなどの有害なアルデヒド類が生成されます。',
      '底面トレイの過熱油から気道刺激性のアクロレインガスが発生します。',
      '温め直しは140℃〜160℃の低温・短時間で行うことが推奨されます。',
      '同じ食品の再加熱を繰り返さず、油受けトレイを常に清潔に保ちましょう。'
    ]
  },
  {
    slug: 'slow-cooker-kidney-bean-phytohaemagglutinin-lectin-safety',
    title: 'スロークッカーでの赤インゲン豆中毒に注意：植物性レクチン（PHA）80℃での毒性倍増機構と100℃沸騰失活プロトコル',
    excerpt: '生の赤インゲン豆をスロークッカーに入れると激しい食中毒になるのはなぜか？植物性血球凝集素（PHA）の化学構造、80℃で毒性が5倍に跳ね上がる理由と完全除毒法。',
    date: wave46Date,
    readTime: '9分で読める',
    author: 'IsItKitchenSafe',
    intro: 'スロークッカーは材料を入れて放置するだけでじっくり煮込み料理が作れる便利な調理器です。しかし、乾燥した生の赤インゲン豆（キドニービーンズ）や浸水しただけの豆を直接スロークッカーに入れて加熱すると、重篤な急性食中毒を引き起こします。赤インゲン豆には植物性ヘマグルチニン（フィトヘマグルチニン、PHA）という毒性レクチンが含まれています。スロークッカーの低温（70℃〜80℃）ではこのレクチンが分解されないばかりか、毒性が最大5倍に跳ね上がることが判明しています。生化学的知見に基づく安全な調理法を解説します。',
    sections: [
      {
        title: '1. フィトヘマグルチニン（PHA）とは？豆の防衛レクチン',
        content: 'フィトヘマグルチニン（PHA）は、赤インゲン豆（Phaseolus vulgaris）に高濃度で含まれる四量体糖タンパク質です。生の赤インゲン豆は1gあたり20,000〜70,000赤血球凝集単位（hau）のPHAを含有しており、害虫や菌類から身を守る防御機構として働いています。',
        type: 'fact',
        boxText: 'フィトヘマグルチニン（PHA）は生の赤インゲン豆に高濃度に含まれる毒性レクチンです。'
      },
      {
        title: '2. スロークッカーの落とし穴：80℃加熱で毒性が5倍に増大',
        content: 'PHAのタンパク質立体構造を完全に破壊して毒性を失活させるには、100℃の激しい沸騰状態が必要です。スロークッカーの「弱」設定では温度が70℃〜80℃程度にしかなりません。米FDAの調査によると、80℃の中途半端な加熱ではPHAの部分的変性により糖結合部位が露出し、未調理の生豆よりも毒性が約5倍に強まることが実証されています。',
        type: 'danger',
        boxText: 'スロークッカーの80℃加熱ではPHAレクチンは分解されず、逆に毒性が最大5倍に強まります。'
      },
      {
        title: '3. 急性中毒症状：腸管上皮細胞の凝集と激しい胃腸炎',
        content: '加熱不足の豆をわずか4〜5粒食べただけでも、1〜3時間以内に激しい中毒症状が現れます。PHAが小腸上皮細胞の受容体に結合して微絨毛を破壊し、細胞を凝集させることで、激しい吐き気、噴出性の嘔吐、重度の下痢を引き起こします。',
        type: 'warning',
        boxText: '食後1〜3時間で激しい嘔吐や下痢が突然発症します。小腸の細胞が凝集・損傷することが原因です。'
      },
      {
        title: '4. 水煮缶詰 vs 乾燥豆：工業用レトルト滅菌の安全性',
        content: '市販のキドニービーンズ水煮缶詰はスロークッカーに直接入れても全く問題ありません。缶詰は製造段階で121℃の高温高圧レトルト殺菌を20〜30分受けており、PHAレクチンは完全に失活しています。',
        type: 'fact',
        boxText: '市販の水煮缶詰は121℃の高圧処理済みのため、そのままスロークッカーに入れて安全に使用できます。'
      },
      {
        title: '5. 乾燥豆を調理する際の必須3ステップ',
        content: '乾燥豆を使用する場合の必須手順：1）冷水で8〜12時間以上浸水させ、浸水した水は必ず完全に捨てる；2）新しい水をたっぷり張り、強火で激しく沸騰（100℃）させ、最低でも10分〜30分間グラグラと沸騰させ続ける；3）完全に沸騰加熱した後に豆を取り出し、スロークッカーに移して他の具材と煮込む。',
        type: 'fact',
        boxText: '12時間浸水させて水を捨て、新しい水で100℃で10〜30分間しっかり沸騰させてからスロークッカーに入れましょう。'
      }
    ],
    takeaways: [
      '生の赤インゲン豆には強力な植物性レクチン（PHA）が高濃度に含まれています。',
      'スロークッカーの70℃〜80℃加熱はレクチンを壊せず、毒性を最大5倍に高めます。',
      '加熱不十分な豆を食べると、1〜3時間以内に激しい嘔吐や下痢を発症します。',
      '市販の水煮缶詰は121℃で加圧加熱処理されており、そのまま安全に使えます。',
      '乾燥豆は必ず半日浸水して水を捨て、100℃で10分〜30分以上沸騰させてから煮込みましょう。'
    ]
  }
];

const jaPath = path.resolve('src/data/blog.ja.json');
let jaData = JSON.parse(fs.readFileSync(jaPath, 'utf8'));
jaGuides.forEach(g => {
  if (!jaData.some(item => item.slug === g.slug)) {
    jaData.push(g);
    console.log(`✅ Added JA guide: ${g.slug}`);
  }
});
fs.writeFileSync(jaPath, JSON.stringify(jaData, null, 2) + '\n', 'utf8');

console.log('=== WAVE 46 GUIDES GENERATION COMPLETE (68 -> 71) ===');
