import type { Locale } from "@/i18n/config";
import type { Project } from "../types";
import { beachHandstats } from "./beach-handstats";
import { handstats } from "./handstats";
import { sens } from "./sens";

/**
 * Projects in display order. Each project file defines English and Spanish content side by side.
 * Screenshots live under /public/images/projects/<slug>/; media needs `src`, `width` and `height`.
 */
const builders = [handstats, beachHandstats, sens];

export const projectSlugs = ["handstats", "beach-handstats", "sens"] as const;

export function getProjects(locale: Locale): Project[] {
  return builders.map((build) => build(locale));
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getNextProject(locale: Locale, slug: string): Project {
  const projects = getProjects(locale);
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
