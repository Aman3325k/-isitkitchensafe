// Master script to execute Wave 41 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave41Slugs, newComparisonsEn } = require('./generate-wave41-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave41-es.cjs');
const { newComparisonsPt } = require('./build-wave41-pt.cjs');
const { newComparisonsZh } = require('./build-wave41-zh.cjs');
const { newComparisonsJa } = require('./build-wave41-ja.cjs');

console.log('--- STARTING WAVE 41 INJECTION ---');

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
  const filtered = existing.filter(item => !wave41Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} -> New count: ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
let specsContent = fs.readFileSync(specsPath, 'utf8');

const newSpecs = {
  "aluminum-vs-stainless-steel-pressure-cooker": {
    "materialThermal": {
      "property": "Amphoteric Hydrothermal Acid Leaching vs. Passivated Chromium Oxide Barrier",
      "threshold": "Annealed Aluminum Yield Strength 110 MPa vs. 18/10 Stainless Steel 505 MPa at 250°F (15 PSI)",
      "details": "High pressure steam (15 PSI / 121°C) and acidic food matrix (pH < 4.5) drive aluminum ion migration above EFSA TWI limits; 18/10 stainless steel forms a self-healing Cr2O3 passive film preventing all chemical dissolution and vessel warping."
    },
    "safetyStandard": {
      "organization": "EFSA / FDA / ISO",
      "standard": "ISO 136 (Pressure Cookers for Domestic Use) & EFSA Dietary Aluminum Standards",
      "citation": "EFSA Tolerable Weekly Intake (1 mg/kg bw/week); UL 136 pressure cooker mechanical integrity and overpressure safety standards."
    },
    "applianceSpecs": {
      "parameter": "Steam Pressure Cycling & Dishwasher Alkaline Safety",
      "guideline": "Use 18/10 stainless steel for high-acid culinary pressure cooking and effortless dishwasher sanitization; reserve large aluminum vessels strictly for water-bath and pressure canning where food is isolated inside glass Mason jars."
    }
  },
  "pizza-stone-vs-baking-steel": {
    "materialThermal": {
      "property": "High Thermal Conductivity Conductive Heat Flux vs. Ceramic Diffusion Buffer",
      "threshold": "Carbon Steel Thermal Conductivity ~54 W/m·K vs. Cordierite Ceramic ~1.3–2.5 W/m·K",
      "details": "Steel transfers thermal energy 18x faster with double the volumetric heat capacity, instantly vaporizing bottom crust moisture for explosive oven spring; porous cordierite acts as a gentle heat buffer and is susceptible to thermal shock fracture."
    },
    "safetyStandard": {
      "organization": "ASTM / FDA",
      "standard": "ASTM C373 (Porosity and Water Absorption) & FDA Food Code 2022 § 4-101.11",
      "citation": "Non-porous seasoned carbon steel plate meets commercial food-contact sanitation standards; porous ceramic stones absorb rancid lipid volatiles that smoke upon heating."
    },
    "applianceSpecs": {
      "parameter": "Oven Spring Maximization & Thermal Shock Avoidance",
      "guideline": "Position seasoned baking steel on the lowest oven rack for rapid 500°F (260°C) Neapolitan pizza; use ceramic stones for gentle sourdough loaf hearth baking. Never quench a hot ceramic stone with cold water."
    }
  },
  "stainless-steel-vs-plastic-blender-jar": {
    "materialThermal": {
      "property": "Hydrodynamic Cavitation Shear Resistance vs. Polymer Micro-Abrasion Erosion",
      "threshold": "SUS304 Hardness Mohs 5.5 (0.0% Microplastic Shedding) vs. Tritan Copolyester Mohs 2.5",
      "details": "Blender blades rotating at 25,000 RPM generate intense cavitation and frictional shear; hard seeds and ice scour plastic walls releasing millions of micro/nanoplastics; electropolished 304 stainless steel resists all abrasive wear and hot soup pressure."
    },
    "safetyStandard": {
      "organization": "NSF / FDA / EFSA",
      "standard": "NSF/ANSI 8 (Commercial Food Equipment) & FDA 21 CFR § 177.1020",
      "citation": "Electropolished stainless steel meets Class I commercial sanitation without risk of microplastic shedding, VOC migration, or carotenoid/allium oil sorption."
    },
    "applianceSpecs": {
      "parameter": "High-Velocity Pureeing & Boiling Liquid Safety",
      "guideline": "Puree steaming soups (up to 212°F / 100°C) exclusively in stainless steel jars with vented lid caps to eliminate plasticizer leaching; use transparent Tritan jars for room-temperature smoothies requiring visual texture assessment."
    }
  },
  "unbleached-vs-bleached-parchment-paper": {
    "materialThermal": {
      "property": "Totally Chlorine Free (TCF) Virgin Cellulose Matrix vs. Elemental Chlorine Free (ECF) Treated Pulp",
      "threshold": "Continuous Thermal Endurance 428°F–450°F (220°C–232°C); Pyrolysis Boundary 451°F",
      "details": "TCF unbleached parchment eliminates all organochlorine processing byproducts and optical brighteners; food-grade polydimethylsiloxane coating provides identical 450°F non-stick barrier properties to bleached white parchment."
    },
    "safetyStandard": {
      "organization": "FDA / EPA / BfR",
      "standard": "FDA 21 CFR § 176.170 (Components of Paper and Paperboard) & German BfR XXXVI",
      "citation": "Unbleached parchment paper adheres to totally chlorine-free pulp standards and is certified 100% home compostable without heavy metal or chlorinated organic residues."
    },
    "applianceSpecs": {
      "parameter": "High-Heat Oven Roasting & Fire Hazard Mitigation",
      "guideline": "Use unbleached parchment for toxic-free daily roasting and baking up to 450°F; never use under direct broilers or allow paper edges to contact electric oven heating elements or air fryer coils."
    }
  },
  "stainless-steel-vs-aluminum-moka-pot": {
    "materialThermal": {
      "property": "Organic Acid Dissolution Resistance vs. Amphoteric Metal Corrosion",
      "threshold": "18/10 Stainless Steel Migration <0.01 mg/L vs. Cast Aluminum Leaching 0.2–1.5 mg/L in Acidic Coffee (pH 5.0)",
      "details": "Roasted coffee chlorogenic acids chemically pit bare cast aluminum under 1.5–2 bar steam extraction at 95°C; 18/10 stainless steel forms an imperviously dense Cr2O3 passive layer that remains 100% inert and dishwasher safe."
    },
    "safetyStandard": {
      "organization": "Council of Europe / EFSA / DIN",
      "standard": "Resolution CM/Res(2013)9 on Metals and Alloys in Food Contact & DIN EN 601",
      "citation": "Limits aluminum release to <5.0 mg/kg; stainless steel guarantees zero detectable metal ion transfer into acidic hot brews and native magnetic induction coupling."
    },
    "applianceSpecs": {
      "parameter": "Steam Extraction Dynamics & Dishwasher Sanitization",
      "guideline": "Brew daily coffee on induction, glass-ceramic, or gas stoves using 18/10 stainless steel moka pots for pure taste and dishwasher sanitization; never place aluminum moka pots in dishwashers to prevent toxic caustic black smudge formation."
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
console.log('✅ Updated src/data/specs/compare.cjs with Wave 41 specifications');

// 3. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
if (fs.existsSync(llmsPath)) {
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  llmsContent = llmsContent.replace(/113\s+head-to-head\s+safety\s+comparisons/g, '118 head-to-head safety comparisons');
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('✅ Updated public/llms.txt');
}

// 4. Update README.md if it mentions comparison count
const readmePath = path.resolve('README.md');
if (fs.existsSync(readmePath)) {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/113\s+head-to-head\s+material\s+&\s+appliance\s+comparisons/g, '118 head-to-head material & appliance comparisons');
  readmeContent = readmeContent.replace(/113\s+comparisons/g, '118 comparisons');
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  console.log('✅ Updated README.md');
}

console.log('--- WAVE 41 INJECTION COMPLETE ---');
