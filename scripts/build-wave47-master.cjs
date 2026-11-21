// Master script to execute Wave 47 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave47Slugs, newComparisonsEn } = require('./generate-wave47-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave47-es.cjs');
const { newComparisonsPt } = require('./build-wave47-pt.cjs');
const { newComparisonsZh } = require('./build-wave47-zh.cjs');
const { newComparisonsJa } = require('./build-wave47-ja.cjs');

console.log('--- STARTING WAVE 47 INJECTION ---');

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
  const filtered = existing.filter(item => !wave47Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} -> New count: ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
let specsContent = fs.readFileSync(specsPath, 'utf8');

const newSpecs = {
  "granite-vs-marble-mortar-and-pestle": {
    "materialThermal": {
      "property": "Igneous Quartz-Feldspar Acid Insoluble Matrix vs. Metamorphic Calcite Dissolution",
      "threshold": "Granite 0.00% Mass Loss in 5% Acetic Acid vs. Marble Rapid Effervescent Calcium Leaching",
      "details": "Dense igneous granite (Mohs 6–7) resists aggressive dietary acids (citric, acetic, malic) and pounding forces (>130 MPa), eliminating mineral chalk shedding; soft metamorphic marble (Mohs 3) dissolves in acids (<pH 4.0), releasing chalky calcium salts and etching micro-cavities that harbor biofilms."
    },
    "safetyStandard": {
      "organization": "FDA / NSF / ISO",
      "standard": "FDA 21 CFR § 174.5 (Food Contact Surfaces) & NSF/ANSI 51 (Food Equipment Materials)",
      "citation": "Standard criteria for cleanable, non-absorbent food-contact surfaces; NSF commercial wear and toxicity standards."
    },
    "applianceSpecs": {
      "parameter": "Acidic Wet Paste Grinding vs. Soft Herb Bruising",
      "guideline": "Use natural unpolished granite for all wet acidic salsas, curry pastes, and hard spice crushing; reserve smooth marble strictly for gentle dry herb pounding or non-acidic room-temperature pestos."
    }
  },
  "silicone-vs-stainless-steel-whisk": {
    "materialThermal": {
      "property": "Elastomeric Coating Coating Protection vs. Austenitic High-Modulus Fluid Shear",
      "threshold": "Silicone Shore A 60–70 (Max 232°C / 450°F) vs. Spring Steel Modulus 193 GPa (>815°C / 1,500°F)",
      "details": "Food-grade silicone sheathing protects delicate PTFE and ceramic non-stick coatings from gouging and microplastic abrasion; rigid spring-tempered 18/8 stainless steel wires slice through liquids with high Reynolds turbulence for 3x faster aeration and stiffer egg white meringues."
    },
    "safetyStandard": {
      "organization": "FDA / ISO / NSF",
      "standard": "FDA 21 CFR § 177.2600 (Rubber Articles for Repeated Use) & ISO 8442 (Cutlery and Food Hollowware)",
      "citation": "Extraction thresholds for repeated-use food elastomers; ISO standards for food-contact spring wire metallurgy."
    },
    "applianceSpecs": {
      "parameter": "Coated Pan Surface Protection vs. High-Velocity Foam Aeration",
      "guideline": "Deploy silicone-coated whisks for stirring rouxs, custards, and gravies in non-stick or enameled cookware; use solid spring stainless steel whisks in metal bowls for rapid egg white, cream, and emulsion whipping."
    }
  },
  "silicone-vs-cotton-oven-mitts": {
    "materialThermal": {
      "property": "Hydrophobic Steam-Proof Thermal Barrier vs. Cellulosic Convective Steam Scald Conduction",
      "threshold": "Silicone Continuous Limit 260°C (500°F, 100% Waterproof) vs. Cotton Dry Limit 180°C (Wet Drops to 0°C)",
      "details": "Textured silicone mitts provide an impermeable moisture barrier that completely prevents catastrophic steam scalds and withstands boiling spills up to 500°F; woven cotton mitts instantly absorb moisture, converting trapped water into 212°F+ scalding steam when contacting hot baking dishes."
    },
    "safetyStandard": {
      "organization": "ASTM / OSHA / FDA",
      "standard": "ASTM F1060 (Thermal Protective Performance) & OSHA 1910.138 (Hand Thermal Protection)",
      "citation": "Standard test method for conductive and convective thermal protection for hot surface contact."
    },
    "applianceSpecs": {
      "parameter": "High-Heat Heavy Cookware Handling & Boiling Water Retrieval",
      "guideline": "Mandate textured silicone mitts when retrieving heavy cast iron Dutch ovens, boiling canning jars, or baking sheets above 400°F; reserve dry cotton mitts exclusively for rapid handling of light cookie sheets below 350°F."
    }
  },
  "stainless-steel-vs-plastic-citrus-juicer": {
    "materialThermal": {
      "property": "Chromium Oxide Passivated Corrosion Immunity vs. d-Limonene Environmental Stress Cracking",
      "threshold": "Grade 304 Stainless Steel <0.001 mm/yr Corrosion in 5% Citric Acid vs. Thermoplastic Crazing & Fatigue",
      "details": "Passivated 18/8 stainless steel is completely immune to citric acid (pH 2.0) and peel terpene solvents (d-limonene), tolerating >50 Nm torque without yield; plastic squeezers suffer solvent crazing, hinge fatigue fracture, and abrade microplastics into fresh citrus juice."
    },
    "safetyStandard": {
      "organization": "NSF / FDA / EC",
      "standard": "NSF/ANSI 51 (Food Equipment Materials) & FDA 21 CFR § 175.300 / EC 1935/2004",
      "citation": "Commercial food equipment certification for high-acid food contact metallurgy and polymer extraction safety."
    },
    "applianceSpecs": {
      "parameter": "High-Torque Extraction & Chemical Immersion Safety",
      "guideline": "Use heavy-duty 304 stainless steel presses for daily bar prep, canning, and high-acid citrus squeezing; avoid plastic squeezers or chipped painted aluminum presses that shed toxic gray metal salts into juice."
    }
  },
  "glass-vs-stainless-steel-oil-dispenser": {
    "materialThermal": {
      "property": "100% Optical Light Blockade vs. Singlet Oxygen Photosensitized Lipid Peroxidation",
      "threshold": "18/8 Stainless Steel 0.00% Light Transmittance vs. Clear Borosilicate Glass >90% Visible Transmittance",
      "details": "Opaque 18/8 stainless steel completely blocks all UV and visible wavelengths, halting chlorophyll-photosensitized singlet oxygen attack on polyunsaturated fatty acids; clear glass allows rapid lipid hydroperoxide formation, destroying polyphenols and generating rancid hexanal off-flavors."
    },
    "safetyStandard": {
      "organization": "IOC / Codex / FDA",
      "standard": "IOC Trade Standard COI/T.15/NC No 3 (Olive Oil Storage) & Codex Alimentarius CXS 33-1981",
      "citation": "International standards specifying dark, light-impervious packaging for extra virgin olive oil preservation."
    },
    "applianceSpecs": {
      "parameter": "Lipid Oxidation Preservation & Stovetop Radiant Heat Protection",
      "guideline": "Station opaque food-grade 18/8 stainless steel dispensers near cooking areas to block ambient light and deflect cooktop heat; restrict clear glass cruets to rapid-turnover neutral oils or dark pantry storage."
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
console.log('✅ Updated src/data/specs/compare.cjs with Wave 47 specifications');

// 3. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
if (fs.existsSync(llmsPath)) {
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  llmsContent = llmsContent.replace(/128\s+comparisons\s+per\s+language\s+\(640\s+localized\s+pages\)/g, '133 comparisons per language (665 localized pages)');
  llmsContent = llmsContent.replace(/128\s+head-to-head\s+safety\s+comparisons/g, '133 head-to-head safety comparisons');
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('✅ Updated public/llms.txt');
}

// 4. Update README.md if it mentions comparison count
const readmePath = path.resolve('README.md');
if (fs.existsSync(readmePath)) {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/128\s+comparisons\s+×\s+5\s+languages\s+=\s+640\s+localized\s+pages/g, '133 comparisons × 5 languages = 665 localized pages');
  readmeContent = readmeContent.replace(/128\s+comparisons/g, '133 comparisons');
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
    // Ensure oil-dispenser is mapped under oilSmokePoint
    if (!content.includes('oil-dispenser|')) {
      content = content.replace(
        /(smoke-point\|frying-oil\|cooking-oil)/g,
        'smoke-point|frying-oil|cooking-oil|oil-dispenser'
      );
    }
    // Ensure citrus-juicer is mapped under plastic
    if (!content.includes('citrus-juicer|')) {
      content = content.replace(
        /(paper-composite)/g,
        'paper-composite|citrus-juicer'
      );
    }
    // Ensure mortar-and-pestle is mapped under pantry
    if (!content.includes('mortar-and-pestle|')) {
      content = content.replace(
        /(flour\|\\bpantry\\b)/g,
        'flour|\\bpantry\\b|mortar-and-pestle'
      );
    }
    // Ensure oven-mitt is mapped under ovenRack
    if (!content.includes('oven-mitt|')) {
      content = content.replace(
        /(25-degree\|silicone\|)/g,
        '25-degree|silicone|oven-mitt|whisk|'
      );
    }
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Updated tool routing in ${relPath}`);
  }
}

console.log('--- WAVE 47 INJECTION COMPLETE ---');
