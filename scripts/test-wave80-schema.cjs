const fs = require('fs');
const path = require('path');

console.log('=== WAVE 80 INTEGRITY & SCHEMA VERIFICATION HARNESS ===\n');

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
assert(allowlist.length === 84, `Consumer tools allowlist count must be 84 (got ${allowlist.length})`);
assert(allowlist.includes('glass-cooktop-fracture-simulator'), "Allowlist includes 'glass-cooktop-fracture-simulator'");

// 2. Tool #84 pages and schemas
const enToolPath = path.resolve('src/pages/tools/glass-cooktop-fracture-simulator.astro');
const enToolContent = fs.readFileSync(enToolPath, 'utf8');
assert(enToolContent.includes('webAppSchema'), 'EN Tool #84 includes webAppSchema');
assert(enToolContent.includes('breadcrumbSchema'), 'EN Tool #84 includes breadcrumbSchema');
assert(enToolContent.includes('faqSchema'), 'EN Tool #84 includes faqSchema');
assert(enToolContent.includes('excludeFaqSchema={true}'), 'EN Tool #84 passes excludeFaqSchema={true}');
assert(enToolContent.includes('excludeBreadcrumbSchema={true}'), 'EN Tool #84 passes excludeBreadcrumbSchema={true}');

const langToolPath = path.resolve('src/pages/[lang]/tools/glass-cooktop-fracture-simulator.astro');
const langToolContent = fs.readFileSync(langToolPath, 'utf8');
assert(langToolContent.includes('webAppSchema'), '[lang] Tool #84 includes webAppSchema');
assert(langToolContent.includes('breadcrumbSchema'), '[lang] Tool #84 includes breadcrumbSchema');
assert(langToolContent.includes('faqSchema'), '[lang] Tool #84 includes faqSchema');
assert(langToolContent.includes('excludeFaqSchema={true}'), '[lang] Tool #84 passes excludeFaqSchema={true}');
assert(langToolContent.includes('excludeBreadcrumbSchema={true}'), '[lang] Tool #84 passes excludeBreadcrumbSchema={true}');
assert(langToolContent.includes('lang={lang}'), '[lang] Tool #84 passes lang={lang}');

// 3. Blog guide counts across 5 locales
const locales = ['en', 'es', 'pt', 'zh-cn', 'ja'];
const blogData = {};
for (const loc of locales) {
  const filePath = path.resolve(loc === 'en' ? 'src/data/blog.json' : `src/data/blog.${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  blogData[loc] = data;
  assert(data.length === 122, `${loc.toUpperCase()} blog guides count must be 122 (got ${data.length})`);
}

// 4. Slug symmetry & quality checks for Wave 80 guides
const wave80Slugs = [
  'glass-cooktop-sugar-pitting-razor-scraping-silicone-mat-safety',
  'imported-aluminum-brass-cookware-lead-fda-2026-safety-guide',
  'bodum-french-press-granitestone-pan-panasonic-toaster-2026-recalls-guide'
];

for (const slug of wave80Slugs) {
  for (const loc of locales) {
    const found = blogData[loc].find(b => b.slug === slug);
    assert(!!found, `[${loc}] contains guide: ${slug}`);
    if (found) {
      assert(found.sections && found.sections.length >= 5, `[${loc}] ${slug} has at least 5 sections (${found.sections.length})`);
      assert(found.sections.every(s => s.boxText && s.type), `[${loc}] ${slug} sections include boxText and type`);
      assert(found.faqs && found.faqs.length >= 5, `[${loc}] ${slug} has at least 5 FAQs (${found.faqs.length})`);
      assert(found.conclusion && found.conclusion.length > 40, `[${loc}] ${slug} has non-empty conclusion`);
      assert(found.relatedTools && found.relatedTools.length >= 3, `[${loc}] ${slug} has at least 3 related tools (${found.relatedTools.length})`);
    }
  }
}

// 5. Featured hero tools & localized spotlights
const toolsIndexContent = fs.readFileSync('src/pages/tools/index.astro', 'utf8');
assert(toolsIndexContent.includes("'glass-cooktop-fracture-simulator'"), "tools/index.astro includes 'glass-cooktop-fracture-simulator'");

const langToolsIndexContent = fs.readFileSync('src/pages/[lang]/tools/index.astro', 'utf8');
const langMatches = (langToolsIndexContent.match(/slug:\s*'glass-cooktop-fracture-simulator'/g) || []).length;
assert(langMatches === 3, `[lang]/tools/index.astro includes 'glass-cooktop-fracture-simulator' in all 3 SPOTLIGHT_HUB_UI heroTools blocks (got ${langMatches})`);

// 6. Contextual blog routing
const enBlogTemplate = fs.readFileSync('src/pages/blog/[slug].astro', 'utf8');
const langBlogTemplate = fs.readFileSync('src/pages/[lang]/blog/[slug].astro', 'utf8');
assert(enBlogTemplate.includes('glassCooktop'), 'EN blog template includes glassCooktop');
assert(langBlogTemplate.includes('glassCooktop'), '[lang] blog template includes glassCooktop');

// 7. Curated tools in rss.xml.ts & public/llms.txt
const rssContent = fs.readFileSync('src/pages/rss.xml.ts', 'utf8');
assert(rssContent.includes('/tools/glass-cooktop-fracture-simulator/'), "rss.xml.ts includes '/tools/glass-cooktop-fracture-simulator/'");

const llmsContent = fs.readFileSync('public/llms.txt', 'utf8');
assert(llmsContent.includes('/tools/glass-cooktop-fracture-simulator/'), "public/llms.txt includes '/tools/glass-cooktop-fracture-simulator/'");
assert(llmsContent.includes('glass-cooktop-sugar-pitting-razor-scraping-silicone-mat-safety'), 'public/llms.txt includes Wave 80 guide 1');
assert(llmsContent.includes('imported-aluminum-brass-cookware-lead-fda-2026-safety-guide'), 'public/llms.txt includes Wave 80 guide 2');
assert(llmsContent.includes('bodum-french-press-granitestone-pan-panasonic-toaster-2026-recalls-guide'), 'public/llms.txt includes Wave 80 guide 3');

// 8. Rendered dist/ HTML verification across all 20 Wave 80 URLs (when --dist is passed)
if (process.argv.includes('--dist') && fs.existsSync(path.resolve('dist'))) {
  const distLocales = ['', 'es/', 'pt/', 'zh-cn/', 'ja/'];
  for (const p of distLocales) {
    const toolHtmlPath = path.resolve('dist', `${p}tools/glass-cooktop-fracture-simulator/index.html`);
    const toolHtml = fs.readFileSync(toolHtmlPath, 'utf8');
    assert(!toolHtml.includes('noindex'), `[dist/${p}tool#84] has no noindex meta`);
    assert(toolHtml.includes('"@type":"WebApplication"') || toolHtml.includes('"@type": "WebApplication"'), `[dist/${p}tool#84] renders WebApplication schema`);
    assert(toolHtml.includes('"@type":"FAQPage"') || toolHtml.includes('"@type": "FAQPage"'), `[dist/${p}tool#84] renders FAQPage schema`);
    assert(toolHtml.includes('"@type":"BreadcrumbList"') || toolHtml.includes('"@type": "BreadcrumbList"'), `[dist/${p}tool#84] renders BreadcrumbList schema`);
  }

  const guideToolMap = [
    ['glass-cooktop-sugar-pitting-razor-scraping-silicone-mat-safety', 'tools/glass-cooktop-fracture-simulator/'],
    ['imported-aluminum-brass-cookware-lead-fda-2026-safety-guide', 'tools/toxic-leaching-scorecard/'],
    ['bodum-french-press-granitestone-pan-panasonic-toaster-2026-recalls-guide', 'tools/product-recalls-scanner/']
  ];
  const calloutLabels = [
    'Science Fact', 'Critical Warning', 'Safety Tip',
    'Dato Científico', 'Aviso Crítico', 'Consejo de Seguridad',
    'Fato Científico', 'Dica de Segurança',
    '科学知识点', '重要安全警示', '操作建议',
    '科学的データ', '重要警告', '安全のヒント'
  ];

  for (const [slug, expectedTool] of guideToolMap) {
    for (const p of distLocales) {
      const guideHtmlPath = path.resolve('dist', `${p}blog/${slug}/index.html`);
      const guideHtml = fs.readFileSync(guideHtmlPath, 'utf8');
      assert(guideHtml.includes('"@type":"BlogPosting"') || guideHtml.includes('"@type": "BlogPosting"'), `[dist/${p}${slug}] renders BlogPosting schema`);
      assert(guideHtml.includes('"@type":"FAQPage"') || guideHtml.includes('"@type": "FAQPage"'), `[dist/${p}${slug}] renders FAQPage schema`);
      assert(guideHtml.includes('"@type":"BreadcrumbList"') || guideHtml.includes('"@type": "BreadcrumbList"'), `[dist/${p}${slug}] renders BreadcrumbList schema`);
      assert(guideHtml.includes(`/${p}${expectedTool}`), `[dist/${p}${slug}] routes to /${p}${expectedTool}`);
      assert(calloutLabels.some(lbl => guideHtml.includes(lbl)), `[dist/${p}${slug}] renders styled callout box`);
    }
  }
}

console.log('\n======================================================');
if (pass) {
  console.log('🎉 ALL WAVE 80 INTEGRITY CHECKS PASSED PERFECTLY!');
  process.exit(0);
} else {
  console.error('💥 SOME INTEGRITY CHECKS FAILED!');
  process.exit(1);
}
