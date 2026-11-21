const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS.XML.TS FOR WAVE 52 ===');

// 1. Update src/pages/rss.xml.ts
const rssPath = path.resolve('src/pages/rss.xml.ts');
let rssContent = fs.readFileSync(rssPath, 'utf8');

const toolItem = `  {
    path: '/tools/melamine-tableware-formaldehyde-modeler/',
    title: 'Melamine Tableware Formaldehyde & Cyanuric Acid Leaching Modeler',
    description:
      'Model formaldehyde and melamine resin thermal breakdown kinetics, dielectric microwave superheating, acid hydrolysis, and cyanurate nephrolithiasis risk.',
    date: '2026-11-21',
  },`;

const rssTarget = `}> = [
  {
    path: '/tools/oven-self-cleaning-pyrolysis-simulator/',`;

if (!rssContent.includes('/tools/melamine-tableware-formaldehyde-modeler/')) {
  if (rssContent.includes(rssTarget)) {
    rssContent = rssContent.replace(
      rssTarget,
      `}> = [\n${toolItem}\n  {
    path: '/tools/oven-self-cleaning-pyrolysis-simulator/',`
    );
    fs.writeFileSync(rssPath, rssContent, 'utf8');
    console.log('✅ Added Melamine Tableware Modeler to src/pages/rss.xml.ts');
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
llmsContent = llmsContent.replace('11,627+ static pages', '11,667+ static pages');
llmsContent = llmsContent.replace('11,652+ static pages', '11,667+ static pages');
llmsContent = llmsContent.replace('69 Google-indexed everyday consumer tools', '70 Google-indexed everyday consumer tools');
llmsContent = llmsContent.replace('All **69 Google-indexed everyday consumer diagnostic tools**', 'All **70 Google-indexed everyday consumer diagnostic tools**');
llmsContent = llmsContent.replace('77 evergreen guides per language', '80 evergreen guides per language');
llmsContent = llmsContent.replace('385 localized articles', '400 localized articles');

// Add new guides
const guideTarget = `- [Copper Cookware Toxicity, Acidic Food Leaching & Verdigris Formation: Acute Copper Toxicity, Lining Integrity (Tin vs Stainless) & FDA Rules](https://isitkitchensafe.com/blog/copper-cookware-verdigris-toxicity-acidic-food-leaching-safety/): Copper ion dissolution into tomato sauces, verdigris (copper carbonate/acetate) toxicity, tinning wear thresholds, and FDA food-contact mandates.`;

const newGuidesText = `- [Copper Cookware Toxicity, Acidic Food Leaching & Verdigris Formation: Acute Copper Toxicity, Lining Integrity (Tin vs Stainless) & FDA Rules](https://isitkitchensafe.com/blog/copper-cookware-verdigris-toxicity-acidic-food-leaching-safety/): Copper ion dissolution into tomato sauces, verdigris (copper carbonate/acetate) toxicity, tinning wear thresholds, and FDA food-contact mandates.
- [Silicone Bakeware, Siloxane Oligomer Migration & High-Heat Baking: D4/D5 Cyclosiloxanes, Volatile Degradation & BfR/EFSA Thermal Safety Limits](https://isitkitchensafe.com/blog/silicone-bakeware-cyclics-oligomer-migration-heat-safety/): Thermal physics of cyclic siloxane oligomer volatilization (D4/D5), lipid extraction kinetics, and the critical oven tempering protocol.
- [Stainless Steel Cookware, Nickel & Chromium Leaching in Acidic Cooking: 304 vs 316 Grade Metallurgy, Dietary Nickel Dermatitis & Safe Simmering Limits](https://isitkitchensafe.com/blog/stainless-steel-cookware-nickel-chromium-acid-leaching-safety/): Electrochemistry of passive chromium oxide stripping, 304 vs 316 vs 430 metallurgy, and safe cooking guidelines for nickel-sensitive individuals.
- [Wooden vs Plastic Cutting Boards, Microbial Biofilms & Knife Scar Disinfection: Wood Porosity, Capillary Action, Antibacterial Lignin & Dishwasher Hazards](https://isitkitchensafe.com/blog/wooden-cutting-board-biofilm-bacteria-microplastics-safety/): Microbiology of capillary bacterial entrapment, plastic knife-groove biofilm harboring, microplastic shedding, and safe wood sanitization.`;

if (!llmsContent.includes('silicone-bakeware-cyclics-oligomer-migration-heat-safety')) {
  llmsContent = llmsContent.replace(guideTarget, newGuidesText);
  console.log('✅ Added 3 new safety guides to public/llms.txt');
}

// Add new tool
const toolTarget = `- [Oven Self-Cleaning Pyrolysis Fume & Off-Gassing Simulator](https://isitkitchensafe.com/tools/oven-self-cleaning-pyrolysis-simulator/): Model 500°C pyrolytic thermal decomposition, PTFE gasket fluoropolymer degradation, toxic carbon monoxide spikes, and avian respiratory lethality risks. Verified via veterinary toxicology and appliance standards. (part of our **210 flagship interactive tools** catalog — **1,050 localized tool pages** across 5 languages) are accessible via the [Interactive Tools Hub](https://isitkitchensafe.com/tools/):`;

const newToolText = `- [Melamine Tableware Formaldehyde & Cyanuric Acid Leaching Modeler](https://isitkitchensafe.com/tools/melamine-tableware-formaldehyde-modeler/): Model formaldehyde and melamine resin thermal breakdown kinetics, dielectric microwave superheating, acid hydrolysis, and cyanurate nephrolithiasis risk. Verified via BfR and EFSA standards. (part of our **210 flagship interactive tools** catalog — **1,050 localized tool pages** across 5 languages) are accessible via the [Interactive Tools Hub](https://isitkitchensafe.com/tools/):
- [Oven Self-Cleaning Pyrolysis Fume & Off-Gassing Simulator](https://isitkitchensafe.com/tools/oven-self-cleaning-pyrolysis-simulator/): Model 500°C pyrolytic thermal decomposition, PTFE gasket fluoropolymer degradation, toxic carbon monoxide spikes, and avian respiratory lethality risks. Verified via veterinary toxicology and appliance standards.`;

if (!llmsContent.includes('melamine-tableware-formaldehyde-modeler')) {
  llmsContent = llmsContent.replace(toolTarget, newToolText);
  console.log('✅ Added Melamine Tableware Modeler to public/llms.txt');
}

fs.writeFileSync(llmsPath, llmsContent, 'utf8');
console.log('✅ Saved public/llms.txt');

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

readmeContent = readmeContent.replace(/11,627\+ static pages/g, '11,667+ static pages');
readmeContent = readmeContent.replace(/69 Google-indexed Everyday Consumer Kitchen Safety Tools/g, '70 Google-indexed Everyday Consumer Kitchen Safety Tools');
readmeContent = readmeContent.replace(/77 evergreen guides × 5 languages = 385 localized articles/g, '80 evergreen guides × 5 languages = 400 localized articles');

fs.writeFileSync(readmePath, readmeContent, 'utf8');
console.log('✅ Saved README.md');
