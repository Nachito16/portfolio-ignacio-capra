import { localePath, localeCodes, type Locale } from "@/i18n/config";

/**
 * Site-wide configuration used for metadata, SEO and canonical URLs.
 * Set NEXT_PUBLIC_SITE_URL to the production domain.
 */
export const siteConfig = {
  name: "Ignacio Capra",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  themeColor: "#F2F3EF",
  title: {
    en: "Ignacio Capra | Software Developer",
    es: "Ignacio Capra | Desarrollador de Software",
  },
  description: {
    en: "Software Developer specializing in web applications, enterprise solutions and business process automation.",
    es: "Desarrollador de software especializado en aplicaciones web, soluciones empresariales y automatización de procesos de negocio.",
  },
} as const satisfies { title: Record<Locale, string>; description: Record<Locale, string> } & Record<string, unknown>;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Canonical URL plus hreflang alternates for a path that exists in every language. */
export function alternatesFor(locale: Locale, path = "/") {
  return {
    canonical: localePath(locale, path),
    languages: {
      ...Object.fromEntries(localeCodes.map((code) => [code, localePath(code, path)])),
      "x-default": localePath("en", path),
    },
  };
}
