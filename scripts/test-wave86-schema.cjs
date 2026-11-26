const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const USE_DIST = process.argv.includes('--dist');

const LOCALES = ['en', 'es', 'pt', 'zh-cn', 'ja'];
const WAVE86_BLOGS = [
  {
    slug: 'range-hood-cfm-make-up-air-back-burner-capture-safety',
    expectedTool: '/tools/range-hood-extraction-efficiency-modeler/'
  },
  {
    slug: 'cuisinart-grill-charbroil-ambiano-2026-cpsc-recalls-guide',
    expectedTool: '/tools/product-recalls-scanner/'
  },
  {
    slug: 'eu-2026-2376-recycled-food-plastic-fda-spice-lead-safety-guide',
    expectedTool: '/tools/kitchen-plastic-leaching-checker/'
  }
];
const TOOL_SLUG = 'range-hood-extraction-efficiency-modeler';

let errors = 0;
function fail(msg) {
  console.error('FAIL:', msg);
  errors++;
}
function pass(msg) {
  console.log('PASS:', msg);
}

// 1. Allowlist verification (#87)
const allowlist = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/consumer-tools-allowlist.json'), 'utf8'));
if (allowlist.length === 87 && allowlist.includes(TOOL_SLUG)) {
  pass(`consumer-tools-allowlist.json contains ${TOOL_SLUG} (total=${allowlist.length})`);
} else {
  fail(`consumer-tools-allowlist.json length=${allowlist.length}, includes=${allowlist.includes(TOOL_SLUG)}`);
}

// 2. Blog JSON parity & content quality (131 per locale, 655 total)
const expectedBlogCount = 131;
for (const lang of LOCALES) {
  const file = lang === 'en' ? 'src/data/blog.json' : `src/data/blog.${lang}.json`;
  const posts = JSON.parse(fs.readFileSync(path.join(ROOT, file), 'utf8'));
  if (posts.length !== expectedBlogCount) {
    fail(`${file} has ${posts.length} entries, expected ${expectedBlogCount}`);
  } else {
    pass(`${file} has exact ${expectedBlogCount} entries`);
  }

  for (const b of WAVE86_BLOGS) {
    const found = posts.find(p => p.slug === b.slug);
    if (!found) {
      fail(`${file} missing Wave 86 slug ${b.slug}`);
      continue;
    }
    if (!found.sections || found.sections.length < 5) {
      fail(`${file}/${b.slug} has <5 sections`);
    }
    for (const sec of found.sections) {
      if (!sec.boxText || !['warning', 'fact', 'tip', 'success'].includes(sec.type)) {
        fail(`${file}/${b.slug} invalid section metadata: ${JSON.stringify(sec).slice(0, 80)}`);
      }
      if (/\$[A-Za-z_\\{}]+\$/.test(sec.content || '') || /\$[A-Za-z_\\{}]+\$/.test(sec.boxText || '')) {
        fail(`${file}/${b.slug} contains raw LaTeX delimiter`);
      }
    }
    if (!found.faqs || found.faqs.length < 5) {
      fail(`${file}/${b.slug} has <5 FAQs`);
    }
    if (!found.relatedTools || found.relatedTools.length < 3) {
      fail(`${file}/${b.slug} has <3 relatedTools`);
    }
    const prefix = lang === 'en' ? '' : `/${lang}`;
    if (!found.relatedTools[0].url.startsWith(`${prefix}/tools/`)) {
      fail(`${file}/${b.slug} relatedTools[0].url (${found.relatedTools[0].url}) lacks locale prefix`);
    }
  }
}

// 3. Component & page source i18n checks
const componentSrc = fs.readFileSync(path.join(ROOT, 'src/components/RangeHoodExtractionModeler.astro'), 'utf8');
if (!componentSrc.includes('ITEM_I18N') || !componentSrc.includes('JS_STATUS_I18N') || !componentSrc.includes('localePrefix')) {
  fail('RangeHoodExtractionModeler.astro missing ITEM_I18N, JS_STATUS_I18N, or localePrefix');
} else {
  pass('RangeHoodExtractionModeler.astro has ITEM_I18N, JS_STATUS_I18N, and localePrefix');
}
if (/href="\/tools\/induction-cooktop-emf-safety-modeler\/"/.test(componentSrc)) {
  fail('RangeHoodExtractionModeler.astro still has unlocalized /tools/ cross-links');
}

const rssSrc = fs.readFileSync(path.join(ROOT, 'src/pages/rss.xml.ts'), 'utf8');
if (!rssSrc.includes(`/tools/${TOOL_SLUG}/`)) {
  fail('src/pages/rss.xml.ts missing Wave 86 tool entry');
} else {
  pass('src/pages/rss.xml.ts includes Wave 86 tool entry');
}

const llmsTxt = fs.readFileSync(path.join(ROOT, 'public/llms.txt'), 'utf8');
for (const b of WAVE86_BLOGS) {
  if (!llmsTxt.includes(b.slug)) fail(`public/llms.txt missing ${b.slug}`);
}
if (!llmsTxt.includes(`/tools/${TOOL_SLUG}/`)) {
  fail(`public/llms.txt missing /tools/${TOOL_SLUG}/`);
} else {
  pass('public/llms.txt references Tool #87 and Wave 86 guides');
}

const readmeSrc = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
if (!readmeSrc.includes('131 evergreen guides') || !readmeSrc.includes('87 Google-indexed')) {
  fail('README.md missing Wave 86 metrics (87 indexed tools / 131 guides)');
} else {
  pass('README.md reflects Wave 86 metrics');
}

// 4. Built HTML dist assertions (--dist)
if (USE_DIST) {
  if (!fs.existsSync(DIST)) {
    fail('dist/ directory does not exist; run npm run build first');
  } else {
    // Verify all 5 tool pages exist, are indexable (no noindex), have WebApplication + FAQPage + BreadcrumbList schemas without duplicates
    for (const lang of LOCALES) {
      const toolHtmlPath = lang === 'en'
        ? path.join(DIST, 'tools', TOOL_SLUG, 'index.html')
        : path.join(DIST, lang, 'tools', TOOL_SLUG, 'index.html');
      if (!fs.existsSync(toolHtmlPath)) {
        fail(`Missing built tool page: ${toolHtmlPath}`);
        continue;
      }
      const html = fs.readFileSync(toolHtmlPath, 'utf8');
      if (/content="noindex/i.test(html)) {
        fail(`${toolHtmlPath} is marked noindex!`);
      }
      const jsonLdMatches = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
      const types = [];
      for (const m of jsonLdMatches) {
        try {
          const parsed = JSON.parse(m[1]);
          types.push(parsed['@type']);
        } catch (err) {
          fail(`${toolHtmlPath} has invalid JSON-LD: ${err.message}`);
        }
      }
      for (const reqType of ['WebApplication', 'FAQPage', 'BreadcrumbList']) {
        const count = types.filter(t => t === reqType).length;
        if (count !== 1) {
          fail(`${toolHtmlPath} expected exactly 1 ${reqType} JSON-LD schema, got ${count}`);
        }
      }
      if (lang !== 'en') {
        if (!html.includes(`href="/${lang}/tools/induction-cooktop-emf-safety-modeler/"`)) {
          fail(`${toolHtmlPath} missing localized cross-link /${lang}/tools/induction-cooktop-emf-safety-modeler/`);
        }
      }
      pass(`Built tool HTML verified for [${lang}]: indexable, 3 unique JSON-LD schemas, localized links`);
    }

    // Verify all 15 built blog pages exist, have contextual tool links, and valid JSON-LD
    for (const lang of LOCALES) {
      const prefix = lang === 'en' ? '' : `/${lang}`;
      for (const b of WAVE86_BLOGS) {
        const blogHtmlPath = lang === 'en'
          ? path.join(DIST, 'blog', b.slug, 'index.html')
          : path.join(DIST, lang, 'blog', b.slug, 'index.html');
        if (!fs.existsSync(blogHtmlPath)) {
          fail(`Missing built blog page: ${blogHtmlPath}`);
          continue;
        }
        const html = fs.readFileSync(blogHtmlPath, 'utf8');
        const expectedHref = `${prefix}${b.expectedTool}`;
        if (!html.includes(`href="${expectedHref}"`)) {
          fail(`${blogHtmlPath} missing expected contextual tool CTA href="${expectedHref}"`);
        }
        const jsonLdMatches = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
        const types = [];
        for (const m of jsonLdMatches) {
          try {
            types.push(JSON.parse(m[1])['@type']);
          } catch (err) {
            fail(`${blogHtmlPath} invalid JSON-LD: ${err.message}`);
          }
        }
        if (!types.includes('Article') && !types.includes('BlogPosting')) {
          fail(`${blogHtmlPath} missing Article/BlogPosting JSON-LD`);
        }
        if (!types.includes('FAQPage')) {
          fail(`${blogHtmlPath} missing FAQPage JSON-LD`);
        }
      }
      pass(`All 3 Wave 86 blog pages verified for [${lang}]`);
    }

    // Verify hubs mention range-hood-extraction-efficiency-modeler
    for (const lang of LOCALES) {
      const hubPath = lang === 'en'
        ? path.join(DIST, 'tools', 'index.html')
        : path.join(DIST, lang, 'tools', 'index.html');
      const html = fs.readFileSync(hubPath, 'utf8');
      if (!html.includes(TOOL_SLUG)) {
        fail(`${hubPath} missing ${TOOL_SLUG}`);
      }
    }
    pass('All 5 localized /tools/ hub pages render range-hood-extraction-efficiency-modeler');
  }
}

if (errors > 0) {
  console.error(`\nWave 86 Schema Audit FAILED with ${errors} error(s).`);
  process.exit(1);
}
console.log(`\nALL WAVE 86 SCHEMA & I18N CHECKS PASSED! (${USE_DIST ? 'dist + source' : 'source'})`);
