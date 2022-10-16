import i18next, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { api } from './lib/axios';

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

i18next.on('languageChanged', (language) => {
  const db = language === 'pt-BR' ? 'pt' : 'en';

  if (process.env.NODE_ENV === 'development') {
    api.defaults.baseURL = `http://localhost:333${db === 'pt' ? '3' : '4'}`;
  } else {
    api.defaults.baseURL = `https://my-json-server.typicode.com/fell-lucas/react-ignite-2022-dt-money-db-${db}`;
  }
});
