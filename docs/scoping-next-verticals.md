# Roadmap & Verification: Existing Verticals & 6 Auxiliary Directories

**Date**: September 2026  
**Repository**: `isitkitchensafe.com` (`./safecheck/`)  
**Status**: Milestone Verification & Roadmap Scoping  

---

## SECTION A — Verification Matrix of Existing Verticals

Prior scoping notes estimated ~123 pages across Dryer, Air Fryer, Refrigerator, and Washing Machine. Direct audit of the codebase confirms that all four verticals have **already been fully engineered, expanded, and translated into Spanish (ES) and Portuguese (PT) with 100% trilingual slug parity and 0 broken links**.

### 1. Verification Summary Table

| Vertical | Items (EN) | Items (ES) | Items (PT) | Trilingual Parity | Primary Categories / Physical Scope | Git Milestone Tag |
| :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| **Dryer** | 81 | 81 | 81 | **100% PASS** | Natural fabrics (cotton, wool, silk), synthetics (polyester, nylon, spandex), footwear (sneakers, boots), household gear (pillows, weighted blankets), hazardous materials (flammable oils, rubber) | `v1.0-dryer-vertical` |
| **Air Fryer** | 210 | 210 | 210 | **100% PASS** | Cookware materials (metal, silicone, glass, paper), proteins & poultry, vegetables, frozen snacks, doughs/baking, dairy & cheeses, leftovers | `v1.1-airfryer-complete` |
| **Refrigerator** | 193 | 193 | 193 | **100% PASS** | Raw meats & seafood, deli cuts, dairy/cheese/milk, fresh produce/greens, fresh fruits/melons, condiments/sauces, cooked leftovers, beverages, doughs, pickled/canned goods | `v1.1-refrigerator-complete` |
| **Washing Machine** | 122 | 122 | 122 | **100% PASS** | Synthetic polyester blends (77), footwear (21), wool/silk natural fibers (8), machine components (5), plastics, ceramics, textiles | `v1.0-washing-machine-complete` |
| **Total** | **606** | **606** | **606** | **100% PASS** | **1,818 total localized pages across 4 appliances** | **All Verified** |

### 2. Discrepancy & Finding Note
- **Finding**: None of these four verticals are unbuilt or missing. They represent 606 unique items (1,818 rendered pages across EN/ES/PT) and were completed and tagged in previous sprints.
- **Action**: No remediation or rebuild required for Dryer, Air Fryer, Refrigerator, or Washing Machine. Focus shifts entirely to maintaining link integrity and scoping the auxiliary directories.

---

## SECTION B — Scoping & Opportunity Roadmap for 6 Auxiliary Directories

The site architecture features 6 auxiliary directories designed to capture high-intent, long-tail search traffic that standard "Can you put X in Y?" item pages do not directly address. 

Below is the structured roadmap evaluating route structure, content intent, page estimates, and alignment with **golden-keyword criteria** (SERP dominated by generic forum threads, outdated PDFs, or irrelevant app listings).

---

### Directory 1: Head-to-Head Comparisons (`/compare/[slug]`)

- **Route Pattern**: `/[lang]/compare/[slug]` (e.g. `/compare/pyrex-vs-anchor-hocking`, `/compare/silicone-vs-plastic-freezer`)
- **Data Source**: `src/data/comparisons.json` (with `.es.json` and `.pt.json`)
- **Core Purpose**: Answers direct comparative evaluation queries between two competing kitchen materials, container brands, or appliance techniques (e.g. Borosilicate vs Soda-Lime glass, Air Fryer vs Convection Oven for re-heating).
- **Current State**: ~50 curated comparisons localized in EN, ES, and PT.
- **Estimated Scope**: Expand to **120 targeted comparisons** across all 7 appliances.
- **Golden-Keyword Fit**: **EXTREMELY HIGH**. 
  - *SERP Reality*: Google queries like *"can you freeze pyrex vs anchor hocking"* return 10-year-old Reddit threads, generic cooking blogs with no material science, or manufacturer FAQ pages that contradict each other.
  - *Winning Strategy*: Side-by-side spec comparison table, thermal shock delta thresholds (°F/°C), failure mode comparison, and definitive verdict badge above the fold.

---

### Directory 2: Shelf-Life & Storage Thresholds (`/how-long/[slug]`)

- **Route Pattern**: `/[lang]/how-long/[slug]` (e.g. `/how-long/cooked-chicken-freezer`, `/how-long/raw-ground-beef-fridge`)
- **Data Source**: `src/data/how-long.json` (with `.es.json` and `.pt.json`)
- **Core Purpose**: Answers high-urgency expiration and spoilage timeline queries across refrigerator, freezer, and pantry storage locations.
- **Current State**: ~110 items with structured timelines (refrigerator days, freezer months, room temp hours).
- **Estimated Scope**: Expand to **250 food items** covering all high-spoilage meats, dairy, produce, prepared meals, and pantry staples.
- **Golden-Keyword Fit**: **VERY HIGH**.
  - *SERP Reality*: Searchers have high immediate urgency ("is chicken in the fridge still good after 5 days?"). First page results are frequently dense government tables (USDA FoodKeeper) or recipe blog intros burying the number under 800 words of filler.
  - *Winning Strategy*: Prominent timeline badge at the top (e.g., "3–4 Days in Refrigerator / 9 Months in Freezer"), visual spoilage checklist (smell, color, texture), and microbiological risk summary (*Listeria*, *Salmonella*).

---

### Directory 3: Thaw & Refreeze Safety (`/refreeze/[slug]`)

- **Route Pattern**: `/[lang]/refreeze/[slug]` (e.g. `/refreeze/raw-chicken`, `/refreeze/bread`, `/refreeze/ice-cream`)
- **Data Source**: `src/data/refreeze.json` (with `.es.json` and `.pt.json`)
- **Core Purpose**: Answers acute safety panic when food has accidentally or deliberately thawed: "Can I safely refreeze this, or will it make me sick?"
- **Current State**: ~50 common perishable items.
- **Estimated Scope**: Expand to **100 high-risk food items**.
- **Golden-Keyword Fit**: **EXCEPTIONAL (Peak Golden Opportunity)**.
  - *SERP Reality*: Dominated by fearful consumers asking Reddit or Quora after power outages or refrigerator door accidents. Authoritative results are often academic extension office PDFs that are unreadable on mobile devices.
  - *Winning Strategy*: Clear binary status badge ("SAFE TO REFREEZE IF KEPT COLD" vs "DO NOT REFREEZE"), temperature threshold guide (<40°F / 4°C rule), cell wall damage / textural penalty rating, and safe preparation steps.

---

### Directory 4: Accident Prevention & Physics (`/what-happens/[slug]`)

- **Route Pattern**: `/[lang]/what-happens/[slug]` (e.g. `/what-happens/metal-in-microwave`, `/what-happens/glass-in-oven-thermal-shock`)
- **Data Source**: `src/data/what-happens.json` (with `.es.json` and `.pt.json`)
- **Core Purpose**: Explains the exact physical, chemical, or biological mechanism that occurs when an incompatible item enters an appliance (arcing, dielectric heating, sublimation, thermal shock, polymer leaching).
- **Current State**: ~40 accident scenarios.
- **Estimated Scope**: Expand to **90 scenarios** across all appliances (including dryer lint fires, washing machine waterproofing traps).
- **Golden-Keyword Fit**: **HIGH**.
  - *SERP Reality*: Users searching *"what happens if you put foil in the microwave for 5 seconds"* seek immediate reassurance and damage control advice. Most results are clickbait YouTube videos or casual forum chatter.
  - *Winning Strategy*: Immediate danger triage box ("Immediate Hazard Level: High / Low / None"), step-by-step emergency action checklist, appliance inspection checklist, and underlying physics breakdown.

---

### Directory 5: Material Hubs & Taxonomy (`/material/[id]`)

- **Route Pattern**: `/[lang]/material/[id]` (e.g. `/material/metal`, `/material/plastic`, `/material/glass-ceramic`)
- **Data Source**: `src/utils/materialCategories.ts` (mapped to `items.json`)
- **Core Purpose**: Authoritative pillar pages consolidating safety guidelines across all 7 appliances for a given material class (e.g. Borosilicate Glass across microwave, oven, dishwasher, freezer).
- **Current State**: 8 primary material categories defined in code.
- **Estimated Scope**: **8 pillar pages** with deep cross-linking to 500+ related items.
- **Golden-Keyword Fit**: **HIGH (Topical Authority Anchor)**.
  - *SERP Reality*: Users search broad queries like *"is borosilicate glass safe for all kitchen appliances"*. Most competitor sites only answer for a single appliance (e.g., microwave only) without multi-appliance matrixing.
  - *Winning Strategy*: Interactive appliance safety matrix table (Microwave, Oven, Freezer, Dishwasher, Air Fryer ratings), maximum temperature thresholds, thermal shock resistance limits (ΔT values), and comprehensive item directory.

---

### Directory 6: Appliance Guides & Editorial Deep-Dives (`/blog/[slug]`)

- **Route Pattern**: `/[lang]/blog/[slug]` (e.g. `/blog/dishwasher-safe-symbols-guide`, `/blog/air-fryer-cookware-materials-guide`)
- **Data Source**: `src/data/blog.json` (with `.es.json` and `.pt.json`)
- **Core Purpose**: Educational pillar content explaining industry certifications, manufacturer symbols, testing standards (ASTM, FDA food contact), and comprehensive safety checklists.
- **Current State**: ~15 trilingual editorial guides.
- **Estimated Scope**: Expand to **35 strategic editorial guides**.
- **Golden-Keyword Fit**: **MODERATE TO HIGH**.
  - *SERP Reality*: Queries like *"what does dishwasher safe symbol with circles mean"* are flooded with ad-heavy lifestyle blogs featuring incorrect symbol graphics.
  - *Winning Strategy*: High-resolution SVG vector diagrams of all EU/US kitchen symbols, printable PDF kitchen reference sheets, and internal link hub connecting directly to individual item pages for AdSense pageview multiplication.

---

## SECTION C — Summary & Sequencing Recommendation

1. **Immediate Focus**: Maintain 100% trilingual parity on existing 1,907 items per language.
2. **Phase 1 Content Expansion**: Expand `/how-long/` and `/refreeze/` directories first (highest urgency and AdSense revenue potential).
3. **Phase 2 Technical Expansion**: Add programmatic schema (`ItemPage`, `FAQPage`, `HowTo`) to all auxiliary directory pages to dominate Google rich snippets.
