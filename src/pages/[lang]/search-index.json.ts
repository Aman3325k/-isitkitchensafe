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

export function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'pt' } }
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
  }
  return app.charAt(0).toUpperCase() + app.slice(1);
}

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as 'es' | 'pt';
  const isEs = lang === 'es';

  const rawPrimaryItems = isEs 
    ? [...itemsEs, ...washingMachineEs] 
    : [...itemsPt, ...washingMachinePt];

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

  const rawHowLong = isEs ? howLongEs : howLongPt;
  const howLongSearchItems = rawHowLong.map(item => {
    const category = formatCategory('how-long', lang);
    return {
      name: `${item.item} (${category})`,
      category,
      url: `/${lang}/how-long/${item.slug}/`,
      keywords: [item.slug.replace(/-/g, ' '), item.item, category, item.location].join(' ').toLowerCase()
    };
  });

  const rawRefreeze = isEs ? refreezeEs : refreezePt;
  const refreezeSearchItems = rawRefreeze.map(item => {
    const category = formatCategory('refreeze', lang);
    return {
      name: `${item.item} (${category})`,
      category,
      url: `/${lang}/refreeze/${item.slug}/`,
      keywords: [item.slug.replace(/-/g, ' '), item.item, category].join(' ').toLowerCase()
    };
  });

  const rawWhatHappens = isEs ? whatHappensEs : whatHappensPt;
  const whatHappensSearchItems = rawWhatHappens.map(item => {
    const category = formatCategory('what-happens', lang);
    return {
      name: item.item,
      category,
      url: `/${lang}/what-happens/${item.slug}/`,
      keywords: [item.slug.replace(/-/g, ' '), item.item, category].join(' ').toLowerCase()
    };
  });

  const searchItems = [
    ...primarySearchItems,
    ...howLongSearchItems,
    ...refreezeSearchItems,
    ...whatHappensSearchItems
  ];

  return new Response(JSON.stringify(searchItems), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=31536000, immutable'
    }
  });
};
