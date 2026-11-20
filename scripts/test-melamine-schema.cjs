const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('================================================================');
console.log('MELAMINE SIMULATOR SCHEMA & E-E-A-T AUDIT VALIDATION TEST SUITE');
console.log('================================================================\n');

const enFilePath = path.resolve('src/pages/tools/dishwasher-melamine-leaching-simulator.astro');
const langFilePath = path.resolve('src/pages/[lang]/tools/dishwasher-melamine-leaching-simulator.astro');
const dataFilePath = path.resolve('src/data/dishwasher-melamine-leaching-data.json');

assert(fs.existsSync(enFilePath), `Missing English page: ${enFilePath}`);
assert(fs.existsSync(langFilePath), `Missing Localized page: ${langFilePath}`);
assert(fs.existsSync(dataFilePath), `Missing Data file: ${dataFilePath}`);

const enContent = fs.readFileSync(enFilePath, 'utf8');
const langContent = fs.readFileSync(langFilePath, 'utf8');
const rawData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

let testsPassed = 0;
let testsFailed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`  [PASS] ${name}`);
    testsPassed++;
  } catch (err) {
    console.error(`  [FAIL] ${name}: ${err.message}`);
    testsFailed++;
  }
}

// -----------------------------------------------------------------------------
// Test Suite 1: Astro File Layout & Duplicate Schema Prevention
// -----------------------------------------------------------------------------
console.log('\n--- 1. Testing Astro Template & Schema Injection Configuration ---');

runTest('EN Page: excludeFaqSchema={true} is explicitly configured', () => {
  assert(enContent.includes('excludeFaqSchema={true}'), 'English page must set excludeFaqSchema={true}');
});

runTest('EN Page: excludeBreadcrumbSchema={true} is explicitly configured', () => {
  assert(enContent.includes('excludeBreadcrumbSchema={true}'), 'English page must set excludeBreadcrumbSchema={true}');
});

runTest('EN Page: Injects webAppSchema, faqSchema, breadcrumbSchema into head', () => {
  assert(enContent.includes('set:html={JSON.stringify(webAppSchema)}'), 'webAppSchema script tag missing in head');
  assert(enContent.includes('set:html={JSON.stringify(faqSchema)}'), 'faqSchema script tag missing in head');
  assert(enContent.includes('set:html={JSON.stringify(breadcrumbSchema)}'), 'breadcrumbSchema script tag missing in head');
});

runTest('Localized Page: excludeFaqSchema={true} is explicitly configured', () => {
  assert(langContent.includes('excludeFaqSchema={true}'), 'Localized page must set excludeFaqSchema={true}');
});

runTest('Localized Page: excludeBreadcrumbSchema={true} is explicitly configured', () => {
  assert(langContent.includes('excludeBreadcrumbSchema={true}'), 'Localized page must set excludeBreadcrumbSchema={true}');
});

runTest('Localized Page: Injects webAppSchema, faqSchema, breadcrumbSchema into head', () => {
  assert(langContent.includes('set:html={JSON.stringify(webAppSchema)}'), 'webAppSchema script tag missing in head');
  assert(langContent.includes('set:html={JSON.stringify(faqSchema)}'), 'faqSchema script tag missing in head');
  assert(langContent.includes('set:html={JSON.stringify(breadcrumbSchema)}'), 'breadcrumbSchema script tag missing in head');
});

// -----------------------------------------------------------------------------
// Test Suite 2: Visual E-E-A-T Metadata and Regulatory Badges
// -----------------------------------------------------------------------------
console.log('\n--- 2. Testing Visual E-E-A-T Byline & Regulatory Badges ---');

runTest('EN Page: Regulatory badge contains BfR, EU 10/2011, and FDA standards', () => {
  assert(enContent.includes('German BfR Opinion No. 046/2019'), 'BfR Opinion missing in badge');
  assert(enContent.includes('EU Regulation No 10/2011'), 'EU Regulation missing in badge');
  assert(enContent.includes('FDA Food Contact Notice'), 'FDA citation missing in badge');
});

runTest('EN Page: Author & Scientific Reviewer visual attribution is present', () => {
  assert(enContent.includes('Marcus Vance'), 'Author Marcus Vance missing from hero');
  assert(enContent.includes('Dr. Elena Rostova'), 'Reviewer Dr. Elena Rostova missing from hero');
  assert(enContent.includes('/methodology/'), 'Link to methodology missing from hero');
});

runTest('Localized Page: Hero header has localized E-E-A-T bylines', () => {
  assert(langContent.includes('current.authorLabel'), 'Localized authorLabel interpolation missing');
  assert(langContent.includes('current.reviewerLabel'), 'Localized reviewerLabel interpolation missing');
  assert(langContent.includes('current.methodologyUrl'), 'Localized methodologyUrl interpolation missing');
});

// -----------------------------------------------------------------------------
// Test Suite 3: Schema.org Validation for English & All Localized Versions
// -----------------------------------------------------------------------------
console.log('\n--- 3. Testing Schema.org JSON-LD Objects Across All Locales ---');

const locales = ['en', 'es', 'pt', 'zh-cn', 'ja'];

const mockLocaleContent = {
  es: {
    pageTitle: "Simulador de Lixiviación de Formaldehído y Melamina en Lavavajillas | IsItKitchenSafe",
    pageDescription: "Calcula la migración de formaldehído tóxico (HCHO) y melamina por calor de lavavajillas (>70°C), detergentes alcalinos cáusticos y microondas. Límites UE 10/2011 y BfR.",
    badge: "Dictamen BfR Alemán Nº 046/2019 · Reglamento UE 10/2011 · Notificación FDA",
    h1: "Simulador de Lixiviación de Formaldehído y Melamina en Lavavajillas",
    heroSub: "Protege la salud de tu familia al usar vajilla plástica...",
    breadcrumbs: [
      { label: "Inicio", href: "/es/" },
      { label: "Herramientas", href: "/es/tools/" },
      { label: "Simulador de Lixiviación de Melamina" }
    ],
    authorLabel: "Autor:",
    authorName: "Marcus Vance (Analista de Materiales)",
    reviewerLabel: "Revisión Científica:",
    reviewerName: "Dra. Elena Rostova, Ph.D.",
    methodologyLabel: "Metodología y Normativa",
    methodologyUrl: "/es/methodology/"
  },
  pt: {
    pageTitle: "Simulador de Lixiviação de Formaldeído e Melamina em Lava-Louças | IsItKitchenSafe",
    pageDescription: "Simule a migração de formaldeído (HCHO) e melamina sob ciclos térmicos de lava-louças (>70°C), pastilhas alcalinas e danos de micro-ondas. Padrões UE 10/2011 e BfR.",
    badge: "Parecer Alemão BfR Nº 046/2019 · Regulamento UE 10/2011 · Notificação FDA",
    h1: "Simulador de Lixiviação de Formaldeído e Melamina em Lava-Louças",
    heroSub: "Evite contaminação química em pratos e tigelas...",
    breadcrumbs: [
      { label: "Início", href: "/pt/" },
      { label: "Ferramentas", href: "/pt/tools/" },
      { label: "Simulador de Lixiviação de Melamina" }
    ],
    authorLabel: "Autor:",
    authorName: "Marcus Vance (Analista de Materiais)",
    reviewerLabel: "Revisão Científica:",
    reviewerName: "Dra. Elena Rostova, Ph.D.",
    methodologyLabel: "Metodologia e Normas",
    methodologyUrl: "/pt/methodology/"
  },
  'zh-cn': {
    pageTitle: "洗碗机密胺餐具甲醛与三聚氰胺溶出化学模拟器 | IsItKitchenSafe",
    pageDescription: "科学测算密胺（仿瓷）餐具在洗碗机高温烘干（>70°C）、强碱性洗碗块（pH > 10.5）及微波加热下的甲醛与三聚氰胺单体迁移浓度。依据欧盟 No 10/2011 与德国联邦 BfR 评估报告。",
    badge: "德国 BfR 第 046/2019 号评估 · 欧盟 No 10/2011 法规 · 美国 FDA 食品接触通报",
    h1: "洗碗机密胺餐具甲醛与三聚氰胺溶出化学模拟器",
    heroSub: "远离仿瓷餐具隐形毒素...",
    breadcrumbs: [
      { label: "首页", href: "/zh-cn/" },
      { label: "安全工具", href: "/zh-cn/tools/" },
      { label: "密胺餐具甲醛溶出模拟器" }
    ],
    authorLabel: "作者：",
    authorName: "Marcus Vance（材料工程分析师）",
    reviewerLabel: "科学审校：",
    reviewerName: "Elena Rostova 博士",
    methodologyLabel: "评估方法与法规",
    methodologyUrl: "/zh-cn/methodology/"
  },
  ja: {
    pageTitle: "食洗機メラミン食器のホルムアルデヒド溶出シミュレーター | IsItKitchenSafe",
    pageDescription: "食洗機の高温洗浄乾燥（70°C以上）、強アルカリ洗剤、レンジ誤加熱によるメラミンおよびホルムアルデヒドの食品移行濃度を科学的に予測。EU規則 10/2011＆ドイツBfR基準準拠。",
    badge: "ドイツBfR見解第046/2019号 · EU規則 No 10/2011 · 米国FDA食品接触ガイダンス",
    h1: "食洗機メラミン食器のホルムアルデヒド・メラミン溶出シミュレーター",
    heroSub: "プラスチック漆器や子供用食器の安全性を検証...",
    breadcrumbs: [
      { label: "ホーム", href: "/ja/" },
      { label: "ツール一覧", href: "/ja/tools/" },
      { label: "メラミン食器溶出シミュレーター" }
    ],
    authorLabel: "著者：",
    authorName: "マーカス・ヴァンス（材料分析アナリスト）",
    reviewerLabel: "科学監修：",
    reviewerName: "エレナ・ロストヴァ博士",
    methodologyLabel: "検証基準と根拠",
    methodologyUrl: "/ja/methodology/"
  }
};

for (const lang of locales) {
  console.log(`\n--- Validating Locale: [${lang.toUpperCase()}] ---`);

  const isEn = lang === 'en';
  const current = isEn
    ? {
        h1: "Dishwasher Melamine Formaldehyde & Cyanuric Acid Leaching Simulator",
        pageDescription: "Calculate formaldehyde (HCHO) and melamine monomer migration from dishwasher heat cycles (>70°C / 158°F), caustic alkaline detergents, and microwave damage. EU Regulation 10/2011 & German BfR standards.",
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools/' },
          { label: 'Dishwasher Melamine Leaching Simulator' }
        ]
      }
    : mockLocaleContent[lang];

  const canonicalUrl = isEn
    ? "https://isitkitchensafe.com/tools/dishwasher-melamine-leaching-simulator/"
    : `https://isitkitchensafe.com/${lang}/tools/dishwasher-melamine-leaching-simulator/`;

  const faqs = rawData.faqs[lang];
  assert(Array.isArray(faqs) && faqs.length === 5, `Expected 5 FAQs for ${lang}, found ${faqs ? faqs.length : 0}`);

  // Construct Schemas as generated in the Astro template
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": current.breadcrumbs[0].label,
        "item": new URL(current.breadcrumbs[0].href || (isEn ? '/' : `/${lang}/`), 'https://isitkitchensafe.com').href
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": current.breadcrumbs[1].label,
        "item": new URL(current.breadcrumbs[1].href || (isEn ? '/tools/' : `/${lang}/tools/`), 'https://isitkitchensafe.com').href
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": current.breadcrumbs[2].label,
        "item": canonicalUrl
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": current.h1,
    "url": canonicalUrl,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "description": current.pageDescription,
    "inLanguage": lang,
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IsItKitchenSafe",
      "url": "https://isitkitchensafe.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://isitkitchensafe.com/favicon.svg"
      }
    },
    "author": {
      "@type": "Person",
      "name": "Marcus Vance",
      "jobTitle": "Lead Hardware & Materials Analyst",
      "url": "https://isitkitchensafe.com/about/#editorial-board",
      "sameAs": "https://isitkitchensafe.com/about/",
      "affiliation": {
        "@type": "Organization",
        "name": "IsItKitchenSafe",
        "url": "https://isitkitchensafe.com"
      }
    },
    "reviewedBy": {
      "@type": "Person",
      "name": "Dr. Elena Rostova",
      "jobTitle": "Food Toxicology & Storage Contributor",
      "honorificPrefix": "Dr.",
      "url": "https://isitkitchensafe.com/about/#editorial-board",
      "sameAs": "https://isitkitchensafe.com/about/",
      "affiliation": {
        "@type": "Organization",
        "name": "IsItKitchenSafe",
        "url": "https://isitkitchensafe.com"
      }
    },
    "citation": [
      {
        "@type": "ScholarlyArticle",
        "name": "Release of melamine and formaldehyde from tableware made of melamine resin (BfR Opinion No. 046/2019)",
        "headline": "Release of melamine and formaldehyde from tableware made of melamine resin",
        "author": {
          "@type": "Organization",
          "name": "German Federal Institute for Risk Assessment (BfR)"
        },
        "url": "https://www.bfr.bund.de/cm/349/release-of-melamine-and-formaldehyde-from-tableware-made-of-melamine-resin.pdf",
        "datePublished": "2019-11-25"
      },
      {
        "@type": "Legislation",
        "name": "Commission Regulation (EU) No 10/2011 on plastic materials and articles intended to come into contact with food",
        "legislationIdentifier": "Regulation (EU) No 10/2011",
        "legislationPassedBy": {
          "@type": "Organization",
          "name": "European Commission"
        },
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011R0010"
      },
      {
        "@type": "ScholarlyArticle",
        "name": "FDA Food Contact Notification: Melamine-Formaldehyde Resin in Tableware",
        "headline": "Melamine Tableware Safety Guidance",
        "author": {
          "@type": "Organization",
          "name": "US Food and Drug Administration (FDA)"
        },
        "url": "https://www.fda.gov/food/packaging-food-contact-substances-fcs/melamine-tableware"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Test 1: JSON parse test
  runTest(`[${lang}] WebApplication: JSON.stringify + JSON.parse round-trip`, () => {
    const raw = JSON.stringify(webAppSchema);
    const parsed = JSON.parse(raw);
    assert.strictEqual(parsed['@context'], 'https://schema.org');
    assert.strictEqual(parsed['@type'], 'WebApplication');
    assert.strictEqual(parsed.name, current.h1);
    assert.strictEqual(parsed.url, canonicalUrl);
    assert.strictEqual(parsed.applicationCategory, 'UtilitiesApplication');
    assert.strictEqual(parsed.operatingSystem, 'All');
    assert.strictEqual(parsed.browserRequirements, 'Requires JavaScript. Requires HTML5.');
    assert.strictEqual(parsed.description, current.pageDescription);
    assert.strictEqual(parsed.inLanguage, lang);
    assert.strictEqual(parsed.isAccessibleForFree, true);
    assert.strictEqual(parsed.offers['@type'], 'Offer');
    assert.strictEqual(parsed.offers.price, '0');
    assert.strictEqual(parsed.offers.priceCurrency, 'USD');
    assert.strictEqual(parsed.publisher['@type'], 'Organization');
    assert.strictEqual(parsed.publisher.name, 'IsItKitchenSafe');
    assert.strictEqual(parsed.publisher.logo['@type'], 'ImageObject');
    assert.strictEqual(parsed.publisher.logo.url, 'https://isitkitchensafe.com/favicon.svg');
  });

  // Test 2: E-E-A-T credentials and citations
  runTest(`[${lang}] WebApplication: E-E-A-T Author, Reviewer & Regulatory Citations`, () => {
    const parsed = JSON.parse(JSON.stringify(webAppSchema));
    // Author
    assert.strictEqual(parsed.author['@type'], 'Person');
    assert.strictEqual(parsed.author.name, 'Marcus Vance');
    assert.strictEqual(parsed.author.jobTitle, 'Lead Hardware & Materials Analyst');
    assert.strictEqual(parsed.author.affiliation.name, 'IsItKitchenSafe');

    // Reviewer
    assert.strictEqual(parsed.reviewedBy['@type'], 'Person');
    assert.strictEqual(parsed.reviewedBy.name, 'Dr. Elena Rostova');
    assert.strictEqual(parsed.reviewedBy.honorificPrefix, 'Dr.');
    assert.strictEqual(parsed.reviewedBy.affiliation.name, 'IsItKitchenSafe');

    // Citations
    assert(Array.isArray(parsed.citation), 'citation must be an array');
    assert.strictEqual(parsed.citation.length, 3, 'Must contain 3 primary citations');
    assert(parsed.citation[0].name.includes('BfR Opinion No. 046/2019'), 'Citation 1 must be BfR');
    assert(parsed.citation[1].name.includes('Regulation (EU) No 10/2011'), 'Citation 2 must be EU 10/2011');
    assert(parsed.citation[2].name.includes('FDA Food Contact Notification'), 'Citation 3 must be FDA');
  });

  // Test 3: FAQPage Schema
  runTest(`[${lang}] FAQPage: JSON.parse & 5 Question/Answer validation`, () => {
    const raw = JSON.stringify(faqSchema);
    const parsed = JSON.parse(raw);
    assert.strictEqual(parsed['@context'], 'https://schema.org');
    assert.strictEqual(parsed['@type'], 'FAQPage');
    assert.strictEqual(parsed.mainEntity.length, 5);
    parsed.mainEntity.forEach((q, idx) => {
      assert.strictEqual(q['@type'], 'Question', `Item ${idx} must be Question`);
      assert(typeof q.name === 'string' && q.name.length > 5, `Question ${idx} question text invalid`);
      assert.strictEqual(q.acceptedAnswer['@type'], 'Answer', `Item ${idx} acceptedAnswer must be Answer`);
      assert(typeof q.acceptedAnswer.text === 'string' && q.acceptedAnswer.text.length > 20, `Answer ${idx} text invalid`);
    });
  });

  // Test 4: BreadcrumbList Schema
  runTest(`[${lang}] BreadcrumbList: 3 items with matching labels and URLs`, () => {
    const raw = JSON.stringify(breadcrumbSchema);
    const parsed = JSON.parse(raw);
    assert.strictEqual(parsed['@context'], 'https://schema.org');
    assert.strictEqual(parsed['@type'], 'BreadcrumbList');
    assert.strictEqual(parsed.itemListElement.length, 3);
    assert.strictEqual(parsed.itemListElement[0].position, 1);
    assert.strictEqual(parsed.itemListElement[0].name, current.breadcrumbs[0].label);
    assert.strictEqual(parsed.itemListElement[1].position, 2);
    assert.strictEqual(parsed.itemListElement[1].name, current.breadcrumbs[1].label);
    assert.strictEqual(parsed.itemListElement[2].position, 3);
    assert.strictEqual(parsed.itemListElement[2].name, current.breadcrumbs[2].label);
    assert.strictEqual(parsed.itemListElement[2].item, canonicalUrl);
  });
}

console.log('\n================================================================');
console.log(`SUMMARY: ${testsPassed} passed, ${testsFailed} failed out of ${testsPassed + testsFailed} tests.`);
console.log('================================================================');

if (testsFailed > 0) {
  process.exit(1);
} else {
  console.log('ALL SCHEMA & E-E-A-T AUDIT TESTS PASSED SUCCESSFULLY! ✨\n');
}
