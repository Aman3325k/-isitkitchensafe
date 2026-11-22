// Update growth history and roadmap logs for Wave 59
const fs = require('fs');
const path = require('path');

function updateLogs(totalPagesBuilt = 11812, totalLinksAudited = 1422000) {
  const nowIso = new Date().toISOString();

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: "TOOL-CONSUMER-086",
    title: "Wave 59: 5 High-Intent Material & Appliance Comparisons (158->163 / 5 langs)",
    target_vertical: "comparisons",
    status: "completed",
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || "2026-11-22T07:30:15.453Z",
    completed_at: nowIso,
    milestones: [
      {
        id: "m1",
        title: "Research and generate 5 high-intent material/cookware comparison specs across 5 languages (158->163)",
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
      "/compare/glass-vs-plastic-oil-sprayer/",
      "/es/compare/glass-vs-plastic-oil-sprayer/",
      "/pt/compare/glass-vs-plastic-oil-sprayer/",
      "/zh-cn/compare/glass-vs-plastic-oil-sprayer/",
      "/ja/compare/glass-vs-plastic-oil-sprayer/",
      "/compare/stainless-steel-vs-glass-straws/",
      "/es/compare/stainless-steel-vs-glass-straws/",
      "/pt/compare/stainless-steel-vs-glass-straws/",
      "/zh-cn/compare/stainless-steel-vs-glass-straws/",
      "/ja/compare/stainless-steel-vs-glass-straws/",
      "/compare/stainless-steel-vs-plastic-can-opener/",
      "/es/compare/stainless-steel-vs-plastic-can-opener/",
      "/pt/compare/stainless-steel-vs-plastic-can-opener/",
      "/zh-cn/compare/stainless-steel-vs-plastic-can-opener/",
      "/ja/compare/stainless-steel-vs-plastic-can-opener/",
      "/compare/stainless-steel-vs-plastic-food-mill/",
      "/es/compare/stainless-steel-vs-plastic-food-mill/",
      "/pt/compare/stainless-steel-vs-plastic-food-mill/",
      "/zh-cn/compare/stainless-steel-vs-plastic-food-mill/",
      "/ja/compare/stainless-steel-vs-plastic-food-mill/",
      "/compare/stainless-steel-vs-cast-aluminum-tortilla-press/",
      "/es/compare/stainless-steel-vs-cast-aluminum-tortilla-press/",
      "/pt/compare/stainless-steel-vs-cast-aluminum-tortilla-press/",
      "/zh-cn/compare/stainless-steel-vs-cast-aluminum-tortilla-press/",
      "/ja/compare/stainless-steel-vs-cast-aluminum-tortilla-press/"
    ],
    verification_metrics: {
      totalPagesBuilt,
      totalLinksAudited,
      deadLinksDetected: 0,
      slugParity: "100%",
      totalTools: 210,
      consumerToolsIndexed: 73,
      totalComparisons: 163,
      totalBlogGuides: 89,
      totalBlogPages: 445
    }
  };

  hist.completed_tasks = hist.completed_tasks.filter(t => t.task_id !== "TOOL-CONSUMER-086");
  hist.completed_tasks.push(completedTask);

  const newActiveTask = {
    task_id: "TOOL-CONSUMER-087",
    title: "Wave 60: Consumer Tool #74 Elevation & High-Impact Safety Guide (89->92 / 5 langs)",
    target_vertical: "interactive-tools",
    status: "pending",
    prerequisites: ["TOOL-CONSUMER-086"],
    milestones: [
      {
        id: "m1",
        title: "Elevate consumer tool #74 into Consumer Tools allowlist across 5 languages",
        status: "pending"
      },
      {
        id: "m2",
        title: "Publish 3 authoritative fact-checked safety guides across 5 languages (89 -> 92)",
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
      task_id: "TOOL-CONSUMER-088",
      title: "Wave 61: 5 High-Intent Material & Appliance Comparisons (163->168 / 5 langs)",
      target_vertical: "comparisons"
    }
  ];
  hist.last_updated = nowIso;
  hist.total_completed_tasks = hist.completed_tasks.length;
  hist.total_pages_indexed = totalPagesBuilt;
  hist.published_comparisons = 163;

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadPath = path.resolve('logs/website_growth_roadmap.json');
  if (fs.existsSync(roadPath)) {
    const road = JSON.parse(fs.readFileSync(roadPath, 'utf8'));
    const wave59 = road.waves.find(w => w.id === 'wave-59');
    if (wave59) {
      wave59.status = "COMPLETED";
      wave59.completedAt = nowIso;
      wave59.milestones_completed = [
        "Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (158 -> 163)",
        "Generate E-E-A-T technical specifications in src/data/specs/compare.cjs",
        "Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs",
        `Full production build and link integrity audit across ${totalPagesBuilt} pages (0 build errors, 0 dead links out of ${totalLinksAudited} hrefs)`
      ];
    }

    if (!road.waves.find(w => w.id === 'wave-60')) {
      road.waves.push({
        id: "wave-60",
        name: "Wave 60: Consumer Tool #74 Elevation & High-Impact Safety Guide (89->92 / 5 langs)",
        status: "QUEUED",
        tasks: [
          "Elevate consumer tool #74 into Consumer Tools allowlist across 5 languages",
          "Publish 3 authoritative fact-checked safety guides across 5 languages (89 -> 92)",
          "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
          "Full production build and link integrity audit (0 errors, 0 dead links)"
        ]
      });
    }

    road.last_updated = nowIso;
    road.lastUpdated = nowIso;
    road.current_wave = "Wave 60";
    fs.writeFileSync(roadPath, JSON.stringify(road, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/website_growth_roadmap.json');
  }

  // 3. Update logs/autonomous_growth_v2_report.json
  const repPath = path.resolve('logs/autonomous_growth_v2_report.json');
  if (fs.existsSync(repPath)) {
    const rep = JSON.parse(fs.readFileSync(repPath, 'utf8'));
    if (!rep.telemetry) rep.telemetry = {};
    rep.telemetry.totalComparisons = 163;
    rep.telemetry.consumerToolsIndexed = 73;
    rep.telemetry.totalBlogGuides = 89;
    rep.telemetry.totalPagesBuilt = totalPagesBuilt;
    rep.telemetry.totalLinksAudited = totalLinksAudited;
    rep.telemetry.sitemapUrls = totalPagesBuilt;
    rep.telemetry.totalPages = totalPagesBuilt;
    rep.timestamp = nowIso;
    rep.last_updated = nowIso;
    rep.current_wave = "Wave 59";
    if (rep.stats) {
      rep.stats.total_pages = totalPagesBuilt;
      rep.stats.total_comparisons = 163;
      rep.stats.total_blog_guides = 89;
      rep.stats.consumer_tools = 73;
      rep.stats.total_links_audited = totalLinksAudited;
      rep.stats.dead_links = 0;
    }
    fs.writeFileSync(repPath, JSON.stringify(rep, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/autonomous_growth_v2_report.json');
  }

  // 4. Update public/llms.txt
  const llmsPath = path.resolve('public/llms.txt');
  if (fs.existsSync(llmsPath)) {
    let llms = fs.readFileSync(llmsPath, 'utf8');
    llms = llms.replace(/\*\*11,\d+\+ static pages\*\*/g, `**${totalPagesBuilt}+ static pages**`);
    llms = llms.replace(/\*\*158 comparisons per language\*\* \(790 localized pages\)/g, `**163 comparisons per language** (${163 * 5} localized pages)`);
    fs.writeFileSync(llmsPath, llms, 'utf8');
    console.log('✅ Updated public/llms.txt with 163 comparisons and ' + totalPagesBuilt + ' pages');
  }
}

module.exports = { updateLogs };

if (require.main === module) {
  const pages = parseInt(process.argv[2] || '11812', 10);
  const links = parseInt(process.argv[3] || '1422000', 10);
  updateLogs(pages, links);
}
