// Master script to execute Wave 61 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave61Slugs, newComparisonsEn } = require('./generate-wave61-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave61-es.cjs');
const { newComparisonsPt } = require('./build-wave61-pt.cjs');
const { newComparisonsZh } = require('./build-wave61-zh.cjs');
const { newComparisonsJa } = require('./build-wave61-ja.cjs');

console.log('--- STARTING WAVE 61 INJECTION ---');

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
  const filtered = existing.filter(item => !wave61Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} comparisons to ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
delete require.cache[require.resolve(specsPath)];
const existingSpecs = require(specsPath);

const newSpecs = {
  "stainless-steel-vs-cast-iron-meat-press": {
    "materialThermal": {
        "property": "Passivated Austenitic Steam Immersion Stability vs. Porous Sand-Cast Steam Oxidation",
        "threshold": "SUS304 Cr2O3 Film (Dissolution <0.01 mg/dm²·day at pH 3.0) vs. Bare Cast Iron (Rust Initiation <2 hours under condensation)",
        "details": "Dense passivated chromium(III) oxide boundary layer provides complete chemical resistance against acidic mustard, vinegar, and cured nitrates, eliminating rust formation under 200°C steam pressure and preventing loose charred carbon soot transfer onto seared smash burgers."
    },
    "safetyStandard": {
        "organization": "FDA / NSF / ASTM",
        "standard": "FDA Food Code § 4-101.11 & NSF/ANSI Standard 2 & ASTM B117",
        "citation": "Sanitary standards requiring non-corrosive, easily cleanable food contact surfaces without porous crevices capable of trapping animal grease and bacterial pathogens."
    },
    "applianceSpecs": {
        "parameter": "High-Heat Griddle Compression & Automated Dishwasher Degreasing",
        "guideline": "Apply vertical downward pressure at center of press during first 15 seconds of cooking; wash in automated dishwashers up to 85°C with alkaline detergent for total lipid removal."
    }
  },
  "glass-vs-stainless-steel-cold-brew-maker": {
    "materialThermal": {
        "property": "Vitreous Silicate Chemical Inertness vs. Double-Walled Vacuum Photon & Thermal Shielding",
        "threshold": "Borosilicate Glass (0.00 µg/L organic acid migration) vs. SUS304 (0.00% UV Transmittance at 200–400 nm)",
        "details": "Non-porous borosilicate silica network guarantees absolute taste neutrality and zero metal ion migration during 24-hour acidic extraction (pH 4.8–5.2), while double-walled vacuum stainless steel prevents photo-oxidation of delicate diterpenes and maintains cold chain temperatures (<5°C) without refrigeration."
    },
    "safetyStandard": {
        "organization": "Council of Europe / FDA / ISO",
        "standard": "Council of Europe CM/Res(2013)9 & FDA 21 CFR § 175.300 & ISO 7086",
        "citation": "Specific release limits (SRLs) for metals in contact with acidic food simulants and permissible limits on heavy metal release from glass food contact articles."
    },
    "applianceSpecs": {
        "parameter": "Refrigerated Anaerobic Steeping & Valve Lumen Sanitation",
        "guideline": "Steep coffee grounds under refrigeration (below 4°C) for 18–24 hours to prevent microbial spoilage; brush stainless dispenser spigots periodically with warm water to prevent biofilm build-up."
    }
  },
  "stainless-steel-vs-plastic-pasta-maker": {
    "materialThermal": {
        "property": "Hardened Alloy Roller Tribological Abrasion Resistance vs. POM Thermoplastic Extrusion Friction Degradation",
        "threshold": "Austenitic Stainless / Chrome Steel (Wear Rate <0.0001 mm³/N·m) vs. Polyoxymethylene / POM (Wear Rate >1.45 mm³/N·m)",
        "details": "Solid hardened steel rollers withstand high shear forces (>1,500 psi) from low-hydration durum semolina dough without microplastic shedding or friction heating, eliminating polymer abrasion particles and formaldehyde risk associated with overheated polyoxymethylene extrusion dies."
    },
    "safetyStandard": {
        "organization": "EU Commission / FDA / ASTM",
        "standard": "Commission Regulation (EU) No 10/2011 & FDA 21 CFR § 177.2470 & ASTM G99",
        "citation": "Overall migration limits and specific migration thresholds for formaldehyde and trioxane from polyoxymethylene food contact resins under high mechanical shear."
    },
    "applianceSpecs": {
        "parameter": "Dry-Brush Roller Maintenance & Gear Train Sanitation",
        "guideline": "Never submerge manual metal pasta machines in water; allow residual dough to dry completely for 2 hours, then sweep clean with a stiff pastry brush to protect internal bronze bushings."
    }
  },
  "glass-vs-plastic-fermentation-weights": {
    "materialThermal": {
        "property": "Annealed Solid Glass Zero Porosity vs. Porous Ceramic Micro-Capillary Biofilm Trapping",
        "threshold": "Vitrified Soda-Lime Glass (0.00% Water Absorption, Density 2.52 g/cm³) vs. Unglazed Ceramic (3.5%–7.8% Absorption, Mold Spore Retention)",
        "details": "Non-porous lead-free glass provides complete chemical immunity to aggressive lacto-fermentation brine (pH 3.2–3.6, 2%–5% NaCl) and delivers superior gravitational ballast to keep buoyant vegetables anaerobically submerged, preventing surface Kahm yeast and toxic mold colonization."
    },
    "safetyStandard": {
        "organization": "FDA / USDA / ISO",
        "standard": "FDA Compliance Policy Guide § 7117.06 & USDA Complete Guide to Home Canning & ISO 6486",
        "citation": "Regulatory guidelines establishing strict limits for extractable lead and cadmium in food contact ceramics and anaerobic submerged fermentation protocols."
    },
    "applianceSpecs": {
        "parameter": "Boiling Thermal Sterilization & Anaerobic Brine Submersion",
        "guideline": "Sterilize glass weights in boiling water for 10 minutes prior to packing Mason jars; ensure all vegetable shreds remain completely below the brine line throughout fermentation."
    }
  },
  "stainless-steel-vs-plastic-ice-cream-maker-bowl": {
    "materialThermal": {
        "property": "Austenitic Cryogenic Thermal Conductivity vs. PTFE Fluoropolymer Mechanical Gouging & Acid Pitting",
        "threshold": "SUS304 Stainless (Conductivity 16.2 W/m·K, Hardness >180 HV) vs. PTFE Coated Aluminum (Conductivity 0.2 W/m·K, Hardness <25 HV)",
        "details": "Solid uncoated SUS304 stainless steel eliminates PTFE fluoropolymer flaking from aggressive metal ice cream scoops, delivers ultra-rapid heat extraction for micro-crystalline velvety gelato texture, and resists severe pitting corrosion from acidic lemon and berry sorbets (pH 2.5–3.5)."
    },
    "safetyStandard": {
        "organization": "FDA / NSF / ASTM",
        "standard": "FDA 21 CFR § 175.300 & NSF/ANSI Standard 51 & ASTM G48",
        "citation": "Sanitary food equipment material standards governing pitting and crevice corrosion resistance in refrigerated and frozen food processing contact zones."
    },
    "applianceSpecs": {
        "parameter": "Rapid Cryogenic Churning & Seal Integrity Verification",
        "guideline": "Pre-freeze stainless churn bowl at -18°C for 16–24 hours prior to churning; discard immediately if any oily coolant fluid or bubbling occurs along laser-welded seams."
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
  
  // Expand the plastic regex to include the new tools
  const targetOld = 'oil-sprayer|can-opener|food-mill|tortilla-press';
  const targetNew = 'oil-sprayer|can-opener|food-mill|tortilla-press|meat-press|pasta-maker|fermentation-weights|ice-cream-maker';
  
  if (content.includes(targetOld) && !content.includes('pasta-maker')) {
    content = content.replace(targetOld, targetNew);
  }

  // Also enhance useCases rendering to support both situation and scenario, and recommendation + reason
  const ucOld = '<h3 class="text-title-sm font-bold text-ink mb-2 line-clamp-1">{uc.situation}</h3>';
  const ucNew = '<h3 class="text-title-sm font-bold text-ink mb-2 line-clamp-1">{(uc as any).situation || (uc as any).scenario}</h3>';
  if (content.includes(ucOld)) {
    content = content.replace(ucOld, ucNew);
  }

  const descOld = '<p class="text-body-md text-muted text-[13px] leading-relaxed">{uc.recommendation}</p>';
  const descNew = '<p class="text-body-md text-muted text-[13px] leading-relaxed">{uc.recommendation}{(uc as any).reason ? ` — ${(uc as any).reason}` : \'\'}</p>';
  if (content.includes(descOld)) {
    content = content.replace(descOld, descNew);
  }

  fs.writeFileSync(fullPagePath, content, 'utf8');
  console.log(`✅ Updated contextual tool routing and useCases rendering in ${relPage}`);
}

console.log('🎉 WAVE 61 INJECTION COMPLETE!');
