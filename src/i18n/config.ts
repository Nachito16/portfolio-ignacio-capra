/**
 * Locale configuration.
 *
 * English is served without a prefix ("/", "/projects/…") and Spanish under "/es".
 * `src/proxy.ts` rewrites unprefixed URLs to the internal `/en` segment, so every route
 * lives under `app/[locale]`.
 */
export const locales = [
  { code: "en", label: "EN", name: "English", ogLocale: "en_US", enabled: true },
  { code: "es", label: "ES", name: "Español", ogLocale: "es_UY", enabled: true },
] as const;

export type Locale = (typeof locales)[number]["code"];

export const defaultLocale: Locale = "en";

export const localeCodes = locales.map((locale) => locale.code) as Locale[];

export function isLocale(value: string): value is Locale {
  return (localeCodes as string[]).includes(value);
}

/** Public URL for a path in a locale: "/projects/x" → "/es/projects/x" for Spanish. */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  if (clean === "/") return `/${locale}`;
  if (clean.startsWith("/#")) return `/${locale}${clean.slice(1)}`;
  return `/${locale}${clean}`;
}

/**
 * Splits a path into locale and locale-free path: "/es/projects/x" → es + "/projects/x".
 * Also strips the internal "/en" prefix, which is what server rendering sees after the proxy rewrite.
 */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  for (const code of localeCodes) {
    if (pathname === `/${code}`) return { locale: code, path: "/" };
    if (pathname.startsWith(`/${code}/`)) return { locale: code, path: pathname.slice(code.length + 1) };
  }
  return { locale: defaultLocale, path: pathname };
}

/** Request header carrying the resolved locale; set by src/proxy.ts, read by app/global-not-found.tsx. */
export const LOCALE_HEADER = "x-portfolio-locale";
