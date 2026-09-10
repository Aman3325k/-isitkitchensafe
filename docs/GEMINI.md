# Project: isitkitchensafe.com
## Mission
A static reference site answering "Can you put X in Y?" questions for kitchen appliances.
Target: US audience. Goal: AdSense monetization via organic Google traffic.

## Tech Stack (NEVER change these)
- Framework: Astro.js (latest) — output: static ONLY
- Styling: Tailwind CSS v4
- Hosting: Cloudflare Pages
- Routing: MPA only — NO SPA, NO client-side routing, NO React Router

## Site Architecture
- Each page = one item + one appliance combo
- URL pattern: /dishwasher/hydroflask, /microwave/styrofoam, /freezer/avocado
- 1500+ static pages total, generated from a data file
- Homepage = search/browse interface listing all combos

## Page Structure (every page must have)
1. H1: "Can You Put [Item] in the [Appliance]?"
2. Quick answer badge: YES / NO / DEPENDS (with color: green/red/yellow)
3. Short explanation (2-3 sentences, plain English)
4. Safety details section
5. Tips & warnings
6. FAQ section (3-5 questions, schema markup included)
7. Related items section (internal links)

## SEO Rules (NEVER break these)
- Every page must have unique <title> and <meta description>
- Use FAQ schema (JSON-LD) on every page
- Canonical URLs on every page
- sitemap.xml must be auto-generated
- robots.txt must exist
- No duplicate content
- Images must have alt text
- Core Web Vitals: aim for 100 Lighthouse score

## Design Rules
- Follow DESIGN.md at all times
- Mobile-first
- Fast: no unnecessary JS, no heavy fonts
- Trust signals: clear YES/NO answer above the fold
- Never use placeholder content

## Appliances Covered
- Dishwasher
- Microwave
- Freezer
- Oven
- Dryer
- Air Fryer
- Refrigerator

## Data Structure
All content lives in src/data/items.json
Each entry has: item, appliance, safe (yes/no/depends), reason, tips, warnings, faqs[]

## Code Quality
- TypeScript: strict mode
- No inline styles — Tailwind classes only
- Components go in src/components/
- Layouts go in src/layouts/
- Data goes in src/data/
- All pages generated via dynamic routing from data file

## Commit Rules
- Never break the build
- Every working feature = commit before moving to next task