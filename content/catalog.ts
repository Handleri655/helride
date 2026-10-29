import type { Locale } from "@/lib/locale";

export type Localized = Record<Locale, string>;

export const org = {
  name: "HELride Collective",
  email: "helridecollective@gmail.com",
  schoolEmail: "helrideskeittikoulu@gmail.com",
  billingEmail: "helridelaskutus@gmail.com",
  adhdEmail: "adhd.skeittikoulu@gmail.com",
  street: "Josafatinkatu 9 M 5",
  zip: "00510",
  city: "Helsinki",
  businessId: "2994810-2",
  einvoice: "003729948102",
  einvoiceOperator: "003723327487",
  einvoiceBroker: "APIX Messaging Oy",
  mobilePay: "29472",
  holvi: "https://holvi.com/shop/Helride/section/frontpage/",
  holviMembership: "https://holvi.com/shop/Helride/section/jasenmaksut/",
  instagram: "https://www.instagram.com/helridecollective",
  instagramAdhd: "https://www.instagram.com/adhd_skeittikoulu",
  facebook: "https://www.facebook.com/helride",
  youtube: "https://www.youtube.com/c/helride",
  tiktok: "https://www.tiktok.com/@helridecollective",
};

export const prices = {
  earlyBirdUntil: "31.10.2026",
  regularFrom: "1.11.2026",
  early: 49,
  regular: 65,
  familyEarly: 98,
  familyRegular: 130,
  tourist: 5,
  kidsSchool: 20,
  camp: 175,
  companyFrom: 299,
  seasonEnd: { fi: "syyskuun 2027 loppuun", en: "the end of September 2027" },
  hallUntil: { fi: "huhtikuun 2027 loppuun", en: "the end of April 2027" },
};

export const sessions: { day: Localized; time: string; who: Localized }[] = [
  {
    day: { fi: "Maanantai", en: "Monday" },
    time: "20:30–23:00",
    who: { fi: "Kaikille jäsenille", en: "All members" },
  },
  {
    day: { fi: "Keskiviikko", en: "Wednesday" },
    time: "20:30–22:30",
    who: { fi: "Kaikille jäsenille", en: "All members" },
  },
  {
    day: { fi: "Perjantai", en: "Friday" },
    time: "12:00–14:00",
    who: { fi: "Kaikille jäsenille", en: "All members" },
  },
  {
    day: { fi: "Lauantai", en: "Saturday" },
    time: "18:00–21:00",
    who: { fi: "K16-vuoro", en: "Ages 16 and over" },
  },
  {
    day: { fi: "Sunnuntai", en: "Sunday" },
    time: "15:00–18:00",
    who: {
      fi: "Aloittelijat, perheet ja rauhallisempi tahti",
      en: "Beginners, families and a slower pace",
    },
  },
];

export const sessionNotes: Record<Locale, string[]> = {
  fi: [
    "Talvikausi 2026–2027 on käynnissä Kontulan skeittihallilla. Tämä viiden vuoron rytmi on voimassa 1.10.2026 alkaen ja jatkuu huhtikuun 2027 loppuun. Jos kävijöitä on keväällä vähemmän, vuoroja voidaan karsia huhtikuussa.",
    "Sunnuntain vuoro on tarkoitettu aloittelijoille, perheille ja muille, jotka skeittaavat rauhallisempaan tahtiin.",
    "HELride hallinnoi hallilla vain näitä jäsenvuoroja. Avoimet vuorot kuuluvat Helsingin kaupungin nuorisotoimelle, joka ylläpitää hallia.",
    "Hallilla ei ole pukuhuoneita. Vaatteille on naulakot ja tiloissa on unisex-wc:t. Jäsenvuoroilla livestreamin kuvaaminen on kielletty.",
    "Jäsenyys näytetään maksukuitilla ja henkilöllisyystodistuksella. Hallin netti on heikko, joten ota kuitista kuvakaappaus jo ennen kuin tulet paikalle.",
  ],
  en: [
    "The 2026–2027 winter season is underway at Kontula skate hall. This five-session week applies from 1 October 2026 and runs until the end of April 2027. If visits drop in spring, some April sessions may be cut.",
    "The Sunday session is for beginners, families and anyone skating at a calmer pace.",
    "HELride runs only these member sessions in the hall. Open sessions belong to the City of Helsinki youth services, which operate the hall.",
    "There are no changing rooms. There are coat racks and unisex toilets. Livestream filming is not allowed during member sessions.",
    "Show your payment receipt and an identity document. The hall has a weak connection, so screenshot the receipt before you arrive.",
  ],
};

export const supervisors: { name: string; quote: Localized }[] = [
  {
    name: "Siv",
    quote: {
      fi: "Valvon perjantaisin ja välillä lauantaisin. Tule matalalla kynnyksellä juttelemaan.",
      en: "I supervise on Fridays and sometimes Saturdays. Come and say hello.",
    },
  },
  {
    name: "Janne",
    quote: {
      fi: "Valvon sunnuntain ja maanantain vuoroja. Temppuapua saa kysyä.",
      en: "I supervise Sunday and Monday. Ask if you want help with a trick.",
    },
  },
  {
    name: "Aleksi Lipponen",
    quote: {
      fi: "Valvon Helriden vuoroja Kontulassa. Tule skeittaamaan.",
      en: "I supervise HELride sessions in Kontula. Come and skate.",
    },
  },
];

export const board: { name: string; role: Localized }[] = [
  { name: "Sakari Leskinen", role: { fi: "Puheenjohtaja", en: "Chair" } },
  { name: "Siv Knudsen", role: { fi: "Varapuheenjohtaja", en: "Vice chair" } },
  {
    name: "Pete Ruikka",
    role: { fi: "Rahastonhoitaja ja viestintä", en: "Treasurer and communications" },
  },
  { name: "Sissi Vuorjoki", role: { fi: "Hallituksen jäsen", en: "Board member" } },
  { name: "Samu Karvonen", role: { fi: "Hallituksen jäsen", en: "Board member" } },
  { name: "Santeri Sihvonen", role: { fi: "Hallituksen jäsen", en: "Board member" } },
  { name: "Heidi Välkkilä", role: { fi: "Varajäsen", en: "Deputy member" } },
  { name: "Eelis Eronen", role: { fi: "Varajäsen", en: "Deputy member" } },
];

export const director = {
  name: "Anssi Paukkunen",
  role: { fi: "Toiminnanjohtaja", en: "Executive director" },
};

export const saferStatement: Localized = {
  fi: "Näiden periaatteiden tarkoituksena on edistää turvallisuutta lisääviä käytäntöjä ja luoda kaikkia kunnioittavampi toimintakulttuuri, jotta kenenkään ei tarvitsisi pelätä tai kohdata häirintää. Periaatteet tarjoavat välineitä ristiriitojen käsittelyyn, sen sijaan, että niitä vain siedettäisiin.",
  en: "These principles exist to strengthen practices that make the space safer and to build a culture of respect, so that nobody has to fear or face harassment. They give tools for dealing with conflict, rather than merely putting up with it.",
};

export type Project = {
  slug: string;
  year: string;
  status: "ongoing" | "archive";
  title: Localized;
  summary: Localized;
  place?: Localized;
  body: Record<Locale, string[]>;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "skeittikontti",
    year: "2019–",
    status: "ongoing",
    title: { fi: "Skeittikontti", en: "Skate Container" },
    place: {
      fi: "Eläintarhan skeittipuisto, Nordenskiöldinkatu 20",
      en: "Eläintarha skatepark, Nordenskiöldinkatu 20",
    },
    summary: {
      fi: "Maksuton kesäpaikka Eläintarhan skeittipuistossa. Kausi 2026 päättyi 28.8.",
      en: "A free summer spot at Eläintarha skatepark. The 2026 season ended on 28 August.",
    },
    body: {
      fi: [
        "Skeittikontti on toiminut vuodesta 2019. Se on nuorisohanke, joka madaltaa kynnystä tulla skeittipuistoon: kontilta saa laudan ja kypärän lainaksi panttia vastaan, vettä ja puhelimen latauksen. Ohjaajilta voi kysyä vinkkejä. Kontilla noudatetaan turvallisemman tilan periaatteita.",
        "Kausi 2026 oli auki 1.5.–28.8. Elokuussa kontti oli auki ma–pe klo 12–20. Maksutonta ohjattua kokeilua oli tiistaisin ja torstaisin klo 14–16 ilman ennakkoilmoittautumista. Lisäksi ohjelmassa oli maanantaisessarit aikuisille klo 18:00–19:30, ADHD-skeittikerho tiistaisin klo 17:00–18:30 ja skeittikerholaisten sessarit torstaisin klo 17:00–18:30.",
        "Perjantaina 7.8.2026 kontilla oli Skeittipäivä: kisoja lapsille ja nuorille, grippien maalausta, maksutonta kokeilua ja skeittikirppis. Elokuussa koululuokat saattoivat varata maksuttoman kokeilun osoitteesta helrideskeittikoulu@gmail.com. Kesällä kontti oli myös päiväleirien tukikohta.",
        "Seuraavan kesän aukiolo julkaistaan, kun se on varmistunut. Talvella skeitataan Kontulan hallin jäsenvuoroilla ja skeittikoulussa.",
      ],
      en: [
        "The Skate Container has run since 2019. It is a youth project that lowers the step into the skatepark: borrow a board and a helmet against a deposit, fill a water bottle and charge a phone. Ask the staff for tips. The container follows safer-space principles.",
        "The 2026 season ran from 1 May to 28 August. In August it was open Monday to Friday, 12:00–20:00. Free coached try-outs ran on Tuesdays and Thursdays at 14:00–16:00 with no sign-up. The week also had adult sessions on Mondays at 18:00–19:30, an ADHD skate club on Tuesdays at 17:00–18:30 and club sessions on Thursdays at 17:00–18:30.",
        "On Friday 7 August 2026 the container hosted a skate day: contests for children and young people, a grip-tape painting workshop, a free try-out and a skate flea market. In August, school classes could book a free try-out via helrideskeittikoulu@gmail.com. The container was also the base for day camps.",
        "The next summer opening will be announced when it is confirmed. In winter, skating continues at Kontula member sessions and skate school.",
      ],
    },
  },
  {
    slug: "helride-tapahtuma",
    year: "2015–",
    status: "ongoing",
    title: { fi: "HELride-tapahtuma", en: "HELride event" },
    place: { fi: "Helsinki", en: "Helsinki" },
    summary: {
      fi: "Yhdistyksen nimikkotapahtuma vuodesta 2015. HELride 2026 oli 3.–5.7.",
      en: "The association’s namesake event since 2015. HELride 2026 ran on 3–5 July.",
    },
    body: {
      fi: [
        "HELride-tapahtuma on järjestetty vuodesta 2015. Vuoden 2026 tapahtuma oli 3.–5.7.: perjantaina Suvilahden DIY-rampilla, lauantaina Senaatintorilla ja sunnuntaina Alppipuistossa.",
        "Seuraavan tapahtuman päivä julkaistaan tällä sivulla, kun se on päätetty. Siihen asti säännöllinen skeittaus löytyy Kontulan jäsenvuoroilta ja skeittikoulusta.",
      ],
      en: [
        "The HELride event has been held since 2015. The 2026 edition ran on 3–5 July: Friday at the Suvilahti DIY ramp, Saturday at Senate Square and Sunday at Alppipuisto.",
        "The next event date will be published here once it is set. Until then, regular skating is at the Kontula member sessions and skate school.",
      ],
    },
  },
  {
    slug: "redin-skeittiparkki",
    year: "2020",
    status: "archive",
    title: { fi: "Redin skeittiparkki", en: "Redi skatepark" },
    place: { fi: "Kalasatama, Helsinki", en: "Kalasatama, Helsinki" },
    summary: {
      fi: "HELride on ollut mukana Redin skeittiparkissa syksystä 2020.",
      en: "HELride has been involved with the Redi skatepark since autumn 2020.",
    },
    body: {
      fi: [
        "Redin skeittiparkki Kalasatamassa on ollut HELriden projektina syksystä 2020. Talvella 2021–2022 yhdistys paransi parkin kamoja, ja kesällä 2021 mitoitti ja suunnitteli Nereidin patsaan kaiteen.",
        "Parkki on yhä yksi Helsingin keskeisistä skeittipaikoista. Yksittäisten rakennusvaiheiden tarkemmat suunnitelmat eivät ole tällä sivustolla, koska ne eivät ole julkisessa arkistossa.",
      ],
      en: [
        "The Redi skatepark in Kalasatama has been a HELride project since autumn 2020. In winter 2021–2022 the association improved the obstacles, and in summer 2021 it measured and designed the rail at the Nereid statue.",
        "The park is still one of Helsinki’s main skate spots. Detailed build drawings are not on this site, because they are not in the public archive.",
      ],
    },
  },
  {
    slug: "kaisaniemen-miniramppi",
    year: "2018",
    status: "archive",
    title: { fi: "Kaisaniemen miniramppi", en: "Kaisaniemi miniramp" },
    place: { fi: "Kaisaniemenpuisto, Helsinki", en: "Kaisaniemi park, Helsinki" },
    summary: {
      fi: "Miniramppi on ollut HELriden hankkeena kesästä 2018.",
      en: "The miniramp has been a HELride project since summer 2018.",
    },
    body: {
      fi: [
        "Kaisaniemen miniramppi on kuulunut HELriden projekteihin kesästä 2018. Ramppi täydentää keskustan skeittipaikkoja isompien parkien rinnalla.",
      ],
      en: [
        "The Kaisaniemi miniramp has been one of HELride’s projects since summer 2018. It adds a central spot alongside the larger parks.",
      ],
    },
  },
  {
    slug: "eltsun-valot",
    year: "2019",
    status: "archive",
    title: { fi: "Eltsun valot", en: "Eltsu lights" },
    place: {
      fi: "Eläintarhan skeittipuisto",
      en: "Eläintarha skatepark",
    },
    summary: {
      fi: "Eläintarhan skeittipuiston valoja säädettiin syksyllä 2019.",
      en: "The lights at Eläintarha skatepark were adjusted in autumn 2019.",
    },
    body: {
      fi: [
        "Syksyllä 2019 HELride vaikutti Eläintarhan skeittipuiston valaistukseen, jotta parkilla näkisi skeitata pimeään vuoden aikaan.",
      ],
      en: [
        "In autumn 2019 HELride worked on the lighting at Eläintarha skatepark so the park would stay skateable after dark.",
      ],
    },
  },
  {
    slug: "skateparks-of-hel",
    year: "2020",
    status: "archive",
    title: { fi: "SKATEPARKS OF HEL", en: "SKATEPARKS OF HEL" },
    place: { fi: "Helsinki", en: "Helsinki" },
    summary: {
      fi: "Videosarja Helsingin skeittiparkeista, kesä 2020.",
      en: "A video series on Helsinki skateparks, summer 2020.",
    },
    body: {
      fi: [
        "Kesällä 2020 HELride julkaisi SKATEPARKS OF HEL -videosarjan Helsingin skeittiparkeista. Jaksot voi katsoa tällä sivulla.",
      ],
      en: [
        "In summer 2020 HELride released SKATEPARKS OF HEL, a video series about Helsinki skateparks. The episodes play on this page.",
      ],
    },
    href: org.youtube,
  },
  {
    slug: "nereidin-kaide",
    year: "2021",
    status: "archive",
    title: { fi: "Nereidin kaide", en: "Nereid rail" },
    place: { fi: "Redi, Kalasatama", en: "Redi, Kalasatama" },
    summary: {
      fi: "Nereidin patsaan kaiteen mitoitus ja suunnittelu kesällä 2021.",
      en: "Measuring and designing the rail at the Nereid statue in summer 2021.",
    },
    body: {
      fi: [
        "Kesällä 2021 HELride mitoitti ja suunnitteli Redin Nereidin patsaan yhteyteen tulevan kaiteen. Hanke on osa Redin skeittiparkin kehittämistä.",
      ],
      en: [
        "In summer 2021 HELride measured and designed a rail at the Nereid statue in Redi. The work is part of developing the Redi skatepark.",
      ],
    },
  },
  {
    slug: "redin-kamat",
    year: "2021–2022",
    status: "archive",
    title: { fi: "Redin kamat", en: "Redi obstacles" },
    place: { fi: "Redi, Kalasatama", en: "Redi, Kalasatama" },
    summary: {
      fi: "Skeittiparkin välineiden parantaminen talvella 2021–2022.",
      en: "Obstacle improvements at the skatepark in winter 2021–2022.",
    },
    body: {
      fi: [
        "Talvella 2021–2022 HELride paransi Redin skeittiparkin kamoja. Työ jatkoi syksyllä 2020 alkanutta parkkiprojektia.",
      ],
      en: [
        "In winter 2021–2022 HELride improved the obstacles at Redi skatepark, continuing the park project that started in autumn 2020.",
      ],
    },
  },
];

export type Spot = {
  id: string;
  name: Localized;
  address: string;
  note: Localized;
  mapQuery: string;
};

export const spots: Spot[] = [
  {
    id: "kontula",
    name: { fi: "Kontulan skeittihalli Luuppi", en: "Kontula skate hall, Luuppi" },
    address: "Emännänpolku 1, 00940 Helsinki",
    note: {
      fi: "Jäsenvuorot ja talvikauden skeittikoulu. Sisäänkäynti väestönsuojan ovesta, noin 100 metriä metroasemalta itään, Mellunmäen suuntaan. Google Maps voi viedä viereiseen taloon.",
      en: "Member sessions and winter skate school. Enter through the civil-defence door, about 100 metres east of the metro station, toward Mellunmäki. Google Maps can point to the neighbouring building.",
    },
    mapQuery: "Kontulan skeittihalli Luuppi, Emännänpolku 1, Helsinki",
  },
  {
    id: "eltsu",
    name: { fi: "Eläintarhan skeittipuisto", en: "Eläintarha skatepark" },
    address: "Nordenskiöldinkatu 20, Helsinki",
    note: {
      fi: "Skeittikontin kesäpaikka ja ulkokauden skeittikoulu. Kausi 2026 päättyi 28.8.",
      en: "Summer home of the Skate Container and the outdoor-season skate school. The 2026 season ended on 28 August.",
    },
    mapQuery: "Eläintarhan skeittipuisto, Nordenskiöldinkatu 20, Helsinki",
  },
  {
    id: "kaisaniemi",
    name: { fi: "Kaisaniemen miniramppi", en: "Kaisaniemi miniramp" },
    address: "Kaisaniemenpuisto, Helsinki",
    note: {
      fi: "HELriden projekti kesästä 2018.",
      en: "A HELride project since summer 2018.",
    },
    mapQuery: "Kaisaniemen miniramppi, Kaisaniemenpuisto, Helsinki",
  },
  {
    id: "redi",
    name: { fi: "Redin skeittiparkki", en: "Redi skatepark" },
    address: "Kalasatama, Helsinki",
    note: {
      fi: "HELride on ollut mukana parkissa syksystä 2020, kamojen parantamisessa ja Nereidin kaiteessa.",
      en: "HELride has been involved since autumn 2020, including obstacle work and the Nereid rail.",
    },
    mapQuery: "Redin skeittiparkki, Kalasatama, Helsinki",
  },
  {
    id: "matinkyla",
    name: { fi: "Matinkylän skeittiparkki", en: "Matinkylä skatepark" },
    address: "Matinkylä, Espoo",
    note: {
      fi: "Yksi kesän skeittileirien tukikohdista Kontulan ja Eläintarhan lisäksi.",
      en: "One of the summer camp bases, along with Kontula and Eläintarha.",
    },
    mapQuery: "Matinkylän skeittipuisto, Espoo",
  },
];

export type AgendaStatus = "on" | "past" | "soon";

export type AgendaItem = {
  id: string;
  status: AgendaStatus;
  when: Localized;
  title: Localized;
  place: Localized;
  summary: Localized;
};

export const agenda: AgendaItem[] = [
  {
    id: "hall",
    status: "on",
    when: { fi: "1.10.2026–huhtikuu 2027", en: "1 October 2026–April 2027" },
    title: { fi: "Kontulan jäsenvuorot", en: "Kontula member sessions" },
    place: { fi: "Kontulan skeittihalli", en: "Kontula skate hall" },
    summary: {
      fi: "Viisi vuoroa viikossa jäsenille. Kausi alkoi 14.9.2026 suppeammalla rytmillä ja viisi vuoroa on voimassa lokakuun alusta.",
      en: "Five sessions a week for members. The season started on 14 September 2026 with a shorter week, and five sessions have run since the start of October.",
    },
  },
  {
    id: "school",
    status: "on",
    when: { fi: "Lauantaisin klo 10–12", en: "Saturdays, 10:00–12:00" },
    title: { fi: "Lasten ja nuorten skeittikoulu", en: "Skate school for children and young people" },
    place: {
      fi: "Talvella Kontula, ulkokaudella Eläintarha",
      en: "Kontula in winter, Eläintarha in the outdoor season",
    },
    summary: {
      fi: "Kaksi tuntia pienryhmässä, 20 €. Ilmoittautuminen päättyy perjantaina klo 16. Paikka varataan Holvi-kaupasta.",
      en: "Two hours in a small group, 20 €. Registration closes on Friday at 16:00. Book in the Holvi shop.",
    },
  },
  {
    id: "camps",
    status: "soon",
    when: { fi: "Kesä 2027", en: "Summer 2027" },
    title: { fi: "Skeittileirit", en: "Skate camps" },
    place: {
      fi: "Eläintarha, Kontula ja Matinkylä",
      en: "Eläintarha, Kontula and Matinkylä",
    },
    summary: {
      fi: "Päiväleirejä 9–15-vuotiaille, ma–pe klo 9–16. Kesän 2027 varaus aukeaa alkuvuodesta. Kesän 2026 leirit on pidetty.",
      en: "Day camps for ages 9–15, Monday to Friday, 9:00–16:00. Booking for summer 2027 opens early in the year. The 2026 camps have been held.",
    },
  },
  {
    id: "kontti-2026",
    status: "past",
    when: { fi: "1.5.–28.8.2026", en: "1 May–28 August 2026" },
    title: { fi: "Skeittikontti 2026", en: "Skate Container 2026" },
    place: { fi: "Eläintarhan skeittipuisto", en: "Eläintarha skatepark" },
    summary: {
      fi: "Maksuton lautalainaamo ja ohjatut kokeilut. Seuraava kesä julkaistaan erikseen.",
      en: "Free board loans and coached try-outs. The next summer will be announced separately.",
    },
  },
  {
    id: "skate-day",
    status: "past",
    when: { fi: "Perjantai 7.8.2026", en: "Friday 7 August 2026" },
    title: { fi: "Skeittikontin skeittipäivä", en: "Skate Container skate day" },
    place: { fi: "Eläintarhan skeittipuisto", en: "Eläintarha skatepark" },
    summary: {
      fi: "Kisoja, grippien maalausta, maksuton kokeilu ja skeittikirppis.",
      en: "Contests, grip-tape painting, a free try-out and a skate flea market.",
    },
  },
];
