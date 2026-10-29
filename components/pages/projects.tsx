import Link from "next/link";
import { projects, type Project } from "@/content/catalog";
import { projectGalleries } from "@/content/photos";
import { ui } from "@/content/ui";
import { tx, type Locale } from "@/lib/locale";
import { pagePath, projectPath } from "@/lib/routes";
import { Photo } from "@/components/photo";
import { YoutubePlayer } from "@/components/youtube";
import { skateparkVideos } from "@/content/videos";
import { buttonClass, Container, ExternalLink, PageHeader } from "@/components/ui";

const intro = {
  fi: {
    kicker: "Arkisto",
    title: "Projektit",
    lede: "HELride on rakentanut, parantanut ja pitänyt yllä Helsingin skeittipaikkoja vuodesta 2015. Tähän on koottu yhdistyksen julkaisema projektlista.",
  },
  en: {
    kicker: "Archive",
    title: "Projects",
    lede: "HELride has built, improved and looked after skate spots in Helsinki since 2015. This is the project list the association has published.",
  },
};

export function ProjectsPage({ locale }: { locale: Locale }) {
  const text = intro[locale];
  const labels = ui[locale];
  const groups = [
    { status: "ongoing" as const, label: labels.ongoing },
    { status: "archive" as const, label: labels.archive },
  ];

  return (
    <>
      <PageHeader kicker={text.kicker} title={text.title} lede={text.lede} />
      <Container className="space-y-14 py-14">
        {groups.map((group) => (
          <section key={group.status}>
            <h2 className="font-display text-4xl uppercase text-signal">{group.label}</h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {projects
                .filter((project) => project.status === group.status)
                .map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={projectPath(locale, project.slug)}
                      className="group block h-full border border-white/15 hover:bg-signal hover:text-ink"
                    >
                      {projectGalleries[project.slug]?.[0] ? (
                        <Photo
                          photo={projectGalleries[project.slug][0]}
                          locale={locale}
                          className={projectGalleries[project.slug][0].fit === "contain" ? "aspect-[3/4]" : "aspect-[16/10]"}
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
          </section>
        ))}
      </Container>
    </>
  );
}

export function ProjectDetail({ locale, project }: { locale: Locale; project: Project }) {
  const labels = ui[locale];

  return (
    <>
      <PageHeader
        kicker={project.year}
        title={tx(locale, project.title)}
        lede={tx(locale, project.summary)}
      />
      <Container className="py-14">
        {projectGalleries[project.slug] ? (
          <div className="grid gap-4 md:grid-cols-2">
            {projectGalleries[project.slug].map((photo) => (
              <Photo
                key={photo.src}
                photo={photo}
                locale={locale}
                className={photo.fit === "contain" ? "aspect-[3/4]" : "aspect-[3/2]"}
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            ))}
          </div>
        ) : null}
        {project.place ? <p className="mt-8 font-display text-2xl uppercase text-signal">{tx(locale, project.place)}</p> : null}
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed">
          {project.body[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {project.slug === "skateparks-of-hel" ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {skateparkVideos.map((video) => (
              <YoutubePlayer
                key={video.id}
                video={video}
                playLabel={locale === "fi" ? "Toista" : "Play"}
              />
            ))}
          </div>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={pagePath(locale, "projects")} className={buttonClass("ghost")}>
            {labels.backToProjects}
          </Link>
          {project.href ? (
            <ExternalLink href={project.href} newTab={labels.newTab} className={buttonClass("signal")}>
              YouTube
            </ExternalLink>
          ) : null}
          {project.slug === "skeittikontti" ? (
            <Link href={pagePath(locale, "school")} className={buttonClass("signal")}>
              {labels.nav.school}
            </Link>
          ) : null}
        </div>
      </Container>
    </>
  );
}
