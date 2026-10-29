import type { Locale } from "@/lib/locale";
import type { PageId } from "@/lib/routes";

export const ui: Record<
  Locale,
  {
    skip: string;
    menu: string;
    close: string;
    language: string;
    membershipCta: string;
    newTab: string;
    nav: Record<PageId, string>;
    footerBlurb: string;
    rights: string;
    sourceNote: string;
    ongoing: string;
    archive: string;
    on: string;
    past: string;
    soon: string;
    readMore: string;
    allProjects: string;
    backToProjects: string;
    shop: string;
    address: string;
  }
> = {
  fi: {
    skip: "Siirry sisältöön",
    menu: "Valikko",
    close: "Sulje",
    language: "Kieli",
    membershipCta: "Jäseneksi",
    newTab: "avautuu uuteen välilehteen",
    nav: {
      events: "Tapahtumat",
      school: "Skeittikoulu",
      projects: "Projektit",
      membership: "Jäsenyys",
      about: "Meistä",
      spots: "Spotit",
      safer: "Turvallisempi tila",
      join: "Tule mukaan",
      contact: "Yhteys",
      privacy: "Tietosuoja",
      accessibility: "Saavutettavuus",
    },
    footerBlurb:
      "Helsinkiläinen skeittiyhdistys. Jäsenvuorot, skeittikoulu ja kesän Skeittikontti.",
    rights: "HELride Collective ry",
    sourceNote:
      "Tekstit on koottu yhdistyksen julkisista tiedoista 29.10.2026. Ajankohdat ja hinnat kannattaa tarkistaa ennen osallistumista.",
    ongoing: "Jatkuva",
    archive: "Tehty",
    on: "Käynnissä",
    past: "Päättynyt",
    soon: "Tulossa",
    readMore: "Lue lisää",
    allProjects: "Kaikki projektit",
    backToProjects: "Kaikki projektit",
    shop: "Verkkokauppa",
    address: "Postiosoite",
  },
  en: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    language: "Language",
    membershipCta: "Become a member",
    newTab: "opens in a new tab",
    nav: {
      events: "Events",
      school: "Skate school",
      projects: "Projects",
      membership: "Membership",
      about: "About",
      spots: "Spots",
      safer: "Safer space",
      join: "Get involved",
      contact: "Contact",
      privacy: "Privacy",
      accessibility: "Accessibility",
    },
    footerBlurb:
      "A Helsinki skateboarding association. Member sessions, skate school and the summer Skate Container.",
    rights: "HELride Collective ry",
    sourceNote:
      "Copy compiled from the association’s public information on 29 October 2026. Check times and prices before you take part.",
    ongoing: "Ongoing",
    archive: "Done",
    on: "On now",
    past: "Ended",
    soon: "Coming up",
    readMore: "Read more",
    allProjects: "All projects",
    backToProjects: "All projects",
    shop: "Online shop",
    address: "Postal address",
  },
};
