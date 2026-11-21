// Master script to execute Wave 45 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave45Slugs, newComparisonsEn } = require('./generate-wave45-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave45-es.cjs');
const { newComparisonsPt } = require('./build-wave45-pt.cjs');
const { newComparisonsZh } = require('./build-wave45-zh.cjs');
const { newComparisonsJa } = require('./build-wave45-ja.cjs');

console.log('--- STARTING WAVE 45 INJECTION ---');

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
  const filtered = existing.filter(item => !wave45Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} -> New count: ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
let specsContent = fs.readFileSync(specsPath, 'utf8');

const newSpecs = {
  "glass-vs-stainless-steel-french-press": {
    "materialThermal": {
      "property": "Thermal Heat Retention & Dual-Wall Vacuum Boundary vs. Borosilicate Single-Wall Convection",
      "threshold": "Double-Wall Vacuum Insulation (<2°C loss/10 min) vs. Single-Wall Borosilicate Glass (10°C–14°C drop)",
      "details": "Double-wall austenitic 18/8 stainless steel eliminates thermal shock rupture while locking brew temperature in the optimal SCA 90°C–96°C extraction window; borosilicate glass permits visual blooming observation but suffers rapid convective cooling."
    },
    "safetyStandard": {
      "organization": "ASTM / ISO / FDA",
      "standard": "ASTM C149 (Thermal Shock Resistance of Glass Containers) & NSF/ANSI 51 (Food Equipment Materials)",
      "citation": "Standard test method for thermal shock resistance in beverage ware; NSF/ANSI 51 standards for commercial food-contact alloys."
    },
    "applianceSpecs": {
      "parameter": "Brew Temperature Preservation & Shatter Hazard Eradication",
      "guideline": "Deploy double-wall stainless steel French presses for daily home brewing with children or high kitchen traffic; reserve borosilicate glass carafes strictly for visual cupping demos and table-side service with gentle non-metal stirring."
    }
  },
  "silicone-vs-stainless-steel-tongs": {
    "materialThermal": {
      "property": "Soft Shore-A Elastomer Coating Protection vs. High-Temperature Austenitic Yield Strength",
      "threshold": "Silicone Continuous Thermal Limit 232°C (450°F) vs. 18/8 Stainless Steel Yielding >815°C (1,500°F)",
      "details": "Food-grade silicone tips (Shore A 60–70) eliminate micro-scratching on PTFE and ceramic cookware; solid 18/8 stainless steel withstands direct charcoal flames and smoking grates where silicone would undergo thermal depolymerization."
    },
    "safetyStandard": {
      "organization": "FDA / EU / NSF",
      "standard": "FDA 21 CFR § 177.2600 (Rubber Articles for Repeated Use) & EU Regulation 10/2011",
      "citation": "Standards for total extractive limitations of food-contact elastomers; NSF commercial food utensil sanitization criteria."
    },
    "applianceSpecs": {
      "parameter": "Cookware Surface Preservation vs. Extreme Heat Searing",
      "guideline": "Use silicone-tipped tongs for all indoor nonstick, ceramic, and enameled Dutch ovens; reserve solid stainless steel tongs for raw cast iron, carbon steel woks, and outdoor charcoal grilling."
    }
  },
  "bamboo-vs-stainless-steel-steamer": {
    "materialThermal": {
      "property": "Vascular Cellulose Moisture Absorption vs. Impermeable Metal Condensation Runoff",
      "threshold": "Natural Bamboo 25% Moisture Absorption by Weight vs. Stainless Steel 0% Absorption (Drip Cascade)",
      "details": "Woven bamboo lids absorb rising steam vapor, preventing heavy condensation droplets from soaking and collapsing delicate dumpling skins; 18/8 stainless steel steamer pots provide lifetime non-porous durability and zero mold risk."
    },
    "safetyStandard": {
      "organization": "FDA / ASTM / ISO",
      "standard": "FDA Food Code 2022 § 4-101.11 & ASTM A240/A240M (Chromium Stainless Steel Plate)",
      "citation": "Sanitation requirements for multi-use food-contact surfaces; international corrosion specifications for food-grade stainless steels."
    },
    "applianceSpecs": {
      "parameter": "Delicate Dim Sum Texture vs. Dishwasher Sanitization",
      "guideline": "Use traditional bamboo steamers for dumplings, bao, and delicate fish with parchment liners; use tiered stainless steel steamer pots for root vegetables, tamales, crab legs, and humid environments requiring dishwasher sanitization."
    }
  },
  "silicone-vs-stainless-steel-tea-infuser": {
    "materialThermal": {
      "property": "Deep Cylindrical Expansion Basket vs. Cramped Molded Polymeric Chamber",
      "threshold": "304 Micro-Mesh Volume (~150 cm^3 / <0.5mm) vs. Molded Silicone (~20 cm^3 / Coarse Holes)",
      "details": "Laser-etched 304 stainless steel baskets allow whole-leaf teas to expand up to 400% for full polyphenol extraction with zero chemical migration in 100°C water; novelty silicone infusers cramp leaves and risk siloxane oligomer migration in acidic hot brews."
    },
    "safetyStandard": {
      "organization": "BfR / FDA / ISO",
      "standard": "German BfR Recommendation XV (Silicones) & ISO 8442 (Food-Contact Cutlery & Wire Mesh)",
      "citation": "BfR toxicological threshold limits for volatile organic compounds and siloxanes; ISO standards for food-contact stainless steel wire mesh."
    },
    "applianceSpecs": {
      "parameter": "Whole-Leaf Expansion & Chemical Purity in Boiling Tisanes",
      "guideline": "Deploy ultra-fine 304 stainless steel basket infusers for loose-leaf black, oolong, and fine rooibos teas; restrict novelty silicone infusers to coarse-cut dried fruit infusions or casual room-temperature steeping."
    }
  },
  "copper-core-vs-tri-ply-stainless-steel": {
    "materialThermal": {
      "property": "Electrolytic Copper Core Thermal Diffusivity vs. Tri-Ply Aluminum Thermal Mass Inertia",
      "threshold": "99.9% Pure Copper 385 W/m·K vs. Food-Grade Aluminum 205 W/m·K (Thermal Response Speed <3s vs ~8s)",
      "details": "5-ply copper core cookware transfers heat nearly twice as fast as aluminum, allowing instant temperature reductions for delicate sauces and caramel; tri-ply stainless steel provides greater heat retention for searing proteins with lighter tare weight."
    },
    "safetyStandard": {
      "organization": "ASTM / ISO / NSF",
      "standard": "ASTM B152 (Copper Sheet/Strip) & NSF/ANSI 51 (Food Equipment Materials)",
      "citation": "Standard specification for copper architectural and culinary cladding; NSF criteria for clad multi-layer commercial cookware metallurgy."
    },
    "applianceSpecs": {
      "parameter": "Precision Sauce Temperature Modulation vs. Heavy Everyday Sautéing",
      "guideline": "Use 5-ply copper core cookware for delicate reductions, hollandaise, and sugar work; choose tri-ply clad stainless steel for high-volume weeknight cooking, searing meats, and seamless automated dishwasher cleaning."
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
console.log('✅ Updated src/data/specs/compare.cjs with Wave 45 specifications');

// 3. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
if (fs.existsSync(llmsPath)) {
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  llmsContent = llmsContent.replace(/123\s+comparisons\s+per\s+language\s+\(615\s+localized\s+pages\)/g, '128 comparisons per language (640 localized pages)');
  llmsContent = llmsContent.replace(/123\s+head-to-head\s+safety\s+comparisons/g, '128 head-to-head safety comparisons');
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('✅ Updated public/llms.txt');
}

// 4. Update README.md if it mentions comparison count
const readmePath = path.resolve('README.md');
if (fs.existsSync(readmePath)) {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/123\s+comparisons\s+×\s+5\s+languages\s+=\s+615\s+localized\s+pages/g, '128 comparisons × 5 languages = 640 localized pages');
  readmeContent = readmeContent.replace(/123\s+comparisons/g, '128 comparisons');
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
    // Ensure french-press and tea-infuser are captured under coffee/beverage tools
    if (!content.includes('french-press|')) {
      content = content.replace(
        /(coffee-maker\|coffee\|)/g,
        'french-press|tea-infuser|$1'
      );
    }
    // Ensure steamer is matched under steaming
    if (!content.includes('steamer|')) {
      content = content.replace(
        /(steaming-vs-boiling\|)/g,
        'steamer|$1'
      );
    }
    // Ensure copper-core is matched under copper/stainless
    if (!content.includes('copper-core|')) {
      content = content.replace(
        /(copper\|porcelain\|)/g,
        'copper-core|$1'
      );
    }
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Updated tool routing in ${relPath}`);
  }
}

console.log('--- WAVE 45 INJECTION COMPLETE ---');
