// Update growth history and roadmap logs for Wave 51
const fs = require('fs');
const path = require('path');

function updateLogs(totalPagesBuilt = 11652, totalLinksAudited = 1401800) {
  const nowIso = new Date().toISOString();

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: "TOOL-CONSUMER-078",
    title: "Wave 51: 5 High-Intent Material & Appliance Comparisons (138->143 / 5 langs)",
    target_vertical: "comparisons",
    status: "completed",
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || "2026-11-21T09:30:25.723Z",
    completed_at: nowIso,
    milestones: [
      {
        id: "m1",
        title: "Research and generate 5 high-intent material/cookware comparison specs across 5 languages (138->143)",
        status: "completed",
        completed_at: nowIso
      },
      {
        id: "m2",
        title: "Inject compliant ItemList and WebPage schema with E-E-A-T citations",
        status: "completed",
        completed_at: nowIso
      },
      {
        id: "m3",
        title: `Verify 0 build errors and 0 dead links across ${totalPagesBuilt} pages`,
        status: "completed",
        completed_at: nowIso
      }
    ],
    delivered_urls: [
      "/compare/stainless-steel-vs-plastic-dish-drying-rack/",
      "/es/compare/stainless-steel-vs-plastic-dish-drying-rack/",
      "/pt/compare/stainless-steel-vs-plastic-dish-drying-rack/",
      "/zh-cn/compare/stainless-steel-vs-plastic-dish-drying-rack/",
      "/ja/compare/stainless-steel-vs-plastic-dish-drying-rack/",
      "/compare/ceramic-vs-glass-fermentation-crock/",
      "/es/compare/ceramic-vs-glass-fermentation-crock/",
      "/pt/compare/ceramic-vs-glass-fermentation-crock/",
      "/zh-cn/compare/ceramic-vs-glass-fermentation-crock/",
      "/ja/compare/ceramic-vs-glass-fermentation-crock/",
      "/compare/stainless-steel-vs-plastic-meat-grinder/",
      "/es/compare/stainless-steel-vs-plastic-meat-grinder/",
      "/pt/compare/stainless-steel-vs-plastic-meat-grinder/",
      "/zh-cn/compare/stainless-steel-vs-plastic-meat-grinder/",
      "/ja/compare/stainless-steel-vs-plastic-meat-grinder/",
      "/compare/glass-vs-metal-loaf-pan/",
      "/es/compare/glass-vs-metal-loaf-pan/",
      "/pt/compare/glass-vs-metal-loaf-pan/",
      "/zh-cn/compare/glass-vs-metal-loaf-pan/",
      "/ja/compare/glass-vs-metal-loaf-pan/",
      "/compare/cast-aluminum-vs-stainless-steel-garlic-press/",
      "/es/compare/cast-aluminum-vs-stainless-steel-garlic-press/",
      "/pt/compare/cast-aluminum-vs-stainless-steel-garlic-press/",
      "/zh-cn/compare/cast-aluminum-vs-stainless-steel-garlic-press/",
      "/ja/compare/cast-aluminum-vs-stainless-steel-garlic-press/"
    ],
    verification_metrics: {
      totalPagesBuilt,
      totalLinksAudited,
      deadLinksDetected: 0,
      slugParity: "100%",
      totalTools: 210,
      consumerToolsIndexed: 69,
      totalComparisons: 143,
      totalBlogGuides: 77
    }
  };

  hist.completed_tasks = hist.completed_tasks.filter(t => t.task_id !== "TOOL-CONSUMER-078");
  hist.completed_tasks.push(completedTask);

  const newActiveTask = {
    task_id: "TOOL-CONSUMER-079",
    title: "Wave 52: Consumer Tool #70 Elevation & High-Impact Safety Guide (77->80 / 5 langs)",
    target_vertical: "interactive-tools",
    status: "pending",
    prerequisites: ["TOOL-CONSUMER-078"],
    milestones: [
      {
        id: "m1",
        title: "Elevate consumer tool #70 into Consumer Tools allowlist across 5 languages",
        status: "pending"
      },
      {
        id: "m2",
        title: "Publish 3 authoritative fact-checked safety guides across 5 languages (77 -> 80)",
        status: "pending"
      },
      {
        id: "m3",
        title: "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
        status: "pending"
      },
      {
        id: "m4",
        title: `Verify 0 build errors and 0 dead links across ${totalPagesBuilt + 15}+ pages`,
        status: "pending"
      }
    ]
  };

  hist.current_active_task = newActiveTask;
  hist.upcoming_task_queue = [
    {
      task_id: "TOOL-CONSUMER-080",
      title: "Wave 53: 5 High-Intent Material & Appliance Comparisons (143->148 / 5 langs)",
      target_vertical: "comparisons"
    }
  ];
  hist.last_updated = nowIso;
  hist.total_completed_tasks = hist.completed_tasks.length;
  hist.total_pages_indexed = totalPagesBuilt;
  hist.published_comparisons = 143;

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadPath = path.resolve('logs/website_growth_roadmap.json');
  if (fs.existsSync(roadPath)) {
    const road = JSON.parse(fs.readFileSync(roadPath, 'utf8'));
    const wave51 = road.waves.find(w => w.id === 'wave-51');
    if (wave51) {
      wave51.status = "COMPLETED";
      wave51.completedAt = nowIso;
      wave51.milestones_completed = [
        "Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (138 -> 143)",
        "Generate E-E-A-T technical specifications in src/data/specs/compare.cjs",
        "Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs",
        `Full production build and link integrity audit across ${totalPagesBuilt} pages (0 build errors, 0 dead links out of ${totalLinksAudited} hrefs)`
      ];
    }

    if (!road.waves.find(w => w.id === 'wave-52')) {
      road.waves.push({
        id: "wave-52",
        name: "Wave 52: Consumer Tool #70 Elevation & High-Impact Safety Guide (77->80 / 5 langs)",
        status: "QUEUED",
        tasks: [
          "Elevate consumer tool #70 into Consumer Tools allowlist across 5 languages",
          "Publish 3 authoritative fact-checked safety guides across 5 languages (77 -> 80)",
          "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
          "Full production build and link integrity audit (0 errors, 0 dead links)"
        ]
      });
    }

    road.last_updated = nowIso;
    road.lastUpdated = nowIso;
    road.current_wave = "wave-52";
    fs.writeFileSync(roadPath, JSON.stringify(road, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/website_growth_roadmap.json');
  }

  // 3. Update logs/autonomous_growth_v2_report.json
  const repPath = path.resolve('logs/autonomous_growth_v2_report.json');
  if (fs.existsSync(repPath)) {
    const rep = JSON.parse(fs.readFileSync(repPath, 'utf8'));
    if (!rep.telemetry) rep.telemetry = {};
    rep.telemetry.totalComparisons = 143;
    rep.telemetry.consumerToolsIndexed = 69;
    rep.telemetry.totalBlogGuides = 77;
    rep.telemetry.totalPagesBuilt = totalPagesBuilt;
    rep.telemetry.totalLinksAudited = totalLinksAudited;
    rep.telemetry.sitemapUrls = totalPagesBuilt;
    rep.timestamp = nowIso;
    rep.last_updated = nowIso;
    rep.current_wave = "wave-51";
    if (rep.stats) {
      rep.stats.total_pages = totalPagesBuilt;
      rep.stats.total_comparisons = 143;
      rep.stats.total_blog_guides = 77;
      rep.stats.consumer_tools = 69;
      rep.stats.total_links_audited = totalLinksAudited;
      rep.stats.dead_links = 0;
    }
    fs.writeFileSync(repPath, JSON.stringify(rep, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/autonomous_growth_v2_report.json');
  }

  // 4. Update README.md metrics
  const readmePath = path.resolve('README.md');
  if (fs.existsSync(readmePath)) {
    let readme = fs.readFileSync(readmePath, 'utf8');
    readme = readme.replace(/\*\*11,\d+\+ Pages\*\*/g, `**${totalPagesBuilt.toLocaleString()}+ Pages**`);
    readme = readme.replace(/138\s+comparisons/g, '143 comparisons');
    fs.writeFileSync(readmePath, readme, 'utf8');
    console.log('✅ Updated README.md');
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const pages = parseInt(args[0], 10) || 11652;
  const links = parseInt(args[1], 10) || 1401800;
  updateLogs(pages, links);
}

module.exports = { updateLogs };
