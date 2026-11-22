const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #76: Blender Blade Cavitation & Thermal Safety Modeler ===');

// 1. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
const toolSlug = 'blender-blade-cavitation-safety-modeler';

if (!allowlist.includes(toolSlug)) {
  allowlist.push(toolSlug);
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added '${toolSlug}' to allowlist. Total count: ${allowlist.length}`);
} else {
  console.log(`ℹ️ Already in allowlist. Total count: ${allowlist.length}`);
}

// 2. EN tool page schema injection
const enPath = path.resolve('src/pages/tools/blender-blade-cavitation-safety-modeler.astro');
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
      "name": "Blender Cavitation & Thermal Safety Modeler",
      "item": "https://isitkitchensafe.com/tools/blender-blade-cavitation-safety-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Blender Blade Friction Thermal Degradation & Micro-Cavitation Safety Modeler",
  "url": "https://isitkitchensafe.com/tools/blender-blade-cavitation-safety-modeler/",
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
  console.log('✅ Injected schemas into src/pages/tools/blender-blade-cavitation-safety-modeler.astro');
} else if (en.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in EN tool page');
} else {
  console.error('❌ enTarget not found in EN tool page');
}

// 3. [lang] tool page schema injection
const langPath = path.resolve('src/pages/[lang]/tools/blender-blade-cavitation-safety-modeler.astro');
let langContent = fs.readFileSync(langPath, 'utf8');

const langTarget = `const content = CONTENT[lang] || CONTENT.es;
---

<Layout title={content.pageTitle} description={content.pageDescription} faqs={content.faqs} availableLocales={availableLocales}>`;

const langReplacement = `const content = CONTENT[lang] || CONTENT.es;

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
      "name": content.pageTitle.split('|')[0].trim(),
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/blender-blade-cavitation-safety-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": content.pageTitle.split('|')[0].trim(),
  "url": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/blender-blade-cavitation-safety-modeler/\`,
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "description": content.pageDescription,
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
  "mainEntity": content.faqs.map((faq: { question: string; answer: string }) => ({
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
  title={content.pageTitle}
  description={content.pageDescription}
  faqs={content.faqs}
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
  console.log('✅ Injected schemas into src/pages/[lang]/tools/blender-blade-cavitation-safety-modeler.astro');
} else if (langContent.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in [lang] tool page');
} else {
  console.error('❌ langTarget not found in [lang] tool page');
}

// 4. Update src/pages/tools/index.astro hero cards
const toolsIndex = path.resolve('src/pages/tools/index.astro');
let toolsIndexContent = fs.readFileSync(toolsIndex, 'utf8');

const heroTarget = `  {
    slug: 'immersion-blender-grease-leaching-modeler',
    isNew: true,
    badge: 'NSF H1 vs H2 Lubricants · Shaft Seal Cavitation · ASTM D217 Penetration',
    badgeClass: 'bg-slate-800 text-white',
    title: 'Immersion Blender Bearing Grease & Shaft Seal Leaching Modeler',
    desc: 'Simulate high-rpm rotor cavitation, sub-surface NBR lip seal thermal wear, petroleum hydrocarbon grease leaching into hot soup emulsions, and NSF H1 vs non-food-grade grease toxicity thresholds.',
    cta: 'Model Grease Leaching Risks',
    ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
  },`;

const heroCardEn = `  {
    slug: 'blender-blade-cavitation-safety-modeler',
    isNew: true,
    badge: '20,000+ RPM Vortex Cavitation · Viscous Friction Heating · ASTM C149 Thermal Shock',
    badgeClass: 'bg-slate-800 text-white',
    title: 'Blender Blade Friction Thermal Degradation & Micro-Cavitation Safety Modeler',
    desc: 'Model 20,000+ RPM blade tip vortex cavitation, viscous friction heating, sealed bullet cup steam explosion hazards, and blade bearing grease migration risks.',
    cta: 'Model Blender Cavitation & Thermal Risks',
    ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
  },`;

if (!toolsIndexContent.includes("slug: 'blender-blade-cavitation-safety-modeler',")) {
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
        slug: 'immersion-blender-grease-leaching-modeler',
        badge: 'Lubricantes NSF H1 vs H2 · Desgaste de Retén de Eje · Penetración ASTM D217',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviación de Grasa de Rodamientos y Retenes en Batidoras de Mano',
        desc: 'Simule cavitación de rotor a altas RPM, degradación térmica del retén de eje NBR/PTFE, migración de hidrocarburos de grasa en sopas calientes y umbrales de toxicidad NSF H1 vs lubricantes industriales.',
        cta: 'Simular Lixiviación de Grasa',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const esHeroBlock = `      {
        slug: 'blender-blade-cavitation-safety-modeler',
        badge: 'Cavitación de Vórtice a 20.000+ RPM · Calentamiento por Fricción Viscosa · Choque Térmico ASTM C149',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Seguridad de Cuchillas de Batidora: Fricción y Cavitación',
        desc: 'Modele la cavitación por vórtice a 20.000+ RPM, calentamiento por fricción viscosa, riesgo de explosión por vapor en vasos cerrados y fuga de grasa del rodamiento.',
        cta: 'Simular Cavitación y Fricción',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const ptHeroTarget = `      {
        slug: 'immersion-blender-grease-leaching-modeler',
        badge: 'Lubrificantes NSF H1 vs H2 · Desgaste de Vedação do Eixo · Penetração ASTM D217',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Lixiviação de Graxa de Rolamento e Vedação em Mixers de Imersão',
        desc: 'Simule a cavitação do rotor em alta rotação, desgaste térmico da vedação labial NBR/PTFE, migração de hidrocarbonetos minerais em sopas quentes e limiares de toxicidade de lubrificantes NSF H1.',
        cta: 'Simular Lixiviação de Graxa',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const ptHeroBlock = `      {
        slug: 'blender-blade-cavitation-safety-modeler',
        badge: 'Cavitação de Vórtice a 20.000+ RPM · Aquecimento por Fricção Viscosa · Choque Térmico ASTM C149',
        badgeClass: 'bg-slate-800 text-white',
        title: 'Modelador de Segurança de Lâminas de Liquidificador: Atrito e Cavitação',
        desc: 'Simule a cavitação por vórtice a 20.000+ RPM, aquecimento por cisalhamento viscoso, risco de explosão por vapor em copos vedados e migração de graxa de rolamento.',
        cta: 'Simular Cavitação e Atrito',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const zhHeroTarget = `      {
        slug: 'immersion-blender-grease-leaching-modeler',
        badge: 'NSF H1与H2润滑脂 · 轴封空化磨损 · ASTM D217针入度',
        badgeClass: 'bg-slate-800 text-white',
        title: '手持浸入式搅拌棒电机轴封磨损与轴承润滑脂热汤溶出毒理模拟器',
        desc: '模拟高转速转子空化气蚀、NBR丁腈/PTFE轴封唇口热疲劳磨损、石油基碳氢润滑脂在高温热汤（>85°C）中的离心溶出动力学，以及NSF H1食品级与非食品级润滑脂健康安全阈值。',
        cta: '模拟轴承润滑脂溶出',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const zhHeroBlock = `      {
        slug: 'blender-blade-cavitation-safety-modeler',
        badge: '20000+转速涡流空化 · 粘性摩擦剪切生热 · ASTM C149热震断裂',
        badgeClass: 'bg-slate-800 text-white',
        title: '破壁料理机刀头高速摩擦热解聚与涡流微空化安全毒理模拟器',
        desc: '模拟20,000+ RPM超高转速刀尖涡流空化微射流、浓稠食材粘性剪切摩擦极速升温、密封随行杯蒸汽爆沸冲顶爆炸，以及主轴轴承润滑脂渗漏风险。',
        cta: '模拟料理机空化与摩擦风险',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const jaHeroTarget = `      {
        slug: 'immersion-blender-grease-leaching-modeler',
        badge: 'NSF H1/H2潤滑グリース · シャフトシール摩耗 · ASTM D217混和ちょう度',
        badgeClass: 'bg-slate-800 text-white',
        title: 'ハンドブレンダー 軸受グリース熱湯溶出＆シャフトシール摩耗シミュレーター',
        desc: '高速回転によるキャビテーション気泡破裂、NBR/PTFEシャフトシールの熱疲労摩耗、高温スープ（85℃超）への鉱油炭化水素グリース遠心溶出動態、およびNSF H1食品機械用グリース規格との適合性を解析。',
        cta: 'グリース溶出リスクを解析',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

const jaHeroBlock = `      {
        slug: 'blender-blade-cavitation-safety-modeler',
        badge: '20,000+ RPM翼端渦キャビテーション · 粘性摩擦発熱 · ASTM C149熱衝撃破断',
        badgeClass: 'bg-slate-800 text-white',
        title: 'ブレンダーブレード高速摩擦熱解重合＆微小キャビテーション安全シミュレーター',
        desc: '20,000+ RPM高速回転による翼端渦キャビテーション微小噴流衝撃、粘性剪断摩擦による急速発熱、密閉タンブラーの蒸気爆発膨張、および軸受グリース漏洩リスクを解析。',
        cta: 'キャビテーション熱リスクを解析',
        ctaClass: 'bg-slate-800 hover:bg-slate-900 text-white'
      },`;

if (!langIndexContent.includes("badge: 'Cavitación de Vórtice a 20.000+ RPM · Calentamiento por Fricción Viscosa · Choque Térmico ASTM C149'")) {
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

console.log('=== ELEVATING CONSUMER TOOL #76 COMPLETE ===');
