const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #75: Immersion Blender Bearing Grease Leaching Modeler ===');

// 1. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
const toolSlug = 'immersion-blender-grease-leaching-modeler';

if (!allowlist.includes(toolSlug)) {
  allowlist.push(toolSlug);
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added '${toolSlug}' to allowlist. Total count: ${allowlist.length}`);
} else {
  console.log(`ℹ️ Already in allowlist. Total count: ${allowlist.length}`);
}

// 2. EN tool page
const enPath = path.resolve('src/pages/tools/immersion-blender-grease-leaching-modeler.astro');
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
      "name": "Immersion Blender Grease Leaching Modeler",
      "item": "https://isitkitchensafe.com/tools/immersion-blender-grease-leaching-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Immersion Blender Bearing Grease & Shaft Seal Leaching Modeler",
  "url": "https://isitkitchensafe.com/tools/immersion-blender-grease-leaching-modeler/",
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
  console.log('✅ Injected schemas into src/pages/tools/immersion-blender-grease-leaching-modeler.astro');
} else if (en.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in EN tool page');
} else {
  console.error('❌ enTarget not found in EN tool page');
}

// 3. [lang] tool page
const langPath = path.resolve('src/pages/[lang]/tools/immersion-blender-grease-leaching-modeler.astro');
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
      "name": c.pageTitle.split('|')[0].trim(),
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/immersion-blender-grease-leaching-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.pageTitle.split('|')[0].trim(),
  "url": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/immersion-blender-grease-leaching-modeler/\`,
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
  "mainEntity": c.faqs.map((faq: { question: string; answer: string }) => ({
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
  console.log('✅ Injected schemas into src/pages/[lang]/tools/immersion-blender-grease-leaching-modeler.astro');
} else if (langContent.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in [lang] tool page');
} else {
  console.error('❌ langTarget not found in [lang] tool page');
}

// 4. Update src/pages/tools/index.astro hero cards
const toolsIndex = path.resolve('src/pages/tools/index.astro');
let toolsIndexContent = fs.readFileSync(toolsIndex, 'utf8');

const heroTarget = `  {
    slug: 'silicone-spatula-oligomer-leaching-modeler',
    isNew: true,
    badge: 'Cyclic Siloxanes D4–D6 · High-Heat Oil Extraction · BfR XV & EU 10/2011',
    badgeClass: 'bg-amber-700 text-white',
    title: 'Silicone Spatula & Utensil High-Heat Oligomer Leaching Modeler',
    desc: 'Simulate thermal depolymerization of silicone spatulas in 200°C+ cooking oils, model lipophilic extraction of cyclic siloxanes (D4–D6), evaluate pinch-test mineral fillers, and detect dishwasher detergent absorption.',
    cta: 'Model Silicone Oligomer Leaching',
    ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
  },`;

const heroCardEn = `  {
    slug: 'immersion-blender-grease-leaching-modeler',
    isNew: true,
    badge: 'NSF H1 vs H2 Lubricants · Shaft Seal Cavitation · ASTM D217 Penetration',
    badgeClass: 'bg-slate-800 text-white',
    title: 'Immersion Blender Bearing Grease & Shaft Seal Leaching Modeler',
    desc: 'Simulate high-rpm rotor cavitation, sub-surface NBR lip seal thermal wear, petroleum hydrocarbon grease leaching into hot soup emulsions, and NSF H1 vs non-food-grade grease toxicity thresholds.',
    cta: 'Model Grease Leaching Risks',
    ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
  },`;

if (!toolsIndexContent.includes("slug: 'immersion-blender-grease-leaching-modeler'")) {
  if (toolsIndexContent.includes(heroTarget)) {
    toolsIndexContent = toolsIndexContent.replace(heroTarget, heroCardEn + '\n' + heroTarget);
    fs.writeFileSync(toolsIndex, toolsIndexContent, 'utf8');
    console.log('✅ Added hero card to src/pages/tools/index.astro');
  } else {
    console.error('❌ heroTarget not found in src/pages/tools/index.astro');
  }
} else {
  console.log('ℹ️ Hero card already present in src/pages/tools/index.astro');
}

// 5. Update src/pages/[lang]/tools/index.astro localized hero cards
const langToolsIndex = path.resolve('src/pages/[lang]/tools/index.astro');
let langIndexContent = fs.readFileSync(langToolsIndex, 'utf8');

const esHeroBlock = `      {
        slug: 'immersion-blender-grease-leaching-modeler',
        badge: 'Lubricantes NSF H1 vs H2 · Desgaste de Retén de Eje · Penetración ASTM D217',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviación de Grasa de Rodamientos y Retenes en Batidoras de Mano',
        desc: 'Simule cavitación de rotor a altas RPM, degradación térmica del retén de eje NBR/PTFE, migración de hidrocarburos de grasa en sopas calientes y umbrales de toxicidad NSF H1 vs lubricantes industriales.',
        cta: 'Simular Lixiviación de Grasa',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const ptHeroBlock = `      {
        slug: 'immersion-blender-grease-leaching-modeler',
        badge: 'Lubrificantes NSF H1 vs H2 · Desgaste de Vedação do Eixo · Penetração ASTM D217',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviação de Graxa de Rolamento e Vedação em Mixers de Imersão',
        desc: 'Simule a cavitação do rotor em alta rotação, desgaste térmico da vedação labial NBR/PTFE, migração de hidrocarbonetos minerais em sopas quentes e limiares de toxicidade de lubrificantes NSF H1.',
        cta: 'Simular Lixiviação de Graxa',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const zhHeroBlock = `      {
        slug: 'immersion-blender-grease-leaching-modeler',
        badge: 'NSF H1与H2润滑脂 · 轴封空化磨损 · ASTM D217针入度',
        badgeClass: 'bg-slate-800 text-white',
        title: '手持浸入式搅拌棒电机轴封磨损与轴承润滑脂热汤溶出毒理模拟器',
        desc: '模拟高转速转子空化气蚀、NBR丁腈/PTFE轴封唇口热疲劳磨损、石油基碳氢润滑脂在高温热汤（>85°C）中的离心溶出动力学，以及NSF H1食品级与非食品级润滑脂健康安全阈值。` + `'` + `,
        cta: '模拟轴承润滑脂溶出',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const jaHeroBlock = `      {
        slug: 'immersion-blender-grease-leaching-modeler',
        badge: 'NSF H1/H2潤滑グリース · シャフトシール摩耗 · ASTM D217混和ちょう度',
        badgeClass: 'bg-slate-800 text-white',
        title: 'ハンドブレンダー 軸受グリース熱湯溶出＆シャフトシール摩耗シミュレーター',
        desc: '高速回転によるキャビテーション気泡破裂、NBR/PTFEシャフトシールの熱疲労摩耗、高温スープ（85℃超）への鉱油炭化水素グリース遠心溶出動態、およびNSF H1食品機械用グリース規格との適合性を解析。',
        cta: 'グリース溶出リスクを解析',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const esSiliconeTarget = `      {
        slug: 'silicone-spatula-oligomer-leaching-modeler',
        badge: 'Siloxanos Cíclicos D4–D6 · Extracción en Aceite Caliente · BfR XV y UE 10/2011',
        badgeClass: 'bg-amber-700 text-white',
        title: 'Modelador de Lixiviación de Oligómeros en Espátulas de Silicona a Alta Temperatura',
        desc: 'Simule la despolimerización térmica en aceites a más de 200 °C, la partición lipofílica de siloxanos (D4–D6), la prueba de torsión de cargas minerales y la absorción de aromas de lavavajillas.',
        cta: 'Simular Lixiviación en Silicona',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const ptSiliconeTarget = `      {
        slug: 'silicone-spatula-oligomer-leaching-modeler',
        badge: 'Siloxanos Cíclicos D4–D6 · Extração em Óleo Quente · BfR XV e UE 10/2011',
        badgeClass: 'bg-amber-700 text-white',
        title: 'Modelador de Lixiviação de Oligômeros em Espátulas de Silicone sob Calor Extremo',
        desc: 'Simule a despolimerização térmica em óleos acima de 200 °C, a extração lipofílica de siloxanos cíclicos (D4–D6), a detecção de cargas minerais por torção e a absorção de detergente de lava-louças.',
        cta: 'Simular Lixiviação em Silicone',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const zhSiliconeTarget = `      {
        slug: 'silicone-spatula-oligomer-leaching-modeler',
        badge: '环状硅氧烷 D4–D6 · 高温食用油萃取 · 德国BfR XV与欧盟EU 10/2011',
        badgeClass: 'bg-amber-700 text-white',
        title: '硅胶锅铲与烹饪器具高温热解环状低聚物溶出毒理模拟器',
        desc: '模拟200°C以上高温煎炸油中聚二甲基硅氧烷（PDMS）发生分子内环化热解与D4–D6亲脂性溶出动力学，评估拧白测试矿物填料及洗碗机洗涤剂香精吸附残留风险。',
        cta: '模拟硅胶低聚物溶出',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

const jaSiliconeTarget = `      {
        slug: 'silicone-spatula-oligomer-leaching-modeler',
        badge: '環状シロキサン D4〜D6 · 高温油抽出キネティクス · ドイツBfR XV＆EU 10/2011基準',
        badgeClass: 'bg-amber-700 text-white',
        title: 'シリコンスパチュラ＆調理器具 高温熱解重合・環状オリゴマー溶出シミュレーター',
        desc: '200°C以上の高温調理油中におけるPDMSのバックバイティング熱分解、親油性環状シロキサン（D4〜D6）の溶出、白化ねじりテストによる鉱物フィラー判定、食洗機洗剤成分の吸着残存リスクを解析。',
        cta: 'シリコン溶出リスクを解析',
        ctaClass: 'bg-amber-700 hover:bg-amber-800 text-white'
      },`;

if (!langIndexContent.includes("badge: 'Lubricantes NSF H1 vs H2 · Desgaste de Retén de Eje · Penetración ASTM D217'")) {
  if (langIndexContent.includes(esSiliconeTarget)) {
    langIndexContent = langIndexContent.replaceAll(esSiliconeTarget, esHeroBlock + '\n' + esSiliconeTarget);
    console.log('✅ Added ES hero block to [lang]/tools/index.astro');
  }
  if (langIndexContent.includes(ptSiliconeTarget)) {
    langIndexContent = langIndexContent.replaceAll(ptSiliconeTarget, ptHeroBlock + '\n' + ptSiliconeTarget);
    console.log('✅ Added PT hero block to [lang]/tools/index.astro');
  }
  if (langIndexContent.includes(zhSiliconeTarget)) {
    langIndexContent = langIndexContent.replaceAll(zhSiliconeTarget, zhHeroBlock + '\n' + zhSiliconeTarget);
    console.log('✅ Added ZH hero block to [lang]/tools/index.astro');
  }
  if (langIndexContent.includes(jaSiliconeTarget)) {
    langIndexContent = langIndexContent.replaceAll(jaSiliconeTarget, jaHeroBlock + '\n' + jaSiliconeTarget);
    console.log('✅ Added JA hero block to [lang]/tools/index.astro');
  }
  fs.writeFileSync(langToolsIndex, langIndexContent, 'utf8');
} else {
  console.log('ℹ️ Hero blocks already present in [lang]/tools/index.astro');
}

console.log('=== ELEVATING CONSUMER TOOL #75 COMPLETE ===');
