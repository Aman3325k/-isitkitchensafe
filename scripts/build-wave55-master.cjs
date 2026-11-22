// Master script to execute Wave 55 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave55Slugs, newComparisonsEn } = require('./generate-wave55-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave55-es.cjs');
const { newComparisonsPt } = require('./build-wave55-pt.cjs');
const { newComparisonsZh } = require('./build-wave55-zh.cjs');
const { newComparisonsJa } = require('./build-wave55-ja.cjs');

console.log('--- STARTING WAVE 55 INJECTION ---');

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
  const filtered = existing.filter(item => !wave55Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} -> New count: ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
let specsContent = fs.readFileSync(specsPath, 'utf8');

const newSpecs = {
  "stainless-steel-vs-plastic-box-grater": {
    "materialThermal": {
      "property": "Photo-Etched Austenitic Chromium(III) Oxide Edge Retention vs. Thermoplastic Shear Abrasion",
      "threshold": "SUS304 (Tensile Yield > 205 MPa, Vickers HV > 180) vs. Molded ABS/PP (Shear Modulus ~1.2 GPa, ASTM D8332 Shedding)",
      "details": "Chemical photo-etched SUS304 cutting teeth cleanly slice through dense Parmigiano-Reggiano and fibrous root vegetables without cell wall crushing, eliminating the 50–200+ microplastic polymer shavings scraped off plastic grating chutes under manual torque."
    },
    "safetyStandard": {
      "organization": "NSF / FDA / ASTM",
      "standard": "NSF/ANSI Standard 51 (Food Equipment Materials) & ASTM D8332 (Standard Practice for Microplastic Enumeration)",
      "citation": "Food contact materials durability and physical extraction criteria preventing polymer particulate migration under mechanical abrasion."
    },
    "applianceSpecs": {
      "parameter": "Zero-Microplastic Dairy Grating & Cut-Resistant Hand Safety",
      "guideline": "Deploy solid SUS304 box graters over rigid cutting boards; always equip an ANSI Cut-Level 5 protective glove when grating small food ends to eliminate hand lacerations; wash vertically in dishwasher to flush cheese fats."
    }
  },
  "stainless-steel-vs-plastic-mandoline-slicer": {
    "materialThermal": {
      "property": "Structural Chassis Deflection Resistance vs. Molded Thermoplastic Beam Bending",
      "threshold": "All-Metal SUS304 Chassis (Young's Modulus ~193 GPa) vs. ABS/Polycarbonate (Modulus ~2.3 GPa, High Deflection)",
      "details": "Heavy-gauge solid SUS304 stainless steel runway eliminates chassis deflection under downward slicing load, preventing blade stalls and sudden catastrophic hand slippage across martensitic cutting edges while ensuring strict 0.5 mm slice thickness uniformity."
    },
    "safetyStandard": {
      "organization": "OSHA / ANSI / FDA",
      "standard": "ANSI/ISEA 105 (Cut Resistance Standards) & FDA Food Code 2022 § 4-101.11 (Food Contact Durability)",
      "citation": "Occupational kitchen safety standards and mechanical precision specifications for high-risk cutting and slicing equipment."
    },
    "applianceSpecs": {
      "parameter": "Zero-Flex Slicing Geometry & Cut-Level 5 Operator Protection",
      "guideline": "Mandatory deployment of ANSI Cut-Level 5 Kevlar gloves and track-locked safety pushers during all mandoline operation; clean surgical blades using long-handled stiff brushes; never wash with bare hands or sponges."
    }
  },
  "silicone-vs-metal-muffin-pan": {
    "materialThermal": {
      "property": "Addition-Cured Siloxane Elastomeric Thermal Buffer vs. Aluminized Carbon Steel High Heat Flux",
      "threshold": "Platinum-Cured Silicone (Thermal Conductivity k ~ 0.2 W/m·K, Max 230°C) vs. Aluminized Steel (k ~ 50 W/m·K, Max 260°C)",
      "details": "European LFGB platinum-cured silicone provides gentle, uniform thermal diffusion that prevents scorched muffin bottoms and eliminates fluoropolymer (PTFE/PFAS) flaking, while flexible inverted cup geometry ejects delicate egg bites without single-use paper liners."
    },
    "safetyStandard": {
      "organization": "BfR / LFGB / FDA",
      "standard": "German LFGB § 30/31 & BfR Recommendation XV (Silicones for Food Contact) & FDA 21 CFR § 177.2600",
      "citation": "European and US food-contact elastomer migration standards limiting volatile organic compounds (VOC < 0.5%) and extractables."
    },
    "applianceSpecs": {
      "parameter": "PFAS-Free Paperless Baking & Steel Rim Stability",
      "guideline": "Bake in LFGB-certified platinum silicone muffin pans with integrated steel rims at temperatures up to 220°C (425°F); perform an initial 4-hour 200°C conditioning bake prior to food use; wash in top rack of dishwasher."
    }
  },
  "ceramic-vs-glass-pie-dish": {
    "materialThermal": {
      "property": "Dense Vitrified Mineral Stoneware Volumetric Heat Capacity vs. Radiant Glass Heat Transmission",
      "threshold": "Vitrified Stoneware (C_vol ~ 3.0 J/cm³·K, High Thermal Mass) vs. Tempered Soda-Lime (C_vol ~ 2.1 J/cm³·K, Rapid Radiative Flux)",
      "details": "High-fired non-porous ceramic stoneware steadily absorbs and re-radiates deep volumetric heat into the pastry base, thoroughly crisping bottom crusts and eliminating soggy raw dough without burning sugars, while resisting catastrophic thermal shock shatter on damp countertops."
    },
    "safetyStandard": {
      "organization": "FDA / ASTM / California Prop 65",
      "standard": "FDA CPG Sec. 545.450 & California Proposition 65 (Lead & Cadmium Extraction Limits in Ceramicware)",
      "citation": "Toxicological standards limiting heavy metal glaze migration and thermal shock structural integrity in oven-to-table bakeware."
    },
    "applianceSpecs": {
      "parameter": "Soggy Bottom Prevention & Countertop Thermal Shock Protection",
      "guideline": "Preheat a heavy baking sheet on the lowest oven rack at 220°C (425°F) and place ceramic pie dish directly on top for immediate crust crisping; always rest blistering-hot pie pans on dry wooden trivets, never wet countertops."
    }
  },
  "stainless-steel-vs-plastic-fine-mesh-strainer": {
    "materialThermal": {
      "property": "Austenitic Double-Woven Twill Wire Stability vs. Polyamide 100°C Hydrothermal Softening",
      "threshold": "SUS304 Double-Woven Twill (Stable to 800°C) vs. Nylon 6,6/PP Mesh (Tg ~50°C, Hydrothermal Softening at 100°C)",
      "details": "Double-woven twill SUS304 wire mesh withstands boiling stocks, hot rendered fats, and aggressive spoon pressing without microplastic shedding or frame sagging, while non-porous electropolished wire repels carotenoid stains and allium odors."
    },
    "safetyStandard": {
      "organization": "FDA / EU / ACS",
      "standard": "FDA 21 CFR § 177.1500 (Nylon Resins) & EU Regulation 10/2011 & ACS Nano 2023 Microplastic Benchmarks",
      "citation": "Hydrothermal migration limits and mechanical integrity standards governing food contact filter media in boiling aqueous and lipophilic systems."
    },
    "applianceSpecs": {
      "parameter": "Zero-Microplastic Boiling Broth Clarification & Grease Sanitization",
      "guideline": "Use SUS304 double-twill wire strainers for clarifying boiling bone broths, hot tea, and frying oil; clean immediately after straining dairy or meat stocks with a stiff nylon brush under warm water before proteins dry."
    }
  }
};

let specsAdded = 0;
for (const [sKey, sVal] of Object.entries(newSpecs)) {
  if (!specsContent.includes(`"${sKey}":`)) {
    const formattedSpec = `  "${sKey}": ${JSON.stringify(sVal, null, 4)},\n};`;
    specsContent = specsContent.replace(/};\s*$/, formattedSpec);
    specsAdded++;
  }
}
fs.writeFileSync(specsPath, specsContent, 'utf8');
console.log(`Added ${specsAdded} new specs to src/data/specs/compare.cjs`);

// 3. Update routing in src/pages/compare/[slug].astro and [lang]/compare/[slug].astro
const compPageEn = path.resolve('src/pages/compare/[slug].astro');
let compEnContent = fs.readFileSync(compPageEn, 'utf8');

const targetRegexEn = `water-filter-pitcher|measuring-cups|ice-cube-tray)/`;
const replacementRegexEn = `water-filter-pitcher|measuring-cups|ice-cube-tray|box-grater|mandoline-slicer|muffin-pan|pie-dish|fine-mesh-strainer)/`;

if (compEnContent.includes(targetRegexEn)) {
  compEnContent = compEnContent.replace(targetRegexEn, replacementRegexEn);
  fs.writeFileSync(compPageEn, compEnContent, 'utf8');
  console.log('Updated routing in src/pages/compare/[slug].astro');
}

const compPageLang = path.resolve('src/pages/[lang]/compare/[slug].astro');
let compLangContent = fs.readFileSync(compPageLang, 'utf8');

if (compLangContent.includes(targetRegexEn)) {
  compLangContent = compLangContent.replace(targetRegexEn, replacementRegexEn);
  fs.writeFileSync(compPageLang, compLangContent, 'utf8');
  console.log('Updated routing in src/pages/[lang]/compare/[slug].astro');
}

// 4. Update public/llms.txt and README.md
const llmsPath = path.resolve('public/llms.txt');
let llmsContent = fs.readFileSync(llmsPath, 'utf8');

llmsContent = llmsContent.replace(/11,707\+ static pages/g, '11,732+ static pages');
llmsContent = llmsContent.replace(/148 comparisons per language/g, '153 comparisons per language');
llmsContent = llmsContent.replace(/740 localized pages/g, '765 localized pages');

const compAnchor = `- [Stainless Steel vs. Plastic Bento Box](https://isitkitchensafe.com/compare/stainless-steel-vs-plastic-bento-box/): Compares SUS304/SUS316 stainless steel against polypropylene (#5 PP) on lipophilic fat absorption, microplastic utensil scratches, and durability.`;

const newCompsLlms = `- [Stainless Steel vs. Plastic Bento Box](https://isitkitchensafe.com/compare/stainless-steel-vs-plastic-bento-box/): Compares SUS304/SUS316 stainless steel against polypropylene (#5 PP) on lipophilic fat absorption, microplastic utensil scratches, and durability.
- [Stainless Steel vs. Plastic Box Grater](https://isitkitchensafe.com/compare/stainless-steel-vs-plastic-box-grater/): Compares photo-etched SUS304 stainless steel against rotary plastic drum graters on microplastic shedding (ASTM D8332), palm pressure rigidity, and dairy biofilm sanitization.
- [Stainless Steel vs. Plastic Mandoline Slicer](https://isitkitchensafe.com/compare/stainless-steel-vs-plastic-mandoline-slicer/): Compares all-metal SUS304 mandolines against flexible plastic frames on chassis deflection prevention, hand slippage laceration hazards, and 0.5 mm slice thickness precision.
- [Silicone vs. Metal Muffin Pan](https://isitkitchensafe.com/compare/silicone-vs-metal-muffin-pan/): Compares European LFGB 100% platinum-cured silicone against aluminized non-stick PTFE pans on fluoropolymer degradation, paperless pop-out release, and rolled-rim rust.
- [Ceramic vs. Glass Pie Dish](https://isitkitchensafe.com/compare/ceramic-vs-glass-pie-dish/): Compares vitrified mineral stoneware ceramic against tempered soda-lime glass on soggy bottom prevention (volumetric heat capacity ~3.0 J/cm³·K), thermal shock shatter risks, and acidic fruit reactivity.
- [Stainless Steel vs. Plastic Fine Mesh Strainer](https://isitkitchensafe.com/compare/stainless-steel-vs-plastic-fine-mesh-strainer/): Compares double-woven twill SUS304 stainless steel against synthetic nylon mesh on boiling liquid microplastic shedding (100°C), thermal heat tolerance (800°C), and fat grease absorption.`;

if (!llmsContent.includes('stainless-steel-vs-plastic-box-grater')) {
  llmsContent = llmsContent.replace(compAnchor, newCompsLlms);
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('Updated public/llms.txt');
}

const readmePath = path.resolve('README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

readmeContent = readmeContent.replace(/11,707\+ static pages/g, '11,732+ static pages');
readmeContent = readmeContent.replace(/148 Head-to-Head Comparisons/g, '153 Head-to-Head Comparisons');
readmeContent = readmeContent.replace(/148 comparisons/g, '153 comparisons');

fs.writeFileSync(readmePath, readmeContent, 'utf8');
console.log('Updated README.md');

console.log('--- WAVE 55 MASTER INJECTION COMPLETED ---');
