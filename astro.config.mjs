import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import fs from 'node:fs';
import path from 'node:path';

function getBuildLastmod() {
  const files = [
    'src/data/items.json',
    'src/data/items.es.json',
    'src/data/items.pt.json',
    'src/data/how-long.json',
    'src/data/refreeze.json',
    'src/data/washing-machine.json',
    'src/data/what-happens.json'
  ];
  let maxTime = 0;
  files.forEach(file => {
    try {
      const fullPath = path.resolve(process.cwd(), file);
      if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        if (stats.mtimeMs > maxTime) maxTime = stats.mtimeMs;
      }
    } catch {}
  });
  return maxTime > 0 ? new Date(maxTime).toISOString() : new Date().toISOString();
}

const dataLastmod = getBuildLastmod();

// https://astro.build/config
export default defineConfig({
  site: 'https://isitkitchensafe.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          pt: 'pt',
        },
      },
      serialize(item) {
        item.lastmod = dataLastmod;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
