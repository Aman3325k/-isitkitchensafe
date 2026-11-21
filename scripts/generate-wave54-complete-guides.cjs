const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-21';

console.log('=== GENERATING WAVE 54 AUTHORITATIVE SAFETY GUIDES (80 -> 83) ACROSS 5 LANGUAGES ===');

// ==========================================
// 1. ENGLISH GUIDES
// ==========================================
const enGuides = [
  {
    slug: 'carbon-steel-pan-seasoning-blueing-acid-stripping-safety',
    title: 'Carbon Steel Pan Seasoning Chemistry, Blueing Oxidation & Acid Etching: Magnetite (Fe3O4) Passivation, Linoleic Crosslinking & Heavy Metal Leaching Thresholds',
    excerpt: 'Does cooking with wine or vinegar permanently ruin carbon steel seasoning? Discover the thermodynamics of magnetite (Fe3O4) bluing, acid-catalyzed ester hydrolysis, dietary iron bioavailability, and rapid pan restoration.',
    date: waveDate,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'Carbon steel cookware occupies a unique, revered niche in commercial kitchens and home culinary environments, blending the searing responsiveness of bare cast iron with the lightweight maneuverability of stainless steel. However, maintaining a non-stick patina on carbon steel presents distinct chemical and thermodynamic challenges. Unlike the sand-cast rough porous texture of cast iron, cold-rolled carbon steel has an ultra-smooth metallurgical surface (surface roughness Ra ≈ 0.5–1.5 µm). When exposed to low-pH culinary acids—such as white wine deglazing, lemon juice, or tomato reductions—the delicate crosslinked polymer film undergoes rapid ester hydrolysis, stripping the seasoning down to reactive bare iron and releasing significant concentrations of bioavailable ferrous (Fe²⁺) and ferric (Fe³⁺) ions into the meal.',
    sections: [
      {
        title: '1. Metallurgy & Thermal Blueing: Magnetite (Fe3O4) vs Hematite (Fe2O3) Passivation at 280°C–310°C',
        content: 'Before polymer seasoning is applied, carbon steel pans can undergo thermal blueing (controlled heat oxidation). When raw iron (Fe) is heated above 280°C (536°F) in ambient air, oxygen atoms diffuse into the crystal lattice, forming a microscopic conversion layer of black iron oxide, known as magnetite (Fe3O4). Unlike reddish-brown rust (hematite, Fe2O3), which is porous, powdery, and non-adherent, magnetite forms a dense, passivated spinel crystal matrix that bonds directly to the underlying steel. This blue-black oxide film serves two vital safety and culinary functions: it provides baseline corrosion resistance against flash rusting and creates microscopic sub-micron roughness that enhances mechanical bonding for subsequent polymerized oil layers.',
        type: 'info',
        boxText: 'Thermal blueing at 280°C–310°C creates a protective magnetite (Fe3O4) conversion coating, preventing rust and improving seasoning adhesion.'
      },
      {
        title: '2. Polymerization Kinetics: Triglyceride Autoxidation, Conjugated Double Bonds & Free Radical Crosslinking',
        content: 'The non-stick surface of seasoned carbon steel is not simply cooked grease, but a dense, insoluble three-dimensional polymer network. When unsaturated cooking fats (such as grapeseed, canola, or refined flaxseed oil) are heated past their smoke point in thin micro-layers, thermal autoxidation triggers free radical initiation. Polyunsaturated fatty acids containing methylene-interrupted dienes (such as linoleic acid) undergo hydrogen abstraction, forming conjugated double bonds. These conjugated systems undergo rapid radical recombination and Diels-Alder cycloaddition reactions, crosslinking individual fatty acid chains into a hard, vitreous, heat-resistant biopolymer matrix covalently coordinated to the pan substrate.',
        type: 'tip',
        boxText: 'Polymerization turns unsaturated drying oils into a hard, glass-like thermoset biopolymer through free radical autoxidation and crosslinking.'
      },
      {
        title: '3. Acid-Catalyzed Hydrolysis: Why Deglazing with Wine, Lemon, or Tomatoes Cleaves Ester Bonds in Seconds',
        content: 'Despite its hardness, carbon steel seasoning remains susceptible to chemical attack by organic acids. Cooking foods with pH < 4.0—such as acidic pan sauces deglazed with dry white wine (tartaric and malic acids), lemon juice (citric acid), or tomato paste (citric and malic acids)—introduces concentrated electrophilic hydronium ions (H+). These hydronium ions rapidly protonate the carbonyl oxygens in the triglyceride ester linkages (-COO-), catalyzing nucleophilic attack by water molecules. This acid-catalyzed ester hydrolysis cleaves the long-chain polymer backbone into volatile free fatty acids and glycerol, while simultaneously etching the iron substrate: Fe(s) + 2H+(aq) → Fe²+(aq) + H2(g). The loss of interfacial adhesion causes the seasoning to delaminate in visible black flecks.',
        type: 'warning',
        boxText: 'Low-pH culinary acids rapidly hydrolyze ester bonds in pan seasoning, etching the iron substrate and causing black seasoning flakes to shed.'
      },
      {
        title: '4. Leaching Kinetics & Bioavailability: Ferrous (Fe²⁺) vs Ferric (Fe³⁺) and Dietary Iron Intake Safety Thresholds (UL 45 mg/day)',
        content: 'When an acidic reduction dissolves bare carbon steel, iron dissolves initially as the divalent ferrous ion: Fe²⁺. Ferrous iron is soluble and absorbed with high biological efficiency in the human duodenum via the divalent metal transporter 1 (DMT1). However, as the sauce simmers and absorbs dissolved atmospheric oxygen, ferrous iron oxidizes into trivalent ferric iron (Fe³⁺): 4Fe²⁺ + O2 + 4H⁺ → 4Fe³⁺ + 2H2O. Trivalent iron coordinates with dietary polyphenols and tannins, producing dark insoluble iron-tannate precipitates and causing an astringent "metallic penny" off-flavor. Analytical tests show that simmering tomato marinara in unseasoned carbon steel for 30 minutes leaches 20 mg to 50 mg of elemental iron per serving. While beneficial for iron-deficiency anemia, this exceeds the adult Tolerable Upper Intake Level (UL) of 45 mg/day and poses severe hepatotoxic risks for individuals with hereditary hemochromatosis.',
        type: 'warning',
        boxText: 'Simmering acidic sauces in stripped carbon steel can leach over 40 mg of iron per serving, exceeding the 45 mg/day UL threshold.'
      },
      {
        title: '5. The Rapid Restoration Protocol: Stovetop Micro-Thin Oil Buffing and Passivation in Under 5 Minutes',
        content: 'When an acidic sauce etches a silver-grey bare spot into your carbon steel pan, immediate stovetop restoration prevents moisture-induced flash rust. Wash the pan with hot water and a nylon brush (avoid harsh abrasives), and place it over medium-high heat until completely dry and hot (approximately 200°C). Apply 3 to 4 drops of a high-smoke-point unsaturated oil (such as refined grapeseed or avocado oil). Using a folded lint-free cotton cloth or paper towel, aggressively buff the oil across the interior until the metal appears completely dry and matte—leaving no pooled droplets. Heat until the pan gently wisps smoke for 60 seconds, then allow to cool. This restores a microscopically thin, non-sticky polymer layer in under five minutes.',
        type: 'tip',
        boxText: 'Buff oil until the pan looks completely bone-dry before heating; pooling oil produces sticky, gummy residue rather than hard seasoning.'
      }
    ],
    conclusion: 'Carbon steel cookware is an extraordinarily versatile culinary tool when its metallurgical and polymer limits are respected. Thermal blueing forms a protective magnetite (Fe3O4) base, but thin polymer crosslinks remain vulnerable to acid-catalyzed ester hydrolysis. Reserve wine deglazing and extended tomato simmering for non-reactive stainless steel or enameled cast iron. If seasoning is stripped, restore the patina immediately using micro-thin oil buffing to passivate the bare metal and prevent excess dietary iron leaching.',
    faqs: [
      {
        question: 'Is it dangerous to eat black seasoning flakes that peel off a carbon steel pan?',
        answer: 'No. Carbon steel seasoning flakes consist of inert, polymerized dietary oils and non-toxic iron oxides (magnetite). They are biologically non-toxic and pass harmlessly through the gastrointestinal tract without being absorbed. However, shedding indicates your seasoning is compromised and will cause food sticking and metallic flavor transfer.'
      },
      {
        question: 'What is thermal blueing and should I do it before seasoning my carbon steel pan?',
        answer: 'Thermal blueing is the process of heating a bare, thoroughly stripped carbon steel pan over high heat (280°C–310°C / 536°F–590°F) until the steel oxidizes into a blue-black magnetite (Fe3O4) layer. Performing this step before applying oil seasoning creates a rust-resistant barrier and enhances polymer mechanical adhesion.'
      },
      {
        question: 'Can cooking tomato sauce in carbon steel cause iron poisoning?',
        answer: 'In healthy adults, acute iron poisoning from a single meal is unlikely. However, simmering acidic tomato sauce in stripped carbon steel can leach 20 mg to 50 mg of bioavailable elemental iron per serving, surpassing the adult Tolerable Upper Intake Level (UL) of 45 mg/day. It is hazardous for individuals with hereditary hemochromatosis.'
      },
      {
        question: 'Why does carbon steel seasoning peel off more easily than cast iron seasoning?',
        answer: 'Cast iron has a rough, pebble-grained sand-cast surface (Ra ≈ 8–12 µm) with deep microscopic pores that mechanically lock polymerized oil in place. Cold-rolled carbon steel is ultra-smooth (Ra ≈ 0.5–1.5 µm), meaning its seasoning relies largely on surface covalent coordination, which is more readily cleaved by organic acids and thermal shock.'
      },
      {
        question: 'Which cooking oil is best for seasoning carbon steel pans?',
        answer: 'Refined grapeseed oil and high-oleic canola oil are optimal choices. They offer an ideal balance of polyunsaturated fatty acids (for fast free radical crosslinking), high smoke points (>215°C / 420°F), and moderate iodine values, forming a tough, resilient, non-gummy polymer film.'
      }
    ],
    relatedTools: [
      {
        name: 'Cast Iron & Carbon Steel Seasoning Degradation Modeler',
        url: '/tools/cast-iron-seasoning-degradation-modeler/'
      },
      {
        name: 'Cast Iron vs Stainless Steel Grill Grates Comparison',
        url: '/compare/cast-iron-vs-stainless-steel-grill-grates/'
      },
      {
        name: 'Stainless Steel vs Aluminum Stock Pot Comparison',
        url: '/compare/stainless-steel-vs-aluminum-stock-pot/'
      }
    ]
  },
  {
    slug: 'aluminum-cookware-acidic-food-neurotoxicity-leaching-safety',
    title: 'Aluminum Cookware Leaching in Acidic Cooking: EFSA Tolerable Weekly Intake (TWI), Anodized vs Bare Aluminum, Citric/Acetic Acid Extraction Kinetics & Health Safety',
    excerpt: 'Does simmering tomato sauce or lemon marinades in aluminum pots cause toxic metal leaching? Explore the chemistry of anodic aluminum oxide (Al2O3), EFSA TWI limits (1 mg/kg bw/week), and scientific evidence on neurotoxicity.',
    date: waveDate,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'Aluminum is the second most widely used metal in global cookware manufacturing, prized by commercial restaurants and home cooks for its phenomenal thermal conductivity (roughly 15 times greater than stainless steel) and low production cost. However, aluminum is an amphoteric, highly reactive light metal. When bare aluminum stock pots, saucepans, or aluminum foil contact low-pH acidic foodstuffs—such as tomato marinara, lemon glazes, vinegar braises, or salted sauerkraut—the metal undergoes chemical dissolution. European and American food safety authorities have established strict exposure limits to protect consumers from chronic bioaccumulation.',
    sections: [
      {
        title: '1. The Chemistry of Aluminum Food Contact: Native Oxide Films vs Low-pH Acidic Dissolution (pH < 4.5)',
        content: 'In dry air at ambient temperatures, bare aluminum spontaneously oxidizes, forming a micro-thin native film of amorphous aluminum oxide (Al2O3) roughly 2 to 4 nanometers thick. While this native oxide provides moderate protection against pure neutral water (pH 7.0), it is thermodynamically unstable in acidic solutions (pH < 4.5) and alkaline environments (pH > 8.5). Organic culinary acids—predominantly citric acid (lemon juice, tomatoes), acetic acid (vinegar), and lactic acid (dairy, fermented foods)—act as chelating ligands. Hydronium ions (H+) dissolve the protective passivated oxide, producing soluble trivalent aluminum ions: Al2O3(s) + 6H+(aq) → 2Al³⁺(aq) + 3H2O.',
        type: 'warning',
        boxText: 'Native aluminum oxide is only 2–4 nm thick and rapidly dissolves in foods with a pH below 4.5, releasing soluble Al³⁺ ions.'
      },
      {
        title: '2. Anodized vs Bare Aluminum: Porous Anodic Alumina Passivation, Hard-Anodizing Sealing & Abrasion Resilience',
        content: 'To overcome the vulnerability of bare aluminum, manufacturers use electrochemical anodization. In an electrolytic acid bath (typically sulfuric acid), aluminum cookware is subjected to high anodic voltage. This controlled process grows a robust, non-conductive layer of aluminum oxide (Al2O3) up to 25 to 50 micrometers thick—over 10,000 times thicker than the native air-formed film. In "hard-anodized" cookware, the electrolytic bath is chilled (0°C–5°C) and operated at higher current densities, creating an exceptionally hard alumina coating (Vickers hardness HV > 350, harder than stainless steel). When sealed in boiling deionized water or nickel acetate, the hexagonal pores close completely, preventing chemical dissolution even during prolonged contact with acidic foods.',
        type: 'info',
        boxText: 'Hard-anodizing creates an impenetrable 50 µm thick Al2O3 barrier that resists acidic dissolution and metal utensil scratching.'
      },
      {
        title: '3. Acid Extraction Kinetics: Citric, Acetic, and Malic Acid Complexation and Leaching Rates in Simmered Dishes',
        content: 'Experimental migration assays conducted under European Union guidelines (Council of Europe Resolution CM/Res(2013)9) demonstrate that organic acid complexation dramatically accelerates aluminum extraction. Citric acid forms highly stable, water-soluble tridentate aluminum citrate complexes [Al(C6H5O7)]⁰, accelerating dissolution through ligand-promoted dissolution kinetics. Simmering tomato sauce (pH 3.8) in bare aluminum for two hours yields aluminum migration concentrations between 20 mg/L and 65 mg/L. The presence of sodium chloride (table salt) exacerbates this leaching via chloride-induced pitting corrosion, breaking down localized passivation points.',
        type: 'warning',
        boxText: 'Citric acid and salt form soluble aluminum chelates, increasing metal migration into simmered tomato sauces by up to 6,000%.'
      },
      {
        title: '4. Toxicological Assessment: EFSA Tolerable Weekly Intake (TWI of 1 mg/kg bw/week), Renal Clearance & Neurotoxicity Consensus',
        content: 'The European Food Safety Authority (EFSA) established a health-based Tolerable Weekly Intake (TWI) for dietary aluminum of 1.0 mg/kg body weight per week. For a 70 kg (154 lb) adult, this corresponds to an intake ceiling of 70 mg of aluminum per week from all dietary sources combined. For a 20 kg child, the weekly limit is just 20 mg. While healthy kidneys excrete more than 95% of ingested aluminum via glomerular filtration, individuals with impaired renal function, infants, and the elderly retain systemic aluminum in bone matrix and brain tissue. Decades of epidemiological research have scrutinized potential links between aluminum bioaccumulation and neurodegenerative disorders (such as Alzheimer disease); current international scientific consensus (WHO, EFSA, US ATSDR) states that while dietary aluminum is not proven as a primary causal trigger for Alzheimer disease, chronic intake exceeding the TWI must be strictly prevented.',
        type: 'info',
        boxText: 'EFSA sets a Tolerable Weekly Intake of 1 mg/kg body weight; a single serving of acidic sauce cooked in bare aluminum can exceed this weekly limit.'
      },
      {
        title: '5. Safe Culinary Guidelines: When Bare Aluminum Is Prohibited, Utensil Selection & Safer Material Swaps',
        content: 'To minimize consumer exposure to leached aluminum: Never cook, simmer, or store acidic or heavily salted foods in unlined, bare aluminum cookware or aluminum foil. Bare aluminum stock pots should strictly be reserved for neutral boiling tasks (such as boiling whole eggs, pasta in unsalted water, or steaming vegetables). When wrapping acidic foods for storage (such as halved citrus fruits or tomato-topped casseroles), always use unbleached parchment paper, food-grade glass containers, or certified food-contact silicone rather than aluminum foil. For acidic braises, soups, and reductions, transition to austenitic 304/316 stainless steel or enameled cast iron.',
        type: 'tip',
        boxText: 'Never wrap or bake lemon-glazed fish, tomatoes, or vinegar marinades directly in bare aluminum foil; use parchment paper or glass.'
      }
    ],
    conclusion: 'Aluminum cookware delivers unparalleled thermal efficiency, but bare aluminum surfaces present genuine chemical leaching risks when exposed to acidic cooking. Hard-anodized aluminum with sealed pore structures is chemically inert and safe for acidic foods. Bare aluminum and aluminum foil, however, rapidly dissolve in low-pH foods, readily surpassing EFSA Tolerable Weekly Intake thresholds. Reserve bare aluminum for neutral tasks, avoid cooking acidic foods in foil, and choose clad stainless steel or enameled iron for tomato and vinegar preparations.',
    faqs: [
      {
        question: 'Does cooking with aluminum foil or aluminum cookware cause Alzheimer disease?',
        answer: 'Current international medical consensus (WHO, EFSA, Alzheimer’s Association) finds no definitive causal evidence linking dietary aluminum intake from cookware to the onset of Alzheimer disease. However, aluminum is a recognized neurotoxin at high systemic doses, and health authorities advise keeping dietary exposure well within the Tolerable Weekly Intake of 1 mg/kg body weight.'
      },
      {
        question: 'Is hard-anodized aluminum cookware safe for cooking acidic foods like tomato sauce?',
        answer: 'Yes. Hard-anodized aluminum cookware is treated through an electrochemical process that forms a thick, dense, non-reactive sapphire-hard layer of aluminum oxide (Al2O3). This sealed barrier prevents acidic foods from contacting the underlying metal, resulting in negligible chemical leaching.'
      },
      {
        question: 'Why does aluminum foil discolor or develop tiny holes when covering lasagna?',
        answer: 'This phenomenon is galvanic corrosion and acid dissolution. When aluminum foil contacts acidic tomato sauce (pH ~4.0) in the presence of salt (electrolytes) and a dissimilar metal (such as a stainless steel pan or baking rack), a miniature galvanic cell is created. The aluminum acts as an sacrificial anode and dissolves into the food, leaving visible pinholes and dark spots.'
      },
      {
        question: 'Can I bake lemon chicken or tomato fish directly on aluminum foil?',
        answer: 'No. Acidic lemon juice and tomatoes readily dissolve bare aluminum foil, transferring soluble aluminum citrate and aluminum ions directly into the food. Always line your baking sheet with unbleached parchment paper between the aluminum foil and the food.'
      },
      {
        question: 'How can I tell if my aluminum pot is hard-anodized or bare aluminum?',
        answer: 'Bare aluminum has a bright, shiny silver finish that scratches easily and turns dark grey or chalky in the dishwasher. Hard-anodized aluminum has a dark charcoal-grey or matte black finish, a smooth non-porous surface, and exceptional scratch resistance.'
      }
    ],
    relatedTools: [
      {
        name: 'Aluminum Foil Acidic Food Leaching Simulator',
        url: '/tools/aluminum-foil-acidic-leaching-simulator/'
      },
      {
        name: 'Stainless Steel vs Aluminum Stock Pot Comparison',
        url: '/compare/stainless-steel-vs-aluminum-stock-pot/'
      },
      {
        name: 'Food Contact Material Migration Predictor',
        url: '/tools/food-contact-migration-predictor/'
      }
    ]
  },
  {
    slug: 'enamel-cast-iron-lead-cadmium-glaze-thermal-shock-safety',
    title: 'Enameled Cast Iron Cookware Safety: Lead & Cadmium in Vintage Glazes, Crazing Thermal Shock & Chipped Vitreous Glass Ingestion Risks',
    excerpt: 'Is chipped enameled cast iron dangerous to cook with? Discover the science of vitreous enamel borosilicate frit, thermal shock crazing (CTE mismatch), heavy metal leaching in bright red/yellow glazes, and retirement criteria.',
    date: waveDate,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'Enameled cast iron cookware—exemplified by Dutch ovens and French braisers—represents the pinnacle of culinary durability, heat retention, and aesthetic design. The glassy porcelain enamel coating eliminates the seasoning maintenance required by bare cast iron while creating a completely non-reactive surface suitable for acidic stews, wine braises, and sourdough baking. However, vitreous enamel is essentially a borosilicate or soda-lime glass fused to a heavy metal substrate at 800°C. When subjected to severe thermal shock, impact stress, or chemical degradation, enamel can craze, crack, or chip off in razor-sharp glass shards. Furthermore, vintage cookware and budget uncertified imports frequently carry hidden toxic heavy metals (lead and cadmium) in their vibrant colored pigments.',
    sections: [
      {
        title: '1. Vitreous Enamel Frit Chemistry: Borosilicate Glass Fusion, Porcelain Glazing at 800°C & Chemical Inertness',
        content: 'Vitreous enamel is manufactured by blending powdered glass frits—consisting of silica (SiO2), borax (B2O3), feldspar, and fluxing alkaline oxides—with mineral pigment oxides. This slurry is sprayed onto cast iron cookware and fired in industrial furnaces at 780°C to 850°C (1,436°F to 1,562°F). At these extreme temperatures, the glass melts and fuses into the iron substrate, forming an interfacial layer of iron silicate. Fully vitrified, undamaged enamel is chemically inert, non-porous, and impervious to organic acids, preventing iron leaching and eliminating the need for oil seasoning.',
        type: 'info',
        boxText: 'Vitreous enamel is a borosilicate glass fused to cast iron at 800°C, providing total chemical inertness when unchipped and uncompromised.'
      },
      {
        title: '2. Heavy Metal Pigments in Vintage & Low-Cost Cookware: Lead (Pb) Fluxes and Cadmium (Cd) Sulfide Glaze Migration',
        content: 'Historically, lead oxide (PbO) was widely used as a flux in glass enamels to lower the firing temperature and create a glossy, mirror-smooth finish. Cadmium sulfide (CdS) and cadmium sulfoselenide were standard pigments used to achieve vivid exterior colors, such as flame orange, bright yellow, and deep cherry red. While modern reputable manufacturers (e.g., Le Creuset, Staub) adhere to California Proposition 65 and FDA compliance (21 CFR 175.300) mandating lead-free cooking surfaces, vintage enameled cast iron manufactured prior to the late 1970s and uncertified low-cost overseas imports frequently contain high levels of leachable lead and cadmium. If the interior white enamel or cracked colored rim contacts acidic stews, toxic lead and cadmium ions leach directly into the food.',
        type: 'warning',
        boxText: 'Pre-1980s vintage enameled cookware and cheap uncertified imports can leach toxic lead and cadmium from bright yellow/red glaze pigments.'
      },
      {
        title: '3. Thermal Shock Mechanics: Coefficient of Thermal Expansion (CTE) Mismatch Between Iron and Glass Frits',
        content: 'Vitreous enamel failure is primarily driven by thermal shock physics. Cast iron and borosilicate glass have fundamentally different Coefficients of Thermal Expansion (CTE). Cast iron expands and contracts at approximately 10–12 × 10⁻⁶ /K, whereas glass frits expand at 6–9 × 10⁻⁶ /K. Cookware engineers formulate enamel to remain under slight compressive stress at room temperature. However, when an empty enameled pot is preheated dry on high heat or plunged into cold water while hot, the rapid differential thermal gradient causes tensile stresses exceeding the tensile strength of glass (typically 30–70 MPa). This results in "crazing"—a dense web of microscopic hairline surface fractures.',
        type: 'warning',
        boxText: 'Dry preheating or deglazing a hot pan with ice-cold liquid triggers severe CTE expansion mismatch, crazing the glass enamel surface.'
      },
      {
        title: '4. The Ingestion Hazard of Chipped Glass: Micro-Fractures, Sharp Shards, Gastrointestinal Risks & Bacterial Lodging',
        content: 'When crazing advances or a metal utensil impacts the brittle glass coating, enamel chips off in razor-sharp microscopic vitreous shards. Ingesting glass particles poses genuine medical risks, including microscopic lacerations to the esophagus, stomach lining, and intestines. Furthermore, once the glass barrier is breached, the underlying bare cast iron is exposed. Acidic food and moisture seep beneath the jagged perimeter of the chipped glaze, initiating subsurface rust (undermining corrosion) that pops off additional glass shards during cooking. The exposed porous boundary also harbors bacterial pathogens that cannot be sanitized effectively.',
        type: 'warning',
        boxText: 'Chipped enamel sheds razor-sharp glass shards into food and allows rust to undermine the surrounding glaze, shedding more glass.'
      },
      {
        title: '5. Inspection, Prevention & Retirement Protocol: The "Fingernail Test", Boil-Out Testing & When to Retire a Chipped Pot',
        content: 'To evaluate the structural integrity of enameled cookware: 1) Perform the Fingernail Test: Run your fingernail across any dull, discolored, or pitted patches on the cooking surface; if your nail catches on an edge, the glaze is chipped down to the metal. 2) The White Towel Wipe: After washing and drying, aggressively rub a damp white paper towel over the surface; any black metallic marks indicate exposed bare iron beneath degraded glass. Prevention Protocol: Never preheat enameled cookware dry on high heat; always add cooking fat or liquid before turning on the burner. Use exclusively wooden, silicone, or heat-resistant polymer utensils—never metal spoons or knives. Retirement Rule: If the interior cooking floor or lower sidewall has chipped, the pot must be permanently retired from cooking food.',
        type: 'tip',
        boxText: 'If your fingernail catches on an interior chip or pitting, retire the pot from cooking immediately; it cannot be safely repaired.'
      }
    ],
    conclusion: 'Enameled cast iron offers extraordinary cooking performance and chemical neutrality when the glass glaze remains intact. Protect your investment by avoiding thermal shock (never heat empty or quench in cold water) and using non-scratch wooden or silicone utensils. Test vintage pieces for lead and cadmium before food use. If an enameled Dutch oven develops chipped or flaking glass on its interior cooking surface, retire it immediately—chipped vitreous glass cannot be patched and poses serious ingestion hazards.',
    faqs: [
      {
        question: 'Can you repair chipped enamel on the inside of a Dutch oven?',
        answer: 'No. There is no food-safe epoxy, paint, or compound that can repair vitreous enamel on a cooking surface. Enamel is glass melted at 800°C; DIY patches will decompose under cooking heat, leaching toxic resins and failing to prevent glass shards from shedding. A pot with an interior chip must be retired from food preparation.'
      },
      {
        question: 'Is crazing on enameled cast iron safe to cook with?',
        answer: 'Light superficial crazing (hairline spider-web cracks without missing glass or rough edges) is an early sign of thermal fatigue. While not an immediate emergency, crazed enamel will eventually chip. Avoid acidic cooking, switch to low-to-medium heat, and replace the cookware as soon as surface roughness or pitting develops.'
      },
      {
        question: 'How do I test vintage enameled cookware for toxic lead or cadmium?',
        answer: 'Use a validated chemical swab test (such as an EPA-recognized rhodizonate lead swab) on both the exterior colored enamel and interior white glaze, particularly on scratched or worn areas. For maximum certainty, have an accredited laboratory perform an XRF (X-ray fluorescence) scan before cooking food in heirloom or thrifted enameled cookware.'
      },
      {
        question: 'Why did my enameled Dutch oven chip on the bottom when baking sourdough bread?',
        answer: 'Baking sourdough bread typically requires preheating an empty Dutch oven at high temperatures (230°C–260°C / 450°F–500°F). Dry preheating creates high thermal stress, and dropping room-temperature dough into the blistering-hot pot triggers localized thermal shock, causing the glass glaze to pop off.'
      },
      {
        question: 'Is chipped enamel on the outside or exterior lid of a Dutch oven dangerous?',
        answer: 'Chips on the exterior exterior walls or lid exterior do not touch the food, so they do not pose an ingestion hazard. Keep the exposed bare metal lightly oiled to prevent rust. However, ensure that no glass shards are loose near the rim where they could fall into the food.'
      }
    ],
    relatedTools: [
      {
        name: 'Thermal Shock & Shatter Simulator',
        url: '/tools/thermal-shock-simulator/'
      },
      {
        name: 'Cookware Brand Transparency & Greenwashing Index',
        url: '/tools/cookware-brand-transparency-index/'
      },
      {
        name: 'Toxic Leaching & Heavy Metal Scorecard',
        url: '/tools/toxic-leaching-scorecard/'
      }
    ]
  }
];

// Write EN guides to blog.json
const enBlogPath = path.resolve('src/data/blog.json');
const enBlogs = JSON.parse(fs.readFileSync(enBlogPath, 'utf8'));

for (const g of enGuides) {
  if (!enBlogs.some(b => b.slug === g.slug)) {
    enBlogs.push(g);
    console.log(`✅ Added EN guide: ${g.slug}`);
  } else {
    console.log(`ℹ️ EN guide already present: ${g.slug}`);
  }
}

fs.writeFileSync(enBlogPath, JSON.stringify(enBlogs, null, 2) + '\n', 'utf8');
console.log(`✅ Saved src/data/blog.json. Total guides: ${enBlogs.length}`);

module.exports = { enGuides, waveDate };
