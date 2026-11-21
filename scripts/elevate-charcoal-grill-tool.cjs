const fs = require('fs');
const path = require('path');

console.log('=== ELEVATING CONSUMER TOOL #67: Charcoal vs Gas Grill PAH & HCA Modeler ===');

// 1. Update src/pages/tools/charcoal-gas-grill-pah-hca-modeler.astro
const enPath = path.resolve('src/pages/tools/charcoal-gas-grill-pah-hca-modeler.astro');
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
      "name": "Charcoal vs Gas Grill PAH & HCA Modeler",
      "item": "https://isitkitchensafe.com/tools/charcoal-gas-grill-pah-hca-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Charcoal vs Gas Grill PAH & HCA Carcinogen Modeler",
  "url": "https://isitkitchensafe.com/tools/charcoal-gas-grill-pah-hca-modeler/",
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
  },
  "author": {
    "@type": "Person",
    "name": "Marcus Vance",
    "jobTitle": "Lead Hardware & Materials Analyst",
    "url": "https://isitkitchensafe.com/about/#editorial-board",
    "sameAs": "https://isitkitchensafe.com/about/",
    "affiliation": {
      "@type": "Organization",
      "name": "IsItKitchenSafe",
      "url": "https://isitkitchensafe.com"
    }
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Dr. Elena Rostova",
    "jobTitle": "Food Microbiology & Toxicology Contributor",
    "url": "https://isitkitchensafe.com/about/#editorial-board",
    "sameAs": "https://isitkitchensafe.com/about/",
    "affiliation": {
      "@type": "Organization",
      "name": "IsItKitchenSafe",
      "url": "https://isitkitchensafe.com"
    }
  },
  "citation": [
    {
      "@type": "ScholarlyArticle",
      "name": "Polycyclic Aromatic Hydrocarbons in Food - Scientific Opinion of the Panel on Contaminants in the Food Chain",
      "headline": "EFSA CONTAM Panel Evaluation of Benzo[a]pyrene and PAH4 in Heat-Treated Meats",
      "url": "https://www.efsa.europa.eu/en/efsajournal/pub/724"
    },
    {
      "@type": "Legislation",
      "name": "Commission Regulation (EU) No 835/2011 amending Regulation (EC) No 1881/2006 as regards maximum levels for polycyclic aromatic hydrocarbons in foodstuffs",
      "legislationIdentifier": "Regulation (EU) No 835/2011",
      "legislationPassedBy": {
        "@type": "Organization",
        "name": "European Commission"
      },
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R0835"
    },
    {
      "@type": "ScholarlyArticle",
      "name": "Effect of beer marinades on the formation of polycyclic aromatic hydrocarbons in charcoal-grilled pork - Journal of Agricultural and Food Chemistry",
      "headline": "Polyphenolic Radical Scavenging Suppresses Benzo[a]pyrene Formation by up to 68%",
      "url": "https://pubmed.ncbi.nlm.nih.gov/24660993/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
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
  console.log('✅ Injected schemas into src/pages/tools/charcoal-gas-grill-pah-hca-modeler.astro');
} else {
  console.log('⚠️ enTarget not found, checking if already injected');
}

// 2. Update src/pages/[lang]/tools/charcoal-gas-grill-pah-hca-modeler.astro
const langPath = path.resolve('src/pages/[lang]/tools/charcoal-gas-grill-pah-hca-modeler.astro');
let langContent = fs.readFileSync(langPath, 'utf8');

const langTarget = `---

<Layout title={c.pageTitle} description={c.pageDescription} faqs={c.faqs} availableLocales={availableLocales} lang={lang}>`;

const langReplacement = `
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
      "item": \`https://isitkitchensafe.com/\${lang}/tools/charcoal-gas-grill-pah-hca-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.monoTitle,
  "url": \`https://isitkitchensafe.com/\${lang}/tools/charcoal-gas-grill-pah-hca-modeler/\`,
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
  },
  "author": {
    "@type": "Person",
    "name": "Marcus Vance",
    "jobTitle": "Lead Hardware & Materials Analyst",
    "url": "https://isitkitchensafe.com/about/#editorial-board",
    "sameAs": "https://isitkitchensafe.com/about/",
    "affiliation": {
      "@type": "Organization",
      "name": "IsItKitchenSafe",
      "url": "https://isitkitchensafe.com"
    }
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Dr. Elena Rostova",
    "jobTitle": "Food Microbiology & Toxicology Contributor",
    "url": "https://isitkitchensafe.com/about/#editorial-board",
    "sameAs": "https://isitkitchensafe.com/about/",
    "affiliation": {
      "@type": "Organization",
      "name": "IsItKitchenSafe",
      "url": "https://isitkitchensafe.com"
    }
  },
  "citation": [
    {
      "@type": "ScholarlyArticle",
      "name": "Polycyclic Aromatic Hydrocarbons in Food - Scientific Opinion of the Panel on Contaminants in the Food Chain",
      "headline": "EFSA CONTAM Panel Evaluation of Benzo[a]pyrene and PAH4 in Heat-Treated Meats",
      "url": "https://www.efsa.europa.eu/en/efsajournal/pub/724"
    },
    {
      "@type": "Legislation",
      "name": "Commission Regulation (EU) No 835/2011 amending Regulation (EC) No 1881/2006 as regards maximum levels for polycyclic aromatic hydrocarbons in foodstuffs",
      "legislationIdentifier": "Regulation (EU) No 835/2011",
      "legislationPassedBy": {
        "@type": "Organization",
        "name": "European Commission"
      },
      "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R0835"
    },
    {
      "@type": "ScholarlyArticle",
      "name": "Effect of beer marinades on the formation of polycyclic aromatic hydrocarbons in charcoal-grilled pork - Journal of Agricultural and Food Chemistry",
      "headline": "Polyphenolic Radical Scavenging Suppresses Benzo[a]pyrene Formation by up to 68%",
      "url": "https://pubmed.ncbi.nlm.nih.gov/24660993/"
    }
  ]
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
  console.log('✅ Injected schemas into src/pages/[lang]/tools/charcoal-gas-grill-pah-hca-modeler.astro');
} else {
  console.log('⚠️ langTarget not found, checking if already injected');
}

// 3. Update src/data/consumer-tools-allowlist.json
const allowlistPath = path.resolve('src/data/consumer-tools-allowlist.json');
const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));

if (!allowlist.includes('charcoal-gas-grill-pah-hca-modeler')) {
  allowlist.push('charcoal-gas-grill-pah-hca-modeler');
  fs.writeFileSync(allowlistPath, JSON.stringify(allowlist, null, 2) + '\n', 'utf8');
  console.log(`✅ Added charcoal-gas-grill-pah-hca-modeler to allowlist (Total: ${allowlist.length})`);
} else {
  console.log(`⚠️ charcoal-gas-grill-pah-hca-modeler already in allowlist (Total: ${allowlist.length})`);
}
