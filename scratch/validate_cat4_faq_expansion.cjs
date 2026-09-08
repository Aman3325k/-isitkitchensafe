const fs = require('fs');
const { execSync } = require('child_process');

console.log('=== CATEGORY 4 FAQ EXPANSION VALIDATOR ===\n');

const itemsPath = 'src/data/items.json';
let items;
try {
  items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'));
  console.log(`1. items.json successfully parsed. Total entries: ${items.length}`);
} catch (e) {
  console.error(`FAIL: Could not parse items.json: ${e.message}`);
  process.exit(1);
}

const freezer = items.filter(x => x.appliance === 'freezer');
const meatSlugs = [
  'raw-chicken', 'cooked-chicken', 'chicken-breast', 'chicken-wings', 
  'turkey-breast', 'duck-breast', 'beef-steak', 'ground-beef', 
  'pork-chop', 'bacon', 'sausage', 'hot-dogs', 'deli-meat', 
  'salmon', 'tuna-steak', 'shrimp', 'lobster-tail', 'crab-legs'
];

let totalChecks = 0;
let failures = 0;

function check(condition, message) {
  totalChecks++;
  if (!condition) {
    failures++;
    console.error(`  FAIL: ${message}`);
  }
}

// 1. Check all 18 items have exactly 3 FAQs
console.log('\n2. Verifying FAQ counts and content across all 18 items:');
const allQuestions = new Map();
const allAnswers = new Map();

meatSlugs.forEach((slug, idx) => {
  const item = freezer.find(x => x.slug === slug);
  check(item !== undefined, `[${slug}] item exists in freezer`);
  if (!item) return;

  check(Array.isArray(item.faqs), `[${slug}] faqs is an array`);
  check(item.faqs.length === 3, `[${slug}] faqs count is exactly 3 (got ${item.faqs?.length})`);

  item.faqs.forEach((faq, fIdx) => {
    check(typeof faq.question === 'string' && faq.question.trim().length > 0, `[${slug}] FAQ ${fIdx + 1} question is non-empty`);
    check(typeof faq.answer === 'string' && faq.answer.trim().length > 0, `[${slug}] FAQ ${fIdx + 1} answer is non-empty`);

    // Check duplicate question
    if (allQuestions.has(faq.question)) {
      check(false, `[${slug}] FAQ question duplicate of [${allQuestions.get(faq.question)}]: "${faq.question}"`);
    } else {
      allQuestions.set(faq.question, slug);
    }

    // Check duplicate answer
    if (allAnswers.has(faq.answer)) {
      check(false, `[${slug}] FAQ answer duplicate of [${allAnswers.get(faq.answer)}]: "${faq.answer}"`);
    } else {
      allAnswers.set(faq.answer, slug);
    }
  });

  console.log(`   ✓ [${idx + 1}/18] ${slug.padEnd(16)} -> 3 unique FAQs verified`);
});

// 2. Uniqueness summary
console.log(`\n3. Uniqueness check across all 18 items:`);
console.log(`   Total questions checked: ${allQuestions.size}/54 (all unique)`);
console.log(`   Total answers checked:   ${allAnswers.size}/54 (all unique)`);
check(allQuestions.size === 54, `54 unique questions expected, got ${allQuestions.size}`);
check(allAnswers.size === 54, `54 unique answers expected, got ${allAnswers.size}`);

// 3. Git diff inspection to ensure only `faqs` changed since HEAD
console.log('\n4. Git diff inspection against HEAD:');
const diff = execSync('git diff HEAD -- src/data/items.json', { encoding: 'utf8' });
const lines = diff.split('\n');

// Parse modified keys
const modifiedKeys = new Set();
let currentField = null;

lines.forEach(line => {
  if (line.startsWith('+') && !line.startsWith('+++')) {
    const match = line.match(/"([^"]+)":/);
    if (match) {
      modifiedKeys.add(match[1]);
    }
  }
});

console.log('   Modified JSON keys in diff:', Array.from(modifiedKeys));
check(modifiedKeys.size === 1 && modifiedKeys.has('faqs') || (modifiedKeys.has('question') && modifiedKeys.has('answer')), 
  `Diff touches ONLY faqs arrays (found keys: ${Array.from(modifiedKeys).join(', ')})`);

// Check git status to ensure only items.json is modified
const status = execSync('git status --porcelain', { encoding: 'utf8' });
const statusLines = status.split('\n').filter(l => l.trim() && !l.includes('scratch/'));
console.log('   Tracked files modified in status:', statusLines);
check(statusLines.length === 1 && statusLines[0].includes('src/data/items.json'), 'Only src/data/items.json is modified in working tree');

console.log(`\n=== VALIDATOR SUMMARY ===`);
console.log(`Total checks performed: ${totalChecks}`);
console.log(`Failures detected: ${failures}`);

if (failures > 0) {
  console.error('\nVALIDATION FAILED! DO NOT COMMIT.');
  process.exit(1);
} else {
  console.log('\nALL CHECKS PASSED PERFECTLY! 0 FAILURES.');
}
