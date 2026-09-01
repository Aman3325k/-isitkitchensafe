import { ui, defaultLang, languages, type SupportedLanguage, type UIKey } from './ui';

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
 * Helper to build localized URLs respecting prefixDefaultLocale: false
 */
export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(path: string, targetLang?: SupportedLanguage): string {
    const l = targetLang || lang;
    const cleanPath = getPathWithoutLocale(path);
    if (l === defaultLang) {
      return cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath;
    }
    const normalized = cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath;
    return `/${l}${normalized === '/' ? '/' : normalized}`;
  };
}

/**
 * Returns the grammatically correct preposition + article + appliance name for each locale.
 * E.g.
 * en: 'dishwasher' -> 'in the Dishwasher'
 * es: 'dishwasher' -> 'en el Lavavajillas'
 * es: 'dryer'      -> 'en la Secadora'
 * pt: 'dishwasher' -> 'na Lava-Louças'
 * pt: 'microwave'  -> 'no Micro-ondas'
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
