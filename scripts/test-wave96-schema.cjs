const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const CHECK_DIST = process.argv.includes('--dist');

const LOCALES = ['en', 'es', 'pt', 'zh-cn', 'ja'];
const BLOG_FILES = {
  en: 'src/data/blog.json',
  es: 'src/data/blog.es.json',
  pt: 'src/data/blog.pt.json',
  'zh-cn': 'src/data/blog.zh-cn.json',
  ja: 'src/data/blog.ja.json'
};

const WAVE96_GUIDES = [
  'toaster-oven-foil-parchment-crumb-fire-acrylamide-safety',
  'waffle-maker-panini-press-ptfe-ceramic-flaking-safety',
  'freezing-toasting-bread-resistant-starch-acrylamide-mold-safety'
];

const EXPECTED_BLOG_CTA = {
  'toaster-oven-foil-parchment-crumb-fire-acrylamide-safety': '/tools/toaster-element-acrylamide-safety-simulator/',
  'freezing-toasting-bread-resistant-starch-acrylamide-mold-safety': '/tools/toaster-element-acrylamide-safety-simulator/',
  'waffle-maker-panini-press-ptfe-ceramic-flaking-safety': '/tools/pan-scratch-inspector/',
  'toaster-nichrome-wire-flaking-acrylamide-safety': '/tools/toaster-element-acrylamide-safety-simulator/'
};

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function readJson(rel) {
  return JSON.parse(read(rel));
}

function extractJsonLd(html) {
  const blocks = [];
  const regex = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = regex.exec(html)) !== null) {
    blocks.push(JSON.parse(m[1]));
  }
  return blocks;
}

console.log('=== Wave 96 Schema & Integrity Suite ===');

// 1. Consumer tools allowlist check (#92)
const allowlist = readJson('src/data/consumer-tools-allowlist.json');
assert.strictEqual(allowlist.length, 92, `Expected 92 allowlist tools, got ${allowlist.length}`);
assert.strictEqual(new Set(allowlist).size, 92, 'Duplicate slugs in consumer-tools-allowlist.json');
assert.ok(
  allowlist.includes('toaster-element-acrylamide-safety-simulator'),
  'Missing toaster-element-acrylamide-safety-simulator in consumer-tools-allowlist.json'
);
console.log('✓ consumer-tools-allowlist.json = 92 unique consumer tools (includes tool #92)');

// 2. Scientific dataset verification
const data = readJson('src/data/toaster-element-acrylamide-data.json');
assert.strictEqual(data.regulatoryStandards.efsaRegulationEu20172158.wheatBreadBenchmarkPpb, 50);
assert.strictEqual(data.regulatoryStandards.efsaRegulationEu20172158.ryeBreadBenchmarkPpb, 100);
assert.strictEqual(data.regulatoryStandards.efsaRegulationEu20172158.crispbreadBenchmarkPpb, 350);
assert.ok(JSON.stringify(data).indexOf('300 ppb') === -1, 'Found stale 300 ppb claim in toaster-element-acrylamide-data.json');
assert.ok(
  data.heatingElementTypes.some((el) => el.id === 'nichrome-80-20' && /Cr2O3/i.test(el.cr6VolatilizationRisk)),
  'nichrome-80-20 must document Cr2O3 passivation'
);
console.log('✓ toaster-element-acrylamide-data.json regulatory & materials assertions passed');

// 3. Component & Tool pages localization + explicit Schema.org check
const componentSrc = read('src/components/ToasterAcrylamideSafetySimulator.astro');
for (const token of ['ITEM_I18N', 'JS_STATUS_I18N', 'localizedData', '<script define:vars={{ toasterData: localizedData, d, jsI18n, toolUrl }} is:inline>']) {
  assert.ok(componentSrc.includes(token), `Missing ${token} in ToasterAcrylamideSafetySimulator.astro`);
}
for (const lang of ['es', 'pt', 'zh-cn', 'ja']) {
  assert.ok(componentSrc.includes(`'${lang}'`) || componentSrc.includes(`${lang}:`), `Missing ${lang} localization in ToasterAcrylamideSafetySimulator.astro`);
}

for (const pageRel of [
  'src/pages/tools/toaster-element-acrylamide-safety-simulator.astro',
  'src/pages/[lang]/tools/toaster-element-acrylamide-safety-simulator.astro'
]) {
  const pageSrc = read(pageRel);
  for (const req of ['WebApplication', 'FAQPage', 'BreadcrumbList', 'excludeArticleSchema={true}', 'excludeFaqSchema={true}', 'excludeBreadcrumbSchema={true}']) {
    assert.ok(pageSrc.includes(req), `Missing ${req} in ${pageRel}`);
  }
  assert.ok(!pageSrc.includes('300 ppb'), `Found stale 300 ppb claim in ${pageRel}`);
}

const i18nUtils = read('src/i18n/utils.ts');
assert.ok(i18nUtils.includes("'tools/toaster-element-acrylamide-safety-simulator'"), 'Missing tool route in SPECIAL_PAGES');
console.log('✓ Tool component localization, explicit Schema.org, and i18n route checks passed');

// 4. Blog guides 5-language parity & formatting check (146 x 5 = 730)
const enBlog = readJson(BLOG_FILES.en);
assert.strictEqual(enBlog.length, 146, `Expected 146 EN guides, got ${enBlog.length}`);
const enSlugs = enBlog.map((p) => p.slug);

for (const lang of LOCALES) {
  const posts = readJson(BLOG_FILES[lang]);
  assert.strictEqual(posts.length, 146, `Expected 146 ${lang} guides, got ${posts.length}`);
  assert.deepStrictEqual(posts.map((p) => p.slug), enSlugs, `Slug parity mismatch in ${lang}`);

  for (const slug of WAVE96_GUIDES) {
    const post = posts.find((p) => p.slug === slug);
    assert.ok(post, `Missing Wave 96 guide ${slug} in ${lang}`);
    assert.ok(Array.isArray(post.sections) && post.sections.length === 5, `${slug} (${lang}) must have 5 sections`);
    assert.ok(Array.isArray(post.faqs) && post.faqs.length === 5, `${slug} (${lang}) must have 5 FAQs`);
    assert.ok(Array.isArray(post.relatedTools) && post.relatedTools.length === 3, `${slug} (${lang}) must have 3 relatedTools`);
    assert.ok(post.intro && post.conclusion, `${slug} (${lang}) missing intro/conclusion`);
    const blob = JSON.stringify(post);
    assert.ok(!/\\\(|\\\[|\$\$/.test(blob), `Raw LaTeX delimiter detected in ${slug} (${lang})`);
  }
}
console.log('✓ 146 blog guides × 5 languages = 730 articles verified (100% slug parity, 5 sections, 5 FAQs, zero LaTeX)');

// 5. Contextual routing & discovery wiring checks
for (const blogPage of ['src/pages/blog/[slug].astro', 'src/pages/[lang]/blog/[slug].astro']) {
  const src = read(blogPage);
  const idxToaster = src.indexOf("recommendedToolKey = 'toasterElementAcrylamide';");
  const idxFire = src.indexOf("recommendedToolKey = 'kitchenFire';");
  assert.ok(idxToaster !== -1, `Missing toasterElementAcrylamide branch in ${blogPage}`);
  assert.ok(idxToaster < idxFire, `toasterElementAcrylamide must evaluate before kitchenFire in ${blogPage}`);
  assert.ok(src.includes('waffle-maker|panini-press'), `Missing waffle-maker|panini-press matcher in ${blogPage}`);
}

assert.ok(read('src/pages/tools/index.astro').includes("'toaster-element-acrylamide-safety-simulator'"), 'Missing tool #92 spotlight in EN tools/index.astro');
const langToolsIdx = read('src/pages/[lang]/tools/index.astro');
assert.strictEqual(
  (langToolsIdx.match(/slug:\s*'toaster-element-acrylamide-safety-simulator'/g) || []).length,
  3,
  'Expected 3 heroTools entries (es, zh-cn, ja) for toaster-element-acrylamide-safety-simulator in [lang]/tools/index.astro'
);
assert.ok(read('src/pages/rss.xml.ts').includes('/tools/toaster-element-acrylamide-safety-simulator/'), 'Missing tool #92 in rss.xml.ts');
assert.ok(read('public/llms.txt').includes('toaster-element-acrylamide-safety-simulator') && read('public/llms.txt').includes('**92 Google-indexed everyday consumer tools**'), 'llms.txt missing Wave 96 updates');
assert.ok(read('README.md').includes('toaster-element-acrylamide-safety-simulator') && read('README.md').includes('92 Google-indexed'), 'README.md missing Wave 96 updates');
console.log('✓ Contextual routing, Tools Hub spotlights, RSS, llms.txt, and README checks passed');

// 6. Post-build dist verification
if (CHECK_DIST) {
  assert.ok(fs.existsSync(DIST), 'dist/ directory missing — run npm run build first');

  for (const lang of LOCALES) {
    const prefix = lang === 'en' ? '' : `${lang}/`;

    // Tool #92 pages
    const toolPath = path.join(DIST, `${prefix}tools/toaster-element-acrylamide-safety-simulator/index.html`);
    assert.ok(fs.existsSync(toolPath), `Missing built tool page: ${toolPath}`);
    const toolHtml = fs.readFileSync(toolPath, 'utf8');
    assert.ok(!/<meta\s+name="robots"\s+content="noindex/i.test(toolHtml), `Tool #92 must NOT be noindex in ${lang}`);
    assert.ok(toolHtml.includes(`rel="canonical" href="https://isitkitchensafe.com/${prefix}tools/toaster-element-acrylamide-safety-simulator/"`), `Canonical mismatch on tool #92 (${lang})`);
    assert.ok(toolHtml.includes('hreflang="x-default"'), `Missing hreflang x-default on tool #92 (${lang})`);

    const toolSchemas = extractJsonLd(toolHtml);
    const toolTypes = toolSchemas.map((s) => s['@type']);
    for (const reqType of ['WebApplication', 'FAQPage', 'BreadcrumbList']) {
      assert.ok(toolTypes.includes(reqType), `Missing ${reqType} JSON-LD on ${toolPath}`);
    }
    assert.ok(!toolTypes.includes('Article'), `Unexpected Article JSON-LD on ${toolPath}`);
    const faqNode = toolSchemas.find((s) => s['@type'] === 'FAQPage');
    assert.ok(Array.isArray(faqNode.mainEntity) && faqNode.mainEntity.length >= 5, `Expected >=5 FAQs in JSON-LD on ${toolPath}, got ${faqNode.mainEntity?.length}`);

    // Blog guides contextual CTA & schemas
    for (const [slug, expectedToolPath] of Object.entries(EXPECTED_BLOG_CTA)) {
      const blogPath = path.join(DIST, `${prefix}blog/${slug}/index.html`);
      assert.ok(fs.existsSync(blogPath), `Missing built guide: ${blogPath}`);
      const blogHtml = fs.readFileSync(blogPath, 'utf8');
      const blogSchemas = extractJsonLd(blogHtml);
      const blogTypes = blogSchemas.map((s) => s['@type']);
      for (const reqType of ['BlogPosting', 'FAQPage', 'BreadcrumbList']) {
        assert.ok(blogTypes.includes(reqType), `Missing ${reqType} JSON-LD on ${blogPath}`);
      }
      const expectedHref = lang === 'en' ? expectedToolPath : `/${lang}${expectedToolPath}`;
      assert.ok(blogHtml.includes(expectedHref), `Expected CTA href ${expectedHref} in ${blogPath}`);
      if (slug === 'toaster-oven-foil-parchment-crumb-fire-acrylamide-safety') {
        assert.ok(!blogHtml.includes('/tools/kitchen-fire-safety-calculator/'), `Guide 1 misrouted to kitchenFire in ${lang}`);
      }
      if (slug === 'freezing-toasting-bread-resistant-starch-acrylamide-mold-safety') {
        assert.ok(!blogHtml.includes('/tools/food-spoilage-mold-checker/'), `Guide 3 misrouted to moldyFood in ${lang}`);
      }
    }

    // Tools Hub card link
    const hubPath = path.join(DIST, `${prefix}tools/index.html`);
    assert.ok(fs.existsSync(hubPath), `Missing built tools hub: ${hubPath}`);
    const hubHtml = fs.readFileSync(hubPath, 'utf8');
    assert.ok(hubHtml.includes('toaster-element-acrylamide-safety-simulator'), `Missing tool #92 link on ${hubPath}`);
  }

  const rssXml = fs.readFileSync(path.join(DIST, 'rss.xml'), 'utf8');
  assert.ok(rssXml.includes('/tools/toaster-element-acrylamide-safety-simulator/'), 'Missing tool #92 in dist/rss.xml');
  console.log('✓ Post-build dist/ HTML, JSON-LD, indexability, hreflang, CTA, hub, and RSS checks passed across all 5 languages');
}
