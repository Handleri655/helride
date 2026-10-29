export const locales = ["fi", "en"] as const;

export type Locale = (typeof locales)[number];

export function hasLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function tx<T>(locale: Locale, value: Record<Locale, T>): T {
  return value[locale];
}
