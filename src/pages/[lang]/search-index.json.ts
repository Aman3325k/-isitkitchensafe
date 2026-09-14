import type { APIRoute } from 'astro';
import itemsEs from '../../data/items.es.json';
import itemsPt from '../../data/items.pt.json';
import washingMachineEs from '../../data/washing-machine.es.json';
import washingMachinePt from '../../data/washing-machine.pt.json';
import howLongEs from '../../data/how-long.es.json';
import howLongPt from '../../data/how-long.pt.json';
import refreezeEs from '../../data/refreeze.es.json';
import refreezePt from '../../data/refreeze.pt.json';
import whatHappensEs from '../../data/what-happens.es.json';
import whatHappensPt from '../../data/what-happens.pt.json';
import whatHappensZh from '../../data/what-happens.zh-cn.json';
import whatHappensJa from '../../data/what-happens.ja.json';
import comparisonsEs from '../../data/comparisons.es.json';
import comparisonsPt from '../../data/comparisons.pt.json';
import blogEs from '../../data/blog.es.json';
import blogPt from '../../data/blog.pt.json';
import itemsZh from '../../data/items.zh-cn.json';
import itemsJa from '../../data/items.ja.json';

export function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'pt' } },
    { params: { lang: 'zh-cn' } },
    { params: { lang: 'ja' } }
  ];
}

function formatCategory(app: string, lang: string) {
  if (lang === 'es') {
    if (app === 'dishwasher') return 'Lavavajillas';
    if (app === 'microwave') return 'Microondas';
    if (app === 'oven') return 'Horno';
    if (app === 'freezer') return 'Congelador';
    if (app === 'dryer') return 'Secadora';
    if (app === 'airfryer') return 'Freidora de Aire';
    if (app === 'refrigerator') return 'Refrigerador';
    if (app === 'washing-machine') return 'Lavadora';
    if (app === 'how-long') return 'Conservación';
    if (app === 'refreeze') return 'Recongelación';
    if (app === 'what-happens') return 'Qué Pasa Si...';
    if (app === 'compare') return 'Comparar';
    if (app === 'blog') return 'Blog';
  } else if (lang === 'pt') {
    if (app === 'dishwasher') return 'Lava-Louças';
    if (app === 'microwave') return 'Micro-ondas';
    if (app === 'oven') return 'Forno';
    if (app === 'freezer') return 'Freezer';
    if (app === 'dryer') return 'Secadora';
    if (app === 'airfryer') return 'Fritadeira sem Óleo';
    if (app === 'refrigerator') return 'Geladeira';
    if (app === 'washing-machine') return 'Máquina de Lavar';
    if (app === 'how-long') return 'Conservação';
    if (app === 'refreeze') return 'Recongelamento';
    if (app === 'what-happens') return 'O Que Acontece Se...';
    if (app === 'compare') return 'Comparar';
    if (app === 'blog') return 'Blog';
  } else if (lang === 'zh-cn') {
    if (app === 'dishwasher') return '洗碗机';
    if (app === 'microwave') return '微波炉';
    if (app === 'oven') return '烤箱';
    if (app === 'freezer') return '冷冻室';
    if (app === 'dryer') return '烘干机';
    if (app === 'airfryer') return '空气炸锅';
    if (app === 'refrigerator') return '冰箱冷藏室';
    if (app === 'washing-machine') return '洗衣机';
    if (app === 'how-long') return '保质期';
    if (app === 'refreeze') return '二次冷冻';
    if (app === 'what-happens') return '会发生什么';
    if (app === 'compare') return '物品对比';
    if (app === 'blog') return '博客';
  } else if (lang === 'ja') {
    if (app === 'dishwasher') return '食洗機';
    if (app === 'microwave') return '電子レンジ';
    if (app === 'oven') return 'オーブン';
    if (app === 'freezer') return '冷凍庫';
    if (app === 'dryer') return '乾燥機';
    if (app === 'airfryer') return 'ノンフライヤー';
    if (app === 'refrigerator') return '冷蔵庫';
    if (app === 'washing-machine') return '洗濯機';
    if (app === 'how-long') return '保存期間';
    if (app === 'refreeze') return '再冷凍';
    if (app === 'what-happens') return 'どうなる？';
    if (app === 'compare') return '比較';
    if (app === 'blog') return 'ブログ';
  }
  return app.charAt(0).toUpperCase() + app.slice(1);
}

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as string;
  const isEs = lang === 'es';
  const isPt = lang === 'pt';
  const isZh = lang === 'zh-cn';
  const isJa = lang === 'ja';

  const rawPrimaryItems = isEs 
    ? [...itemsEs, ...washingMachineEs] 
    : isPt 
    ? [...itemsPt, ...washingMachinePt]
    : lang === 'zh-cn'
    ? itemsZh
    : lang === 'ja'
    ? itemsJa
    : [];

  const primarySearchItems = rawPrimaryItems.map(item => {
    const category = formatCategory(item.appliance, lang);
    const keywords = [
      item.slug.replace(/-/g, ' '),
      item.appliance,
      category,
      item.material || '',
      item.item
    ].join(' ').toLowerCase();

    return {
      name: item.item,
      category,
      url: `/${lang}/${item.appliance}/${item.slug}/`,
      keywords
    };
  });

  const rawHowLong = isEs ? howLongEs : isPt ? howLongPt : [];
  const howLongSearchItems = rawHowLong.map(item => {
    const category = formatCategory('how-long', lang);
    return {
      name: `${item.item} (${category})`,
      category,
      url: `/${lang}/how-long/${item.slug}/`,
      keywords: [item.slug.replace(/-/g, ' '), item.item, category, item.location].join(' ').toLowerCase()
    };
  });

  const rawRefreeze = isEs ? refreezeEs : isPt ? refreezePt : [];
  const refreezeSearchItems = rawRefreeze.map(item => {
    const category = formatCategory('refreeze', lang);
    return {
      name: `${item.item} (${category})`,
      category,
      url: `/${lang}/refreeze/${item.slug}/`,
      keywords: [item.slug.replace(/-/g, ' '), item.item, category].join(' ').toLowerCase()
    };
  });

  const rawWhatHappens = isEs ? whatHappensEs : isPt ? whatHappensPt : isZh ? whatHappensZh : isJa ? whatHappensJa : [];
  const whatHappensSearchItems = rawWhatHappens.map(item => {
    const category = formatCategory('what-happens', lang);
    return {
      name: item.item,
      category,
      url: `/${lang}/what-happens/${item.slug}/`,
      keywords: [item.slug.replace(/-/g, ' '), item.item, category].join(' ').toLowerCase()
    };
  });

  const rawComparisons = isEs ? comparisonsEs : isPt ? comparisonsPt : [];
  const comparisonsSearchItems = rawComparisons.map(item => {
    const category = formatCategory('compare', lang);
    return {
      name: `${item.item1} vs ${item.item2}`,
      category,
      url: `/${lang}/compare/${item.slug}/`,
      keywords: [item.item1, item.item2, item.slug.replace(/-/g, ' '), category, 'vs'].join(' ').toLowerCase()
    };
  });

  const rawBlog = isEs ? blogEs : isPt ? blogPt : [];
  const blogSearchItems = rawBlog.map(item => {
    const category = formatCategory('blog', lang);
    return {
      name: item.title,
      category,
      url: `/${lang}/blog/${item.slug}/`,
      keywords: [item.title, item.slug.replace(/-/g, ' '), category, 'guía', 'dicas', 'tips'].join(' ').toLowerCase()
    };
  });

  const searchItems = [
    ...primarySearchItems,
    ...howLongSearchItems,
    ...refreezeSearchItems,
    ...whatHappensSearchItems,
    ...comparisonsSearchItems,
    ...blogSearchItems
  ];

  return new Response(JSON.stringify(searchItems), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=31536000, immutable'
    }
  });
};
