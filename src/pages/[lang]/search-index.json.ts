import type { APIRoute } from 'astro';
import itemsEs from '../../data/items.es.json';
import itemsPt from '../../data/items.pt.json';

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
  } else if (lang === 'pt') {
    if (app === 'dishwasher') return 'Lava-Louças';
    if (app === 'microwave') return 'Micro-ondas';
  }
  return app.charAt(0).toUpperCase() + app.slice(1);
}

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as 'es' | 'pt';
  const rawItems = lang === 'es' ? itemsEs : itemsPt;

  const searchItems = rawItems.map(item => {
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

  return new Response(JSON.stringify(searchItems), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=31536000, immutable'
    }
  });
};
