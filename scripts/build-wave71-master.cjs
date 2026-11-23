// Master script to execute Wave 71 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave71Slugs, newComparisonsEn } = require('./generate-wave71-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave71-es.cjs');
const { newComparisonsPt } = require('./build-wave71-pt.cjs');
const { newComparisonsZh } = require('./build-wave71-zh.cjs');
const { newComparisonsJa } = require('./build-wave71-ja.cjs');

console.log('--- STARTING WAVE 71 INJECTION ---');

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
  const filtered = existing.filter(item => !wave71Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} comparisons to ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
delete require.cache[require.resolve(specsPath)];
const existingSpecs = require(specsPath);

const newSpecs = {
  "ceramic-coated-vs-stainless-steel-baking-sheet": {
    "materialThermal": {
      "property": "Sol-Gel Silica Pyrolysis & Thermal Convection Warp Kinetics",
      "threshold": "Sol-Gel Mineral Coating (Degrades >230°C / 450°F) vs SUS304 Austenitic Steel (Stable >800°C / >1472°F)",
      "details": "Sol-gel organosilica coatings undergo hydrophobic methyl group cleavage and micro-crazing under continuous oven convection above 230°C, while heavy-gauge SUS304 stainless steel maintains rigid structural planarity with zero thermal warp or coating breakdown."
    },
    "safetyStandard": {
      "organization": "FDA / EU / LFGB",
      "standard": "FDA 21 CFR § 175.300 & EU Regulation No 10/2011 & German LFGB §§ 30/31",
      "citation": "Food contact surface migration standards for polymeric and vitreous mineral release coatings and pure metal extraction limits under high-temperature baking."
    },
    "applianceSpecs": {
      "parameter": "260°C (500°F) Oven Roasting & Broiler Radiant Heat Exposure",
      "guideline": "Allow hot sheet pans to cool naturally to room temperature before washing; never quench a 230°C pan directly into cold sink water to prevent rim warping."
    }
  },
  "cast-iron-vs-carbon-steel-wok": {
    "materialThermal": {
      "property": "Thermal Diffusivity & Wok Hei Pyrolytic Plume Aerodynamics",
      "threshold": "Low-Carbon Steel (54 W/m·K, fast thermal response) vs Thin Cast Iron (~45 W/m·K, brittle fracture risk)",
      "details": "High-ductility carbon steel woks enable rapid thermal cycling between 180°C and 350°C for authentic wok hei stir-frying, absorbing high-speed tossing impacts and burner shocks without catastrophic brittle fracturing."
    },
    "safetyStandard": {
      "organization": "NSF / ISO / DIN",
      "standard": "NSF/ANSI Standard 51 (Food Equipment Materials) & ISO 8442-2 & DIN EN 13834",
      "citation": "Sanitary criteria for commercial cookware materials, impact resistance standards, and metal release limits for food-contact cast iron and carbon steel alloys."
    },
    "applianceSpecs": {
      "parameter": "350°C (660°F) High-BTU Jet Burner Stir-Frying & Air Quenching",
      "guideline": "Always blue raw carbon steel woks over an open flame before initial seasoning; dry thoroughly over low fire after washing and wipe with a micro-thin layer of high-smoke-point oil."
    }
  },
  "borosilicate-glass-vs-silicone-microwave-popcorn-popper": {
    "materialThermal": {
      "property": "2.45 GHz Dielectric Heating & High-Heat Lipid Hotspot Extraction",
      "threshold": "Borosilicate 3.3 Glass (3.3 × 10⁻⁶/K, 0.00% leaching) vs Platinum Silicone (Continuous limit 230°C, cyclic siloxane risk)",
      "details": "Low-expansion borosilicate glass provides absolute vitreous chemical neutrality against boiling butterfat hot spots (>220°C) and steam (>180°C), eliminating volatile siloxane migration (D4–D6) and rancid lipid odor absorption."
    },
    "safetyStandard": {
      "organization": "FDA / BfR / ISO",
      "standard": "FDA 21 CFR § 177.2600 & German BfR XV (Silicones) & ISO 3585 (Borosilicate 3.3)",
      "citation": "Safety specifications for rubber and polymeric articles intended for repeated food contact and chemical durability requirements for laboratory-grade borosilicate glassware."
    },
    "applianceSpecs": {
      "parameter": "1000W Microwave Dielectric Irradiation & 220°C (428°F) Melted Butter Hot Spots",
      "guideline": "Avoid placing hot glass poppers onto wet granite countertops; bake empty silicone bowls at 175°C (350°F) for 60 minutes if rancid butterfat odors accumulate."
    }
  },
  "silicone-vs-stainless-steel-spatula": {
    "materialThermal": {
      "property": "Thermal Deflection, Coating Abrasion & Aromatic Amine Prevention",
      "threshold": "Platinum-Cured Silicone (Stable to 315°C / 600°F) vs SUS304 Spring Steel (Mohs 5.5, scratches nonstick)",
      "details": "Monolithic platinum-cured silicone spatulas provide non-marring Shore A 65 elasticity to protect delicate PTFE and ceramic cookware coatings from gouging, while completely eliminating toxic primary aromatic amine (PAA) release seen in melting nylon."
    },
    "safetyStandard": {
      "organization": "FDA / EU / BfR",
      "standard": "FDA 21 CFR § 177.2600 & Commission Regulation (EU) No 10/2011 & BfR Recommendation XV",
      "citation": "Regulatory limits on volatile organic compounds, extraction into aqueous and fatty food stimulants, and prohibition of primary aromatic amines in culinary tools."
    },
    "applianceSpecs": {
      "parameter": "315°C (600°F) Surface Contact & Pan Deglazing Mechanical Friction",
      "guideline": "Use seamless monolithic silicone spatulas on all nonstick and enameled cookware; reserve stainless fish spatulas exclusively for uncoated stainless steel and raw cast iron skillets."
    }
  },
  "ceramic-vs-carbon-steel-pepper-grinder": {
    "materialThermal": {
      "property": "Mechanical Shear Cutting vs Compression Crushing & Halite Salt Corrosion",
      "threshold": "Case-Hardened Carbon Steel (60–62 HRC, razor shearing) vs Technical Ceramic (Mohs 9, 100% rust-proof)",
      "details": "Precision-cut case-hardened carbon steel mechanisms slice whole peppercorns cleanly with double-row helical teeth to maximize volatile piperine release, whereas diamond-hard alumina ceramic burrs provide complete galvanic corrosion immunity against hygroscopic wet sea salt."
    },
    "safetyStandard": {
      "organization": "NSF / ASTM / ISO",
      "standard": "NSF/ANSI Standard 2 (Food Equipment) & ASTM B117 (Salt Spray) & ISO 8442",
      "citation": "Sanitary design criteria for food preparation equipment, corrosion resistance evaluation in saline environments, and mechanical performance standards for cutlery and grinding mechanisms."
    },
    "applianceSpecs": {
      "parameter": "Ambient Humidity Salt Grinding & High-Torque Dry Peppercorn Shearing",
      "guideline": "Never place sea salt or rock salt in a carbon steel peppermill to prevent rapid corrosion and tooth seizure; avoid overtightening top adjustment knobs on ceramic grinders to prevent burr chipping."
    }
  }
};

const mergedSpecs = {
  ...existingSpecs,
  ...newSpecs
};

fs.writeFileSync(specsPath, 'module.exports = ' + JSON.stringify(mergedSpecs, null, 2) + ';\n', 'utf8');
console.log(`Updated src/data/specs/compare.cjs to ${Object.keys(mergedSpecs).length} specs`);

console.log('--- WAVE 71 INJECTION COMPLETE ---');
