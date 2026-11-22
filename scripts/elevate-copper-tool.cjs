const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #72: Copper Cookware & Verdigris Modeler ===');

// 1. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));

if (!allowlist.includes('copper-cookware-toxicity-modeler')) {
  allowlist.push('copper-cookware-toxicity-modeler');
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added 'copper-cookware-toxicity-modeler' to allowlist. Total tools: ${allowlist.length}`);
} else {
  console.log(`ℹ️ Already in allowlist. Total tools: ${allowlist.length}`);
}

// 2. Update src/pages/tools/copper-cookware-toxicity-modeler.astro (Inject Schemas)
const enPath = path.resolve('src/pages/tools/copper-cookware-toxicity-modeler.astro');
let enContent = fs.readFileSync(enPath, 'utf8');

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
      "name": "Copper Cookware & Verdigris Modeler",
      "item": "https://isitkitchensafe.com/tools/copper-cookware-toxicity-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Copper Cookware & Acidic Food Leaching & Verdigris Modeler",
  "url": "https://isitkitchensafe.com/tools/copper-cookware-toxicity-modeler/",
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

if (enContent.includes(enTarget)) {
  enContent = enContent.replace(enTarget, enReplacement);
  fs.writeFileSync(enPath, enContent, 'utf8');
  console.log('✅ Injected schemas into src/pages/tools/copper-cookware-toxicity-modeler.astro');
} else if (enContent.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in EN tool page');
} else {
  console.error('❌ Could not find enTarget in src/pages/tools/copper-cookware-toxicity-modeler.astro');
}

// 3. Create src/pages/[lang]/tools/copper-cookware-toxicity-modeler.astro
const langPath = path.resolve('src/pages/[lang]/tools/copper-cookware-toxicity-modeler.astro');

const langContent = `---
import Layout from '../../../layouts/Layout.astro';
import Breadcrumbs from '../../../components/Breadcrumbs.astro';
import CopperCookwareToxicityModeler from '../../../components/CopperCookwareToxicityModeler.astro';
import type { SupportedLanguage } from '../../../i18n/ui';
import { useTranslations, useTranslatedPath } from '../../../i18n/utils';

export function getStaticPaths() {
  const availableLocales: SupportedLanguage[] = ['en', 'es', 'pt', 'zh-cn', 'ja'];
  return [
    { params: { lang: 'es' }, props: { lang: 'es' as SupportedLanguage, availableLocales } },
    { params: { lang: 'pt' }, props: { lang: 'pt' as SupportedLanguage, availableLocales } },
    { params: { lang: 'zh-cn' }, props: { lang: 'zh-cn' as SupportedLanguage, availableLocales } },
    { params: { lang: 'ja' }, props: { lang: 'ja' as SupportedLanguage, availableLocales } }
  ];
}

interface Props {
  lang: SupportedLanguage;
  availableLocales: SupportedLanguage[];
}

const { lang, availableLocales } = Astro.props;
const t = useTranslations(lang);
const tp = useTranslatedPath(lang);

interface LocaleContent {
  pageTitle: string;
  pageDescription: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  faqs: Array<{ question: string; answer: string }>;
  monoBadge: string;
  monoTitle: string;
  monoSub: string;
}

const CONTENT: Record<SupportedLanguage, LocaleContent> = {
  en: {} as any,
  es: {
    pageTitle: "Toxicidad de Cobre y Lixiviación Ácida en Ollas | IsItKitchenSafe",
    pageDescription: "Simule la disolución de iones de cobre (Cu²⁺), la erosión del estañado, la formación de cardenillo tóxico y el riesgo de gastroenteritis aguda.",
    breadcrumbs: [
      { label: 'Inicio', href: '/es/' },
      { label: 'Herramientas', href: '/es/tools/' },
      { label: 'Modelador de Toxicidad de Cobre y Cardenillo' }
    ],
    monoBadge: "Metalurgia Culinaria y Toxicología Clínica",
    monoTitle: "Modelador de Lixiviación Ácida y Cardenillo en Menaje de Cobre",
    monoSub: "Simule la disolución de iones de cobre en reducciones ácidas (pH < 6.0), el desgaste del estaño y los umbrales de seguridad de la FDA.",
    faqs: [
      {
        question: "¿Por qué cocinar alimentos ácidos en cobre sin estañar provoca náuseas y vómitos?",
        answer: "El cobre es un metal de transición electroquímicamente reactivo. Al contactar con salsas ácidas (pH < 6.0), los iones hidronio disuelven rápidamente el cobre metálico en cationes cúpricos solubles (Cu²⁺). En dosis superiores a 15 mg, estos iones estimulan el nervio vago gástrico provocando vómitos proyectivos y diarrea acuosa."
      },
      {
        question: "¿Qué es la 'Regla de la Moneda' de la FDA para reestañar sartenes de cobre?",
        answer: "Bajo la sección 4-101.14 del Código Alimentario de la FDA, el cobre no puede tocar alimentos con pH inferior a 6.0. La regla tradicional dicta que si la suma de zonas de cobre expuestas supera el tamaño de una moneda de 25 centavos (~4,6 cm²), la olla debe reestañarse de inmediato."
      },
      {
        question: "¿Qué es el cardenillo y por qué la costra verde del cobre es peligrosa?",
        answer: "El cardenillo es una pátina tóxica de carbonato básico de cobre o acetato básico de cobre formada por humedad y ácidos. A diferencia de las pátinas insolubles de monumentos, el cardenillo culinario se disuelve fácilmente en la comida, causando intoxicación química aguda."
      }
    ]
  },
  pt: {
    pageTitle: "Toxicidade de Cobre e Lixiviação Ácida em Panelas | IsItKitchenSafe",
    pageDescription: "Simule a dissolução de íons de cobre (Cu²⁺), a erosão do estanhamento, a formação de azinhavre tóxico e o risco de gastroenterite aguda.",
    breadcrumbs: [
      { label: 'Início', href: '/pt/' },
      { label: 'Ferramentas', href: '/pt/tools/' },
      { label: 'Modelador de Toxicidade de Cobre e Azinhavre' }
    ],
    monoBadge: "Metalurgia Culinária e Toxicologia Clínica",
    monoTitle: "Modelador de Lixiviação Ácida e Azinhavre em Panelas de Cobre",
    monoSub: "Simule a dissolução de íons de cobre em reduções ácidas (pH < 6.0), o desgaste do estanho e os limites de segurança da FDA.",
    faqs: [
      {
        question: "Por que cozinhar alimentos ácidos em cobre sem estanho provoca náuseas e vômitos?",
        answer: "O cobre reage com soluções ácidas (pH < 6.0), dissolvendo-se rapidamente em íons cúpricos (Cu²⁺). Em doses acima de 15 mg, o cobre iônico irrita a mucosa gástrica e estimula o nervo vago, desencadeando vômitos e cólicas em menos de uma hora."
      },
      {
        question: "O que é a 'Regra da Moeda' da FDA para reestanhar panelas de cobre?",
        answer: "Sob a norma FDA Food Code 4-101.14, o cobre não pode contactar alimentos com pH abaixo de 6.0. Se as áreas de cobre exposto ultrapassarem o tamanho de uma moeda de 25 centavos (~4,6 cm²), o utensílio deve ser reestanhado antes do uso culinário."
      },
      {
        question: "O que é o azinhavre e por que a crosta verde do cobre é perigosa?",
        answer: "O azinhavre é uma crosta de carbonato ou acetato básico de cobre solúvel em alimentos quentes. Ao dissolver-se na comida, libera altas concentrações de sais de cobre bioacumuláveis e tóxicos."
      }
    ]
  },
  "zh-cn": {
    pageTitle: "铜质厨具酸性溶出与铜绿中毒模拟器 | IsItKitchenSafe",
    pageDescription: "模拟铜离子（Cu²⁺）在酸性食物中的溶出动力学、镀锡层磨损、有毒碱式碳酸铜（铜绿）形成以及急性胃肠炎风险。",
    breadcrumbs: [
      { label: '首页', href: '/zh-cn/' },
      { label: '实用工具', href: '/zh-cn/tools/' },
      { label: '铜质厨具溶出与铜绿安全模拟器' }
    ],
    monoBadge: "烹饪冶金学与临床毒理学",
    monoTitle: "铜质锅具酸性食物浸出与铜绿中毒模拟器",
    monoSub: "模拟酸性烹饪（pH < 6.0）中铜离子的析出速率、内壁锡层磨损以及美国FDA食品法典安全阈值。",
    faqs: [
      {
        question: "为什么用无涂层纯铜锅烹饪酸性食物会导致剧烈恶心和呕吐？",
        answer: "铜是活泼过渡金属。遇到番茄、红酒、柠檬等酸性食物（pH < 6.0）时，氢离子迅速氧化溶解铜形成可溶性二价铜离子（Cu²⁺）。当摄入量超过15毫克时，会剧烈刺激胃黏膜迷走神经，在15至60分钟内引发喷射性呕吐和水样腹泻。"
      },
      {
        question: "什么是美国FDA针对铜锅重新镀锡的“一角硬币准则”？",
        answer: "FDA食品法典§ 4-101.14明令禁止未衬里铜接触pH值低于6.0的食物。传统经验规定，当锅内露铜磨损面积累计超过一枚25美分硬币（约4.6平方厘米）时，必须停用并重新擦锡。"
      },
      {
        question: "什么是铜绿？为什么铜锅上的绿色结晶极度危险？",
        answer: "铜绿是铜与空气中的水、二氧化碳和有机酸反应生成的碱式碳酸铜或碱式醋酸铜。与雕像表面的不溶性矿物不同，烹饪产生的铜绿极易溶于温热食物中，形成高浓度可吸收的剧毒铜盐。"
      }
    ]
  },
  ja: {
    pageTitle: "銅鍋の酸性浸出・緑青中毒シミュレーター | IsItKitchenSafe",
    pageDescription: "酸性食品による銅イオン（Cu²⁺）溶出速度、錫引き層摩耗、有害な緑青生成、および急性胃腸炎リスクをシミュレーション。",
    breadcrumbs: [
      { label: 'ホーム', href: '/ja/' },
      { label: 'ツール一覧', href: '/ja/tools/' },
      { label: '銅鍋酸性溶出・緑青リスクシミュレーター' }
    ],
    monoBadge: "調理器具冶金学・臨床毒性学",
    monoTitle: "銅製調理器具の酸性浸出および有毒緑青シミュレーター",
    monoSub: "酸性料理（pH < 6.0）における銅イオン溶出キネティクス、錫メッキの摩耗限界、FDA食品衛生基準を判定。",
    faqs: [
      {
        question: "なぜ錫引きのない純銅鍋で酸性料理を作ると激しい嘔吐を起こすのですか？",
        answer: "銅は酸性溶液（pH < 6.0: トマト、ワイン、酢）と接触すると急速に酸化溶解し、二价銅イオン（Cu²⁺）を生じます。これが15〜30mgを超えて摂取されると胃粘膜の迷走神経を刺激し、激しい嘔吐と下痢を引き起こします。"
      },
      {
        question: "銅鍋の再錫引き基準であるFDAの「25セント硬貨ルール」とは？",
        answer: "米FDA食品規格§ 4-101.14では、pH 6.0未満の食品に純銅が直接接触することを禁止しています。鍋内部の露出した銅の面積が25セント硬貨（直径24.26mm、約4.6cm²）を超えた場合、即座に使用を中止し再錫引きを行う必要があります。"
      },
      {
        question: "緑青（ろくしょう）とは何ですか？なぜ銅鍋の青緑色のサビは危険なのですか？",
        answer: "緑青は銅が水分、炭酸ガス、有機酸と反応して生成する塩基性炭酸銅または塩基性酢酸銅です。温かい料理や酸性ソースに容易に溶け出し、高濃度のイオン化銅となって急性中毒を引き起こします。"
      }
    ]
  }
};

const c = CONTENT[lang] || CONTENT.es;

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
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/copper-cookware-toxicity-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.pageTitle.split('|')[0].trim(),
  "url": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/copper-cookware-toxicity-modeler/\`,
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
  </Fragment>

  <!-- Breadcrumbs -->
  <div class="bg-surface-soft border-b border-hairline py-1">
    <div class="max-w-[1280px] mx-auto px-6">
      <Breadcrumbs items={c.breadcrumbs} className="mb-0" />
    </div>
  </div>

  <div class="max-w-[1280px] mx-auto px-6 py-10 md:py-16">
    <!-- Header -->
    <header class="max-w-4xl mb-10">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-900 mb-3 border border-amber-200">
        <span>⚗️</span>
        {c.monoBadge}
      </div>
      <h1 class="text-3xl md:text-5xl font-extrabold text-ink tracking-tight mb-4 leading-tight">
        {c.monoTitle}
      </h1>
      <p class="text-lg text-muted max-w-3xl leading-relaxed">
        {c.monoSub}
      </p>
    </header>

    <!-- Main Tool Container -->
    <div class="mb-16">
      <CopperCookwareToxicityModeler />
    </div>
  </div>
</Layout>
`;

fs.writeFileSync(langPath, langContent, 'utf8');
console.log('✅ Created src/pages/[lang]/tools/copper-cookware-toxicity-modeler.astro with 4 locales');
console.log('=== ELEVATION COMPLETE ===');
