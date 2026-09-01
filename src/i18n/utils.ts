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
