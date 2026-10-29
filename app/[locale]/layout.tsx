import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { org } from "@/content/catalog";
import { ui } from "@/content/ui";
import { hasLocale, type Locale } from "@/lib/locale";
import { siteUrl } from "@/lib/seo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "../globals.css";

const display = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-helride-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-helride-body",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "fi" }, { locale: "en" }];
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = hasLocale(locale) ? locale : "fi";
  const title =
    lang === "fi"
      ? "HELride Collective — Skeittauksen asialla Helsingissä"
      : "HELride Collective — For skateboarding in Helsinki";
  const description =
    lang === "fi"
      ? "Helsinkiläinen skeittiyhdistys. Kontulan jäsenvuorot, skeittikoulu ja kesän Skeittikontti."
      : "A Helsinki skateboarding association. Member sessions in Kontula, skate school and the summer Skate Container.";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s · HELride Collective",
    },
    description,
    applicationName: "HELride Collective",
    openGraph: {
      siteName: "HELride Collective",
      type: "website",
      locale: lang === "fi" ? "fi_FI" : "en_GB",
    },
  };
}

const organization = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: org.name,
  url: siteUrl,
  email: org.email,
  sport: "Skateboarding",
  address: {
    "@type": "PostalAddress",
    streetAddress: org.street,
    postalCode: org.zip,
    addressLocality: org.city,
    addressCountry: "FI",
  },
  identifier: org.businessId,
  sameAs: [org.instagram, org.facebook, org.youtube, org.tiktok],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = hasLocale(raw) ? raw : "fi";
  const copy = ui[locale];

  return (
    <html lang={locale} className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink text-paper">
        <a className="skip-link" href="#sisalto">
          {copy.skip}
        </a>
        <SiteHeader />
        <main id="sisalto">{children}</main>
        <SiteFooter locale={locale} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
