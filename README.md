# Is It Kitchen Safe?

A static kitchen safety reference platform and interactive consumer tool suite answering *"Can you put X in Y?"* and everyday food, cookware, and appliance safety questions.

## Overview

IsItKitchenSafe delivers **10,917+ static pages** across **11 verticals** and **5 languages** (**EN, ES, PT, ZH-CN, JA**), pairing fast appliance-safety verdicts with **195 interactive tools** (including **44 Google-indexed Everyday Consumer Kitchen Safety Tools**), **32 evergreen guides × 5 languages = 160 localized articles**, **68 comparisons × 5 languages = 340 localized pages**, **1,295 item pages per language (6,475 localized reference pages)**, **WCAG 2.1 AA accessibility**, and transparent E-E-A-T verification standards.

## Tech Stack
- **Framework**: Astro.js (MPA static generation)
- **Styling**: Tailwind CSS v4
- **Hosting & Edge**: Cloudflare Pages + Cloudflare Pages Functions (`functions/api/og.svg.js`, `functions/_redirects-map.js`)
- **Operations**: Autonomous Growth & Ops Engine v2.0 + 15-Minute Autonomous Growth Roadmap (`logs/website_growth_roadmap.json`)

## Consumer Growth, E-E-A-T & Retention Architecture

### Everyday Consumer Kitchen Safety Tools (44 Google-Indexed Tools)
All 195 interactive tools are split cleanly between everyday consumer utilities and specialized commercial/lab simulators (**77 Home Kitchen Safety** + **118 Commercial & Industrial Engineering Lab**). **44 high-utility consumer tools** are explicitly allowlisted for search indexing in [`src/data/consumer-tools-allowlist.json`](src/data/consumer-tools-allowlist.json) across all 5 languages, including:
- **Pantry, Spices & Dry Goods Shelf-Life & Safety Lookup** (`pantry-dry-goods-shelf-life-checker`)
- **Kitchen Food Allergy & Cross-Contact Safety Checker** (`food-allergy-cross-contact-checker`)
- **Induction Cookware Compatibility & 3-Second Magnet Test Checker** (`induction-cookware-compatibility-checker`)
- **Dishwasher Detergent, Rinse Aid & Hard Water Safety Calculator** (`dishwasher-detergent-dosage-calculator`)
- **Interactive Kitchen Safety IQ Quiz** (`kitchen-safety-iq-quiz`)
- **Cast Iron & Carbon Steel Seasoning & Rust Troubleshooter** (`cast-iron-seasoning-troubleshooter`)
- **Interactive Refrigerator Organization & Safe Shelf-Zone Planner** (`fridge-organization-zone-planner`)
- **Cooking Oil Smoke Point & Safe Frying Temperature Finder** (`cooking-oil-smoke-point-finder`)
- **Baby Bottle, Sippy Cup & Kids Kitchenware Safety Checker** (`baby-bottle-safety-checker`)
- **Fridge & Freezer Power Outage Food Safety Checker** (`power-outage-food-safety-checker`)
- **Microwave Wattage Time Converter (600W–1250W)** (`microwave-wattage-converter`)
- **Kitchen Bottom Symbol Decoder** (`kitchen-symbol-decoder`)
- **USDA Leftover Shelf-Life Countdown Calculator** (`leftover-shelf-life-calculator`)
- **USDA Meat & Turkey Thawing Calculator** (`meat-thawing-calculator`)
- **Plastic Recycling Code `#1–#7` Safety Checker** (`plastic-code-checker`)
- **Air Fryer & Oven Temp Converter** (`air-fryer-oven-converter`)
- **Cookware Safe Oven Temp Lookup** (`cookware-oven-temp-lookup`)
- **USDA Safe Internal Cooking Temp Chart** (`internal-cooking-temp-chart`)
- **Coffee Maker & Kettle Descaling Calculator** (`appliance-descaling-calculator`)
- **Kitchen Cleaner Mixing Danger Checker** (`cleaner-mixing-danger-checker`)
- **Pan Scratch Inspector** (`pan-scratch-inspector`)
- Plus recall scanning, thermal shock, culinary oil smoke point, cookware brand transparency, and hazard triage tools.

### Content & Comparison Verticals
- **32 Evergreen Multilingual Blog Guides** (**32 evergreen guides × 5 languages = 160 localized articles**) with **100% 5-language slug parity** across EN, ES, PT, ZH-CN, and JA.
- **68 High-Intent Brand & Material Comparisons** (`/compare/`, **68 comparisons × 5 languages = 340 localized pages**), covering popular cookware, drinkware, and kitchen material matchups across 5 languages.
- **Original SVG Visual Safety Diagrams** embedded across all **7 appliance hubs** (Dishwasher, Microwave, Freezer, Oven, Dryer, Air Fryer, Refrigerator).

### E-E-A-T, Discovery, Accessibility & Retention Features
- **WCAG 2.1 AA Accessibility**: Consistent keyboard `:focus-visible` outlines, `prefers-reduced-motion` support, skip-to-content navigation, and semantic ARIA landmarks across templates and interactive calculators.
- **Live Instant Directory Search**: Client-side instant search and filtering across every major directory hub (`/tools/`, `/blog/`, `/how-long/`, `/refreeze/`, `/compare/`, `/material/`, `/what-happens/`) in all 5 languages.
- **Multilingual Verification Standards**: Localized `/methodology/` pages detailing USDA, FDA, NSF, and materials-science review standards.
- **Printable 1-Page Fridge Safety Cheat Sheet**: Localized `/saved/` bookmark hub with clean print layout for kitchen reference.
- **1080×1350 Browser PNG Safety Card Exporter**: One-click client-side social/reference card download.
- **Dynamic Cloudflare Edge OG/Pinterest Card Generator**: On-the-fly SVG card rendering at [`functions/api/og.svg.js`](functions/api/og.svg.js).
- **Global Quick Search**: Instant keyboard-accessible `Ctrl+K` / `/` search across items, tools, and guides.
- **Syndication, PWA & AI Discovery**:
  - **RSS 2.0 Feed**: `/rss.xml`
  - **PWA Web App Manifest**: [`public/manifest.webmanifest`](public/manifest.webmanifest)
  - **AI Search Directory**: [`public/llms.txt`](public/llms.txt)

## Running Locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Autonomous Growth Roadmap & Ops Engine

The site tracks iterative consumer SEO, UX, and tool shipping waves on a **15-minute autonomous growth cadence** in [`logs/website_growth_roadmap.json`](logs/website_growth_roadmap.json), backed by automated validation and IndexNow discovery scripts:

```sh
# Run fast validation (<2s) across tools, parity, redirects, datasets, schemas, and CWV budgets
npm run ops:quick

# Run topical opportunity & autonomous growth radar
npm run ops:growth

# Run component registry parity audit (0 orphans)
npm run ops:parity

# Run sitemap XML and search engine indexing coverage audit
npm run ops:sitemaps

# Validate IndexNow key file, dist/sitemap-0.xml extraction, batching & priority consumer URLs (no live HTTP POST)
npm run ops:indexnow -- --dry-run

# Submit verified priority & sitemap URLs live via IndexNow (Bing, Yandex, Seznam)
npm run ops:indexnow

# Run targeted audits
npm run ops:seo        # Structured data (JSON-LD FAQPage, BreadcrumbList) & canonicals
npm run ops:cwv        # Core Web Vitals bundle budgets & asset geometry
node scripts/autonomous-growth-engine.cjs --tools      # 194 tools × 5 languages audit
node scripts/autonomous-growth-engine.cjs --redirects  # Cloudflare Pages 2k ceiling monitor
node scripts/autonomous-growth-engine.cjs --datasets   # Multilingual data assets audit

# Run all-day autonomous background daemon (default 30m heartbeat)
npm run ops:daemon

# Run full master cycle (audits + 10,887+-page static build + link verification)
npm run ops:engine
```

## Scale & Metrics
- **10,887+ Static Pages** across 11 verticals and 5 languages (EN, ES, PT, ZH-CN, JA)
- **194 Interactive Tools** across 5 languages (100% 5-language parity: 76 Home Kitchen Safety + 118 Commercial Engineering), including **43 Google-indexed Consumer Utilities** (`src/data/consumer-tools-allowlist.json`)
- **32 Evergreen Guides × 5 Languages = 160 Articles** with 100% slug parity + **63 Comparisons × 5 Languages = 315 Pages**
- **1,295 Items per Language (6,475 Localized Reference Pages)** with 100% slug parity including modern kitchenware (Owala FreeSip, Ninja Creami, Always Pan, Stasher, Instant Pot)
- **WCAG 2.1 AA Accessibility** (`:focus-visible`, `prefers-reduced-motion`, ARIA landmarks) + **Live Instant Search** across `/tools/`, `/blog/`, `/how-long/`, `/refreeze/`, `/compare/`, `/material/`, and `/what-happens/`
- **1,303,271+ Audited Links / 0 Broken Links** (100% internal href resolution verified)
- **Verified XML Sitemaps & Real-Time Indexing** (`sitemap-index.xml`, `sitemap-0.xml`, `scripts/ping-indexnow.cjs`)
- **Cloudflare Edge Middleware & Dynamic OG/Pinterest Cards** (`functions/_redirects-map.js`, `functions/api/og.svg.js`)
- **100% JSON-LD Schema Compliance** across consumer tools, comparisons, guides, and reference pages

## SEO Investigation
A technical SEO investigation was conducted regarding a sudden drop in GSC traffic on July 14-15. See [SEO_INVESTIGATION_STATUS.md](SEO_INVESTIGATION_STATUS.md) for full details and findings.
