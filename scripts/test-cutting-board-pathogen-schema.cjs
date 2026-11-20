const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WOODEN CUTTING BOARD PATHOGEN MODELER SCHEMA & AUDIT TEST SUITE');
console.log('================================================================\n');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`  [FAIL] ${testName}`);
    failedTests++;
  }
}

// 1. Astro template files check
console.log('--- 1. Testing Astro Template & Schema Injection Configuration ---');
const enPagePath = path.join(__dirname, '../src/pages/tools/wooden-cutting-board-pathogen-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/wooden-cutting-board-pathogen-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/WoodenCuttingBoardPathogenModeler.astro');

assert(fs.existsSync(enPagePath), 'EN Page exists on disk');
assert(fs.existsSync(langPagePath), 'Localized Page exists on disk');
assert(fs.existsSync(componentPath), 'Component exists on disk');

const enContent = fs.readFileSync(enPagePath, 'utf8');
const langContent = fs.readFileSync(langPagePath, 'utf8');

assert(enContent.includes('excludeFaqSchema={true}'), 'EN Page: excludeFaqSchema={true} configured');
assert(enContent.includes('excludeBreadcrumbSchema={true}'), 'EN Page: excludeBreadcrumbSchema={true} configured');
assert(enContent.includes('slot="head"'), 'EN Page: slot="head" used for custom schema injection');
assert(langContent.includes('excludeFaqSchema={true}'), 'Localized Page: excludeFaqSchema={true} configured');
assert(langContent.includes('excludeBreadcrumbSchema={true}'), 'Localized Page: excludeBreadcrumbSchema={true} configured');
assert(langContent.includes('slot="head"'), 'Localized Page: slot="head" used for custom schema injection');

// 2. Data file check
console.log('\n--- 2. Testing Data File Structure & Microbiological Parameters ---');
const dataPath = path.join(__dirname, '../src/data/wooden-cutting-board-pathogen-data.json');
assert(fs.existsSync(dataPath), 'Data JSON file exists');
const rawData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

assert(rawData.boardMaterials?.length >= 5, 'Contains at least 5 board materials');
assert(rawData.pathogens?.length >= 5, 'Contains at least 5 pathogen species');
assert(rawData.boardWearConditions?.length >= 4, 'Contains at least 4 wear conditions');
assert(rawData.sanitizationProtocols?.length >= 5, 'Contains at least 5 sanitization protocols');

// 3. Consumer Tools Allowlist check
console.log('\n--- 3. Testing Consumer Tools Allowlist (60 Tools) ---');
const allowlistPath = path.join(__dirname, '../src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
assert(allowlist.length === 60, `Allowlist has exactly 60 tools (found ${allowlist.length})`);
assert(allowlist.includes('wooden-cutting-board-pathogen-modeler'), 'Allowlist contains wooden-cutting-board-pathogen-modeler');

// 4. Schema & E-E-A-T Citation Checks
console.log('\n--- 4. Testing Schema.org & E-E-A-T Citations ---');
assert(enContent.includes('Marcus Vance'), 'EN Page: Author Marcus Vance included');
assert(enContent.includes('Dr. Elena Rostova'), 'EN Page: Reviewer Dr. Elena Rostova included');
assert(enContent.includes('Dean O. Cliver'), 'EN Page: Landmark Cliver study cited');
assert(enContent.includes('FDA Food Code 2022: Section 4-101.17'), 'EN Page: FDA Food Code regulation cited');

assert(langContent.includes('Marcus Vance'), 'Localized Page: Author Marcus Vance included');
assert(langContent.includes('Elena Rostova'), 'Localized Page: Reviewer Elena Rostova included');
assert(langContent.includes('Dean O. Cliver'), 'Localized Page: Landmark Cliver study cited');

// 5. RSS and llms.txt validation
console.log('\n--- 5. Testing Discovery & Syndication Artifacts ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/wooden-cutting-board-pathogen-modeler/'), 'RSS feed includes wooden-cutting-board-pathogen-modeler');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('wooden-cutting-board-pathogen-modeler'), 'llms.txt includes wooden-cutting-board-pathogen-modeler');

console.log('\n================================================================');
console.log(`SUMMARY: ${passedTests} passed, ${failedTests} failed out of ${passedTests + failedTests} tests.`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('ALL WOODEN CUTTING BOARD SCHEMA & AUDIT TESTS PASSED! ✨\n');
}
