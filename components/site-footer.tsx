import Image from "next/image";
import Link from "next/link";
import { org } from "@/content/catalog";
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/locale";
import { pagePath, type PageId } from "@/lib/routes";
import { Container, ExternalLink } from "@/components/ui";

const columns: PageId[][] = [
  ["events", "school", "projects", "spots"],
  ["membership", "join", "about", "safer"],
  ["contact", "privacy", "accessibility"],
];

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = ui[locale];

  return (
    <footer className="border-t-2 border-signal bg-asphalt">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/helride-logo.png"
            alt=""
            width={1071}
            height={264}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-mist">{copy.footerBlurb}</p>
          <a className="mt-4 inline-block underline decoration-signal underline-offset-4" href={`mailto:${org.email}`}>
            {org.email}
          </a>
        </div>
        {columns.map((column) => (
          <ul key={column[0]} className="space-y-2">
            {column.map((id) => (
              <li key={id}>
                <Link href={pagePath(locale, id)} className="hover:text-signal">
                  {copy.nav[id]}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-mist md:flex-row md:items-center md:justify-between">
        <p>
          {copy.rights} · Y {org.businessId}
        </p>
        <p className="flex gap-4">
          <ExternalLink href={org.instagram} newTab={copy.newTab} className="hover:text-paper">
            Instagram
          </ExternalLink>
          <ExternalLink href={org.facebook} newTab={copy.newTab} className="hover:text-paper">
            Facebook
          </ExternalLink>
          <ExternalLink href={org.youtube} newTab={copy.newTab} className="hover:text-paper">
            YouTube
          </ExternalLink>
          <ExternalLink href={org.tiktok} newTab={copy.newTab} className="hover:text-paper">
            TikTok
          </ExternalLink>
        </p>
      </Container>
      <Container className="pb-8 text-sm text-mist">
        <p>{copy.sourceNote}</p>
      </Container>
    </footer>
  );
}
