"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/locale";
import { homePath, pagePath, switchLocale, type PageId } from "@/lib/routes";
import { buttonClass } from "@/components/ui";

const primary: PageId[] = ["events", "school", "projects", "membership", "about"];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "fi";
  const copy = ui[locale];
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = primary.map((id) => ({
    href: pagePath(locale, id),
    label: copy.nav[id],
  }));

  return (
    <header className="sticky top-0 z-40 border-b-2 border-signal bg-ink/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href={homePath(locale)} className="block shrink-0">
          <Image
            src="/helride-logo.png"
            alt="HELride Collective"
            width={1071}
            height={264}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label={copy.menu}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`font-display text-lg uppercase tracking-wide ${
                isActive(pathname, link.href) ? "text-signal" : "text-paper hover:text-signal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <nav aria-label={copy.language} className="flex items-center gap-2 font-display text-lg uppercase">
            <Link
              href={switchLocale(pathname, "fi")}
              hrefLang="fi"
              lang="fi"
              aria-current={locale === "fi" ? "true" : undefined}
              className={locale === "fi" ? "text-signal" : "text-mist hover:text-paper"}
            >
              FI
            </Link>
            <span aria-hidden="true" className="text-mist">
              /
            </span>
            <Link
              href={switchLocale(pathname, "en")}
              hrefLang="en"
              lang="en"
              aria-current={locale === "en" ? "true" : undefined}
              className={locale === "en" ? "text-signal" : "text-mist hover:text-paper"}
            >
              EN
            </Link>
          </nav>
          <Link href={pagePath(locale, "membership")} className={`${buttonClass("signal")} hidden lg:inline-flex`}>
            {copy.membershipCta}
          </Link>
          <button
            type="button"
            className="min-h-12 px-3 font-display text-lg uppercase text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? copy.close : copy.menu}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-white/10 px-5 py-4 lg:hidden" aria-label={copy.menu}>
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className="block border-b border-white/10 py-3 font-display text-3xl uppercase text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={pagePath(locale, "contact")} className="block py-3 font-display text-3xl uppercase text-signal">
                {copy.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
