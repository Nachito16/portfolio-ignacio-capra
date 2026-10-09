import type { Locale } from "../config";
import { en, type Dictionary } from "./en";

const dictionaries: Partial<Record<Locale, Dictionary>> = { en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };
