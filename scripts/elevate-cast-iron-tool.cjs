const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #71: Cast Iron & Carbon Steel Seasoning Degradation Modeler ===');

// 1. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));

if (!allowlist.includes('cast-iron-seasoning-degradation-modeler')) {
  allowlist.push('cast-iron-seasoning-degradation-modeler');
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added 'cast-iron-seasoning-degradation-modeler' to allowlist. Total tools: ${allowlist.length}`);
} else {
  console.log(`ℹ️ Already in allowlist. Total tools: ${allowlist.length}`);
}

// 2. Update src/pages/tools/cast-iron-seasoning-degradation-modeler.astro
const enPath = path.resolve('src/pages/tools/cast-iron-seasoning-degradation-modeler.astro');
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
      "name": "Cast Iron & Carbon Steel Seasoning Modeler",
      "item": "https://isitkitchensafe.com/tools/cast-iron-seasoning-degradation-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Cast Iron & Carbon Steel Seasoning Degradation Modeler",
  "url": "https://isitkitchensafe.com/tools/cast-iron-seasoning-degradation-modeler/",
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
  console.log('✅ Injected schemas into src/pages/tools/cast-iron-seasoning-degradation-modeler.astro');
} else if (enContent.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in EN tool page');
} else {
  console.error('❌ Could not find enTarget in src/pages/tools/cast-iron-seasoning-degradation-modeler.astro');
}

// 3. Update src/pages/[lang]/tools/cast-iron-seasoning-degradation-modeler.astro
const langPath = path.resolve('src/pages/[lang]/tools/cast-iron-seasoning-degradation-modeler.astro');
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
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/cast-iron-seasoning-degradation-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.pageTitle.split('|')[0].trim(),
  "url": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/cast-iron-seasoning-degradation-modeler/\`,
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
  lang={lang}
>
  <Fragment slot="head">
    <script type="application/ld+json" is:inline set:html={JSON.stringify(webAppSchema)} />
    <script type="application/ld+json" is:inline set:html={JSON.stringify(faqSchema)} />
    <script type="application/ld+json" is:inline set:html={JSON.stringify(breadcrumbSchema)} />
  </Fragment>`;

if (langContent.includes(langTarget)) {
  langContent = langContent.replace(langTarget, langReplacement);
  fs.writeFileSync(langPath, langContent, 'utf8');
  console.log('✅ Injected schemas into src/pages/[lang]/tools/cast-iron-seasoning-degradation-modeler.astro');
} else if (langContent.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in localized tool page');
} else {
  console.error('❌ Could not find langTarget in src/pages/[lang]/tools/cast-iron-seasoning-degradation-modeler.astro');
}
