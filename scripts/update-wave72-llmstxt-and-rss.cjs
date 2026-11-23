const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS SYNDICATION FOR WAVE 72 ===');

// 1. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Update page counts and stats
llms = llms.replace(
  /Spanning \*\*12052\+ static pages\*\* across \*\*5 languages\*\*/g,
  'Spanning **12067+ static pages** across **5 languages**'
);
llms = llms.replace(
  /Spanning \*\*12027\+ static pages\*\* across \*\*5 languages\*\*/g,
  'Spanning **12067+ static pages** across **5 languages**'
);
llms = llms.replace(
  /including \*\*79 Google-indexed everyday consumer tools\*\*\) with \*\*107 evergreen guides per language\*\* \(535 localized articles\)/g,
  'including **80 Google-indexed everyday consumer tools**) with **110 evergreen guides per language** (550 localized articles)'
);
llms = llms.replace(
  /Selected highlights from our \*\*107 evergreen kitchen safety guides\*\*/g,
  'Selected highlights from our **110 evergreen kitchen safety guides**'
);
llms = llms.replace(
  /All \*\*79 Google-indexed everyday consumer diagnostic tools\*\*/g,
  'All **80 Google-indexed everyday consumer diagnostic tools**'
);

// Append new guides
const newGuideEntries = `- [Air Fryer Heating Element Grease Baked-On Pyrolysis: Polycyclic Aromatic Hydrocarbons (PAHs), Benzo[a]pyrene Thermal Aerosolization, Fine Particulate Matter (PM2.5) Inhalation Hazards, and EPA Ventilation Guidelines](https://isitkitchensafe.com/blog/air-fryer-pah-pyrolysis-aerosol-inhalation-safety/): Unshielded heating element operation at 300°C–450°C, turbulent cyclonic lipid splatter deposition (up to 0.4g per cycle), flash pyrolysis and thermal cracking into Benzo[a]pyrene (IARC Group 1 human carcinogen) and acrolein, indoor PM2.5 spikes exceeding 250–500 µg/m³ in unventilated kitchens, ductless recirculating charcoal filter failure (>65% bypass), and lemon-steam cleaning protocols.
- [Induction Cooktop Glass-Ceramic Delamination & Magnetostrictive Thermal Stress: Pan Warping, Localized Acoustic Vibration Fracture, Under-Glass Coil Overheating, and IEC 60335-2-6 Electrical Isolation Standards](https://isitkitchensafe.com/blog/induction-cooktop-delamination-thermal-stress-safety/): High-frequency electromagnetic eddy currents (20–50 kHz), 250°C conductive backward heat transfer through 4mm lithium aluminosilicate glass, magnetostrictive micro-vibration acoustic fatigue propagating surface micro-scratches into spiderweb fractures, warped cookware air gaps inducing 3,700W PowerBoost thermal runaway, multi-ply clad base expansion differential puncturing glass, and IEC 60335-2-6 electrical insulation failure thresholds.
- [Refrigerator Automatic Defrost Cycle Failure & Thermostat Drift: Cold-Chain Breakdown, Psychrotrophic Listeria monocytogenes Bio-Kinetics, Cross-Contamination in High-Humidity Crispers, and FDA 40°F Refrigeration Thresholds](https://isitkitchensafe.com/blog/refrigerator-cold-chain-defrost-failure-listeria-safety/): Domestic refrigeration breakdown above 40°F (4.4°C), psychrotrophic Listeria monocytogenes logarithmic replication acceleration (400% faster at 45°F), automatic defrost calrod heater and bimetal thermostat failure causing solid ice evaporator choking, door rack thermal stratification (+5°F to +10°F danger zone), high-humidity crisper drawer condensation biofilms, and FDA submerged thermometer calibration standards.`;

if (!llms.includes('air-fryer-pah-pyrolysis-aerosol-inhalation-safety')) {
  const insertMarker = '## Consumer Interactive Kitchen Safety Tools';
  llms = llms.replace(insertMarker, `${newGuideEntries}\n\n${insertMarker}`);
  console.log('✅ Added 3 safety guides to llms.txt');
} else {
  console.log('ℹ️ Safety guides already in llms.txt');
}

// Add Tool #80 entry
const tool80Entry = `- [Air Fryer Polycyclic Aromatic Hydrocarbon (PAH) Thermal Resuspension & Inhalation Modeler](https://isitkitchensafe.com/tools/air-fryer-pah-resuspension-modeler/): Model fatty acid pyrolytic aerosolization from previous cooking residue baked onto air fryer heating elements and fan cowls, calculating resuspension rates of Benzo[a]pyrene and particulate PM2.5.`;

if (!llms.includes('air-fryer-pah-resuspension-modeler')) {
  const toolTarget = '## Consumer Interactive Kitchen Safety Tools\n\nAll **80 Google-indexed everyday consumer diagnostic tools**';
  llms = llms.replace(toolTarget, `${toolTarget}\n\n${tool80Entry}`);
  console.log('✅ Added air fryer PAH modeler to llms.txt');
} else {
  console.log('ℹ️ Air fryer PAH modeler already in llms.txt');
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

const tool80RssEntry = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/air-fryer-pah-resuspension-modeler/',
    title: 'Air Fryer Polycyclic Aromatic Hydrocarbon (PAH) Thermal Resuspension & Inhalation Modeler',
    description:
      'Model fatty acid pyrolytic aerosolization from previous cooking residue baked onto air fryer heating elements and fan cowls, calculating resuspension rates of Benzo[a]pyrene and particulate PM2.5.',
    date: '2026-11-23'
  },`;

if (!rss.includes('/tools/air-fryer-pah-resuspension-modeler/')) {
  rss = rss.replace(targetRss, tool80RssEntry);
  fs.writeFileSync(rssPath, rss, 'utf8');
  console.log('✅ Added air-fryer-pah-resuspension-modeler to rss.xml.ts');
} else {
  console.log('ℹ️ Tool already in rss.xml.ts');
}

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

readme = readme.replace(
  /\*\*12052\+ static pages\*\*/g,
  '**12067+ static pages**'
);
readme = readme.replace(
  /\*\*12027\+ static pages\*\*/g,
  '**12067+ static pages**'
);
readme = readme.replace(
  /\*\*79 Google-indexed everyday consumer tools\*\*/g,
  '**80 Google-indexed everyday consumer tools**'
);
readme = readme.replace(
  /\*\*107 evergreen guides per language\*\* \(535 localized articles\)/g,
  '**110 evergreen guides per language** (550 localized articles)'
);

fs.writeFileSync(readmePath, readme, 'utf8');
console.log('✅ Updated README.md');

console.log('=== SYNDICATION AND METADATA UPDATE COMPLETE ===');
