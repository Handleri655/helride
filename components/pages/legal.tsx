import { org } from "@/content/catalog";
import type { Locale } from "@/lib/locale";
import { Container, PageHeader } from "@/components/ui";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const fi = locale === "fi";
  const blocks = fi
    ? [
        "Tämä sivusto ei vaadi tunnuksia eikä kerää analytiikkaevästeitä. Fontit tulevat sivuston mukana, ei erillisestä fonttipalvelusta.",
        "Yhteydenottolomake ei lähetä tietoa HELriden palvelimelle. Se avaa laitteesi sähköpostiohjelman. Viestin käsittely alkaa, kun lähetät sen itse.",
        "Jäsenyydet, kurssit ja leirit maksetaan Holvi-verkkokaupassa. Maksun ja asiakastietojen käsittelystä vastaa Holvi sekä HELride niiltä osin kuin kauppa sen edellyttää. Tähän sivustoon ei kirjauduta.",
        "Instagram, Facebook ja TikTok ovat linkkejä, niiden syötteitä ei upoteta. YouTube-videot käynnistyvät tällä sivulla vasta, kun painat play. Soitin ladataan osoitteesta youtube-nocookie.com.",
        `Tietosuojaa koskevissa kysymyksissä kirjoita osoitteeseen ${org.email}.`,
      ]
    : [
        "This site does not require an account and does not use analytics cookies. Fonts are delivered with the site, not from a separate font service.",
        "The contact form does not send information to a HELride server. It opens the email app on your device. Handling starts when you send the message yourself.",
        "Memberships, courses and camps are paid in the Holvi shop. Holvi, and HELride where the shop requires it, handle the payment and customer data. You do not sign in on this site.",
        "Instagram, Facebook and TikTok are links. Their feeds are not embedded. YouTube videos start on this site only after you press play. The player is loaded from youtube-nocookie.com.",
        `For privacy questions, write to ${org.email}.`,
      ];

  return (
    <>
      <PageHeader
        kicker={fi ? "Rekisteri" : "Data"}
        title={fi ? "Tietosuoja" : "Privacy"}
        lede={
          fi
            ? "Lyhyt kuvaus siitä, mitä tämä sivusto tekee tiedoillasi."
            : "A short account of what this site does with your information."
        }
      />
      <Container className="max-w-3xl space-y-4 py-14 text-lg leading-relaxed">
        {blocks.map((block) => (
          <p key={block}>{block}</p>
        ))}
      </Container>
    </>
  );
}

export function AccessibilityPage({ locale }: { locale: Locale }) {
  const fi = locale === "fi";
  const blocks = fi
    ? [
        "Tavoite on WCAG 2.2 -taso AA: tekstivastineet, näppäimistö, näkyvä fokus, riittävä kontrasti ja selkeä otsikointi.",
        "Sivulla on hyppylinkki sisältöön. Valikko ja lomake toimivat näppäimistöllä. Kieli on merkitty sivukohtaisesti.",
        "Tunnetut rajat: Holvin kauppa, sosiaalisen median palvelut ja Google Maps ovat ulkopuolisia sivuja, joiden saavutettavuutta HELride ei hallitse.",
        "Liike on rajattu, jos selain pyytää vähentämään animaatioita.",
        `Jos löydät esteen, kirjoita osoitteeseen ${org.email} ja kerro sivu sekä mitä yritit tehdä.`,
      ]
    : [
        "The target is WCAG 2.2 level AA: text alternatives, keyboard use, a visible focus, sufficient contrast and a clear heading order.",
        "There is a skip link to the content. The menu and the form work with a keyboard. Language is set per page.",
        "Known limits: the Holvi shop, social networks and Google Maps are outside pages HELride does not control.",
        "Motion is reduced when the browser asks for it.",
        `If you hit a barrier, write to ${org.email} and say which page it was and what you tried to do.`,
      ];

  return (
    <>
      <PageHeader
        kicker="WCAG 2.2 AA"
        title={fi ? "Saavutettavuus" : "Accessibility"}
        lede={
          fi
            ? "Sivusto on tehty niin, että sitä voi käyttää näppäimistöllä ja ruudunlukijalla."
            : "The site is built so it can be used with a keyboard and a screen reader."
        }
      />
      <Container className="max-w-3xl space-y-4 py-14 text-lg leading-relaxed">
        {blocks.map((block) => (
          <p key={block}>{block}</p>
        ))}
      </Container>
    </>
  );
}
