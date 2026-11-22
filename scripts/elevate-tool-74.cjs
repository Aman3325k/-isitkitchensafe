const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #74: Silicone Spatula Oligomer Leaching Modeler ===');

// 1. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
const toolSlug = 'silicone-spatula-oligomer-leaching-modeler';

if (!allowlist.includes(toolSlug)) {
  allowlist.push(toolSlug);
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added '${toolSlug}' to allowlist. Total count: ${allowlist.length}`);
} else {
  console.log(`ℹ️ Already in allowlist. Total count: ${allowlist.length}`);
}

// 2. EN tool page
const enPath = path.resolve('src/pages/tools/silicone-spatula-oligomer-leaching-modeler.astro');
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
      "name": "Silicone Spatula Oligomer Leaching Modeler",
      "item": "https://isitkitchensafe.com/tools/silicone-spatula-oligomer-leaching-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Silicone Spatula & Utensil High-Heat Oligomer Leaching Modeler",
  "url": "https://isitkitchensafe.com/tools/silicone-spatula-oligomer-leaching-modeler/",
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
  console.log('✅ Injected schemas into src/pages/tools/silicone-spatula-oligomer-leaching-modeler.astro');
} else if (en.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in EN tool page');
} else {
  console.error('❌ enTarget not found in EN tool page');
}

// 3. [lang] tool page
const langPath = path.resolve('src/pages/[lang]/tools/silicone-spatula-oligomer-leaching-modeler.astro');
let langContent = fs.readFileSync(langPath, 'utf8');

const langTarget = `const c = CONTENT[lang] || CONTENT.es;
---

<Layout title={c.pageTitle} description={c.pageDescription} faqs={c.faqs} availableLocales={availableLocales}>`;

const langReplacement = `const c = CONTENT[lang] || CONTENT.es;

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
      "name": c.pageTitle.split('|')[0].trim(),
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/silicone-spatula-oligomer-leaching-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.pageTitle.split('|')[0].trim(),
  "url": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/silicone-spatula-oligomer-leaching-modeler/\`,
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
  "mainEntity": c.faqs.map(faq => ({
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
  console.log('✅ Injected schemas into src/pages/[lang]/tools/silicone-spatula-oligomer-leaching-modeler.astro');
} else if (langContent.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in [lang] tool page');
} else {
  console.error('❌ langTarget not found in [lang] tool page');
}

// 4. Update src/pages/tools/index.astro (featuredHeroTools)
const enToolsIndex = path.resolve('src/pages/tools/index.astro');
let enIndexContent = fs.readFileSync(enToolsIndex, 'utf8');

const enHeroBlock = `  {
    slug: 'silicone-spatula-oligomer-leaching-modeler',
    isNew: true,
    badge: 'Cyclic Siloxanes D4–D6 · High-Heat Oil Extraction · BfR XV & EU 10/2011',
    badgeClass: 'bg-amber-700 text-white',
    title: 'Silicone Spatula & Utensil High-Heat Oligomer Leaching Modeler',
    desc: 'Simulate thermal depolymerization of silicone spatulas in 200°C+ cooking oils, model lipophilic extraction of cyclic siloxanes (D4–D6), evaluate pinch-test mineral fillers, and detect dishwasher detergent absorption.',
    cta: 'Model Silicone Oligomer Leaching',
    ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
  },`;

const enStainlessAnchor = `  {
    slug: 'stainless-steel-heavy-metal-leaching-modeler',
    isNew: true,
    badge: 'Nickel & Chromium Leaching · UC Davis Kinetics · SNAS Allergy Thresholds',
    badgeClass: 'bg-slate-800 text-white',
    title: 'Stainless Steel Heavy Metal (Nickel & Chromium) Acidic Leaching Modeler',
    desc: 'Simulate nickel and chromium ion dissolution during acidic simmering (pH < 4.0), compare 304 vs 316 vs 430 alloys, model new pan leaching spikes, and evaluate systemic nickel allergy risks.',
    cta: 'Model Heavy Metal Leaching',
    ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
  },`;

if (!enIndexContent.includes("slug: 'silicone-spatula-oligomer-leaching-modeler',\n    isNew: true")) {
  if (enIndexContent.includes(enStainlessAnchor)) {
    enIndexContent = enIndexContent.replace(enStainlessAnchor, enStainlessAnchor + '\n' + enHeroBlock);
    fs.writeFileSync(enToolsIndex, enIndexContent, 'utf8');
    console.log('✅ Added silicone-spatula-oligomer-leaching-modeler to featuredHeroTools in src/pages/tools/index.astro');
  } else {
    console.error('❌ enStainlessAnchor not found in src/pages/tools/index.astro');
  }
} else {
  console.log('ℹ️ Already in featuredHeroTools in tools/index.astro');
}

// 5. Update src/pages/[lang]/tools/index.astro (featuredHeroTools across ES, PT, ZH, JA)
const langToolsIndex = path.resolve('src/pages/[lang]/tools/index.astro');
let langIndexContent = fs.readFileSync(langToolsIndex, 'utf8');

const esHeroBlock = `      {
        slug: 'silicone-spatula-oligomer-leaching-modeler',
        badge: 'Siloxanos Cíclicos D4–D6 · Extracción en Aceite Caliente · BfR XV y UE 10/2011',
        badgeClass: 'bg-amber-700 text-white',
        title: 'Modelador de Lixiviación de Oligómeros en Espátulas de Silicona a Alta Temperatura',
        desc: 'Simule la despolimerización térmica en aceites a más de 200 °C, la partición lipofílica de siloxanos (D4–D6), la prueba de torsión de cargas minerales y la absorción de aromas de lavavajillas.',
        cta: 'Simular Lixiviación en Silicona',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const ptHeroBlock = `      {
        slug: 'silicone-spatula-oligomer-leaching-modeler',
        badge: 'Siloxanos Cíclicos D4–D6 · Extração em Óleo Quente · BfR XV e UE 10/2011',
        badgeClass: 'bg-amber-700 text-white',
        title: 'Modelador de Lixiviação de Oligômeros em Espátulas de Silicone sob Calor Extremo',
        desc: 'Simule a despolimerização térmica em óleos acima de 200 °C, a extração lipofílica de siloxanos cíclicos (D4–D6), a detecção de cargas minerais por torção e a absorção de detergente de lava-louças.',
        cta: 'Simular Lixiviação em Silicone',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const zhHeroBlock = `      {
        slug: 'silicone-spatula-oligomer-leaching-modeler',
        badge: '环状硅氧烷 D4–D6 · 高温食用油萃取 · 德国BfR XV与欧盟EU 10/2011',
        badgeClass: 'bg-amber-700 text-white',
        title: '硅胶锅铲与烹饪器具高温热解环状低聚物溶出毒理模拟器',
        desc: '模拟200°C以上高温煎炸油中聚二甲基硅氧烷（PDMS）发生分子内环化热解与D4–D6亲脂性溶出动力学，评估拧白测试矿物填料及洗碗机洗涤剂香精吸附残留风险。',
        cta: '模拟硅胶低聚物溶出',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const jaHeroBlock = `      {
        slug: 'silicone-spatula-oligomer-leaching-modeler',
        badge: '環状シロキサン D4〜D6 · 高温油抽出キネティクス · ドイツBfR XV＆EU 10/2011基準',
        badgeClass: 'bg-amber-700 text-white',
        title: 'シリコンスパチュラ＆調理器具 高温熱解重合・環状オリゴマー溶出シミュレーター',
        desc: '200°C以上の高温調理油中におけるPDMSのバックバイティング熱分解、親油性環状シロキサン（D4〜D6）の溶出、白化ねじりテストによる鉱物フィラー判定、食洗機洗剤成分の吸着残存リスクを解析。',
        cta: 'シリコン溶出リスクを解析',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const esStainlessTarget = `      {
        slug: 'stainless-steel-heavy-metal-leaching-modeler',
        badge: 'Lixiviación Ni & Cr · Cinética UC Davis · Umbrales Alergia SNAS',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviación de Metales Pesados en Acero Inoxidable',
        desc: 'Simule la disolución de iones de níquel y cromo en cocciones ácidas (pH < 4.0), compare aleaciones 304, 316 y 430, y evalúe riesgos de alergia sistémica al níquel (SNAS).',
        cta: 'Simular Lixiviación de Metales',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const ptStainlessTarget = `      {
        slug: 'stainless-steel-heavy-metal-leaching-modeler',
        badge: 'Lixiviação de Ni & Cr · Cinética UC Davis · Limiares de Alergia SNAS',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviação de Metais Pesados em Aço Inoxidável',
        desc: 'Simule a dissolução de íons de níquel e cromo sob cocção ácida prolongada (pH < 4.0), compare ligas 304, 316 e 430 e avalie o risco de síndrome de alergia sistêmica ao níquel.',
        cta: 'Simular Lixiviação de Metais',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const zhStainlessTarget = `      {
        slug: 'stainless-steel-heavy-metal-leaching-modeler',
        badge: '镍与铬酸性析出 · 加州大学戴维斯分校动力学 · 全身性镍过敏综合征阈值',
        badgeClass: 'bg-slate-800 text-white',
        title: '不锈钢厨具重金属（镍与铬）酸性烹饪溶出与钝化动力学模拟器',
        desc: '模拟长时间熬煮酸性番茄酱（pH < 4.0）下的镍（Ni²⁺）与三价铬（Cr³⁺）析出速率，对比304、316与430材质耐蚀性及新锅钝化前峰值溶出风险。',
        cta: '模拟重金属溶出',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const jaStainlessTarget = `      {
        slug: 'stainless-steel-heavy-metal-leaching-modeler',
        badge: 'ニッケル・クロム酸性溶出 · UCデービス動力学モデル · 全身性金属アレルギー基準',
        badgeClass: 'bg-slate-800 text-white',
        title: 'ステンレス調理器具 重金属（ニッケル・クロム）酸性溶出＆不働態皮膜シミュレーター',
        desc: 'トマトソース等の酸性煮込み（pH < 4.0）におけるNi²⁺/Cr³⁺の溶出動態、304/316/430鋼種の耐酸比較、新品時の溶出スパイクおよび全身性ニッケルアレルギー（SNAS）リスクを解析。',
        cta: '重金属溶出リスクを解析',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

if (!langIndexContent.includes("badge: 'Siloxanos Cíclicos D4–D6 · Extracción en Aceite Caliente · BfR XV y UE 10/2011'")) {
  if (langIndexContent.includes(esStainlessTarget)) {
    langIndexContent = langIndexContent.replaceAll(esStainlessTarget, esStainlessTarget + '\n' + esHeroBlock);
    console.log('✅ Added ES hero block to [lang]/tools/index.astro');
  }
  if (langIndexContent.includes(ptStainlessTarget)) {
    langIndexContent = langIndexContent.replaceAll(ptStainlessTarget, ptStainlessTarget + '\n' + ptHeroBlock);
    console.log('✅ Added PT hero block to [lang]/tools/index.astro');
  }
  if (langIndexContent.includes(zhStainlessTarget)) {
    langIndexContent = langIndexContent.replaceAll(zhStainlessTarget, zhStainlessTarget + '\n' + zhHeroBlock);
    console.log('✅ Added ZH hero block to [lang]/tools/index.astro');
  }
  if (langIndexContent.includes(jaStainlessTarget)) {
    langIndexContent = langIndexContent.replaceAll(jaStainlessTarget, jaStainlessTarget + '\n' + jaHeroBlock);
    console.log('✅ Added JA hero block to [lang]/tools/index.astro');
  }
  fs.writeFileSync(langToolsIndex, langIndexContent, 'utf8');
} else {
  console.log('ℹ️ Hero blocks already present in [lang]/tools/index.astro');
}

console.log('=== ELEVATING CONSUMER TOOL #74 COMPLETE ===');
