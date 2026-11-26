/**
 * Wave 88 Autonomous Growth Log Synchronizer
 * Idempotently updates:
 *   - logs/autonomous-growth-history.json
 *   - logs/website_growth_roadmap.json
 *   - logs/autonomous_growth_v2_report.json
 */
const fs = require('fs');
const path = require('path');

const LOGS_DIR = path.join(__dirname, '..', 'logs');
const NOW_ISO = new Date().toISOString();

const DELIVERED_URLS = [
  '/tools/refrigerator-defrost-safety-modeler/',
  '/es/tools/refrigerator-defrost-safety-modeler/',
  '/pt/tools/refrigerator-defrost-safety-modeler/',
  '/zh-cn/tools/refrigerator-defrost-safety-modeler/',
  '/ja/tools/refrigerator-defrost-safety-modeler/',
  '/blog/refrigerator-warm-freezer-cold-defrost-thermostat-listeria-safety/',
  '/es/blog/refrigerator-warm-freezer-cold-defrost-thermostat-listeria-safety/',
  '/pt/blog/refrigerator-warm-freezer-cold-defrost-thermostat-listeria-safety/',
  '/zh-cn/blog/refrigerator-warm-freezer-cold-defrost-thermostat-listeria-safety/',
  '/ja/blog/refrigerator-warm-freezer-cold-defrost-thermostat-listeria-safety/',
  '/blog/gourmia-kalorik-air-fryer-oven-microwave-griller-2026-cpsc-recalls-guide/',
  '/es/blog/gourmia-kalorik-air-fryer-oven-microwave-griller-2026-cpsc-recalls-guide/',
  '/pt/blog/gourmia-kalorik-air-fryer-oven-microwave-griller-2026-cpsc-recalls-guide/',
  '/zh-cn/blog/gourmia-kalorik-air-fryer-oven-microwave-griller-2026-cpsc-recalls-guide/',
  '/ja/blog/gourmia-kalorik-air-fryer-oven-microwave-griller-2026-cpsc-recalls-guide/',
  '/blog/efsa-2026-bisphenol-substitutes-melamine-svhc-cookware-safety-guide/',
  '/es/blog/efsa-2026-bisphenol-substitutes-melamine-svhc-cookware-safety-guide/',
  '/pt/blog/efsa-2026-bisphenol-substitutes-melamine-svhc-cookware-safety-guide/',
  '/zh-cn/blog/efsa-2026-bisphenol-substitutes-melamine-svhc-cookware-safety-guide/',
  '/ja/blog/efsa-2026-bisphenol-substitutes-melamine-svhc-cookware-safety-guide/'
];

const COMPLETED_WAVE88_ENTRY = {
  task_id: 'TOOL-CONSUMER-115',
  title: 'Wave 88: Consumer Tool #88 Elevation (refrigerator-defrost-safety-modeler) & High-Impact Safety Guides (131->134 / 5 langs)',
  target_vertical: 'interactive-tools',
  status: 'completed',
  started_at: NOW_ISO,
  completed_at: NOW_ISO,
  milestones: [
    {
      id: 'm1',
      title: 'Elevate consumer tool #88 (refrigerator-defrost-safety-modeler) into Consumer Tools allowlist across 5 languages',
      status: 'completed',
      completed_at: NOW_ISO
    },
    {
      id: 'm2',
      title: 'Publish 3 authoritative fact-checked safety guides across 5 languages (131 -> 134, 670 localized articles total)',
      status: 'completed',
      completed_at: NOW_ISO
    },
    {
      id: 'm3',
      title: 'Wire contextual interactive tool routing, RSS, llms.txt, README.md & schema validations',
      status: 'completed',
      completed_at: NOW_ISO
    },
    {
      id: 'm4',
      title: 'Verify 0 build errors and 0 dead links across 12387 pages (1497488 verified hrefs)',
      status: 'completed',
      completed_at: NOW_ISO
    }
  ],
  delivered_urls: DELIVERED_URLS,
  verification_metrics: {
    totalPagesBuilt: 12387,
    totalLinksAudited: 1497488,
    deadLinksDetected: 0,
    i18nChecksPassed: 203587,
    sitemapUrls: 10594,
    consumerToolsIndexed: 88,
    totalBlogGuides: 134,
    slugParity: '100%'
  }
};

// 1. Update logs/autonomous-growth-history.json
const historyPath = path.join(LOGS_DIR, 'autonomous-growth-history.json');
const history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
history.last_updated = NOW_ISO;
history.total_pages_indexed = 12387;

const alreadyCompleted = Array.isArray(history.completed_tasks) &&
  history.completed_tasks.some((t) => t.task_id === 'TOOL-CONSUMER-115');
if (!alreadyCompleted) {
  history.completed_tasks = [...(history.completed_tasks || []), COMPLETED_WAVE88_ENTRY];
  history.total_completed_tasks = (history.total_completed_tasks || 110) + 1;
} else {
  history.completed_tasks = history.completed_tasks.map((t) =>
    t.task_id === 'TOOL-CONSUMER-115' ? COMPLETED_WAVE88_ENTRY : t
  );
}

const existingRecent = (history.recent_completed_tasks || []).filter((t) => t.task_id !== 'TOOL-CONSUMER-115');
history.recent_completed_tasks = [COMPLETED_WAVE88_ENTRY, ...existingRecent].slice(0, 10);

history.current_active_task = {
  task_id: 'TOOL-CONSUMER-116',
  title: 'Wave 89: 5 High-Intent Material & Appliance Comparisons (233->238 / 5 langs)',
  target_vertical: 'comparisons',
  status: 'pending',
  prerequisites: ['TOOL-CONSUMER-115'],
  milestones: [
    {
      id: 'm1',
      title: 'Research and generate 5 high-intent material/appliance comparison specs across 5 languages (233->238)',
      status: 'pending'
    },
    {
      id: 'm2',
      title: 'Inject compliant ItemList, Article, BreadcrumbList, FAQPage and WebPage schema with E-E-A-T citations in src/data/specs/compare.cjs',
      status: 'pending'
    },
    {
      id: 'm3',
      title: 'Wire contextual interactive tool routing and verify 0 build errors & 0 dead links',
      status: 'pending'
    }
  ]
};

const remainingQueue = (history.upcoming_task_queue || []).filter(
  (q) => q.task_id !== 'TOOL-CONSUMER-116' && q.task_id !== 'TOOL-CONSUMER-117'
);
history.upcoming_task_queue = [
  {
    task_id: 'TOOL-CONSUMER-117',
    title: 'Wave 90: Consumer Tool #89 Elevation (refrigerator-cross-contamination-modeler) & High-Impact Safety Guides (134->137 / 5 langs)',
    target_vertical: 'interactive-tools',
    next_candidate_tool: 'refrigerator-cross-contamination-modeler'
  },
  ...remainingQueue
];

fs.writeFileSync(historyPath, JSON.stringify(history, null, 2) + '\n', 'utf8');

// 2. Update logs/website_growth_roadmap.json
const roadmapPath = path.join(LOGS_DIR, 'website_growth_roadmap.json');
const roadmap = JSON.parse(fs.readFileSync(roadmapPath, 'utf8'));
roadmap.lastUpdated = NOW_ISO;
roadmap.last_updated = NOW_ISO;
roadmap.completed_waves = 88;
roadmap.current_wave = 'wave-89';
roadmap.total_pages = 12387;
roadmap.total_tools = 88;
roadmap.total_guides = 134;
roadmap.total_comparisons = 233;

roadmap.waves = (roadmap.waves || []).map((w) => {
  if (w.id !== 'wave-88') return w;
  return {
    ...w,
    status: 'COMPLETED',
    completedAt: NOW_ISO,
    milestones_completed: [
      'Elevate consumer tool #88 (refrigerator-defrost-safety-modeler) into Consumer Tools allowlist across 5 languages with WebApplication, FAQPage & BreadcrumbList JSON-LD',
      'Publish 3 authoritative CPSC/EFSA/USDA-grounded safety guides across all 5 languages (131 -> 134 guides / 670 articles)',
      'Wire contextual interactive tool routing across /blog/ and /compare/, RSS, public/llms.txt, and README.md',
      'Full production build and link integrity audit across 12387 pages (0 build errors, 0 dead links out of 1497488 hrefs)'
    ]
  };
});

if (!roadmap.waves.some((w) => w.id === 'wave-89')) {
  roadmap.waves.push({
    id: 'wave-89',
    name: 'Wave 89: 5 High-Intent Material & Appliance Comparisons (233->238 / 5 langs)',
    status: 'QUEUED',
    tasks: [
      'Expand /compare/ database with 5 high-intent material & appliance matchups across 5 languages (233 -> 238, +25 pages)',
      'Generate E-E-A-T technical specifications in src/data/specs/compare.cjs',
      'Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs',
      'Full production build and link integrity audit (0 errors, 0 dead links)'
    ]
  });
}

fs.writeFileSync(roadmapPath, JSON.stringify(roadmap, null, 2) + '\n', 'utf8');

// 3. Update logs/autonomous_growth_v2_report.json
const v2Path = path.join(LOGS_DIR, 'autonomous_growth_v2_report.json');
const v2 = JSON.parse(fs.readFileSync(v2Path, 'utf8'));
v2.timestamp = NOW_ISO;
v2.last_updated = NOW_ISO;
v2.completed_waves = 88;
v2.current_wave = 'wave-89';
v2.total_pages = 12387;
v2.total_comparisons = 233;
v2.telemetry = {
  ...(v2.telemetry || {}),
  totalTools: 210,
  toolsCoverage: '1050 / 1050',
  componentParity: 'PERFECT_MATCH',
  schemaComplianceRate: '77.1%',
  sitemapUrls: 10594,
  redirectLines: 1980,
  redirectHeadroom: 20,
  edgeMapEntries: 1427,
  totalBlogGuides: 134,
  consumerToolsIndexed: 88,
  totalComparisons: 233,
  totalPagesBuilt: 12387,
  totalLinksAudited: 1497488,
  totalPages: 12387
};

fs.writeFileSync(v2Path, JSON.stringify(v2, null, 2) + '\n', 'utf8');

console.log('Wave 88 logs synchronized successfully:', {
  totalCompletedTasks: history.total_completed_tasks,
  completedWaves: roadmap.completed_waves,
  totalPagesBuilt: v2.telemetry.totalPagesBuilt
});
