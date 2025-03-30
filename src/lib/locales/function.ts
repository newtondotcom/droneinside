import translations from "@/lib/locales/trad";

export default function translate(key: string) {
  let locale;
  if (navigator.language === undefined) {
    locale = "en";
  } else {
    locale = navigator.language.split("-")[0] || "en";
  }
  return translations[locale][key] || key;
}
