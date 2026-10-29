import { spots } from "@/content/catalog";
import { spotPhotos } from "@/content/photos";
import { ui } from "@/content/ui";
import { tx, type Locale } from "@/lib/locale";
import { Photo } from "@/components/photo";
import { Container, ExternalLink, PageHeader } from "@/components/ui";

export function SpotsPage({ locale }: { locale: Locale }) {
  const fi = locale === "fi";
  const labels = ui[locale];

  return (
    <>
      <PageHeader
        kicker={fi ? "Paikat" : "Places"}
        title={fi ? "Spotit" : "Spots"}
        lede={
          fi
            ? "Paikat, joissa HELride järjestää toimintaa tai joihin yhdistys on vaikuttanut. Karttalinkki avaa Google Mapsin."
            : "Places where HELride runs activities, or where the association has had a hand. The map link opens Google Maps."
        }
      />
      <Container className="py-14">
        <ul className="divide-y divide-white/15 border-y border-white/15">
          {spots.map((spot) => {
            const href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapQuery)}`;
            return (
              <li key={spot.id} className="grid gap-4 py-6 md:grid-cols-[14rem_minmax(0,0.8fr)_minmax(0,1.2fr)_auto] md:items-center">
                {spotPhotos[spot.id] ? (
                  <Photo photo={spotPhotos[spot.id]} locale={locale} className="aspect-[4/3]" sizes="16rem" />
                ) : (
                  <div className="hidden md:block" />
                )}
                <div>
                  <h2 className="font-display text-4xl uppercase leading-none">{tx(locale, spot.name)}</h2>
                  <p className="mt-2 text-mist">{spot.address}</p>
                </div>
                <p className="leading-relaxed">{tx(locale, spot.note)}</p>
                <ExternalLink
                  href={href}
                  newTab={labels.newTab}
                  className="font-display text-xl uppercase text-signal underline decoration-signal underline-offset-4"
                >
                  {fi ? "Kartta" : "Map"}
                </ExternalLink>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 max-w-3xl text-mist">
          {fi
            ? "Kaudella 2025–2026 maksuttomia kokeiluja oli myös Kontulassa, Kivikossa ja Oodissa. Ne olivat käyntejä, eivät pysyviä HELriden tiloja."
            : "In the 2025–2026 season there were also free try-outs in Kontula, Kivikko and Oodi. Those were visits, not permanent HELride spaces."}
        </p>
      </Container>
    </>
  );
}
