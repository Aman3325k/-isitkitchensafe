const fs = require('fs');
const path = require('path');

const llmsPath = path.resolve('public/llms.txt');
let content = fs.readFileSync(llmsPath, 'utf8');

// 1. Header metrics
content = content.replace(/\*\*65 Google-indexed everyday consumer tools\*\*/g, '**66 Google-indexed everyday consumer tools**');
content = content.replace(/\*\*63 Google-indexed everyday consumer diagnostic tools\*\*/g, '**66 Google-indexed everyday consumer diagnostic tools**');
content = content.replace(/\*\*64 Google-indexed everyday consumer diagnostic tools\*\*/g, '**66 Google-indexed everyday consumer diagnostic tools**');
content = content.replace(/\*\*65 Google-indexed everyday consumer diagnostic tools\*\*/g, '**66 Google-indexed everyday consumer diagnostic tools**');
content = content.replace(/\*\*65 evergreen guides per language\*\* \(325 localized articles\)/g, '**68 evergreen guides per language** (340 localized articles)');
content = content.replace(/Selected highlights from our \*\*\d+ evergreen kitchen safety guides\*\*/g, 'Selected highlights from our **68 evergreen kitchen safety guides**');

// 2. Add new guides under Featured Kitchen Safety Guides
const newGuidesText = `- [Wooden Spoons & Kitchen Utensils: Biofilm Colonization, Dishwasher Delamination & Scientific Sanitization](https://isitkitchensafe.com/blog/wooden-spoon-utensil-biofilm-dishwasher-sanitization/): Hardwood anatomy, xylem capillary microbial absorption, Cliver UC Davis antimicrobial studies, alkaline dishwasher lignin hydrolysis, and food-grade mineral oil sealing.
- [Kitchen Sponges & Dish Cloths: Microbial Colonization (Moraxella osloensis), Microwave Disinfection Risks & Sanitization Science](https://isitkitchensafe.com/blog/kitchen-sponge-bacterial-biofilm-sanitization-science/): Polyurethane foam reticulation, Moraxella osloensis malodor biofilms, microwave fire risks, USDA boiling water sanitization, and 14-day replacement lifecycle.
- [Charcoal & Gas Grilling Safety: Polycyclic Aromatic Hydrocarbons (PAH), Heterocyclic Amines (HCA) & Cancer Risk Mitigation](https://isitkitchensafe.com/blog/charcoal-gas-grill-pah-hca-carcinogen-reduction-guide/): High-temperature amino acid/creatine pyrolysis (HCA), fat drip flare-up smoke (PAH), two-zone indirect grilling, and beer/herb polyphenol marinades blocking 90% of carcinogens.`;

if (!content.includes('wooden-spoon-utensil-biofilm-dishwasher-sanitization')) {
  const guideAnchor = '## Consumer Interactive Kitchen Safety Tools';
  content = content.replace(guideAnchor, newGuidesText + '\n\n' + guideAnchor);
  console.log('✅ Added 3 guides to public/llms.txt');
}

// 3. Add new tool under Consumer Interactive Kitchen Safety Tools
const newToolText = `- [Canned Food BPA & Epoxy Phenolic Liner Leaching Modeler](https://isitkitchensafe.com/tools/canned-food-bpa-leaching-modeler/): Model BADGE epoxy resin degradation, acid-hydrolysis kinetics in canned tomatoes, lipophilic extraction in oily fish, can dent micro-fracturing, and EFSA 2023 Tolerable Daily Intake thresholds.`;

if (!content.includes('canned-food-bpa-leaching-modeler')) {
  const toolAnchor = 'All **66 Google-indexed everyday consumer diagnostic tools**';
  if (content.includes(toolAnchor)) {
    content = content.replace(toolAnchor, toolAnchor + '\n\n' + newToolText);
  } else {
    // fallback
    const fallback = '- [Microwave Popcorn Bag Fluorinated PFOA / PFAS Surfactant Modeler]';
    content = content.replace(fallback, newToolText + '\n' + fallback);
  }
  console.log('✅ Added canned-food tool to public/llms.txt');
}

fs.writeFileSync(llmsPath, content, 'utf8');
console.log('✅ Saved public/llms.txt');
