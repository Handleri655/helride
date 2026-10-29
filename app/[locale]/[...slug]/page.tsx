import { notFound, redirect } from "next/navigation";
import { RenderPage } from "@/components/pages/render";
import { ProjectDetail } from "@/components/pages/projects";
import { projects } from "@/content/catalog";
import { pageSeo } from "@/content/meta";
import { hasLocale, tx } from "@/lib/locale";
import { pagePath, projectPath, resolveSlug, staticSlugParams } from "@/lib/routes";
import { pageMeta } from "@/lib/seo";

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolved = await params;
  if (!hasLocale(resolved.locale)) return [];
  return staticSlugParams()
    .filter((item) => item.locale === resolved.locale)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) return {};
  const resolved = resolveSlug(locale, slug);
  if (resolved.kind === "project") {
    const project = projects.find((item) => item.slug === resolved.slug);
    if (!project) return {};
    return pageMeta({
      locale,
      title: tx(locale, project.title),
      description: tx(locale, project.summary),
      fiPath: projectPath("fi", project.slug),
      enPath: projectPath("en", project.slug),
    });
  }
  if (resolved.kind === "page") {
    const seo = pageSeo[resolved.id][locale];
    return pageMeta({
      locale,
      title: seo.title,
      description: seo.description,
      fiPath: pagePath("fi", resolved.id),
      enPath: pagePath("en", resolved.id),
    });
  }
  return {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const resolved = resolveSlug(locale, slug);
  if (resolved.kind === "missing") notFound();
  if (resolved.redirectTo) redirect(resolved.redirectTo);
  if (resolved.kind === "project") {
    const project = projects.find((item) => item.slug === resolved.slug);
    if (!project) notFound();
    return <ProjectDetail locale={locale} project={project} />;
  }
  return <RenderPage locale={locale} id={resolved.id} />;
}
