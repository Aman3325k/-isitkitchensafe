import blogData from '../data/blog.json';

const SITE_URL = 'https://isitkitchensafe.com';
const FEED_URL = `${SITE_URL}/rss.xml`;

interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  intro?: string;
  date: string;
  author?: string;
}

interface FeedItem {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  description: string;
  category: string;
  timestamp: number;
}

function escapeXml(value: string): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function parseUtcDate(dateStr: string): Date {
  const iso = /^\d{4}-\d{2}-\d{2}$/.test(dateStr) ? `${dateStr}T12:00:00Z` : dateStr;
  const parsed = new Date(iso);
  return Number.isNaN(parsed.getTime()) ? new Date('2026-06-13T12:00:00Z') : parsed;
}

const curatedTools: Array<{
  path: string;
  title: string;
  description: string;
  date: string;
}> = [
  {
    path: '/tools/kitchen-symbol-decoder/',
    title: 'Kitchen Bottom Symbol Decoder — Plastic Codes #1–#7 & Appliance Icons',
    description:
      'Instantly decode the stamped symbols on the bottom of bowls, Tupperware, cups, and pans. Check plastic recycling numbers #1–#7, microwave waves, wine glass & fork, and induction coil icons.',
    date: '2026-11-18',
  },
  {
    path: '/tools/meat-thawing-calculator/',
    title: 'USDA Meat & Turkey Safe Thawing Time Calculator',
    description:
      'Calculate Fridge, Cold Water, Microwave, and Cook-From-Frozen schedules across 10 meat cuts with exact Start Thawing By dates and USDA FSIS safe internal temperatures.',
    date: '2026-11-18',
  },
  {
    path: '/tools/plastic-code-checker/',
    title: 'Plastic Recycling Code (#1–#7) Kitchen Safety Checker',
    description:
      'Interactive kitchen safety lookup for PET, HDPE, PVC, LDPE, PP, PS, Polycarbonate, Tritan, and PLA plastic resin codes #1–#7 across microwave, dishwasher, freezer, and hot liquids.',
    date: '2026-11-18',
  },
  {
    path: '/tools/air-fryer-oven-converter/',
    title: 'Air Fryer, Convection Oven & Gas Mark Conversion Calculator',
    description:
      'Instant °F / °C / Gas Mark 1–9 conversion plus air fryer time/temp reduction and real-time parchment, silicone, and PTFE thermal safety alerts.',
    date: '2026-11-18',
  },
  {
    path: '/tools/cookware-oven-temp-lookup/',
    title: 'Cookware & Bakeware Safe Oven Temperature Lookup',
    description:
      'Live oven temperature and broiler safety check across 24 cookware and bakeware brands and materials including HexClad, Le Creuset, Caraway, Lodge, Pyrex, silicone, and parchment paper.',
    date: '2026-11-18',
  },
  {
    path: '/tools/internal-cooking-temp-chart/',
    title: 'USDA Safe Internal Cooking Temperature Chart & Doneness Lookup',
    description:
      'Interactive USDA FSIS minimum safe internal cooking temperatures, live °F/°C toggle, thermometer probe checker, rest timers, and printable fridge chart across 24 cuts of meat, poultry, seafood, eggs, and leftovers.',
    date: '2026-11-18',
  },
  {
    path: '/tools/microwave-wattage-converter/',
    title: 'Microwave Wattage Time Converter (600W–1250W) & Food Safety Calculator',
    description:
      'Convert microwave cooking times across 600W, 700W, 800W, 900W, 1000W, 1100W, 1200W, and 1250W Inverter ovens with power-level adjustments (30%–100%), halfway stir checkpoints, standing time, and USDA 165°F (74°C) cold-spot safety rules.',
    date: '2026-11-18',
  },
  {
    path: '/tools/cleaner-mixing-danger-checker/',
    title: 'Kitchen Cleaner Mixing Danger Checker: Bleach, Vinegar, Ammonia & Peroxide',
    description:
      'Interactive toxic gas reaction matrix for household cleaners — check bleach, vinegar, ammonia, hydrogen peroxide, rubbing alcohol, and drain openers for chlorine, chloramine, chloroform, and peracetic acid hazards plus emergency guidance.',
    date: '2026-11-18',
  },
  {
    path: '/tools/appliance-descaling-calculator/',
    title: 'Coffee Maker, Electric Kettle & Espresso Descaling Ratio Calculator',
    description:
      'Calculate exact citric acid and white vinegar descaling ratios by reservoir volume, check aluminum and brass boiler corrosion alerts, and build hard-water descale schedules for drip brewers, electric kettles, Keurig, Nespresso, and espresso machines.',
    date: '2026-11-18',
  },
  {
    path: '/tools/leftover-shelf-life-calculator/',
    title: 'Leftover Shelf Life & Safe Storage Calculator',
    description:
      'Check how long cooked leftovers, meats, dairy, soups, and meal prep stay safe in the refrigerator, freezer, or at room temperature using USDA and FDA food safety guidelines.',
    date: '2026-11-18',
  },
  {
    path: '/tools/pan-scratch-inspector/',
    title: 'AI Pan Scratch & Damage Inspector — Free Teflon Safety Checker',
    description:
      'Upload a photo of your scratched non-stick skillet or frying pan to instantly detect coating wear, calculate microplastic shedding risk, and get an authoritative safety verdict.',
    date: '2026-11-18',
  },
  {
    path: '/tools/cookware-brand-transparency-index/',
    title: 'Cookware Brand Transparency & Greenwashing Index (2026)',
    description:
      'Search 25 top global cookware brands to detect hidden PTFE fluoropolymers, review third-party laboratory leaching audits, and decode misleading PFOA-free claims.',
    date: '2026-11-18',
  },
  {
    path: '/tools/culinary-oil-smoke-point-simulator/',
    title: 'Culinary Oil Smoke Point & Carcinogenic Aldehyde Simulator',
    description:
      'Compare smoke points versus true oxidative stability across 20 culinary oils and estimate 4-HNE, MDA, and acrolein formation under frying and searing temperatures.',
    date: '2026-11-18',
  },
];

export async function GET(): Promise<Response> {
  const blogItems: FeedItem[] = (blogData as BlogPost[])
    .map((post) => {
      const dateObj = parseUtcDate(post.date);
      const url = `${SITE_URL}/blog/${post.slug}/`;
      return {
        title: post.title,
        link: url,
        guid: url,
        pubDate: dateObj.toUTCString(),
        description: post.excerpt || post.intro || post.title,
        category: 'Kitchen Safety Guides',
        timestamp: dateObj.getTime(),
      };
    })
    .sort((a, b) => b.timestamp - a.timestamp || a.title.localeCompare(b.title));

  const toolItems: FeedItem[] = curatedTools.map((tool) => {
    const dateObj = parseUtcDate(tool.date);
    const url = `${SITE_URL}${tool.path}`;
    return {
      title: tool.title,
      link: url,
      guid: url,
      pubDate: dateObj.toUTCString(),
      description: tool.description,
      category: 'Interactive Tools',
      timestamp: dateObj.getTime(),
    };
  });

  const allItems = [...blogItems, ...toolItems];
  const latestTimestamp = allItems.reduce(
    (max, item) => (item.timestamp > max ? item.timestamp : max),
    0
  );
  const lastBuildDate = new Date(
    latestTimestamp || Date.parse('2026-11-18T12:00:00Z')
  ).toUTCString();

  const itemsXml = allItems
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="true">${escapeXml(item.guid)}</guid>
      <pubDate>${escapeXml(item.pubDate)}</pubDate>
      <category>${escapeXml(item.category)}</category>
      <description>${escapeXml(item.description)}</description>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml('IsItKitchenSafe — Kitchen Safety Guides & Interactive Tools')}</title>
    <link>${SITE_URL}/</link>
    <description>${escapeXml('Evidence-based kitchen safety guides, cookware material science, food storage rules, and interactive consumer tools from IsItKitchenSafe.')}</description>
    <language>en-us</language>
    <lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
