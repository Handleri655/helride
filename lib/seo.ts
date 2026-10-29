import type { Metadata } from "next";
import type { Locale } from "@/lib/locale";

export const siteUrl = "https://www.helride.fi";

export function pageMeta(options: {
  locale: Locale;
  title: string;
  description: string;
  fiPath: string;
  enPath: string;
  absoluteTitle?: boolean;
}): Metadata {
  const canonical = options.locale === "fi" ? options.fiPath : options.enPath;

  return {
    title: options.absoluteTitle ? { absolute: options.title } : options.title,
    description: options.description,
    alternates: {
      canonical,
      languages: {
        fi: options.fiPath,
        en: options.enPath,
        "x-default": options.fiPath,
      },
    },
    openGraph: {
      title: options.title,
      description: options.description,
      url: canonical,
      locale: options.locale === "fi" ? "fi_FI" : "en_GB",
      type: "website",
      siteName: "HELride Collective",
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
    },
  };
}
