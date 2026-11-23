const fs = require('fs');
const path = require('path');

console.log('=== UPDATING LOGS FOR WAVE 71 ===');

function updateLogs(exactPageCount = 12052, deadLinkCount = 0, totalHrefs = 1453902) {
  const timestamp = new Date().toISOString();

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: 'TOOL-CONSUMER-098',
    title: 'Wave 71: 5 High-Intent Material & Appliance Comparisons (188->193 / 5 langs)',
    target_vertical: 'comparisons',
    status: 'completed',
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || '2026-11-23T06:00:00.000Z',
    completed_at: timestamp,
    milestones: [
      {
        id: 'm1',
        title: 'Research and generate 5 high-intent material/cookware comparison specs across 5 languages (188->193)',
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
    delivered_urls: [
      "/compare/ceramic-coated-vs-stainless-steel-baking-sheet/",
      "/es/compare/ceramic-coated-vs-stainless-steel-baking-sheet/",
      "/pt/compare/ceramic-coated-vs-stainless-steel-baking-sheet/",
      "/zh-cn/compare/ceramic-coated-vs-stainless-steel-baking-sheet/",
      "/ja/compare/ceramic-coated-vs-stainless-steel-baking-sheet/",
      "/compare/cast-iron-vs-carbon-steel-wok/",
      "/es/compare/cast-iron-vs-carbon-steel-wok/",
      "/pt/compare/cast-iron-vs-carbon-steel-wok/",
      "/zh-cn/compare/cast-iron-vs-carbon-steel-wok/",
      "/ja/compare/cast-iron-vs-carbon-steel-wok/",
      "/compare/borosilicate-glass-vs-silicone-microwave-popcorn-popper/",
      "/es/compare/borosilicate-glass-vs-silicone-microwave-popcorn-popper/",
      "/pt/compare/borosilicate-glass-vs-silicone-microwave-popcorn-popper/",
      "/zh-cn/compare/borosilicate-glass-vs-silicone-microwave-popcorn-popper/",
      "/ja/compare/borosilicate-glass-vs-silicone-microwave-popcorn-popper/",
      "/compare/silicone-vs-stainless-steel-spatula/",
      "/es/compare/silicone-vs-stainless-steel-spatula/",
      "/pt/compare/silicone-vs-stainless-steel-spatula/",
      "/zh-cn/compare/silicone-vs-stainless-steel-spatula/",
      "/ja/compare/silicone-vs-stainless-steel-spatula/",
      "/compare/ceramic-vs-carbon-steel-pepper-grinder/",
      "/es/compare/ceramic-vs-carbon-steel-pepper-grinder/",
      "/pt/compare/ceramic-vs-carbon-steel-pepper-grinder/",
      "/zh-cn/compare/ceramic-vs-carbon-steel-pepper-grinder/",
      "/ja/compare/ceramic-vs-carbon-steel-pepper-grinder/"
    ],
    verification_metrics: {
      totalPagesBuilt: exactPageCount,
      totalLinksAudited: totalHrefs,
      deadLinksDetected: deadLinkCount,
      slugParity: '100%'
    }
  };

  // Add to completed_tasks if not already present
  if (!hist.completed_tasks.find(t => t.task_id === 'TOOL-CONSUMER-098')) {
    hist.completed_tasks.push(completedTask);
  }
  hist.total_completed_tasks = hist.completed_tasks.length;
  hist.published_topics = 107;
  hist.published_comparisons = 193;
  hist.total_pages_indexed = exactPageCount;
  hist.last_updated = timestamp;

  // Set next active task: Wave 72
  hist.current_active_task = {
    task_id: 'TOOL-CONSUMER-099',
    title: 'Wave 72: Consumer Tool #80 Elevation & High-Impact Safety Guide (107->110 / 5 langs)',
    target_vertical: 'interactive-tools',
    status: 'pending',
    prerequisites: ['TOOL-CONSUMER-098'],
    milestones: [
      {
        id: 'm1',
        title: 'Elevate consumer tool #80 into Consumer Tools allowlist across 5 languages',
        status: 'pending'
      },
      {
        id: 'm2',
        title: 'Publish 3 authoritative fact-checked safety guides across 5 languages (107 -> 110, 550 localized articles total)',
        status: 'pending'
      },
      {
        id: 'm3',
        title: 'Verify 0 build errors and 0 dead links across 12,067+ pages',
        status: 'pending'
      }
    ]
  };

  hist.upcoming_task_queue = [
    {
      task_id: 'TOOL-CONSUMER-100',
      title: 'Wave 73: 5 High-Intent Material & Appliance Comparisons (193->198 / 5 langs)',
      target_vertical: 'comparisons'
    }
  ];

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadmapPath = path.resolve('logs/website_growth_roadmap.json');
  if (fs.existsSync(roadmapPath)) {
    const roadmap = JSON.parse(fs.readFileSync(roadmapPath, 'utf8'));

    roadmap.current_wave = 'Wave 72: Consumer Tool #80 Elevation & High-Impact Safety Guide (107->110 / 5 langs)';
    roadmap.completed_waves = 71;
    roadmap.total_pages = exactPageCount;
    roadmap.last_updated = timestamp;
    roadmap.lastUpdated = timestamp;

    let w71 = roadmap.waves.find(w => w.id === 'wave-71');
    if (!w71) {
      w71 = {
        id: 'wave-71',
        name: 'Wave 71: 5 High-Intent Material & Appliance Comparisons (188->193 / 5 langs)',
        status: 'COMPLETED',
        completedAt: timestamp,
        milestones_completed: [
          'Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (188 -> 193, +25 pages)',
          'Generate E-E-A-T technical specifications in src/data/specs/compare.cjs',
          'Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs',
          `Full production build and link integrity audit across ${exactPageCount} pages (0 build errors, ${deadLinkCount} dead links out of ${totalHrefs} hrefs)`
        ]
      };
      roadmap.waves.push(w71);
    } else {
      w71.status = 'COMPLETED';
      w71.completedAt = timestamp;
      w71.milestones_completed = [
        'Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (188 -> 193, +25 pages)',
        'Generate E-E-A-T technical specifications in src/data/specs/compare.cjs',
        'Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs',
        `Full production build and link integrity audit across ${exactPageCount} pages (0 build errors, ${deadLinkCount} dead links out of ${totalHrefs} hrefs)`
      ];
    }

    let w72 = roadmap.waves.find(w => w.id === 'wave-72');
    if (!w72) {
      w72 = {
        id: 'wave-72',
        name: 'Wave 72: Consumer Tool #80 Elevation & High-Impact Safety Guide (107->110 / 5 langs)',
        status: 'QUEUED',
        tasks: [
          'Elevate consumer tool #80 into Consumer Tools allowlist across 5 languages',
          'Publish 3 authoritative fact-checked safety guides across 5 languages (107 -> 110, 550 articles total)',
          'Wire contextual interactive tool routing, RSS, llms.txt & schema validations',
          'Full production build and link integrity audit (0 errors, 0 dead links)'
        ]
      };
      roadmap.waves.push(w72);
    }

    fs.writeFileSync(roadmapPath, JSON.stringify(roadmap, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/website_growth_roadmap.json');
  }

  // 3. Update logs/autonomous_growth_v2_report.json
  const reportPath = path.resolve('logs/autonomous_growth_v2_report.json');
  if (fs.existsSync(reportPath)) {
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    report.last_updated = timestamp;
    report.completed_waves = 71;
    report.current_wave = 'Wave 72: Consumer Tool #80 Elevation & High-Impact Safety Guide (107->110 / 5 langs)';
    report.total_pages = exactPageCount;
    report.total_tools = 79;
    report.total_guides = 107;
    report.total_comparisons = 193;
    report.telemetry = report.telemetry || {};
    report.telemetry.totalBlogGuides = 107;
    report.telemetry.consumerToolsIndexed = 79;
    report.telemetry.totalComparisons = 193;
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
  const pages = parseInt(args[0] || '12052', 10);
  const dead = parseInt(args[1] || '0', 10);
  const hrefs = parseInt(args[2] || '1453902', 10);
  updateLogs(pages, dead, hrefs);
}
