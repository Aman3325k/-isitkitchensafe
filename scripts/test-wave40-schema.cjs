const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('WAVE 40 CONSUMER TOOL #64 & SAFETY GUIDES (59->62) AUDIT SUITE');
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
const enPagePath = path.join(__dirname, '../src/pages/tools/air-fryer-teflon-fluoropolymer-modeler.astro');
const langPagePath = path.join(__dirname, '../src/pages/[lang]/tools/air-fryer-teflon-fluoropolymer-modeler.astro');
const componentPath = path.join(__dirname, '../src/components/AirFryerTeflonFluoropolymerModeler.astro');

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

// 2. Consumer Tools Allowlist check
console.log('\n--- 2. Testing Consumer Tools Allowlist (64 Tools) ---');
const allowlistPath = path.join(__dirname, '../src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
assert(allowlist.length === 64, `Allowlist has exactly 64 tools (found ${allowlist.length})`);
assert(allowlist.includes('air-fryer-teflon-fluoropolymer-modeler'), 'Allowlist contains air-fryer-teflon-fluoropolymer-modeler');

// 3. Blog Guides count and slug parity
console.log('\n--- 3. Testing Blog Guides Count & 100% Slug Parity across 5 Languages (62 Guides) ---');
const blogFiles = [
  { lang: 'en', path: path.join(__dirname, '../src/data/blog.json') },
  { lang: 'es', path: path.join(__dirname, '../src/data/blog.es.json') },
  { lang: 'pt', path: path.join(__dirname, '../src/data/blog.pt.json') },
  { lang: 'zh-cn', path: path.join(__dirname, '../src/data/blog.zh-cn.json') },
  { lang: 'ja', path: path.join(__dirname, '../src/data/blog.ja.json') }
];

const enBlog = JSON.parse(fs.readFileSync(blogFiles[0].path, 'utf8'));
assert(enBlog.length === 62, `EN blog has exactly 62 guides (found ${enBlog.length})`);

const enSlugs = new Set(enBlog.map(b => b.slug));
assert(enSlugs.has('copper-cookware-acidic-food-verdigris-toxicity'), 'EN has copper-cookware-acidic-food-verdigris-toxicity');
assert(enSlugs.has('melamine-dishes-microwave-dishwasher-formaldehyde-safety'), 'EN has melamine-dishes-microwave-dishwasher-formaldehyde-safety');
assert(enSlugs.has('air-fryer-preheating-empty-teflon-fume-hazards'), 'EN has air-fryer-preheating-empty-teflon-fume-hazards');

for (let i = 1; i < blogFiles.length; i++) {
  const b = JSON.parse(fs.readFileSync(blogFiles[i].path, 'utf8'));
  assert(b.length === 62, `${blogFiles[i].lang} blog has exactly 62 guides (found ${b.length})`);
  const slugs = new Set(b.map(x => x.slug));
  let parity = true;
  for (const s of enSlugs) {
    if (!slugs.has(s)) {
      parity = false;
      console.error(`Missing slug ${s} in ${blogFiles[i].lang}`);
    }
  }
  assert(parity, `${blogFiles[i].lang} has 100% slug parity with EN`);
}

// 4. RSS Feed check
console.log('\n--- 4. Testing RSS Feed Configuration ---');
const rssPath = path.join(__dirname, '../src/pages/rss.xml.ts');
const rssContent = fs.readFileSync(rssPath, 'utf8');
assert(rssContent.includes('/tools/air-fryer-teflon-fluoropolymer-modeler/'), 'RSS includes air-fryer-teflon-fluoropolymer-modeler');

// 5. Contextual Routing in blog template
console.log('\n--- 5. Testing Contextual Interactive Routing in Blog Templates ---');
const blogAstroPath = path.join(__dirname, '../src/pages/blog/[slug].astro');
const blogLangAstroPath = path.join(__dirname, '../src/pages/[lang]/blog/[slug].astro');
const blogAstro = fs.readFileSync(blogAstroPath, 'utf8');
const blogLangAstro = fs.readFileSync(blogLangAstroPath, 'utf8');

assert(blogAstro.includes('airFryerTeflon'), 'blog/[slug].astro includes airFryerTeflon routing');
assert(blogAstro.includes('copperCookware'), 'blog/[slug].astro includes copperCookware routing');
assert(blogAstro.includes('melamineFormaldehyde'), 'blog/[slug].astro includes melamineFormaldehyde routing');

assert(blogLangAstro.includes('airFryerTeflon'), '[lang]/blog/[slug].astro includes airFryerTeflon routing');
assert(blogLangAstro.includes('copperCookware'), '[lang]/blog/[slug].astro includes copperCookware routing');
assert(blogLangAstro.includes('melamineFormaldehyde'), '[lang]/blog/[slug].astro includes melamineFormaldehyde routing');

console.log(`\nAudit Complete: ${passedTests} passed, ${failedTests} failed.`);
if (failedTests > 0) {
  process.exit(1);
}
