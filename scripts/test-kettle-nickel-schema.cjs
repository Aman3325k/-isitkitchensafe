const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('ELECTRIC KETTLE NICKEL MODELER SCHEMA & AUDIT TEST SUITE (WAVE 35)');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/electric-kettle-nickel-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/electric-kettle-nickel-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/ElectricKettleNickelModeler.astro');

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
console.log('\n--- 2. Testing Data File Structure & Metallurgy Parameters ---');
const dataPath = path.join(__dirname, '../src/data/electric-kettle-nickel-data.json');
assert(fs.existsSync(dataPath), 'Data JSON file exists');
const rawData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

assert(rawData.kettleMaterials?.length >= 5, 'Contains at least 5 kettle materials');
assert(rawData.waterHardnessTiers?.length >= 4, 'Contains at least 4 water hardness tiers');
assert(rawData.waterDwellTimes?.length >= 4, 'Contains at least 4 stagnation dwell times');
assert(rawData.descalingProtocols?.length >= 4, 'Contains at least 4 descaling protocols');

// 3. Consumer Tools Allowlist check
console.log('\n--- 3. Testing Consumer Tools Allowlist (61 Tools) ---');
const allowlistPath = path.join(__dirname, '../src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
assert(allowlist.length >= 61, `Allowlist has at least 61 tools (found ${allowlist.length})`);
assert(allowlist.includes('electric-kettle-nickel-modeler'), 'Allowlist contains electric-kettle-nickel-modeler');

// 4. Schema & E-E-A-T Citation Checks
console.log('\n--- 4. Testing Schema.org & E-E-A-T Citations ---');
assert(enContent.includes('Marcus Vance'), 'EN Page: Author Marcus Vance included');
assert(enContent.includes('Dr. Elena Rostova'), 'EN Page: Reviewer Dr. Elena Rostova included');
assert(enContent.includes('World Health Organization'), 'EN Page: WHO Drinking Water Guidelines cited');
assert(enContent.includes('Directive (EU) 2020/2184'), 'EN Page: EU Drinking Water Directive cited');
assert(enContent.includes('CM/Res(2013)9'), 'EN Page: Council of Europe Resolution cited');
assert(enContent.includes('German Federal Institute for Risk Assessment'), 'EN Page: BfR Opinion cited');

assert(langContent.includes('Marcus Vance'), 'Localized Page: Author Marcus Vance included');
assert(langContent.includes('Elena Rostova'), 'Localized Page: Reviewer Elena Rostova included');
assert(langContent.includes('World Health Organization'), 'Localized Page: WHO Guidelines cited');

// 5. RSS and llms.txt validation
console.log('\n--- 5. Testing Discovery & Syndication Artifacts ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/electric-kettle-nickel-modeler/'), 'RSS feed includes electric-kettle-nickel-modeler');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('electric-kettle-nickel-modeler'), 'llms.txt includes electric-kettle-nickel-modeler');

// 6. Tools Index Hub Validation
console.log('\n--- 6. Testing Tools Index Hub Integration ---');
const toolsIndexPath = path.join(__dirname, '../src/pages/tools/index.astro');
const toolsIndexContent = fs.readFileSync(toolsIndexPath, 'utf8');
assert(toolsIndexContent.includes("slug: 'electric-kettle-nickel-modeler'"), 'EN Tools Index includes electric-kettle-nickel-modeler');

const langToolsIndexPath = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langToolsIndexContent = fs.readFileSync(langToolsIndexPath, 'utf8');
assert(langToolsIndexContent.includes("slug: 'electric-kettle-nickel-modeler'"), 'Localized Tools Index includes electric-kettle-nickel-modeler');

console.log('\n================================================================');
console.log(`SUMMARY: ${passedTests} passed, ${failedTests} failed out of ${passedTests + failedTests} tests.`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('ALL ELECTRIC KETTLE NICKEL MODELER SCHEMA & AUDIT TESTS PASSED! ✨\n');
}
