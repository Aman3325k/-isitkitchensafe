// Master script to execute Wave 53 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave53Slugs, newComparisonsEn } = require('./generate-wave53-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave53-es.cjs');
const { newComparisonsPt } = require('./build-wave53-pt.cjs');
const { newComparisonsZh } = require('./build-wave53-zh.cjs');
const { newComparisonsJa } = require('./build-wave53-ja.cjs');

console.log('--- STARTING WAVE 53 INJECTION ---');

// 1. Update src/data/comparisons.json and localized files
const langMap = {
  en: { file: 'src/data/comparisons.json', data: newComparisonsEn },
  es: { file: 'src/data/comparisons.es.json', data: newComparisonsEs },
  pt: { file: 'src/data/comparisons.pt.json', data: newComparisonsPt },
  'zh-cn': { file: 'src/data/comparisons.zh-cn.json', data: newComparisonsZh },
  ja: { file: 'src/data/comparisons.ja.json', data: newComparisonsJa }
};

for (const [lang, config] of Object.entries(langMap)) {
  const filePath = path.resolve(config.file);
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log(`Current ${lang} count: ${existing.length}`);
  
  // Filter out any slugs that might already be in there (idempotency)
  const filtered = existing.filter(item => !wave53Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} -> New count: ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
let specsContent = fs.readFileSync(specsPath, 'utf8');

const newSpecs = {
  "stainless-steel-vs-plastic-water-filter-pitcher": {
    "materialThermal": {
      "property": "Austenitic Cr2O3 / Mo Passivation vs. Polycarbonate/SAN Environmental Stress Cracking",
      "threshold": "SUS304/SUS316 (0.00 ppm Extraction, Ra < 0.2 μm) vs. Polycarbonate/SAN (ESC Threshold ~50°C)",
      "details": "Medical-grade SUS304 and SUS316 austenitic stainless steel creates an electropolished, self-healing chromium(III) oxide boundary layer that provides 100% light blockage—halting photosynthetic bacterial proliferation and green algae colonization—while eliminating microplastic particulate shedding and hormone-disrupting bisphenol/phthalate leaching into drinking water."
    },
    "safetyStandard": {
      "organization": "NSF / ANSI / EPA",
      "standard": "NSF/ANSI Standard 42 & 53 (Drinking Water Treatment Units) & EPA Safe Drinking Water Act",
      "citation": "Health and aesthetic performance standards for material safety, chemical extraction limits, and zero-endocrine-disruption compliance in household water filtration."
    },
    "applianceSpecs": {
      "parameter": "Zero-Microplastic Hydration & Sunlight Algae Prevention",
      "guideline": "Deploy opaque SUS304/SUS316 stainless steel filter pitchers on sunny kitchen countertops to prevent algal blooms in de-chlorinated water; clean hopper seals fortnightly and replace carbon cartridges every 60 days."
    }
  },
  "cast-iron-vs-stainless-steel-grill-grates": {
    "materialThermal": {
      "property": "Austenitic Solid Round Bar Ductility vs. Gray Cast Iron Volumetric Thermal Mass",
      "threshold": "SUS304 Round Bars (k ~ 16 W/m·K, Yield > 205 MPa) vs. Gray Cast Iron (C_vol ~ 3.5 J/cm³·K, Yield ~150 MPa)",
      "details": "Solid 8 mm heavy-gauge SUS304 austenitic stainless steel rods provide complete immunity to atmospheric rain oxidation, withstand acidic vinegar and citrus glazes without seasoning stripping, and eliminate life-threatening wire bristle brush ingestion hazards; seasoned cast iron offers exceptional thermal heat inertia for steakhouse searing but requires continuous oil maintenance to prevent red ferric oxide rust."
    },
    "safetyStandard": {
      "organization": "FDA / CDC / NSF",
      "standard": "FDA Food Code § 4-101.11 & CDC Emergency Ingestion Hazard Guidance",
      "citation": "Commercial food equipment cleanability standards and clinical directives warning against wire bristle brush contamination and gastrointestinal perforation hazards in outdoor grilling."
    },
    "applianceSpecs": {
      "parameter": "Weatherproof Outdoor Grilling & Non-Wire Safety Maintenance",
      "guideline": "Equip backyard grills with solid 8 mm SUS304 stainless steel grates; preheat to 230°C (450°F) before grilling and clean exclusively with grooved hardwood paddles or coil-free scouring pads to eliminate wire ingestion risks."
    }
  },
  "stainless-steel-vs-aluminum-stock-pot": {
    "materialThermal": {
      "property": "Tri-Ply Clad Passivated Barrier vs. Drawn Bare Aluminum Acidic Dissolution",
      "threshold": "Tri-Ply Clad (SUS304 Interior + Pure Al Core, k ~ 205 W/m·K) vs. Bare 3003-H14 Aluminum",
      "details": "Tri-ply clad stock pots bond an encapsulated high-conductivity aluminum core between non-reactive SUS304 stainless steel sheets: the cooking surface remains 100% chemically inert, completely preventing toxic aluminum ion extraction into 24-hour acidic bone broths and tomato marinara, while the core distributes heat uniformly to prevent scorch hot-spots."
    },
    "safetyStandard": {
      "organization": "EFSA / Council of Europe / FDA",
      "standard": "EFSA Dietary Aluminum Safety Threshold (TWI 1 mg/kg bw) & Council of Europe CM/Res(2013)9",
      "citation": "Regulatory guidelines establishing tolerable human intake limits for dietary aluminum and prohibiting unanodized bare aluminum contact with acidic foodstuffs (pH < 4.5)."
    },
    "applianceSpecs": {
      "parameter": "Acidic Stock Boiling Isolation & Induction Cooktop Coupling",
      "guideline": "Utilize heavy-gauge tri-ply stainless steel stock pots for simmering tomato sauce, bone broths, and acidic preserves; add cooking salt only to actively rolling boiling water to prevent localized chloride pitting."
    }
  },
  "stainless-steel-vs-plastic-potato-ricer": {
    "materialThermal": {
      "property": "Forged High-Yield Mechanical Leverage vs. Thermoplastic 100°C Tensile Softening",
      "threshold": "Forged SUS304 (Yield > 205 MPa, 100°C Stable) vs. Polypropylene/Nylon (Yield 30–45 MPa, Tg Drop at 90°C)",
      "details": "Forged commercial SUS304 stainless steel handles generate over 200 psi extrusion force with zero frame deflection, allowing whole unpeeled hot russet potatoes and fibrous sweet potatoes to pass cleanly through perforated discs without blow-by or lumping; molded plastic ricers soften under 100°C steam, flex under pressure, and scrape microplastics into hot purees."
    },
    "safetyStandard": {
      "organization": "FDA / EU / ISO",
      "standard": "FDA 21 CFR § 177.1520 & EU Regulation 10/2011 (Food Contact Plastics / Specific Migration Limits)",
      "citation": "Specific migration limits and structural thresholds governing polymeric materials exposed to high mechanical shear and boiling food contact temperatures."
    },
    "applianceSpecs": {
      "parameter": "Zero-Microplastic Tuber Extrusion & Lump-Free Pomme Purée",
      "guideline": "Deploy heavy-duty forged stainless steel ricers for silky, lump-free potato purees and organic infant food; rinse perforated discs with cold water immediately after pressing to prevent amylose starch gelatin hardening."
    }
  },
  "stainless-steel-vs-plastic-bento-box": {
    "materialThermal": {
      "property": "Austenitic Hydrophobic Metallic Crystal Matrix vs. Polypropylene Lipophilic Sorption",
      "threshold": "SUS304/SUS316 (Vickers HV > 180, Zero Sorption) vs. PP #5 (Shore D ~70, High Lipophilic Sorption)",
      "details": "Medical-grade SUS304 and SUS316 stainless steel bento boxes provide an impenetrable non-porous barrier against warm dietary lipids (50°C–80°C), eliminating plasticizer/antioxidant migration, persistent curry odors, and indelible tomato lycopene stains; extreme surface hardness resists fork scraping that otherwise shreds microplastics from polypropylene containers."
    },
    "safetyStandard": {
      "organization": "FDA / California Prop 65 / EU",
      "standard": "FDA 21 CFR § 177.2600 & California Proposition 65 (Bisphenol & Phthalate Free)",
      "citation": "Zero-endocrine-disruption safety mandates and specific migration limits for repeated-use food containers subject to fatty food contact."
    },
    "applianceSpecs": {
      "parameter": "Child Lunch Microplastic Elimination & Hermetic Seal Hygiene",
      "guideline": "Pack daily school and workplace lunches in SUS304/SUS316 airtight stainless bento boxes; allow steaming food to vent for 5 minutes before latching lids; wash removable platinum silicone gaskets weekly to prevent mold biofilms."
    }
  }
};

// Check which specs need to be appended
for (const [slug, specObj] of Object.entries(newSpecs)) {
  if (!specsContent.includes(`"${slug}":`)) {
    const lastBraceIdx = specsContent.lastIndexOf('};');
    if (lastBraceIdx !== -1) {
      const specString = `  "${slug}": ${JSON.stringify(specObj, null, 4).split('\n').join('\n  ')},\n`;
      specsContent = specsContent.slice(0, lastBraceIdx) + specString + specsContent.slice(lastBraceIdx);
    }
  }
}
fs.writeFileSync(specsPath, specsContent, 'utf8');
console.log('✅ Updated src/data/specs/compare.cjs with Wave 53 specifications');

// 3. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
if (fs.existsSync(llmsPath)) {
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  llmsContent = llmsContent.replace(/143\s+comparisons\s+per\s+language\s+\(715\s+localized\s+pages\)/g, '148 comparisons per language (740 localized pages)');
  llmsContent = llmsContent.replace(/143\s+head-to-head\s+safety\s+comparisons/g, '148 head-to-head safety comparisons');
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('✅ Updated public/llms.txt');
}

// 4. Update README.md if it mentions comparison count
const readmePath = path.resolve('README.md');
if (fs.existsSync(readmePath)) {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/143\s+comparisons\s+×\s+5\s+languages\s+=\s+715\s+localized\s+pages/g, '148 comparisons × 5 languages = 740 localized pages');
  readmeContent = readmeContent.replace(/143\s+comparisons/g, '148 comparisons');
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  console.log('✅ Updated README.md');
}

// 5. Update src/pages/compare/[slug].astro and src/pages/[lang]/compare/[slug].astro routing
const astroComparePages = [
  'src/pages/compare/[slug].astro',
  'src/pages/[lang]/compare/[slug].astro'
];

for (const relPath of astroComparePages) {
  const fullPath = path.resolve(relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    // Ensure bento-box, potato-ricer, water-filter-pitcher are mapped under plastic
    if (!content.includes('bento-box|')) {
      content = content.replace(
        /(salad-spinner\|dish-drying-rack\|meat-grinder)/g,
        'salad-spinner|dish-drying-rack|meat-grinder|bento-box|potato-ricer|water-filter-pitcher'
      );
    }
    // Ensure grill-grates are mapped under castIron
    if (!content.includes('grill-grates|')) {
      content = content.replace(
        /(cast-iron\|carbon-steel\|seasoning\|\\brust\\b)/g,
        'cast-iron|carbon-steel|seasoning|\\brust\\b|grill-grates'
      );
    }
    // Ensure stock-pot is mapped under ovenTemp/cookingTemp
    if (!content.includes('stock-pot|')) {
      content = content.replace(
        /(pizza-stone\|loaf-pan)/g,
        'pizza-stone|loaf-pan|stock-pot'
      );
    }
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Updated tool routing in ${relPath}`);
  }
}

console.log('--- WAVE 53 INJECTION COMPLETE ---');
