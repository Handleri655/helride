import Link from "next/link";
import { board, director, org, saferStatement } from "@/content/catalog";
import { ui } from "@/content/ui";
import { tx, type Locale } from "@/lib/locale";
import { pagePath } from "@/lib/routes";
import { photos } from "@/content/photos";
import { Photo, PhotoGrid } from "@/components/photo";
import { buttonClass, Container, PageHeader } from "@/components/ui";

const practices: Record<Locale, { title: string; text: string }[]> = {
  fi: [
    {
      title: "Kunnioitus",
      text: "Jokainen saa olla paikalla omana itsenään. Nimittely, syrjintä ja toisen tilan vieminen eivät kuulu hallille, kontille eivätkä kursseille.",
    },
    {
      title: "Häirintään puututaan",
      text: "Häirintää ja väkivaltaa ei selitetä parhain päin eikä jätetä sivusta seurattavaksi. Kerro ohjaajalle tai häirintäyhteyshenkilölle.",
    },
    {
      title: "Ristiriidat käsitellään",
      text: "Erimieltä saa olla. Tarkoitus on saada keino käsitellä tilanne, ei vain sietää sitä kauden loppuun.",
    },
    {
      title: "Matala kynnys",
      text: "Vuoroilla on valvojat. Heille saa mennä juttelemaan, vaikka asia tuntuisi pieneltä.",
    },
  ],
  en: [
    {
      title: "Respect",
      text: "Everyone gets to be there as themselves. Name-calling, discrimination and taking over someone else’s space do not belong in the hall, the container or the courses.",
    },
    {
      title: "Harassment is acted on",
      text: "Harassment and violence are not explained away or watched from the side. Tell a coach or the harassment contact.",
    },
    {
      title: "Conflict gets handled",
      text: "Disagreement is allowed. The point is to have a way to deal with it, not to endure it until the season ends.",
    },
    {
      title: "A low step",
      text: "Sessions have supervisors. You can talk to them even when the thing feels small.",
    },
  ],
};

export function SaferPage({ locale }: { locale: Locale }) {
  const fi = locale === "fi";
  const labels = ui[locale];

  return (
    <>
      <PageHeader
        kicker={fi ? "Toimintakulttuuri" : "How we act"}
        title={fi ? "Turvallisempi tila" : "Safer space"}
        lede={
          fi
            ? "Alla on periaate, jonka HELride on julkaissut. Sen jälkeen on käytännön lukutapa hallille, kontille ja kursseille. Yhdistys voi tarkentaa listan, jos virallinen luettelo päivittyy."
            : "Below is the principle HELride has published, then a practical reading for the hall, the container and the courses. The association can replace the list if the official wording is updated."
        }
      />
      <PhotoGrid shots={[photos.schoolTalk, photos.hallBowl, photos.konttiLine]} locale={locale} />
      <Container className="py-14">
        <blockquote className="max-w-3xl border-l-4 border-signal pl-5 text-2xl leading-snug">
          <p>{saferStatement.fi}</p>
          {fi ? null : <p className="mt-4 text-base text-mist">{saferStatement.en}</p>}
        </blockquote>
        {fi ? null : (
          <p className="mt-3 text-sm text-mist">
            The English paragraph is a translation of the published Finnish text.
          </p>
        )}

        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {practices[locale].map((item, index) => (
            <li key={item.title} className="border border-white/15 p-5">
              <p className="font-display text-xl text-signal">0{index + 1}</p>
              <h2 className="mt-2 font-display text-3xl uppercase">{item.title}</h2>
              <p className="mt-3 leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ol>

        <section className="mt-12 max-w-3xl space-y-4 leading-relaxed">
          <h2 className="font-display text-4xl uppercase">{fi ? "Näin otat yhteyttä" : "How to get in touch"}</h2>
          <p>
            {fi
              ? "Häirintäyhteyshenkilö on Siv Knudsen. Voit käyttää yhteydenottolomaketta ja valita aiheeksi häirinnän. Nimen voi jättää pois."
              : "The harassment contact is Siv Knudsen. Use the contact form and choose harassment as the topic. You can leave your name out."}
          </p>
          <p>
            {fi
              ? "Lomake avaa oman sähköpostiohjelmasi. Se ei ole täysin anonyymi, koska lähettäjän osoite voi näkyä. Jos tarvitset anonyymimman reitin, kerro se viestissä ja jätä tunnistetiedot pois niin pitkälle kuin pystyt."
              : "The form opens your own email app. It is not fully anonymous, because the sender address can be visible. If you need a more anonymous route, say so in the message and leave out identifying details as far as you can."}
          </p>
          <Link href={pagePath(locale, "contact")} className={buttonClass("signal")}>
            {labels.nav.contact}
          </Link>
        </section>
      </Container>
    </>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const fi = locale === "fi";

  return (
    <>
      <PageHeader
        kicker={fi ? "Yhdistys" : "Association"}
        title={fi ? "Meistä" : "About"}
        lede={
          fi
            ? "HELride Collective on helsinkiläinen skeittiyhdistys. Tapahtuma on järjestetty vuodesta 2015, ja työtä tehdään hallituksen, toiminnanjohtajan, aktiivejen ja vapaaehtoisten voimin."
            : "HELride Collective is a Helsinki skateboarding association. The event has run since 2015, and the work is done by the board, an executive director, activists and volunteers."
        }
      />
      <PhotoGrid shots={[photos.senate, photos.crowd, photos.suvilahti]} locale={locale} />
      <Container className="grid gap-8 pt-10 pb-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            {fi
              ? "Yhdistys järjestää skeittikoulua, leirejä ja Kontulan jäsenvuoroja, pitää kesäisin Skeittikonttia ja on ollut mukana tekemässä skeittipaikkoja, muun muassa Kaisaniemessä, Redissä ja Eläintarhassa."
              : "The association runs skate school, camps and the Kontula member sessions, keeps the Skate Container open in summer, and has helped make skate spots, including Kaisaniemi, Redi and Eläintarha."}
          </p>
          <p>
            {fi
              ? "Tavoitteena on tehdä Helsingistä parempi skeittikaupunki: skeittispotteja parkien rinnalle sekä talviharrastuksen laadun ja määrän parantaminen. Jäsenvuorot Kontulassa ovat tämän talvityön nykyinen muoto."
              : "The aim is to make Helsinki a better skate city: street spots alongside the parks, and better, more plentiful winter skating. The Kontula member sessions are the current form of that winter work."}
          </p>
          <p>
            {fi
              ? "Yhdistyksen nimi on Helride Collective ry ja kotipaikka Helsinki. Tarkoituksena on pitää yllä ja kehittää rullalautailuharrastusta, -kulttuuria, yhteisöllisyyttä ja kilpailutoimintaa sekä edistää lajin leviämistä Helsingissä. Yhdistys edistää myös yhdenvertaista ja tasa-arvoista toimintaa lajin sisällä."
              : "The association’s name is Helride Collective ry and its home is Helsinki. Its purpose is to maintain and develop skateboarding as a hobby, a culture, a community and a competition, and to help the sport spread in Helsinki. It also works for equal and equitable practice inside the sport."}
          </p>
          <p>
            {fi
              ? `Toiminnan mahdollistavat jäsenmaksut, Helsingin kaupungin toiminta-avustus ja toiminnasta saadut tulot. Projekteissa työskentelee myös nuoria osa-aikaisesti.`
              : `The work is funded by membership fees, an operating grant from the City of Helsinki and income from the activities. Young people also work part-time on the projects.`}
          </p>
        </div>
        <Photo photo={photos.hallSchool} locale={locale} className="h-full min-h-72" sizes="(min-width: 1024px) 40vw, 100vw" />
      </Container>

      <section className="border-t border-white/15">
        <Container className="pt-8 pb-14">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-5xl uppercase">{fi ? "Hallitus 2026" : "Board 2026"}</h2>
            <p className="max-w-md text-sm text-mist">
              {fi
                ? "Lista on yhdistyksen sivuilla julkaistu kokoonpano. Tarkista ajantasaisuus, jos kokous on päivittänyt sen."
                : "This is the line-up published on the association’s website. Check it if a meeting has updated the board."}
            </p>
          </div>
          <ul className="mt-6 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((person) => (
              <li key={person.name} className="bg-ink px-4 py-3">
                <p className="font-semibold">{person.name}</p>
                <p className="text-sm text-mist">{tx(locale, person.role)}</p>
              </li>
            ))}
            <li className="bg-ink px-4 py-3">
              <p className="font-semibold">{director.name}</p>
              <p className="text-sm text-mist">{tx(locale, director.role)}</p>
            </li>
          </ul>

          <h2 className="mt-10 font-display text-5xl uppercase">{fi ? "Yhteystiedot" : "Contact details"}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            {fi
              ? "Hallituksen lisäksi yhdistystä pyörittää iso joukko aktiiveja ja vapaaehtoisia. Uusia aktiiveja haetaan jatkuvasti. Jos skeittauksen kanssa tekeminen kiinnostaa, kirjoita toiminnanjohtajalle."
              : "Besides the board, a large group of activists and volunteers runs the association. New activists are always welcome. If you want to work with skateboarding, write to the executive director."}
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: fi ? "Puheenjohtaja ja toiminnanjohtaja" : "Chair and executive director",
                who: `Sakari Leskinen · ${director.name}`,
                href: `mailto:${org.email}`,
                label: org.email,
              },
              {
                title: fi ? "Skeittikoulut, leirit ja hallivalvonta" : "Skate schools, camps and hall supervision",
                who: fi ? "Vastaava, Siv Knudsen" : "Lead, Siv Knudsen",
                href: `mailto:${org.schoolEmail}`,
                label: org.schoolEmail,
              },
              {
                title: fi ? "Laskutus ja viestintä" : "Billing and communications",
                who: fi ? "Vastaava, Pete Ruikka" : "Lead, Pete Ruikka",
                href: `mailto:${org.billingEmail}`,
                label: org.billingEmail,
              },
              {
                title: fi ? "Häirintäyhteyshenkilö" : "Harassment contact",
                who: fi ? "Vastaava, Siv Knudsen" : "Lead, Siv Knudsen",
                href: pagePath(locale, "contact"),
                label: fi ? "Anna palautetta" : "Send feedback",
              },
            ].map((item) => (
              <li key={item.title} className="border border-white/15 p-5">
                <h3 className="font-display text-2xl uppercase leading-none">{item.title}</h3>
                <p className="mt-3 text-mist">{item.who}</p>
                {item.href.startsWith("/") ? (
                  <Link href={item.href} className="mt-3 inline-block underline decoration-signal underline-offset-4">
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} className="mt-3 inline-block underline decoration-signal underline-offset-4">
                    {item.label}
                  </a>
                )}
                {item.href.startsWith("/") ? (
                  <p className="mt-3 text-sm text-mist">
                    {fi
                      ? "Nimen voi jättää pois. Lomake avaa oman sähköpostiohjelman, joten lähettäjän osoite voi näkyä."
                      : "You can leave your name out. The form opens your own email app, so the sender address can be visible."}
                  </p>
                ) : null}
              </li>
            ))}
            <li className="border border-white/15 p-5">
              <h3 className="font-display text-2xl uppercase leading-none">{fi ? "Postiosoite" : "Postal address"}</h3>
              <address className="mt-3 not-italic leading-relaxed">
                {org.name}
                <br />
                {org.street}
                <br />
                {org.zip} {org.city}
              </address>
            </li>
            <li className="border border-white/15 p-5">
              <h3 className="font-display text-2xl uppercase leading-none">{fi ? "Laskutus" : "Invoicing"}</h3>
              <dl className="mt-3 space-y-1 leading-relaxed">
                <div>
                  <dt className="inline">{fi ? "Y-tunnus " : "Business ID "}</dt>
                  <dd className="inline">{org.businessId}</dd>
                </div>
                <div>
                  <dt className="inline">{fi ? "Verkkolaskuosoite " : "E-invoice address "}</dt>
                  <dd className="inline">{org.einvoice}</dd>
                </div>
                <div>
                  <dt className="inline">{fi ? "Välittäjätunnus " : "Operator ID "}</dt>
                  <dd className="inline">{org.einvoiceOperator}</dd>
                </div>
                <div>
                  <dt className="inline">{fi ? "Välittäjä " : "Operator "}</dt>
                  <dd className="inline">{org.einvoiceBroker}</dd>
                </div>
              </dl>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}

export function JoinPage({ locale }: { locale: Locale }) {
  const fi = locale === "fi";
  const labels = ui[locale];
  const paths = [
    {
      title: fi ? "Jäseneksi" : "Become a member",
      text: fi
        ? "Jäsenyys pitää jäsenvuorot auki ja rahoittaa tapahtumat, kontit ja koulut."
        : "Membership keeps the sessions open and pays for events, the container and the schools.",
      href: pagePath(locale, "membership"),
      cta: labels.nav.membership,
    },
    {
      title: fi ? "Vapaaehtoiseksi" : "Volunteer",
      text: fi
        ? "Aktiiveja haetaan jatkuvasti. Jos skeittauksen kanssa tekeminen kiinnostaa, laita viesti toiminnanjohtajalle."
        : "Activists are always welcome. If you want to work with skateboarding, write to the executive director.",
      href: `mailto:${org.email}`,
      cta: org.email,
    },
    {
      title: fi ? "Kumppaniksi" : "Partner",
      text: fi
        ? "ADHD-skeittikoulu etsii yhteistyökumppania ja sponsoria. Muusta yhteistyöstä voi kirjoittaa yhdistyksen osoitteeseen."
        : "The ADHD skate school is looking for a partner and a sponsor. Other collaboration can go to the association address.",
      href: `mailto:${org.adhdEmail}`,
      cta: org.adhdEmail,
    },
  ];

  return (
    <>
      <PageHeader
        kicker={fi ? "Tekijät" : "People"}
        title={fi ? "Tule mukaan" : "Get involved"}
        lede={
          fi
            ? "Yhdistystä pyörittää hallituksen lisäksi iso joukko aktiiveja ja vapaaehtoisia."
            : "Besides the board, a large group of activists and volunteers runs the association."
        }
      />
      <Container className="grid gap-4 py-14 md:grid-cols-3">
        {paths.map((item, index) => (
          <article key={item.title} className="flex flex-col border border-white/15">
            <Photo
              photo={[photos.hallBowl, photos.school, photos.campBowl][index]}
              locale={locale}
              className="aspect-[4/3]"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
            <div className="flex flex-1 flex-col p-5">
            <h2 className="font-display text-4xl uppercase leading-none">{item.title}</h2>
            <p className="mt-4 flex-1 leading-relaxed">{item.text}</p>
            {item.href.startsWith("/") ? (
              <Link href={item.href} className={`${buttonClass("signal")} mt-6`}>
                {item.cta}
              </Link>
            ) : (
              <a href={item.href} className={`${buttonClass("signal")} mt-6`}>
                {item.cta}
              </a>
            )}
            </div>
          </article>
        ))}
      </Container>
    </>
  );
}
