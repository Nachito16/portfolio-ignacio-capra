import type { Locale } from "@/i18n/config";

/** A string in every supported language. */
export type Text = Record<Locale, string>;

/**
 * Builds locale-specific content from one definition, so shared values (URLs, images, dates)
 * are written once and every string sits next to its translation.
 */
export function localized<T>(build: (t: (text: Text) => string, locale: Locale) => T): (locale: Locale) => T {
  return (locale) => build((text) => text[locale], locale);
}
