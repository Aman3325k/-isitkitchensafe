const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('MICROWAVE STEAM COVER MODELER SCHEMA & AUDIT TEST SUITE (WAVE 36)');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/microwave-plastic-steam-cover-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/microwave-plastic-steam-cover-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/MicrowavePlasticSteamCoverModeler.astro');

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
console.log('\n--- 2. Testing Data File Structure & Chemical Migration Parameters ---');
const dataPath = path.join(__dirname, '../src/data/microwave-plastic-steam-cover-data.json');
assert(fs.existsSync(dataPath), 'Data JSON file exists');
const rawData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

assert(rawData.coverMaterials?.length >= 5, 'Contains at least 5 cover materials');
assert(rawData.foodMatrices?.length >= 4, 'Contains at least 4 food matrices');
assert(rawData.steamVentStates?.length >= 3, 'Contains at least 3 steam vent states');
assert(rawData.wearLevels?.length >= 3, 'Contains at least 3 wear levels');
assert(rawData.regulatoryThresholds?.length >= 4, 'Contains at least 4 regulatory thresholds');

// 3. Consumer Tools Allowlist check
console.log('\n--- 3. Testing Consumer Tools Allowlist (62 Tools) ---');
const allowlistPath = path.join(__dirname, '../src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
assert(allowlist.length === 62, `Allowlist has exactly 62 tools (found ${allowlist.length})`);
assert(allowlist.includes('microwave-plastic-steam-cover-modeler'), 'Allowlist contains microwave-plastic-steam-cover-modeler');

// 4. Schema & E-E-A-T Citation Checks
console.log('\n--- 4. Testing Schema.org & E-E-A-T Citations ---');
assert(enContent.includes('Marcus Vance'), 'EN Page: Author Marcus Vance included');
assert(enContent.includes('Dr. Elena Rostova'), 'EN Page: Reviewer Dr. Elena Rostova included');
assert(enContent.includes('Regulation (EU) No 10/2011'), 'EN Page: EU Food Contact Regulation cited');
assert(enContent.includes('European Food Safety Authority'), 'EN Page: EFSA BPA Opinion cited');
assert(enContent.includes('21 CFR 177.1520'), 'EN Page: FDA Olefin Polymers regulation cited');
assert(enContent.includes('German Federal Institute for Risk Assessment'), 'EN Page: BfR Assessment cited');

assert(langContent.includes('Marcus Vance'), 'Localized Page: Author Marcus Vance included');
assert(langContent.includes('Elena Rostova'), 'Localized Page: Reviewer Elena Rostova included');
assert(langContent.includes('Regulation (EU) No 10/2011'), 'Localized Page: EU Regulation cited');
assert(langContent.includes('European Food Safety Authority'), 'Localized Page: EFSA cited');

// 5. RSS and llms.txt validation
console.log('\n--- 5. Testing Discovery & Syndication Artifacts ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/microwave-plastic-steam-cover-modeler/'), 'RSS feed includes microwave-plastic-steam-cover-modeler');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('microwave-plastic-steam-cover-modeler'), 'llms.txt includes microwave-plastic-steam-cover-modeler');

// 6. Tools Index Hub Validation
console.log('\n--- 6. Testing Tools Index Hub Integration ---');
const toolsIndexPath = path.join(__dirname, '../src/pages/tools/index.astro');
const toolsIndexContent = fs.readFileSync(toolsIndexPath, 'utf8');
assert(toolsIndexContent.includes("slug: 'microwave-plastic-steam-cover-modeler'"), 'EN Tools Index includes microwave-plastic-steam-cover-modeler');

const langToolsIndexPath = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langToolsIndexContent = fs.readFileSync(langToolsIndexPath, 'utf8');
assert(langToolsIndexContent.includes("slug: 'microwave-plastic-steam-cover-modeler'"), 'Localized Tools Index includes microwave-plastic-steam-cover-modeler');

console.log('\n================================================================');
console.log(`SUMMARY: ${passedTests} passed, ${failedTests} failed out of ${passedTests + failedTests} tests.`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('ALL MICROWAVE STEAM COVER MODELER SCHEMA & AUDIT TESTS PASSED! ✨\n');
}
