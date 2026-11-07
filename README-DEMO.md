# HidroAcoperiș — demo de prezentare

Client: Sira Stefan (WhatsApp +40 753 771 370), reparații de acoperiș și acoperișuri noi, primul site.
Referința trimisă de client: reelul Facebook al Acoperiș Direct („Serviciul 01 din 08”) și site-ul
acoperisdirect.ro. Hero-ul reia formatul și culorile reelului (bleumarin, albastru, linia verde); restul
structurii e în spiritul site-ului, nu o copie.

Runda 2 (7 noiembrie 2026), după feedback pe WhatsApp: clientul nu vrea „Sîra” în nume și vrea un nume ușor de
găsit, descrieri mai bogate și pagini pentru tot ce execută (hidroizolație bituminoasă, sistem pluvial /
„scocuri”, aticuri, accesorii, consultanță gratuită, transport materiale inclus). Numele propus: HidroAcoperiș
(hidroacoperis.ro liber la ROTLD; „Acoperișul Sigur SRL” există deja în Mureș, de aceea nu l-am folosit).
Clientul nu vrea „sira” nici în link, așa că repo-ul și adresa au devenit `hidroacoperis` (linkul vechi `/sira-acoperisuri/` nu mai merge).

Paletă: bleumarin `#0f1a2c` pe secțiunile închise, albastru `#1f5fc8` ca accent, verde `#1d8048` doar pe
butoanele de WhatsApp. Totul în `src/styles/global.css`.

**Demo:** https://demo.mrwebsites.ro/hidroacoperis/ (GitHub Pages, repo RTR-TECH-SOLUTIONS/hidroacoperis,
publicat la fiecare push pe `main`). Are `noindex` cât e demo.

## Pornire

```
npm install
npm run dev      # http://localhost:4321/hidroacoperis/
npm run build    # static în dist/, merge pe Hostinger
```

## Pagini

- `/`: hero în formatul reelului (10 servicii, swipe pe telefon și tragere cu mouse-ul pe PC, fără săgeți),
  bandă „Inclus, fără cost separat” (consultanță, transport, deviz, garanție),
  „Ce se întâmplă cu acoperișul?” (fiecare problemă deschide WhatsApp cu mesajul scris), servicii, bandă spre
  calculator, 6 lucrări, cum lucrăm, întrebări, contact.
- `/servicii` și `/servicii/<slug>` (11 pagini, noi: hidroizolații bituminoase, aticuri, accesorii; jgheaburile
  au devenit „Sisteme pluviale”): ce intră în lucrare, preț de manoperă, „La ce să fii atent”,
  lucrările legate, alte servicii.
- `/preturi`: calculator pas cu pas. Acoperiș nou / înlocuire: învelitoare, marcă, dimensiuni, apoi devizul
  cu manoperă + material pe marcă (Bilka, Wetterbest, Lindab, Bramac, Tondach, Creaton). Hidroizolație terasă:
  suprafață, membrana veche, atice. Reparație: pe bucată.
  Devizul se trimite pe WhatsApp sau se printează. Dedesubt, „Se repară sau se schimbă?”.
- `/lucrari`: toate lucrările, cu filtre și lightbox.
- `/consultanta-gratuita`: ce verificăm la vizită, ce primești după, transportul materialelor.
- `/despre`: echipa (text provizoriu), „Ce executăm” cu toate serviciile, cum lucrăm, ce scrie în contract.
- `/contact`: telefon, WhatsApp, formular (deschide WhatsApp), întrebări.

## Ce e doar mock (caută `TODO(real)`)

- `src/data/site.ts`: numele firmei („HidroAcoperiș” e propunerea noastră, de confirmat), zona, programul.
- `src/data/prices.ts`: manopera și prețurile de material pe mărci sunt orientative, de înlocuit cu ale
  clientului și ale distribuitorului cu care lucrează.
- `src/pages/despre.astro`: textul despre echipă e scris de noi, de înlocuit cu povestea reală.
- `src/data/heroSlides.ts`, `projects.ts`, `services.ts`: poze placeholder brandless (stock), plus
  metadatele lucrărilor (m², zile, note) inventate pentru demo. De înlocuit cu pozele și lucrările lui.
  Ideal, în hero se pun clipuri scurte de pe lucrările lui (webm + mp4, `poster`), ca în reel.
- Formularul de contact deschide doar WhatsApp; nu trimite e-mail.

## La proiectul real

- Pozele și clipurile clientului; nume de firmă, CUI, zona.
- Research SEO RO pe oraș/județ, pagini pe servicii (reparații, țiglă metalică etc.), LocalBusiness schema,
  sitemap, Google Business Profile.
- Pachet legal: cookie banner, Termeni, Confidențialitate, Politica de cookies, credit RTR în footer.
- Opțional: Keystatic pentru lucrări și prețuri (clientul adaugă singur lucrări noi).
