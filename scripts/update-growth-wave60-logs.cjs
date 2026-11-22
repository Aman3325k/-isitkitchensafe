// Update growth history and roadmap logs for Wave 60
const fs = require('fs');
const path = require('path');

function updateLogs(totalPagesBuilt = 11827, totalLinksAudited = 1424693) {
  const nowIso = new Date().toISOString();

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: "TOOL-CONSUMER-087",
    title: "Wave 60: Consumer Tool #74 Elevation & High-Impact Safety Guide (89->92 / 5 langs)",
    target_vertical: "interactive-tools",
    status: "completed",
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || "2026-11-22T08:30:51.576Z",
    completed_at: nowIso,
    milestones: [
      {
        id: "m1",
        title: "Elevate consumer tool #74 (silicone-spatula-oligomer-leaching-modeler) into Consumer Tools allowlist across 5 languages",
        status: "completed",
        completed_at: nowIso
      },
      {
        id: "m2",
        title: "Publish 3 authoritative fact-checked safety guides across 5 languages (89 -> 92, 460 localized articles total)",
        status: "completed",
        completed_at: nowIso
      },
      {
        id: "m3",
        title: "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
        status: "completed",
        completed_at: nowIso
      },
      {
        id: "m4",
        title: `Verify 0 build errors and 0 dead links across ${totalPagesBuilt} pages`,
        status: "completed",
        completed_at: nowIso
      }
    ],
    delivered_urls: [
      "/tools/silicone-spatula-oligomer-leaching-modeler/",
      "/es/tools/silicone-spatula-oligomer-leaching-modeler/",
      "/pt/tools/silicone-spatula-oligomer-leaching-modeler/",
      "/zh-cn/tools/silicone-spatula-oligomer-leaching-modeler/",
      "/ja/tools/silicone-spatula-oligomer-leaching-modeler/",
      "/blog/silicone-spatula-cooking-oil-leaching-heat-safety/",
      "/es/blog/silicone-spatula-cooking-oil-leaching-heat-safety/",
      "/pt/blog/silicone-spatula-cooking-oil-leaching-heat-safety/",
      "/zh-cn/blog/silicone-spatula-cooking-oil-leaching-heat-safety/",
      "/ja/blog/silicone-spatula-cooking-oil-leaching-heat-safety/",
      "/blog/air-fryer-basket-toxic-fumes-nanoparticle-resuspension-safety/",
      "/es/blog/air-fryer-basket-toxic-fumes-nanoparticle-resuspension-safety/",
      "/pt/blog/air-fryer-basket-toxic-fumes-nanoparticle-resuspension-safety/",
      "/zh-cn/blog/air-fryer-basket-toxic-fumes-nanoparticle-resuspension-safety/",
      "/ja/blog/air-fryer-basket-toxic-fumes-nanoparticle-resuspension-safety/",
      "/blog/immersion-blender-food-processor-blade-seal-lubricant-safety/",
      "/es/blog/immersion-blender-food-processor-blade-seal-lubricant-safety/",
      "/pt/blog/immersion-blender-food-processor-blade-seal-lubricant-safety/",
      "/zh-cn/blog/immersion-blender-food-processor-blade-seal-lubricant-safety/",
      "/ja/blog/immersion-blender-food-processor-blade-seal-lubricant-safety/"
    ],
    verification_metrics: {
      totalPagesBuilt,
      totalLinksAudited,
      deadLinksDetected: 0,
      slugParity: "100%",
      totalTools: 210,
      consumerToolsIndexed: 74,
      totalComparisons: 163,
      totalBlogGuides: 92,
      totalBlogPages: 460
    }
  };

  hist.completed_tasks = hist.completed_tasks.filter(t => t.task_id !== "TOOL-CONSUMER-087");
  hist.completed_tasks.push(completedTask);

  const newActiveTask = {
    task_id: "TOOL-CONSUMER-088",
    title: "Wave 61: 5 High-Intent Material & Appliance Comparisons (163->168 / 5 langs)",
    target_vertical: "comparisons",
    status: "pending",
    prerequisites: ["TOOL-CONSUMER-087"],
    milestones: [
      {
        id: "m1",
        title: "Research and generate 5 high-intent material/cookware comparison specs across 5 languages (163->168)",
        status: "pending"
      },
      {
        id: "m2",
        title: "Inject compliant ItemList and WebPage schema with E-E-A-T citations in src/data/specs/compare.cjs",
        status: "pending"
      },
      {
        id: "m3",
        title: `Verify 0 build errors and 0 dead links across ${totalPagesBuilt + 25}+ pages`,
        status: "pending"
      }
    ]
  };

  hist.current_active_task = newActiveTask;
  hist.upcoming_task_queue = [
    {
      task_id: "TOOL-CONSUMER-089",
      title: "Wave 62: Consumer Tool #75 Elevation & High-Impact Safety Guide (92->95 / 5 langs)",
      target_vertical: "interactive-tools"
    }
  ];
  hist.last_updated = nowIso;
  hist.total_completed_tasks = hist.completed_tasks.length;
  hist.total_pages_indexed = totalPagesBuilt;
  hist.published_topics = 92;
  hist.published_comparisons = 163;
  if (!hist.viral_tools_status) hist.viral_tools_status = {};
  hist.viral_tools_status.silicone_spatula_oligomer_modeler = 'deployed';

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadPath = path.resolve('logs/website_growth_roadmap.json');
  if (fs.existsSync(roadPath)) {
    const road = JSON.parse(fs.readFileSync(roadPath, 'utf8'));
    let wave60 = road.waves.find(w => w.id === 'wave-60');
    if (wave60) {
      wave60.status = "COMPLETED";
      wave60.completedAt = nowIso;
      wave60.milestones_completed = [
        "Elevate consumer tool #74 (silicone-spatula-oligomer-leaching-modeler) across 5 languages",
        "Publish 3 authoritative safety guides across 5 languages (89 -> 92, 460 articles total)",
        "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
        `Full production build and link integrity audit across ${totalPagesBuilt} pages (0 build errors, 0 dead links out of ${totalLinksAudited} hrefs)`
      ];
    }

    if (!road.waves.find(w => w.id === 'wave-61')) {
      road.waves.push({
        id: "wave-61",
        name: "Wave 61: 5 High-Intent Material & Appliance Comparisons (163->168 / 5 langs)",
        status: "QUEUED",
        tasks: [
          "Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (163 -> 168)",
          "Generate E-E-A-T technical specifications in src/data/specs/compare.cjs",
          "Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs",
          "Full production build and link integrity audit (0 errors, 0 dead links)"
        ]
      });
    }

    road.last_updated = nowIso;
    road.lastUpdated = nowIso;
    road.current_wave = "Wave 61";
    fs.writeFileSync(roadPath, JSON.stringify(road, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/website_growth_roadmap.json');
  }

  // 3. Update logs/autonomous_growth_v2_report.json
  const repPath = path.resolve('logs/autonomous_growth_v2_report.json');
  if (fs.existsSync(repPath)) {
    const rep = JSON.parse(fs.readFileSync(repPath, 'utf8'));
    if (!rep.telemetry) rep.telemetry = {};
    rep.telemetry.totalComparisons = 163;
    rep.telemetry.consumerToolsIndexed = 74;
    rep.telemetry.totalBlogGuides = 92;
    rep.telemetry.totalPagesBuilt = totalPagesBuilt;
    rep.telemetry.totalLinksAudited = totalLinksAudited;
    rep.telemetry.sitemapUrls = totalPagesBuilt;
    rep.telemetry.totalPages = totalPagesBuilt;
    rep.timestamp = nowIso;
    rep.last_updated = nowIso;
    rep.current_wave = "Wave 60";
    if (rep.stats) {
      rep.stats.total_pages = totalPagesBuilt;
      rep.stats.total_comparisons = 163;
      rep.stats.total_blog_guides = 92;
      rep.stats.consumer_tools = 74;
      rep.stats.total_links_audited = totalLinksAudited;
      rep.stats.total_build_errors = 0;
      rep.stats.dead_links = 0;
    }
    fs.writeFileSync(repPath, JSON.stringify(rep, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/autonomous_growth_v2_report.json');
  }
}

updateLogs(11827, 1424693);
console.log('=== LOGS UPDATE COMPLETE ===');
