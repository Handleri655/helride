import Link from "next/link";
import { agenda, sessionNotes, supervisors } from "@/content/catalog";
import { ui } from "@/content/ui";
import { tx, type Locale } from "@/lib/locale";
import { pagePath } from "@/lib/routes";
import { photos } from "@/content/photos";
import { Photo, PhotoGrid } from "@/components/photo";
import { SessionTable } from "@/components/session-table";
import { buttonClass, Container, PageHeader } from "@/components/ui";
import type { AgendaStatus } from "@/content/catalog";

const intro = {
  fi: {
    kicker: "Kalenteri",
    title: "Mitä on menossa",
    lede: "Talvella skeitataan Kontulan hallilla. Skeittikontin kesä 2026 on päättynyt, ja seuraava kesä julkaistaan kun se on varmistunut.",
  },
  en: {
    kicker: "Calendar",
    title: "What is on",
    lede: "In winter the skating is at Kontula hall. The Skate Container summer of 2026 has ended, and the next summer will be published once it is confirmed.",
  },
};

const order: AgendaStatus[] = ["on", "soon", "past"];

export function EventsPage({ locale }: { locale: Locale }) {
  const text = intro[locale];
  const labels = ui[locale];

  return (
    <>
      <PageHeader kicker={text.kicker} title={text.title} lede={text.lede} />
      <PhotoGrid shots={[photos.hall, photos.hallSchool, photos.schoolFloor]} locale={locale} />
      <Container className="py-14">
        <div id="sessions" className="scroll-mt-28">
          <h2 className="font-display text-4xl uppercase md:text-6xl">
            {locale === "fi" ? "Jäsenvuorot" : "Member sessions"}
          </h2>
          <div className="mt-6">
            <SessionTable locale={locale} />
          </div>
          <div className="mt-6 max-w-3xl space-y-3 text-mist">
            {sessionNotes[locale].map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
          <h3 className="mt-10 font-display text-4xl uppercase">
            {locale === "fi" ? "Valvojat" : "Supervisors"}
          </h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {supervisors.map((person) => {
              const shot = person.name === "Siv" ? photos.siv : person.name === "Janne" ? photos.janne : photos.aleksi;
              return (
                <li key={person.name} className="border border-white/15">
                  <Photo photo={shot} locale={locale} className="aspect-[3/4]" sizes="(min-width: 768px) 30vw, 100vw" />
                  <div className="p-4">
                    <p className="font-display text-2xl uppercase">{person.name}</p>
                    <p className="mt-2 text-mist">{tx(locale, person.quote)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link href={pagePath(locale, "membership")} className={`${buttonClass("signal")} mt-8`}>
            {labels.membershipCta}
          </Link>
        </div>

        <PhotoGrid shots={[photos.senate, photos.suvilahti]} locale={locale} className="mt-16 grid-cols-1 md:grid-cols-2" />

        <div className="mt-16 space-y-12">
          {order.map((status) => {
            const items = agenda.filter((item) => item.status === status);
            return (
              <section key={status}>
                <h2 className="font-display text-4xl uppercase text-signal">{labels[status]}</h2>
                <ul className="mt-4 divide-y divide-white/15 border-y border-white/15">
                  {items.map((item) => (
                    <li key={item.id} className="grid gap-2 py-5 md:grid-cols-[14rem_1fr]">
                      <p className="font-display text-2xl uppercase">{tx(locale, item.when)}</p>
                      <div>
                        <h3 className="font-display text-3xl uppercase leading-none">{tx(locale, item.title)}</h3>
                        <p className="mt-2 text-sm text-mist">{tx(locale, item.place)}</p>
                        <p className="mt-2 max-w-2xl leading-relaxed">{tx(locale, item.summary)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </Container>
    </>
  );
}
