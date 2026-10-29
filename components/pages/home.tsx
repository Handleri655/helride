import Link from "next/link";
import Image from "next/image";
import { agenda, org, prices, projects, sessionNotes } from "@/content/catalog";
import { photos, projectGalleries } from "@/content/photos";
import { ui } from "@/content/ui";
import { tx, type Locale } from "@/lib/locale";
import { pagePath, projectPath } from "@/lib/routes";
import { Photo, PhotoGrid } from "@/components/photo";
import { YoutubePlayer } from "@/components/youtube";
import { skateparkVideos } from "@/content/videos";
import { SessionTable } from "@/components/session-table";
import { buttonClass, Container, ExternalLink } from "@/components/ui";

const copy = {
  fi: {
    kicker: "Helsinki · yhdistys",
    title: "Skeittauksen asialla Helsingissä.",
    lede: "HELride Collective pitää Kontulan hallilla jäsenvuoroja, opettaa skeittausta läpi vuoden ja avaa kesäksi Skeittikontin Eläintarhan skeittipuistoon.",
    bar: `Jäsenyys ${prices.early} € asti ${prices.earlyBirdUntil}. Sen jälkeen ${prices.regular} €. Hallivuorot käynnissä ${prices.hallUntil.fi}.`,
    sessionsTitle: "Hallivuorot nyt",
    sessionsLede: "Talvikausi 2026–2027, Kontulan skeittihalli Luuppi. Jäsenyys vaaditaan.",
    place: "Emännänpolku 1. Google Maps voi viedä viereiseen taloon: sisäänkäynti on väestönsuojan ovesta, noin 100 metriä metroasemalta itään.",
    doorsTitle: "Mitä nyt",
    doors: [
      {
        n: "01",
        title: "Jäsenyys",
        text: `${prices.early} € lokakuun 2026 loppuun, sitten ${prices.regular} €. Kausi 26/27 kestää ${prices.seasonEnd.fi}.`,
        href: pagePath("fi", "membership"),
      },
      {
        n: "02",
        title: "Skeittikoulu",
        text: "Lapsille, nuorille ja aikuisille. Talvella lauantaisin Kontulassa klo 10–12.",
        href: pagePath("fi", "school"),
      },
      {
        n: "03",
        title: "Skeittikontti",
        text: "Kesän 2026 kausi Eläintarhassa päättyi 28.8. Seuraava kesä julkaistaan, kun se varmistuu.",
        href: projectPath("fi", "skeittikontti"),
      },
    ],
    projectsTitle: "Projektit",
    projectsLede: "Parkkeja, kontti, tapahtuma ja videot. Helsingin skeittausta vuodesta 2015.",
    saferKicker: "Turvallisempi tila",
    saferLink: "Lue periaate",
    follow: "Seuraa",
    followText: "Ajankohtaiset kuvat ja muutokset liikkuvat nopeimmin Instagramissa. Tälle sivustolle ei upoteta syötettä, jotta sivulla ei ole ulkopuolista seurantaa.",
  },
  en: {
    kicker: "Helsinki · association",
    title: "For skateboarding in Helsinki.",
    lede: "HELride Collective runs member sessions at the Kontula skate hall, teaches skating through the year, and opens the Skate Container at Eläintarha skatepark for the summer.",
    bar: `Membership ${prices.early} € until ${prices.earlyBirdUntil}. Then ${prices.regular} €. Hall sessions run until ${prices.hallUntil.en}.`,
    sessionsTitle: "Hall sessions now",
    sessionsLede: "Winter season 2026–2027 at Kontula skate hall, Luuppi. Membership is required.",
    place: "Emännänpolku 1. Google Maps can point to the neighbouring building: the entrance is the civil-defence door, about 100 metres east of the metro station.",
    doorsTitle: "Right now",
    doors: [
      {
        n: "01",
        title: "Membership",
        text: `${prices.early} € through October 2026, then ${prices.regular} €. Season 26/27 lasts until ${prices.seasonEnd.en}.`,
        href: pagePath("en", "membership"),
      },
      {
        n: "02",
        title: "Skate school",
        text: "For children, young people and adults. In winter, Saturdays in Kontula at 10:00–12:00.",
        href: pagePath("en", "school"),
      },
      {
        n: "03",
        title: "Skate Container",
        text: "The 2026 summer season at Eläintarha ended on 28 August. The next summer will be announced when it is confirmed.",
        href: projectPath("en", "skeittikontti"),
      },
    ],
    projectsTitle: "Projects",
    projectsLede: "Parks, the container, the event and videos. Skateboarding in Helsinki since 2015.",
    saferKicker: "Safer space",
    saferLink: "Read the principle",
    follow: "Follow",
    followText: "Photos and last-minute changes move fastest on Instagram. This site does not embed the feed, so there is no third-party tracking.",
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const labels = ui[locale];
  const featured = projects.slice(0, 4);
  const ticker = projects.map((project) => tx(locale, project.title)).join("  ·  ");
  const next = agenda[0];

  return (
    <>
      <p className="bg-signal px-5 py-3 text-center text-sm font-semibold text-ink md:text-base">
        <Link href={pagePath(locale, "membership")} className="underline decoration-ink underline-offset-4">
          {text.bar}
        </Link>
      </p>

      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <Image
          src={photos.hero.src}
          alt={tx(locale, photos.hero.alt)}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
        <Container className="relative flex min-h-[92vh] flex-col justify-end py-10 md:py-14">
          <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="font-display text-xl uppercase tracking-[0.18em] text-signal">{text.kicker}</p>
              <h1 className="mt-4 max-w-4xl font-display text-6xl uppercase leading-[0.84] text-paper sm:text-7xl md:text-8xl">
                {text.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper">{text.lede}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={pagePath(locale, "membership")} className={buttonClass("signal")}>
                  {labels.membershipCta}
                </Link>
                <Link href={pagePath(locale, "school")} className={buttonClass("ghost")}>
                  {labels.nav.school}
                </Link>
              </div>
            </div>
            <aside className="bg-signal p-6 text-ink">
              <p className="font-display text-lg uppercase tracking-[0.16em]">{labels.on}</p>
              <h2 className="mt-2 font-display text-5xl uppercase leading-none">{tx(locale, next.title)}</h2>
              <p className="mt-3 text-sm">{tx(locale, next.when)}</p>
              <p className="mt-4 leading-relaxed">{tx(locale, next.summary)}</p>
              <Link href={`${pagePath(locale, "events")}#sessions`} className={`${buttonClass("ink")} mt-6`}>
                {text.sessionsTitle}
              </Link>
            </aside>
          </div>
          {photos.hero.credit ? (
            <p className="mt-6 text-xs tracking-wide text-paper/80">{tx(locale, photos.hero.credit)}</p>
          ) : null}
        </Container>
      </section>

      <div className="overflow-hidden border-y border-white/10" aria-hidden="true">
        <div className="ticker flex w-max">
          <p className="px-6 py-3 font-display text-2xl uppercase tracking-wide text-mist">{ticker}</p>
          <p className="ticker-copy px-6 py-3 font-display text-2xl uppercase tracking-wide text-mist">{ticker}</p>
        </div>
      </div>

      <section id="sessions" className="scroll-mt-24">
        <Container className="py-16">
          <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">{text.sessionsTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg text-mist">{text.sessionsLede}</p>
          <div className="mt-8 grid items-start gap-4 lg:grid-cols-[1.4fr_0.8fr]">
            <SessionTable locale={locale} />
            <PhotoGrid shots={[photos.hallBowl, photos.schoolWide]} locale={locale} className="grid-cols-1" />
          </div>
          <p className="mt-4 max-w-2xl text-mist">{text.place}</p>
          <ul className="mt-6 max-w-3xl space-y-3 text-mist">
            {sessionNotes[locale].slice(0, 3).map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <h2 className="font-display text-5xl uppercase md:text-7xl">{text.doorsTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {text.doors.map((door, index) => {
              const shot = [photos.hall, photos.school, photos.kontti][index];
              return (
                <Link key={door.n} href={door.href} className="group bg-black text-ink">
                  <Photo photo={shot} locale={locale} className="aspect-[4/3]" sizes="(min-width: 768px) 33vw, 100vw" />
                  <div className="bg-signal p-5">
                    <p className="font-display text-xl">{door.n}</p>
                    <h3 className="mt-1 font-display text-4xl uppercase leading-none group-hover:underline">{door.title}</h3>
                    <p className="mt-3 leading-relaxed">{door.text}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-5xl uppercase md:text-7xl">{text.projectsTitle}</h2>
              <p className="mt-4 max-w-xl text-lg text-mist">{text.projectsLede}</p>
            </div>
            <Link href={pagePath(locale, "projects")} className={buttonClass("ghost")}>
              {labels.allProjects}
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((project) => (
              <li key={project.slug}>
                <Link href={projectPath(locale, project.slug)} className="group block h-full border border-white/15 hover:bg-signal hover:text-ink">
                  {projectGalleries[project.slug]?.[0] ? (
                    <Photo
                      photo={projectGalleries[project.slug][0]}
                      locale={locale}
                      className="aspect-[16/10]"
                      sizes="(min-width: 768px) 40vw, 100vw"
                    />
                  ) : null}
                  <div className="p-5">
                    <p className="font-display text-xl uppercase tracking-wide text-signal group-hover:text-ink">
                      {project.year}
                    </p>
                    <h3 className="mt-3 font-display text-4xl uppercase leading-none">{tx(locale, project.title)}</h3>
                    <p className="mt-3 leading-relaxed">{tx(locale, project.summary)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-5xl uppercase md:text-7xl">Skateparks of HEL</h2>
              <p className="mt-4 max-w-xl text-lg text-mist">
                {locale === "fi"
                  ? "Yhdistyksen videosarja Helsingin skeittiparkeista. Play käynnistää videon tällä sivulla."
                  : "The association’s video series on Helsinki skateparks. Play starts the video on this page."}
              </p>
            </div>
            <Link href={projectPath(locale, "skateparks-of-hel")} className={buttonClass("ghost")}>
              {locale === "fi" ? "Kaikki jaksot" : "All episodes"}
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {skateparkVideos
              .filter((video) => ["v6JvZ6q-NvE", "H3zjjKLsqIM", "cBWSIWdPIBk"].includes(video.id))
              .map((video) => (
                <YoutubePlayer key={video.id} video={video} playLabel={locale === "fi" ? "Toista" : "Play"} />
              ))}
          </div>
        </Container>
      </section>

      <section className="bg-signal text-ink">
        <Container className="grid gap-6 py-14 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-display text-xl uppercase tracking-[0.16em]">{text.saferKicker}</p>
            <p className="mt-4 max-w-3xl font-display text-3xl uppercase leading-tight md:text-5xl">
              {locale === "fi"
                ? "Kenenkään ei tarvitse pelätä tai kohdata häirintää."
                : "Nobody should have to fear or face harassment."}
            </p>
          </div>
          <Link href={pagePath(locale, "safer")} className={buttonClass("ink")}>
            {text.saferLink}
          </Link>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-4 py-14 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-5xl uppercase">{text.follow}</h2>
            <p className="mt-3 max-w-xl text-mist">{text.followText}</p>
          </div>
          <ExternalLink href={org.instagram} newTab={labels.newTab} className={buttonClass("signal")}>
            Instagram
          </ExternalLink>
        </Container>
      </section>
    </>
  );
}
