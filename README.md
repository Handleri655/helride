# HELride Collective

Uudet sivut osoitteelle helride.fi. Suomi on oletuskieli, englanti on polussa `/en`.

## Käynnistys

```bash
npm install
npm run dev
```

Avaa [http://localhost:3000](http://localhost:3000). Juuri ohjaa osoitteeseen `/fi`.

Tuotantoversio:

```bash
npm run build
npm start
```

Sivusto on Next.js-sovellus. Sen voi julkaista esimerkiksi Verceliin ja osoittaa `helride.fi` siihen. Analytiikkaa ei ole kytketty. Jos myöhemmin halutaan kävijämittaus ilman evästeitä, Plausible tai Umami lisätään vasta, kun tilin tunnus on olemassa.

## Sisällön päivitys

Faktat ovat tiedostossa `content/catalog.ts`.

- Hallivuorot: `sessions` ja `sessionNotes`
- Hinnat: `prices`
- Projektit: lisää olio `projects`-listaan. `slug` on osoitteen loppuosa, esimerkiksi `projektit/uusi-hanke`. Kirjoita sekä `fi` että `en`.
- Tapahtumat: `agenda`
- Paikat: `spots`
- Yhteystiedot ja linkit: `org`

Sivujen otsikot hakukoneille ovat tiedostossa `content/meta.ts`. Valikon nimet ovat tiedostossa `content/ui.ts`.

Erillistä julkaisujärjestelmää ei ole kytketty, koska Sanity tai vastaava vaatii oman tilin. Sisältö on tietoisesti yhdessä paikassa, jotta se voidaan myöhemmin siirtää julkaisujärjestelmään.

Tekstit on koottu yhdistyksen julkisista sivuista 29.10.2026. Tarkista ennen julkaisua etenkin jäsenhinta 1.11.2026 jälkeen, hallituksen kokoonpano ja seuraavan kesän Skeittikontti.

## Sivut

- `/fi` ja `/en` etusivu
- tapahtumat, skeittikoulu, projektit, jäsenyys, spotit
- turvallisempi tila, meistä, tule mukaan, yhteys
- tietosuoja ja saavutettavuus

Yhteydenottolomake avaa lähettäjän oman sähköpostin. Se ei tallenna viestejä.
