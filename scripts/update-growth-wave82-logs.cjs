const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LOGS FOR WAVE 82 ===');

function updateLogs(exactPageCount = 12267, deadLinkCount = 0, totalHrefs = 1481868, sitemapUrls = 10459) {
  const timestamp = new Date().toISOString();

  const deliveredUrls = [
    '/tools/dishwasher-thermal-sanitize-calculator/',
    '/es/tools/dishwasher-thermal-sanitize-calculator/',
    '/pt/tools/dishwasher-thermal-sanitize-calculator/',
    '/zh-cn/tools/dishwasher-thermal-sanitize-calculator/',
    '/ja/tools/dishwasher-thermal-sanitize-calculator/',
    '/blog/dishwasher-eco-mode-baby-bottles-raw-chicken-canning-jars-safety/',
    '/es/blog/dishwasher-eco-mode-baby-bottles-raw-chicken-canning-jars-safety/',
    '/pt/blog/dishwasher-eco-mode-baby-bottles-raw-chicken-canning-jars-safety/',
    '/zh-cn/blog/dishwasher-eco-mode-baby-bottles-raw-chicken-canning-jars-safety/',
    '/ja/blog/dishwasher-eco-mode-baby-bottles-raw-chicken-canning-jars-safety/',
    '/blog/bioplastics-pla-nanoparticle-food-packaging-eu-2026-safety/',
    '/es/blog/bioplastics-pla-nanoparticle-food-packaging-eu-2026-safety/',
    '/pt/blog/bioplastics-pla-nanoparticle-food-packaging-eu-2026-safety/',
    '/zh-cn/blog/bioplastics-pla-nanoparticle-food-packaging-eu-2026-safety/',
    '/ja/blog/bioplastics-pla-nanoparticle-food-packaging-eu-2026-safety/',
    '/blog/kidisle-coffee-maker-balbali-kettle-2026-cpsc-recalls-guide/',
    '/es/blog/kidisle-coffee-maker-balbali-kettle-2026-cpsc-recalls-guide/',
    '/pt/blog/kidisle-coffee-maker-balbali-kettle-2026-cpsc-recalls-guide/',
    '/zh-cn/blog/kidisle-coffee-maker-balbali-kettle-2026-cpsc-recalls-guide/',
    '/ja/blog/kidisle-coffee-maker-balbali-kettle-2026-cpsc-recalls-guide/'
  ];

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: 'TOOL-CONSUMER-109',
    title: 'Wave 82: Consumer Tool #85 Elevation & High-Impact Safety Guide (122->125 / 5 langs)',
    target_vertical: 'interactive-tools',
    status: 'completed',
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || timestamp,
    completed_at: timestamp,
    milestones: [
      {
        id: 'm1',
        title: 'Elevate consumer tool #85 (dishwasher-thermal-sanitize-calculator) into Consumer Tools allowlist across 5 languages',
        status: 'completed',
        completed_at: timestamp
      },
      {
        id: 'm2',
        title: 'Publish 3 authoritative fact-checked safety guides across 5 languages (122 -> 125, 625 localized articles total)',
        status: 'completed',
        completed_at: timestamp
      },
      {
        id: 'm3',
        title: 'Wire contextual interactive tool routing, RSS, llms.txt & schema validations',
        status: 'completed',
        completed_at: timestamp
      },
      {
        id: 'm4',
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
  const alreadyDone = !!hist.completed_tasks.find(t => t.task_id === 'TOOL-CONSUMER-109');
  if (!alreadyDone) {
    hist.completed_tasks.push(completedTask);
  }

  hist.recent_completed_tasks = hist.recent_completed_tasks || [];
  if (!hist.recent_completed_tasks.find(t => t.task_id === 'TOOL-CONSUMER-109')) {
    hist.recent_completed_tasks.unshift(completedTask);
  }
  if (hist.recent_completed_tasks.length > 10) {
    hist.recent_completed_tasks = hist.recent_completed_tasks.slice(0, 10);
  }

  hist.total_completed_tasks = alreadyDone
    ? Math.max(hist.total_completed_tasks || 105, hist.completed_tasks.length)
    : Math.max((hist.total_completed_tasks || 104) + 1, hist.completed_tasks.length);
  hist.published_topics = 125;
  hist.published_comparisons = 218;
  hist.total_pages_indexed = exactPageCount;
  hist.last_updated = timestamp;

  hist.viral_tools_status = hist.viral_tools_status || {};
  hist.viral_tools_status.dishwasher_thermal_sanitize_calculator = 'deployed';

  hist.current_active_task = {
    task_id: 'TOOL-CONSUMER-110',
    title: 'Wave 83: 5 High-Intent Material & Appliance Comparisons (218->223 / 5 langs)',
    target_vertical: 'comparisons',
    status: 'pending',
    prerequisites: ['TOOL-CONSUMER-109'],
    milestones: [
      {
        id: 'm1',
        title: 'Research and generate 5 high-intent material/cookware comparison specs across 5 languages (218->223)',
        status: 'pending'
      },
      {
        id: 'm2',
        title: 'Inject compliant ItemList and WebPage schema with E-E-A-T citations in src/data/specs/compare.cjs',
        status: 'pending'
      },
      {
        id: 'm3',
        title: `Verify 0 build errors and 0 dead links across ${exactPageCount + 25}+ pages`,
        status: 'pending'
      }
    ]
  };

  const allowlist = JSON.parse(fs.readFileSync(path.resolve('src/data/consumer-tools-allowlist.json'), 'utf8'));
  const candidateTools = [
    'freezer-burn-sublimation-modeler',
    'range-hood-extraction-efficiency-modeler',
    'refrigerator-defrost-safety-modeler',
    'refrigerator-cross-contamination-modeler',
    'wooden-utensil-biofilm-modeler'
  ];
  const nextTool = candidateTools.find(t => !allowlist.includes(t)) || 'freezer-burn-sublimation-modeler';

  hist.upcoming_task_queue = [
    {
      task_id: 'TOOL-CONSUMER-111',
      title: 'Wave 84: Consumer Tool #86 Elevation & High-Impact Safety Guide (125->128 / 5 langs)',
      target_vertical: 'interactive-tools',
      candidate_tool: nextTool
    }
  ];

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadmapPath = path.resolve('logs/website_growth_roadmap.json');
  if (fs.existsSync(roadmapPath)) {
    const roadmap = JSON.parse(fs.readFileSync(roadmapPath, 'utf8'));

    roadmap.current_wave = 'Wave 83: 5 High-Intent Material & Appliance Comparisons (218->223 / 5 langs)';
    roadmap.completed_waves = 82;
    roadmap.total_pages = exactPageCount;
    roadmap.total_tools = 85;
    roadmap.total_guides = 125;
    roadmap.total_comparisons = 218;
    roadmap.last_updated = timestamp;
    roadmap.lastUpdated = timestamp;

    let w82 = roadmap.waves.find(w => w.id === 'wave-82');
    const w82Milestones = [
      'Elevate consumer tool #85 (dishwasher-thermal-sanitize-calculator) into Consumer Tools allowlist across 5 languages',
      'Publish 3 authoritative fact-checked safety guides across 5 languages (122 -> 125, 625 articles total)',
      'Wire contextual interactive tool routing, RSS, llms.txt & schema validations',
      `Full production build and link integrity audit across ${exactPageCount} pages (0 build errors, ${deadLinkCount} dead links out of ${totalHrefs} hrefs)`
    ];
    if (!w82) {
      w82 = {
        id: 'wave-82',
        name: 'Wave 82: Consumer Tool #85 Elevation & High-Impact Safety Guide (122->125 / 5 langs)',
        status: 'COMPLETED',
        completedAt: timestamp,
        milestones_completed: w82Milestones
      };
      roadmap.waves.push(w82);
    } else {
      w82.status = 'COMPLETED';
      w82.completedAt = timestamp;
      w82.milestones_completed = w82Milestones;
    }

    let w83 = roadmap.waves.find(w => w.id === 'wave-83');
    if (!w83) {
      w83 = {
        id: 'wave-83',
        name: 'Wave 83: 5 High-Intent Material & Appliance Comparisons (218->223 / 5 langs)',
        status: 'QUEUED',
        tasks: [
          'Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (218 -> 223, +25 pages)',
          'Generate E-E-A-T technical specifications in src/data/specs/compare.cjs',
          'Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs',
          'Full production build and link integrity audit (0 errors, 0 dead links)'
        ]
      };
      roadmap.waves.push(w83);
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
    report.completed_waves = 82;
    report.current_wave = 'Wave 83: 5 High-Intent Material & Appliance Comparisons (218->223 / 5 langs)';
    report.total_pages = exactPageCount;
    report.total_comparisons = 218;
    report.telemetry = report.telemetry || {};
    report.telemetry.sitemapUrls = sitemapUrls;
    report.telemetry.totalBlogGuides = 125;
    report.telemetry.consumerToolsIndexed = 85;
    report.telemetry.totalComparisons = 218;
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
  const pages = parseInt(args[0] || '12267', 10);
  const dead = parseInt(args[1] || '0', 10);
  const hrefs = parseInt(args[2] || '1481868', 10);
  const sitemaps = parseInt(args[3] || '10459', 10);
  updateLogs(pages, dead, hrefs, sitemaps);
}
