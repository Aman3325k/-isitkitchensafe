const fs = require('fs');
const path = require('path');

// 1. Update src/pages/tools/canned-food-bpa-leaching-modeler.astro
const enPath = path.resolve('src/pages/tools/canned-food-bpa-leaching-modeler.astro');
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
      "name": "Canned Food BPA & Epoxy Liner Modeler",
      "item": "https://isitkitchensafe.com/tools/canned-food-bpa-leaching-modeler/"
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Canned Food BPA & Epoxy Phenolic Liner Leaching Modeler",
  "url": "https://isitkitchensafe.com/tools/canned-food-bpa-leaching-modeler/",
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
      "name": "Re-evaluation of the risks to public health related to the presence of bisphenol A (BPA) in foodstuffs - EFSA Journal",
      "headline": "EFSA Tolerable Daily Intake (TDI) of 0.2 ng/kg bw/day for Bisphenol A",
      "url": "https://www.efsa.europa.eu/en/efsajournal/pub/6857"
    },
    {
      "@type": "Legislation",
      "name": "FDA 21 CFR 175.300 - Resinous and polymeric coatings for food-contact surfaces",
      "legislationIdentifier": "21 CFR 175.300",
      "legislationPassedBy": {
        "@type": "Organization",
        "name": "United States Food and Drug Administration (FDA)"
      },
      "url": "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/cfrsearch.cfm?fr=175.300"
    },
    {
      "@type": "ScholarlyArticle",
      "name": "Migration of Bisphenol A from Can Coatings into Canned Foods: Kinetics and Health Risk Assessment - Journal of Agricultural and Food Chemistry",
      "headline": "BADGE Hydrolysis and Monomer Leaching in Acidic and Fatty Food Matrices",
      "url": "https://pubmed.ncbi.nlm.nih.gov/"
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
  console.log('✅ Updated EN canned-food-bpa-leaching-modeler.astro');
} else {
  console.log('⚠️ enTarget not found, might already be updated');
}

// 2. Update src/pages/[lang]/tools/canned-food-bpa-leaching-modeler.astro
const langPath = path.resolve('src/pages/[lang]/tools/canned-food-bpa-leaching-modeler.astro');
let langContent = fs.readFileSync(langPath, 'utf8');

const langTarget = `---

<Layout title={c.pageTitle} description={c.pageDescription} faqs={c.faqs} availableLocales={['en', 'es', 'pt', 'zh-cn', 'ja']}>`;

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
      "item": \`https://isitkitchensafe.com/\${lang}/tools/canned-food-bpa-leaching-modeler/\`
    }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": c.monoTitle,
  "url": \`https://isitkitchensafe.com/\${lang}/tools/canned-food-bpa-leaching-modeler/\`,
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
      "name": "Re-evaluation of the risks to public health related to the presence of bisphenol A (BPA) in foodstuffs - EFSA Journal",
      "headline": "EFSA Tolerable Daily Intake (TDI) of 0.2 ng/kg bw/day for Bisphenol A",
      "url": "https://www.efsa.europa.eu/en/efsajournal/pub/6857"
    },
    {
      "@type": "Legislation",
      "name": "FDA 21 CFR 175.300 - Resinous and polymeric coatings for food-contact surfaces",
      "legislationIdentifier": "21 CFR 175.300",
      "legislationPassedBy": {
        "@type": "Organization",
        "name": "United States Food and Drug Administration (FDA)"
      },
      "url": "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/cfrsearch.cfm?fr=175.300"
    },
    {
      "@type": "ScholarlyArticle",
      "name": "Migration of Bisphenol A from Can Coatings into Canned Foods: Kinetics and Health Risk Assessment - Journal of Agricultural and Food Chemistry",
      "headline": "BADGE Hydrolysis and Monomer Leaching in Acidic and Fatty Food Matrices",
      "url": "https://pubmed.ncbi.nlm.nih.gov/"
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
  console.log('✅ Updated [lang] canned-food-bpa-leaching-modeler.astro');
} else {
  console.log('⚠️ langTarget not found, might already be updated');
}
