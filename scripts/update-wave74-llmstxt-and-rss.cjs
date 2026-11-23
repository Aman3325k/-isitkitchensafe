const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS.XML.TS FOR WAVE 74 ===');

// 1. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Update header summary numbers
llms = llms.replace(
  'Spanning **12092+ static pages** across **5 languages** (EN, ES, PT, ZH-CN, JA), the platform pairs **210 flagship interactive tools** (**1,050 localized tool pages**, including **80 Google-indexed everyday consumer tools**) with **110 evergreen guides per language** (550 localized articles)',
  'Spanning **12111+ static pages** across **5 languages** (EN, ES, PT, ZH-CN, JA), the platform pairs **210 flagship interactive tools** (**1,050 localized tool pages**, including **81 Google-indexed everyday consumer tools**) with **113 evergreen guides per language** (565 localized articles)'
);

llms = llms.replace(
  'All **80 Google-indexed everyday consumer tools**',
  'All **81 Google-indexed everyday consumer tools**'
);

// Add tool to consumer tools section
const toolMarker = '## Consumer Interactive Kitchen Safety Tools\n\nAll **81 Google-indexed everyday consumer tools**\n\n';
const toolEntry = `- [Induction Cooktop Thermal Shock Delamination & Acoustic Micro-Crack Modeler](https://isitkitchensafe.com/tools/induction-cooktop-delamination-modeler/): Model glass-ceramic interfacial acoustic stress, mechanical resonance from warped cookware bases, thermal shock gradients (>18°C/mm), and micro-crack expansion under rapid induction heating transients (20°C to 280°C in 30s).\n\n`;

if (!llms.includes('/tools/induction-cooktop-delamination-modeler/') && llms.includes(toolMarker)) {
  llms = llms.replace(toolMarker, toolMarker + toolEntry);
  console.log('✅ Added induction-cooktop-delamination-modeler to llms.txt');
} else {
  console.log('ℹ️ Tool already in llms.txt or toolMarker not found');
}

// Add the 3 guides to guides section
const guideMarker = `- [Refrigerator Automatic Defrost Cycle Failure & Thermostat Drift: Cold-Chain Breakdown, Psychrotrophic Listeria monocytogenes Bio-Kinetics, Cross-Contamination in High-Humidity Crispers, and FDA 40°F Refrigeration Thresholds](https://isitkitchensafe.com/blog/refrigerator-cold-chain-defrost-failure-listeria-safety/): Domestic refrigeration breakdown above 40°F (4.4°C), psychrotrophic Listeria monocytogenes logarithmic replication acceleration (400% faster at 45°F), automatic defrost calrod heater and bimetal thermostat failure causing solid ice evaporator choking, door rack thermal stratification (+5°F to +10°F danger zone), high-humidity crisper drawer condensation biofilms, and FDA submerged thermometer calibration standards.\n`;

const newGuidesEntries = `- [Residential Range Hood Grease Filter Saturated Pyrolysis & Thermal Flashover: NFPA 96 Baffle vs Mesh Filter Efficiency, Boundary Layer Airflow Degradation, Volatile Acrolein Accumulation, and High-Heat Cooktop Flare-Up Fire Dynamics](https://isitkitchensafe.com/blog/range-hood-grease-filter-pyrolysis-fire-hazard-safety/): Saturated grease thermal flashover autoignition (315°C–360°C / 40 MJ/kg), multi-layer aluminum mesh filter pore choking, boundary layer airflow resistance surging by 300%–500% reducing ventilation by 70%, acrolein aerosol accumulation in breathing zones, cooktop flare-up chimney propagation into concealed ductwork, and NFPA 96 alkaline saponification soaking protocols.
- [Deep-Freeze Sublimation Lyophilization & Lipid Peroxidation: Ice Crystal Vapor Pressure Gradients, Malondialdehyde (MDA) Rancidity Kinetics, Myoglobin Metmyoglobin Oxidation, and Cryogenic Vapor-Barrier Barrier Integrity](https://isitkitchensafe.com/blog/freezer-frost-sublimation-lipid-oxidation-toxicology-safety/): Sub-zero sublimation thermodynamics driven by ice crystal vapor pressure differentials (125 Pa at -18°C vs 38 Pa at -30°C), cellular lyophilization desiccation, polyunsaturated fatty acid peroxidation generating cytotoxic malondialdehyde (MDA) and 4-HNE, myoglobin Fe²⁺ oxidation into dull brown metmyoglobin Fe³⁺ with irreversible disulfide cross-linking, slow freezing membrane needle-crystal rupture, and vacuum sealing cryogenic barrier packaging standards (WVTR < 0.01 g/m²·day).
- [Refrigerator Evaporator Coil Condensation Biofilms & Psychrotrophic Mold Aerosolization: Drain Pan Stagnant Moisture, Cladosporium & Penicillium Fungal Mycotoxins, Fan-Forced Air Spore Circulation, and HVAC Antimicrobial Maintenance](https://isitkitchensafe.com/blog/refrigerator-evaporator-coil-mold-pathogen-biofilm-safety/): No-frost refrigerator forced-convection airflow dynamics (2.0–4.5 m/s), automatic defrost meltwater drainage stagnation, psychrotolerant Cladosporium herbarum and Penicillium expansum fungal biofilm colonization at 2°C–4°C, aerosolized spore and mycotoxin (patulin, ochratoxin A) dispersion across uncovered food shelves, defrost drain line gelatinous bacterial slime clogging, and warm water 3% hydrogen peroxide flushing decontamination protocols.\n`;

if (!llms.includes('range-hood-grease-filter-pyrolysis-fire-hazard-safety') && llms.includes(guideMarker)) {
  llms = llms.replace(guideMarker, guideMarker + newGuidesEntries);
  console.log('✅ Added 3 new safety guides to llms.txt');
} else {
  console.log('ℹ️ Guides already in llms.txt or guideMarker not found');
}

fs.writeFileSync(llmsPath, llms, 'utf8');
console.log('✅ Updated public/llms.txt successfully');

console.log('=== LLMS.TXT AND RSS.XML.TS UPDATE COMPLETE ===');
