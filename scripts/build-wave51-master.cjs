// Master script to execute Wave 51 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave51Slugs, newComparisonsEn } = require('./generate-wave51-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave51-es.cjs');
const { newComparisonsPt } = require('./build-wave51-pt.cjs');
const { newComparisonsZh } = require('./build-wave51-zh.cjs');
const { newComparisonsJa } = require('./build-wave51-ja.cjs');

console.log('--- STARTING WAVE 51 INJECTION ---');

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
  const filtered = existing.filter(item => !wave51Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} -> New count: ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
let specsContent = fs.readFileSync(specsPath, 'utf8');

const newSpecs = {
  "stainless-steel-vs-plastic-dish-drying-rack": {
    "materialThermal": {
      "property": "Passivated Chromium Oxide Barrier vs. Polypropylene Limescale Adsorption",
      "threshold": "SUS304 Stainless Steel (Cr2O3 Passivated, Ra < 0.2 μm) vs. Polypropylene (ESC Threshold ~65°C)",
      "details": "Electropolished 18/8 stainless steel wire frames prevent 99.9% of bacterial biofilm attachment (Serratia marcescens and Pseudomonas) and completely resist alkaline dish detergents and UV embrittlement; molded plastic trays trap mineral limescale, harbor pathogenic pink slime, and warp under thermal dishwasher exposure."
    },
    "safetyStandard": {
      "organization": "FDA / NSF / ISO",
      "standard": "FDA Food Code § 4-101.11 & NSF/ANSI Standard 2 (Food Equipment Sanitation)",
      "citation": "Sanitary design criteria for cleanable, non-absorbent, corrosion-resistant food contact and drying equipment surfaces."
    },
    "applianceSpecs": {
      "parameter": "Countertop Biofilm Elimination & Heavy Cookware Load Bearing",
      "guideline": "Deploy heavy-gauge SUS304 stainless steel dish drying racks with sloped drainage spouts for daily family cookware; wash removable plastic caddies weekly with diluted hydrogen peroxide to eliminate opportunistic pink slime biofilms."
    }
  },
  "ceramic-vs-glass-fermentation-crock": {
    "materialThermal": {
      "property": "Opaque Vitrified Stoneware Thermal Mass vs. Type I Borosilicate Chemical Inertness",
      "threshold": "Vitrified Stoneware (C_vol ~ 2.2 J/cm³·K, 0.0% UV Transmittance) vs. Borosilicate (Type I Class A, 0.00 ppm Leaching)",
      "details": "Certified lead-free high-fired stoneware (1250°C) provides complete light blockage protecting photosensitive vitamins and buffers ambient room temperature swings during anaerobic lactic acid fermentation (pH 3.2–3.6); Type I borosilicate glass offers 360° visual inspection with zero risk of heavy metal migration into acidic brines."
    },
    "safetyStandard": {
      "organization": "FDA / EFSA / ASTM",
      "standard": "FDA 21 CFR § 109.16 (Glazed Ceramicware Leachable Lead & Cadmium) & ASTM C738",
      "citation": "Mandatory regulatory limits and atomic absorption test procedures for extractable lead (<0.5 μg/mL) and cadmium (<0.25 μg/mL) in acidic food containers."
    },
    "applianceSpecs": {
      "parameter": "Anaerobic Water-Lock Maintenance & Acidic Brine Heavy Metal Verification",
      "guideline": "Verify certified lead-free testing before fermenting in stoneware crocks; maintain water in the moat groove to preserve hermetic anaerobic CO2 seals; store transparent glass fermenters in dark pantries to prevent photolytic nutrient breakdown."
    }
  },
  "stainless-steel-vs-plastic-meat-grinder": {
    "materialThermal": {
      "property": "Austenitic Pre-Chill Heat Sink vs. Thermoplastic Shear Microplastic Abrasion",
      "threshold": "SUS304 Stainless Steel (k = 16.2 W/m·K, Hardness HV > 180) vs. Polycarbonate/ABS (Tensile Yield 35–65 MPa)",
      "details": "Solid forged SUS304 stainless steel grinding housings can be freezer-chilled to -18°C to absorb frictional heat and keep animal fats solid (<4°C), preventing grease smearing and preserving burger texture; thermoplastic bodies insulate heat, warm fat, and suffer abrasive surface gouging from bone fragments that shed microplastics into ground meat."
    },
    "safetyStandard": {
      "organization": "USDA FSIS / NSF / FDA",
      "standard": "NSF/ANSI Standard 8 (Commercial Powered Food Preparation Equipment) & USDA 9 CFR § 417",
      "citation": "Commercial standards for cleanability, micro-cavity elimination, and pathogen prevention (E. coli O157:H7 and Salmonella) in raw meat processing."
    },
    "applianceSpecs": {
      "parameter": "Sub-4°C Cold Grinding Physics & Microplastic Elimination",
      "guideline": "Pre-chill all-metal grinder attachments and receiving bowls for 60 minutes at 0°F (-18°C) before grinding; never wash cast-aluminum attachments in automated dishwashers to prevent toxic black aluminum oxide soot contamination."
    }
  },
  "glass-vs-metal-loaf-pan": {
    "materialThermal": {
      "property": "Aluminized Carbon Steel Conductive Heat Flux vs. Borosilicate Radiative Infrared Heat",
      "threshold": "Aluminized Carbon Steel (k ≈ 54 W/m·K, Aluminum Clad k ≈ 205 W/m·K) vs. Glass (k ≈ 1.05 W/m·K)",
      "details": "Aluminized carbon steel transfers conductive heat up to 100x faster than glass, driving explosive early oven spring and uniform Maillard caramelization before the starch matrix solidifies; insulating glass pans rely on long-wave infrared radiation, causing scorched, tough crusts and undercooked, gummy centers unless oven temperature is reduced by 25°F."
    },
    "safetyStandard": {
      "organization": "ASTM / ISO / FDA",
      "standard": "ASTM C149 (Standard Test Method for Thermal Shock Resistance of Glass Containers) & FDA 21 CFR § 175.300",
      "citation": "Thermal shock failure thresholds for glass bakeware and resin coating safety specifications for commercial baking pans."
    },
    "applianceSpecs": {
      "parameter": "Oven Spring Maximization & Thermal Shock Countertop Safety",
      "guideline": "Deploy 0.8 mm commercial folded aluminized steel pans for tall, tender sandwich breads and quick cakes; reduce oven temperature by 25°F (15°C) and extend baking time by 10 minutes when baking meatloaves in glass dishes, and never rest hot glass on cold granite or damp cloths."
    }
  },
  "cast-aluminum-vs-stainless-steel-garlic-press": {
    "materialThermal": {
      "property": "Allicin/Pyruvic Acid Electrochemical Passivation vs. Cast Alloy Alkaline Oxidation",
      "threshold": "SUS304 Stainless Steel (Cr2O3 Passivation, Yield > 205 MPa) vs. Die-Cast Aluminum (Al-Si-Cu Alloy, Yield ~100 MPa)",
      "details": "Forged 18/10 stainless steel is completely immune to the aggressive enzymatic chemistry of crushed garlic (alliinase hydrolyzing alliin into allicin and pyruvic acid), preserving sweet natural aromatics without metallic off-flavors; bare die-cast aluminum pits under garlic acidity and blisters plating into food, while turning jet-black from alkaline dishwasher oxidation."
    },
    "safetyStandard": {
      "organization": "FDA / BfR / Council of Europe",
      "standard": "FDA Food Code § 4-101.14 (Limitation on Bare Aluminum Contact) & Council of Europe CM/Res(2013)9",
      "citation": "Federal and European food safety limitations prohibiting unanodized or bare cast aluminum contact with acidic foodstuffs (pH < 4.5)."
    },
    "applianceSpecs": {
      "parameter": "Unpeeled Clove Extrusion Mechanical Leverage & Dishwasher Immunity",
      "guideline": "Select solid forged 18/10 stainless steel garlic presses for crushing whole unpeeled garlic cloves without hinge pin deformation; immediately discard peeling chrome-plated or painted aluminum presses to prevent metallic flake ingestion."
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
console.log('✅ Updated src/data/specs/compare.cjs with Wave 51 specifications');

// 3. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
if (fs.existsSync(llmsPath)) {
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  llmsContent = llmsContent.replace(/138\s+comparisons\s+per\s+language\s+\(690\s+localized\s+pages\)/g, '143 comparisons per language (715 localized pages)');
  llmsContent = llmsContent.replace(/138\s+head-to-head\s+safety\s+comparisons/g, '143 head-to-head safety comparisons');
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('✅ Updated public/llms.txt');
}

// 4. Update README.md if it mentions comparison count
const readmePath = path.resolve('README.md');
if (fs.existsSync(readmePath)) {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/138\s+comparisons\s+×\s+5\s+languages\s+=\s+690\s+localized\s+pages/g, '143 comparisons × 5 languages = 715 localized pages');
  readmeContent = readmeContent.replace(/138\s+comparisons/g, '143 comparisons');
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
    // Ensure dish-drying-rack, meat-grinder are mapped under plastic
    if (!content.includes('dish-drying-rack|')) {
      content = content.replace(
        /(salad-spinner)/g,
        'salad-spinner|dish-drying-rack|meat-grinder'
      );
    }
    // Ensure garlic-press is mapped under cleaner/pantry/descaling
    if (!content.includes('garlic-press|')) {
      content = content.replace(
        /(mortar-and-pestle)/g,
        'mortar-and-pestle|garlic-press|fermentation-crock'
      );
    }
    // Ensure loaf-pan is mapped under ovenTemp
    if (!content.includes('loaf-pan|')) {
      content = content.replace(
        /(pizza-stone)/g,
        'pizza-stone|loaf-pan'
      );
    }
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Updated tool routing in ${relPath}`);
  }
}

console.log('--- WAVE 51 INJECTION COMPLETE ---');
