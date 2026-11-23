const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #81: Induction Cooktop Thermal Shock Delamination & Acoustic Micro-Crack Modeler ===');

// 1. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
const toolSlug = 'induction-cooktop-delamination-modeler';

if (!allowlist.includes(toolSlug)) {
  allowlist.push(toolSlug);
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added '${toolSlug}' to allowlist. Total count: ${allowlist.length}`);
} else {
  console.log(`ℹ️ Already in allowlist. Total count: ${allowlist.length}`);
}

// 2. EN tool page schema injection
const enPath = path.resolve('src/pages/tools/induction-cooktop-delamination-modeler.astro');
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
      "name": "Induction Cooktop Delamination Modeler",
      "item": "https://isitkitchensafe.com/tools/induction-cooktop-delamination-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Induction Cooktop Thermal Shock Delamination & Acoustic Micro-Crack Modeler",
  "url": "https://isitkitchensafe.com/tools/induction-cooktop-delamination-modeler/",
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
  console.log('✅ Injected schemas into EN induction-cooktop-delamination-modeler.astro');
} else {
  console.log('ℹ️ EN page target not found or already injected');
}

// 3. Localized page src/pages/[lang]/tools/induction-cooktop-delamination-modeler.astro
const langPagePath = path.resolve('src/pages/[lang]/tools/induction-cooktop-delamination-modeler.astro');
let langPage = fs.readFileSync(langPagePath, 'utf8');

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
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/induction-cooktop-delamination-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.pageTitle,
  "url": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/induction-cooktop-delamination-modeler/\`,
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
  fs.writeFileSync(langPagePath, langPage, 'utf8');
  console.log('✅ Injected schemas into localized induction-cooktop-delamination-modeler.astro');
} else {
  console.log('ℹ️ Localized page target not found or already injected');
}

// 4. Update src/pages/tools/index.astro featuredHeroTools
const toolsIndexEnPath = path.resolve('src/pages/tools/index.astro');
let toolsIndexEn = fs.readFileSync(toolsIndexEnPath, 'utf8');

const heroMarkerEn = `const featuredHeroTools: SpotlightTool[] = [`;
const heroEntryEn = `const featuredHeroTools: SpotlightTool[] = [
  {
    slug: 'induction-cooktop-delamination-modeler',
    isNew: true,
    badge: 'Ceramic-Glass Physics · 3,700W Power Boost · Acoustic Micro-Crack Fracture',
    badgeClass: 'bg-amber-800 text-white',
    title: 'Induction Cooktop Thermal Shock Delamination & Acoustic Micro-Crack Modeler',
    desc: 'Model glass-ceramic interfacial acoustic stress, mechanical resonance from warped cookware bases, thermal shock gradients (>18°C/mm), and micro-crack expansion under rapid induction heating transients (20°C to 280°C in 30s).',
    cta: 'Model Induction Delamination & Shock',
    ctaClass: 'bg-amber-800 hover:bg-amber-900 text-white'
  },`;

if (!toolsIndexEn.includes("'induction-cooktop-delamination-modeler'") && toolsIndexEn.includes(heroMarkerEn)) {
  toolsIndexEn = toolsIndexEn.replace(heroMarkerEn, heroEntryEn);
  fs.writeFileSync(toolsIndexEnPath, toolsIndexEn, 'utf8');
  console.log('✅ Added induction-cooktop-delamination-modeler to featuredHeroTools in tools/index.astro');
} else {
  console.log('ℹ️ Already in featuredHeroTools or marker missing in tools/index.astro');
}

// 5. Update src/pages/[lang]/tools/index.astro for es, pt, zh-cn, ja
const toolsIndexLangPath = path.resolve('src/pages/[lang]/tools/index.astro');
let toolsIndexLang = fs.readFileSync(toolsIndexLangPath, 'utf8');

const esSpotlightCard = `      {
        slug: 'induction-cooktop-delamination-modeler',
        badge: 'Física Vitrocerámica · Modo Boost 3.700W · Fractura por Choque Térmico',
        badgeClass: 'bg-amber-800 text-white',
        title: 'Simulador de Choque Térmico, Delaminación y Microfisuras en Placas de Inducción',
        desc: 'Modele el estrés acústico interfacial, resonancia mecánica por menaje deformado, gradientes de choque térmico (>18°C/mm) y propagación de microfisuras bajo calentamiento por inducción rápido (20°C a 280°C en 30s).',
        cta: 'Simular Delaminación en Inducción',
        ctaClass: 'bg-amber-800 hover:bg-amber-900 text-white'
      },\n`;

const ptSpotlightCard = `      {
        slug: 'induction-cooktop-delamination-modeler',
        badge: 'Física Vitrocerâmica · Modo Boost 3.700W · Fratura por Choque Térmico',
        badgeClass: 'bg-amber-800 text-white',
        title: 'Simulador de Choque Térmico, Delaminação e Microfissuras em Cooktops de Indução',
        desc: 'Modele o estresse acústico interfacial, ressonância mecânica por panelas empenadas, gradientes de choque térmico (>18°C/mm) e propagação de microfissuras em placas vitrocerâmicas sob aquecimento rápido por indução (20°C a 280°C em 30s).',
        cta: 'Simular Delaminação em Indução',
        ctaClass: 'bg-amber-800 hover:bg-amber-900 text-white'
      },\n`;

const zhSpotlightCard = `      {
        slug: 'induction-cooktop-delamination-modeler',
        badge: '微晶玻璃断裂力学 · 3700W极速档 · 声学微裂纹与焦糖剥落',
        badgeClass: 'bg-amber-800 text-white',
        title: '电磁炉微晶玻璃面板热冲击分层剥蚀与声学微裂纹扩展模拟器',
        desc: '精确模拟电磁炉极速升温（30秒内20°C至280°C）工况下微晶面板与锅底热膨胀失配应力、锅底翘曲声学共振及焦糖腐蚀导致的裂纹剥蚀与破裂风险。',
        cta: '模拟电磁炉微晶分层风险',
        ctaClass: 'bg-amber-800 hover:bg-amber-900 text-white'
      },\n`;

const jaSpotlightCard = `      {
        slug: 'induction-cooktop-delamination-modeler',
        badge: '結晶化ガラス破壊力学 · 3700W急熱急冷 · 磁歪音響クラック＆糖分浸食',
        badgeClass: 'bg-amber-800 text-white',
        title: 'IHクッキングヒーター天板熱衝撃剥離＆音響マイクロクラックモデラー',
        desc: 'IH調理器の急激な加熱立ち上がり（30秒で20°Cから280°C）において、結晶化ガラス天板と鍋底の熱衝撃応力、鍋底変形による音響共振、焦げ付き糖分の化学的浸食動態を精密モデル化。',
        cta: 'IH天板熱衝撃剥離を解析',
        ctaClass: 'bg-amber-800 hover:bg-amber-900 text-white'
      },\n`;

if (!toolsIndexLang.includes("slug: 'induction-cooktop-delamination-modeler'")) {
  // Replace in ES (first occurrence before air-fryer-pah-resuspension-modeler)
  toolsIndexLang = toolsIndexLang.replace(
    /(\n\s+{\s+slug:\s+'air-fryer-pah-resuspension-modeler',\s+badge:\s+'Pirólisis Térmica)/,
    esSpotlightCard + '$1'
  );
  // Replace in PT
  toolsIndexLang = toolsIndexLang.replace(
    /(\n\s+{\s+slug:\s+'air-fryer-pah-resuspension-modeler',\s+badge:\s+'Pirólise Térmica)/,
    ptSpotlightCard + '$1'
  );
  // Replace in ZH
  toolsIndexLang = toolsIndexLang.replaceAll(
    /(\n\s+{\s+slug:\s+'air-fryer-pah-resuspension-modeler',\s+badge:\s+'油脂二次闪蒸热解)/g,
    zhSpotlightCard + '$1'
  );
  // Replace in JA
  toolsIndexLang = toolsIndexLang.replaceAll(
    /(\n\s+{\s+slug:\s+'air-fryer-pah-resuspension-modeler',\s+badge:\s+'油脂熱分解エアロゾル)/g,
    jaSpotlightCard + '$1'
  );

  fs.writeFileSync(toolsIndexLangPath, toolsIndexLang, 'utf8');
  console.log('✅ Injected spotlight cards into [lang]/tools/index.astro for es, pt, zh-cn, ja');
} else {
  console.log('ℹ️ Spotlight cards already present in [lang]/tools/index.astro');
}

// 6. Update src/pages/rss.xml.ts
const rssPath = path.resolve('src/pages/rss.xml.ts');
let rss = fs.readFileSync(rssPath, 'utf8');

const rssTarget = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [`;

const rssEntry = `const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/induction-cooktop-delamination-modeler/',
    title: 'Induction Cooktop Thermal Shock Delamination & Acoustic Micro-Crack Modeler',
    description:
      'Model glass-ceramic interfacial acoustic stress, mechanical resonance from warped cookware bases, thermal shock gradients, and micro-crack expansion under rapid induction heating transients (20°C to 280°C in 30s).',
    date: '2026-11-23'
  },`;

if (!rss.includes("path: '/tools/induction-cooktop-delamination-modeler/'") && rss.includes(rssTarget)) {
  rss = rss.replace(rssTarget, rssEntry);
  fs.writeFileSync(rssPath, rss, 'utf8');
  console.log('✅ Injected induction-cooktop-delamination-modeler into rss.xml.ts');
} else {
  console.log('ℹ️ Tool already in rss.xml.ts or marker missing');
}

console.log('=== CONSUMER TOOL #81 ELEVATION COMPLETE ===');
