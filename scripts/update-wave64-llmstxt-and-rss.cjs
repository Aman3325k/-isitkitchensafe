const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS SYNDICATION FOR WAVE 64 ===');

// 1. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Update page counts and stats
llms = llms.replace(
  /Spanning \*\*11892\+ static pages\*\* across \*\*5 languages\*\*/g,
  'Spanning **11907+ static pages** across **5 languages**'
);
llms = llms.replace(
  /including \*\*75 Google-indexed everyday consumer tools\*\*\) with \*\*95 evergreen guides per language\*\* \(475 localized articles\)/g,
  'including **76 Google-indexed everyday consumer tools**) with **98 evergreen guides per language** (490 localized articles)'
);
llms = llms.replace(
  /Selected highlights from our \*\*95 evergreen kitchen safety guides\*\*/g,
  'Selected highlights from our **98 evergreen kitchen safety guides**'
);
llms = llms.replace(
  /All \*\*75 Google-indexed everyday consumer diagnostic tools\*\*/g,
  'All **76 Google-indexed everyday consumer diagnostic tools**'
);

// Append new guides
const newGuideEntries = `- [Blender Blade Cavitation & Personal Bullet Cup Steam Explosion Safety: High-RPM Vortex Mechanics, Viscous Friction Overheating & Soda-Lime Thermal Shock Fractures](https://isitkitchensafe.com/blog/blender-blade-cavitation-bullet-cup-steam-explosion-safety/): Hydrodynamic blade tip vortex cavitation at >25,000 RPM eroding plastic pitcher walls, personal bullet cup hermetic vapor expansion reaching 15–25 PSI concussive explosion hazards, viscous shear dissipation raising dense purees by 20°C/min, ASTM C149 thermal shock fracturing of soda-lime glass, and dynamic shaft lip seal failure leading to toxic bearing grease migration.
- [Espresso Machine Boiler & Thermoblock Descaling Safety: Leaded Brass De-Zincification, Heavy Metal Leaching Spikes, Sulfamic vs Citric Acid & Post-Clean Flushing Protocols](https://isitkitchensafe.com/blog/espresso-machine-boiler-descaling-lead-nickel-copper-leaching-safety/): Free-machining CW617N leaded brass de-zincification, acid-induced dissolution of oxide passivating layers causing post-descaling lead spikes up to 160 µg/L (16x WHO limit), nickel leaching spikes exceeding 400 µg/L, hazards of household vinegar and citric acid chelation vs buffered sulfamic acid, aluminum thermoblock crevice pitting, and mandatory multi-liter post-descaling neutralizing flush protocols.
- [Plastic Blender & Food Processor Pitcher Safety: Eastman Tritan Copolyester vs Polycarbonate, Dishwasher Alkaline Hydrolysis, Micro-Crazing & Nanoplastic Shedding](https://isitkitchensafe.com/blog/plastic-blender-pitcher-tritan-bps-dishwasher-hydrolysis-safety/): Polymer transition from polycarbonate (BPA) to Eastman Tritan copolyesters (DMT/CBDO/CHDM), endocrine-disrupting bisphenol analogs (BPS, BPF), dishwasher alkaline hydrolysis (pH 10–11) cleaving polymer ester bonds into milky surface hazing, 2.5 HP Environmental Stress Cracking (ESC) and micro-crazing, and high-RPM shedding of millions of ingestible nanoplastics.`;

if (!llms.includes('blender-blade-cavitation-bullet-cup-steam-explosion-safety')) {
  const insertMarker = '## Consumer Interactive Kitchen Safety Tools';
  llms = llms.replace(insertMarker, `${newGuideEntries}\n\n${insertMarker}`);
  console.log('✅ Added 3 safety guides to llms.txt');
} else {
  console.log('ℹ️ Safety guides already in llms.txt');
}

// Add Tool #76 entry
const blenderToolEntry = `- [Blender Blade Friction Thermal Degradation & Micro-Cavitation Safety Modeler](https://isitkitchensafe.com/tools/blender-blade-cavitation-safety-modeler/): Model 20,000+ RPM blade tip vortex cavitation, viscous friction heating, sealed bullet cup steam explosion hazards, and blade bearing grease migration risks.`;

if (!llms.includes('blender-blade-cavitation-safety-modeler')) {
  const toolTarget = '## Consumer Interactive Kitchen Safety Tools\n\nAll **76 Google-indexed everyday consumer diagnostic tools**';
  llms = llms.replace(toolTarget, `${toolTarget}\n\n${blenderToolEntry}`);
  console.log('✅ Added blender cavitation tool to llms.txt');
} else {
  console.log('ℹ️ Blender cavitation tool already in llms.txt');
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

const blenderRssEntry = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/blender-blade-cavitation-safety-modeler/',
    title: 'Blender Blade Friction Thermal Degradation & Micro-Cavitation Safety Modeler',
    description:
      'Model 20,000+ RPM blade tip vortex cavitation, viscous friction heating, sealed bullet cup steam explosion hazards, and blade bearing grease migration risks.',
    date: '2026-11-22'
  },`;

if (!rss.includes('/tools/blender-blade-cavitation-safety-modeler/')) {
  rss = rss.replace(targetRss, blenderRssEntry);
  fs.writeFileSync(rssPath, rss, 'utf8');
  console.log('✅ Added blender-blade-cavitation-safety-modeler to rss.xml.ts');
} else {
  console.log('ℹ️ Tool already in rss.xml.ts');
}

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

readme = readme.replace(
  /\*\*11892\+ static pages\*\*/g,
  '**11907+ static pages**'
);
readme = readme.replace(
  /\*\*11,892\+ static pages\*\*/g,
  '**11,907+ static pages**'
);
readme = readme.replace(
  /\*\*75 Google-indexed Everyday Consumer Kitchen Safety Tools\*\*/g,
  '**76 Google-indexed Everyday Consumer Kitchen Safety Tools**'
);
readme = readme.replace(
  /\*\*95 evergreen guides × 5 languages = 475 localized articles\*\*/g,
  '**98 evergreen guides × 5 languages = 490 localized articles**'
);

fs.writeFileSync(readmePath, readme, 'utf8');
console.log('✅ Updated README.md metrics');
