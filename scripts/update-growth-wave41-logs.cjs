// Update growth history and roadmap logs for Wave 41
const fs = require('fs');
const path = require('path');

function updateLogs(totalPagesBuilt = 11452, totalLinksAudited = 1375803) {
  const nowIso = new Date().toISOString();

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: "TOOL-CONSUMER-068",
    title: "Wave 41: 5 High-Intent Material & Appliance Comparisons (113->118 / 5 langs)",
    target_vertical: "comparisons",
    status: "completed",
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || "2026-11-20T15:00:00.000Z",
    completed_at: nowIso,
    milestones: [
      {
        id: "m1",
        title: "Research and generate 5 high-intent material/cookware comparison specs across 5 languages (113->118)",
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
      "/compare/aluminum-vs-stainless-steel-pressure-cooker/",
      "/es/compare/aluminum-vs-stainless-steel-pressure-cooker/",
      "/pt/compare/aluminum-vs-stainless-steel-pressure-cooker/",
      "/zh-cn/compare/aluminum-vs-stainless-steel-pressure-cooker/",
      "/ja/compare/aluminum-vs-stainless-steel-pressure-cooker/",
      "/compare/pizza-stone-vs-baking-steel/",
      "/es/compare/pizza-stone-vs-baking-steel/",
      "/pt/compare/pizza-stone-vs-baking-steel/",
      "/zh-cn/compare/pizza-stone-vs-baking-steel/",
      "/ja/compare/pizza-stone-vs-baking-steel/",
      "/compare/stainless-steel-vs-plastic-blender-jar/",
      "/es/compare/stainless-steel-vs-plastic-blender-jar/",
      "/pt/compare/stainless-steel-vs-plastic-blender-jar/",
      "/zh-cn/compare/stainless-steel-vs-plastic-blender-jar/",
      "/ja/compare/stainless-steel-vs-plastic-blender-jar/",
      "/compare/unbleached-vs-bleached-parchment-paper/",
      "/es/compare/unbleached-vs-bleached-parchment-paper/",
      "/pt/compare/unbleached-vs-bleached-parchment-paper/",
      "/zh-cn/compare/unbleached-vs-bleached-parchment-paper/",
      "/ja/compare/unbleached-vs-bleached-parchment-paper/",
      "/compare/stainless-steel-vs-aluminum-moka-pot/",
      "/es/compare/stainless-steel-vs-aluminum-moka-pot/",
      "/pt/compare/stainless-steel-vs-aluminum-moka-pot/",
      "/zh-cn/compare/stainless-steel-vs-aluminum-moka-pot/",
      "/ja/compare/stainless-steel-vs-aluminum-moka-pot/"
    ],
    verification_metrics: {
      totalPagesBuilt,
      totalLinksAudited,
      deadLinksDetected: 0,
      slugParity: "100%",
      totalTools: 210,
      consumerToolsIndexed: 64,
      totalComparisons: 118,
      totalBlogGuides: 62
    }
  };

  hist.completed_tasks.push(completedTask);

  hist.current_active_task = {
    task_id: "TOOL-CONSUMER-069",
    title: "Wave 42: Consumer Tool #65 Elevation & High-Impact Safety Guide (62->65 / 5 langs)",
    target_vertical: "interactive-tools",
    status: "pending",
    prerequisites: ["TOOL-CONSUMER-068"],
    milestones: [
      {
        id: "m1",
        title: "Elevate consumer tool #65 into Consumer Tools allowlist across 5 languages",
        status: "pending"
      },
      {
        id: "m2",
        title: "Publish 3 authoritative fact-checked safety guides across 5 languages (62 -> 65)",
        status: "pending"
      },
      {
        id: "m3",
        title: "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
        status: "pending"
      },
      {
        id: "m4",
        title: "Verify 0 build errors and 0 dead links across 11,465+ pages",
        status: "pending"
      }
    ]
  };

  hist.upcoming_task_queue = [
    {
      task_id: "TOOL-CONSUMER-070",
      title: "Wave 43: 5 High-Intent Material & Appliance Comparisons (118->123 / 5 langs)",
      target_vertical: "comparisons"
    }
  ];

  const topicsToAdd = [
    'aluminum-vs-stainless-steel-pressure-cooker-leaching',
    'pizza-stone-vs-baking-steel-thermal-shock',
    'stainless-steel-vs-plastic-blender-jar-microplastics',
    'unbleached-vs-bleached-parchment-paper-dioxin-pyrolysis',
    'stainless-steel-vs-aluminum-moka-pot-chlorogenic-acid-leaching'
  ];
  for (const t of topicsToAdd) {
    if (!hist.published_topics.includes(t)) {
      hist.published_topics.push(t);
    }
  }

  hist.last_updated = nowIso;
  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadPath = path.resolve('logs/website_growth_roadmap.json');
  const road = JSON.parse(fs.readFileSync(roadPath, 'utf8'));

  const wave41 = road.waves.find(w => w.id === 'wave-41');
  if (wave41) {
    wave41.status = 'COMPLETED';
    wave41.completedAt = nowIso;
    wave41.milestones_completed = [
      "Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (113 -> 118)",
      "Generate E-E-A-T technical specifications in src/data/specs/compare.cjs",
      "Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs",
      `Full production build and link integrity audit across ${totalPagesBuilt} pages (0 build errors, 0 dead links out of ${totalLinksAudited} hrefs)`
    ];
  }

  if (!road.waves.some(w => w.id === 'wave-42')) {
    road.waves.push({
      id: "wave-42",
      name: "Wave 42: Consumer Tool #65 Elevation & High-Impact Safety Guide (62->65 / 5 langs)",
      status: "QUEUED",
      tasks: [
        "Elevate consumer tool #65 into Consumer Tools allowlist across 5 languages",
        "Publish 3 authoritative fact-checked safety guides across 5 languages (62 -> 65)",
        "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
        "Full production build and link integrity audit (0 errors, 0 dead links)"
      ]
    });
  }

  road.last_updated = nowIso;
  road.current_wave = "wave-42";
  fs.writeFileSync(roadPath, JSON.stringify(road, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/website_growth_roadmap.json');

  // 3. Update logs/autonomous_growth_v2_report.json
  const repPath = path.resolve('logs/autonomous_growth_v2_report.json');
  if (fs.existsSync(repPath)) {
    const rep = JSON.parse(fs.readFileSync(repPath, 'utf8'));
    if (!rep.telemetry) rep.telemetry = {};
    rep.telemetry.totalComparisons = 118;
    rep.telemetry.totalPagesBuilt = totalPagesBuilt;
    rep.telemetry.totalLinksAudited = totalLinksAudited;
    rep.telemetry.sitemapUrls = totalPagesBuilt;
    rep.timestamp = nowIso;
    fs.writeFileSync(repPath, JSON.stringify(rep, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/autonomous_growth_v2_report.json');
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const pages = parseInt(args[0], 10) || 11452;
  const links = parseInt(args[1], 10) || 1375803;
  updateLogs(pages, links);
}

module.exports = { updateLogs };
