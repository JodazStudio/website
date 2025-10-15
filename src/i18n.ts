import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend, { HttpBackendOptions } from 'i18next-http-backend';

void i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init<HttpBackendOptions>({
    supportedLngs: ['en', 'es'],
    lng: 'en',
    fallbackLng: 'en',
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
      // Add cache-busting query parameter
      queryStringParams: { v: Date.now().toString() }, // Forces fresh fetch on each load
      // OR use custom request options to disable cache
      requestOptions: {
        cache: 'no-store', // Fetch API cache mode
      },
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
    ns: ['common'],
  });

export default i18n;
