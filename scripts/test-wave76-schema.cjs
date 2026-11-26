const fs = require('fs');
const path = require('path');

console.log('=== WAVE 76 INTEGRITY & SCHEMA VERIFICATION HARNESS ===\n');

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
assert(allowlist.length === 82, `Consumer tools allowlist count must be 82 (got ${allowlist.length})`);
assert(allowlist.includes('plastic-blender-jar-hydrolysis-modeler'), "Allowlist includes 'plastic-blender-jar-hydrolysis-modeler'");

// 2. Tool #82 pages and schemas
const enToolPath = path.resolve('src/pages/tools/plastic-blender-jar-hydrolysis-modeler.astro');
const enToolContent = fs.readFileSync(enToolPath, 'utf8');
assert(enToolContent.includes('webAppSchema'), 'EN Tool #82 includes webAppSchema');
assert(enToolContent.includes('breadcrumbSchema'), 'EN Tool #82 includes breadcrumbSchema');
assert(enToolContent.includes('faqSchema'), 'EN Tool #82 includes faqSchema');

const langToolPath = path.resolve('src/pages/[lang]/tools/plastic-blender-jar-hydrolysis-modeler.astro');
const langToolContent = fs.readFileSync(langToolPath, 'utf8');
assert(langToolContent.includes('webAppSchema'), '[lang] Tool #82 includes webAppSchema');
assert(langToolContent.includes('breadcrumbSchema'), '[lang] Tool #82 includes breadcrumbSchema');
assert(langToolContent.includes('faqSchema'), '[lang] Tool #82 includes faqSchema');

// 3. Blog guide counts across 5 locales
const locales = ['en', 'es', 'pt', 'zh-cn', 'ja'];
const blogData = {};
for (const loc of locales) {
  const filePath = path.resolve(loc === 'en' ? 'src/data/blog.json' : `src/data/blog.${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  blogData[loc] = data;
  assert(data.length === 116, `${loc.toUpperCase()} blog guides count must be 116 (got ${data.length})`);
}

// 4. Slug symmetry for Wave 76 guides
const wave76Slugs = [
  'gas-stove-no2-benzene-range-hood-ventilation-safety',
  'black-plastic-utensils-flame-retardants-leaching-safety',
  'reverse-osmosis-water-filter-pfas-lead-microplastics-safety'
];

for (const slug of wave76Slugs) {
  for (const loc of locales) {
    const found = blogData[loc].find(b => b.slug === slug);
    assert(!!found, `[${loc}] contains guide: ${slug}`);
    if (found) {
      assert(found.sections && found.sections.length >= 5, `[${loc}] ${slug} has at least 5 sections (${found.sections.length})`);
      assert(found.faqs && found.faqs.length >= 5, `[${loc}] ${slug} has at least 5 FAQs (${found.faqs.length})`);
      assert(found.conclusion && found.conclusion.length > 40, `[${loc}] ${slug} has non-empty conclusion`);
      assert(found.relatedTools && found.relatedTools.length >= 3, `[${loc}] ${slug} has at least 3 related tools (${found.relatedTools.length})`);
    }
  }
}

// 5. Featured hero tools & localized spotlights
const toolsIndexContent = fs.readFileSync('src/pages/tools/index.astro', 'utf8');
assert(toolsIndexContent.includes("'plastic-blender-jar-hydrolysis-modeler'"), "tools/index.astro includes 'plastic-blender-jar-hydrolysis-modeler'");

const langToolsIndexContent = fs.readFileSync('src/pages/[lang]/tools/index.astro', 'utf8');
assert(langToolsIndexContent.includes("'plastic-blender-jar-hydrolysis-modeler'"), "[lang]/tools/index.astro includes 'plastic-blender-jar-hydrolysis-modeler'");

// 6. Curated tools in rss.xml.ts & public/llms.txt
const rssContent = fs.readFileSync('src/pages/rss.xml.ts', 'utf8');
assert(rssContent.includes('/tools/plastic-blender-jar-hydrolysis-modeler/'), "rss.xml.ts includes '/tools/plastic-blender-jar-hydrolysis-modeler/'");

const llmsContent = fs.readFileSync('public/llms.txt', 'utf8');
assert(llmsContent.includes('/tools/plastic-blender-jar-hydrolysis-modeler/'), "public/llms.txt includes '/tools/plastic-blender-jar-hydrolysis-modeler/'");
assert(llmsContent.includes('gas-stove-no2-benzene-range-hood-ventilation-safety'), 'public/llms.txt includes Wave 76 guide 1');
assert(llmsContent.includes('black-plastic-utensils-flame-retardants-leaching-safety'), 'public/llms.txt includes Wave 76 guide 2');
assert(llmsContent.includes('reverse-osmosis-water-filter-pfas-lead-microplastics-safety'), 'public/llms.txt includes Wave 76 guide 3');

console.log('\n======================================================');
if (pass) {
  console.log('🎉 ALL WAVE 76 INTEGRITY CHECKS PASSED PERFECTLY!');
  process.exit(0);
} else {
  console.error('💥 SOME INTEGRITY CHECKS FAILED!');
  process.exit(1);
}
