const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS.XML.TS FOR WAVE 54 ===');

// 1. Update src/pages/rss.xml.ts
const rssPath = path.resolve('src/pages/rss.xml.ts');
let rssContent = fs.readFileSync(rssPath, 'utf8');

const toolItem = `  {
    path: '/tools/cast-iron-seasoning-degradation-modeler/',
    title: 'Cast Iron & Carbon Steel Seasoning Degradation Modeler',
    description:
      'Model lipid polymer crosslinking degradation, acid-catalyzed ester hydrolysis, ferrous vs ferric ion leaching kinetics, and dietary iron intake during acidic cooking.',
    date: '2026-11-21',
  },`;

const rssTarget = `}> = [
  {
    path: '/tools/melamine-tableware-formaldehyde-modeler/',`;

if (!rssContent.includes('/tools/cast-iron-seasoning-degradation-modeler/')) {
  if (rssContent.includes(rssTarget)) {
    rssContent = rssContent.replace(
      rssTarget,
      `}> = [\n${toolItem}\n  {
    path: '/tools/melamine-tableware-formaldehyde-modeler/',`
    );
    fs.writeFileSync(rssPath, rssContent, 'utf8');
    console.log('✅ Added Cast Iron Seasoning Modeler to src/pages/rss.xml.ts');
  } else {
    console.log('⚠️ rssTarget not found in rss.xml.ts');
  }
} else {
  console.log('ℹ️ Already in rss.xml.ts');
}

// 2. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llmsContent = fs.readFileSync(llmsPath, 'utf8');

// Replace counts
llmsContent = llmsContent.replace('11,692+ static pages', '11,707+ static pages');
llmsContent = llmsContent.replace('70 Google-indexed everyday consumer tools', '71 Google-indexed everyday consumer tools');
llmsContent = llmsContent.replace('All **70 Google-indexed everyday consumer diagnostic tools**', 'All **71 Google-indexed everyday consumer diagnostic tools**');
llmsContent = llmsContent.replace('80 evergreen guides per language', '83 evergreen guides per language');
llmsContent = llmsContent.replace('400 localized articles', '415 localized articles');

// Add new guides
const guideTarget = `- [Wooden vs Plastic Cutting Boards, Microbial Biofilms & Knife Scar Disinfection: Wood Porosity, Capillary Action, Antibacterial Lignin & Dishwasher Hazards](https://isitkitchensafe.com/blog/wooden-cutting-board-biofilm-bacteria-microplastics-safety/): Microbiology of capillary bacterial entrapment, plastic knife-groove biofilm harboring, microplastic shedding, and safe wood sanitization.`;

const newGuidesText = `- [Wooden vs Plastic Cutting Boards, Microbial Biofilms & Knife Scar Disinfection: Wood Porosity, Capillary Action, Antibacterial Lignin & Dishwasher Hazards](https://isitkitchensafe.com/blog/wooden-cutting-board-biofilm-bacteria-microplastics-safety/): Microbiology of capillary bacterial entrapment, plastic knife-groove biofilm harboring, microplastic shedding, and safe wood sanitization.
- [Carbon Steel Pan Seasoning Chemistry, Blueing Oxidation & Acid Etching: Magnetite (Fe3O4) Passivation, Linoleic Crosslinking & Heavy Metal Leaching Thresholds](https://isitkitchensafe.com/blog/carbon-steel-pan-seasoning-blueing-acid-stripping-safety/): Magnetite (Fe3O4) blueing at 280°C–310°C, acid-catalyzed ester hydrolysis, ferrous vs ferric ion dissolution kinetics, and dietary iron safety thresholds (UL 45 mg/day).
- [Aluminum Cookware Leaching in Acidic Cooking: EFSA Tolerable Weekly Intake (TWI), Anodized vs Bare Aluminum, Citric/Acetic Acid Extraction Kinetics & Health Safety](https://isitkitchensafe.com/blog/aluminum-cookware-acidic-food-neurotoxicity-leaching-safety/): Anodic aluminum oxide (Al2O3) passivity, EFSA Tolerable Weekly Intake (1 mg/kg bw/week), citric/acetic acid chelation kinetics, and neurotoxicity medical consensus.
- [Enameled Cast Iron Cookware Safety: Lead & Cadmium in Vintage Glazes, Crazing Thermal Shock & Chipped Vitreous Glass Ingestion Risks](https://isitkitchensafe.com/blog/enamel-cast-iron-lead-cadmium-glaze-thermal-shock-safety/): Borosilicate vitreous enamel chemistry at 800°C, lead and cadmium glaze leaching in pre-1980s cookware, thermal shock crazing (CTE mismatch), and chipped glass ingestion hazards.`;

if (!llmsContent.includes('carbon-steel-pan-seasoning-blueing-acid-stripping-safety')) {
  llmsContent = llmsContent.replace(guideTarget, newGuidesText);
  console.log('✅ Added 3 new safety guides to public/llms.txt');
}

// Add new tool
const toolTarget = `- [Melamine Tableware Formaldehyde & Cyanuric Acid Leaching Modeler](https://isitkitchensafe.com/tools/melamine-tableware-formaldehyde-modeler/): Model formaldehyde and melamine resin thermal breakdown kinetics, dielectric microwave superheating, acid hydrolysis, and cyanurate nephrolithiasis risk. Verified via BfR and EFSA standards. (part of our **210 flagship interactive tools** catalog — **1,050 localized tool pages** across 5 languages) are accessible via the [Interactive Tools Hub](https://isitkitchensafe.com/tools/):
- [Oven Self-Cleaning Pyrolysis Fume & Off-Gassing Simulator](https://isitkitchensafe.com/tools/oven-self-cleaning-pyrolysis-simulator/): Model 500°C pyrolytic thermal decomposition, PTFE gasket fluoropolymer degradation, toxic carbon monoxide spikes, and avian respiratory lethality risks. Verified via veterinary toxicology and appliance standards.`;

const newToolText = `- [Cast Iron & Carbon Steel Seasoning Degradation Modeler](https://isitkitchensafe.com/tools/cast-iron-seasoning-degradation-modeler/): Model lipid polymer crosslinking degradation, acid-catalyzed ester hydrolysis, ferrous vs ferric ion leaching kinetics, and dietary iron intake during acidic cooking. Verified via EFSA and Institute of Medicine UL standards. (part of our **210 flagship interactive tools** catalog — **1,050 localized tool pages** across 5 languages) are accessible via the [Interactive Tools Hub](https://isitkitchensafe.com/tools/):
- [Melamine Tableware Formaldehyde & Cyanuric Acid Leaching Modeler](https://isitkitchensafe.com/tools/melamine-tableware-formaldehyde-modeler/): Model formaldehyde and melamine resin thermal breakdown kinetics, dielectric microwave superheating, acid hydrolysis, and cyanurate nephrolithiasis risk. Verified via BfR and EFSA standards.
- [Oven Self-Cleaning Pyrolysis Fume & Off-Gassing Simulator](https://isitkitchensafe.com/tools/oven-self-cleaning-pyrolysis-simulator/): Model 500°C pyrolytic thermal decomposition, PTFE gasket fluoropolymer degradation, toxic carbon monoxide spikes, and avian respiratory lethality risks. Verified via veterinary toxicology and appliance standards.`;

if (!llmsContent.includes('cast-iron-seasoning-degradation-modeler')) {
  llmsContent = llmsContent.replace(toolTarget, newToolText);
  console.log('✅ Added Cast Iron Seasoning Modeler to public/llms.txt');
}

fs.writeFileSync(llmsPath, llmsContent, 'utf8');
console.log('✅ Saved public/llms.txt');

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

readmeContent = readmeContent.replace(/11,692\+ static pages/g, '11,707+ static pages');
readmeContent = readmeContent.replace(/70 Google-indexed everyday consumer tools/g, '71 Google-indexed everyday consumer tools');
readmeContent = readmeContent.replace(/70 Google-indexed Everyday Consumer Kitchen Safety Tools/g, '71 Google-indexed Everyday Consumer Kitchen Safety Tools');
readmeContent = readmeContent.replace(/80 evergreen guides per language/g, '83 evergreen guides per language');
readmeContent = readmeContent.replace(/80 evergreen guides × 5 languages = 400 localized articles/g, '83 evergreen guides × 5 languages = 415 localized articles');

fs.writeFileSync(readmePath, readmeContent, 'utf8');
console.log('✅ Saved README.md');
