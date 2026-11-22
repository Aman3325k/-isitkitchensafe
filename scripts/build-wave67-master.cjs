// Master script to execute Wave 67 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave67Slugs, newComparisonsEn } = require('./generate-wave67-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave67-es.cjs');
const { newComparisonsPt } = require('./build-wave67-pt.cjs');
const { newComparisonsZh } = require('./build-wave67-zh.cjs');
const { newComparisonsJa } = require('./build-wave67-ja.cjs');

console.log('--- STARTING WAVE 67 INJECTION ---');

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
  const filtered = existing.filter(item => !wave67Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} comparisons to ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
delete require.cache[require.resolve(specsPath)];
const existingSpecs = require(specsPath);

const newSpecs = {
  "stainless-steel-vs-plastic-immersion-blender": {
    "materialThermal": {
      "property": "Continuous Immersion Heat Deflection & Hydrothermal Polymer Hydrolysis",
      "threshold": "SUS304 Stainless (>800°C melting, 0.00 µg/L leaching) vs Polypropylene/ABS (HDT 85°C–95°C, high microplastic shedding)",
      "details": "Austenitic SUS304 steel maintains full tensile rigidity and passivated Cr2O3 boundary layer in boiling soups (>100°C), preventing thermal softening, driveshaft lubricant leakage, and polymer chain scission common in submerged plastic wand housings."
    },
    "safetyStandard": {
      "organization": "FDA / EU / NSF",
      "standard": "FDA 21 CFR § 177.1520 (Olefin Polymers) & EU Regulation 10/2011 & NSF/ANSI Standard 8",
      "citation": "Sanitary design and food contact material migration standards for motorized commercial and domestic food processing equipment under high thermal loads."
    },
    "applianceSpecs": {
      "parameter": "Boiling Stovetop Immersion (>95°C) & Vortex Cavitation Speed (15,000 RPM)",
      "guideline": "Submerge blender bell at least 3 cm below liquid surface before pulsing; never run plastic wands in boiling pots removed directly from active heat."
    }
  },
  "glass-vs-stainless-steel-air-fryer-basket": {
    "materialThermal": {
      "property": "Forced-Convection Aerodynamic Heat Transfer vs Thermal Shock Rupture",
      "threshold": "SUS304 Mesh (Thermal Shock Immune, ΔT >300°C) vs High-Borosilicate Glass (Brittle Fracture threshold ΔT 150°C)",
      "details": "Perforated austenitic stainless steel wire mesh maximizes radiant and high-velocity convective airflow for uniform Maillard browning, eliminating the brittle tensile stress fracturing risk inherent to thermal shock in hot glass drawers."
    },
    "safetyStandard": {
      "organization": "UL / ASTM / FDA",
      "standard": "UL 1083 (Household Electric Skillets and Frying Appliances) & ASTM C149 & FDA Food Code § 4-101.11",
      "citation": "Safety specifications for air fryer containment vessels, thermal shock resistance limits for vitreous cookware, and cleanability standards."
    },
    "applianceSpecs": {
      "parameter": "200°C (400°F) Convective Air Velocity & Frozen Food Loading",
      "guideline": "Lightly oil stainless baskets before adding proteins; rest hot glass baskets solely on heat-rated silicone pads to avoid thermal shock."
    }
  },
  "cast-iron-vs-nonstick-panini-press": {
    "materialThermal": {
      "property": "Volumetric Heat Retention & High-Compression Contact Searing",
      "threshold": "Cast Iron (Density 7.2 g/cm³, 0.00% fluoropolymer risk) vs PTFE Coated Aluminum (Degrades at >260°C)",
      "details": "Dense gray cast iron stores massive thermal enthalpy, transferring high-temperature contact heat through dense artisan bread crusts without temperature droop or the dangerous toxic PFAS pyrolytic decomposition of thin PTFE coatings under clamping friction."
    },
    "safetyStandard": {
      "organization": "FDA / EPA / NSF",
      "standard": "NSF/ANSI Standard 4 (Commercial Cooking Equipment) & EPA PFAS Action Plan & FDA 21 CFR § 175.300",
      "citation": "Commercial standards for heavy contact grills, food contact release surfaces, and regulatory guidance on fluorinated polymer thermal degradation."
    },
    "applianceSpecs": {
      "parameter": "220°C (428°F) Compressive Contact Pressure & Cheese Caramelization",
      "guideline": "Season cast iron plates periodically with high-smoke point drying oils; disconnect consumer non-stick presses immediately if blue smoke or chemical fumes are detected."
    }
  },
  "stainless-steel-vs-plastic-electric-milk-frother": {
    "materialThermal": {
      "property": "Lipophilic Fatty Acid Permeation & Magnetic Impeller Wear Resistance",
      "threshold": "SUS304 Stainless (Zero lipid absorption, 0.00% microplastic shedding) vs SAN/PP Plastic (Permeable to butterfat, wear grooves)",
      "details": "Austenitic SUS304 steel maintains an impermeable non-porous barrier against 65°C dairy fatty acids and withstands 4,000 RPM magnetic whisk impeller friction without circular polymer micro-grooving or rancid lipid odor retention."
    },
    "safetyStandard": {
      "organization": "FDA / EFSA / DIN",
      "standard": "FDA 21 CFR § 177.1020 & EFSA Regulation (EU) No 10/2011 & DIN 10531",
      "citation": "Food contact migration standards for dairy processing appliances, specific migration limits for styrene and plasticizers in hot fatty foods."
    },
    "applianceSpecs": {
      "parameter": "68°C (154°F) Milk Microfoam Thermal Target & 3,500 RPM Magnetic Frothing",
      "guideline": "Fill milk precisely between MIN and MAX fill lines to prevent hot milk foaming overflow; clean whisk spindle after every cycle."
    }
  },
  "silicone-vs-wooden-cutting-board": {
    "materialThermal": {
      "property": "Antimicrobial Capillary Desiccation vs 230°C Dishwasher Thermal Sanitization",
      "threshold": "End-Grain Hardwood (Self-healing fibers, natural pathogen die-off) vs Platinum Silicone (Heat rated to 250°C, dishwasher safe)",
      "details": "Sugar maple xylem capillary architecture pulls bacterial fluids away from the cutting plane for natural microbial kill, while vulcanized platinum-cured silicone provides total non-porous chemical resistance and high-temp dishwasher sterilization."
    },
    "safetyStandard": {
      "organization": "USDA-FSIS / FDA / NSF",
      "standard": "NSF/ANSI Standard 2 (Food Equipment) & USDA Food Safety Inspection Service Cutting Board Guidelines & FDA 21 CFR § 177.2600",
      "citation": "Sanitary criteria for cutting surfaces, rubber/silicone article food contact safety, and USDA pathogen reduction recommendations."
    },
    "applianceSpecs": {
      "parameter": "Commercial Dishwasher Sanitization (82°C / 180°F) & Knife Slicing Angle",
      "guideline": "Hand-wash wooden boards promptly with warm soapy water and dry upright; run silicone mats on top rack of dishwasher or boil to sterilize after raw chicken prep."
    }
  }
};

const mergedSpecs = {
  ...existingSpecs,
  ...newSpecs
};

fs.writeFileSync(specsPath, 'module.exports = ' + JSON.stringify(mergedSpecs, null, 2) + ';\n', 'utf8');
console.log(`Updated src/data/specs/compare.cjs to ${Object.keys(mergedSpecs).length} specs`);

console.log('--- WAVE 67 INJECTION COMPLETE ---');
