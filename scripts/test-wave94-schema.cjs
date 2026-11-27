/**
 * Wave 94 Verification & Schema Audit Script (TOOL-CONSUMER-121)
 * Usage:
 *   node scripts/test-wave94-schema.cjs         (source data, i18n, metadata & wiring checks)
 *   node scripts/test-wave94-schema.cjs --dist  (plus built HTML schema, CTA & noindex checks)
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST_MODE = process.argv.includes('--dist');

const LOCALES = ['en', 'es', 'pt', 'zh-cn', 'ja'];
const TOOL_SLUG = 'sous-vide-pouch-delamination-modeler';
const EXPECTED_ALLOWLIST_COUNT = 91;
const EXPECTED_BLOG_COUNT = 143;

const WAVE94_GUIDES = [
  {
    slug: 'sous-vide-pouch-seam-delamination-microplastic-safety',
    expectedToolSlug: 'sous-vide-pouch-delamination-modeler'
  },
  {
    slug: 'cpsc-q4-2026-kitchenware-appliance-recalls-safety-guide',
    expectedToolSlug: 'product-recalls-scanner'
  },
  {
    slug: 'efsa-2026-silicone-kitchen-tool-cyclic-oligomer-migration-safety-guide',
    expectedToolSlug: 'silicone-bakeware-oligomer-analyzer'
  }
];

let failures = 0;
let assertions = 0;
function assert(cond, msg) {
  assertions++;
  if (!cond) {
    console.error(`FAIL: ${msg}`);
    failures++;
  }
}

// 1. Allowlist & tool dataset check
const allowlist = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/consumer-tools-allowlist.json'), 'utf8'));
assert(allowlist.length === EXPECTED_ALLOWLIST_COUNT, `Allowlist expected ${EXPECTED_ALLOWLIST_COUNT}, got ${allowlist.length}`);
assert(allowlist.includes(TOOL_SLUG), `Allowlist must include ${TOOL_SLUG}`);

const svData = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/sous-vide-pouch-delamination-data.json'), 'utf8'));
assert(Array.isArray(svData.pouchMaterials) && svData.pouchMaterials.length >= 5, 'Missing pouchMaterials');
assert(Array.isArray(svData.bathTemperatures) && svData.bathTemperatures.length >= 5, 'Missing bathTemperatures');
assert(Array.isArray(svData.cookDurations) && svData.cookDurations.length >= 5, 'Missing cookDurations');
assert(Array.isArray(svData.sealGeometries) && svData.sealGeometries.length >= 4, 'Missing sealGeometries');
assert(Array.isArray(svData.foodMatrices) && svData.foodMatrices.length >= 3, 'Missing foodMatrices');

// 2. Component i18n parity check
const componentSrc = fs.readFileSync(path.join(ROOT, 'src/components/SousVidePouchDelaminationModeler.astro'), 'utf8');
assert(componentSrc.includes('ITEM_I18N'), 'Component missing ITEM_I18N');
assert(componentSrc.includes('JS_STATUS_I18N'), 'Component missing JS_STATUS_I18N');
assert(componentSrc.includes('localizedData'), 'Component missing localizedData');
assert(['es', 'pt', 'zh-cn', 'ja'].every((l) => componentSrc.includes(`'${l}':`) || componentSrc.includes(`${l}:`)), 'Component missing all 4 localized dictionaries');

const hasRawLatex = (text) => /\$(?![{\d])[^$\r\n\\]*(?:[_^{}\\]|[A-Za-z]\s*=)[^$\r\n]*\$/.test(text.replace(/\$\{[^}]+\}/g, ''));

const enToolPageSrc = fs.readFileSync(path.join(ROOT, 'src/pages/tools/sous-vide-pouch-delamination-modeler.astro'), 'utf8');
assert(!hasRawLatex(enToolPageSrc), 'English tool page contains raw LaTeX delimiters');
assert(enToolPageSrc.includes('"@type": "WebApplication"'), 'English tool page missing WebApplication schema');

const langToolPageSrc = fs.readFileSync(path.join(ROOT, 'src/pages/[lang]/tools/sous-vide-pouch-delamination-modeler.astro'), 'utf8');
assert(!hasRawLatex(langToolPageSrc), '[lang] tool page contains raw LaTeX delimiters');
assert(langToolPageSrc.includes('"@type": "WebApplication"'), '[lang] tool page missing WebApplication schema');

// 3. Blog JSON 5-language parity & Wave 94 guide validation
const enBlog = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/blog.json'), 'utf8'));
const enSlugs = enBlog.map((b) => b.slug);

for (const lang of LOCALES) {
  const filename = lang === 'en' ? 'blog.json' : `blog.${lang}.json`;
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data', filename), 'utf8'));
  assert(data.length === EXPECTED_BLOG_COUNT, `${filename} count expected ${EXPECTED_BLOG_COUNT}, got ${data.length}`);

  const slugs = new Set(data.map((b) => b.slug));
  assert(slugs.size === data.length, `${filename} has duplicate slugs`);
  const locSlugs = data.map((b) => b.slug);
  for (let i = 0; i < enSlugs.length; i++) {
    assert(enSlugs[i] === locSlugs[i], `${filename} slug parity mismatch at ${i}: expected ${enSlugs[i]}, got ${locSlugs[i]}`);
  }

  for (const guideMeta of WAVE94_GUIDES) {
    const entry = data.find((b) => b.slug === guideMeta.slug);
    assert(Boolean(entry), `${filename} missing Wave 94 guide ${guideMeta.slug}`);
    if (!entry) continue;

    assert(entry.date === '2026-11-27', `${filename}/${guideMeta.slug} expected date 2026-11-27, got ${entry.date}`);
    assert(Array.isArray(entry.sections) && entry.sections.length >= 5, `${filename}/${guideMeta.slug} needs >=5 sections`);
    for (const sec of entry.sections || []) {
      assert(['warning', 'fact', 'tip', 'success'].includes(sec.type), `${filename}/${guideMeta.slug} invalid section type: ${sec.type}`);
      assert(typeof sec.boxText === 'string' && sec.boxText.length > 10, `${filename}/${guideMeta.slug} missing section.boxText`);
    }
    assert(Array.isArray(entry.faqs) && entry.faqs.length >= 5, `${filename}/${guideMeta.slug} needs >=5 faqs`);
    assert(Array.isArray(entry.relatedTools) && entry.relatedTools.length >= 3, `${filename}/${guideMeta.slug} needs >=3 relatedTools`);

    const rawText = JSON.stringify(entry);
    assert(!/\$[^\$]+\$/.test(rawText), `${filename}/${guideMeta.slug} contains raw LaTeX delimiters`);
  }
}

// 4. RSS, llms.txt, tools hub & README.md check
const rssSrc = fs.readFileSync(path.join(ROOT, 'src/pages/rss.xml.ts'), 'utf8');
assert(rssSrc.includes(`/tools/${TOOL_SLUG}/`), `rss.xml.ts missing ${TOOL_SLUG}`);

const toolsIndexEn = fs.readFileSync(path.join(ROOT, 'src/pages/tools/index.astro'), 'utf8');
assert(toolsIndexEn.includes(`slug: '${TOOL_SLUG}'`), `tools/index.astro featuredHeroTools missing ${TOOL_SLUG}`);

const toolsIndexLang = fs.readFileSync(path.join(ROOT, 'src/pages/[lang]/tools/index.astro'), 'utf8');
assert((toolsIndexLang.match(new RegExp(`slug: '${TOOL_SLUG}'`, 'g')) || []).length >= 3, `[lang]/tools/index.astro missing ${TOOL_SLUG} in localized heroTools`);

const llmsTxt = fs.readFileSync(path.join(ROOT, 'public/llms.txt'), 'utf8');
assert(llmsTxt.includes(`/tools/${TOOL_SLUG}/`), 'llms.txt missing tool #91 URL');
assert(llmsTxt.includes('91 Google-indexed'), 'llms.txt missing 91 tool count');
assert(llmsTxt.includes('143 evergreen'), 'llms.txt missing 143 guide count');
for (const g of WAVE94_GUIDES) {
  assert(llmsTxt.includes(`/blog/${g.slug}/`), `llms.txt missing guide ${g.slug}`);
}

const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
assert(readme.includes('143 evergreen guides'), 'README.md missing 143 evergreen guides');
assert(readme.includes('91 Google-indexed') && readme.includes('91 high-utility'), 'README.md missing 91 consumer tool count');
assert(readme.includes(TOOL_SLUG), `README.md missing ${TOOL_SLUG}`);

// 5. Built HTML verification (--dist)
if (DIST_MODE) {
  const distDir = path.join(ROOT, 'dist');
  assert(fs.existsSync(distDir), 'dist/ directory does not exist; run npm run build first');

  const extractSchemas = (html) => {
    const matches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    const types = [];
    for (const m of matches) {
      try {
        const parsed = JSON.parse(m[1]);
        const list = Array.isArray(parsed) ? parsed : [parsed];
        for (const item of list) {
          if (item && item['@type']) {
            types.push(...(Array.isArray(item['@type']) ? item['@type'] : [item['@type']]));
          }
        }
      } catch (e) {
        failures++;
        console.error('FAIL: Invalid JSON-LD script block:', e.message);
      }
    }
    return types;
  };

  for (const lang of LOCALES) {
    // Verify elevated tool #91 page
    const toolPath = lang === 'en'
      ? path.join(distDir, 'tools', TOOL_SLUG, 'index.html')
      : path.join(distDir, lang, 'tools', TOOL_SLUG, 'index.html');
    assert(fs.existsSync(toolPath), `Missing built tool page: ${toolPath}`);
    if (fs.existsSync(toolPath)) {
      const html = fs.readFileSync(toolPath, 'utf8');
      assert(!/<meta[^>]*name=["']robots["'][^>]*noindex/i.test(html), `${toolPath} must NOT be noindex`);
      const schemas = extractSchemas(html);
      for (const sType of ['WebApplication', 'FAQPage', 'BreadcrumbList']) {
        const count = schemas.filter((t) => t === sType).length;
        assert(count === 1, `${toolPath} expected exact 1 ${sType} schema, got ${count}`);
      }
      assert(!schemas.includes('Article'), `${toolPath} should not emit spurious Article schema`);
    }

    // Verify tools hub includes tool #91 link
    const hubPath = lang === 'en'
      ? path.join(distDir, 'tools', 'index.html')
      : path.join(distDir, lang, 'tools', 'index.html');
    assert(fs.existsSync(hubPath), `Missing built hub page: ${hubPath}`);
    if (fs.existsSync(hubPath)) {
      const hubHtml = fs.readFileSync(hubPath, 'utf8');
      assert(hubHtml.includes(TOOL_SLUG), `${hubPath} missing ${TOOL_SLUG} link`);
    }

    // Verify all 3 Wave 94 blog guides per locale
    for (const guideMeta of WAVE94_GUIDES) {
      const blogPath = lang === 'en'
        ? path.join(distDir, 'blog', guideMeta.slug, 'index.html')
        : path.join(distDir, lang, 'blog', guideMeta.slug, 'index.html');
      assert(fs.existsSync(blogPath), `Missing built blog page: ${blogPath}`);
      if (fs.existsSync(blogPath)) {
        const bHtml = fs.readFileSync(blogPath, 'utf8');
        assert(!/<meta[^>]*name=["']robots["'][^>]*noindex/i.test(bHtml), `${blogPath} must NOT be noindex`);
        const expectedHref = lang === 'en'
          ? `/tools/${guideMeta.expectedToolSlug}/`
          : `/${lang}/tools/${guideMeta.expectedToolSlug}/`;
        assert(bHtml.includes(expectedHref), `${blogPath} missing expected contextual CTA href ${expectedHref}`);
        const schemas = extractSchemas(bHtml);
        assert(schemas.some((t) => t === 'Article' || t === 'BlogPosting'), `${blogPath} missing Article/BlogPosting schema`);
        assert(schemas.some((t) => t === 'FAQPage'), `${blogPath} missing FAQPage schema`);
        assert(schemas.some((t) => t === 'BreadcrumbList'), `${blogPath} missing BreadcrumbList schema`);
      }
    }

    // Verify sous vide comparison contextual routing
    const compPath = lang === 'en'
      ? path.join(distDir, 'compare', 'sous-vide-bag-vs-silicone-bag', 'index.html')
      : path.join(distDir, lang, 'compare', 'sous-vide-bag-vs-silicone-bag', 'index.html');
    if (fs.existsSync(compPath)) {
      const cHtml = fs.readFileSync(compPath, 'utf8');
      const expectedHref = lang === 'en' ? `/tools/${TOOL_SLUG}/` : `/${lang}/tools/${TOOL_SLUG}/`;
      assert(cHtml.includes(expectedHref), `${compPath} missing expected contextual CTA href ${expectedHref}`);
    }
  }
}

if (failures > 0) {
  console.error(`\nWave 94 verification FAILED with ${failures} error(s) out of ${assertions} checks.`);
  process.exit(1);
}
console.log(`Wave 94 verification PASSED (${assertions} assertions, ${DIST_MODE ? 'source + built HTML across 5 locales' : 'source data + wiring'}).`);
