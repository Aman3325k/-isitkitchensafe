import { ui, defaultLang, languages, type SupportedLanguage, type UIKey } from './ui';
import itemsEs from '../data/items.es.json';
import itemsPt from '../data/items.pt.json';

const esSlugs = new Set(itemsEs.map(i => `${i.appliance}/${i.slug}`));
const ptSlugs = new Set(itemsPt.map(i => `${i.appliance}/${i.slug}`));

const esAppliances = new Set(itemsEs.map(i => i.appliance));
const ptAppliances = new Set(itemsPt.map(i => i.appliance));

/**
 * Checks whether an appliance vertical has translated content in the given locale.
 */
export function isApplianceTranslatedInLocale(appliance: string, lang: SupportedLanguage): boolean {
  if (lang === 'en') return true;
  if (lang === 'es') return esAppliances.has(appliance);
  if (lang === 'pt') return ptAppliances.has(appliance);
  return false;
}

/**
 * Checks whether an item page is translated in the given locale.
 */
export function isItemTranslatedInLocale(appliance: string, slug: string, lang: SupportedLanguage): boolean {
  if (lang === 'en') return true;
  const key = `${appliance}/${slug}`;
  if (lang === 'es') return esSlugs.has(key);
  if (lang === 'pt') return ptSlugs.has(key);
  return false;
}

/**
 * Returns the proper URL for an appliance hub page.
 * If the appliance is translated in `lang`, returns `/es/:appliance/` or `/pt/:appliance/`.
 * If not translated, falls back cleanly to the canonical English hub `/:appliance/`.
 */
export function getApplianceUrl(appliance: string, lang: SupportedLanguage = 'en'): string {
  if (lang === 'en' || !isApplianceTranslatedInLocale(appliance, lang)) {
    return `/${appliance}/`;
  }
  return `/${lang}/${appliance}/`;
}

const esDirectories = new Set<string>([]);
const ptDirectories = new Set<string>([]);

/**
 * Checks whether a safety directory section has translated content in the given locale.
 */
export function isDirectoryTranslatedInLocale(section: string, lang: SupportedLanguage): boolean {
  if (lang === 'en') return true;
  const clean = section.replace(/^\/+|\/+$/g, '');
  if (lang === 'es') return esDirectories.has(clean);
  if (lang === 'pt') return ptDirectories.has(clean);
  return false;
}

/**
 * Returns the proper URL for a safety directory section.
 * If the section is translated in `lang`, returns `/${lang}/${clean}`.
 * If not translated, falls back cleanly to the canonical English directory `/${clean}`.
 */
export function getDirectoryUrl(section: string, lang: SupportedLanguage = 'en'): string {
  const clean = section.replace(/^\/+|\/+$/g, '');
  if (lang === 'en' || !isDirectoryTranslatedInLocale(clean, lang)) {
    return `/${clean}`;
  }
  return `/${lang}/${clean}`;
}

/**
 * Extracts the current locale from a URL pathname.
 * E.g. /es/dishwasher/hydroflask -> 'es', /dishwasher/hydroflask -> 'en'
 */
export function getLangFromUrl(url: URL | { pathname: string }): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Returns a translation function for the given language.
 */
export function useTranslations(lang: SupportedLanguage) {
  return function t(key: UIKey): string {
    const langDict = ui[lang];
    if (langDict && key in langDict) {
      return (langDict as Record<string, string>)[key];
    }
    return (ui[defaultLang] as Record<string, string>)[key] || key;
  };
}

/**
 * Strips the language prefix from a pathname to get the base path.
 * E.g. /es/dishwasher/hydroflask/ -> /dishwasher/hydroflask/
 * /dishwasher/hydroflask/ -> /dishwasher/hydroflask/
 */
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in ui) {
    const stripped = '/' + segments.slice(1).join('/');
    return stripped === '' ? '/' : (pathname.endsWith('/') && !stripped.endsWith('/') ? stripped + '/' : stripped);
  }
  return pathname;
}

/**
 * Generates the valid localized URL for LanguagePicker and hreflang with homepage fallback.
 * If targetLang has a page for this pathname (homepage, translated appliance hub, or translated item),
 * returns that exact URL. Otherwise falls back to that locale's homepage (e.g. /es/, /pt/).
 */
export function getLocalizedUrl(pathname: string, targetLang: SupportedLanguage): string {
  const basePath = getPathWithoutLocale(pathname);
  const segments = basePath.split('/').filter(Boolean);

  // 404 page fallback: always link to target locale homepage
  if (segments[0] === '404' || segments[0] === '404.html') {
    return targetLang === defaultLang ? '/' : `/${targetLang}/`;
  }

  if (targetLang === defaultLang) {
    // English has 100% coverage of all pages and hubs
    if (segments.length === 0) return '/';
    return '/' + segments.join('/') + '/';
  }

  // Target is non-default locale (es, pt)
  if (segments.length === 0) {
    return `/${targetLang}/`;
  }

  const [first, second] = segments;

  if (segments.length === 1) {
    // Appliance hub check (e.g. /dishwasher/)
    if (isApplianceTranslatedInLocale(first, targetLang)) {
      return `/${targetLang}/${first}/`;
    }
    // Untranslated appliance or untranslated section -> fallback to locale homepage
    return `/${targetLang}/`;
  }

  if (segments.length === 2) {
    // Item check (e.g. /dishwasher/hydroflask/)
    if (isItemTranslatedInLocale(first, second, targetLang)) {
      return `/${targetLang}/${first}/${second}/`;
    }
    // Untranslated item -> fallback to locale homepage
    return `/${targetLang}/`;
  }

  // Any deeper untranslated subpath -> fallback to locale homepage
  return `/${targetLang}/`;
}

/**
 * Helper to build localized URLs respecting prefixDefaultLocale: false
 */
export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(path: string, targetLang?: SupportedLanguage): string {
    const l = targetLang || lang;
    return getLocalizedUrl(path, l);
  };
}

/**
 * Returns the grammatically correct preposition + article + appliance name for each locale.
 */
export function getApplianceIn(appliance: string, lang: SupportedLanguage = 'en'): string {
  const norm = (appliance || '').toLowerCase().replace(/[-_\s]/g, '');

  const map: Record<SupportedLanguage, Record<string, string>> = {
    en: {
      dishwasher: 'in the Dishwasher',
      microwave: 'in the Microwave',
      freezer: 'in the Freezer',
      oven: 'in the Oven',
      dryer: 'in the Dryer',
      airfryer: 'in the Air Fryer',
      refrigerator: 'in the Refrigerator',
      washingmachine: 'in the Washing Machine',
    },
    es: {
      dishwasher: 'en el Lavavajillas',
      microwave: 'en el Microondas',
      freezer: 'en el Congelador',
      oven: 'en el Horno',
      dryer: 'en la Secadora',
      airfryer: 'en la Freidora de Aire',
      refrigerator: 'en el Refrigerador',
      washingmachine: 'en la Lavadora',
    },
    pt: {
      dishwasher: 'na Lava-Louças',
      microwave: 'no Micro-ondas',
      freezer: 'no Freezer',
      oven: 'no Forno',
      dryer: 'na Secadora',
      airfryer: 'na Fritadeira sem Óleo',
      refrigerator: 'na Geladeira',
      washingmachine: 'na Máquina de Lavar',
    },
  };

  if (map[lang]?.[norm]) {
    return map[lang][norm];
  }
  return `in the ${appliance}`;
}
