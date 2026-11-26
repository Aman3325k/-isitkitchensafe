// Master script to execute Wave 75 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave75Slugs, newComparisonsEn } = require('./generate-wave75-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave75-es.cjs');
const { newComparisonsPt } = require('./build-wave75-pt.cjs');
const { newComparisonsZh } = require('./build-wave75-zh.cjs');
const { newComparisonsJa } = require('./build-wave75-ja.cjs');

console.log('--- STARTING WAVE 75 INJECTION ---');

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
  const filtered = existing.filter(item => !wave75Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} comparisons to ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
delete require.cache[require.resolve(specsPath)];
const existingSpecs = require(specsPath);

const newSpecs = {
  "tritan-vs-borosilicate-glass-blender-jar": {
    "materialThermal": {
      "property": "Inorganic 3.3 Borosilicate Network vs Amorphous Copolyester Hydrolysis Resistance",
      "threshold": "Type 3.3 Borosilicate (CTE 3.3 × 10⁻⁶/K, ΔT >150°C) vs Tritan Copolyester (Tg ~108°C, softening above 80°C)",
      "details": "Type 3.3 borosilicate glass is an inorganic, fused silicate matrix containing 12–13% B2O3 completely impervious to chemical extraction at 100°C, whereas copolyester polymers undergo thermal softening and micro-crazing under repeated high-heat dishwashing and vortex cavitation."
    },
    "safetyStandard": {
      "organization": "ISO / DIN / FDA",
      "standard": "ISO 3585 & DIN EN 1183 (Thermal Shock) & FDA 21 CFR § 177.1240",
      "citation": "Standard specifications for borosilicate glass 3.3 chemical durability and overall migration limits for food-contact polycyclohexane dimethylene terephthalates."
    },
    "applianceSpecs": {
      "parameter": "100°C (212°F) Boiling Soup Pureeing & 28,000 RPM Cavitation",
      "guideline": "Always remove center lid plug and drape dry towel over opening to vent steam; do not place hot glass on wet or cold countertops."
    }
  },
  "platinum-silicone-vs-peva-reusable-food-storage-bags": {
    "materialThermal": {
      "property": "Inorganic Cross-Linked Polysiloxane Matrix vs Low-Melting Thermoplastic Copolymer",
      "threshold": "Platinum Silicone (-40°C to 220°C / -40°F to 428°F) vs PEVA (Vicat softening 65°C–75°C, max temp 60°C)",
      "details": "Addition-cured platinum silicone forms stable Si-O-Si bonds with 445 kJ/mol bond energy resisting continuous boiling sous-vide immersion, whereas PEVA is an ethylene-vinyl acetate thermoplastic that degrades, delaminates, and migrates plasticizers above 60°C."
    },
    "safetyStandard": {
      "organization": "FDA / BfR / LFGB",
      "standard": "FDA 21 CFR § 177.2600 & German BfR XV (Silicones) & § 177.1350 (PEVA)",
      "citation": "Testing methods for rubber articles intended for repeated food use and extraction limitations for ethylene-vinyl acetate copolymers."
    },
    "applianceSpecs": {
      "parameter": "95°C (203°F) Sous-Vide Immersion & Dishwasher Sanitization",
      "guideline": "Never wash PEVA in dishwashers or use in boiling water; leave silicone bag partially unzipped when microwaving to vent steam."
    }
  },
  "end-grain-vs-edge-grain-wood-cutting-board": {
    "materialThermal": {
      "property": "Vertical Fiber Capillary Hydraulics & Cellular Self-Healing vs Transverse Fiber Shearing",
      "threshold": "End-Grain (Vertical axial xylem fibers, HRC 58–64 retention) vs Edge-Grain (Transverse longitudinal fibers)",
      "details": "End-grain blocks orient tree xylem fibers vertically, allowing knife edges to part fibers without severing them, preserving razor bevels and drawing surface moisture inward via capillary action to desiccate pathogens through polyphenolic tannin exposure."
    },
    "safetyStandard": {
      "organization": "USDA / NSF / ANSI",
      "standard": "USDA-FSIS Guidelines on Wooden Cutting Boards & ANSI/HPVA Type I (Waterproof Food-Contact Adhesives)",
      "citation": "Sanitary performance of hardwood cutting surfaces and bond shear strength criteria for food-contact laminated butcher blocks."
    },
    "applianceSpecs": {
      "parameter": "Hand-Wash Ambient Hydration & Food-Grade USP Mineral Oil Saturation",
      "guideline": "Never submerge wood in water or place in dishwashers; saturate end-grain boards monthly with food-grade mineral oil and beeswax."
    }
  },
  "commercial-aluminum-vs-aluminized-steel-baking-sheet": {
    "materialThermal": {
      "property": "High-Diffusivity Non-Ferrous Conduction vs Low-Expansion High-Modulus Steel Core",
      "threshold": "Commercial Aluminum 3003-H14 (k ~205 W/m·K) vs Aluminized Steel (k ~50 W/m·K, Elastic Modulus 205 GPa)",
      "details": "18-gauge 3003 aluminum diffuses heat 4× faster than steel for delicate pastry browning, whereas aluminized steel possesses triple the elastic stiffness of aluminum, preventing explosive thermal warping (popping) in 230°C (450°F) roasting ovens."
    },
    "safetyStandard": {
      "organization": "FDA / ASTM / NSF",
      "standard": "FDA 21 CFR § 175.300 & ASTM A463/A463M (Aluminized Steel Sheet) & NSF Standard 2",
      "citation": "Food equipment sanitary criteria, metal purity standards for baking pans, and specifications for hot-dip aluminum-coated steel sheets."
    },
    "applianceSpecs": {
      "parameter": "230°C–260°C (450°F–500°F) Oven Roasting & Wire-Reinforced Rim Stability",
      "guideline": "Do not wash aluminum sheets in alkaline dishwashers to prevent oxide stripping; line with unbleached parchment paper when roasting acidic foods."
    }
  },
  "glass-vs-tritan-water-bottle": {
    "materialThermal": {
      "property": "Vitreous Silicate Chemical Barrier vs Photodegradable Copolyester Polymer",
      "threshold": "Type 3.3 Borosilicate (Zero organic leaching, 150°C thermal shock) vs Tritan PCT-G (BPA/BPS-free, Izod impact >800 J/m)",
      "details": "Borosilicate glass provides a chemically unreactive, non-porous silica network that will never leach synthetic plasticizers or shed microplastics into drinking water, while Tritan copolyester offers virtually indestructible drop-proof physical safety for rugged transit."
    },
    "safetyStandard": {
      "organization": "ISO / FDA / EU",
      "standard": "ISO 3585 (Type 3.3 Glass) & FDA 21 CFR § 177.1240 & EU Regulation No 10/2011",
      "citation": "Testing standards for glass chemical durability and specific migration limits for plastic food-contact articles."
    },
    "applianceSpecs": {
      "parameter": "100°C (212°F) Boiling Infusions & High-Temp Dishwasher Sanitization",
      "guideline": "Never leave plastic bottles in summer vehicles exceeding 60°C; inspect glass drinking rim for chips before use."
    }
  }
};

const mergedSpecs = {
  ...existingSpecs,
  ...newSpecs
};

fs.writeFileSync(specsPath, 'module.exports = ' + JSON.stringify(mergedSpecs, null, 2) + ';\n', 'utf8');
console.log(`Updated src/data/specs/compare.cjs to ${Object.keys(mergedSpecs).length} specs`);

console.log('--- WAVE 75 INJECTION COMPLETE ---');
