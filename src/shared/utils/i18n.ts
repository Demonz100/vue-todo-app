import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import km from "@/locales/km.json";

let currentLocale = localStorage.getItem("setLocale") || import.meta.env.VITE_APP_I18N_LOCALE || "en"

export const getSupportedLocale = import.meta.env.VITE_APP_I18N_SUPPORTED_LOCALE.split(",")

const i18n = createI18n({
  locale: currentLocale,
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || "en",

  messages: {
    en: en,
    km: km,
  }
});
export default i18n;
