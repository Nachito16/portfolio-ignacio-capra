/**
 * Locale configuration.
 *
 * English is the only enabled locale for now. To add Spanish:
 *  1. Create `dictionaries/es.ts` implementing `Dictionary`.
 *  2. Register it in `dictionaries/index.ts`.
 *  3. Set `enabled: true` below and add the routing strategy
 *     (e.g. an `app/[locale]` segment).
 */
export const locales = [
  { code: "en", label: "EN", name: "English", enabled: true },
  { code: "es", label: "ES", name: "Español", enabled: false },
] as const;

export type Locale = (typeof locales)[number]["code"];

export const defaultLocale: Locale = "en";
