const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LLMS.TXT AND RSS SYNDICATION FOR WAVE 56 ===');

// 1. Update public/llms.txt
const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Update summary counts
llms = llms.replace(
  /Spanning \*\*11,732\+ static pages\*\* across \*\*5 languages\*\* \(EN, ES, PT, ZH-CN, JA\), the platform pairs \*\*210 flagship interactive tools\*\* \(\*\*1,050 localized tool pages\*\*, including \*\*71 Google-indexed everyday consumer tools\*\*\) with \*\*83 evergreen guides per language\*\* \(415 localized articles\)/g,
  'Spanning **11,747+ static pages** across **5 languages** (EN, ES, PT, ZH-CN, JA), the platform pairs **210 flagship interactive tools** (**1,050 localized tool pages**, including **72 Google-indexed everyday consumer tools**) with **86 evergreen guides per language** (430 localized articles)'
);

// Update highlights header count
llms = llms.replace(
  /Selected highlights from our \*\*\d+ evergreen kitchen safety guides\*\*/g,
  'Selected highlights from our **86 evergreen kitchen safety guides**'
);

// Append new guides if not already present
const newGuideEntries = `- [Copper Cookware Acid Leaching, Tin Lining Erosion & Verdigris Poisoning: FDA Food Code § 4-101.14, Re-Tinning Quarter Rule & Acute Cupric Gastrointestinal Toxicity](https://isitkitchensafe.com/blog/copper-cookware-tin-lining-verdigris-poisoning-safety/): Aerated redox kinetics (2Cu + 4H+ + O2 -> 2Cu2+ + 2H2O), carboxylic acid chelation, FDA § 4-101.14 prohibition below pH 6.0, the Coppersmith Quarter Rule (~4.6 cm² bare copper limit), galvanic pitting, verdigris crystal dissolution, and vagal emetic reflex at 15–30 mg Cu2+.
- [Stainless Steel Cookware Nickel & Chromium Leaching in Long-Simmer Tomato Sauces: Toxicological Release Kinetics, Austenitic Passivation & Allergy Thresholds](https://isitkitchensafe.com/blog/stainless-steel-nickel-chromium-acid-leaching-safety/): 2 nm Cr2O3 passive oxide stability, austenitic 304 (18/10) vs marine 316 (2-3% Mo), acid-chloride pitting kinetics during 6-hour tomato simmers, speciation of trivalent Cr3+ vs hexavalent Cr6+, Systemic Nickel Allergy Syndrome (SNAS) immune response (50-100 µg threshold), and EDQM CM/Res(2013)9 Specific Release Limits.
- [Vintage Pewter, Antique Silverware & Tin Ware Safety: Lead Contamination Thresholds, Antimony Leaching & Modern Lead-Free Food Contact Standards](https://isitkitchensafe.com/blog/pewter-vintage-cookware-lead-toxicity-safety/): Historical pewter metallurgy (Trifle & Ley metal containing 15% to 40% elemental lead), binary eutectic segregation, acidic chelation in cider/wine, Devonshire Colic saturnism epidemic, antimony & arsenic co-leaching, FDA Food Code § 4-101.13 & ASTM B560 lead-free criteria (<0.05% Pb), and sodium rhodizonate screening.`;

if (!llms.includes('copper-cookware-tin-lining-verdigris-poisoning-safety')) {
  const insertMarker = '## Consumer Interactive Kitchen Safety Tools';
  llms = llms.replace(insertMarker, `${newGuideEntries}\n\n${insertMarker}`);
  console.log('✅ Added 3 safety guides to llms.txt');
} else {
  console.log('ℹ️ Safety guides already in llms.txt');
}

// Update tools count and add tool #72
llms = llms.replace(
  /All \*\*71 Google-indexed everyday consumer diagnostic tools\*\*/g,
  'All **72 Google-indexed everyday consumer diagnostic tools**'
);

const copperToolEntry = `- [Copper Cookware Acid Leaching & Verdigris Modeler](https://isitkitchensafe.com/tools/copper-cookware-toxicity-modeler/): Simulate copper ion dissolution in acidic food reductions (pH < 6.0), tin lining erosion, toxic verdigris salt formation, and evaluate gastric irritation thresholds against the FDA Food Code § 4-101.14 Quarter Rule.`;

if (!llms.includes('copper-cookware-toxicity-modeler')) {
  const toolTarget = '## Consumer Interactive Kitchen Safety Tools\n\nAll **72 Google-indexed everyday consumer diagnostic tools**';
  llms = llms.replace(toolTarget, `${toolTarget}\n\n${copperToolEntry}`);
  console.log('✅ Added copper cookware tool to llms.txt');
} else {
  console.log('ℹ️ Copper cookware tool already in llms.txt');
}

fs.writeFileSync(llmsPath, llms, 'utf8');
console.log('✅ Saved public/llms.txt');
