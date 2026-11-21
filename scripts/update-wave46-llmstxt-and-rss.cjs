const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS.XML.TS FOR WAVE 46 ===');

// 1. Update src/pages/rss.xml.ts
const rssPath = path.resolve('src/pages/rss.xml.ts');
let rssContent = fs.readFileSync(rssPath, 'utf8');

const toolItem = `  {
    path: '/tools/charcoal-gas-grill-pah-hca-modeler/',
    title: 'Charcoal vs Gas Grill PAH & HCA Carcinogen Modeler',
    description:
      'Model fat drip pyrolysis on 750°C embers, volatile Benzo[a]pyrene convective smoke condensation, surface creatine-amino Maillard condensation (PhIP/MeIQx), and antioxidant marinade reduction under EU Regulation 835/2011.',
    date: '2026-11-21',
  },`;

const rssTarget = `}> = [
  {
    path: '/tools/canned-food-bpa-leaching-modeler/',`;

if (!rssContent.includes('/tools/charcoal-gas-grill-pah-hca-modeler/')) {
  rssContent = rssContent.replace(
    rssTarget,
    `}> = [\n${toolItem}\n  {
    path: '/tools/canned-food-bpa-leaching-modeler/',`
  );
  fs.writeFileSync(rssPath, rssContent, 'utf8');
  console.log('✅ Added Charcoal Grill Modeler to src/pages/rss.xml.ts');
} else {
  console.log('⚠️ Already in rss.xml.ts');
}

// 2. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llmsContent = fs.readFileSync(llmsPath, 'utf8');

// Replace counts
llmsContent = llmsContent.replace('66 Google-indexed everyday consumer tools', '67 Google-indexed everyday consumer tools');
llmsContent = llmsContent.replace('All **66 Google-indexed everyday consumer diagnostic tools**', 'All **67 Google-indexed everyday consumer diagnostic tools**');
llmsContent = llmsContent.replace('68 evergreen guides per language', '71 evergreen guides per language');
llmsContent = llmsContent.replace('340 localized articles', '355 localized articles');

// Add new guides
const guideTarget = `- [Charcoal & Gas Grilling Safety: Polycyclic Aromatic Hydrocarbons (PAH), Heterocyclic Amines (HCA) & Cancer Risk Mitigation](https://isitkitchensafe.com/blog/charcoal-gas-grill-pah-hca-carcinogen-reduction-guide/): High-temperature amino acid/creatine pyrolysis (HCA), fat drip flare-up smoke (PAH), two-zone indirect grilling, and beer/herb polyphenol marinades blocking 90% of carcinogens.`;

const newGuidesText = `- [Charcoal & Gas Grilling Safety: Polycyclic Aromatic Hydrocarbons (PAH), Heterocyclic Amines (HCA) & Cancer Risk Mitigation](https://isitkitchensafe.com/blog/charcoal-gas-grill-pah-hca-carcinogen-reduction-guide/): High-temperature amino acid/creatine pyrolysis (HCA), fat drip flare-up smoke (PAH), two-zone indirect grilling, and beer/herb polyphenol marinades blocking 90% of carcinogens.
- [Melamine Plates & Dinnerware in the Microwave: Thermal Depolymerization, Formaldehyde Gas Release & Monomer Leaching](https://isitkitchensafe.com/blog/melamine-plate-microwave-formaldehyde-leaching-risks/): Melamine-formaldehyde thermoset resin depolymerization, microwave dielectric heating hazards, free formaldehyde and cyanuric acid monomer leaching, and FDA/EU safety limits.
- [Reheating Oily Foods in the Air Fryer: High-Velocity Convection Lipid Peroxidation & Cytotoxic Aldehydes (MDA & 4-HNE)](https://isitkitchensafe.com/blog/air-fryer-reheating-oil-lipid-oxidation-toxic-aldehydes/): Forced-convection lipid peroxidation of polyunsaturated fatty acids, secondary cytotoxic aldehyde formation (MDA, 4-HNE), volatile acrolein aerosolization, and safe temperature limits.
- [Cooking Kidney Beans in a Slow Cooker: Phytohaemagglutinin (PHA) Lectin Toxicity & 100°C Boil Inactivation Protocol](https://isitkitchensafe.com/blog/slow-cooker-kidney-bean-phytohaemagglutinin-lectin-safety/): Phytohaemagglutinin (PHA) lectin biochemistry, paradoxical 5-fold toxicity amplification at 80°C in slow cookers, acute small intestinal microvilli shedding, and the mandatory 100°C rolling boil protocol.`;

if (!llmsContent.includes('melamine-plate-microwave-formaldehyde-leaching-risks')) {
  llmsContent = llmsContent.replace(guideTarget, newGuidesText);
  console.log('✅ Added 3 new safety guides to public/llms.txt');
}

// Add new tool
const toolTarget = `- [Canned Food BPA & Epoxy Phenolic Liner Leaching Modeler](https://isitkitchensafe.com/tools/canned-food-bpa-leaching-modeler/): Model BADGE epoxy resin degradation, acid-hydrolysis kinetics in canned tomatoes, lipophilic extraction in oily fish, can dent micro-fracturing, and EFSA 2023 Tolerable Daily Intake thresholds. (part of our **210 flagship interactive tools** catalog — **1,050 localized tool pages** across 5 languages) are accessible via the [Interactive Tools Hub](https://isitkitchensafe.com/tools/):`;

const newToolText = `- [Charcoal vs Gas Grill PAH & HCA Carcinogen Modeler](https://isitkitchensafe.com/tools/charcoal-gas-grill-pah-hca-modeler/): Model fat drip pyrolysis on 750°C embers, volatile Benzo[a]pyrene convective smoke condensation, surface creatine-amino Maillard condensation (PhIP/MeIQx), and antioxidant marinade reduction under EU Regulation 835/2011. Verified via EFSA CONTAM Panel Opinion and J. Agric. Food Chem. standards. (part of our **210 flagship interactive tools** catalog — **1,050 localized tool pages** across 5 languages) are accessible via the [Interactive Tools Hub](https://isitkitchensafe.com/tools/):
- [Canned Food BPA & Epoxy Phenolic Liner Leaching Modeler](https://isitkitchensafe.com/tools/canned-food-bpa-leaching-modeler/): Model BADGE epoxy resin degradation, acid-hydrolysis kinetics in canned tomatoes, lipophilic extraction in oily fish, can dent micro-fracturing, and EFSA 2023 Tolerable Daily Intake thresholds.`;

if (!llmsContent.includes('charcoal-gas-grill-pah-hca-modeler')) {
  llmsContent = llmsContent.replace(toolTarget, newToolText);
  console.log('✅ Added Charcoal Grill Modeler to public/llms.txt');
}

fs.writeFileSync(llmsPath, llmsContent, 'utf8');
console.log('✅ Saved public/llms.txt');
