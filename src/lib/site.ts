/**
 * Site-wide configuration used for metadata, SEO and canonical URLs.
 * Set NEXT_PUBLIC_SITE_URL once the final domain is decided.
 */
export const siteConfig = {
  name: "Ignacio Capra",
  title: "Ignacio Capra | Software Developer",
  description:
    "Software Developer specializing in web applications, enterprise solutions and business process automation.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_US",
  themeColor: "#F2F3EF",
} as const;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
