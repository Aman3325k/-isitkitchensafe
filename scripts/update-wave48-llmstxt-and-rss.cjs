const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS.XML.TS FOR WAVE 48 ===');

// 1. Update src/pages/rss.xml.ts
const rssPath = path.resolve('src/pages/rss.xml.ts');
let rssContent = fs.readFileSync(rssPath, 'utf8');

const toolItem = `  {
    path: '/tools/air-fryer-lipid-oxidation-modeler/',
    title: 'Air Fryer vs Deep Fryer Lipid Oxidation & 4-HNE Modeler',
    description:
      'Model forced-air convection oxygen flux, polyunsaturated fatty acid bis-allylic radical cascades, cytotoxic 4-hydroxy-2-nonenal (4-HNE) generation, and oil reuse degradation thresholds.',
    date: '2026-11-21',
  },`;

const rssTarget = `}> = [
  {
    path: '/tools/charcoal-gas-grill-pah-hca-modeler/',`;

if (!rssContent.includes('/tools/air-fryer-lipid-oxidation-modeler/')) {
  if (rssContent.includes(rssTarget)) {
    rssContent = rssContent.replace(
      rssTarget,
      `}> = [\n${toolItem}\n  {
    path: '/tools/charcoal-gas-grill-pah-hca-modeler/',`
    );
    fs.writeFileSync(rssPath, rssContent, 'utf8');
    console.log('✅ Added Air Fryer Lipid Oxidation Modeler to src/pages/rss.xml.ts');
  } else {
    console.log('⚠️ rssTarget not found in rss.xml.ts');
  }
} else {
  console.log('⚠️ Already in rss.xml.ts');
}

// 2. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llmsContent = fs.readFileSync(llmsPath, 'utf8');

// Replace counts
llmsContent = llmsContent.replace('67 Google-indexed everyday consumer tools', '68 Google-indexed everyday consumer tools');
llmsContent = llmsContent.replace('All **67 Google-indexed everyday consumer diagnostic tools**', 'All **68 Google-indexed everyday consumer diagnostic tools**');
llmsContent = llmsContent.replace('71 evergreen guides per language', '74 evergreen guides per language');
llmsContent = llmsContent.replace('355 localized articles', '370 localized articles');
llmsContent = llmsContent.replace('11,492+ static pages', '11,587+ static pages');
llmsContent = llmsContent.replace('11,572 total indexed pages', '11,587 total indexed pages');
llmsContent = llmsContent.replace('68 evergreen kitchen safety guides', '74 evergreen kitchen safety guides');

// Add new guides
const guideTarget = `- [Cooking Kidney Beans in a Slow Cooker: Phytohaemagglutinin (PHA) Lectin Toxicity & 100°C Boil Inactivation Protocol](https://isitkitchensafe.com/blog/slow-cooker-kidney-bean-phytohaemagglutinin-lectin-safety/): Phytohaemagglutinin (PHA) lectin biochemistry, paradoxical 5-fold toxicity amplification at 80°C in slow cookers, acute small intestinal microvilli shedding, and the mandatory 100°C rolling boil protocol.`;

const newGuidesText = `- [Cooking Kidney Beans in a Slow Cooker: Phytohaemagglutinin (PHA) Lectin Toxicity & 100°C Boil Inactivation Protocol](https://isitkitchensafe.com/blog/slow-cooker-kidney-bean-phytohaemagglutinin-lectin-safety/): Phytohaemagglutinin (PHA) lectin biochemistry, paradoxical 5-fold toxicity amplification at 80°C in slow cookers, acute small intestinal microvilli shedding, and the mandatory 100°C rolling boil protocol.
- [Cooking Acidic Foods & Tomato Sauce in Cast Iron: Iron Leaching Kinetics, Seasoning Degradation & Dietary Thresholds](https://isitkitchensafe.com/blog/cast-iron-acidic-tomato-sauce-iron-leaching-guide/): Acid-catalyzed iron dissolution kinetics, polyunsaturated polymer stripping, dietary iron bioaccumulation vs RDA limits, and the 30-minute safety threshold.
- [Dishwasher Rinse Aid & Detergent Residue on Dishes: Alcohol Ethoxylate Gut Barrier Disruption & Safe Wash Science](https://isitkitchensafe.com/blog/dishwasher-rinse-aid-detergent-residue-gut-barrier-safety/): Alcohol ethoxylate surfactant chemistry, Nature/JACI findings on intestinal epithelial tight junction disruption, and evidence-based rinsing protocols.
- [Plastic Cutting Boards, Deep Knife Grooves & Microplastic Ingestion: Microbial Biofilms, Polymer Shedding & Food Safety](https://isitkitchensafe.com/blog/plastic-cutting-board-knife-grooves-microplastics-bacteria/): ACS/EHP shedding metrics (1,000 to 5,000 particles per session), knife scar bacterial biofilm entrapment (Salmonella/E. coli), and scientific replacement rules.`;

if (!llmsContent.includes('cast-iron-acidic-tomato-sauce-iron-leaching-guide')) {
  llmsContent = llmsContent.replace(guideTarget, newGuidesText);
  console.log('✅ Added 3 new safety guides to public/llms.txt');
}

// Add new tool
const toolTarget = `- [Charcoal vs Gas Grill PAH & HCA Carcinogen Modeler](https://isitkitchensafe.com/tools/charcoal-gas-grill-pah-hca-modeler/): Model fat drip pyrolysis on 750°C embers, volatile Benzo[a]pyrene convective smoke condensation, surface creatine-amino Maillard condensation (PhIP/MeIQx), and antioxidant marinade reduction under EU Regulation 835/2011. Verified via EFSA CONTAM Panel Opinion and J. Agric. Food Chem. standards. (part of our **210 flagship interactive tools** catalog — **1,050 localized tool pages** across 5 languages) are accessible via the [Interactive Tools Hub](https://isitkitchensafe.com/tools/):`;

const newToolText = `- [Air Fryer vs Deep Fryer Lipid Oxidation & 4-HNE Modeler](https://isitkitchensafe.com/tools/air-fryer-lipid-oxidation-modeler/): Model forced-air convection oxygen flux, polyunsaturated fatty acid bis-allylic radical cascades, cytotoxic 4-hydroxy-2-nonenal (4-HNE) generation, and oil reuse degradation thresholds. Verified via ACS and Food Chem. standards. (part of our **210 flagship interactive tools** catalog — **1,050 localized tool pages** across 5 languages) are accessible via the [Interactive Tools Hub](https://isitkitchensafe.com/tools/):
- [Charcoal vs Gas Grill PAH & HCA Carcinogen Modeler](https://isitkitchensafe.com/tools/charcoal-gas-grill-pah-hca-modeler/): Model fat drip pyrolysis on 750°C embers, volatile Benzo[a]pyrene convective smoke condensation, surface creatine-amino Maillard condensation (PhIP/MeIQx), and antioxidant marinade reduction under EU Regulation 835/2011.`;

if (!llmsContent.includes('air-fryer-lipid-oxidation-modeler')) {
  llmsContent = llmsContent.replace(toolTarget, newToolText);
  console.log('✅ Added Air Fryer Lipid Oxidation Modeler to public/llms.txt');
}

fs.writeFileSync(llmsPath, llmsContent, 'utf8');
console.log('✅ Saved public/llms.txt');

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

readmeContent = readmeContent.replace('67 Google-indexed Everyday Consumer Kitchen Safety Tools', '68 Google-indexed Everyday Consumer Kitchen Safety Tools');
readmeContent = readmeContent.replace('71 evergreen guides × 5 languages = 355 localized articles', '74 evergreen guides × 5 languages = 370 localized articles');
readmeContent = readmeContent.replace('11,427+ static pages', '11,587+ static pages');
readmeContent = readmeContent.replace('11,572+ Pages', '11,587+ Pages');

fs.writeFileSync(readmePath, readmeContent, 'utf8');
console.log('✅ Saved README.md');
