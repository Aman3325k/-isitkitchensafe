const fs = require('fs');
const { execSync } = require('child_process');

const items = JSON.parse(fs.readFileSync('src/data/items.json', 'utf8'));
const freezerItems = items.filter(i => i.appliance === 'freezer');

const targetSlugs = [
  'asparagus', 'bell-pepper', 'brussels-sprouts', 'carrot', 'corn',
  'eggplant', 'garlic', 'ginger', 'green-beans', 'kale',
  'mushroom', 'onion', 'peas', 'spinach', 'sweet-potato', 'yellow-squash'
];

console.log('=== CATEGORY 3 FAQ EXPANSION VALIDATOR ===');
let totalChecks = 0;
let failures = 0;

function check(desc, condition, detail = '') {
  totalChecks++;
  if (condition) {
    console.log(`  [PASS] ${desc}`);
  } else {
    console.log(`  [FAIL] ${desc} - ${detail}`);
    failures++;
  }
}

// 1. Check all 16 items have exactly 3 FAQs
console.log('\n--- 1. FAQ COUNT & STRUCTURE (16 ITEMS) ---');
const allQuestions = new Map(); // question -> slug
const allAnswers = new Map();   // answer -> slug

targetSlugs.forEach((slug, idx) => {
  const item = freezerItems.find(i => i.slug === slug);
  check(`[${idx + 1}/16] ${slug}: item exists in freezer`, !!item);
  if (!item) return;

  const faqs = item.faqs || [];
  check(`${slug}: exactly 3 FAQs`, faqs.length === 3, `got ${faqs.length}`);

  faqs.forEach((faq, fIdx) => {
    const q = (faq.question || '').trim();
    const a = (faq.answer || '').trim();

    check(`${slug} FAQ ${fIdx + 1}: question non-empty`, q.length > 0);
    check(`${slug} FAQ ${fIdx + 1}: answer non-empty`, a.length > 0);

    // Uniqueness checks
    if (allQuestions.has(q)) {
      check(`${slug} FAQ ${fIdx + 1}: question is unique`, false, `duplicate of ${allQuestions.get(q)}: "${q}"`);
    } else {
      check(`${slug} FAQ ${fIdx + 1}: question is unique`, true);
      allQuestions.set(q, slug);
    }

    if (allAnswers.has(a)) {
      check(`${slug} FAQ ${fIdx + 1}: answer is unique`, false, `duplicate of ${allAnswers.get(a)}`);
    } else {
      check(`${slug} FAQ ${fIdx + 1}: answer is unique`, true);
      allAnswers.set(a, slug);
    }
  });
});

console.log('\n--- 2. CROSS-ITEM UNIQUENESS SUMMARY ---');
check('Total unique questions is 48', allQuestions.size === 48, `got ${allQuestions.size}`);
check('Total unique answers is 48', allAnswers.size === 48, `got ${allAnswers.size}`);

// 3. Verify git diff shows ONLY faqs modified for these 16 items and nothing else
console.log('\n--- 3. GIT DIFF INSPECTION (NO OTHER FIELDS TOUCHED) ---');
const diffOutput = execSync('git diff -U0 src/data/items.json', { encoding: 'utf8' });
const lines = diffOutput.split('\n');

// Check what keys are modified in diff
const modifiedPropertyLines = lines.filter(l => (l.startsWith('+') || l.startsWith('-')) && !l.startsWith('+++') && !l.startsWith('---'));
const nonFaqModifications = modifiedPropertyLines.filter(l => {
  const trimmed = l.slice(1).trim();
  if (trimmed === '' || trimmed === '}' || trimmed === '},' || trimmed === ']' || trimmed === '],' || trimmed === '[' || trimmed === '{') return false;
  if (trimmed.startsWith('"faqs":') || trimmed.startsWith('"question":') || trimmed.startsWith('"answer":')) return false;
  return true;
});

check('Git diff on items.json contains only faqs property changes', nonFaqModifications.length === 0, `unexpected modifications: ${nonFaqModifications.slice(0, 5).join('; ')}`);

// Confirm no other tracked files changed
const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
const trackedChanges = statusOutput.split('\n').filter(l => l.trim() && !l.includes('?? scratch/'));
check('Only src/data/items.json is modified in working tree', trackedChanges.length === 1 && trackedChanges[0].includes('src/data/items.json'), `got: ${trackedChanges.join('; ')}`);

console.log('\n========================================');
console.log(`VALIDATION COMPLETE: ${totalChecks} checks run, ${failures} failures`);
console.log('========================================');

if (failures > 0) {
  process.exit(1);
}
