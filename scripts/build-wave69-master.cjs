// Master script to execute Wave 69 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave69Slugs, newComparisonsEn } = require('./generate-wave69-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave69-es.cjs');
const { newComparisonsPt } = require('./build-wave69-pt.cjs');
const { newComparisonsZh } = require('./build-wave69-zh.cjs');
const { newComparisonsJa } = require('./build-wave69-ja.cjs');

console.log('--- STARTING WAVE 69 INJECTION ---');

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
  const filtered = existing.filter(item => !wave69Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} comparisons to ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
delete require.cache[require.resolve(specsPath)];
const existingSpecs = require(specsPath);

const newSpecs = {
  "stainless-steel-vs-plastic-food-dehydrator-trays": {
    "materialThermal": {
      "property": "Continuous Thermal Convection Creep & Polymer Embrittlement",
      "threshold": "SUS304 Wire Mesh (>800°C melting, 0.00% creep) vs Polypropylene/AS Resin (Continuous thermal limit 70°C–80°C, high creep)",
      "details": "Austenitic SUS304 wire mesh withstands multi-day dry convection heating cycles (12–48h at 70°C) with zero frame deflection, dimensional warping, or thermal degradation under acidic fruit and salty jerky contact."
    },
    "safetyStandard": {
      "organization": "FDA / EU / NSF",
      "standard": "FDA 21 CFR § 177.1520 & EU Regulation 10/2011 & NSF/ANSI Standard 51",
      "citation": "Food contact material migration standards under continuous elevated thermal exposure and cleanability criteria for food processing equipment."
    },
    "applianceSpecs": {
      "parameter": "Multi-Day Thermal Convection (70°C / 158°F) & Acidic Fruit Dehydration (pH 2.8)",
      "guideline": "Wash stainless mesh trays with non-abrasive nylon brushes; allow beef jerky trays to soak in warm water before automated dishwasher sanitizing."
    }
  },
  "stainless-steel-vs-nonstick-air-fryer-basket": {
    "materialThermal": {
      "property": "Forced-Air Convection Aerodynamics & High-Heat Polymer Pyrolysis",
      "threshold": "SUS304 Uncoated Mesh (Stable >800°C, zero VOCs) vs PTFE-Coated Aluminum (Begins pyrolytic degassing at >260°C / 500°F)",
      "details": "Perforated SUS304 stainless mesh permits maximum convective airflow for uniform Maillard browning without the dangerous risk of PTFE fluoropolymer fume release (polymer fume fever) or micro-flaking into food during high-heat air frying."
    },
    "safetyStandard": {
      "organization": "UL / FDA / EPA",
      "standard": "UL 1083 & FDA 21 CFR § 175.300 & EPA PFAS Strategic Roadmap",
      "citation": "Safety standards for domestic forced-convection frying appliances, release coatings, and regulatory policies on per- and polyfluoroalkyl substances."
    },
    "applianceSpecs": {
      "parameter": "200°C (400°F) Forced-Air Convection & Wire Mesh Basket Loading",
      "guideline": "Lightly mist stainless baskets with high-smoke-point oil before adding proteins; never use aerosol cooking sprays with propellant additives that leave sticky varnish."
    }
  },
  "stainless-steel-vs-plastic-reusable-coffee-filter": {
    "materialThermal": {
      "property": "Near-Boiling Hydrothermal Lipid Extraction & Microplastic Fibril Shedding",
      "threshold": "Photo-Etched SUS304 Foil (0.00% migration at 95°C) vs Molded PP/Woven Nylon (Plasticizer migration and microplastic shedding)",
      "details": "Ultra-fine photo-etched SUS304 mesh withstands near-boiling water (92°C–96°C) and corrosive coffee lipids with zero polymer chain scission, zero microplastic shedding, and complete flavor neutrality across thousands of brew cycles."
    },
    "safetyStandard": {
      "organization": "FDA / EFSA / DIN",
      "standard": "FDA 21 CFR § 177.1500 & EFSA Regulation (EU) No 10/2011 & DIN 10531",
      "citation": "Extraction and migration limits for plastics and food-contact metals in beverage preparation appliances under boiling hydrothermal conditions."
    },
    "applianceSpecs": {
      "parameter": "96°C (205°F) Hot Water Gravity Brew & Coffee Oil Descaling",
      "guideline": "Rinse filter immediately after brewing; soak monthly in hot water with sodium percarbonate or citric acid to dissolve rancid coffee oils and restore mesh flow."
    }
  },
  "silicone-vs-stainless-steel-steamer-basket": {
    "materialThermal": {
      "property": "Hydrothermal Steam Sterilization & Elastic Flexibility vs Rigid Structural Loading",
      "threshold": "Platinum Silicone (Rated to 250°C, scratch-free for non-stick pots) vs SUS304 Stainless (Rigid, supports heavy root vegetable loads)",
      "details": "Platinum-cured elastomeric silicone conforms seamlessly to multi-sized pots without scratching delicate non-stick coatings, while SUS304 stainless folding petals provide rigid planar support for dense squash, potatoes, and whole fish."
    },
    "safetyStandard": {
      "organization": "FDA / BfR / LFGB",
      "standard": "FDA 21 CFR § 177.2600 & BfR Recommendation XV (Silicones) & LFGB § 30/31",
      "citation": "Standards for rubber and silicone articles intended for repeated food contact and migration testing under continuous steam exposure."
    },
    "applianceSpecs": {
      "parameter": "100°C (212°F) Atmospheric Steam & Vessel Rim Conformance",
      "guideline": "Maintain water level at least 2 cm below steamer floor; use silicone-tipped tongs to lift hot folding baskets out of boiling pots safely."
    }
  },
  "borosilicate-glass-vs-stainless-steel-water-bottle": {
    "materialThermal": {
      "property": "Trace Metal Ion Leaching vs Double-Wall Vacuum Thermal Insulation",
      "threshold": "Low-Expansion Borosilicate (0.00 µg/L metal ions, taste pure) vs Double-Wall SUS304 (Maintains ice <10°C for 24h, impact immune)",
      "details": "Borosilicate glass provides 100% sensory neutrality and zero heavy metal leaching for acidic fruit waters and cold brews, while double-wall vacuum SUS304 stainless steel offers unbreakable drop resistance and unmatched thermal temperature retention."
    },
    "safetyStandard": {
      "organization": "FDA / ISO / ASTM",
      "standard": "FDA Food Code § 4-101.11 & ISO 7086-1/2 & ASTM F1083",
      "citation": "Sanitary standards for food contact surfaces, release limits for lead and cadmium in glass drinkware, and performance specifications for vacuum-insulated containers."
    },
    "applianceSpecs": {
      "parameter": "Daily Ambient Hydration & Weekly Sanitization of Silicone Gaskets",
      "guideline": "Remove and sanitize lid silicone sealing rings weekly to prevent Cladosporium mold growth; never freeze glass bottles filled to the brim."
    }
  }
};

const mergedSpecs = {
  ...existingSpecs,
  ...newSpecs
};

fs.writeFileSync(specsPath, 'module.exports = ' + JSON.stringify(mergedSpecs, null, 2) + ';\n', 'utf8');
console.log(`Updated src/data/specs/compare.cjs to ${Object.keys(mergedSpecs).length} specs`);

console.log('--- WAVE 69 INJECTION COMPLETE ---');
