const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #78: Food Processor Blade Fatigue & Bowl Crazing Modeler ===');

// 1. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
const toolSlug = 'food-processor-blade-fatigue-modeler';

if (!allowlist.includes(toolSlug)) {
  allowlist.push(toolSlug);
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added '${toolSlug}' to allowlist. Total count: ${allowlist.length}`);
} else {
  console.log(`ℹ️ Already in allowlist. Total count: ${allowlist.length}`);
}

// 2. EN tool page schema injection
const enPath = path.resolve('src/pages/tools/food-processor-blade-fatigue-modeler.astro');
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
      "name": "Food Processor Blade Fatigue Modeler",
      "item": "https://isitkitchensafe.com/tools/food-processor-blade-fatigue-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Food Processor Centrifugal Stress & Polycarbonate Blade Fatigue Modeler",
  "url": "https://isitkitchensafe.com/tools/food-processor-blade-fatigue-modeler/",
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
  console.log('✅ Injected schemas into src/pages/tools/food-processor-blade-fatigue-modeler.astro');
} else if (en.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in EN tool page');
} else {
  console.error('❌ enTarget not found in EN tool page');
}

// 3. [lang] tool page schema injection
const langPath = path.resolve('src/pages/[lang]/tools/food-processor-blade-fatigue-modeler.astro');
let langContent = fs.readFileSync(langPath, 'utf8');

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
      "name": "Home",
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}\`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tools",
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/\`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": c.breadcrumbs && c.breadcrumbs[2] ? c.breadcrumbs[2].label : c.pageTitle,
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/food-processor-blade-fatigue-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.pageTitle,
  "url": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/food-processor-blade-fatigue-modeler/\`,
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

if (langContent.includes(langTarget)) {
  langContent = langContent.replace(langTarget, langReplacement);
  fs.writeFileSync(langPath, langContent, 'utf8');
  console.log('✅ Injected schemas into src/pages/[lang]/tools/food-processor-blade-fatigue-modeler.astro');
} else if (langContent.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in [lang] tool page');
} else {
  console.error('❌ langTarget not found in [lang] tool page');
}

// 4. Update src/pages/tools/index.astro hero card
const toolsIndex = path.resolve('src/pages/tools/index.astro');
let toolsIndexContent = fs.readFileSync(toolsIndex, 'utf8');

const heroTargetEn = `  {
    slug: 'espresso-machine-heavy-metal-modeler',
    isNew: true,
    badge: 'NSF/ANSI 372 Lead-Free · CW614N Brass De-Zincification · 950 µg/L BfR Spike',
    badgeClass: 'bg-slate-800 text-white',
    title: 'Espresso Machine Thermoblock Heavy Metal Leaching & Lead Descaling Modeler',
    desc: 'Model brass boiler and thermoblock lead and copper leaching during 92°C–96°C 9-bar extraction, citric acid descaling corrosion, and certified post-clean flushing protocols.',
    cta: 'Model Espresso Metallurgy Risks',
    ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
  },`;

const heroCardEn = `  {
    slug: 'food-processor-blade-fatigue-modeler',
    isNew: true,
    badge: '1,000g Centrifugal Stress · Martensitic 420 Fatigue · Polycarbonate Crazing',
    badgeClass: 'bg-slate-800 text-white',
    title: 'Food Processor Centrifugal Stress & Polycarbonate Blade Fatigue Modeler',
    desc: 'Model rotational biomechanics, S-blade centrifugal g-forces up to 1,000g, dishwasher alkaline crazing in polycarbonate work bowls, and stainless steel micro-chipping hazards.',
    cta: 'Model Blade Fatigue & Bowl Crazing',
    ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
  },`;

if (!toolsIndexContent.includes("slug: 'food-processor-blade-fatigue-modeler',\n    isNew: true,")) {
  if (toolsIndexContent.includes(heroTargetEn)) {
    toolsIndexContent = toolsIndexContent.replace(heroTargetEn, heroCardEn + '\n' + heroTargetEn);
    fs.writeFileSync(toolsIndex, toolsIndexContent, 'utf8');
    console.log('✅ Added EN hero card to src/pages/tools/index.astro');
  } else {
    console.error('❌ heroTargetEn not found in src/pages/tools/index.astro');
  }
} else {
  console.log('ℹ️ EN hero card already present in src/pages/tools/index.astro');
}

// 5. Update src/pages/[lang]/tools/index.astro hero cards
const langToolsIndex = path.resolve('src/pages/[lang]/tools/index.astro');
let langIndexContent = fs.readFileSync(langToolsIndex, 'utf8');

const esHeroTarget = `      {
        slug: 'espresso-machine-heavy-metal-modeler',
        badge: 'NSF/ANSI 372 Sin Plomo · Deszincificación Latón CW614N · Pico 950 µg/L BfR',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviación de Metales Pesados y Plomo en Cafeteras Espresso',
        desc: 'Modele la lixiviación de plomo y cobre en calderas de latón durante la extracción a 9 bares (92°C–96°C), la corrosión ácida por descalcificación y los protocolos de purga certificados.',
        cta: 'Simular Riesgos de Metales Pesados',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const esHeroBlock = `      {
        slug: 'food-processor-blade-fatigue-modeler',
        badge: 'Fuerza Centrífuga 1.000g · Fatiga Acero 420 · Agrietamiento de Policarbonato',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Tensión Centrífuga y Fatiga de Cuchillas en Procesadores de Alimentos',
        desc: 'Modele la biomecánica rotacional, fuerzas centrífugas de hasta 1.000g en cuchillas en S, el agrietamiento alcalino en lavavajillas de recipientes de policarbonato y el riesgo de microastillas metálicas.',
        cta: 'Simular Fatiga de Cuchilla y Crazing',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const ptHeroTarget = `      {
        slug: 'espresso-machine-heavy-metal-modeler',
        badge: 'NSF/ANSI 372 Sem Chumbo · Deszincificação Latão CW614N · Pico 950 µg/L BfR',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviação de Metais Pesados e Chumbo em Máquinas de Espresso',
        desc: 'Modele a lixiviação de chumbo e cobre em caldeiras de latão durante a extração a 9 bar (92°C–96°C), a corrosão ácida por descalcificação e os protocolos de purga certificados.',
        cta: 'Simular Riscos de Metais Pesados',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const ptHeroBlock = `      {
        slug: 'food-processor-blade-fatigue-modeler',
        badge: 'Força Centrífuga 1.000g · Fadiga Aço 420 · Fissuração em Policarbonato',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Tensão Centrífuga e Fadiga de Lâminas de Processador de Alimentos',
        desc: 'Simule a biomecânica rotacional, forças centrífugas de até 1.000g em lâminas em S, microfissuras alcalinas na lava-louças em tigelas de policarbonato e riscos de microfragmentos de aço.',
        cta: 'Simular Fadiga de Lâmina e Crazing',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const zhHeroTarget = `      {
        slug: 'espresso-machine-heavy-metal-modeler',
        badge: 'NSF/ANSI 372无铅化 · CW614N黄铜脱锌 · BfR实测950 µg/L铅峰值',
        badgeClass: 'bg-slate-800 text-white',
        title: '意式浓缩咖啡机锅炉加热块重金属析出与除垢铅溶出动力学模拟器',
        desc: '精确模拟92°C–96°C高温与9 Bar高压萃取及柠檬酸化学除垢工况下，黄铜锅炉、铝合金加热块中铅与铜离子析出浓度，对标NSF/ANSI 372低铅标准与四步排毒规程。',
        cta: '模拟咖啡机重金属溶出风险',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const zhHeroBlock = `      {
        slug: 'food-processor-blade-fatigue-modeler',
        badge: '1,000g离心加速度 · 马氏体420不锈钢疲劳 · 聚碳酸酯碱性水解银纹',
        badgeClass: 'bg-slate-800 text-white',
        title: '食物料理机高速离心剪切应力与S型刀片疲劳断裂/料理碗银纹模拟器',
        desc: '精密模拟1,500–2,400 RPM高速旋转下S型刀片承受的高达1,000g离心冲击、硬质食材碰撞微裂纹扩展脱落，洗碗机强碱性水解催化的聚碳酸酯料理碗脆化爆裂风险。',
        cta: '模拟刀片疲劳断裂与料理碗脆化',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const jaHeroTarget = `      {
        slug: 'espresso-machine-heavy-metal-modeler',
        badge: 'NSF/ANSI 372無鉛基準 · CW614N真鍮脱亜鉛 · 独BfR最大950 µg/L鉛溶出',
        badgeClass: 'bg-slate-800 text-white',
        title: 'エスプレッソマシン金属溶出＆スケール除去鉛リスクモデラー',
        desc: '9気圧高温（92°C〜96°C）抽出およびクエン酸酸洗浄条件下での真鍮ボイラーからの鉛・銅イオン溶出動態、脱亜鉛腐食、および4ステップ完全すすぎプロトコルを解析。',
        cta: '金属溶出リスクを解析',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const jaHeroBlock = `      {
        slug: 'food-processor-blade-fatigue-modeler',
        badge: '1,000g遠心加速度 · マルテンサイト420鋼疲労 · ポリカーボネート加水分解',
        badgeClass: 'bg-slate-800 text-white',
        title: 'フードプロセッサー遠心応力＆S字ブレード金属疲労/ボウル白化破損モデラー',
        desc: '1,500〜2,400 RPM高速回転時のS字ブレードに加わる最大1,000g遠心応力、硬質食材衝撃による刃こぼれ金属片混入、食洗機アルカリ加水分解によるポリカーボネートボウル亀裂破損を解析。',
        cta: '金属疲労＆ボウル劣化を解析',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

if (!langIndexContent.includes("badge: 'Fuerza Centrífuga 1.000g · Fatiga Acero 420 · Agrietamiento de Policarbonato'")) {
  if (langIndexContent.includes(esHeroTarget)) {
    langIndexContent = langIndexContent.replaceAll(esHeroTarget, esHeroBlock + '\n' + esHeroTarget);
    console.log('✅ Added ES hero block to [lang]/tools/index.astro');
  }
  if (langIndexContent.includes(ptHeroTarget)) {
    langIndexContent = langIndexContent.replaceAll(ptHeroTarget, ptHeroBlock + '\n' + ptHeroTarget);
    console.log('✅ Added PT hero block to [lang]/tools/index.astro');
  }
  if (langIndexContent.includes(zhHeroTarget)) {
    langIndexContent = langIndexContent.replaceAll(zhHeroTarget, zhHeroBlock + '\n' + zhHeroTarget);
    console.log('✅ Added ZH hero block to [lang]/tools/index.astro');
  }
  if (langIndexContent.includes(jaHeroTarget)) {
    langIndexContent = langIndexContent.replaceAll(jaHeroTarget, jaHeroBlock + '\n' + jaHeroTarget);
    console.log('✅ Added JA hero block to [lang]/tools/index.astro');
  }
  fs.writeFileSync(langToolsIndex, langIndexContent, 'utf8');
} else {
  console.log('ℹ️ Hero blocks already present in [lang]/tools/index.astro');
}

console.log('=== ELEVATING CONSUMER TOOL #78 COMPLETE ===');
