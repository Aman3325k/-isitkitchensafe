const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #77: Espresso Machine Heavy Metal & Lead Descaling Modeler ===');

// 1. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
const toolSlug = 'espresso-machine-heavy-metal-modeler';

if (!allowlist.includes(toolSlug)) {
  allowlist.push(toolSlug);
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added '${toolSlug}' to allowlist. Total count: ${allowlist.length}`);
} else {
  console.log(`ℹ️ Already in allowlist. Total count: ${allowlist.length}`);
}

// 2. EN tool page schema injection
const enPath = path.resolve('src/pages/tools/espresso-machine-heavy-metal-modeler.astro');
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
      "name": "Espresso Machine Heavy Metal Modeler",
      "item": "https://isitkitchensafe.com/tools/espresso-machine-heavy-metal-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Espresso Machine Thermoblock Heavy Metal Leaching & Lead Descaling Modeler",
  "url": "https://isitkitchensafe.com/tools/espresso-machine-heavy-metal-modeler/",
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
  console.log('✅ Injected schemas into src/pages/tools/espresso-machine-heavy-metal-modeler.astro');
} else if (en.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in EN tool page');
} else {
  console.error('❌ enTarget not found in EN tool page');
}

// 3. [lang] tool page schema injection
const langPath = path.resolve('src/pages/[lang]/tools/espresso-machine-heavy-metal-modeler.astro');
let langContent = fs.readFileSync(langPath, 'utf8');

const langTarget = `const c = CONTENT[lang];
---

<Layout title={c.pageTitle} description={c.pageDescription} faqs={c.faqs} availableLocales={['en', 'es', 'pt', 'zh-cn', 'ja']}>`;

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
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/espresso-machine-heavy-metal-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.pageTitle,
  "url": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/espresso-machine-heavy-metal-modeler/\`,
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
  availableLocales={['en', 'es', 'pt', 'zh-cn', 'ja']}
>
  <Fragment slot="head">
    <script type="application/ld+json" is:inline set:html={JSON.stringify(webAppSchema)} />
    <script type="application/ld+json" is:inline set:html={JSON.stringify(faqSchema)} />
    <script type="application/ld+json" is:inline set:html={JSON.stringify(breadcrumbSchema)} />
  </Fragment>`;

if (langContent.includes(langTarget)) {
  langContent = langContent.replace(langTarget, langReplacement);
  fs.writeFileSync(langPath, langContent, 'utf8');
  console.log('✅ Injected schemas into src/pages/[lang]/tools/espresso-machine-heavy-metal-modeler.astro');
} else if (langContent.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in [lang] tool page');
} else {
  console.error('❌ langTarget not found in [lang] tool page');
}

// 4. Update src/pages/tools/index.astro hero card
const toolsIndex = path.resolve('src/pages/tools/index.astro');
let toolsIndexContent = fs.readFileSync(toolsIndex, 'utf8');

const heroTarget = `  {
    slug: 'blender-blade-cavitation-safety-modeler',
    isNew: true,
    badge: '20,000+ RPM Vortex Cavitation · Viscous Friction Heating · ASTM C149 Thermal Shock',
    badgeClass: 'bg-slate-800 text-white',
    title: 'Blender Blade Friction Thermal Degradation & Micro-Cavitation Safety Modeler',
    desc: 'Model 20,000+ RPM blade tip vortex cavitation, viscous friction heating, sealed bullet cup steam explosion hazards, and blade bearing grease migration risks.',
    cta: 'Model Blender Cavitation & Thermal Risks',
    ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
  },`;

const heroCardEn = `  {
    slug: 'espresso-machine-heavy-metal-modeler',
    isNew: true,
    badge: 'NSF/ANSI 372 Lead-Free · CW614N Brass De-Zincification · 950 µg/L BfR Spike',
    badgeClass: 'bg-slate-800 text-white',
    title: 'Espresso Machine Thermoblock Heavy Metal Leaching & Lead Descaling Modeler',
    desc: 'Model brass boiler and thermoblock lead and copper leaching during 92°C–96°C 9-bar extraction, citric acid descaling corrosion, and certified post-clean flushing protocols.',
    cta: 'Model Espresso Metallurgy Risks',
    ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
  },`;

if (!toolsIndexContent.includes("slug: 'espresso-machine-heavy-metal-modeler',\n    isNew: true,")) {
  if (toolsIndexContent.includes(heroTarget)) {
    toolsIndexContent = toolsIndexContent.replace(heroTarget, heroCardEn + '\n' + heroTarget);
    fs.writeFileSync(toolsIndex, toolsIndexContent, 'utf8');
    console.log('✅ Added EN hero card to src/pages/tools/index.astro');
  } else {
    console.error('❌ heroTarget not found in src/pages/tools/index.astro');
  }
} else {
  console.log('ℹ️ EN hero card already present in src/pages/tools/index.astro');
}

// 5. Update src/pages/[lang]/tools/index.astro hero cards
const langToolsIndex = path.resolve('src/pages/[lang]/tools/index.astro');
let langIndexContent = fs.readFileSync(langToolsIndex, 'utf8');

const esHeroTarget = `      {
        slug: 'blender-blade-cavitation-safety-modeler',
        badge: 'Cavitación de Vórtice a 20.000+ RPM · Calentamiento por Fricción Viscosa · Choque Térmico ASTM C149',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Seguridad de Cuchillas de Batidora: Fricción y Cavitación',
        desc: 'Modele la cavitación por vórtice a 20.000+ RPM, calentamiento por fricción viscosa, riesgo de explosión por vapor en vasos cerrados y fuga de grasa del rodamiento.',
        cta: 'Simular Cavitación y Fricción',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const esHeroBlock = `      {
        slug: 'espresso-machine-heavy-metal-modeler',
        badge: 'NSF/ANSI 372 Sin Plomo · Deszincificación Latón CW614N · Pico 950 µg/L BfR',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviación de Metales Pesados y Plomo en Cafeteras Espresso',
        desc: 'Modele la lixiviación de plomo y cobre en calderas de latón durante la extracción a 9 bares (92°C–96°C), la corrosión ácida por descalcificación y los protocolos de purga certificados.',
        cta: 'Simular Riesgos de Metales Pesados',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const ptHeroTarget = `      {
        slug: 'blender-blade-cavitation-safety-modeler',
        badge: 'Cavitação de Vórtice a 20.000+ RPM · Aquecimento por Fricção Viscosa · Choque Térmico ASTM C149',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Segurança de Lâminas de Liquidificador: Atrito e Cavitação',
        desc: 'Simule a cavitação por vórtice a 20.000+ RPM, aquecimento por cisalhamento viscoso, risco de explosão por vapor em copos vedados e migração de graxa de rolamento.',
        cta: 'Simular Cavitação e Atrito',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const ptHeroBlock = `      {
        slug: 'espresso-machine-heavy-metal-modeler',
        badge: 'NSF/ANSI 372 Sem Chumbo · Deszincificação Latão CW614N · Pico 950 µg/L BfR',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviação de Metais Pesados e Chumbo em Máquinas de Espresso',
        desc: 'Modele a lixiviação de chumbo e cobre em caldeiras de latão durante a extração a 9 bar (92°C–96°C), a corrosão ácida por descalcificação e os protocolos de purga certificados.',
        cta: 'Simular Riscos de Metais Pesados',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const zhHeroTarget = `      {
        slug: 'blender-blade-cavitation-safety-modeler',
        badge: '20000+转速涡流空化 · 粘性摩擦剪切生热 · ASTM C149热震断裂',
        badgeClass: 'bg-slate-800 text-white',
        title: '破壁料理机刀头高速摩擦热解聚与涡流微空化安全毒理模拟器',
        desc: '模拟20,000+ RPM超高转速刀尖涡流空化微射流、浓稠食材粘性剪切摩擦极速升温、密封随行杯蒸汽爆沸冲顶爆炸，以及主轴轴承润滑脂渗漏风险。',
        cta: '模拟料理机空化与摩擦风险',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const zhHeroBlock = `      {
        slug: 'espresso-machine-heavy-metal-modeler',
        badge: 'NSF/ANSI 372无铅化 · CW614N黄铜脱锌 · BfR实测950 µg/L铅峰值',
        badgeClass: 'bg-slate-800 text-white',
        title: '意式浓缩咖啡机锅炉加热块重金属析出与除垢铅溶出动力学模拟器',
        desc: '精确模拟92°C–96°C高温与9 Bar高压萃取及柠檬酸化学除垢工况下，黄铜锅炉、铝合金加热块中铅与铜离子析出浓度，对标NSF/ANSI 372低铅标准与四步排毒规程。',
        cta: '模拟咖啡机重金属溶出风险',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const jaHeroTarget = `      {
        slug: 'blender-blade-cavitation-safety-modeler',
        badge: '20,000+ RPM翼端渦キャビテーション · 粘性摩擦発熱 · ASTM C149熱衝撃破断',
        badgeClass: 'bg-slate-800 text-white',
        title: 'ブレンダーブレード高速摩擦熱解重合＆微小キャビテーション安全シミュレーター',
        desc: '20,000+ RPM高速回転による翼端渦キャビテーション微小噴流衝撃、粘性剪断摩擦による急速発熱、密閉タンブラーの蒸気爆発膨張、および軸受グリース漏洩リスクを解析。',
        cta: 'キャビテーション熱リスクを解析',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const jaHeroBlock = `      {
        slug: 'espresso-machine-heavy-metal-modeler',
        badge: 'NSF/ANSI 372無鉛基準 · CW614N真鍮脱亜鉛 · 独BfR最大950 µg/L鉛溶出',
        badgeClass: 'bg-slate-800 text-white',
        title: 'エスプレッソマシン金属溶出＆スケール除去鉛リスクモデラー',
        desc: '9気圧高温（92°C〜96°C）抽出およびクエン酸酸洗浄条件下での真鍮ボイラーからの鉛・銅イオン溶出動態、脱亜鉛腐食、および4ステップ完全すすぎプロトコルを解析。',
        cta: '金属溶出リスクを解析',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

if (!langIndexContent.includes("badge: 'NSF/ANSI 372 Sin Plomo · Deszincificación Latón CW614N · Pico 950 µg/L BfR'")) {
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

console.log('=== ELEVATING CONSUMER TOOL #77 COMPLETE ===');
