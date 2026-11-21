const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #70: Melamine Tableware Formaldehyde & Cyanuric Acid Modeler ===');

// 1. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));

if (!allowlist.includes('melamine-tableware-formaldehyde-modeler')) {
  allowlist.push('melamine-tableware-formaldehyde-modeler');
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added 'melamine-tableware-formaldehyde-modeler' to allowlist. Total tools: ${allowlist.length}`);
} else {
  console.log(`ℹ️ Already in allowlist. Total tools: ${allowlist.length}`);
}

// 2. Update src/pages/tools/melamine-tableware-formaldehyde-modeler.astro
const enPath = path.resolve('src/pages/tools/melamine-tableware-formaldehyde-modeler.astro');
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
      "name": "Melamine Tableware Formaldehyde Modeler",
      "item": "https://isitkitchensafe.com/tools/melamine-tableware-formaldehyde-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Melamine Tableware Formaldehyde & Cyanuric Acid Leaching Modeler",
  "url": "https://isitkitchensafe.com/tools/melamine-tableware-formaldehyde-modeler/",
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
  console.log('✅ Injected schemas into src/pages/tools/melamine-tableware-formaldehyde-modeler.astro');
} else if (enContent.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in EN tool page');
} else {
  console.error('❌ Could not find enTarget in src/pages/tools/melamine-tableware-formaldehyde-modeler.astro');
}

// 3. Update src/pages/[lang]/tools/melamine-tableware-formaldehyde-modeler.astro
const langPath = path.resolve('src/pages/[lang]/tools/melamine-tableware-formaldehyde-modeler.astro');
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
      "item": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/melamine-tableware-formaldehyde-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.pageTitle.split('|')[0].trim(),
  "url": \`https://isitkitchensafe.com/\${lang === 'en' ? '' : lang + '/'}tools/melamine-tableware-formaldehyde-modeler/\`,
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
  console.log('✅ Injected schemas into src/pages/[lang]/tools/melamine-tableware-formaldehyde-modeler.astro');
} else if (langContent.includes('webAppSchema')) {
  console.log('ℹ️ Schemas already present in localized tool page');
} else {
  console.error('❌ Could not find langTarget in src/pages/[lang]/tools/melamine-tableware-formaldehyde-modeler.astro');
}
