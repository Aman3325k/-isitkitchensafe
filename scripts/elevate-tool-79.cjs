const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #79: Cold Brew Commercial Nitro Dispenser Biofilm Modeler ===');

// 1. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
const toolSlug = 'cold-brew-nitro-biofilm-modeler';

if (!allowlist.includes(toolSlug)) {
  allowlist.push(toolSlug);
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added '${toolSlug}' to allowlist. Total count: ${allowlist.length}`);
} else {
  console.log(`ℹ️ Already in allowlist. Total count: ${allowlist.length}`);
}

// 2. EN tool page schema injection
const enPath = path.resolve('src/pages/tools/cold-brew-nitro-biofilm-modeler.astro');
let en = fs.readFileSync(enPath, 'utf8');

const enTarget = `---

<Layout title={pageTitle} description={pageDescription} faqs={faqs} availableLocales={['en', 'es', 'pt', 'zh-cn', 'ja']}>`;

const enReplacement = `
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://isitkitchensafe.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tools",
      "item": "https://isitkitchensafe.com/tools/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cold Brew Nitro Biofilm Modeler",
      "item": "https://isitkitchensafe.com/tools/cold-brew-nitro-biofilm-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Cold Brew Commercial Nitro Dispenser Biofilm & Pressure Line Modeler",
  "url": "https://isitkitchensafe.com/tools/cold-brew-nitro-biofilm-modeler/",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "description": pageDescription,
  "inLanguage": "en",
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
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
---

<Layout
  title={pageTitle}
  description={pageDescription}
  faqs={faqs}
  excludeFaqSchema={true}
  excludeBreadcrumbSchema={true}
  availableLocales={['en', 'es', 'pt', 'zh-cn', 'ja']}
>
  <Fragment slot="head">
    <script type="application/ld+json" is:inline set:html={JSON.stringify(webAppSchema)} />
    <script type="application/ld+json" is:inline set:html={JSON.stringify(faqSchema)} />
    <script type="application/ld+json" is:inline set:html={JSON.stringify(breadcrumbSchema)} />
  </Fragment>`;

if (en.includes(enTarget)) {
  en = en.replace(enTarget, enReplacement);
  fs.writeFileSync(enPath, en, 'utf8');
  console.log('✅ Injected schemas into EN cold-brew-nitro-biofilm-modeler.astro');
} else {
  console.log('ℹ️ EN page target not found or already injected');
}

// 3. Localized tool page schema injection
const langPath = path.resolve('src/pages/[lang]/tools/cold-brew-nitro-biofilm-modeler.astro');
let langPage = fs.readFileSync(langPath, 'utf8');

const langTarget = `const c = CONTENT[lang];
---

<Layout title={c.pageTitle} description={c.pageDescription} faqs={c.faqs} availableLocales={availableLocales}>`;

const langReplacement = `const c = CONTENT[lang];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": lang === 'es' ? 'Inicio' : lang === 'pt' ? 'Início' : lang === 'zh-cn' ? '首页' : 'ホーム',
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}\`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": lang === 'es' ? 'Herramientas' : lang === 'pt' ? 'Ferramentas' : lang === 'zh-cn' ? '实用工具' : 'ツール',
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/\`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": c.breadcrumbs && c.breadcrumbs[2] ? c.breadcrumbs[2].label : c.pageTitle,
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/cold-brew-nitro-biofilm-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.pageTitle,
  "url": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/cold-brew-nitro-biofilm-modeler/\`,
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "description": c.pageDescription,
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
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": c.faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
---

<Layout
  title={c.pageTitle}
  description={c.pageDescription}
  faqs={c.faqs}
  excludeFaqSchema={true}
  excludeBreadcrumbSchema={true}
  availableLocales={availableLocales}
>
  <Fragment slot="head">
    <script type="application/ld+json" is:inline set:html={JSON.stringify(webAppSchema)} />
    <script type="application/ld+json" is:inline set:html={JSON.stringify(faqSchema)} />
    <script type="application/ld+json" is:inline set:html={JSON.stringify(breadcrumbSchema)} />
  </Fragment>`;

if (langPage.includes(langTarget)) {
  langPage = langPage.replace(langTarget, langReplacement);
  fs.writeFileSync(langPath, langPage, 'utf8');
  console.log('✅ Injected schemas into localized [lang]/tools/cold-brew-nitro-biofilm-modeler.astro');
} else {
  console.log('ℹ️ Localized page target not found or already injected');
}

// 4. Update src/pages/tools/index.astro featuredHeroTools
const toolsIndexEnPath = path.resolve('src/pages/tools/index.astro');
let toolsIndexEn = fs.readFileSync(toolsIndexEnPath, 'utf8');

const heroMarkerEn = `const featuredHeroTools: SpotlightTool[] = [`;
const heroEntryEn = `const featuredHeroTools: SpotlightTool[] = [
  {
    slug: 'cold-brew-nitro-biofilm-modeler',
    isNew: true,
    badge: 'NSF/ANSI 18 Cleanability · 50 PSI Draft Slime · Dual-Stage CIP Inactivation',
    badgeClass: 'bg-slate-800 text-white',
    title: 'Cold Brew Commercial Nitro Dispenser Biofilm & Pressure Line Modeler',
    desc: 'Model high-pressure N2/N2O draft line biofilm kinetics, psychrotrophic bacterial proliferation (Pseudomonas, Acetobacter), fungal hyphae stagnation, and CIP chemical sanitization failure under NSF/ANSI Standard 18.',
    cta: 'Model Cold Brew Biofilm Risks',
    ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
  },`;

if (!toolsIndexEn.includes("'cold-brew-nitro-biofilm-modeler'") && toolsIndexEn.includes(heroMarkerEn)) {
  toolsIndexEn = toolsIndexEn.replace(heroMarkerEn, heroEntryEn);
  fs.writeFileSync(toolsIndexEnPath, toolsIndexEn, 'utf8');
  console.log('✅ Added cold-brew-nitro-biofilm-modeler to featuredHeroTools in tools/index.astro');
} else {
  console.log('ℹ️ Already in featuredHeroTools or marker missing in tools/index.astro');
}

// 5. Update src/pages/[lang]/tools/index.astro for es, pt, zh-cn, ja
const toolsIndexLangPath = path.resolve('src/pages/[lang]/tools/index.astro');
let toolsIndexLang = fs.readFileSync(toolsIndexLangPath, 'utf8');

const esSpotlightCard = `      {
        slug: 'cold-brew-nitro-biofilm-modeler',
        badge: 'Higiene NSF/ANSI 18 · Biofilm a 50 PSI · Desinfección CIP en Dos Etapas',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Biofilm en Líneas de Presión de Dispensadores Nitro de Café Cold Brew',
        desc: 'Modele la cinética de biopelículas en líneas de tiro bajo 50 PSI de N2, proliferación de bacterias psicrotróficas (Pseudomonas, Acetobacter), estancamiento de hifas fúngicas y protocolos de limpieza CIP según NSF/ANSI 18.',
        cta: 'Simular Biofilm en Cold Brew',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },\n`;

const ptSpotlightCard = `      {
        slug: 'cold-brew-nitro-biofilm-modeler',
        badge: 'Higiene NSF/ANSI 18 · Biofilme a 50 PSI · Desinfecção CIP em Duas Etapas',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Biofilme em Linhas de Pressão de Dispensadores Nitro de Cold Brew',
        desc: 'Simule a cinética de biofilmes em linhas de chope sob 50 PSI de N2, proliferação de bactérias psicrotróficas (Pseudomonas, Acetobacter), estagnação fúngica e protocolos de higienização CIP conforme NSF/ANSI 18.',
        cta: 'Simular Biofilme em Cold Brew',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },\n`;

const zhSpotlightCard = `      {
        slug: 'cold-brew-nitro-biofilm-modeler',
        badge: 'NSF/ANSI 18卫生标准 · 50 PSI氮气管路生物膜 · 双阶段CIP原位清洗',
        badgeClass: 'bg-slate-800 text-white',
        title: '商用冷萃氮气咖啡机压力管路生物膜黏附与原位CIP化学清洗失效模拟器',
        desc: '精密模拟40–50 PSI高纯氮气管路中低酸咖啡基质诱发的耐冷嗜冷菌（荧光假单胞菌、醋酸杆菌）微生态菌落增殖、EPS多糖黏液屏障生成及NSF 18双阶段苛性钠/过乙酸清洗动力学。',
        cta: '模拟冷萃氮气管路生物膜风险',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },\n`;

const jaSpotlightCard = `      {
        slug: 'cold-brew-nitro-biofilm-modeler',
        badge: 'NSF/ANSI 18衛生基準 · 50 PSI窒素配管バイオフィルム · 2段階CIP定置洗浄',
        badgeClass: 'bg-slate-800 text-white',
        title: '業務用コールドブリュー窒素抽出サーバー高圧配管バイオフィルム＆CIP洗浄モデラー',
        desc: '40〜50 PSI高圧窒素ライン内の低酸性コーヒー基質における低温細菌（シュードモナス属等）の付着増殖、EPS粘液マトリクス形成、NSF 18準拠の苛性ソーダ/過酢酸2段階CIP洗浄プロトコルを解析。',
        cta: '配管バイオフィルムリスクを解析',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },\n`;

if (!toolsIndexLang.includes("slug: 'cold-brew-nitro-biofilm-modeler'")) {
  // Replace in ES
  toolsIndexLang = toolsIndexLang.replace(
    /(\n\s+{\s+slug:\s+'food-processor-blade-fatigue-modeler',\s+badge:\s+'Fuerza)/,
    esSpotlightCard + '$1'
  );
  // Replace in PT
  toolsIndexLang = toolsIndexLang.replace(
    /(\n\s+{\s+slug:\s+'food-processor-blade-fatigue-modeler',\s+badge:\s+'Força)/,
    ptSpotlightCard + '$1'
  );
  // Replace in ZH
  toolsIndexLang = toolsIndexLang.replaceAll(
    /(\n\s+{\s+slug:\s+'food-processor-blade-fatigue-modeler',\s+badge:\s+'1,000g离心加速度)/g,
    zhSpotlightCard + '$1'
  );
  // Replace in JA
  toolsIndexLang = toolsIndexLang.replaceAll(
    /(\n\s+{\s+slug:\s+'food-processor-blade-fatigue-modeler',\s+badge:\s+'1,000g遠心加速度)/g,
    jaSpotlightCard + '$1'
  );

  fs.writeFileSync(toolsIndexLangPath, toolsIndexLang, 'utf8');
  console.log('✅ Injected spotlight cards into [lang]/tools/index.astro for es, pt, zh-cn, ja');
} else {
  console.log('ℹ️ Spotlight cards already present in [lang]/tools/index.astro');
}

console.log('=== CONSUMER TOOL #79 ELEVATION COMPLETE ===');
