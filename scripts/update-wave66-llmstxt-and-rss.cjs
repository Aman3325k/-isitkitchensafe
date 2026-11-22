const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS SYNDICATION FOR WAVE 66 ===');

// 1. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Update page counts and stats
llms = llms.replace(
  /Spanning \*\*11932\+ static pages\*\* across \*\*5 languages\*\*/g,
  'Spanning **11947+ static pages** across **5 languages**'
);
llms = llms.replace(
  /Spanning \*\*11907\+ static pages\*\* across \*\*5 languages\*\*/g,
  'Spanning **11947+ static pages** across **5 languages**'
);
llms = llms.replace(
  /including \*\*76 Google-indexed everyday consumer tools\*\*\) with \*\*98 evergreen guides per language\*\* \(490 localized articles\)/g,
  'including **77 Google-indexed everyday consumer tools**) with **101 evergreen guides per language** (505 localized articles)'
);
llms = llms.replace(
  /Selected highlights from our \*\*98 evergreen kitchen safety guides\*\*/g,
  'Selected highlights from our **101 evergreen kitchen safety guides**'
);
llms = llms.replace(
  /All \*\*76 Google-indexed everyday consumer diagnostic tools\*\*/g,
  'All **77 Google-indexed everyday consumer diagnostic tools**'
);

// Append new guides
const newGuideEntries = `- [Food Processor S-Blade Fatigue & Bowl Shatter Safety: High-Torque Kinetic Micro-Chipping, Polycarbonate Crazing, Dishwasher Alkaline Hydrolysis & Impact Shatter Hazards](https://isitkitchensafe.com/blog/food-processor-blade-fatigue-chipping-kinetic-safety/): High-torque induction motor cyclic torsional stress, martensitic AISI 420 cutlery steel hardness (HRC 54) vs impact toughness, CPSC Recall 17-061 of 4.3M riveted blades, polycarbonate vs Tritan work bowl micro-crazing under high-speed friction, alkaline dishwasher hydrolysis (pH 10–11.5) cleaving polymer ester bonds, and oral foreign body ingestion hazards (FDA 21 CFR § 110.80).
- [Ceramic Non-Stick Cookware Sol-Gel Degradation & Nanoparticle Safety: Silica Matrix Porosity, High-Heat Oil Carbonization, Micro-Pitting & Heavy Metal Substrate Migration](https://isitkitchensafe.com/blog/ceramic-nonstick-cookware-solgel-degradation-nanoparticle-safety/): Sol-gel organosilicon hybrid network chemistry combining silica (SiO2) and methyl (-CH3) groups, pyrolytic degradation of non-stick methyl groups above 230°C (450°F), sub-micron pore capillary absorption and oil varnish gumming, micro-scratch induced aluminum substrate galvanic crevice corrosion under acidic food contact, and amorphous silica/titanium dioxide nanoparticle shedding.
- [Citrus Press & Lemon Squeezer Enameling Safety: Raw Citric Acid Leaching Kinetics, Chipped Powder-Coat Flaking, Dishwasher Smut Oxidation & SUS304 Passivation](https://isitkitchensafe.com/blog/citrus-press-lemon-squeezer-enameled-aluminum-acidic-leaching-safety/): Thermodynamic organic acid chelation of elemental aluminum by fresh lemon juice (pH 2.0–2.4), thermoset powder-coat chipping under mechanical seed leverage (300–500 N), dishwasher caustic saponification causing black aluminum oxide smut formation, heavy metal adulteration (lead chromate, cadmium sulfoselenide) in budget coatings, and AISI 304 food-grade stainless steel passivation dynamics (ASTM A967).`;

if (!llms.includes('food-processor-blade-fatigue-chipping-kinetic-safety')) {
  const insertMarker = '## Consumer Interactive Kitchen Safety Tools';
  llms = llms.replace(insertMarker, `${newGuideEntries}\n\n${insertMarker}`);
  console.log('✅ Added 3 safety guides to llms.txt');
} else {
  console.log('ℹ️ Safety guides already in llms.txt');
}

// Add Tool #77 entry
const espressoToolEntry = `- [Espresso Machine Thermoblock Heavy Metal Leaching & Lead Descaling Modeler](https://isitkitchensafe.com/tools/espresso-machine-heavy-metal-modeler/): Model brass boiler and thermoblock lead and copper leaching during 92°C–96°C 9-bar extraction, citric acid descaling corrosion, and certified post-clean flushing protocols.`;

if (!llms.includes('espresso-machine-heavy-metal-modeler')) {
  const toolTarget = '## Consumer Interactive Kitchen Safety Tools\n\nAll **77 Google-indexed everyday consumer diagnostic tools**';
  llms = llms.replace(toolTarget, `${toolTarget}\n\n${espressoToolEntry}`);
  console.log('✅ Added espresso machine tool to llms.txt');
} else {
  console.log('ℹ️ Espresso machine tool already in llms.txt');
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

const espressoRssEntry = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/espresso-machine-heavy-metal-modeler/',
    title: 'Espresso Machine Thermoblock Heavy Metal Leaching & Lead Descaling Modeler',
    description:
      'Model brass boiler and thermoblock lead and copper leaching during 92°C–96°C 9-bar extraction, citric acid descaling corrosion, and certified post-clean flushing protocols.',
    date: '2026-11-22'
  },`;

if (!rss.includes('/tools/espresso-machine-heavy-metal-modeler/')) {
  rss = rss.replace(targetRss, espressoRssEntry);
  fs.writeFileSync(rssPath, rss, 'utf8');
  console.log('✅ Added espresso-machine-heavy-metal-modeler to rss.xml.ts');
} else {
  console.log('ℹ️ Tool already in rss.xml.ts');
}

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

readme = readme.replace(
  /\*\*11932\+ static pages\*\*/g,
  '**11947+ static pages**'
);
readme = readme.replace(
  /\*\*11,932\+ static pages\*\*/g,
  '**11,947+ static pages**'
);
readme = readme.replace(
  /\*\*76 Google-indexed Everyday Consumer Kitchen Safety Tools\*\*/g,
  '**77 Google-indexed Everyday Consumer Kitchen Safety Tools**'
);
readme = readme.replace(
  /\*\*98 evergreen guides × 5 languages = 490 localized articles\*\*/g,
  '**101 evergreen guides × 5 languages = 505 localized articles**'
);

fs.writeFileSync(readmePath, readme, 'utf8');
console.log('✅ Updated README.md metrics');
