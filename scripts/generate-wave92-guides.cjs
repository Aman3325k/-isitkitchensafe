/**
 * Wave 92 Guide Generator (137 -> 140 guides x 5 languages = 700 articles)
 * Upserts 3 fact-checked, peer-reviewed / EFSA / EU PPWR / UC Davis / MDPI-grounded guides across EN, ES, PT, ZH-CN, JA.
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

const GUIDES = {
  en: [
    {
      slug: 'bamboo-utensil-glue-mineral-oil-desiccation-biofilm-safety',
      title: 'Bamboo vs. Hardwood Spoons, Mineral Oil & Biofilms: Coatings (2023) Findings, Glue Hydrolysis & Staph Enterotoxin Safety',
      category: 'materials',
      excerpt: 'How Coatings (2023) reconciles mineral oil sealing with UC Davis xylem bacterial desiccation, why laminated bamboo glue hydrolyzes in dishwashers, and why Staph Enterotoxin A survives 100°C boiling.',
      date: '2026-11-27',
      readTime: '16 min read',
      author: 'IsItKitchenSafe',
      intro: 'Home cooks routinely receive conflicting advice about wooden spoons and bamboo spatulas: one camp claims wood naturally kills bacteria, another insists oiling wood with olive oil keeps it sanitary, and millions toss laminated bamboo utensils straight into the dishwasher. Peer-reviewed timber physics and food microbiology studies—spanning UC Davis xylem capillary testing, MDPI Coatings (2023) finish trials, and Staphylococcal enterotoxin thermal stability research—resolve every contradiction so you know exactly which woods crack, which adhesives leach, and when a utensil must be retired.',
      sections: [
        {
          title: '1. UC Davis Capillary Desiccation vs. Coatings (2023): The Oil-Finish Nuance',
          type: 'fact',
          content: 'Classic University of Wisconsin and UC Davis food safety studies by Ak and Cliver demonstrated that clean, intact hardwoods such as Sugar Maple (Acer saccharum) and European Beech (Fagus sylvatica) rapidly wick surface moisture inward via xylem vessels (<60 µm diameter), desiccating 99.9% of surface bacteria faster than scarred plastic. However, a 2023 study in MDPI Coatings by Vega Gutierrez et al. (DOI: 10.3390/coatings13040752) tested mineral oil and linseed oil finishes inoculated with Salmonella and Listeria, finding that coated surfaces retained significantly more recoverable surface bacteria than bare wood because hydrophobic oil plugs block immediate capillary absorption. Does that mean you should leave wood dry? No—unsealed spoons crack violently under moisture cycling, creating >500 µm fissures that trap bacteria permanently. The scientific balance: seal wood lightly with USP mineral oil to stop structural cracking, and always wash promptly with hot soapy water after raw protein contact rather than relying on passive wood absorption.',
          boxText: 'SCIENCE BALANCE: USP mineral oil protects timber against hygroscopic cracking, while Coatings (2023) proves oiled wood slows passive wicking—so always wash promptly with hot detergent water after touching raw foods.'
        },
        {
          title: '2. Laminated Moso Bamboo: Glue-Line Hydrolysis & Dishwashers (pH 10.5–11.5)',
          type: 'warning',
          content: 'Moso bamboo (Phyllostachys edulis) is not a solid hardwood—it is a grass composite assembled from thin culm strips bonded under heat and pressure with urea-formaldehyde, melamine-formaldehyde, or polyvinyl acetate (PVA) resins. Placing bamboo or solid wood utensils inside an automatic dishwasher subjects them to 65°C alkaline detergent wash cycles (pH 10.5–11.5) followed by 75°C heated air drying. Alkaline builders saponify natural extractives and soften wood lignin (wet glass-transition temperature ~65°C), while European beech suffers an 11.8% tangential vs. 5.8% radial shrinkage differential (~2:1 T/R stress ratio) that tears longitudinal checks wide open. In laminated bamboo, hot alkaline water rapidly hydrolyzes glue seams, producing hollow crevices that harbor biofilms and leach resin degradation compounds.',
          boxText: 'NEVER DISHWASH WOOD OR BAMBOO: 65°C alkaline wash and 75°C dry cycles multiply micro-cracks by >800% and hydrolyze laminated bamboo glue lines into permanent bacterial incubators.'
        },
        {
          title: '3. Why Olive Oil Turns Rancid While USP Mineral Oil Protects Safely',
          type: 'warning',
          content: 'Conditioning wooden spoons with olive, canola, sunflower, or walnut oil introduces polyunsaturated fatty acids (such as linoleic acid) into deep timber pores. Exposed to oxygen and stove warmth, these unsaturated triglycerides undergo free-radical lipid peroxidation, cleaving into foul-smelling hexanal, 2,4-decadienal, and malondialdehyde while polymerizing into a sticky, gummy varnish that actively feeds mold (Aspergillus) and bacterial biofilms. By contrast, pure USP food-grade white mineral oil (saturated C15–C50 aliphatic alkanes) blended with natural beeswax contains zero double bonds, cannot oxidize or go rancid, and cuts moisture swelling by 88–95%.',
          boxText: 'OIL RULE: Never season spoons with olive or vegetable cooking oils; apply only pure USP food-grade mineral oil and beeswax to prevent moisture checking without rancid biofilm buildup.'
        },
        {
          title: '4. Dormant VBNC Pathogens & Heat-Stable Staph Enterotoxin A (100°C Survival)',
          type: 'warning',
          content: 'Once longitudinal surface cracks widen past 100 µm, sponge surfactants cannot penetrate due to liquid surface tension. Trapped Salmonella enterica, Listeria monocytogenes, and E. coli secrete extracellular polymeric substances (EPS) and enter a desiccated Viable But Non-Culturable (VBNC) dormant state inside wood fissures for weeks—only to rehydrate and shed into hot stews or cold baby food upon reuse. Most critically, Staphylococcus aureus growing inside lipid-soaked wood cracks can produce Staphylococcal Enterotoxin A (SEA). While cooking heat kills vegetative S. aureus cells at 70°C, preformed Enterotoxin A resists rolling boiling at 100°C (212°F) for over 30 minutes, causing acute emetic food poisoning even in reheated leftovers.',
          boxText: 'HEAT-STABLE TOXIN WARNING: Boiling contaminated soup does not destroy preformed Staphylococcal Enterotoxin A—keep cracked wooden spoons completely out of dairy, gravies, and ready-to-eat foods.'
        },
        {
          title: '5. Vertical Drying (Aw < 0.65), 3-Minute Scald & The 1-Millimeter Rule',
          type: 'success',
          content: 'Adopt four non-negotiable wood hygiene standards: First, reserve dedicated silicone or 304 stainless tools for raw chicken, pork, and ground beef. Second, if a wooden spoon accidentally touches raw meat purge, scrub with hot soapy water and submerge the head in rolling boiling water (100°C) for 3 full minutes or wipe with 3% hydrogen peroxide for 10 minutes. Third, never jam damp spoons head-down or crowded into a ceramic crock or dark drawer where water activity stays above Aw 0.85 for 12+ hours; stand utensils upright in an open-air rack so surface Aw drops below 0.65 within 90 minutes. Fourth, follow the 1-Millimeter Retirement Rule: discard any spoon with splits ≥1 mm wide/deep, bamboo glue separation, or dark embedded mold.',
          boxText: '1-MILLIMETER RETIREMENT RULE: Discard wooden spoons immediately once longitudinal cracks exceed 1 mm, bamboo seams split, or black mold stains penetrate the grain.'
        }
      ],
      conclusion: 'Reconciling UC Davis capillary science with MDPI Coatings (2023) leads to a clear home kitchen standard: choose single-piece closed-grain hardwood (hard maple or olive wood) over glued bamboo, ban all wooden utensils from the dishwasher, condition lightly with USP mineral oil rather than cooking oil, dry upright in open air, and retire any spoon showing 1-mm cracks.',
      faqs: [
        {
          question: 'Did a 2023 study find that mineral oil makes wooden boards and spoons hold more bacteria?',
          answer: 'Yes, with important context. Vega Gutierrez et al. (MDPI Coatings, 2023) showed that mineral oil and linseed oil seal wood pores, slowing the passive capillary wicking that pulls moisture and surface Salmonella or Listeria inward compared to unsealed dry wood. Therefore, you should still oil wood sparingly to prevent deep structural cracking, but always wash promptly with hot soapy water after raw food contact rather than relying on dry wood wicking alone.'
        },
        {
          question: 'Why are laminated bamboo spoons worse in the dishwasher than solid maple spoons?',
          answer: 'Laminated bamboo utensils are built by gluing compressed bamboo culm strips together with synthetic resins such as urea-formaldehyde, melamine-formaldehyde, or PVA. Hot alkaline dishwasher cycles (65°C, pH 10.5–11.5) hydrolyze these glue seams, splitting the layers into hollow crevices that trap food fluids and bacterial biofilms.'
        },
        {
          question: 'Can I boil a contaminated wooden spoon to destroy Staph food poisoning toxins?',
          answer: 'Boiling for 3 minutes pasteurizes live Salmonella, E. coli, and Staphylococcus aureus bacteria inside damp surface pores, making it effective immediately after accidental raw meat contact. However, if S. aureus has already grown inside a dirty, fat-logged spoon crack and produced Enterotoxin A, that toxin is heat-stable and survives 100°C boiling for over 30 minutes—so badly cracked or slimy utensils must be discarded.'
        },
        {
          question: 'Why shouldn’t I rub olive oil or coconut oil onto my wooden spoons?',
          answer: 'Culinary plant oils contain unsaturated fatty acids that oxidize on contact with oxygen, turning sticky, gummy, and rancid (lipid peroxidation into malondialdehyde and hexanal). That sticky layer traps dust, mold spores, and bacterial nutrients. Use only saturated USP food-grade mineral oil or beeswax.'
        },
        {
          question: 'Where should damp wooden spoons dry after handwashing?',
          answer: 'Dry them vertically in a well-ventilated, uncrowded open-air rack so air circulates freely around the entire spoon head, dropping surface water activity below Aw 0.65 within 90 minutes. Packing damp wooden spoons tightly into a ceramic crock or closed drawer traps moisture above Aw 0.85 for 12+ hours.'
        }
      ],
      relatedTools: [
        { name: 'Wooden Spoon Micro-Crack Biofilm & Moisture Modeler', url: '/tools/wooden-utensil-biofilm-modeler/' },
        { name: 'Wooden Cutting Board Deep-Groove Pathogen Modeler', url: '/tools/wooden-cutting-board-pathogen-modeler/' },
        { name: 'Kitchen Knife Care & Cutting Board Matcher', url: '/tools/knife-care-cutting-board-matcher/' }
      ]
    },
    {
      slug: 'molded-fiber-takeout-bowls-eu-ppwr-pfas-ban-2026-safety',
      title: 'Molded Fiber "Compostable" Bowls & EU PPWR PFAS Ban (2026): Inside the 25 ppb / 50 ppm Packaging Limits & Safe Reheating',
      category: 'materials',
      excerpt: 'How Regulation (EU) 2025/40 (effective August 12, 2026) caps PFAS in molded fiber bowls and greaseproof packaging at 25 ppb / 250 ppb / 50 ppm total fluorine—and why reheating hot takeout inside fiber bowls accelerates migration.',
      date: '2026-11-27',
      readTime: '15 min read',
      author: 'IsItKitchenSafe',
      intro: 'Molded sugarcane bagasse bowls, "compostable" fiber clamshells, and greaseproof fast-food wrappers became ubiquitous replacements for polystyrene foam—yet analytical chemistry repeatedly found high levels of persistent per- and polyfluoroalkyl substances (PFAS) added as water- and oil-repellent barriers. On August 12, 2026, binding European Union PFAS limits under Article 5(5) of the Packaging and Packaging Waste Regulation (Regulation (EU) 2025/40) entered full force with zero grandfathering of existing stock, reshaping global takeaway packaging safety.',
      sections: [
        {
          title: '1. EU PPWR Article 5(5) Limits (Effective August 12, 2026): 25 ppb, 250 ppb & 50 ppm',
          type: 'fact',
          content: 'Under Article 5(5) of Regulation (EU) 2025/40 (PPWR), food-contact packaging placed on the EU market on or after August 12, 2026 must satisfy three strict chemical ceilings simultaneously: (1) 25 ppb (25 µg/kg) maximum for any individual non-polymeric PFAS analyzed via targeted LC-MS/MS; (2) 250 ppb maximum for the sum of targeted non-polymeric PFAS (including quantified precursors); and (3) 50 ppm (50 mg/kg) maximum for total PFAS including polymeric fluorochemicals. When rapid Total Fluorine (TF) or Total Organic Fluorine (TOF) screening exceeds 50 mg/kg, companies must prove with secondary speciation analytics (such as pyrolysis-GC/MS) that the fluorine does not stem from restricted PFAS. Article 5 simultaneously maintains the 100 mg/kg combined cap on lead, cadmium, mercury, and hexavalent chromium.',
          boxText: 'BINDING EU PPWR THRESHOLDS (AUG 12, 2026): Max 25 ppb single PFAS, 250 ppb sum of targeted PFAS, and 50 ppm total PFAS (including polymeric) across all EU food-contact packaging.'
        },
        {
          title: '2. Why "Compostable" Molded Bagasse Bowls Historically Carried PFAS',
          type: 'warning',
          content: 'Uncoated pressed plant fibers (wheat straw, bamboo pulp, sugarcane bagasse) soak up hot broth, curry oil, and salad dressing like blotting paper within minutes. To keep compostable bowls rigid under boiling soups and greasy burritos, packaging mills sprayed fluorotelomer acrylate polymers and side-chain fluorinated additives into the wet fiber slurry. Even after the U.S. FDA finalized voluntary market phase-outs of PFAS greaseproofing agents in February 2024, legacy inventory, unverified imported restaurant supplies, and non-intentionally added precursor impurities persisted globally—prompting the EU PPWR 25 ppb / 50 ppm statutory cutoff with no sell-through exemption.',
          boxText: 'GREENWASHING TRAP: "100% Compostable" or "Plant-Fiber" labels do NOT guarantee PFAS-free safety unless backed by certified Total Organic Fluorine (<50 ppm) or BPI/TÜV PFAS-free testing.'
        },
        {
          title: '3. Hot Lipids, Microwave Steam & Fluorotelomer Migration Physics',
          type: 'warning',
          content: 'Microwaving hot, high-fat takeaway food (macaroni and cheese, butter chicken, oily stir-fry) directly inside a molded fiber bowl or coated paper wrapper dramatically accelerates chemical partition. As temperatures surge above 70°C–95°C, free cooking lipids act as organic extraction solvents while trapped steam swells cellulose fibers, releasing short-chain perfluorinated carboxylic acids (like PFHxA) and volatile fluorotelomer alcohols (FTOHs) directly into melted cheese and gravy.',
          boxText: 'NEVER MICROWAVE IN TAKEOUT FIBER BOWLS: Steam and >70°C oils strip surface barrier resins and volatile fluorochemicals directly into food.'
        },
        {
          title: '4. What Replaces PFAS? Biopolymer Liners, Clay Coatings & Hidden Pitfalls',
          type: 'tip',
          content: 'To meet the August 2026 EU PPWR rules and U.S. state PFAS packaging bans, manufacturers are shifting to aqueous dispersion barrier coatings, mineral clay/silicate sizing, mechanical pulp densification, and thin polylactic acid (PLA) or polyhydroxyalkanoate (PHA) laminates. While these stop fluorinated exposure, consumers must remember two mechanical limits: thin PLA liners soften around 55°C–60°C (their glass transition temperature) and are restricted in EU 2026/2412 rules for prolonged >40°C contact, and molded pulp wet-strength resins can still shed micro-fibers if aggressively scraped with metal forks.',
          boxText: 'NEXT-GEN BARRIERS: Look for BPI-certified PFAS-free fiberware using mineral clay or pure aqueous barriers, and keep hot >60°C meals out of PLA-lined boxes.'
        },
        {
          title: '5. Practical Home Protocol: Immediate Transfer & Safe Reheating Swaps',
          type: 'success',
          content: 'When ordering hot delivery or restaurant leftovers in molded fiber clamshells, parchment-lined pizza boxes, or grease-resistant bakery bags: first, open the lid promptly or transfer steaming oily dishes onto ceramic stoneware or Type 3.3 borosilicate glass containers within 15 minutes of arrival so heat does not cook packaging coatings. Second, never reheat takeout inside any paperboard, pulp, or foil-lined fiber box—always plate onto microwave-safe glass or porcelain. Third, for home storage and packed lunches, swap single-use fiber clamshells for oven- and microwave-safe borosilicate snap-lid containers or unlined 304 stainless steel bento boxes (for cold/warm transport).',
          boxText: 'ZERO-MIGRATION TAKEOUT HABIT: Unpack hot greasy takeout onto ceramic or borosilicate glass before eating or reheating—never microwave food inside fiber bowls or wrappers.'
        }
      ],
      conclusion: 'The August 12, 2026 enforcement of Regulation (EU) 2025/40 (PPWR) marks a watershed moment by capping packaging PFAS at 25 ppb individual / 250 ppb sum / 50 ppm total fluorine without stock sell-through loopholes. At home, pairing verified PFAS-free purchasing with a simple rule—never microwaving or holding hot oily food in disposable molded fiber bowls—eliminates avoidable dietary exposure.',
      faqs: [
        {
          question: 'When did the EU PPWR PFAS ban in food-contact packaging take effect?',
          answer: 'Under Article 5(5) of Regulation (EU) 2025/40 (the Packaging and Packaging Waste Regulation), the binding EU PFAS limits for food-contact packaging took effect on August 12, 2026, with no grandfathering exemption for existing stock.'
        },
        {
          question: 'What are the exact EU 2025/40 PFAS limits for food packaging?',
          answer: 'Regulation (EU) 2025/40 sets three simultaneous thresholds: 25 ppb maximum for any single non-polymeric PFAS, 250 ppb maximum for the sum of targeted non-polymeric PFAS, and 50 ppm (50 mg/kg) maximum for total PFAS including polymeric PFAS (often screened via Total Fluorine testing).'
        },
        {
          question: 'Are "compostable" sugarcane bagasse takeout bowls automatically PFAS-free?',
          answer: 'No. Historically, many molded fiber and bagasse bowls relied on fluorinated greaseproofing treatments to hold hot soups and oily foods without leaking. Today, certifications like BPI or explicit <50 ppm Total Organic Fluorine (TOF) verification are required to confirm PFAS-free compliance.'
        },
        {
          question: 'Is it safe to microwave leftovers inside a molded fiber takeout bowl?',
          answer: 'No. Reheating high-fat or moist food in disposable fiber bowls drives temperatures above 70°C–95°C, where steam and lipids accelerate migration of barrier chemistries, adhesives, or residual non-intentionally added substances. Always transfer leftovers to borosilicate glass or ceramic plates first.'
        },
        {
          question: 'What does Total Fluorine (TF) screening above 50 ppm mean for packaging?',
          answer: 'Under PPWR compliance protocols, if Total Fluorine screening exceeds 50 mg/kg (50 ppm), manufacturers and importers must provide technical documentation or secondary speciation testing (such as pyrolysis-GC/MS) proving the fluorine comes from safe inorganic salts rather than restricted PFAS.'
        }
      ],
      relatedTools: [
        { name: 'Kitchenware Toxic Leaching & PFAS Risk Scorecard', url: '/tools/toxic-leaching-scorecard/' },
        { name: 'Food Contact Chemical Migration Predictor', url: '/tools/food-contact-migration-predictor/' },
        { name: 'Microwave Popcorn Bag PFOA / PFAS Modeler', url: '/tools/microwave-popcorn-pfas-modeler/' }
      ]
    },
    {
      slug: 'cooking-oil-smoke-point-myth-evoo-avocado-adulteration-safety',
      title: 'The Smoke Point Myth & Avocado Oil Fraud: De Alzaa (2018), UC Davis Purity Tests & 4-HNE / Acrolein Safety',
      category: 'food-safety',
      excerpt: 'Why Extra Virgin Olive Oil outperforms higher-smoke-point polyunsaturated seed oils against cytotoxic 4-HNE and IARC Group 2A acrolein (De Alzaa et al., 2018), plus UC Davis findings exposing 70%–82% avocado oil rancidity and adulteration.',
      date: '2026-11-27',
      readTime: '16 min read',
      author: 'IsItKitchenSafe',
      intro: 'Every home cook has heard the rule: never fry with Extra Virgin Olive Oil (EVOO) because its ~375°F–410°F (190°C–210°C) smoke point is lower than refined canola or soybean oil, and always buy avocado oil for 500°F searing. Yet analytical lipid chemistry and independent supermarket testing dismantle both assumptions. Controlled thermal degradation research shows smoke point poorly predicts toxic aldehyde formation, while UC Davis audits reveal that most retail avocado oil bottles on U.S. grocery shelves are either already oxidized or silently cut with cheaper seed oils.',
      sections: [
        {
          title: '1. De Alzaa et al. (2018): Why Smoke Point Fails to Predict Toxic Oxidation',
          type: 'fact',
          content: 'In a landmark 2018 study published in Acta Scientific Nutritional Health, Florencia de Alzaa, Claudia Guillaume, and Leandro Ravetti heated 10 common commercial cooking oils at frying temperatures (up to 240°C / 464°F for 20 minutes and 180°C for 6 hours) and measured Total Polar Materials (TPM), oxidative stability, and secondary breakdown aldehydes. Crucially, Extra Virgin Olive Oil—despite its lower smoke point (~190°C–210°C)—generated the lowest levels of toxic polar compounds and aldehydes of all tested oils, dramatically outperforming higher-smoke-point polyunsaturated seed oils such as grapeseed, canola, and rice bran oil. Its high monounsaturated oleic acid content (70%–80%) and endogenous antioxidant polyphenols (hydroxytyrosol, oleocanthal, tocopherols) quench free-radical chain reactions before triglycerides snap.',
          boxText: 'THERMAL STABILITY TRUTH (DE ALZAA 2018): Polyphenol-rich EVOO generates fewer toxic polar compounds and aldehydes at pan-frying temperatures (180°C–210°C) than high-smoke-point polyunsaturated seed oils.'
        },
        {
          title: '2. Cytotoxic 4-HNE, MDA & IARC Group 2A Acrolein Fumes',
          type: 'warning',
          content: 'When polyunsaturated linoleic and linolenic fatty acids (PUFAs) overheat past their oxidative threshold, free-radical peroxidation generates lipid hydroperoxides that cleave into reactive cytotoxic aldehydes—chiefly 4-hydroxynonenal (4-HNE) and malondialdehyde (MDA) absorbed in fried food, plus airborne acrolein vapor when glycerol backbones dehydrate into visible blue smoke. The International Agency for Research on Cancer (IARC) classifies acrolein as Group 2A (probably carcinogenic to humans), and indoor cooking smoke PM2.5 + acrolein causes acute respiratory airway irritation—making an exterior-ducted range hood essential whenever searing above 200°C.',
          boxText: 'ACROLEIN & 4-HNE HAZARD: Visible blue oil smoke releases IARC Group 2A acrolein fumes and forms 4-HNE inside PUFA-rich oils; always run an outdoor-vented range hood during high-heat searing.'
        },
        {
          title: '3. UC Davis Wang Lab Audits: 82% (2020) & ~70% (2023) Avocado Oil Failure',
          type: 'warning',
          content: 'Authentic refined avocado oil boasts a genuinely high ~480°F–520°F (249°C–271°C) smoke point and oleic stability—making true pure avocado oil ideal for >220°C cast-iron steak searing. However, landmark investigations led by Prof. Selina Wang at UC Davis revealed systemic market fraud: in 2020, 82% of tested retail U.S. avocado oil bottles were either rancid before their best-by date or adulterated with cheap soybean, safflower, or sunflower oil (three bottles labeled "100% pure" contained nearly 100% soybean oil). A 2023 UC Davis follow-up on private-label store brands found nearly 70% still failed purity or rancidity benchmarks, prompting new Codex Alimentarius fatty-acid and sterol standardization.',
          boxText: 'AVOCADO OIL FRAUD ALERT: UC Davis testing found 82% (2020) and ~70% (2023) of retail avocado oils were rancid or spiked with high-PUFA soybean/safflower oils that oxidize faster under high heat.'
        },
        {
          title: '4. Soy Lecithin Aerosol Sprays: Polymerized Varnish Above 175°C',
          type: 'warning',
          content: 'Aerosol nonstick cooking sprays add another hidden heat failure: emulsifiers like soy lecithin and dimethyl silicone anti-foamers begin thermally polymerizing around 350°F (175°C)—well below sautéing or air-frying temperatures. On PTFE nonstick and sol-gel ceramic pans, lecithin bakes into a permanent, hydrophobic amber resin varnish that ruins food release, while propane/isobutane aerosol propellants pose flash-ignition flare hazards near gas flames and glowing air fryer coils.',
          boxText: 'SKIP PROPELLANT SPRAYS ON NONSTICK: Soy lecithin sprays bake into gummy varnish above 175°C, ruining ceramic and PTFE coatings; use a pure refillable glass oil mister with pure EVOO or verified avocado oil.'
        },
        {
          title: '5. How to Choose, Store & Fry Safely Across Cooking Temperatures',
          type: 'success',
          content: 'Match oil chemistry to heat zone and protect bottles from light oxidation: First, use cold-pressed Extra Virgin Olive Oil in dark tinted glass or tin for 90% of home cooking (salads, gentle sautés, roasting, and pan-frying up to 210°C / 410°F), buying harvest-dated bottles stored in a cool dark pantry away from stove heat. Second, for >220°C (430°F+) cast-iron searing or wok stir-frying, choose high-oleic sunflower/safflower oil, ghee, or third-party purity-verified refined avocado oil (looking for clear dark glass and traceable harvest/origin seals). Third, never reuse deep-frying oil once it darkens, foams persistently, or drops in smoke point, and turn on an exterior-vented range hood before preheating.',
          boxText: 'SAFE FRYING CHEAT SHEET: Use fresh harvest-dated EVOO up to 210°C (410°F); use verified pure avocado oil or high-oleic oil for >220°C searing; store in cool dark cupboards and vent smoke outdoors.'
        }
      ],
      conclusion: 'Replacing the outdated "smoke point only" myth with De Alzaa et al. (2018) oxidative stability science and UC Davis authenticity safeguards eliminates unnecessary exposure to toxic 4-HNE, MDA, and acrolein fumes: cook daily meals in fresh dark-bottled EVOO up to 210°C, verify avocado oil sourcing for >220°C searing, avoid aerosol lecithin sprays, and always run your exhaust hood.',
      faqs: [
        {
          question: 'Is Extra Virgin Olive Oil actually safe for pan-frying and roasting?',
          answer: 'Yes. De Alzaa et al. (2018) proved that despite having a moderate ~375°F–410°F (190°C–210°C) smoke point, polyphenol-rich EVOO resists thermal breakdown better than refined canola, grapeseed, or soybean oil, producing significantly lower polar compounds and toxic 4-HNE/acrolein aldehydes during normal pan-frying and roasting.'
        },
        {
          question: 'Why did UC Davis find so many avocado oils to be rancid or fake?',
          answer: 'Researchers led by Prof. Selina Wang at UC Davis found that 82% of tested retail avocado oils in 2020 and nearly 70% of store-brand bottles in 2023 were either oxidized before expiration or adulterated with cheaper high-PUFA soybean, safflower, or sunflower oils due to lax historical enforcement standards.'
        },
        {
          question: 'What toxins are released when cooking oil starts smoking?',
          answer: 'Visible blue oil smoke indicates triglyceride hydrolysis and glycerol dehydration, releasing IARC Group 2A acrolein vapors alongside volatile aldehydes and PM2.5 particulates while generating cytotoxic 4-hydroxynonenal (4-HNE) and malondialdehyde (MDA) inside the remaining oil.'
        },
        {
          question: 'Why do aerosol cooking sprays ruin ceramic and nonstick pans?',
          answer: 'Aerosol sprays contain soy lecithin emulsifiers and propellants; above 350°F (175°C), soy lecithin polymerizes into a sticky amber glaze that binds tightly to ceramic sol-gel and PTFE coatings, destroying nonstick release.'
        },
        {
          question: 'How should I store EVOO and avocado oil to prevent rancidity?',
          answer: 'Buy oils packaged in opaque dark green glass, UV-coated bottles, or metal tins with recent harvest dates, cap tightly immediately after pouring, and store in a cool, dark cupboard—never right next to a hot stove or sunny kitchen window.'
        }
      ],
      relatedTools: [
        { name: 'Culinary Oil Smoke Point & Carcinogenic Aldehyde Simulator', url: '/tools/culinary-oil-smoke-point-simulator/' },
        { name: 'Cooking Oil Smoke Point & Safe Frying Temp Finder', url: '/tools/cooking-oil-smoke-point-finder/' },
        { name: 'Air Fryer vs. Deep Fryer Lipid Oxidation & 4-HNE Modeler', url: '/tools/air-fryer-lipid-oxidation-modeler/' }
      ]
    }
  ],
  es: [
    {
      slug: 'bamboo-utensil-glue-mineral-oil-desiccation-biofilm-safety',
      title: 'Cucharas de Bambú vs. Madera Dura, Aceite Mineral y Biopelículas: Estudio Coatings (2023), Hidrólisis de Colas y Enterotoxina de Estafilococo',
      category: 'materials',
      excerpt: 'Cómo el estudio Coatings (2023) armoniza el curado con aceite mineral y la desecación capilar de UC Davis, por qué las colas del bambú se abren en el lavavajillas y por qué la Enterotoxina A resiste 100 °C.',
      date: '2026-11-27',
      readTime: '16 min de lectura',
      author: 'IsItKitchenSafe',
      intro: 'Quienes cocinan en casa suelen recibir mensajes opuestos sobre las cucharas de madera y bambú: unos afirman que la madera mata bacterias por sí sola, otros recomiendan engrasarlas con aceite de oliva y millones las meten en el lavavajillas. Estudios revisados por pares de física maderera y microbiología —incluyendo los ensayos capilares de UC Davis, MDPI Coatings (2023) y la termoestabilidad de enterotoxinas estafilocócicas— aclaran qué maderas se agrietan, qué colas se degradan y cuándo desechar un utensilio.',
      sections: [
        {
          title: '1. Desecación Capilar (UC Davis) vs. Coatings (2023): El Matiz del Aceite',
          type: 'fact',
          content: 'Las investigaciones clásicas de Ak y Cliver en UC Davis demostraron que maderas duras intactas como el arce azucarero (Acer saccharum) y el haya europea (Fagus sylvatica) succionan humedad por capilaridad hacia vasos internos (<60 µm), desecando el 99,9% de bacterias superficiales más rápido que el plástico rayado. Sin embargo, un estudio de 2023 en MDPI Coatings (Vega Gutierrez et al., DOI: 10.3390/coatings13040752) inoculó tablas tratadas con aceite mineral y de linaza con Salmonella y Listeria, observando mayor retención bacteriana superficial frente a madera sin sellar porque el aceite tapona la succión capilar inmediata. La síntesis práctica es clara: cure ligeramente con aceite mineral USP para evitar grietas profundas por humedad, pero lave siempre al instante con agua caliente y jabón tras tocar carne cruda.',
          boxText: 'EQUILIBRIO CIENTÍFICO: El aceite mineral USP evita grietas estructurales, pero Coatings (2023) confirma que reduce la absorción pasiva: lave siempre de inmediato con detergente tras contacto con proteínas crudas.'
        },
        {
          title: '2. Bambú Moso Laminado: Hidrólisis de Adhesivos y Lavavajillas (pH 10,5–11,5)',
          type: 'warning',
          content: 'El bambú Moso (Phyllostachys edulis) no es madera maciza sino un compuesto laminado unido con resinas de urea-formaldehído, melamina-formaldehído o acetato de polivinilo (PVA). El lavado automático a 65 °C con detergentes alcalinos (pH 10,5–11,5) seguido de secado a 75 °C reblandece la lignina (~65 °C en húmedo) y genera en maderas como el haya una contracción tangencial del 11,8% frente al 5,8% radial (relación ~2:1), abriendo fisuras longitudinales en más de un 800%. En el bambú laminado, el agua alcalina caliente hidroliza las juntas de cola creando cavidades huecas imposibles de higienizar.',
          boxText: 'PROHIBIDO EL LAVAVAJILLAS: Los ciclos a 65 °C alcalinos y secado a 75 °C multiplican las grietas y deslaminan las colas del bambú convirtiéndolo en incubadora bacteriana.'
        },
        {
          title: '3. Por Qué el Aceite de Oliva Se Enrancia y el Aceite Mineral USP Protege',
          type: 'warning',
          content: 'Tratar cucharas de madera con aceite de oliva, girasol o canola introduce triglicéridos poliinsaturados en los poros. En contacto con el oxígeno y el calor, sufren peroxidación lipídica generando hexanal, malondialdehído y un barniz gomoso y rancio que nutre mohos (Aspergillus) y bacterias. Por el contrario, el aceite mineral blanco grado USP (alcanos saturados C15–C50) combinado con cera de abejas carece de dobles enlaces, jamás se enrancia y reduce la absorción de agua en un 88–95%.',
          boxText: 'REGLA DE ACEITES: Nunca cure madera con aceite de oliva o cocina; use exclusivamente aceite mineral blanco USP y cera de abejas pura.'
        },
        {
          title: '4. Patógenos VBNC Latentes y Enterotoxina A Termoestable a 100 °C',
          type: 'warning',
          content: 'Cuando una grieta supera los 100 µm, la tensión superficial impide que la espuma del jabón penetre. Salmonella, Listeria y E. coli secretan polisacáridos (EPS) formando biopelículas en estado viable no cultivable (VBNC) durante semanas hasta rehidratarse en sopas o papillas. Más grave aún: Staphylococcus aureus puede liberar Enterotoxina Estafilocócica A (SEA) dentro de fisuras engrasadas. Aunque 70 °C matan la bacteria viva, la toxina SEA ya formada resiste más de 30 minutos de ebullición a 100 °C, provocando vómitos agudos incluso tras recalentar la comida.',
          boxText: 'TOXINA TERMOESTABLE: Hervir un guiso no destruye la Enterotoxina A estafilocócica preformada; aparte cualquier cuchara agrietada de salsas lácteas y comidas frías.'
        },
        {
          title: '5. Secado Vertical (Aw < 0,65), Escaldado de 3 Minutos y Regla de 1 mm',
          type: 'success',
          content: 'Aplique cuatro reglas estrictas: 1) Use espátulas de silicona o acero 304 para pollo y carne cruda. 2) Si una cuchara de madera toca jugo de pollo crudo, lávela con jabón caliente y sumerja la cabeza 3 minutos en agua hirviendo (100 °C) o aplique peróxido de hidrógeno al 3% durante 10 minutos. 3) Seque en posición vertical en escurridores abiertos y ventilados para bajar la actividad de agua bajo Aw 0,65 en 90 minutos, nunca apiñada en botes húmedos ni cajones oscuros. 4) Regla de 1 Milímetro: deseche cualquier utensilio con fisuras ≥1 mm, juntas de bambú abiertas o manchas negras de moho.',
          boxText: 'REGLA DE RETIRO DE 1 MM: Deseche cualquier cuchara de madera con grietas longitudinales ≥1 mm, bambú despegado o moho incrustado en la veta.'
        }
      ],
      conclusion: 'Integrando la física capilar de UC Davis con MDPI Coatings (2023), la rutina más segura consiste en elegir madera dura maciza de grano cerrado (arce u olivo) en lugar de bambú encolado, prohibir el lavavajillas, curar suavemente con aceite mineral USP, secar en vertical y retirar toda cuchara con grietas de 1 mm.',
      faqs: [
        {
          question: '¿Qué demostró el estudio de Coatings (2023) sobre el aceite mineral en madera?',
          answer: 'Vega Gutierrez et al. (MDPI Coatings, 2023) comprobaron que los acabados con aceite mineral o linaza sellan los poros de la madera, reduciendo la succión capilar rápida que retira Salmonella y Listeria de la superficie en comparación con madera seca sin sellar. Por ello debe aplicarse aceite mineral USP para evitar grietas, lavando siempre con jabón caliente justo después de manipular carne cruda.'
        },
        {
          question: '¿Por qué las cucharas de bambú laminado fallan antes en el lavavajillas?',
          answer: 'El bambú laminado une tiras mediante resinas de urea-formaldehído, melamina o PVA. El agua alcalina a 65 °C (pH 10,5–11,5) hidroliza esas líneas de adhesivo, abriendo hendiduras huecas que acumulan bacterias y humedad.'
        },
        {
          question: '¿Hervir una cuchara de madera destruye las toxinas del estafilococo?',
          answer: 'Hervir 3 minutos elimina bacterias vivas tras un contacto accidental, pero si Staphylococcus aureus proliferó en grietas sucias y produjo Enterotoxina A, dicha toxina resiste más de 30 minutos a 100 °C. Una cuchara agrietada o aceitosa debe desecharse.'
        },
        {
          question: '¿Por qué no debe usarse aceite de oliva o girasol en cucharas de madera?',
          answer: 'Porque las grasas poliinsaturadas se oxidan con el aire formando un barniz pegajoso y rancio (malondialdehído y hexanal) que alimenta mohos y biopelículas. Solo debe emplearse aceite mineral USP o cera de abejas.'
        },
        {
          question: '¿Cómo deben secarse y guardarse las cucharas de madera?',
          answer: 'En posición vertical con buena circulación de aire para que la actividad de agua (Aw) baje de 0,65 en 90 minutos. Guardarlas húmedas en botes cerámicos cerrados o cajones oscuros mantiene Aw > 0,85 durante más de 12 horas.'
        }
      ],
      relatedTools: [
        { name: 'Modelador de Biopelículas en Cucharas de Madera', url: '/es/tools/wooden-utensil-biofilm-modeler/' },
        { name: 'Modelador de Patógenos en Tablas de Madera', url: '/es/tools/wooden-cutting-board-pathogen-modeler/' },
        { name: 'Cuidado de Cuchillos y Selector de Tablas', url: '/es/tools/knife-care-cutting-board-matcher/' }
      ]
    },
    {
      slug: 'molded-fiber-takeout-bowls-eu-ppwr-pfas-ban-2026-safety',
      title: 'Boles de Fibra Moldeada "Compostables" y Prohibición PFAS PPWR UE (2026): Límites de 25 ppb / 50 ppm y Recalentamiento Seguro',
      category: 'materials',
      excerpt: 'Cómo el Reglamento (UE) 2025/40 (en vigor el 12 de agosto de 2026) limita los PFAS en envases alimentarios a 25 ppb / 250 ppb / 50 ppm y por qué calentar comida en envases de fibra acelera la migración.',
      date: '2026-11-27',
      readTime: '15 min de lectura',
      author: 'IsItKitchenSafe',
      intro: 'Los boles "compostables" de bagazo de caña, cajas de fibra moldeada y envoltorios antigrasa reemplazaron al poliestireno, pero análisis químicos detectaron persistentemente compuestos perfluoroalquilados (PFAS) usados como barrera hidrófoba. El 12 de agosto de 2026 entraron en vigor los límites vinculantes de la Unión Europea bajo el Artículo 5(5) del Reglamento (UE) 2025/40 (PPWR), sin prórroga para existencias acumuladas.',
      sections: [
        {
          title: '1. Límites del Artículo 5(5) del PPWR (Desde el 12 de Agosto de 2026)',
          type: 'fact',
          content: 'Conforme al Artículo 5(5) del Reglamento (UE) 2025/40 (PPWR), todo envase en contacto con alimentos comercializado en la UE desde el 12 de agosto de 2026 debe cumplir simultáneamente tres límites: (1) 25 ppb (25 µg/kg) máximo para cualquier PFAS individual no polimérico; (2) 250 ppb máximo para la suma de PFAS no poliméricos objetivo; y (3) 50 ppm (50 mg/kg) máximo para el total de PFAS incluyendo PFAS poliméricos. Si el cribado de Flúor Total supera 50 mg/kg, el fabricante debe acreditar mediante especiación analítica (como pirólisis-GC/MS) que el flúor no procede de PFAS restringidos, además de respetar el tope de 100 mg/kg para plomo, cadmio, mercurio y cromo hexavalente.',
          boxText: 'LÍMITES LEGALES PPWR (12 AGO 2026): Máximo 25 ppb PFAS individual, 250 ppb suma dirigida y 50 ppm PFAS totales (incluidos poliméricos) en envases alimentarios.'
        },
        {
          title: '2. Por Qué los Boles "Compostables" de Bagazo Llevaban PFAS',
          type: 'warning',
          content: 'La pulpa vegetal prensada sin tratar absorbe caldos calientes y aceites en minutos. Para dar resistencia antigrasa, la industria rociaba polímeros de fluorotelómeros sobre la pasta húmeda. Aunque la FDA estadounidense culminó retiradas voluntarias en febrero de 2024, las existencias heredadas y suministros importados sin certificar mantuvieron la exposición hasta el corte estatutario del PPWR europeo de 2026.',
          boxText: 'TRAMPA DEL ECO-POSTUREO: Un sello "100% Compostable" no garantiza ausencia de PFAS si no cuenta con certificación BPI o Flúor Orgánico Total (<50 ppm).'
        },
        {
          title: '3. Grasas Calientes, Vapor en Microondas y Migración de Fluorotelómeros',
          type: 'warning',
          content: 'Calentar comida grasienta (quesos fundidos, salsas cremosas o salteados aceitosos) en microondas dentro de un bol de fibra moldeada multiplica la migración. Al superar 70 °C–95 °C, los lípidos actúan como disolventes extractivos mientras el vapor hincha la celulosa, liberando ácidos perfluorocarboxílicos de cadena corta (como PFHxA) y alcoholes fluorotelómeros volátiles (FTOH).',
          boxText: 'NUNCA USE MICROONDAS CON ENVASES DE FIBRA: El vapor y los aceites >70 °C extraen aditivos de barrera y compuestos fluorados hacia la comida.'
        },
        {
          title: '4. Alternativas Sin PFAS: Barreras Acuosas, Arcilla y Límites del PLA',
          type: 'tip',
          content: 'Para cumplir el Reglamento (UE) 2025/40, el sector migra hacia dispersiones acuosas, recubrimientos de arcilla/silicatos y laminados finos de PLA o PHA. No obstante, los revestimientos finos de PLA se reblandecen a 55 °C–60 °C y el Reglamento (UE) 2026/2412 limita su contacto prolongado por encima de 40 °C.',
          boxText: 'BARRERAS DE NUEVA GENERACIÓN: Priorice envases certificados libres de PFAS mediante barreras minerales y evite mantener comidas >60 °C en cajas laminadas con PLA.'
        },
        {
          title: '5. Protocolo Doméstico: Trasvase Inmediato a Vidrio Borosilicato o Cerámica',
          type: 'success',
          content: 'Al recibir comida a domicilio caliente en boles de pulpa o cajas antigrasa: transfiera inmediatamente los platos aceitosos a platos de gres cerámico o tápers de vidrio borosilicato 3.3 en los primeros 15 minutos, no recaliente jamás dentro de envases desechables de fibra o papel, y utilice envases reutilizables herméticos de vidrio o acero 304.',
          boxText: 'HÁBITO CERO MIGRACIÓN: Pase la comida caliente y aceitosa a platos de cerámica o vidrio borosilicato antes de comer o recalentar en microondas.'
        }
      ],
      conclusion: 'La entrada en vigor el 12 de agosto de 2026 del Reglamento (UE) 2025/40 (PPWR) con límites de 25 ppb / 250 ppb / 50 ppm cierra la brecha de los envases "compostables" tratados con PFAS. En casa, trasvasar los pedidos calientes a cerámica o vidrio borosilicato antes de recalentar elimina esta vía de exposición.',
      faqs: [
        {
          question: '¿Cuándo entraron en vigor los límites de PFAS del PPWR europeo en envases alimentarios?',
          answer: 'El 12 de agosto de 2026, bajo el Artículo 5(5) del Reglamento (UE) 2025/40 sobre envases y residuos de envases (PPWR), sin exención para agotar inventarios antiguos.'
        },
        {
          question: '¿Cuáles son los topes exactos del Reglamento (UE) 2025/40 para PFAS?',
          answer: '25 ppb máximo para cualquier PFAS no polimérico individual, 250 ppb para la suma de PFAS no poliméricos objetivo y 50 ppm (50 mg/kg) para el total de PFAS incluidos los poliméricos.'
        },
        {
          question: '¿Todos los boles compostables de bagazo de caña son libres de PFAS?',
          answer: 'No necesariamente. Muchos envases moldeados históricos usaban fluoropolímeros antigrasa. Busque certificaciones explícitas sin PFAS o análisis de Flúor Orgánico Total inferior a 50 ppm.'
        },
        {
          question: '¿Es peligroso recalentar sobras en el microondas dentro de un bol de fibra desechable?',
          answer: 'Sí. El calor (>70 °C), el vapor y la grasa aceleran la migración de aditivos de barrera, resinas y posibles impurezas fluoradas. Trasvase siempre la comida a vidrio borosilicato o cerámica.'
        },
        {
          question: '¿Qué ocurre si un envase supera 50 ppm en la prueba de Flúor Total?',
          answer: 'El operador debe aportar documentación técnica y análisis de especiación (como pirólisis-GC/MS) que demuestren que el flúor procede de sales inorgánicas permitidas y no de PFAS restringidos.'
        }
      ],
      relatedTools: [
        { name: 'Evaluador de Lixiviación Tóxica y PFAS en Cocina', url: '/es/tools/toxic-leaching-scorecard/' },
        { name: 'Predictor Cinético de Migración en Contacto Alimentario', url: '/es/tools/food-contact-migration-predictor/' },
        { name: 'Modelador de Bolsas de Palomitas y PFAS', url: '/es/tools/microwave-popcorn-pfas-modeler/' }
      ]
    },
    {
      slug: 'cooking-oil-smoke-point-myth-evoo-avocado-adulteration-safety',
      title: 'El Mito del Punto de Humo y el Fraude del Aceite de Aguacate: Estudio De Alzaa (2018), UC Davis y Toxicidad por 4-HNE y Acroleína',
      category: 'food-safety',
      excerpt: 'Por qué el aceite de oliva virgen extra supera a los aceites de semillas de alto punto de humo frente a 4-HNE y acroleína IARC 2A (De Alzaa et al., 2018), y qué reveló UC Davis sobre el 70%–82% de aceites de aguacate adulterados o rancios.',
      date: '2026-11-27',
      readTime: '16 min de lectura',
      author: 'IsItKitchenSafe',
      intro: 'La regla popular afirma que nunca debe freírse con aceite de oliva virgen extra (AOVE) por su punto de humo (~190–210 °C) y que conviene comprar aceite de aguacate para sellar a alta temperatura. Sin embargo, la química lipídica y los análisis de laboratorio independientes desmienten ambos dogmas: el punto de humo no predice la formación de aldehídos tóxicos, y estudios de UC Davis revelaron que la mayoría del aceite de aguacate comercial estaba rancio o adulterado.',
      sections: [
        {
          title: '1. De Alzaa et al. (2018): El Punto de Humo No Predice la Estabilidad Térmica',
          type: 'fact',
          content: 'En su estudio de 2018 en Acta Scientific Nutritional Health, De Alzaa, Guillaume y Ravetti calentaron 10 aceites comerciales (hasta 240 °C durante 20 minutos y 180 °C durante 6 horas) midiendo Compuestos Polares Totales (TPM) y aldehídos oxidativos. El AOVE —pese a su punto de humo moderado (~190–210 °C)— produjo los niveles más bajos de compuestos polares y aldehídos tóxicos, superando ampliamente a aceites de semillas poliinsaturados de mayor punto de humo como pepita de uva, canola o salvado de arroz gracias a su riqueza en ácido oleico monoinsaturado y polifenoles antioxidantes.',
          boxText: 'ESTABILIDAD TÉRMICA REAL (DE ALZAA 2018): El AOVE rico en polifenoles genera menos compuestos polares y aldehídos tóxicos entre 180 °C y 210 °C que aceites refinados poliinsaturados.'
        },
        {
          title: '2. Aldehídos Citotóxicos 4-HNE, MDA y Vapores de Acroleína IARC Grupo 2A',
          type: 'warning',
          content: 'Al sobrecalentar ácidos grasos poliinsaturados (PUFA), la peroxidación lipídica produce hidroperóxidos que se escinden en aldehídos citotóxicos como 4-hidroxinonenal (4-HNE) y malondialdehído (MDA) en el alimento, además de acroleína gaseosa cuando el glicerol se deshidrata en humo azul. La IARC clasifica la acroleína en el Grupo 2A (probable carcinógeno humano), por lo que es imprescindible encender la campana extractora con salida al exterior al sellar a más de 200 °C.',
          boxText: 'ALERTA DE ACROLEÍNA Y 4-HNE: El humo azul libera acroleína IARC 2A y forma 4-HNE en aceites ricos en PUFA; active siempre la campana de extracción exterior.'
        },
        {
          title: '3. Auditorías UC Davis (Wang Lab): 82% en 2020 y ~70% en 2023 de Fallo en Aguacate',
          type: 'warning',
          content: 'El aceite de aguacate refinado auténtico soporta ~249–271 °C con gran estabilidad oleica. Sin embargo, los análisis dirigidos por la Dra. Selina Wang en UC Davis demostraron en 2020 que el 82% de los aceites de aguacate evaluados en EE. UU. estaban rancios antes de caducar o adulterados con aceite barato de soja o cártamo (tres botellas "100% puro" eran casi totalmente soja). Un seguimiento de 2023 en marcas blancas halló que casi el 70% seguía incumpliendo pureza o frescura.',
          boxText: 'FRAUDE EN ACEITE DE AGUACATE: UC Davis detectó que el 82% (2020) y ~70% (2023) de aceites de aguacate analizados estaban rancios o adulterados con aceites de soja/cártamo.'
        },
        {
          title: '4. Sprays en Aerosol con Lecitina de Soja: Barniz Polimerizado Sobre 175 °C',
          type: 'warning',
          content: 'Los sprays antiadherentes en aerosol contienen emulsionantes como lecitina de soja y antiespumantes de silicona que se polimerizan por encima de 175 °C (350 °F), formando un barniz ámbar gomoso que arruina revestimientos PTFE y cerámicos, además de generar riesgo de llamarada por propelentes de propano/isobutano cerca de llamas o freidoras de aire.',
          boxText: 'EVITE SPRAYS CON LECITINA EN ANTIADHERENTES: Hornear lecitina por encima de 175 °C crea un barniz adherente irreversible; use un pulverizador de vidrio recargable con aceite puro.'
        },
        {
          title: '5. Guía Práctica de Selección, Almacenamiento y Fritura Segura',
          type: 'success',
          content: '1) Use AOVE fresco en vidrio oscuro o lata para el 90% de cocciones diarias hasta 210 °C, guardado lejos del calor de los fogones. 2) Para sellado intenso en hierro fundido (>220 °C), utilice aceite de girasol/cártamo alto oleico, ghee o aceite de aguacate con trazabilidad y pureza verificada. 3) Deseche aceites reutilizados que oscurezcan o hagan espuma y encienda la campana exterior antes de calentar.',
          boxText: 'REGLA DE TEMPERATURAS: AOVE fresco hasta 210 °C; aceite de aguacate verificado o alto oleico para >220 °C; envases opacos lejos de la estufa.'
        }
      ],
      conclusion: 'Dejar atrás el mito exclusivo del punto de humo y aplicar la estabilidad oxidativa de De Alzaa (2018) junto al control de pureza de UC Davis reduce drásticamente el 4-HNE, el MDA y los vapores de acroleína: cocine diariamente con AOVE fresco hasta 210 °C, verifique el origen del aceite de aguacate para sellados >220 °C y evite sprays con lecitina.',
      faqs: [
        {
          question: '¿Es seguro freír o saltear con aceite de oliva virgen extra?',
          answer: 'Sí. De Alzaa et al. (2018) demostraron que, pese a su punto de humo de 190–210 °C, el AOVE rico en polifenoles produce menos compuestos polares y aldehídos tóxicos (4-HNE y acroleína) que los aceites de semillas poliinsaturados de mayor punto de humo.'
        },
        {
          question: '¿Qué halló la Universidad de California Davis sobre el aceite de aguacate?',
          answer: 'Los estudios del laboratorio de Selina Wang revelaron que el 82% de las muestras comerciales en 2020 y casi el 70% de marcas de distribuidor en 2023 estaban oxidadas/rancias o adulteradas con aceites más baratos como soja o cártamo.'
        },
        {
          question: '¿Qué tóxicos se liberan cuando el aceite humea en la sartén?',
          answer: 'El humo azul indica degradación térmica y liberación de vapores de acroleína (clasificada por la IARC como Grupo 2A, probable carcinógeno) además de aldehídos citotóxicos como 4-HNE y MDA.'
        },
        {
          question: '¿Por qué los sprays de cocina dañan las sartenes cerámicas y de teflón?',
          answer: 'La lecitina de soja añadida en los aerosoles se polimeriza a partir de 175 °C formando una capa pegajosa color ámbar imposible de limpiar sin rayar el revestimiento antiadherente.'
        },
        {
          question: '¿Cómo conservar correctamente el AOVE y el aceite de aguacate?',
          answer: 'En botellas de vidrio verde oscuro o latas opacas con fecha de cosecha reciente, bien tapadas y guardadas en un armario fresco y oscuro alejado del calor del horno o la placa.'
        }
      ],
      relatedTools: [
        { name: 'Simulador de Punto de Humo y Aldehídos Carcinógenos', url: '/es/tools/culinary-oil-smoke-point-simulator/' },
        { name: 'Buscador de Punto de Humo y Fritura Segura', url: '/es/tools/cooking-oil-smoke-point-finder/' },
        { name: 'Modelador de Oxidación Lipídica en Freidora de Aire', url: '/es/tools/air-fryer-lipid-oxidation-modeler/' }
      ]
    }
  ],
  pt: [
    {
      slug: 'bamboo-utensil-glue-mineral-oil-desiccation-biofilm-safety',
      title: 'Colheres de Bambu vs. Madeira Maciça, Óleo Mineral e Biofilmes: Estudo Coatings (2023), Hidrólise de Colas e Enterotoxina de Estafilococos',
      category: 'materials',
      excerpt: 'Como o estudo Coatings (2023) concilia a proteção do óleo mineral com a dessecação capilar da UC Davis, por que colas de bambu se abrem no lava-louças e por que a Enterotoxina A resiste a 100°C.',
      date: '2026-11-27',
      readTime: '16 min de leitura',
      author: 'IsItKitchenSafe',
      intro: 'Quem cozinha recebe conselhos contraditórios sobre colheres de pau e bambu: uns dizem que a madeira mata bactérias sozinha, outros passam azeite de oliva e muitos colocam no lava-louças. Estudos revisados por pares da UC Davis, MDPI Coatings (2023) e de termoestabilidade de toxinas estafilocócicas explicam quais madeiras racham, quais colas se degradam e quando descartar o utensílio.',
      sections: [
        {
          title: '1. Dessecação Capilar (UC Davis) vs. Coatings (2023): A Nuance do Óleo Mineral',
          type: 'fact',
          content: 'Estudos clássicos de Ak e Cliver na UC Davis provaram que madeiras duras íntegras como ácer açucareiro e faia europeia sugam umidade pelos vasos capilares (<60 µm), desidratando 99,9% das bactérias superficiais. Porém, Vega Gutierrez et al. (MDPI Coatings, 2023, DOI: 10.3390/coatings13040752) demonstraram que óleos selam os poros e mantêm mais bactérias recuperáveis na superfície antes da lavagem. A síntese científica é simples: aplique óleo mineral USP para impedir rachaduras profundas por umidade, mas lave imediatamente com água quente e detergente após contato com carne crua.',
          boxText: 'EQUILÍBRIO CIENTÍFICO: Óleo mineral USP previne fissuras estruturais, enquanto Coatings (2023) mostra que superfícies oleadas reduzem a absorção passiva — lave sempre após carnes cruas.'
        },
        {
          title: '2. Bambu Mosso Laminado: Hidrólise de Colas no Lava-Louças (pH 10,5–11,5)',
          type: 'warning',
          content: 'O bambu Mosso não é madeira maciça, mas tiras prensadas com resinas de ureia-formaldeído, melamina ou PVA. Ciclos alcalinos a 65°C (pH 10,5–11,5) e secagem a 75°C amolecem a lignina e expandem fissuras em mais de 800% pela contração tangencial dupla à radial (11,8% vs. 5,8% na faia). No bambu, a cola se hidrolisa em frestas ocas impossíveis de esterilizar.',
          boxText: 'PROIBIDO NO LAVA-LOUÇAS: Água alcalina a 65°C e secagem a 75°C abrem rachaduras profundas e descolam juntas laminadas de bambu.'
        },
        {
          title: '3. Por Que o Azeite Rança Enquanto o Óleo Mineral USP Protege',
          type: 'warning',
          content: 'Óleos vegetais de cozinha (azeite, soja, canola) contêm ácidos graxos poli-insaturados que oxidam no ar formando verniz grudento e rançoso (malondialdeído e hexanal) que alimenta fungos e bactérias. Apenas o óleo mineral branco grau USP (alcanos saturados C15–C50) com cera de abelha veda a umidade em 88–95% sem jamais rançar.',
          boxText: 'REGRA DO ÓLEO: Jamais use azeite ou óleo culinário; utilize apenas óleo mineral puro grau USP e cera de abelha.'
        },
        {
          title: '4. Patógenos Dormentes (VBNC) e Enterotoxina A Estafilocócica a 100°C',
          type: 'warning',
          content: 'Fissuras acima de 100 µm impedem a penetração do sabão. Salmonella, Listeria e E. coli formam biofilmes protetores em estado latente (VBNC) por semanas. Além disso, Staphylococcus aureus em frestas gordurosas produz Enterotoxina A (SEA), que sobrevive a mais de 30 minutos de fervura a 100°C e provoca intoxicação aguda mesmo após reaquecer a comida.',
          boxText: 'TOXINA TERMOESTÁVEL: Ferver o alimento não destrói a Enterotoxina A pré-formada; afaste colheres rachadas de molhos, laticínios e papinhas.'
        },
        {
          title: '5. Secagem Vertical (Aw < 0,65), Fervura de 3 Minutos e Regra de 1 mm',
          type: 'success',
          content: '1) Reserve utensílios de silicone ou aço inox 304 para frango e carne crua. 2) Após contato acidental com carne crua, lave e ferva a ponta por 3 minutos (100°C) ou aplique peróxido de hidrogênio 3%. 3) Seque na vertical em local ventilado para reduzir Aw abaixo de 0,65 em 90 minutos. 4) Regra de 1 Milímetro: descarte colheres com rachaduras ≥1 mm, bambu descolado ou manchas pretas de mofo.',
          boxText: 'REGRA DE DESCARTE DE 1 MM: Descarte imediatamente colheres com fissuras ≥1 mm, juntas de bambu abertas ou mofo escuro incrustado.'
        }
      ],
      conclusion: 'Combinando a ciência capilar da UC Davis com MDPI Coatings (2023), prefira madeira dura maciça de grão fechado (ácer ou oliveira) em vez de bambu colado, jamais use lava-louças, condicione com óleo mineral USP, seque na vertical e descarte qualquer peça com rachaduras de 1 mm.',
      faqs: [
        {
          question: 'Um estudo de 2023 descobriu que óleo mineral retém mais bactérias na superfície da madeira?',
          answer: 'Sim, com contexto importante. Vega Gutierrez et al. (MDPI Coatings, 2023) mostraram que óleos selam os poros e reduzem a sucção capilar passiva comparada à madeira seca. Portanto, use óleo mineral USP para evitar rachaduras profundas, mas lave com sabão quente logo após tocar alimentos crus.'
        },
        {
          question: 'Por que colheres de bambu laminado estragam mais rápido no lava-louças?',
          answer: 'Porque são coladas com resinas como ureia-formaldeído ou PVA que se hidrolisam na água alcalina quente a 65°C, abrindo frestas profundas.'
        },
        {
          question: 'Ferver uma colher de pau elimina toxinas de estafilococos?',
          answer: 'Ferver por 3 minutos mata bactérias vivas após contato recente, mas a Enterotoxina A já formada por S. aureus em rachaduras sujas resiste a mais de 30 minutos a 100°C. Utensílios rachados devem ser descartados.'
        },
        {
          question: 'Por que não devo passar azeite ou óleo de soja na colher de pau?',
          answer: 'Óleos comestíveis sofrem peroxidação lipídica, ficando rançosos e pegajosos e servindo de nutriente para bactérias e fungos. Use apenas óleo mineral USP ou cera de abelha.'
        },
        {
          question: 'Qual a melhor forma de secar colheres de madeira?',
          answer: 'Em pé com espaçamento em escorredor arejado até que a atividade de água caia abaixo de Aw 0,65 em cerca de 90 minutos, evitando potes fechados ou gavetas úmidas.'
        }
      ],
      relatedTools: [
        { name: 'Modelador de Biofilme em Colheres de Pau', url: '/pt/tools/wooden-utensil-biofilm-modeler/' },
        { name: 'Modelador de Patógenos em Tábuas de Madeira', url: '/pt/tools/wooden-cutting-board-pathogen-modeler/' },
        { name: 'Cuidados com Facas e Tábuas de Corte', url: '/pt/tools/knife-care-cutting-board-matcher/' }
      ]
    },
    {
      slug: 'molded-fiber-takeout-bowls-eu-ppwr-pfas-ban-2026-safety',
      title: 'Potes de Fibra Moldada "Compostáveis" e Banimento de PFAS PPWR UE (2026): Limites de 25 ppb / 50 ppm e Reaquecimento Seguro',
      category: 'materials',
      excerpt: 'Como o Regulamento (UE) 2025/40 (em vigor em 12 de agosto de 2026) limita PFAS em embalagens alimentares a 25 ppb / 250 ppb / 50 ppm e por que aquecer comida em potes de fibra acelera a migração.',
      date: '2026-11-27',
      readTime: '15 min de leitura',
      author: 'IsItKitchenSafe',
      intro: 'Potes "compostáveis" de bagaço de cana, marmitas de fibra moldada e papéis antigordura substituíram o isopor, mas análises químicas detectaram frequentemente PFAS adicionados como barreira contra óleo e água. Em 12 de agosto de 2026 entraram em vigor os limites obrigatórios do Artigo 5(5) do Regulamento (UE) 2025/40 (PPWR), sem exceção para estoques antigos.',
      sections: [
        {
          title: '1. Limites do Artigo 5(5) do PPWR (Em Vigor desde 12 de Agosto de 2026)',
          type: 'fact',
          content: 'Pelo Artigo 5(5) do Regulamento (UE) 2025/40 (PPWR), embalagens de contato alimentar na UE a partir de 12 de agosto de 2026 devem cumprir três tetos: (1) máximo de 25 ppb para qualquer PFAS individual não polimérico; (2) máximo de 250 ppb para a soma de PFAS não poliméricos; e (3) máximo de 50 ppm (50 mg/kg) para PFAS totais incluindo poliméricos. Acima de 50 mg/kg na triagem de Flúor Total, exige-se prova analítica por especiação (como pirólise-GC/MS) além do limite de 100 mg/kg para metais pesados.',
          boxText: 'TETOS LEGAIS PPWR (12 AGO 2026): Máximo 25 ppb individual, 250 ppb soma alvo e 50 ppm PFAS totais em embalagens de alimentos.'
        },
        {
          title: '2. Por Que Potes "Compostáveis" de Bagaço Continham PFAS',
          type: 'warning',
          content: 'Fibras vegetais sem revestimento encharcam rapidamente com caldos e molhos gordurosos. Para resistir ao óleo, fabricantes pulverizavam aditivos fluorados na polpa úmida. Mesmo após retiradas voluntárias da FDA em 2024, estoques importados mantiveram resíduos até o corte legal europeu de agosto de 2026.',
          boxText: 'ARMADILHA VERDE: O rótulo "100% Compostável" não prova ausência de PFAS sem certificação BPI ou análise de Flúor Orgânico Total (<50 ppm).'
        },
        {
          title: '3. Gordura Quente, Vapor no Micro-ondas e Migração Química',
          type: 'warning',
          content: 'Aquecer pratos oleosos acima de 70°C–95°C no micro-ondas dentro de potes de fibra moldada transforma a gordura em solvente extrativo e o vapor abre as fibras de celulose, liberando PFAS de cadeia curta (PFHxA) e álcoois fluorotelômeros voláteis (FTOHs).',
          boxText: 'NUNCA AQUEÇA EM POTES DE FIBRA NO MICRO-ONDAS: Vapor e óleos acima de 70°C aceleram a migração de barreiras químicas para o alimento.'
        },
        {
          title: '4. Alternativas Sem PFAS: Barreiras Minerais e Limites do PLA',
          type: 'tip',
          content: 'Os novos envases utilizam dispersões aquosas, argila mineral ou filmes finos de PLA/PHA. Contudo, películas de PLA amolecem a 55°C–60°C e o Regulamento (UE) 2026/2412 restringe seu contato prolongado acima de 40°C.',
          boxText: 'BARREIRAS MODERNAS: Prefira embalagens certificadas sem PFAS com barreiras minerais e evite manter comida acima de 60°C em caixas com PLA.'
        },
        {
          title: '5. Protocolo Prático: Transferência Imediata para Vidro Borossilicato ou Cerâmica',
          type: 'success',
          content: 'Ao receber delivery quente em marmitas de fibra ou papel antigordura: transfira a comida em até 15 minutos para pratos de cerâmica ou potes de vidro borossilicato 3.3, nunca leve embalagens descartáveis de polpa ao micro-ondas e utilize potes reutilizáveis de vidro ou aço inox 304.',
          boxText: 'HÁBITO ZERO MIGRAÇÃO: Passe alimentos quentes e gordurosos para vidro borossilicato ou cerâmica antes de consumir ou reaquecer.'
        }
      ],
      conclusion: 'O limite obrigatório de 25 ppb / 250 ppb / 50 ppm do Regulamento (UE) 2025/40 (PPWR) a partir de 12 de agosto de 2026 consolida a eliminação dos PFAS em embalagens alimentares. Em casa, transferir delivery quente para vidro ou cerâmica zera o risco durante o reaquecimento.',
      faqs: [
        {
          question: 'Quando entraram em vigor os limites de PFAS do PPWR na União Europeia?',
          answer: 'Em 12 de agosto de 2026, conforme o Artigo 5(5) do Regulamento (UE) 2025/40, sem período de transição para estoques antigos.'
        },
        {
          question: 'Quais são os limites exatos do Regulamento (UE) 2025/40 para PFAS?',
          answer: '25 ppb para qualquer PFAS não polimérico individual, 250 ppb para a soma dos PFAS não poliméricos e 50 ppm (50 mg/kg) para PFAS totais incluindo poliméricos.'
        },
        {
          question: 'Potes compostáveis de bagaço de cana são automaticamente livres de PFAS?',
          answer: 'Não necessariamente. Muitos usavam barreiras fluoradas antigordura. Verifique certificação BPI ou testes com Flúor Orgânico Total abaixo de 50 ppm.'
        },
        {
          question: 'É seguro aquecer sobras no micro-ondas dentro de marmitas de fibra?',
          answer: 'Não. Gorduras quentes e vapor acima de 70°C aceleram a migração de revestimentos e aditivos. Transfira sempre para vidro borossilicato ou porcelana.'
        },
        {
          question: 'O que significa Flúor Total acima de 50 ppm na triagem de embalagens?',
          answer: 'Exige comprovação analítica secundária (como pirólise-GC/MS) demonstrando que o flúor vem de sais seguros e não de PFAS proibidos.'
        }
      ],
      relatedTools: [
        { name: 'Scorecard de Lixiviação Tóxica e PFAS', url: '/pt/tools/toxic-leaching-scorecard/' },
        { name: 'Preditor de Migração em Contato Alimentar', url: '/pt/tools/food-contact-migration-predictor/' },
        { name: 'Modelador de Pipoca de Micro-ondas e PFAS', url: '/pt/tools/microwave-popcorn-pfas-modeler/' }
      ]
    },
    {
      slug: 'cooking-oil-smoke-point-myth-evoo-avocado-adulteration-safety',
      title: 'O Mito do Ponto de Fumaça e a Fraude no Óleo de Abacate: Estudo De Alzaa (2018), Testes UC Davis e Segurança contra 4-HNE e Acroleína',
      category: 'food-safety',
      excerpt: 'Por que o azeite extra virgem supera óleos de sementes de ponto de fumaça mais alto contra 4-HNE e acroleína IARC 2A (De Alzaa et al., 2018), e o alerta da UC Davis sobre 70%–82% de óleos de abacate rançosos ou adulterados.',
      date: '2026-11-27',
      readTime: '16 min de leitura',
      author: 'IsItKitchenSafe',
      intro: 'Muitos cozinheiros evitam fritar com azeite extra virgem pelo ponto de fumaça (~190–210°C) e compram óleo de abacate para altas temperaturas. Porém, análises de estabilidade lipídica mostram que o ponto de fumaça não prevê aldeídos tóxicos, e testes da UC Davis revelaram fraude e rancidez generalizadas no mercado de óleo de abacate.',
      sections: [
        {
          title: '1. De Alzaa et al. (2018): Por Que o Ponto de Humo Engana na Fritura',
          type: 'fact',
          content: 'No estudo de 2018 publicado em Acta Scientific Nutritional Health, De Alzaa, Guillaume e Ravetti aqueceram 10 óleos comerciais (até 240°C por 20 min e 180°C por 6 h) avaliando Compostos Polares Totais (TPM) e aldeídos. Apesar do ponto de fumaça moderado (~190–210°C), o azeite extra virgem gerou os menores níveis de compostos polares e aldeídos tóxicos graças ao ácido oleico monoinsaturado e aos polifenóis antioxidantes, superando óleos poli-insaturados de semente de uva, canola e arroz.',
          boxText: 'ESTABILIDADE TÉRMICA REAL (DE ALZAA 2018): Azeite extra virgem rico em polifenóis forma menos compostos polares e aldeídos entre 180°C e 210°C do que óleos de sementes poli-insaturados.'
        },
        {
          title: '2. Aldeídos Citotóxicos 4-HNE, MDA e Vapores de Acroleína IARC Grupo 2A',
          type: 'warning',
          content: 'Ao superaquecer gorduras poli-insaturadas (PUFAs), a peroxidação lipídica gera 4-hidroxinonenal (4-HNE) e malondialdeído (MDA) nos alimentos, enquanto a desidratação do glicerol produz fumaça azul carregada de acroleína — classificada pela IARC como Grupo 2A (provável carcinógeno). Sempre acione coifa com exaustão externa ao selar acima de 200°C.',
          boxText: 'PERIGO DE ACROLEÍNA E 4-HNE: Fumaça azul libera acroleína IARC 2A e gera 4-HNE em óleos ricos em PUFAs; use sempre exaustor com saída externa.'
        },
        {
          title: '3. Auditorias UC Davis (Wang Lab): 82% em 2020 e ~70% em 2023 de Falha no Abacate',
          type: 'warning',
          content: 'O óleo de abacate refinado autêntico atinge 249°C–271°C com ótima estabilidade. Contudo, pesquisas lideradas pela Profa. Selina Wang na UC Davis constataram que 82% dos óleos de abacate testados nos EUA em 2020 estavam rançosos ou adulterados com soja e cártamo, e quase 70% das marcas próprias falharam novamente na revisão de 2023.',
          boxText: 'ALERTA DE ADULTERAÇÃO: A UC Davis detectou 82% (2020) e ~70% (2023) de óleos de abacate rançosos ou misturados com óleos baratos de soja/cártamo.'
        },
        {
          title: '4. Sprays Aerossóis com Lecitina de Soja: Verniz Polimerizado Acima de 175°C',
          type: 'warning',
          content: 'Sprays antiaderentes com lecitina de soja e antiespumantes de silicone polimerizam acima de 175°C (350°F), formando uma crosta âmbar pegajosa que destrói superfícies PTFE e cerâmicas, além de propelentes inflamáveis perto de chamas e air fryers.',
          boxText: 'EVITE SPRAYS COM LECITINA: Acima de 175°C criam verniz irreversível em panelas antiaderentes; use borrifador de vidro recarregável com óleo puro.'
        },
        {
          title: '5. Protocolo Seguro de Escolha, Armazenamento e Temperatura',
          type: 'success',
          content: 'Use azeite extra virgem fresco em vidro escuro ou lata para cozinhar até 210°C (longe do fogão). Para selagem em ferro fundido acima de 220°C, use óleo alto oleico, ghee ou óleo de abacate de pureza certificada. Descarte óleos escurecidos e ligue a coifa antes de aquecer.',
          boxText: 'GUIA DE TEMPERATURAS: Azeite extra virgem fresco até 210°C; óleo de abacate certificado ou alto oleico acima de 220°C; armazene em local escuro e fresco.'
        }
      ],
      conclusion: 'Superar o mito isolado do ponto de fumaça usando os dados de De Alzaa (2018) e os alertas de pureza da UC Davis reduz drasticamente 4-HNE, MDA e acroleína: cozinhe diariamente com azeite extra virgem fresco até 210°C, verifique a origem do óleo de abacate para >220°C e evite sprays de lecitina.',
      faqs: [
        {
          question: 'É seguro refogar e fritar com azeite extra virgem?',
          answer: 'Sim. De Alzaa et al. (2018) comprovaram que, apesar do ponto de fumaça de 190–210°C, o azeite extra virgem rico em polifenóis produz menos compostos polares e aldeídos tóxicos do que óleos de sementes poli-insaturados.'
        },
        {
          question: 'O que a UC Davis descobriu sobre o óleo de abacate comercial?',
          answer: 'O laboratório de Selina Wang identificou que 82% das amostras em 2020 e quase 70% das marcas próprias em 2023 estavam rançosas ou adulteradas com óleos baratos de soja e cártamo.'
        },
        {
          question: 'Quais toxinas saem quando o óleo começa a soltar fumaça?',
          answer: 'A fumaça azul contém vapores de acroleína (IARC Grupo 2A) e acompanha a formação de aldeídos citotóxicos como 4-HNE e MDA no óleo superaquecido.'
        },
        {
          question: 'Por que sprays de cozinha estragam frigideiras antiaderentes e de cerâmica?',
          answer: 'A lecitina de soja presente nos aerossóis polimeriza acima de 175°C em uma resina pegajosa que compromete a camada antiaderente.'
        },
        {
          question: 'Como armazenar azeite e óleo de abacate corretamente?',
          answer: 'Em garrafas escuras ou latas opacas com data de safra recente, bem fechadas em armário fresco e escuro longe do calor do fogão.'
        }
      ],
      relatedTools: [
        { name: 'Simulador de Ponto de Fumaça e Aldeídos Cancerígenos', url: '/pt/tools/culinary-oil-smoke-point-simulator/' },
        { name: 'Localizador de Ponto de Fumaça e Fritura Segura', url: '/pt/tools/cooking-oil-smoke-point-finder/' },
        { name: 'Modelador de Oxidação Lipídica na Air Fryer', url: '/pt/tools/air-fryer-lipid-oxidation-modeler/' }
      ]
    }
  ],
  'zh-cn': [
    {
      slug: 'bamboo-utensil-glue-mineral-oil-desiccation-biofilm-safety',
      title: '竹勺 vs. 实木勺、白矿物油养护与生物膜真相：Coatings (2023) 研究、胶线水解与金葡菌肠毒素耐热风险',
      category: 'materials',
      excerpt: '深度解析 Coatings (2023) 如何协调白矿物油养护与 UC Davis 木材毛细脱水抑菌理论，为何层压竹勺在洗碗机中胶缝开裂，以及金葡菌肠毒素 A 为何 100°C 煮沸 30 分钟依然剧毒。',
      date: '2026-11-27',
      readTime: '16 分钟阅读',
      author: 'IsItKitchenSafe',
      intro: '家庭烹饪中关于木勺与竹铲的说法常常互相矛盾：有人说木头能天然杀菌，有人教人涂橄榄油保养，还有人直接塞进洗碗机清洗。结合美国加州大学戴维斯分校（UC Davis）木材毛细渗吸研究、MDPI Coatings (2023) 涂层实验以及金黄色葡萄球菌肠毒素耐热动力学，科学解答木质与竹制厨具的真正安全边界。',
      sections: [
        {
          title: '1. UC Davis 毛细脱水抑菌 vs. Coatings (2023)：上油密封的科学权衡',
          type: 'fact',
          content: 'UC Davis 微生物学家 Ak 与 Cliver 证实，完好的硬糖枫木和欧洲山毛榉能通过微米级木质部导管（<60 µm）迅速将表层水分吸入深处，在数小时内使表面 99.9% 的细菌脱水死亡。但 Vega Gutierrez 等人 2023 年发表在 MDPI Coatings 的研究（DOI: 10.3390/coatings13040752）接种沙门氏菌与李斯特菌后发现，涂抹矿物油或亚麻籽油封闭孔隙后，表层可回收活菌反而显著高于未上油的裸木，因为疏水油膜阻断了瞬间毛细虹吸。结论并非放弃上油——完全干裂的裸木在湿热循环下会撕出 >500 µm 深缝藏菌；正确做法是用极薄的食品级 USP 白矿物油防开裂，并在接触生肉生禽后立刻用热洗洁精水手洗，而不依赖干燥木头被动吸菌。',
          boxText: '科学平衡法则：USP 矿物油防止木材干裂，而 Coatings (2023) 提示油膜会减弱表层被动吸湿——接触生肉后务必立即用热肥皂水手洗消毒。'
        },
        {
          title: '2. 层压毛竹厨具：洗碗机强碱（pH 10.5–11.5）导致甲醛/PVA 胶层水解',
          type: 'warning',
          content: '市面上绝大多数竹勺与竹砧板并非整块实木，而是用脲醛树脂、密胺甲醛树脂或聚醋酸乙烯酯（PVA）胶水将毛竹薄片热压胶合而成。放入洗碗机经受 65°C 强碱性洗涤水（pH 10.5–11.5）与 75°C 热风烘干时，潮湿环境令木质素在 ~65°C 软化，欧洲山毛榉等木材因切向收缩率（11.8%）约为径向（5.8%）的两倍而剧烈撕裂（裂缝扩大超 800%）；层压竹勺的胶合缝更会直接发生化学水解剥离，形成中空暗缝并可能渗出粘合剂分解物。',
          boxText: '严禁洗碗机清洗木竹厨具：65°C 强碱水洗与 75°C 热风烘干不仅令实木微裂纹扩大 800%，更会水解竹勺胶合缝使其沦为永久细菌培养皿。'
        },
        {
          title: '3. 为何橄榄油养护会氧化酸败，而 USP 食品级矿物油安全稳定',
          type: 'warning',
          content: '用橄榄油、菜籽油、玉米油或核桃油涂抹木勺会将大量多不饱和脂肪酸带入导管深孔。在空气与灶台余温下，不饱和甘油三酯发生自由基脂质过氧化，分解出恶臭的己醛、丙二醛并聚合成发黏黄膜，沦为曲霉菌与细菌生物膜的营养基。相反，高纯度 USP 食品级白矿物油（C15–C50 饱和脂肪烃）搭配天然蜂蜡不含任何双键，永不氧化酸败，且能将木材吸水膨胀率降低 88%–95%。',
          boxText: '涂油铁律：严禁使用橄榄油、花生油等食用植物油保养木勺；仅选用食品级 USP 白矿物油或纯蜂蜡防裂。'
        },
        {
          title: '4. 休眠态致病菌（VBNC）与 100°C 煮不死的金葡菌肠毒素 A',
          type: 'warning',
          content: '当木勺表面裂缝宽于 100 µm，洗洁精泡沫因表面张力无法进入深处。潜伏的沙门氏菌与李斯特菌分泌胞外多聚物（EPS）形成生物膜，干燥后进入“活的非可培养状态（VBNC）”存活数周，遇到热汤或冷拌辅食瞬间复活脱落。更危险的是金黄色葡萄球菌在吸满油脂的裂缝中产出的肠毒素 A（SEA）：虽然 70°C 即可杀死金葡菌活菌，但已生成的 SEA 毒素在 100°C 沸水中持续煮沸 30 分钟以上仍保有致呕毒性，回锅加热根本无法解毒。',
          boxText: '耐高温毒素警告：把受污染的汤菜重新煮沸无法破坏已生成的金葡菌肠毒素 A——开裂油腻的木勺绝不可接触乳制品、肉汁和即食冷餐。'
        },
        {
          title: '5. 竖立通风晾干（Aw < 0.65）、3 分钟沸水烫煮与一毫米淘汰法则',
          type: 'success',
          content: '请严格遵守四条木质厨具卫生规范：1）处理生鸡肉、猪肉与牛肉馅请专用硅胶或 304 不锈钢工具。2）若木勺误触生禽肉血水，先用热洗洁精水洗去油脂，再将勺头浸入 100°C 滚水中煮满 3 分钟或用 3% 双氧水擦拭静置 10 分钟。3）洗后竖立在通风沥水架上分开晾干，90 分钟内即可将表面水分活度（Aw）降至 0.65 以下，切勿湿漉漉挤进陶瓷筷子筒或密闭抽屉。4）一毫米淘汰硬指标：凡纵向裂纹宽或深 ≥1 毫米、竹勺胶缝翘起或渗入洗不掉的黑霉斑，必须立即报废扔掉。',
          boxText: '一毫米淘汰线：出现宽度或深度 ≥1 毫米裂缝、竹勺胶缝分层或黑霉侵入木纹时，立即丢弃换新。'
        }
      ],
      conclusion: '将 UC Davis 毛细脱水研究与 MDPI Coatings (2023) 结合可知：优先选用整块致密硬木（硬糖枫木或橄榄木）而非胶合竹勺，绝对禁止进洗碗机，薄涂 USP 白矿物油防裂并在生肉接触后立即洗净，竖立通风晾干，并严格执行一毫米裂缝淘汰准则。',
      faqs: [
        {
          question: '2023 年的研究真的发现涂矿物油的木板和木勺表面残留更多细菌吗？',
          answer: '是的，但需要正确理解前提。Vega Gutierrez 等人（MDPI Coatings, 2023）发现矿物油与亚麻籽油封闭木孔后，会减缓未上油裸木依靠毛细作用将表层沙门氏菌和李斯特菌吸干的被动效应。因此，薄涂 USP 矿物油主要是为了防止木勺受潮干裂产生深缝，而接触生肉后绝不能依赖“木头自己吸干”，必须立即用热洗洁精水手洗消毒。'
        },
        {
          question: '为什么胶合竹勺比整块枫木勺更容易在洗碗机中坏掉？',
          answer: '因为市售竹勺多采用脲醛树脂、密胺树脂或 PVA 胶水将竹片胶合压制。洗碗机 65°C 强碱性洗涤水（pH 10.5–11.5）会迅速水解胶合缝，导致整把勺子分层劈裂并形成无法清洗的细菌黑洞。'
        },
        {
          question: '把木勺放进沸水里煮能消灭葡萄球菌食物中毒毒素吗？',
          answer: '滚水煮 3 分钟可以有效杀灭误触生肉后的沙门氏菌、大肠杆菌和金葡菌活菌；但若金葡菌此前已经在脏裂的油缝中繁殖并分泌了肠毒素 A（SEA），该毒素极耐高温，100°C 沸煮 30 分钟以上依然有毒，因此发裂发黏的木勺必须直接报废。'
        },
        {
          question: '为什么绝对不能用食用橄榄油或菜籽油保养木勺？',
          answer: '食用植物油含大量不饱和脂肪酸，接触氧气会迅速氧化酸败，产生发臭的己醛与丙二醛并凝结成黏腻黄垢，成为霉菌和致病菌的丰盛培养基。必须使用高纯度 USP 食品级白矿物油或蜂蜡。'
        },
        {
          question: '木勺洗完后怎样晾干和收纳最安全？',
          answer: '应勺头朝上竖立在通风透气的沥水架上且留出间距，让表面水分活度在 90 分钟内降到 Aw 0.65 以下；切忌潮湿状态插满陶瓷筒或放进密闭抽屉，否则 Aw 会持续高于 0.85 达 12 小时以上。'
        }
      ],
      relatedTools: [
        { name: '木勺微裂纹细菌生物膜与水分渗吸诊断模型', url: '/zh-cn/tools/wooden-utensil-biofilm-modeler/' },
        { name: '木砧板深刀痕致病菌生物膜与消毒模型', url: '/zh-cn/tools/wooden-cutting-board-pathogen-modeler/' },
        { name: '厨刀养护与安全砧板匹配器', url: '/zh-cn/tools/knife-care-cutting-board-matcher/' }
      ]
    },
    {
      slug: 'molded-fiber-takeout-bowls-eu-ppwr-pfas-ban-2026-safety',
      title: '“可降解”模塑甘蔗浆外卖碗与 2026 欧盟 PPWR 包装 PFAS 禁令：25 ppb / 50 ppm 法规红线与家用安全换装指南',
      category: 'materials',
      excerpt: '深入解析 2026 年 8 月 12 日正式生效的欧盟 (EU) 2025/40 包装法规（PPWR 第 5(5) 条）对食品包装 PFAS 25 ppb / 250 ppb / 50 ppm 严苛限值，以及热油微波为何加速氟化物溶出。',
      date: '2026-11-27',
      readTime: '15 分钟阅读',
      author: 'IsItKitchenSafe',
      intro: '甘蔗渣模塑餐碗、“可堆肥”植物纤维外卖盒与防油汉堡纸广泛取代了发泡塑料餐盒，但实验室检测却多次从中检出高浓度的防水防油永久化学品 PFAS。2026 年 8 月 12 日，欧盟《包装与包装废弃物法规》（Regulation (EU) 2025/40，简称 PPWR）第 5(5) 条对食品接触包装的法定 PFAS 限值正式生效，且不设旧库存豁免过渡期。',
      sections: [
        {
          title: '1. 欧盟 PPWR 第 5(5) 条三大法定红线（2026 年 8 月 12 日正式生效）',
          type: 'fact',
          content: '依据欧盟法规 (EU) 2025/40 第 5(5) 条，2026 年 8 月 12 日起投放欧盟市场的所有食品接触包装必须同时满足三项严格阈值：（1）单项靶向非聚合物 PFAS 不得超过 25 ppb（25 µg/kg）；（2）所有靶向非聚合物 PFAS 总和不得超过 250 ppb；（3）含聚合物 PFAS 在内的总 PFAS 不得超过 50 ppm（50 mg/kg）。若总氟（TF）或总有机氟（TOF）初筛超过 50 mg/kg，企业必须提供热解气质联用（Pyrolysis-GC/MS）等二次形态溯源报告以证明氟元素并非来自受限 PFAS。同时，第 5 条继续执行铅、镉、汞和六价铬总量 ≤100 mg/kg 的重金属上限。',
          boxText: '欧盟 PPWR 法定上限（2026.08.12 生效）：单项非聚合 PFAS ≤ 25 ppb、靶向总和 ≤ 250 ppb、含聚合物总 PFAS ≤ 50 ppm。'
        },
        {
          title: '2. 为何号称“纯植物可降解”的甘蔗浆餐碗常含 PFAS',
          type: 'warning',
          content: '未经化学改性的麦秸、竹浆或甘蔗渣压制纤维遇到热汤与辣油几分钟就会浸软漏水。为保证外卖打包不渗油，传统工艺往往在湿纸浆中加入氟调聚醇丙烯酸酯防油剂。即便美国 FDA 在 2024 年 2 月完成了防油纸 PFAS 的行业自愿退市，部分未认证餐饮耗材、陈旧库存及副产物杂质仍在全球流通，直到 2026 年欧盟 PPWR 强制红线落地。',
          boxText: '漂绿陷阱警惕：“100% 可堆肥/植物纤维”标签并不等同于“无 PFAS”，必须查验 BPI 无氟认证或 <50 ppm 总有机氟检测。'
        },
        {
          title: '3. 热油、微波蒸汽与氟调聚醇向食物快速迁移的物理机制',
          type: 'warning',
          content: '将滚烫、高油脂的外卖（如芝士焗饭、麻辣香锅、黄油咖喱）连同模塑纤维碗一起放进微波炉复热危害极大。当温度攀升至 70°C–95°C 时，熔融油脂化身强效有机萃取溶剂，同时内部高温水蒸汽溶胀纤维素壁，加速短链全氟羧酸（如 PFHxA）及挥发性氟调聚醇（FTOH）直接渗入汤汁与油脂中。',
          boxText: '严禁带纸浆外卖碗进微波炉：高温蒸汽与 >70°C 油脂会迅速把表面防油涂层与氟化助剂萃取进食物。'
        },
        {
          title: '4. 无氟替代涂层（水性阻隔、矿物陶土、PLA）的安全边界',
          type: 'tip',
          content: '为符合 2026 PPWR 法规，包装厂商正转向水性聚合物阻隔液、硅酸盐陶土涂层、高密度机械压浆以及薄层聚乳酸（PLA/PHA）覆膜。消费者需牢记两点局限：薄层 PLA 在 55°C–60°C 左右即发生玻璃化软化，且欧盟 (EU) 2026/2412 条例已限制塑化 PLA 在 >40°C 下长期接触；硬叉大力刮擦湿润纤维表面仍可能剥落微量植物纤维或微粒。',
          boxText: '新一代无氟材料须知：优选通过无氟检测的矿物阻隔包装；切勿让 >60°C 滚烫食物长时间闷在 PLA 淋膜盒中。'
        },
        {
          title: '5. 家庭实操准则：立即换盘盛装与零迁移玻璃/不锈钢替代',
          type: 'success',
          content: '面对热外卖和打包剩菜请坚持三条简单习惯：第一，外卖送达 15 分钟内尽量开盖并将滚烫多油菜肴倒入陶瓷盘或 3.3 高硼硅玻璃保鲜盒中；第二，绝对不用微波炉直接加热任何一次性纤维碗、防油纸袋或覆膜纸盒；第三，日常备餐与上班带饭选用可进烤箱微波的高硼硅玻璃卡扣盒或冷温食专用的 304 不锈钢饭盒。',
          boxText: '零迁移家庭守则：热油外卖到家即刻换入陶瓷碗或高硼硅玻璃盒，绝不直接连同一次性纤维盒微波加热。'
        }
      ],
      conclusion: '2026 年 8 月 12 日正式落地的欧盟 (EU) 2025/40 (PPWR) 法规以 25 ppb / 250 ppb / 50 ppm 硬指标彻底封堵了“伪环保含氟外卖碗”的合规漏洞。居家养成热油外卖立即换盛陶瓷或高硼硅玻璃容器、绝不带纸浆碗微波复热的习惯，即可轻松阻断包装化学迁移风险。',
      faqs: [
        {
          question: '欧盟 PPWR 包装 PFAS 禁令何时正式生效？',
          answer: '2026 年 8 月 12 日起依据欧盟法规 (EU) 2025/40 第 5(5) 条全面强制生效，且对旧库存不设豁免过渡期。'
        },
        {
          question: '欧盟 (EU) 2025/40 对食品包装 PFAS 的具体限值是多少？',
          answer: '单项靶向非聚合物 PFAS ≤ 25 ppb，靶向非聚合物 PFAS 总和 ≤ 250 ppb，包含聚合物 PFAS 在内的总 PFAS（通常以总氟测算）≤ 50 ppm（50 mg/kg）。'
        },
        {
          question: '印有“可降解/植物纤维”的甘蔗渣外卖碗一定不含 PFAS 吗？',
          answer: '不一定。过去大量模塑甘蔗浆与竹浆碗依赖含氟防油剂防漏汤漏油，只有具备 BPI 无氟认证或第三方总有机氟 <50 ppm 报告的产品才算真正合规无氟。'
        },
        {
          question: '把外卖剩菜连同一次性纸浆碗放进微波炉加热安全吗？',
          answer: '不安全。超过 70°C 的高温油脂和蒸汽会加速防油剂、胶粘剂或未知副产物向食物溶出。加热前务必换装入高硼硅玻璃或陶瓷餐具。'
        },
        {
          question: '包装检测总氟超过 50 ppm 意味着什么？',
          answer: '意味着厂商不能仅靠普通供应商声明过关，必须提供热解气质联用等二次形态分析报告，证明超出部分的氟来自安全无机盐而非受限 PFAS。'
        }
      ],
      relatedTools: [
        { name: '厨具化学迁移与 PFAS 毒理评分卡', url: '/zh-cn/tools/toxic-leaching-scorecard/' },
        { name: '食品接触化学迁移时间序列动力学预测器', url: '/zh-cn/tools/food-contact-migration-predictor/' },
        { name: '微波炉爆米花袋 PFOA/PFAS 迁移模型器', url: '/zh-cn/tools/microwave-popcorn-pfas-modeler/' }
      ]
    },
    {
      slug: 'cooking-oil-smoke-point-myth-evoo-avocado-adulteration-safety',
      title: '拆解“高烟点迷信”与牛油果油掺假危机：De Alzaa (2018) 实验、UC Davis 抽检与 4-HNE / 丙烯醛致癌物防护',
      category: 'food-safety',
      excerpt: '为何特级初榨橄榄油在热稳定与抑制 4-HNE / IARC 2A 类丙烯醛方面完胜高烟点多不饱和种子油（De Alzaa et al., 2018），以及加州大学戴维斯分校揭露的 70%–82% 市售牛油果油酸败与掺假真相。',
      date: '2026-11-27',
      readTime: '16 分钟阅读',
      author: 'IsItKitchenSafe',
      intro: '几乎每位厨师都听过这样的传统信条：“特级初榨橄榄油（EVOO）烟点低（约 190–210°C），绝对不能用来炒菜煎炸，高温烹饪一定要买高烟点牛油果油”。然而脂质分析化学与独立商超盲测接连推翻了这两大常识：烟点高低根本不能预测致癌醛类的产生量，而加州大学戴维斯分校（UC Davis）检测更发现市面上绝大多数牛油果油在上架时早已氧化酸败或暗中掺入了廉价大豆油。',
      sections: [
        {
          title: '1. De Alzaa et al. (2018)：为什么“烟点”无法代表高温烹饪安全性',
          type: 'fact',
          content: '2018 年发表于《Acta Scientific Nutritional Health》的经典研究中，Florencia de Alzaa、Claudia Guillaume 与 Leandro Ravetti 在煎炸温度下（最高 240°C 加热 20 分钟及 180°C 持续 6 小时）对比了 10 种商用烹调油的总极性组分（TPM）与氧化产物。结果颠覆认知：尽管特级初榨橄榄油（EVOO）烟点约 190–210°C，但凭借高比例单不饱和油酸（70%–80%）与丰富的天然多酚抗氧化物（羟基酪醇、刺激醛、生育酚），它生成的有害极性物质与次级氧化醛类在所有油品中最低，热稳定性远超烟点更高的葡萄籽油、菜籽油和稻米油。',
          boxText: '氧化稳定性真相（DE ALZAA 2018）：在 180°C–210°C 日常煎炒烤制温度下，富含多酚的 EVOO 生成的有毒极性组分与醛类远低于高烟点多不饱和种子油。'
        },
        {
          title: '2. 细胞毒醛类 4-HNE、丙二醛（MDA）与 IARC 2A 类丙烯醛油烟',
          type: 'warning',
          content: '富含多不饱和亚油酸/亚麻酸（PUFA）的油脂一旦过热发生氧化裂解，会在热油和油炸食物中生成高活性的细胞毒醛类——4-羟基壬烯醛（4-HNE）和丙二醛（MDA）；同时甘油骨架脱水冒出刺鼻青烟，释放大量气态丙烯醛（Acrolein）。世界卫生组织国际癌症研究机构（IARC）将丙烯醛列为 2A 类致癌物（对人类很可能致癌），且烹饪 PM2.5 与丙烯醛直接刺激呼吸道，因此 200°C 以上高温煎烤务必开启外排式抽油烟机。',
          boxText: '丙烯醛与 4-HNE 警示：冒蓝烟时会释放 IARC 2A 类致癌物丙烯醛，高 PUFA 油脂更易裂解出 4-HNE；高温爆炒必须先开外排油烟机。'
        },
        {
          title: '3. 加州大学戴维斯分校（Wang Lab）抽检：82%（2020）与约 70%（2023）牛油果油不合格',
          type: 'warning',
          content: '真正纯正的精炼牛油果油确实拥有 249°C–271°C（480°F–520°F）的高烟点与单不饱和脂肪优势，适合 >220°C 铸铁锅旺火猛煎牛排。但加州大学戴维斯分校 Selina Wang 教授团队 2020 年对美国商超牛油果油的权威盲测发现：高达 82% 的样品在保质期内已经氧化酸败，或被掺入了廉价大豆油、红花籽油与葵花籽油（甚至有三款标榜“100% 纯牛油果油”的样品实为接近 100% 大豆油）。2023 年针对商超自有品牌的复检显示，仍有近 70% 不符合纯度或新鲜度标准。',
          boxText: '牛油果油掺假警报：UC Davis 2020 年检测发现 82%、2023 年复检发现近 70% 市售牛油果油存在酸败或掺混高 PUFA 种子油问题。'
        },
        {
          title: '4. 气雾喷雾油中的大豆卵磷脂：>175°C 聚合成粘死锅底的琥珀焦膜',
          type: 'warning',
          content: '市面常见的罐装气雾烹调喷油为了乳化防起泡，常添加大豆卵磷脂与硅油消泡剂。这些添加剂在 175°C（350°F）左右就会剧烈热聚合，在特氟龙 PTFE 与溶胶-凝胶陶瓷不粘锅表面烤出一层洗不掉的粘腻琥珀色树脂漆膜，彻底废掉不粘性能；同时丙烷/异丁烷推进剂在燃气明火和空气炸锅高温发热管旁还存在闪燃风险。',
          boxText: '不粘锅禁用卵磷脂喷雾：175°C 以上大豆卵磷脂会碳化聚合毁坏不粘层；请改用可重复灌装的纯玻璃喷油壶装填纯油。'
        },
        {
          title: '5. 科学用油分级、避光储油与厨房安全煎炸守则',
          type: 'success',
          content: '第一，90% 的家庭日常烹调（凉拌、嫩煎、烤箱烤蔬菜、210°C 以内煎炒）优选深色玻璃瓶或金属铁罐装的新鲜初榨橄榄油，核对榨取日期并放在远离灶台高温的阴凉暗处橱柜。第二，铸铁锅 >220°C 高温煎牛排或爆炒时，选择高油酸葵花籽油、澄清酥油（Ghee）或具备第三方纯度溯源认证的精炼牛油果油。第三，炸油发黑、起持久泡沫或烟点骤降时果断换新，并始终在热锅前先打开外排抽油烟机。',
          boxText: '科学用油速查：210°C 以内日常炒烤优选深瓶新鲜 EVOO；>220°C 旺火猛煎选用认证纯牛油果油或高油酸油；避光远离灶台保存。'
        }
      ],
      conclusion: '用 De Alzaa (2018) 氧化稳定性实验与 UC Davis 油脂纯度警示取代过时的“唯烟点论”，能显著降低餐桌上的 4-HNE、MDA 与丙烯醛吸入负担：日常 210°C 以下优先使用避光保存的新鲜特级初榨橄榄油，220°C 以上高温煎烤严选正规溯源的纯牛油果油或高油酸油，停用含卵磷脂的气雾喷油并保持外排油烟机开启。',
      faqs: [
        {
          question: '用特级初榨橄榄油（EVOO）煎炒或烤箱烤菜真的安全吗？',
          answer: '安全且稳定。De Alzaa 等人（2018）证实，尽管 EVOO 烟点约 190°C–210°C，但因富含单不饱和油酸和抗氧化多酚，在煎炒温度下生成的极性降解物与 4-HNE、丙烯醛反而明显低于烟点更高的菜籽油和葡萄籽油。'
        },
        {
          question: '加州大学戴维斯分校关于市售牛油果油发现了什么问题？',
          answer: 'UC Davis Selina Wang 实验室 2020 年抽检发现 82% 市售牛油果油在保质期内已酸败或掺入大豆油等廉价种子油；2023 年针对自有品牌的复检仍有近 70% 不达标。'
        },
        {
          question: '食用油冒烟时会释放哪些致癌有毒物质？',
          answer: '食用油冒青烟说明甘油与脂肪酸发生热裂解，向空气中释放 IARC 2A 类致癌物丙烯醛（Acrolein）和 PM2.5 颗粒，同时在锅内生成细胞毒性的 4-羟基壬烯醛（4-HNE）与丙二醛（MDA）。'
        },
        {
          question: '为什么喷雾防粘油会毁掉陶瓷和特氟龙不粘锅？',
          answer: '因为气雾喷油中的大豆卵磷脂添加剂在 175°C 以上就会发生热聚合，在锅面烘烤出一层顽固发黏的琥珀色胶膜，使食物严重粘锅。'
        },
        {
          question: '橄榄油和牛油果油应该如何保存才不会酸败？',
          answer: '购买标注近期采收日期、采用深绿玻璃瓶或金属铁罐避光包装的产品，倒油后立即拧紧瓶盖，存放在远离燃气灶余热和阳光直射的阴凉橱柜内。'
        }
      ],
      relatedTools: [
        { name: '食用油烟点与致癌醛类生成模拟器', url: '/zh-cn/tools/culinary-oil-smoke-point-simulator/' },
        { name: '食用油烟点与安全煎炸温度查询器', url: '/zh-cn/tools/cooking-oil-smoke-point-finder/' },
        { name: '空气炸锅脂质氧化与 4-HNE 模拟计算器', url: '/zh-cn/tools/air-fryer-lipid-oxidation-modeler/' }
      ]
    }
  ],
  ja: [
    {
      slug: 'bamboo-utensil-glue-mineral-oil-desiccation-biofilm-safety',
      title: '竹製 vs. 広葉樹スプーン、ミネラルオイルとバイオフィルム：Coatings (2023) 研究・接着剤加水分解・ブドウ球菌毒素の真実',
      category: 'materials',
      excerpt: 'Coatings (2023) 論文とUC Davisの毛細管乾燥殺菌データを統合し、集成竹スプーンが食洗機で剥離する化学メカニズムと100℃煮沸に耐える黄色ブドウ球菌エンテロトキシンAの危険性を解説。',
      date: '2026-11-27',
      readTime: '16分で読める',
      author: 'IsItKitchenSafe',
      intro: '木製スプーンや竹製ヘラのお手入れには相反する俗説が溢れています。「木は自然に細菌を殺す」「オリーブ油を塗ると衛生的」「食洗機に入れても大丈夫」といった誤解です。カリフォルニア大学デービス校（UC Davis）の導管毛細管研究、MDPI Coatings（2023）のオイル塗布試験、およびブドウ球菌毒素の耐熱性データから科学的な正解を導き出します。',
      sections: [
        {
          title: '1. UC Davisの毛細管乾燥殺菌 vs. Coatings (2023)：オイル塗布の科学的解釈',
          type: 'fact',
          content: 'UC DavisのAkとCliverによる古典的研究は、傷のない硬木（ハードメープルやブナ）の導管（径60 µm未満）が水分を急速に内部へ引き込み、表面の細菌をプラスチックより速く99.9%脱水死滅させることを示しました。一方でVega GutierrezらによるMDPI Coatings（2023, DOI: 10.3390/coatings13040752）の研究では、ミネラルオイルや亜麻仁油を塗布した木材にサルモネラ菌やリステリア菌を接種したところ、油膜が毛細管吸引を塞ぐため未塗装の木より表面回収菌数が多く残存することが判明しました。つまり結論は「ひび割れ防止にUSPミネラルオイルを薄く塗りつつ、生肉に触れた後は木の吸水任せにせず直ちに洗剤手洗いする」ことが不可欠です。',
          boxText: '科学的バランス：USPミネラルオイルは乾燥割れを防ぎますが、Coatings (2023) は油面での受動的吸水殺菌が弱まることを示しており、生肉接触後の即時手洗いが必須です。'
        },
        {
          title: '2. 集成孟宗竹製器具：食洗機のアルカリ熱水（pH 10.5–11.5）による接着剤剥離',
          type: 'warning',
          content: '市販の竹製スプーンや竹まな板の多くは無垢材ではなく、薄い竹ひごを尿素ホルムアルデヒド樹脂、メラミン樹脂、または酢酸ビニル（PVA）接着剤で圧着した集成材です。食洗機の65°Cアルカリ洗剤（pH 10.5–11.5）と75°C温風乾燥にさらされると、木材中のリグニンが軟化し（湿潤時Tg約65°C）、ブナ材等では年輪接線方向の収縮率11.8%に対し半径方向5.8%という約2倍の収縮差でクラックが800%以上拡大します。集成竹では接着層が加水分解して隙間が口を開け、洗浄不能な細菌培養槽となります。',
          boxText: '木・竹製品の食洗機禁止：65°Cアルカリ洗浄と75°C乾燥はひび割れを800%以上広げ、竹の接着層を剥離させます。'
        },
        {
          title: '3. オリーブ油が酸化酸敗する理由とUSPミネラルオイルの優位性',
          type: 'warning',
          content: 'オリーブ油、サラダ油、キャノーラ油などの食用油を塗ると、多価不飽和脂肪酸が酸素と熱に反応して過酸化脂質（ヘキサナール、マロンジアルデヒド等）へ急速に酸化（酸敗）し、悪臭を放つベタつく被膜となってカビや細菌の栄養源になります。二重結合を持たない純粋なUSP食品グレード・ホワイトミネラルオイル（飽和炭化水素C15–C50）＋蜜蝋だけが、酸敗せずに吸湿割れを88〜95%抑制します。',
          boxText: 'オイル選定鉄則：食用植物油は厳禁。酸敗しないUSP食品グレード・ミネラルオイルまたは蜜蝋のみを使用してください。'
        },
        {
          title: '4. 休眠菌（VBNC）と100℃・30分煮沸に耐える黄色ブドウ球菌エンテロトキシンA',
          type: 'warning',
          content: 'クラックが100 µmを超えると洗剤の泡は届きません。サルモネラ菌やリステリア菌は細胞外多糖（EPS）のバイオフィルム内で休眠状態（VBNC）として数週間生き残り、熱い料理に触れた瞬間に再活性化します。特に危険なのが脂を吸った亀裂内で黄色ブドウ球菌が産生するエンテロトキシンA（SEA）です。菌自体は70°Cで死滅しますが、生成済みの毒素SEAは100°Cで30分間煮沸しても失活せず、温め直した料理でも急性嘔吐を引き起こします。',
          boxText: '耐熱性毒素の警告：調理の再加熱でもブドウ球菌エンテロトキシンAは分解されません。ひび割れた木製スプーンは乳製品・ソース・離乳食に厳禁です。'
        },
        {
          title: '5. 縦置き通風乾燥（Aw < 0.65）、3分間煮沸消毒＆1ミリ廃棄ルール',
          type: 'success',
          content: '衛生維持の4原則：1）生の鶏肉・豚肉・ひき肉には専用のシリコンや304ステンレス器具を使う。2）誤って生肉汁に触れたら洗剤洗い後に沸騰水（100°C）で3分間煮沸、または3%過酸化水素水で10分消毒する。3）濡れたままツールスタンドに密集させず、縦置きで通気性の良いラックに立てて90分以内に水分活性Aw 0.65未満へ乾燥させる。4）「1ミリ廃棄ルール」：幅または深さ1mm以上の縦割れ、竹の接着剥離、落ちない黒カビが見られたら直ちに廃棄する。',
          boxText: '1ミリメートル廃棄基準：1mm以上の亀裂、竹の接着剥がれ、黒カビの浸透が確認されたら即座に廃棄してください。'
        }
      ],
      conclusion: 'UC Davisの導管研究とMDPI Coatings（2023）を統合した最適解は、接着竹より無垢広葉樹（メープルやオリーブ木）を選び、食洗機を厳禁とし、USPミネラルオイルで薄く保護して使用後は速やかに手洗いし、縦置き乾燥と1ミリ廃棄ルールを徹底することです。',
      faqs: [
        {
          question: '2023年の論文では、ミネラルオイルを塗った木の方が表面の細菌が残りやすいと報告されたのですか？',
          answer: 'はい、重要な前提付きで事実です。Vega Gutierrezら（MDPI Coatings, 2023）は、オイル塗装が木材の孔を塞ぐことで未塗装の乾燥木が持つ毛細管吸湿力を弱めるため、洗浄前の表面にサルモネラ菌やリステリア菌が多く回収されることを示しました。そのため割れ防止にUSPミネラルオイルを使いつつ、生肉を扱った直後は必ず熱い石鹸水で丁寧に洗い流すことが重要です。'
        },
        {
          question: 'なぜ集成竹製スプーンは無垢のカエデより食洗機に弱いのですか？',
          answer: '集成竹は尿素ホルムアルデヒド系やPVA接着剤で竹片を貼り合わせているため、食洗機の65°Cアルカリ熱水が接着層を急速に加水分解して剥がれさせ、内部に菌の巣を作ってしまうためです。'
        },
        {
          question: '煮沸消毒すれば黄色ブドウ球菌の食中毒毒素も消えますか？',
          answer: '3分間の煮沸は生きた菌を殺菌できますが、汚れた亀裂内で既に作られたエンテロトキシンA（SEA）は100°Cで30分以上煮沸しても毒性が残ります。深いひび割れがある木製器具は煮沸に頼らず廃棄してください。'
        },
        {
          question: 'なぜオリーブ油やサラダ油で木製スプーンをお手入れしてはいけないのですか？',
          answer: '不飽和脂肪酸が空気酸化（酸敗）して悪臭のあるベタついた膜になり、黒カビや細菌の格好の餌となるためです。必ず飽和炭化水素のUSPミネラルオイルか蜜蝋をご使用ください。'
        },
        {
          question: '洗った後の木製スプーンはどう乾かすのが正解ですか？',
          answer: '風通しの良い水切りラックに他の器具と間隔を空けて縦置きし、90分以内に表面の水分活性（Aw）を0.65未満まで下げるのが理想です。湿ったまま密閉された容器や暗い引き出しにしまわないでください。'
        }
      ],
      relatedTools: [
        { name: '木製スプーン微細クラック細菌バイオフィルム診断モデラー', url: '/ja/tools/wooden-utensil-biofilm-modeler/' },
        { name: '木製まな板深傷バイオフィルム・殺菌モデラー', url: '/ja/tools/wooden-cutting-board-pathogen-modeler/' },
        { name: '包丁ケア・安全まな板マッチャー', url: '/ja/tools/knife-care-cutting-board-matcher/' }
      ]
    },
    {
      slug: 'molded-fiber-takeout-bowls-eu-ppwr-pfas-ban-2026-safety',
      title: '「生分解性」バガス・モールド紙容器と2026年EU PPWR包装PFAS禁止令：25 ppb / 50 ppm規制基準と安全な温め直し法',
      category: 'materials',
      excerpt: '2026年8月12日に完全施行されたEU規則 (EU) 2025/40（PPWR第5条5項）が定める食品包装PFAS上限（25 ppb / 250 ppb / 50 ppm）と、紙製テイクアウト容器でのレンジ加熱が危険な理由。',
      date: '2026-11-27',
      readTime: '15分で読める',
      author: 'IsItKitchenSafe',
      intro: 'サトウキビ搾りかす（バガス）の「堆肥化可能」ボウルや耐油ペーパー包材はプラスチックの代替として普及しましたが、撥水・耐油加工として残留性の高い有機フッ素化合物（PFAS）が多用されてきました。2026年8月12日、EU包装・包装廃棄物規則（規則 (EU) 2025/40：PPWR）第5条(5)の厳格なPFAS基準が在庫猶予なしで完全施行されました。',
      sections: [
        {
          title: '1. EU PPWR第5条(5)の法的基準（2026年8月12日施行）：25 ppb / 250 ppb / 50 ppm',
          type: 'fact',
          content: '規則 (EU) 2025/40 第5条(5)により、2026年8月12日以降にEU市場へ出荷される食品接触包装は以下の3基準すべてを満たす必要があります。(1) 個別非高分子PFAS：25 ppb以下、(2) 対象非高分子PFAS合計：250 ppb以下、(3) 高分子PFASを含む総PFAS：50 ppm（50 mg/kg）以下。総フッ素スクリーニングで50 mg/kgを超えた場合、熱分解GC/MS等の二次分析によって規制PFAS由来でないことを証明する技術文書が義務付けられ、同時に重金属4元素合計100 mg/kg上限も適用されます。',
          boxText: 'EU PPWR法的上限（2026年8月12日施行）：個別PFAS 25 ppb以下、非高分子合計 250 ppb以下、ポリマー含む総PFAS 50 ppm以下。'
        },
        {
          title: '2. なぜ「生分解性」バガス紙容器にPFASが使われていたのか',
          type: 'warning',
          content: '無加工の植物繊維パルプは熱いスープや油分の多い料理を入れると数分でふやけて漏れてしまいます。耐油性を確保するためパルプスラリーにフルオロテロマー系添加剤が配合されてきました。2024年2月の米国FDA自主撤退完了後も、未検証の輸入業務資材や旧在庫による曝露が課題となっていました。',
          boxText: 'グリーンウォッシング注意：「100%生分解性・植物由来」の表示は、BPI認証や総有機フッ素（TOF < 50 ppm）試験なしではPFASフリーを保証しません。'
        },
        {
          title: '3. 高温油脂・電子レンジ蒸気によるフッ素系添加剤の溶出加速',
          type: 'warning',
          content: '油脂の多いテイクアウト食品（グラタン、カレー、炒め物など）をバガス製ボウルに入れたまま電子レンジで加熱すると、70°C〜95°C超の高温油脂が抽出溶媒となり、蒸気で膨潤したセルロース繊維から短鎖PFAS（PFHxA等）や揮発性フルオロテロマーアルコール（FTOH）が溶け出しやすくなります。',
          boxText: 'モールド紙容器のレンジ加熱厳禁：70°C以上の油分と蒸気は、耐油コーティングや微量の化学物質を料理へ直接移行させます。'
        },
        {
          title: '4. PFAS代替バリア（水性・鉱物クレイ・PLA）の安全性と限界',
          type: 'tip',
          content: '代替技術として水性バリアコート、鉱物クレイ塗工、極薄PLA/PHAラミネートが進んでいます。ただしPLA被膜は55°C〜60°Cで軟化するため、EU規則 2026/2412は40°C超での長時間接触を制限しています。',
          boxText: '次世代バリアの注意点：鉱物クレイや認証済み水性バリア製品を選び、PLA内張りの紙容器には60°C超の熱々料理を長時間入れないでください。'
        },
        {
          title: '5. 家庭での実践ルール：即座にホウケイ酸ガラス・陶磁器へ移し替える',
          type: 'success',
          content: 'デリバリーの温かい料理は受け取り後15分以内に蓋を開けて陶器皿やホウケイ酸ガラス容器へ移し替え、使い捨て紙容器のまま電子レンジで絶対に温め直さず、普段の弁当や保存には304ステンレスやホウケイ酸ガラス容器を使用しましょう。',
          boxText: '移行ゼロ習慣：熱い油物テイクアウトは即座にガラスや陶器皿へ移し、紙容器のままレンジ加熱しないことが最も確実な防御策です。'
        }
      ],
      conclusion: '2026年8月12日施行のEU PPWR（25 ppb / 250 ppb / 50 ppm規制）により食品包装からのPFAS排除が法的に確定しました。家庭ではテイクアウト食品をすぐ陶器・ホウケイ酸ガラスに移して温め直すだけで、不要な溶出曝露を確実に断てます。',
      faqs: [
        {
          question: 'EU PPWRの食品包装PFAS規制はいつ施行されましたか？',
          answer: '2026年8月12日に規則 (EU) 2025/40 第5条(5)に基づき完全施行され、旧在庫の特例猶予は設けられていません。'
        },
        {
          question: 'EU 2025/40におけるPFASの具体的な上限値はいくつですか？',
          answer: '個別非高分子PFAS 25 ppb以下、対象非高分子PFAS合計 250 ppb以下、高分子PFASを含む総PFAS 50 ppm（50 mg/kg）以下の3段階すべてを満たす必要があります。'
        },
        {
          question: '「コンポスト可能」と書かれたバガス製容器はすべてPFASフリーですか？',
          answer: 'いいえ。従来品の多くが耐油処理にフッ素系薬剤を用いていたため、BPI等の無フッ素認証や総有機フッ素50 ppm未満の試験確認が不可欠です。'
        },
        {
          question: '紙製テイクアウトボウルのまま電子レンジで温め直しても安全ですか？',
          answer: 'いいえ。70°C以上の熱い油や蒸気がコーティング剤や接着剤成分の移行を促進するため、必ずホウケイ酸ガラスや陶器皿に移してから加熱してください。'
        },
        {
          question: '総フッ素（TF）検査で50 ppmを超えた場合はどうなりますか？',
          answer: '企業は熱分解GC/MS等の二次スペシエーション分析や技術文書により、検出されたフッ素が規制対象のPFAS由来でないことを立証する必要があります。'
        }
      ],
      relatedTools: [
        { name: '調理器具 有害溶出・PFASリスクスコアカード', url: '/ja/tools/toxic-leaching-scorecard/' },
        { name: '食品接触化学物質移行・溶出動力学予測シミュレーター', url: '/ja/tools/food-contact-migration-predictor/' },
        { name: '電子レンジ用ポップコーン袋 PFAS移行モデラー', url: '/ja/tools/microwave-popcorn-pfas-modeler/' }
      ]
    },
    {
      slug: 'cooking-oil-smoke-point-myth-evoo-avocado-adulteration-safety',
      title: '「発煙点神話」の崩壊とアボカド油偽装問題：De Alzaa (2018)・UC Davis純度調査・4-HNEとアクロレイン対策',
      category: 'food-safety',
      excerpt: 'ポリフェノール豊富なEVOOが発煙点の高い多価不飽和種子油より有害アルデヒド（4-HNE・IARC 2Aアクロレイン）を抑えるDe Alzaa (2018) 研究と、市販アボカド油の70%〜82%が不合格だったUC Davis調査を詳解。',
      date: '2026-11-27',
      readTime: '16分で読める',
      author: 'IsItKitchenSafe',
      intro: '「エキストラバージンオリーブオイル（EVOO）は発煙点（約190〜210°C）が低いので炒め物や揚げ物には不向きで、高温調理にはアボカド油を使うべき」という定説は広く信じられています。しかし現代の脂質化学は両方の常識を覆しました。発煙点の高さは有毒アルデヒドの発生抑止を保証せず、さらにUC Davisの研究により市販アボカド油の大部分が酸化酸敗または安価な種子油で偽装されていた事実が明らかになりました。',
      sections: [
        {
          title: '1. De Alzaaら (2018)：なぜ「発煙点」では調理油の安全性を測れないのか',
          type: 'fact',
          content: '2018年にActa Scientific Nutritional Health誌に掲載されたDe Alzaa、Guillaume、Ravettiの研究では、市販調理油10種を240°C（20分）および180°C（6時間）で加熱し、総極性化合物（TPM）と酸化分解アルデヒドを定量しました。驚くべきことに、EVOOは発煙点が比較的低い（約190〜210°C）にもかかわらず、一価不飽和オレイン酸（70〜80%）と豊富な天然ポリフェノール抗酸化物質の働きにより、極性化合物および有毒アルデヒドの生成量が全油脂中で最小であり、発煙点の高いグレープシード油やキャノーラ油、米油を上回る安定性を示しました。',
          boxText: '真の熱安定性（De Alzaa 2018）：180°C〜210°Cの通常加熱において、EVOOは高発煙点の多価不飽和種子油よりも有害な極性化合物やアルデヒドの生成を抑えます。'
        },
        {
          title: '2. 細胞毒性アルデヒド 4-HNE・MDA と IARC 2A アクロレイン油煙',
          type: 'warning',
          content: 'リノール酸などの多価不飽和脂肪酸（PUFA）を過熱すると脂質過酸化が連鎖し、食品中に細胞毒性の高い4-ヒドロキシノネナール（4-HNE）やマロンジアルデヒド（MDA）が蓄積します。同時にグリセリン骨格の脱水により青い煙とともに揮発性アクロレインが発生します。IARCはアクロレインを発がん性グループ2A（おそらく発がん性がある）に分類しており、200°C以上の高温調理時は必ず屋外排気レンジフードを稼働させてください。',
          boxText: 'アクロレイン＆4-HNE警告：青い油煙にはIARC 2Aの発がん物質アクロレインが含まれます。高温調理時は必ず屋外排気型換気扇を回してください。'
        },
        {
          title: '3. UC Davis（Wang研究室）衝撃調査：2020年82%・2023年約70%のアボカド油が不合格',
          type: 'warning',
          content: '本物の精製アボカド油は発煙点249°C〜271°Cでオレイン酸に富む優れた油です。しかしカリフォルニア大学デービス校（UC Davis）のSelina Wang教授らによる2020年調査では、米国小売アボカド油の82%が賞味期限前に酸化酸敗しているか、安価な大豆油・サフラワー油で希釈・偽装されていた（100%純粋と表示しながらほぼ大豆油の製品も存在）ことが判明しました。2023年のPB商品追跡調査でも約70%が基準未達でした。',
          boxText: 'アボカド油偽装リスク：UC Davisの調査で2020年は82%、2023年も約70%の市販アボカド油が酸敗または大豆油等での混和偽装と判明しました。'
        },
        {
          title: '4. 大豆レシチン入りスプレーオイル：175°C以上で粘着ワニス化して鍋を傷める',
          type: 'warning',
          content: 'エアゾール式クッキングスプレーに添加される乳化剤（大豆レシチン）やシリコーン消泡剤は、約175°C（350°F）から熱重合を起こし、テフロン（PTFE）やセラミックコート表面に洗っても落ちない琥珀色の粘着樹脂膜を焼き付けます。またLPG噴射ガスによるコンロやエアフライヤー内部での引火リスクも伴います。',
          boxText: 'フッ素・セラミック鍋にスプレー油厳禁：175°C超で大豆レシチンが焦げ付き樹脂化して非粘着性能を破壊します。詰め替え式ガラスミスターをお使いください。'
        },
        {
          title: '5. 温度帯別の安全な調理油選定と遮光保管ルール',
          type: 'success',
          content: '1）日常の炒め物・オーブン焼き（210°C以下）の9割は、遮光ガラス瓶や缶入りの新鮮なEVOOを使い、コンロから離れた冷暗所に保管する。2）鉄フライパンでの220°C超の強火焼き付けには、高オレイン酸ひまわり油・紅花油、ギー、または第三者純度証明のある純正精製アボカド油を選ぶ。3）泡立ちや変色が出た揚げ油は再利用せず廃棄し、予熱前から換気扇をオンにする。',
          boxText: '安全な油使い分け：210°C以下は新鮮なEVOO、220°C超の高温焼きは純度検証済みのアボカド油か高オレイン酸油を選び、必ず冷暗所保管・屋外排気を行ってください。'
        }
      ],
      conclusion: '「発煙点だけの神話」をDe Alzaa（2018）の酸化安定性データとUC Davisの偽装警告でアップデートすることで、4-HNE・MDA・アクロレインへの曝露を大幅に削減できます。210°C以下は新鮮な遮光瓶EVOOを基本とし、高温焼きには信頼できる純正アボカド油を選び、レシチンスプレーを避けて換気扇を活用しましょう。',
      faqs: [
        {
          question: 'エキストラバージンオリーブオイル（EVOO）で揚げ焼きや炒め物をしても本当に安全ですか？',
          answer: 'はい。De Alzaaら（2018）の研究により、EVOOは発煙点が約190〜210°Cでありながら、高いオレイン酸比率とポリフェノール抗酸化成分により、キャノーラ油やグレープシード油などの高発煙点種子油よりも加熱時の有害極性物質や4-HNE・アクロレイン生成量が少ないことが実証されています。'
        },
        {
          question: 'UC Davisのアボカド油調査では具体的に何が見つかりましたか？',
          answer: 'Selina Wang教授らのチームは、2020年の調査で市販アボカド油の82%、2023年のプライベートブランド調査でも約70%が、賞味期限前に酸敗していたか安価な大豆油・サフラワー油等で混和偽装されていたことを報告しました。'
        },
        {
          question: '油から煙が出るとどんな有害物質が発生しますか？',
          answer: '青い煙は油の熱分解を示し、空気中にIARCグループ2A発がん性物質のアクロレインとPM2.5微粒子を放出するほか、調理中の油内に細胞毒性の4-HNEやMDAを生成します。'
        },
        {
          question: 'クッキングスプレーがセラミックやテフロンフライパンをダメにするのはなぜですか？',
          answer: 'スプレーに含まれる乳化剤の大豆レシチンが175°C以上で熱重合し、コーティング表面に固着するベタついた琥珀色のワニス膜を作って焦げ付きやすくなるためです。'
        },
        {
          question: 'オリーブオイルやアボカド油の正しい保存方法は？',
          answer: '収穫日の新しい製品を遮光性の濃い緑色ガラス瓶または金属缶で購入し、使用後はすぐしっかり栓をして、コンロの熱や直射日光が当たらない涼しい戸棚に保管してください。'
        }
      ],
      relatedTools: [
        { name: '食用油の発煙点＆発がん性アルデヒド生成シミュレーター', url: '/ja/tools/culinary-oil-smoke-point-simulator/' },
        { name: '食用油の煙点・安全な揚げ焼き温度ファインダー', url: '/ja/tools/cooking-oil-smoke-point-finder/' },
        { name: 'エアフライヤー脂質酸化・4-HNE毒性モデラー', url: '/ja/tools/air-fryer-lipid-oxidation-modeler/' }
      ]
    }
  ]
};

const LOCALE_FILES = {
  en: 'blog.json',
  es: 'blog.es.json',
  pt: 'blog.pt.json',
  'zh-cn': 'blog.zh-cn.json',
  ja: 'blog.ja.json'
};

function run() {
  let enSlugs = [];
  for (const [lang, file] of Object.entries(LOCALE_FILES)) {
    const filePath = path.join(DATA_DIR, file);
    const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const newItems = GUIDES[lang];
    const newSlugSet = new Set(newItems.map((i) => i.slug));

    const filtered = existing.filter((item) => !newSlugSet.has(item.slug));
    const merged = [...filtered, ...newItems];

    const raw = JSON.stringify(merged, null, 2) + '\n';
    if (/\$[^\$]+\$/.test(JSON.stringify(newItems))) {
      throw new Error(`Raw LaTeX delimiter detected in ${lang} Wave 92 guides!`);
    }

    fs.writeFileSync(filePath, raw, 'utf8');
    if (lang === 'en') {
      enSlugs = merged.map((i) => i.slug);
    } else {
      const locSlugs = merged.map((i) => i.slug);
      if (locSlugs.length !== enSlugs.length || locSlugs.some((s, idx) => s !== enSlugs[idx])) {
        throw new Error(`Slug parity mismatch in ${file}`);
      }
    }
    console.log(`Updated ${file}: ${merged.length} guides total.`);
  }
}

run();
