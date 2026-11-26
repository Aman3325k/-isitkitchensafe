const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

const GUIDES = {
  en: [
    {
      slug: 'range-hood-cfm-make-up-air-back-burner-capture-safety',
      title: 'Over-the-Range Microwaves vs. Ducted Range Hoods: HVI 100 CFM Sizing, Flexible Foil Duct Fires & Make-Up Air Backdrafting',
      category: 'appliances',
      excerpt: 'Why 15-inch over-the-range microwaves spill up to 55% of toxic NO2 and cooking aerosols into your face—plus the HVI 100 CFM/10k BTU sizing formula, back-burner Coanda airflow physics, corrugated flex duct fire hazards, and IRC >400 CFM make-up air rules.',
      date: '2026-11-26',
      readTime: '16 min read',
      author: 'IsItKitchenSafe',
      intro: 'Switching on a stove exhaust fan that sounds loud feels reassuring, yet acoustic noise tells you almost nothing about airborne pollutant removal. Measurements by Lawrence Berkeley National Laboratory (LBNL) and ASHRAE ventilation engineers show that builder-grade over-the-range (OTR) microwaves and recirculating charcoal hoods frequently capture less than half of rising cooking emissions on front burners—allowing nitrogen dioxide (NO2), unburned benzene, and ultrafine PM2.5 oil aerosols to flood the breathing zone. Worse, oversized exhaust blowers installed in airtight modern homes without make-up air can reverse the draft in gas water-heater flues, pulling deadly carbon monoxide indoors.',
      sections: [
        {
          title: '1. The 15-Inch Overhang Gap: Why OTR Microwaves Fail Front-Burner Plumes',
          type: 'warning',
          content: 'Standard residential cooktops measure 24 inches from backsplash to front lip, yet typical over-the-range microwave hoods extend only 14.5 to 16 inches forward and lack a recessed capture sump. Because a buoyant thermal cooking plume expands outward at a half-angle of 10 to 15 degrees (and 25 degrees during hard searing or stir-frying), front-burner plumes miss the intake grille completely and bounce off the flat stainless underside into the kitchen ceiling.',
          boxText: 'CRITICAL CAPTURE GEOMETRY: LBNL testing demonstrates that deep 22–24 inch canopy hoods capture 75% to 92% of cooking pollutants on back burners, whereas shallow OTR microwaves operating on front burners often drop below 45% capture efficiency—and ductless recirculating units remove 0% of inorganic NO2 and CO.'
        },
        {
          title: '2. The HVI 100 CFM per 10,000 BTU Sizing Formula & Induction Equivalents',
          type: 'fact',
          content: 'To overcome thermal buoyancy and room cross-drafts, the Home Ventilating Institute (HVI) mandates at least 100 cubic feet per minute (CFM) of delivered exhaust airflow for every 10,000 BTU/h of total gas burner output, with ASHRAE Standard 62.2 establishing 100 CFM as the absolute minimum intermittent kitchen exhaust baseline. A 45,000 BTU 4-burner gas range needs at least 450 real delivered CFM—meaning a 300 CFM blower choked through narrow ductwork cannot keep up. For electric and induction ranges, size blowers by width instead: 10 to 12 CFM per linear inch (300–360 CFM for a 30-inch range, 360–430 CFM for a 36-inch range).',
          boxText: 'QUICK SIZING CHECK: Total Gas BTU ÷ 100 = Minimum Delivered CFM. Always verify delivered static airflow at the wall cap rather than free-air marketing numbers measured with zero ductwork attached.'
        },
        {
          title: '3. The Back-Burner Backsplash Effect & 2-Minute Pre-Start Protocol',
          type: 'tip',
          content: 'aerodynamic visualization shows that a tiled vertical backsplash acts like a boundary plate (the Coanda wall effect), preventing cool room air from slipping behind the rising pan plume and guiding grease, steam, and combustion gases vertically into the hood sump. Moving searing steaks or boiling pots from the front burners to the rear burners instantaneously lifts capture efficiency from ~50% into the 85%–95% range. Turning the exhaust fan on 1 to 2 minutes before lighting the burner pre-establishes an upward column of moving air in the duct, eliminating the initial smoke spill burst.',
          boxText: 'DAILY SAFETY HABIT: Cook heavy-smoke proteins and acidic tomato reductions on the rear burners whenever possible, start the hood 2 minutes before heating oil, and leave it running 5–10 minutes after turning the flame off.'
        },
        {
          title: '4. Flexible Ribbed Aluminum Ducts: -45% Airflow Loss & Concealed Chimney Fires',
          type: 'warning',
          content: 'Many hurried installations connect a 400+ CFM canopy hood to the roof or wall termination using cheap 6-inch corrugated accordion aluminum flex pipe or tight 90-degree bends right above the blower collar. Internal accordion ribs shed severe turbulent vortices that raise static pressure resistance and slash real-world delivered CFM by 35% to 50%. Even more dangerously, vaporized cooking triglycerides condense inside every circumferential rib ridge, turning concealed ceiling cavities into fuel-loaded grease traps vulnerable to flash fires during a stovetop flare-up.',
          boxText: 'CODE & FIRE RULE: Never use vinyl, plastic, or thin corrugated foil accordion ducting for range hoods. Specify smooth-walled 7-inch or 8-inch rigid galvanized steel ductwork (26- to 28-gauge) sealed at joints with UL 181B aluminum foil tape, not screws protruding into the airflow path.'
        },
        {
          title: '5. Make-Up Air & Negative Pressure CO Backdrafting Above 400 CFM (IRC M1503.6)',
          type: 'success',
          content: 'Every cubic foot of air blown outdoors by a range hood must re-enter the house elsewhere. Under International Residential Code (IRC Section M1503.6), range hoods capable of exhausting more than 400 CFM in tight modern homes require dedicated interlocked make-up air (MUA). Without replacement air, a 600 to 1,200 CFM blower depressurizes the kitchen below -5 to -15 Pascals, overpowering natural-draft chimneys and sucking deadly carbon monoxide back down gas water-heater, furnace, or wood-fireplace flues into living rooms. Cracking a nearby window 1 to 2 inches provides immediate passive pressure relief when an automated MUA damper is absent.',
          boxText: 'LIFE-SAFETY MANDATE: If your kitchen runs a 400+ CFM exterior blower alongside naturally drafted gas appliances, install UL-listed CO alarms on every floor and slightly crack an adjacent window—or install an electrical MUA damper.'
        }
      ],
      conclusion: 'Clean kitchen air depends less on horsepower ratings on the box and more on three mechanical fundamentals: a deep, exterior-ducted canopy hood overhanging the burners, smooth rigid galvanized ductwork without choke points, and deliberate make-up air balance combined with rear-burner cooking habits. When ducted exterior upgrades are impossible in a rental apartment, switching high-heat searing to a portable single-burner induction unit cuts NO2 and benzene generation to zero immediately.',
      faqs: [
        {
          question: 'How can I tell if my range hood vents outside or just recirculates?',
          answer: 'Open the upper cabinet directly above your range hood or microwave. If you see a 6- to 8-inch sheet-metal duct rising through the cabinet into the ceiling or rear wall—and feel airflow exiting an exterior wall louver or roof cap while running—it is ducted outside. If a louvered slot at the top front edge blows warm air straight back toward your forehead and no metal pipe exists inside the cabinet, it is ductless recirculating.'
        },
        {
          question: 'Can a HEPA air purifier replace a ducted range hood in an apartment?',
          answer: 'A true HEPA purifier helps reduce leftover PM2.5 oil droplets after cooking, and thick pelletized carbon canisters partially lower VOC odors, but standard portable air purifiers capture negligible Nitrogen Dioxide (NO2) and zero Carbon Monoxide (CO). For renters stuck with ductless hoods over gas ranges, cracking two cross-ventilating windows or using a countertop induction burner provides far greater gas-pollutant protection.'
        },
        {
          question: 'How high above the stove should a range hood be mounted?',
          answer: 'For optimal plume capture without overheating controls, mount wall canopy hoods 24 to 30 inches above electric or induction surfaces and 28 to 30 inches (up to 36 inches for high-BTU commercial style hoods—follow the UL nameplate clearance) above open gas flames. Every inch above 30 inches widens the ascending plume cone and measurably reduces capture percentage.'
        },
        {
          question: 'Does running an island range hood require more CFM than a wall hood?',
          answer: 'Yes. Without a rear backsplash wall to anchor the thermal plume, island cooking plumes suffer 360-degree cross-room drafts from HVAC registers and walking traffic. Island canopies should extend at least 3 inches wider on every side of the cooktop and deliver roughly 25% to 35% higher CFM (typically 120–150 CFM per 10,000 BTU, alongside motorized make-up air) than equivalent wall hoods.'
        },
        {
          question: 'When does IRC building code require a motorized make-up air damper?',
          answer: 'The International Residential Code (IRC Section M1503.6) specifies that any kitchen exhaust hood rated above 400 CFM must include dedicated make-up air equal to the exhaust capacity above 400 CFM (or total exhaust rate in jurisdictions with stricter amendments), interlocked automatically via an electrical relay or barometric damper so it opens whenever the fan runs.'
        }
      ],
      relatedTools: [
        { name: 'Range Hood VOC, NO2 & PM2.5 Extraction Efficiency Modeler', url: '/tools/range-hood-extraction-efficiency-modeler/' },
        { name: 'Gas Stove Benzene & Indoor NO2 Calculator', url: '/tools/gas-stove-benzene-no2-calculator/' },
        { name: 'Air Fryer PAH Thermal Resuspension & PM2.5 Modeler', url: '/tools/air-fryer-pah-resuspension-modeler/' }
      ]
    },
    {
      slug: 'cuisinart-grill-charbroil-ambiano-2026-cpsc-recalls-guide',
      title: '2026 Grill & Pressure Cooker CPSC Recalls: Cuisinart CGG-6331 Pizza-Oven Glass Shatter, Char-Broil Bistro Pro Shock & Ambiano ALDI Burn Alerts',
      category: 'appliances',
      excerpt: 'Urgent 2026 U.S. CPSC recall breakdown covering ~12,660 Cuisinart Propel+ CGG-6331 gas grills ($500 refund for shattering tempered glass), Char-Broil Bistro Pro electric shock recalls (date codes 2510–2512), and ~46,660 ALDI Ambiano pressure cookers.',
      date: '2026-11-26',
      readTime: '17 min read',
      author: 'IsItKitchenSafe',
      intro: 'Three widely purchased home cooking appliances hit federal recall lists across late 2025 through autumn 2026 with distinct but severe failure modes: spontaneous tempered glass explosion inside built-in pizza ovens, loss of earth-ground protection on outdoor electric heating elements, and premature lid unlocking under live steam pressure. Because many households store seasonal grills and multi-cookers in garages or pantries for months between uses, checking exact model and date stamps is critical before firing them up.',
      sections: [
        {
          title: '1. Cuisinart Propel+ 4-Burner 3-in-1 Gas Grill (Model CGG-6331 — July 2026 Recall #26-605)',
          type: 'warning',
          content: 'In July 2026, Conair LLC and the CPSC recalled approximately 12,660 Cuisinart Propel+ Four Burner 3-in-1 Gas Grills in the United States (alongside about 83 units in Canada) under Model CGG-6331 (Recall #26-605). The integrated pizza-oven lid incorporates a tempered glass viewing window that can shatter unpredictably during high-heat operation, projecting sharp glass fragments onto nearby food and users while exposing molten cheese and grease to open flame.',
          boxText: 'REMEDY ($500 REFUND): Stop using Model CGG-6331 immediately. Per CPSC remedy instructions, carefully wear thick protective gloves and eyewear, remove or mark the tempered glass panel per manufacturer guidance, submit verification photographs to Conair LLC, and claim a full $500 refund.'
        },
        {
          title: '2. Char-Broil Bistro Pro Electric Grills (Sept 2026 CPSC Shock Recall: Date Codes 2510–2512)',
          type: 'warning',
          content: 'In September 2026, Char-Broil initiated a voluntary CPSC recall of Bistro Pro Electric Grills (including grill and griddle configurations across US SKUs 25302145 through 25302163 and Canadian SKU 25302177) bearing manufacturing date codes 2510, 2511, and 2512 (October through December 2025). The internal grounding wire bonded to the heating element can work loose under thermal expansion cycles, severing earth-fault protection and energizing the metal chassis at full 120V AC household line voltage.',
          boxText: 'ELECTRICAL SHOCK HAZARD: Unplug affected Char-Broil Bistro Pro units from the outlet immediately—even a GFCI breaker may fail to trip until a human touches the ungrounded chassis in damp patio conditions. Verify your 4-digit date stamp on the rating label before ordering the official repair/replacement kit.'
        },
        {
          title: '3. Ambiano Electric Pressure Cookers Sold at ALDI (46,660 Units — CPSC Recall #26-007)',
          type: 'warning',
          content: 'Roughly 46,660 Ambiano 6-quart and 8-quart electric pressure cookers imported by Tempo International (USA) Inc. and sold at ALDI supermarkets between 2016 and 2019 carry CPSC Recall #26-007. Affected units bear model numbers 93550 (KY-318B), 96775 (KY-318A), or 98527 (6L-PC). Mechanical tolerances on the lid interlock allow users to twist the lid open while dangerous residual steam pressure (>10 PSI) remains inside the vessel, forcefully ejecting scalding broth and stew across kitchens.',
          boxText: 'DO NOT RELY ON "STIFFNESS" FEEL: Even if an Ambiano unit seems to lock normally today, repeated gasket compression and pin wear cause sudden interlock bypass. Stop using Models 93550, 96775, and 98527 immediately and register under Tempo USA Recall #26-007 for replacement/refund remedies.'
        },
        {
          title: '4. Why Tempered Glass Shatters, Ground Wires Snap & Float Pins Jam Under Kitchen Stress',
          type: 'fact',
          content: 'Each recall highlights a repeatable engineering stress mechanism. First, soda-lime tempered glass windows exposed to asymmetric 400°C+ pizza-oven flame radiation suffer high surface-to-core thermal gradients and nickel-sulfide inclusion expansion, causing spontaneous explosive dicing. Second, crimped spade lugs on electric grill elements oxidize and lose spring tension across rapid 20°C–300°C heat/cool swings unless mechanically lock-bolted. Third, starchy food foam dries inside narrow pressure-cooker float valves, tricking mechanical sliders into unlocking before boiling pressure drops to ambient 0 PSI.',
          boxText: 'INSPECTION TRIAGE: Never scrape pizza-oven glass with steel wool (micro-scratches seed thermal fracture), inspect patio electric grill cords and plug them strictly into tested GFCI receptacles, and always confirm zero steam hissing plus a fully dropped float pin before twisting any pressure cooker lid.'
        },
        {
          title: '5. How to Check Rating Plates Safely & Claim Full Refunds Before Recalls Close',
          type: 'tip',
          content: 'Locate the stamped rating plate on the rear leg panel of gas grills, underside chassis base of electric grills, or side silver label of countertop pressure cookers while the unit is unplugged and cold. Photograph both the model number, date code (e.g., 2510/2511/2512), and the cut power cord (only when explicitly requested by CPSC refund portal instructions) in crisp daylight alongside your handwritten claim code.',
          boxText: 'CONSUMER CHECKLIST: Cross-check CPSC.gov Recall #26-605 (Cuisinart CGG-6331), #26-007 (Ambiano ALDI), and Char-Broil Bistro Pro recall portals before disposing of hardware so you preserve eligibility for cash refunds or free repair kits.'
        }
      ],
      conclusion: 'Kitchen and backyard recalls frequently sit unnoticed for years because owners rarely subscribe to federal CPSC bulletins after checkout. Spending three minutes reading the bottom or backplate rating sticker on your Cuisinart 3-in-1 grill, Char-Broil electric unit, or ALDI pressure cooker prevents catastrophic shattering glass lacerations, 120V shock currents, and 240°F steam eruptions—while putting valid manufacturer refunds back into your household budget.',
      faqs: [
        {
          question: 'Which exact Cuisinart grill models are included in Recall #26-605?',
          answer: 'CPSC Recall #26-605 covers the Cuisinart Propel+ Four Burner 3-in-1 Gas Grill (Model CGG-6331, roughly 12,660 US units and 83 Canadian units distributed by Conair LLC). Check the silver rating label on the back or interior leg cabinet for Model CGG-6331.'
        },
        {
          question: 'How do I read the Char-Broil Bistro Pro date code to see if mine is recalled?',
          answer: 'Unplug the grill and inspect the manufacturer rating label for the 4-digit YYWW/YYMM manufacturing date code alongside SKUs 25302145 through 25302163 (US) or 25302177 (Canada). Units stamped 2510, 2511, or 2512 (manufactured October–December 2025) are subject to the September 2026 grounding-wire shock recall.'
        },
        {
          question: 'Are newer Ambiano ALDI pressure cookers included in Recall #26-007?',
          answer: 'Recall #26-007 specifically names 6-quart and 8-quart Tempo International Ambiano Electric Pressure Cookers bearing model numbers 93550 (KY-318B), 96775 (KY-318A), and 98527 (6L-PC) sold between 2016 and 2019. Always verify the exact model code printed on the lower body rating decal rather than relying on box color.'
        },
        {
          question: 'Should I cut the power cord or break the grill glass before submitting a claim?',
          answer: 'Read the active CPSC and manufacturer claim page carefully first! Cuisinart CGG-6331 requires specific safety steps for removing and marking the glass window alongside proof photos for the $500 refund, whereas cord-cut disposal photos are standard on plug-in appliances only when instructed by the active remedy portal.'
        },
        {
          question: 'Why does tempered glass in grill lids shatter months after normal use?',
          answer: 'Tempered safety glass stores immense internal compressive-tensile stress during factory quenching. Surface micro-scratches from metal spatulas, uneven flame impingement, thermal shock from rain droplets hitting a 400°C window, or trace factory nickel-sulfide inclusions can trigger sudden chain-reaction shattering long after initial purchase.'
        }
      ],
      relatedTools: [
        { name: 'Barcode & Product Packaging Recalls Scanner', url: '/tools/product-recalls-scanner/' },
        { name: 'Pressure Cooker & Instant Pot Fill-Line & Release Safety Simulator', url: '/tools/pressure-cooker-instant-pot-safety-simulator/' },
        { name: 'Kitchen Hazard Emergency Triage & Containment Tool', url: '/tools/kitchen-hazard-emergency-triage/' }
      ]
    },
    {
      slug: 'eu-2026-2376-recycled-food-plastic-fda-spice-lead-safety-guide',
      title: 'Recycled Food Packaging (EU 2026/2376 Rules) & Ground Cinnamon Lead Alerts: Late-2026 FDA Spice Recalls (Wise Wife, Lior) & Safe Storage Upgrades',
      category: 'food-safety',
      excerpt: 'How Commission Regulation (EU) 2026/2376 locks down chemical contamination in recycled food-contact plastics—plus late-2026 FDA ground cinnamon lead recalls (Wise Wife 2.118 ppm, Lior Lot GAP11304, Spice Class, La Frontera) and safe storage fixes.',
      date: '2026-11-26',
      readTime: '16 min read',
      author: 'IsItKitchenSafe',
      intro: 'Two converging food-contact safety fronts reshaped late-2026 kitchen standards on opposite sides of the pantry: strict European rules governing post-consumer recycled food plastics under Commission Regulation (EU) 2026/2376 (adopted October 28, 2026), and escalating U.S. FDA recalls catching neurotoxic lead inside imported ground cinnamon jars. Because both issues stem from contaminated supply streams entering everyday pantry containers and food—and both worsen when exposed to kitchen heat and acidic cooking—knowing exactly which lot codes to discard and which container polymers to trust protects children and adults alike.',
      sections: [
        {
          title: '1. Commission Regulation (EU) 2026/2376: Cracking Down on Recycled Food Plastics',
          type: 'fact',
          content: 'Published in the Official Journal of the European Union on October 29, 2026, Commission Regulation (EU) 2026/2376 directly amends the landmark EU Recycled Plastic Food-Contact framework (Regulation (EU) 2022/1616). The updated rules tighten Union register registration, standardize mandatory compliance Declarations P and C across recyclers and importers, and enforce strict decontamination testing and customs documentation before recycled plastics (such as rPET bottle flake or closed-loop recycled trays) enter EU food supply chains.',
          boxText: 'WHY RECYCLED PLASTICS NEED STRICT BARRIERS: Unverified post-consumer plastic streams carry residual labels, industrial oils, heavy-metal stabilizers, and degraded polymer fragments (NIAS) that migrate rapidly when reused for hot soups, acidic sauces, or greasy leftovers.'
        },
        {
          title: '2. Late-2026 FDA Ground Cinnamon Lead Recalls: Wise Wife (2.118 ppm), Lior, Spice Class & La Frontera',
          type: 'warning',
          content: 'Throughout late 2026, the U.S. FDA expanded public health advisories and coordinated voluntary recalls targeting imported ground cinnamon laced with toxic elemental lead. Specifically, SLR Food Distribution Inc. recalled Wise Wife Brand Ground Cinnamon across 14 states (UPC 0688474302754, Best Before 4/25/2027) after testing detected 2.118 parts per million (ppm) of lead, while Galil Importing Corp. recalled Lior Cinnamon Ground Seasoning (UPC 794711005484, Lot GAP11304) following Maryland Department of Health surveillance. Additional alerts flagged Spice Class and La Frontera ground cinnamon.',
          boxText: 'ZERO SAFE BLOOD LEAD LEVEL (CDC): Children absorb 4 to 5 times more ingested lead than adults. Check your spice rack immediately for Wise Wife (UPC 0688474302754), Lior (Lot GAP11304), Spice Class, or La Frontera ground cinnamon and discard affected jars rather than finishing them.'
        },
        {
          title: '3. Why Heat, Acidity & Recycled Plastic Tubs Amplify Chemical Exposure',
          type: 'warning',
          content: 'Storing warm dishes, acidic tomato sauces, or oil-rich marinades in flimsy single-use rPET deli tubs or scratched unverified recycled containers triggers additive bloom and oligomer hydrolysis. Above 40°C (104°F), amorphous rPET softens past half its glass-transition stability window, accelerating migration of residual catalysts (antimony trioxide), cyclic oligomers, and trace contaminants—while hot acidic broths cooked with heavy-metal-contaminated spices mobilize bioavailable Pb2+ ions across GI membranes.',
          boxText: 'CRITICAL STORAGE RULE: Never microwave, dishwasher-sanitize, or pour simmering liquids into supermarket clear clamshells, rPET cold-drink bottles, or flimsy recycled takeout tubs—even if stamped "BPA-Free."'
        },
        {
          title: '4. Practical Pantry Swap: Borosilicate 3.3 Glass Jars & Food-Grade #5 PP vs. Recycled PET',
          type: 'tip',
          content: 'Replace aged plastic spice bottles and reused deli tubs mounted above warm stoves with tight-sealing borosilicate 3.3 glass jars or AISI 304 stainless steel canisters. Light, stove steam, and ambient heat (which regularly exceeds 35°C in cabinets right beside range hoods) accelerate oxidative rancidity in spice oils and drive additive leaching in soft plastic walls. For freezing or cold pantry storage where plastic is unavoidable, select thick-walled virgin #5 polypropylene (PP) or certified EVOH-barrier pouches rather than recycled #1 PET.',
          boxText: 'PANTRY AUDIT CHECKLIST: Keep spices in dark or cabinet-shielded glass away from range steam, buy whole cinnamon sticks (Ceylon or cassia) to freshly grate when possible (avoiding bulk pre-ground adulteration), and verify supplier COA/lot testing on imported blends.'
        },
        {
          title: '5. How to Spot Unverified Plastics & Check Imported Pantry Goods',
          type: 'success',
          content: 'Consumer vigilance closes the gap between regulatory adoption and existing pantry shelves. Inspect container bottoms using standard Resin Identification Codes (#1 PET/rPET cold use only, #2 HDPE & #5 virgin PP cold/moderate tolerance, avoid uncertified #3 PVC, #6 PS, #7 PC/unknown for hot food). Simultaneously cross-check FDA active recall databases by UPC barcode before baking holiday cinnamon pies, apple cider, or pediatric oatmeal.',
          boxText: 'THREE-SECOND HABIT: Scan suspect spice jars and plastic containers with an updated recall & resin checker—discard recalled cinnamon lots immediately and reserve glass or stainless steel for every heated food-contact task.'
        }
      ],
      conclusion: 'Regulation (EU) 2026/2376 and late-2026 FDA lead-in-cinnamon recalls underscore the exact same principle: upstream recycling errors and agricultural heavy-metal adulteration cannot be cooked away at the stove. Inspect your pantry for recalled ground cinnamon UPCs (Wise Wife 0688474302754, Lior GAP11304, Spice Class, La Frontera), keep recycled PET strictly for cold factory-sealed beverages, and standardize heated food prep and spice storage on inert borosilicate glass and food-grade stainless steel.',
      faqs: [
        {
          question: 'Which ground cinnamon brands were recalled or flagged by the FDA in late 2026?',
          answer: 'Late-2026 FDA advisories and recalls include Wise Wife Brand Ground Cinnamon distributed by SLR Food Distribution Inc. across 14 states (2.118 ppm lead, UPC 0688474302754, Best Before 4/25/2027), Lior Cinnamon Ground Seasoning by Galil Importing Corp. (UPC 794711005484, Lot GAP11304), as well as Spice Class and La Frontera ground cinnamon on FDA public health alert tables.'
        },
        {
          question: 'What did Commission Regulation (EU) 2026/2376 change for food packaging?',
          answer: 'Adopted October 28, 2026 and amending Regulation (EU) 2022/1616, Regulation (EU) 2026/2376 strengthens EU Union register management, standardizes supply-chain compliance declarations (Declarations P and C), and tightens decontamination test verification and import customs documentation for recycled food-contact plastics.'
        },
        {
          question: 'Does boiling or baking cinnamon destroy lead contamination?',
          answer: 'No. Lead is an indestructible metallic element—no cooking, boiling, slow-cooking, or baking temperature can break down or evaporate elemental lead from food. If a jar matches a recalled lot or public health advisory, it must be discarded immediately.'
        },
        {
          question: 'Is recycled PET (#1 rPET) safe to reuse for hot leftovers or pantry spices?',
          answer: 'Supermarket #1 rPET/PET containers are engineered strictly for single-use cold or room-temperature beverages and produce. Heat softens PET, speeds up chemical migration and cyclic oligomer leaching, and promotes bacterial colonization inside surface scuffs—never reuse cold-drink rPET tubs for hot food or long-term warm pantry storage.'
        },
        {
          question: 'What should I do if a young child already ate recalled ground cinnamon?',
          answer: 'Stop serving the product immediately, save the container photo/UPC in case your clinician needs lot details, and contact your pediatrician to discuss a simple capillary or venous blood lead level (BLL) test. The CDC stresses there is no known safe blood lead concentration in children, making early dietary source removal and screening essential.'
        }
      ],
      relatedTools: [
        { name: 'Kitchen Plastic Leaching & Hot Food Safe Container Checker', url: '/tools/kitchen-plastic-leaching-checker/' },
        { name: 'Barcode & Product Packaging Recalls Scanner', url: '/tools/product-recalls-scanner/' },
        { name: 'Pantry, Spices & Dry Goods Shelf-Life Checker', url: '/tools/pantry-dry-goods-shelf-life-checker/' }
      ]
    }
  ],
  es: [
    {
      slug: 'range-hood-cfm-make-up-air-back-burner-capture-safety',
      title: 'Microondas Extractores vs. Campanas con Conducto: Regla HVI 100 CFM, Fuego en Tubos Corrugados y Aire de Compensación (>400 CFM)',
      category: 'appliances',
      excerpt: 'Por qué los microondas extractores de 15 pulgadas dejan escapar hasta el 55% del NO2 y aerosoles de cocción—junto a la fórmula HVI 100 CFM por 10.000 BTU, física de fuegos traseros, peligro de tubos flexibles y aire de compensación IRC.',
      date: '2026-11-26',
      readTime: '16 min de lectura',
      author: 'IsItKitchenSafe',
      intro: 'Encender una campana extractora ruidosa da una falsa sensación de seguridad, pero el ruido del motor no mide la captura real de contaminantes. Ensayos del Laboratorio Nacional Lawrence Berkeley (LBNL) y directrices de ingeniería ASHRAE confirman que los microondas extractores poco profundos y las campanas sin salida con filtro de carbón capturan menos de la mitad del penacho de gases en los fuegos delanteros, inundando la cocina de dióxido de nitrógeno (NO2), benceno y PM2.5. Al mismo tiempo, extractores muy potentes (>400 CFM) en viviendas herméticas sin aire de compensación pueden generar presión negativa y revocar monóxido de carbono desde calderas y calentadores de gas.',
      sections: [
        {
          title: '1. La Brecha de Profundidad (15 Pulgadas): Por Qué Falla el Microondas Extractor',
          type: 'warning',
          content: 'Las placas domésticas tienen unos 60 cm (24 pulgadas) de fondo, pero un microondas extractor estándar apenas sobresale 37–40 cm (15 pulgadas) y carece de colector cóncavo. Como el penacho ascendente se ensancha en cono entre 10° y 15° (hasta 25° en salteados fuertes), el humo de los fuegos delanteros esquiva la rejilla y choca contra el borde frontal hacia el techo.',
          boxText: 'GEOMETRÍA CRÍTICA DE CAPTURA: Las pruebas del LBNL muestran que una campana profunda de 22–24 pulgadas atrapa entre el 75% y el 92% de los contaminantes en fuegos traseros, mientras que los microondas extractores caen por debajo del 45% en fuegos delanteros y las unidades sin conducto eliminan el 0% del NO2.'
        },
        {
          title: '2. Fórmula HVI de 100 CFM por 10.000 BTU y Equivalencia para Inducción',
          type: 'fact',
          content: 'El estándar HVI (Home Ventilating Institute) y ASHRAE 62.2 exigen al menos 100 CFM reales de extracción exterior por cada 10.000 BTU/h de potencia total de quemadores de gas (con un mínimo absoluto de 100 CFM). Una cocina de gas de 45.000 BTU requiere al menos 450 CFM reales entregados al exterior. En placas de inducción o eléctricas, calcule entre 10 y 12 CFM por pulgada lineal de ancho de placa (300–360 CFM para placas de 75 cm / 30").',
          boxText: 'CÁLCULO RÁPIDO: BTU Totales de Gas ÷ 100 = CFM Mínimo Real. Verifique siempre el caudal efectivo a través del conducto y no el valor libre de laboratorio sin carga.'
        },
        {
          title: '3. El Efecto Guía de los Fuegos Traseros y la Regla de los 2 Minutos Antes',
          type: 'tip',
          content: 'El salpicadero vertical de la pared trasera actúa como deflector aerodinámico (efecto Coanda), impidiendo que entre aire turbulento por detrás de la columna térmica y guiando grasa, vapor y NO2 recto hacia los filtros. Pasar las sartenes de sellado fuerte de los quemadores frontales a los traseros eleva la captura del ~50% al 85%–95%. Encender el extractor 1–2 minutos antes del fuego estabiliza el tiro en el tubo.',
          boxText: 'HÁBITO DIARIO: Fría carnes y reducciones ácidas en los quemadores traseros, encienda la campana 2 minutos antes de calentar aceite y déjela funcionar 5–10 minutos después de apagar.'
        },
        {
          title: '4. Tubos Corrugados Flexibles: Pérdida del 45% de Caudal y Trampas de Fuego',
          type: 'warning',
          content: 'Muchas reformas conectan campanas de gran caudal mediante tubo flexible corrugado de aluminio de 6 pulgadas y codos cerrados de 90°. Sus pliegues internos producen turbulencia extrema que recorta el caudal efectivo entre un 35% y un 50%. Aún más peligroso, la grasa aerolizada se condensa en cada surco del fuelle, creando una mecha inflamable oculta en el falso techo.',
          boxText: 'NORMA CONTRA INCENDIOS: Nunca use tubo flexible corrugado ni PVC en campanas de cocina. Instale conducto rígido liso de acero galvanizado de 7 u 8 pulgadas sellado con cinta metálica UL 181B, sin tornillos salientes por dentro.'
        },
        {
          title: '5. Aire de Compensación y Peligro de Revoco de CO Sobre 400 CFM (IRC M1503.6)',
          type: 'success',
          content: 'Todo el aire expulsado por la campana debe reponerse en la vivienda. El código residencial IRC M1503.6 exige aire de compensación en campanas mayores a 400 CFM en viviendas estancas: sin reposición, un extractor de 600–1.200 CFM crea vacío interior (-5 a -15 Pa) capaz de succionar monóxido de carbono hacia atrás desde chimeneas, estufas o calentadores de gas atmosféricos. Entreabrir una ventana cercana al cocinar neutraliza de inmediato la depresión.',
          boxText: 'SEGURIDAD VITAL: Si su cocina cuenta con extractor >400 CFM junto a calderas o calentadores de tiro natural, instale detectores de CO en cada planta y abra una rendija de ventana al cocinar (o una compuerta automatizada de aporte).'
        }
      ],
      conclusion: 'La ventilación saludable en la cocina no depende de los decibelios del motor sino de tres factores mecánicos: campana profunda con salida exterior, conducto rígido liso de amplio diámetro y equilibrio de aire de compensación junto al uso prioritario de los fuegos traseros. En pisos de alquiler donde resulte imposible abrir conducto exterior, trasladar las frituras y sellados intensos a una placa portátil de inducción reduce inmediatamente a cero el NO2 y benceno por combustión.',
      faqs: [
        {
          question: '¿Cómo sé si mi campana extrae afuera o solo recircula?',
          answer: 'Abra el armario superior justo sobre la campana o microondas. Si ve un tubo metálico redondo o rectangular hacia el techo o fachada exterior, es con salida exterior. Si el aire sale por unas rejillas frontales hacia su frente sin conducto metálico interior, es de recirculación.'
        },
        {
          question: '¿Puede un purificador HEPA sustituir a la campana extractora?',
          answer: 'Un buen purificador HEPA reduce partículas finas PM2.5 tras cocinar, pero los filtros domésticos apenas atrapan dióxido de nitrógeno (NO2) y retienen 0% de monóxido de carbono (CO). Abrir dos ventanas en corriente cruzada o usar inducción es mucho más eficaz.'
        },
        {
          question: '¿A qué altura debe instalarse la campana sobre la placa?',
          answer: 'Generalmente entre 24 y 30 pulgadas (60–75 cm) sobre placas eléctricas o de inducción, y entre 28 y 30 pulgadas sobre fuego de gas (siguiendo la placa del fabricante). Cada pulgada extra dispersa el penacho y reduce drásticamente la eficiencia.'
        },
        {
          question: '¿Una campana de isla necesita más caudal CFM que una de pared?',
          answer: 'Sí. Al carecer de pared trasera guía y sufrir corrientes de aire en los 360 grados, las campanas de isla requieren mayor cobertura lateral y entre un 25% y un 35% más de CFM (120–150 CFM por cada 10.000 BTU).'
        },
        {
          question: '¿Cuándo exige la normativa aire de compensación (Make-Up Air)?',
          answer: 'Las referencias IRC M1503.6 establecen el umbral estándar en 400 CFM para viviendas estancas, exigiendo compuerta motorizada o aporte de aire exterior sincronizado con el extractor para evitar revocos de combustión.'
        }
      ],
      relatedTools: [
        { name: 'Modelador de Eficiencia de Extracción de Campanas (VOC, NO2 y PM2.5)', url: '/es/tools/range-hood-extraction-efficiency-modeler/' },
        { name: 'Calculadora de Benceno y NO2 en Estufas de Gas', url: '/es/tools/gas-stove-benzene-no2-calculator/' },
        { name: 'Modelador de Resuspensión de PAH y PM2.5 en Freidora de Aire', url: '/es/tools/air-fryer-pah-resuspension-modeler/' }
      ]
    },
    {
      slug: 'cuisinart-grill-charbroil-ambiano-2026-cpsc-recalls-guide',
      title: 'Retiros CPSC 2026 en Parrillas y Ollas: Estallido de Vidrio Cuisinart CGG-6331, Descarga Char-Broil Bistro Pro y Ollas Ambiano de ALDI',
      category: 'appliances',
      excerpt: 'Guía urgente de retiros CPSC 2025–2026: ~12.660 parrillas de gas Cuisinart CGG-6331 (reembolso $500 por cristal de horno pizzero), parrillas eléctricas Char-Broil Bistro Pro (códigos 2510–2512, choque eléctrico) y ~46.660 ollas Ambiano ALDI.',
      date: '2026-11-26',
      readTime: '17 min de lectura',
      author: 'IsItKitchenSafe',
      intro: 'Tres populares equipos de cocina y patio protagonizaron alertas y retiros oficiales de la CPSC hasta finales de 2026 por fallos mecánicos y eléctricos graves: estallido de mirillas de vidrio templado en hornos pizzeros integrados, desconexión de cables de toma de tierra en resistencias eléctricas de exterior y apertura prematura de tapas bajo vapor a presión. Revisar las etiquetas exactas de modelo y fecha antes de encender equipos guardados evita cortes, descargas y quemaduras críticas.',
      sections: [
        {
          title: '1. Parrilla de Gas Cuisinart Propel+ 3 en 1 (Modelo CGG-6331 — Retiro CPSC #26-605)',
          type: 'warning',
          content: 'En julio de 2026, Conair LLC y la CPSC retiraron alrededor de 12.660 unidades en EE. UU. (más 83 en Canadá) de la parrilla de gas 3 en 1 Cuisinart Propel+ de cuatro quemadores (Modelo CGG-6331, Retiro #26-605). La ventana de vidrio templado integrada en la tapa del horno de pizza puede estallar durante el uso, proyectando fragmentos cortantes y exponiendo grasa ardiente.',
          boxText: 'REEMBOLSO DE $500 USD: Suspenda el uso del modelo CGG-6331 de inmediato. Siguiendo la guía oficial de Conair/CPSC con guantes gruesos y gafas, retire o marque el cristal según instrucciones y envíe fotos verificadas para recibir el reembolso completo de $500.'
        },
        {
          title: '2. Parrillas Eléctricas Char-Broil Bistro Pro (Retiro Septiembre 2026: Códigos 2510–2512)',
          type: 'warning',
          content: 'En septiembre de 2026, Char-Broil anunció el retiro voluntario junto a la CPSC de parrillas eléctricas Bistro Pro (SKUs 25302145 a 25302163 en EE. UU. y 25302177 en Canadá) fabricadas entre octubre y diciembre de 2025 (códigos de fecha 2510, 2511 y 2512). El cable de puesta a tierra de la resistencia calefactora puede desconectarse, dejando el cuerpo metálico energizado sin protección frente a descargas.',
          boxText: 'RIESGO DE CHOQUE ELÉCTRICO: Desenchufe de inmediato cualquier Bistro Pro fabricada bajo los códigos 2510, 2511 o 2512 y revise la etiqueta de fábrica antes de tramitar el kit de reparación o sustitución autorizado.'
        },
        {
          title: '3. Ollas a Presión Eléctricas Ambiano Vendidas en ALDI (46.660 Unidades — Retiro #26-007)',
          type: 'warning',
          content: 'Aproximadamente 46.660 ollas rápidas eléctricas Ambiano de 6 y 8 cuartos importadas por Tempo International (USA) Inc. y vendidas en ALDI entre 2016 y 2019 están sujetas al Retiro CPSC #26-007 (modelos 93550 / KY-318B, 96775 / KY-318A y 98527 / 6L-PC). Su mecanismo de bloqueo permite girar y abrir la tapa antes de liberar todo el vapor presurizado, expulsando líquidos hirviendo hacia el usuario.',
          boxText: 'NO CONFÍE EN EL TACTO MANUAL: Aunque la tapa parezca cerrar bien hoy, el desgaste de la válvula flotante permite aperturas bajo presión. Deje de usar los modelos 93550, 96775 y 98527 y consulte la compensación bajo el Retiro #26-007.'
        },
        {
          title: '4. Física del Fallo: Estrés Térmico en Vidrio, Terminales Sueltos y Válvulas Bloqueadas',
          type: 'fact',
          content: 'Cada caso responde a tensiones repetibles de diseño: el vidrio templado sódico-cálcico ante llamas asimétricas de 400°C desarrolla gradientes internos y fracturas por micro-muescas o inclusiones de sulfuro de níquel; las lengüetas sin bloqueo mecánico se aflojan tras ciclos térmicos de 20°C a 300°C cortando la masa eléctrica; y los residuos secos de almidón traban el pasador de presión de las ollas.',
          boxText: 'PREVENCIÓN ACTIVA: Nunca frote cristales de hornos con estropajos metálicos, conecte parrillas eléctricas exclusivamente a tomas GFCI/diferenciales revisadas y confirme la caída física del flotador antes de abrir cualquier olla rápida.'
        },
        {
          title: '5. Cómo Verificar Placas de Serie y Tramitar Reembolsos sin Errores',
          type: 'tip',
          content: 'Busque la chapa metálica o etiqueta de especificaciones con el equipo frío y desenchufado (pata trasera en parrillas de gas, base inferior en eléctricas o lateral metálico en ollas a presión). Fotografíe con buena luz modelo, código de fecha y las evidencias exigidas por el portal oficial antes de desechar el aparato.',
          boxText: 'LISTA DE CONTROL: Coteje CPSC.gov #26-605 (Cuisinart CGG-6331), #26-007 (Ambiano ALDI) y el portal Char-Broil Bistro Pro para reclamar el reembolso o reparación correspondiente.'
        }
      ],
      conclusion: 'Gran parte de los accidentes por equipos retirados ocurren en hogares que desconocen las alertas emitidas meses o años después de la compra. Dedicar tres minutos a confirmar las placas de su parrilla Cuisinart CGG-6331, Char-Broil Bistro Pro u olla Ambiano elimina riesgos de vidrios proyectados, electrocución y quemaduras por vapor presurizado.',
      faqs: [
        {
          question: '¿Qué modelo exacto de parrilla Cuisinart está incluido en el retiro #26-605?',
          answer: 'El retiro #26-605 afecta a la parrilla de gas 3 en 1 de cuatro quemadores Cuisinart Propel+ modelo CGG-6331 (aproximadamente 12.660 unidades en EE. UU. y 83 en Canadá distribuidas por Conair LLC).'
        },
        {
          question: '¿Cómo identificar las parrillas Char-Broil Bistro Pro retiradas por choque eléctrico?',
          answer: 'Revise la etiqueta de especificaciones tras desenchufarla: afecta a modelos SKU 25302145–25302163 (EE. UU.) y 25302177 (Canadá) con códigos de fecha 2510, 2511 o 2512.'
        },
        {
          question: '¿Qué códigos de ollas Ambiano de ALDI figuran en el Retiro #26-007?',
          answer: 'Afecta a ~46.660 ollas a presión eléctricas de 6 y 8 cuartos con modelos 93550 (KY-318B), 96775 (KY-318A) y 98527 (6L-PC) importadas por Tempo International (USA) Inc.'
        },
        {
          question: '¿Debo cortar el cable o desmontar el vidrio antes de presentar mi reclamación?',
          answer: 'Siga estrictamente las instrucciones vigentes del portal oficial del retiro: Cuisinart CGG-6331 detalla cómo retirar/marcar el vidrio de forma segura para optar al reembolso de $500, y nunca destruya pruebas hasta leer el paso a paso requerido.'
        },
        {
          question: '¿Por qué estalla el vidrio templado de una parrilla tras varios meses de uso normal?',
          answer: 'El vidrio templado acumula estrés residual interno; los arañazos de espátulas, choques térmicos con lluvia o grasa y tensiones térmicas asimétricas superan el umbral de rotura propagando una explosión en pequeños fragmentos.'
        }
      ],
      relatedTools: [
        { name: 'Escáner de Códigos y Retiros de Productos de Cocina', url: '/es/tools/product-recalls-scanner/' },
        { name: 'Simulador de Seguridad para Ollas a Presión e Instant Pot', url: '/es/tools/pressure-cooker-instant-pot-safety-simulator/' },
        { name: 'Triaje de Emergencias y Contención en Cocina', url: '/es/tools/kitchen-hazard-emergency-triage/' }
      ]
    },
    {
      slug: 'eu-2026-2376-recycled-food-plastic-fda-spice-lead-safety-guide',
      title: 'Envases Plásticos Reciclados (Norma UE 2026/2376) y Alertas de Plomo en Canela Molida (FDA 2026: Wise Wife y Lior): Cómo Proteger su Despensa',
      category: 'food-safety',
      excerpt: 'Claves del Reglamento (UE) 2026/2376 sobre plásticos reciclados en contacto con alimentos y las alertas de finales de 2026 de la FDA por plomo en canela molida (Wise Wife 2,118 ppm, Lior lote GAP11304, Spice Class, La Frontera).',
      date: '2026-11-26',
      readTime: '16 min de lectura',
      author: 'IsItKitchenSafe',
      intro: 'Dos medidas regulatorias clave de finales de 2026 abordan vulnerabilidades paralelas en la despensa doméstica: la adopción el 28 de octubre de 2026 del Reglamento (UE) 2026/2376 que endurece la trazabilidad química de plásticos reciclados alimentarios, y los retiros ampliados de la FDA estadounidense por contaminación neurotóxica con plomo en marcas comerciales de canela molida. Comprender qué códigos UPC desechar y por qué nunca debe reutilizar plásticos reciclados finos para almacenar alimentos o especias cerca del calor reduce de raíz la exposición acumulada.',
      sections: [
        {
          title: '1. Reglamento (UE) 2026/2376: Control Estricto de Plásticos Reciclados Alimentarios',
          type: 'fact',
          content: 'Publicado en el Diario Oficial de la Unión Europea el 29 de octubre de 2026, el Reglamento (UE) 2026/2376 modifica el marco (UE) 2022/1616 sobre plásticos reciclados en contacto con alimentos. Refuerza la gestión del registro de la Unión, unifica las declaraciones documentales P y C en toda la cadena de suministro y exige pruebas verificadas de descontaminación antes de autorizar plásticos reciclados (como rPET) en envases alimentarios.',
          boxText: 'POR QUÉ IMPORTA EN CASA: Las resinas recicladas mal descontaminadas pueden arrastrar tintas, aceites industriales, metales estabilizantes y oligómeros degradados (NIAS) que migran rápidamente ante calor o acidez.'
        },
        {
          title: '2. Retiros FDA de Canela con Plomo (Finales de 2026): Wise Wife, Lior, Spice Class y La Frontera',
          type: 'warning',
          content: 'La FDA amplió sus alertas y retiros voluntarios ante hallazgos críticos de plomo en canela molida. Entre las alertas más recientes figuran Wise Wife Brand Ground Cinnamon de SLR Food Distribution Inc. en 14 estados (2,118 ppm de plomo, UPC 0688474302754, consumo preferente 4/25/2027) y Lior Cinnamon Ground Seasoning de Galil Importing Corp. (UPC 794711005484, lote GAP11304 tras análisis del Depto. de Salud de Maryland), junto a Spice Class y La Frontera en la lista de alerta FDA.',
          boxText: 'CERO NIVEL SEGURO DE PLOMO (CDC): Los niños absorben entre 4 y 5 veces más plomo ingerido que los adultos. Revise de inmediato su especiero y deseche frascos coincidentes con Wise Wife (UPC 0688474302754), Lior (lote GAP11304), Spice Class o La Frontera.'
        },
        {
          title: '3. Sinergia Calor + Acidez + Plástico Reutilizado: Cómo Se Multiplica la Exposición',
          type: 'warning',
          content: 'Guardar caldos calientes, adobos ácidos o especias en envases desechables de rPET (#1) junto al calor ascendente de la cocina rebasa la estabilidad térmica del polímero (>40°C / 104°F), acelerando la migración de catalizadores de antimonio y fragmentos químicos mientras los ácidos movilizan iones de metales pesados en el tracto digestivo.',
          boxText: 'REGLA DE ORO EN ALMACENAMIENTO: No reutilice botellas, tarrinas ni bandejas de plástico reciclado #1 para calentar comida, guardar sopas calientes ni almacenar especias sobre la campana o fogones.'
        },
        {
          title: '4. Mejoras Prácticas de Despensa: Vidrio Borosilicato 3.3 y Acero Inoxidable 304',
          type: 'tip',
          content: 'Traslade sus especias secas y preparaciones aromáticas a frascos herméticos de vidrio borosilicato 3.3 o acero inoxidable 304 en armarios oscuros alejados del vapor de la placa. Siempre que sea viable, compre canela en rama entera de origen trazable y rállela en casa en lugar de usar polvos a granel sin certificación de lote.',
          boxText: 'AUDITORÍA DE DESPENSA: Mantenga las especias en vidrio lejos del horno, elija especias enteras con trazabilidad clara y use envases de vidrio o polipropileno #5 virgen certificado cuando requiera refrigeración plástica.'
        },
        {
          title: '5. Verificación Rápida de Códigos de Resina (#1–#7) y Códigos UPC',
          type: 'success',
          content: 'Antes de cocinar recetas de invierno o repostería infantil con canela, verifique el código UPC contra alertas activas y revise el triángulo de resina de cada envase: reserve el #1 PET/rPET exclusivamente para bebidas frías de un solo uso y elija vidrio o acero para todo contacto cálido o prolongado.',
          boxText: 'HÁBITO EN 3 SEGUNDOS: Verifique el UPC de especias sospechosas antes de hornear y mantenga el contacto térmico o ácido estrictamente en vidrio borosilicato o acero inoxidable.'
        }
      ],
      conclusion: 'El Reglamento (UE) 2026/2376 y las alertas de finales de 2026 de la FDA por plomo en canela demuestran que ni la contaminación metálica ni las impurezas de plásticos mal reciclados se eliminan cocinando. Deseche lotes retirados (Wise Wife UPC 0688474302754, Lior GAP11304, Spice Class, La Frontera), utilice #1 rPET únicamente en frío y estandarice su almacenamiento cálido en vidrio borosilicato.',
      faqs: [
        {
          question: '¿Qué marcas de canela molida figuran en las alertas FDA de finales de 2026?',
          answer: 'Destacan Wise Wife Ground Cinnamon (SLR Food Distribution, 2,118 ppm plomo, UPC 0688474302754, Best Before 4/25/2027), Lior Cinnamon Ground Seasoning (Galil Importing Corp., UPC 794711005484, lote GAP11304) y las alertas sobre Spice Class y La Frontera.'
        },
        {
          question: '¿Qué regula exactamente el Reglamento (UE) 2026/2376?',
          answer: 'Publicado el 29 de octubre de 2026, modifica el Reglamento (UE) 2022/1616 endureciendo el registro de la Unión, las declaraciones P y C en la cadena de suministro y las pruebas de descontaminación para plásticos reciclados en contacto con alimentos.'
        },
        {
          question: '¿El horneado o hervor destruye el plomo de una especia contaminada?',
          answer: 'No. El plomo es un elemento químico metálico indestructible por calor doméstico; ninguna temperatura de cocción lo elimina. Todo envase incluido en alerta debe desecharse.'
        },
        {
          question: '¿Es seguro reutilizar tarrinas recicladas #1 (PET/rPET) para comida caliente o especias?',
          answer: 'No. El PET y rPET se ablandan por encima de 40°C, liberando oligómeros y trazas catalíticas si entran en contacto con grasas, calor o acidez; están diseñados solo para bebidas y alimentos fríos de un uso.'
        },
        {
          question: '¿Qué hacer si un niño consumió canela de un lote retirado por plomo?',
          answer: 'Suspenda su uso al instante, conserve foto del UPC/lote y consulte a su pediatra para valorar un análisis de plomo en sangre (BLL), ya que los CDC señalan que no existe ningún nivel seguro en sangre infantil.'
        }
      ],
      relatedTools: [
        { name: 'Verificador de Lixiviación de Plásticos y Comida Caliente', url: '/es/tools/kitchen-plastic-leaching-checker/' },
        { name: 'Escáner de Códigos y Retiros de Productos de Cocina', url: '/es/tools/product-recalls-scanner/' },
        { name: 'Buscador de Vida Útil y Seguridad de Especias y Despensa', url: '/es/tools/pantry-dry-goods-shelf-life-checker/' }
      ]
    }
  ],
  pt: [
    {
      slug: 'range-hood-cfm-make-up-air-back-burner-capture-safety',
      title: 'Micro-ondas Exaustores vs. Coifas com Duto: Regra HVI 100 CFM, Risco de Duto Sanfonado e Ar de Reposição (>400 CFM)',
      category: 'appliances',
      excerpt: 'Por que micro-ondas de 15" deixam escapar até 55% de NO2 e partículas PM2.5—plus cálculo HVI 100 CFM/10k BTU, aerodinâmica das bocas traseiras, fogo em dutos sanfonados e ar de reposição IRC.',
      date: '2026-11-26',
      readTime: '16 min de leitura',
      author: 'IsItKitchenSafe',
      intro: 'Ligar uma coifa barulhenta transmite falsa sensação de proteção, mas ruído acústico não garante extração real. Testes do Laboratório Nacional Lawrence Berkeley (LBNL) e normas ASHRAE mostram que micro-ondas com exaustor de pouca profundidade e depuradores sem duto capturam menos de metade dos gases nas bocas frontais, inundando a cozinha com dióxido de nitrogênio (NO2), benzeno e aerossóis PM2.5. Além disso, exaustores acima de 400 CFM em casas vedadas sem ar de reposição podem gerar vácuo capaz de puxar monóxido de carbono de aquecedores a gás de volta para dentro.',
      sections: [
        {
          title: '1. A Lacuna dos 15 Polegadas: Por Que Micro-ondas Exaustores Perdem Fumaça Frontal',
          type: 'warning',
          content: 'Fogões têm cerca de 60 cm (24") de profundidade, enquanto micro-ondas com exaustor projetam apenas 14,5" a 16" e não possuem câmara coletora funda. Como a pluma térmica sobe abrindo em cone de 10° a 15° (até 25° na selagem em fogo alto), os vapores das bocas frontais escapam direto pela borda para o teto.',
          boxText: 'GEOMETRIA DE CAPTURA: Testes do LBNL mostram que coifas profundas (22–24") capturam de 75% a 92% nas bocas traseiras, ao passo que modelos rasos frontais caem abaixo de 45% e depuradores de carvão removem 0% de NO2.'
        },
        {
          title: '2. Regra HVI de 100 CFM por 10.000 BTU e Equivalência para Indução',
          type: 'fact',
          content: 'A norma HVI recomenda ao menos 100 CFM reais entregues ao exterior para cada 10.000 BTU/h de potência a gás (e a ASHRAE 62.2 fixa 100 CFM como mínimo absoluto). Um fogão a gás de 45.000 BTU exige 450 CFM reais na saída. Em cooktops por indução, utilize 10 a 12 CFM por polegada de largura (300–360 CFM em 30").',
          boxText: 'CÁLCULO RÁPIDO: BTU Total do Gás ÷ 100 = CFM Mínimo Real. Considere sempre a vazão descontando perdas de duto, jamais apenas a ficha livre em bancada.'
        },
        {
          title: '3. Efeito Parede-Guia nas Bocas Traseiras e Regra dos 2 Minutos Antes',
          type: 'tip',
          content: 'A parede traseira funciona como defletor Coanda, impedindo turbulência atrás da panela e guiando gordura e NO2 direto para a coifa. Passar frituras da frente para trás eleva a captura de ~50% para 85%–95%. Ligar a coifa 1–2 minutos antes da chama estabiliza o fluxo ascendente no duto.',
          boxText: 'ROTINA PROTETORA: Frite carnes e ferva molhos ácidos nas bocas de trás, ligue a coifa 2 minutos antes de aquecer óleo e mantenha ligada 5–10 minutos após apagar.'
        },
        {
          title: '4. Dutos Sanfonados de Alumínio: -45% de Vazão e Incêndios Ocultos',
          type: 'warning',
          content: 'Instalações com tubo sanfonado flexível de 6" geram atrito turbulento severo que reduz a vazão real em 35% a 50%. Mais grave: a gordura atomizada condensa dentro de cada dobra do tubo sanfonado, transformando o forro em pavio combustível vulnerável a incêndio.',
          boxText: 'NORMA DE SEGURANÇA: Jamais use duto sanfonado fino ou plástico em exaustão de cozinha. Prefira duto rígido liso de aço galvanizado de 7" ou 8" vedado com fita metálica UL 181B.'
        },
        {
          title: '5. Ar de Reposição (Make-Up Air) Acima de 400 CFM e Retorno de CO (IRC M1503.6)',
          type: 'success',
          content: 'O código IRC M1503.6 exige ar de reposição dedicado para coifas acima de 400 CFM em imóveis bem vedados. Sem entrada equivalente, exaustores fortes criam pressão negativa capaz de sugar monóxido de carbono pela chaminé de aquecedores a gás ou lareiras. Entreabrir uma janela próxima resolve a depressão na hora.',
          boxText: 'ALERTA VITAL: Em imóveis com aquecedores a gás internos e coifa potente >400 CFM, mantenha alarmes de CO em todos os andares e entreabra uma janela durante o preparo.'
        }
      ],
      conclusion: 'Ar limpo na cozinha depende de três pilares: coifa profunda dutada ao exterior, duto metálico liso bem dimensionado e equilíbrio de ar de reposição somado ao uso prioritário das bocas traseiras. Onde dutos externos são inviáveis, usar cooktop de indução portátil zera imediatamente NO2 e benzeno da chama.',
      faqs: [
        {
          question: 'Como saber se minha coifa tem duto externo ou é depurador recirculante?',
          answer: 'Abra o armário acima da coifa ou micro-ondas: um duto metálico subindo até a parede ou telhado indica exaustão externa; se houver apenas grelha devolvendo ar morno na parte frontal superior, é recirculante.'
        },
        {
          question: 'Purificadores HEPA substituem a coifa com duto externo?',
          answer: 'Filtros HEPA ajudam com partículas PM2.5 residuais após cozinhar, mas retêm pouquíssimo NO2 e 0% de CO. Ventilação cruzada por janelas ou cozimento por indução protegem muito mais contra gases.'
        },
        {
          question: 'Qual a altura correta de instalação da coifa acima do fogão?',
          answer: 'Geralmente entre 24 e 30 polegadas (60–75 cm) sobre indução/elétrico e 28 a 30 polegadas acima de chama a gás, conforme etiqueta do fabricante. Alturas excessivas permitem o alargamento e escape da fumaça.'
        },
        {
          question: 'Coifas de ilha exigem mais vazão CFM que coifas de parede?',
          answer: 'Sim. Sem parede traseira e expostas a correntes laterais em 360 graus, coifas de ilha precisam de maior projeção e 25% a 35% mais vazão (120–150 CFM por 10.000 BTU).'
        },
        {
          question: 'Quando é obrigatório ter ar de reposição (Make-Up Air)?',
          answer: 'O padrão IRC M1503.6 define 400 CFM como limite crítico em casas vedadas, exigindo reposição automática ou passiva sincronizada para prevenir retorno de monóxido de carbono.'
        }
      ],
      relatedTools: [
        { name: 'Modelador de Eficiência de Coifas e Depuradores (VOC, NO2 e PM2.5)', url: '/pt/tools/range-hood-extraction-efficiency-modeler/' },
        { name: 'Calculadora de Benzeno e NO2 em Fogões a Gás', url: '/pt/tools/gas-stove-benzene-no2-calculator/' },
        { name: 'Modelador de Ressuspensão de PAH e PM2.5 em Air Fryer', url: '/pt/tools/air-fryer-pah-resuspension-modeler/' }
      ]
    },
    {
      slug: 'cuisinart-grill-charbroil-ambiano-2026-cpsc-recalls-guide',
      title: 'Recalls CPSC 2026 em Churrasqueiras e Panelas: Vidro Estilhaçado Cuisinart CGG-6331, Choque Char-Broil Bistro Pro e Panelas Ambiano ALDI',
      category: 'appliances',
      excerpt: 'Análise dos recalls oficiais CPSC 2025–2026: ~12.660 churrasqueiras Cuisinart Propel+ CGG-6331 (reembolso $500 por vidro do forno de pizza), Char-Broil Bistro Pro (códigos 2510–2512, choque elétrico) e ~46.660 panelas de pressão Ambiano ALDI.',
      date: '2026-11-26',
      readTime: '17 min de leitura',
      author: 'IsItKitchenSafe',
      intro: 'Três equipamentos populares entraram em listas de recall da CPSC até o final de 2026 com riscos graves: estilhaçamento súbito de janelas de vidro temperado em fornos de pizza acoplados, desconexão do fio terra em churrasqueiras elétricas e abertura de tampas ainda pressurizadas em panelas elétricas. Conferir a etiqueta técnica antes de religar itens sazonais evita acidentes graves.',
      sections: [
        {
          title: '1. Churrasqueira a Gás Cuisinart Propel+ 3 em 1 (Modelo CGG-6331 — Recall #26-605)',
          type: 'warning',
          content: 'Em julho de 2026, a Conair LLC e a CPSC recolheram cerca de 12.660 unidades nos EUA (e 83 no Canadá) da churrasqueira a gás 3 em 1 Cuisinart Propel+ modelo CGG-6331 (Recall #26-605). O visor de vidro temperado do forno de pizza pode estilhaçar durante o uso, causando cortes e risco de incêndio.',
          boxText: 'REEMBOLSO DE US$ 500: Interrompa o uso do modelo CGG-6331 imediatamente. Usando luvas e óculos de proteção conforme orientação oficial, remova/marque o vidro e envie as fotos ao portal da Conair para receber reembolso de US$ 500.'
        },
        {
          title: '2. Churrasqueiras Elétricas Char-Broil Bistro Pro (Recall Setembro 2026: Códigos 2510–2512)',
          type: 'warning',
          content: 'Em setembro de 2026, a Char-Broil recolheu unidades Bistro Pro elétricas (SKUs 25302145 a 25302163 nos EUA e 25302177 no Canadá) com códigos de data 2510, 2511 e 2512 (outubro–dezembro de 2025). O fio terra da resistência pode desconectar, energizando o gabinete metálico.',
          boxText: 'PERIGO DE CHOQUE ELÉTRICO: Desligue imediatamente da tomada unidades com carimbo 2510, 2511 ou 2512 e solicite o kit de reparo oficial antes de voltar a utilizar.'
        },
        {
          title: '3. Panelas de Pressão Elétricas Ambiano Vendidas no ALDI (46.660 Unidades — Recall #26-007)',
          type: 'warning',
          content: 'Cerca de 46.660 panelas de pressão elétricas Ambiano de 6 e 8 quartos (Tempo International, modelos 93550 / KY-318B, 96775 / KY-318A e 98527 / 6L-PC) integram o Recall CPSC #26-007 porque a tampa pode abrir antes da despressurização, ejetando caldo escaldante.',
          boxText: 'PARE O USO IMEDIATO: Desgastes na trava permitem abertura prematura mesmo quando parece normal. Verifique os códigos 93550, 96775 e 98527 na etiqueta inferior e acesse o Recall #26-007.'
        },
        {
          title: '4. Por Que Vidros Estouram, Fios Soltam e Travas Falham sob Calor Intenso',
          type: 'fact',
          content: 'Vidro temperado sob chamas de 400°C sofre gradientes térmicos extremos e ruptura súbita a partir de riscos microscópicos; conectores simples dilatam e oxidam entre ciclos de 20°C–300°C; e resíduos secos de amido travam pinos de alívio de pressão.',
          boxText: 'CHECKUP PREVENTIVO: Não risque visores térmicos com palha de aço, ligue grelhas elétricas sempre em tomadas com aterramento e DR/GFCI e aguarde o pino de vapor abaixar antes de abrir qualquer panela de pressão.'
        },
        {
          title: '5. Como Ler Etiquetas de Série e Garantir Seu Reembolso Integral',
          type: 'tip',
          content: 'Com o aparelho frio e desligado, fotografe modelo, código de data e número de série em luz clara, consultando as orientações oficiais da CPSC antes de cortar fios ou descartar peças.',
          boxText: 'GUIA DE RESPOSTA: Confirme Recall #26-605 (Cuisinart CGG-6331), #26-007 (Ambiano ALDI) e o portal Char-Broil Bistro Pro antes do descarte.'
        }
      ],
      conclusion: 'Checar rapidamente a etiqueta do fabricante em equipamentos Cuisinart CGG-6331, Char-Broil Bistro Pro e panelas Ambiano evita lacerações por vidro estilhaçado, choques de 120V e queimaduras graves por vapor.',
      faqs: [
        {
          question: 'Qual modelo Cuisinart faz parte do Recall #26-605?',
          answer: 'A churrasqueira a gás 4 queimadores 3 em 1 Cuisinart Propel+ modelo CGG-6331 (cerca de 12.660 unidades nos EUA e 83 no Canadá).'
        },
        {
          question: 'Como conferir os códigos das grelhas Char-Broil Bistro Pro afetadas?',
          answer: 'Verifique a etiqueta inferior após desligar da tomada: unidades nos SKUs 25302145–25302163 (EUA) e 25302177 (Canadá) com códigos de data 2510, 2511 ou 2512 estão no recall de setembro de 2026.'
        },
        {
          question: 'Quais modelos Ambiano ALDI estão no Recall #26-007?',
          answer: 'Os modelos 93550 (KY-318B), 96775 (KY-318A) e 98527 (6L-PC) em versões de 6 e 8 quartos importados pela Tempo International.'
        },
        {
          question: 'Devo cortar o cabo ou quebrar o vidro antes de enviar fotos?',
          answer: 'Siga exatamente o passo a passo da página oficial de cada recall: a Cuisinart CGG-6331 exige remoção/marcação segura do vidro segundo guia oficial para o reembolso de US$ 500.'
        },
        {
          question: 'Por que o vidro do forno de pizza estoura depois de meses funcionando bem?',
          answer: 'Tensões internas do vidro temperado reagem a micro-riscos de limpeza ou choques térmicos súbitos (como gotas frias ou picos de chama), causando quebra súbita.'
        }
      ],
      relatedTools: [
        { name: 'Scanner de Recalls e Códigos de Barras de Cozinha', url: '/pt/tools/product-recalls-scanner/' },
        { name: 'Simulador de Segurança em Panelas de Pressão e Instant Pot', url: '/pt/tools/pressure-cooker-instant-pot-safety-simulator/' },
        { name: 'Triagem de Emergências e Contenção na Cozinha', url: '/pt/tools/kitchen-hazard-emergency-triage/' }
      ]
    },
    {
      slug: 'eu-2026-2376-recycled-food-plastic-fda-spice-lead-safety-guide',
      title: 'Plásticos Reciclados Alimentícios (Regra UE 2026/2376) e Alertas de Chumbo em Canela Moída (FDA 2026: Wise Wife e Lior)',
      category: 'food-safety',
      excerpt: 'Entenda o Regulamento (UE) 2026/2376 para plásticos reciclados alimentares e os recalls de final de 2026 da FDA por chumbo em canela em pó (Wise Wife 2,118 ppm, Lior lote GAP11304, Spice Class, La Frontera).',
      date: '2026-11-26',
      readTime: '16 min de leitura',
      author: 'IsItKitchenSafe',
      intro: 'Duas frentes regulatórias do final de 2026 iluminam riscos invisíveis na despensa: o Regulamento (UE) 2026/2376 de outubro de 2026, que reforça o controle de descontaminação em plásticos reciclados para alimentos, e os recalls ampliados da FDA americana por chumbo neurotóxico em canela em pó importada. Saber identificar códigos de lote contaminados e manter temperos e comidas quentes fora de plásticos reciclados descartáveis reduz a carga química diária.',
      sections: [
        {
          title: '1. Regulamento (UE) 2026/2376: Controle em Plásticos Reciclados Alimentícios',
          type: 'fact',
          content: 'Publicado em 29 de outubro de 2026, o Regulamento (UE) 2026/2376 altera a norma (UE) 2022/1616, reforçando o registro da União, as declarações de conformidade P e C na cadeia logística e testes de descontaminação aduaneira para plásticos reciclados (como rPET).',
          boxText: 'POR QUE ISSO IMPORTA: Plásticos reciclados sem descontaminação validada podem reter resíduos de rótulos, óleos e oligômeros degradados (NIAS) que migram rapidamente com calor e acidez.'
        },
        {
          title: '2. Recalls FDA de Chumbo em Canela (Final de 2026): Wise Wife, Lior, Spice Class e La Frontera',
          type: 'warning',
          content: 'No final de 2026, a FDA ampliou recalls voluntários de canela em pó com chumbo elevado, incluindo Wise Wife Brand Ground Cinnamon (SLR Food Distribution, 2,118 ppm de chumbo, 14 estados, UPC 0688474302754, validade 4/25/2027) e Lior Cinnamon Ground Seasoning (Galil Importing Corp., UPC 794711005484, lote GAP11304), além de Spice Class e La Frontera nos alertas oficiais.',
          boxText: 'ZERO NÍVEL SEGURO DE CHUMBO (CDC): Crianças absorvem 4 a 5 vezes mais chumbo que adultos. Descarte imediatamente frascos compatíveis com Wise Wife (UPC 0688474302754), Lior (GAP11304), Spice Class ou La Frontera.'
        },
        {
          title: '3. Por Que Calor, Acidez e Potes rPET Amplificam a Migração Química',
          type: 'warning',
          content: 'Reaproveitar potes finos de rPET (#1) com molhos ácidos, sopas quentes ou guardar temperos acima do calor do fogão acelera o amolecimento acima de 40°C e libera catalisadores residuais e oligômeros, enquanto receitas ácidas mobilizam chumbo de especiarias contaminadas.',
          boxText: 'REGRA DE DESPENSA: Nunca aqueça, leve à lava-louças nem guarde comidas quentes ou temperos em potes descartáveis #1 rPET.'
        },
        {
          title: '4. Troca Inteligente: Vidro Borossilicato 3.3 e Aço Inoxidável 304',
          type: 'tip',
          content: 'Transfira especiarias e alimentos secos para potes de vidro borossilicato 3.3 com vedação hermética ou aço inox 304 em armários longe do vapor do fogão, priorizando canela em casca inteira sempre que possível.',
          boxText: 'CHECKLIST: Vidro longe do vapor do fogão, preferência a especiarias inteiras rastreáveis e #5 PP virgem apenas para itens frios quando plástico for necessário.'
        },
        {
          title: '5. Inspeção de Resinas (#1–#7) e Códigos UPC em 3 Segundos',
          type: 'success',
          content: 'Confira os códigos de barras (UPC) contra recalls ativos antes de preparar receitas infantis ou doces e reserve vidros inertes ou inox para todo contato térmico.',
          boxText: 'HÁBITO PROTETOR: Confira o UPC dos temperos suspeitos e padronize aquecimento e armazenagem em vidro borossilicato ou aço inoxidável.'
        }
      ],
      conclusion: 'O Regulamento (UE) 2026/2376 e os recalls FDA de chumbo em canela mostram que cozinhar não elimina metais pesados nem aditivos de reciclagem imprópria. Descarte lotes afetados (Wise Wife 0688474302754, Lior GAP11304, Spice Class, La Frontera) e use vidro borossilicato na rotina.',
      faqs: [
        {
          question: 'Quais marcas de canela tiveram alerta ou recall da FDA no fim de 2026?',
          answer: 'Incluem Wise Wife Ground Cinnamon (2,118 ppm chumbo, UPC 0688474302754, Best Before 4/25/2027), Lior Cinnamon Ground Seasoning (UPC 794711005484, lote GAP11304), além de Spice Class e La Frontera.'
        },
        {
          question: 'O que mudou no Regulamento (UE) 2026/2376?',
          answer: 'Publicado em 29 de outubro de 2026, atualiza o Regulamento (UE) 2022/1616 exigindo registro rigoroso, declarações P e C e testes de descontaminação aduaneira para plásticos reciclados alimentares.'
        },
        {
          question: 'Ferver ou assar elimina o chumbo da canela?',
          answer: 'Não. O chumbo é um metal que não evapora nem se degrada com calor doméstico; potes afetados devem ser descartados.'
        },
        {
          question: 'Posso reutilizar potes #1 PET/rPET para guardar sobras mornas?',
          answer: 'Não. O plástico #1 é formulado para itens frios descartáveis; calor acima de 40°C deforma o polímero e acelera lixiviação química.'
        },
        {
          question: 'O que fazer se uma criança consumiu canela recolhida por chumbo?',
          answer: 'Suspenda imediatamente o consumo, guarde foto do código UPC/lote e consulte o pediatra para avaliar exame de plumbemia (chumbo no sangue).'
        }
      ],
      relatedTools: [
        { name: 'Verificador de Lixiviación/Migração de Plásticos na Cozinha', url: '/pt/tools/kitchen-plastic-leaching-checker/' },
        { name: 'Scanner de Recalls e Códigos de Barras de Cozinha', url: '/pt/tools/product-recalls-scanner/' },
        { name: 'Buscador de Validade e Segurança de Especiarias na Despensa', url: '/pt/tools/pantry-dry-goods-shelf-life-checker/' }
      ]
    }
  ],
  'zh-cn': [
    {
      slug: 'range-hood-cfm-make-up-air-back-burner-capture-safety',
      title: '微波炉一体烟机 vs 外排抽油烟机：HVI 每万 BTU 100 CFM 算法、波纹软管火灾风险与厨房负压补风指南',
      category: 'appliances',
      excerpt: '为什么进深仅 15 英寸的一体式吸烟罩会让高达 55% 的二氧化氮 (NO2) 与油烟颗粒逃逸？深度解读 HVI 100 CFM/10k BTU 选型公式、靠墙后炉头附壁气流物理、铝箔伸缩管积油爆燃与 IRC >400 CFM 补风规范。',
      date: '2026-11-26',
      readTime: '16 分钟阅读',
      author: 'IsItKitchenSafe',
      intro: '抽油烟机噪音很大并不代表吸力合格。劳伦斯伯克利国家实验室 (LBNL) 实测与 ASHRAE 通风工程数据表明，进深浅薄的微波炉吸烟罩和无外排风道的内循环活性炭油烟机，在前炉头爆炒时捕集率经常不足一半，令高浓度二氧化氮 (NO2)、未燃尽苯和 PM2.5 油烟颗粒直接扑向烹饪者面部。与此同时，高气密性现代住宅中安装 >400 CFM 强吸力外排风道却不配置补风，会导致室内严重负压，使燃气热水器一氧化碳废气倒灌。',
      sections: [
        {
          title: '1. 15 英寸进深缺口：微波炉一体机为何拦不住前炉头热羽流',
          type: 'warning',
          content: '标准家用灶台前后进深通常达 24 英寸（约 60 厘米），而炉上微波炉一体机前伸进深普遍只有 14.5–16 英寸，且底部平坦没有深集烟腔。高温锅气热羽流上升时以 10° 至 15° 半锥角扩散（爆炒煎炸达 25°），导致前锅超过半数油烟完全绕开进风口，撞击平滑顶板后向四周天花板逃逸。',
          boxText: '核心捕集几何学：LBNL 实验显示 22–24 英寸深腔外排油烟机在后炉头的污染物捕集率达 75%–92%；浅进深一体机在前炉头暴跌至 45% 以下，而内循环活性炭模式对二氧化氮 (NO2) 的消除率更是彻底为 0%。'
        },
        {
          title: '2. HVI 每 10,000 BTU 配备 100 CFM 选型原则与电磁灶基准',
          type: 'fact',
          content: '美国家庭通风协会 (HVI) 规定：燃气灶每 10,000 BTU/h 热负荷至少需配备 100 CFM 有效室外排风量，ASHRAE 62.2 则将 100 CFM 定为住宅厨房间歇排风底线。一台 45,000 BTU 燃气灶实际有效排风量需达到 450 CFM。针对零燃烧排气的电磁灶或电陶炉，则按灶台长度计算：每英寸宽度配备 10 至 12 CFM（30 英寸灶台约需 300–360 CFM）。',
          boxText: '风量核算公式：燃气总热负荷 BTU ÷ 100 = 最低实效交付 CFM（请按带管路阻力的有效风量核算，切勿只看厂家无管空载标称风量）。'
        },
        {
          title: '3. 靠墙后炉头的附壁导向效应与“提前 2 分钟开机”法则',
          type: 'tip',
          content: '后挡水墙构成了天然的气动附壁屏障（康达效应），阻挡后方冷空气卷吸，平稳托举油烟和 NO2 直入集烟腔。将高温煎牛排、爆炒从前炉头移至靠墙后炉头，瞬时捕集率可直接从 ~50% 跃升至 85%–95%。开火前提前 1–2 分钟启动油烟机，能先在烟道内建立向上的负压气柱，防止刚下锅瞬间的浓烟倒喷。',
          boxText: '日常黄金习惯：重油烟爆炒、煎炸与长时间酸辣炖煮尽量放在靠墙后炉头，冷锅开火前 2 分钟预启动油烟机，关火后再延后运行 5–10 分钟清空余烟。'
        },
        {
          title: '4. 铝箔波纹伸缩软管陷阱：风量腰斩 45% 与隐蔽烟道火灾',
          type: 'warning',
          content: '许多急功近利的装修会用 6 英寸铝箔波纹手风琴软管加上急弯 90° 接头连接大风量烟机。软管内壁密布的高频褶皱会诱发剧烈涡流，使静压阻力暴增、风机有效风量锐减 35%–50%。更危险的是，高温气溶胶油脂会逐层凝结堆积在褶皱沟壑里，把吊顶藏烟管变成遇火即燃的暗藏导火索。',
          boxText: '防火与水暖准则：严禁将塑料软管或薄波纹铝箔管用于大排量烟机。务必安装 7 英寸或 8 英寸光滑镀锌刚性金属风管并用 UL 181B 铝箔胶带密闭接缝，严防螺钉伸入管腔截流挂油。'
        },
        {
          title: '5. 超过 400 CFM 的厨房补风与负压一氧化碳倒灌警戒 (IRC M1503.6)',
          type: 'success',
          content: '抽油烟机抽向室外的每一立方空气，都必须有等量空气补充进入房屋。按照国际住宅建筑规范 (IRC M1503.6)，气密住宅内风量超过 400 CFM 的烟机需配置联动厨房补风系统 (Make-Up Air)。若缺乏补风，600–1200 CFM 强排会导致室内出现 -5 至 -15 Pa 负压，极易将直排/自然排烟燃气热水器或壁炉内的一氧化碳有毒烟气反向抽回室内。若暂无自动补风阀，烹饪时微开邻近窗户 2–5 厘米即可立刻泄除负压。',
          boxText: '生命安全提示：室内若有开放燃烧式燃气设备同时使用 >400 CFM 大油烟机，请务必在各楼层安装一氧化碳报警器，并在强档抽排时微开窗扇补风。'
        }
      ],
      conclusion: '真正守卫厨房呼吸健康的不是响亮的风机噪音，而是三项机械工程要素：覆盖面深且真正直排室外的深腔罩体、顺滑宽口径的刚性镀锌风管、以及平衡的室内补风配合靠墙后炉头操作习惯。对于无外排风道的租房公寓，将大火猛炒转移至便携单头电磁炉可将 NO2 与苯排放立刻清零。',
      faqs: [
        {
          question: '怎样判断家里油烟机是直排室外还是内循环？',
          answer: '打开油烟机正上方的吊柜门观察。若看见 6–8 英寸光滑金属排烟管通往外墙或公共烟道，则属直排；若柜内无烟道、开机时油烟机顶部前端格栅直接往房间里吹出热风，则是内循环。'
        },
        {
          question: '开着 HEPA 空气净化器能代替外排油烟机吗？',
          answer: 'HEPA 可帮助过滤烹饪后残余的 PM2.5 油滴，但家用净化器对二氧化氮 (NO2) 去除极微且对一氧化碳 (CO) 完全无效。打开对流窗或改用电磁灶比净化器有效得多。'
        },
        {
          question: '吸油烟机距离灶台安装多高最科学？',
          answer: '壁挂顶吸式一般建议距电陶/电磁灶台面 24–30 英寸（60–75 厘米），距燃气灶具 28–30 英寸（严格遵照机器铭牌要求）。安装过高会使上升热羽流散开并大幅削弱捕集率。'
        },
        {
          question: '岛台式吊顶油烟机需要比靠墙式更大的风量 (CFM) 吗？',
          answer: '需要。岛台没有靠墙附壁导流板，四周 360 度全暴露于空调出风与室内走动气流，因此罩体至少应在灶具四边各多出 3 英寸，且所需风量需提高 25%–35%（每 10,000 BTU 约 120–150 CFM）。'
        },
        {
          question: '多大排风量的油烟机触发建筑规范对自动补风 (Make-Up Air) 的要求？',
          answer: '美国 IRC M1503.6 规范以 400 CFM 作为基准门槛，超过该额定排风量时在新建气密住宅通常要求配置风阀联动的室外机械补风装置，防止热水器或壁炉一氧化碳倒灌。'
        }
      ],
      relatedTools: [
        { name: '抽油烟机 VOC、NO2 与 PM2.5 抽吸效率模拟器', url: '/zh-cn/tools/range-hood-extraction-efficiency-modeler/' },
        { name: '燃气灶苯释放与室内二氧化氮计算器', url: '/zh-cn/tools/gas-stove-benzene-no2-calculator/' },
        { name: '空气炸锅多环芳烃 (PAH) 热重悬浮与 PM2.5 模拟', url: '/zh-cn/tools/air-fryer-pah-resuspension-modeler/' }
      ]
    },
    {
      slug: 'cuisinart-grill-charbroil-ambiano-2026-cpsc-recalls-guide',
      title: '2026 年户外烤炉与高压锅 CPSC 召回预警：Cuisinart 披萨烤炉玻璃爆裂、Char-Broil Bistro Pro 触电与 ALDI Ambiano 烫伤召回核查',
      category: 'appliances',
      excerpt: '详查截至 2026 年秋的 CPSC 重大厨电召回：~12,660 台 Cuisinart Propel+ CGG-6331 燃气烤炉（玻璃爆裂赔付 $500）、Char-Broil Bistro Pro 电烤炉（日期码 2510–2512 断地线触电）与 ~46,660 台 ALDI Ambiano 电高压锅。',
      date: '2026-11-26',
      readTime: '17 分钟阅读',
      author: 'IsItKitchenSafe',
      intro: '截至 2026 年下半年，三款常见的家用烹饪及户外烧烤电器相继登上美国消费品安全委员会 (CPSC) 严重故障召回名单，分别涉及内置披萨烤箱钢化玻璃爆裂割伤、户外电加热盘接地导线断裂触电以及压力锅带压误开盖喷溅烫伤。许多家庭会将烤炉或高压锅换季封存数月，因此使用前务必先对照铭牌型号与生产批号。',
      sections: [
        {
          title: '1. Cuisinart Propel+ 四头三合一燃气烤炉（型号 CGG-6331 — 2026 年 7 月召回 #26-605）',
          type: 'warning',
          content: '2026 年 7 月，Conair LLC 与 CPSC 宣布召回美国约 12,660 台（加拿大 83 台）Cuisinart Propel+ 四头三合一燃气烤炉（型号 CGG-6331，召回编号 #26-605）。其内置披萨炉盖板上的钢化玻璃视窗在高温使用中可能毫无征兆地突然爆裂，飞溅锋利碎玻璃并引发烫伤及起火隐患。',
          boxText: '500 美元退款通道：请立即停用 CGG-6331。务必按官方指引佩戴防护手套和护目镜小心拆除或标记视窗玻璃并拍照验证，提交 Conair 门户领取全额 $500 退款。'
        },
        {
          title: '2. Char-Broil Bistro Pro 电烤炉（2026 年 9 月触电召回：日期码 2510–2512）',
          type: 'warning',
          content: '2026 年 9 月，Char-Broil 联合 CPSC 自愿召回 2025 年 10 月至 12 月生产（日期代码 2510、2511、2512，涵盖美国 SKU 25302145–25302163 及加拿大 25302177）的 Bistro Pro 电烤炉与电煎盘。加热元件的接地线可能发生脱落，失去漏电保护并使金属机壳带电触发 120V 电击风险。',
          boxText: '触电高危处置：立即拔掉插头并检查铭牌上的 4 位日期戳；凡印有 2510、2511 或 2512 的机型均不得再次通电，直至完成官方免费维修或更换套件安装。'
        },
        {
          title: '3. ALDI 售 Ambiano 电高压锅（46,660 台 — CPSC 召回 #26-007）',
          type: 'warning',
          content: '约 46,660 台由 Tempo International (USA) Inc. 进口并于 ALDI 超市销售的 Ambiano 6 夸脱与 8 夸脱电高压锅列入 CPSC 召回 #26-007（型号 93550 / KY-318B、96775 / KY-318A 及 98527 / 6L-PC）。部分产品可在锅内仍存在高压蒸汽时强行拧开锅盖，导致滚烫汤菜高压喷涌。',
          boxText: '切勿凭手感判断：即使此前使用看似顺畅，随着硅胶圈老化和锁销公差变化仍存在带压解锁风险。请立即停用 93550、96775 与 98527 型号并申请 #26-007 官方补偿。'
        },
        {
          title: '4. 钢化玻璃热爆、地线脱焊与浮子卡滞背后的工程失效机理',
          type: 'fact',
          content: '三起召回精准暴露了高热厨电的三大共性疲劳缺陷：400°C 不对称火焰冲击导致钠钙钢化玻璃表面划痕或硫化镍杂质诱发自爆；20°C–300°C 热胀冷缩使非锁固压接端子反复氧化脱落；食物淀粉泡沫凝固卡死机械浮子阀。',
          boxText: '日常自查铁律：禁止用钢丝球刷洗炉门玻璃、户外电烤炉必须接在有接地检测的 GFCI 防漏电插座上，且电压力锅必须确认浮子彻底落回底部后方可开盖。'
        },
        {
          title: '5. 规范核对底牌铭牌与申领现金赔付的完整步骤',
          type: 'tip',
          content: '确保电器完全冷却断电后，在明亮光线下清晰拍摄机身背面或底部的型号标签、日期批号，并严格遵循 CPSC 官方渠道要求提交对应核验照片后再作废旧处理。',
          boxText: '召回核对清单：CPSC.gov #26-605（Cuisinart CGG-6331）、#26-007（Ambiano ALDI）以及 Char-Broil Bistro Pro 官方召回申报入口。'
        }
      ],
      conclusion: '绝大部分家庭厨房意外源自封存后未跟踪厂商召回通知。花三分钟核查家里 Cuisinart CGG-6331 烤炉、Char-Broil 电烤盘及 ALDI Ambiano 高压锅底牌信息，即可避开玻璃飞溅、120V 漏电电击及滚烫喷锅伤害。',
      faqs: [
        {
          question: 'Cuisinart CGG-6331 召回涉及多少台设备，赔付方式是什么？',
          answer: 'CPSC 召回 #26-605 涵盖美国约 12,660 台和加拿大 83 台 Cuisinart Propel+ 四头三合一燃气烤炉（型号 CGG-6331），按官方流程安全处理玻璃并传回验证照片即可申请 $500 退款。'
        },
        {
          question: '如何核对 Char-Broil Bistro Pro 电烤炉是否在召回批次内？',
          answer: '断电后查看机底铭牌日期码与 SKU（美国 25302145–25302163，加拿大 25302177），凡标注日期代码 2510、2511 或 2512 的批次均属 2026 年 9 月触电召回对象。'
        },
        {
          question: 'ALDI 销售的哪些 Ambiano 高压锅属于召回 #26-007？',
          answer: '召回 #26-007 涉及 Tempo International 进口的约 46,660 台 6QT/8QT 电高压锅，具体型号为 93550 (KY-318B)、96775 (KY-318A) 和 98527 (6L-PC)。'
        },
        {
          question: '在提交退款申请前需要自行剪断电源线或拆除玻璃吗？',
          answer: '切忌擅自销毁设备。务必先登录对应召回官方页面仔细阅读步骤——Cuisinart CGG-6331 对拆除/标记玻璃及拍照构图有专章说明，照做方能获批 $500 退款。'
        },
        {
          question: '为什么烤炉上的钢化玻璃在正常使用数月后会突然碎裂？',
          answer: '钢化玻璃内部封存高应力；金属锅铲轻微划痕、雨水冷热骤冷冲击或内部微量硫化镍晶型转变都会在加热临界点触发连锁整片碎裂。'
        }
      ],
      relatedTools: [
        { name: '厨房产品条形码与召回风险即时扫描器', url: '/zh-cn/tools/product-recalls-scanner/' },
        { name: '高压锅与电压力锅安全水位及泄压模拟器', url: '/zh-cn/tools/pressure-cooker-instant-pot-safety-simulator/' },
        { name: '厨房突发隐患应急分级与处置指南', url: '/zh-cn/tools/kitchen-hazard-emergency-triage/' }
      ]
    },
    {
      slug: 'eu-2026-2376-recycled-food-plastic-fda-spice-lead-safety-guide',
      title: '再生食品接触塑料新规 (EU 2026/2376) 与美国 FDA 肉桂粉含铅召回 (Wise Wife / Lior)：厨房安全储存与防铅排查指南',
      category: 'food-safety',
      excerpt: '深度解析欧盟 2026 年 10 月末颁布的 (EU) 2026/2376 再生食品塑料监管新规，以及美国 FDA 2026 年底重点查处的 Wise Wife (含铅 2.118 ppm)、Lior 批次 GAP11304 等重金属肉桂粉召回清单与耐热材质升级建议。',
      date: '2026-11-26',
      readTime: '16 分钟阅读',
      author: 'IsItKitchenSafe',
      intro: '2026 年秋季末，欧美两大食安监管机构从包装源头与调味品终端接连发出重要预警：欧盟正式发布第 (EU) 2026/2376 号条例加码再生塑料 (rPET 等) 食品接触去污与合规审查；美国 FDA 则持续扩增肉桂粉铅污染公开预警及主动召回清单。两者交汇之处正是普通家庭的厨房储物柜——高温、酸性食材与劣质循环容器共同构成了隐藏的化学重金属暴露路径。',
      sections: [
        {
          title: '1. 欧盟 (EU) 2026/2376 条例：全面收紧再生食品接触塑料安全关卡',
          type: 'fact',
          content: '2026 年 10 月 29 日刊登于《欧盟官方公报》的委员会条例 (EU) 2026/2376 正式修订 (EU) 2022/1616 再生塑料食品接触法规。新规强化了欧盟统一登记册管理、供应链声明文件（Declarations P 与 C）追溯，并严格要求再生塑料制品入关和流通前必须具备完备的去污验证与测试报告。',
          boxText: '家居意义何在：未经严格认证脱污的消费后再生塑料，极易夹带原装工业油剂、残留标签胶、重金属助剂及断裂低聚物 (NIAS)，在接触热汤和酸性食材时加速析出。'
        },
        {
          title: '2. 美国 FDA 2026 下半年肉桂粉铅污染召回：Wise Wife (2.118 ppm)、Lior、Spice Class 与 La Frontera',
          type: 'warning',
          content: '2026 年下半年 FDA 针对进口及分装研磨肉桂粉再度发出多项铅污染预警与召回。SLR Food Distribution 召回覆盖 14 个州的 Wise Wife 品牌研磨肉桂（测得铅含量高达 2.118 ppm，UPC 0688474302754，赏味期 4/25/2027）；Galil Importing 召回经马里兰州卫生部抽检异常的 Lior Cinnamon（UPC 794711005484，批号 GAP11304）；Spice Class 及 La Frontera 同样位列预警名单。',
          boxText: 'CDC 儿童血铅零安全阈值：儿童肠道对铅的吸收率高达成人的 4–5 倍。请立刻核查调料架上的 Wise Wife (UPC 0688474302754)、Lior (GAP11304)、Spice Class 及 La Frontera 肉桂粉，匹配即直接丢弃。'
        },
        {
          title: '3. 高温与酸性烹饪如何令含铅香料与 #1 再生塑料双重放大危害',
          type: 'warning',
          content: '将热汤、热苹果酱或酸性腌料盛放进透明一次性的 #1 rPET 外卖盒中，或将塑料罐香料长期置于灶台上方受热，当环境超过 40°C 时聚对苯二甲酸乙二醇酯会开始软化，释放催化剂残留锑元素与环状低聚物，而酸性热食又会让涉事香料中的二价铅离子在消化道中更高效地溶出吸收。',
          boxText: '严守温度禁令：无论盒底是否标注“不含 BPA”，切勿将 #1 PET/rPET 冷饮杯或轻薄回收托盘用于微波加热、洗碗机烫洗或盛装热食与调料长存。'
        },
        {
          title: '4. 务实升级指南：高硼硅 3.3 玻璃与食品级 304 不锈钢储存',
          type: 'tip',
          content: '将日常香料、苹果派肉桂与热食剩菜全部更换为密封高硼硅 3.3 玻璃瓶罐或 304 不锈钢调味盒，收纳入远离灶台蒸汽与热气流的阴凉柜内；选购肉桂时尽可能选择来源可溯源的整条原枝肉桂自行研磨，降低散装粉末掺杂风险。',
          boxText: '厨房焕新核对清单：调料远离炉灶热浪、优选整枝原味香料并用玻璃密封存储；冷餐冷冻必须用塑料时仅挑选厚壁全新 #5 聚丙烯 (PP)。'
        },
        {
          title: '5. 3 秒排查塑胶底座代码 (#1–#7) 与调味瓶 UPC 条码',
          type: 'success',
          content: '在烘焙或为婴幼儿制作燕麦果泥前，养成迅速扫描调味瓶 UPC 召回状态和塑料器皿底部回收三角形的习惯，将一切高温或长期酸性储藏全面转由纯玻璃或不锈钢容器承载。',
          boxText: '快速动作：第一时间检查家中肉桂粉 UPC 并封存玻璃罐替代再生薄壁塑料容器。'
        }
      ],
      conclusion: '欧盟 (EU) 2026/2376 条例与 2026 年底 FDA 肉桂铅超标召回共同指向一个事实：上游回收瑕疵与原料重金属污染无法靠居家加热烹煮“杀灭消除”。及时丢弃涉事批次肉桂粉 (Wise Wife 0688474302754、Lior GAP11304 等)，严格限定 #1 再生塑料仅作冷饮短时使用，并以高硼硅玻璃与 304 不锈钢建立防线，才是最可靠的居家食安护盾。',
      faqs: [
        {
          question: '2026 年下半年有哪些肉桂粉品牌因含铅超标被 FDA 点名或召回？',
          answer: '包括 Wise Wife Ground Cinnamon（2.118 ppm 铅，UPC 0688474302754，Best Before 4/25/2027）、Lior Cinnamon Ground Seasoning（UPC 794711005484，批号 GAP11304）以及列入 FDA 公共健康警示表的 Spice Class 与 La Frontera。'
        },
        {
          question: '欧盟委员会 (EU) 2026/2376 号新规修订了什么核心内容？',
          answer: '2026 年 10 月 29 日刊发的 (EU) 2026/2376 修订了 (EU) 2022/1616，进一步严格欧盟再生食品接触塑料登记、供应链符合性声明 (Declarations P 与 C) 以及进口清关时的去污测试文件。'
        },
        {
          question: '长时间熬煮或高温烘烤能把肉桂粉里的铅消除掉吗？',
          answer: '绝对不能。铅属于不可破坏的金属化学元素，家庭任何煎煮烘烤温度都无法破坏或挥发铅金属；一旦核对涉案产品，唯有彻底丢弃。'
        },
        {
          question: '印有环保标志的 #1 再生 rPET 外卖盒子能装热汤或做调料罐吗？',
          answer: '不能。#1 PET/rPET 耐热上限极低，超过 40°C 即开始变形并加剧锑催化剂与低聚物迁移，且表面划痕极易藏污纳垢，仅限一次性冷装使用。'
        },
        {
          question: '如果家里幼童已经误食过问题批次的含铅肉桂怎么办？',
          answer: '请立即停用并保存外包装 UPC 条码信息，随后联系儿科医生咨询进行血铅水平 (BLL) 筛查。美国 CDC 明确指出儿童不存在安全的血铅暴露门槛，早排查并切断源头最为重要。'
        }
      ],
      relatedTools: [
        { name: '厨房塑料热食化学迁移与安全容器核查器', url: '/zh-cn/tools/kitchen-plastic-leaching-checker/' },
        { name: '厨房产品条形码与召回风险即时扫描器', url: '/zh-cn/tools/product-recalls-scanner/' },
        { name: '干货、香料与常备食材保质期及安全排查工具', url: '/zh-cn/tools/pantry-dry-goods-shelf-life-checker/' }
      ]
    }
  ],
  ja: [
    {
      slug: 'range-hood-cfm-make-up-air-back-burner-capture-safety',
      title: '浅型フード・循環式 vs ダクト直排レンジフード：HVI 100 CFM 算定式、蛇腹ダクト火災危険と負圧バックドラフト対策 (>400 CFM)',
      category: 'appliances',
      excerpt: '奥行の浅い電子レンジ一体型や浅型フードが調理ガス (NO2) や PM2.5 を最大55%漏洩する理由。HVI 100 CFM/10k BTU 換算式、奥コンロの壁面コアンダ気流、アルミ蛇腹ダクトの油溜まり火災と IRC 給気規定を徹底解説。',
      date: '2026-11-26',
      readTime: '16分で読めます',
      author: 'IsItKitchenSafe',
      intro: 'レンジフードのファンの音が大きくても、室内の有害物質が屋外に排出されているとは限りません。ローレンス・バークレー国立研究所 (LBNL) や ASHRAE の流体試験によると、奥行きの浅いレンジフードやダクトレス循環式活性炭フードでは手前コンロで発生する煙の半分以上を取り逃がし、二酸化窒素 (NO2)・発がん性ベンゼン・調理油煙 PM2.5 が居住者の呼吸域へ流れ込みます。さらに高気密住宅で給気（メイクアップエア）なしに 400 CFM 超の強換気を回すと、ガス給湯器の排ガス（一酸化炭素）を室内へ逆流させる恐れもあります。',
      sections: [
        {
          title: '1. 奥行 15 インチの死角：浅型フードが手前バーナーの煙を逃す理由',
          type: 'warning',
          content: '一般的なコンロは奥行きが約 24 インチ（60cm）ありますが、浅型やレンジ上電子レンジ一体型フードの張り出しは 14.5〜16 インチ程度しかなく捕集溜め空間も不足しています。調理時の上昇気流（サーマルプルーム）は片側 10°〜15°（強火炒め時は 25°）に広がるため、手前鍋の油煙がフード前面を外れて天井へ拡散します。',
          boxText: '捕集形状の実測値：LBNL 試験では奥行き 22〜24 インチの深型ブーツ/マントル型が奥コンロで 75%〜92% を捕集する一方、浅型フードの手前調理では 45% 未満に低下。さらに室内循環式は NO2 除去率 0% です。'
        },
        {
          title: '2. HVI 10,000 BTU あたり 100 CFM 基準と IH クッキングヒーター換算',
          type: 'fact',
          content: '米国換気協会 (HVI) はガス火力 10,000 BTU/h につき最低 100 CFM の実効排気量を義務付け（ASHRAE 62.2 の住宅キッチン下限は 100 CFM）、45,000 BTU のガスコンロには 450 CFM 以上の実排気が必要です。IH や電気コンロでは幅 1 インチあたり 10〜12 CFM（30 インチ幅で 300〜360 CFM）を目安に選定してください。',
          boxText: '換気量カンタン計算：ガス合計火力 BTU ÷ 100 ＝ 必要な最低実効排気量 CFM（ダクト圧損後の実力値で検討してください）。'
        },
        {
          title: '3. 奥側コンロの壁面ガイド効果と「点火 2 分前」先行運転ルール',
          type: 'tip',
          content: '背面のキッチン壁面はコアンダ効果によるエアガイド板として機能し、後ろからの乱気流を遮断して煙と NO2 を真直ぐフード内部へ導きます。強火のステーキ焼きや揚げ物を手前から奥コンロへ移すだけで捕集効率は ~50% から 85%〜95% に跳ね上がります。また点火 1〜2 分前に運転を開始し上昇気流路を作っておくことが重要です。',
          boxText: '毎日の防衛習慣：煙や飛散の多い炒め物は優先して奥コンロを使い、点火2分前からフードを回し、消火後も5〜10分間運転を継続してください。'
        },
        {
          title: '4. アルミ蛇腹フレキダクトの罠：風量 45% 低下と油溜まり火災リスク',
          type: 'warning',
          content: '細い 6 インチ（150mm）の蛇腹アルミフレキ管や急角度ベンドを多用した配管は、内部の凹凸が激しい乱流摩擦を生んで実効風量を 35%〜50% も削ぎ落とします。さらに溝ごとに食用油ミストが凝固蓄積するため、コンロ火災が天井裏のダクト内へ燃え広がる重大リスクとなります。',
          boxText: '防火・配管基準：蛇腹アルミ管や塩ビ管の多用は避け、7〜8 インチの平滑な亜鉛めっきスパイラル鋼管を使用し、継ぎ目は UL 181B 準拠のアルミテープで気密処理してください。'
        },
        {
          title: '5. 給気不足による負圧一酸化炭素逆流リスクと IRC >400 CFM ルール',
          type: 'success',
          content: '換気扇が排出した空気と同じ体積の新鮮空気を室内に取り入れる必要があります。高気密住宅において 400 CFM を超える排気を給気（メイクアップエア）なしで行うと室内が -5〜-15 Pa の負圧となり、給湯器や暖房煙突から一酸化炭素を室内に引き戻す危険（バックドラフト）が生じます。調理中に近くの窓を数センチ開けるだけでも即座に負圧を解消できます。',
          boxText: '安全確認チェック：400 CFM 超の換気設備と燃焼式給湯器が同居する住宅では CO 警報器を設置し、強運転時は連動給気ダンパー作動または窓の微開放を徹底してください。'
        }
      ],
      conclusion: 'キッチンの空気を守るのはモーター音の大きさではなく、コンロをしっかり覆う屋外排気深型フード、抵抗の少ない平滑鋼管ダクト、そして適切な給気と奥コンロ活用の3本柱です。賃貸等で屋外ダクト化が困難な環境では、強火調理を卓上 IH へ切り替えるだけでも NO2 とベンゼンの室内発生をゼロに抑えられます。',
      faqs: [
        {
          question: '自宅のレンジフードが屋外直排か室内循環式かを見分ける方法は？',
          answer: 'フード真上の吊戸棚を開けてみてください。太い金属製ダクト配管が天井や外壁へ伸びていれば屋外排気です。配管がなく、運転時にフード上部前面のスリットから暖かい空気が部屋側へ吹き出している場合は室内循環式です。'
        },
        {
          question: '空気清浄機（HEPA＋活性炭）でレンジフードの代わりになりますか？',
          answer: 'HEPA フィルターは調理後の残留油煙 PM2.5 低減には役立ちますが、二酸化窒素 (NO2) や一酸化炭素 (CO) などの無機ガス除去にはほとんど効果がありません。窓の対角換気や IH 化が遥かに確実です。'
        },
        {
          question: 'レンジフードはコンロからどのくらいの高さに設置するのが理想ですか？',
          answer: 'IH・電気コンロでコンロ面から 24〜30 インチ（約60〜75cm）、ガスコンロでは 28〜30 インチ（機種銘板の離隔規定厳守）が標準的です。高すぎると上昇気流が横広がりし吸い込み効率が落ちます。'
        },
        {
          question: 'アイランドキッチン用フードは壁付けより強い風量 (CFM) が必要ですか？',
          answer: 'はい。背面の整流壁がなく周囲 360 度から横風の影響を受けるため、フード幅を広めに設計した上で壁付けより 25%〜35% 増しの風量（10,000 BTU あたり 120〜150 CFM）が推奨されます。'
        },
        {
          question: 'どのくらいの風量から専用の給気（メイクアップエア）が必要になりますか？',
          answer: '国際住宅建築基準 (IRC M1503.6) では 400 CFM 超の排気設備に連動給気システムの設置を規定しています。気密性の高い近年のマンション・住宅では負圧と排気逆流防止のため必須の配慮となります。'
        }
      ],
      relatedTools: [
        { name: 'レンジフード VOC・二酸化窒素 (NO2)・PM2.5 排気効率モデラー', url: '/ja/tools/range-hood-extraction-efficiency-modeler/' },
        { name: 'ガスコンロ由来ベンゼン・室内 NO2 曝露計算ツール', url: '/ja/tools/gas-stove-benzene-no2-calculator/' },
        { name: 'エアフライヤー PAH 再飛散・PM2.5 吸入モデラー', url: '/ja/tools/air-fryer-pah-resuspension-modeler/' }
      ]
    },
    {
      slug: 'cuisinart-grill-charbroil-ambiano-2026-cpsc-recalls-guide',
      title: '2026年 米国CPSCリコール総点検：Cuisinart ピザオーブン付きグリルガラス破損・Char-Broil Bistro Pro感電・ALDI Ambiano圧力鍋の重大警告',
      category: 'appliances',
      excerpt: '2025〜2026年秋に判明したCPSCリコール詳報：約12,660台の Cuisinart CGG-6331（強化ガラス破裂・$500返金）、Char-Broil Bistro Pro 電気グリル（日付コード 2510–2512 アース脱落感電）、約46,660台の ALDI Ambiano 電気圧力鍋。',
      date: '2026-11-26',
      readTime: '17分で読めます',
      author: 'IsItKitchenSafe',
      intro: '2026年秋までに米国消費者製品安全委員会 (CPSC) から発表されたキッチン・屋外調理機器のリコールでは、ピザ窯の強化ガラス窓破裂による裂傷、電気ヒーターのアース線脱落による 120V 感電、圧力が残ったまま蓋が開いてしまう火傷事故など深刻な欠陥が報告されています。倉庫やパントリーに保管していた家電を再び使う前に、必ず底面・背面の型式と製造コードを確認してください。',
      sections: [
        {
          title: '1. Cuisinart Propel+ 4バーナー 3-in-1 ガスグリル（型式 CGG-6331 — リコール #26-605）',
          type: 'warning',
          content: '2026年7月、Conair LLC および CPSC は米国約 12,660 台（カナダ 83 台）の Cuisinart Propel+ ガスグリル（型式 CGG-6331、リコール #26-605）を自主回収しました。内蔵ピザオーブン蓋の強化ガラス窓が使用中に突然粉砕し、ガラス片の飛散による裂傷・火災危険が報告されています。',
          boxText: '500ドル返金措置：直ちに CGG-6331 の使用を中止してください。必ず厚手の手袋と保護メガネを着用の上で公式手順通りにガラスを除去・マーキングして証明写真を提出すると、全額 $500 返金の対象となります。'
        },
        {
          title: '2. Char-Broil Bistro Pro 電気グリル（2026年9月感電リコール：コード 2510–2512）',
          type: 'warning',
          content: '2026年9月、Char-Broil は 2025年10〜12月製造バッチ（製造コード 2510、2511、2512；米国 SKU 25302145〜25302163 およびカナダ 25302177）の Bistro Pro 電気グリルを CPSC と共同リコールしました。ヒーター要素の接地（アース）線が外れやすく、金属筐体が通電して重篤な感電を招く恐れがあります。',
          boxText: '感電緊急停止：本体底面のラベルにある4桁製造コードを確認し、2510・2511・2512 該当機は直ちにコンセントを抜き、メーカー無償修理または交換対応を受けてください。'
        },
        {
          title: '3. ALDI 販売 Ambiano 電気圧力鍋（46,660台 — CPSC リコール #26-007）',
          type: 'warning',
          content: 'Tempo International (USA) Inc. が輸入し ALDI で販売された約 46,660 台の Ambiano 6クォート／8クォート電気圧力鍋（型式 93550 / KY-318B、96775 / KY-318A、98527 / 6L-PC）が CPSC リコール #26-007 の対象です。内圧が完全に抜ける前に蓋のロックが外れ、高温の調理物が噴き出す危険があります。',
          boxText: '手応えだけで判断厳禁：パッキンやロックピンの経年摩耗により突然圧力抜け前に回ってしまうリスクがあります。対象型番は直ちに使用を中止し #26-007 の案内を確認してください。'
        },
        {
          title: '4. なぜ強化ガラスは割れ、端子が抜け、圧力ロックが誤作動するのか',
          type: 'fact',
          content: 'これら3件には熱疲労の共通点があります。400°C の不均一な直火に晒される強化ガラス表面の微小傷や硫化ニッケル膨張による遅発性爆裂、20°C〜300°C の急激な温度差による圧着端子の緩み・酸化断線、そしてデンプン質煮汁の固着による圧力フロートピンの引っかかりです。',
          boxText: '予防安全の鉄則：オーブン窓ガラスを金属たわしで擦らないこと、屋外電気調理器は必ず正常な漏電遮断器 (GFCI) 付き接地コンセントを使うこと、圧力鍋はピン完全降下を確認後にのみ開けることを徹底してください。'
        },
        {
          title: '5. 製品銘板の正しい照合手順と返金申請の注意点',
          type: 'tip',
          content: '機器が完全に冷えて電源・ガスを遮断した状態で、明るい照明下で型番・製造日コード・シリアル写真を記録し、CPSC/メーカー公式ページが求める手順に沿って手続きを行ってください。',
          boxText: '照合リスト：CPSC #26-605（Cuisinart CGG-6331）、#26-007（Ambiano ALDI）、および Char-Broil Bistro Pro リコール窓口を必ずご確認ください。'
        }
      ],
      conclusion: '長期保管後の調理家電こそメーカー・当局の最新リコール確認が不可欠です。お手元の Cuisinart CGG-6331、Char-Broil Bistro Pro、または Ambiano 圧力鍋を数分点検するだけで、ガラス破裂・感電・熱湯噴出からご家族を守れます。',
      faqs: [
        {
          question: 'Cuisinart CGG-6331 リコールの対象台数と補償内容は何ですか？',
          answer: '米国約 12,660 台・カナダ 83 台の Propel+ 4バーナー 3-in-1 ガスグリル（型式 CGG-6331、CPSC #26-605）が対象で、公式手順に沿った安全処理と確認写真の提出により $500 返金を受けられます。'
        },
        {
          question: 'Char-Broil Bistro Pro 電気グリルのリコール対象バッチはどう確認しますか？',
          answer: '電源を抜いた状態で銘板ラベルの SKU（米国 25302145〜25302163／カナダ 25302177）と製造コード 2510、2511、または 2512 の記載を確認してください。'
        },
        {
          question: 'ALDI の Ambiano 圧力鍋リコール (#26-007) に該当する型番はどれですか？',
          answer: 'Tempo International 輸入の 6QT・8QT モデル 93550 (KY-318B)、96775 (KY-318A)、98527 (6L-PC) の計約 46,660 台が対象です。'
        },
        {
          question: '申請前に自分で電源コードを切断したりガラスを外したりして良いですか？',
          answer: '必ず公式リコール案内に書かれた手順を最後まで確認してから作業してください。Cuisinart CGG-6331 では特定のマーキング・除去撮影条件を満たすことで $500 返金が承認されます。'
        },
        {
          question: 'なぜ今まで問題なかったグリルの強化ガラスが後から突然割れるのですか？',
          answer: '強化ガラスは内部に強い応力を蓄えており、清掃時の微細な傷や急冷（水滴・油飛び）、加熱の偏りが臨界点を超えた瞬間に連鎖的に粉砕するためです。'
        }
      ],
      relatedTools: [
        { name: 'キッチン用品バーコード＆リコール製品スキャナー', url: '/ja/tools/product-recalls-scanner/' },
        { name: '電気圧力鍋・Instant Pot 安全水位＆減圧シミュレーター', url: '/ja/tools/pressure-cooker-instant-pot-safety-simulator/' },
        { name: 'キッチン事故緊急トリアージ・初期応急処置ガイド', url: '/ja/tools/kitchen-hazard-emergency-triage/' }
      ]
    },
    {
      slug: 'eu-2026-2376-recycled-food-plastic-fda-spice-lead-safety-guide',
      title: '再生食品接触プラスチック新規則 (EU 2026/2376) と FDA シナモン鉛汚染リコール (Wise Wife・Lior)：家庭の脱プラスチック・脱重金属対策',
      category: 'food-safety',
      excerpt: '2026年10月末公布の欧州委員会規則 (EU) 2026/2376（再生プラスチックの除染・適合宣言強化）と、2026年後半の FDA 粉末シナモン鉛リコール（Wise Wife 2.118 ppm・Lior ロット GAP11304・Spice Class・La Frontera）への実践的対策を解説。',
      date: '2026-11-26',
      readTime: '16分で読めます',
      author: 'IsItKitchenSafe',
      intro: '2026年秋、食の安全を巡る2つの重要動向が家庭のパントリー管理に直結しています。1つは EU が 2026年10月29日に官報公示した食品接触再生プラスチック規制の強化規則 (EU) 2026/2376、もう1つは米国 FDA が 2026年後半に相次いで公表した市販シナモンパウダーの高濃度鉛汚染リコールです。加熱しても消えない金属汚染と再生樹脂からの化学溶出を防ぐため、正しい廃棄判断と容器選びを整理します。',
      sections: [
        {
          title: '1. 欧州委員会規則 (EU) 2026/2376：再生食品プラスチックの規制厳格化',
          type: 'fact',
          content: '2026年10月29日に欧州官報で公開された規則 (EU) 2026/2376 は、食品接触再生プラスチック枠組み (EU) 2022/1616 を改正し、EU登録台帳の管理強化、サプライチェーン適合宣言（Declarations P および C）の標準化、通関時の除染試験証明義務を一層厳格化しました。',
          boxText: '家庭への影響：除染が不十分な再生樹脂 (rPET 等) にはラベル糊・工業油・重金属安定剤・分解オリゴマー (NIAS) が残留しやすく、温かい料理や酸性の食品を入れると急速に溶出します。'
        },
        {
          title: '2. 2026年後半 FDA シナモン鉛汚染リコール：Wise Wife・Lior・Spice Class・La Frontera',
          type: 'warning',
          content: 'FDA は 2026年後半にかけて高濃度の鉛が検出された粉末シナモンの回収と警告を拡大しています。14州で流通した Wise Wife Ground Cinnamon（2.118 ppm 鉛検出、UPC 0688474302754、賞味期限 4/25/2027）やメリーランド州検査で摘発された Lior Cinnamon（UPC 794711005484、ロット GAP11304）のほか、Spice Class や La Frontera も警戒対象です。',
          boxText: 'CDC 鉛安全基準は「ゼロ」：乳幼児は成人の 4〜5倍もの鉛を消化管から吸収します。該当 UPC やロットが見つかった場合は決して使い切ろうとせず直ちに廃棄してください。'
        },
        {
          title: '3. 加熱・酸味・薄い再生プラ容器が暴露リスクを倍増させる仕組み',
          type: 'warning',
          content: '熱いスープやトマトソースを軽量な使い捨て #1 rPET 容器に入れたり、コンロの上の棚でプラスチック製スパイス容器を保管すると、40°C 超で高分子が軟化し残留触媒や化学物質が移行しやすくなります。さらに酸性煮込み中の重金属は腸管吸収率が高まります。',
          boxText: '厳禁ルール：「BPAフリー」表記があっても、#1 PET/rPET 製の使い捨て容器に熱い料理や酸性食品を入れて電子レンジ加熱・食洗機洗浄・長期高温保管をしないでください。'
        },
        {
          title: '4. 実践的なパントリー切り替え：ホウケイ酸ガラス 3.3 と SUS304 ステンレス',
          type: 'tip',
          content: 'スパイスや乾物は気密性の高いホウケイ酸ガラス 3.3 保存瓶または 304 ステンレスキャニスターへ移し替え、コンロの熱気や湯気が当たらない冷暗戸棚に保管してください。可能な場合は産地の明確なスティック状のホールシナモンを選んで使う都度すりおろすと安心です。',
          boxText: '点検ポイント：熱源から離れたガラス瓶保管、ホールスパイス優先、プラスチック使用が必須の冷蔵品でも未再生の厚手 #5 ポリプロピレン (PP) を選択。'
        },
        {
          title: '5. 樹脂マーク (#1〜#7) と調味料 UPC を3秒で確認する習慣',
          type: 'success',
          content: 'お菓子作りや幼児食にシナモンを使う前に UPC バーコードを最新のリコール情報と照合し、加熱・長期保存・酸性食品のすべてを無害なガラスとステンレスへ移行させましょう。',
          boxText: '安全アクション：手元のスパイス UPC を確認し、食品接触容器をホウケイ酸ガラス・ステンレス中心に標準化しましょう。'
        }
      ],
      conclusion: '規則 (EU) 2026/2376 と 2026年後半の FDA シナモン鉛リコールが示す通り、原料中の重金属も不適合再生プラの残留化学物質も家庭での加熱調理で無毒化することはできません。対象ロット（Wise Wife 0688474302754・Lior GAP11304・Spice Class・La Frontera）を直ちに廃棄し、#1 再生プラスチックは冷たい飲料用途のみに限定してホウケイ酸ガラスをご活用ください。',
      faqs: [
        {
          question: '2026年後半の FDA 警告・リコール対象のシナモン銘柄はどれですか？',
          answer: 'Wise Wife Ground Cinnamon（2.118 ppm 鉛、UPC 0688474302754、Best Before 4/25/2027）、Lior Cinnamon Ground Seasoning（UPC 794711005484、ロット GAP11304）、さらに Spice Class と La Frontera が公開警戒リストに掲載されています。'
        },
        {
          question: '欧州委員会規則 (EU) 2026/2376 で何が変わりましたか？',
          answer: '2026年10月29日公布の同規則は (EU) 2022/1616 を改正し、食品接触用再生プラスチックの EU 登録管理、P/C 適合宣言書類、および輸入通関時の除染試験確認を強化しています。'
        },
        {
          question: 'クッキーに焼き込んだり煮沸すればシナモン中の鉛は分解されますか？',
          answer: 'いいえ。鉛は熱で分解も蒸発もしない金属元素であるため、加熱調理しても毒性は一切消えません。リコール該当日用品は即時廃棄が必要です。'
        },
        {
          question: '#1 rPET（再生ペット）の惣菜パックを温め直しに使っても大丈夫ですか？',
          answer: '避けてください。PET/rPET は 40°C 以上で軟化しやすく、オリゴマーや微量の残留物質・マイクロプラスチックの移行が急増するため、冷たい一回使い切り専用として扱うべきです。'
        },
        {
          question: '小さな子どもがリコール対象のシナモンを食べてしまった場合は？',
          answer: '直ちに提供を止め、容器の UPC とロット番号の写真を記録した上で小児科医へ相談し、血中鉛濃度 (BLL) 検査の要否を確認してください。米国 CDC は小児に安全な血中鉛濃度は存在しないとしています。'
        }
      ],
      relatedTools: [
        { name: 'キッチン用プラスチック化学溶出・耐熱容器チェッカー', url: '/ja/tools/kitchen-plastic-leaching-checker/' },
        { name: 'キッチン用品バーコード＆リコール製品スキャナー', url: '/ja/tools/product-recalls-scanner/' },
        { name: 'スパイス・乾物の賞味期限＆安全性検索ツール', url: '/ja/tools/pantry-dry-goods-shelf-life-checker/' }
      ]
    }
  ]
};

function appendLocale(lang) {
  const file = lang === 'en' ? 'blog.json' : `blog.${lang}.json`;
  const filePath = path.join(DATA_DIR, file);
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const existingSlugs = new Set(existing.map(x => x.slug));
  const additions = GUIDES[lang];
  let added = 0;
  for (const item of additions) {
    if (!existingSlugs.has(item.slug)) {
      existing.push(item);
      existingSlugs.add(item.slug);
      added++;
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
  console.log(`[${lang}] total=${existing.length}, added=${added}`);
}

for (const lang of ['en', 'es', 'pt', 'zh-cn', 'ja']) {
  appendLocale(lang);
}
