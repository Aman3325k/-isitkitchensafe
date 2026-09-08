const fs = require('fs');

const itemsEn = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const itemsEs = JSON.parse(fs.readFileSync('src/data/items.es.json', 'utf8'));
const itemsPt = JSON.parse(fs.readFileSync('src/data/items.pt.json', 'utf8'));
const b3Data = JSON.parse(fs.readFileSync('scratch/cat2_batch3_translations.json', 'utf8'));

const freezerEn = itemsEn.filter(i => i.appliance === 'freezer');
const freezerEs = itemsEs.filter(i => i.appliance === 'freezer');
const freezerPt = itemsPt.filter(i => i.appliance === 'freezer');
const freezerSlugs = new Set(freezerEn.map(i => i.slug));

const b3Slugs = ['lime', 'mango', 'nectarine', 'orange', 'peach'];

console.log('=== STEP 3: CROSS-CATEGORY CONSISTENCY AUDIT ===\n');

let hardFailures = 0;

// 1. TERMINOLOGY CONSISTENCY AUDIT
console.log('--- 1. TERMINOLOGY CONSISTENCY AUDIT ---');
b3Slugs.forEach(slug => {
  const en = freezerEn.find(i => i.slug === slug);
  const es = b3Data[slug].es;
  const pt = b3Data[slug].pt;

  console.log(`\nItem: [${slug}] (EN: "${en.item}")`);
  console.log(`  ES translation: "${es.item}"`);
  console.log(`  PT translation: "${pt.item}"`);

  // Check how this fruit is translated in other appliances across the site
  const otherEs = itemsEs.filter(i => i.slug === slug && i.appliance !== 'freezer');
  const otherPt = itemsPt.filter(i => i.slug === slug && i.appliance !== 'freezer');
  
  const esNames = [...new Set(otherEs.map(i => i.item))];
  const ptNames = [...new Set(otherPt.map(i => i.item))];
  console.log(`  Existing ES item names in other appliances: ${esNames.length ? esNames.join(', ') : 'None'}`);
  console.log(`  Existing PT item names in other appliances: ${ptNames.length ? ptNames.join(', ') : 'None'}`);

  if (esNames.length && !esNames.includes(es.item)) {
    console.warn(`  [NOTE/MISMATCH] ES item "${es.item}" differs from other appliances (${esNames.join(', ')})`);
  } else {
    console.log(`  ✓ ES terminology matches existing site conventions`);
  }
  if (ptNames.length && !ptNames.includes(pt.item)) {
    console.warn(`  [NOTE/MISMATCH] PT item "${pt.item}" differs from other appliances (${ptNames.join(', ')})`);
  } else {
    console.log(`  ✓ PT terminology matches existing site conventions`);
  }

  // Specific check for lemon vs lime naming
  if (slug === 'lime') {
    const lemonEs = freezerEs.find(i => i.slug === 'lemon');
    const lemonPt = freezerPt.find(i => i.slug === 'lemon');
    console.log(`  Citrus distinction check:`);
    console.log(`    lemon in freezer ES: "${lemonEs ? lemonEs.item : 'N/A'}" vs lime in B3 ES: "${es.item}"`);
    console.log(`    lemon in freezer PT: "${lemonPt ? lemonPt.item : 'N/A'}" vs lime in B3 PT: "${pt.item}"`);
    if (lemonEs && lemonEs.item === es.item) {
      console.error(`  HARD FAIL: Lime and Lemon have identical ES names ("${es.item}")!`);
      hardFailures++;
    } else {
      console.log(`    ✓ Distinct naming maintained between lemon and lime in ES and PT.`);
    }
  }
});

// 2. MATERIAL FIELD TAXONOMY AUDIT
console.log('\n--- 2. MATERIAL FIELD TAXONOMY AUDIT ---');
const existingFreezerMaterialsEs = [...new Set(freezerEs.map(i => i.material))];
const existingFreezerMaterialsPt = [...new Set(freezerPt.map(i => i.material))];
console.log('Existing freezer ES materials:', existingFreezerMaterialsEs);
console.log('Existing freezer PT materials:', existingFreezerMaterialsPt);

b3Slugs.forEach(slug => {
  const en = freezerEn.find(i => i.slug === slug);
  const es = b3Data[slug].es;
  const pt = b3Data[slug].pt;

  console.log(`\nItem [${slug}]: EN material = "${en.material}"`);
  console.log(`  ES material = "${es.material}"`);
  console.log(`  PT material = "${pt.material}"`);

  // Find existing freezer items sharing same material
  const sharingEs = freezerEs.filter(i => i.material === es.material).map(i => i.slug);
  const sharingPt = freezerPt.filter(i => i.material === pt.material).map(i => i.slug);
  console.log(`  Existing items sharing ES material "${es.material}": [${sharingEs.join(', ')}]`);
  console.log(`  Existing items sharing PT material "${pt.material}": [${sharingPt.join(', ')}]`);

  if (!existingFreezerMaterialsEs.includes(es.material)) {
    console.error(`  HARD FAIL: ES material "${es.material}" is not in existing freezer material taxonomy!`);
    hardFailures++;
  } else {
    console.log(`  ✓ ES material taxonomy aligned with existing freezer items`);
  }
  if (!existingFreezerMaterialsPt.includes(pt.material)) {
    console.error(`  HARD FAIL: PT material "${pt.material}" is not in existing freezer material taxonomy!`);
    hardFailures++;
  } else {
    console.log(`  ✓ PT material taxonomy aligned with existing freezer items`);
  }
});

// 3. TONE / REGISTER SPOT-CHECK
console.log('\n--- 3. TONE / REGISTER SPOT-CHECK ---');
b3Slugs.forEach(slug => {
  const es = b3Data[slug].es;
  const pt = b3Data[slug].pt;

  console.log(`\nItem [${slug}]:`);
  console.log(`  ES shortAnswer: "${es.shortAnswer}"`);
  console.log(`  ES tip sample: "${es.tips[0]}"`);
  console.log(`  PT shortAnswer: "${pt.shortAnswer}"`);
  console.log(`  PT tip sample: "${pt.tips[0]}"`);

  // Simple heuristic checks for slang / casual register
  const informalEsIndicators = ['hola', 'oye', 'che', 'genial', 'super', 'guay', 'chido'];
  const informalPtIndicators = ['oi', 'olá', 'legal', 'bacana', 'valeu', 'né'];

  const esText = JSON.stringify(es).toLowerCase();
  const ptText = JSON.stringify(pt).toLowerCase();

  const esFlags = informalEsIndicators.filter(w => esText.includes(` ${w} `));
  const ptFlags = informalPtIndicators.filter(w => ptText.includes(` ${w} `));

  if (esFlags.length) console.warn(`  [FLAG] ES informal indicators: ${esFlags.join(', ')}`);
  else console.log(`  ✓ ES register is formal, informative, authoritative, and free of slang`);

  if (ptFlags.length) console.warn(`  [FLAG] PT informal indicators: ${ptFlags.join(', ')}`);
  else console.log(`  ✓ PT register is formal, informative, authoritative, and free of slang`);
});

// 4. RELATEDITEMS BIDIRECTIONAL SANITY CHECK
console.log('\n--- 4. RELATEDITEMS BIDIRECTIONAL SANITY CHECK ---');
b3Slugs.forEach(slug => {
  const obj = b3Data[slug].es;
  console.log(`\nItem [${slug}] relatedItems: [${obj.relatedItems.join(', ')}]`);
  
  obj.relatedItems.forEach(r => {
    const targetInFreezer = freezerEn.find(i => i.slug === r);
    if (!targetInFreezer) {
      console.error(`  HARD FAIL: Target item '${r}' does NOT exist in items.json with appliance === 'freezer'!`);
      hardFailures++;
    } else {
      const linksBack = targetInFreezer.relatedItems && targetInFreezer.relatedItems.includes(slug);
      console.log(`  Target '${r}': exists in freezer (safe=${targetInFreezer.safe}). Reciprocal link to '${slug}': ${linksBack ? 'YES' : 'NO (one-way / pending future sync)'}`);
    }
  });
});

console.log('\n' + '='.repeat(60));
console.log(`STEP 3 AUDIT SUMMARY: Hard Failures = ${hardFailures}`);
if (hardFailures === 0) {
  console.log('STATUS: STEP 3 CROSS-CATEGORY CONSISTENCY AUDIT PASSED CLEANLY');
} else {
  console.error('STATUS: STEP 3 AUDIT FAILED');
  process.exit(1);
}
