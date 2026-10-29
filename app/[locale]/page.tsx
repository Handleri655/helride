import { notFound } from "next/navigation";
import { HomePage } from "@/components/pages/home";
import { pageSeo } from "@/content/meta";
import { hasLocale } from "@/lib/locale";
import { homePath } from "@/lib/routes";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const seo = pageSeo.home[locale];
  return pageMeta({
    locale,
    title: seo.title,
    description: seo.description,
    fiPath: homePath("fi"),
    enPath: homePath("en"),
    absoluteTitle: true,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  return <HomePage locale={locale} />;
}
