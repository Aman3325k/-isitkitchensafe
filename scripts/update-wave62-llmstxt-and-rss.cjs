const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS SYNDICATION FOR WAVE 62 ===');

// 1. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Update summary counts
llms = llms.replace(
  /Spanning \*\*11,852\+ static pages\*\* across \*\*5 languages\*\* \(EN, ES, PT, ZH-CN, JA\)/g,
  'Spanning **11,867+ static pages** across **5 languages** (EN, ES, PT, ZH-CN, JA)'
);
llms = llms.replace(
  /Spanning \*\*11,827\+ static pages\*\* across \*\*5 languages\*\* \(EN, ES, PT, ZH-CN, JA\)/g,
  'Spanning **11,867+ static pages** across **5 languages** (EN, ES, PT, ZH-CN, JA)'
);
llms = llms.replace(
  /including \*\*74 Google-indexed everyday consumer tools\*\*\) with \*\*92 evergreen guides per language\*\* \(460 localized articles\)/g,
  'including **75 Google-indexed everyday consumer tools**) with **95 evergreen guides per language** (475 localized articles)'
);

// Update highlights header count
llms = llms.replace(
  /Selected highlights from our \*\*\d+ evergreen kitchen safety guides\*\*/g,
  'Selected highlights from our **95 evergreen kitchen safety guides**'
);

// Append new guides if not already present
const newGuideEntries = `- [Cold Brew Coffee Maker & Nitro Dispenser Safety: Anaerobic Biofilm Proliferation, Acidic Stainless Mesh Corrosion, Spore Germination & Food-Contact Sanitization Protocols](https://isitkitchensafe.com/blog/cold-brew-coffee-maker-nitro-biofilm-sanitization-safety/): Prolonged 24–48 hour ambient water immersion bypassing thermal pasteurization, anaerobic micro-environments in pressurized nitrogen kegs (Pseudomonas, Listeria monocytogenes, Clostridium botulinum spore risks), Grade 304 vs 316 stainless steel micro-mesh chlorogenic acid crevice corrosion, silicone gasket lipid absorption, and brewery two-step alkaline-peracetic sanitization protocols.
- [Espresso Machine Boilers & Descaling Chemistry: Lead & Nickel Leaching Kinetics in Brass CW617N, Chrome-Plated Group Heads, Acid Passivation & Toxic Flush Limits](https://isitkitchensafe.com/blog/espresso-machine-boiler-descaling-lead-nickel-leaching-safety/): Free-machining CW617N/OT58 brass alloy lead inclusions (up to 2.5% Pb), tricarboxylic citric and sulfamic acid chelation rates on heavy metals, destruction of protective calcium carbonate mineral passivation layers causing post-descale lead spikes (>2,000 µg/L vs WHO 10 µg/L limit), E61 group head chrome flaking galvanic micro-couples, and the zero-contamination multi-reservoir neutralizing flush protocol.
- [Sous Vide Vacuum Bag Plastic Safety: Prolonged Thermal Extraction Kinetics, PE/Nylon Multi-Layer Delamination, Microplastic Shedding & Fatty Food Migration Limits](https://isitkitchensafe.com/blog/sous-vide-plastic-bag-vacuum-sealing-microplastic-heat-safety/): Linear low-density polyethylene (LLDPE) rubbery state free volume expansion at 55°C–85°C over 48 hours, non-polar animal fat lipid-mediated extraction of slip additives (erucamide, oleamide) up to 50x higher than water, impulse heat-seal margin microplastic and nanoplastic shearing, non-intentionally added substances (NIAS), and certified platinum-cured silicone and glass Mason jar alternatives.`;

if (!llms.includes('cold-brew-coffee-maker-nitro-biofilm-sanitization-safety')) {
  const insertMarker = '## Consumer Interactive Kitchen Safety Tools';
  llms = llms.replace(insertMarker, `${newGuideEntries}\n\n${insertMarker}`);
  console.log('✅ Added 3 safety guides to llms.txt');
} else {
  console.log('ℹ️ Safety guides already in llms.txt');
}

// Update tools count and add tool #75
llms = llms.replace(
  /All \*\*74 Google-indexed everyday consumer diagnostic tools\*\*/g,
  'All **75 Google-indexed everyday consumer diagnostic tools**'
);

const immersionToolEntry = `- [Immersion Blender Bearing Grease & Shaft Seal Leaching Modeler](https://isitkitchensafe.com/tools/immersion-blender-grease-leaching-modeler/): Simulate high-rpm rotor cavitation, sub-surface NBR lip seal thermal wear, petroleum hydrocarbon grease leaching into hot soup emulsions, and NSF H1 vs non-food-grade grease toxicity thresholds.`;

if (!llms.includes('immersion-blender-grease-leaching-modeler')) {
  const toolTarget = '## Consumer Interactive Kitchen Safety Tools\n\nAll **75 Google-indexed everyday consumer diagnostic tools**';
  llms = llms.replace(toolTarget, `${toolTarget}\n\n${immersionToolEntry}`);
  console.log('✅ Added immersion blender tool to llms.txt');
} else {
  console.log('ℹ️ Immersion blender tool already in llms.txt');
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

const immersionRssEntry = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/immersion-blender-grease-leaching-modeler/',
    title: 'Immersion Blender Bearing Grease & Shaft Seal Leaching Modeler',
    description:
      'Simulate high-rpm rotor cavitation, sub-surface NBR lip seal thermal wear, petroleum hydrocarbon grease leaching into hot soup emulsions, and NSF H1 vs non-food-grade grease toxicity thresholds.',
    date: '2026-11-22'
  },`;

if (!rss.includes('/tools/immersion-blender-grease-leaching-modeler/')) {
  rss = rss.replace(targetRss, immersionRssEntry);
  fs.writeFileSync(rssPath, rss, 'utf8');
  console.log('✅ Added immersion-blender-grease-leaching-modeler to rss.xml.ts');
} else {
  console.log('ℹ️ Tool already in rss.xml.ts');
}

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

readme = readme.replace(
  /\*\*11,852\+ static pages\*\*/g,
  '**11,867+ static pages**'
);
readme = readme.replace(
  /\*\*11,827\+ static pages\*\*/g,
  '**11,867+ static pages**'
);
readme = readme.replace(
  /\*\*74 Google-indexed Everyday Consumer Kitchen Safety Tools\*\*/g,
  '**75 Google-indexed Everyday Consumer Kitchen Safety Tools**'
);
readme = readme.replace(
  /\*\*92 evergreen guides × 5 languages = 460 localized articles\*\*/g,
  '**95 evergreen guides × 5 languages = 475 localized articles**'
);

fs.writeFileSync(readmePath, readme, 'utf8');
console.log('✅ Updated README.md metrics');
