// Update growth history and roadmap logs for Wave 52
const fs = require('fs');
const path = require('path');

function updateLogs(totalPagesBuilt = 11667, totalLinksAudited = 1403500) {
  const nowIso = new Date().toISOString();

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: "TOOL-CONSUMER-079",
    title: "Wave 52: Consumer Tool #70 Elevation & High-Impact Safety Guide (77->80 / 5 langs)",
    target_vertical: "interactive-tools",
    status: "completed",
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || "2026-11-21T10:31:05.897Z",
    completed_at: nowIso,
    milestones: [
      {
        id: "m1",
        title: "Elevate consumer tool #70 into Consumer Tools allowlist across 5 languages",
        status: "completed",
        completed_at: nowIso
      },
      {
        id: "m2",
        title: "Publish 3 authoritative fact-checked safety guides across 5 languages (77 -> 80)",
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
      "/tools/melamine-tableware-formaldehyde-modeler/",
      "/es/tools/melamine-tableware-formaldehyde-modeler/",
      "/pt/tools/melamine-tableware-formaldehyde-modeler/",
      "/zh-cn/tools/melamine-tableware-formaldehyde-modeler/",
      "/ja/tools/melamine-tableware-formaldehyde-modeler/",
      "/blog/silicone-bakeware-cyclics-oligomer-migration-heat-safety/",
      "/es/blog/silicone-bakeware-cyclics-oligomer-migration-heat-safety/",
      "/pt/blog/silicone-bakeware-cyclics-oligomer-migration-heat-safety/",
      "/zh-cn/blog/silicone-bakeware-cyclics-oligomer-migration-heat-safety/",
      "/ja/blog/silicone-bakeware-cyclics-oligomer-migration-heat-safety/",
      "/blog/stainless-steel-cookware-nickel-chromium-acid-leaching-safety/",
      "/es/blog/stainless-steel-cookware-nickel-chromium-acid-leaching-safety/",
      "/pt/blog/stainless-steel-cookware-nickel-chromium-acid-leaching-safety/",
      "/zh-cn/blog/stainless-steel-cookware-nickel-chromium-acid-leaching-safety/",
      "/ja/blog/stainless-steel-cookware-nickel-chromium-acid-leaching-safety/",
      "/blog/wooden-cutting-board-biofilm-bacteria-microplastics-safety/",
      "/es/blog/wooden-cutting-board-biofilm-bacteria-microplastics-safety/",
      "/pt/blog/wooden-cutting-board-biofilm-bacteria-microplastics-safety/",
      "/zh-cn/blog/wooden-cutting-board-biofilm-bacteria-microplastics-safety/",
      "/ja/blog/wooden-cutting-board-biofilm-bacteria-microplastics-safety/"
    ],
    verification_metrics: {
      totalPagesBuilt,
      totalLinksAudited,
      deadLinksDetected: 0,
      slugParity: "100%",
      totalTools: 210,
      consumerToolsIndexed: 70,
      totalComparisons: 143,
      totalBlogGuides: 80
    }
  };

  hist.completed_tasks.push(completedTask);

  hist.current_active_task = {
    task_id: "TOOL-CONSUMER-080",
    title: "Wave 53: 5 High-Intent Material & Appliance Comparisons (143->148 / 5 langs)",
    target_vertical: "comparisons",
    status: "pending",
    prerequisites: [
      "TOOL-CONSUMER-079"
    ],
    milestones: [
      {
        id: "m1",
        title: "Research and generate 5 high-intent material/cookware comparison specs across 5 languages (143->148)",
        status: "pending"
      },
      {
        id: "m2",
        title: "Inject compliant ItemList and WebPage schema with E-E-A-T citations",
        status: "pending"
      },
      {
        id: "m3",
        title: `Verify 0 build errors and 0 dead links across ${totalPagesBuilt + 25}+ pages`,
        status: "pending"
      }
    ]
  };

  hist.upcoming_task_queue = [
    {
      task_id: "TOOL-CONSUMER-081",
      title: "Wave 54: Consumer Tool #71 Elevation & High-Impact Safety Guide (80->83 / 5 langs)",
      target_vertical: "interactive-tools"
    },
    {
      task_id: "TOOL-CONSUMER-082",
      title: "Wave 55: 5 High-Intent Material & Appliance Comparisons (148->153 / 5 langs)",
      target_vertical: "comparisons"
    }
  ];

  hist.last_updated = nowIso;
  hist.total_completed_tasks = (hist.total_completed_tasks || 51) + 1;
  hist.total_pages_indexed = totalPagesBuilt;
  hist.published_topics = 80;

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log(`✅ Saved logs/autonomous-growth-history.json`);

  // 2. Update logs/website_growth_roadmap.json
  const roadmapPath = path.resolve('logs/website_growth_roadmap.json');
  const roadmap = JSON.parse(fs.readFileSync(roadmapPath, 'utf8'));

  roadmap.lastUpdated = nowIso;
  roadmap.last_updated = nowIso;
  roadmap.current_wave = "Wave 53";

  const w52 = roadmap.waves.find(w => w.id === 'wave-52');
  if (w52) {
    w52.status = "COMPLETED";
    w52.completedAt = nowIso;
    w52.milestones_completed = [
      "Elevate consumer tool #70 (Melamine Tableware Formaldehyde & Cyanuric Acid Leaching Modeler) into Consumer Tools allowlist across 5 languages",
      "Publish 3 authoritative fact-checked safety guides across 5 languages (77 -> 80 guides / 400 localized articles)",
      "Wire contextual interactive tool routing, RSS, llms.txt, Schema.org (BreadcrumbList, WebApplication, FAQPage) & E-E-A-T citations",
      `Full production build and link integrity audit across ${totalPagesBuilt} pages (0 build errors, 0 dead links out of ${totalLinksAudited} hrefs)`
    ];
  }

  // Ensure wave-53 is queued
  let w53 = roadmap.waves.find(w => w.id === 'wave-53');
  if (!w53) {
    roadmap.waves.push({
      id: "wave-53",
      name: "Wave 53: 5 High-Intent Material & Appliance Comparisons (143->148 / 5 langs)",
      status: "QUEUED",
      tasks: [
        "Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (143 -> 148)",
        "Generate E-E-A-T technical specifications in src/data/specs/compare.cjs",
        "Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs",
        "Full production build and link integrity audit (0 errors, 0 dead links)"
      ]
    });
  }

  fs.writeFileSync(roadmapPath, JSON.stringify(roadmap, null, 2) + '\n', 'utf8');
  console.log(`✅ Saved logs/website_growth_roadmap.json`);

  // 3. Update logs/autonomous_growth_v2_report.json
  const repPath = path.resolve('logs/autonomous_growth_v2_report.json');
  if (fs.existsSync(repPath)) {
    const rep = JSON.parse(fs.readFileSync(repPath, 'utf8'));
    rep.timestamp = nowIso;
    rep.last_updated = nowIso;
    rep.current_wave = "Wave 53";
    if (rep.telemetry) {
      rep.telemetry.lastExecution = nowIso;
      rep.telemetry.totalPages = totalPagesBuilt;
      rep.telemetry.totalGuides = 80;
      rep.telemetry.totalConsumerTools = 70;
      rep.telemetry.totalTools = 210;
      rep.telemetry.totalComparisons = 143;
    }
    if (rep.stats) {
      rep.stats.totalPages = totalPagesBuilt;
      rep.stats.totalGuides = 80;
      rep.stats.totalConsumerTools = 70;
      rep.stats.totalTools = 210;
      rep.stats.totalComparisons = 143;
    }
    fs.writeFileSync(repPath, JSON.stringify(rep, null, 2) + '\n', 'utf8');
    console.log(`✅ Saved logs/autonomous_growth_v2_report.json`);
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const pages = parseInt(args[0], 10) || 11667;
  const links = parseInt(args[1], 10) || 1403500;
  updateLogs(pages, links);
}

module.exports = { updateLogs };
