const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS SYNDICATION FOR WAVE 70 ===');

// 1. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Update page counts and stats
llms = llms.replace(
  /Spanning \*\*12012\+ static pages\*\* across \*\*5 languages\*\*/g,
  'Spanning **12027+ static pages** across **5 languages**'
);
llms = llms.replace(
  /including \*\*78 Google-indexed everyday consumer tools\*\*\) with \*\*104 evergreen guides per language\*\* \(520 localized articles\)/g,
  'including **79 Google-indexed everyday consumer tools**) with **107 evergreen guides per language** (535 localized articles)'
);
llms = llms.replace(
  /Selected highlights from our \*\*104 evergreen kitchen safety guides\*\*/g,
  'Selected highlights from our **107 evergreen kitchen safety guides**'
);
llms = llms.replace(
  /All \*\*78 Google-indexed everyday consumer diagnostic tools\*\*/g,
  'All **79 Google-indexed everyday consumer diagnostic tools**'
);

// Append new guides
const newGuideEntries = `- [Cold Brew Coffee Maker Biofilm & Mycotoxin Contamination: Psychrotrophic Microbial Proliferation (Pseudomonas, Serratia), Room-Temperature Brewing Hazard Kinetics, and NSF Standard 18 Deep Sanitation Protocols](https://isitkitchensafe.com/blog/cold-brew-coffee-maker-biofilm-mold-toxicity-safety/): Countertop room-temperature incubation kinetics (20°C–25°C biological danger zone), low natural acidity (pH 5.0–5.5) fostering psychrotrophic bacteria (Pseudomonas fluorescens, Serratia marcescens), Extracellular Polymeric Substance (EPS) biofilm slime anchoring inside spigot valves and micro-mesh filters, fungal hyphae and heat-resistant Ochratoxin A (OTA) mycotoxin synthesis, stagnant spigot dead-legs and refrigerator Listeria colonization, and NSF/ANSI Standard 18 two-stage sodium percarbonate CIP protocols.
- [High-Speed Blender Friction Thermal Shock & Cavitation Micro-Chipping: Rotational Cavitation Pressure Kinetics, Scalding Hot Soup Vessel Explosions, and Martensitic 420 Blade Micro-Fracture Prevention](https://isitkitchensafe.com/blog/blender-blade-cavitation-thermal-pressure-explosion-safety/): 24,000 RPM blade tip velocities exceeding 340 km/h dissipating kinetic shear into boiling fluid temperatures, sealed single-serve bullet container vapor pressure explosion dynamics (Charles's Law & Clausius-Clapeyron up to 50 PSI), ASTM C149 thermal shock fracturing in soda-lime glass pitchers, hydrodynamic cavitation bubble collapse generating 1,000 m/s micro-jets and 1,000 MPa shockwaves, and martensitic 420 stainless steel cutlery blade micro-chipping and bearing seal grease weeping.
- [Silicone Air Fryer Liners & Baskets High-Heat Thermal Degradation: Cyclic Oligomer Migration at 200°C–230°C, Forced-Convection Airflow Fire Hazards, and Non-Stick Basket Cross-Friction Safety](https://isitkitchensafe.com/blog/silicone-air-fryer-liner-thermal-degradation-safety/): Polydimethylsiloxane (PDMS) thermal depolymerization at 200°C–230°C releasing volatile cyclic siloxanes (D4, D5, D6) exceeding EU migration thresholds (60 mg/kg), forced-convection updraft aerodynamic lifting of lightweight liners into 500°C glowing heating coils causing fire hazards, boundary-layer airflow impedance delaying Maillard crisping by up to 40%, abrasive salt/crumb entrapment scouring basket PTFE non-stick coatings, and German BfR XV platinum-cured post-curing baking standards.`;

if (!llms.includes('cold-brew-coffee-maker-biofilm-mold-toxicity-safety')) {
  const insertMarker = '## Consumer Interactive Kitchen Safety Tools';
  llms = llms.replace(insertMarker, `${newGuideEntries}\n\n${insertMarker}`);
  console.log('✅ Added 3 safety guides to llms.txt');
} else {
  console.log('ℹ️ Safety guides already in llms.txt');
}

// Add Tool #79 entry
const tool79Entry = `- [Cold Brew Commercial Nitro Dispenser Biofilm & Pressure Line Modeler](https://isitkitchensafe.com/tools/cold-brew-nitro-biofilm-modeler/): Model high-pressure N2/N2O draft line biofilm kinetics, psychrotrophic bacterial proliferation (Pseudomonas, Acetobacter), fungal hyphae stagnation, and CIP chemical sanitization failure under NSF/ANSI Standard 18.`;

if (!llms.includes('cold-brew-nitro-biofilm-modeler')) {
  const toolTarget = '## Consumer Interactive Kitchen Safety Tools\n\nAll **79 Google-indexed everyday consumer diagnostic tools**';
  llms = llms.replace(toolTarget, `${toolTarget}\n\n${tool79Entry}`);
  console.log('✅ Added cold brew tool to llms.txt');
} else {
  console.log('ℹ️ Cold brew tool already in llms.txt');
}

fs.writeFileSync(llmsPath, llms, 'utf8');
console.log('✅ Saved public/llms.txt');

// 2. Update src/pages/rss.xml.ts
const rssPath = path.resolve('src/pages/rss.xml.ts');
let rss = fs.readFileSync(rssPath, 'utf8');

const targetRss = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [`;

const tool79RssEntry = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/cold-brew-nitro-biofilm-modeler/',
    title: 'Cold Brew Commercial Nitro Dispenser Biofilm & Pressure Line Modeler',
    description:
      'Model high-pressure N2/N2O draft line biofilm kinetics, psychrotrophic bacterial proliferation (Pseudomonas, Acetobacter), fungal hyphae stagnation, and CIP chemical sanitization failure under NSF/ANSI Standard 18.',
    date: '2026-11-23'
  },`;

if (!rss.includes('/tools/cold-brew-nitro-biofilm-modeler/')) {
  rss = rss.replace(targetRss, tool79RssEntry);
  fs.writeFileSync(rssPath, rss, 'utf8');
  console.log('✅ Added cold-brew-nitro-biofilm-modeler to rss.xml.ts');
} else {
  console.log('ℹ️ Tool already in rss.xml.ts');
}

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

readme = readme.replace(
  /\*\*12012\+ static pages\*\*/g,
  '**12027+ static pages**'
);
readme = readme.replace(
  /\*\*78 Google-indexed everyday consumer tools\*\*/g,
  '**79 Google-indexed everyday consumer tools**'
);
readme = readme.replace(
  /\*\*104 evergreen guides per language\*\* \(520 localized articles\)/g,
  '**107 evergreen guides per language** (535 localized articles)'
);

fs.writeFileSync(readmePath, readme, 'utf8');
console.log('✅ Updated README.md');

console.log('=== SYNDICATION AND METADATA UPDATE COMPLETE ===');
