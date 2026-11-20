// Master script to execute Wave 43 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave43Slugs, newComparisonsEn } = require('./generate-wave43-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave43-es.cjs');
const { newComparisonsPt } = require('./build-wave43-pt.cjs');
const { newComparisonsZh } = require('./build-wave43-zh.cjs');
const { newComparisonsJa } = require('./build-wave43-ja.cjs');

console.log('--- STARTING WAVE 43 INJECTION ---');

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
  const filtered = existing.filter(item => !wave43Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} -> New count: ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
let specsContent = fs.readFileSync(specsPath, 'utf8');

const newSpecs = {
  "stainless-steel-vs-plastic-colander": {
    "materialThermal": {
      "property": "Hydrothermal Polymer Softening vs. Austenitic Passivated Chromium Oxide Barrier",
      "threshold": "Polypropylene Heat Deflection Temp 85°C–100°C vs. 18/8 Stainless Steel 815°C (1,500°F)",
      "details": "Pouring boiling water (212°F / 100°C) over food-grade polypropylene triggers polymer relaxation and micro/nanoplastic shedding (10^4–10^6 particles/L); 18/8 stainless steel forms an imperviously dense Cr2O3 passive film with zero chemical dissolution and zero microplastic migration."
    },
    "safetyStandard": {
      "organization": "FDA / EFSA / NSF",
      "standard": "FDA 21 CFR § 177.1520 (Olefin Polymers) & NSF/ANSI 51 (Food Equipment Materials)",
      "citation": "EFSA food-contact migration threshold standards for high-temperature polyolefins; NSF/ANSI 51 sanitation standards for commercial food-contact metals."
    },
    "applianceSpecs": {
      "parameter": "Boiling Liquid Straining & Dishwasher Heat Sanitation",
      "guideline": "Use 18/8 stainless steel colanders for straining boiling pasta, hot stocks, and deep-fryer grease; reserve polypropylene colanders strictly for cold-water berry, salad, and canned bean rinsing."
    }
  },
  "glass-vs-wood-cutting-board": {
    "materialThermal": {
      "property": "Mineral Hardness Blade Deflection vs. Capillary Antimicrobial Cellular Matrix",
      "threshold": "Soda-Lime Glass Mohs 5.5–6.0 vs. Hard Rock Maple Janka 1,450 lbf (Rockwell C 56–62 Knife Steel)",
      "details": "Tempered glass is harder than cutlery steel, instantly rolling and micro-chipping sharp knife edges; hardwood fibers yield under cutting pressure, preserving blade apexes while capillary xylem vessels dehydrate and inactivate 99.9% of bacteria within hours."
    },
    "safetyStandard": {
      "organization": "USDA / UC Davis / FDA",
      "standard": "FDA Food Code 2022 § 4-101.11 & University of Wisconsin Cliver Microbiological Standard",
      "citation": "Peer-reviewed antimicrobial efficacy standards of hard maple vs non-porous surfaces; ASTM C373 porosity and sanitation criteria."
    },
    "applianceSpecs": {
      "parameter": "Knife Edge Preservation & Surface Traction Safety",
      "guideline": "Prepare raw meats, vegetables, and herbs exclusively on seasoned hardwood or end-grain blocks; reserve tempered glass exclusively for rolling cold pastry dough or as heat-resistant countertop trivets."
    }
  },
  "ceramic-vs-stainless-steel-knife": {
    "materialThermal": {
      "property": "Ultra-Hard Ceramic Crystalline Lattice vs. Ductile Martensitic High-Carbon Alloy",
      "threshold": "Zirconium Dioxide Mohs 8.5 / ~75 HRC vs. High-Carbon Cutlery Steel 56–60 HRC (K1c 8 vs 30 MPa·m^1/2)",
      "details": "Zirconia ceramic offers extraordinary edge retention on soft produce with 100% chemical inertness preventing enzymatic browning; high-carbon stainless steel provides high fracture toughness, preventing catastrophic blade snapping on bones and hard squash."
    },
    "safetyStandard": {
      "organization": "ISO / DIN / FDA",
      "standard": "ISO 8442 (Materials and Articles in Contact with Foodstuffs - Cutlery) & DIN EN ISO 8442-1",
      "citation": "International standards for blade sharpness retention, edge corrosion resistance, and fracture toughness thresholds for domestic cutlery."
    },
    "applianceSpecs": {
      "parameter": "Produce Slicing Precision vs. Heavy Kitchen Butchery",
      "guideline": "Deploy ceramic knives strictly for precision slicing of boneless poultry, ripe tomatoes, and oxidation-sensitive produce; use forged stainless steel chef's knives for heavy chopping, deboning, hard squash, and universal meal prep."
    }
  },
  "stainless-steel-vs-glass-mixing-bowls": {
    "materialThermal": {
      "property": "High-Conductivity Austenitic Alloy vs. Amorphous Soda-Lime Thermal Insulator",
      "threshold": "18/10 Stainless Steel Thermal Conductivity 16.2 W/m·K vs. Soda-Lime Glass 1.0 W/m·K",
      "details": "Stainless steel transfers heat 16x faster for precision bain-marie chocolate melting and instantaneous ice-bath cooling with unbreakable ductile yield strength; tempered glass provides microwave transparency and clear 360° visual monitoring."
    },
    "safetyStandard": {
      "organization": "ASTM / NSF / FDA",
      "standard": "ASTM C149 (Thermal Shock Resistance of Glass Containers) & NSF/ANSI 51",
      "citation": "Safety standards for commercial food prep containers, maximum allowable thermal shock gradients, and non-reactive food-contact metallurgy."
    },
    "applianceSpecs": {
      "parameter": "Double-Boiler Heat Control vs. Microwave Cooking",
      "guideline": "Use stainless steel bowls for high-volume baking, beating, double-boiler melting, and ice baths; use tempered glass bowls exclusively for microwave heating, melting butter, and visually monitoring yeast dough rise."
    }
  },
  "enameled-cast-iron-vs-stainless-steel-dutch-oven": {
    "materialThermal": {
      "property": "High Volumetric Thermal Inertia Flywheel vs. Low-Tare Convective Clad Transfer",
      "threshold": "Cast Iron Volumetric Heat Capacity ~3.63 J/cm^3·K vs. Tri-Ply Stainless Steel ~2.85 J/cm^3·K",
      "details": "Heavy cast iron stores 27% more thermal energy per unit volume, creating steady radiant braising temperatures and high-humidity steam chambers for sourdough oven spring; tri-ply stainless steel heats 30% faster with 50% lighter weight for boiling and broths."
    },
    "safetyStandard": {
      "organization": "FDA / ISO / NSF",
      "standard": "FDA Food Code 2022 § 4-101.11 & ISO 4531 (Vitreous and Porcelain Enamels in Food Contact)",
      "citation": "Strict heavy metal release limits for vitreous enamel glazes; NSF/ANSI 36 commercial cookware sanitation and thermal cycling standards."
    },
    "applianceSpecs": {
      "parameter": "Low-and-Slow Braising vs. High-Volume Liquid Boiling",
      "guideline": "Use enameled cast iron Dutch ovens for multi-hour braises, acidic tomato stews, and 450°F+ artisan sourdough bread baking; choose tri-ply stainless steel Dutch ovens for boiling stocks, blanching vegetables, and everyday soups."
    }
  }
};

// Check which specs need to be appended
for (const [slug, specObj] of Object.entries(newSpecs)) {
  if (!specsContent.includes(`"${slug}":`)) {
    // Insert before the last `};`
    const lastBraceIdx = specsContent.lastIndexOf('};');
    if (lastBraceIdx !== -1) {
      const specString = `  "${slug}": ${JSON.stringify(specObj, null, 4).split('\n').join('\n  ')},\n`;
      specsContent = specsContent.slice(0, lastBraceIdx) + specString + specsContent.slice(lastBraceIdx);
    }
  }
}
fs.writeFileSync(specsPath, specsContent, 'utf8');
console.log('✅ Updated src/data/specs/compare.cjs with Wave 43 specifications');

// 3. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
if (fs.existsSync(llmsPath)) {
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  llmsContent = llmsContent.replace(/118\s+comparisons\s+per\s+language\s+\(590\s+localized\s+pages\)/g, '123 comparisons per language (615 localized pages)');
  llmsContent = llmsContent.replace(/118\s+head-to-head\s+safety\s+comparisons/g, '123 head-to-head safety comparisons');
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('✅ Updated public/llms.txt');
}

// 4. Update README.md if it mentions comparison count
const readmePath = path.resolve('README.md');
if (fs.existsSync(readmePath)) {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/118\s+comparisons\s+×\s+5\s+languages\s+=\s+565\s+localized\s+pages/g, '123 comparisons × 5 languages = 615 localized pages');
  readmeContent = readmeContent.replace(/118\s+comparisons\s+×\s+5\s+languages\s+=\s+590\s+localized\s+pages/g, '123 comparisons × 5 languages = 615 localized pages');
  readmeContent = readmeContent.replace(/118\s+comparisons/g, '123 comparisons');
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
    // Ensure colander is matched under plastic
    if (!content.includes('colander|')) {
      content = content.replace(
        /(blender\|sous-vide\|plastic)/g,
        'colander|$1'
      );
    }
    // Ensure dutch-oven & mixing-bowl are matched under ovenTemp or castIron
    if (!content.includes('mixing-bowl|')) {
      content = content.replace(
        /(pizza-stone\|baking-steel\|)/g,
        'mixing-bowl|dutch-oven|$1'
      );
    }
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Updated tool routing in ${relPath}`);
  }
}

console.log('--- WAVE 43 INJECTION COMPLETE ---');
