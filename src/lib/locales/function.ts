import translations from "@/lib/locales/trad";

export default function translate(key: string): string {
  //const browserLanguage = navigator.language?.toString().split("-")[0] || "en";
  const locale: string = "fr";
  /*
  if (browserLanguage && translations.hasOwnProperty(browserLanguage)) {
    locale = browserLanguage;
  }
  */

  // @ts-expect-error  (Ignore potential "no index signature" errors)
  return translations[locale][key] || key;
}
