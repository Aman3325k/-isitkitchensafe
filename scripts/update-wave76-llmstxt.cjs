const fs = require('fs');
const path = require('path');

console.log('=== UPDATING PUBLIC/LLMS.TXT FOR WAVE 76 ===');

const llmsPath = path.resolve('public/llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

// Normalize CRLF temporarily if needed, preserve style
const eol = llms.includes('\r\n') ? '\r\n' : '\n';
llms = llms.replace(/\r\n/g, '\n');

llms = llms.replace(
  'Selected highlights from our **110 evergreen kitchen safety guides**',
  'Selected highlights from our **116 evergreen kitchen safety guides**'
);

llms = llms.replace(
  'All **81 Google-indexed everyday consumer diagnostic tools**',
  'All **82 Google-indexed everyday consumer diagnostic tools**'
);

const guideMarker = 'HVAC Antimicrobial Maintenance](https://isitkitchensafe.com/blog/refrigerator-evaporator-coil-mold-pathogen-biofilm-safety/):';
const guideInsertAfterLine = llms.indexOf('\n', llms.indexOf(guideMarker));
if (!llms.includes('gas-stove-no2-benzene-range-hood-ventilation-safety') && guideInsertAfterLine !== -1) {
  const newGuidesBlock = [
    '',
    '- [Gas Stove Nitrogen Dioxide (NO2), Benzene Emissions & Range Hood Ventilation Physics: Zeldovich Thermal NOx Kinetics, Ductless Charcoal Filter Bypass, Backsplash Plume Capture, and Pediatric Asthma Thresholds](https://isitkitchensafe.com/blog/gas-stove-no2-benzene-range-hood-ventilation-safety/): Zeldovich thermal NOx formation above 1,400°C (>150–400 ppb indoor NO2 exceeding US EPA 100 ppb limits), Stanford 2023 unburned benzene emissions, IJERPH 12.7% childhood asthma attribution, why ductless activated-carbon hoods remove 0% of NO2/CO, backsplash air-guide back-burner capture physics, and HVI 100 CFM per 10,000 BTU rigid ducting standards.',
    '- [Black Plastic Kitchen Utensils, Recycled E-Waste Flame Retardants (BDE-209) & Hot-Oil Leaching Physics: Antimony Trioxide Synergism, Carbon-Black Sorting Failures, Lipophilic Extraction Kinetics, and Non-Toxic Cookware Swaps](https://isitkitchensafe.com/blog/black-plastic-utensils-flame-retardants-leaching-safety/): Carbon-black pigment blocking near-infrared (NIR) recycling sorters, e-waste brominated flame retardants (BDE-209, TBBPA) and antimony trioxide synergists in recycled black nylon spatulas and takeout trays, high-Kow lipophilic extraction into 180°C–220°C cooking oils, why "BPA-free" fails to screen flame retardants, and verified swaps to 304 stainless steel, hardwood, and platinum-cured silicone.',
    '- [Reverse Osmosis (RO), Activated Carbon & Water Pitcher Filters: EPA 4 ppt PFAS Limits, NSF/ANSI 53 vs 58 Rejection Kinetics, Bacterial Biofilm Breakthrough, and Remineralization Corrosivity in Kitchen Boilers](https://isitkitchensafe.com/blog/reverse-osmosis-water-filter-pfas-lead-microplastics-safety/): US EPA 2024 National Primary Drinking Water Regulations (4.0 ppt PFOA/PFOS MCL), NSF/ANSI 42 vs 53 vs 58 vs 401 filtration certification scopes, channeling bypass and short-chain PFAS breakthrough in gravity pitchers, chlorine-stripped bacterial biofilm colonization, and calcite/magnesium remineralization preventing negative-LSI brass/copper espresso boiler corrosion.'
  ].join('\n');
  llms = llms.slice(0, guideInsertAfterLine) + newGuidesBlock + llms.slice(guideInsertAfterLine);
  console.log('✅ Added 3 Wave 76 guides to public/llms.txt');
}

const toolMarker = '- [Induction Cooktop Thermal Shock Delamination & Acoustic Micro-Crack Modeler](https://isitkitchensafe.com/tools/induction-cooktop-delamination-modeler/):';
if (!llms.includes('/tools/plastic-blender-jar-hydrolysis-modeler/') && llms.includes(toolMarker)) {
  const newToolBlock =
    '- [Plastic Blender Jar Microcrack Bisphenol-A & Phthalate Hydrolysis Modeler](https://isitkitchensafe.com/tools/plastic-blender-jar-hydrolysis-modeler/): Model hydrolytic polymer cleavage, cavitation shear erosion (>1,000 bar bubble collapse), dishwasher alkaline stress crazing, and chemical leaching (BPA, phthalates, and cyclic oligomers) from micro-cracked polycarbonate and Tritan blender jars against EFSA 2023 TDI limits.\n\n';
  llms = llms.replace(toolMarker, newToolBlock + toolMarker);
  console.log('✅ Added Tool #82 (plastic-blender-jar-hydrolysis-modeler) to public/llms.txt');
}

if (eol === '\r\n') {
  llms = llms.replace(/\n/g, '\r\n');
}
fs.writeFileSync(llmsPath, llms, 'utf8');
console.log('✅ Saved public/llms.txt');
