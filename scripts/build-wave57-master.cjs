// Master script to execute Wave 57 injection across comparisons, specs, and routing
const fs = require('fs');
const path = require('path');

const { wave57Slugs, newComparisonsEn } = require('./generate-wave57-comparisons.cjs');
const { newComparisonsEs } = require('./build-wave57-es.cjs');
const { newComparisonsPt } = require('./build-wave57-pt.cjs');
const { newComparisonsZh } = require('./build-wave57-zh.cjs');
const { newComparisonsJa } = require('./build-wave57-ja.cjs');

console.log('--- STARTING WAVE 57 INJECTION ---');

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
  const filtered = existing.filter(item => !wave57Slugs.includes(item.slug));
  const merged = [...filtered, ...config.data];
  
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  console.log(`Updated ${lang} -> New count: ${merged.length}`);
}

// 2. Update src/data/specs/compare.cjs
const specsPath = path.resolve('src/data/specs/compare.cjs');
let specsContent = fs.readFileSync(specsPath, 'utf8');

const newSpecs = {
  "stainless-steel-vs-nylon-cooking-ladle": {
    "materialThermal": {
      "property": "Austenitic Chromium-Nickel Crystal Matrix Stability vs. Polyamide 6,6 Thermal Softening & PAA Pyrolysis",
      "threshold": "SUS304 (Melting >1400°C, Tensile Yield >205 MPa) vs. PA66 Nylon (Heat Deflection 180°C–210°C, Melting 255°C, PAA Leaching >70°C)",
      "details": "Solid SUS304 austenitic stainless steel maintains complete metallurgical integrity during prolonged soup boiling and hot fat contact without chemical leaching, eliminating carcinogenic Primary Aromatic Amines (4,4'-MDA and aniline) and microplastics released by thermal breakdown of black nylon."
    },
    "safetyStandard": {
      "organization": "BfR / EU Commission / FDA",
      "standard": "EU Regulation No 10/2011 & Commission Regulation (EU) No 284/2011 & BfR Opinion No. 028/2019",
      "citation": "Food contact toxicological standards setting strict specific migration limits (SML < 0.002 mg/kg) on primary aromatic amines in polyamide kitchenware."
    },
    "applianceSpecs": {
      "parameter": "Zero-PAA Boiling Broth Immersion & Commercial Dishwasher Sanitization",
      "guideline": "Deploy solid SUS304 stainless steel ladles for all boiling stocks, simmering stews, and deep-fry skimming; never rest nylon ladles inside hot pots over open burners; wash in commercial dishwashers up to 85°C."
    }
  },
  "stainless-steel-vs-plastic-kitchen-funnel": {
    "materialThermal": {
      "property": "Austenitic Acid-Passivated Boundary Layer vs. Polyolefin Hydrothermal Expansion & Additive Migration",
      "threshold": "SUS304 Cr2O3 Film (Inert to 100°C Boiling 10% Acetic Acid) vs. Polypropylene (Softening 95°C–120°C, Additive Diffusion >80°C)",
      "details": "Passivated SUS304 chromium(III) oxide boundary layer provides total immunity to boiling vinegar and acidic fruit purees during home canning, eliminating antioxidant migration (Irganox) and polyolefin oligomers extracted from thin plastic funnels under boiling pack temperatures."
    },
    "safetyStandard": {
      "organization": "USDA / FDA / ASTM",
      "standard": "USDA Complete Guide to Home Canning & FDA 21 CFR § 175.300 & ASTM D8332",
      "citation": "Food preservation thermal processing standards and food contact material migration limits governing boiling acidic food transfers."
    },
    "applianceSpecs": {
      "parameter": "Anti-Vapor-Lock Fluted Stem & Aseptic Canning Sterilization",
      "guideline": "Utilize fluted-stem SUS304 stainless funnels to prevent dangerous vapor-lock boiling liquid eruptions during jar filling; boil funnels for 10 minutes prior to canning low-acid foods to achieve aseptic microbial control."
    }
  },
  "stainless-steel-vs-plastic-measuring-spoons": {
    "materialThermal": {
      "property": "Stamped Cold-Rolled Austenitic Volumetric Stability vs. Molded Thermoplastic Wash-Cycle Creep",
      "threshold": "SUS304 Sheet (Yield Strength >205 MPa, Zero Thermal Creep <400°C) vs. Molded Polypropylene (Creep Strain >12% at 65°C)",
      "details": "Die-stamped SUS304 stainless steel maintains rigorous ±0.5% volumetric calibration indefinitely through commercial dishwashing cycles, whereas thin polypropylene spoons warp and ovalize, creating up to 25% measurement errors in chemical leaveners."
    },
    "safetyStandard": {
      "organization": "NIST / ASTM / FDA",
      "standard": "NIST Handbook 105-3 (Specifications for Volumetric Measures) & ASTM E542 & FDA 21 CFR § 177.1520",
      "citation": "Metrological accuracy standards and solvent extractive limitations governing culinary volumetric dosing instruments."
    },
    "applianceSpecs": {
      "parameter": "Ethanol Solvent Resistance & Permanent Laser Metrology",
      "guideline": "Use laser-engraved SUS304 spoons when measuring solvent-rich vanilla extracts, citrus essential oils, and coarse abrasive salts to prevent ink flaking and plastic crazing; dry nested magnetic sets before storage."
    }
  },
  "porcelain-vs-melamine-dinnerware": {
    "materialThermal": {
      "property": "Dense Vitrified Mullite-Glass Silicate Matrix vs. Thermoset Melamine-Formaldehyde Acid Hydrolysis",
      "threshold": "Vitrified Hard Porcelain (Firing 1,350°C–1,400°C, Mohs Hardness 7, Zero Formaldehyde) vs. Melamine Resin (Acid Hydrolysis >70°C, Dielectric Microwave Heating)",
      "details": "High-temperature vitrified feldspathic porcelain is completely non-porous (<0.1% water absorption) and microwave transparent, eliminating the nephrotoxic melamine monomer and carcinogenic formaldehyde leaching triggered when melamine resin contacts hot acidic foods (>70°C, pH <4.5)."
    },
    "safetyStandard": {
      "organization": "FDA / EFSA / IARC",
      "standard": "FDA CPG Sec. 545.400 / 545.450 & EU Regulation 10/2011 & IARC Monograph Vol. 100F (Formaldehyde)",
      "citation": "Specific migration limits (SML 15 mg/kg formaldehyde, 2.5 mg/kg melamine) and microwave radiation exclusion standards for food contact tableware."
    },
    "applianceSpecs": {
      "parameter": "Microwave Safety & Cutlery Scratch Resistance",
      "guideline": "Serve hot acidic meals (soups, pasta, curries) exclusively on vitrified porcelain; never place melamine dinnerware into microwave ovens; replace scratched melamine tableware immediately to prevent bacterial harboring."
    }
  },
  "silicone-vs-plastic-popsicle-molds": {
    "materialThermal": {
      "property": "Addition-Cured Polydimethylsiloxane Cryogenic Elastomeric Flexibility vs. Polyolefin Sub-Zero Embrittlement",
      "threshold": "Platinum Siloxane (Glass Transition Tg < -120°C, Operating -40°C to +230°C) vs. Polystyrene/PP (Tg 0°C to -10°C, Cryogenic Embrittlement at -18°C)",
      "details": "LFGB European standard platinum-cured silicone retains full elastomeric flexibility at -18°C freezer temperatures, allowing instant thumb-press demolding without warm water thawing, while completely resisting chemical extraction into acidic berry and citrus fruit purees (pH 2.5–3.5)."
    },
    "safetyStandard": {
      "organization": "BfR / LFGB / FDA",
      "standard": "German LFGB § 31 & BfR XV (Silicones) & FDA 21 CFR § 177.2600",
      "citation": "European and US food-contact elastomer migration standards limiting volatile organic compounds (VOC < 0.5%) and extractables in sub-zero and elevated temperatures."
    },
    "applianceSpecs": {
      "parameter": "Cold-Release Cryogenic Flexibility & Dual Bake/Freeze Capability",
      "guideline": "Peel LFGB platinum silicone molds directly away from frozen popsicles without warm water submersion to preserve crisp frozen details; utilize dual-temperature capacity to bake cakeicles at temperatures up to 230°C."
    }
  }
};

let specsAdded = 0;
for (const [sKey, sVal] of Object.entries(newSpecs)) {
  if (!specsContent.includes(`"${sKey}":`)) {
    const formattedSpec = `  "${sKey}": ${JSON.stringify(sVal, null, 4)},\n};`;
    specsContent = specsContent.replace(/};\s*$/, formattedSpec);
    specsAdded++;
  }
}
fs.writeFileSync(specsPath, specsContent, 'utf8');
console.log(`Added ${specsAdded} new specs to src/data/specs/compare.cjs`);

// 3. Update routing in src/pages/compare/[slug].astro and [lang]/compare/[slug].astro
const compPageEn = path.resolve('src/pages/compare/[slug].astro');
let compEnContent = fs.readFileSync(compPageEn, 'utf8');

const targetRegexEn = `fine-mesh-strainer)/`;
const replacementRegexEn = `fine-mesh-strainer|cooking-ladle|kitchen-funnel|measuring-spoons|melamine-dinnerware|popsicle-molds)/`;

if (compEnContent.includes(targetRegexEn)) {
  compEnContent = compEnContent.replace(targetRegexEn, replacementRegexEn);
  fs.writeFileSync(compPageEn, compEnContent, 'utf8');
  console.log('Updated routing in src/pages/compare/[slug].astro');
}

const compPageLang = path.resolve('src/pages/[lang]/compare/[slug].astro');
let compLangContent = fs.readFileSync(compPageLang, 'utf8');

if (compLangContent.includes(targetRegexEn)) {
  compLangContent = compLangContent.replace(targetRegexEn, replacementRegexEn);
  fs.writeFileSync(compPageLang, compLangContent, 'utf8');
  console.log('Updated routing in src/pages/[lang]/compare/[slug].astro');
}

// 4. Update public/llms.txt and README.md
const llmsPath = path.resolve('public/llms.txt');
let llmsContent = fs.readFileSync(llmsPath, 'utf8');

llmsContent = llmsContent.replace(/11,747\+ static pages/g, '11,772+ static pages');
llmsContent = llmsContent.replace(/153 comparisons per language/g, '158 comparisons per language');
llmsContent = llmsContent.replace(/765 localized pages/g, '790 localized pages');

const compAnchor = `- [Stainless Steel vs. Plastic Fine Mesh Strainer](https://isitkitchensafe.com/compare/stainless-steel-vs-plastic-fine-mesh-strainer/): Compares double-woven twill SUS304 stainless steel against synthetic nylon mesh on boiling liquid microplastic shedding (100°C), thermal heat tolerance (800°C), and fat grease absorption.`;

const newCompsLlms = `- [Stainless Steel vs. Plastic Fine Mesh Strainer](https://isitkitchensafe.com/compare/stainless-steel-vs-plastic-fine-mesh-strainer/): Compares double-woven twill SUS304 stainless steel against synthetic nylon mesh on boiling liquid microplastic shedding (100°C), thermal heat tolerance (800°C), and fat grease absorption.
- [Stainless Steel vs. Nylon Cooking Ladle](https://isitkitchensafe.com/compare/stainless-steel-vs-nylon-cooking-ladle/): Compares solid SUS304 stainless steel against black nylon (PA66) ladles on carcinogenic Primary Aromatic Amine (PAA) chemical leaching, thermal melting thresholds, and microplastics.
- [Stainless Steel vs. Plastic Kitchen Funnel](https://isitkitchensafe.com/compare/stainless-steel-vs-plastic-kitchen-funnel/): Compares SUS304 stainless steel against polypropylene funnels on boiling canning acid leaching (100°C), fluted stem vapor-lock burst prevention, and oil absorption.
- [Stainless Steel vs. Plastic Measuring Spoons](https://isitkitchensafe.com/compare/stainless-steel-vs-plastic-measuring-spoons/): Compares one-piece stamped SUS304 stainless steel against plastic measuring spoons on dishwasher volumetric warping, alcohol vanilla extract solvent resistance, and permanent laser markings.
- [Porcelain vs. Melamine Dinnerware](https://isitkitchensafe.com/compare/porcelain-vs-melamine-dinnerware/): Compares vitrified feldspathic porcelain against melamine-formaldehyde resin plates on toxic formaldehyde and melamine monomer leaching (>70°C), microwave blistering hazards, and cutlery scratch resistance.
- [Silicone vs. Plastic Popsicle Molds](https://isitkitchensafe.com/compare/silicone-vs-plastic-popsicle-molds/): Compares LFGB platinum-cured silicone against rigid plastic ice pop molds on sub-zero cryogenic embrittlement (-18°C), effortless peel-back demolding without hot water thawing, and acidic fruit juice leaching.`;

if (!llmsContent.includes('stainless-steel-vs-nylon-cooking-ladle')) {
  llmsContent = llmsContent.replace(compAnchor, newCompsLlms);
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('Updated public/llms.txt');
}

const readmePath = path.resolve('README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

readmeContent = readmeContent.replace(/11,747\+ static pages/g, '11,772+ static pages');
readmeContent = readmeContent.replace(/153 comparisons × 5 languages = 765 localized pages/g, '158 comparisons × 5 languages = 790 localized pages');
readmeContent = readmeContent.replace(/153 Head-to-Head Comparisons/g, '158 Head-to-Head Comparisons');
readmeContent = readmeContent.replace(/153 comparisons/g, '158 comparisons');

fs.writeFileSync(readmePath, readmeContent, 'utf8');
console.log('Updated README.md');

console.log('--- WAVE 57 MASTER INJECTION COMPLETED ---');
