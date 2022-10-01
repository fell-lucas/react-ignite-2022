import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export default use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['home'],
    defaultNS: 'home',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
