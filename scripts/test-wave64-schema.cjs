/**
 * scripts/test-wave64-schema.cjs
 * Wave 64 Integrity & Schema Verification Test Harness
 */

const fs = require('fs');
const path = require('path');

console.log('=== WAVE 64 INTEGRITY & SCHEMA VERIFICATION HARNESS ===\n');

let pass = true;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    pass = false;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Allowlist verification
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
assert(allowlist.length === 76, `Consumer tools allowlist count must be 76 (got ${allowlist.length})`);
assert(allowlist.includes('blender-blade-cavitation-safety-modeler'), "Allowlist includes 'blender-blade-cavitation-safety-modeler'");

// 2. Tool #76 pages and schemas
const enToolPath = path.resolve('src/pages/tools/blender-blade-cavitation-safety-modeler.astro');
const enToolContent = fs.readFileSync(enToolPath, 'utf8');
assert(enToolContent.includes('webAppSchema'), 'EN Tool #76 includes webAppSchema');
assert(enToolContent.includes('breadcrumbSchema'), 'EN Tool #76 includes breadcrumbSchema');
assert(enToolContent.includes('faqSchema'), 'EN Tool #76 includes faqSchema');

const langToolPath = path.resolve('src/pages/[lang]/tools/blender-blade-cavitation-safety-modeler.astro');
const langToolContent = fs.readFileSync(langToolPath, 'utf8');
assert(langToolContent.includes('webAppSchema'), '[lang] Tool #76 includes webAppSchema');
assert(langToolContent.includes('breadcrumbSchema'), '[lang] Tool #76 includes breadcrumbSchema');
assert(langToolContent.includes('faqSchema'), '[lang] Tool #76 includes faqSchema');

// 3. Blog guide counts across 5 locales
const locales = ['en', 'es', 'pt', 'zh-cn', 'ja'];
const blogData = {};
for (const loc of locales) {
  const filePath = path.resolve(loc === 'en' ? 'src/data/blog.json' : `src/data/blog.${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  blogData[loc] = data;
  assert(data.length === 98, `${loc.toUpperCase()} blog guides count must be 98 (got ${data.length})`);
}

// 4. Slug symmetry for Wave 64 guides
const wave64Slugs = [
  'blender-blade-cavitation-bullet-cup-steam-explosion-safety',
  'espresso-machine-boiler-descaling-lead-nickel-copper-leaching-safety',
  'plastic-blender-pitcher-tritan-bps-dishwasher-hydrolysis-safety'
];

for (const slug of wave64Slugs) {
  for (const loc of locales) {
    const found = blogData[loc].find(b => b.slug === slug);
    assert(!!found, `Slug '${slug}' exists in ${loc.toUpperCase()} blog data`);
    if (found) {
      assert(found.title && found.title.length > 20, `'${slug}' [${loc}] has substantial title`);
      assert(found.intro && found.intro.length > 100, `'${slug}' [${loc}] has substantial intro`);
      assert(Array.isArray(found.sections) && found.sections.length >= 5, `'${slug}' [${loc}] has >= 5 sections (got ${found.sections ? found.sections.length : 0})`);
      assert(Array.isArray(found.faqs) && found.faqs.length >= 5, `'${slug}' [${loc}] has >= 5 faqs (got ${found.faqs ? found.faqs.length : 0})`);
      assert(Array.isArray(found.relatedTools) && found.relatedTools.length >= 2, `'${slug}' [${loc}] has >= 2 related tools`);
    }
  }
}

// 5. Cloudflare redirects line count check
const redirectsPath = path.resolve('public/_redirects');
if (fs.existsSync(redirectsPath)) {
  const redirects = fs.readFileSync(redirectsPath, 'utf8').split('\n').filter(l => l.trim().length > 0);
  assert(redirects.length < 2000, `_redirects line count (${redirects.length}) is strictly under Cloudflare 2,000 limit`);
}

console.log('\n======================================================');
if (pass) {
  console.log('🎉 ALL WAVE 64 SCHEMA & INTEGRITY CHECKS PASSED PERFECTLY!');
  process.exit(0);
} else {
  console.error('❌ SOME CHECKS FAILED! Please inspect errors above.');
  process.exit(1);
}
