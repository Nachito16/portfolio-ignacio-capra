import type { MetadataRoute } from "next";
import { projectSlugs } from "@/data/projects";
import { localeCodes, localePath } from "@/i18n/config";
import { absoluteUrl } from "@/lib/site";

/** Every page in every language, each listing its translations as hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...projectSlugs.map((slug) => `/projects/${slug}`)];

  return paths.flatMap((path) =>
    localeCodes.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(localeCodes.map((code) => [code, absoluteUrl(localePath(code, path))])),
      },
    })),
  );
}
