const fs = require('fs');
const path = require('path');

const waveDate = '2026-11-26';

console.log('=== GENERATING WAVE 80 AUTHORITATIVE SAFETY GUIDES (119 -> 122 across 5 languages) ===');

const guidesEn = [
  {
    slug: 'glass-cooktop-sugar-pitting-razor-scraping-silicone-mat-safety',
    title: 'Glass Cooktop Sugar Spills, Hairline Cracks & Silicone Protector Mats: Why Caramel Tears Pits in Glass, Safe 30° Razor Scraping & 240V Electrocution Rules',
    category: 'appliances',
    excerpt: 'Spilled jam or caramel on a glass stove? Learn why cooling sugar rips craters out of ceramic glass, how to razor-scrape safely at 30°, why silicone protector mats fail on radiant burners, and when a hairline crack becomes a 240V shock emergency.',
    date: waveDate,
    readTime: '17 min read',
    author: 'IsItKitchenSafe',
    intro: 'Smooth-top radiant electric and induction ranges rely on 4 mm thick lithium aluminosilicate (LAS) glass-ceramic panels engineered to survive extreme heating and cooling without cracking. Yet everyday kitchen accidents—especially boiling fruit jam or caramel spills, dropped canned food, dragged cast iron skillets, and misapplied silicone protector mats—remain the #1 cause of permanent craters and sudden cooktop shatter. Even more critically, millions of households keep cooking on "minor" hairline cracks without realizing that live 240-volt, 30-to-50-amp heating ribbons and inverter circuits sit millimeters underneath the glass. Understanding differential contraction sugar spalling, safe 30-degree razor scraping, induction vs. radiant mat limits, and immediate breaker isolation protects both your cooktop and your household.',
    sections: [
      {
        title: 'Why Boiling Sugar, Caramel & Jam Rip Pits Straight Out of Glass Cooktops (Spalling Physics)',
        content: 'Boiling sucrose, honey, fruit preserves, and maple syrup create irreversible crater-like divots—known in ceramic engineering as thermal contraction spalling—if allowed to cool on the cooking zone. Above 160°C (320°F), molten sugar dehydrates and forms direct chemical coordination bonds with silicate (Si–O–Si) groups at the surface of Schott Ceran or EuroKera glass-ceramic. While LAS glass-ceramic has near-zero thermal expansion (α ≈ 0.15 × 10⁻⁶ K⁻¹), caramelized sugar shrinks over 100 times faster (α ≈ 35 × 10⁻⁶ K⁻¹) as it solidifies. That mismatch generates >80 MPa of interfacial shear stress—pulling small chunks of glass cleanly out of the surface and creating permanent Griffith stress-concentration pits.',
        type: 'warning',
        boxText: 'SUGAR SPALLING RULE: Never let molten sugar, jam, or caramel cool on a ceramic cooktop. Because caramel contracts >100× faster than glass-ceramic, cooling sugar physically tears glass craters out of the surface.'
      },
      {
        title: 'Step-by-Step 30° Hot Razor Scraping Protocol (And When NOT to Use Vinegar or Baking Soda)',
        content: 'To prevent pitting after a sugary boilover, act immediately while the burner surface is still hot: switch off the heat, put on a heavy insulated oven mitt, and hold a flat, dedicated single-edge metal razor blade scraper (never a utility knife tip or corner edge) at a shallow 30-degree angle to the glass. Gently push the molten syrup off the hot zone onto a cool glass margin or onto a damp stainless spatula. Once cooled to warm, polish the remaining haze using dedicated non-abrasive ceramic cooktop cream (calcium carbonate/silicate suspension). Never scrape with the corner of a razor blade, steel wool, or pumice stones, and never dump ice water onto a hot burner—even small scratches act as Griffith flaws that concentrate tensile thermal shock.',
        type: 'tip',
        boxText: 'SAFE SCRAPING: Wear an oven mitt and shave hot sugar off immediately using a flat single-edge razor held at a shallow 30° angle—never wait until cool and never dig in with blade corners.'
      },
      {
        title: 'Silicone Cooktop Protector Mats: Safe on Induction (<230°C), Fire & Melt Hazard on Radiant',
        content: 'Social media kitchen hacks frequently promote silicone cooktop mats to protect glass stoves from cast iron scratches. Whether that hack is safe depends entirely on your stove technology. Electromagnetic induction cooktops heat only the ferromagnetic cookware base via eddy currents; the glass underneath heats slowly by conduction, making thin platinum-cured fiberglass-reinforced silicone mats safe below 230°C (450°F) during normal simmering (never dry-sear above 230°C). By contrast, radiant electric coil glass cooktops glow red-hot underneath the glass at 400°C–550°C+. Placing any silicone mat onto a radiant burner immediately pyrolyzes and melts the polymer onto the glass, releasing irritating siloxane smoke and fusing permanently.',
        type: 'warning',
        boxText: 'INDUCTION VS. RADIANT: Silicone protector mats are ONLY for induction cooktops (<230°C/450°F). On glowing radiant electric glass stoves, silicone mats rapidly scorch, smoke, and fuse onto the panel.'
      },
      {
        title: 'Dropped Soup Cans & Cast Iron Quartz Grit: Preventing Hertzian Cone & Griffith Cracks',
        content: 'Over 65% of through-thickness glass cooktop cracks start with either overhead cabinet drops or sliding heavy cookware over mineral grit. A 16 oz (450g) soup can falling 50 cm concentrates ~2.2 Joules onto a <1 mm² rim edge, generating >900 MPa Hertzian contact pressure that drives a 55°–65° cone crack straight through the 4 mm panel. Similarly, sliding a 4–7 kg raw cast iron skillet over trapped quartz dust or coarse sea salt (Mohs hardness 7.0 vs. glass-ceramic 6.2) carves 50–100 μm Griffith notches that cut impact resistance by more than half. Relocate heavy cans away from upper range cabinets and lift—never slide—cast iron and stoneware.',
        type: 'fact',
        boxText: 'IMPACT & ABRASION: A 450g can falling 50 cm hits with >900 MPa Hertzian rim pressure, while sliding cast iron over Mohs-7 quartz salt/sand carves micro-notches that halve glass strength.'
      },
      {
        title: 'Why You Must NEVER Cook on a Hairline Crack: 240V / 50-Amp Liquid Seepage Electrocution',
        content: 'Unlike gas burners, radiant and induction glass cooktops conceal energized 240-volt split-phase power circuits, induction copper work coils, and high-amperage ribbon terminals drawing 30 to 50 Amps (7.2–12 kW) directly below the 4 mm glass pane. Intact glass-ceramic acts as a solid dielectric insulator. Once any through-thickness or hairline crack opens, salty pasta water, soup boilovers, oil, or cleaning spray seep into live 240V busbars, triggering violent arc-flash short circuits, electrical fires, or energizing wet stainless pots and surrounding stone countertops. Immediately switch off the dedicated double-pole 240V range breaker at your main panel and arrange glass-top replacement before using any burner.',
        type: 'warning',
        boxText: '240V EMERGENCY: Never cook on a cracked glass cooktop—not even on an undamaged side burner. Shut off the 240V range circuit breaker immediately to prevent liquid-seepage arc flashes and electrocution.'
      }
    ],
    conclusion: 'Protecting a ceramic glass cooktop comes down to four non-negotiable habits: keep heavy cans out of overhead cabinets, lift cast iron instead of sliding it over salt or grit, shave molten sugar spills immediately while hot at a 30° blade angle, reserve silicone mats strictly for low-to-medium induction use, and immediately shut off the 240V breaker if any crack appears.',
    faqs: [
      {
        question: 'Can I keep cooking on a glass stove if the hairline crack is far away from the burner I use?',
        answer: 'No. Thermal cycling flexes the entire 4 mm glass-ceramic sheet, rapidly driving any corner or margin crack inward across active zones, and boilovers or wet dishcloth wipes easily travel along the surface into the crack to reach live 240V wiring underneath. Shut off the 240V range breaker and replace the glass top.'
      },
      {
        question: 'Why did boiling jam leave tiny missing chips or pits in my glass stove?',
        answer: 'Molten sucrose chemically bonds with the glass silicate surface above 160°C. As it cools, caramel shrinks over 100 times faster than near-zero-expansion ceramic glass, exerting >80 MPa shear force that literally tears small glass craters out of the cooktop (spalling).'
      },
      {
        question: 'How do you safely scrape burnt sugar off a glass cooktop without scratching it?',
        answer: 'While the zone is still hot (burner off, wearing an insulated oven mitt), hold a flat single-edge metal razor blade scraper at a 30-degree angle and gently push the liquid sugar off the burner onto a cool margin or damp towel. Never use a blade corner or serrated knife.'
      },
      {
        question: 'Are silicone protector mats safe on electric glass cooktops?',
        answer: 'Only on magnetic induction cooktops below 230°C (450°F), never during high-heat searing and NEVER on radiant electric glass cooktops where glowing coil elements exceed 400°C–550°C and melt silicone directly onto the glass.'
      },
      {
        question: 'Can you repair a cracked glass cooktop with epoxy or windshield resin?',
        answer: 'No. Epoxy and windshield resins degrade, outgas, and fail electrically under 200°C–550°C cooking heat, and cannot restore dielectric 240V insulation or structural tensile strength across the 4 mm panel. Only complete OEM glass-ceramic top replacement is safe.'
      }
    ],
    relatedTools: [
      { name: 'Glass Cooktop Point-Load & Thermal Shock Fracture Simulator', url: '/tools/glass-cooktop-fracture-simulator/' },
      { name: 'Induction Cooktop Delamination & Acoustic Micro-Crack Modeler', url: '/tools/induction-cooktop-delamination-modeler/' },
      { name: 'Induction Cookware Compatibility & Magnet Test Checker', url: '/tools/induction-cookware-compatibility-checker/' }
    ]
  },
  {
    slug: 'imported-aluminum-brass-cookware-lead-fda-2026-safety-guide',
    title: 'Imported Aluminum, Brass & Hindalium Cookware Lead Warnings (2025–2026 FDA Alerts): Why Kadhais & Alloy Pots Leach Lead, XRF vs. Swab Tests & Safe Stainless Swaps',
    category: 'materials',
    excerpt: 'Concerned about FDA lead warnings on imported aluminum, brass, Hindalium, and Indolium cookware? Learn why recycled scrap-metal kadhais leach lead during acidic simmering, why hardware-store swabs give false negatives, and safe 304/316 steel swaps.',
    date: waveDate,
    readTime: '18 min read',
    author: 'IsItKitchenSafe',
    intro: 'In a rolling series of high-priority safety alerts expanding throughout 2025 and 2026, the U.S. Food and Drug Administration (FDA) and municipal public health laboratories (including Public Health – Seattle & King County) warned consumers and restaurants to stop cooking with numerous imported metal cookware lines—especially aluminum, brass, and proprietary "Hindalium" or "Indolium" pots, pans, kadhais/karahis, topes, and idli steamers. Testing confirmed that affected batches—including products associated with Rashko Baba Co. Ltd., Saraswati Strips Pvt. Ltd. (Tiger White kadhais), IKM-labeled items, and unbranded specialty imports—leached hazardous concentrations of lead directly into simulated foods. Because the CDC affirms there is no safe blood lead level in children or adults, understanding how secondary scrap smelting introduces lead into cookware alloys, why home swab kits fail on metal pans, and how to upgrade safely to certified 304/316 stainless steel eliminates hidden heavy-metal exposure.',
    sections: [
      {
        title: '2025–2026 FDA Safety & Import Alerts: Hindalium, Indolium, Brass & Unbranded Kadhais',
        content: 'Unlike regulated commercial foodservice cookware manufactured from virgin food-grade AA3003 or AA1100 aluminum alloys, several imported artisanal and budget cookware batches placed under FDA public warnings and Import Alerts—including Hindalium/Indolium aluminum-magnesium-manganese-iron-alloy pots, brass cooking vessels, pressure cookers, and deep-frying kadhais from exporters such as Rashko Baba Co. Ltd. and recalled Tiger White / IKM lots—were found to release high levels of soluble lead. FDA laboratory extractions using weak organic acids (mimicking everyday tomato, tamarind, yogurt, or lemon curries) showed migration far exceeding reference dietary thresholds, prompting explicit FDA guidance to discard affected pots rather than donating or reselling them.',
        type: 'warning',
        boxText: 'FDA COOKWARE ALERT: Stop using uncertified or FDA-listed imported aluminum, brass, Hindalium, or Indolium kadhais and pots. Discard suspect items permanently—never donate them to thrift stores.'
      },
      {
        title: 'Secondary Scrap Smelting Physics: How Lead Ends Up Inside Aluminum & Brass Alloys',
        content: 'How does lead enter an aluminum pot or brass steamer? In unregulated secondary scrap foundries, low-cost cookware is cast by melting mixed post-consumer industrial scrap—including salvaged automotive radiators, solder joints, wheel weights, zinc die-cast hardware, and leaded brass plumbing fittings (typically containing 1%–3% intentional lead for machinability). Because lead has low solid solubility in aluminum and forms micro-segregated lead-rich grain boundary inclusions, simmering mildly acidic or salted liquids (pH 3.5–5.5) rapidly corrodes those surface inclusions, dissolving Pb²⁺ ions directly into broths, dals, and tomato reductions—even without visible rust or discoloration.',
        type: 'fact',
        boxText: 'ALLOY METALLURGY: Unregulated scrap-melted aluminum and brass cookware traps lead at grain boundaries. Acidic tomato, tamarind, or salted broths dissolve Pb²⁺ directly into food without changing taste.'
      },
      {
        title: 'CDC Zero Safe Blood Lead Standard: Pediatric Neurotoxicity & Adult Risks',
        content: 'The U.S. Centers for Disease Control and Prevention (CDC) and the World Health Organization (WHO) state unequivocally that no safe blood lead level (BLL) has been identified in children, setting the CDC blood lead reference value at 3.5 µg/dL purely as an action trigger rather than a safety floor. Lead mimics calcium in developing neurons, impairing synaptic pruning, lowering IQ, and causing attention and behavioral deficits in infants and fetuses, while chronic adult exposure elevates hypertension, renal toxicity, and reproductive risk. If children or pregnant family members regularly ate acidic stews prepared in suspect imported alloy cookware, consult a healthcare provider for a simple venous blood lead test.',
        type: 'warning',
        boxText: 'NO SAFE LEVEL: There is no safe blood lead threshold, particularly for infants, children, and pregnant individuals. Discuss a venous blood lead screening with a clinician if suspect cookware was used daily.'
      },
      {
        title: 'Why Home Sodium-Sulfide Lead Swabs Fail on Metal Cookware vs. Lab XRF & ICP-MS',
        content: 'Many consumers reach for inexpensive hardware-store rhodizonate or sodium sulfide surface swab kits designed for residential lead-based paint. Unfortunately, FDA and state public health testing demonstrates that over-the-counter paint swabs frequently yield false negatives (missing real alloy lead bound inside passive aluminum oxide layers) AND false positives (reacting with copper, zinc, bismuth, or barium in metal alloys). Accurate screening requires either calibrated handheld X-ray Fluorescence (XRF) alloy analyzers (checking bulk lead % before extraction) paired with standardized Inductively Coupled Plasma Mass Spectrometry (ICP-MS) acetic acid leachate testing per ASTM C738 / FDA CPG standards.',
        type: 'tip',
        boxText: 'TEST LIMITATION: Hardware-store paint swabs cannot reliably verify metal pots—alloy oxide layers trigger false negatives while copper/zinc cause false positives. Only XRF and acid-leach ICP-MS confirm safety.'
      },
      {
        title: 'Certified Heavy-Metal-Free Replacements: 304 (18/8) / 316 Stainless, Cast Iron & Pure Glass',
        content: 'Replacing questionable imported alloy cookware does not require abandoning traditional cooking techniques. Heavy-gauge AISI 304 (18/8) or molybdenum-stabilized 316 (18/10) tri-ply stainless steel kadhais, saucepans, and pressure cookers contain zero added lead and maintain passive chromium-oxide resistance across acidic tomato and tamarind simmers. Pre-seasoned virgin cast iron (such as traceable US or European foundry lines) and carbon steel woks deliver high-heat searing without non-ferrous scrap lead risk, while Type 3.3 borosilicate glass dishes handle acidic baking and long-term refrigerator storage safely.',
        type: 'success',
        boxText: 'SAFE SWAPS: Replace unbranded scrap-alloy aluminum or brass pots with traceable AISI 304/316 tri-ply stainless steel, virgin cast iron, or borosilicate glass—especially for acidic stews and infant meals.'
      }
    ],
    conclusion: 'Because lead-leaching aluminum and brass alloys leave no visible sign or metallic taste, provenance matters: retire unbranded or FDA-flagged imported Hindalium, Indolium, and scrap-brass pots immediately without donating them, avoid relying on residential paint swabs for metal validation, and cook acidic or family meals in traceable 304/316 stainless steel or certified cast iron.',
    faqs: [
      {
        question: 'What is Hindalium or Indolium cookware, and why did the FDA warn about it?',
        answer: 'Hindalium and Indolium are regional commercial names for aluminum-magnesium-manganese-iron cookware alloys popular for kadhais, topes, and idli steamers. While virgin alloy formulations can meet safety specs, FDA and local health testing (2025–2026) uncovered imported batches—likely cast from contaminated recycled metal scrap—that leach hazardous levels of lead into food.'
      },
      {
        question: 'Can I donate suspect imported aluminum or brass pots if I stop using them myself?',
        answer: 'No. Both the FDA and local public health departments explicitly instruct consumers to discard affected lead-leaching cookware so it cannot enter thrift stores, community swaps, or another family’s kitchen.'
      },
      {
        question: 'Do DIY hardware-store lead test swabs work on aluminum, brass, or stainless steel pots?',
        answer: 'No. Paint-focused rhodizonate or sulfide swabs are unreliable on metal cookware: surface aluminum oxide blocks detection (false negatives), while copper, zinc, or tin ions trigger color changes (false positives). Lab XRF and acetic acid ICP-MS leachate analysis are required.'
      },
      {
        question: 'Which foods pull the most lead out of contaminated metal cookware?',
        answer: 'Warm or simmering acidic, salty, or long-cooked foods—such as tomato-based curries, tamarind sauces, lemon-marinated dishes, yogurt gravies, and vinegar reductions—dramatically accelerate Pb²⁺ ion dissolution from contaminated alloys.'
      },
      {
        question: 'What is the safest affordable upgrade for daily high-heat frying and acidic curries?',
        answer: 'Tri-ply clad AISI 304 (18/8) or 316Ti stainless steel cookware from reputable manufacturers adhering to FDA/ASTM/EDQM food-contact standards offers zero lead leaching risk, full dishwasher compatibility, and multi-decade durability.'
      }
    ],
    relatedTools: [
      { name: 'Kitchenware Toxic Leaching & Heavy Metal Scorecard', url: '/tools/toxic-leaching-scorecard/' },
      { name: 'Barcode & Product Packaging Recalls Scanner', url: '/tools/product-recalls-scanner/' },
      { name: 'Stainless Steel Heavy Metal (Nickel & Chromium) Leaching Modeler', url: '/tools/stainless-steel-heavy-metal-leaching-modeler/' }
    ]
  },
  {
    slug: 'bodum-french-press-granitestone-pan-panasonic-toaster-2026-recalls-guide',
    title: 'Late 2026 Kitchen Recalls Guide: 5.9M Bodum French Presses, Granitestone Sauté Pans & Panasonic Toaster Ovens — Carafe Shatter Physics, Handle Ejection & Refund Remedies',
    category: 'appliances',
    excerpt: 'Check if your kitchen is affected by major 2026 CPSC recalls: 5.9 million Bodum glass French presses (Oct 2026), 740,000 Granitestone Diamond Pro Blue sauté pans (Apr 2026), and Panasonic NB-G200 toaster ovens (Jul 2026).',
    date: waveDate,
    readTime: '17 min read',
    author: 'IsItKitchenSafe',
    intro: 'Beyond air fryers and pressure cookers, three major U.S. Consumer Product Safety Commission (CPSC) recalls in 2026 target staples sitting in millions of home kitchens right now: ~5.9 million Bodum replaceable glass-carafe French press coffee makers recalled on October 29, 2026 over laceration and scalding shatter hazards; ~740,000 Granitestone Diamond Pro Blue stainless-steel sauté pans recalled on April 2, 2026 after handle screw caps detached and ejected under heat; and ~11,480 Panasonic NB-G200 electric toaster ovens recalled on July 16, 2026 due to insufficient power-cord fiberglass insulation posing electric shock and fire hazards. Examining the mechanical and thermal failure physics behind each recall—and claiming your exact free repair kit or full refund—eliminates preventable kitchen burns, glass lacerations, and shock risks.',
    sections: [
      {
        title: 'October 29, 2026 CPSC Recall: ~5.9 Million Bodum Glass-Carafe French Presses (Shatter Physics)',
        content: 'On October 29, 2026, the CPSC announced a massive repair recall spanning approximately 5.9 million Bodum 8-cup and 12-cup French press coffee makers featuring replaceable glass carafes—including iconic lines Bistro, Brazil, Caffettiera, Chambord, Crema, Java, Jesper, and Kenya sold from 1974 through October 2026. The underlying fracture mechanism is classic Griffith flaw propagation: stirring coffee grounds inside the thin-walled carafe with a stainless steel spoon abrades microscopic interior surface cracks. When boiling 95°C–100°C water is poured in or plunged, transient hoop tensile stress plus plunger compression triggers sudden shattering, dousing hands in scalding grounds and glass shards. Bodum provides a free plastic stirring spoon and warning label (888-879-8213 / bodumfrenchpressrecall.expertinquiry.com); always discard any carafe showing chips, scratches, or clouding.',
        type: 'warning',
        boxText: 'BODUM RECALL (OCT 2026): ~5.9M 8-cup & 12-cup glass carafes (Chambord, Brazil, Bistro, Java, Kenya & more). Never stir with a metal spoon—claim your free plastic spoon & label via Bodum.'
      },
      {
        title: 'April 2, 2026 CPSC Recall: ~740,000 Granitestone Diamond Pro Blue Sauté Pans (Handle Cap Ejection)',
        content: 'On April 2, 2026, E Mishan & Sons and the CPSC recalled roughly 740,000 Granitestone Diamond Pro Blue stainless-steel 2-piece sauté pan sets (10-inch and 11.5-inch skillets, UPC 0-80313-08131-6) distributed nationwide at Costco, Walmart.com, and Amazon.com between August 2021 and February 2026. During stovetop heating, differential thermal expansion between the handle screw assembly and its decorative metal cap caused pressurized steam/air or mechanical strain inside the hollow handle stud to forcefully pop and eject the metal screw cap across the stove, creating acute eye/face impact and hot-oil burn hazards. Owners must stop using the pans immediately and contact E Mishan (888-230-6698 / GSRecall.com) for a full refund.',
        type: 'warning',
        boxText: 'GRANITESTONE RECALL (APR 2026): 10" & 11.5" Diamond Pro Blue stainless sauté pans (UPC 0-80313-08131-6). Handle screw caps can eject forcefully when heated—stop use and claim a full refund.'
      },
      {
        title: 'July 16, 2026 CPSC Recall: Panasonic NB-G200 Electric Toaster Ovens (Power Cord Insulation Defect)',
        content: 'On July 16, 2026, the CPSC recalled approximately 11,480 Panasonic stainless-steel electric toaster ovens, Model No. NB-G200 (recognizable by bottom temperature control dials), sold via Amazon, Costco.com, and Panasonic.com from October 2024 through April 2026. Inspection revealed that the high-temperature protective fiberglass sleeve did not adequately cover the internal power cord wiring near the heated chassis. Sustained radiant heat exposure embrittles uncovered PVC/elastomer wire insulation, exposing live 120V AC conductors to the metal housing and creating acute electrocution and countertop fire hazards. Unplug affected NB-G200 units immediately and visit shop.panasonic.com/toaster-oven-recall or call 888-943-2391 for a full refund.',
        type: 'warning',
        boxText: 'PANASONIC NB-G200 RECALL (JUL 2026): Unplug immediately. Missing fiberglass sleeve coverage on the power cord creates 120V shock and fire risks—contact Panasonic for a full refund.'
      },
      {
        title: 'Glass Carafe Safety Mechanics: Metal Spoon Micro-Scratches vs. Thermal Shock',
        content: 'Even for non-recalled borosilicate glass French presses, pour-over servers, and glass baking dishes, the Bodum recall underscores a fundamental rule of silicate fracture mechanics: glass has immense compressive strength (>1,000 MPa) but fails rapidly under tension when surface micro-cracks exist. Using a metal spoon (hardness ~5.0–5.5 Mohs) or metal whisk inside a thin glass cylinder initiates 15–40 μm interior flaws directly at the high-tension wall where boiling water creates peak thermal stress. Switching exclusively to smooth wood, bamboo, or platinum silicone stirring spoons—or upgrading to double-walled 304 stainless steel French presses—eliminates shatter risk permanently.',
        type: 'fact',
        boxText: 'GLASS PHYSICS: Metal spoons scratch thin interior glass walls, concentrating boiling-water thermal shock and plunger pressure along Griffith flaws. Stir glass carafes only with silicone, wood, or plastic.'
      },
      {
        title: 'How to Verify UPC Codes, Model Stickers & Claim CPSC Remedies Safely',
        content: 'Check your kitchen in three minutes: (1) Inspect the underside of toaster ovens and coffee makers for exact model numbers (such as NB-G200), (2) Check order receipts or email archives for UPC 0-80313-08131-6 on Granitestone Diamond Pro Blue 2-piece stainless sauté sets, and (3) Verify Bodum French press carafe capacity (8-cup or 12-cup) and inspect the glass cylinder under bright light for hairline stars or spoon marks before discarding damaged glass. Register new small appliances with the manufacturer or scan items in our Product Recalls Scanner so future safety notices reach you immediately.',
        type: 'tip',
        boxText: 'QUICK CHECKLIST: Check appliance underside model tags, verify order UPCs, inspect glass carafes under bright light for spoon scratches, and never resell recalled units.'
      }
    ],
    conclusion: 'From metal spoons weakening glass French press carafes to thermal screw-cap ejection and unshielded appliance cords, 2026 CPSC recalls highlight how small mechanical details drive serious kitchen injuries. Inspect your Bodum French press, Granitestone Diamond Pro Blue sauté pans, and Panasonic NB-G200 toaster oven today, follow official CPSC refund or spoon-replacement remedies, and verify any secondhand kitchenware in our Recalls Scanner.',
    faqs: [
      {
        question: 'Are all Bodum French presses being refunded or replaced under the October 2026 recall?',
        answer: 'No. The October 29, 2026 CPSC recall covering ~5.9 million 8-cup and 12-cup Bodum glass-carafe French presses is a repair recall: consumers are instructed to stop stirring with metal spoons and contact Bodum (888-879-8213 or bodumfrenchpressrecall.expertinquiry.com) for a free plastic stirring spoon and warning label. Any cracked or chipped glass carafe should be discarded immediately.'
      },
      {
        question: 'Which Granitestone pans are included in the April 2026 CPSC recall?',
        answer: 'The April 2, 2026 recall covers ~740,000 Granitestone Diamond Pro Blue stainless-steel 2-piece sauté pan sets (10-inch and 11.5-inch pans) with UPC 0-80313-08131-6 sold at Costco, Walmart.com, and Amazon.com. Consumers receive a full refund by contacting E Mishan via GSRecall.com or 888-230-6698.'
      },
      {
        question: 'Why was the Panasonic NB-G200 toaster oven recalled in July 2026?',
        answer: 'Roughly 11,480 Panasonic NB-G200 stainless-steel electric toaster ovens were recalled on July 16, 2026 because a protective fiberglass sleeve fails to adequately cover the power cord, creating electric shock and fire hazards. Consumers should unplug the oven and request a full refund via shop.panasonic.com/toaster-oven-recall.'
      },
      {
        question: 'Why does stirring with a metal spoon break a borosilicate glass French press?',
        answer: 'Metal spoon edges strike and abrade microscopic Griffith scratches into the interior glass wall. When boiling water expands the inner wall or the plunger applies pressure against grounds, stress concentrates at those scratches and causes sudden catastrophic shattering.'
      },
      {
        question: 'What is the safest shatterproof alternative to a glass French press?',
        answer: 'A double-walled AISI 304 (18/8) stainless steel French press eliminates glass breakage and thermal shock entirely while retaining brew heat cleanly without plastic food contact.'
      }
    ],
    relatedTools: [
      { name: 'Barcode & Product Packaging Recalls Scanner', url: '/tools/product-recalls-scanner/' },
      { name: 'Appliance Thermal Shock & Glass Shatter Simulator', url: '/tools/thermal-shock-simulator/' },
      { name: 'Glass Cooktop Point-Load & Thermal Shock Fracture Simulator', url: '/tools/glass-cooktop-fracture-simulator/' }
    ]
  }
];

const guidesEs = [
  {
    slug: 'glass-cooktop-sugar-pitting-razor-scraping-silicone-mat-safety',
    title: 'Azúcar Derramado, Grietas Finas y Tapetes de Silicona en Vitrocerámica: Por Qué el Caramelo Arranca Vidrio, Raspado Seguro a 30° y Riesgo Eléctrico de 240V',
    category: 'appliances',
    excerpt: '¿Se derramó mermelada o caramelo en su placa de vidrio? Descubra por qué el azúcar al enfriarse arranca cráteres del vidrio, cómo raspar en caliente a 30°, por qué la silicona se derrite en placas radiantes y el peligro de 240V ante grietas.',
    date: waveDate,
    readTime: '17 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Las placas eléctricas radiantes y de inducción utilizan paneles de vitrocerámica de aluminosilicato de litio (LAS) de 4 mm diseñados para soportar choques térmicos extremos sin quebrarse. Sin embargo, derrames de mermelada o caramelo, latas que caen de armarios altos, arrastre de sartenes de hierro fundido y tapetes de silicona usados en el fogón equivocado siguen siendo la causa principal de roturas y hoyos permanentes. Más grave aún: millones de hogares cocinan sobre "pequeñas" grietas finas sin saber que circuitos de 240V y 30–50 amperios pasan milímetros por debajo.',
    sections: [
      {
        title: 'Por Qué el Azúcar Hirviendo y la Mermelada Arrancan Cráteres del Vidrio (Spalling)',
        content: 'Por encima de 160°C, la sacarosa fundida forma enlaces químicos directos con los silicatos (Si–O–Si) de la vitrocerámica. Mientras la vitrocerámica tiene dilatación casi nula (α ≈ 0,15 × 10⁻⁶ K⁻¹), el caramelo se contrae más de 100 veces más rápido al enfriarse (α ≈ 35 × 10⁻⁶ K⁻¹). Esa contracción diferencial supera los 80 MPa de cizallamiento y arranca literalmente trozos de vidrio de la superficie, dejando cráteres permanentes.',
        type: 'warning',
        boxText: 'REGLA DEL AZÚCAR: Jamás deje enfriar caramelo, almíbar o mermelada sobre la vitrocerámica; al solidificar se contrae >100 veces más rápido que el vidrio y arranca hoyos permanentes.'
      },
      {
        title: 'Protocolo Seguro de Raspado en Caliente a 30° con Cuchilla Plana',
        content: 'Apague la zona afectada mientras siga caliente, póngase un guante térmico para horno y sostenga una rasqueta de cuchilla plana en ángulo bajo de 30 grados respecto al vidrio. Empuje suavemente el azúcar líquido hacia una zona fría o una espátula metálica húmeda. Cuando enfríe a tibio, limpie el resto con crema especial para vitrocerámica. Nunca use las esquinas de la cuchilla, estropajos metálicos ni agua helada.',
        type: 'tip',
        boxText: 'RASPADO CORRECTO: Use guante de horno y raspe el azúcar derramado inmediatamente en caliente con cuchilla plana a 30°, sin clavar nunca las esquinas metálicas.'
      },
      {
        title: 'Tapetes de Silicona Protectores: Aptos en Inducción (<230°C), Peligrosos en Vitrocerámica Radiante',
        content: 'Los tapetes de silicona platino protegen el vidrio en placas de INDUCCIÓN porque el campo magnético calienta la base ferromagnética de la olla y no el vidrio directamente (respetando el techo de 230°C/450°F). En cambio, en placas eléctricas RADIANTES o halógenas cuyas resistencias superan 400°C–550°C, la silicona se piroliza al instante, humea y se funde de forma irreversible con la placa.',
        type: 'warning',
        boxText: 'INDUCCIÓN VS. RADIANTE: Los tapetes de silicona SOLO sirven para placas de inducción (<230°C). En vitrocerámica radiante al rojo vivo se queman, humean y se funden sobre el vidrio.'
      },
      {
        title: 'Latas Caídas y Arena bajo Hierro Fundido: Grietas de Hertz y Muescas de Griffith',
        content: 'Una lata de 450g que cae desde 50 cm concentra más de 900 MPa de presión de Hertz en menos de 1 mm² del borde, abriendo una grieta cónica pasante a 55°–65°. Por su parte, arrastrar hierro fundido sobre granos de arena de cuarzo o sal gruesa (dureza Mohs 7,0 frente a 6,2 del vidrio) talla muescas de Griffith que reducen a menos de la mitad la resistencia al impacto.',
        type: 'fact',
        boxText: 'IMPACTO Y ARRASTRE: Aleje las latas de los armarios sobre la cocina y levante siempre las ollas de hierro fundido en lugar de deslizarlas.'
      },
      {
        title: 'Por Qué NUNCA Debe Cocinar con una Grieta Fina: Electrocución a 240V / 50A',
        content: 'Bajo los 4 mm de vitrocerámica hay bornes y resistencias energizados a 240 voltios y 30–50 amperios. Cualquier agua salada de pasta, caldo o limpiador que se filtre por una grieta fina crea un camino conductor directo, causando arcos eléctricos explosivos, incendios o descargas fatales al tocar ollas metálicas o la encimera húmeda. Baje de inmediato el magnetotérmico de 240V en el cuadro eléctrico.',
        type: 'warning',
        boxText: 'EMERGENCIA 240V: Si aparece cualquier grieta pasante o fisura fina, desconecte de inmediato el interruptor general de la cocina en el cuadro eléctrico y reemplace el cristal.'
      }
    ],
    conclusion: 'Proteger su placa de vidrio exige cuatro reglas: retire latas pesadas de muebles superiores, levante el hierro fundido sin arrastrar arena ni sal, raspe el azúcar caliente a 30° sin dejar que enfríe, use tapetes de silicona solo en inducción (<230°C) y corte la corriente de 240V ante cualquier grieta.',
    faqs: [
      {
        question: '¿Puedo seguir usando otro fuego si la grieta fina está en una esquina?',
        answer: 'No. Los ciclos térmicos propagan rápidamente las grietas y cualquier líquido derramado puede penetrar hasta las conexiones de 240V debajo del panel. Desconecte el interruptor de la placa y sustituya el cristal.'
      },
      {
        question: '¿Por qué la mermelada hirviendo dejó pequeños cráteres arrancados en el vidrio?',
        answer: 'El azúcar fundido se enlaza químicamente con la sílice del vidrio y al enfriarse se contrae más de 100 veces más rápido que la vitrocerámica, generando >80 MPa de tensión que arranca fragmentos del vidrio (spalling).'
      },
      {
        question: '¿Cómo limpiar azúcar quemado en vitrocerámica sin rayar el cristal?',
        answer: 'Con la placa aún caliente (fuego apagado y con guante térmico), pase una rasqueta de cuchilla plana a 30 grados retirando el azúcar líquido hacia una zona fría antes de que solidifique.'
      },
      {
        question: '¿Son seguros los tapetes protectores de silicona en placas de vidrio?',
        answer: 'Únicamente en placas de inducción por debajo de 230°C (450°F). Nunca los coloque sobre placas radiantes o halógenas porque el calor extremo derrite y fusiona la silicona.'
      },
      {
        question: '¿Se puede reparar una vitrocerámica agrietada con resina epoxi o pegamento para parabrisas?',
        answer: 'No. Las resinas epoxi se degradan con el calor culinario y no restauran el aislamiento eléctrico de 240V ni la resistencia mecánica del panel; solo es segura la sustitución completa del cristal OEM.'
      }
    ],
    relatedTools: [
      { name: 'Simulador de Fractura en Vitrocerámica', url: '/es/tools/glass-cooktop-fracture-simulator/' },
      { name: 'Modelador de Delaminación y Choque en Inducción', url: '/es/tools/induction-cooktop-delamination-modeler/' },
      { name: 'Verificador de Compatibilidad e Imán para Inducción', url: '/es/tools/induction-cookware-compatibility-checker/' }
    ]
  },
  {
    slug: 'imported-aluminum-brass-cookware-lead-fda-2026-safety-guide',
    title: 'Alertas FDA 2025–2026 sobre Plomo en Ollas de Aluminio Importado, Latón y Hindalium: Por Qué Lixivian, Fallos de Kits Caseros y Alternativas en Acero Inoxidable',
    category: 'materials',
    excerpt: '¿Le preocupan las alertas de la FDA por plomo en ollas de aluminio, latón, Hindalium o Indolium importados? Analizamos cómo la fundición de chatarra introduce plomo, por qué fallan los hisopos de pintura y las alternativas seguras en acero 304/316.',
    date: waveDate,
    readTime: '18 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'A lo largo de 2025 y 2026, la FDA de EE. UU. y laboratorios de salud pública (como el Condado de King/Seattle) emitieron alertas urgentes pidiendo dejar de cocinar en diversas líneas importadas de ollas de aluminio, latón y aleaciones denominadas Hindalium o Indolium (incluidos lotes asociados a Rashko Baba Co. Ltd., Saraswati Strips Tiger White e IKM). Las pruebas en ácido orgánico revelaron lixiviación peligrosa de plomo hacia alimentos ácidos y guisos cotidianos, sin ningún nivel seguro de plomo en sangre según los CDC.',
    sections: [
      {
        title: 'Alertas FDA 2025–2026: Ollas Hindalium, Indolium, Latón y Kadhais sin Certificar',
        content: 'Mientras las ollas comerciales reguladas utilizan aluminio virgen AA3003/AA1100 certificado, diversas ollas, vaporeras idli, ollas a presión y kadhais importados bajo alerta sanitaria de la FDA liberaron niveles elevados de plomo soluble en pruebas ácidas de laboratorio. La FDA recomienda desechar permanentemente las piezas sospechosas y jamás donarlas.',
        type: 'warning',
        boxText: 'ALERTA FDA: Retire y deseche cualquier olla o kadhai importado de aluminio/latón reciclado o Hindalium incluido en alertas sanitarias; nunca lo done ni lo revenda.'
      },
      {
        title: 'Metalurgia de Chatarra Secundaria: Cómo Entra el Plomo en el Aluminio y Latón',
        content: 'En fundiciones informales que reutilizan chatarra industrial mezclada (radiadores con soldadura de plomo, contrapesos de ruedas, grifería de latón con plomo), el plomo queda atrapado en los límites de grano metálicos. Al hervir alimentos ligeramente ácidos o salados como tomate, tamarindo, limón o yogur (pH 3,5–5,5), los iones Pb²⁺ se disuelven directamente en el caldo sin alterar el olor ni el sabor.',
        type: 'fact',
        boxText: 'ORIGEN DEL PLOMO: La fundición con chatarra mixta introduce plomo en los bordes de grano; las cocciones ácidas o saladas disuelven Pb²⁺ silenciosamente hacia los alimentos.'
      },
      {
        title: 'Criterio CDC de Cero Plomo Seguro: Riesgo Neurológico Infantil y Cardiorrenal',
        content: 'Los CDC y la OMS confirman que no existe un umbral seguro de plomo en sangre. El plomo interfiere en las sinapsis neuronales infantiles, reduciendo el coeficiente intelectual y afectando la atención, además de elevar la presión arterial y la carga renal en adultos. Si niños o embarazadas consumieron comidas frecuentes en ollas sospechosas, consulte por una prueba venosa de plomo.',
        type: 'warning',
        boxText: 'SIN NIVEL SEGURO: No existe dosis inocua de plomo, especialmente en niños pequeños y embarazadas; solicite análisis clínico ante exposición habitual.'
      },
      {
        title: 'Por Qué Fallan los Hisopos Caseros para Pintura frente a XRF e ICP-MS',
        content: 'Los bastoncillos de sulfuro o rodizonato diseñados para pintura de paredes suelen dar falsos negativos sobre aluminio anodizado/oxidado (el óxido oculta el plomo interno) y falsos positivos frente a cobre o zinc del latón. Solo la espectrometría XRF calibrada y el análisis ICP-MS del lixiviado ácido determinan la seguridad alimentaria real.',
        type: 'tip',
        boxText: 'PRUEBAS FIABLES: No confíe en kits domésticos para pintura al evaluar ollas metálicas; el análisis de laboratorio XRF e ICP-MS en ácido acético es el único fiable.'
      },
      {
        title: 'Alternativas Certificadas Libres de Plomo: Acero 304/316, Hierro Virgen y Vidrio',
        content: 'Para cocinar guisos ácidos, salsas de tomate o curris diarios sin riesgo metálico, actualice a acero inoxidable austenítico AISI 304 (18/8) o 316Ti de marcas trazables, hierro fundido virgen curado o vidrio borosilicato 3.3 para almacenamiento y horneado.',
        type: 'success',
        boxText: 'REEMPLAZO SEGURO: El acero inoxidable tricapa 304/316 y el hierro fundido certificado eliminan el riesgo de plomo procedente de aleaciones recicladas.'
      }
    ],
    conclusion: 'Cuando se trata de metales pesados invisibles como el plomo, la trazabilidad de la aleación es esencial: retire las ollas importadas sospechosas de aluminio o latón reciclado, no dependa de hisopos domésticos de pintura y cocine platos ácidos en acero inoxidable 304/316 certificado.',
    faqs: [
      {
        question: '¿Qué son las ollas de Hindalium o Indolium y por qué advirtió la FDA sobre ellas?',
        answer: 'Son aleaciones comerciales de aluminio y magnesio populares en utensilios importados; pruebas de la FDA en 2025–2026 detectaron lotes fundidos con chatarra contaminada que liberaban niveles peligrosos de plomo durante la cocción.'
      },
      {
        question: '¿Puedo donar a una tienda benéfica mis ollas viejas si sospecho que tienen plomo?',
        answer: 'No. La FDA pide desecharlas de manera que nadie pueda volver a cocinar en ellas.'
      },
      {
        question: '¿Sirven los hisopos caseros de ferretería para detectar plomo en ollas de metal?',
        answer: 'No son fiables en metal: pueden dar falsos negativos por la capa de óxido de aluminio y falsos positivos por cobre o zinc.'
      },
      {
        question: '¿Qué comidas extraen más plomo de una olla contaminada?',
        answer: 'Las cocciones largas, saladas o ácidas con tomate, tamarindo, limón, vinagre o yogur aceleran enormemente la migración de iones Pb²⁺.'
      },
      {
        question: '¿Cuál es el mejor material asequible para sustituir ollas de aluminio o latón sospechosas?',
        answer: 'El acero inoxidable AISI 304 (18/8) o 316 de fabricantes trazables ofrece resistencia total a los ácidos y cero contaminación por plomo.'
      }
    ],
    relatedTools: [
      { name: 'Evaluador de Lixiviación Tóxica y Metales Pesados', url: '/es/tools/toxic-leaching-scorecard/' },
      { name: 'Escáner de Códigos y Retiros CPSC/FDA', url: '/es/tools/product-recalls-scanner/' },
      { name: 'Modelador de Metales Pesados en Acero Inoxidable', url: '/es/tools/stainless-steel-heavy-metal-leaching-modeler/' }
    ]
  },
  {
    slug: 'bodum-french-press-granitestone-pan-panasonic-toaster-2026-recalls-guide',
    title: 'Retiros de Cocina Fines de 2026: 5,9M Prensas Francesas Bodum, Sartenes Granitestone y Hornos Panasonic — Física de Rotura, Expulsión de Tornillos y Reembolsos',
    category: 'appliances',
    excerpt: 'Revise si su cocina tiene productos retirados por la CPSC en 2026: 5,9 millones de prensas francesas Bodum (oct. 2026), 740.000 sartenes Granitestone Diamond Pro Blue (abr. 2026) y hornos tostadores Panasonic NB-G200 (jul. 2026).',
    date: waveDate,
    readTime: '17 min de lectura',
    author: 'IsItKitchenSafe',
    intro: 'Además de freidoras de aire y ollas a presión, tres grandes retiros de la CPSC de EE. UU. en 2026 afectan a artículos presentes en millones de cocinas: 5,9 millones de prensas francesas Bodum de jarra de vidrio (29 de octubre de 2026) por riesgo de estallido al remover con cucharas metálicas; 740.000 juegos de sartenes Granitestone Diamond Pro Blue (2 de abril de 2026) por eyección térmica de la tapa del tornillo del mango; y 11.480 hornos tostadores Panasonic NB-G200 (16 de julio de 2026) por aislamiento insuficiente del cable eléctrico.',
    sections: [
      {
        title: 'Retiro CPSC Octubre 2026: 5,9 Millones de Prensas Francesas Bodum (Estallido de Jarra)',
        content: 'El 29 de octubre de 2026 la CPSC anunció un retiro de reparación para ~5,9 millones de prensas Bodum de 8 y 12 tazas con jarra de vidrio reemplazable (modelos Bistro, Brazil, Caffettiera, Chambord, Crema, Java, Jesper y Kenya vendidos desde 1974 hasta octubre de 2026). Remover el café con cuchara metálica raya la cara interna del vidrio, creando microfisuras de Griffith que provocan roturas repentinas al verter agua hirviendo. Bodum envía gratis una cuchara plástica y etiqueta de advertencia (bodumfrenchpressrecall.expertinquiry.com); deseche toda jarra rayada o astillada.',
        type: 'warning',
        boxText: 'RETIRO BODUM (OCT 2026): ~5,9M prensas francesas de vidrio de 8 y 12 tazas. Deje de remover con cucharas metálicas y solicite la cuchara plástica gratuita de Bodum.'
      },
      {
        title: 'Retiro CPSC Abril 2026: 740.000 Sartenes Granitestone Diamond Pro Blue (Eyección del Mango)',
        content: 'El 2 de abril de 2026 se retiraron ~740.000 juegos de 2 sartenes de acero inoxidable Granitestone Diamond Pro Blue de 10 y 11,5 pulgadas (UPC 0-80313-08131-6, vendidas en Costco, Walmart.com y Amazon.com). Al calentarse, la tapa metálica del tornillo que sujeta el mango puede desprenderse y salir despedida con fuerza, generando riesgo de quemaduras e impacto ocular. Suspenda su uso y solicite reembolso completo en GSRecall.com.',
        type: 'warning',
        boxText: 'RETIRO GRANITESTONE (ABR 2026): Sartenes Diamond Pro Blue (UPC 0-80313-08131-6). El tapón del tornillo del mango puede salir disparado con calor; solicite reembolso íntegro.'
      },
      {
        title: 'Retiro CPSC Julio 2026: Hornos Tostadores Panasonic NB-G200 (Fallo de Aislamiento del Cable)',
        content: 'El 16 de julio de 2026 la CPSC retiró ~11.480 hornos tostadores eléctricos Panasonic Modelo NB-G200 en acero inoxidable (con diales inferiores), vendidos en Amazon, Costco.com y Panasonic.com entre octubre de 2024 y abril de 2026. Una funda protectora de fibra de vidrio no cubre adecuadamente el cable eléctrico, creando riesgo de descarga eléctrica e incendio. Desenchúfelo de inmediato y solicite reembolso completo en shop.panasonic.com/toaster-oven-recall.',
        type: 'warning',
        boxText: 'RETIRO PANASONIC NB-G200 (JUL 2026): Desenchufe de inmediato por cobertura insuficiente de fibra de vidrio en el cable eléctrico; reembolso íntegro disponible.'
      },
      {
        title: 'Física de Jarras de Vidrio: Microfisuras por Cucharas Metálicas frente a Choque Térmico',
        content: 'El retiro de Bodum confirma un principio clave: incluso el vidrio resistente al calor falla bajo tracción si una cuchara metálica (dureza Mohs 5,0–5,5) talla surcos internos de 15–40 micras. Al verter agua a 95°C–100°C o presionar el émbolo, la tensión térmica se concentra en esas rayaduras. Use siempre cucharas de madera, bambú o silicona platino —o una prensa francesa de acero inoxidable 304 de doble pared.',
        type: 'fact',
        boxText: 'FÍSICA DEL VIDRIO: Las cucharas metálicas rayan la pared interna de las jarras y multiplican el riesgo de estallido con agua hirviendo; remueva siempre con silicona, madera o plástico.'
      },
      {
        title: 'Cómo Comprobar Códigos UPC, Placas de Modelo y Reclamar Remedios Oficiales',
        content: 'Revise en 3 minutos la etiqueta metálica trasera o inferior de su horno tostador (NB-G200), confirme el UPC 0-80313-08131-6 en sus recibos de Granitestone e inspeccione a contraluz el cilindro de vidrio de su prensa francesa en busca de rayaduras internas antes de volver a hervir agua. Nunca revenda ni done productos retirados.',
        type: 'tip',
        boxText: 'AUDITORÍA RÁPIDA: Verifique etiquetas inferiores de modelo, revise su jarra a contraluz por marcas de cuchara y consulte cualquier artículo en nuestro Escáner de Retiros.'
      }
    ],
    conclusion: 'Los retiros de la CPSC de finales de 2026 demuestran cómo pequeños detalles —desde una cuchara metálica dentro de una jarra de vidrio hasta una funda térmica incompleta o un tornillo mal fijado— provocan lesiones evitables. Revise sus equipos hoy mismo y gestione su reembolso o kit oficial.',
    faqs: [
      {
        question: '¿Bodum reembolsa el dinero en el retiro de octubre de 2026?',
        answer: 'No, es un retiro de reparación: debe dejar de remover con cucharas metálicas y solicitar gratis una cuchara plástica y etiqueta de advertencia a Bodum (bodumfrenchpressrecall.expertinquiry.com); si el vidrio ya está astillado o rayado, deséchelo.'
      },
      {
        question: '¿Qué sartenes Granitestone están incluidas en el retiro de abril de 2026?',
        answer: 'El juego de 2 sartenes Granitestone Diamond Pro Blue de acero inoxidable (10 y 11,5 pulgadas, UPC 0-80313-08131-6) vendidas en Costco, Walmart.com y Amazon.com, con reembolso total vía GSRecall.com.'
      },
      {
        question: '¿Por qué se retiró el horno tostador Panasonic NB-G200 en julio de 2026?',
        answer: 'Por cobertura insuficiente de la funda protectora de fibra de vidrio sobre el cable de alimentación, lo que genera riesgo de choque eléctrico e incendio; Panasonic ofrece reembolso íntegro.'
      },
      {
        question: '¿Por qué una cuchara metálica puede hacer estallar una cafetera de vidrio?',
        answer: 'La fricción metálica abre microfisuras en la pared interna del vidrio; al verter agua hirviendo y presionar el émbolo, la tensión se concentra en esa fisura y rompe el cilindro.'
      },
      {
        question: '¿Cuál es la alternativa irrompible más segura a una prensa francesa de vidrio?',
        answer: 'Una prensa francesa de doble pared en acero inoxidable AISI 304 (18/8), totalmente inmune a roturas y choques térmicos.'
      }
    ],
    relatedTools: [
      { name: 'Escáner de Códigos de Barras y Retiros CPSC/FDA', url: '/es/tools/product-recalls-scanner/' },
      { name: 'Simulador de Choque Térmico en Cristalería', url: '/es/tools/thermal-shock-simulator/' },
      { name: 'Simulador de Fractura en Vitrocerámica', url: '/es/tools/glass-cooktop-fracture-simulator/' }
    ]
  }
];

const guidesPt = [
  {
    slug: 'glass-cooktop-sugar-pitting-razor-scraping-silicone-mat-safety',
    title: 'Açúcar Derramado, Trincas Finas e Tapetes de Silicone no Cooktop de Vidro: Por Que o Caramelo Arranca Vidro, Raspagem Segura a 30° e Perigo de 240V',
    category: 'appliances',
    excerpt: 'Derramou geleia ou caramelo no cooktop vitrocerâmico? Entenda por que o açúcar arranca crateras ao esfriar, como raspar a quente a 30°, por que o silicone derrete em queimadores radiantes e quando uma trinca vira risco elétrico de 240V.',
    date: waveDate,
    readTime: '17 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Cooktops elétricos radiantes e de indução usam placas vitrocerâmicas de aluminossilicato de lítio (LAS) de 4 mm projetadas para suportar choques térmicos extremos. Contudo, derramamentos de geleia ou caramelo, queda de latas de armários superiores, arrasto de panelas de ferro fundido e uso indevido de tapetes de silicone continuam causando trincas e crateras irreversíveis — além de risco fatal de choque elétrico a 240V caso o vidro trincado permaneça ligado.',
    sections: [
      {
        title: 'Por Que Açúcar Fervente e Geleia Arrancam Crateras do Cooktop (Spalling)',
        content: 'Acima de 160°C, a sacarose derretida liga-se quimicamente aos silicatos (Si–O–Si) da superfície do vidro. Enquanto a vitrocerâmica tem expansão térmica quase nula (α ≈ 0,15 × 10⁻⁶ K⁻¹), o caramelo encolhe mais de 100 vezes mais depressa ao esfriar (α ≈ 35 × 10⁻⁶ K⁻¹), gerando >80 MPa de cisalhamento que arranca lascas de vidro e abre crateras permanentes.',
        type: 'warning',
        boxText: 'REGRA DO AÇÚCAR: Nunca deixe caramelo ou geleia esfriar no cooktop de vidro; ao solidificar, o açúcar encolhe >100× mais rápido e arranca crateras da superfície.'
      },
      {
        title: 'Protocolo Seguro de Raspagem a Quente com Lâmina Plana a 30°',
        content: 'Com o queimador desligado mas ainda quente, calce uma luva térmica e segure uma lâmina de raspagem plana em ângulo raso de 30 graus contra o vidro, empurrando o açúcar derretido para fora da zona quente até uma espátula ou pano úmido. Após esfriar para morno, finalize com limpador específico para vitrocerâmica. Nunca use a quina da lâmina nem jogue água fria.',
        type: 'tip',
        boxText: 'RASPAGEM SEGURA: Use luva térmica e raspe o açúcar ainda quente com lâmina plana a 30°, evitando sempre as pontas da lâmina.'
      },
      {
        title: 'Tapetes Protetores de Silicone: Seguros na Indução (<230°C), Perigosos em Cooktop Radiante',
        content: 'Na INDUÇÃO eletromagnética, o calor é gerado na base da panela, mantendo o vidro mais frio e permitindo tapetes de silicone platinado abaixo de 230°C (450°F). Já em cooktops RADIANTES ou halógenos, cuja resistência atinge 400°C–550°C+, qualquer tapete de silicone derrete, solta fumaça e funde no vidro permanentemente.',
        type: 'warning',
        boxText: 'INDUÇÃO VS. RADIANTE: Tapetes de silicone servem APENAS para cooktops de indução (<230°C). Em queimadores radiantes eles derretem e fundem no vidro.'
      },
      {
        title: 'Queda de Latas e Grãos sob Ferro Fundido: Trincas de Hertz e Ranhuras de Griffith',
        content: 'Uma lata de 450g caindo 50 cm concentra >900 MPa de pressão de Hertz numa borda menor que 1 mm², abrindo uma trinca cônica de 55°–65°. Já arrastar ferro fundido sobre poeira de quartzo ou sal grosso (dureza Mohs 7,0 contra 6,2 do vidro) abre sulcos de Griffith que cortam pela metade a resistência mecânica.',
        type: 'fact',
        boxText: 'IMPACTO E ARRASTO: Retire latas pesadas dos armários acima do fogão e sempre levante — nunca arraste — panelas de ferro fundido.'
      },
      {
        title: 'Por Que NUNCA Cozinhar em Cooktop Trincado: Risco Elétrico de 240V / 50A',
        content: 'Sob os 4 mm de vidro operam circuitos energizados de 240V e 30–50 ampères. Água salgada, caldos ou produtos de limpeza que penetrem por uma trinca fina atingem os terminais vivos, provocando explosões de arco elétrico, incêndio ou choque fatal na bancada molhada. Desligue imediatamente o disjuntor bipolar de 240V.',
        type: 'warning',
        boxText: 'EMERGÊNCIA 240V: Diante de qualquer trinca, desligue imediatamente o disjuntor do cooktop no quadro elétrico e providencie a troca do vidro.'
      }
    ],
    conclusion: 'Proteger seu cooktop de vidro depende de quatro hábitos essenciais: tire latas dos armários superiores, levante o ferro fundido sem arrastar areia ou sal, raspe açúcar derretido ainda quente a 30°, restrinja tapetes de silicone à indução (<230°C) e desligue o disjuntor de 240V se surgir qualquer trinca.',
    faqs: [
      {
        question: 'Posso usar outra boca se a trinca fina estiver apenas na borda do cooktop?',
        answer: 'Não. Ciclos térmicos propagam trincas rapidamente e líquidos derramados podem atingir a fiação de 240V abaixo do vidro. Desligue o disjuntor e troque o tampo.'
      },
      {
        question: 'Por que geleia quente arrancou pequenos buracos do vidro ao esfriar?',
        answer: 'A sacarose fundida liga-se à sílica do vidro e encolhe mais de 100 vezes mais depressa ao esfriar, gerando >80 MPa de tensão que arranca lascas do vidro.'
      },
      {
        question: 'Como tirar caramelo queimado do cooktop sem riscar o vidro?',
        answer: 'Com luva térmica e o vidro ainda quente, use um raspador de lâmina plana inclinado a 30 graus para remover o açúcar líquido antes que endureça.'
      },
      {
        question: 'Tapete de silicone estraga o cooktop de vidro?',
        answer: 'Em cooktops radiantes/halógenos derrete e funde imediatamente. Só deve ser usado em indução magnética abaixo de 230°C.'
      },
      {
        question: 'Posso colar um cooktop trincado com resina epóxi ou resina de para-brisa?',
        answer: 'Não. Resinas não resistem a 200°C–550°C nem restauram o isolamento dielétrico de 240V; somente a substituição completa do tampo original é segura.'
      }
    ],
    relatedTools: [
      { name: 'Simulador de Fratura em Cooktop', url: '/pt/tools/glass-cooktop-fracture-simulator/' },
      { name: 'Modelador de Delaminação em Indução', url: '/pt/tools/induction-cooktop-delamination-modeler/' },
      { name: 'Verificador de Compatibilidade de Indução', url: '/pt/tools/induction-cookware-compatibility-checker/' }
    ]
  },
  {
    slug: 'imported-aluminum-brass-cookware-lead-fda-2026-safety-guide',
    title: 'Alertas FDA 2025–2026 sobre Chumbo em Panelas Importadas de Alumínio, Latão e Hindalium: Por Que Lixiviam, Falhas de Testes Caseiros e Troca por Inox 304/316',
    category: 'materials',
    excerpt: 'Preocupado com alertas da FDA sobre chumbo em panelas de alumínio, latão, Hindalium e Indolium? Entenda a contaminação por sucata reciclada, por que cotonetes de pintura falham e como escolher aço inox 304/316.',
    date: waveDate,
    readTime: '18 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Entre 2025 e 2026, a FDA dos EUA e laboratórios estaduais emitiram alertas urgentes para interromper o uso de diversas panelas, caldeirões, vaporeras e kadhais importados de alumínio, latón/latão e ligas Hindalium ou Indolium (incluindo linhas associadas a Rashko Baba, Tiger White da Saraswati Strips e IKM). Ensaios ácidos confirmaram liberação expressiva de chumbo solúvel nos alimentos, sem nenhum nível seguro segundo o CDC.',
    sections: [
      {
        title: 'Alertas FDA 2025–2026: Ligas Hindalium, Indolium, Latão e Kadhais sem Certificação',
        content: 'Ao contrário de panelas industriais em alumínio virgem AA3003/AA1100 certificado, lotes artesanais e importados sob alerta sanitário da FDA liberaram concentrações elevadas de chumbo em testes simulando cozimentos ácidos. A orientação oficial é descartar as peças permanentemente sem doá-las.',
        type: 'warning',
        boxText: 'ALERTA FDA: Descarte panelas suspeitas de alumínio/latão importado ou Hindalium listadas em alertas sanitários; jamais doe ou revenda.'
      },
      {
        title: 'Metalurgia da Sucata Secundária: Como o Chumbo Entra em Panelas Baratas',
        content: 'Fundições não regulamentadas derretem sucata mista (radiadores com solda, contrapesos, peças de latão com chumbo). O chumbo acumula-se nos contornos de grão da liga e se dissolve silenciosamente em pratos ácidos ou salgados com tomate, tamarindo, limão ou iogurte (pH 3,5–5,5).',
        type: 'fact',
        boxText: 'ORIGEM DO CHUMBO: Ligas fundidas de sucata retêm chumbo nos contornos de grão, liberando íons Pb²⁺ em molhos ácidos sem alterar gosto ou cor.'
      },
      {
        title: 'Padrão CDC de Chumbo Zero Seguro: Risco Neurológico Infantil e Renal',
        content: 'O CDC e a OMS afirmam que não existe nível sanguíneo seguro de chumbo. Em crianças e gestantes, prejudica o neurodesenvolvimento e reduz o QI; em adultos eleva pressão arterial e risco renal. Consulte um médico para dosagem venosa caso haja uso frequente.',
        type: 'warning',
        boxText: 'SEM DOSE SEGURA: Não há nível seguro de exposição ao chumbo; procure avaliação clínica se crianças ou gestantes usaram essas panelas regularmente.'
      },
      {
        title: 'Por Que Kits Caseiros de Tinta Falham em Panelas vs. XRF e ICP-MS',
        content: 'Cotonetes de sulfeto ou rodizonato para tinta de parede sofrem falsos negativos sob a camada de óxido de alumínio e falsos positivos diante de cobre ou zinco do latão. Apenas XRF calibrado e lixiviação ácida por ICP-MS comprovam conformidade real.',
        type: 'tip',
        boxText: 'LIMITAÇÃO DE TESTES: Swabs domésticos de pintura não são confiáveis em metal; apenas XRF e análise ICP-MS em ácido acético oferecem validação.'
      },
      {
        title: 'Substitutos Certificados Sem Chumbo: Aço Inox 304/316, Ferro Virgem e Vidro',
        content: 'Substitua panelas duvidosas por aço inoxidável AISI 304 (18/8) ou 316Ti de marcas rastreáveis, ferro fundido virgem certificado ou vidro borossilicato 3.3 para receitas ácidas e refeições infantis.',
        type: 'success',
        boxText: 'TROCA SEGURA: Aço inox tricapa 304/316 e ferro fundido certificado eliminam totalmente o risco de chumbo de ligas recicladas.'
      }
    ],
    conclusion: 'Como a contaminação por chumbo em ligas metálicas não tem cheiro nem cor, a procedência define a segurança: aposente panelas importadas de alumínio/latão sem certificação, descarte testes caseiros imprecisos e cozinhe pratos ácidos em aço inox 304/316 rastreável.',
    faqs: [
      {
        question: 'O que é Hindalium ou Indolium e por que a FDA alertou sobre essas panelas?',
        answer: 'São nomes comerciais regionais de ligas de alumínio usadas em kadhais e panelas importadas; análises da FDA (2025–2026) identificaram lotes provavelmente feitos com sucata contaminada que lixiviam chumbo nos alimentos.'
      },
      {
        question: 'Posso doar minhas panelas antigas se parar de usá-las?',
        answer: 'Não. A FDA recomenda descartá-las de forma definitiva para não transferir o risco de intoxicação por chumbo a outra família.'
      },
      {
        question: 'Cotonete de teste de chumbo de loja de tintas funciona em panelas?',
        answer: 'Não é confiável em metais: óxido de alumínio gera falsos negativos e cobre/zinco causam falsos positivos.'
      },
      {
        question: 'Quais alimentos extraem mais chumbo de panelas contaminadas?',
        answer: 'Molhos ácidos e cozimentos demorados com tomate, tamarindo, limão, vinagre ou sal.'
      },
      {
        question: 'Qual o melhor substituto acessível para cozimentos ácidos diários?',
        answer: 'Aço inoxidável AISI 304 (18/8) ou 316 de fabricantes certificados conforme normas de contato alimentar.'
      }
    ],
    relatedTools: [
      { name: 'Avaliador de Lixiviação Tóxica e Metais Pesados', url: '/pt/tools/toxic-leaching-scorecard/' },
      { name: 'Scanner de Códigos de Barras e Recalls', url: '/pt/tools/product-recalls-scanner/' },
      { name: 'Modelador de Metais Pesados em Aço Inox', url: '/pt/tools/stainless-steel-heavy-metal-leaching-modeler/' }
    ]
  },
  {
    slug: 'bodum-french-press-granitestone-pan-panasonic-toaster-2026-recalls-guide',
    title: 'Recalls de Cozinha no Fim de 2026: 5,9M Prensas Francesas Bodum, Frigideiras Granitestone e Fornos Panasonic — Física da Quebra, Ejeção de Cabo e Reembolsos',
    category: 'appliances',
    excerpt: 'Confira se sua cozinha tem itens em recall pela CPSC em 2026: 5,9 milhões de prensas francesas Bodum (out. 2026), 740 mil frigideiras Granitestone Diamond Pro Blue (abr. 2026) e fornos elétricos Panasonic NB-G200 (jul. 2026).',
    date: waveDate,
    readTime: '17 min de leitura',
    author: 'IsItKitchenSafe',
    intro: 'Três grandes recalls da CPSC em 2026 atingem itens comuns em milhões de lares: ~5,9 milhões de prensas francesas Bodum com jarra de vidro (29 de outubro de 2026) por risco de estilhaçamento após riscos de colher de metal; ~740.000 frigideiras Granitestone Diamond Pro Blue (2 de abril de 2026) por ejeção da tampa do parafuso do cabo sob calor; e ~11.480 fornos elétricos Panasonic NB-G200 (16 de julho de 2026) por isolamento falho do cabo elétrico.',
    sections: [
      {
        title: 'Recall CPSC Outubro 2026: ~5,9 Milhões de Prensas Francesas Bodum (Quebra da Jarra)',
        content: 'Em 29 de outubro de 2026, a CPSC anunciou um recall de reparo para ~5,9 milhões de prensas Bodum de 8 e 12 xícaras com jarra de vidro substituível (Bistro, Brazil, Caffettiera, Chambord, Crema, Java, Jesper e Kenya). Mexer o café com colher de metal risca o interior do vidro, causando trincas de Griffith que levam à quebra repentina com água fervente. A Bodum envia gratuitamente uma colher plástica e etiqueta de aviso.',
        type: 'warning',
        boxText: 'RECALL BODUM (OUT 2026): ~5,9M prensas de vidro de 8 e 12 xícaras. Pare de mexer com colher metálica e peça sua colher plástica gratuita à Bodum.'
      },
      {
        title: 'Recall CPSC Abril 2026: 740.000 Frigideiras Granitestone Diamond Pro Blue',
        content: 'Em 2 de abril de 2026, foram recolhidos ~740.000 conjuntos de 2 frigideiras Granitestone Diamond Pro Blue de aço inox (10" e 11,5", UPC 0-80313-08131-6). Ao aquecer, a tampa metálica do parafuso que prende o cabo pode se soltar e ser ejetada com força, gerando risco de impacto e queimadura. Pare de usar e solicite reembolso total via GSRecall.com.',
        type: 'warning',
        boxText: 'RECALL GRANITESTONE (ABR 2026): Frigideiras Diamond Pro Blue (UPC 0-80313-08131-6). Risco de ejeção da tampa do parafuso do cabo ao aquecer; reembolso integral.'
      },
      {
        title: 'Recall CPSC Julho 2026: Fornos Elétricos Panasonic NB-G200 (Fio sem Isolamento Adequado)',
        content: 'Em 16 de julho de 2026, a CPSC recolheu ~11.480 fornos elétricos Panasonic NB-G200 por cobertura insuficiente da manga de fibra de vidro no cabo de alimentação, expondo ao risco de choque elétrico e incêndio. Desligue da tomada imediatamente e peça reembolso integral em shop.panasonic.com/toaster-oven-recall.',
        type: 'warning',
        boxText: 'RECALL PANASONIC NB-G200 (JUL 2026): Desconecte imediatamente devido a isolamento inadequado do cabo elétrico; reembolso total disponível.'
      },
      {
        title: 'Física de Jarras de Vidro: Riscos por Metal vs. Choque Térmico',
        content: 'Mesmo vidro resistente ao calor falha sob tensão quando colheres metálicas (Mohs 5,0–5,5) riscam a parede interna com sulcos de 15–40 mícrons. Ao despejar água a 95°C–100°C e acionar o êmbolo, a tensão térmica se concentra na ranhura. Prefira colheres de silicone, madeira ou prensas em aço inox 304.',
        type: 'fact',
        boxText: 'FÍSICA DO VIDRO: Colheres de metal riscam a parede interna e concentram choque térmico; use apenas silicone, madeira ou plástico em jarras de vidro.'
      },
      {
        title: 'Como Conferir Códigos UPC, Modelos e Solicitar Reparo ou Reembolso',
        content: 'Verifique em minutos a etiqueta inferior do forno elétrico (NB-G200), confira o UPC 0-80313-08131-6 nos pedidos da Granitestone e examine a jarra da prensa francesa contra a luz em busca de riscos internos. Nunca doe ou revenda itens sob recall.',
        type: 'tip',
        boxText: 'CHECKLIST RÁPIDO: Confira etiquetas de modelo, cheque jarras de vidro contra a luz e consulte nosso Scanner de Recalls antes de comprar usados.'
      }
    ],
    conclusion: 'Os recalls da CPSC em 2026 mostram como pequenos detalhes — de uma colher metálica numa jarra a uma capa de fio ou parafuso de cabo — causam acidentes sérios. Confira sua cozinha hoje e peça o reembolso ou reparo oficial.',
    faqs: [
      {
        question: 'A Bodum devolve o dinheiro no recall de outubro de 2026?',
        answer: 'Não, trata-se de recall de reparo: pare de mexer com metal e peça à Bodum uma colher plástica gratuita e adesivo de advertência; jarras já trincadas ou riscadas devem ser descartadas.'
      },
      {
        question: 'Quais panelas Granitestone fazem parte do recall de abril de 2026?',
        answer: 'Os conjuntos de 2 frigideiras Granitestone Diamond Pro Blue de aço inox (10" e 11,5", UPC 0-80313-08131-6), com reembolso integral via GSRecall.com.'
      },
      {
        question: 'Por que o forno Panasonic NB-G200 foi recolhido em julho de 2026?',
        answer: 'Por cobertura insuficiente de fibra de vidro protetora no cabo elétrico, gerando risco de choque elétrico e incêndio.'
      },
      {
        question: 'Por que mexer com colher de metal quebra uma prensa francesa de vidro?',
        answer: 'O metal cria microriscos de Griffith na face interna onde a água fervente e a pressão do êmbolo concentram tensão de ruptura.'
      },
      {
        question: 'Qual a alternativa inquebrável mais segura à prensa francesa de vidro?',
        answer: 'Uma prensa francesa de parede dupla em aço inox AISI 304 (18/8), imune a estilhaços e choques térmicos.'
      }
    ],
    relatedTools: [
      { name: 'Scanner de Códigos de Barras e Recalls', url: '/pt/tools/product-recalls-scanner/' },
      { name: 'Simulador de Choque Térmico em Vidros', url: '/pt/tools/thermal-shock-simulator/' },
      { name: 'Simulador de Fratura em Cooktop', url: '/pt/tools/glass-cooktop-fracture-simulator/' }
    ]
  }
];

const guidesZh = [
  {
    slug: 'glass-cooktop-sugar-pitting-razor-scraping-silicone-mat-safety',
    title: '微晶玻璃灶台焦糖剥蚀凹坑、发丝裂纹与硅胶垫危险：为何冷却糖浆撕裂玻璃、30°热刮刀规程与 240V 触电断闸准则',
    category: 'appliances',
    excerpt: '糖浆或果酱溢锅到微晶玻璃灶面上怎么办？了解焦糖降温百倍收缩撕裂玻璃凹坑的原理、30°单刃热刮操作、硅胶保护垫在电磁炉与电陶炉上的生死界限以及细裂纹下的 240V 触电风险。',
    date: waveDate,
    readTime: '17 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '电磁炉与电陶炉普遍采用 4 毫米厚锂铝硅酸盐（LAS）微晶玻璃面板，理论上可耐受剧烈冷热温差而不断裂。然而高糖果酱溢锅、高处吊柜跌落罐头、拖拽铸铁锅挟带石英砂以及错用硅胶保护垫，仍是导致永久凹坑与整板爆裂的首要原因；更危险的是，许多家庭在出现“细小发丝裂纹”后继续做饭，却不知仅数毫米下方就是 240V / 30–50A 高压电路。',
    sections: [
      {
        title: '为何沸腾糖浆与果酱冷却后会把玻璃灶台硬生生撕出深坑（剥蚀机理）',
        content: '当蔗糖或果酱在 160°C 以上沸腾溢锅时，熔融糖分子与玻璃表层硅酸盐网络（Si–O–Si）形成强化学键合。LAS 微晶玻璃热膨胀系数近乎为零（α ≈ 0.15 × 10⁻⁶ K⁻¹），而有机焦糖降温收缩率却是玻璃的 100 倍以上（α ≈ 35 × 10⁻⁶ K⁻¹），产生超过 80 MPa 的界面剪切拉力，在凝固瞬间直接撕扯剥落玻璃微块，留下永久坑洞。',
        type: 'warning',
        boxText: '焦糖剥蚀铁律：切勿任由糖浆或果酱在玻璃灶面上冷却固化！其收缩率比玻璃高百倍，冷却时必然撕扯出无法修复的凹坑。'
      },
      {
        title: '30° 趁热单面刮刀急救规程（以及为何切忌用力抠角或泼冷水）',
        content: '溢锅后立刻关闭加热区，戴好隔热手套趁灶面仍滚烫时操作：手持平直单面金属刮刀与玻璃呈 30 度扁平倾角，平稳将熔融糖浆推刮到未加热的冷区或金属铲上。待降至微温后用微晶玻璃专用清洁膏擦净。切忌用刀尖斜角或钢丝球硬抠，更严禁趁热泼冰水。',
        type: 'tip',
        boxText: '正确清理：戴防烫手套趁热用平刃刮刀呈 30° 角推走糖液，绝对不要等凉透，也不要用刀角点戳玻璃。'
      },
      {
        title: '硅胶保护垫：电磁炉低于 230°C 可用，电陶炉上会瞬间熔融起火',
        content: '网红硅胶防刮垫仅适用于电磁炉（磁场仅加热金属锅底，玻璃升温慢，只要控制煎炒不超过 230°C/450°F 即可垫用）。但在红热辐射加热的电陶炉上，灯丝与玻璃温度高达 400°C–550°C+，垫入硅胶会瞬间热解冒烟并永久烧熔粘死在玻璃上。',
        type: 'warning',
        boxText: '炉型生死线：硅胶垫仅限电磁炉（<230°C）使用；在高温红热的电陶炉或卤素炉上铺硅胶垫会立刻烧焦粘死并释放烟雾。'
      },
      {
        title: '高处跌落罐头与铸铁锅砂粒：赫兹圆锥裂纹与格里菲斯表面缺口',
        content: '450 克铁皮罐头从 50 厘米吊柜坠落，不足 1 平方毫米的卷边尖角会产生 >900 MPa 的赫兹瞬时压强，直接贯通 4 毫米玻璃。同时，将沉重铸铁锅在夹带石英尘砂或粗海盐（莫氏硬度 7.0，高于玻璃 6.2）的表面拖拽，会刻出 50–100 微米微缺口，使抗冲击力骤降一半以上。',
        type: 'fact',
        boxText: '物理防护：清空灶台正上方吊柜里的重罐头，铸铁锅与砂锅务必垂直轻提轻放，严禁拖拽摩擦。'
      },
      {
        title: '细微裂纹也绝对禁用：240V / 50A 高压漏电与电弧闪爆致命隐患',
        content: '4 毫米玻璃正下方紧贴着 240V、30–50 安培大电流发热盘或逆变线圈。一旦存在发丝状贯穿裂纹，溢出的盐水、汤汁或湿抹布水汽会瞬间渗入带电端子，引发爆炸性电弧闪爆、厨房火灾或令湿润台面与金属锅体带电致死。发现任何裂纹应立即拉下配电箱专用 240V 空气开关并更换面板。',
        type: 'warning',
        boxText: '高压断闸警告：只要玻璃灶面出现裂纹，哪怕裂在边角，也必须立即切断配电箱专用总闸并停用更换，严防液体渗漏触电。'
      }
    ],
    conclusion: '保护微晶玻璃灶台牢记四点：清走上方重罐头、垂直拿放铸铁锅、趁热 30° 刮除糖浆、硅胶垫严禁上电陶炉，一旦发现裂纹立即断开 240V 空开。',
    faqs: [
      {
        question: '玻璃灶台边角有一条细裂纹，只用另一侧完好的炉头可以吗？',
        answer: '绝对不行。冷热循环会迅速驱动裂纹向中心扩展，溢水或擦拭湿气随时可能顺裂纹渗入下方 240V 强电电路引发触电或爆燃。'
      },
      {
        question: '为什么果酱溢锅冷却后把玻璃灶台啃出好几个小坑？',
        answer: '高温熔糖与玻璃硅酸盐化学结合后，在降温阶段焦糖收缩速率比微晶玻璃快百倍以上，产生超 80 MPa 拉应力把玻璃微块生生拽掉。'
      },
      {
        question: '怎样刮除玻璃灶台上的焦糖而不留划痕？',
        answer: '戴好隔热手套趁着玻璃仍热时，用平直单面刮刀保持 30 度扁平贴面把热糖浆推走，切勿等冷却再用力刮擦。'
      },
      {
        question: '玻璃灶台上面铺硅胶防刮垫安全吗？',
        answer: '仅可在电磁炉 230°C 以下常规烹饪时使用，绝对禁止放在发红发热的电陶炉上，否则硅胶会立刻热解烧毁粘死面板。'
      },
      {
        question: '能用汽车玻璃修复树脂或 AB 胶粘合裂开的灶台吗？',
        answer: '不能。胶粘剂在高温下会分解冒烟且无法恢复 240V 高压绝缘和面板结构强度，必须整体更换原厂微晶玻璃。'
      }
    ],
    relatedTools: [
      { name: '微晶玻璃灶台断裂模拟器', url: '/zh-cn/tools/glass-cooktop-fracture-simulator/' },
      { name: '电磁炉层裂与热震微裂纹模拟仪', url: '/zh-cn/tools/induction-cooktop-delamination-modeler/' },
      { name: '电磁炉锅具磁吸兼容性检测仪', url: '/zh-cn/tools/induction-cookware-compatibility-checker/' }
    ]
  },
  {
    slug: 'imported-aluminum-brass-cookware-lead-fda-2026-safety-guide',
    title: '2025–2026 美国 FDA 进口铝锅、黄铜锅与 Hindalium 含铅警示：回收杂铝溶铅机理、家用试纸假阴性陷阱与 304/316 不锈钢替换指南',
    category: 'materials',
    excerpt: '担心进口铝锅、黄铜锅或 Hindalium/Indolium 锅具溶出重金属铅？深度解析 FDA 警示名单来源、再生废金属铸锅如何向酸性番茄汤渗铅、油漆试纸为何失效以及安全替换方案。',
    date: waveDate,
    readTime: '18 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '2025 至 2026 年间，美国食品药品监督管理局（FDA）联合地方公共卫生实验室持续发布高优先级食品安全警示，要求消费者与餐饮业停用多款进口铝制、黄铜制以及标称“Hindalium”或“Indolium”的炒锅（kadhai/karahi）、深煮锅与蒸锅（涉及 Rashko Baba、Saraswati Strips Tiger White 与 IKM 等渠道批次）。实验证明这些锅具在炖煮番茄、罗望子等酸性食物时会溶出严重超标的铅，而 CDC 明确指出血液中不存在所谓“安全含铅阈值”。',
    sections: [
      {
        title: '2025–2026 FDA 警示名单：无证进口铝锅、黄铜锅与 Hindalium 合金',
        content: '正规商用铝锅采用食品级原生 AA3003/AA1100 铝材，而 FDA 通报并列入进口警示的廉价或传统手铸进口铝锅、黄铜锅与 Hindalium 锅具，在模拟酸性食物浸泡下检测出高浓度可溶铅，FDA 要求立即废弃处理且切勿捐赠二手店。',
        type: 'warning',
        boxText: 'FDA 警示：立即停用被通报或来源不明的进口再生铝锅、黄铜锅及 Hindalium/Indolium 锅具，务必直接废弃不可转赠他人。'
      },
      {
        title: '再生废料冶炼漏洞：铅是如何混入铝锅与黄铜锅基体的',
        content: '非正规小作坊常回收混杂工业废料（含铅焊锡散热器、车轮配重块、易切削含铅黄铜阀件）重熔铸锅。铅难以固溶于铝基体中，冷却后富集在晶界微区，遇酸性番茄、罗望子、柠檬汁或盐汤炖煮（pH 3.5–5.5）即迅速电化学溶出 Pb²⁺。',
        type: 'fact',
        boxText: '溶铅机理：混合废金属重熔会在晶界残留游离铅，炖煮酸辣或加盐菜肴时悄无声息地溶解进食物且无异味。'
      },
      {
        title: 'CDC 零安全血铅标准：儿童神经发育损害与成人脏器风险',
        content: '美国 CDC 与世卫组织强调儿童体内不存在任何安全血铅水平，铅会伪装成钙离子干扰突触发育、拉低智商，并加重成人高血压与肾脏损伤。若家中孕妇或儿童曾长期食用这类锅具烹饪的酸性菜肴，建议就医排查血铅。',
        type: 'warning',
        boxText: '零安全阈值：对婴幼儿和孕妇而言不存在安全铅暴露量，若曾高频使用可疑锅具请咨询医生检测静脉血铅。'
      },
      {
        title: '为何五金店家用铅试纸在金属锅上频繁失灵（vs XRF 与 ICP-MS）',
        content: '市售墙面油漆铅检测试纸（玫瑰红酸钠/硫化钠）在铝锅表面的致密氧化铝膜上极易出现假阴性，又会在黄铜中的铜、锌离子干扰下出现假阳性。唯有专业便携 XRF 合金分析配合稀醋酸浸泡 ICP-MS 实验室检测才能准确定量。',
        type: 'tip',
        boxText: '检测陷阱：家用油漆测铅棉签无法准确检测金属锅具，需以实验室 XRF 与酸浸 ICP-MS 数据为准。'
      },
      {
        title: '无铅厨具安全升级：可溯源 304 / 316 不锈钢、原生铸铁与高硼硅玻璃',
        content: '更换为符合食品接触标准的 AISI 304（18/8）或 316Ti 三层复合不锈钢炒锅炖锅、可溯源的原生铸铁锅及 3.3 高硼硅玻璃器皿，即可彻底规避杂铝再生冶炼带来的重金属铅隐患。',
        type: 'success',
        boxText: '安全替代：使用品牌可溯源的 304/316 不锈钢或原生铸铁锅烹制番茄与酸性汤汁，实现重金属零风险。'
      }
    ],
    conclusion: '含铅劣质金属锅外观与常品无异且没有金属怪味，唯有把好材质溯源关：果断淘汰来历不明的进口杂铝或黄铜锅，勿轻信家用油漆试纸，日常炖酸菜优先选择合规 304/316 不锈钢。',
    faqs: [
      {
        question: '什么是 Hindalium 或 Indolium 锅具？为何遭到 FDA 警告？',
        answer: '它们是南亚地区部分铝镁锰铁合金锅具的商用名称；2025–2026 年 FDA 抽检发现多个进口批次疑似采用受污染废料铸造，烹饪时溶出超标铅。'
      },
      {
        question: '不用的可疑铝锅或铜锅可以捐给慈善二手店吗？',
        answer: '绝对不行。FDA 明确要求直接销毁废弃，防止其他家庭不知情继续中毒。'
      },
      {
        question: '网上买的测铅试纸能擦铝锅或不锈钢锅测铅吗？',
        answer: '不可靠。铝氧化层会导致漏检（假阴性），而铜锌等常见元素会导致变色误报（假阳性）。'
      },
      {
        question: '哪些菜肴最容易从劣质金属锅里带出铅？',
        answer: '番茄汤、柠檬醋汁、罗望子咖喱、酸奶酱及含盐长时间慢炖菜肴溶铅速度最快。'
      },
      {
        question: '日常炒菜和炖酸汤最推荐更换成哪种安全锅具？',
        answer: '正规厂商生产的 AISI 304（18/8）或 316Ti 复合底不锈钢锅具耐酸耐蚀且完全无铅风险。'
      }
    ],
    relatedTools: [
      { name: '厨具重金属与化学迁出风险评分卡', url: '/zh-cn/tools/toxic-leaching-scorecard/' },
      { name: '厨具条码与 CPSC/FDA 召回查询仪', url: '/zh-cn/tools/product-recalls-scanner/' },
      { name: '不锈钢重金属镍铬酸性溶出模拟仪', url: '/zh-cn/tools/stainless-steel-heavy-metal-leaching-modeler/' }
    ]
  },
  {
    slug: 'bodum-french-press-granitestone-pan-panasonic-toaster-2026-recalls-guide',
    title: '2026 下半年重磅厨具召回指南：590 万台 Bodum 法压壶、Granitestone 炒锅与松下 NB-G200 电烤箱——玻璃炸裂机理、螺帽弹射与全额退款通道',
    category: 'appliances',
    excerpt: '速查您家是否中招 2026 年美国 CPSC 大规模召回：590 万个 Bodum 玻璃法压壶（2026年10月）、74 万套 Granitestone Diamond Pro Blue 炒锅（2026年4月）及松下 NB-G200 电烤箱（2026年7月）。',
    date: waveDate,
    readTime: '17 分钟阅读',
    author: 'IsItKitchenSafe',
    intro: '除空气炸锅与电压力锅外，2026 年美国消费品安全委员会（CPSC）发布的另外三起重大厨具召回同样波及数百万家庭：2026 年 10 月 29 日召回约 590 万个 Bodum 可更换玻璃壶法压咖啡壶；2026 年 4 月 2 日召回约 74 万套 Granitestone Diamond Pro Blue 不锈钢煎炒锅；以及 2026 年 7 月 16 日召回约 11,480 台松下 NB-G200 电烤箱。了解背后的物理故障机理并及时申领维修包或退款，可有效避免烫伤、割伤与触电风险。',
    sections: [
      {
        title: '2026 年 10 月 CPSC 召回：约 590 万个 Bodum 玻璃法压壶（金属勺刮伤炸裂）',
        content: '2026 年 10 月 29 日 CPSC 宣布对约 590 万只 8 杯装和 12 杯装 Bodum 可替换玻璃内胆法压壶启动维修召回（涵盖 Bistro、Brazil、Caffettiera、Chambord、Crema、Java、Jesper 与 Kenya 系列）。用金属勺搅拌咖啡会在薄壁玻璃内侧划出格里菲斯微裂纹，倒入沸水并下压滤网时极易突发爆裂导致严重烫伤割伤。可联系 Bodum 免费领取塑料搅拌勺与警示贴纸，凡有裂痕或划伤玻璃壶应立即弃用。',
        type: 'warning',
        boxText: 'BODUM 召回（2026.10）：涉及约 590 万只 8/12 杯玻璃法压壶。严禁用金属勺搅拌，请向官方申领免费塑料勺并检查壶身裂痕。'
      },
      {
        title: '2026 年 4 月 CPSC 召回：74 万套 Granitestone Diamond Pro Blue 炒锅（手柄螺帽弹射）',
        content: '2026 年 4 月 2 日 CPSC 召回约 74 万套 Granitestone Diamond Pro Blue 不锈钢两件套炒锅（10 英寸与 11.5 英寸，UPC 0-80313-08131-6，曾于 Costco、Walmart.com 与 Amazon 销售）。在明火加热过程中，连接锅身与手柄螺丝上的金属装饰盖可能因热膨胀脱落并猛烈弹射飞出，带来冲击与热油烫伤风险。请立即停用并在 GSRecall.com 申请全额退款。',
        type: 'warning',
        boxText: 'GRANITESTONE 召回（2026.4）：Diamond Pro Blue 两件套（UPC 0-80313-08131-6）加热时手柄螺丝盖可能弹射，请停用并申领全额退款。'
      },
      {
        title: '2026 年 7 月 CPSC 召回：松下 Panasonic NB-G200 电烤箱（电源线绝缘不足）',
        content: '2026 年 7 月 16 日 CPSC 召回约 11,480 台松下不锈钢电烤箱（型号 NB-G200，底部带温控旋钮，2024 年 10 月至 2026 年 4 月售出）。缺陷在于保护电源线的玻纤绝缘套管未能完整包覆导线，高温下绝缘层老化易引发 120V 漏电触电与火灾风险。请立即拔下电源并在 shop.panasonic.com/toaster-oven-recall 申请全额退款。',
        type: 'warning',
        boxText: '松下 NB-G200 召回（2026.7）：因电源线玻纤保护套包覆不足存在触电火灾隐患，请立即断电并申请全额退款。'
      },
      {
        title: '玻璃壶力学原理：为何金属勺划痕碰上沸水就会突然炸裂',
        content: '玻璃抗压不抗拉，一旦不锈钢勺（莫氏硬度 5.0–5.5）在内壁刮出 15–40 微米的格里菲斯微划痕，倒入 95°C–100°C 沸水产生的内壁拉伸热应力叠加按压杆压力，会在瞬间沿着划痕贯穿破裂。平时务必改用硅胶、竹木或塑料勺搅拌，或升级为双层 304 不锈钢法压壶。',
        type: 'fact',
        boxText: '玻璃物理法则：金属勺内壁划痕是热汤玻璃杯爆裂的元凶；搅拌玻璃冲泡壶务必只用硅胶、木勺或塑料勺。'
      },
      {
        title: '三分钟核查清单：型号铭牌、条码与强光验伤操作',
        content: '花三分钟检查烤箱背部/底部铭牌型号（确认是否 NB-G200）、检索电子订单确认 Granitestone UPC 0-80313-08131-6，并在强光下透视玻璃咖啡壶内壁是否有勺痕或崩口。任何召回厨具切勿流向二手市场。',
        type: 'tip',
        boxText: '居家自查：核对电器铭牌型号与商品 UPC 条码，透光检查玻璃内壁划痕，并使用站内召回扫描仪定期核查。'
      }
    ],
    conclusion: '从咖啡壶里的一把金属勺到螺丝盖和电源线绝缘套管，2026 年的重大厨具召回提醒我们警惕细节隐患。建议今日即核对家中 Bodum 法压壶、Granitestone 炒锅与松下 NB-G200 烤箱并依法申领赔偿或配件。',
    faqs: [
      {
        question: '2026 年 10 月 Bodum 法压壶召回会直接退全款吗？',
        answer: '此次属于维修整改召回：停止使用金属勺搅拌，并联系 Bodum（bodumfrenchpressrecall.expertinquiry.com）免费领取塑料搅拌勺与警示标签；如玻璃已崩口或有裂纹则需立即弃用。'
      },
      {
        question: 'Granitestone 哪些具体型号在 2026 年 4 月被召回？',
        answer: '涉及 Costco、Walmart.com 与 Amazon 销售的 Granitestone Diamond Pro Blue 10 英寸与 11.5 英寸不锈钢炒锅两件套（UPC 0-80313-08131-6），可通过 GSRecall.com 办理全额退款。'
      },
      {
        question: '松下 NB-G200 电烤箱为何在 2026 年 7 月被召回？',
        answer: '由于电源线玻璃纤维隔热绝缘套管覆盖不充分，存在触电及火灾危险，松下向用户提供全额退款。'
      },
      {
        question: '用金属勺搅拌玻璃法压壶为什么会碎？',
        answer: '金属勺尖锐边缘会在玻璃内壁留下肉眼难辨的微划痕，接触沸水和压杆外力时极易诱发贯穿性热震破裂。'
      },
      {
        question: '防摔防爆的法压壶替代材质选什么最安全？',
        answer: '双层真空 AISI 304（18/8）食品级不锈钢法压壶完全不怕磕碰或沸水热冲击，且不引入塑料浸出。'
      }
    ],
    relatedTools: [
      { name: '厨具条码与 CPSC/FDA 召回查询扫描仪', url: '/zh-cn/tools/product-recalls-scanner/' },
      { name: '厨具热冲击与玻璃炸裂模拟器', url: '/zh-cn/tools/thermal-shock-simulator/' },
      { name: '微晶玻璃灶台断裂模拟器', url: '/zh-cn/tools/glass-cooktop-fracture-simulator/' }
    ]
  }
];

const guidesJa = [
  {
    slug: 'glass-cooktop-sugar-pitting-razor-scraping-silicone-mat-safety',
    title: 'ガラストップコンロの砂糖吹きこぼれ剥離・細いひび割れ・シリコン保護マットの危険性：冷却キャラメルがガラスを抉る物理と30°スクレーパー＆240V感電遮断ルール',
    category: 'appliances',
    excerpt: 'ガラストップにジャムやキャラメルを吹きこぼしてしまったら？砂糖が冷えてガラスを抉り取る「剥離（スポーリング）」の仕組み、熱いうちの30°スクレーパー除去法、IH専用シリコンマットをラジエントで使ってはいけない理由、ひび割れ時の240V電源遮断を徹底解説。',
    date: waveDate,
    readTime: '17 分で読める',
    author: 'IsItKitchenSafe',
    intro: 'IHクッキングヒーターや電気ラジエントコンロの天板には、極端な温度差にも耐える厚さ4mmのリチウムアルミノシリケート（LAS）結晶化ガラスが使われています。しかし「砂糖やジャムの吹きこぼれ」「上段棚からの缶詰落下」「砂粒を噛んだ鋳鉄鍋の引きずり」「シリコン保護マットの誤用」が、永久的なクレーター傷や天板割れを引き起こす最大の要因です。さらに深刻なのが、細いヘアラインクラックが入った状態で使い続け、直下の200V〜240V大電流回路への吹きこぼれ浸水により感電や火災に至る事故です。',
    sections: [
      {
        title: '沸騰した砂糖・キャラメル・ジャムが冷えるとガラスを抉り取る理由（剥離現象）',
        content: '160°C以上に熱せられたショ糖や果物ジャムが天板に溢れると、ガラス表面のシリカ（Si–O–Si）骨格と強固に化学結合します。結晶化ガラスの熱膨張率はほぼゼロ（α ≈ 0.15 × 10⁻⁶ K⁻¹）である一方、キャラメルは冷却時にガラスの100倍以上の猛烈な比率（α ≈ 35 × 10⁻⁶ K⁻¹）で収縮します。このギャップが80MPaを超える剪断張力を生み、ガラス表面ごと引きちぎってクレーター状の凹みを残します。',
        type: 'warning',
        boxText: '砂糖剥離の鉄則：キャラメルやジャムを絶対に天板上で冷まして固めないでください。ガラスの100倍以上の収縮差が表面を物理的に引き剥がします。'
      },
      {
        title: '安全に削り取る「熱いうちに30°平刃スクレーパー」除去手順',
        content: '甘い汁が吹きこぼれたら加熱を止め、天板がまだ熱いうちに耐熱ミトンを着用し、専用の平刃金属スクレーパーをガラス面に対して30度の低い角度で寝かせて、溶けた砂糖を冷たい端や金属ヘラへ押し出します。人肌に冷めてから専用クリームで磨き上げてください。刃の角を立てたり、スチールウール・氷水を使うのは厳禁です。',
        type: 'tip',
        boxText: '安全な除去法：火傷防止ミトンを着け、冷える前に平刃スクレーパーを30度にあてて素早く掻き取るのがクレーター傷を防ぐ唯一の方法です。'
      },
      {
        title: 'シリコン保護マット：IH（230°C未満）は使用可・ラジエント（電熱）は発煙溶着リスク',
        content: '鍋底の擦り傷防止で人気のシリコン製焼け焦げ防止シートは、磁力で鍋底だけを加熱する「IHコンロ」で230°C（450°F）未満の通常調理に限り使用可能です。しかし赤熱するラジエントヒーター（400°C〜550°C+）の上にシリコンマットを敷くと即座に熱分解して有毒煙を出し、ガラスに永久融着してしまいます。',
        type: 'warning',
        boxText: 'IH対ラジエント：シリコン保護マットはIH専用（230°C上限）です。高温になるラジエント・ハロゲンコンロで使うと溶けて天板に焼き付きます。'
      },
      {
        title: '缶詰の落下衝撃と鋳鉄鍋の石英砂：ヘルツ円錐亀裂とグリフィス傷の罠',
        content: '上部吊り戸棚（50cm）から450gの缶詰が落ちると、1mm²未満の縁に900MPa超のヘルツ接触圧が集中し4mm厚天板を一気に貫通します。また粗塩や野菜の石英砂（モース硬度7.0、ガラス6.2より硬い）を噛んだまま重い鋳鉄鍋を引きずると深い傷（グリフィス欠陥）がつき、耐衝撃強度が半分以下に低下します。',
        type: 'fact',
        boxText: '破損予防：コンロ真上の棚から重い缶詰を移動し、鋳鉄鍋や土鍋は決して引きずらず真上に持ち上げて移動してください。'
      },
      {
        title: '細いひび割れでも絶対使用禁止：直下200V〜240V回路への浸水感電リスク',
        content: 'ガラストップの数ミリ下には200V〜240V・30〜50アンペアの高電圧回路や発熱リボンが配置されています。わずかな貫通クラックから塩分を含む煮汁や水拭き水分が侵入すると、激しいアーク放電・火災・調理台全体の感電を引き起こします。ひび割れを見つけたら即座に分電盤の専用ブレーカーを遮断し、天板交換を行ってください。',
        type: 'warning',
        boxText: '高電圧緊急対応：たとえ端の細いひびでも使用を続けず、直ちに主分電盤のコンロ専用ブレーカーを落として天板を交換してください。'
      }
    ],
    conclusion: 'ガラストップを長持ちさせ安全に使う鍵は、上の棚に缶詰を置かない、鋳鉄鍋を持ち上げて運ぶ、砂糖溢れは熱いうちに30°で削る、シリコンシートはIH低温調理限定にする、ひび割れ時は即座にブレーカーを切る、の5点です。',
    faqs: [
      {
        question: '天板の端に小さなひび割れがあるだけなら、別の口を使って料理できますか？',
        answer: 'いいえ、絶対にできません。加熱冷却の膨張でひびが急速に広がるほか、吹きこぼれ液がひびから直下の200V〜240V配線へ到達して漏電爆発や火災を起こす恐れがあります。'
      },
      {
        question: 'なぜジャムの吹きこぼれを拭いた後、ガラスが欠けたような穴が残るのですか？',
        answer: '高温の糖分がガラス表面のシリカと化学結合し、冷却時にガラスの100倍以上の速さで収縮するため、表面のガラス片ごと引きちぎられてクレーター（剥離）ができます。'
      },
      {
        question: 'ガラストップに焦げ付いた砂糖を傷つけずに落とす正しい手順は？',
        answer: '天板がまだ熱いうちに耐熱ミトンをはめ、平刃のカミソリスクレーパーを30度に寝かせて溶けた砂糖を押し出します。冷えて固まってから削るとガラスが剥離します。'
      },
      {
        question: 'シリコン製のコンロ保護シートは電気ガラスコンロすべてに使えますか？',
        answer: 'いいえ。230°C以下のIHコンロのみ対応製品が使えます。発熱体が直接赤熱するラジエントヒーターで使うと溶けて焼き付き故障の原因になります。'
      },
      {
        question: '割れたガラストップをエポキシ接着剤や車用ガラスリペア剤で直せますか？',
        answer: '直せません。調理高温で樹脂が劣化発煙し、200V〜240Vの電気絶縁性能や構造強度も回復しないため、メーカー純正ガラス天板の交換のみが安全です。'
      }
    ],
    relatedTools: [
      { name: 'ガラストップ破壊診断モデラー', url: '/ja/tools/glass-cooktop-fracture-simulator/' },
      { name: 'IH天板剥離・熱応力シミュレーター', url: '/ja/tools/induction-cooktop-delamination-modeler/' },
      { name: 'IH対応鍋＆磁石テストチェッカー', url: '/ja/tools/induction-cookware-compatibility-checker/' }
    ]
  },
  {
    slug: 'imported-aluminum-brass-cookware-lead-fda-2026-safety-guide',
    title: '2025–2026年FDA輸入アルミ・真鍮・Hindalium製鍋の鉛溶出警告：再生スクラップ合金が酸性料理へ鉛を溶かす仕組みと304/316ステンレス代替',
    category: 'materials',
    excerpt: '輸入アルミ鍋・真鍮鍋・Hindalium（ヒンダリウム）鍋の鉛警告について知りたい方へ。米FDAの2025–2026年安全警告の背景、家庭向け塗料用鉛スワブが金属鍋で誤判定を起こす理由、安全なステンレス鍋への買い替え基準を解説。',
    date: waveDate,
    readTime: '18 分で読める',
    author: 'IsItKitchenSafe',
    intro: '2025年から2026年にかけて、米国食品医薬品局（FDA）および地方公衆衛生研究所は、輸入されたアルミ・真鍮および「Hindalium」「Indolium」と称する特定合金製の深鍋（カダイ／カラヒ）、圧力鍋、蒸し器について相次いで鉛溶出の安全警告や輸入差し止めを発出しました。米CDCは小児・妊婦・成人において「安全な血中鉛濃度は存在しない」と明言しており、再生スクラップ合金の冶金学的リスクと信頼できる交換素材の選定が不可欠です。',
    sections: [
      {
        title: '2025–2026年 FDA安全・輸入警告：未認証輸入アルミ・真鍮・Hindalium製調理器具',
        content: '規格管理されたバージン食品グレードアルミ（AA3003/AA1100）とは異なり、FDAの警告対象となった特定輸入バッチ（Rashko Baba、Saraswati Strips Tiger White、IKM関連製品等）は酸性試験液に対して高濃度の鉛を溶出しました。FDAは対象鍋や無銘の疑わしい輸入合金鍋をリユース店へ寄付せず直ちに廃棄するよう勧告しています。',
        type: 'warning',
        boxText: 'FDA勧告：警告対象または出所不明の輸入再生アルミ・真鍮・Hindalium製鍋は調理に使わず、他者へ譲らず確実に廃棄してください。'
      },
      {
        title: '二次スクラップ精錬の罠：なぜアルミや真鍮に鉛が混入するのか',
        content: '規制外の安価な鋳造工場では、自動車ラジエーターのはんだ材、ホイールバランスウェイト、鉛入り快削真鍮継手などの雑多なスクラップを混融して鍋を作ります。アルミニウム結晶中に溶け込めない鉛は粒界に偏析し、トマト・タマリンド・レモン・ヨーグルトなどの酸性塩分煮込み（pH 3.5〜5.5）で味や色を変えずPb²⁺イオンとして溶出します。',
        type: 'fact',
        boxText: '混入メカニズム：混合スクラップ由来の鉛は金属粒界に残り、トマトや酸味の強い料理で無味無臭のまま食品へ溶け出します。'
      },
      {
        title: 'CDCの「安全な血中鉛レベルはゼロ」基準：乳幼児の神経影響と成人リスク',
        content: '米国CDCおよびWHOは血中鉛に安全な下限値はないと明記しています。鉛は乳幼児・胎児の神経シナプス形成を阻害しIQ低下や発達障害を招くほか、成人の高血圧・腎機能低下にも関与します。疑わしい鍋で日常的に酸味料理を作っていた場合は医師へ血中鉛検査を相談してください。',
        type: 'warning',
        boxText: '安全閾値ゼロ：特に子どもや妊娠中の家庭ではわずかな鉛曝露も許容されません。日常使用の心当たりがあれば医療機関へご相談ください。'
      },
      {
        title: '市販の家庭用鉛テスト綿棒が金属鍋で信頼できない理由（対 XRF / ICP-MS）',
        content: 'ホームセンター等の壁塗料向けロジゾン酸・硫化物綿棒は、アルミ鍋表面の酸化被膜に遮られて偽陰性（鉛を見逃す）を起こす一方、真鍮中の銅や亜鉛に反応して偽陽性を生じます。正確な検証には蛍光X線分析（XRF）および酢酸溶出液のICP-MS精密分析が必要です。',
        type: 'tip',
        boxText: '検査の注意点：塗料用簡易綿棒は金属調理器具では誤判定が多発するため、メーカーの食品接触試験証明書やラボ分析値が唯一の根拠となります。'
      },
      {
        title: '重金属フリーの確実な代替：AISI 304/316ステンレス・正規鋳鉄・ホウケイ酸ガラス',
        content: '酸の強いカレー、トマトソース、幼児食には、食品接触規格準拠の信頼あるAISI 304（18/8）または316Ti多層ステンレス鋼製鍋、トレーサブルな正規鋳鉄鍋、ホウケイ酸ガラス3.3容器への切り替えが鉛リスクを根絶する最良解です。',
        type: 'success',
        boxText: '安全な買い替え：出所確かな304/316ステンレス鋼や正規鋳鉄鍋なら、酸性料理でも鉛溶出リスクゼロで長く愛用できます。'
      }
    ],
    conclusion: '金属合金の鉛汚染は見た目や匂いで判別できません。FDA警告対象や不透明な輸入再生アルミ・真鍮鍋は確実に処分し、家庭用塗料スワブに頼らず、信頼できる304/316ステンレス鍋を選びましょう。',
    faqs: [
      {
        question: 'Hindalium（ヒンダリウム）鍋とは何ですか？なぜFDAが警告したのですか？',
        answer: '南アジア等で普及しているアルミ合金鍋の商称ですが、2025–2026年のFDA調査で汚染スクラップ由来とみられる輸入バッチから食品への有害な鉛溶出が検出されました。'
      },
      {
        question: '疑わしい輸入アルミ鍋や真鍮鍋をリサイクルショップに寄付してもよいですか？',
        answer: 'いいえ。FDAは他の家庭での鉛中毒を防ぐため、再使用できないよう廃棄処分することを求めています。'
      },
      {
        question: '市販の簡易鉛チェックスワブで手持ちのアルミ鍋を検査できますか？',
        answer: '正確には判定できません。アルミの酸化被膜で偽陰性が出たり、銅・亜鉛等で偽陽性が出たりするためです。'
      },
      {
        question: 'どのような料理が汚染鍋から最も多く鉛を溶かし出しますか？',
        answer: 'トマト、タマリンド、レモン、酢、ヨーグルトや塩分を多く含む高温・長時間の煮込み料理です。'
      },
      {
        question: '酸性の強い料理や子どもの食事に最も安全な代替鍋は何ですか？',
        answer: '食品接触規格に適合した信頼できるブランドの304（18/8）または316ステンレス多層鍋やホウケイ酸ガラス鍋です。'
      }
    ],
    relatedTools: [
      { name: '調理器具 有害溶出リスクスコアカード', url: '/ja/tools/toxic-leaching-scorecard/' },
      { name: 'バーコード＆CPSC/FDA リコールスキャナー', url: '/ja/tools/product-recalls-scanner/' },
      { name: 'ステンレス重金属（ニッケル・クロム）溶出モデラー', url: '/ja/tools/stainless-steel-heavy-metal-leaching-modeler/' }
    ]
  },
  {
    slug: 'bodum-french-press-granitestone-pan-panasonic-toaster-2026-recalls-guide',
    title: '2026年後半 重大キッチンリコール総まとめ：ボダム（Bodum）フレンチプレス590万台・Granitestone炒め鍋・パナソニック NB-G200 トースターオーブン',
    category: 'appliances',
    excerpt: '2026年に米国CPSCから発表された主要キッチンリコールを点検：約590万台のボダム ガラス製フレンチプレス（2026年10月）、74万セットのGranitestoneフライパン（4月）、パナソニック NB-G200 トースターオーブン（7月）。',
    date: waveDate,
    readTime: '17 分で読める',
    author: 'IsItKitchenSafe',
    intro: 'ノンフライヤーや電気圧力鍋以外にも、2026年の米国消費者製品安全委員会（CPSC）では数百万世帯に影響する3つの大型キッチンリコールが実施されています。2026年10月29日のボダム（Bodum）交換可能ガラス製フレンチプレス約590万台、4月2日のGranitestone Diamond Pro Blue ソテーパン約74万セット、7月16日のパナソニック製トースターオーブン NB-G200 約11,480台です。それぞれの物理的故障メカニズムと公式返金・無償対応を確認しましょう。',
    sections: [
      {
        title: '2026年10月29日 CPSCリコール：約590万台のボダム フレンチプレス（ガラス破損）',
        content: 'CPSCは2026年10月29日、交換式ガラスカラフェを備えたボダムの8カップ・12カップ用フレンチプレス約590万台（Bistro、Brazil、Caffettiera、Chambord、Crema、Java、Jesper、Kenya各シリーズ）について改修リコールを発表しました。金属スプーンでかき混ぜると内壁に微細なグリフィス傷が刻まれ、熱湯を注いだりプランジャーを押した際に突発破損して重度の火傷・裂傷を招くため、金属スプーン使用を中止し無償プラスチック製マドラーと警告ラベルを受け取る必要があります。',
        type: 'warning',
        boxText: 'ボダム リコール（2026年10月）：対象8/12カップガラスカラフェ約590万台。金属スプーンでの撹拌を止め、公式無償プラスチックスプーンを申請してください。'
      },
      {
        title: '2026年4月2日 CPSCリコール：Granitestone Diamond Pro Blue フライパン74万セット',
        content: '2026年4月2日、E Mishan社およびCPSCはGranitestone Diamond Pro Blue ステンレスソテーパン2点セット（10インチ・11.5インチ、UPC 0-80313-08131-6）約74万セットをリコールしました。加熱時にハンドル固定ネジの金属キャップが外れて勢いよく飛び出す事例が発生しており、即時使用中止とGSRecall.comでの全額返金対象となっています。',
        type: 'warning',
        boxText: 'Granitestone リコール（2026年4月）：Diamond Pro Blue（UPC 0-80313-08131-6）は加熱時にネジ蓋が飛び出す危険があり全額返金対象です。'
      },
      {
        title: '2026年7月16日 CPSCリコール：パナソニック トースターオーブン NB-G200（電源コード絶縁不備）',
        content: '2026年7月16日、CPSCはパナソニックのステンレス製電気トースターオーブン（型番 NB-G200、下部温度ダイヤル仕様、約11,480台）をリコールしました。電源コードの耐熱グラスファイバー保護スリーブの被覆が不十分で感電・火災の恐れがあるため、直ちにコンセントを抜きパナソニック窓口で全額返金を申請してください。',
        type: 'warning',
        boxText: 'パナソニック NB-G200 リコール（2026年7月）：電源コード絶縁スリーブ不足により感電・火災危険。直ちに電源プラグを抜いて返金申請を。'
      },
      {
        title: 'ガラスカラフェ破壊の科学：金属スプーンの擦り傷と熱湯衝撃の相乗効果',
        content: 'ガラスは圧縮には強いものの引張応力に弱い脆性材料です。ステンレス製スプーン（モース硬度5.0〜5.5）が内面に15〜40μmの微細傷をつけると、95°C〜100°Cの熱湯注入時の引張熱応力とプランジャー圧が傷先に集中して一気に破断します。撹拌には木・竹・シリコン製のみを使い、割れを防ぐなら二重構造304ステンレス製が最適です。',
        type: 'fact',
        boxText: 'ガラス破壊力学：金属スプーンによる内側の微小傷が熱湯破損の引き金になります。ガラス容器の撹拌は必ずシリコンか木製で行いましょう。'
      },
      {
        title: '型番ラベル・UPC確認と公式リコール請求の3分チェック',
        content: '3分で点検を済ませましょう：オーブン底面や背面の型番ラベル（NB-G200）を確認し、購入履歴でGranitestoneのUPC（0-80313-08131-6）を照合し、ガラス製コーヒーサーバーは光に透かしてスプーン傷や欠けがないか確認してください。リコール品の再販売や譲渡は厳禁です。',
        type: 'tip',
        boxText: '家庭点検チェック：底面型番と注文UPCを確認し、ガラスサーバーの傷を光に透かして点検、中古購入時はリコールスキャナーで照会を。'
      }
    ],
    conclusion: 'ガラスサーバーの金属スプーン傷、ネジ蓋の熱膨張飛び出し、コード保護スリーブの被覆不足など、2026年のリコールは日常の小さな構造リスクが重大事故につながることを示しています。お持ちの製品を今すぐ確認し、公式の返金・改修手続きを進めてください。',
    faqs: [
      {
        question: '2026年10月のボダム フレンチプレスのリコールは全額返金されますか？',
        answer: '返金ではなく無償改修（プラスチック製スプーンと注意ラベルの送付）リコールです。金属スプーン使用を中止し、ひびや欠けのあるカラフェは即座に廃棄してください。'
      },
      {
        question: '2026年4月にリコールされたGranitestoneフライパンはどれですか？',
        answer: 'Costco・Walmart.com・Amazon等で販売されたGranitestone Diamond Pro Blue 10＆11.5インチ2点セット（UPC 0-80313-08131-6）で、GSRecall.comから全額返金を受けられます。'
      },
      {
        question: 'パナソニック NB-G200 トースターオーブンはなぜリコールされましたか？',
        answer: '電源コードを覆う保護用グラスファイバースリーブが不十分で、感電および火災のリスクがあるため全額返金リコールとなりました。'
      },
      {
        question: 'なぜ耐熱ガラスのフレンチプレスが金属スプーンで割れるのですか？',
        answer: '硬い金属スプーンがガラス内壁に微細なグリフィス傷を刻み、熱湯と押し下げ圧力による応力がその傷先に集中して突然砕けるためです。'
      },
      {
        question: '割れる心配のない安全なフレンチプレスの代替素材は？',
        answer: '食品グレードの二重構造AISI 304（18/8）ステンレス製フレンチプレスなら、熱衝撃や落下破損がなく保温性にも優れます。'
      }
    ],
    relatedTools: [
      { name: 'バーコード＆CPSC/FDA リコールスキャナー', url: '/ja/tools/product-recalls-scanner/' },
      { name: 'ガラス・セラミック熱衝撃破壊シミュレーター', url: '/ja/tools/thermal-shock-simulator/' },
      { name: 'ガラストップ破壊診断モデラー', url: '/ja/tools/glass-cooktop-fracture-simulator/' }
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

console.log('=== WAVE 80 GUIDE GENERATION COMPLETE ===');
