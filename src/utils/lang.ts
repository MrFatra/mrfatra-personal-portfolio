import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = import.meta.env.VITE_i18Nexus_KEY;
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

const userLanguage = navigator.language.split('-')[0];

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: userLanguage,
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","id"],
    
    backend: {
      loadPath: loadPath
    }
  })