const fs = require('fs');

console.log('=== STEP 8: FULL CATEGORY 2 INTEGRITY CHECK (ALL 20 ITEMS) ===\n');

// 1. Confirm end-to-end parseability of entire files
let esRaw, ptRaw, enRaw;
let itemsEs, itemsPt, itemsEn;

try {
  esRaw = fs.readFileSync('src/data/items.es.json', 'utf8');
  itemsEs = JSON.parse(esRaw);
  console.log('1. items.es.json is fully valid, parseable JSON end-to-end (Byte size:', esRaw.length, ')');
} catch (e) {
  console.error('FAIL: items.es.json failed to parse end-to-end:', e.message);
  process.exit(1);
}

try {
  ptRaw = fs.readFileSync('src/data/items.pt.json', 'utf8');
  itemsPt = JSON.parse(ptRaw);
  console.log('   items.pt.json is fully valid, parseable JSON end-to-end (Byte size:', ptRaw.length, ')');
} catch (e) {
  console.error('FAIL: items.pt.json failed to parse end-to-end:', e.message);
  process.exit(1);
}

try {
  enRaw = fs.readFileSync('src/data/items.json', 'utf8');
  itemsEn = JSON.parse(enRaw);
  console.log('   items.json (reference) is fully valid, parseable JSON end-to-end\n');
} catch (e) {
  console.error('FAIL: items.json failed to parse:', e.message);
  process.exit(1);
}

// 2. Confirm item count is exactly old count (676) -> new count (681), delta +5
const oldBaseline = 676;
const expectedCount = 681;
const esCount = itemsEs.length;
const ptCount = itemsPt.length;
const esDelta = esCount - oldBaseline;
const ptDelta = ptCount - oldBaseline;

console.log('2. Item Count Verification:');
console.log(`   items.es.json -> Old Count: ${oldBaseline}, New Count: ${esCount}, Delta: +${esDelta}`);
console.log(`   items.pt.json -> Old Count: ${oldBaseline}, New Count: ${ptCount}, Delta: +${ptDelta}`);

let countFailures = false;
if (esCount !== expectedCount || esDelta !== 5) {
  console.error(`   FAIL: items.es.json count mismatch! Expected ${expectedCount}, got ${esCount}`);
  countFailures = true;
}
if (ptCount !== expectedCount || ptDelta !== 5) {
  console.error(`   FAIL: items.pt.json count mismatch! Expected ${expectedCount}, got ${ptCount}`);
  countFailures = true;
}
if (countFailures) process.exit(1);
console.log('   ✓ Both files match exact expected count (681).\n');

// 3. Re-run strict validator across all 20 Category 2 items
const all20Slugs = [
  'apple', 'avocado', 'banana', 'blackberry', 'blueberry',
  'cantaloupe', 'cherry', 'grape', 'honeydew', 'lemon',
  'lime', 'mango', 'nectarine', 'orange', 'peach',
  'pineapple', 'plum', 'raspberry', 'strawberry', 'watermelon'
];

const freezerEn = itemsEn.filter(i => i.appliance === 'freezer');
const freezerSlugs = new Set(freezerEn.map(i => i.slug));

const requiredFields = [
  'item', 'appliance', 'slug', 'safe', 'shortAnswer', 'reason',
  'tips', 'warnings', 'faqs', 'relatedItems', 'material',
  'keyRisk', 'tip', 'learnMore'
];

let totalChecks = 0;
let failures = 0;

console.log('3. Strict validator pass across all 20 Category 2 items (fresh from disk):');

all20Slugs.forEach((slug, idx) => {
  const enItem = freezerEn.find(i => i.slug === slug);
  const esItem = itemsEs.find(i => i.slug === slug && i.appliance === 'freezer');
  const ptItem = itemsPt.find(i => i.slug === slug && i.appliance === 'freezer');

  console.log(`\n[${idx + 1}/20] Checking slug: '${slug}'`);

  if (!enItem) {
    console.error(`  FAIL: Missing canonical English freezer item for '${slug}'`);
    failures++;
    return;
  }
  if (!esItem) {
    console.error(`  FAIL: Missing ES freezer item on disk for '${slug}'`);
    failures++;
    return;
  }
  if (!ptItem) {
    console.error(`  FAIL: Missing PT freezer item on disk for '${slug}'`);
    failures++;
    return;
  }

  const langs = [
    { code: 'ES', obj: esItem },
    { code: 'PT', obj: ptItem }
  ];

  langs.forEach(({ code, obj }) => {
    // 14 fields
    let fieldsOk = true;
    requiredFields.forEach(field => {
      totalChecks++;
      if (obj[field] === undefined || obj[field] === null) {
        console.error(`  FAIL [${code}]: missing required field '${field}'`);
        failures++;
        fieldsOk = false;
      } else if (Array.isArray(obj[field])) {
        if (obj[field].length === 0) {
          console.error(`  FAIL [${code}]: field '${field}' is empty array`);
          failures++;
          fieldsOk = false;
        }
      } else if (typeof obj[field] === 'string') {
        if (obj[field].trim() === '') {
          console.error(`  FAIL [${code}]: field '${field}' is empty string`);
          failures++;
          fieldsOk = false;
        }
      }
    });
    if (fieldsOk) {
      console.log(`  [${code}] ✓ All 14 fields present and non-empty`);
    }

    // appliance, slug, safe
    totalChecks += 3;
    if (obj.appliance !== 'freezer') {
      console.error(`  FAIL [${code}]: appliance is '${obj.appliance}', expected 'freezer'`);
      failures++;
    }
    if (obj.slug !== slug) {
      console.error(`  FAIL [${code}]: slug is '${obj.slug}', expected '${slug}'`);
      failures++;
    }
    if (obj.safe !== enItem.safe) {
      console.error(`  FAIL [${code}]: safe is '${obj.safe}', expected '${enItem.safe}'`);
      failures++;
    }

    // FAQs
    totalChecks++;
    if (!Array.isArray(obj.faqs) || obj.faqs.length < 3) {
      console.error(`  FAIL [${code}]: faqs count is ${obj.faqs ? obj.faqs.length : 0}, expected >= 3`);
      failures++;
    } else {
      obj.faqs.forEach((faq, fIdx) => {
        totalChecks += 2;
        if (!faq.question || typeof faq.question !== 'string' || faq.question.trim() === '') {
          console.error(`  FAIL [${code}]: FAQ[${fIdx}] question is empty/missing`);
          failures++;
        }
        if (!faq.answer || typeof faq.answer !== 'string' || faq.answer.trim() === '') {
          console.error(`  FAIL [${code}]: FAQ[${fIdx}] answer is empty/missing`);
          failures++;
        }
      });
      console.log(`  [${code}] ✓ FAQs verified (${obj.faqs.length} Q&As)`);
    }

    // relatedItems
    totalChecks++;
    const enRels = JSON.stringify(enItem.relatedItems);
    const langRels = JSON.stringify(obj.relatedItems);
    if (enRels !== langRels) {
      console.error(`  FAIL [${code}]: relatedItems mismatch with EN! EN: ${enRels}, ${code}: ${langRels}`);
      failures++;
    } else {
      console.log(`  [${code}] ✓ relatedItems exactly match English canonical: [${obj.relatedItems.join(', ')}]`);
    }

    obj.relatedItems.forEach(r => {
      totalChecks++;
      if (!freezerSlugs.has(r)) {
        console.error(`  FAIL [${code}]: relatedItem '${r}' NOT found in items.json with appliance === 'freezer'`);
        failures++;
      }
      totalChecks++;
      if (r === slug) {
        console.error(`  FAIL [${code}]: self-referential slug '${r}'!`);
        failures++;
      }
    });
    console.log(`  [${code}] ✓ relatedItems existence & zero self-referential slugs verified`);
  });

  // Structural parity
  totalChecks += 2;
  const esTips = esItem.tips.length;
  const ptTips = ptItem.tips.length;
  if (esTips !== ptTips) {
    console.error(`  FAIL: Tips length mismatch between ES (${esTips}) and PT (${ptTips})`);
    failures++;
  } else {
    console.log(`  ✓ Structural parity: tips count matches (ES: ${esTips}, PT: ${ptTips})`);
  }

  const esWarn = esItem.warnings.length;
  const ptWarn = ptItem.warnings.length;
  if (esWarn !== ptWarn) {
    console.error(`  FAIL: Warnings length mismatch between ES (${esWarn}) and PT (${ptWarn})`);
    failures++;
  } else {
    console.log(`  ✓ Structural parity: warnings count matches (ES: ${esWarn}, PT: ${ptWarn})`);
  }
});

// 4. Full duplicate slug scan across ENTIRE freezer subset in both files
console.log('\n4. Full duplicate slug scan across ENTIRE freezer subset in both files:');

const freezerEsAll = itemsEs.filter(i => i.appliance === 'freezer');
const freezerPtAll = itemsPt.filter(i => i.appliance === 'freezer');

console.log(`   Total freezer items in items.es.json: ${freezerEsAll.length}`);
console.log(`   Total freezer items in items.pt.json: ${freezerPtAll.length}`);

const seenEs = new Map();
const duplicatesEs = [];
freezerEsAll.forEach(i => {
  if (seenEs.has(i.slug)) duplicatesEs.push(i.slug);
  seenEs.set(i.slug, (seenEs.get(i.slug) || 0) + 1);
});

const seenPt = new Map();
const duplicatesPt = [];
freezerPtAll.forEach(i => {
  if (seenPt.has(i.slug)) duplicatesPt.push(i.slug);
  seenPt.set(i.slug, (seenPt.get(i.slug) || 0) + 1);
});

console.log(`   Unique freezer slugs in items.es.json: ${seenEs.size}`);
console.log(`   Unique freezer slugs in items.pt.json: ${seenPt.size}`);

if (duplicatesEs.length > 0) {
  console.error('   FAIL: Duplicate freezer slugs in items.es.json:', duplicatesEs);
  failures++;
} else {
  console.log('   ✓ Zero duplicate freezer slugs in items.es.json');
}

if (duplicatesPt.length > 0) {
  console.error('   FAIL: Duplicate freezer slugs in items.pt.json:', duplicatesPt);
  failures++;
} else {
  console.log('   ✓ Zero duplicate freezer slugs in items.pt.json');
}

console.log('\n' + '='.repeat(60));
console.log(`SUMMARY: ${totalChecks} total checks executed across all 20 items.`);
console.log(`FAILURES: ${failures}`);
if (failures === 0) {
  console.log('STATUS: STEP 8 FULL CATEGORY 2 INTEGRITY CHECK PASSED WITH 0 FAILURES (100% CLEAN)');
} else {
  console.error('STATUS: STEP 8 INTEGRITY CHECK FAILED');
  process.exit(1);
}
