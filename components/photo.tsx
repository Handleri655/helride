import Image from "next/image";
import type { SitePhoto } from "@/content/photos";
import { tx, type Locale } from "@/lib/locale";

export function PhotoGrid({
  shots,
  locale,
  className = "grid-cols-2 md:grid-cols-3",
}: {
  shots: SitePhoto[];
  locale: Locale;
  className?: string;
}) {
  return (
    <div className={`grid gap-2 ${className}`}>
      {shots.map((photo) => (
        <Photo
          key={photo.src}
          photo={photo}
          locale={locale}
          className="aspect-[4/3]"
          sizes="(min-width: 768px) 33vw, 50vw"
        />
      ))}
    </div>
  );
}

export function Photo({
  photo,
  locale,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "aspect-[3/2]",
}: {
  photo: SitePhoto;
  locale: Locale;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const contain = photo.fit === "contain";

  return (
    <figure className={`relative overflow-hidden bg-black ${className}`}>
      <Image
        src={photo.src}
        alt={tx(locale, photo.alt)}
        fill
        priority={priority}
        sizes={sizes}
        className={contain ? "object-contain" : "object-cover"}
      />
      {photo.credit ? (
        <figcaption className="absolute right-2 bottom-2 bg-black/75 px-2 py-1 text-[11px] tracking-wide text-paper">
          {tx(locale, photo.credit)}
        </figcaption>
      ) : null}
    </figure>
  );
}
