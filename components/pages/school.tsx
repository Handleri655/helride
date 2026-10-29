import Link from "next/link";
import { org, prices } from "@/content/catalog";
import { ui } from "@/content/ui";
import { tx, type Locale } from "@/lib/locale";
import { pagePath, projectPath } from "@/lib/routes";
import { photos } from "@/content/photos";
import { Photo } from "@/components/photo";
import { buttonClass, Container, ExternalLink, PageHeader } from "@/components/ui";

const offerings: {
  title: Record<Locale, string>;
  meta: Record<Locale, string>;
  points: Record<Locale, string[]>;
}[] = [
  {
    title: { fi: "Lapset ja nuoret", en: "Children and young people" },
    meta: { fi: "Lauantaisin klo 10–12 · 20 €", en: "Saturdays 10:00–12:00 · 20 €" },
    points: {
      fi: [
        "Kaksi tuntia opetusta pienryhmässä. Mukaan voi tulla ilman aiempaa kokemusta tai hakemaan lisää varmuutta.",
        "Talvella paikka on Kontulan skeittihalli, Emännänpolku 1. Ulkokaudella Eläintarhan skeittipuisto.",
        "Lauantain ryhmien ilmoittautuminen päättyy perjantaina klo 16. Älä saavu paikalle varaamatta paikkaa.",
        "Kaikista pienimmillä skeittaajilla pitää olla huoltaja mukana. Opetus on avointa iästä ja sukupuolesta riippumatta, ja vanhemmat ovat tervetulleita.",
        "Lauta ja kypärä saa tarvittaessa lainaksi. Omat polvi-, kyynär- ja rannesuojat kannattaa ottaa mukaan, jos ne ovat.",
      ],
      en: [
        "Two hours of teaching in a small group. Come with no experience, or to get more confident.",
        "In winter the place is Kontula skate hall, Emännänpolku 1. In the outdoor season it is Eläintarha skatepark.",
        "Registration for Saturday groups closes on Friday at 16:00. Do not turn up without a booking.",
        "The youngest skaters need a guardian with them. Teaching is open regardless of age or gender, and parents are welcome.",
        "A board and a helmet are available on loan if you need them. Bring your own knee, elbow and wrist pads if you have them.",
      ],
    },
  },
  {
    title: { fi: "Aikuiset", en: "Adults" },
    meta: { fi: "Alkeet ja teemakurssit", en: "Basics and themed courses" },
    points: {
      fi: [
        "Alkeiskurssilla haetaan varmuutta potkutukseen, kääntymiseen ja ensimmäisiin temppuihin.",
        "Teemakursseilla harjoitellaan street- ja kaariskeittauksen perusteita. Lähtötaso huomioidaan.",
        "Ajankohdat ja varaus ovat Holvi-kaupassa. Kysymykset: helrideskeittikoulu@gmail.com.",
      ],
      en: [
        "The beginner course builds confidence in pushing, turning and the first tricks.",
        "Themed courses cover the basics of street and transition. The group’s starting level is taken into account.",
        "Dates and booking are in the Holvi shop. Questions: helrideskeittikoulu@gmail.com.",
      ],
    },
  },
  {
    title: { fi: "Skeittikerhot", en: "Skate clubs" },
    meta: { fi: "Kontula · noin kuusi henkeä", en: "Kontula · about six people" },
    points: {
      fi: [
        "Kerho kokoontuu samalla porukalla koko kauden, arki-iltaisin Kontulan hallin avoimilla vuoroilla.",
        "Tarjolla on alkeis- ja jatkoryhmiä sekä oma kerho ADHD-tyypeille. Syksyn 2026 ryhmät varataan Holvista.",
      ],
      en: [
        "A club stays with the same group for the whole season, on weekday evenings during Kontula’s open sessions.",
        "There are beginner and continuation groups, plus a club for ADHD skaters. Autumn 2026 groups are booked in Holvi.",
      ],
    },
  },
  {
    title: { fi: "ADHD-skeittaus", en: "ADHD skating" },
    meta: { fi: "Ei diagnoosivaatimusta", en: "No diagnosis required" },
    points: {
      fi: [
        "Mukaan saa tulla, jos kokee asian omakseen. Virallista diagnoosia ei vaadita.",
        "Kesäkaudella on ollut maksuttomia kokeiluja. Talvella on maksullinen viikoittainen kerho Kontulassa. Kesäisin on myös päiväleirejä.",
        "Tukilinja-säätiö valitsi ADHD-skeittikoulun vuoden 2023 toimijaksi. Vuosina 2022–2024 edullista hintaa tukivat opetus- ja kulttuuriministeriön seuratuki sekä Suomen Rullalautaliitto.",
        "Yhteistyöstä ja sponsoroinnista: adhd.skeittikoulu@gmail.com. Instagram: @adhd_skeittikoulu.",
      ],
      en: [
        "Come if it feels like your thing. An official diagnosis is not required.",
        "The summer season has had free try-outs. In winter there is a paid weekly club in Kontula. There are also day camps in summer.",
        "The Tukilinja foundation named the ADHD skate school its operator of the year in 2023. In 2022–2024 the lower price was supported by a grant from the Ministry of Education and Culture and by the Finnish Skateboarding Association.",
        "Partnerships and sponsorship: adhd.skeittikoulu@gmail.com. Instagram: @adhd_skeittikoulu.",
      ],
    },
  },
  {
    title: { fi: "Yksityistunnit ja synttärit", en: "Private lessons and birthdays" },
    meta: { fi: "1–5 henkeä · 2 tuntia", en: "1–5 people · 2 hours" },
    points: {
      fi: [
        "Sisältö suunnitellaan tason ja toiveiden mukaan. Paikka ja aika sovitaan ennen maksua: helrideskeittikoulu@gmail.com.",
        "Tarjolla on myös 5 ja 10 kerran paketit yhdelle osallistujalle, isommille porukoille omat tunnit ja skeittisynttärit.",
        "Lähtökohtaisesti osallistujilla on omat laudat. Lainasta voi kysyä.",
      ],
      en: [
        "The content follows the group’s level and wishes. Agree the place and time before paying: helrideskeittikoulu@gmail.com.",
        "There are also packs of 5 and 10 lessons for one person, sessions for larger groups, and skate birthdays.",
        "People are expected to bring their own boards. Ask if you need a loan.",
      ],
    },
  },
  {
    title: { fi: "Yritykset ja ryhmät", en: "Companies and groups" },
    meta: { fi: "Alkaen 299 € · alv 0 %", en: "From 299 € · VAT 0%" },
    points: {
      fi: [
        "Skeittaus tyhy-päivään, pikkujouluihin tai yhdistyksen ohjelmaan. Hinnat alkavat 299 eurosta. Yhdistyksen toiminta on arvonlisäverotonta.",
        "Mukana tulee ohjaaja ja lainavälineet. Sisältö räätälöidään. Kysy: helrideskeittikoulu@gmail.com.",
      ],
      en: [
        "Skating for a staff day, a party or an association programme. Prices start at 299 euro. The association’s activity is exempt from VAT.",
        "You get a coach and loan gear. The content is tailored. Ask: helrideskeittikoulu@gmail.com.",
      ],
    },
  },
  {
    title: { fi: "Skeittileirit", en: "Skate camps" },
    meta: { fi: "9–15-vuotiaat · 175 € · ma–pe klo 9–16", en: "Ages 9–15 · 175 € · Mon–Fri 9:00–16:00" },
    points: {
      fi: [
        "Kesän 2026 leirit on pidetty. Kesän 2027 varaus aukeaa alkuvuodesta. Leirejä on ollut kesä-, heinä- ja elokuussa.",
        "Suositus on, että laudalla eteneminen sujuu jo valmiiksi. Alle 9-vuotiaista päätetään tapauskohtaisesti sähköpostilla.",
        "Leirille otetaan 12 osallistujaa, minimi on 5. Ohjaajia on yksi kuutta osallistujaa kohti. Tukikohdat: Eläintarhan Skeittikontti, Kontulan nuorisokontti ja Matinkylän skeittiparkki.",
        "Peruutuksesta vähintään 14 vuorokautta ennen leiriä palautetaan maksu miinus 20 € toimistokuluja. Myöhemmin maksu palautetaan samalla vähennyksellä vain lääkärintodistusta vastaan. Siirto toiseen leiriin maksaa 10 €. Jos HELride peruu leirin, maksu palautetaan kokonaan.",
      ],
      en: [
        "The 2026 camps have been held. Booking for summer 2027 opens early in the year. Camps have run in June, July and August.",
        "Riders should already be comfortable rolling. Under-9s are decided case by case by email.",
        "A camp takes 12 people, with a minimum of 5. There is one coach per six riders. Bases: the Eläintarha Skate Container, the Kontula youth container and Matinkylä skatepark.",
        "Cancel at least 14 days ahead and the fee is returned minus a 20 € office charge. Later, the same deduction applies only with a doctor’s note. Moving to another camp costs 10 €. If HELride cancels the camp, the fee is returned in full.",
      ],
    },
  },
];

const pack = {
  fi: [
    "Rennot vaatteet, jotka saavat likaantua.",
    "Tasapohjaiset, kevyet kengät.",
    "Vesipullo. Kontulan hallilla on vesipisteitä, mutta ei pukuhuonetta.",
    "Korvatulpat, jos hallin melu häiritsee.",
    "Oma kypärä, jos sellainen on. Lauta ja kypärä järjestyvät myös lainaan.",
  ],
  en: [
    "Clothes you can get dirty.",
    "Flat, light shoes.",
    "A water bottle. Kontula hall has water taps and no changing room.",
    "Earplugs if the hall noise bothers you.",
    "Your own helmet if you have one. A board and a helmet can also be borrowed.",
  ],
};

export function SchoolPage({ locale }: { locale: Locale }) {
  const labels = ui[locale];
  const title = locale === "fi" ? "Skeittikoulu" : "Skate school";
  const lede =
    locale === "fi"
      ? "Kokeile ensimmäistä kertaa tai jatka siitä, mihin jäit. Talvella Kontulassa, ulkokaudella Eläintarhassa. Lauta ja kypärä järjestyvät lainaan."
      : "Try it for the first time, or pick up where you left off. Kontula in winter, Eläintarha in the outdoor season. A board and a helmet are available on loan.";

  return (
    <>
      <PageHeader kicker={locale === "fi" ? "Opetus" : "Lessons"} title={title} lede={lede} />
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {[photos.school, photos.hallSchool, photos.schoolWide, photos.rediSchool, photos.kontti, photos.camp, photos.campBowl, photos.schoolTalk].map((photo) => (
          <Photo key={photo.src} photo={photo} locale={locale} className="aspect-[4/3]" sizes="(min-width: 1024px) 25vw, 50vw" />
        ))}
      </div>
      <Container className="py-14">
        <div className="flex flex-wrap gap-3">
          <ExternalLink href={org.holvi} newTab={labels.newTab} className={buttonClass("signal")}>
            {labels.shop}
          </ExternalLink>
          <Link href={projectPath(locale, "skeittikontti")} className={buttonClass("ghost")}>
            {locale === "fi" ? "Kesän maksuttomat kokeilut" : "Free summer try-outs"}
          </Link>
        </div>
        <p className="mt-6 max-w-3xl border border-signal p-4 leading-relaxed">
          {locale === "fi"
            ? "Skeittaus tapahtuu omalla vastuulla. Koululaisia ei ole vakuutettu HELriden toimesta. Kurssiasiat: helrideskeittikoulu@gmail.com."
            : "Skating is at your own risk. Schoolchildren are not insured by HELride. Course questions: helrideskeittikoulu@gmail.com."}
        </p>

        <div className="mt-12 space-y-10">
          {offerings.map((offer) => (
            <article key={offer.title.fi} className="border-t border-white/15 pt-8">
              <h2 className="font-display text-4xl uppercase leading-none md:text-6xl">{tx(locale, offer.title)}</h2>
              <p className="mt-3 font-display text-2xl uppercase text-signal">{tx(locale, offer.meta)}</p>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed">
                {offer.points[locale].map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-14 bg-signal p-6 text-ink md:p-8">
          <h2 className="font-display text-4xl uppercase">
            {locale === "fi" ? "Mitä mukaan" : "What to bring"}
          </h2>
          <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5">
            {pack[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            {locale === "fi"
              ? `Lasten ja nuorten kerta maksaa ${prices.kidsSchool} €. Leiri maksaa ${prices.camp} €. Tarkista tuotteen hinta Holvissa ennen maksua.`
              : `A session for children and young people costs ${prices.kidsSchool} €. A camp costs ${prices.camp} €. Check the product price in Holvi before you pay.`}
          </p>
        </section>

        <p className="mt-8">
          <Link href={pagePath(locale, "spots")} className="underline decoration-signal underline-offset-4">
            {labels.nav.spots}
          </Link>
        </p>
      </Container>
    </>
  );
}
