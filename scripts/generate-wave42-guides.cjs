const fs = require('fs');
const path = require('path');

const wave42Date = '2026-11-20';

// 1. English Guides
const enGuides = [
  {
    slug: 'microwave-popcorn-bag-pfas-steam-toxic-fumes',
    title: 'Microwave Popcorn Bags & PFAS: Steam Inhalation Hazards, Chemical Migration & Safe Alternatives',
    excerpt: 'Is microwave popcorn packaging toxic? Understand fluorochemical greaseproofing paper treatments, 200°C susceptor thermal kinetics, volatile FTOH steam inhalation, and safe popcorn popping methods.',
    date: wave42Date,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'Microwave popcorn is one of the most popular snack foods worldwide, prized for its shelf-stable convenience and theatrical popping in under three minutes. However, behind the satisfying aroma of melted butter and toasted corn lies a complex food-packaging toxicology problem. For decades, microwave popcorn bags have relied on per- and polyfluoroalkyl substances (PFAS) to prevent superheated vegetable oils and steam from saturating through paper fibers. Furthermore, the vacuum-metallized microwave susceptor patch on the bottom of the bag reaches temperatures exceeding 200°C (392°F), accelerating the desorption of fluorinated surfactants into the molten fat and creating aerosolized chemical plumes upon opening. Here is the materials science, toxicology, regulatory reality, and safe popping alternatives.',
    sections: [
      {
        title: '1. Paper Packaging Metallurgy & Fluorinated Sizing Agents',
        content: 'Paper in its virgin cellulose state is inherently porous and hydrophilic. When heated oil touches untreated paper fibers, capillary action wicks the fat through the matrix, causing structural collapse and potential fire. To render paper impervious to oil, manufacturers historically treated paperboard with fluorochemical sizing agents—primarily polyfluoroalkyl phosphate esters (PAPs) and fluorotelomer alcohols (such as 6:2 FTOH and 8:2 FTOH). These perfluorocarbon chains provide ultra-low surface energy, causing both polar water and non-polar molten fats to bead up rather than penetrate.',
        type: 'fact',
        boxText: 'PFAS sizing agents bond to cellulose fibers, creating a non-polar fluorocarbon barrier that resists molten oils at temperatures up to 220°C.'
      },
      {
        title: '2. Susceptor Thermodynamics & Thermal Desorption into Molten Butterfat',
        content: 'At the bottom of every commercial microwave popcorn bag lies a gray rectangular patch known as a microwave susceptor. This component consists of an ultra-thin layer of vacuum-deposited elemental aluminum (5 to 10 nanometers thick) laminated onto polyethylene terephthalate (PET) film between paper sheets. When exposed to 2.45 GHz microwave radiation, the metallic layer converts radiofrequency electromagnetic energy into intense resistive radiant heat, exceeding 200°C–235°C (392°F–455°F) in under 90 seconds. Unpopped corn kernels and solid butter fats pool directly on this hot plate. At these elevated temperatures, the lipophilic partition coefficient shifts dramatically: up to 85% of mobile fluorinated surfactants desorb from the paper matrix directly into the boiling liquid lipid pool.',
        type: 'warning',
        boxText: 'Temperatures on the susceptor exceed 200°C within 90 seconds. Hot molten fat acts as an aggressive solvent, extracting fluorinated chemicals directly into the snack.'
      },
      {
        title: '3. Pressurized Opening Steam Puff & Aerosol Inhalation Hazards',
        content: 'While dietary ingestion of migrated PFAS represents a chronic systemic exposure route, the acute physical hazard occurs when the cooking cycle concludes. As corn moisture turns to steam, the folded bag expands, creating a pressurized internal microclimate saturated with 90°C–95°C water vapor, volatilized fluorotelomer alcohols (FTOHs), and artificial flavoring compounds like diacetyl and 2,3-pentanedione. Tearing open the bag immediately releases a concentrated steam puff. Inhaling this plume delivers aerosolized fluorotelomers directly into the deep respiratory tract and alveoli, where they enter the bloodstream and undergo metabolic oxidation into persistent perfluoroalkyl carboxylic acids such as PFOA and PFHxA.',
        type: 'danger',
        boxText: 'Never inhale the direct steam puff when opening microwave popcorn. Allow the bag to vent away from your face for at least 60 seconds.'
      },
      {
        title: '4. Regulatory Status: FDA 2024 Phase-Out vs. Global Supply Chain Reality',
        content: 'In February 2024, the United States Food and Drug Administration (FDA) confirmed that major chemical manufacturers had fulfilled their voluntary agreement to cease sales of grease-proofing substances containing PFAS for food packaging in the US market. However, consumer safety advocates emphasize critical caveats: 1) Existing warehouse inventories manufactured prior to the cut-off date remain on retail shelves; 2) Private-label discount brands and imported food products may originate from jurisdictions without PFAS prohibitions; and 3) The European Food Safety Authority (EFSA) maintains a far more stringent Tolerable Weekly Intake (TWI) of 4.4 ng/kg body weight per week for the sum of four critical PFAS, which even trace residual packaging migration can quickly surpass.',
        type: 'info',
        boxText: 'While US domestic production has phased out PFAS grease-proofing agents, legacy stock and international imports still warrant vigilant packaging checks.'
      },
      {
        title: '5. Safe, PFAS-Free Popcorn Popping Protocols & Non-Toxic Alternatives',
        content: 'Consumers who love freshly popped corn do not need to abandon the snack. Several zero-chemical, non-toxic alternatives yield identical or superior crunch without synthetic packaging: 1) Food-grade platinum silicone microwave popping bowls: these reusable, collapsible bowls require no oil, zero fluorochemical coatings, and produce fresh popcorn in 2.5 minutes using plain bulk kernels; 2) Electric hot-air poppers: spinning vortex air currents heat kernels evenly with zero fat and 100% mechanical popping; 3) Stovetop stainless steel crank poppers (Whirley-Pop): heavy-gauge aluminum or stainless steel pans paired with heart-healthy high-smoke-point oils (avocado or coconut oil) eliminate all chemical contact.',
        type: 'tip',
        boxText: 'Switch to a platinum silicone microwave bowl or stovetop stainless popper to enjoy 100% PFAS-free, microplastic-free, zero-waste popcorn.'
      }
    ],
    conclusion: 'Microwave popcorn bags represent an intersection of extreme culinary physics and chemical persistence. While recent regulatory phase-outs mark significant progress, transitioning to reusable platinum silicone or stainless steel popping equipment permanently eliminates toxic fluorochemical ingestion and inhalation risks from your household.',
    faqs: [
      {
        question: 'Are all microwave popcorn bags treated with PFAS?',
        answer: 'Historically, virtually all conventional microwave popcorn bags contained PFAS sizing agents to prevent butter and oil leakage. Following the FDA February 2024 voluntary phase-out, major US domestic brands have reformulated with bio-based barrier coatings. However, imported brands and legacy warehouse packaging may still contain residual fluorochemicals.'
      },
      {
        question: 'What is the gray patch inside the popcorn bag?',
        answer: 'The gray patch is a microwave susceptor—a micro-thin layer of vacuum-deposited aluminum on a polymer film. It absorbs microwave radiation and converts it into conductive surface heat exceeding 200°C (392°F) to rapidly pop kernels.'
      },
      {
        question: 'Can you get sick from inhaling microwave popcorn steam?',
        answer: 'Yes. Inhaling the initial steam puff can expose your lungs to volatile fluorotelomer alcohols (FTOHs) and diacetyl flavoring vapors. You should always tear the bag open facing away from your face and wait 60 seconds before serving.'
      },
      {
        question: 'Does brown paper bag microwave popcorn eliminate PFAS?',
        answer: 'While regular plain kraft paper lunch bags do not contain PFAS coatings, the USDA and fire safety agencies warn against microwaving them because untreated recycled paper can contain metal flecks, inks, and may scorch or ignite under prolonged microwave heat.'
      },
      {
        question: 'What is the absolute safest way to pop popcorn at home?',
        answer: 'The safest method is using a 100% food-grade platinum silicone microwave popper bowl with plain bulk corn kernels, or a stainless steel stovetop popper using avocado oil or ghee.'
      }
    ],
    relatedTools: [
      {
        name: 'Microwave Popcorn Bag Fluorinated PFOA / PFAS Surfactant Modeler',
        url: '/tools/microwave-popcorn-pfas-modeler/'
      },
      {
        name: 'Plastic Recycling Code (#1–#7) Kitchen Safety Checker',
        url: '/tools/plastic-code-checker/'
      },
      {
        name: 'Kitchen Bottom Symbol Decoder',
        url: '/tools/kitchen-symbol-decoder/'
      }
    ]
  },
  {
    slug: 'cast-iron-soap-myth-seasoning-chemistry',
    title: 'Does Dish Soap Really Ruin Cast Iron? The Science of Oil Polymerization vs Lye',
    excerpt: 'Can you use dish soap on cast iron pans? Learn why the old rule applied to historic lye soaps, the chemistry of cross-linked oil polymer seasoning, and how to wash cast iron safely.',
    date: wave42Date,
    readTime: '8 min read',
    author: 'IsItKitchenSafe',
    intro: 'Among kitchen cookware myths, few are as fiercely debated as whether soap can touch a seasoned cast iron skillet. Generational folklore insists that even a single drop of dish soap will instantly dissolve the black patina, undoing years of seasoning and rendering the pan vulnerable to rust. However, materials science and organic chemistry tell a completely different story. The "no soap" rule originated over a century ago when household soap was manufactured with caustic unreacted lye (sodium hydroxide). Today’s dishwashing detergents are gentle, synthetic surfactant solutions buffered to neutral pH that cannot chemically break down cross-linked polymer networks. Here is the definitive molecular breakdown of cast iron seasoning, soap chemistry, and modern pan maintenance.',
    sections: [
      {
        title: '1. The Historical Origin of the Myth: Lye (NaOH) Saponification',
        content: 'In the 19th and early 20th centuries, household cleaning soap was made at home by boiling animal tallow or lard with lye (sodium hydroxide, NaOH, or potassium hydroxide, KOH) derived from hardwood ash. Because measuring chemical stoichiometry was imprecise, homemade lye soap frequently contained excess unreacted caustic alkalis with a pH of 12 to 14. When washed with harsh lye soap, the strong base attacked the ester linkages of fatty acids, dissolving the organic coating via alkaline saponification. This historical reality gave rise to the enduring kitchen commandment: never let soap touch cast iron.',
        type: 'fact',
        boxText: 'Historic lye soap contained free sodium hydroxide (pH > 12) that aggressively saponified and stripped oil coatings. That is the origin of the myth.'
      },
      {
        title: '2. Modern Dishwashing Detergents: Surfactants vs. Caustic Bases',
        content: 'Modern liquid dish soaps (such as Dawn, Palmolive, or Fairy) are not true soaps in the chemical sense. They are synthetic detergents formulated with mild anionic, nonionic, and amphoteric surfactants (such as sodium laureth sulfate, cocamidopropyl betaine, and alkyl polyglucosides). These formulations are buffered to a skin-neutral pH of 6.5 to 7.5. Surfactants function purely by micellar encapsulation: hydrophobic hydrocarbon tails bind to loose, unpolymerized surface grease, while hydrophilic polar heads bind to rinse water. They possess zero chemical capacity to cleave covalent carbon-carbon bonds.',
        type: 'info',
        boxText: 'Modern dish soap uses neutral surfactants (pH 7) that encapsulate free grease without reacting with or dissolving polymerized seasoning.'
      },
      {
        title: '3. What Seasoning Actually Is: Cross-Linked Free-Radical Polymerization',
        content: 'A properly seasoned cast iron pan is not coated in oil; it is coated in an insoluble, plastic-like organic polymer matrix. When unsaturated cooking fats (rich in linoleic and alpha-linolenic fatty acids) are heated past their smoke point in contact with bare iron (a catalytic transition metal), they undergo thermal oxidation, cleavage, and free-radical addition polymerization. The fatty acid chains cross-link into a dense three-dimensional polyolefin network that is covalently anchored and mechanically keyed into the microscopic pores of the iron crystalline surface ($Fe_3O_4$). This polymer layer is chemically impervious to water, mild acids, and neutral detergents.',
        type: 'tip',
        boxText: 'Seasoning is a covalently cross-linked synthetic-like polymer film chemically bonded to the iron substrate, not an unbonded film of raw grease.'
      },
      {
        title: '4. The Real Enemies of Cast Iron: Dishwashers, Soaking & Acidic Simmers',
        content: 'While mild hand dish soap is completely safe, three common kitchen practices genuinely destroy cast iron cookware: 1) Automatic dishwashers: commercial and domestic dishwasher tablets contain caustic sodium carbonate, silicates, and enzymes at pH 10.5–11.5 combined with 65°C–75°C water jets, which rapidly etch seasoning and strip bare metal; 2) Standing water soaking: soaking a skillet in the sink allows water molecules to penetrate microscopic micro-fissures in the seasoning, initiating galvanic iron oxidation (rusting, $Fe_2O_3$); 3) Extended acidic boiling: simmering high-acid foods (tomato ragu, red wine, lemon juice, pH < 3.5) for multiple hours leaches iron ions and degrades the polymer barrier.',
        type: 'danger',
        boxText: 'Dishwashers and sink soaking will destroy your pan in hours. Mild hand dishwashing liquid with immediate drying will preserve it indefinitely.'
      },
      {
        title: '5. The Evidence-Based 4-Step Cast Iron Cleaning Protocol',
        content: 'To maintain a slick, non-stick, hygienic cast iron skillet for generations, follow this four-step scientific protocol: 1) Wash immediately after use with warm water, a non-scratch sponge or chainmail scrubber, and a few drops of mild liquid dish soap to remove food bacteria and rancid surface lipids; 2) Rinse thoroughly with clean warm water; 3) Dry immediately: wipe with a clean kitchen towel, then place the pan on low-to-medium stovetop heat for 2 to 3 minutes until all residual microscopic moisture completely evaporates; 4) Condition: while the skillet is warm, apply 3 to 4 drops of high-smoke-point oil (canola, grapeseed, or Crisco), buff thoroughly with a dry paper towel until the surface appears matte, and turn off the heat.',
        type: 'fact',
        boxText: 'Wash with mild soap, rinse, dry over stovetop heat to banish moisture, and buff with a single drop of oil while warm.'
      }
    ],
    conclusion: 'The notion that dish soap ruins cast iron is an obsolete relic of the 19th-century lye soap era. Modern neutral dish detergents remove rancid unpolymerized grease and foodborne bacteria without harming true polymerized seasoning. Wash your cast iron with mild soap, dry it thoroughly on the stovetop, and cook with complete confidence.',
    faqs: [
      {
        question: 'Can you use dish soap on a cast iron pan every day?',
        answer: 'Yes. Washing with warm water, a soft sponge, and a few drops of mild liquid dish soap is completely safe and hygienic. It washes away food residues and unbonded rancid grease without dissolving the polymerized seasoning layer.'
      },
      {
        question: 'Why did my grandma say never to use soap on cast iron?',
        answer: 'Generations ago, soap was homemade using lye (sodium hydroxide), a harsh alkali with a pH above 12. Lye chemically dissolves oil seasoning via saponification. Modern dish liquids do not contain lye and are pH-neutral surfactants.'
      },
      {
        question: 'What happens if you put cast iron in the dishwasher?',
        answer: 'Never put cast iron in a dishwasher. Dishwasher detergent pods contain harsh alkaline salts (pH 10.5–11.5) that chemically strip the seasoning, while prolonged steam exposure causes severe rusting within a single cycle.'
      },
      {
        question: 'How do you dry cast iron so it doesn\'t rust?',
        answer: 'Wipe it with a clean towel, then place the skillet over medium-low heat on your stovetop for 2 to 3 minutes. The heat evaporates all microscopic moisture trapped in the iron pores, completely preventing oxidation.'
      },
      {
        question: 'Can I cook acidic foods like tomato sauce in cast iron?',
        answer: 'Quick acidic recipes (10–15 minutes) are fine on well-seasoned iron. However, long-simmered sauces (1+ hours) can break down seasoning layers and impart a noticeable metallic iron flavor to the food.'
      }
    ],
    relatedTools: [
      {
        name: 'Cast Iron Seasoning Troubleshooter & Rust Recovery Tool',
        url: '/tools/cast-iron-seasoning-troubleshooter/'
      },
      {
        name: 'Cast Iron Seasoning Polymerization Kinetics Analyzer',
        url: '/tools/cast-iron-seasoning-polymerization-analyzer/'
      },
      {
        name: 'Dish Soap on Cast Iron & Carbon Steel Safety Guide',
        url: '/blog/dish-soap-cast-iron-carbon-steel-dishwasher-pod-safety/'
      }
    ]
  },
  {
    slug: 'canned-food-bpa-liners-acidic-storage-safety',
    title: 'Canned Food Storage Safety: BPA/BPS Epoxy Liners, Dents, Botulism & Can-Opening Storage Risks',
    excerpt: 'Is it dangerous to leave an open tin can in the fridge? Learn about internal epoxy BPA/BPS liners, tin dissolution in acidic food, dent safety criteria, and botulism prevention.',
    date: wave42Date,
    readTime: '9 min read',
    author: 'IsItKitchenSafe',
    intro: 'Canned foods are nutritional and logistical staples found in over 98% of domestic kitchens. Canning provides years of microbial sterility through commercial retort cooking at 121°C (250°F). However, the container itself—an engineered composite of tinplated steel, internal polymeric epoxy coatings, and airtight double seams—behaves very differently once punctured. Millions of households mistakenly refrigerate half-opened cans of tomatoes, soup, or fruit directly in their original tin canisters, unaware that oxygen triggers rapid electrochemical tin leaching. Furthermore, dented cans on grocery shelves pose varying hazards ranging from harmless cosmetic dings to deadly Clostridium botulinum neurotoxin infiltration. Here is the food science, container chemistry, and storage safety guidance every home cook needs.',
    sections: [
      {
        title: '1. Food Can Metallurgy: Tinplate Steel, Double Seams & Epoxy Barriers',
        content: 'Modern food cans are not pure "tin" or raw steel. They are manufactured from thin low-carbon sheet steel (typically 0.15 to 0.25 mm thick) electroplated on both sides with an ultra-thin protective layer of pure tin (Sn, typically 1 to 5 microns thick). To prevent food acids and sulfur compounds from attacking the tinplate, can interiors are spray-coated with polymeric lacquers. For decades, epoxy-phenolic resins based on bisphenol A (BPA) and epichlorohydrin served as the gold standard due to their exceptional thermal stability, flexibility during mechanical stamping, and resistance to aggressive food acids.',
        type: 'fact',
        boxText: 'Cans are steel sheets electroplated with microscopic tin and lined with polymer lacquers to isolate food from raw metal.'
      },
      {
        title: '2. The Chemistry of Open Cans in the Fridge: Oxygen & Tin Dissolution',
        content: 'Inside an unopened, hermetically sealed can, all atmospheric oxygen was evacuated during thermal vacuum sealing. In this anaerobic environment, tin serves as a sacrificial anode, dissolving at an imperceptibly slow rate. However, the moment a can is opened, oxygen enters. When acidic foods (tomatoes, pineapple, citrus, sauerkraut, pH < 4.5) are refrigerated inside an opened unlined or scratched tinplate can, atmospheric oxygen converts tin dissolution into a rapid cathodic reaction: 2Sn + O2 + 4H+ -> 2Sn2+ + 2H2O. Within 48 hours, stannous ion concentrations can exceed 200 mg/kg (the regulatory upper limit), imparting an unpalatable metallic astringency and triggering acute nausea, abdominal cramps, and diarrhea.',
        type: 'danger',
        boxText: 'Never store an opened can in the refrigerator. Oxygen triggers accelerated tin dissolution into acidic food within 24 to 48 hours.'
      },
      {
        title: '3. BPA, BPS & Modern Can Coatings: Endocrine Disruption & EFSA Limits',
        content: 'Due to consumer and clinical concerns regarding bisphenol A (BPA) as a xenoestrogen and endocrine disruptor, packaging manufacturers have widely transitioned to "BPA-Free" can linings based on acrylic, polyester, or alternative bisphenols like bisphenol S (BPS) and bisphenol F (BPF). However, toxicological research indicates that BPS and BPF exhibit comparable or greater endocrine-disrupting potency to BPA. In April 2023, the European Food Safety Authority (EFSA) published a re-evaluation slashing the Tolerable Daily Intake (TDI) of BPA from 4 µg/kg bw/day down to 0.2 ng/kg bw/day (a 20,000-fold reduction), reflecting concerns regarding immune system dysregulation even at microscopic migration thresholds.',
        type: 'warning',
        boxText: 'EFSA reduced the BPA Tolerable Daily Intake 20,000-fold in 2023. Opt for non-bisphenol polyester or glass jars for high-frequency pantry staples.'
      },
      {
        title: '4. Evaluating Dented Cans: Cosmetic Creases vs. Botulism Risk',
        content: 'Not every dented can requires disposal. To evaluate whether a dented can is safe, food safety inspectors apply a strict structural triage: 1) Sharp point or seam dent: if a dent crosses the top, bottom, or side double-seam, or creates a sharp pinched crease, the hermetic seal has likely been compromised, admitting air and microbial pathogens; 2) Swollen or bulging ends: this is a definitive red alert indicating active bacterial gas production, potentially from deadly Clostridium botulinum spores that survived improper thermal processing; 3) Deep denting: if your finger cannot lie flat inside the dent without touching bottom, the interior protective liner has fractured, initiating internal corrosion; 4) Minor shallow body dents: rounded dings on the cylinder body away from seams that allow normal stacking are safe to consume.',
        type: 'danger',
        boxText: 'Discard any can with seam dents, sharp creased points, bulging ends, or leaks upon pressing. Botulinum toxin is odorless and lethal.'
      },
      {
        title: '5. The Evidence-Based Safe Canned Food Handling Protocol',
        content: 'To maximize pantry safety and nutritional quality, adhere to this four-step handling framework: 1) Inspect before opening: reject cans with rust, leaks, spurting liquid upon puncturing, or foul odors; 2) Wash can lids: rinse the exterior top of the can before opening with warm water and soap to prevent surface dust, rat-droppings, or pesticide residues from falling into the food; 3) Decant immediately: never refrigerate leftovers in the opened tin; immediately transfer unused portions into an airtight food-grade borosilicate glass or BPA-free polypropylene storage container; 4) Respect storage timelines: consume refrigerated decanted canned leftovers within 3 to 4 days, or freeze in freezer-safe containers for up to 3 months.',
        type: 'tip',
        boxText: 'Wash the top lid before opening, and decant leftover food into glass or ceramic containers before chilling.'
      }
    ],
    conclusion: 'Canning is one of civilization\'s greatest food preservation achievements, but its safety relies entirely on hermetic integrity and chemical isolation. By rejecting compromised seams, washing can lids before opening, and immediately transferring opened contents to glass storage, you eliminate both acute bacterial hazards and chronic heavy-metal leaching.',
    faqs: [
      {
        question: 'Why should you never leave an opened can of food in the fridge?',
        answer: 'When a can is opened, oxygen rushes in. In the presence of air, acidic foods (like tomato sauce or fruit) rapidly corrode the internal tin coating. This leaches high levels of stannous ions (tin) into the food, causing a metallic taste and potential digestive upset.'
      },
      {
        question: 'Are all dented cans unsafe to eat?',
        answer: 'No. Small, smooth dents on the side of the can body that do not touch seams and have no sharp points are safe. However, any dent on a seam, sharp creased dent, or bulging can must be discarded immediately due to botulism risk.'
      },
      {
        question: 'Does cooking food destroy botulism toxin?',
        answer: 'Botulinum neurotoxin is heat-labile and can be denatured by boiling food at a rolling boil (100°C / 212°F) for at least 10 minutes. However, Clostridium botulinum bacterial spores are heat-resistant and survive boiling, requiring pressure canning at 121°C (250°F) to eradicate.'
      },
      {
        question: 'What does "BPA-Free" on a canned food label really mean?',
        answer: 'It means the internal liner was not manufactured with bisphenol A. However, many manufacturers replaced BPA with closely related bisphenols like BPS or BPF, which exhibit similar endocrine-disrupting properties. Non-bisphenol polyester or oleoresin liners are preferred.'
      },
      {
        question: 'How long can you safely store opened canned food in a glass container in the fridge?',
        answer: 'Once transferred to an airtight glass container, low-acid foods (beans, soups, meat, vegetables) last 3 to 4 days in the refrigerator at or below 40°F (4°C). Highly acidic foods (tomato sauce, citrus) can last 5 to 7 days.'
      }
    ],
    relatedTools: [
      {
        name: 'Dented Cans, Botulism Risk & Garlic in Oil Safety Guide',
        url: '/blog/dented-cans-garlic-in-oil-botulism-kitchen-safety-guide/'
      },
      {
        name: 'Plastic Recycling Code (#1–#7) Kitchen Safety Checker',
        url: '/tools/plastic-code-checker/'
      },
      {
        name: 'USDA Leftover & Fridge Shelf-Life Countdown Calculator',
        url: '/tools/leftover-shelf-life-calculator/'
      }
    ]
  }
];

// 2. Spanish Guides
const esGuides = [
  {
    slug: 'microwave-popcorn-bag-pfas-steam-toxic-fumes',
    title: 'Bolsas de Palomitas de Microondas y PFAS: Peligros por Inhalación de Vapor, Migración Química y Alternativas Seguras',
    excerpt: '¿Es tóxico el envoltorio de las palomitas de microondas? Comprenda los tratamientos fluorados del papel antigrasa, la cinética del susceptor a 200°C, la inhalación de FTOH y cómo hacer palomitas sin químicos.',
    date: wave42Date,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Las palomitas de microondas son uno de los aperitivos más consumidos del mundo por su rapidez y comodidad. Sin embargo, tras el agradable aroma a mantequilla y maíz tostado se esconde un grave problema toxicológico. Durante décadas, las bolsas han dependido de sustancias perfluoroalquiladas (PFAS) para evitar que los aceites hirviendo traspasen el papel. Además, el parche metálico susceptor del fondo supera los 200°C (392°F), acelerando la desorción de tensioactivos fluorados hacia las grasas fundidas y emitiendo nubes de vapor químico al abrirse. Analizamos la ciencia de materiales, la toxicología y las alternativas seguras para su hogar.',
    sections: [
      {
        title: '1. Química del Papel de Envasado y Agentes de Encolado Fluorados',
        content: 'El papel de celulosa virgen es naturalmente poroso e hidrofílico. Cuando el aceite caliente entra en contacto con fibras no tratadas, la acción capilar empapa el papel, provocando su rotura o riesgo de incendio. Para hacerlo impermeable, los fabricantes trataban históricamente el cartón con ésteres de fosfato de polifluoroalquilo (PAP) y alcoholes fluoroteloméricos (FTOH 6:2 y 8:2). Estas cadenas de perfluorocarbono confieren una energía superficial ultrabaja que hace que tanto el agua como las grasas hirviendo resbalen sin penetrar.',
        type: 'fact',
        boxText: 'Los agentes PFAS se fijan a la celulosa, formando una barrera fluorada no polar que resiste aceites hirviendo hasta a 220°C.'
      },
      {
        title: '2. Termodinámica del Susceptor y Desorción Hacia la Mantequilla Fundida',
        content: 'En la base de cada bolsa comercial se encuentra un parche grisáceo: el susceptor de microondas. Consiste en una capa microscópica de aluminio evaporado al vacío (5 a 10 nm) laminada en PET entre hojas de papel. Bajo radiación de 2.45 GHz, convierte la energía electromagnética en calor resistivo intenso, superando los 200°C–235°C en menos de 90 segundos. El maíz y las grasas reposan directamente sobre este punto ardiente, donde la grasa actúa como un agresivo disolvente lipófilo que extrae hasta el 85% de los PFAS libres hacia el alimento.',
        type: 'warning',
        boxText: 'El susceptor supera los 200°C en 90 segundos. La grasa fundida actúa como un disolvente orgánico, extrayendo químicos fluorados hacia las palomitas.'
      },
      {
        title: '3. Nube de Vapor a Presión y Riesgos por Inhalación de Aerosoles',
        content: 'Aunque la ingestión dietética representa una exposición crónica, el peligro agudo surge al finalizar el cocinado. El vapor generado expande la bolsa, saturando el interior a 90°C–95°C con vapor de agua, alcoholes fluoroteloméricos (FTOH) volatilizados y saborizantes como diacetilo. Al rasgar la bolsa de inmediato, se libera un chorro de vapor a presión. Inhalar este penacho introduce fluorotelómeros en los alvéolos pulmonares, desde donde pasan a la sangre y se oxidan en ácidos persistentes como PFOA y PFHxA.',
        type: 'danger',
        boxText: 'Nunca inhale la nube de vapor al abrir la bolsa. Ábrala lejos de su rostro y espere al menos 60 segundos antes de servir.'
      },
      {
        title: '4. Situación Regulatoria: Retirada de la FDA en 2024 frente al Mercado Global',
        content: 'En febrero de 2024, la FDA estadounidense confirmó el cese voluntario de venta de antigrasas con PFAS en envases alimentarios en EE. UU. No obstante, los expertos advierten: 1) Los almacenes y supermercados aún conservan inventario previo; 2) Marcas de importación y marcas blancas pueden proceder de países sin restricciones; 3) La EFSA europea establece una estricta Ingesta Semanal Tolerable (TWI) de solo 4.4 ng/kg de peso corporal para cuatro PFAS críticos, un límite que cualquier migración residual supera fácilmente.',
        type: 'info',
        boxText: 'Aunque EE. UU. ha iniciado la eliminación gradual de PFAS en envases, el stock previo e importaciones exigen mantener la cautela.'
      },
      {
        title: '5. Métodos Seguros y Alternativas 100% Libres de Químicos',
        content: 'No es necesario renunciar a las palomitas caseras. Existen alternativas excelentes y libres de tóxicos: 1) Bols de silicona platino para microondas: plegables, reutilizables, sin aceites ni químicos, preparan palomitas con maíz a granel en 2.5 minutos; 2) Máquinas de aire caliente: hacen estallar el grano mediante corrientes de aire giratorias con 0% grasa y 0% envases desechables; 3) Palomiteros manuales de acero inoxidable para cocina: permiten usar aceites saludables (aguacate o coco) con cero vapores nocivos.',
        type: 'tip',
        boxText: 'Adopte recipientes de silicona platino o palomiteros de acero inoxidable para disfrutar de palomitas libres de PFAS y microplásticos.'
      }
    ],
    conclusion: 'Las bolsas comerciales combinan temperaturas extremas con aditivos químicos persistentes. Cambiar a recipientes reutilizables de silicona platino o acero inoxidable elimina de raíz la inhalación e ingestión de fluorocarbonos en su hogar.',
    faqs: [
      {
        question: '¿Todas las bolsas de palomitas de microondas contienen PFAS?',
        answer: 'Históricamente casi todas usaban PFAS para no empaparse de grasa. Tras la retirada de la FDA en 2024, muchas marcas reformularon sus envases, pero aún circulan lotes antiguos e importaciones con fluorocarbonos.'
      },
      {
        question: '¿Qué es el parche gris en el fondo de la bolsa?',
        answer: 'Es un susceptor de microondas de aluminio ultrafino. Absorbe ondas electromagnéticas y las transforma en calor superficial superior a 200°C (392°F) para hacer reventar los granos de maíz.'
      },
      {
        question: '¿Puede hacerme daño inhalar el vapor al abrir la bolsa?',
        answer: 'Sí. El vapor inicial contiene alcoholes fluoroteloméricos (FTOH) y vapores de diacetilo que irritan los pulmones. Siempre rasgue la bolsa apuntando hacia afuera y espere un minuto.'
      },
      {
        question: '¿Es seguro usar bolsas de papel marrón de almuerzo en el microondas?',
        answer: 'El USDA desaconseja calentar bolsas de papel kraft ordinarias en el microondas, ya que el papel reciclado puede contener tintas, metales residuales o arder por el calor prolongado.'
      },
      {
        question: '¿Cuál es la forma más sana y segura de hacer palomitas en casa?',
        answer: 'Utilizar un bol de silicona platino 100% de grado alimentario en el microondas con maíz a granel, o una olla palomitera de acero inoxidable con aceite de aguacate o ghee.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Bolsas de Palomitas de Microondas: PFOA, PFAS y Vapores Térmicos',
        url: '/es/tools/microwave-popcorn-pfas-modeler/'
      },
      {
        name: 'Verificador de Seguridad de Códigos de Plástico (#1–#7)',
        url: '/es/tools/plastic-code-checker/'
      },
      {
        name: 'Decodificador de Símbolos de Cocina y Microondas',
        url: '/es/tools/kitchen-symbol-decoder/'
      }
    ]
  },
  {
    slug: 'cast-iron-soap-myth-seasoning-chemistry',
    title: '¿El Jabón de Platos Arruina el Hierro Fundido? La Ciencia de la Polimerización del Aceite vs. la Sosa Cáustica',
    excerpt: '¿Se puede lavar una sartén de hierro fundido con jabón? Descubra por qué la vieja regla solo aplicaba a jabones con sosa cáustica, la química de los polímeros reticulados y cómo limpiarlo sin riesgo.',
    date: wave42Date,
    readTime: '8 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Pocos mitos culinarios están tan arraigados como la creencia de que el jabón jamás debe tocar una sartén de hierro fundido curada. La tradición asegura que una sola gota de detergente disolverá la pátina negra, arruinando años de curado y provocando óxido instantáneo. Sin embargo, la química orgánica y la ciencia de materiales desmienten este dogma. La regla del "cero jabón" nació hace más de un siglo, cuando los jabones caseros contenían sosa cáustica libre (hidróxido de sodio). Los detergentes modernos son tensioactivos sintéticos de pH neutro incapaces de degradar los enlaces poliméricos del curado. Explicamos la verdad molecular detrás del hierro fundido.',
    sections: [
      {
        title: '1. El Origen Histórico del Mito: La Saponificación por Sosa Cáustica (NaOH)',
        content: 'En los siglos XIX y principios del XX, el jabón doméstico se fabricaba hirviendo grasa animal con lejía de sosa cáustica (NaOH o KOH) obtenida de cenizas de madera. Al carecer de mediciones estequiométricas exactas, los jabones artesanales tenían un exceso cáustico con pH de 12 a 14. Al lavar el hierro fundido, esa base fuerte atacaba los enlaces éster de los lípidos, despojando la sartén de su capa protectora por saponificación alcalina.',
        type: 'fact',
        boxText: 'El jabón histórico contenía hidróxido de sodio libre (pH > 12) que disolvía químicamente los aceites. De ahí nació la advertencia popular.'
      },
      {
        title: '2. Detergentes Modernos: Tensioactivos Neutros frente a Bases Agresivas',
        content: 'Los jabones líquidos actuales para vajilla (como Mistol, Fairy o Dawn) no son jabones químicos tradicionales. Son soluciones de tensioactivos sintéticos aniónicos y no iónicos (lauril éter sulfato sódico, alquilpoliglucósidos) tamponadas a un pH dérmico neutro (6.5 a 7.5). Actúan por encapsulación micelar: sus extremos hidrófobos atrapan la grasa superficial suelta sin alterar los enlaces covalentes del polímero curado.',
        type: 'info',
        boxText: 'El detergente lavavajillas actual tiene pH neutro (7) y elimina la grasa suelta sin disolver la pátina curada.'
      },
      {
        title: '3. Qué es Realmente el Curado: Polimerización por Radicales Libres',
        content: 'Una sartén bien curada no tiene una capa de aceite crudo, sino una matriz polimérica orgánica insoluble semejante al plástico. Cuando los aceites poliinsaturados ricos en ácido linolénico se calientan más allá de su punto de humo en contacto con el hierro catalizador, sufren oxidación térmica y polimerización por adición radicalaria. Las cadenas forman una red tridimensional unida y anclada a los poros cristalinos del metal ($Fe_3O_4$), totalmente impermeable al agua y al jabón suave.',
        type: 'tip',
        boxText: 'El curado es una película polimérica reticulada unida covalentemente al hierro, no una simple capa de grasa fresca.'
      },
      {
        title: '4. Los Verdaderos Enemigos del Hierro: Lavavajillas, Remojo y Ácidos Prolongados',
        content: 'Aunque el jabón suave a mano es inofensivo, tres prácticas sí arruinan el hierro fundido: 1) Lavavajillas automático: sus pastillas tienen sales alcalinas cáusticas (pH 10.5–11.5) y agua a 70°C que decapan el curado de inmediato; 2) Dejarlo a remojo: el agua estancada penetra microfisuras e inicia una rápida corrosión galvánica (óxido, $Fe_2O_3$); 3) Cocinar ácidos durante horas: salsas de tomate hervidas durante horas lixivian hierro y degradan la barrera polimérica.',
        type: 'danger',
        boxText: 'El lavavajillas y dejar la sartén a remojo destruyen el hierro en pocas horas. El lavado manual suave con secado inmediato lo mantiene intacto.'
      },
      {
        title: '5. Protocolo Científico de Limpieza en 4 Pasos',
        content: 'Para conservar su sartén perfecta durante décadas: 1) Lave tras su uso con agua tibia, esponja suave o estropajo de cota de malla y unas gotas de jabón líquido para retirar bacterias y grasa rancia; 2) Enjuague con abundante agua limpia; 3) Seque de inmediato con un paño y colóquela 2 minutos a fuego bajo-medio en la cocina para evaporar la humedad microscópica; 4) Acondicione: con la sartén templada, extienda 3 gotas de aceite de punto de humo alto y frote con papel absorbente hasta dejar un acabado mate.',
        type: 'fact',
        boxText: 'Lave con jabón suave, enjuague, evapore toda la humedad sobre el fuego y frote con una gota de aceite templado.'
      }
    ],
    conclusion: 'La idea de que el jabón estropea el hierro fundido es un mito obsoleto de la era de la sosa cáustica. El detergente neutro actual elimina grasas rancias y patógenos sin dañar la pátina polimerizada. Lave con jabón, seque al fuego y cocine con total tranquilidad.',
    faqs: [
      {
        question: '¿Se puede lavar una sartén de hierro con jabón todos los días?',
        answer: 'Sí. Lavar con agua tibia, esponja suave y un poco de detergente líquido es higiénico y seguro. Elimina bacterias y grasa rancia sin disolver la pátina de curado reticulada.'
      },
      {
        question: '¿Por qué se decía antes que nunca debía usarse jabón?',
        answer: 'Antiguamente el jabón contenía sosa cáustica libre (lejía) con un pH muy alcalino que atacaba químicamente las grasas por saponificación. Los detergentes actuales tienen pH neutro.'
      },
      {
        question: '¿Qué le pasa al hierro fundido en el lavavajillas?',
        answer: 'El detergente alcalino del lavavajillas (pH 11) elimina el curado y el vapor constante oxida el hierro por completo en un solo lavado. Nunca lo introduzca en el lavavajillas.'
      },
      {
        question: '¿Cómo secar la sartén para evitar el óxido?',
        answer: 'Séquela con un trapo y colóquela en los fogones a fuego medio-bajo durante 2 a 3 minutos. El calor evapora el agua atrapada en los poros del metal y previene la oxidación.'
      },
      {
        question: '¿Se pueden cocinar alimentos ácidos como salsa de tomate en hierro fundido?',
        answer: 'Cocciones rápidas de 10 a 15 minutos en sartenes bien curadas no causan problemas. Cocinar guisos ácidos durante horas desgasta el curado y aporta sabor metálico.'
      }
    ],
    relatedTools: [
      {
        name: 'Solucionador de Problemas de Curado en Hierro Fundido',
        url: '/es/tools/cast-iron-seasoning-troubleshooter/'
      },
      {
        name: 'Analizador de Cinética de Polimerización en Hierro Fundido',
        url: '/es/tools/cast-iron-seasoning-polymerization-analyzer/'
      },
      {
        name: 'Guía de Compatibilidad de Jabón en Sartenes de Hierro y Acero',
        url: '/es/blog/dish-soap-cast-iron-carbon-steel-dishwasher-pod-safety/'
      }
    ]
  },
  {
    slug: 'canned-food-bpa-liners-acidic-storage-safety',
    title: 'Seguridad en Alimentos Enlatados: Recubrimientos de BPA/BPS, Latas Abolladas, Botulismo y Peligros de Guardar Latas Abiertas',
    excerpt: '¿Es peligroso guardar una lata abierta en la nevera? Conozca la disolución del estaño en medios ácidos con oxígeno, la toxicidad del BPA/BPS según la EFSA y cómo evaluar abolladuras.',
    date: wave42Date,
    readTime: '9 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Los alimentos enlatados son alimentos básicos presentes en casi todos los hogares gracias a su conservación de años tras ser esterilizados a 121°C (250°F). Sin embargo, el envase metálico—una estructura de acero estañado revestida con barnices epoxi poliméricos y sellado hermético—cambia drásticamente al abrirse. Millones de personas refrigeran latas a medio consumir en su envase original, ignorando que el oxígeno desencadena una rápida lixiviación electroquímica de estaño. Además, las latas abolladas pueden ocultar desde simples marcas estéticas hasta el mortal Clostridium botulinum. Presentamos la guía definitiva para manipular conservas con seguridad.',
    sections: [
      {
        title: '1. Metalurgia de la Lata: Hoja de Acero Estañada y Barnices Epoxi',
        content: 'Las latas comerciales no son de estaño puro ni de hierro sin tratar. Son láminas de acero bajo en carbono (0.15 a 0.25 mm) recubiertas electrolíticamente por ambas caras con una finísima película de estaño puro (1 a 5 micras). Para evitar que los ácidos de los alimentos ataquen el metal, el interior se pulveriza con resinas epoxi termoendurecibles, tradicionalmente formuladas con bisfenol A (BPA) y epiclorhidrina por su resistencia química y flexibilidad mecánica.',
        type: 'fact',
        boxText: 'Las latas combinan acero, una capa microscópica de estaño y barnices poliméricos para aislar la comida del metal.'
      },
      {
        title: '2. Por Qué Nunca Guardar Latas Abiertas en la Nevera: Entrada de Oxígeno y Estaño',
        content: 'En una lata cerrada al vacío no hay oxígeno, por lo que el estaño apenas reacciona. Pero al abrirla, el aire entra en tromba. Si se guarda una lata abierta con alimentos ácidos (tomate frito, piña, cítricos, pH < 4.5), el oxígeno atmosférico acelera la corrosión catódica del estaño: 2Sn + O2 + 4H+ -> 2Sn2+ + 2H2O. En 48 horas, el estaño en la comida supera los 200 mg/kg, provocando un desagradable sabor metálico, náuseas agudas, dolor estomacal y diarrea.',
        type: 'danger',
        boxText: 'Nunca guarde latas abiertas en el frigorífico. El oxígeno disuelve el estaño en alimentos ácidos en 24 a 48 horas.'
      },
      {
        title: '3. BPA, BPS y la Regulación de la EFSA: Disrupción Endocrina',
        content: 'Ante la preocupación por el BPA como disruptor endocrino, muchos envases pasaron a rotularse "Sin BPA", usando alternativas como bisfenol S (BPS) o poliéster. Sin embargo, estudios toxicológicos revelan que el BPS tiene un impacto hormonal similar al BPA. En abril de 2023, la EFSA redujo la Ingesta Diaria Tolerable (TDI) de BPA de 4 µg/kg/día a solo 0.2 ng/kg/día (un recorte de 20.000 veces) por sus efectos en el sistema inmunitario.',
        type: 'warning',
        boxText: 'La EFSA redujo 20.000 veces el límite diario de BPA en 2023. Priorice envases de vidrio para conservas de consumo diario.'
      },
      {
        title: '4. Cómo Evaluar Latas Abolladas: Abolladuras Leves frente a Riesgo de Botulismo',
        content: 'No toda lata abollada debe tirarse. Siga estos criterios: 1) Abolladura en costuras o con pliegue agudo: si afecta a los bordes superior, inferior o lateral, la hermeticidad se rompe y pueden entrar bacterias; 2) Latas hinchadas o abombadas: alarma máxima de proliferación bacteriana por esporas de Clostridium botulinum; 3) Abolladura profunda: si el dedo no entra plano, el barniz interior se ha fracturado y el metal se corroe; 4) Abolladuras redondeadas y superficiales en el cuerpo sin tocar costuras: son seguras para el consumo.',
        type: 'danger',
        boxText: 'Deseche latas con abolladuras en costuras, pliegues afilados o tapas hinchadas. La toxina botulínica es inodora y letal.'
      },
      {
        title: '5. Protocolo Seguro para Alimentos Enlatados',
        content: 'Para garantizar la máxima seguridad: 1) Inspeccione la lata: rechace latas oxidadas, hinchadas o que expulsen líquido al perforar; 2) Lave la tapa exterior antes de abrirla para evitar que el polvo o suciedad caigan dentro; 3) Trasvase de inmediato: nunca refrigere en la lata; vierta las sobras en un táper hermético de vidrio o polipropileno sin BPA; 4) Consuma en 3 a 4 días las conservas refrigeradas decantadas, o congélelas hasta 3 meses.',
        type: 'tip',
        boxText: 'Lave la tapa antes de abrir y traslade las sobras inmediatamente a recipientes de vidrio antes de refrigerar.'
      }
    ],
    conclusion: 'Las conservas son seguras si se respeta su hermeticidad. Deseche latas dañadas en costuras, lave las tapas antes de abrirlas y traslade siempre el contenido sobrante a recipientes de vidrio para evitar la lixiviación de metales pesados.',
    faqs: [
      {
        question: '¿Por qué no se debe dejar una lata de comida abierta en el frigorífico?',
        answer: 'Al entrar oxígeno, los alimentos ácidos corroen rápidamente el estaño interior de la lata, transfiriendo iones metálicos que provocan sabor metálico y malestar estomacal.'
      },
      {
        question: '¿Son peligrosas todas las latas abolladas?',
        answer: 'No. Pequeños golpes suaves en los laterales son seguros. Solo son peligrosas las abolladuras con pliegues afilados, las que tocan las costuras de sellado o las latas hinchadas.'
      },
      {
        question: '¿Hervir la comida destruye la toxina botulínica?',
        answer: 'La toxina botulínica se desactiva hirviendo la comida a 100°C durante 10 minutos. No obstante, las esporas bacterianas sobreviven al hervor común y exigen calor a 121°C bajo presión.'
      },
      {
        question: '¿Qué significa exactamente la etiqueta "BPA-Free" en una conserva?',
        answer: 'Indica que no se usó bisfenol A en el barniz interior, aunque a veces se sustituye por BPS o BPF con efectos similares. Los revestimientos de poliéster u oleorresina son más seguros.'
      },
      {
        question: '¿Cuánto tiempo dura la comida enlatada una vez abierta y guardada en cristal?',
        answer: 'Una vez pasada a un recipiente hermético de vidrio, verduras, carnes y legumbres duran de 3 a 4 días en la nevera a menos de 4°C. Alimentos ácidos como tomate duran hasta 5 a 7 días.'
      }
    ],
    relatedTools: [
      {
        name: 'Guía de Seguridad para Latas Abolladas y Riesgo de Botulismo',
        url: '/es/blog/dented-cans-garlic-in-oil-botulism-kitchen-safety-guide/'
      },
      {
        name: 'Verificador de Seguridad de Códigos de Plástico (#1–#7)',
        url: '/es/tools/plastic-code-checker/'
      },
      {
        name: 'Calculadora de Caducidad y Vida Útil en Nevera',
        url: '/es/tools/leftover-shelf-life-calculator/'
      }
    ]
  }
];

// Helper to update blog data file
function appendGuides(filePath, newGuides) {
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const existingSlugs = new Set(existing.map(g => g.slug));
  let added = 0;
  for (const guide of newGuides) {
    if (!existingSlugs.has(guide.slug)) {
      existing.push(guide);
      added++;
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
  console.log(`Updated ${path.basename(filePath)}: added ${added} guides (total now: ${existing.length})`);
}

// 3. Portuguese Guides
const ptGuides = [
  {
    slug: 'microwave-popcorn-bag-pfas-steam-toxic-fumes',
    title: 'Sacos de Pipoca de Micro-ondas e PFAS: Perigos da Inalação de Vapor, Migração Química e Alternativas Seguras',
    excerpt: 'A embalagem de pipoca de micro-ondas é tóxica? Entenda os tratamentos fluorados de papel antigordura, a cinética do susceptor a 200°C, a inalação de vapores FTOH e métodos seguros de preparo.',
    date: wave42Date,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'A pipoca de micro-ondas é um dos lanches mais populares do mundo pela sua conveniência e preparo em menos de três minutos. No entanto, por trás do aroma tentador de manteiga derretida esconde-se um sério desafio toxicológico. Durante décadas, os sacos dependeram de substâncias perfluoroalquiladas (PFAS) para evitar o vazamento de óleos ferventes pelo papel. Além disso, a placa metálica susceptora no fundo atinge mais de 200°C (392°F), acelerando a migração de surfactantes fluorados para a gordura líquida e liberando plumas de vapor químico ao abrir. Analisamos a ciência dos materiais, a toxicologia e as alternativas seguras.',
    sections: [
      {
        title: '1. Metalurgia do Papel de Embalagem e Agentes Fluorados',
        content: 'O papel de celulose virgem é naturalmente poroso e hidrofílico. Em contato com óleo quente, as fibras absorvem a gordura por capilaridade, causando colapso estrutural e risco de incêndio. Para torná-lo impermeável à gordura, a indústria usava ésteres de fosfato de polifluoroalquilo (PAPs) e álcoois fluoroteloméricos (como 6:2 FTOH). Essas cadeias de perfluorocarbonetos reduzem a energia de superfície, fazendo a gordura quente repelir sem penetrar.',
        type: 'fact',
        boxText: 'Agentes PFAS criam uma barreira fluorada apolar no papel que repele gorduras ferventes a até 220°C.'
      },
      {
        title: '2. Termodinâmica do Susceptor e Desorção Química para a Gordura',
        content: 'Na base dos sacos há uma mancha cinzenta: o susceptor de micro-ondas. Trata-se de uma camada microscópica de alumínio metálico (5 a 10 nm) sobre filme de PET entre folhas de papel. Sob radiação de 2,45 GHz, atinge 200°C–235°C em menos de 90 segundos. O milho e a manteiga repousam sobre este ponto superaquecido, onde a gordura líquida atua como solvente orgânico, extraindo até 85% dos compostos fluorados do papel para o alimento.',
        type: 'warning',
        boxText: 'O susceptor ultrapassa 200°C em 90 segundos. A gordura quente atua como solvente, extraindo químicos fluorados diretamente para a pipoca.'
      },
      {
        title: '3. Pluma de Vapor sob Pressão e Riscos de Inalação de Aerossóis',
        content: 'Ao término do cozimento, o vapor gerado infla o saco, criando um ambiente sob pressão a 90°C–95°C com vapor de água, álcoois fluoroteloméricos volatilizados e aromatizantes como diacetil. Rasgar o saco imediatamente ejeta uma nuvem de vapor pressurizado. Inalar essa pluma deposita fluorotelômeros nos alvéolos pulmonares, de onde passam para a corrente sanguínea e se oxidam em ácidos persistentes como PFOA e PFHxA.',
        type: 'danger',
        boxText: 'Nunca inale a pluma de vapor ao abrir o saco. Abra-o virado para longe do rosto e aguarde ao menos 60 segundos.'
      },
      {
        title: '4. Status Regulatório: Retirada da FDA em 2024 vs. Mercado Global',
        content: 'Em fevereiro de 2024, a FDA confirmou a suspensão voluntária da venda de revestimentos com PFAS para embalagens de alimentos nos EUA. No entanto: 1) Estoques de armazém fabricados antes da data ainda estão à venda; 2) Marcas importadas podem vir de regiões sem restrições; 3) A EFSA europeia mantém um limite estrito de Ingestão Semanal Tolerável (TWI) de apenas 4,4 ng/kg de peso corporal para 4 PFAS críticos, facilmente ultrapassado por migração residual.',
        type: 'info',
        boxText: 'Embora a produção nos EUA tenha eliminado aditivos PFAS, estoques remanescentes e importações exigem cautela.'
      },
      {
        title: '5. Protocolos Seguros e Alternativas Livres de Toxinas',
        content: 'Para saborear pipocas sem riscos: 1) Pipoqueira de silicone platina para micro-ondas: tigelas dobráveis e reutilizáveis que estouram milho puro sem óleo e sem químicos em 2,5 minutos; 2) Pipoqueiras elétricas de ar quente: estouram o milho por vórtice de ar quente com 0% gordura e zero embalagens descartáveis; 3) Pipoqueira de fogão em aço inoxidável: permite usar azeite ou óleo de coco saudável com zero químicos sintéticos.',
        type: 'tip',
        boxText: 'Substitua sacos descartáveis por pipoqueiras de silicone platina ou aço inoxidável para eliminar PFAS e microplásticos.'
      }
    ],
    conclusion: 'Os sacos descartáveis combinam temperaturas de mais de 200°C com substâncias químicas persistentes. Migrar para recipientes reutilizáveis de silicone platina ou aço inox elimina a inalação e ingestão de compostos fluorados na sua casa.',
    faqs: [
      {
        question: 'Todos os sacos de pipoca de micro-ondas contêm PFAS?',
        answer: 'Historicamente quase todos continham PFAS para evitar vazamento de gordura. Após a retirada voluntária da FDA em 2024, as principais marcas reformularam seus produtos, mas estoques antigos e produtos importados ainda podem conter fluorados.'
      },
      {
        question: 'O que é a mancha cinza no fundo do saco?',
        answer: 'É um susceptor de micro-ondas feito de alumínio ultrafino em filme polimérico. Ele absorve a radiação e converte em calor superficial superior a 200°C para estourar os grãos.'
      },
      {
        question: 'Inalar o vapor da pipoca ao abrir pode fazer mal?',
        answer: 'Sim. A nuvem de vapor inicial contém álcoois fluoroteloméricos (FTOHs) e vapores de diacetil que irritam o sistema respiratório. Abra o saco virado para o lado oposto e espere um minuto.'
      },
      {
        question: 'Posso usar saco de pão de papel comum no micro-ondas?',
        answer: 'O USDA desaconselha usar sacos de papel pardo comuns no micro-ondas, pois o papel não tratado pode conter tintas, resíduos metálicos ou sofrer combustão durante o aquecimento prolongado.'
      },
      {
        question: 'Qual a forma mais segura de fazer pipoca em casa?',
        answer: 'O método ideal é usar uma pipoqueira de silicone platina de grau alimentício no micro-ondas com milho a granel, ou uma pipoqueira tradicional de aço inox no fogão com óleo de abacate ou manteiga clarificada.'
      }
    ],
    relatedTools: [
      {
        name: 'Modelador de Pipoca de Micro-ondas: PFOA, PFAS e Vapores Térmicos',
        url: '/pt/tools/microwave-popcorn-pfas-modeler/'
      },
      {
        name: 'Verificador de Segurança de Códigos de Plásticos (#1–#7)',
        url: '/pt/tools/plastic-code-checker/'
      },
      {
        name: 'Decodificador de Símbolos de Cozinha',
        url: '/pt/tools/kitchen-symbol-decoder/'
      }
    ]
  },
  {
    slug: 'cast-iron-soap-myth-seasoning-chemistry',
    title: 'O Detergente Realmente Estraga o Ferro Fundido? A Ciência da Polimerização do Óleo vs. Soda Cáustica',
    excerpt: 'Pode usar detergente em panelas de ferro fundido? Descubra a origem da proibição histórica da soda cáustica, a química dos polímeros de cura e o protocolo seguro de higienização.',
    date: wave42Date,
    readTime: '8 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Entre os mitos da culinária, poucos são tão inflamados quanto a proibição do detergente em frigideiras de ferro fundido curadas. A sabedoria popular afirma que uma única gota de sabão dissolverá a camada preta, destruindo anos de cura e oxidando a panela. No entanto, a ciência dos materiais e a química orgânica contam outra história. A regra do "nunca use sabão" nasceu quando o sabão era feito artesanalmente com soda cáustica livre (hidróxido de sódio). Os detergentes modernos são surfactantes suaves de pH neutro incapazes de quebrar ligações poliméricas reticuladas. Entenda a realidade molecular da sua panela.',
    sections: [
      {
        title: '1. Origem Histórica do Mito: A Saponificação pela Soda Cáustica (NaOH)',
        content: 'Nos séculos XIX e XX, o sabão doméstico era feito fervendo sebo animal com soda cáustica (NaOH ou KOH) obtida de cinzas vegetais. Sem controle estequiométrico preciso, esses sabões continham álcalis cáusticos com pH de 12 a 14. Em contato com o ferro, a base forte quebrava as ligações éster dos lipídios, arrancando o revestimento por saponificação alcalina. Daí surgiu a proibição histórica.',
        type: 'fact',
        boxText: 'O sabão antigo continha soda cáustica livre (pH > 12) que saponificava e removia óleos. Essa é a verdadeira origem do mito.'
      },
      {
        title: '2. Detergentes Modernos: Surfactantes Neutros vs. Álcalis Agressivos',
        content: 'Os detergentes líquidos atuais não são sabões verdadeiros. São formulações de surfactantes sintéticos aniônicos e não iônicos (lauriléter sulfato de sódio, alquilpoliglicosídeos) tamponadas a um pH neutro de 6,5 a 7,5. Funcionam por encapsulamento micelar: atraem a gordura superficial solta sem quebrar as ligações covalentes do polímero curado.',
        type: 'info',
        boxText: 'O detergente líquido atual tem pH neutro (7) e remove gordura solta sem dissolver a cura polimerizada.'
      },
      {
        title: '3. O Que É a Cura: Polimerização Térmica por Radicais Livres',
        content: 'Uma frigideira bem curada não tem óleo fresco; tem uma película orgânica polimérica insolúvel. Quando óleos ricos em ácidos graxos poli-insaturados (linoleico e linolênico) são aquecidos acima do ponto de fumaça sobre o ferro catalisador, sofrem polimerização radicalar. As cadeias formam uma rede tridimensional ancorada aos microporos do metal ($Fe_3O_4$), imune a água e detergente neutro.',
        type: 'tip',
        boxText: 'A cura é uma camada de polímero reticulado ligada covalentemente ao ferro, e não uma película solta de óleo cru.'
      },
      {
        title: '4. Os Reais Inimigos do Ferro: Lava-Louças, Molho e Ácidos Prolongados',
        content: 'Três práticas realmente arruínam o ferro fundido: 1) Máquina de lavar louça: as pastilhas contêm carbonato de sódio cáustico (pH 11) e água a 70°C que removem a cura instantaneamente; 2) Deixar de molho na pia: a água penetra microfissuras e inicia corrosão galvânica acelerada (ferrugem, $Fe_2O_3$); 3) Molhos ácidos por horas: cozinhar tomate ou vinho por horas corrói a camada de polímero.',
        type: 'danger',
        boxText: 'A máquina de lavar louça e o molho na pia destroem a panela em poucas horas. A lavagem manual com secagem imediata preserva o ferro.'
      },
      {
        title: '5. Protocolo Científico de Limpeza em 4 Etapas',
        content: 'Para manter sua frigideira impecável por gerações: 1) Lave logo após o uso com água morna, esponja macia e algumas gotas de detergente para remover gordura rançosa e bactérias; 2) Enxágue bem; 3) Seque com pano e coloque na chama do fogão em fogo médio por 2 a 3 minutos para evaporar toda a umidade dos microporos; 4) Condicione: aplique 3 gotas de óleo com alto ponto de fumaça na panela morna e lustre com papel toalha até acabamento fosco.',
        type: 'fact',
        boxText: 'Lave com detergente suave, enxágue, seque no fogo para banir a umidade e aplique uma gota de óleo na panela morna.'
      }
    ],
    conclusion: 'A ideia de que o detergente estraga o ferro fundido é um mito da época da soda cáustica. Detergentes neutros modernos higienizam sem danificar a cura polimerizada. Lave com sabão suave, seque na boca do fogão e use sua frigideira com tranquilidade.',
    faqs: [
      {
        question: 'Pode usar detergente de louça na panela de ferro todo dia?',
        answer: 'Sim. Lavar com água morna, esponja macia e detergente neutro é seguro e higiênico. Elimina resíduos e gordura rançosa sem dissolver a cura polimerizada.'
      },
      {
        question: 'Por que os antigos diziam para nunca usar sabão?',
        answer: 'Porque antigamente o sabão continha soda cáustica livre (lixívia) com pH acima de 12, que atacava os óleos por saponificação. Os detergentes atuais têm pH neutro.'
      },
      {
        question: 'O que acontece com o ferro fundido na lava-louças?',
        answer: 'As pastilhas alcalinas da lava-louças (pH 11) decapam a cura e a umidade constante enferruja a peça inteira em um único ciclo. Nunca coloque ferro na lava-louças.'
      },
      {
        question: 'Como secar o ferro para não enferrujar?',
        answer: 'Seque com toalha e aqueça a panela no fogão em fogo médio por 2 a 3 minutos. O calor evapora toda a água dos microporos do ferro, evitando a ferrugem.'
      },
      {
        question: 'Posso fazer molho de tomate na panela de ferro?',
        answer: 'Preparações rápidas (10 a 15 minutos) em panelas bem curadas são seguras. Cozinhar alimentos ácidos por mais de uma hora desgasta a cura e passa gosto metálico à comida.'
      }
    ],
    relatedTools: [
      {
        name: 'Solucionador de Problemas de Cura em Ferro Fundido',
        url: '/pt/tools/cast-iron-seasoning-troubleshooter/'
      },
      {
        name: 'Analisador de Polimerização de Óleo em Ferro Fundido',
        url: '/pt/tools/cast-iron-seasoning-polymerization-analyzer/'
      },
      {
        name: 'Guia de Segurança de Sabão para Ferro Fundido e Aço Carbono',
        url: '/pt/blog/dish-soap-cast-iron-carbon-steel-dishwasher-pod-safety/'
      }
    ]
  },
  {
    slug: 'canned-food-bpa-liners-acidic-storage-safety',
    title: 'Segurança de Alimentos Enlatados: Revestimentos de BPA/BPS, Latas Amassadas, Botulismo e Riscos de Guardar Latas Abertas',
    excerpt: 'É perigoso guardar latas abertas na geladeira? Entenda a corrosão do estanho estimulada pelo oxigênio em alimentos ácidos, a toxicidade do BPA/BPS e como triar latas amassadas.',
    date: wave42Date,
    readTime: '9 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Os alimentos enlatados são essenciais na despensa pela esterilização comercial a 121°C (250°F), que garante anos de validade. Contudo, a lata metálica—composta por aço estanhado, verniz epóxi interno e costura dupla hermética—muda de comportamento ao ser aberta. Milhões de pessoas cometem o erro de guardar latas de tomate, milho ou frutas abertas diretamente na geladeira, sem saber que o oxigênio estimula a lixiviação galvânica do estanho. Além disso, latas amassadas nas prateleiras podem esconder riscos graves de botulismo. Saiba como lidar com conservas com total segurança.',
    sections: [
      {
        title: '1. Metalurgia da Lata: Folha de Flandres e Vernizes Epóxi',
        content: 'As latas alimentícias não são de estanho puro. São feitas de lâminas finas de aço baixo carbono (0,15 a 0,25 mm) eletroestanhadas dos dois lados com uma camada de estanho puro (1 a 5 micrômetros). Para impedir que ácidos e compostos sulfurosos ataquem o metal, o interior recebe vernizes poliméricos, historicamente resinas epóxi-fenólicas baseadas em bisfenol A (BPA) pela excelente resistência térmica e mecânica.',
        type: 'fact',
        boxText: 'A folha de flandres combina aço resistente, estanho protetor e vernizes poliméricos para isolar o alimento do metal.'
      },
      {
        title: '2. Por Que Não Guardar Latas Abertas na Geladeira: Oxigênio e Estanho',
        content: 'Em uma lata fechada sob vácuo, não há oxigênio e a corrosão é praticamente nula. Ao abrir, o oxigênio penetra. Quando alimentos ácidos (molho de tomate, abacaxi, pH < 4,5) são refrigerados na lata aberta, o oxigênio acelera a dissolução catódica do estanho: 2Sn + O2 + 4H+ -> 2Sn2+ + 2H2O. Em 48 horas, o teor de estanho supera 200 mg/kg, gerando forte gosto metálico, náuseas e diarreia.',
        type: 'danger',
        boxText: 'Nunca guarde latas abertas na geladeira. O oxigênio dissolve o estanho em alimentos ácidos em 24 a 48 horas.'
      },
      {
        title: '3. BPA, BPS e Limites da EFSA: Desregulação Endócrina',
        content: 'A preocupação com o BPA como desregulador endócrino levou muitos fabricantes a adotarem revestimentos "Sem BPA", muitas vezes usando bisfenol S (BPS) ou poliéster. Pesquisas mostram que o BPS tem ação hormonal similar ao BPA. Em 2023, a EFSA reduziu a Ingestão Diária Tolerável (TDI) de BPA de 4 µg/kg/dia para 0,2 ng/kg/dia (redução de 20.000 vezes), visando proteger o sistema imunológico.',
        type: 'warning',
        boxText: 'A EFSA reduziu em 20.000 vezes o limite diário de BPA em 2023. Prefira potes de vidro para conservas frequentes.'
      },
      {
        title: '4. Avaliação de Latas Amassadas: Amassados Leves vs. Botulismo',
        content: 'Nem toda lata amassada deve ser descartada: 1) Amassado em costuras ou com vinco pontiagudo: se atingir as bordas superior, inferior ou lateral, a vedação hermética pode ter quebrado, admitindo bactérias; 2) Latas estufadas: alerta máximo de produção de gás por esporos de Clostridium botulinum; 3) Amassado profundo com vinco vivo: rompe o verniz interno e corrói o metal; 4) Amassados suaves e arredondados no corpo longe das costuras: são seguros.',
        type: 'danger',
        boxText: 'Descarte latas com amassados em costuras, vincos afiados ou tampas estufadas. A toxina botulínica é inodora e mortal.'
      },
      {
        title: '5. Protocolo Seguro para Alimentos Enlatados',
        content: 'Para garantir máxima segurança alimentar: 1) Inspecione a lata: rejeite unidades com ferrugem, vazamentos ou que espirrem líquido ao furar; 2) Lave a tampa superior com água e sabão antes de abrir para não contaminar o alimento com poeira; 3) Transfira imediatamente: nunca guarde na lata aberta; passe para pote hermético de vidro ou plástico livre de BPA; 4) Consuma em 3 a 4 dias na geladeira.',
        type: 'tip',
        boxText: 'Lave a tampa antes de abrir e transfira sobras para recipientes de vidro antes de colocar na geladeira.'
      }
    ],
    conclusion: 'Conservas são seguras quando sua hermeticidade é mantida. Descarte latas danificadas em costuras, higienize as tampas antes de abrir e transfira sobras imediatamente para potes de vidro.',
    faqs: [
      {
        question: 'Por que não se deve deixar a lata aberta na geladeira?',
        answer: 'Ao entrar ar, o oxigênio acelera a corrosão do estanho pelos ácidos do alimento. Isso contamina a comida com íons de estanho, gerando gosto metálico e mal-estar gastrointestinal.'
      },
      {
        question: 'Toda lata amassada deve ser jogada fora?',
        answer: 'Não. Amassados pequenos e suaves nas laterais sem tocar costuras são seguros. Descarte se o amassado for afiado, tocar as costuras de fechamento ou a lata estiver estufada.'
      },
      {
        question: 'Cozinhar a comida destrói a toxina botulínica?',
        answer: 'A toxina botulínica é inativada por fervura intensa a 100°C por pelo menos 10 minutos. No entanto, os esporos da bactéria sobrevivem à fervura comum e exigem 121°C sob pressão.'
      },
      {
        question: 'O que significa "BPA-Free" na lata de conserva?',
        answer: 'Significa que o verniz interno não contém bisfenol A, mas pode conter substitutos como BPS ou BPF. Revestimentos de poliéster ou potes de vidro são opções mais seguras.'
      },
      {
        question: 'Quanto tempo dura a comida enlatada aberta num pote de vidro na geladeira?',
        answer: 'Em pote de vidro hermético, legumes, carnes e sopas duram de 3 a 4 dias a menos de 4°C. Alimentos muito ácidos, como molho de tomate, duram de 5 a 7 dias.'
      }
    ],
    relatedTools: [
      {
        name: 'Guia de Latas Amassadas e Risco de Botulismo',
        url: '/pt/blog/dented-cans-garlic-in-oil-botulism-kitchen-safety-guide/'
      },
      {
        name: 'Verificador de Segurança de Códigos de Plástico (#1–#7)',
        url: '/pt/tools/plastic-code-checker/'
      },
      {
        name: 'Calculadora de Validade e Conservação na Geladeira',
        url: '/pt/tools/leftover-shelf-life-calculator/'
      }
    ]
  }
];

// 4. Chinese Guides
const zhGuides = [
  {
    slug: 'microwave-popcorn-bag-pfas-steam-toxic-fumes',
    title: '微波爆米花纸袋与PFAS全氟化合物：开袋高压蒸汽吸入危害、化学油脂迁移与零毒性替代方案',
    excerpt: '微波爆米花包装纸袋是否有毒？深度解析全氟防油涂层化学、200°C金属感受层热解动力学、挥发性FTOH蒸汽吸入风险及无PFAS爆米花健康方案。',
    date: wave42Date,
    readTime: '9 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '微波爆米花是风靡全球的经典家庭休闲零食，三分钟即可享受新鲜爆裂的黄油玉米粒。然而，在浓郁诱人的奶香与脆响背后，隐藏着长达数十年的食品接触包装材料毒理学隐患。为了阻止高温沸腾的植物油脂和水蒸气浸透纸纤维，传统微波爆米花袋普遍采用全氟和多氟烷基物质（PFAS）作为防油防水助剂。此外，包装袋底部厚度仅为几纳米的真空镀铝微波感受膜在微波照射下瞬间飙升至200°C（392°F）以上，剧烈加速氟化物向熔融黄油中的化学溶出，并在开袋撕封时喷射出高浓度化学气溶胶羽流。本文为您全面拆解其包装冶金学、毒理学机制与零毒性健康替代器具。',
    sections: [
      {
        title: '1. 纸质包装材料学与全氟表面施胶防油化学',
        content: '天然原生木浆纤维具有多孔性与亲水性。热油接触未经处理的纸张时，毛细管效应会使油脂迅速扩散渗透，导致包装破损甚至起火。为赋予纸张超强耐油性，包装行业长期在原纸表面涂覆全氟烷基磷酸酯（PAPs）和氟调聚醇（如6:2 FTOH与8:2 FTOH）等含氟助剂。碳氟分子链具有极低的表面自由能，使极性水分与非极性熔融油脂均呈珠状滑落，形成强大的阻隔屏障。',
        type: 'fact',
        boxText: 'PFAS表面助剂牢固结合在纤维素分子上，形成抵抗高达220°C熔融沸腾油脂渗透的极低表面能氟化阻隔层。'
      },
      {
        title: '2. 金属感受层热力学与高温黄油脂质萃取动力学',
        content: '微波爆米花纸袋底部有一块深灰色方块，即微波感受膜（Susceptor）。它由真空镀覆在PET薄膜上的极薄铝金属层（厚度仅5至10纳米）压合在双层牛皮纸间制成。在2.45 GHz微波电磁场作用下，金属层产生剧烈涡流电阻发热，在90秒内温度迅速突破200°C–235°C（392°F–455°F）。未爆裂的玉米粒与固态油脂直接堆积在此发热垫上。在200°C高温下，油脂充当强效亲脂性溶剂，纸袋中高达85%的游离全氟化合物会迅速脱附并溶入熔融黄油中。',
        type: 'warning',
        boxText: '袋底金属感受层90秒内即可突破200°C。沸腾的热油脂充当强极性溶剂，将包装袋中的氟化合物大量提取至食品中。'
      },
      {
        title: '3. 开袋高压蒸汽膨胀与挥发性氟气溶胶吸入暴露危害',
        content: '除随食物摄入的慢性蓄积外，开袋瞬间存在严重的急性呼吸暴露风险。随着玉米内部水分汽化，折叠纸袋剧烈膨胀，在袋内形成90°C–95°C饱和水蒸气、挥发性氟调聚醇（FTOHs）以及人工香精双乙酰（Diacetyl）的高压微环境。微波停止后立即撕开纸袋，高压蒸汽喷涌而出。吸入这股高温蒸汽羽流会使气溶胶态氟化物直达肺泡深处，直接穿透肺泡毛细血管屏障进入血液，代谢氧化为具有长期生物蓄积性的PFOA等致癌化合物。',
        type: 'danger',
        boxText: '开袋时切勿正对蒸汽！请将袋口朝向身体外侧开启，并在食用前通风静置至少60秒。'
      },
      {
        title: '4. 法规现状：美国FDA 2024自愿淘汰与全球供应链滞后',
        content: '2024年2月，美国食品药品监督管理局（FDA）宣布各大化工巨头已完全停止在美国市场销售含PFAS的纸质食品接触防油剂。但消费者仍需保持清醒：1）淘汰生效前生产的库存产品依然在超市货架与仓库中销售；2）部分进口杂牌与跨境电商食品可能来自未设立PFAS禁令的地区；3）欧洲食品安全局（EFSA）设立的4种关键PFAS每周耐受摄入量（TWI）极为严苛，仅为4.4 ng/kg体重/周，即便包装残留微克级溶出，也会导致单次摄入超标数百倍。',
        type: 'info',
        boxText: '虽然美欧正加速淘汰食品纸袋中的PFAS，但库存产品与未监管进口货物仍存在氟污染风险。'
      },
      {
        title: '5. 零化学、零微塑料的家庭健康爆米花替代方案',
        content: '喜爱爆米花的家庭无需放弃这项美味。以下三种无毒环保替代方案不仅能爆出香脆玉米花，且彻底杜绝包装化学物：1）100%食品级铂金硅胶微波爆米花碗：可折叠硅胶碗无需添加任何油脂即可在2.5分钟内爆好玉米，零氟化合物、零微塑料；2）热风涡流爆米花机：利用旋转热气流直接加热玉米粒，无需一滴油，纯物理机械爆裂；3）不锈钢或加厚铝制手摇爆米花锅（Whirley-Pop）：配合耐高温的鳄梨油或椰子油，在炉灶上快速烹制，安全无异味。',
        type: 'tip',
        boxText: '建议换用铂金硅胶微波碗或炉灶不锈钢手摇爆米花锅，彻底告别PFAS氟化物与一次性包装垃圾。'
      }
    ],
    conclusion: '一次性微波爆米花包装袋是极端微波物理与持久性化学毒物的结合体。选用可重复利用的食品级铂金硅胶碗或不锈钢炉灶爆米花锅，是守护全家呼吸道与代谢健康的终极解决方案。',
    faqs: [
      {
        question: '是不是所有的微波爆米花纸袋都含有PFAS氟化物？',
        answer: '历史上绝大多数传统微波爆米花袋都添加了PFAS防油剂以防止油脂渗漏。尽管FDA在2024年推进了自愿淘汰，但由于库存周转和跨国供应链差异，部分现有货架产品和进口品牌仍可能含有氟残留。'
      },
      {
        question: '爆米花袋底部的灰色方块是什么？',
        answer: '那是微波感受膜（Susceptor），由微米级镀铝薄膜制成。它能吸收微波能量并快速转化为200°C（392°F）以上的接触传导热，从而使玉米粒迅速爆裂。'
      },
      {
        question: '撕开微波爆米花袋时吸入蒸汽会有危害吗？',
        answer: '会有危害。开袋瞬间释放的高温蒸汽含有挥发的氟调聚醇（FTOH）和人造奶味香精双乙酰，吸入肺部会对呼吸道产生刺激并在体内转化为持久性全氟酸。开袋时务必避开面部。'
      },
      {
        question: '自己用普通棕色牛皮纸袋放微波炉爆米花安全吗？',
        answer: '美国农业部（USDA）和消防部门明确警告不要将普通牛皮纸午餐袋放入微波炉加热，因为未经食品级认证的杂质回收纸可能含有胶水、油墨或金属碎屑，长时间加热极易炭化引燃起火。'
      },
      {
        question: '家庭制作爆米花最安全环保的工具是什么？',
        answer: '最安全的方法是使用100%食品级铂金硅胶折叠爆米花碗放入微波炉烹饪，或者使用传统食品级304不锈钢手摇锅在炉灶上用鳄梨油爆炒。'
      }
    ],
    relatedTools: [
      {
        name: '微波爆米花包装袋PFAS与全氟表面活性剂蒸汽迁移模型器',
        url: '/zh-cn/tools/microwave-popcorn-pfas-modeler/'
      },
      {
        name: '塑料材质回收代码(#1–#7)厨房安全自测工具',
        url: '/zh-cn/tools/plastic-code-checker/'
      },
      {
        name: '厨房器皿底部安全标识与微波炉符号解码器',
        url: '/zh-cn/tools/kitchen-symbol-decoder/'
      }
    ]
  },
  {
    slug: 'cast-iron-soap-myth-seasoning-chemistry',
    title: '洗洁精真的会毁掉铸铁锅吗？高温油脂交联聚合与强碱皂化化学机理深度破壁',
    excerpt: '铸铁锅到底能不能用洗洁精清洗？揭秘“严禁肥皂”古老禁忌的强碱烧碱历史渊源、干性油自由基三维交联聚合物本质及现代科学养锅养护四部曲。',
    date: wave42Date,
    readTime: '8 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '在所有厨房用具保养传说中，没有哪一条比“严禁使用洗洁精清洗铸铁锅”更为根深蒂固。坊间传闻坚称，哪怕一滴洗洁精也会瞬间溶解辛辛苦苦积攒数年的黑色油膜，让锅体失去不粘特性并迅速生锈。然而，从高分子化学与材料科学的角度来看，这个禁忌完全是对历史事实的误读。“不得用肥皂”的陈规源自一个多世纪前使用强碱（烧碱）土法制皂的年代。现代家用洗洁精是pH值呈中性的温和合成表面活性剂溶液，在化学上根本无法破坏致密的高分子交联聚合物油膜。本文为您彻底揭示油膜聚合反应、洗洁精机理与现代科学养锅法则。',
    sections: [
      {
        title: '1. 迷信的历史起源：土法烧碱（NaOH）肥皂的强烈皂化剥离反应',
        content: '在19世纪和20世纪初，家庭洗涤肥皂通常是由草木灰浸出的碱液（氢氧化钠NaOH或氢氧化钾KOH）与动物板油或猪油混合熬制而成。由于缺乏精准的化学计量配比，土法制成的肥皂普遍含有过量未反应的强碱，pH值高达12至14。当用这种强碱性肥皂清洗铸铁锅时，强碱会迅速水解油脂分子中的酯键，通过碱性皂化反应将附着的油脂彻底剥落。这一历史事实造就了代代相传的“绝不能沾肥皂”家训。',
        type: 'fact',
        boxText: '传统古法肥皂含有过量强碱苛性钠（pH > 12），通过剧烈皂化反应溶解油脂。这才是该禁忌的历史根源。'
      },
      {
        title: '2. 现代洗洁精的本质：温和表面活性剂胶束对决强碱侵蚀',
        content: '现代家用洗洁精在化学定义上根本不是“肥皂”，而是合成洗涤剂。其主要成分为温和的阴离子和非离子表面活性剂（如十二烷基聚氧乙烯醚硫酸钠SLES、椰油酰胺丙基甜菜碱等），并添加缓冲剂使pH值稳定在6.5至7.5的人体中性区间。表面活性剂的作用原理纯粹是物理胶束包裹：疏水碳氢尾部包裹表面未反应的游离油污，亲水极性头部与水结合冲走脏污。它们没有任何化学能力切断共价键合的碳-碳高分子链。',
        type: 'info',
        boxText: '现代洗洁精呈中性（pH 7），仅乳化包裹表面游离残油与杂质，完全无法溶解固化交联的聚合物油膜。'
      },
      {
        title: '3. 铸铁锅“开锅油膜”的真面目：三维自由基热交联聚合物',
        content: '一口保养得当的铸铁锅表面并不是一层单纯的生油，而是一层致密坚硬、不溶于水和溶剂的仿塑料高分子聚合物薄膜。富含多不饱和脂肪酸（亚油酸和α-亚麻酸）的干性食用油在具有催化活性的铸铁表面被加热至烟点以上时，会发生剧烈的热氧化裂解与自由基加成聚合反应。脂肪酸分子链相互交联形成三维立体聚烯烃网状结构，并牢牢锚定镶嵌在铸铁微观晶体孔隙（$Fe_3O_4$）中。这种硬质聚合物耐磨、疏水且完全不溶于中性洗洁精。',
        type: 'tip',
        boxText: '开锅油膜是与铁基底牢固共价锚定的高分子交联聚合物膜，绝非一层一擦就掉的普通生油。'
      },
      {
        title: '4. 真正摧毁铸铁锅的三大杀手：洗碗机、长时间浸泡与长久炖酸',
        content: '温和的手洗洗洁精完全无害，但以下三种常见错误操作会真正毁掉铸铁锅：1）放入自动洗碗机：洗碗机专用洗碗粉/洗碗块含有强碱性碳酸钠与硅酸盐（pH 10.5–11.5），配合70°C高温高压水流，会强行腐蚀剥蚀油膜并导致金属裸露；2）水槽浸泡不洗：将铁锅泡在水池中数小时，水分子会顺着微裂纹渗入铁基体，引发严重的电化学腐蚀（生锈，$Fe_2O_3$）；3）长时间慢炖高酸食物：用铁锅连续炖煮番茄酱或红酒数小时，酸性物质会缓慢侵蚀油膜并溶出过多铁离子。',
        type: 'danger',
        boxText: '洗碗机强碱与水池长时间浸泡会在数小时内彻底破坏油膜并生锈。手洗洗洁精配合立即烘干才是保养正道。'
      },
      {
        title: '5. 经科学验证的现代铸铁锅四步清洁养护法',
        content: '保持铸铁锅百年不坏的科学保养流程极为简单：1）温水加洗洁精清洗：烹饪后趁温热用温水、软海绵或锁子甲刷，滴入2滴温和洗洁精彻底洗净食物残渣与哈败残油；2）清水冲净；3）炉灶彻底烘干：用毛巾擦干后，将锅放在炉灶上开中小火加热2至3分钟，直到微观孔隙中的水分完全蒸发，杜绝生锈；4）薄油养锅：在温热锅面上滴入3滴耐高温食用油（如菜籽油），用厨房纸反复擦拭至表面呈现微哑光质感，随后关火冷却。',
        type: 'fact',
        boxText: '用洗洁精洗净残油，冲水后立刻放炉灶上加热烘干微孔水分，温热时擦拭一滴油养护即可。'
      }
    ],
    conclusion: '“洗洁精会洗掉铸铁锅油膜”是属于19世纪土法强碱肥皂时代的陈旧谬论。现代中性洗洁精能有效去除有害细菌和哈败油垢，而丝毫不损伤真正交联的高分子油膜。用洗洁精放心清洗、炉火烘干水分，您的铸铁锅将历久弥新。',
    faqs: [
      {
        question: '每天用洗洁精清洗铸铁锅真的没问题吗？',
        answer: '完全没问题。温水搭配中性洗洁精能彻底带走烹饪残渣和变质酸败的表面油脂，保持炊具卫生，同时不会破坏早已在高温下固化交联的聚合物油膜。'
      },
      {
        question: '为什么以前的老一辈都反复告诫千万不能用肥皂洗铁锅？',
        answer: '因为老一辈所用的土法肥皂含有大量未反应的游离氢氧化钠（烧碱），pH值高达12以上，强碱会通过皂化反应溶解油脂。现代洗洁精是中性合成配方，不含烧碱。'
      },
      {
        question: '如果误把铸铁锅放进洗碗机清洗会发生什么？',
        answer: '洗碗粉的强碱性盐类（pH 11）与长时间70°C水蒸气会剥蚀掉表面保护油膜，并在洗涤程序结束后使铸铁迅速产生大面积红褐色铁锈。铸铁锅严禁放入洗碗机。'
      },
      {
        question: '铸铁锅洗完后怎样才能确保绝对不生锈？',
        answer: '仅用布擦干是不够的。必须将擦干后的锅放到炉灶上用小火烘烤2到3分钟，利用热量将深层微观孔隙中残留的微量水分彻底蒸发殆尽。'
      },
      {
        question: '铸铁锅可以用来煮番茄酱等酸性食物吗？',
        answer: '油膜保养极佳的锅体可以进行10至15分钟的快速酸性烹饪。但不建议用裸铁锅连续慢炖数小时的番茄浓汤或红酒炖牛肉，这会侵蚀油膜并使菜肴带有明显的铁锈味。'
      }
    ],
    relatedTools: [
      {
        name: '铸铁锅开锅开裂与生锈修复智能诊断工具',
        url: '/zh-cn/tools/cast-iron-seasoning-troubleshooter/'
      },
      {
        name: '铸铁锅植物油高温热氧化交联聚合反应动力学分析器',
        url: '/zh-cn/tools/cast-iron-seasoning-polymerization-analyzer/'
      },
      {
        name: '洗洁精与洗碗机块对铸铁碳钢养护层侵蚀深度安全指南',
        url: '/zh-cn/blog/dish-soap-cast-iron-carbon-steel-dishwasher-pod-safety/'
      }
    ]
  },
  {
    slug: 'canned-food-bpa-liners-acidic-storage-safety',
    title: '罐头食品安全全景指南：内壁BPA/BPS环氧树脂膜、开盖冷藏锡溶出、凹痕分级与肉毒杆菌防护',
    excerpt: '开封后的铁罐头直接放冰箱冷藏有毒吗？深度剖析氧气触发马口铁酸性快速腐蚀溶出机理、EFSA最新双酚A摄入红线、罐体凹陷严重度辨别与肉毒毒素防范。',
    date: wave42Date,
    readTime: '9 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '罐头食品是现代家庭食品保藏的伟大发明，通过121°C（250°F）高温高压商业灭菌，在无需任何防腐剂的前提下实现数年的常温保质期。然而，这套由马口铁基材、内部高分子环氧树脂涂层以及双重卷边卷封工艺构成的精密容器，在被开启的那一刻，其物理与化学稳定性会发生剧烈突变。许多家庭习惯将未吃完的番茄酱、浓汤或水果罐头直接敞口连罐放进冰箱冷藏，却不知氧气的注入会触发金属锡的剧烈电化学溶解。此外，超市特价货架上的凹痕罐头，其安全隐患横跨从无害外观磕碰至致命肉毒杆菌毒素泄漏的巨大区间。本文为您系统梳理罐头食品安全科学。',
    sections: [
      {
        title: '1. 食品罐头冶金学：镀锡马口铁薄板与内壁环氧树脂涂层',
        content: '现代食品罐头既非纯锡罐，也非普通裸钢。它们由厚度为0.15至0.25毫米的低碳冷轧钢板制成，双面经连续电镀附着厚度仅1至5微米的纯锡（Sn）保护层，即马口铁（Tinplate）。为了防止食物中的有机酸、盐分和硫化物腐蚀马口铁，罐头内壁会均匀喷涂一层高分子阻隔漆。数十年来，以双酚A（BPA）和环氧氯丙烷为原料合成的环氧酚醛树脂因其卓越的耐酸耐热性与冲压附着力，一直是全球金属罐内涂层的主流工业标准。',
        type: 'fact',
        boxText: '罐头是由超薄钢板镀锡并喷涂聚合物环氧树脂膜复合制成，严密隔绝金属与食物接触。'
      },
      {
        title: '2. 为什么开封罐头绝不能连罐冷藏：氧气介入与锡离子快速电化学溶出',
        content: '在未开封的密封罐头内，真空封罐工艺排除了所有空气，处于绝氧状态的金属锡作为牺牲阳极极缓慢钝化。然而，开罐瞬间空气大量涌入。若将吃剩的酸性罐头（如番茄、菠萝、柑橘，pH < 4.5）直接连罐放入冰箱，大气中的氧气将瞬间激活阴极反应：2Sn + O2 + 4H+ -> 2Sn2+ + 2H2O。在短短48小时内，酸液中的二价锡离子浓度可飙升至200 mg/kg以上（法定安全上限），不仅产生令人反胃的金属涩味，更会直接刺激胃肠道黏膜，引发急性恶心、呕吐、腹痛与腹泻。',
        type: 'danger',
        boxText: '切勿将开启后的铁罐放进冰箱冷藏！氧气会在24至48小时内使酸性食物迅速溶解出超标的有毒金属锡。'
      },
      {
        title: '3. 双酚A（BPA）、BPS替代物与欧洲EFSA最新毒理摄入红线',
        content: '鉴于双酚A具有类雌激素效应和内分泌干扰毒性，包装行业近年来广泛推广“BPA-Free（无双酚A）”涂层，改用双酚S（BPS）、双酚F（BPF）或聚酯涂层。但毒理学研究证实，BPS等替代物同样具备相似甚至更强的激素干扰活性。2023年4月，欧洲食品安全局（EFSA）发布重磅评估，将BPA的每日耐受摄入量（TDI）从4 µg/kg体重暴降至0.2 ng/kg体重（下调幅度达20000倍），明确指出极微量的双酚暴露即可对人体免疫细胞产生不良抑制。',
        type: 'warning',
        boxText: 'EFSA在2023年将BPA每日安全限值大幅下调20000倍。日常高频食用的番茄酱与果泥建议优先选择玻璃罐装。'
      },
      {
        title: '4. 凹痕罐头安全评估分级法则：轻微碰伤对决肉毒杆菌致命险情',
        content: '并非所有受碰撞的罐头都必须丢弃，食品卫生检查官依据严格的结构完整性进行分级：1）卷边或接缝处凹痕：凡是凹痕位于顶部、底部或侧边接缝处，或形成尖锐死折，双重卷封的密封性大概率已失效，微孔足以让细菌侵入；2）胀罐膨胀：罐盖鼓起或按压无弹性，属于微生物产气繁殖的绝对红线警报，可能含有未彻底杀灭的肉毒杆菌；3）深度凹折：手指按压凹痕感觉深不见底，内部环氧树脂涂层必然破裂脱落，引发内部腐蚀；4）罐身侧面平滑浅凹：未伤及接缝的浅圆凹痕可安全食用。',
        type: 'danger',
        boxText: '凡是伤及接缝、有尖锐死折、漏液或盖顶鼓起的罐头必须立即丢弃！肉毒杆菌毒素无色无味但致死率极高。'
      },
      {
        title: '5. 经循证医学验证的家庭罐头食品四步安全操作法',
        content: '为了最大限度保障全家饮食安全：1）开罐前全面目测：凡有严重锈蚀、接缝破损、开孔喷液或异味的罐头坚决丢弃；2）开罐前清洗罐顶：用流动温水和肥皂冲洗干净罐头顶部表面，防止开罐器将仓储灰尘、鼠害排泄物或残留农药带入食物中；3）立即分装转移：开罐后未用完的食物必须在几分钟内倒入食品级高硼硅玻璃保鲜盒或无BPA保鲜盒中密封冷藏；4）严守保鲜期限：移入密封盒冷藏的罐头熟食应在3至4天内食用完毕。',
        type: 'tip',
        boxText: '开罐前务必洗净盖顶，未吃完的内容物必须在开封后立即转移至玻璃保鲜盒中再冷藏。'
      }
    ],
    conclusion: '罐头保鲜的关键在于严密的密封隔绝。通过果断淘汰接缝受损的凹罐、开罐前洗净顶盖、开封后立即倒出换玻璃盒保存，即可轻松化解重金属溶解与细菌感染双重风险。',
    faqs: [
      {
        question: '为什么吃剩下的罐头绝对不能连着原铁罐放进冰箱？',
        answer: '因为开罐后空气注入，氧气会与酸性食物（如番茄、水果）共同作用，在24至48小时内加速电解溶解铁罐内壁的金属锡镀层，造成锡超标中毒和剧烈胃肠不适。'
      },
      {
        question: '超市里打折的磕碰凹痕罐头都能买吗？',
        answer: '不一定。罐身侧面微小的平滑浅坑通常安全；但如果凹坑出现在罐口卷边接缝处、有尖锐折痕或罐底有生锈，则密封可能失效，绝不能购买食用。'
      },
      {
        question: '高温烹饪能彻底破坏肉毒杆菌毒素吗？',
        answer: '肉毒神经毒素本身不耐热，在100°C剧烈沸腾下加热10分钟即可被完全灭活破坏。但肉毒杆菌的芽孢极其耐热，普通沸水无法杀死，必须通过121°C高压商业灭菌。'
      },
      {
        question: '罐头上的“BPA-Free（无双酚A）”标签就意味着绝对安全吗？',
        answer: '不一定。许多厂商用双酚S（BPS）或双酚F（BPF）替代BPA，但最新毒理学发现它们同样具有雌激素干扰效应。建议优先选购玻璃瓶装或聚酯树脂涂层罐头。'
      },
      {
        question: '罐头吃剩后倒进玻璃保鲜盒，在冰箱里能放几天？',
        answer: '转移到密封玻璃盒后，低酸食品（肉类、蔬菜、浓汤、豆类）在4°C以下可冷藏保存3至4天；高酸性食品（如番茄浓汁、酸黄瓜）可冷藏保存5至7天。'
      }
    ],
    relatedTools: [
      {
        name: '凹痕罐头与大蒜油肉毒杆菌厨房安全指南',
        url: '/zh-cn/blog/dented-cans-garlic-in-oil-botulism-kitchen-safety-guide/'
      },
      {
        name: '塑料材质回收代码(#1–#7)厨房安全自测工具',
        url: '/zh-cn/tools/plastic-code-checker/'
      },
      {
        name: '美国农业部标准剩菜剩饭冷藏保质期倒计时计算器',
        url: '/zh-cn/tools/leftover-shelf-life-calculator/'
      }
    ]
  }
];

// 5. Japanese Guides
const jaGuides = [
  {
    slug: 'microwave-popcorn-bag-pfas-steam-toxic-fumes',
    title: '電子レンジ用ポップコーン袋とPFAS：高温蒸気の吸入リスク、溶融脂質への化学移行と安全な調理法',
    excerpt: '電子レンジ用ポップコーン袋に毒性はある？耐油紙のフッ素樹脂加工、200℃サセプターの熱力学、揮発性FTOH蒸気の肺吸入リスクおよび無害なポップコーン調理器具を解説。',
    date: wave42Date,
    readTime: '9 分で読める',
    author: 'IsItKitchenSafe',
    intro: '電子レンジ用ポップコーンは、手軽に3分で熱々のできたてを楽しめる人気のスナックです。しかし、香ばしいバターの香りの裏側には、長年にわたり食品接触包装の毒性問題が潜んでいます。超高温に熱せられた油脂や蒸気が紙繊維を突き破るのを防ぐため、従来のポップコーン袋にはペルフルオロアルキル化合物（PFAS）耐油コーティングが広く使われてきました。さらに、袋の底にある金属サセプターは200℃（392°F）以上に達し、溶けた油脂へのフッ素化合物の溶出を加速させ、開封時には化学物質を含んだ蒸気プームを放出します。材料科学、毒性学、安全なポップコーン調理法を解説します。',
    sections: [
      {
        title: '1. 包装紙の材料化学とフッ素系耐油表面処理剤',
        content: 'パルプ繊維でできた紙は親水性で多孔質です。加熱された油脂が未処理の紙に触れると毛細管現象で油が浸透し、袋の破れや発火の原因になります。これを防ぐため、製造工程ではポリフルオロアルキルリン酸エステル（PAP）やフルオロテロマーアルコール（6:2 FTOHなど）といったフッ素系耐油剤が塗布されてきました。フッ素の極めて低い表面エネルギーにより、高温の油や水分を弾く強力なバリアが形成されます。',
        type: 'fact',
        boxText: 'PFAS耐油剤はセルロース繊維に結合し、最大220℃の高温油を弾く撥水・撥油バリアを形成します。'
      },
      {
        title: '2. 金属サセプターの熱力学と溶融バター脂質への化学溶出',
        content: 'ポップコーン袋の底にある灰色の長方形シートは「マイクロ波サセプター」と呼ばれます。PETフィルム上に真空蒸着された厚さわずか5〜10ナノメートルのアルミニウム金属層で構成され、電子レンジのマイクロ波を受けると渦電流により90秒以内に200℃〜235℃（392°F〜455°F）まで急加熱します。豆と油脂がこの高温部で熱せられると、高温油脂が強力な親脂性溶媒として作用し、紙に含まれる遊離PFASの最大85%が食品へと急速に溶出します。',
        type: 'warning',
        boxText: 'サセプターは90秒で200℃を超えます。高温の溶融バターが溶媒となり、フッ素化合物を大量に食品側へ抽出します。'
      },
      {
        title: '3. 加圧蒸気プームの噴出と揮発性フッ素エアロゾルの吸入リスク',
        content: '経口摂取による慢性的な蓄積に加え、調理直後には呼吸器からの急性吸入リスクが存在します。豆の水分が気化して膨らんだ袋の内部には、90℃〜95℃の高圧水蒸気、気化したフルオロテロマーアルコール（FTOH）、ジアセチル香料が充満しています。加熱終了直後に袋を破ると高圧蒸気プームが勢いよく噴出します。これを吸い込むと肺胞深部まで有害物質が届き、血流に乗ってPFOAなどの難分解性化合物へと酸化されます。',
        type: 'danger',
        boxText: '開封時の蒸気を絶対に吸い込まないでください！顔を近づけず外側に向けて開き、60秒間蒸気を逃がしましょう。'
      },
      {
        title: '4. 規制動向：米FDAによる2024年自主廃止と国際市場の現実',
        content: '2024年2月、米国食品医薬品局（FDA）は主要メーカーが食品包装用PFAS耐油剤の販売を自主的に全廃したと発表しました。しかし、消費者には以下の留意点があります。1）施行前に製造された流通在庫が依然として市場に存在すること、2）輸入製品やノーブランド品には規制対象外の国で製造されたものがあること、3）欧州食品安全機関（EFSA）の耐容週間摂取量（TWI：4.4 ng/kg体重/週）は極めて厳格であり、微量の残存溶出でも容易に基準を超過することです。',
        type: 'info',
        boxText: '米国での廃止が進む一方、過去の流通在庫や一部の輸入品には依然としてPFAS残留のリスクが残ります。'
      },
      {
        title: '5. PFAS・マイクロプラスチックゼロの安全な代替調理法',
        content: 'ポップコーンを安全に楽しむための優れた代替品があります。1）食品グレードのプラチナシリコン製電子レンジ用ボウル：油を使わず乾燥コーン豆を入れて2.5分加熱するだけでフッ素化合物ゼロのポップコーンが完成します。2）熱風式エアーポップコーンメーカー：油を使わず遠心熱風で物理的に豆を弾けさせます。3）ガス火・IH対応のステンレス製ハンドル付きポップコーン鍋：アボカドオイル等を使用し、合成化学物質ゼロで美味しく調理できます。',
        type: 'tip',
        boxText: 'プラチナシリコン製ボウルやステンレス製鍋を活用すれば、PFASや使い捨てゴミの心配なく楽しめます。'
      }
    ],
    conclusion: '電子レンジ用ポップコーン袋は、超高温の電磁加熱と残留性化学物質が隣り合わせの構造です。繰り返し使えるプラチナシリコン製ボウルやステンレス鍋に切り替えることで、家庭内のフッ素化合物吸入・摂取リスクを完全に排除できます。',
    faqs: [
      {
        question: '市販の電子レンジ用ポップコーン袋にはすべてPFASが含まれていますか？',
        answer: 'かつてはほぼすべての製品にPFAS耐油剤が使われていました。2024年のFDA規制以降、大手国内ブランドは植物由来バリアへ切り替えを進めていますが、流通在庫や一部輸入品にはフッ素加工が残っている可能性があります。'
      },
      {
        question: '袋の底にある灰色のシートは何ですか？',
        answer: 'マイクロ波サセプターと呼ばれる極薄のアルミニウム蒸着シートです。マイクロ波を吸収して表面温度を200℃（392°F）以上に急上昇させ、豆を一気に破裂させます。'
      },
      {
        question: '開封時に出る湯気を吸い込むと身体に悪いですか？',
        answer: 'はい。開封直後の蒸気には気化したフルオロテロマーアルコール（FTOH）や香料のジアセチルが含まれており、気道を刺激し体内に蓄積する恐れがあります。袋を開ける際は顔から離してください。'
      },
      {
        question: '普通の茶色い紙袋を使って電子レンジでポップコーンを作っても平気ですか？',
        answer: '農務省（USDA）や消防機関はクラフト紙袋のレンジ加熱を推奨していません。未滅菌の再生紙にはインクや金属微粒子が含まれる場合があり、過熱により発火する危険があります。'
      },
      {
        question: '自宅でポップコーンを作る最も安全な方法は何ですか？',
        answer: '100%食品グレードのプラチナシリコン製レンジ調理ボウルを使用するか、ステンレス製の鍋にアボカド油やギーを入れて直火で作るのが最も安全で無害な方法です。'
      }
    ],
    relatedTools: [
      {
        name: '電子レンジ用ポップコーン袋 PFAS・PFOA界面活性剤移行シミュレーター',
        url: '/ja/tools/microwave-popcorn-pfas-modeler/'
      },
      {
        name: 'プラスチック識別マーク（#1〜#7）電子レンジ・食洗機安全性チェッカー',
        url: '/ja/tools/plastic-code-checker/'
      },
      {
        name: '調理器具底面シンボル・電子レンジ安全マーク解読チェッカー',
        url: '/ja/tools/kitchen-symbol-decoder/'
      }
    ]
  },
  {
    slug: 'cast-iron-soap-myth-seasoning-chemistry',
    title: '食器用洗剤でスキレットがダメになる？油の熱重合ポリマーと強アルカリ苛性ソーダの真実',
    excerpt: '鋳鉄スキレットに中性洗剤を使っても大丈夫？19世紀の手作り苛性ソーダ石鹸に由来する迷信の真相、油の共有結合架橋ポリマー化学、科学的にお手入れする4ステップを解説。',
    date: wave42Date,
    readTime: '8 分で読める',
    author: 'IsItKitchenSafe',
    intro: 'キッチンの言い伝えの中で「鋳鉄スキレットに洗剤を使ってはならない」ほど熱心に信じられているものはありません。洗剤を一滴でも垂らせば長年育てた黒い油膜が溶け出し、一瞬で錆び付いてしまうと信じられてきました。しかし材料科学と有機化学の視点で見れば、この説は完全に過去の誤解です。「洗剤禁止」のルールは100年以上前、未反応の苛性ソーダ（水酸化ナトリウム）を多く含む強力なアルカリ石鹸が使われていた時代に生まれたものです。現代の食器用洗剤は中性（pH 7前後）の温和な合成界面活性剤であり、強固に架橋重合した高分子油膜を溶かすことは化学的に不可能です。分子レベルで見る正しいスキレットのお手入れ法を解説します。',
    sections: [
      {
        title: '1. 迷信の歴史的起源：苛性ソーダ（NaOH）によるアルカリ鹸化分解',
        content: '19世紀から20世紀初頭にかけて、家庭用石鹸は木灰から抽出したアルカリ灰汁（水酸化ナトリウムや水酸化カリウム）と動物の脂を煮詰めて手作りされていました。当時の石鹸は配合が不正確で、pH 12〜14の遊離強アルカリが大量に残存していました。これでスキレットを洗うと、強アルカリが油脂のエステル結合を加水分解（鹸化）し、保護油膜を剥ぎ取ってしまいました。これが現代まで続く「洗剤厳禁」のルーツです。',
        type: 'fact',
        boxText: '昔の手作り石鹸には強アルカリの苛性ソーダ（pH > 12）が含まれ、油脂を鹸化して溶かしました。これが迷信の発端です。'
      },
      {
        title: '2. 現代の食器用洗剤：中性界面活性剤ミセルと強アルカリの違い',
        content: '現代の食器用液体洗剤は化学的には石鹸ではなく合成界面活性剤です。肌に優しいアニオン性・非イオン性界面活性剤を主成分とし、pH 6.5〜7.5の中性に緩衝されています。界面活性剤はミセル化によって表面の浮いた油汚れを物理的に包み込んで洗い流すだけであり、強固な炭素-炭素共有結合を切断する化学的能力は一切持ち合わせていません。',
        type: 'info',
        boxText: '現代の食器用中性洗剤は浮いた油汚れを包み込むだけで、焼き付いた重合油膜を溶かす力はありません。'
      },
      {
        title: '3. スキレットの油膜の正体：ラジカル熱重合による三次元架橋ポリマー',
        content: '適切にシーズニングされたスキレットの表面にあるのは、単なる生の油ではなく不溶性の高分子有機ポリマーです。リノール酸やリノレン酸を豊富に含む乾性油を煙点以上の高温で鉄（触媒金属）に触れさせると、熱酸化とフリーラジカル付加重合が起こります。分子同士が三次元網目状に架橋結合し、鉄の結晶微細孔（$Fe_3O_4$）に強固にアンカー固定されます。この重合膜は水や中性洗剤に対して極めて高い耐性を誇ります。',
        type: 'tip',
        boxText: 'シーズニング油膜は鉄の微細孔に共有結合したプラスチック状の架橋高分子であり、落ちやすい生油ではありません。'
      },
      {
        title: '4. スキレットを本当に壊す3大脅威：食洗機、つけ置き、長時間の酸煮込み',
        content: '中性洗剤での手洗いは無害ですが、以下の3つの行為はスキレットに致命的なダメージを与えます。1）食器洗い乾燥機：食洗機用タブレットは強アルカリ性塩（pH 10.5〜11.5）を含み、70℃以上の高温高圧ジェットで油膜を侵食し金属を剥き出しにします。2）シンクでの長時間のつけ置き：微小な隙間から水分が侵入し、急速なガルバニック腐食（赤サビ）を引き起こします。3）酸性料理の長時間煮込み：トマトソースやワインを何時間も煮込むと酸が油膜を劣化させ鉄イオンが溶け出します。',
        type: 'danger',
        boxText: '食洗機の強アルカリと水につけ置く行為は短時間でサビを生みます。洗剤で手洗いして直ちに火で乾かすのが鉄則です。'
      },
      {
        title: '5. 科学的に正しいスキレットのお手入れ4ステップ',
        content: 'スキレットを一生モノとして衛生的に保つ手順はシンプルです。1）調理後すぐに洗う：ぬるま湯、柔らかいスポンジやチェーンメイルブラシを使い、中性洗剤を2〜3滴垂らして酸化した古い油や食品汚れを洗い流します。2）十分にすすぐ。3）直火で完全に水分を飛ばす：タオルで拭いた後、コンロの弱中火に2〜3分かけて鉄の微細孔に残る水分を完全に蒸発させます。4）薄く油を塗る：温かいうちに高煙点油（キャノーラ油等）を数滴垂らし、キッチンペーパーでマットな質感になるまで拭き上げます。',
        type: 'fact',
        boxText: '中性洗剤で汚れを落とし、水ですすいだらコンロの火にかけて水分を飛ばし、温かいうちに油を薄く塗り込みます。'
      }
    ],
    conclusion: '「洗剤で油膜が落ちる」というのは苛性ソーダ時代のお話です。現代の中性洗剤は酸化した油の汚れや雑菌を取り除き、スキレットを常に衛生的に保ちます。中性洗剤で洗い、火で水分を完全に飛ばして末永く愛用してください。',
    faqs: [
      {
        question: 'スキレットを毎日食器用洗剤で洗っても平気ですか？',
        answer: '全く問題ありません。ぬるま湯と中性洗剤で洗うことで酸化した古い油や雑菌を除去でき、高温で強固に焼き付いたシーズニング油膜はびくともしません。'
      },
      {
        question: 'なぜ昔の人は洗剤を使ってはいけないと言ったのですか？',
        answer: '昔の手作り石鹸には苛性ソーダ（水酸化ナトリウム）が過剰に含まれており、pH 12以上の強アルカリが油を鹸化して溶かしてしまったためです。現代の洗剤は中性です。'
      },
      {
        question: 'スキレットを食洗機に入れてしまうとどうなりますか？',
        answer: '食洗機洗剤に含まれる強アルカリ塩（pH 11）が油膜を強力に剥がし、高温の蒸気によって1回の洗浄で全体が真っ赤にサビ付いてしまいます。食洗機は絶対に使用しないでください。'
      },
      {
        question: 'サビを防ぐための確実な乾燥方法は？',
        answer: '布巾で拭くだけでは不十分です。コンロに乗せて弱火で2〜3分加熱し、鉄の微細な隙間に入り込んだ水分を完全に蒸発させることが最大のサビ防止策です。'
      },
      {
        question: 'トマトソースなどの酸味のある料理を作っても大丈夫ですか？',
        answer: '油膜がしっかり定着したスキレットなら10〜15分程度の短い調理は問題ありません。ただし1時間以上煮込むと酸が油膜を痛め、料理に強い鉄の味が移ることがあります。'
      }
    ],
    relatedTools: [
      {
        name: 'スキレットシーズニング剥がれ・サビ修復トラブルシューター',
        url: '/ja/tools/cast-iron-seasoning-troubleshooter/'
      },
      {
        name: '鋳鉄スキレット油膜熱重合反応速度・耐熱解析アナライザー',
        url: '/ja/tools/cast-iron-seasoning-polymerization-analyzer/'
      },
      {
        name: '食器用洗剤と食洗機用タブレットの鋳鉄・炭素鋼への影響ガイド',
        url: '/ja/blog/dish-soap-cast-iron-carbon-steel-dishwasher-pod-safety/'
      }
    ]
  },
  {
    slug: 'canned-food-bpa-liners-acidic-storage-safety',
    title: '缶詰の保存安全性：内面BPA/BPSエポキシ塗装、開封後冷蔵でのスズ溶出、へこみ缶のボツリヌス菌リスク',
    excerpt: '開封後の缶詰をそのまま冷蔵庫に入れるのは危険？酸素侵入によるスズ（ブリキ）の酸性電解溶出メカニズム、EFSAによるBPA許容量引き下げ、へこみ缶の安全基準を解説。',
    date: wave42Date,
    readTime: '9 分で読める',
    author: 'IsItKitchenSafe',
    intro: '缶詰は121℃（250°F）の高温高圧による商業的レトルト殺菌により、保存料を一切使わずに数年間の長期常温保存を可能にした優れた食品容器です。しかし、スズメッキ鋼板（ブリキ）、内部のポリマーエポキシ塗装、二重巻締め構造によって成り立つこの精密な容器は、開封された瞬間に化学的・物理的性質が激変します。使い残したトマトやフルーツの缶詰をそのまま冷蔵庫にしまう家庭は少なくありませんが、空気中の酸素が触れることで金属スズの急速な電解溶出が始まります。また、特売のへこみ缶には軽微なキズから致死的なボツリヌス菌の危険まで潜んでいます。知っておくべき缶詰の安全知識を解説します。',
    sections: [
      {
        title: '1. 缶詰の金属材料学：ブリキ鋼板と内面エポキシ樹脂ライニング',
        content: '現代の食品缶詰は純粋なスズや無垢の鉄ではありません。厚さ0.15〜0.25mmの極薄冷延鋼板の両面に、厚さわずか1〜5ミクロンの高純度スズ（Sn）を電解メッキした「ブリキ」で作られています。さらに食品中の有機酸や硫化物による腐食を防ぐため、内面には高分子塗料が吹き付けられています。長年にわたり、ビスフェノールA（BPA）とエピクロロヒドリンを主原料とするエポキシフェノール樹脂が、優れた耐酸性・耐熱性から世界標準として用いられてきました。',
        type: 'fact',
        boxText: '缶詰は超薄型スズメッキ鋼板にポリマー樹脂をコーティングした複合材料で、金属と食品を隔離しています。'
      },
      {
        title: '2. 開封後の缶詰をそのまま冷蔵庫に入れてはならない理由：酸素とスズ溶出',
        content: '密封状態の缶詰内部は脱気真空されており、酸素が存在しないためスズの腐食はほとんど進みません。しかしフタを開けた瞬間に大量の酸素が侵入します。トマトやパイナップルなど酸性の食品（pH 4.5未満）を缶のまま冷蔵庫で保管すると、空気中の酸素が陰極反応を引き起こし、スズが急速に電解溶出します（2Sn + O2 + 4H+ -> 2Sn2+ + 2H2O）。48時間以内にスズ濃度が安全基準（200 mg/kg）を超え、不快な金属味だけでなく急性吐き気や胃腸炎の原因になります。',
        type: 'danger',
        boxText: '開けた缶詰をそのまま冷蔵庫に入れないでください！酸素が触れると24〜48時間で酸性食品にスズが急速溶出します。'
      },
      {
        title: '3. BPA・BPSと欧州EFSAによる最新の耐容量大幅引き下げ',
        content: '環境ホルモン（内分泌かく乱物質）としてのBPAへの懸念から、「BPAフリー」としてビスフェノールS（BPS）やポリエステル塗料への移行が進んでいます。しかし毒性学的研究により、BPSもBPAと同等以上のホルモンかく乱性を持つことが判明しています。2023年4月、欧州食品安全機関（EFSA）はBPAの耐容一日摂取量（TDI）を従来の4 µg/kgから0.2 ng/kg（2万分の1）へと劇的に引き下げ、免疫系への影響を警告しました。',
        type: 'warning',
        boxText: 'EFSAは2023年にBPAの許容量を2万分の1に引き下げました。日常的に使うトマト水煮などはガラス瓶詰をおすすめします。'
      },
      {
        title: '4. へこみ缶の安全判定基準：無害な浅いキズとボツリヌス菌リスク',
        content: 'へこんだ缶詰がすべて危険なわけではありません。食品安全検査官は以下の基準で判別します。1）フチや継ぎ目（シーム）のへこみ、鋭利な折れ目：巻締め部分が歪むと気密性が失われ細菌が侵入します。2）缶のフタが膨張している：ボツリヌス菌などの嫌気性菌がガスを発生させて繁殖している致命的な赤信号です。3）指が入るほど深いへこみ：内部のエポキシ塗膜がひび割れ、内部腐食が進んでいます。4）継ぎ目を避けた缶胴のなだらかな浅いへこみ：安全に召し上がれます。',
        type: 'danger',
        boxText: '継ぎ目にへこみがある缶、尖った折れ目、フタが膨らんだ缶は即座に廃棄してください。ボツリヌス毒素は無臭で致死性です。'
      },
      {
        title: '5. 科学的に正しい缶詰食品の4ステップ安全ルール',
        content: '家庭での安全を徹底するためのルール：1）開ける前の外観チェック：サビ、液漏れ、穴あけ時の液体の噴出がないか確認します。2）フタを洗う：缶切りを入れる前に上部を流水と洗剤で洗い、保管中のホコリや汚れが食品内に落ちるのを防ぎます。3）開けたらすぐに移し替える：残った食品は金属缶のまま放置せず、すぐにガラス製やBPAフリーの密閉容器に移し替えて冷蔵します。4）保存期限を守る：容器に移した残り物は冷蔵庫（4℃以下）で3〜4日以内に食べ切りましょう。',
        type: 'tip',
        boxText: '開ける前にフタを洗い、残った分は開缶後すぐにガラス密閉容器に移してから冷蔵庫に入れてください。'
      }
    ],
    conclusion: '缶詰の優れた安全性は完全な気密性に支えられています。フチが損傷した缶を避け、開ける前にフタを洗い、開封後はすぐにガラス容器へ移し替えることで、重金属の溶出や細菌リスクを確実に防ぐことができます。',
    faqs: [
      {
        question: '使い残した缶詰をそのまま冷蔵庫に入れてはいけないのはなぜですか？',
        answer: '缶を開けると空気が入り、酸素が酸性食品（トマトやフルーツ）と反応して内面のスズを急速に溶出させるためです。金属スズが溶け出すと強い金属臭がつき吐き気や腹痛の原因になります。'
      },
      {
        question: 'へこんでいる缶詰はすべて捨てるべきですか？',
        answer: 'いいえ。缶の側面の滑らかな浅いへこみなら安全です。ただしフチ（継ぎ目）にへこみがあるもの、尖った折れ目があるもの、フタが膨らんでいるものは絶対に食べてはいけません。'
      },
      {
        question: '加熱調理すればボツリヌス菌の毒素は無毒化できますか？',
        answer: 'ボツリヌス毒素自体は熱に弱く、100℃で10分間しっかり沸騰加熱すれば分解されます。しかし耐熱性の芽胞は通常の沸騰では死滅せず、121℃の圧力加熱が必要です。'
      },
      {
        question: '「BPAフリー」と書いてある缶詰なら絶対に安心ですか？',
        answer: 'BPAの代わりに使われるBPSやBPFにも同様のホルモンかく乱性が指摘されています。より安全性を重視するなら、ガラス瓶入りの製品やポリエステル系ライニングの製品を選ぶのが賢明です。'
      },
      {
        question: 'ガラス容器に移し替えた缶詰の残り物は冷蔵庫で何日持ちますか？',
        answer: '密閉ガラス容器に移した場合、スープや肉、豆などの低酸性食品は冷蔵庫で3〜4日、トマトソースなどの高酸性食品は5〜7日間保存可能です。'
      }
    ],
    relatedTools: [
      {
        name: 'へこんだ缶詰とボツリヌス菌の危険度判定ガイド',
        url: '/ja/blog/dented-cans-garlic-in-oil-botulism-kitchen-safety-guide/'
      },
      {
        name: 'プラスチック識別マーク（#1〜#7）電子レンジ・食洗機安全性チェッカー',
        url: '/ja/tools/plastic-code-checker/'
      },
      {
        name: 'USDA規格 残り物・冷蔵庫保存期限カウントダウン計算機',
        url: '/ja/tools/leftover-shelf-life-calculator/'
      }
    ]
  }
];

// Append guides to each language file
const dataDir = path.join(__dirname, '../src/data');
appendGuides(path.join(dataDir, 'blog.json'), enGuides);
appendGuides(path.join(dataDir, 'blog.es.json'), esGuides);
appendGuides(path.join(dataDir, 'blog.pt.json'), ptGuides);
appendGuides(path.join(dataDir, 'blog.zh-cn.json'), zhGuides);
appendGuides(path.join(dataDir, 'blog.ja.json'), jaGuides);

console.log('Successfully generated and appended Wave 42 safety guides across all 5 languages!');
