// Master script to execute Wave 49 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave49Slugs, newComparisonsEn } = require('./generate-wave49-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave49-es.cjs');
const { newComparisonsPt } = require('./build-wave49-pt.cjs');
const { newComparisonsZh } = require('./build-wave49-zh.cjs');
const { newComparisonsJa } = require('./build-wave49-ja.cjs');

console.log('--- STARTING WAVE 49 INJECTION ---');

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
  const filtered = existing.filter(item => !wave49Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} -> New count: ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
let specsContent = fs.readFileSync(specsPath, 'utf8');

const newSpecs = {
  "ceramic-vs-stainless-steel-burr-coffee-grinder": {
    "materialThermal": {
      "property": "Micro-Machined Cutting Geometry vs. Sintered Alumina Thermal Retention",
      "threshold": "CNC 420 Martensitic Steel (55–58 HRC) vs. Alumina Ceramic (Mohs 9, k = 18–30 W/m·K)",
      "details": "Razor-sharp 5-axis CNC stainless steel cutting facets cleanly slice coffee endosperm into unimodal particle distributions with up to 60% fewer micro-fines; molded ceramic burrs crush beans under compression, trapping frictional heat that volatilizes delicate aromatic terpenes."
    },
    "safetyStandard": {
      "organization": "EC / FDA / ISO",
      "standard": "Framework Regulation (EC) No 1935/2004 & FDA 21 CFR § 174.5 / ISO 8442",
      "citation": "European and FDA standards for repeated food contact metallurgy, heavy metal limits, and cutting tool safety."
    },
    "applianceSpecs": {
      "parameter": "Uniform Particle Distribution & Chipping Ingestion Prevention",
      "guideline": "Mandate hardened stainless steel burrs for specialty espresso and pour-over brewing to eliminate bitter fines and prevent ceramic chipping from incidental farm pebbles."
    }
  },
  "silicone-vs-stainless-steel-ice-cube-tray": {
    "materialThermal": {
      "property": "Passivated Chromium Oxide VOC Barrier vs. Polysiloxane Lipophilic Odor Adsorption",
      "threshold": "18/8 Stainless Steel (k = 16 W/m·K, 0.00% VOC Permeability) vs. Silicone (k = 0.2 W/m·K)",
      "details": "18/8 stainless steel completely halts lipophilic freezer gas adsorption, freezing water 3x faster with zero chemical migration; porous polysiloxane silicone matrices adsorb stale sulfur and fatty freezer odors, transferring off-flavors into ice."
    },
    "safetyStandard": {
      "organization": "Council of Europe / FDA / LFGB",
      "standard": "Council of Europe Resolution CM/Res(2013)9 & FDA 21 CFR § 177.2600 / LFGB § 31",
      "citation": "European guidelines for metals in contact with food and German LFGB extraction thresholds for food-contact elastomers."
    },
    "applianceSpecs": {
      "parameter": "Freezer VOC Infiltration & Rapid Potable Freezing",
      "guideline": "Deploy 18/8 stainless steel lever ice trays for daily odorless beverage ice; reserve platinum-cured silicone exclusively for flexible craft spherical molds and bake at 300°F to desorb odors."
    }
  },
  "cast-iron-vs-cordierite-pizza-pan": {
    "materialThermal": {
      "property": "Ferrous Volumetric Conductive Heat Flux vs. Refractory Silicate Thermal Shock",
      "threshold": "Cast Iron (k = 52 W/m·K, C_vol = 3.6 J/cm³·K) vs. Cordierite Ceramic (k = 2.0 W/m·K)",
      "details": "Dense ductile cast iron transfers conductive heat into wet raw dough over 20x faster than ceramic, triggering rapid Maillard crust blistering and explosive oven spring; cordierite cools upon dough contact, is vulnerable to thermal shock shattering, and irreversibly absorbs smoking grease."
    },
    "safetyStandard": {
      "organization": "ASTM / NSF / FDA",
      "standard": "ASTM C484 (Thermal Shock Resistance) & NSF/ANSI 51 (Food Equipment Materials) / FDA 21 CFR § 175.300",
      "citation": "Standard test methods for ceramic thermal shock and NSF commercial cookware material sanitization."
    },
    "applianceSpecs": {
      "parameter": "Instant Conductive Crust Searing & Thermal Fracture Immunity",
      "guideline": "Preheat heavy cast iron pizza pans in 500°F home ovens or open-flame grills for maximum bottom crust crispness; avoid using dish soap or cold water on porous cordierite ceramic stones."
    }
  },
  "stainless-steel-vs-plastic-measuring-cups": {
    "materialThermal": {
      "property": "Austenitic Dimensional Creep Resistance vs. Thermoplastic Heat Deflection Warping",
      "threshold": "Grade 304 Stainless Steel (17.3 × 10^-6 /K) vs. Polypropylene/ABS (100–150 × 10^-6 /K)",
      "details": "Seamless stamped 18/8 stainless steel maintains permanent NIST Handbook 105-2 baking volumetric accuracy through high-heat dishwasher drying; polypropylene measuring cups warp at >65°C, introducing 5%–15% recipe volume errors while shedding microplastics from knife leveling."
    },
    "safetyStandard": {
      "organization": "NIST / ASTM / FDA",
      "standard": "NIST Handbook 105-2 (Specifications for Field Standard Measures) & ASTM E1272 / FDA 21 CFR § 177.1520",
      "citation": "National volumetric measurement tolerances for laboratory/baking standards and FDA olefin polymer contact safety."
    },
    "applianceSpecs": {
      "parameter": "Volumetric Stoichiometric Calibration & Microplastic Shedding Elimination",
      "guideline": "Utilize heavy-gauge stamped 18/8 stainless steel measuring sets with etched markings for precision baking; replace warped or scratched plastic measuring cups to prevent leavening failures and microplastic ingestion."
    }
  },
  "stainless-steel-vs-plastic-salad-spinner": {
    "materialThermal": {
      "property": "Electropolished Biofilm Pathogen Barrier vs. High-RPM Centrifugal Vibration Stability",
      "threshold": "18/8 Stainless Steel (Ra < 0.25 μm, Tare Mass ~1.5 kg) vs. Resin (Ra > 0.8 μm, Mass ~0.5 kg)",
      "details": "Electropolished non-porous 18/8 stainless steel outer basins eliminate 99.9% of Listeria and E. coli biofilms, resisting soil sand micro-scratching and absorbing 800 RPM centrifugal wobbling; lightweight plastic spinners vibrate violently, develop pathogen-harboring micro-furrows, and craze in dishwashers."
    },
    "safetyStandard": {
      "organization": "CDC / FDA / NSF",
      "standard": "FDA Food Code § 4-101.11 (Food-Contact Cleanability) & NSF/ANSI 2 (Food Equipment Sanitation)",
      "citation": "Federal food hygiene requirements for smooth, cleanable, non-absorbent surfaces for ready-to-eat produce."
    },
    "applianceSpecs": {
      "parameter": "Post-Harvest Produce Biofilm Sanitation & Centrifugal Inertial Stability",
      "guideline": "Select stainless steel salad spinners for washing raw garden greens to eliminate bacterial biofilm survival in scratches; utilize the heavy metallic outer basin as a chilled serving salad bowl."
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
console.log('✅ Updated src/data/specs/compare.cjs with Wave 49 specifications');

// 3. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
if (fs.existsSync(llmsPath)) {
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  llmsContent = llmsContent.replace(/133\s+comparisons\s+per\s+language\s+\(665\s+localized\s+pages\)/g, '138 comparisons per language (690 localized pages)');
  llmsContent = llmsContent.replace(/133\s+head-to-head\s+safety\s+comparisons/g, '138 head-to-head safety comparisons');
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('✅ Updated public/llms.txt');
}

// 4. Update README.md if it mentions comparison count
const readmePath = path.resolve('README.md');
if (fs.existsSync(readmePath)) {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/133\s+comparisons\s+×\s+5\s+languages\s+=\s+665\s+localized\s+pages/g, '138 comparisons × 5 languages = 690 localized pages');
  readmeContent = readmeContent.replace(/133\s+comparisons/g, '138 comparisons');
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
    // Ensure salad-spinner, measuring-cups, ice-cube-tray are mapped under plastic
    if (!content.includes('salad-spinner|')) {
      content = content.replace(
        /(citrus-juicer)/g,
        'citrus-juicer|salad-spinner|measuring-cups|ice-cube-tray'
      );
    }
    // Ensure burr-grinder is mapped under descaling
    if (!content.includes('burr-grinder|')) {
      content = content.replace(
        /(moka)/g,
        'moka|burr-grinder'
      );
    }
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Updated tool routing in ${relPath}`);
  }
}

console.log('--- WAVE 49 INJECTION COMPLETE ---');
