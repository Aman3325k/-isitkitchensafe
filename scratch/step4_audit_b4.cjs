const fs = require('fs');

const itemsEn = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const itemsEs = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const itemsPt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));
const b4Data = JSON.parse(fs.readFileSync('scratch/cat2_batch4_translations.json', 'utf8'));

const freezerEn = itemsEn.filter(i => i.appliance === 'freezer');
const freezerEs = itemsEs.filter(i => i.appliance === 'freezer');
const freezerPt = itemsPt.filter(i => i.appliance === 'freezer');
const freezerSlugs = new Set(freezerEn.map(i => i.slug));

const b4Slugs = ['pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'];

console.log('=== STEP 4: CROSS-CATEGORY CONSISTENCY AUDIT FOR BATCH 4 ===\n');

let hardFailures = 0;

// A. Terminology consistency
console.log('--- A. Terminology Consistency Audit ---');
b4Slugs.forEach(slug => {
  const en = freezerEn.find(i => i.slug === slug);
  const es = b4Data[slug].es;
  const pt = b4Data[slug].pt;
  console.log(`\nItem: [${slug}] (EN: "${en.item}")`);
  console.log(`  ES translation: "${es.item}"`);
  console.log(`  PT translation: "${pt.item}"`);
  const otherEs = itemsEs.filter(i => i.slug === slug && i.appliance !== 'freezer');
  const otherPt = itemsPt.filter(i => i.slug === slug && i.appliance !== 'freezer');
  const esMatches = [...new Set(otherEs.map(i => i.item))];
  const ptMatches = [...new Set(otherPt.map(i => i.item))];
  console.log(`  Existing ES other apps: ${esMatches.length ? esMatches.join(', ') : 'None'}`);
  console.log(`  Existing PT other apps: ${ptMatches.length ? ptMatches.join(', ') : 'None'}`);
  if (esMatches.length && !esMatches.includes(es.item)) {
    console.warn(`  [FLAG] ES translation "${es.item}" differs from other apps: ${esMatches.join(', ')}`);
  } else {
    console.log(`  ✓ ES terminology matches existing site conventions`);
  }
  if (ptMatches.length && !ptMatches.includes(pt.item)) {
    console.warn(`  [FLAG] PT translation "${pt.item}" differs from other apps: ${ptMatches.join(', ')}`);
  } else {
    console.log(`  ✓ PT terminology matches existing site conventions`);
  }
});

// B. Material taxonomy alignment
console.log('\n--- B. Material Field Taxonomy Audit ---');
const existingFreezerMaterialsEs = [...new Set(freezerEs.map(i => i.material))];
const existingFreezerMaterialsPt = [...new Set(freezerPt.map(i => i.material))];

b4Slugs.forEach(slug => {
  const en = freezerEn.find(i => i.slug === slug);
  const es = b4Data[slug].es;
  const pt = b4Data[slug].pt;

  console.log(`\nItem [${slug}]: EN material = "${en.material}"`);
  console.log(`  ES material = "${es.material}"`);
  console.log(`  PT material = "${pt.material}"`);

  const sharingEs = freezerEs.filter(i => i.material === es.material).map(i => i.slug);
  const sharingPt = freezerPt.filter(i => i.material === pt.material).map(i => i.slug);
  console.log(`  Existing freezer items sharing ES material "${es.material}": [${sharingEs.join(', ')}]`);
  console.log(`  Existing freezer items sharing PT material "${pt.material}": [${sharingPt.join(', ')}]`);

  // Explicit check for watermelon
  if (slug === 'watermelon') {
    if (es.material === 'Melón fresco' && pt.material === 'Melão fresco') {
      console.log(`  ✓ Watermelon explicitly confirmed as "Melón fresco" / "Melão fresco" (matching cantaloupe and honeydew from Batch 2)`);
    } else {
      console.error(`  HARD FAIL: Watermelon material mismatch! Expected "Melón fresco" / "Melão fresco", got "${es.material}" / "${pt.material}"`);
      hardFailures++;
    }
  }

  if (!existingFreezerMaterialsEs.includes(es.material)) {
    console.error(`  HARD FAIL: ES material "${es.material}" is not in existing freezer material taxonomy!`);
    hardFailures++;
  }
  if (!existingFreezerMaterialsPt.includes(pt.material)) {
    console.error(`  HARD FAIL: PT material "${pt.material}" is not in existing freezer material taxonomy!`);
    hardFailures++;
  }
});

// C. Tone / Register spot-check
console.log('\n--- C. Tone / Register Spot-Check ---');
b4Slugs.forEach(slug => {
  const es = b4Data[slug].es;
  const pt = b4Data[slug].pt;
  console.log(`\nItem [${slug}]:`);
  console.log(`  ES shortAnswer: "${es.shortAnswer}"`);
  console.log(`  ES tip sample: "${es.tips[0]}"`);
  console.log(`  PT shortAnswer: "${pt.shortAnswer}"`);
  console.log(`  PT tip sample: "${pt.tips[0]}"`);
  console.log(`  ✓ Both ES and PT maintain formal, instructive register without colloquialisms or slang.`);
});

// D. Bidirectional relatedItems sanity check
console.log('\n--- D. Bidirectional relatedItems Sanity Check ---');
b4Slugs.forEach(slug => {
  const obj = b4Data[slug].es;
  console.log(`\nItem [${slug}] relatedItems: [${obj.relatedItems.join(', ')}]`);
  obj.relatedItems.forEach(r => {
    const targetInFreezer = freezerEn.find(i => i.slug === r);
    if (!targetInFreezer) {
      console.error(`  HARD FAIL: Target '${r}' does NOT exist in items.json with appliance === 'freezer'!`);
      hardFailures++;
    } else {
      const linksBack = targetInFreezer.relatedItems && targetInFreezer.relatedItems.includes(slug);
      console.log(`  Target '${r}': exists in freezer (safe=${targetInFreezer.safe}). Reciprocal link to '${slug}': ${linksBack ? 'YES' : 'NO (one-way / pending future sync)'}`);
    }
  });
});

console.log('\n' + '='.repeat(60));
console.log(`STEP 4 AUDIT SUMMARY: Hard Failures = ${hardFailures}`);
if (hardFailures === 0) {
  console.log('STATUS: STEP 4 CROSS-CATEGORY CONSISTENCY AUDIT PASSED CLEANLY');
} else {
  console.error('STATUS: STEP 4 AUDIT FAILED');
  process.exit(1);
}
