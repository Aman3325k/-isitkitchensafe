const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #68: Air Fryer vs Deep Fryer Lipid Oxidation & 4-HNE Modeler ===');

// 1. Update src/pages/tools/air-fryer-lipid-oxidation-modeler.astro
const enPath = path.resolve('src/pages/tools/air-fryer-lipid-oxidation-modeler.astro');
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
      "name": "Air Fryer vs Deep Fryer Lipid Oxidation Modeler",
      "item": "https://isitkitchensafe.com/tools/air-fryer-lipid-oxidation-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Air Fryer vs Deep Fryer Lipid Oxidation & 4-HNE Aldehyde Modeler",
  "url": "https://isitkitchensafe.com/tools/air-fryer-lipid-oxidation-modeler/",
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
  console.log('✅ Injected schemas into src/pages/tools/air-fryer-lipid-oxidation-modeler.astro');
} else {
  console.log('⚠️ enTarget not found, checking if already injected');
}

// 2. Update src/pages/[lang]/tools/air-fryer-lipid-oxidation-modeler.astro
const langPath = path.resolve('src/pages/[lang]/tools/air-fryer-lipid-oxidation-modeler.astro');
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
      "name": c.breadcrumbs[0].label,
      "item": new URL(c.breadcrumbs[0].href || \`/\${lang}/\`, 'https://isitkitchensafe.com').href
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": c.breadcrumbs[1].label,
      "item": new URL(c.breadcrumbs[1].href || \`/\${lang}/tools/\`, 'https://isitkitchensafe.com').href
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": c.breadcrumbs[2].label,
      "item": \`https://isitkitchensafe.com/\${lang}/tools/air-fryer-lipid-oxidation-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.monoTitle,
  "url": \`https://isitkitchensafe.com/\${lang}/tools/air-fryer-lipid-oxidation-modeler/\`,
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
  console.log('✅ Injected schemas into src/pages/[lang]/tools/air-fryer-lipid-oxidation-modeler.astro');
} else {
  console.log('⚠️ langTarget not found, checking if already injected');
}

// 3. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));

if (!allowlist.includes('air-fryer-lipid-oxidation-modeler')) {
  allowlist.push('air-fryer-lipid-oxidation-modeler');
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added air-fryer-lipid-oxidation-modeler to allowlist (Total: ${allowlist.length})`);
} else {
  console.log(`⚠️ air-fryer-lipid-oxidation-modeler already in allowlist (Total: ${allowlist.length})`);
}
