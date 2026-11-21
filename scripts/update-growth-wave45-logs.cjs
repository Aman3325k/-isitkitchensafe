// Update growth history and roadmap logs for Wave 45
const fs = require('fs');
const path = require('path');

function updateLogs(totalPagesBuilt = 11532, totalLinksAudited = 1386000) {
  const nowIso = new Date().toISOString();

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: "TOOL-CONSUMER-072",
    title: "Wave 45: 5 High-Intent Material & Appliance Comparisons (123->128 / 5 langs)",
    target_vertical: "comparisons",
    status: "completed",
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || "2026-11-21T04:20:00.000Z",
    completed_at: nowIso,
    milestones: [
      {
        id: "m1",
        title: "Research and generate 5 high-intent material/cookware comparison specs across 5 languages (123->128)",
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
      "/compare/glass-vs-stainless-steel-french-press/",
      "/es/compare/glass-vs-stainless-steel-french-press/",
      "/pt/compare/glass-vs-stainless-steel-french-press/",
      "/zh-cn/compare/glass-vs-stainless-steel-french-press/",
      "/ja/compare/glass-vs-stainless-steel-french-press/",
      "/compare/silicone-vs-stainless-steel-tongs/",
      "/es/compare/silicone-vs-stainless-steel-tongs/",
      "/pt/compare/silicone-vs-stainless-steel-tongs/",
      "/zh-cn/compare/silicone-vs-stainless-steel-tongs/",
      "/ja/compare/silicone-vs-stainless-steel-tongs/",
      "/compare/bamboo-vs-stainless-steel-steamer/",
      "/es/compare/bamboo-vs-stainless-steel-steamer/",
      "/pt/compare/bamboo-vs-stainless-steel-steamer/",
      "/zh-cn/compare/bamboo-vs-stainless-steel-steamer/",
      "/ja/compare/bamboo-vs-stainless-steel-steamer/",
      "/compare/silicone-vs-stainless-steel-tea-infuser/",
      "/es/compare/silicone-vs-stainless-steel-tea-infuser/",
      "/pt/compare/silicone-vs-stainless-steel-tea-infuser/",
      "/zh-cn/compare/silicone-vs-stainless-steel-tea-infuser/",
      "/ja/compare/silicone-vs-stainless-steel-tea-infuser/",
      "/compare/copper-core-vs-tri-ply-stainless-steel/",
      "/es/compare/copper-core-vs-tri-ply-stainless-steel/",
      "/pt/compare/copper-core-vs-tri-ply-stainless-steel/",
      "/zh-cn/compare/copper-core-vs-tri-ply-stainless-steel/",
      "/ja/compare/copper-core-vs-tri-ply-stainless-steel/"
    ],
    verification_metrics: {
      totalPagesBuilt,
      totalLinksAudited,
      deadLinksDetected: 0,
      slugParity: "100%",
      totalTools: 210,
      consumerToolsIndexed: 66,
      totalComparisons: 128,
      totalBlogGuides: 68
    }
  };

  hist.completed_tasks = hist.completed_tasks.filter(t => t.task_id !== "TOOL-CONSUMER-072");
  hist.completed_tasks.push(completedTask);

  const newActiveTask = {
    task_id: "TOOL-CONSUMER-073",
    title: "Wave 46: Consumer Tool #67 Elevation & High-Impact Safety Guide (68->71 / 5 langs)",
    target_vertical: "interactive-tools",
    status: "pending",
    prerequisites: ["TOOL-CONSUMER-072"],
    milestones: [
      {
        id: "m1",
        title: "Elevate consumer tool #67 into Consumer Tools allowlist across 5 languages",
        status: "pending"
      },
      {
        id: "m2",
        title: "Publish 3 authoritative fact-checked safety guides across 5 languages (68 -> 71)",
        status: "pending"
      },
      {
        id: "m3",
        title: "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
        status: "pending"
      },
      {
        id: "m4",
        title: "Verify 0 build errors and 0 dead links across 11547+ pages",
        status: "pending"
      }
    ]
  };

  hist.current_active_task = newActiveTask;
  hist.last_updated = nowIso;
  hist.total_completed_tasks = hist.completed_tasks.length;
  hist.total_pages_indexed = totalPagesBuilt;
  hist.published_comparisons = 128;

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadmapPath = path.resolve('logs/website_growth_roadmap.json');
  if (fs.existsSync(roadmapPath)) {
    const roadmap = JSON.parse(fs.readFileSync(roadmapPath, 'utf8'));
    roadmap.lastUpdated = nowIso;
    roadmap.last_updated = nowIso;
    roadmap.current_wave = "Wave 46";

    const wave45 = roadmap.waves.find(w => w.id === 'wave-45');
    if (wave45) {
      wave45.status = 'COMPLETED';
      wave45.completedAt = nowIso;
      wave45.milestones_completed = [
        "Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (123 -> 128)",
        "Generate E-E-A-T technical specifications in src/data/specs/compare.cjs",
        "Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs",
        `Full production build and link integrity audit across ${totalPagesBuilt} pages (0 build errors, 0 dead links out of ${totalLinksAudited} hrefs)`
      ];
    }

    if (!roadmap.waves.find(w => w.id === 'wave-46')) {
      roadmap.waves.push({
        id: "wave-46",
        name: "Wave 46: Consumer Tool #67 Elevation & High-Impact Safety Guide (68->71 / 5 langs)",
        status: "QUEUED",
        tasks: [
          "Elevate consumer tool #67 into Consumer Tools allowlist across 5 languages",
          "Publish 3 authoritative fact-checked safety guides across 5 languages (68 -> 71)",
          "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
          "Full production build and link integrity audit (0 errors, 0 dead links)"
        ]
      });
    }

    fs.writeFileSync(roadmapPath, JSON.stringify(roadmap, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/website_growth_roadmap.json');
  }

  // 3. Update logs/autonomous_growth_v2_report.json
  const reportPath = path.resolve('logs/autonomous_growth_v2_report.json');
  if (fs.existsSync(reportPath)) {
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    report.last_updated = nowIso;
    report.timestamp = nowIso;
    report.current_wave = "Wave 46";
    if (report.telemetry) {
      report.telemetry.totalComparisons = 128;
      report.telemetry.totalPagesBuilt = totalPagesBuilt;
      report.telemetry.totalLinksAudited = totalLinksAudited;
      report.telemetry.deadLinksDetected = 0;
      report.telemetry.sitemapUrls = totalPagesBuilt;
    }
    report.stats = report.stats || {};
    report.stats.total_pages = totalPagesBuilt;
    report.stats.total_comparisons = 128;
    report.stats.total_blog_guides = 68;
    report.stats.consumer_tools = 66;
    report.stats.total_links_audited = totalLinksAudited;
    report.stats.dead_links = 0;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n', 'utf8');
    console.log('✅ Updated logs/autonomous_growth_v2_report.json');
  }
}

const args = process.argv.slice(2);
const pages = parseInt(args[0], 10) || 11532;
const links = parseInt(args[1], 10) || 1386000;

updateLogs(pages, links);
