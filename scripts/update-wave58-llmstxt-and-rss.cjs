const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS SYNDICATION FOR WAVE 58 ===');

// 1. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Update summary counts
llms = llms.replace(
  /Spanning \*\*11,772\+ static pages\*\* across \*\*5 languages\*\* \(EN, ES, PT, ZH-CN, JA\), the platform pairs \*\*210 flagship interactive tools\*\* \(\*\*1,050 localized tool pages\*\*, including \*\*72 Google-indexed everyday consumer tools\*\*\) with \*\*86 evergreen guides per language\*\* \(430 localized articles\)/g,
  'Spanning **11,787+ static pages** across **5 languages** (EN, ES, PT, ZH-CN, JA), the platform pairs **210 flagship interactive tools** (**1,050 localized tool pages**, including **73 Google-indexed everyday consumer tools**) with **89 evergreen guides per language** (445 localized articles)'
);

// Update highlights header count
llms = llms.replace(
  /Selected highlights from our \*\*\d+ evergreen kitchen safety guides\*\*/g,
  'Selected highlights from our **89 evergreen kitchen safety guides**'
);

// Append new guides if not already present
const newGuideEntries = `- [Pressure Canner vs Pressure Cooker for Home Canning: Clostridium botulinum Spore Inactivation, 240°F / 116°C Thermal Physics & Low-Acid Food Safety](https://isitkitchensafe.com/blog/pressure-canner-vs-pressure-cooker-botulism-safety/): Clostridium botulinum spore thermal destruction kinetics (12D botulinum cook Fo ≥ 3.0 min), why electric multi-cookers (Instant Pot) fail to maintain 15 PSI / 240°F–250°F steam autoclaving temperatures, pH 4.6 demarcation thresholds, altitude pressure compensation, and mandatory 10-minute steam venting protocols.
- [Refrigerator Shelf Order & Microbial Safety: Psychrotolerant Listeria monocytogenes Biofilms, Raw Poultry Dripping Dynamics & Cold Zone Temperature Management](https://isitkitchensafe.com/blog/refrigerator-cross-contamination-shelf-hierarchy-safety/): Listeria monocytogenes cold-temperature replication mechanics (homeoviscous membrane lipid remodeling at 0°C–4°C), gravitational drip dynamics of Salmonella and Campylobacter purge fluid from raw chicken, USDA vertical shelf hierarchy (ready-to-eat on top to raw poultry on bottom), door storage temperature volatility (41°F–48°F), and monthly bleach-solution sanitization.
- [Cast Iron Seasoning Oil Chemistry & Smoke Points: Free Radical Polymerization vs Toxic Acrolein Pyrolysis, Flaxseed Flaking & Safe Culinary Lipids](https://isitkitchensafe.com/blog/cast-iron-seasoning-smoke-point-acrolein-safety/): Free-radical autoxidation lipid chemistry over catalytic iron substrates, triglyceride polymerization vs thermal cracking (pyrolysis), acrolein volatile off-gassing hazards (OSHA 0.1 ppm limit), the flaxseed oil flaking paradox (hyper-dense crosslinking and zero film elasticity), and optimal high-smoke-point culinary lipids (refined grapeseed and high-oleic oils).`;

if (!llms.includes('pressure-canner-vs-pressure-cooker-botulism-safety')) {
  const insertMarker = '## Consumer Interactive Kitchen Safety Tools';
  llms = llms.replace(insertMarker, `${newGuideEntries}\n\n${insertMarker}`);
  console.log('✅ Added 3 safety guides to llms.txt');
} else {
  console.log('ℹ️ Safety guides already in llms.txt');
}

// Update tools count and add tool #73
llms = llms.replace(
  /All \*\*72 Google-indexed everyday consumer diagnostic tools\*\*/g,
  'All **73 Google-indexed everyday consumer diagnostic tools**'
);

const stainlessToolEntry = `- [Stainless Steel Heavy Metal (Nickel & Chromium) Acidic Leaching Modeler](https://isitkitchensafe.com/tools/stainless-steel-heavy-metal-leaching-modeler/): Simulate nickel and chromium ion dissolution during acidic simmering (pH < 4.0), compare 304 vs 316 vs 430 alloys, model new pan leaching spikes, and evaluate systemic nickel allergy risks.`;

if (!llms.includes('stainless-steel-heavy-metal-leaching-modeler')) {
  const toolTarget = '## Consumer Interactive Kitchen Safety Tools\n\nAll **73 Google-indexed everyday consumer diagnostic tools**';
  llms = llms.replace(toolTarget, `${toolTarget}\n\n${stainlessToolEntry}`);
  console.log('✅ Added stainless steel heavy metal tool to llms.txt');
} else {
  console.log('ℹ️ Stainless steel tool already in llms.txt');
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

const stainlessRssEntry = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/stainless-steel-heavy-metal-leaching-modeler/',
    title: 'Stainless Steel Heavy Metal (Nickel & Chromium) Acidic Leaching Modeler',
    description:
      'Simulate nickel and chromium ion dissolution during acidic simmering (pH < 4.0), compare 304 vs 316 vs 430 alloys, model new pan leaching spikes, and evaluate systemic nickel allergy risks.',
    date: '2026-11-22'
  },`;

if (!rss.includes('/tools/stainless-steel-heavy-metal-leaching-modeler/')) {
  rss = rss.replace(targetRss, stainlessRssEntry);
  fs.writeFileSync(rssPath, rss, 'utf8');
  console.log('✅ Added stainless-steel-heavy-metal-leaching-modeler to rss.xml.ts');
} else {
  console.log('ℹ️ Tool already in rss.xml.ts');
}
