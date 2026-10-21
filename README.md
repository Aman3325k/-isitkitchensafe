# Is It Kitchen Safe?

A static reference site answering "Can you put X in Y?" questions for kitchen appliances.

## Overview
IsItKitchenSafe provides 9,932 static diagnostic pages detailing whether everyday items are safe for the dishwasher, microwave, freezer, oven, dryer, air fryer, refrigerator, and more across 5 languages (English, Spanish, Portuguese, Japanese, Simplified Chinese), backed by 57 flagship interactive diagnostic tools.

## Tech Stack
- **Framework**: Astro.js
- **Styling**: Tailwind CSS v4
- **Hosting**: Cloudflare Pages
- **Architecture**: MPA (Multi-Page Application)
- **Engine**: Autonomous Growth & Ops Engine v2.0 (All-Day Smart Engine)

## Running Locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Autonomous Growth & Ops Engine (v2.0 - All-Day Smart Engine)

Continuous operations and automated growth engine with multi-language telemetry, bundle budgets, schema audits, component parity, sitemap health, topical opportunity intelligence, and background daemon monitoring:

```sh
# Run fast validation (<2s) across tools, parity, redirects, datasets, schemas, and CWV budgets
npm run ops:quick

# Run topical opportunity & autonomous growth radar
npm run ops:growth

# Run component registry parity audit (0 orphans)
npm run ops:parity

# Run sitemap XML and search engine indexing coverage audit
npm run ops:sitemaps

# Run targeted audits
npm run ops:seo        # Structured data (JSON-LD FAQPage, BreadcrumbList) & canonicals
npm run ops:cwv        # Core Web Vitals bundle budgets & asset geometry
node scripts/autonomous-growth-engine.cjs --tools      # 57 tools × 5 languages audit
node scripts/autonomous-growth-engine.cjs --redirects  # Cloudflare Pages 2k ceiling monitor
node scripts/autonomous-growth-engine.cjs --datasets   # 68+ multilingual data assets

# Run all-day autonomous background daemon (default 30m heartbeat)
npm run ops:daemon

# Run full master cycle (audits + 9,932-page static build + link verification)
npm run ops:engine
```

## Scale & Metrics
- **9,932 Static Pages** across 11 verticals and 5 languages (EN, ES, PT, JA, ZH-CN)
- **57 Flagship Interactive Tools** with 100% multilingual parity (285 tool pages)
- **Zero Dead Links** (895,000+ hrefs audited with 100% resolution)
- **9,784+ Indexed URLs** in verified XML Sitemaps (`sitemap-index.xml`, `sitemap-0.xml`)
- **Cloudflare Edge Middleware** fallback synchronization (`functions/_redirects-map.js`)
- **100% JSON-LD Schema Compliance** on all tool and reference pages

## SEO Investigation
A technical SEO investigation was conducted regarding a sudden drop in GSC traffic on July 14-15. See [SEO_INVESTIGATION_STATUS.md](SEO_INVESTIGATION_STATUS.md) for full details and findings.
