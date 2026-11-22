// Master script to execute Wave 65 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave65Slugs, newComparisonsEn } = require('./generate-wave65-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave65-es.cjs');
const { newComparisonsPt } = require('./build-wave65-pt.cjs');
const { newComparisonsZh } = require('./build-wave65-zh.cjs');
const { newComparisonsJa } = require('./build-wave65-ja.cjs');

console.log('--- STARTING WAVE 65 INJECTION ---');

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
  const filtered = existing.filter(item => !wave65Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} comparisons to ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
delete require.cache[require.resolve(specsPath)];
const existingSpecs = require(specsPath);

const newSpecs = {
  "glass-vs-stainless-steel-blender-pitcher": {
    "materialThermal": {
      "property": "Cold-Ductility Tensile Strength vs. High-Velocity Mechanical Cavitation Shock",
      "threshold": "SUS304 Stainless (Tensile >515 MPa, 0.00% shatter risk) vs. Glass (Brittle Fracture threshold ~35–45 MPa)",
      "details": "Austenitic chromium-nickel alloy absorbs turbulent fluid cavitation energy and blunt ingredient impacts (ice cubes, dried pulses) without micro-flaking or brittle notch propagation, completely eliminating catastrophic glass fracture risks during 25,000 RPM vortex shearing."
    },
    "safetyStandard": {
      "organization": "FDA / NSF / ASTM",
      "standard": "ASTM C149-14 (Thermal Shock Resistance) & NSF/ANSI Standard 8 (Commercial Food Equipment)",
      "citation": "Standard test methods evaluating thermal shock failure in glass containers and sanitary cleanability standards for high-speed commercial blending containers."
    },
    "applianceSpecs": {
      "parameter": "Boiling Soup Puréeing (>95°C) & Vortex Steam Venting",
      "guideline": "Fill blender jar to no more than 50% capacity when puréeing hot liquids; vent lid plug and cover with kitchen towel to avoid steam pressure surges."
    }
  },
  "brass-vs-stainless-steel-espresso-portafilter": {
    "materialThermal": {
      "property": "Solid Austenitic Hydrothermal Purity vs. Acidic De-Zincification & Chromium Flaking",
      "threshold": "SUS304 Unleaded Steel (<0.001 µg/L Pb/Ni leaching) vs. Plated Brass (BfR spikes: 80–160 µg/L Pb after descaling)",
      "details": "Unplated austenitic SUS304 alloy resists hot organic coffee acids (pH 4.8–5.2) and commercial backflush detergents without pitting, eliminating toxic lead and copper leaching caused by flaking electroplated chromium layers on traditional CW617N leaded brass."
    },
    "safetyStandard": {
      "organization": "FDA / BfR / Council of Europe",
      "standard": "BfR Toxicological Release Limits (Opinion No. 024/2015) & Council of Europe CM/Res(2013)9 & DIN 10531",
      "citation": "International regulatory limits governing heavy metal migration (lead, nickel, copper) from professional and domestic coffee extraction appliances."
    },
    "applianceSpecs": {
      "parameter": "Thermal Group Stability & Daily Cafiza Chemical Backflushing",
      "guideline": "Preheat portafilter in grouphead for 15 minutes to reach 93°C extraction equilibrium; soak solid stainless portafilter in hot Cafiza detergent nightly without surface discoloration."
    }
  },
  "glass-vs-plastic-food-processor-bowl": {
    "materialThermal": {
      "property": "Vitrified Silicate Chemical Immunity vs. Hydrothermal Ester Cleavage & Crazing",
      "threshold": "Borosilicate Glass (0.00 µg/L bisphenols/nanoplastics) vs. Polycarbonate/Tritan (>10⁴ microplastic particles/L)",
      "details": "Non-porous vitrified borosilicate matrix resists caustic dishwasher detergents (pH 10–11.5) and essential citrus oils without clouding, micro-crazing, or releasing endocrine-disrupting bisphenols and synthetic polymer oligomers during heavy dough kneading."
    },
    "safetyStandard": {
      "organization": "FDA / EFSA / ISO",
      "standard": "FDA 21 CFR § 177.1580 & EFSA Regulation (EU) No 10/2011 & ISO 6486",
      "citation": "Food contact materials legislation defining overall and specific migration limits for plasticizers, bisphenols, and heavy metals under dynamic mechanical food prep."
    },
    "applianceSpecs": {
      "parameter": "High-Torque Blade Engagement & Cold Ingredient Processing",
      "guideline": "Lock glass bowl firmly onto drive shaft; process hard spices, parmesan rinds, and frozen items in short pulses to minimize mechanical impact on glass sidewalls."
    }
  },
  "ceramic-coated-vs-stainless-steel-inner-pot": {
    "materialThermal": {
      "property": "Tri-Ply Austenitic Impact Hardness vs. Sol-Gel Inorganic Fissuring & Abrasive Wear",
      "threshold": "SUS304 Clad (Mohs 5.5, indestructible) vs. Sol-Gel Ceramic Coating (25–45 µm, micro-cracks at >220°C)",
      "details": "Heavy 18/8 austenitic stainless steel with encapsulated aluminum core provides flawless high-heat searing fond development, withstands sharp stainless utensils and abrasive scouring pads, and resists acidic chili and tomato braises under 15 PSI steam without blister delamination."
    },
    "safetyStandard": {
      "organization": "FDA / NSF / UL",
      "standard": "FDA Food Code § 4-101.11 & UL 136 (Standard for Pressure Cookers) & NSF/ANSI Standard 51",
      "citation": "Safety standards for pressurized cooking vessels, food contact surface cleanability, and thermal shock integrity under steam containment."
    },
    "applianceSpecs": {
      "parameter": "High-Pressure Sauté & Quick Pressure Release Venting",
      "guideline": "Deglaze browned fond with broth or wine before sealing lid to prevent 'Burn' error codes; use stainless steel wire scrubbers and Bar Keepers Friend for periodic mineral descaling."
    }
  },
  "stainless-steel-vs-enameled-aluminum-lemon-squeezer": {
    "materialThermal": {
      "property": "Austenitic Acid Passivation vs. Enamel Hinge Flaking & Citric Acid Leaching",
      "threshold": "SUS304 Solid Steel (0.00 mg/kg Al migration at pH 2.2) vs. Enameled Aluminum (12–35 mg/kg Al leaching when chipped)",
      "details": "Forged chromium-nickel steel provides permanent chemical immunity to concentrated citric and malic acids (pH 2.0–2.4), resists severe mechanical hinge torque without paint flaking, and survives automated dishwashers without producing hazardous black aluminum smut."
    },
    "safetyStandard": {
      "organization": "FDA / EFSA / Council of Europe",
      "standard": "FDA 21 CFR § 175.300 & Council of Europe CM/Res(2013)9 & EFSA Tolerable Weekly Intake Guidelines",
      "citation": "Sanitary food equipment standards establishing strict migration thresholds for aluminum ions in contact with highly acidic foods and beverages."
    },
    "applianceSpecs": {
      "parameter": "High-Leverage Seed Retention & Dishwasher Decontamination",
      "guideline": "Cut citrus halves horizontally and place cut-side down in cup; apply firm downward pressure to invert fruit; wash in automated dishwasher immediately after squeezing."
    }
  }
};

const mergedSpecs = { ...existingSpecs, ...newSpecs };
const fileContent = `// Technical Reference Specifications for Comparison items\n// Grounded strictly in FDA Food Code 2022, USDA FSIS, NSF/ANSI 51, ASTM, and thermodynamic engineering.\n\nmodule.exports = ${JSON.stringify(mergedSpecs, null, 2)};\n`;
fs.writeFileSync(specsPath, fileContent, 'utf8');
console.log(`✅ Updated src/data/specs/compare.cjs with ${Object.keys(mergedSpecs).length} specifications`);

// 3. Update contextual tool routing in compare pages
const comparePages = [
  'src/pages/compare/[slug].astro',
  'src/pages/[lang]/compare/[slug].astro'
];

for (const relPage of comparePages) {
  const fullPagePath = path.resolve(relPage);
  let content = fs.readFileSync(fullPagePath, 'utf8');
  
  // Expand instantPot regex to include inner-pot
  const ipOld = '/(instant-pot|pressure-cooker)/';
  const ipNew = '/(instant-pot|pressure-cooker|inner-pot)/';
  if (content.includes(ipOld)) {
    content = content.replace(ipOld, ipNew);
  }

  // Expand plastic tool regex to include new kitchen appliances & tools
  const plasticOld = 'sous-vide-container|pour-over-dripper|meat-tenderizer';
  const plasticNew = 'sous-vide-container|pour-over-dripper|meat-tenderizer|blender-pitcher|portafilter|food-processor|lemon-squeezer';
  if (content.includes(plasticOld) && !content.includes('blender-pitcher')) {
    content = content.replace(plasticOld, plasticNew);
  }

  fs.writeFileSync(fullPagePath, content, 'utf8');
  console.log(`✅ Updated contextual tool routing in ${relPage}`);
}

console.log('🎉 WAVE 65 INJECTION COMPLETE!');
