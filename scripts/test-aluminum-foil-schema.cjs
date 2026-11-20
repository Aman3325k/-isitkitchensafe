const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('ALUMINUM FOIL ACIDIC LEACHING SIMULATOR SCHEMA & AUDIT TEST SUITE (WAVE 38)');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/aluminum-foil-acidic-leaching-simulator.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/aluminum-foil-acidic-leaching-simulator.astro');
const componentPath = path.join(__dirname, '../src/components/AluminumFoilAcidicLeachingSimulator.astro');

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
const dataPath = path.join(__dirname, '../src/data/aluminum-foil-acidic-leaching-data.json');
assert(fs.existsSync(dataPath), 'Data JSON file exists');
const rawData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

assert(rawData.cookwareFormats?.length >= 5, 'Contains at least 5 cookware formats');
assert(rawData.acidicFoodMatrices?.length >= 5, 'Contains at least 5 acidic food matrices');
assert(rawData.cookingThermalProfiles?.length >= 4, 'Contains at least 4 cooking thermal profiles');
assert(rawData.galvanicCoupling?.length >= 3, 'Contains at least 3 galvanic coupling profiles');
assert(rawData.consumerProfiles?.length >= 4, 'Contains at least 4 consumer profiles');

// 3. Consumer Tools Allowlist check
console.log('\n--- 3. Testing Consumer Tools Allowlist (63 Tools) ---');
const allowlistPath = path.join(__dirname, '../src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
assert(allowlist.length === 63, `Allowlist has exactly 63 tools (found ${allowlist.length})`);
assert(allowlist.includes('aluminum-foil-acidic-leaching-simulator'), 'Allowlist contains aluminum-foil-acidic-leaching-simulator');

// 4. Schema & E-E-A-T Citation Checks
console.log('\n--- 4. Testing Schema.org & E-E-A-T Citations ---');
assert(enContent.includes('Marcus Vance'), 'EN Page: Author Marcus Vance included');
assert(enContent.includes('Dr. Elena Rostova'), 'EN Page: Reviewer Dr. Elena Rostova included');
assert(enContent.includes('CM/Res(2013)9'), 'EN Page: Council of Europe Resolution cited');
assert(enContent.includes('European Food Safety Authority'), 'EN Page: EFSA AFC Opinion cited');
assert(enContent.includes('21 CFR 175.300'), 'EN Page: FDA food contact coatings regulation cited');
assert(enContent.includes('German Federal Institute for Risk Assessment'), 'EN Page: BfR Assessment cited');

assert(langContent.includes('Marcus Vance'), 'Localized Page: Author Marcus Vance included');
assert(langContent.includes('Elena Rostova'), 'Localized Page: Reviewer Elena Rostova included');
assert(langContent.includes('CM/Res(2013)9'), 'Localized Page: Council of Europe cited');
assert(langContent.includes('European Food Safety Authority'), 'Localized Page: EFSA cited');

// 5. RSS and llms.txt validation
console.log('\n--- 5. Testing Discovery & Syndication Artifacts ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/aluminum-foil-acidic-leaching-simulator/'), 'RSS feed includes aluminum-foil-acidic-leaching-simulator');

const llmsPath = path.join(__dirname, '../public/llms.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
assert(llmsContent.includes('aluminum-foil-acidic-leaching-simulator'), 'llms.txt includes aluminum-foil-acidic-leaching-simulator');
assert(llmsContent.includes('All **63 Google-indexed everyday consumer diagnostic tools**'), 'llms.txt reports 63 tools');
assert(llmsContent.includes('**59 evergreen kitchen safety guides**'), 'llms.txt reports 59 evergreen guides');

// 6. Tools Index Hub Validation
console.log('\n--- 6. Testing Tools Index Hub Integration ---');
const toolsIndexPath = path.join(__dirname, '../src/pages/tools/index.astro');
const toolsIndexContent = fs.readFileSync(toolsIndexPath, 'utf8');
assert(toolsIndexContent.includes("slug: 'aluminum-foil-acidic-leaching-simulator'"), 'EN Tools Index includes aluminum-foil-acidic-leaching-simulator');

const langToolsIndexPath = path.join(__dirname, '../src/pages/[lang]/tools/index.astro');
const langToolsIndexContent = fs.readFileSync(langToolsIndexPath, 'utf8');
assert(langToolsIndexContent.includes("slug: 'aluminum-foil-acidic-leaching-simulator'"), 'Localized Tools Index includes aluminum-foil-acidic-leaching-simulator');

// 7. Wave 38 Blog Expansion Validation (56 -> 59 / 5 langs)
console.log('\n--- 7. Testing Wave 38 Evergreen Safety Guides (59 x 5 languages = 295 articles) ---');
const blogLangs = ['', '.es', '.pt', '.zh-cn', '.ja'];
blogLangs.forEach(ext => {
  const bPath = path.join(__dirname, `../src/data/blog${ext}.json`);
  const bData = JSON.parse(fs.readFileSync(bPath, 'utf8'));
  assert(bData.length === 59, `blog${ext}.json contains exactly 59 articles (found ${bData.length})`);
  assert(bData.some(b => b.slug === 'aluminum-foil-cooking-acidic-food-safety'), `blog${ext}.json includes aluminum-foil-cooking-acidic-food-safety`);
  assert(bData.some(b => b.slug === 'silicone-bakeware-safety-heat-limits-fillers'), `blog${ext}.json includes silicone-bakeware-safety-heat-limits-fillers`);
  assert(bData.some(b => b.slug === 'slow-cooker-ceramic-insert-lead-cadmium-safety'), `blog${ext}.json includes slow-cooker-ceramic-insert-lead-cadmium-safety`);
});

console.log('\n================================================================');
console.log(`SUMMARY: ${passedTests} passed, ${failedTests} failed out of ${passedTests + failedTests} tests.`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('\nALL ALUMINUM FOIL ACIDIC LEACHING SIMULATOR & WAVE 38 AUDIT TESTS PASSED! ✨\n');
}
