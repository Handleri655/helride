import { sessions } from "@/content/catalog";
import { tx, type Locale } from "@/lib/locale";

export function SessionTable({ locale, tone = "ink" }: { locale: Locale; tone?: "ink" | "paper" }) {
  const line = tone === "ink" ? "border-white/15" : "border-ink/15";
  const caption = locale === "fi" ? "Kontulan jäsenvuorot 1.10.2026 alkaen" : "Kontula member sessions from 1 October 2026";
  const headings =
    locale === "fi"
      ? ["Päivä", "Kello", "Kenelle"]
      : ["Day", "Time", "Who"];

  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr className={`border-b ${line} font-display text-lg uppercase tracking-wide`}>
          {headings.map((heading) => (
            <th key={heading} scope="col" className="py-3 pr-4 font-medium">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sessions.map((session) => (
          <tr key={session.day.fi} className={`border-b ${line}`}>
            <th scope="row" className="py-3 pr-4 font-sans text-base font-semibold">
              {tx(locale, session.day)}
            </th>
            <td className="py-3 pr-4 font-display text-2xl tracking-wide">{session.time}</td>
            <td className="py-3 pr-4">{tx(locale, session.who)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
