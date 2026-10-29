import type { MetadataRoute } from "next";
import { projects } from "@/content/catalog";
import { locales } from "@/lib/locale";
import { homePath, pageIds, pagePath, projectPath } from "@/lib/routes";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = locales.flatMap((locale) => [
    homePath(locale),
    ...pageIds.map((id) => pagePath(locale, id)),
    ...projects.map((project) => projectPath(locale, project.slug)),
  ]);

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: "2026-10-29",
    changeFrequency: "weekly",
    priority: path === "/fi" || path === "/en" ? 1 : 0.7,
  }));
}
