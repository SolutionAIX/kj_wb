import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './assets/language/en.json';
import ruTranslations from './assets/language/ru.json';

const resources = {
	en: {
	  translation: enTranslations
	},
	ru: {
	  translation: ruTranslations
	}
  };

const language = localStorage.getItem('i18nextLng') || 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: language, 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
