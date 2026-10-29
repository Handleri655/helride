import type { Locale } from "@/lib/locale";
import type { PageId } from "@/lib/routes";

export const pageSeo: Record<PageId | "home", Record<Locale, { title: string; description: string }>> = {
  home: {
    fi: {
      title: "HELride Collective — Skeittauksen asialla Helsingissä",
      description:
        "Helsinkiläinen skeittiyhdistys. Kontulan jäsenvuorot, skeittikoulu ja kesän Skeittikontti Eläintarhassa.",
    },
    en: {
      title: "HELride Collective — For skateboarding in Helsinki",
      description:
        "A Helsinki skateboarding association. Member sessions in Kontula, skate school and the summer Skate Container at Eläintarha.",
    },
  },
  events: {
    fi: {
      title: "Tapahtumat",
      description: "Kontulan jäsenvuorot, skeittikoulu, leirit ja päättynyt Skeittikontin kausi 2026.",
    },
    en: {
      title: "Events",
      description: "Kontula member sessions, skate school, camps and the finished 2026 Skate Container season.",
    },
  },
  school: {
    fi: {
      title: "Skeittikoulu",
      description: "Skeittikoulua lapsille, nuorille ja aikuisille Helsingissä. Talvella Kontulassa, kesällä Eläintarhassa.",
    },
    en: {
      title: "Skate school",
      description: "Skate school for children, young people and adults in Helsinki. Kontula in winter, Eläintarha in summer.",
    },
  },
  projects: {
    fi: {
      title: "Projektit",
      description: "Skeittikontti, HELride-tapahtuma, Redi, Kaisaniemi ja muut Helsingin skeittihankkeet.",
    },
    en: {
      title: "Projects",
      description: "The Skate Container, the HELride event, Redi, Kaisaniemi and other Helsinki skate projects.",
    },
  },
  membership: {
    fi: {
      title: "Jäsenyys",
      description: "HELriden jäsenyys kaudelle 2026–2027. Early bird 49 € lokakuun loppuun, sitten 65 €.",
    },
    en: {
      title: "Membership",
      description: "HELride membership for 2026–2027. Early bird 49 € through October, then 65 €.",
    },
  },
  about: {
    fi: {
      title: "Meistä",
      description: "HELride Collective on helsinkiläinen skeittiyhdistys. Tapahtuma vuodesta 2015.",
    },
    en: {
      title: "About",
      description: "HELride Collective is a Helsinki skateboarding association. The event has run since 2015.",
    },
  },
  spots: {
    fi: {
      title: "Spotit",
      description: "Kontula, Eläintarha, Kaisaniemi, Redi ja Matinkylä. Osoitteet ja karttalinkit.",
    },
    en: {
      title: "Spots",
      description: "Kontula, Eläintarha, Kaisaniemi, Redi and Matinkylä. Addresses and map links.",
    },
  },
  safer: {
    fi: {
      title: "Turvallisempi tila",
      description: "HELriden julkaistu turvallisemman tilan periaate ja miten siitä ilmoitetaan.",
    },
    en: {
      title: "Safer space",
      description: "HELride’s published safer-space principle and how to report a concern.",
    },
  },
  join: {
    fi: {
      title: "Tule mukaan",
      description: "Liity jäseneksi, tule vapaaehtoiseksi tai ehdota yhteistyötä HELride Collectiven kanssa.",
    },
    en: {
      title: "Get involved",
      description: "Become a member, volunteer, or propose a partnership with HELride Collective.",
    },
  },
  contact: {
    fi: {
      title: "Yhteys",
      description: "HELride Collectiven sähköpostit, postiosoite ja yhteydenottolomake.",
    },
    en: {
      title: "Contact",
      description: "Email addresses, the postal address and the contact form for HELride Collective.",
    },
  },
  privacy: {
    fi: {
      title: "Tietosuoja",
      description: "Miten HELriden sivusto käsittelee yhteydenottoja ja mitä evästeitä se ei käytä.",
    },
    en: {
      title: "Privacy",
      description: "How the HELride site handles messages, and the cookies it does not use.",
    },
  },
  accessibility: {
    fi: {
      title: "Saavutettavuus",
      description: "HELriden sivuston saavutettavuus ja tunnetut rajaukset.",
    },
    en: {
      title: "Accessibility",
      description: "Accessibility of the HELride site and the known limits.",
    },
  },
};
