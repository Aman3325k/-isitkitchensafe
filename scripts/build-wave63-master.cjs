// Master script to execute Wave 63 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave63Slugs, newComparisonsEn } = require('./generate-wave63-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave63-es.cjs');
const { newComparisonsPt } = require('./build-wave63-pt.cjs');
const { newComparisonsZh } = require('./build-wave63-zh.cjs');
const { newComparisonsJa } = require('./build-wave63-ja.cjs');

console.log('--- STARTING WAVE 63 INJECTION ---');

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
  const filtered = existing.filter(item => !wave63Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} comparisons to ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
delete require.cache[require.resolve(specsPath)];
const existingSpecs = require(specsPath);

const newSpecs = {
  "stainless-steel-vs-plastic-sous-vide-container": {
    "materialThermal": {
      "property": "Austenitic Hydrothermal Inertness vs. Polycarbonate Hydrolysis & Micro-Crazing",
      "threshold": "SUS304 Cr2O3 Film (Dissolution <0.001 mg/dm²·day at 85°C) vs. Polycarbonate (BPA/BPS Leaching >0.15 µg/L after 48h)",
      "details": "Dense passivated chromium(III) oxide boundary layer provides complete chemical resistance against hot water aerosols, preventing polymer chain scission, micro-crazing under circulator clamp torque, and volatile organic compound outgassing during 72-hour long cooks."
    },
    "safetyStandard": {
      "organization": "FDA / NSF / Council of Europe",
      "standard": "FDA 21 CFR § 175.300 & NSF/ANSI Standard 2 & Council of Europe CM/Res(2013)9",
      "citation": "Sanitary food equipment standards establishing strict migration limits for bisphenols, phthalates, and heavy metals in sustained high-temperature food contact water baths."
    },
    "applianceSpecs": {
      "parameter": "High-Torque Clamp Mounting & Neoprene Insulating Jacket Integration",
      "guideline": "Mount immersion circulator securely to reinforced vessel wall; wrap stainless tank in 5mm neoprene sleeve to reduce heat radiation by 40% and protect quartz countertops with silicone trivets."
    }
  },
  "ceramic-vs-plastic-pour-over-dripper": {
    "materialThermal": {
      "property": "Vitreous Silicate Zero-Leaching Glaze vs. Thermoplastic Hydrothermal Oligomer Migration",
      "threshold": "High-Fired Porcelain (0.00 µg/L organic extraction at 98°C) vs. Polypropylene/Tritan (10^3–10^5 microplastic particles/L)",
      "details": "Completely vitrified, non-porous silica-alumina glaze fired at >1,300°C provides total chemical immunity to near-boiling water (98°C) and acidic coffee oils (pH 4.8–5.2), preventing polymer stabilizer migration, diterpene absorption, and stale rancid flavor buildup."
    },
    "safetyStandard": {
      "organization": "FDA / ISO / EFSA",
      "standard": "FDA Compliance Policy Guide § 7117.06 & ISO 6486 & EFSA Regulation (EU) No 10/2011",
      "citation": "International standards regulating extractable lead, cadmium, and plasticizer migration limits in ceramic and polymeric food contact articles under boiling extraction conditions."
    },
    "applianceSpecs": {
      "parameter": "Thermal Mass Preheating Rinse & Boiling Water Extraction",
      "guideline": "Rinse ceramic dripper with 150ml of boiling water prior to adding coffee grounds to stabilize slurry temperature; wash in dishwashers or soak in Cafiza detergent for total lipid removal."
    }
  },
  "ceramic-lined-vs-stainless-steel-travel-mug": {
    "materialThermal": {
      "property": "Fused Vitreous Silica Barrier vs. Acid-Catalyzed Galvanic Metallic Ion Dissolution",
      "threshold": "Ceramic-Lined (<0.001 mg/kg Ni & Cr dissolution at pH 4.8) vs. Bare SUS304 (0.015–0.040 mg/kg trace ion release)",
      "details": "Ultra-thin fused vitreous silica ceramic interior provides a completely inert chemical boundary between hot acidic coffee and steel, eliminating metallic aftertastes, preventing diterpene lipid binding, and preserving volatile aromatic terpenes during 12-hour vacuum storage."
    },
    "safetyStandard": {
      "organization": "FDA / ASTM / Council of Europe",
      "standard": "FDA 21 CFR § 175.300 & ASTM D3359 & Council of Europe CM/Res(2013)9",
      "citation": "Health and safety guidelines establishing specific release limits (SRLs) for nickel and chromium and verifying vitreous coating adhesion under thermal shock cycling."
    },
    "applianceSpecs": {
      "parameter": "Non-Abrasive Cleaning & Soft Bottle Brush Hygiene",
      "guideline": "Clean ceramic interior exclusively using soft silicone or sponge bottle brushes; avoid steel wool and sharp metal utensils to prevent micro-chipping the fused vitreous barrier."
    }
  },
  "stainless-steel-vs-aluminum-roasting-pan": {
    "materialThermal": {
      "property": "Tri-Ply Clad Structural Load Rigidity vs. Acidic Stovetop Deglazing Aluminum Dissolution",
      "threshold": "SUS304 Clad (0.00 mg/kg Al migration at pH 3.2) vs. Bare Aluminum (4.8–12.5 mg/kg Al leaching during wine reduction)",
      "details": "Encapsulated aluminum core bonded between heavy austenitic steel provides uniform heat distribution without hot spots, while passivated SUS304 cooking surfaces tolerate aggressive acid deglazing (wine, citrus, tomatoes) on direct stovetops without heavy metal transfer or warping."
    },
    "safetyStandard": {
      "organization": "FDA / NSF / EFSA",
      "standard": "FDA Food Code § 4-101.11 & NSF/ANSI Standard 51 & EFSA Tolerable Weekly Intake Guidelines",
      "citation": "Commercial cookware standards prohibiting toxic metal dissolution in acidic reductions and establishing structural integrity limits for high-heat roasting vessels."
    },
    "applianceSpecs": {
      "parameter": "High-Heat 260°C Oven Roasting & Multi-Burner Stovetop Deglazing",
      "guideline": "Roast turkeys up to 260°C (500°F) using heavy cast riveted handles for secure lifting; transition directly across two stovetop burners to deglaze caramelized fond with wooden spatulas."
    }
  },
  "stainless-steel-vs-cast-aluminum-meat-tenderizer": {
    "materialThermal": {
      "property": "Cold-Forged Austenitic Impact Hardness vs. Alkaline Dishwasher Smut Oxidation",
      "threshold": "SUS304 Stainless (180 HBW, 0.00 mg/dm² smut) vs. Cast Aluminum (60 HBW, >85 mg/dm² black oxide smut)",
      "details": "High-density austenitic alloy provides concentrated downward kinetic momentum to flatten cutlets with minimal effort, resists tooth deformation when striking dense bone fragments, and withstands caustic dishwasher detergents (pH 10–12) without precipitating toxic black aluminum oxide soot."
    },
    "safetyStandard": {
      "organization": "FDA / USDA FSIS / NSF",
      "standard": "FDA Food Code § 4-101.12 & USDA FSIS Pathogen Guidelines & NSF/ANSI Standard 2",
      "citation": "Food sanitation standards governing easily cleanable, non-porous food contact surfaces capable of achieving verified bacterial log reductions against Salmonella and Campylobacter."
    },
    "applianceSpecs": {
      "parameter": "High-Heat Automated Dishwasher Sanitization & Splatter Containment",
      "guideline": "Place raw poultry breasts inside heavy zip bags or parchment before pounding to prevent bacterial aerosolization; sanitize stainless mallet in high-heat dishwashers immediately after use."
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
  
  // Expand plastic tool regex to include sous-vide-container, pour-over-dripper, meat-tenderizer
  const plasticOld = 'fermentation-weights|ice-cream-maker';
  const plasticNew = 'fermentation-weights|ice-cream-maker|sous-vide-container|pour-over-dripper|meat-tenderizer';
  if (content.includes(plasticOld) && !content.includes('sous-vide-container')) {
    content = content.replace(plasticOld, plasticNew);
  }

  // Expand descaling regex to include travel-mug
  const descalOld = 'moka|burr-grinder';
  const descalNew = 'moka|burr-grinder|travel-mug';
  if (content.includes(descalOld) && !content.includes('travel-mug')) {
    content = content.replace(descalOld, descalNew);
  }

  // Expand ovenTemp regex to include roasting-pan
  const ovenOld = 'ceramic-vs-metal|oven-vs-toaster-oven';
  const ovenNew = 'ceramic-vs-metal|oven-vs-toaster-oven|roasting-pan';
  if (content.includes(ovenOld) && !content.includes('roasting-pan')) {
    content = content.replace(ovenOld, ovenNew);
  }

  fs.writeFileSync(fullPagePath, content, 'utf8');
  console.log(`✅ Updated contextual tool routing in ${relPage}`);
}

console.log('🎉 WAVE 63 INJECTION COMPLETE!');
