const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS SYNDICATION FOR WAVE 60 ===');

// 1. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Update summary counts
llms = llms.replace(
  /Spanning \*\*11,787\+ static pages\*\* across \*\*5 languages\*\* \(EN, ES, PT, ZH-CN, JA\), the platform pairs \*\*210 flagship interactive tools\*\* \(\*\*1,050 localized tool pages\*\*, including \*\*73 Google-indexed everyday consumer tools\*\*\) with \*\*89 evergreen guides per language\*\* \(445 localized articles\)/g,
  'Spanning **11,827+ static pages** across **5 languages** (EN, ES, PT, ZH-CN, JA), the platform pairs **210 flagship interactive tools** (**1,050 localized tool pages**, including **74 Google-indexed everyday consumer tools**) with **92 evergreen guides per language** (460 localized articles)'
);

// Fallback replacement if Wave 59 changed numbers:
llms = llms.replace(
  /Spanning \*\*11,812\+ static pages\*\* across \*\*5 languages\*\* \(EN, ES, PT, ZH-CN, JA\), the platform pairs \*\*210 flagship interactive tools\*\* \(\*\*1,050 localized tool pages\*\*, including \*\*73 Google-indexed everyday consumer tools\*\*\) with \*\*89 evergreen guides per language\*\* \(445 localized articles\)/g,
  'Spanning **11,827+ static pages** across **5 languages** (EN, ES, PT, ZH-CN, JA), the platform pairs **210 flagship interactive tools** (**1,050 localized tool pages**, including **74 Google-indexed everyday consumer tools**) with **92 evergreen guides per language** (460 localized articles)'
);

// Update highlights header count
llms = llms.replace(
  /Selected highlights from our \*\*\d+ evergreen kitchen safety guides\*\*/g,
  'Selected highlights from our **92 evergreen kitchen safety guides**'
);

// Append new guides if not already present
const newGuideEntries = `- [Silicone Spatulas & Cooking Utensil Safety: High-Heat Oil Leaching Kinetics, Cyclic Siloxanes (D4–D6), White Pinch-Test Fillers & Dishwasher Scent Absorption](https://isitkitchensafe.com/blog/silicone-spatula-cooking-oil-leaching-heat-safety/): Polydimethylsiloxane (PDMS) thermal depolymerization via intramolecular back-biting chain scission at temperatures > 180°C (356°F), non-polar cooking oil lipophilic extraction partitioning (up to 100x higher than water), the twist-and-pinch test for 30%–50% calcium carbonate mineral fillers in budget silicone, conductive pan-rim contact degradation, and oven baking thermal deodorization protocols (120°C / 250°F).
- [Air Fryer Toxic Fumes & Nanoparticle Resuspension: High-Velocity Convection Dynamics, Aerosolized Lipid Pyrolysis, PAH Accumulation & Safe Cleaning Science](https://isitkitchensafe.com/blog/air-fryer-basket-toxic-fumes-nanoparticle-resuspension-safety/): Forced convective airflow dynamics (150–200 CFM cyclonic vortex), atomization of liquid fats against 1800W heating coils, thermal pyrolysis of accumulated drawer grease into polycyclic aromatic hydrocarbons (benzo[a]pyrene) and acrolein, the 500°F (260°C) empty non-stick preheating PTFE degradation hazard, indoor air quality PM2.5 spikes (>300 µg/m³), and gentle baking soda saponification cleaning.
- [Immersion Blenders & Food Processors Seal Failure: Motor Shaft Lubricant Leaching, Bearing Grease Food Contact Standards, Cavitation Pitting & Blade Fatigue](https://isitkitchensafe.com/blog/immersion-blender-food-processor-blade-seal-lubricant-safety/): Rotary elastomeric lip seal failure under simultaneous 95°C hot soup immersion and 12,000+ RPM shear, motor bearing lubricant leakage (the "black sludge" phenomenon), NSF H1 incidental food contact certification standards vs toxic industrial greases, ultrasonic hydrodynamic cavitation micro-pitting (>1,000 MPa implosions), alkaline dishwasher destruction of sintered bronze (Oilite) bushings, and monthly paper towel diagnostic testing.`;

if (!llms.includes('silicone-spatula-cooking-oil-leaching-heat-safety')) {
  const insertMarker = '## Consumer Interactive Kitchen Safety Tools';
  llms = llms.replace(insertMarker, `${newGuideEntries}\n\n${insertMarker}`);
  console.log('✅ Added 3 safety guides to llms.txt');
} else {
  console.log('ℹ️ Safety guides already in llms.txt');
}

// Update tools count and add tool #74
llms = llms.replace(
  /All \*\*73 Google-indexed everyday consumer diagnostic tools\*\*/g,
  'All **74 Google-indexed everyday consumer diagnostic tools**'
);

const siliconeToolEntry = `- [Silicone Spatula & Utensil High-Heat Oligomer Leaching Modeler](https://isitkitchensafe.com/tools/silicone-spatula-oligomer-leaching-modeler/): Simulate thermal depolymerization of silicone spatulas in 200°C+ cooking oils, model lipophilic extraction of cyclic siloxanes (D4–D6), evaluate pinch-test mineral fillers, and detect dishwasher detergent absorption.`;

if (!llms.includes('silicone-spatula-oligomer-leaching-modeler')) {
  const toolTarget = '## Consumer Interactive Kitchen Safety Tools\n\nAll **74 Google-indexed everyday consumer diagnostic tools**';
  llms = llms.replace(toolTarget, `${toolTarget}\n\n${siliconeToolEntry}`);
  console.log('✅ Added silicone spatula tool to llms.txt');
} else {
  console.log('ℹ️ Silicone spatula tool already in llms.txt');
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

const siliconeRssEntry = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/silicone-spatula-oligomer-leaching-modeler/',
    title: 'Silicone Spatula & Utensil High-Heat Oligomer Leaching Modeler',
    description:
      'Simulate thermal depolymerization of silicone spatulas in 200°C+ cooking oils, model lipophilic extraction of cyclic siloxanes (D4–D6), evaluate pinch-test mineral fillers, and detect dishwasher detergent absorption.',
    date: '2026-11-22'
  },`;

if (!rss.includes('/tools/silicone-spatula-oligomer-leaching-modeler/')) {
  rss = rss.replace(targetRss, siliconeRssEntry);
  fs.writeFileSync(rssPath, rss, 'utf8');
  console.log('✅ Added silicone-spatula-oligomer-leaching-modeler to rss.xml.ts');
} else {
  console.log('ℹ️ Tool already in rss.xml.ts');
}

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

readme = readme.replace(
  /\*\*11,812\+ static pages\*\*/g,
  '**11,827+ static pages**'
);
readme = readme.replace(
  /\*\*73 Google-indexed Everyday Consumer Kitchen Safety Tools\*\*/g,
  '**74 Google-indexed Everyday Consumer Kitchen Safety Tools**'
);
readme = readme.replace(
  /\*\*89 evergreen guides × 5 languages = 445 localized articles\*\*/g,
  '**92 evergreen guides × 5 languages = 460 localized articles**'
);

fs.writeFileSync(readmePath, readme, 'utf8');
console.log('✅ Updated README.md metrics');
