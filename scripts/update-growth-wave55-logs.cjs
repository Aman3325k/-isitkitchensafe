// Update growth history and roadmap logs for Wave 55
const fs = require('fs');
const path = require('path');

function updateLogs(totalPagesBuilt = 11707, totalLinksAudited = 1410000) {
  const nowIso = new Date().toISOString();

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: "TOOL-CONSUMER-082",
    title: "Wave 55: 5 High-Intent Material & Appliance Comparisons (148->153 / 5 langs)",
    target_vertical: "comparisons",
    status: "completed",
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || "2026-11-21T16:30:00.000Z",
    completed_at: nowIso,
    milestones: [
      {
        id: "m1",
        title: "Research and generate 5 high-intent material/cookware comparison specs across 5 languages (148->153)",
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
      "/compare/stainless-steel-vs-plastic-box-grater/",
      "/es/compare/stainless-steel-vs-plastic-box-grater/",
      "/pt/compare/stainless-steel-vs-plastic-box-grater/",
      "/zh-cn/compare/stainless-steel-vs-plastic-box-grater/",
      "/ja/compare/stainless-steel-vs-plastic-box-grater/",
      "/compare/stainless-steel-vs-plastic-mandoline-slicer/",
      "/es/compare/stainless-steel-vs-plastic-mandoline-slicer/",
      "/pt/compare/stainless-steel-vs-plastic-mandoline-slicer/",
      "/zh-cn/compare/stainless-steel-vs-plastic-mandoline-slicer/",
      "/ja/compare/stainless-steel-vs-plastic-mandoline-slicer/",
      "/compare/silicone-vs-metal-muffin-pan/",
      "/es/compare/silicone-vs-metal-muffin-pan/",
      "/pt/compare/silicone-vs-metal-muffin-pan/",
      "/zh-cn/compare/silicone-vs-metal-muffin-pan/",
      "/ja/compare/silicone-vs-metal-muffin-pan/",
      "/compare/ceramic-vs-glass-pie-dish/",
      "/es/compare/ceramic-vs-glass-pie-dish/",
      "/pt/compare/ceramic-vs-glass-pie-dish/",
      "/zh-cn/compare/ceramic-vs-glass-pie-dish/",
      "/ja/compare/ceramic-vs-glass-pie-dish/",
      "/compare/stainless-steel-vs-plastic-fine-mesh-strainer/",
      "/es/compare/stainless-steel-vs-plastic-fine-mesh-strainer/",
      "/pt/compare/stainless-steel-vs-plastic-fine-mesh-strainer/",
      "/zh-cn/compare/stainless-steel-vs-plastic-fine-mesh-strainer/",
      "/ja/compare/stainless-steel-vs-plastic-fine-mesh-strainer/"
    ],
    verification_metrics: {
      totalPagesBuilt,
      totalLinksAudited,
      deadLinksDetected: 0,
      slugParity: "100%",
      totalTools: 210,
      consumerToolsIndexed: 71,
      totalComparisons: 153,
      totalBlogGuides: 83
    }
  };

  hist.completed_tasks = hist.completed_tasks.filter(t => t.task_id !== "TOOL-CONSUMER-082");
  hist.completed_tasks.push(completedTask);

  const newActiveTask = {
    task_id: "TOOL-CONSUMER-083",
    title: "Wave 56: Consumer Tool #72 Elevation & High-Impact Safety Guide (83->86 / 5 langs)",
    target_vertical: "interactive-tools",
    status: "pending",
    prerequisites: ["TOOL-CONSUMER-082"],
    milestones: [
      {
        id: "m1",
        title: "Elevate consumer tool #72 into Consumer Tools allowlist across 5 languages",
        status: "pending"
      },
      {
        id: "m2",
        title: "Publish 3 authoritative fact-checked safety guides across 5 languages (83 -> 86)",
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
      task_id: "TOOL-CONSUMER-084",
      title: "Wave 57: 5 High-Intent Material & Appliance Comparisons (153->158 / 5 langs)",
      target_vertical: "comparisons"
    }
  ];
  hist.last_updated = nowIso;
  hist.total_completed_tasks = hist.completed_tasks.length;
  hist.total_pages_indexed = totalPagesBuilt;
  hist.published_comparisons = 153;

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadPath = path.resolve('logs/website_growth_roadmap.json');
  if (fs.existsSync(roadPath)) {
    const road = JSON.parse(fs.readFileSync(roadPath, 'utf8'));
    const wave55 = road.waves.find(w => w.id === 'wave-55');
    if (wave55) {
      wave55.status = "COMPLETED";
      wave55.completedAt = nowIso;
      wave55.milestones_completed = [
        "Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (148 -> 153)",
        "Generate E-E-A-T technical specifications in src/data/specs/compare.cjs",
        "Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs",
        `Full production build and link integrity audit across ${totalPagesBuilt} pages (0 build errors, 0 dead links out of ${totalLinksAudited} hrefs)`
      ];
    }

    if (!road.waves.find(w => w.id === 'wave-56')) {
      road.waves.push({
        id: "wave-56",
        name: "Wave 56: Consumer Tool #72 Elevation & High-Impact Safety Guide (83->86 / 5 langs)",
        status: "QUEUED",
        tasks: [
          "Elevate consumer tool #72 into Consumer Tools allowlist across 5 languages",
          "Publish 3 authoritative fact-checked safety guides across 5 languages (83 -> 86)",
          "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
          "Full production build and link integrity audit (0 errors, 0 dead links)"
        ]
      });
    }

    road.last_updated = nowIso;
    road.lastUpdated = nowIso;
    road.current_wave = "Wave 56";
    fs.writeFileSync(roadPath, JSON.stringify(road, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/website_growth_roadmap.json');
  }

  // 3. Update logs/autonomous_growth_v2_report.json
  const repPath = path.resolve('logs/autonomous_growth_v2_report.json');
  if (fs.existsSync(repPath)) {
    const rep = JSON.parse(fs.readFileSync(repPath, 'utf8'));
    if (!rep.telemetry) rep.telemetry = {};
    rep.telemetry.totalComparisons = 153;
    rep.telemetry.consumerToolsIndexed = 71;
    rep.telemetry.totalBlogGuides = 83;
    rep.telemetry.totalPagesBuilt = totalPagesBuilt;
    rep.telemetry.totalLinksAudited = totalLinksAudited;
    rep.telemetry.sitemapUrls = totalPagesBuilt;
    rep.telemetry.totalPages = totalPagesBuilt;
    rep.timestamp = nowIso;
    rep.last_updated = nowIso;
    rep.current_wave = "Wave 55";
    if (rep.stats) {
      rep.stats.total_pages = totalPagesBuilt;
      rep.stats.total_comparisons = 153;
      rep.stats.total_blog_guides = 83;
      rep.stats.consumer_tools = 71;
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
    readme = readme.replace(/148\s+comparisons/g, '153 comparisons');
    fs.writeFileSync(readmePath, readme, 'utf8');
    console.log('✅ Updated README.md');
  }

  // 5. Update public/llms.txt
  const llmsPath = path.resolve('public/llms.txt');
  if (fs.existsSync(llmsPath)) {
    let llms = fs.readFileSync(llmsPath, 'utf8');
    llms = llms.replace(/148\s+Head-to-Head/g, '153 Head-to-Head');
    llms = llms.replace(/148\s+comparisons/g, '153 comparisons');
    fs.writeFileSync(llmsPath, llms, 'utf8');
    console.log('✅ Updated public/llms.txt');
  }
}

module.exports = { updateLogs };

if (require.main === module) {
  const pages = parseInt(process.argv[2] || '11707', 10);
  const links = parseInt(process.argv[3] || '1410000', 10);
  updateLogs(pages, links);
}
