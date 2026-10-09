import type { Dictionary } from "@/i18n/dictionaries";

export const navSections = ["about", "experience", "work", "skills", "contact"] as const;

export type NavSection = (typeof navSections)[number];

export function getNavItems(dict: Dictionary) {
  return navSections.map((id) => ({ id, label: dict.nav[id], href: `/#${id}` }));
}
