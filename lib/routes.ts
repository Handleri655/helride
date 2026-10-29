import { projects } from "@/content/catalog";
import { locales, type Locale } from "@/lib/locale";

export const pageIds = [
  "events",
  "school",
  "projects",
  "membership",
  "about",
  "spots",
  "safer",
  "join",
  "contact",
  "privacy",
  "accessibility",
] as const;

export type PageId = (typeof pageIds)[number];

export const pageSlugs: Record<Locale, Record<PageId, string>> = {
  fi: {
    events: "tapahtumat",
    school: "skeittikoulu",
    projects: "projektit",
    membership: "jasenyys",
    about: "meista",
    spots: "spotit",
    safer: "turvallisempi-tila",
    join: "tule-mukaan",
    contact: "yhteys",
    privacy: "tietosuoja",
    accessibility: "saavutettavuus",
  },
  en: {
    events: "events",
    school: "skate-school",
    projects: "projects",
    membership: "membership",
    about: "about",
    spots: "spots",
    safer: "safer-space",
    join: "join",
    contact: "contact",
    privacy: "privacy",
    accessibility: "accessibility",
  },
};

export function homePath(locale: Locale) {
  return `/${locale}`;
}

export function pagePath(locale: Locale, page: PageId) {
  return `/${locale}/${pageSlugs[locale][page]}`;
}

export function projectPath(locale: Locale, slug: string) {
  return `${pagePath(locale, "projects")}/${slug}`;
}

export function pageIdFromSlug(locale: Locale, slug: string): PageId | undefined {
  return pageIds.find((id) => pageSlugs[locale][id] === slug);
}

export function findPageId(segment: string): PageId | undefined {
  for (const locale of locales) {
    const id = pageIdFromSlug(locale, segment);
    if (id) return id;
  }
  return undefined;
}

export type Resolved =
  | { kind: "page"; id: PageId; redirectTo?: string }
  | { kind: "project"; slug: string; redirectTo?: string }
  | { kind: "missing" };

export function resolveSlug(locale: Locale, slug: string[]): Resolved {
  if (slug.length === 2) {
    const [section, projectSlug] = slug;
    const project = projects.find((item) => item.slug === projectSlug);
    const knownSection = locales.some((item) => pageSlugs[item].projects === section);
    if (!project || !knownSection) return { kind: "missing" };
    const canonical = projectPath(locale, project.slug);
    const current = `/${locale}/${section}/${projectSlug}`;
    return {
      kind: "project",
      slug: project.slug,
      redirectTo: current === canonical ? undefined : canonical,
    };
  }

  if (slug.length !== 1) return { kind: "missing" };

  const id = findPageId(slug[0]);
  if (!id) return { kind: "missing" };
  const canonical = pagePath(locale, id);
  const current = `/${locale}/${slug[0]}`;
  return {
    kind: "page",
    id,
    redirectTo: current === canonical ? undefined : canonical,
  };
}

export function staticSlugParams() {
  const params: { locale: Locale; slug: string[] }[] = [];

  for (const locale of locales) {
    for (const id of pageIds) {
      for (const source of locales) {
        params.push({ locale, slug: [pageSlugs[source][id]] });
      }
    }

    for (const project of projects) {
      for (const source of locales) {
        params.push({
          locale,
          slug: [pageSlugs[source].projects, project.slug],
        });
      }
    }
  }

  return params;
}

export function switchLocale(pathname: string, target: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  const current = parts[0];
  if (current !== "fi" && current !== "en") return homePath(target);
  if (parts.length === 1) return homePath(target);

  const resolved = resolveSlug(current, parts.slice(1));
  if (resolved.kind === "page") return pagePath(target, resolved.id);
  if (resolved.kind === "project") return projectPath(target, resolved.slug);
  return homePath(target);
}
