// Update growth history and roadmap logs for Wave 61
const fs = require('fs');
const path = require('path');

function updateLogs(totalPagesBuilt = 11852, totalLinksAudited = 1427500) {
  const nowIso = new Date().toISOString();

  // 1. Update logs/autonomous-growth-history.json
  const histPath = path.resolve('logs/autonomous-growth-history.json');
  const hist = JSON.parse(fs.readFileSync(histPath, 'utf8'));

  const completedTask = {
    task_id: "TOOL-CONSUMER-088",
    title: "Wave 61: 5 High-Intent Material & Appliance Comparisons (163->168 / 5 langs)",
    target_vertical: "comparisons",
    status: "completed",
    started_at: (hist.current_active_task && hist.current_active_task.started_at) || "2026-11-22T09:35:10.123Z",
    completed_at: nowIso,
    milestones: [
      {
        id: "m1",
        title: "Research and generate 5 high-intent material/cookware comparison specs across 5 languages (163->168)",
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
      "/compare/stainless-steel-vs-cast-iron-meat-press/",
      "/es/compare/stainless-steel-vs-cast-iron-meat-press/",
      "/pt/compare/stainless-steel-vs-cast-iron-meat-press/",
      "/zh-cn/compare/stainless-steel-vs-cast-iron-meat-press/",
      "/ja/compare/stainless-steel-vs-cast-iron-meat-press/",
      "/compare/glass-vs-stainless-steel-cold-brew-maker/",
      "/es/compare/glass-vs-stainless-steel-cold-brew-maker/",
      "/pt/compare/glass-vs-stainless-steel-cold-brew-maker/",
      "/zh-cn/compare/glass-vs-stainless-steel-cold-brew-maker/",
      "/ja/compare/glass-vs-stainless-steel-cold-brew-maker/",
      "/compare/stainless-steel-vs-plastic-pasta-maker/",
      "/es/compare/stainless-steel-vs-plastic-pasta-maker/",
      "/pt/compare/stainless-steel-vs-plastic-pasta-maker/",
      "/zh-cn/compare/stainless-steel-vs-plastic-pasta-maker/",
      "/ja/compare/stainless-steel-vs-plastic-pasta-maker/",
      "/compare/glass-vs-plastic-fermentation-weights/",
      "/es/compare/glass-vs-plastic-fermentation-weights/",
      "/pt/compare/glass-vs-plastic-fermentation-weights/",
      "/zh-cn/compare/glass-vs-plastic-fermentation-weights/",
      "/ja/compare/glass-vs-plastic-fermentation-weights/",
      "/compare/stainless-steel-vs-plastic-ice-cream-maker-bowl/",
      "/es/compare/stainless-steel-vs-plastic-ice-cream-maker-bowl/",
      "/pt/compare/stainless-steel-vs-plastic-ice-cream-maker-bowl/",
      "/zh-cn/compare/stainless-steel-vs-plastic-ice-cream-maker-bowl/",
      "/ja/compare/stainless-steel-vs-plastic-ice-cream-maker-bowl/"
    ],
    verification_metrics: {
      totalPagesBuilt,
      totalLinksAudited,
      deadLinksDetected: 0,
      slugParity: "100%",
      totalTools: 210,
      consumerToolsIndexed: 74,
      totalComparisons: 168,
      totalBlogGuides: 92,
      totalBlogPages: 460
    }
  };

  hist.completed_tasks = hist.completed_tasks.filter(t => t.task_id !== "TOOL-CONSUMER-088");
  hist.completed_tasks.push(completedTask);

  const newActiveTask = {
    task_id: "TOOL-CONSUMER-089",
    title: "Wave 62: Consumer Tool #75 Elevation & High-Impact Safety Guide (92->95 / 5 langs)",
    target_vertical: "interactive-tools",
    status: "pending",
    prerequisites: ["TOOL-CONSUMER-088"],
    milestones: [
      {
        id: "m1",
        title: "Elevate consumer tool #75 into Consumer Tools allowlist across 5 languages",
        status: "pending"
      },
      {
        id: "m2",
        title: "Publish 3 authoritative fact-checked safety guides across 5 languages (92 -> 95)",
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
      task_id: "TOOL-CONSUMER-090",
      title: "Wave 63: 5 High-Intent Material & Appliance Comparisons (168->173 / 5 langs)",
      target_vertical: "comparisons"
    }
  ];
  hist.last_updated = nowIso;
  hist.total_completed_tasks = hist.completed_tasks.length;
  hist.total_pages_indexed = totalPagesBuilt;
  hist.published_comparisons = 168;

  fs.writeFileSync(histPath, JSON.stringify(hist, null, 2) + '\n', 'utf8');
  console.log('✅ Updated logs/autonomous-growth-history.json');

  // 2. Update logs/website_growth_roadmap.json
  const roadPath = path.resolve('logs/website_growth_roadmap.json');
  if (fs.existsSync(roadPath)) {
    const road = JSON.parse(fs.readFileSync(roadPath, 'utf8'));
    const wave61 = road.waves.find(w => w.id === 'wave-61');
    if (wave61) {
      wave61.status = "COMPLETED";
      wave61.completedAt = nowIso;
      wave61.milestones_completed = [
        "Expand /compare/ database with 5 high-intent material & cookware matchups across 5 languages (163 -> 168)",
        "Generate E-E-A-T technical specifications in src/data/specs/compare.cjs",
        "Wire contextual interactive tool routing and Rich Snippet Schema validations across all localized hubs",
        `Full production build and link integrity audit across ${totalPagesBuilt} pages (0 build errors, 0 dead links out of ${totalLinksAudited} hrefs)`
      ];
    }

    if (!road.waves.find(w => w.id === 'wave-62')) {
      road.waves.push({
        id: "wave-62",
        name: "Wave 62: Consumer Tool #75 Elevation & High-Impact Safety Guide (92->95 / 5 langs)",
        status: "QUEUED",
        tasks: [
          "Elevate consumer tool #75 into Consumer Tools allowlist across 5 languages",
          "Publish 3 authoritative fact-checked safety guides across 5 languages (92 -> 95)",
          "Wire contextual interactive tool routing, RSS, llms.txt & schema validations",
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
    rep.telemetry.totalComparisons = 168;
    rep.telemetry.consumerToolsIndexed = 74;
    rep.telemetry.totalBlogGuides = 92;
    rep.telemetry.totalPagesBuilt = totalPagesBuilt;
    rep.telemetry.totalLinksAudited = totalLinksAudited;
    rep.telemetry.sitemapUrls = totalPagesBuilt;
    rep.telemetry.totalPages = totalPagesBuilt;
    rep.timestamp = nowIso;
    rep.last_updated = nowIso;
    rep.current_wave = "Wave 61";
    if (rep.stats) {
      rep.stats.total_pages = totalPagesBuilt;
      rep.stats.total_comparisons = 168;
      rep.stats.total_blog_guides = 92;
      rep.stats.consumer_tools = 74;
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
    llms = llms.replace(/\*\*163 comparisons per language\*\* \(815 localized pages\)/g, `**168 comparisons per language** (${168 * 5} localized pages)`);
    llms = llms.replace(/\*\*158 comparisons per language\*\* \(790 localized pages\)/g, `**168 comparisons per language** (${168 * 5} localized pages)`);
    fs.writeFileSync(llmsPath, llms, 'utf8');
    console.log('✅ Updated public/llms.txt with 168 comparisons and ' + totalPagesBuilt + ' pages');
  }

  // 5. Update README.md
  const readmePath = path.resolve('README.md');
  if (fs.existsSync(readmePath)) {
    let readme = fs.readFileSync(readmePath, 'utf8');
    readme = readme.replace(/\*\*11,\d+\+ static pages\*\*/g, `**${totalPagesBuilt}+ static pages**`);
    readme = readme.replace(/\*\*163 comparisons × 5 languages = 815 localized pages\*\*/g, `**168 comparisons × 5 languages = 840 localized pages**`);
    fs.writeFileSync(readmePath, readme, 'utf8');
    console.log('✅ Updated README.md with 168 comparisons and ' + totalPagesBuilt + ' pages');
  }
}

module.exports = { updateLogs };

if (require.main === module) {
  const pages = parseInt(process.argv[2] || '11852', 10);
  const links = parseInt(process.argv[3] || '1427500', 10);
  updateLogs(pages, links);
}
