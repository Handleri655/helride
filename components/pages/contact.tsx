import { org } from "@/content/catalog";
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/locale";
import { photos } from "@/content/photos";
import { ContactForm } from "@/components/contact-form";
import { PhotoGrid } from "@/components/photo";
import { Container, ExternalLink, PageHeader } from "@/components/ui";

const people = [
  {
    role: { fi: "Yhdistys, puheenjohtaja ja toiminnanjohtaja", en: "Association, chair and executive director" },
    email: org.email,
  },
  {
    role: { fi: "Skeittikoulut, leirit ja hallivalvonta · Siv Knudsen", en: "Skate schools, camps and hall supervision · Siv Knudsen" },
    email: org.schoolEmail,
  },
  {
    role: { fi: "Laskutus ja viestintä · Pete Ruikka", en: "Billing and communications · Pete Ruikka" },
    email: org.billingEmail,
  },
  {
    role: { fi: "ADHD-skeittikoulun yhteistyö", en: "ADHD skate school partnerships" },
    email: org.adhdEmail,
  },
];

export function ContactPage({ locale }: { locale: Locale }) {
  const fi = locale === "fi";
  const labels = ui[locale];

  return (
    <>
      <PageHeader
        kicker={fi ? "Kirjoita" : "Write"}
        title={fi ? "Yhteys" : "Contact"}
        lede={
          fi
            ? "Valitse oikea osoite, jos tiedät asian. Lomake ohjaa viestin samaan jakoon."
            : "Pick the right address if you know the topic. The form sorts the message the same way."
        }
      />
      <PhotoGrid shots={[photos.hallSchool, photos.school]} locale={locale} className="grid-cols-1 md:grid-cols-2" />
      <Container className="grid gap-12 py-14 lg:grid-cols-2">
        <div>
          <ul className="divide-y divide-white/15 border-y border-white/15">
            {people.map((person) => (
              <li key={person.email} className="py-4">
                <p>{person.role[locale]}</p>
                <a className="mt-1 inline-block underline decoration-signal underline-offset-4" href={`mailto:${person.email}`}>
                  {person.email}
                </a>
              </li>
            ))}
          </ul>
          <address className="mt-8 not-italic leading-relaxed">
            <p className="font-display text-2xl uppercase">{labels.address}</p>
            <p className="mt-2">
              {org.name}
              <br />
              {org.street}
              <br />
              {org.zip} {org.city}
            </p>
          </address>
          <dl className="mt-8 space-y-2 text-sm text-mist">
            <div>
              <dt className="inline">Y-tunnus </dt>
              <dd className="inline">{org.businessId}</dd>
            </div>
            <div>
              <dt className="inline">{fi ? "Verkkolaskuosoite " : "E-invoice address "}</dt>
              <dd className="inline">{org.einvoice}</dd>
            </div>
            <div>
              <dt className="inline">{fi ? "Välittäjätunnus " : "Operator ID "}</dt>
              <dd className="inline">
                {org.einvoiceOperator} · {org.einvoiceBroker}
              </dd>
            </div>
          </dl>
          <p className="mt-6 flex flex-wrap gap-4">
            <ExternalLink href={org.instagram} newTab={labels.newTab} className="underline underline-offset-4">
              Instagram
            </ExternalLink>
            <ExternalLink href={org.instagramAdhd} newTab={labels.newTab} className="underline underline-offset-4">
              ADHD Instagram
            </ExternalLink>
            <ExternalLink href={org.facebook} newTab={labels.newTab} className="underline underline-offset-4">
              Facebook
            </ExternalLink>
            <ExternalLink href={org.youtube} newTab={labels.newTab} className="underline underline-offset-4">
              YouTube
            </ExternalLink>
            <ExternalLink href={org.tiktok} newTab={labels.newTab} className="underline underline-offset-4">
              TikTok
            </ExternalLink>
          </p>
        </div>
        <ContactForm locale={locale} />
      </Container>
    </>
  );
}
