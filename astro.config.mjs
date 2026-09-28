import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import fs from 'node:fs';
import path from 'node:path';

function getBuildLastmod() {
  const dataDir = path.resolve(process.cwd(), 'src/data');
  let maxTime = 0;
  try {
    if (fs.existsSync(dataDir)) {
      const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json') && !f.includes('redirects'));
      files.forEach(file => {
        try {
          const stats = fs.statSync(path.join(dataDir, file));
          if (stats.mtimeMs > maxTime) maxTime = stats.mtimeMs;
        } catch {}
      });
    }
  } catch {}
  return maxTime > 0 ? new Date(maxTime).toISOString() : new Date().toISOString();
}

const dataLastmod = getBuildLastmod();

// https://astro.build/config
export default defineConfig({
  site: 'https://isitkitchensafe.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
    concurrency: 12,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'zh-cn', 'ja'],
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
          'zh-cn': 'zh-CN',
          ja: 'ja',
        },
      },
      serialize(item) {
        item.lastmod = dataLastmod;
        return item;
      },
    }),
    {
      name: 'copy-sitemap-index',
      hooks: {
        'astro:build:done': async () => {
          const sitemapIndex = path.resolve(process.cwd(), 'dist/sitemap-index.xml');
          const sitemap = path.resolve(process.cwd(), 'dist/sitemap.xml');
          try {
            if (fs.existsSync(sitemapIndex)) {
              fs.copyFileSync(sitemapIndex, sitemap);
            }
          } catch {}
        },
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
