import type { Locale } from "@/lib/locale";

export type SitePhoto = {
  src: string;
  alt: Record<Locale, string>;
  credit?: Record<Locale, string>;
  fit?: "cover" | "contain";
};

const keke = { fi: "Kuva: Keke Leppälä", en: "Photo: Keke Leppälä" };

export const photos = {
  hero: {
    src: "/photos/helsinki.jpg",
    alt: {
      fi: "Skeittari hyppää rampilta yleisön edessä HELride-tapahtumassa Helsingissä.",
      en: "A skater jumps a ramp in front of a crowd at the HELride event in Helsinki.",
    },
    credit: keke,
  },
  crowd: {
    src: "/photos/hero.jpg",
    alt: {
      fi: "Yleisö ympäröi kaidetta HELride-tapahtumassa.",
      en: "A crowd surrounds a rail at the HELride event.",
    },
    credit: keke,
  },
  poster: {
    src: "/photos/event.jpg",
    alt: {
      fi: "HELride 2026 -juliste. Tapahtuma 3.–5.7. Suvilahdessa, Senaatintorilla ja Alppipuistossa.",
      en: "HELride 2026 poster. The event ran 3–5 July at Suvilahti, Senate Square and Alppipuisto.",
    },
    fit: "contain" as const,
  },
  suvilahti: {
    src: "/photos/suvilahti.jpg",
    alt: {
      fi: "Skeittari ilmalennossa Suvilahden rampilla HELride-tapahtumassa.",
      en: "A skater in the air above the Suvilahti ramp at the HELride event.",
    },
    credit: keke,
  },
  kontti: {
    src: "/photos/kontti.jpg",
    alt: {
      fi: "Lapsia ja nuoria skeittaamassa Eläintarhan skeittipuistossa Skeittikontin aikaan.",
      en: "Children and young people skating at Eläintarha skatepark during the Skate Container season.",
    },
  },
  konttiLine: {
    src: "/photos/kontti-2.jpg",
    alt: {
      fi: "Skeittikoululaisia jonossa Eläintarhan skeittipuistossa.",
      en: "Skate-school riders lined up at Eläintarha skatepark.",
    },
  },
  hall: {
    src: "/photos/kontula-hall.jpg",
    alt: {
      fi: "Kontulan skeittihalli Luuppi sisältä.",
      en: "Inside Kontula skate hall, Luuppi.",
    },
  },
  school: {
    src: "/photos/school-1.jpg",
    alt: {
      fi: "Lasten skeittikouluryhmä harjoittelee hallissa.",
      en: "A children's skate-school group practising in the hall.",
    },
    credit: keke,
  },
  schoolTalk: {
    src: "/photos/school-2.jpg",
    alt: {
      fi: "Ohjaaja ja skeittikoululaisia istumassa hallin lattialla.",
      en: "A coach and skate-school riders sitting on the hall floor.",
    },
    credit: keke,
  },
  camp: {
    src: "/photos/camp.jpg",
    alt: {
      fi: "Skeittileirin osallistujat laudat ylhäällä kesäisessä puistossa.",
      en: "Skate-camp riders holding their boards up in a summer park.",
    },
  },
  redi: {
    src: "/photos/redi-wallride.jpg",
    alt: {
      fi: "Skeittari Redin skeittiparkin seinällä.",
      en: "A skater on the wall at Redi skatepark.",
    },
    credit: keke,
  },
  hallSchool: {
    src: "/photos/hall-school.jpg",
    alt: {
      fi: "Skeittikouluryhmä Kontulan hallin luolassa.",
      en: "A skate-school group in the Kontula hall cave.",
    },
    credit: keke,
  },
  hallBowl: {
    src: "/photos/hall-school-2.jpg",
    alt: {
      fi: "Neljä skeittaajaa Kontulan hallin kulhossa.",
      en: "Four skaters in the bowl at Kontula hall.",
    },
    credit: keke,
  },
  schoolWide: {
    src: "/photos/school-wide.jpg",
    alt: {
      fi: "Skeittikoululaisia harjoittelemassa sisäparkissa.",
      en: "Skate-school riders practising in an indoor park.",
    },
  },
  schoolFloor: {
    src: "/photos/school-3.jpg",
    alt: {
      fi: "Skeittaajia hallin lattialla ja rampeilla.",
      en: "Skaters on the hall floor and the ramps.",
    },
    credit: keke,
  },
  senate: {
    src: "/photos/home-1.jpg",
    alt: {
      fi: "HELride-tapahtuman yleisö Senaatintorin portailla.",
      en: "The HELride event crowd on the steps of Senate Square.",
    },
  },
  manual: {
    src: "/photos/redi-blunt.jpg",
    alt: {
      fi: "Skeittari manuaalissa Redin skeittiparkissa.",
      en: "A skater in a manual at Redi skatepark.",
    },
    credit: keke,
  },
  smith: {
    src: "/photos/redi-smith.jpg",
    alt: {
      fi: "Skeittari grindaa kaidetta Redin skeittiparkissa.",
      en: "A skater grinds a rail at Redi skatepark.",
    },
    credit: keke,
  },
  rediSchool: {
    src: "/photos/redi-school.jpg",
    alt: {
      fi: "Lapsi skeittaa Redin skeittiparkin skeittikoulussa.",
      en: "A child skating at skate school in Redi skatepark.",
    },
    credit: keke,
  },
  siv: {
    src: "/photos/valvoja-siv.jpg",
    alt: {
      fi: "Valvoja Siv.",
      en: "Supervisor Siv.",
    },
  },
  janne: {
    src: "/photos/valvoja-janne.jpg",
    alt: {
      fi: "Valvoja Janne.",
      en: "Supervisor Janne.",
    },
  },
  aleksi: {
    src: "/photos/valvoja-aleksi.jpg",
    alt: {
      fi: "Valvoja Aleksi Lipponen.",
      en: "Supervisor Aleksi Lipponen.",
    },
  },
  kaisaniemi: {
    src: "/photos/kaisaniemi.jpg",
    alt: {
      fi: "Skeittari Kaisaniemen minirampin kannella.",
      en: "A skater on the deck of the Kaisaniemi miniramp.",
    },
  },
  matinkyla: {
    src: "/photos/matinkyla.jpg",
    alt: {
      fi: "Skeittari Matinkylän skeittiparkin betonilla.",
      en: "A skater on the concrete at Matinkylä skatepark.",
    },
  },
  campBowl: {
    src: "/photos/camp-2.jpg",
    alt: {
      fi: "Skeittileirin osallistujia minirampilla.",
      en: "Skate-camp riders on a miniramp.",
    },
  },
} satisfies Record<string, SitePhoto>;

export const projectGalleries: Record<string, SitePhoto[]> = {
  skeittikontti: [photos.kontti, photos.konttiLine, photos.camp],
  "helride-tapahtuma": [photos.senate, photos.crowd, photos.poster, photos.suvilahti],
  "redin-skeittiparkki": [photos.redi, photos.smith, photos.manual, photos.rediSchool],
  "redin-kamat": [photos.smith, photos.manual],
  "eltsun-valot": [photos.kontti],
};

export const spotPhotos: Record<string, SitePhoto> = {
  kontula: photos.hall,
  eltsu: photos.kontti,
  kaisaniemi: photos.kaisaniemi,
  redi: photos.redi,
  matinkyla: photos.matinkyla,
};
