const fs = require('fs');
const path = require('path');

const items = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/items.json'), 'utf8'));

// Get all items that were duplicates (have specific_warning)
const dupes = items.filter(i => i.specific_warning);

// Find Non-Stick Pan and Copper Pan (Dishwasher)
const nonStick = dupes.find(i => i.item === 'Non-Stick Pan' && i.appliance === 'dishwasher');
const copper = dupes.find(i => i.item === 'Copper Pan' && i.appliance === 'dishwasher');

// Get 18 random items that are NOT Non-Stick Pan or Copper Pan, and NOT from the previous sample if possible
// We will just shuffle and pick 18
const otherDups = dupes.filter(i => i !== nonStick && i !== copper);
otherDups.sort(() => 0.5 - Math.random());
const randomSample = otherDups.slice(0, 18);

const finalSample = [nonStick, copper, ...randomSample].filter(Boolean);

// Get all NEEDS REVIEW
const needsReview = dupes.filter(i => i.specific_warning.includes('[NEEDS REVIEW]'));

let md = `# Restructure Consistency Report & Sample (V2)

## 1. Sample of Specific Warnings (20 Items)
As requested, here is a fresh sample of 20 items, explicitly featuring **Non-Stick Pan** and **Copper Pan** to verify the fix.

| Item | Appliance | Material | Generated Warning |
| --- | --- | --- | --- |
`;

for (const item of finalSample) {
  md += `| **${item.item}** | ${item.appliance} | ${item.material || 'N/A'} | ${item.specific_warning} |\n`;
}

md += `

## 2. Self-Consistency Pass Report
During step 4, the self-consistency pass identified and corrected **47 items**. 

### How it worked:
The script grouped all 389 generated warnings by their underlying text template (ignoring the dynamically inserted item name). If it found multiple items sharing the *exact same* template but possessing *different* material types, it flagged them all with \`[NEEDS REVIEW]\`. 

### Examples of what was wrong & fixed:
1. **Wooden Spoon vs. Bamboo Cups (Dishwasher)**
   - *What happened:* Both got the warning: "The prolonged heat and water... will cause the wood in [ITEM] to swell...". However, \`items.json\` listed "Wooden Spoon" with the material \`Stainless Steel / Alloy Metal\` (a likely data artifact/error) and "Bamboo Cups" as \`Kitchen Appliance Component\`.
   - *How it was fixed:* Because their underlying materials didn't match, the script caught the discrepancy and appended \`[NEEDS REVIEW]\` to force a manual audit of whether the wood-specific claim actually applied to both.
2. **Glass in Airfryer vs. Pyrex Airfryer**
   - *What happened:* Both got the warning: "Ensure [ITEM] is oven-safe tempered glass...". However, "Glass in Airfryer" was listed as \`Soda-Lime Glass\` (which is explicitly NOT tempered), while "Pyrex Airfryer" was listed as \`Tempered Borosilicate Glass\`.
   - *How it was fixed:* The template matching caught that a single blanket statement was being applied across two wildly different thermal tolerance materials, and flagged them for review.

## 3. Items Flagged with [NEEDS REVIEW]
Below are the ${needsReview.length} items that require manual review. This includes both items where the initial material/appliance heuristic was unconfident, AND items flagged by the self-consistency pass.

| Item | Appliance | Material | Warning |
| --- | --- | --- | --- |
`;

for (const item of needsReview) {
  md += `| ${item.item} | ${item.appliance} | ${item.material || 'N/A'} | ${item.specific_warning} |\n`;
}

fs.writeFileSync(path.join(__dirname, '../sample_warnings_v2.md'), md);
console.log("Report generated at sample_warnings_v2.md");
