const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-26';

console.log('=== GENERATING WAVE 78 AUTHORITATIVE SAFETY GUIDES (116 -> 119 across 5 languages) ===');

const guidesEn = [
  {
    slug: 'parchment-paper-pfas-pfhxa-silicone-coating-safety',
    title: 'Parchment Paper, Pizza Boxes & Bakery Wrappers: EU 2026 PFHxA Ban, Silicone vs. Quilon Coatings, Chlorine Bleaching & 450°F Oven Scorch Safety',
    category: 'materials',
    excerpt: 'Does your parchment paper contain PFAS, chromium Quilon, or silicone? Learn how EU Regulation 2024/2462 (Oct 2026 PFHxA ban) and FDA greaseproof rules apply, why bleached vs. unbleached matters, and safe 420°F–450°F oven limits.',
    date: waveDate,
    readTime: '17 min read',
    author: 'IsItKitchenSafe',
    intro: 'Baking parchment paper, fast-food bakery bags, and corrugated pizza boxes rely on microscopic surface treatments to stop hot butter, oils, and batters from soaking through cellulose fibers. For decades, two very different chemical classes dominated greaseproof kitchen paper: fluorochemical per- and polyfluoroalkyl substances (PFAS) on uncoated food wrappers, and either polydimethylsiloxane (silicone) or chromium-stearate complexes (Quilon) on baking parchment. In October 2026, a major regulatory shift took legal effect as the European Union REACH Entry 79 restriction (Regulation (EU) 2024/2462) enforced strict bans on undecafluorohexanoic acid (PFHxA)—a persistent C6 PFAS substitute—across paper and cardboard food packaging alongside US FDA greaseproofing phase-outs and autumn 2026 German BfR Recommendation XXXVI updates. Understanding how silicone-coated parchment differs from Quilon-treated sheets, how chlorine bleaching affects dioxin traces, and why exceeding 420°F–450°F (215°C–232°C) triggers charring or air fryer ignition keeps your baking genuinely non-toxic.',
    sections: [
      {
        title: 'EU October 2026 PFHxA Ban (REACH Entry 79) & FDA Greaseproof Paper Phase-Out',
        content: 'When manufacturers voluntarily phased out legacy C8 PFOA coatings, many greaseproof bakery wrappers, microwave bags, and molded fiber bowls switched to C6 fluorotelomer chemistry, which degrades into undecafluorohexanoic acid (PFHxA). Under Commission Regulation (EU) 2024/2462 (REACH Entry 79), whose 24-month transition window expired in October 2026, paper and cardboard food contact materials cannot exceed 25 parts per billion (ppb) for PFHxA and its salts or 1,000 ppb for PFHxA-related substances. Coupled with the US FDA 2024–2026 market phase-out of PFAS grease-proofing agents and Germany\'s BfR Recommendation XXXVI updates, commercial wrappers are rapidly transitioning to mechanical supercalendering (glassine), biopolymer barriers, and food-grade silicone emulsions.',
        type: 'fact',
        boxText: 'OCTOBER 2026 MILESTONE: EU REACH Entry 79 (Regulation 2024/2462) now strictly caps C6 PFHxA at 25 ppb in paper and cardboard food packaging, closing the loophole left after PFOA phase-outs.'
      },
      {
        title: 'Silicone-Coated vs. Quilon Parchment: Chromium(III) Complexes vs. Polydimethylsiloxane',
        content: 'True baking parchment is rarely treated with PFAS—instead, manufacturers coat sulfuric-acid-treated cellulose with either platinum-cured polydimethylsiloxane (silicone) or Quilon (a Werner-type chromium(III) stearate complex). Quilon-coated parchment is single-use, slightly cheaper, and turns brittle after one bake; while trivalent chromium(III) is far less toxic than hexavalent chromium(VI), aggressive thermal charring or acidic contact raises trace heavy-metal concerns and prevents reuse. Premium silicone-coated parchment uses cross-linked PDMS conforming to FDA 21 CFR § 176.170 and German BfR Recommendations XV/XXXVI, delivering superior non-stick release across multiple cookie batches.',
        type: 'tip',
        boxText: 'COATING CHECK: Choose explicit "Silicone-Coated, PFAS-Free" parchment paper rather than budget commercial bakery Quilon liners, which contain chromium complexes and degrade after a single bake.'
      },
      {
        title: 'Elemental Chlorine-Free (ECF) vs. Totally Chlorine-Free (TCF) Unbleached Paper',
        content: 'Consumers often see bright white versus brown unbleached parchment rolls side by side. Traditional elemental chlorine gas (Cl2) bleaching produced trace polychlorinated dibenzodioxins (PCDD) and furans. Modern white parchment generally uses Elemental Chlorine-Free (ECF) chlorine dioxide bleaching, which cuts dioxin formation by >99%, whereas unbleached brown parchment is Totally Chlorine-Free (TCF), skipping chlorine chemistry altogether. Crucially, unbleached brown status alone does not prove a paper wrapper is PFAS-free—many recycled molded fiber bowls and brown greaseproof bags still needed analytical verification prior to 2026 phase-outs.',
        type: 'fact',
        boxText: 'BLEACHING VS. PFAS: Brown "unbleached" TCF paper avoids chlorine bleaching, yet color alone does not guarantee PFAS-free status—always verify explicit "PFAS-Free" and "Silicone-Coated" labeling.'
      },
      {
        title: '420°F–450°F (215°C–232°C) Thermal Scorch Ceiling & Cyclic Siloxane Behavior',
        content: 'Most silicone-coated parchment rolls carry a maximum temperature rating of 420°F to 450°F (215°C–232°C). Above 450°F, cellulose fibers rapidly dehydrate, carbonize, and emit volatile smoke while silicone surface films oxidize and crumble. Never place parchment paper under an electric or gas broiler element, where radiant surface temperatures exceed 500°F–550°F (260°C–288°C) and ignite exposed paper corners in seconds. Inside air fryers, forced-convection airflow at 150–200 CFM lifts unweighted parchment sheets directly into exposed 400°C–600°C heating coils unless pinned securely by food.',
        type: 'warning',
        boxText: 'HEAT LIMIT: Cap oven baking parchment at 420°F–450°F (215°C–232°C), ban parchment from broilers, and never preheat an empty air fryer with a loose paper liner inside.'
      },
      {
        title: 'Grease-Transfer Traps: Wax Paper Confusion & Pizza Box Migration Physics',
        content: 'Two common kitchen mistakes bypass paper safety barriers entirely. First, substituting paraffin or soybean wax paper inside a 350°F+ oven melts the low-melting-point wax (melting point ~50°C–65°C) straight onto food and causes pan smoke fires—wax paper is strictly for cold counter prep and wrapping. Second, hot cheese and pepperoni oils sitting inside corrugated pizza boxes or fast-food wrappers accelerate partition-driven extraction of residual inks, mineral oil hydrocarbons (MOSH/MOAH), or legacy fluorinated finishes from recycled cardboard layers; transferring hot takeout onto ceramic or glass plates immediately stops thermal migration.',
        type: 'tip',
        boxText: 'COMMON TRAP: Never bake with wax paper (its coating melts at 120°F–150°F and smokes), and transfer hot pizza or greasy takeout onto ceramic or borosilicate glass plates immediately.'
      }
    ],
    conclusion: 'Selecting safe kitchen paper comes down to verifying three clear specs: look for "Totally Chlorine-Free (TCF), PFAS-Free, Silicone-Coated" baking parchment, keep oven temperatures at or below 420°F–450°F (never under the broiler), weight air fryer sheets securely with food, and transfer hot takeout out of cardboard or greaseproof wrappers onto inert glass or ceramic.',
    faqs: [
      {
        question: 'Does parchment paper contain PFAS forever chemicals?',
        answer: 'Standard home baking parchment paper relies on silicone or chromium-stearate (Quilon) for non-stick release rather than PFAS. However, some greaseproof wrappers, bakery bags, and paperboard liners historically used PFAS (such as C6 PFHxA), which is now strictly restricted under EU Regulation (EU) 2024/2462 (effective October 2026) and US FDA phase-outs.'
      },
      {
        question: 'What is the difference between silicone-coated and Quilon parchment paper?',
        answer: 'Silicone-coated parchment uses food-grade polydimethylsiloxane (PDMS), tolerates 420°F–450°F, releases sticky cookies cleanly, and is free of heavy metals. Quilon parchment uses a chromium(III) stearate treatment intended for single-use commercial baking and leaves subtle chromium traces if scorched.'
      },
      {
        question: 'Is unbleached brown parchment paper healthier than white parchment paper?',
        answer: 'Unbleached TCF brown parchment skips chlorine dioxide bleaching entirely, avoiding trace bleaching byproducts, while modern white ECF parchment reduces dioxins to negligible levels. Both are safe when certified PFAS-free and silicone-coated, provided you stay within rated temperature limits.'
      },
      {
        question: 'Can parchment paper catch fire in the oven or air fryer?',
        answer: 'Yes. Unweighted parchment paper in an air fryer can be sucked upward into the glowing heating coil (400°C–600°C) during preheating and ignite within seconds. In conventional ovens, parchment scorches above 450°F and can catch fire under a broiler or if edges touch heating elements.'
      },
      {
        question: 'Can you use wax paper instead of parchment paper in the oven?',
        answer: 'No. Wax paper is coated with paraffin or soy wax that melts around 120°F–150°F (50°C–65°C), smoking heavily, ruining food flavor, and creating a fire hazard inside ovens or air fryers.'
      }
    ],
    relatedTools: [
      { name: 'Silicone Bakeware & Oligomer Volatilization Analyzer', url: '/tools/silicone-bakeware-oligomer-analyzer/' },
      { name: 'Air Fryer Parchment & Liner Fire Hazard Simulator', url: '/tools/air-fryer-liner-fire-hazard-simulator/' },
      { name: 'Oven Rack & Bakeware Material Heat Adjuster', url: '/tools/oven-rack-bakeware-heat-adjuster/' }
    ]
  },
  {
    slug: 'recalled-air-fryer-pressure-cooker-cpsc-2026-safety-guide',
    title: 'Recalled Air Fryers & Pressure Cookers (2025–2026 CPSC Alerts): Door Latch Burns, Lid Ejection Physics, Wiring Fire Hazards & Serial Number Recall Check',
    category: 'appliances',
    excerpt: 'Are your air fryer oven or electric pressure cooker under a 2026 CPSC safety warning or recall? Review verified Tristar, Gourmia, Kalorik, SharkNinja, and Cosori hazards, failure physics, and safe model-plate checks.',
    date: waveDate,
    readTime: '18 min read',
    author: 'IsItKitchenSafe',
    intro: 'Countertop air fryers, toaster-style French-door air fryer ovens, and electric multi-cookers have transformed weeknight cooking—yet 2025 and 2026 have witnessed an unprecedented wave of urgent U.S. Consumer Product Safety Commission (CPSC) recalls and stop-use warnings affecting millions of kitchen units. Between February and November 2026 alone, the CPSC issued critical alerts covering Tristar Power Quick Pot 6-quart pressure cookers (Model Y6D-36, ~393,000 units), Gourmia 6-quart digital pressure cookers (Model GPC625, ~43,500 units), Gourmia 9-slice digital air fryer ovens (Model GTF7530, ~175,951 units), and Kalorik MAXX French-door air fryer ovens, following prior multi-million-unit recalls for SharkNinja Foodi OP300 pressure cookers and Insignia, Cosori, and PowerXL air fryers. Understanding the mechanical and electrical failure modes behind these recalls—and verifying your appliance rating plate in 60 seconds—prevents severe steam scalds, forearm burns, and electrical kitchen fires.',
    sections: [
      {
        title: '2026 CPSC Urgent Warnings: Tristar Y6D-36, Gourmia GPC625 & SharkNinja Lid Ejection',
        content: 'Electric pressure cookers rely on a floating pressure pin and interlocking lid ring governed by UL 1026 safety standards to physically prevent opening while internal steam exceeds ~0.5–1 PSI. In October 2026, the CPSC warned consumers to stop using roughly 393,000 Tristar Power Quick Pot 6-Quart Pressure Cookers (Model Y6D-36) after dozens of reports of lids opening under pressure, following a February 2026 CPSC warning on ~43,500 Gourmia 6-Quart Pressure Cookers (Model GPC625) and the 2025 SharkNinja Foodi OP300-Series recall (~1.8 million units). When residual starchy foam jams a float valve or lid-lock tolerances wear down, the pressurized vessel (~10–12 PSI, 240°F/115°C) explosively flashes superheated liquid into steam, ejecting scalding contents across the cook.',
        type: 'warning',
        boxText: 'PRESSURE COOKER ALERT: Check the bottom or back rating label for Tristar Power Quick Pot Model Y6D-36, Gourmia Model GPC625, or SharkNinja Foodi OP300-series—discontinue use immediately if affected.'
      },
      {
        title: 'Air Fryer Oven Door Slam Hazards: Gourmia GTF7530 & Kalorik MAXX French Doors',
        content: 'Countertop French-door and pull-down air fryer ovens pack 1,700W–1,800W radiant quartz heating elements inside tight metal cavities with spring-tensioned glass doors. In late 2026, CPSC issued both a recall for ~175,951 Gourmia 9-Slice Digital Air Fryer Ovens (Model GTF7530, 57 incident reports and 40 burn injuries) and an urgent stop-use warning for Kalorik MAXX and MAXX Advance French-door air fryer ovens. Repeated thermal cycling softens plastic cam detents or weakens tension springs, allowing hot 400°F–450°F glass doors to snap shut directly onto a user\'s forearm or hand while sliding racks in or out.',
        type: 'warning',
        boxText: 'DOOR LATCH HAZARD: Gourmia GTF7530 air fryer ovens and Kalorik MAXX French-door units pose acute forearm burn risks from spring-loaded doors closing unexpectedly during food removal.'
      },
      {
        title: 'Electrical Thermal Runaway in Basket Air Fryers: I²R Crimp Heating & Plastic Melt',
        content: 'Earlier massive basket air fryer recalls (including Cosori, Best Buy Insignia, and PowerXL Dual Basket models) highlighted an electrical vulnerability inside high-wattage countertop appliances: closed-end wire crimp connectors and spade terminals carrying 12–15 amps continuously. If vibration or imperfect factory crimping raises contact resistance even slightly (R), resistive Joule heating (P = I²R) escalates inside the unventilated upper motor housing, melting wire insulation, charring internal plastic shrouds, and tripping thermal cutoffs too late to prevent smoke or cabinet fires.',
        type: 'fact',
        boxText: 'ELECTRICAL PHYSICS: High-draw 1,500W–1,800W air fryers push 12–15 amps through tiny internal connectors; loose crimps generate localized I²R heat that melts housing plastic—always unplug when idle.'
      },
      {
        title: 'How to Read Your Appliance Rating Plate & Verify Serial/Date Codes in 60 Seconds',
        content: 'Unplug the appliance, let it cool completely, and inspect the permanent metallic or silver/black UL rating sticker affixed to the underside or rear chassis. Record four identifiers: (1) Exact Brand and Model Number (e.g., Y6D-36, GPC625, GTF7530, OP301), (2) Date Code or Batch Lot (often formatted as YYWW or MM/YYYY), (3) Retailer SKU or UPC-A barcode if you still have packaging or order email receipts, and (4) Country/UL file number. Cross-reference these identifiers against official CPSC recall dockets or our Barcode & Product Recalls Scanner before buying secondhand appliances at thrift stores or online marketplaces.',
        type: 'tip',
        boxText: '60-SECOND AUDIT: Flip unplugged, cool appliances to read the underside model sticker (not just the front logo) before everyday use or before purchasing secondhand kitchenware.'
      },
      {
        title: 'Why You Must Never Donate or Resell Recalled Units—Plus Safe Cord-Cut Disposal',
        content: 'Under federal consumer safety law and CPSC guidance, it is illegal to resell or knowingly donate recalled consumer products, because thrift stores and community swaps unwittingly pass burn and fire hazards to new families. Notably, for 2026 stop-use warnings where original corporate importers dissolved or restructured (such as the Tristar Y6D-36 and Kalorik MAXX alerts), no free manufacturer repair kit exists. Render decommissioned recalled appliances permanently unusable by unplugging them, cutting the power cord close to the chassis (and documenting the cut cord/model sticker if claiming a manufacturer recall remedy), and recycling at a municipal e-waste drop-off.',
        type: 'warning',
        boxText: 'SAFE DISPOSAL: Never donate or resell a recalled air fryer or pressure cooker. After documenting any required recall photo, cut the cord close to the housing and recycle via municipal e-waste.'
      }
    ],
    conclusion: 'Taking two minutes to verify model numbers on your air fryer, toaster oven, and electric pressure cooker protects your household from the leading mechanical and electrical hazards driving 2025–2026 CPSC recalls. Always unplug high-wattage basket fryers after cooling, never bypass pressure-lid interlocks or force stuck lids, and run periodic checks in our Product Recalls Scanner.',
    faqs: [
      {
        question: 'Which pressure cookers and air fryers were recalled or warned by the CPSC in 2026?',
        answer: 'Major 2026 CPSC actions include urgent stop-use warnings for Tristar Power Quick Pot 6-Quart Pressure Cookers (Model Y6D-36, Oct 2026), Gourmia 6-Quart Digital Pressure Cookers (Model GPC625, Feb 2026), Kalorik MAXX French-door air fryer ovens (Oct 2026), and a recall of Gourmia 9-Slice Digital Air Fryer Ovens (Model GTF7530, Nov 2026), alongside prior SharkNinja OP300, Cosori, and Insignia recalls.'
      },
      {
        question: 'Why did the CPSC issue a "stop using and dispose" warning without a free replacement for some 2026 models?',
        answer: 'When original manufacturers or distributors cease operations, dissolve, or fail to agree to a formal recall remedy (as noted in the Tristar Y6D-36 and Kalorik MAXX notices), the CPSC issues a direct unilateral public warning advising consumers to stop using and safely discard the unit.'
      },
      {
        question: 'Is it safe to keep using a recalled pressure cooker if I always wait for Natural Pressure Release?',
        answer: 'No. Defective interlocking pins or worn lid tabs can fail unpredictably even when you think pressure has dissipated, or a jammed float pin can leave scalding superheated liquid trapped inside. Stop using any recalled or CPSC-warned pressure cooker immediately.'
      },
      {
        question: 'Why should air fryers be unplugged when not in use?',
        answer: 'Many air fryers maintain standby power to touch panels and relays continuously. If internal wire connectors, control boards, or moisture from steam vents develop faults, unplugging the unit after use eliminates standby electrical fire risks.'
      },
      {
        question: 'Can I donate a recalled kitchen appliance to a thrift store if it still works fine for me?',
        answer: 'No. Reselling or donating recalled products is prohibited under US CPSC rules and transfers severe burn or fire hazards to another household. Follow official recall remedy instructions or cut the cord and recycle at an e-waste facility.'
      }
    ],
    relatedTools: [
      { name: 'Barcode & Product Packaging Recalls Scanner', url: '/tools/product-recalls-scanner/' },
      { name: 'Kitchen Hazard Emergency Triage & Containment', url: '/tools/kitchen-hazard-emergency-triage/' },
      { name: 'Pressure Cooker & Instant Pot Fill-Line Checker', url: '/tools/instant-pot-pressure-release-checker/' }
    ]
  },
  {
    slug: 'bpa-free-substitutes-bps-bpf-food-packaging-efsa-safety',
    title: 'Are "BPA-Free" Plastics Safe? BPS, BPF, Tritan & Regrettable Substitutions Under EU 2024/3190 & EFSA 2026 Food Contact Rules',
    category: 'materials',
    excerpt: 'Why "BPA-Free" labels often hide structurally similar BPS or BPF bisphenols—and how EU Regulation 2024/3190, EFSA October 2026 alternative bisphenol guidance, and glass or 316 stainless swaps protect your kitchen.',
    date: waveDate,
    readTime: '17 min read',
    author: 'IsItKitchenSafe',
    intro: 'Walk down any kitchenware aisle and nearly every clear plastic blender pitcher, baby bottle, water bottle, and food storage bin prominently boasts a "BPA-Free" sticker. Yet environmental toxicologists warn that "BPA-free" has frequently functioned as a classic regrettable substitution: removing Bisphenol A (BPA) while replacing it with structurally near-identical chemical cousins like Bisphenol S (BPS) and Bisphenol F (BPF), or uncharacterized cyclic polyester oligomers. Following the European Food Safety Authority (EFSA) landmark 20,000-fold reduction of the BPA Tolerable Daily Intake to 0.2 ng/kg body weight/day, Commission Regulation (EU) 2024/3190 enacted sweeping prohibitions across BPA and hazardous bisphenol derivatives in food contact materials, and in October 2026 EFSA published dedicated guidance tightening safety-assessment data requirements for alternative bisphenols alongside SVHC screening of plastic food-contact monomers. Understanding why BPS resists thermal hydrolysis while retaining endocrine affinity, how Tritan copolyesters behave under dishwasher alkali, and which materials are genuinely bisphenol-free empowers safer everyday food storage.',
    sections: [
      {
        title: 'EU 2024/3190 & EFSA October 2026 Rules: Closing the Regrettable Substitution Loophole',
        content: 'For over a decade, manufacturers swapped Bisphenol A for Bisphenol S (BPS) and Bisphenol F (BPF) in polyethersulfone (PES) baby bottles, thermal receipt coatings, and epoxy food-can liners so labels could legally claim "BPA-free." However, both BPS and BPF share the dual-phenol ring geometry that binds estrogen, androgen, and thyroid hormone receptors. Under Commission Regulation (EU) 2024/3190—broadly prohibiting BPA and restricting other hazardous bisphenols and bisphenol derivatives—paired with EFSA\'s October 2026 scientific guidance on safety data requirements for alternative bisphenols and SVHC plastic screening, regulators now treat bisphenol structural analogs as a class rather than testing one chemical at a time.',
        type: 'fact',
        boxText: 'REGULATORY SHIFT: EU Regulation 2024/3190 and EFSA October 2026 alternative-bisphenol guidance close the "BPA-free" loophole, scrutinizing BPS, BPF, and structural analogs as endocrine hazards.'
      },
      {
        title: 'BPS & BPF Toxicology: Thermal Stability vs. Estrogenic & Metabolic Potency',
        content: 'Bisphenol S replaces BPA\'s central isopropylidene bridge with a sulfonyl group (-SO2-), giving BPS higher heat resistance and slower initial breakdown in boiling water—an engineering advantage that ironically allowed companies to market BPS-containing PES plastics for hot drinks. Yet toxicology bioassays demonstrate that BPS exhibits estrogen-receptor binding potency comparable to BPA, higher dermal and gastrointestinal persistence, and measurable disruption of pancreatic beta-cell signaling and embryonic neurodevelopment at nanomolar exposures.',
        type: 'warning',
        boxText: 'HEAT TRAP: BPS resists initial boiling better than BPA, yet once migrated into hot fatty or acidic foods it exerts comparable endocrine-disrupting potency and slower biological clearance.'
      },
      {
        title: 'Eastman Tritan™ Copolyester, PPSU & Polypropylene (#5 PP): What Is Actually Inside?',
        content: 'Not all BPA-free plastics rely on bisphenols. Eastman Tritan™ copolyester is synthesized from dimethyl terephthalate (DMT), cyclohexanedimethanol (CHDM), and tetramethylcyclobutanediol (TMCD), containing zero BPA, BPS, or BPF. Polyphenylsulfone (PPSU) uses diphenyl sulfone links (though trace synthesis residues require verification), while Polypropylene (#5 PP) is a pure hydrocarbon polyolefin ([C3H6]n). However, chemical purity from bisphenols does not make plastics inert: Nature Food (Li et al., 2020) proved #5 PP baby bottles shed 1.3 to 16.2 million microplastics per liter at 70°C, and repeated dishwasher alkaline cycles (pH 10.5–11.5) hydrolyze polyester bonds in Tritan, crazing surfaces and releasing cyclic oligomers.',
        type: 'fact',
        boxText: 'POLYMER NUANCE: Tritan and #5 PP contain zero bisphenols, yet #5 PP sheds millions of microplastics at 70°C and dishwasher alkali crazes copolyesters into cyclic oligomer release.'
      },
      {
        title: 'Hidden Bisphenol Sources: Canned Food BADGE Liners, Spice Lids & Recycled Plastics',
        content: 'Beyond clear pitchers and bottles, consumers encounter bisphenols and epoxy cross-linkers (BADGE/BFDGE) inside metal food can coatings, glass jar twist-off lug-cap plastisols (especially oily pestos, tomato sauces, and pickled condiments where fat touches the lid gasket), and post-consumer recycled plastic containers. Even when cans transition to "BPA non-intent" acrylic or polyester inner varnishes, acidic tomatoes (pH 4.0–4.4) and long shelf storage require inspecting manufacturer disclosures and never heating food directly inside metal cans.',
        type: 'tip',
        boxText: 'HIDDEN SOURCES: Avoid heating food inside metal cans and prevent hot oily sauces from resting upside-down against plasticized jar lid gaskets.'
      },
      {
        title: 'Zero-Bisphenol Kitchen Upgrades: Borosilicate 3.3 Glass, 304/316 Steel & Platinum Silicone',
        content: 'Eliminating bisphenol uncertainty completely requires stepping outside petrochemical thermoplastics for any hot, acidic, fatty, or microwave-heated food contact. Type 3.3 borosilicate glass (SiO2/B2O3) and glazed vitreous porcelain contain zero organic monomers, plasticizers, or bisphenols and endure boiling, microwaving, and dishwasher alkali indefinitely. Food-grade AISI 304 (18/8) and molybdenum-alloyed 316 stainless steel excel for water bottles, travel mugs, and stovetop cooking, while verified BfR XV platinum-cured silicone gaskets and lids avoid phthalates and bisphenols when kept away from 220°C+ fat roasting.',
        type: 'success',
        boxText: 'GOLD-STANDARD SWAPS: Use Type 3.3 borosilicate glass for microwave reheating and hot leftovers, and AISI 304/316 stainless steel for unbreakable bottles and insulated flasks.'
      }
    ],
    conclusion: 'Treating "BPA-free" as a safety guarantee is outdated science. With EU 2024/3190 and EFSA 2026 standards targeting alternative bisphenols like BPS and BPF, reserve any plastic strictly for cold or dry room-temperature storage, replace cloudy or dishwasher-crazed Tritan and polycarbonate containers, and move all hot, acidic, and microwave food prep into borosilicate glass or food-grade stainless steel.',
    faqs: [
      {
        question: 'Are BPS and BPF safer than BPA in "BPA-Free" food containers?',
        answer: 'No. Peer-reviewed toxicology and EFSA assessments show that Bisphenol S (BPS) and Bisphenol F (BPF) share structural similarity to BPA and exhibit comparable estrogenic and metabolic endocrine-disrupting activity. That is why EU Regulation 2024/3190 and EFSA October 2026 guidance tighten controls across alternative bisphenols.'
      },
      {
        question: 'Does Eastman Tritan plastic contain BPS or BPF?',
        answer: 'No. Eastman Tritan™ is a copolyester made from DMT, CHDM, and TMCD monomers and is free of BPA, BPS, and other bisphenols. However, like other polyesters, repeated high-heat dishwasher cycles can craze its surface and increase cyclic oligomer migration.'
      },
      {
        question: 'Is #5 Polypropylene (PP) plastic completely safe for hot soup or baby formula?',
        answer: 'Polypropylene (#5 PP) contains no bisphenols or phthalates and resists moderate heat, making it safer than #3 PVC, #6 PS, or #7 polycarbonate. However, peer-reviewed Nature Food research showed PP baby bottles shed millions of microplastic particles per liter when shaken with 70°C water; glass or stainless steel eliminates microplastic shedding.'
      },
      {
        question: 'How can I tell if an older plastic bottle or container contains BPA?',
        answer: 'Check the bottom resin code: clear rigid plastic marked #7 "PC" (polycarbonate) or older unlabelled clear hard plastic bottles/blender jars made before ~2012 almost certainly contain BPA. Discard any rigid plastic that looks cloudy, scratched, or spiderweb-crazed.'
      },
      {
        question: 'What is the safest container material for microwaving and storing hot leftovers?',
        answer: 'Type 3.3 borosilicate glass (or high-fired ceramic without metallic trim) is the safest choice for microwaving and hot acidic or fatty foods, paired with a vented glass lid or paper towel rather than plastic wrap touching the food.'
      }
    ],
    relatedTools: [
      { name: 'Kitchen Plastic Leaching & Hot Food Container Checker', url: '/tools/kitchen-plastic-leaching-checker/' },
      { name: 'Plastic Blender Jar Hydrolysis & BPA Modeler', url: '/tools/plastic-blender-jar-hydrolysis-modeler/' },
      { name: 'Canned Food BPA & Epoxy Liner Hydrolysis Modeler', url: '/tools/canned-food-bpa-leaching-modeler/' }
    ]
  }
];

const guidesEs = [
  {
    slug: 'parchment-paper-pfas-pfhxa-silicone-coating-safety',
    title: 'Papel de Horno, Cajas de Pizza y Envoltorios Alimentarios: Prohibición UE 2026 de PFHxA, Silicona vs. Quilon, Blanqueado sin Cloro y Límite Térmico de 230°C',
    category: 'materials',
    excerpt: '¿Contiene su papel vegetal PFAS, cromo Quilon o silicona? Analizamos el Reglamento UE 2024/2462 (PFHxA en octubre 2026), blanqueado TCF/ECF y los límites térmicos seguros en horno y freidora de aire.',
    date: waveDate,
    readTime: '17 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'El papel pergamino para hornear, las bolsas antigrasa de panadería y las cajas de pizza dependen de recubrimientos superficiales microscópicos para evitar que aceites calientes, mantequilla y masas atraviesen la celulosa. En octubre de 2026 entró en vigor el límite estricto del Reglamento (UE) 2024/2462 (Entrada 79 de REACH) sobre el ácido undecafluorohexanoico (PFHxA) —sustituto C6 de los PFAS— en envases de papel y cartón, junto con la retirada de PFAS en envases antigrasa de la FDA y las actualizaciones de otoño de 2026 de la Recomendación XXXVI del BfR alemán. Conocer la diferencia entre papel sulfurizado recubierto de silicona platino frente al Quilon con complejos de cromo(III), el blanqueado TCF frente a ECF y el techo térmico de 215°C–232°C garantiza un horneado verdaderamente libre de tóxicos.',
    sections: [
      {
        title: 'Prohibición UE de PFHxA (Octubre 2026, REACH Entrada 79) y Normas FDA',
        content: 'Tras retirarse los PFAS de cadena larga C8 (PFOA), muchos envoltorios de comida rápida y cajas antigrasa pasaron a fluoroquímica C6 que se degrada en PFHxA persistente. Desde octubre de 2026, el Reglamento (UE) 2024/2462 prohíbe superar 25 ppb de PFHxA y sus sales o 1.000 ppb de sustancias relacionadas en papel y cartón alimentario, complementando las retiradas voluntarias de la FDA estadounidense y las normas alemanas BfR XXXVI.',
        type: 'fact',
        boxText: 'HITO OCTUBRE 2026: La Entrada 79 de REACH (Reglamento UE 2024/2462) limita estrictamente el PFHxA a 25 ppb en papel y cartón en contacto con alimentos.'
      },
      {
        title: 'Papel Siliconado vs. Quilon: Polidimetilsiloxano frente a Complejos de Cromo(III)',
        content: 'El papel de horno doméstico suele emplear silicona alimentaria (polidimetilsiloxano, PDMS) o Quilon (estearato de cromo trivalente). El papel tratado con Quilon es de un solo uso y puede liberar trazas metálicas si se carboniza, mientras que el papel con silicona certificada (FDA 21 CFR § 176.170 y BfR XV/XXXVI) resiste múltiples horneados sin cromo añadido ni antiadherencia deficiente.',
        type: 'tip',
        boxText: 'SELECCIÓN SEGURA: Elija papel vegetal etiquetado explícitamente como «recubierto de silicona y libre de PFAS», evitando láminas comerciales económicas tratadas con Quilon.'
      },
      {
        title: 'Papel Blanco ECF frente a Papel Marrón Sin Blanquear (TCF)',
        content: 'El blanqueado antiguo con cloro elemental producía trazas de dioxinas. Hoy el papel blanco utiliza proceso libre de cloro elemental (ECF) que reduce dioxinas en >99%, mientras el papel marrón sin blanquear es totalmente libre de cloro (TCF). Aun así, el color marrón no garantiza por sí solo ausencia de PFAS en envases de comida para llevar: exija certificación expresa libre de PFAS.',
        type: 'fact',
        boxText: 'MITO DEL COLOR: El papel marrón TCF evita derivados del cloro, pero el color sin blanquear no garantiza por sí solo ausencia de PFAS; revise siempre el etiquetado.'
      },
      {
        title: 'Techo Térmico de 215°C–232°C (420°F–450°F) y Riesgo de Ignición en Grill/Air Fryer',
        content: 'La mayoría de papeles siliconados admiten hasta 215°C–232°C. Por encima de 232°C la celulosa se deshidrata y carboniza rápidamente. Nunca coloque papel de horno bajo el grill (gratinador superior a >260°C) ni precaliente una freidora de aire con papel suelto sin peso encima, pues el vórtice de aire lo succiona hacia la resistencia incandescente en segundos.',
        type: 'warning',
        boxText: 'LÍMITE DE FUEGO: No supere 215°C–232°C en horno, prohíba el papel bajo el grill y sujete siempre las láminas en air fryer con el peso de los alimentos.'
      },
      {
        title: 'Trampas Comunes: Papel Encerado y Migración en Cajas de Pizza Calientes',
        content: 'El papel encerado (parafina o cera vegetal) se funde a apenas 50°C–65°C: meterlo al horno provoca humo denso e incendio. Por otro lado, dejar pizza caliente o fritos sobre cartón reciclado o envoltorios grasos acelera la migración de aceites minerales (MOSH/MOAH) y tintas; transfiera siempre la comida caliente a platos de cerámica o vidrio borosilicato.',
        type: 'tip',
        boxText: 'PRÁCTICA SEGURA: Jamás hornee con papel encerado y traslade la pizza o comida caliente de cajas de cartón a platos de cerámica o vidrio al llegar a la mesa.'
      }
    ],
    conclusion: 'Para hornear sin riesgos químicos ni incendios, utilice papel vegetal sin PFAS recubierto de silicona y libre de cloro (TCF), respete el límite máximo de 215°C–232°C lejos del grill, asegure siempre el papel en la freidora de aire con comida encima y retire los alimentos grasos calientes de cajas o envoltorios de cartón.',
    faqs: [
      {
        question: '¿El papel de horno para hornear galletas tiene PFAS?',
        answer: 'El papel vegetal doméstico de calidad utiliza silicona o Quilon como antiadherente en lugar de PFAS. Sin embargo, muchos envoltorios antigrasa de panadería y cajas de comida rápida sí empleaban PFAS (como PFHxA), ahora restringidos estrictamente por el Reglamento UE 2024/2462 desde octubre de 2026.'
      },
      {
        question: '¿Qué diferencia hay entre papel siliconado y papel Quilon?',
        answer: 'El papel siliconado lleva polidimetilsiloxano curado sin metales pesados y permite varios usos hasta 220°C–230°C. El papel Quilon usa un complejo de estearato de cromo(III), es estrictamente de un solo uso y puede degradarse con alimentos muy ácidos o quemaduras.'
      },
      {
        question: '¿Es mucho más sano el papel marrón sin blanquear que el blanco?',
        answer: 'El marrón (TCF) prescinde totalmente del blanqueo con derivados del cloro, mientras el blanco moderno (ECF) utiliza dióxido de cloro con niveles prácticamente nulos de dioxinas. Ambos son seguros si cuentan con certificación libre de PFAS y recubrimiento de silicona.'
      },
      {
        question: '¿Puede prenderse fuego el papel de horno dentro de la air fryer?',
        answer: 'Sí. Si precalienta la freidora de aire con papel pergamino suelto sin comida que lo sujete, el flujo ciclónico de aire lo eleva contra la resistencia superior (400°C–600°C) causando ignición en segundos.'
      },
      {
        question: '¿Puedo sustituir el papel de horno por papel encerado en el horno?',
        answer: 'No. La cera de parafina o soja se derrite entre 50°C y 65°C, impregnando la comida de cera líquida y generando humo e inflamación dentro del horno.'
      }
    ],
    relatedTools: [
      { name: 'Analizador de Oligómeros y Degradación en Silicona', url: '/es/tools/silicone-bakeware-oligomer-analyzer/' },
      { name: 'Simulador de Peligro de Incendio en Freidora de Aire', url: '/es/tools/air-fryer-liner-fire-hazard-simulator/' },
      { name: 'Ajustador de Rejilla y Temperatura de Horno', url: '/es/tools/oven-rack-bakeware-heat-adjuster/' }
    ]
  },
  {
    slug: 'recalled-air-fryer-pressure-cooker-cpsc-2026-safety-guide',
    title: 'Freidoras de Aire y Ollas a Presión Retiradas (Alertas CPSC 2025–2026): Quemaduras por Puertas, Eyección de Tapas, Fallos Eléctricos y Verificación de Serie',
    category: 'appliances',
    excerpt: '¿Afecta una alerta o retiro de la CPSC 2026 a su freidora de aire u olla eléctrica a presión? Revise los modelos Tristar, Gourmia, Kalorik, SharkNinja y Cosori, la física de sus fallos y cómo revisar la placa de serie.',
    date: waveDate,
    readTime: '18 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Las freidoras de aire con puerta tipo horno francés y las ollas eléctricas multifunción han acumulado entre 2025 y 2026 una oleada histórica de retiradas del mercado y alertas urgentes de seguridad emitidas por la CPSC de EE. UU. Solo entre febrero y noviembre de 2026 se emitieron avisos críticos para las ollas Tristar Power Quick Pot de 6 cuartos (Modelo Y6D-36, ~393.000 unidades), ollas Gourmia GPC625 (~43.500 unidades), hornos freidores Gourmia de 9 rebanadas (GTF7530, ~175.951 unidades) y hornos Kalorik MAXX con puertas francesas, sumándose a retiradas masivas previas de SharkNinja Foodi OP300, Cosori, Insignia y PowerXL. Comprender la física de bloqueo de válvulas, fatiga de resortes y sobrecalentamiento de conectores eléctricos ayuda a prevenir quemaduras graves e incendios.',
    sections: [
      {
        title: 'Alertas CPSC 2026 en Ollas a Presión: Tristar Y6D-36, Gourmia GPC625 y SharkNinja',
        content: 'Las ollas eléctricas dependen de una válvula flotante y enclavamiento mecánico bajo la norma UL 1026 para impedir la apertura bajo presión. En octubre de 2026 la CPSC advirtió detener de inmediato el uso de ~393.000 ollas Tristar Power Quick Pot (Modelo Y6D-36) tras decenas de quemaduras por apertura repentina de la tapa presurizada, sumándose a la alerta de febrero de 2026 sobre Gourmia GPC625 y la retirada de ~1,8 millones de SharkNinja Foodi serie OP300. Si la espuma obstruye el pasador flotante o ceden las tolerancias de cierre, el líquido sobrecalentado (115°C) hierve súbitamente al abrir y proyecta contenido hirviendo.',
        type: 'warning',
        boxText: 'ALERTA DE PRESIÓN: Compruebe en la base si su olla es Tristar Y6D-36, Gourmia GPC625 o SharkNinja OP300; suspenda su uso de inmediato si coincide el modelo.'
      },
      {
        title: 'Puertas que Se Cierran de Golpe: Horno Freidor Gourmia GTF7530 y Kalorik MAXX',
        content: 'Los hornos freidores de puerta abatible o doble puerta francesa concentran resistencias de 1.700W–1.800W junto a bisagras con resorte. A finales de 2026 la CPSC retiró ~175.951 hornos Gourmia GTF7530 (40 lesiones por quemaduras reportadas) y lanzó una alerta urgente contra hornos Kalorik MAXX de puertas francesas: los topes plásticos y muelles pierden retención por el calor cíclico, provocando que la puerta de vidrio a más de 200°C se cierre de golpe sobre brazos y manos.',
        type: 'warning',
        boxText: 'RIESGO DE QUEMADURA: Los hornos Gourmia GTF7530 y Kalorik MAXX de puerta francesa pueden cerrar sus puertas calientes bruscamente sobre antebrazos y manos.'
      },
      {
        title: 'Incendios por Conectores Internos (I²R) en Freidoras de Cesta (Cosori, Insignia, PowerXL)',
        content: 'Las retiradas multimillonarias de freidoras de aire tipo cesta evidenciaron un fallo eléctrico clásico: conectores rápidos de pala sometidos a 12–15 amperios continuos. Un engarzado flojo eleva la resistencia eléctrica (R) y dispara el calentamiento Joule (P = I²R) dentro de la carcasa plástica superior, derritiendo aislamientos y provocando humo o incendio. Desenchufe siempre el equipo tras enfriarse.',
        type: 'fact',
        boxText: 'SEGURIDAD ELÉCTRICA: Un mal contacto interno bajo 1.500W–1.800W genera calor resistivo I²R que funde plásticos internos; desenchufe la freidora cuando no esté en uso.'
      },
      {
        title: 'Cómo Inspeccionar la Placa de Modelo y Código de Fecha en 60 Segundos',
        content: 'Desenchufe el aparato, espere a que enfríe y revise la etiqueta metálica o adhesiva UL situada en la parte inferior o trasera. Anote el modelo exacto (ej. Y6D-36, GPC625, GTF7530, OP301), código de lote/fecha (YYWW) y código de barras UPC. Verifíquelos en el registro oficial de la CPSC o en nuestro Escáner de Retiros antes de usar equipos antiguos o comprar electrodomésticos de segunda mano.',
        type: 'tip',
        boxText: 'INSPECCIÓN RÁPIDA: Revise siempre la etiqueta técnica inferior con el aparato frío y desenchufado antes de cocinar o comprar electrodomésticos usados.'
      },
      {
        title: 'Por Qué Nunca Donar ni Revender Equipos Retirados y Cómo Desecharlos Seguro',
        content: 'La ley prohíbe revender o donar productos bajo retirada de seguridad para no trasladar el riesgo de quemadura o incendio a terceros. En alertas de 2026 sin fabricante activo que ofrezca reemplazo (como Tristar Y6D-36 o Kalorik MAXX), corte el cable de alimentación cerca del chasis tras tomar cualquier fotografía requerida por la reclamación y deposite el aparato en un punto limpio de residuos electrónicos.',
        type: 'warning',
        boxText: 'PROHIBIDO DONAR: Nunca done ni venda electrodomésticos retirados; inutilice la unidad cortando el cable cerca de la base y llévela a reciclaje electrónico.'
      }
    ],
    conclusion: 'Verificar la etiqueta del modelo en la base de su freidora de aire y olla eléctrica a presión lleva menos de dos minutos y evita los principales accidentes térmicos y eléctricos documentados en las alertas CPSC 2025–2026.',
    faqs: [
      {
        question: '¿Qué freidoras de aire y ollas a presión recibieron alertas o retiros CPSC en 2026?',
        answer: 'En 2026 destacan las alertas urgentes para ollas Tristar Power Quick Pot Y6D-36 (octubre 2026), ollas Gourmia GPC625 (febrero 2026), hornos freidores Kalorik MAXX con puertas francesas (octubre 2026) y el retiro del horno Gourmia GTF7530 (noviembre 2026), además de retiros previos de SharkNinja OP300, Cosori e Insignia.'
      },
      {
        question: '¿Por qué la CPSC pidió desechar ciertos modelos de 2026 sin ofrecer reparación gratuita?',
        answer: 'Cuando las empresas importadoras originales cesaron operaciones o se reestructuraron sin aceptar un programa formal de compensación, la CPSC emite advertencias directas ordenando dejar de usar y desechar de forma segura los equipos peligrosos.'
      },
      {
        question: '¿Es seguro seguir usando una olla retirada si siempre hago liberación natural de vapor?',
        answer: 'No. Los fallos en pasadores flotantes o pestañas desgastadas pueden permitir la apertura prematura incluso cuando usted cree que ya no hay presión, provocando expulsión violenta de líquido hirviendo.'
      },
      {
        question: '¿Por qué se recomienda desenchufar la freidora de aire cuando no se usa?',
        answer: 'Porque muchos modelos mantienen tensión permanente en relés y placas de control; desenchufar elimina el riesgo de fallos eléctricos en reposo.'
      },
      {
        question: '¿Puedo regalar o donar un aparato retirado si a mí nunca me falló?',
        answer: 'No. Está prohibido donar o revender productos bajo retiro o alerta de seguridad. Corte el cable para inutilizarlo y recíclelo como residuo electrónico.'
      }
    ],
    relatedTools: [
      { name: 'Escáner de Códigos y Retiros de Productos CPSC/FDA', url: '/es/tools/product-recalls-scanner/' },
      { name: 'Triaje de Emergencias en la Cocina', url: '/es/tools/kitchen-hazard-emergency-triage/' },
      { name: 'Verificador de Presión y Llenado para Instant Pot', url: '/es/tools/instant-pot-pressure-release-checker/' }
    ]
  },
  {
    slug: 'bpa-free-substitutes-bps-bpf-food-packaging-efsa-safety',
    title: '¿Son Seguros los Plásticos «Sin BPA»? BPS, BPF, Tritan y Sustituciones Lamentables bajo el Reglamento UE 2024/3190 y Guía EFSA 2026',
    category: 'materials',
    excerpt: 'Descubra por qué el sello «BPA-Free» suele ocultar bisfenoles BPS o BPF igual de problemáticos, cómo actúan el Reglamento UE 2024/3190 y la guía EFSA de octubre 2026, y qué envases realmente no lixivian.',
    date: waveDate,
    readTime: '17 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Casi cualquier vaso de batidora, biberón o táper transparente exhibe hoy la etiqueta «Sin BPA» («BPA-Free»). Sin embargo, los toxicólogos ambientales llevan años advirtiendo sobre la «sustitución lamentable»: eliminar el Bisfenol A (BPA) reemplazándolo por análogos químicos casi idénticos como Bisfenol S (BPS) y Bisfenol F (BPF). Tras la drástica reducción en 2023 de la TDI europea del BPA a 0,2 ng/kg peso/día, el Reglamento (UE) 2024/3190 prohibió ampliamente el BPA y restringió otros bisfenoles peligrosos en materiales en contacto con alimentos, y en octubre de 2026 la EFSA publicó directrices estrictas para evaluar bisfenoles alternativos y sustancias SVHC en plásticos alimentarios. Conocer la toxicología del BPS/BPF, el desgaste alcalino del Tritan y las alternativas inertes protege su cocina.',
    sections: [
      {
        title: 'Reglamento UE 2024/3190 y Guía EFSA Octubre 2026: Fin de los Análogos Sin Control',
        content: 'Durante años, reemplazar BPA por BPS o BPF permitió comercializar biberones PES, recubrimientos de latas y envases bajo el reclamo «Sin BPA». Como ambos comparten la estructura bisfenólica que activa receptores estrogénicos y tiroideos, la UE aprobó el Reglamento (UE) 2024/3190 prohibiendo el BPA y restringiendo derivados equivalentes, reforzado en octubre de 2026 por nuevas guías científicas de la EFSA para exigir datos toxicológicos completos a todo bisfenol sustituto.',
        type: 'fact',
        boxText: 'MARCO REGULATORIO: El Reglamento UE 2024/3190 y las directrices EFSA de octubre 2026 cierran el vacío legal del «Sin BPA», evaluando BPS, BPF y análogos como grupo.'
      },
      {
        title: 'Toxicología del BPS y BPF: Resistencia al Hervido frente a Disrupción Endocrina',
        content: 'El Bisfenol S sustituye el puente central por un grupo sulfonilo (-SO2-), lo que aumenta su estabilidad térmica inicial frente al agua hirviendo. Sin embargo, los ensayos celulares demuestran que el BPS presenta potencia estrogénica equiparable al BPA, mayor resistencia a la biodegradación y alteraciones metabólicas a dosis nanomolares.',
        type: 'warning',
        boxText: 'TRAMPA TÉRMICA: Aunque el BPS resiste mejor el calor inicial sin degradarse rápido, una vez que migra a grasas o ácidos calientes ejerce disrupción hormonal similar al BPA.'
      },
      {
        title: 'Eastman Tritan™, PPSU y Polipropileno (#5 PP): Qué Contienen Realmente',
        content: 'El copoliéster Eastman Tritan™ (DMT/CHDM/TMCD) y el polipropileno (#5 PP) están genuinamente libres de BPA, BPS y BPF. No obstante, estar libres de bisfenoles no equivale a inercia total: estudios en Nature Food (Li et al., 2020) mostraron que biberones #5 PP liberan entre 1,3 y 16,2 millones de microplásticos/L a 70°C, y los ciclos alcalinos del lavavajillas (pH 10,5–11,5) microfisuran el Tritan liberando oligómeros cíclicos.',
        type: 'fact',
        boxText: 'MATIZ QUÍMICO: Tritan y #5 PP no contienen bisfenoles, pero el PP desprende millones de microplásticos a 70°C y el lavavajillas alcalino fisura los copoliésteres.'
      },
      {
        title: 'Fuentes Ocultas: Revestimientos Epoxi BADGE, Tapas de Frascos y Plásticos Reciclados',
        content: 'Los bisfenoles y derivados epoxi (BADGE) aparecen también en barnices internos de latas, plastisoles de tapas metálicas de frascos de salsa o pesto en contacto con aceite caliente y plásticos reciclados. Evite calentar comida directamente dentro de latas metálicas y no almacene salsas oleosas calientes boca abajo sobre juntas plásticas de tapas.',
        type: 'tip',
        boxText: 'FUENTES OCULTAS: Nunca caliente alimentos dentro de latas metálicas ni deje aceites calientes tocando la junta plastificada de tapas metálicas.'
      },
      {
        title: 'Alternativas 100% Libres de Bisfenoles: Borosilicato 3.3, Acero 304/316 y Silicona Platino',
        content: 'Para contacto con alimentos calientes, grasos o ácidos, el vidrio de borosilicato 3.3 y la porcelana vitrificada ofrecen inercia absoluta sin monómeros orgánicos ni microplásticos. Para botellas reutilizables y termos destacan el acero inoxidable 304 (18/8) y 316, complementados con juntas de silicona curada al platino certificada BfR XV.',
        type: 'success',
        boxText: 'CAMBIO DEFINITIVO: Reserve el plástico solo para almacenaje frío o seco y pase comidas calientes, ácidas o de microondas a vidrio borosilicato o acero inoxidable 304/316.'
      }
    ],
    conclusion: 'El sello «Sin BPA» por sí solo ya no basta como garantía de inocuidad. Bajo la regulación europea 2024/3190 y la guía EFSA 2026 contra bisfenoles alternativos, sustituya recipientes plásticos rayados o blanquecinos y utilice vidrio borosilicato 3.3 o acero inoxidable 304/316 para recalentar y almacenar comidas calientes.',
    faqs: [
      {
        question: '¿Son más seguros el BPS y el BPF que el BPA en envases etiquetados «Sin BPA»?',
        answer: 'No. Los estudios toxicológicos confirman que el Bisfenol S (BPS) y el Bisfenol F (BPF) muestran afinidad endocrina similar al BPA, motivo por el cual la UE 2024/3190 y las directrices EFSA de octubre de 2026 restringen los bisfenoles alternativos.'
      },
      {
        question: '¿Contiene BPS o BPF el plástico Eastman Tritan?',
        answer: 'No. Tritan es un copoliéster libre de BPA, BPS y bisfenoles. Sin embargo, el lavado continuo en lavavajillas alcalino provoca microfisuras que incrementan la liberación de oligómeros cíclicos bajo calor.'
      },
      {
        question: '¿Es seguro el plástico #5 Polipropileno (PP) para líquidos muy calientes?',
        answer: 'El PP (#5) no tiene bisfenoles ni ftalatos, pero investigaciones publicadas en Nature Food revelaron que libera millones de micropartículas plásticas por litro al mezclarse con agua a 70°C.'
      },
      {
        question: '¿Cómo sé si un recipiente antiguo contiene BPA?',
        answer: 'Revise el triángulo inferior: los plásticos rígidos transparentes marcados #7 «PC» (policarbonato) o vasos antiguos fabricados antes de 2012 suelen contener BPA. Deseche cualquier envase opaco o con microfisuras.'
      },
      {
        question: '¿Qué material es el más seguro para recalentar sobras en microondas?',
        answer: 'El vidrio de borosilicato 3.3 o la cerámica vitrificada sin adornos metálicos, cubiertos con tapa de vidrio ventilada o servilleta de papel en lugar de film plástico tocando la comida.'
      }
    ],
    relatedTools: [
      { name: 'Verificador de Migración Química en Plásticos', url: '/es/tools/kitchen-plastic-leaching-checker/' },
      { name: 'Simulador de Hidrólisis en Vasos de Batidora', url: '/es/tools/plastic-blender-jar-hydrolysis-modeler/' },
      { name: 'Modelador de BPA y Epoxi en Latas de Comida', url: '/es/tools/canned-food-bpa-leaching-modeler/' }
    ]
  }
];

const guidesPt = [
  {
    slug: 'parchment-paper-pfas-pfhxa-silicone-coating-safety',
    title: 'Papel Manteiga, Caixas de Pizza e Embalagens de Padaria: Proibição UE 2026 de PFHxA, Silicone vs. Quilon, Branqueamento sem Cloro e Limite Térmico de 230°C',
    category: 'materials',
    excerpt: 'Seu papel manteiga contém PFAS, cromo Quilon ou silicone? Entenda a restrição UE 2024/2462 (PFHxA em out/2026), branqueamento TCF vs. ECF e limites seguros no forno e air fryer.',
    date: waveDate,
    readTime: '17 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'O papel manteiga culinário, sacos antigordura de padaria e caixas de pizza dependem de tratamentos superficiais microscópicos para impedir que manteiga e óleos quentes atravessem a celulose. Em outubro de 2026 entrou em vigor a restrição da União Europeia REACH Entrada 79 (Regulamento (UE) 2024/2462) limitando severamente o PFHxA (substituto C6 dos PFAS) em papéis e papelões alimentícios, junto à retirada de PFAS da FDA e às atualizações da Recomendação XXXVI do instituto alemão BfR. Entender a diferença entre papel com silicone platina e o tratamento Quilon com cromo(III), além do teto térmico de 215°C–232°C, garante assados livres de contaminantes e riscos de incêndio.',
    sections: [
      {
        title: 'Proibição UE Outubro 2026 de PFHxA (REACH Entrada 79) e Regras FDA',
        content: 'Após a retirada dos antigos PFAS C8 (PFOA), muitas embalagens resistentes à gordura passaram a usar compostos C6 que se degradam em PFHxA persistente. Desde outubro de 2026, o Regulamento (UE) 2024/2462 proíbe exceder 25 ppb de PFHxA e sais ou 1.000 ppb de substâncias relacionadas em papel e papelão alimentício, reforçando a eliminação federal nos EUA pela FDA.',
        type: 'fact',
        boxText: 'MARCO DE OUTUBRO 2026: A Entrada 79 do REACH (UE 2024/2462) limita o PFHxA a 25 ppb em embalagens de papel e papelão em contato com alimentos.'
      },
      {
        title: 'Papel Siliconado vs. Quilon: Polidimetilsiloxano contra Complexos de Cromo(III)',
        content: 'O papel manteiga doméstico legítimo usa silicone alimentício (polidimetilsiloxano) ou Quilon (complexo estearato de cromo trivalente). O Quilon é de uso único e pode liberar traços metálicos ao carbonizar, enquanto o papel com silicone certificado (FDA 21 CFR § 176.170 e BfR XV/XXXVI) resiste melhor ao calor e evita contaminação por metais.',
        type: 'tip',
        boxText: 'ESCOLHA CERTA: Prefira papel manteiga rotulado explicitamente como «revestido com silicone e livre de PFAS», evitando folhas comerciais baratas tratadas com Quilon.'
      },
      {
        title: 'Branqueamento ECF vs. Papel Marrom Totalmente Livre de Cloro (TCF)',
        content: 'O papel branco moderno utiliza branqueamento livre de cloro elementar (ECF), reduzindo dioxinas a níveis desprezíveis (>99% de queda), enquanto o papel marrom natural é TCF (totalmente livre de cloro). Ainda assim, a cor marrom por si só não garante ausência de PFAS em caixas e sacos antigordura — verifique sempre o selo livre de PFAS.',
        type: 'fact',
        boxText: 'MITO DA COR: O papel marrom TCF dispensa branqueadores clorados, mas a cor natural sozinha não comprova ausência de PFAS em embalagens antigordura.'
      },
      {
        title: 'Teto Térmico de 215°C–232°C (420°F–450°F) e Risco de Fogo no Grill e Air Fryer',
        content: 'A maioria dos papéis siliconados suporta até 215°C–232°C. Acima de 232°C a celulose escurece e solta fumaça. Nunca use papel manteiga sob a resistência do grill/broiler (>260°C) nem pré-aqueça a air fryer com papel solto, pois o fluxo de ar suga a folha leve diretamente para a resistência incandescente.',
        type: 'warning',
        boxText: 'LIMITE DE CALOR: Não ultrapasse 215°C–232°C no forno, proíba o papel no modo grill/broiler e nunca pré-aqueça air fryer com papel solto sem alimento pesado.'
      },
      {
        title: 'Erros Comuns: Papel Parafinado no Forno e Migração em Caixas de Pizza Quentes',
        content: 'Substituir papel manteiga por papel encerado/parafinado derrete a cera já a 50°C–65°C, gerando fumaça tóxica e fogo. Da mesma forma, manter pizza ou frituras quentes dentro de caixas de papelão reciclado acelera a transferência de tintas e hidrocarbonetos minerais (MOSH/MOAH); transfira imediatamente para pratos de cerâmica ou vidro.',
        type: 'tip',
        boxText: 'CUIDADO PRÁTICO: Jamais asse com papel encerado e transfira pizza e delivery quentes de caixas de papelão para pratos de vidro ou porcelana.'
      }
    ],
    conclusion: 'Assar com segurança exige papel manteiga certificado livre de PFAS, TCF e revestido com silicone, respeitando o teto de 215°C–232°C longe do grill, sempre com peso sobre o papel na air fryer e transferindo alimentos quentes e gordurosos de caixas de papelão para louça inerte.',
    faqs: [
      {
        question: 'O papel manteiga contém PFAS químicos eternos?',
        answer: 'O papel manteiga culinário de qualidade utiliza silicone ou Quilon como antiaderente, não PFAS. Porém, embalagens antigordura e caixas de padaria historicamente usaram PFAS (como PFHxA), hoje estritamente restringidos pelo Regulamento UE 2024/2462 (outubro de 2026) e pela FDA.'
      },
      {
        question: 'Qual a diferença entre papel com silicone e papel tratado com Quilon?',
        answer: 'O papel siliconado recebe camada de polidimetilsiloxano livre de metais pesados e suporta reutilização leve até 220°C–230°C. O Quilon usa estearato de cromo(III), é estritamente descartável após um único uso e não é ideal para alimentos ácidos ou altas temperaturas.'
      },
      {
        question: 'O papel manteiga marrom não branqueado é mais seguro que o branco?',
        answer: 'O papel marrom (TCF) não passa por branqueamento com dióxido de cloro, enquanto o branco moderno (ECF) reduz subprodutos clorados em mais de 99%. Ambos são seguros quando livres de PFAS e revestidos de silicone.'
      },
      {
        question: 'O papel manteiga pode pegar fogo na air fryer ou no forno?',
        answer: 'Sim. Na air fryer sem alimento segurando as bordas, o vento suga o papel até a resistência (400°C–600°C) causando ignição rápida. No forno comum, queima acima de 232°C ou próximo à resistência superior (broiler).'
      },
      {
        question: 'Posso usar papel encerado no lugar de papel manteiga no forno?',
        answer: 'Não. A cera derrete entre 50°C e 65°C, solta fumaça e cria risco imediato de incêndio.'
      }
    ],
    relatedTools: [
      { name: 'Analisador de Oligômeros em Formas de Silicone', url: '/pt/tools/silicone-bakeware-oligomer-analyzer/' },
      { name: 'Simulador de Risco de Fogo em Air Fryer', url: '/pt/tools/air-fryer-liner-fire-hazard-simulator/' },
      { name: 'Ajustador de Grade e Calor do Forno', url: '/pt/tools/oven-rack-bakeware-heat-adjuster/' }
    ]
  },
  {
    slug: 'recalled-air-fryer-pressure-cooker-cpsc-2026-safety-guide',
    title: 'Air Fryers e Panelas de Pressão em Recall (Alertas CPSC 2025–2026): Travas de Porta, Ejeção de Tampa, Risco Elétrico e Checagem de Série',
    category: 'appliances',
    excerpt: 'Sua air fryer ou panela de pressão elétrica está na lista de alertas ou recalls CPSC de 2026? Confira os casos Tristar, Gourmia, Kalorik, SharkNinja e Cosori, a física das falhas e como checar a etiqueta.',
    date: waveDate,
    readTime: '18 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Entre 2025 e novembro de 2026, a CPSC dos EUA emitiu uma série recorde de recalls e alertas urgentes de parada imediata envolvendo milhões de panelas elétricas de pressão e fornos air fryer: panelas Tristar Power Quick Pot de 6 quartos (Modelo Y6D-36, out/2026, ~393 mil unidades), panelas Gourmia GPC625 (fev/2026, ~43,5 mil unidades), fornos air fryer Gourmia de 9 fatias (Modelo GTF7530, nov/2026, ~175,9 mil unidades) e fornos Kalorik MAXX com portas francesas (out/2026), além de recalls massivos prévios da SharkNinja OP300, Cosori, Insignia e PowerXL. Entender as falhas mecânicas e elétricas e checar a etiqueta do seu aparelho em 60 segundos previne queimaduras graves e incêndios.',
    sections: [
      {
        title: 'Alertas CPSC 2026 de Ejeção de Tampa: Tristar Y6D-36, Gourmia GPC625 e SharkNinja',
        content: 'Panelas elétricas seguem a norma UL 1026 com pino flutuante que trava a tampa sob pressão. Em outubro de 2026, a CPSC alertou contra o uso de ~393.000 unidades da Tristar Power Quick Pot Y6D-36 após dezenas de queimaduras por abertura pressurizada, seguindo o alerta de fevereiro para Gourmia GPC625 e o recall de 1,8 milhão da SharkNinja Foodi OP300. Espuma ou desgaste no pino permitem a abertura com vapor a 115°C sob pressão, projetando alimentos ferventes.',
        type: 'warning',
        boxText: 'ALERTA DE PRESSÃO: Confira na etiqueta inferior os modelos Tristar Y6D-36, Gourmia GPC625 ou SharkNinja série OP300 e interrompa o uso imediatamente se houver correspondência.'
      },
      {
        title: 'Portas que Fecham Sozinhas: Fornos Gourmia GTF7530 e Kalorik MAXX',
        content: 'Fornos air fryer com portas de vidro acionadas por mola combinam resistências de 1.800W e travas plásticas/metálicas. Em 2026, a CPSC anunciou o recall de ~175.951 fornos Gourmia GTF7530 (40 queimaduras registradas) e o alerta de parada para Kalorik MAXX portas francesas: a fadiga térmica faz a porta a >200°C bater inesperadamente sobre o braço do usuário.',
        type: 'warning',
        boxText: 'RISCO NAS PORTAS: Os modelos Gourmia GTF7530 e Kalorik MAXX podem fechar portas quentes bruscamente durante a retirada de alimentos, causando queimaduras nos braços.'
      },
      {
        title: 'Aquecimento Elétrico Interno (I²R) em Air Fryers de Cesto (Cosori, Insignia, PowerXL)',
        content: 'Nos grandes recalls de air fryers de cesto, o ponto crítico foi o aquecimento Joule (P = I²R) em terminais e conectores internos conduzindo 12–15 ampères. Conectores mal crimpados superaquecem, derretem plásticos e geram fumaça ou fogo; sempre tire da tomada após o uso.',
        type: 'fact',
        boxText: 'FÍSICA ELÉTRICA: Aparelhos de 1.500W–1.800W exigem alta corrente; maus contatos internos geram calor I²R perigoso — desconecte da tomada quando fora de uso.'
      },
      {
        title: 'Como Conferir Modelo, Lote e Etiqueta Técnica em 60 Segundos',
        content: 'Com o aparelho frio e desligado da tomada, verifique o selo técnico metálico ou adesivo na base ou traseira para anotar Modelo exato (ex.: Y6D-36, GPC625, GTF7530), código de data/lote e código de barras UPC. Consulte nosso Scanner de Recalls antes de usar equipamentos antigos ou comprar seminovos.',
        type: 'tip',
        boxText: 'CHECAGEM RÁPIDA: Verifique sempre o selo técnico inferior antes de usar eletrodomésticos antigos ou comprar aparelhos usados.'
      },
      {
        title: 'Por Que Nunca Doar ou Revender Produtos em Recall e Como Descartar',
        content: 'Doar ou revender itens sob recall transfere o risco de incêndio e queimadura a outra família e viola normas de segurança. Quando não há fabricante ativo oferecendo reparo (como nos avisos Tristar Y6D-36 e Kalorik MAXX), corte o cabo de força rente à carcaça após registrar fotos exigidas e encaminhe para descarte eletrônico.',
        type: 'warning',
        boxText: 'DESCARTE SEGURO: Nunca doe ou revenda itens em recall; corte o cabo próximo à base para inutilizar e envie para reciclagem eletrônica.'
      }
    ],
    conclusion: 'Dois minutos conferindo o modelo exato sob sua air fryer ou panela de pressão elétrica protegem sua família contra as principais falhas mecânicas e elétricas das alertas CPSC 2025–2026.',
    faqs: [
      {
        question: 'Quais air fryers e panelas de pressão tiveram alertas ou recalls da CPSC em 2026?',
        answer: 'Os principais alertas de 2026 incluem Tristar Power Quick Pot Y6D-36 (out/2026), Gourmia GPC625 (fev/2026), fornos Kalorik MAXX portas francesas (out/2026) e recall do forno Gourmia GTF7530 (nov/2026), além de recalls anteriores da SharkNinja OP300, Cosori e Insignia.'
      },
      {
        question: 'Por que a CPSC pediu apenas descarte sem troca gratuita em alguns modelos de 2026?',
        answer: 'Quando os importadores originais encerram atividades ou não firmam acordo de remediação, a CPSC publica um alerta unilateral recomendando parada imediata e descarte seguro.'
      },
      {
        question: 'É seguro usar uma panela em recall esperando sempre a liberação natural?',
        answer: 'Não. Travas defeituosas ou pinos entupidos podem falhar ou manter vapor aprisionado inesperadamente; interrompa o uso imediatamente.'
      },
      {
        question: 'Por que desconectar a air fryer da tomada após esfriar?',
        answer: 'Para eliminar energia em standby nas placas eletrônicas e relés caso ocorra falha elétrica ou acúmulo de umidade.'
      },
      {
        question: 'Posso doar um aparelho em recall se ele funciona bem comigo?',
        answer: 'Não. Doar ou vender itens em recall transfere riscos graves de queimadura ou fogo. Corte o cabo e descarte em coleta eletrônica.'
      }
    ],
    relatedTools: [
      { name: 'Scanner de Códigos de Barras e Recalls CPSC/FDA', url: '/pt/tools/product-recalls-scanner/' },
      { name: 'Triagem de Emergências na Cozinha', url: '/pt/tools/kitchen-hazard-emergency-triage/' },
      { name: 'Verificador de Pressão para Instant Pot', url: '/pt/tools/instant-pot-pressure-release-checker/' }
    ]
  },
  {
    slug: 'bpa-free-substitutes-bps-bpf-food-packaging-efsa-safety',
    title: 'Plásticos «Sem BPA» São Realmente Seguros? BPS, BPF, Tritan e Substituições Lamentáveis sob a Norma UE 2024/3190 e Guia EFSA 2026',
    category: 'materials',
    excerpt: 'Entenda por que selos «BPA-Free» muitas vezes escondem BPS ou BPF com ação hormonal similar, como atuam o Regulamento UE 2024/3190 e a guia EFSA de outubro de 2026, e quais materiais são realmente inertes.',
    date: waveDate,
    readTime: '17 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'O selo «Livre de BPA» tornou-se padrão em jarras de liquidificador, mamadeiras e potes plásticos, mas toxicologistas apontam há anos o problema da substituição lamentável: trocar o Bisfenol A por análogos estruturais quase idênticos como Bisfenol S (BPS) e Bisfenol F (BPF). Após reduzir a TDI do BPA para 0,2 ng/kg/dia, a União Europeia aprovou o Regulamento (UE) 2024/3190 restringindo BPA e bisfenóis correlatos, e em outubro de 2026 a EFSA publicou novas diretrizes exigindo dados rigorosos para bisfenóis alternativos em plásticos alimentícios. Conhecer a química do BPS/BPF, a hidrólise alcalina do Tritan e as trocas por vidro borossilicato e aço inox protege sua cozinha.',
    sections: [
      {
        title: 'Regulamento UE 2024/3190 e Diretrizes EFSA Outubro 2026: Fim da Brecha «Sem BPA»',
        content: 'Por mais de uma década, trocar BPA por BPS ou BPF permitiu estampar «BPA-Free» mesmo mantendo anéis fenólicos capazes de ativar receptores estrogénicos e tireoidianos. O Regulamento (UE) 2024/3190 e as novas diretrizes da EFSA de outubro de 2026 passam a exigir avaliação toxicológica rigorosa para toda a classe dos bisfenóis alternativos.',
        type: 'fact',
        boxText: 'AVANÇO REGULATÓRIO: A norma UE 2024/3190 e a guia EFSA de outubro 2026 fecham a brecha do «Sem BPA», cobrindo BPS, BPF e derivados análogos.'
      },
      {
        title: 'Toxicologia de BPS e BPF: Estabilidade ao Calor vs. Potência Endócrina',
        content: 'O BPS substitui a ponte central por um grupo sulfonila (-SO2-), resistindo mais à fervura rápida sem hidrolisar tão depressa quanto o BPA. Contudo, bioensaios comprovam que o BPS possui atividade estrogénica comparável ao BPA, menor biodegradabilidade e impacto em células pancreáticas em doses nanomolares.',
        type: 'warning',
        boxText: 'ARMADILHA TÉRMICA: Embora o BPS resista mais ao calor inicial, ao migrar para alimentos quentes e gordurosos exerce desregulação endócrina semelhante ao BPA.'
      },
      {
        title: 'Eastman Tritan™, PPSU e Polipropileno (#5 PP): O Que Realmente Contêm',
        content: 'Copoliésteres como Eastman Tritan™ e polipropileno (#5 PP) não contêm BPA, BPS nem BPF. Ainda assim, estudos na Nature Food mostraram que mamadeiras #5 PP liberam milhões de microplásticos por litro a 70°C, enquanto detergentes alcalinos de lava-louças (pH 10,5–11,5) fissuram poliésteres e elevam a migração de oligômeros cíclicos.',
        type: 'fact',
        boxText: 'NUANCE POLIMÉRICA: Tritan e #5 PP não têm bisfenóis, mas #5 PP libera milhões de microplásticos a 70°C e a lava-louças alcalina microfissura o Tritan.'
      },
      {
        title: 'Fontes Ocultas: Revestimentos Epóxi de Latas e Juntas de Tampas de Vidro',
        content: 'Bisfenóis e derivados BADGE também aparecem em vernizes internos de latas e nos anéis plastificados de tampas metálicas de potes de molho e conservas oleosas. Nunca aqueça alimentos dentro da lata metálica e evite guardar molhos quentes em contato direto com a junta da tampa.',
        type: 'tip',
        boxText: 'FONTES OCULTAS: Jamais aqueça comida diretamente dentro de latas e transfira molhos quentes ácidos para potes sem contato com tampas plastificadas.'
      },
      {
        title: 'Trocas Seguras: Vidro Borossilicato 3.3, Aço Inox 304/316 e Silicone Platina',
        content: 'Para alimentos quentes, gordurosos, ácidos ou micro-ondas, o vidro borossilicato 3.3 e a porcelana vitrificada oferecem inércia química absoluta sem monômeros ou microplásticos. Para garrafas e copos térmicos, prefira aço inoxidável 304 ou 316 e vedações em silicone curado à platina (BfR XV).',
        type: 'success',
        boxText: 'PADRÃO OURO: Use plástico apenas para armazenamento frio/seco e faça todo preparo ou aquecimento quente em vidro borossilicato 3.3 ou aço inox 304/316.'
      }
    ],
    conclusion: 'O selo «Sem BPA» isolado já não basta. Diante das diretrizes UE 2024/3190 e EFSA 2026 contra bisfenóis alternativos, descarte plásticos riscados ou esbranquiçados e migre o aquecimento de alimentos para vidro borossilicato ou aço inoxidável 304/316.',
    faqs: [
      {
        question: 'BPS e BPF são mais seguros do que o BPA em potes «Sem BPA»?',
        answer: 'Não. Estudos toxicológicos indicam que Bisfenol S e Bisfenol F exibem potencial de desregulação endócrina comparável ao BPA, motivando as restrições da UE 2024/3190 e a guia EFSA de outubro de 2026.'
      },
      {
        question: 'O plástico Eastman Tritan contém BPS ou BPF?',
        answer: 'Não. O Tritan é um copoliéster livre de BPA, BPS e bisfenoles. Porém, ciclos repetidos na lava-louças alcalina podem causar microfissuras e liberar oligômeros cíclicos no calor.'
      },
      {
        question: 'O polipropileno (#5 PP) é totalmente livre de riscos com água fervente?',
        answer: 'Não possui bisfenoles nem ftalatos, mas pesquisas da Nature Food comprovaram liberação de milhões de microplásticos por litro a 70°C; o vidro elimina esse desprendimento.'
      },
      {
        question: 'Como saber se um recipiente antigo contém BPA?',
        answer: 'Verifique o código na base: plásticos rígidos transparentes #7 «PC» (policarbonato) ou jarras fabricadas antes de 2012 geralmente contêm BPA. Descarte peças opacas ou fissuradas.'
      },
      {
        question: 'Qual o melhor recipiente para esquentar sobras no micro-ondas?',
        answer: 'Vidro borossilicato 3.3 ou cerâmica sem filetes metálicos, cobertos com tampa de vidro ventilada ou papel toalha em vez de filme plástico.'
      }
    ],
    relatedTools: [
      { name: 'Verificador de Migração Química em Plásticos', url: '/pt/tools/kitchen-plastic-leaching-checker/' },
      { name: 'Simulador de Hidrólise em Liquidificadores', url: '/pt/tools/plastic-blender-jar-hydrolysis-modeler/' },
      { name: 'Modelador de BPA e Epóxi em Enlatados', url: '/pt/tools/canned-food-bpa-leaching-modeler/' }
    ]
  }
];

const guidesZh = [
  {
    slug: 'parchment-paper-pfas-pfhxa-silicone-coating-safety',
    title: '烘焙硅油纸、披萨盒与防油包装纸安全解析：2026欧盟PFHxA禁令、硅油与铬盐Quilon涂层差异及230°C烤箱燃点红线',
    category: 'materials',
    excerpt: '烘焙纸和外卖防油袋含有PFAS吗？深度解析2026年10月生效的欧盟REACH附录79号PFHxA禁令、硅油vs Quilon铬络合物涂层、漂白方式及烤箱与空气炸锅450°F高温安全极限。',
    date: waveDate,
    readTime: '17分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '厨房烘焙硅油纸、面包店防油袋和外卖披萨盒依靠纸纤维表面的超薄阻隔涂层，防止高温黄油和面糊渗漏。2026年10月起，欧盟REACH条例第79条（法规 (EU) 2024/2462）24个月过渡期正式结束，全面强制限制食品接触纸与纸板中的全氟己酸（PFHxA）及其相关物质；同时美国FDA也持续强化防油纸PFAS退出监管，德国BfR第XXXVI号推荐标准亦同步收紧。认清硅油（聚二甲基硅氧烷）涂层与三价铬Quilon涂层的化学本质、全无氯漂白（TCF）真相以及215°C–232°C热解红线，才能真正实现无毒安全烘焙。',
    sections: [
      {
        title: '2026年10月欧盟PFHxA禁令（REACH第79条）与FDA防油纸退出规范',
        content: '在早期长链C8全氟辛酸（PFOA）退出后，部分防油包装转而使用可降解为全氟己酸（PFHxA）的C6氟化学助剂。自2026年10月起，欧盟法规 (EU) 2024/2462 严格限定食品接触纸和纸板中的PFHxA及其盐类不得超过25 ppb、相关物质不得超过1,000 ppb，与美国FDA 2024–2026防油剂禁令共同封堵“短链替代”漏洞。',
        type: 'fact',
        boxText: '2026年10月新规：欧盟REACH第79条已强制对食品接触纸与纸板中的PFHxA实施25 ppb极严上限。'
      },
      {
        title: '有机硅涂层 vs Quilon涂层：聚二甲基硅氧烷与三价铬硬脂酸络合物',
        content: '优质家用烘焙纸通常涂覆符合FDA 21 CFR § 176.170及德国BfR XV/XXXVI标准的食品级聚二甲基硅氧烷（硅油）；而部分商用廉价防油纸使用Quilon（三价铬硬脂酸络合物），仅能单次使用，且高温焦化或接触酸性食物时存在微量重金属溶出风险。',
        type: 'tip',
        boxText: '选购标准：认准明确标注“硅油涂层（Silicone-Coated）”与“无PFAS（PFAS-Free）”的产品，避开廉价单次Quilon商用垫纸。'
      },
      {
        title: '元素无氯漂白（ECF）与本色全无氯（TCF）原浆纸的二噁英真相',
        content: '现代白色烘焙纸普遍采用元素无氯漂白（ECF），二噁英痕量残留较传统氯气工艺下降99%以上；棕色本色纸则采用全无氯（TCF）工艺。但必须注意：纸张呈现棕色本色并不自动代表绝对不含PFAS防油涂层，购买外卖纸碗和垫纸时仍需查验无氟声明。',
        type: 'fact',
        boxText: '颜色误区：本色棕色TCF纸免去了氯漂白，但颜色本身不能证明无PFAS，仍需认准无氟认证标识。'
      },
      {
        title: '215°C–232°C（420°F–450°F）热焦化极限与空气炸锅吸纸起火风险',
        content: '绝大多数硅油烘焙纸的安全上限为215°C–232°C。超过232°C时纤维素迅速脱水碳化并释放烟雾。严禁将烘焙纸置于烤箱上火炙烤（Broiler > 260°C）下，也切忌在空载预热空气炸锅时放入未压重物的垫纸，否则高速热风涡流会在数秒内将纸张吸上发热管引燃。',
        type: 'warning',
        boxText: '防火红线：烤箱使用严格控制在215°C–232°C以下、禁止接触炙烤管，空气炸锅必须用足量食材压牢垫纸四角。'
      },
      {
        title: '常见误区：蜡纸误入烤箱与热披萨盒油脂迁出风险',
        content: '传统石蜡或大豆蜡纸熔点仅50°C–65°C，绝对不能替代硅油纸入炉烘焙，否则迅速融化冒烟甚至起火。此外，滚烫高脂披萨与炸物长期装在再生瓦楞纸盒中会加速印刷油墨与矿物油烃（MOSH/MOAH）迁入，应及时转移至陶瓷或高硼硅玻璃盘中。',
        type: 'tip',
        boxText: '实用提醒：切勿把普通蜡纸放进烤箱，热披萨与高油脂外卖到家后请立即装入玻璃或陶瓷餐盘。'
      }
    ],
    conclusion: '选购安全厨房用纸需核查三大要点：全无氯（TCF）、无PFAS（PFAS-Free）及食品级硅油涂层；严格控制在215°C–232°C以内远离炙烤管；空气炸锅务必压重防吸飞；热食及时脱离外卖纸盒改盛玻璃陶瓷盘。',
    faqs: [
      {
        question: '家用烘焙硅油纸含有PFAS“永久化学品”吗？',
        answer: '合格的家用烘焙硅油纸主要依靠聚二甲基硅氧烷（硅油）或Quilon实现防粘，通常不添加PFAS。但部分廉价防油包装纸、蛋糕纸杯和外卖盒曾使用PFHxA等C6氟化学剂，目前已被欧盟2026年10月新规及FDA严格禁限。'
      },
      {
        question: '硅油涂层烘焙纸和Quilon铬盐涂层烘焙纸有什么区别？',
        answer: '硅油涂层耐受220°C–230°C且不含重金属，可重复使用；Quilon采用三价铬硬脂酸络合物，仅限单次烘焙，高温焦黑时易残留微量铬。'
      },
      {
        question: '棕色本色烘焙纸一定比白色烘焙纸更健康吗？',
        answer: '棕色TCF纸完全不使用氯漂白，而现代白色ECF纸已将漂白副产物降至极微痕量。只要标注无PFAS与食品级硅油涂层且不超温焦糊，两者均安全可用。'
      },
      {
        question: '烘焙纸放进空气炸锅为什么容易起火？',
        answer: '空载或食物过轻时，炸锅顶部高速风机产生的负压吸力会将轻质垫纸吸到400°C–600°C的裸露电热管上，几秒内即可起火。'
      },
      {
        question: '烤饼干可以用超市卖的普通蜡纸代替烘焙硅油纸吗？',
        answer: '绝对不行。蜡纸表面的石蜡在50°C–65°C就会融化渗透食物并产生大量浓烟与火灾隐患。'
      }
    ],
    relatedTools: [
      { name: '硅胶烘焙模具低聚物热降解分析仪', url: '/zh-cn/tools/silicone-bakeware-oligomer-analyzer/' },
      { name: '空气炸锅垫纸气流与起火模拟器', url: '/zh-cn/tools/air-fryer-liner-fire-hazard-simulator/' },
      { name: '烤箱层位与烤盘材质温度调节器', url: '/zh-cn/tools/oven-rack-bakeware-heat-adjuster/' }
    ]
  },
  {
    slug: 'recalled-air-fryer-pressure-cooker-cpsc-2026-safety-guide',
    title: '2025–2026召回空气炸锅与电压力锅安全警示全解析：炉门弹击烫伤、带压炸盖物理机制、接线烧蚀隐患及铭牌核查指南',
    category: 'appliances',
    excerpt: '您家的空气炸锅烤箱或电压力锅是否在2026年CPSC紧急停用警示名单内？全面盘点Tristar、Gourmia、Kalorik、SharkNinja与Cosori缺陷原理及60秒底座型号核对方法。',
    date: waveDate,
    readTime: '18分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '2025至2026年11月期间，美国消费品安全委员会（CPSC）针对热销厨房小家电密集发布了多起大规模召回与紧急停用警示：包括2026年10月Tristar Power Quick Pot 6夸脱电压力锅（型号Y6D-36，约39.3万台）、2026年2月Gourmia 6夸脱电压力锅（型号GPC625，约4.35万台）、2026年11月Gourmia 9片装数显空气炸烤箱（型号GTF7530，约17.6万台）以及2026年10月Kalorik MAXX对开门空气炸烤箱紧急警示，紧随此前SharkNinja Foodi OP300系列、Cosori、Insignia和PowerXL的多起召回之后。掌握防爆止回阀、弹簧炉门疲劳与大电流端子I²R发热机理，并在60秒内核对机身底座铭牌，是防止严重烫伤与厨房火灾的关键。',
    sections: [
      {
        title: '2026 CPSC电压力锅带压开盖警示：Tristar Y6D-36、Gourmia GPC625与SharkNinja',
        content: '符合UL 1026标准的电压力锅通过浮子阀和锅盖锁止环防止带压开盖。2026年10月CPSC紧急呼吁立即停用约39.3万台Tristar Power Quick Pot（Y6D-36），此前2月亦警示约4.35万台Gourmia GPC625，2025年则召回了约180万台SharkNinja Foodi OP300系列。当粘稠泡沫卡死浮子阀或锁止公差磨损时，115°C带压热汤会在开盖瞬间暴沸喷溅致人严重烫伤。',
        type: 'warning',
        boxText: '压力锅警报：请立即翻转检查机身底部标签是否为Tristar Y6D-36、Gourmia GPC625或SharkNinja OP300系列，命中请立刻停用。'
      },
      {
        title: '空气炸烤箱弹簧门弹伤与烫伤隐患：Gourmia GTF7530与Kalorik MAXX',
        content: '2026年末，CPSC宣布召回约17.6万台Gourmia 9片装空气炸烤箱（GTF7530，已报告40起烫伤）并紧急警示Kalorik MAXX对开玻璃门炸烤箱：高频受热导致塑料凸轮阻尼老化或弹簧疲劳，超过200°C的高温玻璃门会在取放食物时突然回弹砸中手臂造成严重灼伤。',
        type: 'warning',
        boxText: '炉门夹烫警示：Gourmia GTF7530与Kalorik MAXX对开门空气炸烤箱存在高温门体意外自动合拢砸伤手臂的风险。'
      },
      {
        title: '抽屉式空气炸锅接线端子I²R发热起火隐患（Cosori、Insignia、PowerXL）',
        content: '此前数百万台抽屉式空气炸锅召回揭示了1500W–1800W大功率家电的通病：持续通过12–15安培电流的压接端子一旦松动氧化，接触电阻上升将触发焦耳热效应（P = I²R），熔化塑料外壳并引发冒烟起火，用毕务必拔掉插头。',
        type: 'fact',
        boxText: '电气防火：大功率空气炸锅内部压接端子若接触不良极易因I²R发热熔化塑料，使用后请断电拔插头。'
      },
      {
        title: '60秒核查机身铭牌型号与批次代码的实用步骤',
        content: '拔下电源并等待机身完全冷却后，查看机身底部或背面的UL金属或银黑色铭牌标签，记录精确型号（如Y6D-36、GPC625、GTF7530、OP301）、生产日期批次代码与UPC条码，通过官方CPSC公告或本站产品召回扫描器核验，切勿盲目购入未核对的二手厨电。',
        type: 'tip',
        boxText: '铭牌核验：不能仅看正面品牌Logo，必须核对机身底部或背面的完整型号与批次号。'
      },
      {
        title: '为何严禁转卖或捐赠召回厨电及安全剪线报废规范',
        content: '法律严禁转售或捐赠已召回的缺陷家电，以免把烫伤和火灾隐患转移给他人。对于2026年因原进口商变更而无免费换新计划的警示机型（如Tristar Y6D-36与Kalorik MAXX），在按流程拍照留证后，务必贴近机身剪断电源线并送交当地电子废弃物回收点。',
        type: 'warning',
        boxText: '报废准则：切勿转赠或转卖召回厨电，留存型号照片后请剪断电源线并送交电子垃圾回收。'
      }
    ],
    conclusion: '花两分钟核对家里空气炸锅与电压力锅底座上的精确型号，即可有效规避2025–2026年CPSC密集通报的带压炸盖、弹门烫伤与接线过热火灾风险。',
    faqs: [
      {
        question: '2026年CPSC最新警示或召回了哪些空气炸锅和电压力锅？',
        answer: '主要涵盖Tristar Power Quick Pot 6夸脱电压力锅（Y6D-36，2026年10月）、Gourmia 6夸脱电压力锅（GPC625，2026年2月）、Kalorik MAXX对开门空气炸烤箱（2026年10月）以及Gourmia 9片装空气炸烤箱（GTF7530，2026年11月），另有早期SharkNinja OP300、Cosori和Insignia召回。'
      },
      {
        question: '为什么2026年部分警示机型只要求停用丢弃却没有厂商免费替换？',
        answer: '当原生产或分销企业解体、更名或未达成合规召回补偿方案时，CPSC会直接发布单方面停用警告，呼吁消费者立刻丢弃。'
      },
      {
        question: '如果每次都等压力锅自然泄压，还能继续用召回型号吗？',
        answer: '不能。机械锁止公差缺陷或浮子阀卡滞可能在仍有余压时提前解锁，造成沸水暴沸喷溅，必须立即停用。'
      },
      {
        question: '为什么空气炸锅不用时建议拔掉插头？',
        answer: '多数产品控制板与继电器处于常通待机状态，彻底拔插头可杜绝待机电路及受潮元器件起火风险。'
      },
      {
        question: '家里这台召回产品一直没出过问题，可以捐给二手市场吗？',
        answer: '不可以。转售或捐赠召回产品违法且极易伤及下一个家庭，请剪断电源线按电子垃圾处置。'
      }
    ],
    relatedTools: [
      { name: '厨具条形码与CPSC/FDA召回扫描器', url: '/zh-cn/tools/product-recalls-scanner/' },
      { name: '厨房突发隐患应急分级处置器', url: '/zh-cn/tools/kitchen-hazard-emergency-triage/' },
      { name: '电压力锅 / Instant Pot 水位与泄压检查器', url: '/zh-cn/tools/instant-pot-pressure-release-checker/' }
    ]
  },
  {
    slug: 'bpa-free-substitutes-bps-bpf-food-packaging-efsa-safety',
    title: '“不含BPA”塑料真的安全吗？2026欧盟2024/3190与EFSA新规下的BPS、BPF及Tritan“遗憾替代”化学真相',
    category: 'materials',
    excerpt: '揭开“BPA-Free”标签背后的BPS与BPF同系物隐患，详解欧盟2024/3190禁用指令、EFSA 2026年10月替代双酚评估指南，以及真正零双酚的硼硅玻璃与316不锈钢替代方案。',
    date: waveDate,
    readTime: '17分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '如今几乎所有透明塑料破壁机杯、奶瓶和保鲜盒都印有醒目的“不含BPA（BPA-Free）”标签。然而环境毒理学家长期警示的“遗憾替代（Regrettable Substitution）”正在厨房上演：厂家移除双酚A（BPA）后，常改用结构几乎一致的双酚S（BPS）和双酚F（BPF）。继欧盟食品安全局（EFSA）将BPA每日耐受摄入量骤降至0.2纳克/公斤体重后，欧盟委员会第(EU) 2024/3190号法规全面禁止食品接触材料使用BPA并严限其他危险双酚衍生物，2026年10月EFSA又进一步发布针对替代双酚的数据评估指南及塑料SVHC筛查报告。看懂BPS/BPF热稳定性背后的内分泌干扰真相与Tritan在洗碗机下的碱蚀规律，才能守护餐桌安全。',
    sections: [
      {
        title: '欧盟2024/3190法规与EFSA 2026年10月新指南：封堵“不含BPA”漏洞',
        content: '长期以来，用BPS或BPF替代BPA让PES奶瓶、罐头涂料和收银热敏涂层得以合法宣称“不含BPA”。但由于它们保留了与雌激素和甲状腺激素受体结合的双酚骨架，欧盟(EU) 2024/3190法规与EFSA 2026年10月发布的替代双酚安全评估指南明确将替代双酚纳入整体毒理监管框架。',
        type: 'fact',
        boxText: '监管转折：欧盟2024/3190与EFSA 2026年10月替代双酚评估指南已全面收紧对BPS、BPF等同系替代物的监管审查。'
      },
      {
        title: 'BPS与BPF毒理悖论：更耐沸水表象下的同等内分泌干扰活性',
        content: '双酚S用磺酰基（-SO2-）取代BPA的中心异丙叉桥，使其在沸水中水解略慢、更易宣传“耐高温”。然而细胞毒理实验证实，BPS激活雌激素受体的效力与BPA相当，且生物降解更慢、在纳摩尔浓度下即可干扰胰岛β细胞及发育神经信号。',
        type: 'warning',
        boxText: '高温误区：BPS虽在初期较耐煮沸，一旦迁入热油或酸性食物，其内分泌干扰效力与体内蓄积风险毫不亚于BPA。'
      },
      {
        title: 'Eastman Tritan™、PPSU与聚丙烯（#5 PP）的真实单体成分剖析',
        content: 'Eastman Tritan™共聚酯（DMT/CHDM/TMCD合成）和聚丙烯（#5 PP）确实不含BPA、BPS与BPF。但“零双酚”不等于绝对惰性：《Nature Food》证实5号PP奶瓶在70°C水浴下每升释放130万至1620万颗微塑料；而洗碗机强碱（pH 10.5–11.5）反复洗涤会裂解Tritan聚酯键，引发表面起雾龟裂并释放环状低聚物。',
        type: 'fact',
        boxText: '材料真相：Tritan与#5 PP虽无双酚，但#5 PP在70°C大量脱落微塑料，洗碗机碱洗会引发共聚酯龟裂并溶出低聚物。'
      },
      {
        title: '隐藏的双酚接触源：罐头内壁BADGE涂层、玻璃瓶盖塑化垫圈与再生料',
        content: '除透明水杯外，金属罐头环氧涂料（BADGE）、果酱与青酱金属旋盖内侧遇热油的塑化密封圈，以及来源不明的再生塑料盒同样可能迁移双酚及助剂。切勿直接带金属罐加热食物，也避免让滚烫含油酱汁长时间紧贴塑料垫圈瓶盖。',
        type: 'tip',
        boxText: '隐形死角：严禁在金属罐内直接加热食物，滚烫油性酱汁装瓶后勿倒扣接触塑料涂层瓶盖。'
      },
      {
        title: '彻底告别双酚迁移：3.3高硼硅玻璃、304/316不锈钢与铂金硅胶方案',
        content: '处理高温、高脂、酸性或微波加热食材时，3.3高硼硅玻璃和高温釉面陶瓷不含任何有机单体与增塑剂，完全耐受洗碗机强碱与微波。日常水杯和焖烧壶推荐食品级304（18/8）或含钼316不锈钢，配合通过BfR XV认证的纯铂金硫化硅胶密封圈。',
        type: 'success',
        boxText: '终极替代：塑料容器仅限常温干货或冷鲜短存，热食复热与酸性菜肴全面换用高硼硅玻璃与304/316不锈钢。'
      }
    ],
    conclusion: '单纯依赖“不含BPA”标签已无法满足现代食品安全要求。对照欧盟2024/3190与EFSA 2026替代双酚指南，果断淘汰发白起雾的旧塑料盒与PC杯体，把微波复热和滚烫食材彻底迁移至高硼硅玻璃与食品级不锈钢容器中。',
    faqs: [
      {
        question: '“不含BPA”塑料中常见的BPS和BPF真的更安全吗？',
        answer: '并不更安全。毒理研究表明BPS和BPF与BPA结构高度相似，具有相近的雌激素干扰活性和代谢毒性，这也是欧盟2024/3190及EFSA 2026年10月指南收紧监管的原因。'
      },
      {
        question: 'Eastman Tritan材质含有BPS或BPF吗？',
        answer: '不含。Tritan共聚酯由DMT、CHDM与TMCD聚合而成，完全不含BPA、BPS和BPF。但长期高温洗碗机碱洗仍会使其表面产生细纹并溶出环状低聚物。'
      },
      {
        question: '5号聚丙烯（PP）装开水或冲奶粉安全吗？',
        answer: 'PP不含双酚与邻苯塑化剂，但《Nature Food》研究显示70°C热水摇晃PP奶瓶会脱落数百万颗微塑料微粒；改用玻璃或不锈钢可完全杜绝微塑料脱落。'
      },
      {
        question: '如何分辨旧塑料盒或破壁机杯里是否含BPA？',
        answer: '查看底部回收标志：标注#7“PC”（聚碳酸酯）或2012年前生产的透明硬质塑料制品极可能含BPA。任何发白、有划痕或蛛网细纹的硬塑料都应淘汰。'
      },
      {
        question: '微波炉加热和保存热剩菜最安全的容器是什么？',
        answer: '不带金属描边的3.3高硼硅耐热玻璃或纯白釉陶瓷碗，搭配可透气玻璃盖或厨房用纸，避免保鲜膜直接接触热食物。'
      }
    ],
    relatedTools: [
      { name: '厨房塑料热食化学迁移风险评估器', url: '/zh-cn/tools/kitchen-plastic-leaching-checker/' },
      { name: '破壁机塑料杯微裂纹水解与BPA模拟器', url: '/zh-cn/tools/plastic-blender-jar-hydrolysis-modeler/' },
      { name: '罐头食品BPA与环氧树脂溶出模型器', url: '/zh-cn/tools/canned-food-bpa-leaching-modeler/' }
    ]
  }
];

const guidesJa = [
  {
    slug: 'parchment-paper-pfas-pfhxa-silicone-coating-safety',
    title: 'クッキングシート・ピザ箱・耐油包装紙の安全性：2026年10月EU PFHxA規制、シリコン対キロンの違い、無塩素漂白と230℃耐熱上限',
    category: 'materials',
    excerpt: 'クッキングシートにPFASやクロム系キロンは含まれる？2026年10月発効のEU REACH附属書XVII第79項PFHxA規制、シリコンコートとTCF漂白の違い、オーブン・ノンフライヤー発火限界を徹底解説。',
    date: waveDate,
    readTime: '17分で読める',
    author: 'IsItKitchenSafe',
    intro: 'クッキングシート（オーブンペーパー）、ベーカリー耐油袋、ピザの宅配箱は、熱いバターや油分が紙繊維に染み込むのを防ぐ表面処理を施しています。2026年10月、欧州連合REACH規制第79項（規則(EU) 2024/2462）の移行期間が満了し、食品接触紙・板紙におけるPFHxA（C6系PFAS代替物質）への厳格な禁止上限が発効しました。米FDAによるPFAS耐油剤撤廃や独BfR勧告XXXVIの更新と合わせ、シリコーン樹脂（PDMS）コートと3価クロム系キロン（Quilon）処理の違い、完全無塩素漂白（TCF）、215℃〜232℃の発火上限を把握することが安全なオーブン調理の鍵となります。',
    sections: [
      {
        title: '2026年10月 EU PFHxA規制（REACH第79項）と米FDAのPFAS耐油剤撤廃',
        content: '従来のC8系PFOA撤廃後、多くの耐油包装紙が分解してPFHxAを生じるC6フッ素化学剤へ移行しました。2026年10月より欧州規則(EU) 2024/2462は食品接触用の紙・板紙におけるPFHxAおよび塩類を25 ppb以下、関連物質を1,000 ppb以下に制限し、米FDAの撤廃措置と並び短期鎖代替の抜け穴を塞ぎました。',
        type: 'fact',
        boxText: '2026年10月発効：EU REACH第79項により食品接触用の紙・板紙におけるC6系PFHxAが25 ppb以下に厳格規制されました。'
      },
      {
        title: 'シリコーン加工紙 vs キロン（Quilon）加工紙：PDMSと3価クロム錯体の違い',
        content: '家庭向け高級クッキングシートは食品用ポリジメチルシロキサン（シリコーン）両面加工が主流で重金属を含みません。一方、業務用安価シートの一部には3価クロム錯体「キロン」が使われ、1回限りの使い切りで焦げや強酸性調理で微量クロム溶出が懸念されます。',
        type: 'tip',
        boxText: '選び方のコツ：パッケージに「シリコーン樹脂加工・PFASフリー」と明記された製品を選び、業務用キロン加工紙の使い回しを避けましょう。'
      },
      {
        title: '無塩素漂白（ECF）と未晒し完全無塩素（TCF）の科学的違い',
        content: '現在の白色クッキングシートは二酸化塩素によるECF漂白でダイオキシン生成を99%以上抑えており、茶色の未晒し紙は塩素系薬品を一切使わないTCFです。ただし未晒し茶色であっても耐油袋などではPFAS含有歴があるため、必ずPFASフリー表示を確認してください。',
        type: 'fact',
        boxText: '色の誤解：茶色の未晒し紙（TCF）は塩素不使用ですが、紙の色だけではPFAS無添加を保証できないため表示確認が不可欠です。'
      },
      {
        title: '耐熱上限215℃〜232℃（420°F〜450°F）とノンフライヤー発火物理',
        content: '一般的なシリコーン加工紙の耐熱上限は215℃〜232℃（250℃記載の厚手品は20分制限など条件付き）です。上火グリル（ブロイラー）直下では即座に発火し、ノンフライヤーでは食材で押さえずに予熱すると強風でシートが400℃〜600℃の電熱線へ吸い上げられ数秒で炎上します。',
        type: 'warning',
        boxText: '発火防止：表示上限温度と使用時間を厳守し、上火グリルでの使用禁止、ノンフライヤーでは必ず食材を乗せてから加熱してください。'
      },
      {
        title: 'ワックスペーパーの誤用とピザ箱の高温油分移行の落とし穴',
        content: 'パラフィンワックス紙は50℃〜65℃で溶けるためオーブンに入れると発煙・発火します。また熱いピザや揚げ物を段ボール箱に入れ続けると再生紙由来の鉱油炭化水素（MOSH/MOAH）やインク成分の移行が加速するため、陶磁器や耐熱ガラス皿へすぐ移し替えましょう。',
        type: 'tip',
        boxText: '安全習慣：ワックスペーパーは絶対に加熱に使わず、熱いピザや揚げ物は段ボール箱から陶器・ガラス皿へ早めに移しましょう。'
      }
    ],
    conclusion: '安全なキッチンペーパー選びは「PFASフリー・シリコーン両面加工・TCF未晒し/ECF」を確認し、耐熱温度と時間上限内でグリルを避け、ノンフライヤーでは食材でしっかり押さえ、熱い惣菜は紙箱から陶器・ガラス皿へ移すことが基本です。',
    faqs: [
      {
        question: '市販のクッキングシートにはPFAS（有機フッ素化合物）が含まれますか？',
        answer: '一般的な家庭用クッキングシートの離型層はシリコーン樹脂やキロンでありPFASは通常使われませんが、一部の耐油包み紙やテイクアウト箱にはPFHxA等のフッ素系耐油剤が使用されてきたため、2026年10月のEU規制やFDA撤廃措置が進んでいます。'
      },
      {
        question: 'シリコーン加工紙とキロン加工紙の違いは何ですか？',
        answer: 'シリコーン加工は食品用PDMSによる無金属コーティングで剥離性が高く安心です。キロン加工は3価クロム化合物を用いる安価な業務用1回使い切り仕様です。'
      },
      {
        question: '茶色の未晒しクッキングシートは白い製品より安全ですか？',
        answer: '未晒し（TCF）は塩素系漂白工程がありませんが、現行の白色ECF品も有害な塩素化副生成物を極限まで抑えています。どちらもPFASフリー・シリコーン加工であれば安全に使えます。'
      },
      {
        question: 'ノンフライヤーでクッキングシートが燃える原因は？',
        answer: '軽量のシートの上に食材を十分乗せずに予熱や調理を行うと、高速熱風がシートを上部ヒーター（400℃〜600℃）へ吸い寄せて直接引火するためです。'
      },
      {
        question: 'ワックスペーパーをオーブンで代用できますか？',
        answer: '絶対に不可です。ワックスが50℃〜65℃で溶けて料理に混入し、激しい発煙と火災を引き起こします。'
      }
    ],
    relatedTools: [
      { name: 'シリコン調理型 シロキサン熱分解解析ツール', url: '/ja/tools/silicone-bakeware-oligomer-analyzer/' },
      { name: 'ノンフライヤーシート気流・発火シミュレーター', url: '/ja/tools/air-fryer-liner-fire-hazard-simulator/' },
      { name: 'オーブン段数・焼き型素材 温度時間調整チェッカー', url: '/ja/tools/oven-rack-bakeware-heat-adjuster/' }
    ]
  },
  {
    slug: 'recalled-air-fryer-pressure-cooker-cpsc-2026-safety-guide',
    title: 'リコール対象のノンフライヤー＆電気圧力鍋（2025–2026年CPSC警告）：扉の急閉鎖火傷、加圧蓋飛び物理、内部配線発火と型番チェック法',
    category: 'appliances',
    excerpt: 'ご自宅のノンフライヤーオーブンや電気圧力鍋が2026年の米国CPSCリコール・使用中止警告対象になっていませんか？Tristar、Gourmia、Kalorik、SharkNinja、Cosoriの事故原因と60秒点検法を解説。',
    date: waveDate,
    readTime: '18分で読める',
    author: 'IsItKitchenSafe',
    intro: '2025年から2026年11月にかけて、米国消費者製品安全委員会（CPSC）は電気圧力鍋およびオーブン型ノンフライヤーに関する異例の大規模リコール・緊急使用停止警告を連続発表しました。2026年だけでTristar Power Quick Pot 6クォート圧力鍋（Y6D-36、2026年10月、約39.3万台）、Gourmia 6クォート圧力鍋（GPC625、2026年2月、約4.35万台）、Gourmia 9枚焼きデジタルノンフライヤーオーブン（GTF7530、2026年11月、約17.6万台）、Kalorik MAXX観音開きノンフライヤーオーブン（2026年10月）が対象となり、過去のSharkNinja OP300シリーズ、Cosori、Insignia、PowerXLのリコールに続いています。安全インターロックや電気配線I²R発熱のメカニズムを理解し、本体底面の型番を60秒で確認することが事故防止に直結します。',
    sections: [
      {
        title: '2026年CPSC電気圧力鍋の蓋飛び警告：Tristar Y6D-36・Gourmia GPC625・SharkNinja',
        content: '電気圧力鍋はUL 1026規格に基づきフロートピンが加圧中の蓋開けを物理阻止します。しかし2026年10月のTristar Y6D-36（約39.3万台）、2月のGourmia GPC625、2025年のSharkNinja Foodi OP300シリーズ（約180万台）では加圧中に蓋が外れて熱湯・煮汁が噴出する火傷事故が多発しました。泡立ちによるピン固着やロック機構の公差不良があると、115℃の過熱液体が一気に突沸噴出します。',
        type: 'warning',
        boxText: '圧力鍋警告：本体底面または背面の型番ラベルにTristar Y6D-36、Gourmia GPC625、SharkNinja OP300系が記載されていれば直ちに使用を中止してください。'
      },
      {
        title: '熱い扉が急に閉まる火傷事故：Gourmia GTF7530とKalorik MAXXフレンチドア',
        content: '2026年後半、CPSCはGourmia GTF7530オーブン（約17.6万台・火傷40件）をリコールし、Kalorik MAXX観音開きオーブンにも緊急停止警告を出しました。1,800Wの高温サイクルにより樹脂カムやスプリング保持力が低下し、200℃超のガラス扉が食品出し入れ中に腕へ勢いよく閉まる危険があります。',
        type: 'warning',
        boxText: '扉の急閉鎖：Gourmia GTF7530とKalorik MAXX観音開き機種は高温ガラス扉が腕に閉まり重度の火傷を負う恐れがあります。'
      },
      {
        title: 'バスケット型ノンフライヤーの配線I²R発熱発火（Cosori・Insignia・PowerXL）',
        content: '従来の大型リコールでは12〜15アンペアが流れる内部圧着端子の接触不良によるジュール発熱（P = I²R）が問題となりました。振動等で端子が緩むと樹脂ハウジングが溶融し発煙・発火するため、使用後は必ずコンセントを抜いてください。',
        type: 'fact',
        boxText: '電気安全：1,500W以上の高出力家電は内部端子の発熱リスクが高いため、冷却後は必ず電源プラグを抜いて保管してください。'
      },
      {
        title: '60秒点検：本体底面UL銘板の型番・製造ロットコード確認手順',
        content: '電源プラグを抜き完全に冷ました状態で本体底面や背面の銀色・黒色のUL定格ステッカーを確認し、正確な型番（Y6D-36、GPC625、GTF7530等）、製造日付コード、UPCバーコードを記録して公式CPSC情報や当サイトのリコールスキャナーで照合しましょう。',
        type: 'tip',
        boxText: '点検の鉄則：表面ロゴだけでなく必ず本体底面・背面の型番ステッカーを確認し、中古品購入前にも照合してください。'
      },
      {
        title: 'リコール品を寄付・転売してはいけない理由と電源コード切断廃棄ルール',
        content: '安全リコール対象品の転売やリサイクルショップへの寄付は他家庭へ火災・火傷リスクを移す違法かつ危険な行為です。2026年警告のように輸入元事業変化で無償交換窓口がない場合は、必要写真を撮影した上で電源コードを本体根元から切断し、自治体の小型家電・電子廃棄物回収へ出してください。',
        type: 'warning',
        boxText: '適正廃棄：リコール品は絶対に譲渡・売却せず、電源コードを切断して再使用不能にしてから電子廃棄物として処分してください。'
      }
    ],
    conclusion: 'お使いのノンフライヤーと電気圧力鍋の底面ラベルを2分で照合するだけで、2025〜2026年CPSCリコール・警告で報告された蓋飛び火傷・扉急閉鎖・配線過熱事故を確実に防げます。',
    faqs: [
      {
        question: '2026年にCPSCが警告・リコールした主なノンフライヤーや圧力鍋は？',
        answer: 'Tristar Power Quick Pot 6クォート圧力鍋（Y6D-36、2026年10月）、Gourmia 6クォート圧力鍋（GPC625、2026年2月）、Kalorik MAXX観音開きノンフライヤーオーブン（2026年10月）、Gourmia 9枚焼きノンフライヤーオーブン（GTF7530、2026年11月）のほか、過去のSharkNinja OP300、Cosori、Insigniaが含まれます。'
      },
      {
        question: 'なぜ2026年警告の一部機種は無償交換ではなく廃棄が推奨されたのですか？',
        answer: '元の販売・輸入事業者が事業構造変更等で正式な交換補償プログラムを締結できない場合、CPSCは消費者保護のため単独で使用中止・安全廃棄の緊急警告を発出します。'
      },
      {
        question: '毎回自然減圧（NPR）で完全に冷ましてから開ければリコール圧力鍋を使い続けてよいですか？',
        answer: 'いいえ。ロック機構自体の設計・耐久欠陥やフロートピンの固着により残圧がある状態で開いてしまう恐れがあるため、対象機種は直ちに使用を停止してください。'
      },
      {
        question: 'なぜノンフライヤーを使わない時はプラグを抜くべきですか？',
        answer: '操作パネルやリレー基板に常時待機電力がかかり続ける機種が多いため、不使用時の電源遮断により電気火災リスクを遮断できます。'
      },
      {
        question: '自分の家では問題なく動いているリコール家電を譲ったり売ったりできますか？',
        answer: 'できません。リコール対象製品の販売・寄付は禁じられており、次の使用者に重大な火傷や火災の危険をもたらします。'
      }
    ],
    relatedTools: [
      { name: '製品バーコード＆CPSC/FDAリコールスキャナー', url: '/ja/tools/product-recalls-scanner/' },
      { name: 'キッチン事故・緊急トリアージ対応ガイド', url: '/ja/tools/kitchen-hazard-emergency-triage/' },
      { name: '電気圧力鍋・Instant Pot 上限線＆減圧チェッカー', url: '/ja/tools/instant-pot-pressure-release-checker/' }
    ]
  },
  {
    slug: 'bpa-free-substitutes-bps-bpf-food-packaging-efsa-safety',
    title: '「BPAフリー」プラスチックは本当に安全か？EU規則2024/3190・2026年10月EFSA指針が明かすBPS・BPF「遺憾な代替」と安全容器選び',
    category: 'materials',
    excerpt: '「BPAフリー」表示の裏に潜むBPSやBPFなど類似ビスフェノールの内分泌かく乱リスク、EU 2024/3190禁止令と2026年10月EFSA新指針のポイント、ホウケイ酸ガラスや316ステンレスへの賢い切り替えを解説。',
    date: waveDate,
    readTime: '17分で読める',
    author: 'IsItKitchenSafe',
    intro: 'ブレンダー容器や哺乳瓶、保存容器に並ぶ「BPAフリー」の表示。しかし毒性学者が長年警鐘を鳴らしてきたのが、ビスフェノールA（BPA）を除去する代わりに化学構造が酷似したビスフェノールS（BPS）やビスフェノールF（BPF）へ置き換える「遺憾な代替（Regrettable Substitution）」です。欧州食品安全機関（EFSA）がBPA耐容一日摂取量を0.2 ng/kg体重/日へ引き下げた後、EU規則(EU) 2024/3190は食品接触材料でのBPA禁止と危険な代替ビスフェノール規制へ踏み込み、さらに2026年10月にはEFSAが代替ビスフェノールの安全性評価データ要件とプラスチックSVHC物質スクリーニング指針を公表しました。加熱下でのBPSの挙動と食洗機アルカリによるTritanの白濁亀裂、完全に不活性な代替素材を正しく理解しましょう。',
    sections: [
      {
        title: 'EU規則2024/3190と2026年10月EFSA指針：代替ビスフェノールの抜け穴閉鎖',
        content: 'これまでBPSやBPFへの置き換えによって法的に「BPAフリー」と表示できましたが、これらもエストロゲン・甲状腺ホルモン受容体に作用する共通のビスフェノール骨格を持ちます。EU規則(EU) 2024/3190および2026年10月公表のEFSA代替ビスフェノール評価指針は、代替物質にも厳格な毒性データ提出を求める枠組みへ移行しました。',
        type: 'fact',
        boxText: '規制転換点：EU規則2024/3190と2026年10月EFSA指針により、「BPAフリー」の名の下の安易なBPS/BPF代替に対する監視が大幅に厳格化されました。'
      },
      {
        title: 'BPS・BPFの毒性パラドックス：沸騰耐性の高さと内分泌かく乱活性',
        content: 'BPSは中央結合部がスルホニル基（-SO2-）に置換されており、熱水での初期加水分解が遅いため耐熱プラスチックとして重宝されてきました。しかしバイオアッセイではBPAに匹敵するエストロゲン様作用と高い環境・生体残留性が示されています。',
        type: 'warning',
        boxText: '耐熱の罠：BPSは熱湯で壊れにくい反面、温かい油脂や酸性食品へ移行するとBPAと同等レベルの内分泌かく乱リスクを示します。'
      },
      {
        title: 'Eastman Tritan™・PPSU・ポリプロピレン（#5 PP）の正確な素材組成',
        content: 'Eastman Tritan™（DMT/CHDM/TMCD共重合ポリエステル）やポリプロピレン（#5 PP）はBPA・BPS・BPFを含みません。ただし無害・完全不活性というわけではなく、Nature Food誌の研究では70℃調乳時にPP製哺乳瓶から1Lあたり130万〜1,620万個のマイクロプラスチックが剥離し、食洗機の強アルカリ（pH 10.5–11.5）はTritan表面に微細亀裂（クレージング）を生じさせて環状オリゴマー溶出を招きます。',
        type: 'fact',
        boxText: '素材の実像：TritanやPPはビスフェノール不使用ですが、PPは70℃で大量のマイクロプラスチックを放出し、食洗機アルカリはポリエステルに微細亀裂を作ります。'
      },
      {
        title: '見落としがちな発生源：缶詰内面BADGE塗膜と瓶詰金属蓋パッキン',
        content: '透明プラスチックだけでなく、缶詰内側のエポキシ樹脂塗膜（BADGE系）や、油分の多いパスタソース・ペスト等の瓶蓋裏にある可塑化パッキン、再生プラスチック容器も化学物質移行源となります。金属缶のまま直火・湯煎加熱することは避けましょう。',
        type: 'tip',
        boxText: '隠れた移行源：缶詰を缶のまま加熱せず、油分を含む熱いソースが瓶蓋裏の樹脂パッキンに長時間触れないよう管理しましょう。'
      },
      {
        title: '完全ビスフェノールフリーへのアップグレード：ホウケイ酸ガラス3.3＆304/316ステンレス',
        content: '電子レンジ加熱、熱い汁物、酸性・高脂肪食品の保存には、合成モノマーや可塑剤を一切含まないホウケイ酸ガラス3.3（耐熱ガラス）や無鉛磁器が絶対的な安全基準となります。持ち運びボトルには304/316ステンレス鋼とBfR XV適合プラチナ硬化シリコーンパッキンの組み合わせが最適です。',
        type: 'success',
        boxText: '確実な対策：プラスチックは常温乾燥食品や冷蔵保存までに留め、熱い調理・電子レンジ加熱はすべてホウケイ酸ガラスか304/316ステンレスへ切り替えましょう。'
      }
    ],
    conclusion: '「BPAフリー」の表示だけで安全と判断する時代は終わりました。EU規則2024/3190や2026年EFSA指針を踏まえ、白濁や傷の入ったプラスチック容器は更新し、加熱・酸性・油分の多い調理と保存にはホウケイ酸ガラス3.3または食品グレード304/316ステンレス鋼を徹底しましょう。',
    faqs: [
      {
        question: '「BPAフリー」製品に含まれるBPSやBPFはBPAより安全ですか？',
        answer: 'いいえ。BPSやBPFはBPAと極めて似た分子構造を持ち、同等のエストロゲン受容体作用など内分泌かく乱性が確認されているため、EU規則2024/3190や2026年10月のEFSA指針で厳しく評価対象とされています。'
      },
      {
        question: 'Eastman TritanプラスチックにBPSやBPFは含まれていますか？',
        answer: '含まれていません。TritanはBPA・BPS・BPF不使用のコポリエステルですが、食洗機の高温アルカリ洗剤で繰り返すと表面に微細亀裂が生じ低分子オリゴマーが溶出しやすくなります。'
      },
      {
        question: 'ポリプロピレン（#5 PP）に熱湯を入れても完全に安全ですか？',
        answer: 'ビスフェノール類やフタル酸エステルは含みませんが、Nature Food誌の研究により70℃の湯で1Lあたり数百万個のマイクロプラスチックが脱落することが示されています。ガラスやステンレスなら脱落ゼロです。'
      },
      {
        question: '古いプラスチック容器やミキサーにBPAが含まれているか見分ける方法は？',
        answer: '底面の樹脂識別番号を確認し、硬質透明の「#7 PC（ポリカーボネート）」や2012年以前の旧製品はBPA含有の可能性が極めて高いです。白濁・細かなヒビがあるものは廃棄してください。'
      },
      {
        question: '電子レンジで残り物を温め直す最も安全な容器は何ですか？',
        answer: '金属装飾のないホウケイ酸ガラス3.3または磁器製の器を使い、食品に触れるラップの代わりにガラス蓋やペーパータオルを軽く被せて加熱することです。'
      }
    ],
    relatedTools: [
      { name: 'プラスチック食品容器 化学溶出リスクチェッカー', url: '/ja/tools/kitchen-plastic-leaching-checker/' },
      { name: 'ブレンダー容器 微小亀裂＆BPA加水分解モデラー', url: '/ja/tools/plastic-blender-jar-hydrolysis-modeler/' },
      { name: '缶詰BPA・エポキシ内面塗膜溶出シミュレーター', url: '/ja/tools/canned-food-bpa-leaching-modeler/' }
    ]
  }
];

const files = [
  { loc: 'en', path: 'src/data/blog.json', guides: guidesEn },
  { loc: 'es', path: 'src/data/blog.es.json', guides: guidesEs },
  { loc: 'pt', path: 'src/data/blog.pt.json', guides: guidesPt },
  { loc: 'zh-cn', path: 'src/data/blog.zh-cn.json', guides: guidesZh },
  { loc: 'ja', path: 'src/data/blog.ja.json', guides: guidesJa }
];

for (const item of files) {
  const fullPath = path.resolve(item.path);
  const existing = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  let added = 0;
  for (const guide of item.guides) {
    if (!existing.some(b => b.slug === guide.slug)) {
      existing.push(guide);
      added++;
    }
  }
  fs.writeFileSync(fullPath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
  console.log(`✅ [${item.loc.toUpperCase()}] ${item.path}: added ${added} guides (total: ${existing.length})`);
}

console.log('=== WAVE 78 GUIDE GENERATION COMPLETE ===');
