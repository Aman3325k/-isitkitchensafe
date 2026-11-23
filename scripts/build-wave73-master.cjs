// Master script to execute Wave 73 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave73Slugs, newComparisonsEn } = require('./generate-wave73-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave73-es.cjs');
const { newComparisonsPt } = require('./build-wave73-pt.cjs');
const { newComparisonsZh } = require('./build-wave73-zh.cjs');
const { newComparisonsJa } = require('./build-wave73-ja.cjs');

console.log('--- STARTING WAVE 73 INJECTION ---');

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
  const filtered = existing.filter(item => !wave73Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} comparisons to ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
delete require.cache[require.resolve(specsPath)];
const existingSpecs = require(specsPath);

const newSpecs = {
  "enameled-vs-raw-cast-iron-dutch-oven": {
    "materialThermal": {
      "property": "Vitreous Porcelain Enamel Glass Melt vs Cross-Linked Polymerized Triglyceride Patina",
      "threshold": "Porcelain Enamel (Vitreous glass, non-reactive to pH 2.0) vs Raw Cast Iron (Acid-sensitive Fe2+/Fe3+ ion leaching)",
      "details": "Vitreous porcelain enamel provides an impervious, inert silicate barrier preventing iron extraction into acidic tomato or wine braises, whereas raw cast iron develops a hydrophobic seasoning layer susceptible to chemical stripping below pH 4.5."
    },
    "safetyStandard": {
      "organization": "FDA / ISO / DIN",
      "standard": "FDA 21 CFR § 175.300 & ISO 4531 (Vitreous Enamels) & DIN EN 13834",
      "citation": "Food contact migration release limits for heavy metals (lead, cadmium, aluminum) in vitreous enamel cookware and purity standards for cast iron."
    },
    "applianceSpecs": {
      "parameter": "260°C (500°F) Oven Braising & Radiant Heat Cooktop Stability",
      "guideline": "Avoid sudden thermal shocks such as running cold tap water into a 200°C enameled pot to prevent catastrophic micro-crazing and enamel spalling."
    }
  },
  "borosilicate-vs-soda-lime-glass-bakeware": {
    "materialThermal": {
      "property": "Low Thermal Expansion Boron Trioxide Network vs Soda-Lime Silicate Stress Susceptibility",
      "threshold": "Borosilicate 3.3 (CTE ~3.3 × 10⁻⁶/K, ΔT >150°C) vs Tempered Soda-Lime (CTE ~9.0 × 10⁻⁶/K, ΔT 50°C–60°C)",
      "details": "Type 3.3 borosilicate glass possesses a low linear thermal expansion coefficient driven by 12–13% B2O3, mitigating mechanical strain during temperature swings and preventing sudden catastrophic oven fractures caused by moisture droplets or cold basting liquids."
    },
    "safetyStandard": {
      "organization": "ISO / DIN / ASTM",
      "standard": "ISO 3585 (Borosilicate Glass 3.3) & DIN EN 1183 (Thermal Shock Resistance) & ASTM C149",
      "citation": "Standard test methods for thermal shock resistance of glass containers and laboratory-grade chemical durability ratings for food-contact vitreous ware."
    },
    "applianceSpecs": {
      "parameter": "230°C (450°F) Oven Roasting & Cold Basting Liquid Impact",
      "guideline": "Never set a hot glass baking dish on a wet countertop or damp cloth; use dry wooden cutting boards or silicone trivets to prevent localized thermal contraction."
    }
  },
  "hard-anodized-aluminum-vs-ceramic-nonstick-cookware": {
    "materialThermal": {
      "property": "Electrochemical Al2O3 Sapphire Matrix vs Sol-Gel Nanoporous Silica Network",
      "threshold": "Hard-Anodized PTFE (HV 400–500 base, 3–5 year life) vs Sol-Gel Silica (Mohs 5–6, 9–18 month peak life)",
      "details": "Electrochemical oxidation produces an amorphous Al2O3 layer twice as hard as stainless steel to anchor multi-layer PTFE coatings, whereas sol-gel silica matrices offer complete zero-PFAS non-toxic peace of mind but suffer oil impregnation in microscopic pores over repeated cooking cycles."
    },
    "safetyStandard": {
      "organization": "FDA / EFSA / BfR",
      "standard": "FDA 21 CFR § 177.1550 (Perfluorocarbon Resins) & Commission Regulation (EU) No 10/2011 & BfR LI",
      "citation": "Safety thresholds for nonstick fluoropolymers under repeated food contact and testing criteria for release of volatile organic substances from ceramic coatings."
    },
    "applianceSpecs": {
      "parameter": "260°C (500°F) Cooktop Searing & Oven Finishing Boundaries",
      "guideline": "Never heat PTFE nonstick pans dry on high heat; keep stove temperatures below 260°C (500°F) to prevent fluoropolymer pyrolysis."
    }
  },
  "cordierite-vs-cast-iron-pizza-stone": {
    "materialThermal": {
      "property": "Capillary Porous Moisture Wicking vs High Conductive Heat Flux Kinetics",
      "threshold": "Cordierite (~2.0 W/m·K, micro-porous steam venting) vs Cast Iron (~45 W/m·K, 15× faster thermal dump)",
      "details": "Cordierite ceramic wicks steam away from the pizza bottom for a dry, crisp cracker crust in 450°C wood-fired ovens, whereas dense cast iron dumps massive thermal energy directly into dough to maximize oven spring and crust blister in standard 250°C home ovens."
    },
    "safetyStandard": {
      "organization": "FDA / NSF / DIN",
      "standard": "FDA 21 CFR § 175.300 & NSF/ANSI Standard 51 (Food Equipment Materials) & DIN EN 13834",
      "citation": "Food equipment sanitary criteria, non-absorptive surface guidelines for cookware, and metal purity requirements for thermal food prep tools."
    },
    "applianceSpecs": {
      "parameter": "260°C (500°F) Domestic Oven Baking & 450°C (850°F) Outdoor Pellet Oven",
      "guideline": "Never clean porous cordierite with soap or detergent; clean with a stiff brush and water only to avoid surfactant migration into baked foods."
    }
  },
  "slow-masticating-vs-centrifugal-juicer": {
    "materialThermal": {
      "property": "Planetary Reduction Shear-Free Pressing vs High-RPM Aerobic Micro-Cavitation",
      "threshold": "Slow Masticating (40–80 RPM, ΔT <0.5°C) vs Centrifugal (10,000–15,000 RPM, ΔT 3.5°C–6.0°C)",
      "details": "Low-RPM cold mastication crushes fibrous plant cell walls without mechanical friction heating or forced-air aeration, preserving live polyphenol oxidase and delicate vitamin C, whereas high-speed centrifugal discs subject fruit pulp to violent aeration and localized thermal spikes."
    },
    "safetyStandard": {
      "organization": "FDA / EU / NSF",
      "standard": "FDA 21 CFR § 177.1595 (Polyetherimide Resins) & EU Regulation No 10/2011 & NSF/ANSI Standard 8",
      "citation": "Material safety standards for commercial and domestic food processing equipment and migration limits for plastics in contact with aqueous and fatty foods."
    },
    "applianceSpecs": {
      "parameter": "Continuous Low-RPM Augering vs 14,000 RPM Centrifugal Acceleration",
      "guideline": "Inspect centrifugal cutter discs regularly for hairline fractures; cut fibrous vegetables into 1-inch pieces to prevent slow masticator auger shaft binding."
    }
  }
};

const mergedSpecs = {
  ...existingSpecs,
  ...newSpecs
};

fs.writeFileSync(specsPath, 'module.exports = ' + JSON.stringify(mergedSpecs, null, 2) + ';\n', 'utf8');
console.log(`Updated src/data/specs/compare.cjs to ${Object.keys(mergedSpecs).length} specs`);

console.log('--- WAVE 73 INJECTION COMPLETE ---');
