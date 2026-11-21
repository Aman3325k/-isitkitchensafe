const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-21';

console.log('=== GENERATING WAVE 50 AUTHORITATIVE SAFETY GUIDES (74 -> 77) ACROSS 5 LANGUAGES ===');

// ==========================================
// 1. ENGLISH GUIDES
// ==========================================
const enGuides = [
  {
    slug: 'oven-self-cleaning-pyrolysis-toxic-fumes-bird-safety',
    title: 'Oven Self-Cleaning Pyrolysis Fumes, Polymer Off-Gassing & Avian Respiratory Lethality: 500°C Thermal Breakdown, Toxic Gases & Safe Alternatives',
    excerpt: 'Why does the self-cleaning oven cycle prove rapidly fatal to pet birds and trigger polymer fume fever in humans? Discover the 500°C pyrolysis chemistry of PTFE gaskets, CO spikes, and safe baking-soda alternatives.',
    date: waveDate,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'The pyrolytic self-cleaning cycle found in modern residential ovens is an extreme thermal process engineered to incinerate encrusted food soils, greases, and sugars by sustaining internal cavity temperatures between 450°C and 500°C (842°F to 932°F) for two to four hours. While marketed as an effortless push-button convenience, pyrolytic self-cleaning represents the single highest continuous thermal stress event an appliance will ever encounter in a home. In doing so, it triggers violent chemical cracking of organic soils, off-gasses lethal fluoropolymer pyrolysis products from internal PTFE door gaskets, releases toxic concentrations of carbon monoxide (CO) and acrolein, and poses an immediate, fatal threat to companion birds. Here is the peer-reviewed toxicology, thermochemistry, and veterinary science governing pyrolytic oven operation.',
    sections: [
      {
        title: '1. Thermochemistry of 500°C (932°F) Pyrolysis: Carbon Cracking, Carbon Monoxide & Acrolein Spikes',
        content: 'At standard culinary baking temperatures (150°C to 220°C / 300°F to 425°F), organic macromolecules undergo controlled Maillard browning and caramelization. However, when the oven thermostat ramps to 500°C (932°F) in a restricted-oxygen pyrolytic cleaning state, fats, carbohydrates, and proteins undergo thermal pyrolysis—breaking carbon-carbon and carbon-hydrogen covalent bonds without full combustion. This incomplete decomposition cracks triglycerides into volatile acrolein (2-propenal, an intense pulmonary and mucosal lacrimator), formaldehyde, polycyclic aromatic hydrocarbons (PAHs), and fine particulate matter (PM2.5, frequently spiking beyond 400 μg/m³). Furthermore, oxygen starvation within the sealed oven chamber forces incomplete oxidation of carbonaceous ash, generating substantial surges of carbon monoxide (CO) that migrate past appliance door seals into kitchen living spaces.',
        type: 'warning',
        boxText: 'Pyrolysis at 500°C cracks grease into acrolein, PAHs, and carbon monoxide, spiking indoor PM2.5 levels beyond 400 μg/m³.'
      },
      {
        title: '2. Fluoropolymer Gaskets & Hidden PTFE: Carbonyl Fluoride, PFIB & Polymer Fume Fever',
        content: 'Beyond food residue pyrolysis, a far more insidious hazard stems from fluoropolymers engineered into the oven construction. Many conventional ovens utilize polytetrafluoroethylene (PTFE)-coated door gaskets, non-stick fan baffles, or internal wiring insulation rated only for standard operation. When subjected to temperatures exceeding 260°C (500°F), PTFE begins polymer chain degradation; above 350°C (660°F), it depolymerizes rapidly into sub-micron fluoropolymer aerosols and reactive gases. Above 400°C, thermal oxidation yields toxic carbonyl fluoride (COF2, which rapidly hydrolyzes into corrosive hydrofluoric acid in human and animal lungs), perfluoroisobutylene (PFIB, tenfold more toxic than phosgene gas), and trifluoroacetic acid (TFA). Inhaling these fumes induces \"polymer fume fever\" (Teflon flu) in humans, manifesting as acute chills, rigors, dyspnea, and retrosternal chest pain.',
        type: 'warning',
        boxText: 'PTFE gaskets and coatings decompose above 350°C, releasing carbonyl fluoride and fluoropolymer aerosols that cause Teflon flu.'
      },
      {
        title: '3. Avian Respiratory Vulnerability: The Extreme Lethality of Fluoropolymer Pyrolysis to Birds',
        content: 'Veterinary toxicologists widely recognize fluorocarbon and pyrolysis inhalation as the leading cause of sudden indoor avian mortality. Unlike mammals, who possess elastic alveolar lungs with tidal bidirectional airflow, birds possess rigid parabronchial lungs connected to an expansive network of nine thin-walled air sacs. Avian respiration operates on continuous unidirectional airflow with a counter-current capillary gas exchange system that is ten times more efficient than human lungs, supported by an ultra-thin blood-gas diffusion barrier (0.1 μm thick). When pyrolytic fluoropolymer aerosols and carbonyl fluoride enter avian airways, they destroy pulmonary surfactant, induce massive alveolar microvascular hemorrhage, and trigger catastrophic pulmonary edema. Pet birds (cockatiels, parrots, parakeets) frequently asphyxiate and perish within 15 to 30 minutes of cycle initiation, even when kept in adjacent rooms.',
        type: 'fact',
        boxText: 'Avian unidirectional airflow and ultra-thin blood-gas barriers make pet birds lethally vulnerable to airborne fluorocarbons within minutes.'
      },
      {
        title: '4. Appliance Reliability & Structural Wear: Thermal Fuse Tripping, Glass Shattering & Control Board Failure',
        content: 'Appliance repair technicians consistently identify pyrolytic self-cleaning as the leading cause of catastrophic electronic and mechanical oven failures. Sustaining 500°C places severe thermal expansion strain on tempered door glass assemblies, frequently inducing spontaneous micro-fracture propagation. Crucially, the extreme heat radiative flux radiates outward into the control console chassis, where surface-mount capacitors and microprocessor relays on electronic control boards (PCBs) suffer solder reflow fatigue and dielectric breakdown. Furthermore, high-limit thermal safety cutoffs (thermal fuses) calibrated to trip at 120°C–140°C on the outer chassis frequently blow, permanently locking the motorized door latch mechanism and rendering the appliance inoperable.',
        type: 'warning',
        boxText: 'Sustained 500°C heat causes electronic control board failure, thermal fuse blowout, and spontaneous tempered door glass fracture.'
      },
      {
        title: '5. Non-Toxic, Zero-Emission Cleaning Protocols: Sodium Bicarbonate Saponification & Steam Lift',
        content: 'To achieve pristine oven hygiene without generating toxic gaseous emissions or stressing appliance components, food science recommends non-thermal alkaline saponification. Create a paste of 3 parts sodium bicarbonate (baking soda) and 1 part water, and spread it over oven interior walls (avoiding heating elements and gasket seals). Leave the alkaline paste overnight; the weak base hydrolyzes baked-on ester fats into water-soluble glycerol soaps. The following morning, wipe away loosened grime and mist lightly with 5% white vinegar (dilute acetic acid); the resulting gentle carbonic acid effervescence lifts remaining carbon deposits cleanly without producing a single toxic molecule or volatile gas.',
        type: 'tip',
        boxText: 'Use baking soda paste overnight to saponify grease into soap, followed by a vinegar mist, avoiding all toxic fumes.'
      }
    ],
    conclusion: 'While pyrolytic self-cleaning offers convenience, its operation at 500°C produces toxic off-gassing of fluoropolymer aerosols, acrolein, and carbon monoxide that pose acute respiratory hazards to humans and absolute, fatal lethality to companion birds. Furthermore, the extreme thermal stress significantly increases appliance breakdown rates. Eliminating the use of the pyrolytic cycle in favor of non-toxic baking soda saponification safeguards family respiratory health, protects pets, and extends the operating lifespan of kitchen appliances.',
    faqs: [
      {
        question: 'Why does running the self-clean cycle kill pet birds in other rooms?',
        answer: 'Birds have a unique respiratory anatomy featuring continuous unidirectional airflow across rigid parabronchia with an ultra-thin blood-gas barrier (0.1 µm). Pyrolytic temperatures (500°C) cause PTFE gaskets and internal oven components to decompose into sub-micron fluoropolymer aerosols and carbonyl fluoride gas. When inhaled, these gases destroy avian pulmonary surfactant and cause rapid hemorrhagic pulmonary edema, suffocating birds within 15 to 30 minutes even across separate rooms.'
      },
      {
        question: 'What are the symptoms of "Teflon Flu" (polymer fume fever) in humans?',
        answer: 'Polymer fume fever in humans presents within 4 to 10 hours after inhaling fluoropolymer pyrolysis degradation products. Symptoms mimic severe influenza, including shivering, high fever, intense headache, retrosternal chest tightness, malaise, dry cough, and shortness of breath. Symptoms typically resolve within 24 to 48 hours, but repeated exposure can induce acute chemical pneumonitis and long-term lung injury.'
      },
      {
        question: 'Can pyrolytic self-cleaning produce dangerous levels of carbon monoxide?',
        answer: 'Yes. Pyrolysis in a closed oven chamber represents incomplete thermal cracking of organic carbonaceous food soils under oxygen-restricted conditions. This process releases significant surges of carbon monoxide (CO) into residential kitchens. In homes without high-CFM external range hood exhaust ventilation, indoor CO concentrations can easily exceed OSHA and WHO safety thresholds.'
      },
      {
        question: 'Why do appliance repair technicians advise against using the oven self-clean feature?',
        answer: 'Modern ovens are packed with sensitive microprocessors, digital touchscreens, and relays located directly above or behind the oven cavity. The extreme, sustained 500°C heat degrades wiring insulation, desolders electronic components, blows non-resettable thermal safety fuses, and warps door latch solenoids, making self-cleaning the #1 cause of post-warranty oven repair calls.'
      },
      {
        question: 'What is the safest, chemical-free way to clean a heavily soiled oven?',
        answer: 'The safest, proven method is non-thermal alkaline saponification: coat the interior with a paste of baking soda (sodium bicarbonate) and water, let it sit for 8–12 hours to break fatty acids down into water-soluble soap, scrape away softened residue, and spray with white vinegar to lift carbonized spots via gentle foaming action.'
      }
    ],
    relatedTools: [
      {
        name: 'Oven Self-Cleaning Pyrolysis Fume & Off-Gassing Simulator',
        url: '/tools/oven-self-cleaning-pyrolysis-simulator/'
      },
      {
        name: 'Air Fryer Non-Stick Teflon Fluoropolymer Off-Gassing Modeler',
        url: '/tools/air-fryer-teflon-fluoropolymer-modeler/'
      },
      {
        name: 'Air Fryer vs Deep Fryer Lipid Oxidation & 4-HNE Modeler',
        url: '/tools/air-fryer-lipid-oxidation-modeler/'
      }
    ]
  },
  {
    slug: 'melamine-dishes-formaldehyde-migration-microwave-acid-safety',
    title: 'Melamine Tableware, Formaldehyde Migration & Microwave Acidic Leaching: Polymer Degradation, Kidney Toxicity & FDA Safety Limits',
    excerpt: 'Is melamine tableware safe for hot soup or microwaving? Explore the hydrolytic cleavage of melamine-formaldehyde resins, acidic food leaching kinetics, renal crystal formation, and FDA/EFSA standards.',
    date: waveDate,
    readTime: '8 min read',
    author: 'IsItKitchenSafe',
    intro: 'Melamine tableware—renowned for its porcelain-like sheen, vibrant colors, lightweight durability, and shatter resistance—is ubiquitous in outdoor dining, childcare centers, and Asian noodle houses worldwide. Chemically, melamine dinnerware is manufactured through the high-pressure polymerization of melamine (1,3,5-triazine-2,4,6-triamine) and formaldehyde (methanal) to create an insoluble thermosetting plastic resin. However, toxicological and materials science investigations have established that melamine-formaldehyde polymers are not chemically inert. Under exposure to heat above 70°C (158°F), microwave electromagnetic fields, or acidic food contact (pH < 4.5), the thermoset matrix undergoes irreversible hydrolytic degradation, releasing free monomers of toxic melamine and mutagenic formaldehyde directly into meals. Here is the food contact chemistry and nephrotoxicity behind melamine.',
    sections: [
      {
        title: '1. The Polymer Chemistry of Melamine Resin: Thermoset Crosslinking & Unreacted Monomer Residues',
        content: 'Melamine dinnerware is synthesized via the polycondensation of melamine monomer with formaldehyde under heat (140°C to 160°C) and compression molding. This reaction forms a rigid three-dimensional thermoset polymer network interconnected by methylene ether bridges (-CH2-O-CH2-) and methylene bridges (-CH2-). Under ideal manufacturing controls, over 99% of precursors are bound within the cured polymer. However, commercial variations in curing temperature, stoichiometric ratios, and resin compression time leave measurable fractions of unpolymerized residual monomers trapped within the polymeric interstitial voids. Furthermore, substandard manufacturing occasionally substitutes urea-formaldehyde into core layers, which exhibits far lower chemical stability and higher monomer mobility.',
        type: 'fact',
        boxText: 'Melamine dinnerware is a cured thermoset resin, but unreacted free monomers remain trapped within the polymer matrix.'
      },
      {
        title: '2. Acidic & Thermal Hydrolysis: How Hot Soups (70°C+) & Citrus Accelerate Chemical Leaching',
        content: 'While melamine tableware remains structurally stable at room temperature, thermodynamics dictates that exposure to hot liquids accelerates chemical mass transfer. When hot acidic foods (such as tomato bisque, tom yum soup, citrus sauces, or chili, pH 3.0 to 4.5) are served in melamine bowls at temperatures exceeding 70°C (158°F), hydronium ions (H3O+) catalyze the hydrolytic cleavage of methylene ether linkages. A landmark clinical study published in JAMA Internal Medicine demonstrated that healthy volunteers eating hot noodle soup from melamine bowls exhibited immediate, substantial spikes in urinary melamine excretion compared to those consuming the identical soup from ceramic bowls. Leaching rates increase exponentially with each 10°C rise in food temperature.',
        type: 'warning',
        boxText: 'Hot acidic foods above 70°C catalyze polymer hydrolysis, dramatically spiking dietary melamine and formaldehyde migration.'
      },
      {
        title: '3. The Microwave Total Prohibition: Dielectric Heating, Resin Blistering & Formaldehyde Off-Gassing',
        content: 'Regulatory health agencies including the US FDA, European Food Safety Authority (EFSA), and Japan Food Sanitation Law strictly prohibit microwaving melamine tableware under any circumstance. Unlike microwave-safe polymers such as virgin polypropylene (PP, recycling code 5), melamine resin possesses a polar chemical structure that couples strongly with 2.45 GHz microwave radiation. Electromagnetic excitation induces rapid, violent dielectric heating within the polymer bulk itself, rather than heating the food alone. This internal localized thermal stress causes thermal decomposition, microscopic crazing, surface blistering, and immediate volatilization of formaldehyde gas into the microwave chamber.',
        type: 'warning',
        boxText: 'Never microwave melamine. Polar resin absorbs microwave radiation directly, causing internal delamination and toxic gas release.'
      },
      {
        title: '4. Renal Toxicology & Pathology: Melamine Cyanurate Crystals & Chronic Kidney Disease Risks',
        content: 'Once ingested, dietary melamine is rapidly absorbed across the gastrointestinal tract and enters systemic circulation. Melamine undergoes minimal hepatic metabolism and is cleared renally by glomerular filtration. However, in the acidic microenvironment of the renal collecting ducts and distal tubules, melamine readily complexes with endogenous uric acid or trace food cyanuric acid via strong multivalent hydrogen bonding. This forms insoluble, needle-shaped melamine-uric acid or melamine-cyanurate micro-crystals that physically abrade tubular epithelial cells, induce intra-tubular obstruction, trigger inflammatory cascades, and generate urolithiasis (kidney stones) and chronic nephrotoxicity.',
        type: 'fact',
        boxText: 'Ingested melamine complexes with uric acid in the kidneys to form insoluble micro-crystals, causing tubular damage and kidney stones.'
      },
      {
        title: '5. Safe Dining Guidelines: Cold Food Serving, Gentle Washing & Transitioning to Inert Materials',
        content: 'To eliminate toxic exposure while utilizing existing melamine tableware: (1) Restrict melamine strictly to cold or room-temperature foods, such as salads, chilled fruits, sandwiches, and dry snacks; (2) Never use melamine for boiling soups, freshly brewed coffee, or acidic dressings; (3) Hand-wash melamine gently using soft sponges and neutral pH detergents—never scrub with abrasive scouring pads or wire wool, which erode the protective glazed surface and increase monomer leaching by over 300%; (4) Immediately discard any plate or bowl exhibiting surface dulling, crazing, micro-cracks, or discoloration; and (5) For everyday family meals, transition to inert materials like tempered soda-lime/borosilicate glass, lead-free glazed ceramics, or food-grade 18/8 stainless steel.',
        type: 'tip',
        boxText: 'Use melamine only for cold foods, hand-wash with soft sponges, discard scratched items, or switch to glass, ceramic, and stainless steel.'
      }
    ],
    conclusion: 'Melamine tableware provides shatterproof durability, but its thermosetting polymer resin hydrolyzes when exposed to temperatures above 70°C, acidic foods, or microwave radiation, leaching nephrotoxic melamine and carcinogenic formaldehyde. Melamine must never be microwaved or used for boiling hot foods. For safe kitchen operation, reserve melamine exclusively for cold service or transition to chemically inert glass, ceramic, and stainless steel alternatives.',
    faqs: [
      {
        question: 'Can I put melamine bowls or plates in the microwave?',
        answer: 'No, absolutely not. The FDA and EFSA strictly prohibit microwaving melamine. The resin absorbs microwave energy directly, causing severe localized dielectric overheating, blistering, irreversible polymer breakdown, and the off-gassing of toxic formaldehyde into food and ambient air.'
      },
      {
        question: 'Is it safe to serve hot soup in a melamine bowl?',
        answer: 'Serving hot soup (especially above 70°C / 158°F) or acidic broths in melamine bowls significantly accelerates chemical leaching. Clinical studies in JAMA Internal Medicine confirmed that individuals eating hot noodle soup from melamine bowls excreted dramatically elevated levels of melamine in their urine within hours of consumption. Hot liquids should always be served in ceramic, glass, or stainless steel.'
      },
      {
        question: 'What health risks are associated with chronic dietary melamine ingestion?',
        answer: 'Chronic dietary ingestion of melamine causes accumulation in the kidneys, where it binds with uric acid to form insoluble crystalline precipitates. These micro-crystals obstruct renal tubules, leading to chronic kidney injury, hematuria, urolithiasis (kidney stones), and elevated risks of chronic kidney disease (CKD), particularly in children and vulnerable populations.'
      },
      {
        question: 'Can melamine tableware be washed safely in a commercial or home dishwasher?',
        answer: 'Melamine tableware is typically labeled top-rack dishwasher safe, but high-temperature residential sanitizing cycles (above 70°C) and harsh alkaline detergents degrade the protective glazed resin surface over time. Once the glaze dulls or micro-scratches appear, chemical leaching increases dramatically. Hand washing with soft non-abrasive sponges is recommended.'
      },
      {
        question: 'How can you tell if a melamine plate is too worn and needs to be thrown away?',
        answer: 'Inspect the eating surface: if the glossy finish has become dull, chalky, discolored, or shows visible knife scratches, the protective surface glaze has eroded. Scratched or degraded melamine leaches significantly higher concentrations of melamine and formaldehyde and should be retired from food service immediately.'
      }
    ],
    relatedTools: [
      {
        name: 'Melamine Tableware Formaldehyde & Cyanuric Acid Leaching Modeler',
        url: '/tools/melamine-tableware-formaldehyde-modeler/'
      },
      {
        name: 'Plastic Kitchen Food Contact Chemical Migration Predictor',
        url: '/tools/food-contact-migration-predictor/'
      },
      {
        name: 'Canned Food BPA Leaching & Epoxy-Phenolic Hydrolysis Modeler',
        url: '/tools/canned-food-bpa-leaching-modeler/'
      }
    ]
  },
  {
    slug: 'copper-cookware-verdigris-toxicity-acidic-food-leaching-safety',
    title: 'Copper Cookware Toxicity, Acidic Food Leaching & Verdigris Formation: Acute Copper Toxicity, Lining Integrity (Tin vs Stainless) & FDA Rules',
    excerpt: 'Can unlined copper pans make you sick? Understand copper ion dissolution into tomato sauces, verdigris (copper carbonate/acetate) toxicity, tinning wear thresholds, and FDA food-contact mandates.',
    date: waveDate,
    readTime: '8 min read',
    author: 'IsItKitchenSafe',
    intro: 'Copper cookware has long occupied the pinnacle of professional culinary gastronomy, revered by master chefs for its peerless thermal conductivity of 385 W/(m·K)—more than five times greater than cast iron and twenty times greater than stainless steel. This lightning-fast heat diffusion guarantees razor-sharp temperature control and eliminates hot spots. However, pure elemental copper is an electrochemically reactive transition metal. When acidic ingredients, moist oxygen, or culinary salts encounter bare copper surfaces, copper rapidly oxidizes, dissolving ionic copper (Cu²⁺) and synthesizing toxic copper carbonate and copper acetate salts known colloquially as verdigris. Ingestion of these leached compounds induces severe, acute gastrointestinal toxicity and hepatic stress. Here is the metallurgical, electrochemical, and regulatory science of copper kitchen safety.',
    sections: [
      {
        title: '1. Reactive Metallurgy & Electrochemical Dissolution: Cu²⁺ Ion Leaching in Acidic Environments (pH < 6.0)',
        content: 'Elemental copper possesses standard reduction potentials (Cu²⁺ + 2e⁻ ⇌ Cu, E° = +0.34 V) that render it susceptible to acid-assisted oxidative dissolution in the presence of dissolved atmospheric oxygen. When culinary ingredients with low pH values—such as tomato passata (pH 4.0–4.4), red wine reductions (pH 3.2–3.6), vinegar, lemon juice, or fruit preserves—are heated in unlined copper cookware, organic acids (citric, malic, acetic, and oxalic) act as chelating ligands. This electrochemical reaction dissolves cupric ions (Cu²⁺) directly into the food matrix. Controlled laboratory assays demonstrate that simmering tomato sauce in bare copper for 30 minutes can cause copper concentrations to surge past 50 to 100 mg/kg, massively surpassing safety thresholds.',
        type: 'warning',
        boxText: 'Acidic foods (pH < 6.0) dissolve reactive copper ions, easily driving food copper levels past 50–100 mg/kg in under 30 minutes.'
      },
      {
        title: '2. The Danger of Verdigris: Copper Carbonate, Copper Acetate & Acute Heavy Metal Toxicity',
        content: 'When bare copper is exposed to humid ambient air, atmospheric moisture and carbon dioxide slowly react with the metal surface to form a green or blue-green patina consisting of basic copper carbonate [Cu2CO3(OH)2]. When exposed to acetic acid or culinary residues, it forms copper(II) acetate [Cu(CH3COO)2]. These toxic corrosion complexes are known as \"verdigris\". Verdigris salts are highly water- and lipid-soluble. When ingested, free cupric ions act as powerful gastric irritants, triggering violent, acute emesis (vomiting), profuse watery diarrhea, severe abdominal cramping, and metallic taste. In severe exposures, systemic copper absorption induces intravascular hemolysis, methemoglobinemia, acute tubular necrosis, and acute liver failure.',
        type: 'warning',
        boxText: 'Green verdigris (copper carbonate/acetate) is water-soluble and highly toxic, inducing violent vomiting, hemolysis, and hepatic damage.'
      },
      {
        title: '3. Lining Metallurgy: Traditional Hand-Wiped Tin (Melting Point 232°C) vs Modern 18/10 Stainless Steel Cladding',
        content: 'To harness copper’s unmatched thermal conductivity while physically segregating reactive copper from food, cookware artisans line the cooking interior with an unreactive metallic barrier. Historically, this is achieved through hand-wiped molten tin (Sn). Pure elemental tin is non-toxic, chemically inert to culinary acids, and naturally non-stick. However, tin possesses an exceptionally low melting point of just 232°C (450°F). Preheating a dry lined pan on high heat or searing meat will effortlessly melt or blister the tin lining. In contrast, modern bi-metal and tri-metal cookware bonds a 0.2–0.5 mm layer of 18/10 austenitic stainless steel to the copper exterior using high-pressure roll bonding. Stainless steel linings withstand temperatures exceeding 500°C without melting, offering indestructible durability at the expense of slight non-stick release.',
        type: 'fact',
        boxText: 'Tin linings melt at just 232°C (450°F) requiring gentle heat, while stainless-clad copper resists extreme searing temperatures indefinitely.'
      },
      {
        title: '4. Regulatory Standards: FDA Food Code 4-101.14 & WHO Tolerable Upper Intake Limits for Copper',
        content: 'Food safety authorities worldwide strictly regulate culinary copper contact. The US FDA Food Code § 4-101.14 explicitly mandates that copper and copper alloys (such as brass) may not be used in contact with food that has a pH below 6.0, such as vinegar, fruit juices, or wine, nor in dispensing equipment. The European Food Safety Authority (EFSA) and the World Health Organization (WHO) have established the Tolerable Upper Intake Level (UL) for dietary copper at 5.0 mg/day for adults, with an acute toxic threshold starting at just 10–15 mg in a single meal. Ingesting food cooked in worn copper pans routinely breaches these safety limits tenfold.',
        type: 'fact',
        boxText: 'FDA Food Code § 4-101.14 prohibits bare copper food contact for foods with a pH below 6.0; WHO sets adult upper intake at 5.0 mg/day.'
      },
      {
        title: '5. The Exception: When Bare Copper is Safe & Culinary Rules for Retinning',
        content: 'There are two celebrated traditional culinary exceptions where bare, unlined copper is not only safe, but scientifically advantageous: (1) Sugar confectionery and jam-making: Pure sugar syrups and fruit jellies cooked at high brix concentrations lack the free water activity to dissolve copper, while copper ions form complexes with pectin that enhance jelly set; and (2) Whisking egg whites in unlined copper bowls: Copper ions bond with ovotransferrin proteins in egg whites to form a stable conalbumin complex that prevents egg white foams from over-coagulating or weeping. Outside these specific applications, inspect your lined copper pans rigorously: whenever tin wear exposes a patch of bare copper larger than a US quarter (24 mm) or verdigris appears, discontinue cooking immediately and send the pan to a professional coppersmith for retinning.',
        type: 'tip',
        boxText: 'Bare copper is safe only for high-sugar jams and whisking egg whites. Retin pans when exposed copper exceeds the size of a coin.'
      }
    ],
    conclusion: 'Copper cookware delivers unmatched culinary thermal precision, but unlined copper reacts vigorously with acidic ingredients to leach toxic cupric ions and form green verdigris, causing severe gastrointestinal illness. Always utilize copper lined with pristine tin or stainless steel for general savory cooking, respect the 232°C thermal limit of tin, reserve unlined copper exclusively for confectionery and egg whites, and retin pans promptly when protective linings wear through.',
    faqs: [
      {
        question: 'Can cooking in an unlined copper pan cause copper poisoning?',
        answer: 'Yes. Cooking acidic foods (such as tomatoes, wine, citrus, or vinegar with a pH below 6.0) in unlined copper dissolves toxic cupric ions directly into food. Consuming as little as 10 to 15 mg of dissolved copper can trigger acute copper toxicity, resulting in violent vomiting, severe abdominal cramps, diarrhea, and potential liver stress within hours.'
      },
      {
        question: 'What is verdigris and why is it extremely dangerous on cookware?',
        answer: 'Verdigris is the blue-green patina of basic copper carbonate [Cu2CO3(OH)2] or copper acetate that forms when copper reacts with moisture, atmospheric carbon dioxide, and organic acids. Verdigris is soluble in gastrointestinal fluids; ingesting it can cause severe gastrointestinal ulceration, hemolysis, methemoglobinemia, and acute renal failure.'
      },
      {
        question: 'Why are traditional copper pans lined with tin instead of being left bare?',
        answer: 'Tin is chemically inert to food acids, non-toxic, and prevents reactive food contact with elemental copper. It also has a crystal structure that bonds seamlessly to copper during hot hand-wiping. However, tin melts at 232°C (450°F), so tinned copper pans must never be preheated empty or used over high heat.'
      },
      {
        question: 'When does a lined copper pan need to be retinned?',
        answer: 'A tinned copper pan must be professionally retinned when the tin layer wears away from repeated cooking and cleaning, exposing bare copper patches larger than the size of a coin (approximately 20–25 mm in diameter) on the interior cooking surface.'
      },
      {
        question: 'Why do pastry chefs specifically use unlined copper bowls for egg whites?',
        answer: 'Whisking egg whites in a clean, unlined copper bowl causes trace copper ions (Cu²⁺) to dislodge and bind with the egg protein ovotransferrin (conalbumin). This forms an extremely stable complex that prevents ovalbumin from over-coagulating, yielding glossy, voluminous meringues that resist weeping and collapse.'
      }
    ],
    relatedTools: [
      {
        name: 'Copper Cookware Verdigris Formation & Toxicity Modeler',
        url: '/tools/copper-cookware-toxicity-modeler/'
      },
      {
        name: 'Cast Iron Acidic Leaching & Seasoning Stripping Guide',
        url: '/blog/cast-iron-acidic-tomato-sauce-iron-leaching-guide/'
      },
      {
        name: 'Stainless Steel Heavy Metal Leaching (Nickel & Chromium) Modeler',
        url: '/tools/stainless-steel-heavy-metal-leaching-modeler/'
      }
    ]
  }
];

// ==========================================
// 2. SPANISH (ES) GUIDES
// ==========================================
const esGuides = [
  {
    slug: 'oven-self-cleaning-pyrolysis-toxic-fumes-bird-safety',
    title: 'Humos de Autolimpieza Pirolítica de Hornos, Gases de Descomposición y Letalidad Aviar: Pirólisis a 500°C, Emisiones Tóxicas y Alternativas Seguras',
    excerpt: '¿Por qué la autolimpieza pirolítica del horno resulta fatal para las aves domésticas y causa fiebre de polímeros en humanos? Descubra la química térmica a 500°C, descomposición de PTFE y alternativas seguras.',
    date: waveDate,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'El ciclo de autolimpieza pirolítica de los hornos modernos es un proceso térmico extremo diseñado para incinerar grasa y restos de comida alcanzando temperaturas internas de entre 450°C y 500°C (842°F a 932°F) durante dos a cuatro horas. Aunque se comercializa como una gran comodidad, la autolimpieza pirolítica somete al electrodoméstico a su mayor estrés térmico, desencadenando la termólisis de grasas, desprendimiento de gases tóxicos de juntas de PTFE, picos de monóxido de carbono (CO) y acroleína, y representando un peligro letal e inmediato para las aves domésticas. Aquí analizamos la toxicología, la termoquímica y la ciencia veterinaria de este proceso.',
    sections: [
      {
        title: '1. Termoquímica de la Pirólisis a 500°C: Craqueo Térmico de Carbono, Monóxido de Carbono y Acroleína',
        content: 'A temperaturas habituales de horneado (150°C a 220°C), los alimentos experimentan reacciones de Maillard controladas. Sin embargo, cuando el horno alcanza los 500°C en un ambiente con oxígeno restringido, las grasas y proteínas sufren pirólisis térmica. Este proceso incompleto rompe los triglicéridos generando acroleína volátil (un fuerte irritante mucoso y pulmonar), formaldehído, hidrocarburos aromáticos policíclicos (HAP) y partículas finas (PM2.5, que superan con frecuencia los 400 μg/m³). Además, la falta de oxígeno produce un exceso de monóxido de carbono (CO) que se filtra hacia la cocina.',
        type: 'warning',
        boxText: 'La pirólisis a 500°C degrada las grasas en acroleína, HAP y monóxido de carbono, disparando las partículas PM2.5 a más de 400 μg/m³.'
      },
      {
        title: '2. Juntas de Fluoropolímeros y PTFE Oculto: Fluoruro de Carbonilo, PFIB y Fiebre de Polímeros',
        content: 'Más allá de la grasa, un peligro crítico radica en los fluoropolímeros del horno. Muchos hornos tienen juntas de estanqueidad o recubrimientos con PTFE (teflón). Por encima de 260°C el PTFE inicia su degradación y a partir de 350°C se depolimeriza en aerosoles y vapores tóxicos. Superados los 400°C se generan fluoruro de carbonilo (COF2, que forma ácido fluorhídrico en los pulmones) y perfluoroisobutileno (PFIB, diez veces más tóxico que el fosgeno). Respirar estos gases desencadena la "fiebre de polímeros" o gripe del teflón en humanos, con escalofríos, fiebre y opresión torácica.',
        type: 'warning',
        boxText: 'Las juntas de PTFE se degradan por encima de 350°C liberando fluoruro de carbonilo y gases que provocan la fiebre del teflón.'
      },
      {
        title: '3. Vulnerabilidad Respiratoria Aviar: Letalidad Extrema de los Gases de Pirólisis en Aves',
        content: 'Los veterinarios señalan la inhalación de vapores de teflón y pirólisis como causa principal de muerte súbita en aves de compañía. Las aves poseen pulmones parabronquiales rígidos y un flujo de aire unidireccional con sacos aéreos, logrando un intercambio de oxígeno diez veces más eficiente que el mamífero gracias a una barrera sangre-aire ultrafina (0.1 μm). Al inhalar fluoropolímeros y COF2, se destruye el surfactante pulmonar, desencadenando hemorragias masivas y edema pulmonar fatal. Loros, periquitos y canarios mueren asfixiados en cuestión de 15 a 30 minutos, incluso estando en habitaciones lejanas.',
        type: 'fact',
        boxText: 'El sistema respiratorio de las aves y su barrera tisular ultrafina las hace letalmente vulnerables a los fluorocarbonos en pocos minutos.'
      },
      {
        title: '4. Averías del Horno y Estrés Mecánico: Fusibles Térmicos, Rotura de Cristales y Placas Electrónicas',
        content: 'Los técnicos de electrodomésticos señalan la autolimpieza pirolítica como la causa #1 de averías graves en hornos. El calor extremo a 500°C produce dilataciones bruscas que pueden fracturar el vidrio templado de la puerta. Además, la radiación térmica alcanza las placas de control electrónico (PCB), fatigando soldaduras y condensadores. Los fusibles térmicos de seguridad calibrados para 120°C–140°C se funden con frecuencia, bloqueando la puerta de forma permanente y dejando el horno inservible hasta su reparación.',
        type: 'warning',
        boxText: 'El calor sostenido a 500°C quema placas electrónicas, funde fusibles térmicos y puede fracturar el cristal de la puerta.'
      },
      {
        title: '5. Limpieza No Tóxica y Libre de Emisiones: Saponificación con Bicarbonato y Vapor de Vinagre',
        content: 'Para limpiar el horno sin emitir gases tóxicos ni averiar los circuitos, la ciencia recomienda la saponificación alcalina: aplique una pasta de 3 partes de bicarbonato sódico con 1 parte de agua sobre las paredes del horno (evitando resistencias y gomas). Déjela actuar toda la noche; el bicarbonato hidroliza las grasas transformándolas en jabones solubles. Por la mañana, retire la suciedad reblandecida y pulverice vinagre blanco; la efervescencia suave de ácido carbónico desprende los restos carbonizados sin generar ni un solo vapor tóxico.',
        type: 'tip',
        boxText: 'Use pasta de bicarbonato sódico durante la noche y vinagre blanco por la mañana para limpiar el horno de forma 100% segura.'
      }
    ],
    conclusion: 'Aunque la autolimpieza pirolítica parece cómoda, sus 500°C generan fluoropolímeros tóxicos, acroleína y monóxido de carbono que provocan problemas respiratorios en personas y muerte instantánea en aves domésticas. Además, desgasta prematuramente el horno. Reemplazarla por la saponificación casera con bicarbonato y vinagre protege la salud de su hogar y alarga la vida del electrodoméstico.',
    faqs: [
      {
        question: '¿Por qué la autolimpieza del horno mata a los pájaros domésticos en otras habitaciones?',
        answer: 'Las aves tienen un sistema respiratorio parabronquial con flujo unidireccional y una barrera sangre-aire ultrafina (0.1 µm). A 500°C, las juntas de PTFE liberan fluoruro de carbonilo y aerosoles tóxicos que destruyen su surfactante pulmonar, provocando hemorragias y asfixia en 15 a 30 minutos, incluso en otras plantas de la casa.'
      },
      {
        question: '¿Cuáles son los síntomas de la "gripe del teflón" en seres humanos?',
        answer: 'La fiebre por vapores de polímeros aparece entre 4 y 10 horas tras inhalar gases de pirólisis de fluoropolímeros. Produce escalofríos intensos, fiebre alta, dolor de cabeza, opresión en el pecho, tos seca y dificultad respiratoria, similar a una gripe severa.'
      },
      {
        question: '¿Produce monóxido de carbono peligroso el ciclo pirolítico del horno?',
        answer: 'Sí. La pirólisis en un compartimento cerrado provoca la combustión incompleta de la grasa con oxígeno limitado, generando importantes emisiones de monóxido de carbono (CO) que pueden superar los límites seguros en cocinas sin ventilación forzada potente.'
      },
      {
        question: '¿Por qué los técnicos desaconsejan usar la función de autolimpieza?',
        answer: 'Las placas electrónicas, pantallas táctiles y sensores del horno están situados justo sobre la cavidad de cocción. El calor continuo a 500°C quema soldaduras, funde fusibles térmicos no reseteables y bloquea motores de cierre de puerta, siendo la avería post-garantía más habitual.'
      },
      {
        question: '¿Cuál es la forma más segura y ecológica de limpiar un horno muy sucio?',
        answer: 'El método ideal es la saponificación alcalina: unte el interior con una pasta de bicarbonato y agua, déjela reposar de 8 a 12 horas para disolver la grasa, retire los restos y rocíe con vinagre blanco para ablandar las manchas difíciles mediante efervescencia suave.'
      }
    ],
    relatedTools: [
      {
        name: 'Simulador de Humos de Autolimpieza Pirolítica y Gases de Horno',
        url: '/es/tools/oven-self-cleaning-pyrolysis-simulator/'
      },
      {
        name: 'Modelador de Gases de Teflón en Freidoras de Aire',
        url: '/es/tools/air-fryer-teflon-fluoropolymer-modeler/'
      },
      {
        name: 'Modelador de Oxidación Lipídica y 4-HNE en Freidoras',
        url: '/es/tools/air-fryer-lipid-oxidation-modeler/'
      }
    ]
  },
  {
    slug: 'melamine-dishes-formaldehyde-migration-microwave-acid-safety',
    title: 'Vajilla de Melamina, Migración de Formaldehído y Lixiviación Ácida en Microondas: Degradación de Polímeros, Toxicidad Renal y Límites de la FDA',
    excerpt: '¿Es segura la vajilla de melamina para sopas calientes o microondas? Analice la hidrólisis de resinas de melamina-formaldehído, lixiviación ácida, cálculos renales y normas sanitarias FDA/EFSA.',
    date: waveDate,
    readTime: '8 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'La vajilla de melamina —apreciada por su brillo similar a la porcelana, ligereza y resistencia a caídas— es muy popular en comedores infantiles, campings y restaurantes. Químicamente se fabrica polimerizando melamina (1,3,5-triazina-2,4,6-triamina) y formaldehído para crear una resina termoendurecible infusible. Sin embargo, investigaciones toxicológicas han demostrado que esta resina no es químicamente inerte: cuando se expone a calor superior a 70°C (158°F), microondas o alimentos ácidos (pH < 4.5), la matriz polimérica sufre hidrólisis, liberando monómeros libres de melamina tóxica y formaldehído mutagénico en la comida. Aquí detallamos los mecanismos de migración y la nefrotoxicidad.',
    sections: [
      {
        title: '1. Química Polimérica de la Resina de Melamina: Red Termoestable y Monómeros Residuales',
        content: 'La vajilla de melamina se produce mediante policondensación de melamina y formaldehído a 140°C–160°C bajo compresión. Se crea una red polimérica tridimensional unida por puentes metileno y metilen-éter. En condiciones de fabricación óptimas el 99% de los reactivos queda inmovilizado. Sin embargo, variaciones en temperatura de curado y presión dejan fracciones de monómeros libres no reaccionados en los intersticios del polímero. Además, fabricantes de bajo coste a veces mezclan urea-formaldehído, de mucha menor estabilidad química.',
        type: 'fact',
        boxText: 'La melamina es una resina termoestable, pero siempre retiene monómeros libres atrapados en su estructura.'
      },
      {
        title: '2. Hidrólisis Térmica y Ácida: Por Qué Sopas Calientes (70°C+) y Cítricos Aceleran la Lixiviación',
        content: 'A temperatura ambiente la melamina es estable, pero el calor acelera la transferencia de masa. Cuando se sirven alimentos calientes y ácidos (sopas de tomate, caldos cítricos, salsas con vinagre, pH 3.0 a 4.5) a más de 70°C, los iones hidronio catalizan la rotura de los enlaces de la resina. Un estudio clínico en JAMA Internal Medicine comprobó que voluntarios que consumieron sopa de fideos caliente en cuencos de melamina presentaron una excreción urinaria masiva de melamina en comparación con quienes usaron cerámica.',
        type: 'warning',
        boxText: 'Alimentos calientes y ácidos a más de 70°C catalizan la hidrólisis del polímero, disparando la lixiviación de melamina y formaldehído.'
      },
      {
        title: '3. Prohibición Absoluta en Microondas: Calentamiento Dieléctrico y Vapores de Formaldehído',
        content: 'Organismos sanitarios como la FDA de EE.UU. y la EFSA europea prohíben estrictamente introducir vajilla de melamina en el microondas. A diferencia de plásticos aptos como el polipropileno puro, la melamina tiene una estructura polar que absorbe con violencia la radiación microondas a 2.45 GHz. Esta excitación dieléctrica sobrecalienta el interior de la propia resina, provocando ampollas superficiales, agrietamiento microscópico y la inmediata vaporización de gas formaldehído hacia los alimentos.',
        type: 'warning',
        boxText: 'Nunca meta melamina al microondas: absorbe la radiación directamente, rompiendo la resina y liberando formaldehído tóxico.'
      },
      {
        title: '4. Toxicología y Patología Renal: Cristales de Cianurato de Melamina y Daño Tubular',
        content: 'Una vez ingerida, la melamina se absorbe con rapidez y pasa a la sangre, filtrándose por los riñones. Sin embargo, en el entorno ácido de los túbulos renales, la melamina se une con ácido úrico o trazas de ácido cianúrico mediante puentes de hidrógeno multivalentes. Esta unión forma microcristales insolubles en forma de aguja que obstruyen los túbulos, erosionan el epitelio renal, desencadenan inflamación y provocan cálculos renales y nefrotoxicidad crónica.',
        type: 'fact',
        boxText: 'La melamina ingerida cristaliza con ácido úrico en los riñones formando cristales insolubles que dañan los túbulos renales.'
      },
      {
        title: '5. Pautas de Uso Seguro: Alimentos Fríos, Lavado Suave y Materiales Inertes',
        content: 'Para evitar riesgos si usa vajilla de melamina: (1) Limítela estrictamente a alimentos fríos o templados, como ensaladas, bocadillos o fruta; (2) Nunca sirva en ella sopas hirviendo, café caliente o salsas muy ácidas; (3) Lávela a mano con esponjas suaves y jabones neutros —jamás use estropajos abrasivos que rayan el esmalte protector y multiplican la lixiviación por tres; (4) Deseche platos con superficie mate, arañazos profundos o manchas; y (5) Para uso diario familiar, sustitúyala por vidrio templado, cerámica esmaltada sin plomo o acero inoxidable 18/8.',
        type: 'tip',
        boxText: 'Use melamina solo para platos fríos, lávela con esponja suave, deseche piezas rayadas y prefiera vidrio o cerámica.'
      }
    ],
    conclusion: 'La melamina ofrece ligereza y resistencia a golpes, pero se hidroliza ante alimentos calientes (>70°C), ácidos o en microondas, liberando melamina nefrotóxica y formaldehído. Nunca caliente melamina en el microondas ni vierta líquidos hirviendo. Resérvela para servir en frío o renueve su vajilla con vidrio, cerámica o acero inoxidable.',
    faqs: [
      {
        question: '¿Se pueden calentar platos de melamina en el microondas?',
        answer: 'No, bajo ningún concepto. La FDA y la EFSA prohíben calentar melamina en el microondas. La resina absorbe las microondas directamente, alcanzando temperaturas extremas que degradan el polímero y liberan vapores de formaldehído tóxico en la comida.'
      },
      {
        question: '¿Es seguro tomar sopa caliente en un plato o bol de melamina?',
        answer: 'No es aconsejable. Con líquidos calientes a más de 70°C o sopas ácidas (tomate, cítricos), la resina se descompone y libera monómeros. Estudios clínicos en JAMA Internal Medicine demostraron niveles elevados de melamina en la orina de personas que tomaron sopa caliente en cuencos de melamina.'
      },
      {
        question: '¿Qué daños a la salud provoca la exposición continuada a la melamina?',
        answer: 'La melamina se acumula en los riñones y reacciona con el ácido úrico formando cristales insolubles que obstruyen los túbulos renales, aumentando el riesgo de cálculos renales, hematuria e insuficiencia renal crónica, especialmente en niños.'
      },
      {
        question: '¿Se puede lavar la melamina en el lavavajillas?',
        answer: 'Aunque muchos fabricantes indican que es apta para la bandeja superior, el agua muy caliente y los detergentes abrasivos van desgastando la capa protectora externa. Una vez que pierde brillo o se raya, la lixiviación de formaldehído se multiplica. Se aconseja lavado suave a mano.'
      },
      {
        question: '¿Cómo saber cuándo retirar y tirar un plato de melamina?',
        answer: 'Debe desecharse de inmediato cuando la superficie pierda su brillo característico, adquiera un aspecto opaco o rugoso, presente decoloraciones o tenga marcas profundas de cuchillo, ya que el esmalte protector se ha desgastado.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Lixiviación de Formaldehído en Vajilla de Melamina',
        url: '/es/tools/melamine-tableware-formaldehyde-modeler/'
      },
      {
        name: 'Predictor de Migración Química en Plásticos de Cocina',
        url: '/es/tools/food-contact-migration-predictor/'
      },
      {
        name: 'Modelador de Lixiviación de BPA en Alimentos Enlatados',
        url: '/es/tools/canned-food-bpa-leaching-modeler/'
      }
    ]
  },
  {
    slug: 'copper-cookware-verdigris-toxicity-acidic-food-leaching-safety',
    title: 'Toxicidad de Utensilios de Cobre, Lixiviación en Alimentos Ácidos y Cardenillo: Intoxicación por Cobre, Revestimientos (Estaño vs Inox) y Normativa FDA',
    excerpt: '¿Pueden las sartenes de cobre sin revestir resultar tóxicas? Conozca la disolución de iones de cobre en tomate, la toxicidad del cardenillo, el desgaste del estañado y las reglas de seguridad de la FDA.',
    date: waveDate,
    readTime: '8 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'El cobre es el metal más valorado en la alta gastronomía por su conductividad térmica inigualable de 385 W/(m·K), cinco veces superior al hierro fundido y veinte veces mayor que el acero inoxidable. Difunde el calor de forma casi instantánea eliminando puntos calientes. Sin embargo, el cobre puro es un metal de transición químicamente reactivo: en contacto con alimentos ácidos, humedad y sales, se oxida con facilidad liberando iones de cobre (Cu²⁺) y formando carbonato y acetato de cobre, conocidos como cardenillo o verdín. Su ingestión provoca irritación gastrointestinal aguda y toxicidad hepática. Aquí explicamos la ciencia metalúrgica, electroquímica y sanitaria del cobre en cocina.',
    sections: [
      {
        title: '1. Metalurgia Reactiva y Disolución Electroquímica: Lixiviación de Cu²⁺ en Medios Ácidos (pH < 6.0)',
        content: 'El cobre elemental es susceptible a la disolución oxidativa facilitada por ácidos en presencia de oxígeno. Cuando alimentos con pH bajo —como salsa de tomate (pH 4.0–4.4), reducciones de vino tinto (pH 3.2–3.6), vinagre o zumo de limón— se calientan en cobre sin forrar, los ácidos orgánicos actúan como agentes quelantes. Esta reacción disuelve iones cúpricos (Cu²⁺) en la comida. Ensayos de laboratorio demuestran que cocinar salsa de tomate durante 30 minutos en cobre desnudo puede elevar la concentración de cobre por encima de 50 a 100 mg/kg, rebasando con creces los límites de seguridad.',
        type: 'warning',
        boxText: 'Alimentos ácidos (pH < 6.0) disuelven cobre reactivo, superando con creces los 50–100 mg/kg en menos de 30 minutos.'
      },
      {
        title: '2. El Peligro del Cardenillo: Carbonato y Acetato de Cobre y Toxicidad Aguda',
        content: 'Cuando el cobre sin estañar entra en contacto con el aire húmedo, el dióxido de carbono y la humedad forman una pátina verdosa o azulada de carbonato básico de cobre. Con restos de vinagre o vino forma acetato de cobre. Esta corrosión se conoce popularmente como cardenillo o verdín. Estas sales son muy solubles: al ingerirlas provocan vómitos violentos inmediatos, diarreas abundantes, dolor abdominal agudo y sabor fuertemente metálico. En exposiciones mayores causa hemólisis intravascular, metahemoglobinemia y fallo hepático agudo.',
        type: 'warning',
        boxText: 'El cardenillo verde (carbonato/acetato de cobre) es muy soluble y altamente tóxico, causando vómitos agudos y daño hepático.'
      },
      {
        title: '3. Metalurgia de Revestimientos: Estaño Tradicional (Fusión 232°C) vs Acero Inoxidable 18/10',
        content: 'Para disfrutar de la conductividad del cobre sin exponer la comida a toxicidad, los fabricantes recubren el interior con un metal inerte. Tradicionalmente se usa estaño puro aplicado a mano: es inerte a los ácidos alimentarios y naturalmente antiadherente. Sin embargo, el estaño se funde a solo 232°C (450°F); calentar una sartén vacía al fuego funde el estaño al instante. Por ello, las ollas modernas unen mediante alta presión una fina lámina de acero inoxidable 18/10 al exterior de cobre, resistiendo más de 500°C con máxima durabilidad.',
        type: 'fact',
        boxText: 'El estaño se funde a solo 232°C exigiendo fuego suave, mientras que el cobre con interior de acero inoxidable es indestructible al calor.'
      },
      {
        title: '4. Normativas Sanitarias: Código Alimentario FDA § 4-101.14 y Límites de la OMS',
        content: 'Las autoridades sanitarias mundiales regulan con firmeza el uso del cobre culinario. El Código de Alimentos de la FDA estadounidense (§ 4-101.14) prohíbe taxativamente el contacto de cobre desnudo o latón con alimentos con un pH inferior a 6.0 (como vinagres, zumos, salsas o vino). La EFSA y la OMS fijan la Ingesta Máxima Tolerable (UL) de cobre para adultos en 5.0 mg al día, con umbral tóxico agudo a partir de 10–15 mg en una sola comida, cifra que se supera fácilmente al cocinar en ollas de cobre desgastadas.',
        type: 'fact',
        boxText: 'La FDA prohíbe el cobre desnudo para alimentos con pH menor a 6.0; la OMS establece el límite diario en 5.0 mg para adultos.'
      },
      {
        title: '5. Cuándo es Seguro el Cobre Desnudo y Reglas para el Re-estañado',
        content: 'Existen dos excepciones tradicionales donde el cobre puro es seguro y beneficioso: (1) Confitería y mermeladas: las altas concentraciones de azúcar impiden que el agua libre disuelva el cobre, y los iones favorecen la gelificación de la pectina; y (2) Montar claras de huevo en boles de cobre: los iones se unen a la proteína ovotransferrina formando un complejo que estabiliza la espuma y evita que se corte. Fuera de estos casos, vigile su menaje estañado: si el desgaste deja al descubierto una zona de cobre mayor que una moneda (2 cm) o surge verdín, cese su uso y envíelo a reestañar.',
        type: 'tip',
        boxText: 'El cobre desnudo es seguro solo para mermeladas y montar claras. Si el cobre asoma en el fondo de una olla, reestáñela de inmediato.'
      }
    ],
    conclusion: 'El menaje de cobre ofrece la mejor difusión térmica del mundo culinario, pero el cobre sin revestir reacciona con ácidos desprendiendo iones tóxicos y cardenillo verde. Cocine siempre en sartenes con interior de estaño o acero inoxidable en perfecto estado, respete el límite térmico del estaño a 232°C y reestañe sus piezas cuando el revestimiento se desgaste.',
    faqs: [
      {
        question: '¿Cocinar en una sartén de cobre sin revestimiento puede causar intoxicación?',
        answer: 'Sí. Cocinar alimentos ácidos (tomate, vino, limón o vinagre, con pH inferior a 6.0) en cobre sin forrar disuelve iones cúpricos tóxicos. Ingerir entre 10 y 15 mg de cobre disuelto basta para provocar intoxicación aguda con vómitos violentos, cólicos estomacales y diarrea en cuestión de horas.'
      },
      {
        question: '¿Qué es el cardenillo y por qué es tan peligroso en cazos y sartenes?',
        answer: 'El cardenillo es la pátina verde o azulada de carbonato o acetato de cobre formada por humedad, dióxido de carbono y ácidos. Es muy soluble en el estómago; ingerirlo provoca quemaduras mucosas, vómitos agudos, diarrea y posible daño renal y hepático severo.'
      },
      {
        question: '¿Por qué las ollas de cobre tradicionales van recubiertas de estaño?',
        answer: 'El estaño es totalmente inocuo para la salud, no reacciona con los ácidos de los alimentos y crea una barrera física que impide la lixiviación de cobre. Su inconveniente es que se funde a 232°C (450°F), por lo que nunca debe precalentarse una sartén de cobre estañado vacía.'
      },
      {
        question: '¿Cuándo es necesario volver a estañar una sartén de cobre?',
        answer: 'Debe enviarse a un estañador profesional cuando el uso y el lavado desgasten el estaño interior y dejen visible un parche de cobre desnudo del tamaño de una moneda (unos 20 mm de diámetro).'
      },
      {
        question: '¿Por qué los pasteleros usan cuencos de cobre sin forrar para batir claras de huevo?',
        answer: 'Al batir claras en un bol de cobre limpio, trazas mínimas de iones de cobre se combinan con la proteína ovotransferrina de la clara, creando un complejo estable que evita que el merengue se corte o libere agua, produciendo una espuma mucho más firme y homogénea.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Toxicidad y Cardenillo en Utensilios de Cobre',
        url: '/es/tools/copper-cookware-toxicity-modeler/'
      },
      {
        name: 'Guía de Desgaste y Lixiviación Ácida en Sartenes de Hierro Fundido',
        url: '/es/blog/cast-iron-acidic-tomato-sauce-iron-leaching-guide/'
      },
      {
        name: 'Modelador de Lixiviación de Metales Pesados en Acero Inoxidable',
        url: '/es/tools/stainless-steel-heavy-metal-leaching-modeler/'
      }
    ]
  }
];

// ==========================================
// 3. PORTUGUESE (PT) GUIDES
// ==========================================
const ptGuides = [
  {
    slug: 'oven-self-cleaning-pyrolysis-toxic-fumes-bird-safety',
    title: 'Fumos de Autolimpeza Pirolítica do Forno, Emissão de Gases Tóxicos e Letalidade Aviária: Pirólise a 500°C, Degradação de PTFE e Métodos Seguros',
    excerpt: 'Por que a autolimpeza pirolítica é fatal para pássaros domésticos e causa febre de polímeros em humanos? Descubra a química térmica a 500°C, degradação de vedações de PTFE e alternativas ecológicas.',
    date: waveDate,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'O ciclo de autolimpeza pirolítica presente nos fornos domésticos modernos é um processo térmico extremo projetado para incinerar resíduos de gordura e alimentos ao elevar as temperaturas internas entre 450°C e 500°C (842°F a 932°F) durante duas a quatro horas. Embora comercializado como uma facilidade prática, a autolimpeza pirolítica submete o eletrodoméstico ao maior pico de estresse térmico de sua vida útil, liberando gases tóxicos provenientes de vedações de PTFE, picos de monóxido de carbono (CO) e acroleína, e criando uma ameaça fatal imediata para aves de estimação. Conheça a toxicologia, a termoquímica e a medicina veterinária por trás desse processo.',
    sections: [
      {
        title: '1. Termoquímica da Pirólise a 500°C: Quebra Térmica de Gorduras, Monóxido de Carbono e Acroleína',
        content: 'Em temperaturas usuais de cozimento (150°C a 220°C), os alimentos passam por reações controladas de Maillard. Contudo, ao atingir 500°C sob oxigênio restrito, as gorduras sofrem pirólise térmica. Essa quebra incompleta de triglicerídeos gera acroleína volátil (irritante pulmonar severo), formaldeído, hidrocarbonetos policíclicos aromáticos (HPAs) e partículas finas (PM2.5, que superam rotineiramente 400 μg/m³). Além disso, a falta de oxigênio gera altas emissões de monóxido de carbono (CO) para o ambiente.',
        type: 'warning',
        boxText: 'A pirólise a 500°C quebra gorduras em acroleína, HPAs e monóxido de carbono, elevando o PM2.5 acima de 400 μg/m³.'
      },
      {
        title: '2. Vedações de Fluoropolímeros e PTFE: Fluoreto de Carbonila, PFIB e Febre dos Polímeros',
        content: 'Além dos resíduos de gordura, um risco grave vem dos componentes de fluoropolímero do forno. Muitos fornos utilizam borrachas de vedação ou revestimentos internos tratados com PTFE (Teflon). Acima de 260°C o PTFE inicia degradação e acima de 350°C depolimeriza-se em aerossóis tóxicos. A 400°C formam-se fluoreto de carbonila (COF2, que gera ácido fluorídrico nos pulmões) e perfluoroisobutileno (PFIB, dez vezes mais tóxico que o fosgênio). A inalação desses gases provoca a febre dos polímeros (gripe do teflon) em humanos.',
        type: 'warning',
        boxText: 'Vedações de PTFE se degradam acima de 350°C liberando fluoreto de carbonila e gases que causam febre dos polímeros.'
      },
      {
        title: '3. Vulnerabilidade Respiratória das Aves: Letalidade Imediata dos Gases de Pirólise',
        content: 'Médicos veterinários identificam a inalação de fumos de teflon e pirólise como principal causa de morte súbita em aves domésticas. As aves possuem pulmões parabronquiais rígidos e fluxo de ar unidirecional com sacos aéreos, alcançando troca gasosa dez vezes mais eficiente que mamíferos através de uma barreira sangue-gás ultrafina (0.1 μm). Ao inalar aerossóis de fluoropolímeros e COF2, o surfactante pulmonar é destruído, gerando hemorragia alveolar massiva e edema fulminante. Calopsitas, periquitos e papagaios asfixiam-se em 15 a 30 minutos, mesmo em outros cômodos.',
        type: 'fact',
        boxText: 'O sistema respiratório das aves e sua barreira celular ultrafina tornam-nas letalmente vulneráveis a fluorocarbonos em minutos.'
      },
      {
        title: '4. Danos ao Eletrodoméstico e Falhas Elétricas: Fusíveis Térmicos, Vidro Quebrado e Placas Queimadas',
        content: 'Técnicos de manutenção apontam a autolimpeza pirolítica como a maior causadora de defeitos graves em fornos. O calor contínuo de 500°C gera dilatação extrema, podendo trincar o vidro temperado da porta. A radiação térmica afeta as placas de circuito impresso (PCBs), descolando soldas e danificando relés. Fusíveis térmicos de segurança calibrados para 120°C–140°C queimam com frequência, travando a porta eletrônica do forno de forma permanente.',
        type: 'warning',
        boxText: 'O calor contínuo de 500°C danifica placas eletrônicas, queima fusíveis térmicos e pode estilhaçar o vidro da porta.'
      },
      {
        title: '5. Higienização Não Tóxica e Sem Fumaça: Saponificação com Bicarbonato e Vinagre',
        content: 'Para limpar o forno sem emitir gases tóxicos e sem desgastar os circuitos elétricos, recomenda-se a saponificação alcalina: espalhe uma pasta de 3 partes de bicarbonato de sódio e 1 parte de água pelas paredes do forno (evitando resistências e borrachas). Deixe agir durante a noite; a alcalinidade hidrolisa as gorduras, transformando-as em sabão solúvel. Pela manhã, remova a sujeira amolecida e borrife vinagre de álcool; a leve efervescência de ácido carbônico remove a carbonização com total segurança.',
        type: 'tip',
        boxText: 'Aplique pasta de bicarbonato de sódio à noite e borrife vinagre pela manhã para limpar o forno sem qualquer gás nocivo.'
      }
    ],
    conclusion: 'Embora a autolimpeza pirolítica ofereça praticidade, seus 500°C liberam aerossóis de fluoropolímeros, acroleína e monóxido de carbono com risco respiratório humano e letalidade imediata para aves. Ela também reduz a vida útil do forno. A saponificação natural com bicarbonato e vinagre garante um forno limpo sem ameaçar sua família ou seus animais.',
    faqs: [
      {
        question: 'Por que o ciclo de autolimpeza do forno é fatal para pássaros em outros cômodos?',
        answer: 'Pássaros têm sistema respiratório parabronquial com fluxo contínuo e barreira sangue-gás ultrafina (0.1 µm). A 500°C, vedações e peças com PTFE liberam fluoreto de carbonila e aerossóis que destroem o surfactante pulmonar das aves, causando hemorragia e sufocamento em 15 a 30 minutos, mesmo em outros andares.'
      },
      {
        question: 'Quais são os sintomas da "gripe do teflon" em seres humanos?',
        answer: 'A febre dos fumos de polímero manifesta-se entre 4 e 10 horas após a inalação de gases de pirólise de teflon. Os sintomas assemelham-se a uma gripe intensa: calafrios, febre alta, dor de cabeça, aperto no peito, tosse seca e falta de ar, com duração típica de 24 a 48 horas.'
      },
      {
        question: 'A autolimpeza do forno produz monóxido de carbono em níveis perigosos?',
        answer: 'Sim. A queima em ambiente com oxigênio reduzido provoca pirólise incompleta da gordura, gerando picos expressivos de monóxido de carbono (CO) que podem ultrapassar os limites de segurança da OMS em cozinhas residenciais sem exaustão potente.'
      },
      {
        question: 'Por que técnicos recomendam evitar a função de autolimpeza pirolítica?',
        answer: 'Os módulos eletrônicos, displays digitais e relés ficam instalados acima da cavidade do forno. O calor de 500°C deteriora soldas, queima fusíveis térmicos descartáveis e trava trincos de porta, sendo o defeito pós-garantia mais frequente em oficinas de assistência técnica.'
      },
      {
        question: 'Qual é o método mais seguro e eficaz para limpar um forno muito engordurado?',
        answer: 'O método ideal é a saponificação caseira com bicarbonato de sódio: espalhe pasta de bicarbonato e água, deixe descansar por 8 a 12 horas para desmanchar a gordura, passe um pano e finalize borrifando vinagre branco para desprender as manchas difíceis sem vapores tóxicos.'
      }
    ],
    relatedTools: [
      {
        name: 'Simulador de Fumaça de Autolimpeza Pirolítica e Gases Tóxicos no Forno',
        url: '/pt/tools/oven-self-cleaning-pyrolysis-simulator/'
      },
      {
        name: 'Modelador de Gases de Teflon em Fritadeiras de Ar',
        url: '/pt/tools/air-fryer-teflon-fluoropolymer-modeler/'
      },
      {
        name: 'Modelador de Oxidação Lipídica e 4-HNE em Fritadeiras',
        url: '/pt/tools/air-fryer-lipid-oxidation-modeler/'
      }
    ]
  },
  {
    slug: 'melamine-dishes-formaldehyde-migration-microwave-acid-safety',
    title: 'Louças de Melamina, Migração de Formaldeído e Lixiviação Ácida no Micro-ondas: Degradação de Polímeros, Toxicidade Renal e Limites da FDA',
    excerpt: 'Louça de melamina é segura para sopas quentes ou micro-ondas? Conheça a hidrólise de resinas de melamina-formaldeído, lixiviação ácida, cálculos renais e normas de segurança da FDA/EFSA.',
    date: waveDate,
    readTime: '8 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'A louça de melamina — valorizada pelo visual idêntico à porcelana, leveza e alta resistência a quedas — é muito comum em creches, restaurantes orientais e piqueniques. Do ponto de vista químico, é produzida pela policondensação de melamina (1,3,5-triazina-2,4,6-triamina) e formaldeído sob alta pressão e calor para formar uma resina termorrígida. Contudo, pesquisas toxicológicas provaram que a melamina não é quimicamente inerte: ao entrar em contato com calor acima de 70°C (158°F), radiação de micro-ondas ou alimentos ácidos (pH < 4.5), a matriz polimérica sofre hidrólise, liberando monômeros livres de melamina e formaldeído diretamente nas refeições. Veja a química e os riscos renais associados.',
    sections: [
      {
        title: '1. A Química da Resina de Melamina: Redes Termorrígidas e Monômeros Residuais',
        content: 'A louça de melamina é sintetizada através da moldagem por compressão de melamina e formaldeído a 140°C–160°C. Essa reação forma uma rede polimérica tridimensional unida por pontes metileno e éter-metileno. Em condições fabris perfeitas, mais de 99% dos precursores ficam fixados. No entanto, variações térmicas e de prensagem deixam monômeros residuais retidos nos microporos da resina. Além disso, marcas de baixo custo frequentemente misturam ureia-formaldeído, material de estabilidade química muito inferior.',
        type: 'fact',
        boxText: 'A melamina é uma resina termorrígida que retém monômeros livres não reagidos em sua estrutura microscópica.'
      },
      {
        title: '2. Hidrólise Térmica e Ácida: Alimentos Quentes (70°C+) e Cítricos Multiplicam a Lixiviação',
        content: 'À temperatura ambiente a melamina é estável, mas o calor acelera as trocas de massa químicas. Quando sopas quentes e ácidas (caldos de tomate, molhos cítricos ou vinagres, pH 3.0 a 4.5) são servidas em tigelas de melamina acima de 70°C, íons hidrônio catalisam a quebra das ligações da resina. Um estudo clínico no JAMA Internal Medicine confirmou que voluntários que consumiram sopa de macarrão quente em tigelas de melamina apresentaram aumentos drásticos na excreção urinária de melamina em relação a tigelas de cerâmica.',
        type: 'warning',
        boxText: 'Alimentos quentes e ácidos acima de 70°C catalisam a hidrólise do polímero, aumentando a migração de melamina e formaldeído.'
      },
      {
        title: '3. Proibição Total no Micro-ondas: Aquecimento Dielétrico e Gases de Formaldeído',
        content: 'Agências reguladoras como o US FDA e a EFSA proíbem expressamente o uso de louças de melamina no micro-ondas. Ao contrário de polímeros aptos como o polipropileno puro, a melamina possui estrutura polar que interage intensamente com as micro-ondas de 2.45 GHz. Essa excitação dielétrica superaquece o próprio corpo do prato, gerando bolhas superficiais, microfissuras internas e a imediata liberação de vapores de formaldeído na comida e no ambiente.',
        type: 'warning',
        boxText: 'Nunca leve melamina ao micro-ondas: ela absorve a radiação, sofrendo delaminação interna e liberando formaldeído.'
      },
      {
        title: '4. Toxicologia e Patologia Renal: Cristais de Cianurato de Melamina e Insuficiência Renal',
        content: 'Após ingerida, a melamina é absorvida no trato gastrointestinal e chega aos rins para excreção. No entanto, no ambiente ácido dos túbulos coletores renais, a melamina combina-se com o ácido úrico natural ou ácido cianúrico alimentar via pontes de hidrogênio. Essa reação forma microcristais insolúveis em forma de agulha que bloqueiam os túbulos, ferem as células renais e causam inflamação, cálculos renais e nefrotoxicidade crônica.',
        type: 'fact',
        boxText: 'A melamina ingerida cristaliza-se com o ácido úrico nos rins, gerando microcristais que causam pedras e lesões renais.'
      },
      {
        title: '5. Diretrizes de Uso Seguro: Alimentos Frios, Lavagem Delicada e Materiais Inertes',
        content: 'Para minimizar riscos ao utilizar louças de melamina: (1) Reserve a melamina exclusivamente para pratos frios ou em temperatura ambiente, como saladas, frutas e lanches secos; (2) Nunca coloque sopas ferventes ou café quente; (3) Lave à mão com esponja macia e detergente neutro —evite esponjas de aço ou abrasivos que desgastam o brilho superficial e aumentam a migração em 300%; (4) Descarte louças foscas, riscadas ou manchadas; e (5) Para as refeições diárias, opte por vidro temperado, cerâmica esmaltada livre de chumbo ou aço inoxidável 18/8.',
        type: 'tip',
        boxText: 'Use melamina apenas com alimentos frios, lave com esponja macia, descarte peças desgastadas ou mude para vidro e cerâmica.'
      }
    ],
    conclusion: 'A louça de melamina é leve e inquebrável, mas sofre hidrólise na presença de calor acima de 70°C, alimentos ácidos ou no micro-ondas, liberando melamina e formaldeído com toxicidade renal comprovada. Jamais coloque melamina no micro-ondas. Reserve-a para servir alimentos frios ou prefira vidro, cerâmica e aço inoxidável.',
    faqs: [
      {
        question: 'É seguro colocar pratos de melamina no micro-ondas?',
        answer: 'Não, terminantemente não. A FDA e a EFSA proíbem colocar melamina no micro-ondas. O material absorve a energia das micro-ondas, atinge temperaturas perigosamente altas, sofre quebra química e libera vapores de formaldeído diretamente nos alimentos.'
      },
      {
        question: 'Posso tomar sopa quente em uma tigela de melamina?',
        answer: 'Não é recomendado. Servir sopa muito quente (acima de 70°C) ou caldos ácidos acelera a quebra química da resina. Estudos no JAMA Internal Medicine confirmaram que pessoas que comeram sopa quente em tigelas de melamina excretaram altos níveis de melamina na urina nas horas seguintes.'
      },
      {
        question: 'Quais os riscos da ingestão crônica de melamina para a saúde?',
        answer: 'A ingestão contínua de melamina acumula-se nos rins e une-se ao ácido úrico formando microcristais insolúveis. Esses cristais provocam obstrução tubular, hematúria, cólicas renais, pedras nos rins e elevação do risco de insuficiência renal crônica.'
      },
      {
        question: 'Posso lavar louças de melamina na máquina de lavar louça?',
        answer: 'Embora muitos rótulos indiquem que suporta a gaveta superior, as altas temperaturas dos ciclos de secagem e os detergentes abrasivos atacam o verniz protetor com o tempo. Louças sem brilho ou com microfissuras lixiviam mais compostos nocivos. O ideal é a lavagem manual suave.'
      },
      {
        question: 'Como identificar quando um prato de melamina deve ser descartado?',
        answer: 'Examine a superfície: se ela estiver fosca, áspera ao toque, manchada ou com riscos de faca visíveis, a camada protetora foi rompida e o prato deve ser descartado imediatamente.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Lixiviação de Formaldeído em Louças de Melamina',
        url: '/pt/tools/melamine-tableware-formaldehyde-modeler/'
      },
      {
        name: 'Preditor de Migração Química em Plásticos de Cozinha',
        url: '/pt/tools/food-contact-migration-predictor/'
      },
      {
        name: 'Modelador de Lixiviação de BPA em Alimentos Enlatados',
        url: '/pt/tools/canned-food-bpa-leaching-modeler/'
      }
    ]
  },
  {
    slug: 'copper-cookware-verdigris-toxicity-acidic-food-leaching-safety',
    title: 'Toxicidade de Panelas de Cobre, Lixiviação em Alimentos Ácidos e Azinhavre: Intoxicação por Cobre, Revestimentos (Estanho vs Inox) e Normas da FDA',
    excerpt: 'Panelas de cobre sem revestimento podem ser tóxicas? Entenda a lixiviação de íons de cobre em molho de tomate, a toxicidade do azinhavre, desgaste do estanho e regras sanitárias da FDA.',
    date: waveDate,
    readTime: '8 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'As panelas de cobre ocupam o topo da gastronomia clássica devido à sua extraordinária condutividade térmica de 385 W/(m·K) — cinco vezes superior à do ferro fundido e vinte vezes maior que a do aço inoxidável. Essa capacidade garante controle absoluto da temperatura sem pontos quentes. No entanto, o cobre puro é um metal quimicamente reativo. Quando exposto a ingredientes ácidos, oxigênio e sal, oxida-se rapidamente liberando íons cúpricos (Cu²⁺) e formando compostos verdes de carbonato e acetato de cobre, conhecidos como azinhavre ou verdete. A ingestão desses compostos causa náuseas severas, cólicas estomacais e estresse hepático. Veja a ciência metalúrgica e as normas de segurança para panelas de cobre.',
    sections: [
      {
        title: '1. Metalurgia Reativa e Dissolução Eletroquímica: Lixiviação de Cu²⁺ em Meios Ácidos (pH < 6.0)',
        content: 'O cobre elementar é suscetível à dissolução oxidativa acelerada por ácidos orgânicos na presença de oxigênio. Ao preparar molhos ácidos —como molho de tomate (pH 4.0–4.4), reduções de vinho tinto (pH 3.2–3.6), suco de limão ou vinagre— em panelas de cobre sem revestimento interno, os ácidos atuam como agentes quelantes, dissolvendo íons de cobre diretamente na comida. Testes mostram que cozinhar molho de tomate por 30 minutos em cobre exposto pode elevar o teor de cobre acima de 50 a 100 mg/kg, ultrapassando os limites toleráveis.',
        type: 'warning',
        boxText: 'Alimentos ácidos (pH < 6.0) dissolvem cobre puro, elevando o teor de cobre acima de 50–100 mg/kg em 30 minutos.'
      },
      {
        title: '2. O Perigo do Azinhavre: Carbonato e Acetato de Cobre e Toxicidade Aguda',
        content: 'Quando o cobre sem revestimento fica exposto ao ar úmido, o gás carbônico e a umidade formam uma pátina esverdeada de carbonato básico de cobre. Na presença de resíduos de vinagre forma-se acetato de cobre. Essa crosta verde chama-se azinhavre ou verdete. O azinhavre é muito solúvel e altamente tóxico: a ingestão causa vômitos violentos imediatos, diarreia aquosa profusa, fortes dores abdominais e gosto metálico intenso. Em doses altas provoca hemólise intravascular e falência hepática aguda.',
        type: 'warning',
        boxText: 'O azinhavre verde (carbonato/acetato de cobre) é solúvel e altamente nocivo, provocando vômitos agudos e danos hepáticos.'
      },
      {
        title: '3. Revestimentos Protetores: Estanho Tradicional (Ponto de Fusão 232°C) vs Aço Inoxidável 18/10',
        content: 'Para usufruir da condutividade do cobre sem contaminar os alimentos, o interior da panela deve ser revestido com um metal inerte. Tradicionalmente aplica-se estanho puro manual: ele não reage com ácidos alimentares e é antiaderente natural. No entanto, o estanho funde-se a apenas 232°C (450°F); aquecer uma panela vazia em fogo alto derrete o estanho instantaneamente. Por isso, panelas modernas combinam uma lâmina interna de aço inoxidável 18/10 ao cobre exterior, resistindo a mais de 500°C com durabilidade eterna.',
        type: 'fact',
        boxText: 'O estanho derrete a apenas 232°C exigindo fogo brando, enquanto o cobre revestido com aço inox suporta calor extremo.'
      },
      {
        title: '4. Normas Sanitárias: Código da FDA § 4-101.14 e Ingestão Diária Máxima da OMS',
        content: 'Órgãos de saúde mundiais regulam com rigor o contato do cobre com alimentos. O Food Code da FDA americana (§ 4-101.14) proíbe expressamente o contato de cobre ou latão não revestidos com alimentos que possuam pH inferior a 6.0 (como vinagres, sucos, vinhos ou molhos). A EFSA e a OMS estipulam o limite máximo tolerável de ingestão de cobre para adultos em 5.0 mg ao dia, com risco de toxicidade aguda a partir de 10–15 mg em uma única refeição.',
        type: 'fact',
        boxText: 'A FDA proíbe cobre não revestido para alimentos com pH abaixo de 6.0; a OMS fixa o limite diário adulto em 5.0 mg.'
      },
      {
        title: '5. Quando o Cobre Desnudo é Seguro e Regras para Novo Estanhamento',
        content: 'Há duas exceções clássicas na confeitaria onde o cobre puro sem forro é seguro e vantajoso: (1) Caldas de açúcar e doces em tacho de cobre: a altíssima concentração de açúcar reduz a água livre impedindo a lixiviação do cobre, e os íons ajudam a firmar a pectina; e (2) Bater claras de ovos em tigela de cobre: os íons ligam-se à ovotransferrina, estabilizando as claras em neve e impedindo que soltem água. Fora desses casos, se o estanho desgastar e revelar uma área de cobre do tamanho de uma moeda (2 cm), pare de usar e envie para reestanhamento.',
        type: 'tip',
        boxText: 'Cobre sem revestimento é seguro apenas para doces e bater claras. Se o cobre aparecer no fundo da panela, reestanhe-a logo.'
      }
    ],
    conclusion: 'As panelas de cobre oferecem a melhor condução de calor da gastronomia, mas o cobre sem revestimento reage fortemente com ingredientes ácidos, liberando íons cúpricos tóxicos e azinhavre. Cozinhe sempre em peças com interior estanhado ou de aço inoxidável íntegros, respeite o limite de 232°C do estanho e mande reestanhar suas panelas assim que o revestimento se desgastar.',
    faqs: [
      {
        question: 'Cozinhar em panela de cobre sem forro pode provocar intoxicação?',
        answer: 'Sim. Cozinhar alimentos ácidos (molho de tomate, vinho, limão ou vinagre com pH menor que 6.0) em cobre sem revestimento dissolve íons de cobre na comida. Ingerir 10 a 15 mg de cobre dissolvido é suficiente para desencadear intoxicação aguda com vômitos intensos, cólicas e diarreia.'
      },
      {
        question: 'O que é o azinhavre e por que ele é tão perigoso em panelas de cobre?',
        answer: 'O azinhavre é a crosta esverdeada ou azulada de carbonato ou acetato de cobre formada pela oxidação com ar, umidade e ácidos. Ele dissolve-se no estômago e sua ingestão provoca irritação gástrica grave, vômitos, cólicas e risco de lesão hepática e renal.'
      },
      {
        question: 'Por que as panelas de cobre tradicionais são estanhadas por dentro?',
        answer: 'O estanho é quimicamente inerte, atóxico e forma uma barreira física impedindo que os ácidos dos alimentos toquem no cobre. Como o estanho derrete a 232°C (450°F), a panela nunca deve ser pré-aquecida vazia em fogo alto.'
      },
      {
        question: 'Quando uma panela de cobre precisa ser estanhada novamente?',
        answer: 'Ela deve ser encaminhada para um estanhador profissional quando o uso e a limpeza desgastarem a camada de estanho e deixarem aparente uma mancha de cobre puro maior que uma moeda (cerca de 20 mm de diâmetro).'
      },
      {
        question: 'Por que confeiteiros usam tigelas de cobre puro para bater claras em neve?',
        answer: 'Ao bater claras em uma tigela de cobre limpa sem forro, íons de cobre desprendem-se e unem-se à proteína ovotransferrina da clara, formando um complexo proteico estável que evita a separação da água e deixa o merengue muito mais volumoso e brilhante.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Toxicidade e Azinhavre em Panelas de Cobre',
        url: '/pt/tools/copper-cookware-toxicity-modeler/'
      },
      {
        name: 'Guia de Lixiviação Ácida e Desgaste em Panelas de Ferro Fundido',
        url: '/pt/blog/cast-iron-acidic-tomato-sauce-iron-leaching-guide/'
      },
      {
        name: 'Modelador de Lixiviação de Metais Pesados em Aço Inox',
        url: '/pt/tools/stainless-steel-heavy-metal-leaching-modeler/'
      }
    ]
  }
];

// ==========================================
// 4. CHINESE (ZH-CN) GUIDES
// ==========================================
const zhGuides = [
  {
    slug: 'oven-self-cleaning-pyrolysis-toxic-fumes-bird-safety',
    title: '烤箱高温自清洁热解烟雾、氟聚合物分解气体与宠物鸟致命毒性：500°C热裂解化学、一氧化碳剧增与安全替代方案',
    excerpt: '为什么烤箱高温自清洁循环对宠物鸟具有极速致命性，并引发人类“特氟龙流感”？深入探讨500°C热解机理、PTFE密封垫分解物及小苏打安全清洁法。',
    date: waveDate,
    readTime: '9 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '现代家用烤箱配备的高温自清洁（Pyrolytic Self-Cleaning）功能，旨在通过将烤箱内部腔体加热并维持在450°C至500°C（842°F至932°F）长达两到四小时，将残留的油脂、糖分与食物焦垢完全碳化为灰烬。尽管这一功能被宣传为省时省力的科技便利，但高温自清洁实际上是厨房电器所能经历的极限热应力测试。在此极端工况下，油脂发生剧烈不完全热裂解，烤箱内部PTFE门垫与涂层分解释放剧毒氟碳化合物，室内一氧化碳与丙烯醛浓度激增，并对伴侣鸟类构成致命威胁。本文从热化学、毒理学与兽医病理学角度深入解析烤箱自清洁风险。',
    sections: [
      {
        title: '1. 500°C热解热化学反应：碳氢化合物热裂解、一氧化碳与丙烯醛激增',
        content: '在常规烘焙温度下（150°C至220°C），食物发生受控的美拉德反应与焦糖化。然而，当烤箱升温至500°C且处于密闭贫氧状态时，油脂与蛋白质发生剧烈热裂解反应。甘油三酯被裂解为挥发性丙烯醛（一种极强的呼吸道和黏膜刺激剂）、甲醛、多环芳烃（PAH）以及细颗粒物（PM2.5，瞬时浓度通常突破400 μg/m³）。此外，密闭腔体内的严重缺氧导致碳物质不完全氧化，产生大量一氧化碳（CO），并经由门缝溢散至厨房起居空间。',
        type: 'warning',
        boxText: '500°C高温热解将食物残渣裂解为丙烯醛、多环芳烃与一氧化碳，使室内PM2.5激增至400 μg/m³以上。'
      },
      {
        title: '2. 氟聚合物密封圈与隐性PTFE：氟光气、全氟异丁烯与“特氟龙流感”',
        content: '除了食物残渣分解，更致命的危险来自烤箱本身的氟聚合物材质。许多烤箱的门框密封垫、风扇导风板或内部耐热电线含有聚四氟乙烯（PTFE）涂层。当温度超过260°C时，PTFE链段开始发生热降解；超过350°C时剧烈解聚为亚微米氟聚合物气溶胶。温度超过400°C时，热氧化释放氟光气（COF2，吸入肺部后极易水解为剧毒氢氟酸）、全氟异丁烯（PFIB，毒性为光气的十倍）以及三氟乙酸（TFA）。人体吸入这些烟气会引发“聚合物烟雾热”（俗称特氟龙流感），伴随高热、寒战和呼吸窘迫。',
        type: 'warning',
        boxText: 'PTFE涂层与密封垫在350°C以上急剧分解，释放氟光气等高毒性气体，引发人体特氟龙烟雾热。'
      },
      {
        title: '3. 鸟类呼吸系统脆弱性：氟聚合物热解烟雾对宠物的极速致死机制',
        content: '兽医毒理学普遍将特氟龙烟气与高温自清洁列为室内伴侣鸟类急性暴毙的首要原因。与哺乳动物潮气呼吸的弹性肺泡不同，鸟类拥有刚性三级支气管（Parabronchi）与贯穿全身的九个薄壁气囊，形成单向连续气流对流循环，氧气交换效率比人类高出十倍，且气血屏障极薄（仅约0.1微米）。当氟聚合物亚微米颗粒与氟光气进入鸟类呼吸道后，会迅速破坏肺表面活性物质，诱发大范围肺微血管破裂大出血及严重肺水肿。虎皮鹦鹉、玄凤鹦鹉及各类大型鹦鹉往往在启动自清洁后15至30分钟内窒息死亡，即使置于不同楼层亦难幸免。',
        type: 'fact',
        boxText: '鸟类独特的单向呼吸循环与超薄气血屏障，使其吸入微量氟碳气体后在数十分钟内发生致命性肺水肿。'
      },
      {
        title: '4. 家电元器件耐受极限：温控保险丝熔断、钢化玻璃自爆与主控板烧蚀',
        content: '家电维修行业统计显示，高温自清洁是导致烤箱电路瘫痪与结构损坏的头号诱因。持续500°C的极端高温使烤箱门双层或三层钢化玻璃承受剧烈热膨胀差，极易诱发微裂纹扩展导致自爆。同时，强烈热辐射向上传导至仪表控制仓，使微电脑主板（PCB）上的贴片电容与继电器焊点老化失效。此外，安装在外壳上的过热保护温控保险丝（通常设定为120°C–140°C）经常被直接烧断，导致电动门锁死锁，烤箱彻底瘫痪。',
        type: 'warning',
        boxText: '持续500°C高温极易烧毁电子控制主板、熔断过热保险丝，甚至导致烤箱门钢化玻璃破裂自爆。'
      },
      {
        title: '5. 零排放安全清洁方案：小苏打碱性皂化法与温和白醋喷雾',
        content: '为了在不产生有毒烟气且不损伤烤箱电路的前提下彻底清洁焦垢，食品科学界推荐非加热碱性皂化法：将3份小苏打（碳酸氢钠）与1份水调成均匀糊状，涂抹于烤箱内壁（避开加热管与密封条），静置过夜。弱碱性小苏打会将顽固烘烤油脂水解转化为水溶性脂肪酸钠（肥皂）。次日清晨擦去软化油垢，再喷洒5%食用白醋，温和的碳酸起泡反应即可彻底瓦解碳化残留物，全过程零异味、零毒气、安全环保。',
        type: 'tip',
        boxText: '涂抹小苏打糊静置过夜水解油脂，再喷洒白醋起泡擦净，即可安全彻底清洁烤箱，完全杜绝有毒气体。'
      }
    ],
    conclusion: '高温自清洁虽省力，但在500°C下分解产生的氟聚合物气溶胶、丙烯醛与一氧化碳对人体呼吸道有显著危害，对家庭伴侣鸟类更具有100%致死性，且频繁使用极易损坏烤箱电路。彻底停用自清洁循环，采用小苏打天然皂化法进行温和养护，是守护家庭健康与延长家电寿命的科学之选。',
    faqs: [
      {
        question: '为什么开启烤箱自清洁功能会导致其他房间的宠物鸟死亡？',
        answer: '鸟类呼吸系统拥有独特的单向气流循环与极薄气血屏障（0.1微米）。烤箱在500°C高温下自清洁时，PTFE密封垫与部件会热分解出氟光气与亚微米氟聚合物颗粒。微量吸入即可破坏鸟类肺泡活性物质，诱发急性弥漫性肺出血，导致鸟类在15至30分钟内窒息死亡。'
      },
      {
        question: '什么是人体的“特氟龙流感”（聚合物烟雾热）？',
        answer: '特氟龙流感是在吸入氟聚合物高温裂解气溶胶后4至10小时内发作的急性吸入性中毒症。患者会出现类似重感冒的症状，包括突发高热、剧烈寒颤、剧烈头痛、胸骨后压迫感、干咳和呼吸短促，通常在24至48小时后逐渐缓解。'
      },
      {
        question: '烤箱高温自清洁会产生危险的一氧化碳（CO）吗？',
        answer: '是的。密闭腔体内的500°C热解属于贫氧环境下的有机碳化物不完全热裂解反应，会瞬时释放出显著浓度的一氧化碳。在缺乏大风量吸油烟机强制排风的厨房中，室内一氧化碳浓度极易突破安全健康限值。'
      },
      {
        question: '为什么许多家电维修人员建议业主永远不要使用自清洁功能？',
        answer: '现代烤箱控制电脑板、触摸屏与继电器紧贴烤箱顶部。500°C的持久高温会加速电容虚焊老化、熔断一次性超温安全保险丝，并导致门锁电机卡死，是过保后烤箱发生故障率最高的操作环节。'
      },
      {
        question: '彻底清理重油污烤箱的最安全环保方法是什么？',
        answer: '最佳方法是常温碱性皂化法：将小苏打与水调成厚糊涂抹在烤箱内壁，静置8至12小时使油脂水解为可溶性皂类，铲除软化残留后喷洒白醋，利用温和酸碱发泡轻松去除焦斑，全过程无毒无烟。'
      }
    ],
    relatedTools: [
      {
        name: '烤箱高温自清洁热解烟雾与氟聚合物分解气体模拟器',
        url: '/zh-cn/tools/oven-self-cleaning-pyrolysis-simulator/'
      },
      {
        name: '空气炸锅特氟龙不粘涂层高温热解气体动力学模型器',
        url: '/zh-cn/tools/air-fryer-teflon-fluoropolymer-modeler/'
      },
      {
        name: '空气炸锅与传统油炸脂质热氧化及4-HNE毒性醛动力学模型器',
        url: '/zh-cn/tools/air-fryer-lipid-oxidation-modeler/'
      }
    ]
  },
  {
    slug: 'melamine-dishes-formaldehyde-migration-microwave-acid-safety',
    title: '密胺餐具甲醛释放与微波酸性食物迁移机制：树脂水解裂解、肾脏结石毒性与FDA监管限量',
    excerpt: '密胺（仿瓷）餐具能盛热汤或微波加热吗？深入探讨密胺-甲醛树脂水解动力学、酸性热浸出规律、三聚氰胺尿酸盐晶体肾毒性与FDA/EFSA检测标准。',
    date: waveDate,
    readTime: '8 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '密胺餐具（俗称仿瓷餐具）因其质感如瓷、色彩鲜艳、轻巧便携且抗摔耐摔，广泛应用于儿童餐饮、幼儿园食堂、户外露营及亚洲快餐厅。从高分子化学角度来看，密胺餐具是由三聚氰胺（1,3,5-三嗪-2,4,6-三胺）与甲醛在高温高压下缩聚固化而成的热固性三聚氰胺-甲醛树脂（MF树脂）。然而，毒理学与材料学研究明确证实，密胺树脂并非绝对惰性材料。当接触超过70°C（158°F）的高温液体、酸性介质（pH < 4.5）或微波辐射时，热固性交联网络会发生水解裂解，向食物中持续迁移剧毒的三聚氰胺与致突变性游离甲醛。以下是密胺餐具的安全化学全解析。',
    sections: [
      {
        title: '1. 密胺树脂聚合化学：热固性三维交联网络与未反应游离单体残留',
        content: '密胺餐具通过三聚氰胺与甲醛在140°C–160°C高温模压下发生加成与缩聚反应成型，形成由亚甲基桥（-CH2-）和二亚甲基醚键（-CH2-O-CH2-）紧密连接的三维网状交联热固性聚合物。在理想工艺下，99%以上的反应物被牢固锁定。然而，热压时间、温控偏差等工艺波动不可避免地导致部分未交联单体游离截留于树脂孔隙中。更有甚者，劣质厂家常掺杂廉价的脲醛树脂（UF），其耐热性与化学耐受度极低，单体析出风险成倍增加。',
        type: 'fact',
        boxText: '密胺餐具虽为三维交联热固性树脂，但内部结构中仍留存部分未交联的游离单体与微孔隙。'
      },
      {
        title: '2. 高温与酸性水解动力学：为何70°C以上热汤与柑橘醋汁会剧烈加速浸出',
        content: '虽然密胺餐具在室温常态下较为稳定，但热力学定律决定了温度上升会显著加快质量传递过程。当盛装超过70°C的热酸性食物（如番茄浓汤、冬阴功汤、酸辣粉或柑橘沙拉，pH 3.0至4.5）时，食物中的水合氢离子（H3O+）会作为催化剂，进攻并水解树脂中的醚桥结构。美国权威医学期刊《JAMA Internal Medicine》发表的临床对照研究表明，食用盛装在密胺碗中滚烫面汤的受试者，其尿液中三聚氰胺排泄量在数小时内呈现数十倍的爆发式增长。',
        type: 'warning',
        boxText: '超过70°C的酸性液体会催化密胺树脂水解，导致食物中三聚氰胺与甲醛迁移量呈指数级暴增。'
      },
      {
        title: '3. 严禁微波加热：介电损耗过热、聚合物内部脱层与甲醛气体挥发',
        content: '美国FDA、欧盟EFSA及中国食品安全国家标准均严厉禁止将密胺餐具放入微波炉加热。与微波安全的聚丙烯（PP，5号塑料）不同，密胺树脂具有较强的极性分子结构，极易与2.45 GHz微波电磁场发生共振耦合。微波能量直接穿透并剧烈加热树脂基体本身，而非仅仅加热食物。这种急剧的内部热膨胀会导致餐具发生微观脱层、表面起泡爆裂，并促使结合态的甲醛剧烈分解为有毒气体直接扩散至食物中。',
        type: 'warning',
        boxText: '密胺餐具严禁微波加热：其极性树脂直接吸收微波能量，导致内部高温脱层与甲醛剧烈释放。'
      },
      {
        title: '4. 肾脏毒理与病理学：三聚氰胺尿酸盐微结晶形成与急慢性肾损伤',
        content: '膳食迁移摄入的三聚氰胺在胃肠道被迅速吸收进入血液循环，经肾脏以原型滤过排出。然而，在肾集合管与远端小管的酸性微环境中，三聚氰胺极易与人体内源性尿酸或食物中的微量三聚氰酸通过多重氢键发生分子自组装，沉淀出坚硬、针状的三聚氰胺-尿酸或三聚氰胺-三聚氰酸盐微结晶。这些晶体物理性切割磨损小管上皮细胞，阻塞肾小管并引发炎症级联反应，导致尿路结石（Urolithiasis）和不可逆的慢性肾功能损伤。',
        type: 'fact',
        boxText: '摄入的三聚氰胺在肾小管中与尿酸结合生成针状不溶性结晶，直接堵塞肾小管并引发肾结石与肾损伤。'
      },
      {
        title: '5. 安全使用黄金法则：冷食专用、轻柔手洗与安全材质替换',
        content: '若家庭或餐厅仍在使用密胺餐具，应严格遵循以下原则：(1) 仅限盛装冷食或常温食物，如新鲜沙拉、切片水果、三明治与面包；(2) 严禁盛装沸滚热汤、现煮咖啡或强酸性炖菜；(3) 清洁时使用柔软海绵与中性洗洁精手洗，严禁使用钢丝球或硬质百洁布洗刷，百洁布摩擦会磨损表面光亮防护膜，使单体溶出率飙升300%以上；(4) 一旦餐具失去光泽、出现变色、刮痕或细小裂纹，必须立即废弃；(5) 日常家庭就餐建议彻底升级为无铅强化玻璃、高温陶瓷或304/316食品级不锈钢。',
        type: 'tip',
        boxText: '密胺餐具仅限冷食，禁止硬刷擦洗，表面磨损立即丢弃，日常饮食建议替换为玻璃、陶瓷与不锈钢。'
      }
    ],
    conclusion: '密胺餐具虽具备耐摔轻巧的物理优势，但在70°C以上高温、微波或酸性环境下会发生树脂裂解水解，释放出具备肾毒性的三聚氰胺与致癌甲醛。切勿使用密胺餐具微波加热或盛放滚烫热汤。为确保家庭与儿童健康，建议仅将密胺作为冷食餐盘，或全面更换为化学性质稳定的玻璃、陶瓷与不锈钢餐具。',
    faqs: [
      {
        question: '密胺（仿瓷）餐具可以放进微波炉里加热食物吗？',
        answer: '绝对不可以。FDA与EFSA等权威监管机构明令禁止微波加热密胺餐具。密胺树脂的极性分子会强烈吸收微波，产生内部剧烈高温，导致餐具起泡碎裂并向食物释放出游离甲醛气体。'
      },
      {
        question: '可以用密胺碗来盛装滚烫的热面汤或酸辣汤吗？',
        answer: '不建议。当液体温度超过70°C（158°F），尤其在偏酸性条件下，密胺树脂表层的化学键会加速水解裂解。《JAMA Internal Medicine》临床试验证实，食用密胺碗盛装热汤的人群，尿液中三聚氰胺浓度会出现数十倍剧增。'
      },
      {
        question: '长期微量摄入三聚氰胺会对人体产生哪些健康危害？',
        answer: '三聚氰胺在肾小管酸性环境中会与尿酸结合沉淀为不溶性微针结晶，物理磨损肾小管上皮细胞并形成结石，导致血尿、蛋白尿，严重时引发急性或慢性肾功能衰竭，儿童易感性尤高。'
      },
      {
        question: '密胺餐具可以使用家用或商用洗碗机清洗吗？',
        answer: '虽然部分餐具标明可放洗碗机顶层，但洗碗机高温消毒水流与高碱度洗涤粉会逐渐腐蚀其表层保护光泽。一旦餐具失去釉面光泽，化学成分溶出率将急剧增加，因此建议常温手洗或及时更换。'
      },
      {
        question: '如何判断密胺餐具已经老化需要淘汰报废？',
        answer: '观察餐具表面：如果原有的光泽变得干涩、暗淡无光、表面泛白，或者出现明显的刀叉划痕和色素沉着，说明表层保护层已经剥脱破损，继续使用会大幅析出化学物质，必须立即淘汰丢弃。'
      }
    ],
    relatedTools: [
      {
        name: '密胺餐具甲醛与三聚氰酸浸出风险动力学模型器',
        url: '/zh-cn/tools/melamine-tableware-formaldehyde-modeler/'
      },
      {
        name: '厨房塑料食品接触化学物质迁移预测器',
        url: '/zh-cn/tools/food-contact-migration-predictor/'
      },
      {
        name: '罐头食品BPA溶出与环氧酚醛水解动力学模型器',
        url: '/zh-cn/tools/canned-food-bpa-leaching-modeler/'
      }
    ]
  },
  {
    slug: 'copper-cookware-verdigris-toxicity-acidic-food-leaching-safety',
    title: '铜锅烹饪毒性、酸性食物浸出与铜绿风险：急性铜中毒机理、内胆材质（镀锡 vs 不锈钢）与FDA食品规范',
    excerpt: '裸铜锅烹饪酸性食物真的会引发重金属中毒吗？深入解析铜离子在番茄红酒中的溶出动力学、碱式碳酸铜（铜绿）毒性、锡层磨损阈值与FDA食品接触法规。',
    date: waveDate,
    readTime: '8 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '铜锅历来在顶级西餐与法式糕点界享有崇高声誉，主厨们对其推崇备至，根源在于纯铜高达385 W/(m·K)的超强热导率——这一数值是铸铁的五倍以上、不锈钢的二十倍之巨。铜锅近乎瞬时的热响应速度消除了烹饪热点，实现了无可比拟的火候控制精度。然而，铜元素在化学上属于活泼的过渡金属。当未涂层的纯铜表面遭遇酸性食材、水分或烹饪食盐时，铜会迅速发生氧化溶出二价铜离子（Cu²⁺），并合成俗称“铜绿”的碱式碳酸铜与乙酸铜剧毒盐类。摄入溶出的铜盐可引发急性消化道中毒甚至肝脏衰竭。本文从冶金学、电化学及食品安全规范全面解析铜锅使用红线。',
    sections: [
      {
        title: '1. 活性冶金与电化学溶出：酸性介质（pH < 6.0）中Cu²⁺铜离子的快速浸出',
        content: '金属铜在酸性介质与溶解氧共存的环境中极易发生氧化溶解反应（Cu²⁺ + 2e⁻ ⇌ Cu, E° = +0.34 V）。当低pH值的食材——如番茄酱（pH 4.0–4.4）、红酒炖肉（pH 3.2–3.6）、醋、柠檬汁或水果酱——在无涂层裸铜锅中受热烹饪时，食物中的有机酸（柠檬酸、苹果酸、乙酸）会扮演螯合配体角色，剧烈加速铜离子向食物基质中溶解。实验测定表明，在裸铜锅中慢炖番茄酱仅30分钟，酱汁中的铜含量即可飙升至50到100 mg/kg以上，严重突破人体安全上限。',
        type: 'warning',
        boxText: '酸性食材（pH < 6.0）与裸铜发生剧烈电化学溶解，30分钟内即可使食物铜含量突破50–100 mg/kg。'
      },
      {
        title: '2. 铜绿的剧毒杀伤力：碱式碳酸铜、乙酸铜与急性重金属中毒反应',
        content: '当裸铜暴露于潮湿室内空气中时，水与二氧化碳缓慢氧化铜表面生成蓝绿色碱式碳酸铜[Cu2CO3(OH)2]；若接触挥发性乙酸，则生成乙酸铜。这种蓝绿色腐蚀结晶即为民间所称的“铜绿”。铜绿盐类极易溶解于胃液中。人体摄入后，游离铜离子强烈刺激胃肠黏膜，在几分钟至数小时内引发剧烈喷射性呕吐、水样腹泻、严重腹部绞痛以及强烈的金属味异物感。大剂量摄入可诱发血管内溶血、高铁血红蛋白血症及急性肝肾衰竭。',
        type: 'warning',
        boxText: '蓝绿色铜绿（碳酸铜/乙酸铜）水溶性极强且具高毒性，误食会诱发剧烈喷射性呕吐、溶血与肝衰竭。'
      },
      {
        title: '3. 内胆防护冶金学：传统手工镀锡（熔点232°C）与现代18/10不锈钢复合工艺',
        content: '为了兼顾铜锅顶级的热传导性能并彻底隔离铜元素与食材，制锅匠人在锅体内部铺覆一层惰性金属隔离层。历史上采用手工擦锡工艺：高纯度锡无毒、耐酸且天然不粘。然而，金属锡的熔点仅有232°C（450°F）；空烧预热或高温爆炒会瞬间使锡涂层起泡脱落甚至融化。现代复合铜锅则采用高压轧制复合技术，在铜锅内胆复合一层0.2–0.5毫米的18/10奥氏体不锈钢。不锈钢内胆能耐受500°C以上高温且终生不磨损，完美兼顾安全与耐用。',
        type: 'fact',
        boxText: '传统镀锡层熔点仅为232°C，严禁干烧爆炒；而现代复合不锈钢内胆可永久耐受500°C以上高温。'
      },
      {
        title: '4. 食品安全监管规范：美国FDA食品规范4-101.14与WHO人体每日铜耐受限量',
        content: '全球食品监管机构对烹饪器具中的铜材质有极其严苛的法定限制。美国FDA食品规范第4-101.14条明文禁止：未涂层的铜及铜合金（如黄铜）绝对不得与pH值低于6.0的食物（如醋、果汁、葡萄酒及番茄）直接接触。世界卫生组织（WHO）与欧洲食品安全局（EFSA）将成年人每日铜耐受摄入量（UL）设定为5.0毫克，单餐摄入达到10–15毫克即可触发急性中毒阈值。使用磨损露铜的旧锅烹制酸性菜肴，铜摄入量往往超标十倍以上。',
        type: 'fact',
        boxText: '美国FDA食品规范禁止裸铜接触pH值低于6.0的酸性食物；WHO成年人每日摄入上限仅为5.0毫克。'
      },
      {
        title: '5. 裸铜锅唯一的安全特例：高糖熬糖/果酱与法式打蛋清的科学原理',
        content: '在经典法式厨艺中有两个使用纯裸铜锅不仅安全而且极其科学的传统特例：(1) 熬制糖浆与果酱：高浓度蔗糖溶液的水活度极低，自由水极少，不会发生电化学溶出，且微量铜离子能与果胶螯合强化果酱凝胶网络；(2) 纯铜盆打发蛋清：打发过程中，极微量的铜离子（Cu²⁺）会与蛋清中的卵铁蛋白（Ovotransferrin）结合生成稳定的金属络合物，防止卵白蛋白过度凝集析水，打发出的蛋白霜无比细腻且持久不塌陷。除此特例之外，若镀锡锅露铜面积超过硬币大小（约2厘米）或见铜绿，必须立即停用并重新送镀。',
        type: 'tip',
        boxText: '裸铜锅仅适用于高糖熬果酱与打发蛋清。咸酸烹饪若发现露铜面积超过硬币大小，必须重新镀锡。'
      }
    ],
    conclusion: '铜锅拥有无可匹敌的物理导热控温性能，但未涂层裸铜与酸性食物会发生剧烈电化学溶解，释放高毒性铜离子并滋生危险的铜绿。日常烹饪务必选购带有完整镀锡层或食品级不锈钢内胆的复合铜锅，严格遵守锡层232°C耐温上限，仅在熬糖与打发蛋清时使用纯铜，并在内胆露铜时及时重新镀锡。',
    faqs: [
      {
        question: '用没有涂层的裸铜锅做菜会导致急性铜中毒吗？',
        answer: '会的。使用裸铜锅烹饪酸性食物（如番茄、醋、柠檬汁或红酒，pH低于6.0）会迅速溶出高浓度铜离子。单餐摄入超过10至15毫克铜即可诱发急性铜中毒，表现为剧烈喷射性呕吐、胃部绞痛、水样腹泻等中毒症状。'
      },
      {
        question: '什么是铜绿？为什么厨具上的铜绿具有极高危险性？',
        answer: '铜绿是金属铜与空气中的水、二氧化碳及有机酸反应生成的蓝绿色碱式碳酸铜或乙酸铜结晶。铜绿盐极易在胃酸中解离出高毒性铜离子，摄入后会强烈腐蚀胃肠黏膜，严重时引起急性溶血和肝肾功能衰竭。'
      },
      {
        question: '为什么传统的法式铜锅内部都要手工镀上一层金属锡？',
        answer: '金属锡性质极其温和，对食物中的有机酸完全呈化学惰性且对人体无毒，能严密阻隔食物与铜体的直接接触。但锡的熔点仅为232°C（450°F），因此镀锡铜锅切忌空烧干烧或高温煎炸。'
      },
      {
        question: '铜锅内部的镀锡层磨损到什么程度必须重新镀锡？',
        answer: '在日常烹饪中，如果经过反复洗刷与铲擦，锅底显露出的裸铜斑块总面积超过一枚硬币（直径约20毫米至25毫米）或锅内出现绿锈时，必须立即停止烹饪酸咸菜肴，并送到专业铜匠处重新手工镀锡。'
      },
      {
        question: '为什么法式甜品师一定要用没有涂层的纯铜盆来打发蛋白霜？',
        answer: '在纯铜盆中打发蛋白时，盆壁会脱落微量二价铜离子，与蛋白中的卵铁蛋白紧密螯合，形成极其稳定的蛋白质络合物。这种络合物能阻止气泡间蛋白质过度交联变性，使打出的蛋白霜极为细腻、紧实且长时间不会出水崩溃。'
      }
    ],
    relatedTools: [
      {
        name: '铜制厨具铜绿生成与重金属毒性动力学模型器',
        url: '/zh-cn/tools/copper-cookware-toxicity-modeler/'
      },
      {
        name: '铸铁锅酸性番茄酱烹饪铁离子溶出与养锅层退化指南',
        url: '/zh-cn/blog/cast-iron-acidic-tomato-sauce-iron-leaching-guide/'
      },
      {
        name: '不锈钢锅具酸性环境重金属（镍与铬）溶出分析仪',
        url: '/zh-cn/tools/stainless-steel-heavy-metal-leaching-modeler/'
      }
    ]
  }
];

// ==========================================
// 5. JAPANESE (JA) GUIDES
// ==========================================
const jaGuides = [
  {
    slug: 'oven-self-cleaning-pyrolysis-toxic-fumes-bird-safety',
    title: 'オーブン高温熱分解クリーニング有毒ガス・PTFE分解熱気と愛鳥の呼吸器致死リスク：500℃熱分解化学・一酸化炭素スパイクと安全な代替法',
    excerpt: 'なぜオーブンの熱分解セルフクリーニングは小鳥に急速な致死性をもたらし、人に「テフロン風邪」を起こすのか？500℃熱分解化学、PTFEパッキン分解、重曹ペースト安全清掃法を徹底解説。',
    date: waveDate,
    readTime: '9分で読める',
    author: 'IsItKitchenSafe',
    intro: '現代の電気・ガスオーブンに搭載されている「熱分解セルフクリーニング機能（Pyrolytic Self-Cleaning）」は、庫内温度を450℃〜500℃（842°F〜932°F）の超高温まで上昇させ、2〜4時間維持することで頑固な油汚れや焦げ付きを灰へと炭化・焼却する機能です。ボタン一つで掃除できる便利機能として宣伝されますが、実際には家庭用電化製品が遭遇する最大の熱ストレスであり、有機物の不完全分解、PTFE（フッ素樹脂）パッキンからの有毒ガス放出、一酸化炭素（CO）やアクロレインの急激なスパイクを引き起こし、ペットの鳥類に対して致命的な脅威となります。本稿ではその熱化学、毒性学、獣医学的メカニズムを解説します。',
    sections: [
      {
        title: '1. 500℃熱分解の熱化学反応：不完全燃焼、一酸化炭素およびアクロレインの急増',
        content: '通常の調理温度（150℃〜220℃）では、食材は制御されたメイラード反応を起こします。しかし、500℃の酸素制限下で行われる熱分解では、油脂やタンパク質は不完全熱分解を起こします。トリグリセリドが熱分解されることで、強力な粘膜刺激物質であるアクロレイン、ホルムアルデヒド、多環芳香族炭化水素（PAH）、および微小粒子状物質（PM2.5、しばしば400 μg/m³を超過）が大量発生します。さらに、密閉された庫内での酸素不足により一酸化炭素（CO）が大量に生成され、キッチンの居住空間に漏れ出します。',
        type: 'warning',
        boxText: '500℃の熱分解は油汚れをアクロレインや一酸化炭素に分解し、PM2.5濃度を400 μg/m³以上に跳ね上げます。'
      },
      {
        title: '2. フッ素樹脂パッキンとPTFEの熱劣化：フッ化カルボニル、PFIB、ポリマー煙熱',
        content: '食品残渣の分解だけでなく、オーブン自体の部品に含まれるフッ素樹脂も極めて危険です。オーブンのドアパッキンやファン部品には耐熱性PTFE（テフロン）が使用されていることがあります。PTFEは260℃を超えると熱劣化が始まり、350℃を超えると有毒なフッ素系エアロゾルに急速解聚します。400℃を超えると、フッ化カルボニル（COF2、肺の水分と反応してフッ化水素酸を形成）や過フッ化イソブチレン（PFIB、ホスゲンの10倍の毒性）が発生します。これを吸入すると、ヒトは悪寒や高熱を伴う「ポリマー煙熱（テフロン風邪）」を発症します。',
        type: 'warning',
        boxText: 'PTFE部品は350℃以上で分解し、吸入するとテフロン風邪を引き起こすフッ化カルボニル等を放出します。'
      },
      {
        title: '3. 鳥類の呼吸器特異性と致死性：単向性呼吸流と超薄組織による急性肺出血',
        content: '獣医中毒学では、フッ素樹脂煙の吸入は飼育鳥類の突然死の最大の原因として広く知られています。鳥類は哺乳類の肺胞型呼吸とは異なり、強固な傍気管支と体内に広がる9つの気のうによる「単向性連続気流」を持ちます。さらに気血関門は極薄（約0.1 μm）で、酸素交換効率が人間の10倍に達します。この構造のため、フッ素樹脂エアロゾルやフッ化カルボニルを吸い込むと、肺胞界面活性物質が瞬時に破壊され、肺微小血管の大出血と急性肺水腫を引き起こします。インコやオウムは、別室や別階にいても15〜30分以内に窒息死します。',
        type: 'fact',
        boxText: '鳥類独自の単向性肺換気と極薄の気血関門により、微量のフッ素系ガスでも数十分で致死性の肺水腫に至ります。'
      },
      {
        title: '4. 家電本体への過酷な負荷：基板損傷、サーマルヒューズ溶断、ガラス破損',
        content: '家電修理の専門家は、熱分解セルフクリーニングをオーブンの故障原因第1位として挙げています。500℃の持続熱は、二重・三重の強化ガラスに極端な熱膨張ストレスを与え、自然破損を誘発することがあります。また、熱放射が上部の操作基板（PCB）に伝わり、半田の剥離やリレーの絶縁破壊を招きます。さらに、外装に備えられた安全サーマルヒューズ（120℃〜140℃で溶断）が切れてしまい、ドアロックが解除不能になり修理が必要になるケースが頻発します。',
        type: 'warning',
        boxText: '持続的な500℃の熱は電子制御基板を損傷させ、ヒューズを溶断させ、ドアガラスの破損リスクを高めます。'
      },
      {
        title: '5. 無毒・無煙の安全な清掃法：重曹ペーストけん化法と酢スプレー',
        content: '有毒ガスを一切出さず、電化製品に熱ストレスを与えずに焦げ付きを落とすには、常温アルカリけん化法が最適です。重曹（炭酸水素ナトリウム）3に水1を混ぜてペーストを作り、庫内壁面に塗布して一晩放置します（ヒーター管とパッキンは避けます）。弱アルカリ性が油分を石鹸状に加水分解して軟化させます。翌朝、汚れを拭き取った後、5%食酢（ホワイトビネガー）を軽くスプレーすると、炭酸の穏やかな発泡作用で焦げ残りが綺麗に浮き上がり、無毒かつ安全に清掃できます。',
        type: 'tip',
        boxText: '重曹ペーストを一晩塗布して油分をけん化軟化させ、酢を吹きかけて拭き取れば、有害煙なしで綺麗になります。'
      }
    ],
    conclusion: 'オーブンの熱分解セルフクリーニングは便利に見えますが、500℃の熱によりフッ素系有毒ガス、アクロレイン、一酸化炭素が発生し、人間への健康リスクや鳥類に対する即座の致死性をもたらします。さらに家電寿命を著しく縮めます。重曹と酢を用いた自然な洗浄法に切り替えることが、家族とペットの健康を守る最も確実な選択です。',
    faqs: [
      {
        question: 'なぜオーブンのセルフクリーニングを使うと別室のインコが死んでしまうのですか？',
        answer: '鳥類は単向性の気嚢換気システムと極薄の気血関門（0.1 µm）を持っています。オーブンが500℃に達するとPTFEパッキンや部品が分解し、フッ化カルボニルや微小粒子を放出します。これを吸い込むと鳥の肺毛細血管が破壊され、15〜30分以内に急性肺水腫と窒息死を引き起こします。'
      },
      {
        question: '人間における「テフロン風邪（ポリマー煙熱）」の症状とは？',
        answer: 'フッ素樹脂熱分解ガスを吸入後、4〜10時間以内に発症します。インフルエンザに酷似した悪寒、高熱、頭痛、胸の圧迫感、空咳、呼吸困難が現れます。通常24〜48時間で回復しますが、高濃度では急性化学性肺炎に至る危険があります。'
      },
      {
        question: '熱分解クリーニング中に一酸化炭素（CO）は発生しますか？',
        answer: 'はい。密閉された庫内での有機物の熱分解は不完全燃焼状態となるため、多量の一酸化炭素が放出されます。換気扇の排気能力が不十分な場合、室内の一酸化炭素濃度が環境基準を容易に超過します。'
      },
      {
        question: 'なぜ家電修理技術者はセルフクリーニング機能を使わないよう勧めるのですか？',
        answer: 'オーブンの電子基板や液晶画面は熱源のすぐ上にあります。500℃の熱が継続すると、電子半田の劣化、温度ヒューズの溶断、ドアロックスイッチの故障を引き起こし、保証期間外の修理依頼で最も多い原因となっています。'
      },
      {
        question: '頑固な油汚れのあるオーブンを最も安全かつ綺麗に掃除する方法は？',
        answer: '重曹ペーストによる常温けん化法が最善です。重曹と水を混ぜたペーストを庫内に塗り8〜12時間放置して油を分解軟化させ、拭き取った後にホワイトビネガーをスプレーして発泡させながら拭き取ることで、完全に無毒で綺麗になります。'
      }
    ],
    relatedTools: [
      {
        name: 'オーブン高温熱分解クリーニング有毒ガス＆PTFE分解熱気シミュレーター',
        url: '/ja/tools/oven-self-cleaning-pyrolysis-simulator/'
      },
      {
        name: 'ノンフライヤーPTFEフッ素樹脂熱分解オフガスモデラー',
        url: '/ja/tools/air-fryer-teflon-fluoropolymer-modeler/'
      },
      {
        name: 'ノンフライヤー vs 揚げ油 脂質熱酸化＆4-HNE細胞毒性アルデヒドモデラー',
        url: '/ja/tools/air-fryer-lipid-oxidation-modeler/'
      }
    ]
  },
  {
    slug: 'melamine-dishes-formaldehyde-migration-microwave-acid-safety',
    title: 'メラミン食器のホルムアルデヒド溶出・電子レンジ酸性熱浸出機構：樹脂加水分解・腎結石毒性とFDA安全基準',
    excerpt: 'メラミン食器で熱いスープや電子レンジ加熱は安全？メラミン・ホルムアルデヒド樹脂の加水分解速度、酸性熱浸出、尿酸塩結晶による腎臓毒性とFDA/EFSA基準を徹底解説。',
    date: waveDate,
    readTime: '8分で読める',
    author: 'IsItKitchenSafe',
    intro: 'メラミン食器は、陶器のような光沢と質感、軽量性、優れた耐衝撃性から、給食施設、子ども用食器、アウトドア、アジア料理店などで幅広く愛用されています。化学的には、メラミン（1,3,5-トリアジン-2,4,6-トリアミン）とホルムアルデヒドを高温高圧で縮合重合させた熱硬化性樹脂（MF樹脂）です。しかし、毒性学および材料科学の研究により、メラミン樹脂は決して不活性ではないことが証明されています。70℃（158°F）以上の高温、酸性食品（pH 4.5未満）、あるいは電子レンジ加熱に晒されると、樹脂の三次元架橋が加水分解を受け、腎毒性を持つメラミンおよび変異原性ホルムアルデヒドが食品中へ直接溶出します。その化学機構と腎毒性を解説します。',
    sections: [
      {
        title: '1. メラミン樹脂の重合化学：熱硬化性架橋ネットワークと未反応遊離モノマー',
        content: 'メラミン食器は、140℃〜160℃の圧縮成形下でメラミンとホルムアルデヒドを反応させて製造されます。メチレン結合やメチレンエーテル結合によって強固な三次元ネットワークが形成され、正常な製品では99%以上の成分が固定化されます。しかし、成形温度や加圧時間のばらつきにより、微量の未反応モノマーが樹脂内部の微細孔に残留します。さらに、安価な製品では化学的安定性の著しく低い尿素・ホルムアルデヒド樹脂が混入されていることもあり、溶出リスクが跳ね上がります。',
        type: 'fact',
        boxText: 'メラミン食器は強固な熱硬化性樹脂ですが、微細構造内部に未反応の遊離モノマーが残留しています。'
      },
      {
        title: '2. 熱・酸性による加水分解：70℃以上の熱いスープや酸性調味料が溶出を激増させる理由',
        content: '室温でのメラミン食器は比較的安定していますが、熱と酸は化学的物質移動を急速に促進します。70℃を超える熱い酸性食品（トマトスープ、トムヤムクン、柑橘系ソース、pH 3.0〜4.5）をメラミン容器に注ぐと、水素イオンが触媒となって樹脂のエーテル結合を加水分解します。『JAMA Internal Medicine』に掲載された臨床試験では、メラミン製の器で熱い麺類を食べた被験者は、陶器の器で食べた被験者に比べ、食後の尿中メラミン排泄量が劇的に跳ね上がることが実証されました。',
        type: 'warning',
        boxText: '70℃以上の熱い酸性液体は樹脂の加水分解を促進し、メラミンやホルムアルデヒドの溶出量を急増させます。'
      },
      {
        title: '3. 電子レンジ絶対厳禁：誘電加熱による内部過熱、表面剥離とホルムアルデヒドガス化',
        content: '米国FDA、欧州EFSA、日本の食品衛生法は、メラミン食器の電子レンジ加熱を一貫して厳禁としています。マイクロ波透過性を持つポリプロピレン（PP）とは異なり、メラミン樹脂は極性分子構造を有しているため、2.45 GHzのマイクロ波エネルギーを直接吸収してしまいます。これにより食品ではなく食器自体が急激に過熱され、内部応力による微小クラック、ブリスター（水ぶくれ状の剥離）、そして結合していたホルムアルデヒドの気化・食品移行が瞬時に起こります。',
        type: 'warning',
        boxText: 'メラミン食器の電子レンジ加熱は厳禁です。樹脂自体がマイクロ波を吸収して異常過熱し、有毒ガスを放出します。'
      },
      {
        title: '4. 腎臓毒性と病理作用：メラミン・尿酸塩結晶の形成と尿細管障害・結石リスク',
        content: '経口摂取されたメラミンは消化管から速やかに吸収され、代謝をほとんど受けずに腎臓から糸球体濾過されます。しかし、集合管や遠位尿細管の酸性環境下で、メラミンは生体内の尿酸や食品中の微量シアヌル酸と強固な水素結合によって結合します。これにより針状の不溶性複合結晶（メラミン・尿酸塩等）が析出し、尿細管の上皮細胞を物理的に傷つけ、尿細管閉塞や炎症カスケードを誘発し、尿路結石や慢性腎不全リスクを高めます。',
        type: 'fact',
        boxText: '摂取されたメラミンは腎臓で尿酸と結合して不溶性結晶を形成し、尿細管を閉塞させて腎障害を引き起こします。'
      },
      {
        title: '5. 安全に使用するための原則：冷菜専用、優しい手洗い、不活性素材への移行',
        content: '既存のメラミン食器を安全に扱うためのルール：(1) サラダ、カットフルーツ、サンドイッチなど、冷たい食品または常温の料理専用に限定する；(2) 沸騰したスープや熱いコーヒーには絶対に使用しない；(3) 研磨剤入りスポンジや金属たわしは厳禁。表面の光沢層（グレージング）を傷つけると溶出量が3倍以上に跳ね上がるため、柔らかいスポンジと中性洗剤で手洗いする；(4) 表面の艶がなくなったり、深い傷がついたものは即座に廃棄する；(5) 毎日の食事用には、強化ガラス、無鉛陶磁器、または食品用18/8ステンレス鋼への移行を推奨します。',
        type: 'tip',
        boxText: 'メラミンは冷たい料理のみに使用し、傷がついたら廃棄し、普段使いにはガラスや陶磁器、ステンレスを選びましょう。'
      }
    ],
    conclusion: 'メラミン食器は割れにくく便利ですが、70℃以上の熱、酸、または電子レンジに晒されると樹脂が加水分解を起こし、腎毒性メラミンと発がん性ホルムアルデヒドを放出します。電子レンジ加熱や熱い汁物への使用は避けてください。冷菜専用とするか、化学的に安定したガラス・陶磁器・ステンレス製食器への切り替えをお勧めします。',
    faqs: [
      {
        question: 'メラミン製の皿や器は電子レンジで使えますか？',
        answer: 'いいえ、絶対に使えません。FDAやEFSAも厳禁としています。メラミン樹脂自体がマイクロ波を強力に吸収して局所的に異常過熱し、樹脂の熱劣化や破損を引き起こし、ホルムアルデヒドを有毒ガスとして放出します。'
      },
      {
        question: 'メラミン碗で熱いラーメンやスープを飲むのは危険ですか？',
        answer: '推奨されません。70℃以上の高温液体や酸性スープを入れると、樹脂の加水分解が進み溶出量が増大します。『JAMA Internal Medicine』の臨床研究でも、メラミン碗で熱い麺を食べた人の尿中から高濃度のメラミンが検出されています。'
      },
      {
        question: 'メラミンの継続的な微量摂取はどのような健康被害を引き起こしますか？',
        answer: '摂取されたメラミンは腎臓で尿酸と結合し、不溶性の針状結晶を形成します。これが尿細管を物理的に傷つけて閉塞させ、尿路結石、血尿、慢性腎疾患（CKD）の発症リスクを高めます。特に小児では影響が大きくなります。'
      },
      {
        question: 'メラミン食器は食洗機で洗っても大丈夫ですか？',
        answer: '多くの製品が食洗機対応と表示されていますが、高温の乾燥サイクルやアルカリ性洗剤は保護釉薬層を徐々に侵食します。表面が曇ったり微小な傷がつくと化学物質の溶出が増加するため、柔らかいスポンジでの手洗いが理想的です。'
      },
      {
        question: 'メラミン食器の寿命や買い替えのサインは？',
        answer: '食器表面の光沢が失われて白っぽくくすんできた時、ざらつきを感じる時、あるいはナイフなどで深い傷がついた時は、保護層が摩耗しています。溶出リスクが高まるため、直ちに使用を中止して廃棄してください。'
      }
    ],
    relatedTools: [
      {
        name: 'メラミン食器ホルムアルデヒド＆シアヌル酸溶出速度モデラー',
        url: '/ja/tools/melamine-tableware-formaldehyde-modeler/'
      },
      {
        name: 'キッチン用プラスチック食品接触化学物質移行予測ツール',
        url: '/ja/tools/food-contact-migration-predictor/'
      },
      {
        name: '缶詰BPA溶出＆エポキシフェノール加水分解モデラー',
        url: '/ja/tools/canned-food-bpa-leaching-modeler/'
      }
    ]
  },
  {
    slug: 'copper-cookware-verdigris-toxicity-acidic-food-leaching-safety',
    title: '銅製調理器具の毒性・酸性食品溶出と緑青リスク：急性銅中毒機構・内面ライニング（錫引き vs ステンレス）とFDA安全基準',
    excerpt: '内面加工のない純銅鍋で酸性料理を作ると銅中毒になる？トマトやワインでの銅イオン溶出速度、緑青（塩基性炭酸銅）の毒性、錫の耐熱限界とFDA規制を徹底解説。',
    date: waveDate,
    readTime: '8分で読める',
    author: 'IsItKitchenSafe',
    intro: '銅鍋は、鋳鉄の5倍以上、ステンレス鋼の20倍に達する驚異的な熱伝導率385 W/(m·K)を誇り、一流シェフや菓子職人に最高峰の調理器具として愛用されてきました。瞬時の熱応答性により熱ムラを完全になくし、繊細な火加減を実現します。しかし、純銅は化学的に活性な遷移金属です。酸性食材、湿気、塩分に触れると急速に酸化し、二価の銅イオン（Cu²⁺）が食材に溶出するほか、有毒な塩基性炭酸銅や酢酸銅（緑青）を形成します。これらを摂取すると激しい急性消化器中毒や肝臓障害を引き起こします。銅鍋の冶金学、電化学、安全基準を解説します。',
    sections: [
      {
        title: '1. 活性冶金と電化学的溶出：酸性環境（pH 6.0未満）における銅イオン（Cu²⁺）の急速浸出',
        content: '金属銅は、溶存酸素が存在する酸性環境下で酸化溶解を起こしやすい電極電位を持ちます。トマトソース（pH 4.0〜4.4）、赤ワイン煮込み（pH 3.2〜3.6）、酢、レモン汁などの酸性食材を内面加工のない純銅鍋で加熱すると、有機酸がキレート配位子として働き、銅イオンが食品中へ劇的に溶出します。実験データによれば、純銅鍋でトマトソースを30分煮込むだけで、銅濃度は安全基準を大幅に超過する50〜100 mg/kg以上に達することがあります。',
        type: 'warning',
        boxText: '酸性食材（pH 6.0未満）は純銅と激しく反応し、わずか30分で食品中の銅濃度が50〜100 mg/kgを超えます。'
      },
      {
        title: '2. 緑青の猛毒性：塩基性炭酸銅・酢酸銅の形成と急性重金属中毒',
        content: '純銅が湿った空気に晒されると、水分と二酸化炭素によって青緑色の塩基性炭酸銅[Cu2CO3(OH)2]が形成されます。また酢などの残渣があると酢酸銅が生成します。これが「緑青（ろくしょう）」です。緑青塩類は胃液中で容易に溶解します。誤って摂取すると、遊離銅イオンが胃腸粘膜を激しく刺激し、数分〜数時間で噴出性の激しい嘔吐、激しい下痢、腹痛、金属味を引き起こします。重度の場合、血管内溶血や急性腎不全・肝不全に至ります。',
        type: 'warning',
        boxText: '青緑色の緑青（炭酸銅/酢酸銅）は胃液に容易に溶け、激しい嘔吐、下痢、急性肝障害を引き起こす高毒性物質です。'
      },
      {
        title: '3. 内面ライニングの冶金学：伝統的な手引き錫（融点232℃）vs 現代の18/10ステンレス鋼圧着',
        content: '銅の熱伝導率を活かしつつ食材への銅溶出を完全に防ぐため、内面には不活性金属のライニングが施されます。歴史的には高純度錫（スズ）を手作業で焼き付ける「錫引き」が用いられてきました。錫は無毒で酸に強く天然の非粘着性を持ちます。しかし、錫の融点はわずか232℃（450°F）であり、空焚きや強火加熱で瞬時に溶融・剥離します。これに対し、現代の複合銅鍋は内面に厚さ0.2〜0.5 mmの18/10ステンレス鋼を高圧圧着しており、500℃以上でも半永久的な耐久性を発揮します。',
        type: 'fact',
        boxText: '伝統的な錫引きは融点が232℃と低いため強火厳禁ですが、ステンレス張りの銅鍋は超高温でも永久に耐えられます。'
      },
      {
        title: '4. 法的規制と摂取基準：米国FDAフードコード4-101.14およびWHO銅許容摂取上限',
        content: '各国の食品衛生基準は銅の直接接触を厳しく制限しています。米国FDAフードコード第4-101.14条は、pH 6.0未満の食品（酢、果汁、ワイン、トマト等）が未コーティングの銅や真鍮に直接接触することを明確に禁止しています。WHOおよび欧州EFSAは成人の銅の耐容上限摂取量（UL）を1日あたり5.0 mgと定めており、単一の食事で10〜15 mg以上摂取すると急性中毒閾値に達します。劣化した銅鍋ではこの制限が容易に破られます。',
        type: 'fact',
        boxText: '米国FDAはpH 6.0未満の食材への純銅接触を禁止しており、WHOの成人1日摂取上限は5.0 mgです。'
      },
      {
        title: '5. 純銅鍋が安全な唯一の例外：ジャム作りと卵白泡立ての科学、および再錫引き基準',
        content: 'フランス料理界において純銅ボウル・銅鍋が安全かつ科学的に優れている伝統的例外が2つあります：(1) ジャム・飴作り：超高濃度の糖液は自由水が極端に少なく銅を溶出させず、微量銅イオンがペクチンと結合してゼリー強度を高める；(2) 銅ボウルでの卵白泡立て：泡立て時に微量の銅イオン（Cu²⁺）が卵白のコンアルブミン（オボトランスフェリン）と結合して強固な複合体を形成し、気泡の離水・離散を完璧に防ぎます。これら以外で内面の錫が剥がれ、硬貨大（約2 cm）以上の銅が露出した鍋は即座に使用を中止し、専門業者に再錫引きを依頼してください。',
        type: 'tip',
        boxText: '純銅はジャム作りと卵白泡立てのみ安全です。普段の調理鍋で硬貨大以上の銅が露出したら再錫引きに出しましょう。'
      }
    ],
    conclusion: '銅鍋は調理器具として至高の熱伝導性を持ちますが、未加工の純銅は酸性食品と激しく反応して有毒な銅イオンや緑青を生成します。酸味のある日常の料理には必ず内面が錫またはステンレス鋼で保護された銅鍋を使用し、錫の232℃の融点を守り、ライニングが摩耗した際は速やかに再加工に出してください。',
    faqs: [
      {
        question: '内面加工のない純銅鍋で料理すると急性銅中毒になりますか？',
        answer: 'はい、なります。トマト、ワイン、酢、レモン汁などpH 6.0未満の酸性食材を純銅鍋で調理すると銅イオンが急速に溶出します。1回の食事で10〜15 mg以上の銅を摂取すると、激しい嘔吐や胃痙攣、下痢などの急性銅中毒を引き起こします。'
      },
      {
        question: '「緑青（ろくしょう）」とは何ですか？なぜ鍋につくと危険なのですか？',
        answer: '緑青は、銅が空気中の水分、二酸化炭素、酸と反応してできる青緑色の塩基性炭酸銅や酢酸銅です。胃酸で容易に溶けて高濃度の有毒銅イオンを遊離し、消化管粘膜の急性炎症や嘔吐、重篤な肝障害を引き起こします。'
      },
      {
        question: 'なぜ伝統的な銅鍋の内面には錫（スズ）が引かれているのですか？',
        answer: '錫は酸に侵されず無毒で、食材と銅の直接接触を防ぐ理想的なバリアとなるためです。ただし錫は232℃（450°F）で溶けてしまうため、錫引き銅鍋の空焚きや強火での炒め物は厳禁です。'
      },
      {
        question: '銅鍋の錫引きはどの程度摩耗したら再加工（リライニング）が必要ですか？',
        answer: '長年の使用や洗浄により内面の錫が摩耗し、底面や側面に露出した銅の面積が硬貨大（直径約20 mm〜25 mm以上）になった時、あるいは緑青が発生した時は直ちに使用をやめ、専門業者に再錫引きを依頼してください。'
      },
      {
        question: 'なぜパティシエは純銅のボウルでメレンゲ（卵白）を泡立てるのですか？',
        answer: '純銅ボウルで泡立てると、微量の銅イオンが卵白タンパク質「オボトランスフェリン」と結合し、安定した複合体を作ります。これによりタンパク質の過度の凝固や離水が防がれ、キメ細かく艶のある強いメレンゲが仕上がります。'
      }
    ],
    relatedTools: [
      {
        name: '銅製調理器具銅緑生成＆重金属毒性速度モデラー',
        url: '/ja/tools/copper-cookware-toxicity-modeler/'
      },
      {
        name: '鋳鉄スキレット酸性トマト料理鉄分溶出＆シーズニング劣化ガイド',
        url: '/ja/blog/cast-iron-acidic-tomato-sauce-iron-leaching-guide/'
      },
      {
        name: 'ステンレス製調理器具酸性環境重金属（ニッケル＆クロム）溶出アナライザー',
        url: '/ja/tools/stainless-steel-heavy-metal-leaching-modeler/'
      }
    ]
  }
];

// ==========================================
// 6. WRITE TO 5 BLOG JSON FILES
// ==========================================
const files = [
  { path: 'src/data/blog.json', data: enGuides, lang: 'en' },
  { path: 'src/data/blog.es.json', data: esGuides, lang: 'es' },
  { path: 'src/data/blog.pt.json', data: ptGuides, lang: 'pt' },
  { path: 'src/data/blog.zh-cn.json', data: zhGuides, lang: 'zh-cn' },
  { path: 'src/data/blog.ja.json', data: jaGuides, lang: 'ja' },
];

for (const f of files) {
  const fullPath = path.resolve(f.path);
  const current = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  console.log(`Checking ${f.path}: currently has ${current.length} articles`);
  
  let added = 0;
  for (const guide of f.data) {
    if (!current.some(a => a.slug === guide.slug)) {
      current.push(guide);
      added++;
    }
  }
  
  fs.writeFileSync(fullPath, JSON.stringify(current, null, 2) + '\n', 'utf8');
  console.log(`✅ Updated ${f.path}: added ${added} guides. New count: ${current.length}`);
}

console.log('=== WAVE 50 GUIDES GENERATED AND LOCALIZED SUCCESSFULLY ===');
