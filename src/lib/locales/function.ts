import translations from "@/lib/locales/trad";

// Define the shape of your translations
interface Translations {
  [locale: string]: {
    [key: string]: string;
  };
}

// Type-safe parameter handling
interface TranslationParams {
  [key: string]: string | number;
}

export default function translate(
  key: string,
  params?: TranslationParams,
  locale: string = "fr", // Default to French
): string {
  // Safely access the translation
  const translation = (translations as Translations)[locale]?.[key] || key;

  // Replace parameters if provided
  if (params) {
    return Object.entries(params).reduce((result, [paramKey, paramValue]) => {
      return result.replace(`{${paramKey}}`, String(paramValue));
    }, translation);
  }

  return translation;
}
