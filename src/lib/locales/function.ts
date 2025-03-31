import translations from "@/lib/locales/trad";

// Define the type for the translations object
interface Translations {
  [locale: string]: {
    [key: string]: string;
  };
}

// Ensure the translations are of the correct type
const translations: Translations = require('@/lib/locales/trad').default;

export default function translate(key: keyof Translations[string]): string {
  let locale: string = navigator.language?.split("-")[0] || "en";
  
  if (!translations[locale]) {
    locale = "en"; // fallback to English if the locale is not found
  }

  return translations[locale][key] || key; // return key if translation doesn't exist
}