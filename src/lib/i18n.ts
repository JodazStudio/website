import en from '../../public/locales/en/common.json';
import es from '../../public/locales/es/common.json';

const translations = { en, es } as const;

export type Lang = 'en' | 'es';

/** localStorage key for the user's explicitly chosen language */
export const PREFERRED_LANG_KEY = 'preferred_lang' as const;

export function getLang(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: string, fallback?: string): string {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    if (value === undefined || value === null) {
      const enValue = keys.reduce((acc: unknown, k: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (acc as any)?.[k];
      }, translations['en'] as unknown);
      return (enValue as string) ?? fallback ?? key;
    }
    return value as string;
  };
}

export function getStaticI18nPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'es' } },
  ];
}
