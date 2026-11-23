const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS SYNDICATION FOR WAVE 68 ===');

// 1. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Update page counts and stats
llms = llms.replace(
  /Spanning \*\*11972\+ static pages\*\* across \*\*5 languages\*\*/g,
  'Spanning **11987+ static pages** across **5 languages**'
);
llms = llms.replace(
  /Spanning \*\*11947\+ static pages\*\* across \*\*5 languages\*\*/g,
  'Spanning **11987+ static pages** across **5 languages**'
);
llms = llms.replace(
  /including \*\*77 Google-indexed everyday consumer tools\*\*\) with \*\*101 evergreen guides per language\*\* \(505 localized articles\)/g,
  'including **78 Google-indexed everyday consumer tools**) with **104 evergreen guides per language** (520 localized articles)'
);
llms = llms.replace(
  /Selected highlights from our \*\*101 evergreen kitchen safety guides\*\*/g,
  'Selected highlights from our **104 evergreen kitchen safety guides**'
);
llms = llms.replace(
  /All \*\*77 Google-indexed everyday consumer diagnostic tools\*\*/g,
  'All **78 Google-indexed everyday consumer diagnostic tools**'
);

// Append new guides
const newGuideEntries = `- [Dishwasher High-Temp Sanitize Cycle & NSF/ANSI 184 Pathogen Safety: Thermal Inactivation Kinetics (D-Value & Z-Value), Norovirus & Spore Resistance, and Rinse-Aid Surfactant Gut Barrier Toxicity](https://isitkitchensafe.com/blog/dishwasher-thermal-sanitization-nsf184-pathogen-safety/): NSF/ANSI Standard 184 residential sanitation benchmarks (99.999% / 5-log kill at terminal rinse >=150°F / 65.6°C), thermal destruction kinetics (D-value, Z-value, and 3,600 Heat Unit Equivalents), non-enveloped human Norovirus thermal resistance, Bacillus cereus endospore survival, Swiss SIAF 2023 evidence on alcohol ethoxylate rinse-aid barrier toxicity, and calrod descaling.
- [Induction & Radiant Glass-Ceramic Cooktop Shatter Safety: Lithium Aluminosilicate Micro-Crystalline Thermal Shock, Sugar Pit Spalling, Point-Impact Hertzian Cone Cracking & Catastrophic Fracture Prevention](https://isitkitchensafe.com/blog/glass-ceramic-cooktop-shatter-thermal-shock-fracture-safety/): Lithium aluminosilicate (LAS) glass-ceramic materials science (70% beta-spodumene nano-crystallites yielding near-zero thermal expansion), 700°C thermal shock tolerance vs. brittle Hertzian cone point-impact fracture mechanics, boiling sugar covalent silanol bonding and pit spalling from differential thermal contraction, cast iron stress concentration, and electrical 240V isolation.
- [Pop-Up Toaster Nichrome Wire Flaking & Acrylamide Kinetic Safety: 80/20 Nickel-Chromium Resistance Oxidation, Micro-Aerosols, Maillard Asparagine Neurotoxicity & Safe Toasting Thresholds](https://isitkitchensafe.com/blog/toaster-nichrome-wire-flaking-acrylamide-safety/): ASTM B344 Nichrome 80/20 resistance alloy metallurgy, Cr2O3 self-healing passivation scales, thermal expansion spalling and carriage spring shock flaking, systemic nickel allergy (SNAS) risks, exponential Maillard acrylamide synthesis (>1,200 µg/kg in dark toast vs <50 µg/kg golden), crumb tray dry pyrolysis, acrolein fumes, and the Golden-Yellow Rule.`;

if (!llms.includes('dishwasher-thermal-sanitization-nsf184-pathogen-safety')) {
  const insertMarker = '## Consumer Interactive Kitchen Safety Tools';
  llms = llms.replace(insertMarker, `${newGuideEntries}\n\n${insertMarker}`);
  console.log('✅ Added 3 safety guides to llms.txt');
} else {
  console.log('ℹ️ Safety guides already in llms.txt');
}

// Add Tool #78 entry
const tool78Entry = `- [Food Processor Centrifugal Stress & Polycarbonate Blade Fatigue Modeler](https://isitkitchensafe.com/tools/food-processor-blade-fatigue-modeler/): Model rotational biomechanics, S-blade centrifugal g-forces up to 1,000g, dishwasher alkaline crazing in polycarbonate work bowls, and stainless steel micro-chipping hazards.`;

if (!llms.includes('food-processor-blade-fatigue-modeler')) {
  const toolTarget = '## Consumer Interactive Kitchen Safety Tools\n\nAll **78 Google-indexed everyday consumer diagnostic tools**';
  llms = llms.replace(toolTarget, `${toolTarget}\n\n${tool78Entry}`);
  console.log('✅ Added food processor tool to llms.txt');
} else {
  console.log('ℹ️ Food processor tool already in llms.txt');
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

const tool78RssEntry = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/food-processor-blade-fatigue-modeler/',
    title: 'Food Processor Centrifugal Stress & Polycarbonate Blade Fatigue Modeler',
    description:
      'Model rotational biomechanics, S-blade centrifugal g-forces up to 1,000g, dishwasher alkaline crazing in polycarbonate work bowls, and stainless steel micro-chipping hazards.',
    date: '2026-11-22'
  },`;

if (!rss.includes('/tools/food-processor-blade-fatigue-modeler/')) {
  rss = rss.replace(targetRss, tool78RssEntry);
  fs.writeFileSync(rssPath, rss, 'utf8');
  console.log('✅ Added food-processor-blade-fatigue-modeler to rss.xml.ts');
} else {
  console.log('ℹ️ Tool already in rss.xml.ts');
}

// 3. Update README.md
const readmePath = path.resolve('README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

readme = readme.replace(
  /\*\*11972\+ static pages\*\*/g,
  '**11987+ static pages**'
);
readme = readme.replace(
  /\*\*11,972\+ static pages\*\*/g,
  '**11,987+ static pages**'
);
readme = readme.replace(
  /\*\*11947\+ static pages\*\*/g,
  '**11987+ static pages**'
);
readme = readme.replace(
  /\*\*11,947\+ static pages\*\*/g,
  '**11,987+ static pages**'
);
readme = readme.replace(
  /\*\*77 Google-indexed Everyday Consumer Kitchen Safety Tools\*\*/g,
  '**78 Google-indexed Everyday Consumer Kitchen Safety Tools**'
);
readme = readme.replace(
  /\*\*101 evergreen guides × 5 languages = 505 localized articles\*\*/g,
  '**104 evergreen guides × 5 languages = 520 localized articles**'
);

fs.writeFileSync(readmePath, readme, 'utf8');
console.log('✅ Updated README.md metrics');

