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

function getRedirectSourceSet() {
  const sources = new Set();
  const redirectsFile = path.resolve(process.cwd(), 'redirects.json');
  try {
    if (fs.existsSync(redirectsFile)) {
      const list = JSON.parse(fs.readFileSync(redirectsFile, 'utf8'));
      for (const item of list) {
        if (item.source && item.target) {
          const cleanSrc = item.source.trim().replace(/\/+$/, '').toLowerCase();
          const cleanTgt = item.target.trim().replace(/\/+$/, '').toLowerCase();
          // Exclude if it redirects to a different target (not just a trailing slash normalization)
          if (cleanSrc && cleanSrc !== cleanTgt) {
            sources.add(cleanSrc);
            sources.add(`${cleanSrc}/`);
          }
        }
      }
    }
  } catch {}
  return sources;
}

const redirectSourceSet = getRedirectSourceSet();

function getWhatHappensNoindexSet() {
  const slugs = new Set();
  const file = path.resolve(process.cwd(), 'src/data/whatHappensNoindex.json');
  try {
    if (fs.existsSync(file)) {
      const list = JSON.parse(fs.readFileSync(file, 'utf8'));
      for (const s of list) {
        slugs.add(s.toLowerCase().trim());
      }
    }
  } catch {}
  return slugs;
}

const whatHappensNoindexSet = getWhatHappensNoindexSet();

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
      filter(page) {
        try {
          const pathname = new URL(page).pathname.toLowerCase();
          if (redirectSourceSet.has(pathname)) return false;
          const cleanPath = pathname.replace(/\/+$/, '');
          if (cleanPath && redirectSourceSet.has(cleanPath)) return false;

          // Exclude noindexed what-happens scenarios for en, es, pt (ja/zh are exempt)
          const match = pathname.match(/^(?:\/(?:es|pt))?\/what-happens\/([^/]+)\/?$/);
          if (match && whatHappensNoindexSet.has(match[1])) {
            return false;
          }
        } catch {}
        return true;
      },
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
