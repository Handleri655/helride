import { org, prices, sessionNotes } from "@/content/catalog";
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/locale";
import { pagePath } from "@/lib/routes";
import { photos } from "@/content/photos";
import { Photo, PhotoGrid } from "@/components/photo";
import { SessionTable } from "@/components/session-table";
import { buttonClass, Container, ExternalLink, PageHeader } from "@/components/ui";
import Link from "next/link";

export function MembershipPage({ locale }: { locale: Locale }) {
  const labels = ui[locale];
  const fi = locale === "fi";

  return (
    <>
      <PageHeader
        kicker={fi ? "Kausi 26/27" : "Season 26/27"}
        title={fi ? "Jäsenyys" : "Membership"}
        lede={
          fi
            ? "Jäsenyys avaa Kontulan hallin jäsenvuorot ja rahoittaa yhdistyksen skeittityötä Helsingissä."
            : "Membership opens the Kontula hall sessions and funds the association’s skate work in Helsinki."
        }
      />
      <PhotoGrid shots={[photos.hall, photos.hallSchool, photos.hallBowl]} locale={locale} />
      <Container className="py-14">
        <div className="grid gap-6 bg-signal p-6 text-ink md:grid-cols-2 md:p-8">
          <div>
            <p className="font-display text-xl uppercase tracking-[0.14em]">
              {fi ? `Early bird asti ${prices.earlyBirdUntil}` : `Early bird until ${prices.earlyBirdUntil}`}
            </p>
            <p className="mt-2 font-display text-7xl leading-none">{prices.early} €</p>
            <p className="mt-3">
              {fi
                ? `1.11.2026 alkaen hinta on ${prices.regular} €. Kausi 26/27 kestää ${prices.seasonEnd.fi}.`
                : `From 1 November 2026 the price is ${prices.regular} €. Season 26/27 lasts until ${prices.seasonEnd.en}.`}
            </p>
          </div>
          <div>
            <p className="font-display text-xl uppercase tracking-[0.14em]">
              {fi ? "Aikuinen ja lapsi" : "Adult and child"}
            </p>
            <p className="mt-2 font-display text-7xl leading-none">
              {prices.familyEarly} €
            </p>
            <p className="mt-3">
              {fi
                ? `Early bird -hinta lokakuun loppuun. 1.11.2026 alkaen ${prices.familyRegular} €. Alle kouluikäiset pääsevät vuoroille maksutta, heille ei osteta jäsenyyttä.`
                : `Early-bird price through October. From 1 November 2026, ${prices.familyRegular} €. Children under school age get in free and do not need a membership.`}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <ExternalLink href={org.holviMembership} newTab={labels.newTab} className={buttonClass("signal")}>
            {fi ? "Osta Holvista" : "Buy in Holvi"}
          </ExternalLink>
          <Link href={`${pagePath(locale, "events")}#sessions`} className={buttonClass("ghost")}>
            {fi ? "Katso vuorot" : "See the sessions"}
          </Link>
        </div>

        <section className="mt-12 max-w-3xl space-y-4 text-lg leading-relaxed">
          <h2 className="font-display text-4xl uppercase">{fi ? "Mitä jäsenyys sisältää" : "What membership includes"}</h2>
          <p>
            {fi
              ? "Jäsenille on maksuttomia vuoroja Kontulan Luuppi-hallilla viisi kertaa viikossa. Kausi alkoi 14.9.2026. Hallivuorot jatkuvat huhtikuun 2027 loppuun, jäsenyys syyskuun 2027 loppuun."
              : "Members get free sessions at Kontula’s Luuppi hall five times a week. The season started on 14 September 2026. Hall sessions run until the end of April 2027, and membership until the end of September 2027."}
          </p>
          <p>
            {fi
              ? "Jäsenmaksuilla on tehty muun muassa HELride 2026 -tapahtuma, Skeittikontti, leirit Eltsussa, Kontulassa ja Matinkylässä, maksuttomia kokeiluja, skeittikouluja ja ADHD-skeittikoulua. Yhdistys työllistää nuoria osa-aikaisesti ja keskustelee kaupungin kanssa sisä- ja ulkoskeittauksesta."
              : "Fees have paid for the HELride 2026 event, the Skate Container, camps at Eltsu, Kontula and Matinkylä, free try-outs, skate schools and the ADHD skate school. The association employs young people part-time and talks with the city about indoor and outdoor skating."}
          </p>
          <p>
            {fi
              ? "Toiminnan mahdollistavat jäsentulot, Helsingin kaupungin toiminta-avustus ja toiminnasta saadut tulot."
              : "The work is made possible by membership income, an operating grant from the City of Helsinki, and income from the activities."}
          </p>
        </section>

        <PhotoGrid
          shots={[photos.senate, photos.kontti, photos.rediSchool]}
          locale={locale}
          className="mt-10 grid-cols-1 sm:grid-cols-3"
        />

        <section className="mt-12">
          <h2 className="font-display text-4xl uppercase">{fi ? "Vuorot" : "Sessions"}</h2>
          <Photo photo={photos.schoolFloor} locale={locale} className="mt-4 aspect-[16/9]" sizes="(min-width: 768px) 70vw, 100vw" />
          <div className="mt-4">
            <SessionTable locale={locale} />
          </div>
          <div className="mt-4 max-w-3xl space-y-3 text-mist">
            {sessionNotes[locale].map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 leading-relaxed">
          <h2 className="font-display text-4xl uppercase">{fi ? "Näin jäsenyys näytetään" : "How to show membership"}</h2>
          <p>
            {fi
              ? "Näytä maksukuitti sovelluksesta yhdessä henkilöllisyystodistuksen kanssa. Liikuntaedulla maksettu jäsenyys näytetään sen sovelluksesta. Ota kuvakaappaus valmiiksi, koska Kontulan hallin netti on heikko."
              : "Show the payment receipt in the app together with an identity document. A membership paid with exercise benefits is shown in that app. Screenshot it first, because the Kontula hall connection is weak."}
          </p>
          <p>
            {fi
              ? "Liikuntaedut: Smartum, Edenred ja ePassi. Etsi HELRIDE COLLECTIVE, maksa valmis tuote tai näppäile summa, ja lisää nimesi sekä sähköpostisi maksun lisätietoihin, jos sovellus sen sallii. Muuten laita viesti osoitteeseen helridecollective@gmail.com."
              : "Exercise benefits: Smartum, Edenred and ePassi. Search for HELRIDE COLLECTIVE, pay the product or type the amount, and add your name and email in the payment note if the app allows it. Otherwise email helridecollective@gmail.com."}
          </p>
          <h3 className="pt-4 font-display text-3xl uppercase">{fi ? "Perhe" : "Families"}</h3>
          <p>
            {fi
              ? "Alle kouluikäiset ovat aina maksutta. Aikuinen ja lapsi: 2 × jäsenmaksu. Aikuinen ja kaksi lasta: 2,5 × jäsenmaksu. Aikuinen ja kolme lasta: 3 × jäsenmaksu. Toisesta lapsesta eteenpäin lapset ovat puoleen hintaan."
              : "Children under school age are always free. Adult and one child: 2 × the fee. Adult and two children: 2.5 × the fee. Adult and three children: 3 × the fee. From the second child onward, children are half price."}
          </p>
          <h3 className="pt-4 font-display text-3xl uppercase">{fi ? "Turisti-lippu" : "Tourist ticket"}</h3>
          <p>
            {fi
              ? `Turisti-lippu maksaa ${prices.tourist} € ja sillä voi käydä jäsenvuorolla kerran kaudessa. Se ei ole kertamaksu, jolla voisi tulla uudestaan. Lipun voi maksaa myös MobilePaylla numeroon ${org.mobilePay}.`
              : `A tourist ticket costs ${prices.tourist} € and can be used once per season. It is not a day ticket for repeat visits. You can also pay it by MobilePay to ${org.mobilePay}.`}
          </p>
        </section>

        <PhotoGrid shots={[photos.schoolWide, photos.campBowl]} locale={locale} className="mt-12 grid-cols-1 md:grid-cols-2" />

        <section className="mt-12 max-w-3xl space-y-4 border border-white/15 p-5 leading-relaxed">
          <h2 className="font-display text-4xl uppercase">{fi ? "Millä jäsenvuoroilla liikutaan" : "What you ride at member sessions"}</h2>
          <p>
            {fi
              ? "HELriden hallitus on linjannut, että jäsenvuoroilla liikutaan tavanomaisella skeittilaudalla tai surfskatella. Vuoroilla ei scootata eikä käytetä longboardia, snakeboardia, bleidejä, bmx-pyörää tai muuta vastaavaa."
              : "The HELride board has decided that member sessions are for a regular skateboard or a surfskate. Scooters, longboards, snakeboards, blades, BMX bikes and similar gear are not used on these sessions."}
          </p>
          <p>
            {fi
              ? "Linjaus ei arvota muita lautailun muotoja alemmas. Se rajaa vuorot siihen skeittaukseen, jota yhdistys on perustettu tekemään. Se koskee vain HELriden jäsenvuoroja, ei Kontulan hallin avoimia kaupungin vuoroja. Helsingissä on yhdistyksiä muillekin lajeille."
              : "The rule does not rank other kinds of boarding below skateboarding. It keeps the sessions for the skating the association was founded to support. It applies only to HELride member sessions, not to the city’s open sessions in the hall. Helsinki has associations for other disciplines too."}
          </p>
        </section>
      </Container>
    </>
  );
}
