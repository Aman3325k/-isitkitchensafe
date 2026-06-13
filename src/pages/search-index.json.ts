import itemsData from '../data/items.json';
import howLongData from '../data/how-long.json';
import washingMachineData from '../data/washing-machine.json';
import refreezeData from '../data/refreeze.json';
import whatHappensData from '../data/what-happens.json';

function formatAppliance(app: string) {
  if (app === 'airfryer') return 'Air Fryer';
  if (app === 'how-long') return 'Shelf Life';
  if (app === 'washing-machine') return 'Washing Machine';
  if (app === 'refreeze') return 'Refreeze Safety';
  if (app === 'what-happens') return 'What Happens If';
  return app.charAt(0).toUpperCase() + app.slice(1);
}

const searchItems = [
  ...itemsData.map(item => ({
    name: item.item,
    category: formatAppliance(item.appliance),
    url: `/${item.appliance}/${item.slug}`
  })),
  ...howLongData.map(item => ({
    name: `${item.item} Shelf Life`,
    category: 'Shelf Life',
    url: `/how-long/${item.slug}`
  })),
  ...washingMachineData.map(item => ({
    name: `${item.item} Washing`,
    category: 'Washing Machine',
    url: `/washing-machine/${item.slug}`
  })),
  ...refreezeData.map(item => ({
    name: `${item.item} Refreezing`,
    category: 'Refreeze Safety',
    url: `/refreeze/${item.slug}`
  })),
  ...whatHappensData.map(item => ({
    name: item.item,
    category: 'What Happens If',
    url: `/what-happens/${item.slug}`
  }))
];

export async function GET() {
  return new Response(JSON.stringify(searchItems), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=31536000, immutable'
    }
  });
}
