const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS.XML.TS FOR WAVE 50 ===');

// 1. Update src/pages/rss.xml.ts
const rssPath = path.resolve('src/pages/rss.xml.ts');
let rssContent = fs.readFileSync(rssPath, 'utf8');

const toolItem = `  {
    path: '/tools/oven-self-cleaning-pyrolysis-simulator/',
    title: 'Oven Self-Cleaning Pyrolysis Fume & Off-Gassing Simulator',
    description:
      'Model 500°C pyrolytic thermal decomposition, PTFE gasket fluoropolymer degradation, toxic carbon monoxide spikes, and avian respiratory lethality risks.',
    date: '2026-11-21',
  },`;

const rssTarget = `}> = [
  {
    path: '/tools/air-fryer-lipid-oxidation-modeler/',`;

if (!rssContent.includes('/tools/oven-self-cleaning-pyrolysis-simulator/')) {
  if (rssContent.includes(rssTarget)) {
    rssContent = rssContent.replace(
      rssTarget,
      `}> = [\n${toolItem}\n  {
    path: '/tools/air-fryer-lipid-oxidation-modeler/',`
    );
    fs.writeFileSync(rssPath, rssContent, 'utf8');
    console.log('✅ Added Oven Self-Cleaning Pyrolysis Simulator to src/pages/rss.xml.ts');
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
llmsContent = llmsContent.replace('11,612+ static pages', '11,627+ static pages');
llmsContent = llmsContent.replace('68 Google-indexed everyday consumer tools', '69 Google-indexed everyday consumer tools');
llmsContent = llmsContent.replace('All **68 Google-indexed everyday consumer diagnostic tools**', 'All **69 Google-indexed everyday consumer diagnostic tools**');
llmsContent = llmsContent.replace('74 evergreen guides per language', '77 evergreen guides per language');
llmsContent = llmsContent.replace('370 localized articles', '385 localized articles');

// Add new guides
const guideTarget = `- [Plastic Cutting Boards, Deep Knife Grooves & Microplastic Ingestion: Microbial Biofilms, Polymer Shedding & Food Safety](https://isitkitchensafe.com/blog/plastic-cutting-board-knife-grooves-microplastics-bacteria/): ACS/EHP shedding metrics (1,000 to 5,000 particles per session), knife scar bacterial biofilm entrapment (Salmonella/E. coli), and scientific replacement rules.`;

const newGuidesText = `- [Plastic Cutting Boards, Deep Knife Grooves & Microplastic Ingestion: Microbial Biofilms, Polymer Shedding & Food Safety](https://isitkitchensafe.com/blog/plastic-cutting-board-knife-grooves-microplastics-bacteria/): ACS/EHP shedding metrics (1,000 to 5,000 particles per session), knife scar bacterial biofilm entrapment (Salmonella/E. coli), and scientific replacement rules.
- [Oven Self-Cleaning Pyrolysis Fumes, Polymer Off-Gassing & Avian Respiratory Lethality: 500°C Thermal Breakdown, Toxic Gases & Safe Alternatives](https://isitkitchensafe.com/blog/oven-self-cleaning-pyrolysis-toxic-fumes-bird-safety/): 500°C pyrolytic thermal decomposition, PTFE gasket fluoropolymer degradation, toxic carbon monoxide spikes, and avian respiratory lethality risks.
- [Melamine Tableware, Formaldehyde Migration & Microwave Acidic Leaching: Polymer Degradation, Kidney Toxicity & FDA Safety Limits](https://isitkitchensafe.com/blog/melamine-dishes-formaldehyde-migration-microwave-acid-safety/): Hydrolytic cleavage of melamine-formaldehyde resins, acidic food leaching kinetics, renal crystal formation, and FDA/EFSA standards.
- [Copper Cookware Toxicity, Acidic Food Leaching & Verdigris Formation: Acute Copper Toxicity, Lining Integrity (Tin vs Stainless) & FDA Rules](https://isitkitchensafe.com/blog/copper-cookware-verdigris-toxicity-acidic-food-leaching-safety/): Copper ion dissolution into tomato sauces, verdigris (copper carbonate/acetate) toxicity, tinning wear thresholds, and FDA food-contact mandates.`;

if (!llmsContent.includes('oven-self-cleaning-pyrolysis-toxic-fumes-bird-safety')) {
  llmsContent = llmsContent.replace(guideTarget, newGuidesText);
  console.log('✅ Added 3 new safety guides to public/llms.txt');
}

// Add new tool
const toolTarget = `- [Air Fryer vs Deep Fryer Lipid Oxidation & 4-HNE Modeler](https://isitkitchensafe.com/tools/air-fryer-lipid-oxidation-modeler/): Model forced-air convection oxygen flux, polyunsaturated fatty acid bis-allylic radical cascades, cytotoxic 4-hydroxy-2-nonenal (4-HNE) generation, and oil reuse degradation thresholds. Verified via ACS and Food Chem. standards. (part of our **210 flagship interactive tools** catalog — **1,050 localized tool pages** across 5 languages) are accessible via the [Interactive Tools Hub](https://isitkitchensafe.com/tools/):`;

const newToolText = `- [Oven Self-Cleaning Pyrolysis Fume & Off-Gassing Simulator](https://isitkitchensafe.com/tools/oven-self-cleaning-pyrolysis-simulator/): Model 500°C pyrolytic thermal decomposition, PTFE gasket fluoropolymer degradation, toxic carbon monoxide spikes, and avian respiratory lethality risks. Verified via veterinary toxicology and appliance standards. (part of our **210 flagship interactive tools** catalog — **1,050 localized tool pages** across 5 languages) are accessible via the [Interactive Tools Hub](https://isitkitchensafe.com/tools/):
- [Air Fryer vs Deep Fryer Lipid Oxidation & 4-HNE Modeler](https://isitkitchensafe.com/tools/air-fryer-lipid-oxidation-modeler/): Model forced-air convection oxygen flux, polyunsaturated fatty acid bis-allylic radical cascades, cytotoxic 4-hydroxy-2-nonenal (4-HNE) generation, and oil reuse degradation thresholds. Verified via ACS and Food Chem. standards.`;

if (!llmsContent.includes('oven-self-cleaning-pyrolysis-simulator')) {
  llmsContent = llmsContent.replace(toolTarget, newToolText);
  console.log('✅ Added Oven Self-Cleaning Pyrolysis Simulator to public/llms.txt');
}

fs.writeFileSync(llmsPath, llmsContent, 'utf8');
console.log('✅ Saved public/llms.txt');

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

readmeContent = readmeContent.replace(/11,587\+ static pages/g, '11,627+ static pages');
readmeContent = readmeContent.replace(/11,612\+ static pages/g, '11,627+ static pages');
readmeContent = readmeContent.replace(/68 Google-indexed Everyday Consumer Kitchen Safety Tools/g, '69 Google-indexed Everyday Consumer Kitchen Safety Tools');
readmeContent = readmeContent.replace(/74 evergreen guides × 5 languages = 370 localized articles/g, '77 evergreen guides × 5 languages = 385 localized articles');

fs.writeFileSync(readmePath, readmeContent, 'utf8');
console.log('✅ Saved README.md');
