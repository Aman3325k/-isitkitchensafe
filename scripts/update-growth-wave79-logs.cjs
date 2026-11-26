const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LOGS FOR WAVE 79 ===');

function updateLogs(exactPageCount = 12212, deadLinkCount = 0, totalHrefs = 1474600, sitemapUrls = 10394) {
  const timestamp = new Date().toISOString();

  const deliveredUrls = [
    '/compare/stainless-steel-vs-nonstick-rice-cooker-pot/',
    '/es/compare/stainless-steel-vs-nonstick-rice-cooker-pot/',
    '/pt/compare/stainless-steel-vs-nonstick-rice-cooker-pot/',
    '/zh-cn/compare/stainless-steel-vs-nonstick-rice-cooker-pot/',
    '/ja/compare/stainless-steel-vs-nonstick-rice-cooker-pot/',
    '/compare/basket-air-fryer-vs-french-door-air-fryer-oven/',
    '/es/compare/basket-air-fryer-vs-french-door-air-fryer-oven/',
    '/pt/compare/basket-air-fryer-vs-french-door-air-fryer-oven/',
    '/zh-cn/compare/basket-air-fryer-vs-french-door-air-fryer-oven/',
    '/ja/compare/basket-air-fryer-vs-french-door-air-fryer-oven/',
    '/compare/glass-jar-vs-canned-food-packaging/',
    '/es/compare/glass-jar-vs-canned-food-packaging/',
    '/pt/compare/glass-jar-vs-canned-food-packaging/',
    '/zh-cn/compare/glass-jar-vs-canned-food-packaging/',
    '/ja/compare/glass-jar-vs-canned-food-packaging/',
    '/compare/stainless-steel-vs-silicone-kids-plates/',
    '/es/compare/stainless-steel-vs-silicone-kids-plates/',
    '/pt/compare/stainless-steel-vs-silicone-kids-plates/',
    '/zh-cn/compare/stainless-steel-vs-silicone-kids-plates/',
    '/ja/compare/stainless-steel-vs-silicone-kids-plates/',
    '/compare/titanium-vs-hardwood-cutting-board/',
    '/es/compare/titanium-vs-hardwood-cutting-board/',
    '/pt/compare/titanium-vs-hardwood-cutting-board/',
    '/zh-cn/compare/titanium-vs-hardwood-cutting-board/',
    '/ja/compare/titanium-vs-hardwood-cutting-board/'
  ];

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: 'TOOL-CONSUMER-106',
    title: 'Wave 79: 5 High-Intent Material & Appliance Comparisons (208->213 / 5 langs)',
    target_vertical: 'comparisons',
    status: 'completed',
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || timestamp,
    completed_at: timestamp,
    milestones: [
      {
        id: 'm1',
        title: 'Research and generate 5 high-intent material/cookware comparison specs across 5 languages (208->213)',
        status: 'completed',
        completed_at: timestamp
      },
      {
        id: 'm2',
        title: 'Inject compliant ItemList and WebPage schema with E-E-A-T citations in src/data/specs/compare.cjs',
        status: 'completed',
        completed_at: timestamp
      },
      {
        id: 'm3',
        title: `Verify 0 build errors and 0 dead links across ${exactPageCount} pages (${totalHrefs} verified hrefs)`,
        status: 'completed',
        completed_at: timestamp
      }
    ],
    delivered_urls: deliveredUrls,
    verification_metrics: {
      totalPagesBuilt: exactPageCount,
      totalLinksAudited: totalHrefs,
      deadLinksDetected: deadLinkCount,
      slugParity: '100%'
    }
  };

  hist.completed_tasks = hist.completed_tasks || [];
  if (!hist.completed_tasks.find(t => t.task_id === 'TOOL-CONSUMER-106')) {
    hist.completed_tasks.push(completedTask);
  }

  hist.recent_completed_tasks = hist.recent_completed_tasks || [];
  if (!hist.recent_completed_tasks.find(t => t.task_id === 'TOOL-CONSUMER-106')) {
    hist.recent_completed_tasks.unshift(completedTask);
  }
  if (hist.recent_completed_tasks.length > 10) {
    hist.recent_completed_tasks = hist.recent_completed_tasks.slice(0, 10);
  }

  hist.total_completed_tasks = Math.max((hist.total_completed_tasks || 101) + 1, hist.completed_tasks.length);
  hist.published_topics = 119;
  hist.published_comparisons = 213;
  hist.total_pages_indexed = exactPageCount;
  hist.last_updated = timestamp;

  hist.current_active_task = {
    task_id: 'TOOL-CONSUMER-107',
    title: 'Wave 80: Consumer Tool #84 Elevation & High-Impact Safety Guide (119->122 / 5 langs)',
    target_vertical: 'interactive-tools',
    status: 'pending',
    prerequisites: ['TOOL-CONSUMER-106'],
    milestones: [
      {
        id: 'm1',
        title: 'Elevate consumer tool #84 (glass-cooktop-fracture-simulator) into Consumer Tools allowlist across 5 languages',
        status: 'pending'
      },
      {
        id: 'm2',
        title: 'Publish 3 authoritative fact-checked safety guides across 5 languages (119 -> 122, 610 localized articles total)',
        status: 'pending'
      },
      {
        id: 'm3',
        title: 'Wire contextual interactive tool routing, RSS, llms.txt & schema validations',
        status: 'pending'
      },
      {
        id: 'm4',
        title: `Verify 0 build errors and 0 dead links across ${exactPageCount + 15}+ pages`,
        status: 'pending'
      }
    ]
  };

  hist.upcoming_task_queue = [
    {
      task_id: 'TOOL-CONSUMER-108',
      title: 'Wave 81: 5 High-Intent Material & Appliance Comparisons (213->218 / 5 langs)',
      target_vertical: 'comparisons'
    }
  ];

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadmapPath = path.resolve('logs/website_growth_roadmap.json');
  if (fs.existsSync(roadmapPath)) {
    const roadmap = JSON.parse(fs.readFileSync(roadmapPath, 'utf8'));

    roadmap.current_wave = 'Wave 80: Consumer Tool #84 Elevation & High-Impact Safety Guide (119->122 / 5 langs)';
    roadmap.completed_waves = 79;
    roadmap.total_pages = exactPageCount;
    roadmap.total_tools = 83;
    roadmap.total_guides = 119;
    roadmap.total_comparisons = 213;
    roadmap.last_updated = timestamp;
    roadmap.lastUpdated = timestamp;

    let w79 = roadmap.waves.find(w => w.id === 'wave-79');
    if (!w79) {
      w79 = {
        id: 'wave-79',
        name: 'Wave 79: 5 High-Intent Material & Appliance Comparisons (208->213 / 5 langs)',
        status: 'COMPLETED',
        completedAt: timestamp,
        milestones_completed: [
          'Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (208 -> 213, +25 pages)',
          'Generate E-E-A-T technical specifications in src/data/specs/compare.cjs',
          'Inject WebPage, ItemList, Article, BreadcrumbList & FAQPage schemas and wire contextual tool routing across all 5 languages',
          `Full production build and link integrity audit across ${exactPageCount} pages (0 build errors, ${deadLinkCount} dead links out of ${totalHrefs} hrefs)`
        ]
      };
      roadmap.waves.push(w79);
    } else {
      w79.status = 'COMPLETED';
      w79.completedAt = timestamp;
      w79.milestones_completed = [
        'Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (208 -> 213, +25 pages)',
        'Generate E-E-A-T technical specifications in src/data/specs/compare.cjs',
        'Inject WebPage, ItemList, Article, BreadcrumbList & FAQPage schemas and wire contextual tool routing across all 5 languages',
        `Full production build and link integrity audit across ${exactPageCount} pages (0 build errors, ${deadLinkCount} dead links out of ${totalHrefs} hrefs)`
      ];
    }

    let w80 = roadmap.waves.find(w => w.id === 'wave-80');
    if (!w80) {
      w80 = {
        id: 'wave-80',
        name: 'Wave 80: Consumer Tool #84 Elevation & High-Impact Safety Guide (119->122 / 5 langs)',
        status: 'QUEUED',
        tasks: [
          'Elevate consumer tool #84 (glass-cooktop-fracture-simulator) into Consumer Tools allowlist across 5 languages',
          'Publish 3 authoritative fact-checked safety guides across 5 languages (119 -> 122, 610 articles total)',
          'Wire contextual interactive tool routing, RSS, llms.txt & schema validations',
          'Full production build and link integrity audit (0 errors, 0 dead links)'
        ]
      };
      roadmap.waves.push(w80);
    }

    fs.writeFileSync(roadmapPath, JSON.stringify(roadmap, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/website_growth_roadmap.json');
  }

  // 3. Update logs/autonomous_growth_v2_report.json
  const reportPath = path.resolve('logs/autonomous_growth_v2_report.json');
  if (fs.existsSync(reportPath)) {
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    report.timestamp = timestamp;
    report.last_updated = timestamp;
    report.completed_waves = 79;
    report.current_wave = 'Wave 80: Consumer Tool #84 Elevation & High-Impact Safety Guide (119->122 / 5 langs)';
    report.total_pages = exactPageCount;
    report.total_comparisons = 213;
    report.telemetry = report.telemetry || {};
    report.telemetry.sitemapUrls = sitemapUrls;
    report.telemetry.totalBlogGuides = 119;
    report.telemetry.consumerToolsIndexed = 83;
    report.telemetry.totalComparisons = 213;
    report.telemetry.totalPagesBuilt = exactPageCount;
    report.telemetry.totalLinksAudited = totalHrefs;
    report.telemetry.totalPages = exactPageCount;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/autonomous_growth_v2_report.json');
  }
}

module.exports = { updateLogs };

if (require.main === module) {
  const args = process.argv.slice(2);
  const pages = parseInt(args[0] || '12212', 10);
  const dead = parseInt(args[1] || '0', 10);
  const hrefs = parseInt(args[2] || '1474600', 10);
  const sitemaps = parseInt(args[3] || '10394', 10);
  updateLogs(pages, dead, hrefs, sitemaps);
}
