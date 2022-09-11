//I18next is the core of the i18n functionality while react-i18next extends and glues it to react.
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// for passing in lng and translations on init

i18n // load translation using http -> see /public/locales
  .use(Backend) // detect user language
  .use(LanguageDetector) // pass the i18n instance to react-i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en', //if no language is detected from the user's side
    lng: 'en', //default langauge for the website

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;