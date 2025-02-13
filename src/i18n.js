// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import resources from "./assets/dictions.json";

// i18n.use(initReactI18next).init({
//   resources,
//   lng: "en",

//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Where in the world?": "Where in the world?",
      },
    },
    uz: {
      translation: {
        "Where in the world?": "Dunyoda qayerdasiz?",
      },
    },
    // boshqa tillar
  },
  lng: "en", // default til
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // XSS uchun
  },
});

export default i18n;
