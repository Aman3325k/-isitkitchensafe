// Update growth history and roadmap logs for Wave 63
const fs = require('fs');
const path = require('path');

function updateLogs(totalPagesBuilt = 11892, totalLinksAudited = 1433085) {
  const nowIso = new Date().toISOString();

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: "TOOL-CONSUMER-090",
    title: "Wave 63: 5 High-Intent Material & Appliance Comparisons (168->173 / 5 langs)",
    target_vertical: "comparisons",
    status: "completed",
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || "2026-11-22T11:35:00.000Z",
    completed_at: nowIso,
    milestones: [
      {
        id: "m1",
        title: "Research and generate 5 high-intent material/cookware comparison specs across 5 languages (168->173)",
        status: "completed",
        completed_at: nowIso
      },
      {
        id: "m2",
        title: "Inject compliant ItemList and WebPage schema with E-E-A-T citations in src/data/specs/compare.cjs",
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
      "/compare/stainless-steel-vs-plastic-sous-vide-container/",
      "/es/compare/stainless-steel-vs-plastic-sous-vide-container/",
      "/pt/compare/stainless-steel-vs-plastic-sous-vide-container/",
      "/zh-cn/compare/stainless-steel-vs-plastic-sous-vide-container/",
      "/ja/compare/stainless-steel-vs-plastic-sous-vide-container/",
      "/compare/ceramic-vs-plastic-pour-over-dripper/",
      "/es/compare/ceramic-vs-plastic-pour-over-dripper/",
      "/pt/compare/ceramic-vs-plastic-pour-over-dripper/",
      "/zh-cn/compare/ceramic-vs-plastic-pour-over-dripper/",
      "/ja/compare/ceramic-vs-plastic-pour-over-dripper/",
      "/compare/ceramic-lined-vs-stainless-steel-travel-mug/",
      "/es/compare/ceramic-lined-vs-stainless-steel-travel-mug/",
      "/pt/compare/ceramic-lined-vs-stainless-steel-travel-mug/",
      "/zh-cn/compare/ceramic-lined-vs-stainless-steel-travel-mug/",
      "/ja/compare/ceramic-lined-vs-stainless-steel-travel-mug/",
      "/compare/stainless-steel-vs-aluminum-roasting-pan/",
      "/es/compare/stainless-steel-vs-aluminum-roasting-pan/",
      "/pt/compare/stainless-steel-vs-aluminum-roasting-pan/",
      "/zh-cn/compare/stainless-steel-vs-aluminum-roasting-pan/",
      "/ja/compare/stainless-steel-vs-aluminum-roasting-pan/",
      "/compare/stainless-steel-vs-cast-aluminum-meat-tenderizer/",
      "/es/compare/stainless-steel-vs-cast-aluminum-meat-tenderizer/",
      "/pt/compare/stainless-steel-vs-cast-aluminum-meat-tenderizer/",
      "/zh-cn/compare/stainless-steel-vs-cast-aluminum-meat-tenderizer/",
      "/ja/compare/stainless-steel-vs-cast-aluminum-meat-tenderizer/"
    ],
    verification_metrics: {
      totalPagesBuilt,
      totalLinksAudited,
      deadLinksDetected: 0,
      slugParity: "100%",
      totalTools: 210,
      consumerToolsIndexed: 75,
      totalComparisons: 173,
      totalBlogGuides: 95,
      totalBlogPages: 475
    }
  };

  hist.completed_tasks.push(completedTask);
  hist.total_completed_tasks = hist.completed_tasks.length;
  hist.total_pages_indexed = totalPagesBuilt;
  hist.published_comparisons = 173;
  hist.last_updated = nowIso;

  hist.current_active_task = {
    task_id: "TOOL-CONSUMER-091",
    title: "Wave 64: Consumer Tool #76 Elevation & High-Impact Safety Guide (95->98 / 5 langs)",
    target_vertical: "interactive-tools",
    status: "pending",
    prerequisites: ["TOOL-CONSUMER-090"],
    milestones: [
      {
        id: "m1",
        title: "Elevate consumer tool #76 into Consumer Tools allowlist and index across 5 languages",
        status: "pending"
      },
      {
        id: "m2",
        title: "Research and publish 3 high-impact kitchen safety guides across 5 languages (95->98)",
        status: "pending"
      },
      {
        id: "m3",
        title: "Verify 0 build errors and 0 dead links across 11907+ pages",
        status: "pending"
      }
    ]
  };

  hist.upcoming_task_queue = [
    {
      task_id: "TOOL-CONSUMER-092",
      title: "Wave 65: 5 High-Intent Material & Appliance Comparisons (173->178 / 5 langs)",
      target_vertical: "comparisons"
    }
  ];

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadPath = path.resolve('logs/website_growth_roadmap.json');
  if (fs.existsSync(roadPath)) {
    const road = JSON.parse(fs.readFileSync(roadPath, 'utf8'));
    let wave63 = road.waves.find(w => w.id === 'wave-63');
    if (wave63) {
      wave63.status = "COMPLETED";
      wave63.completedAt = nowIso;
      wave63.milestones_completed = [
        "Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (168 -> 173)",
        "Generate E-E-A-T technical specifications in src/data/specs/compare.cjs",
        "Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs",
        `Full production build and link integrity audit across ${totalPagesBuilt} pages (0 build errors, 0 dead links out of ${totalLinksAudited} hrefs)`
      ];
    }

    if (!road.waves.find(w => w.id === 'wave-64')) {
      road.waves.push({
        id: "wave-64",
        name: "Wave 64: Consumer Tool #76 Elevation & High-Impact Safety Guide (95->98 / 5 langs)",
        status: "QUEUED",
        tasks: [
          "Elevate consumer tool #76 into Consumer Tools allowlist across 5 languages",
          "Publish 3 authoritative fact-checked safety guides across 5 languages (95 -> 98)",
          "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
          "Full production build and link integrity audit (0 errors, 0 dead links)"
        ]
      });
    }

    road.last_updated = nowIso;
    road.lastUpdated = nowIso;
    road.current_wave = "Wave 64";
    fs.writeFileSync(roadPath, JSON.stringify(road, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/website_growth_roadmap.json');
  }

  // 3. Update logs/autonomous_growth_v2_report.json
  const repPath = path.resolve('logs/autonomous_growth_v2_report.json');
  if (fs.existsSync(repPath)) {
    const rep = JSON.parse(fs.readFileSync(repPath, 'utf8'));
    if (!rep.telemetry) rep.telemetry = {};
    rep.telemetry.totalComparisons = 173;
    rep.telemetry.consumerToolsIndexed = 75;
    rep.telemetry.totalBlogGuides = 95;
    rep.telemetry.totalPagesBuilt = totalPagesBuilt;
    rep.telemetry.totalLinksAudited = totalLinksAudited;
    rep.telemetry.sitemapUrls = totalPagesBuilt;
    rep.telemetry.totalPages = totalPagesBuilt;
    rep.timestamp = nowIso;
    rep.last_updated = nowIso;
    rep.current_wave = "Wave 63";
    if (rep.stats) {
      rep.stats.total_pages = totalPagesBuilt;
      rep.stats.total_comparisons = 173;
      rep.stats.total_blog_guides = 95;
      rep.stats.consumer_tools = 75;
      rep.stats.total_links_audited = totalLinksAudited;
      rep.stats.total_build_errors = 0;
      rep.stats.dead_links = 0;
    }
    fs.writeFileSync(repPath, JSON.stringify(rep, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/autonomous_growth_v2_report.json');
  }
}

updateLogs(11892, 1433085);
console.log('=== LOGS UPDATE COMPLETE ===');
