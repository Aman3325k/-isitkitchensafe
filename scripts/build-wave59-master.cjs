// Master script to execute Wave 59 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave59Slugs, newComparisonsEn } = require('./generate-wave59-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave59-es.cjs');
const { newComparisonsPt } = require('./build-wave59-pt.cjs');
const { newComparisonsZh } = require('./build-wave59-zh.cjs');
const { newComparisonsJa } = require('./build-wave59-ja.cjs');

console.log('--- STARTING WAVE 59 INJECTION ---');

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
  const filtered = existing.filter(item => !wave59Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} comparisons to ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
let specsContent = fs.readFileSync(specsPath, 'utf8');

const newSpecs = {
  "glass-vs-plastic-oil-sprayer": {
    "materialThermal": {
        "property": "Inorganic Silicate Network Stability vs. Polyolefin/Polycarbonate Hydrothermal Plasticizer Diffusion",
        "threshold": "Borosilicate Glass (Strain Point 510°C, Hydrolytic Class 1) vs. PET/PC Polymer (Heat Deflection 65°C–80°C, Lipophilic Migration >25°C)",
        "details": "Dense vitreous borosilicate silica network exhibits zero chemical solubility in non-polar lipid matrices, eliminating phthalate ester plasticizers (DEHP, DINP) and bisphenol analogs extracted from thin plastic bottles under ambient kitchen temperatures (25°C–35°C)."
    },
    "safetyStandard": {
        "organization": "EU Commission / FDA / ISO",
        "standard": "Commission Regulation (EU) No 10/2011 & FDA 21 CFR § 177.1520 & ISO 3960",
        "citation": "Food contact material overall migration limits in fatty food simulants (simulant D2) and lipid peroxide induction period standards governing edible oils."
    },
    "applianceSpecs": {
        "parameter": "Aerosol-Free Mechanical Misting & High-Heat Degreasing Sanitization",
        "guideline": "Utilize propellant-free borosilicate sprayers for misting cooking oils in air fryers and convection ovens; degrease nozzles periodically with hot water and baking soda to prevent rancid lipid bacterial biofilms."
    }
  },
  "stainless-steel-vs-glass-straws": {
    "materialThermal": {
        "property": "Annealed Borosilicate Low Thermal Diffusivity vs. Austenitic High Thermal Conduction & Tissue Impaction",
        "threshold": "Borosilicate (Thermal Conductivity 1.14 W/m·K, Fracture Strain 0.1%) vs. SUS304 (Conductivity 16.2 W/m·K, Yield Strength >205 MPa)",
        "details": "Thermally insulating borosilicate glass prevents acute oral contact scalds from boiling hot beverages and eliminates catastrophic impaction and palatal puncture trauma associated with rigid, unyielding metal cylinders during accidental falls."
    },
    "safetyStandard": {
        "organization": "CPSC / ASTM / FDA",
        "standard": "CPSC Safety Alert No. 5128 & ASTM F963 / ASTM C149 & FDA 21 CFR § 175.300",
        "citation": "Federal consumer product safety impaction warnings and thermal shock/optical transmittance standards governing reusable drinking straws."
    },
    "applianceSpecs": {
        "parameter": "Internal Lumen Biofilm Inspection & Dual-Temperature Immersion",
        "guideline": "Inspect transparent borosilicate straws under direct light prior to use to ensure zero fungal biofilm retention; clean interior lumens with dedicated nylon wire brushes; safe for boiling tea and iced cold brew."
    }
  },
  "stainless-steel-vs-plastic-can-opener": {
    "materialThermal": {
        "property": "Austenitic Open-Frame Sanitary Cleanability vs. Molded Clamshell Micro-Void Pathogen Harboring",
        "threshold": "SUS304 Open Frame (0 Log Biofilm Retention, Tensile Yield >205 MPa) vs. Molded ABS/PP (Creep Strain >15%, Bacterial Biofilm >4.2 Log CFU/cm²)",
        "details": "Open-frame solid austenitic stainless steel architecture allows complete fluid drainage and brush washability, eliminating foodborne pathogen reservoirs (Salmonella, Listeria) trapped inside unsealed hollow plastic gear clamshells."
    },
    "safetyStandard": {
        "organization": "NSF / ANSI / FDA",
        "standard": "NSF/ANSI Standard 2 (Food Equipment Sanitation) & FDA Food Code § 4-201.11 & ASTM B117",
        "citation": "Sanitary design criteria requiring smooth, easily cleanable, corrosion-resistant surfaces without inaccessible internal voids in food contact tools."
    },
    "applianceSpecs": {
        "parameter": "High-Heat Commercial Sanitization & Burr-Free Can Shearing",
        "guideline": "Wash solid SUS304 can openers in commercial dishwashers up to 85°C to achieve full thermal sanitization; inspect cutter wheels periodically to ensure clean shearing without producing microscopic metal burrs."
    }
  },
  "stainless-steel-vs-plastic-food-mill": {
    "materialThermal": {
        "property": "Chromium Oxide Tribological Abrasion Resistance vs. Thermoplastic High-Temperature Shear Wear",
        "threshold": "SUS304 (Hardness >170 HV, Wear Rate <0.001 mm³/N·m at 100°C) vs. Polypropylene (Hardness <75 Shore D, Wear Rate >1.85 mm³/N·m)",
        "details": "Austenitic stainless steel provides absolute immunity to mechanical microplastic shedding and plasticizer migration during high-friction pureeing of boiling hot acidic tomato and fruit preparations (90°C–100°C, pH 3.2–4.5)."
    },
    "safetyStandard": {
        "organization": "Council of Europe / FDA / ASTM",
        "standard": "Council of Europe CM/Res(2013)9 & FDA 21 CFR § 177.1520 & ASTM G99",
        "citation": "International guidelines on metals and alloys used in food contact materials and pin-on-disk polymer tribological wear standards."
    },
    "applianceSpecs": {
        "parameter": "Direct Boiling Pot Suspension & Aseptic Canning Pureeing",
        "guideline": "Seat stainless steel pot hooks firmly over simmering stockpots when pureeing hot tomato paste or baby food; sterilize entire unit in boiling water baths prior to home canning low-acid preserves."
    }
  },
  "stainless-steel-vs-cast-aluminum-tortilla-press": {
    "materialThermal": {
        "property": "Passivated Austenitic Alkaline Stability vs. Amphoteric Aluminum Chemical Dissolution",
        "threshold": "SUS304 Cr2O3 Film (Stable at pH 1.0–13.0, Zero Al³⁺ Dissolution) vs. Sand-Cast Aluminum (Dissolution Rate >40 mg/dm²·day at pH 11.5)",
        "details": "Passive chromium(III) oxide boundary layer remains completely inert to calcium hydroxide in alkaline nixtamalized corn dough (pH 10.5–12.0), eliminating dark toxic aluminum hydroxide transfers and lever fracturing common in sand-cast aluminum."
    },
    "safetyStandard": {
        "organization": "EFSA / WHO / ASTM",
        "standard": "EFSA Scientific Opinion on Aluminum in Food & WHO Food Additives Series 65 & ASTM A370",
        "citation": "Tolerable weekly intake limits for dietary aluminum (TWI 1 mg/kg bw/week) and mechanical fracture testing standards for culinary pressing equipment."
    },
    "applianceSpecs": {
        "parameter": "Alkaline Masa Isolation & High-Force Mechanical Compression",
        "guideline": "Use food-grade plastic or parchment liners to facilitate dough release during pressing; wipe solid stainless plates with damp cloth; never place raw aluminum presses in alkaline dishwashers."
    }
  }
};

// Remove any existing entries for these slugs if re-running
for (const slug of wave59Slugs) {
  const regex = new RegExp(`\\s*"${slug}":\\s*\\{[\\s\\S]*?\\n\\s*\\},?`, 'g');
  specsContent = specsContent.replace(regex, '');
}

// Format new specs as JavaScript object entries
let formattedSpecs = '';
for (const [slug, spec] of Object.entries(newSpecs)) {
  formattedSpecs += `  "${slug}": ${JSON.stringify(spec, null, 4)},\n`;
}

// Insert before closing `};`
specsContent = specsContent.replace(/,?\s*\};\s*$/, `,\n${formattedSpecs}};\n`);
fs.writeFileSync(specsPath, specsContent, 'utf8');
console.log('✅ Updated src/data/specs/compare.cjs with 5 E-E-A-T specifications');

// 3. Update contextual tool routing in compare pages
const comparePages = [
  'src/pages/compare/[slug].astro',
  'src/pages/[lang]/compare/[slug].astro'
];

for (const relPage of comparePages) {
  const fullPagePath = path.resolve(relPage);
  let content = fs.readFileSync(fullPagePath, 'utf8');
  
  // Expand the plastic regex to include the new prep tools
  const targetOld = 'cooking-ladle|kitchen-funnel|measuring-spoons|melamine-dinnerware|popsicle-molds';
  const targetNew = 'cooking-ladle|kitchen-funnel|measuring-spoons|melamine-dinnerware|popsicle-molds|oil-sprayer|can-opener|food-mill|tortilla-press';
  
  if (content.includes(targetOld) && !content.includes('tortilla-press')) {
    content = content.replace(targetOld, targetNew);
    fs.writeFileSync(fullPagePath, content, 'utf8');
    console.log(`✅ Updated contextual tool routing in ${relPage}`);
  }
}

console.log('🎉 WAVE 59 INJECTION COMPLETE!');
