# Sîra Acoperișuri — demo de prezentare

Client: Sira Stefan (WhatsApp +40 753 771 370), reparații de acoperiș și acoperișuri noi, primul site.
Referința trimisă de client: reelul Facebook al Acoperiș Direct („Serviciul 01 din 08”) și site-ul
acoperisdirect.ro. Hero-ul reia formatul și culorile reelului (bleumarin, albastru, linia verde); restul
structurii e în spiritul site-ului, nu o copie.

Paletă: bleumarin `#0f1a2c` pe secțiunile închise, albastru `#1f5fc8` ca accent, verde `#1d8048` doar pe
butoanele de WhatsApp. Totul în `src/styles/global.css`.

**Demo:** https://demo.mrwebsites.ro/sira-acoperisuri/ (GitHub Pages, repo RTR-TECH-SOLUTIONS/sira-acoperisuri,
publicat la fiecare push pe `main`). Are `noindex` cât e demo.

## Pornire

```
npm install
npm run dev      # http://localhost:4321/sira-acoperisuri/
npm run build    # static în dist/, merge pe Hostinger
```

## Pagini

- `/`: hero în formatul reelului (8 servicii, swipe pe telefon și tragere cu mouse-ul pe PC, fără săgeți),
  „Ce se întâmplă cu acoperișul?” (fiecare problemă deschide WhatsApp cu mesajul scris), servicii, bandă spre
  calculator, 6 lucrări, cum lucrăm, întrebări, contact.
- `/servicii` și `/servicii/<slug>` (8 pagini): ce intră în lucrare, preț de manoperă, „La ce să fii atent”,
  lucrările legate, alte servicii.
- `/preturi`: calculator pas cu pas. Acoperiș nou / înlocuire: învelitoare, marcă, dimensiuni, apoi devizul
  cu manoperă + material pe marcă (Bilka, Wetterbest, Lindab, Bramac, Tondach, Creaton). Reparație: pe bucată.
  Devizul se trimite pe WhatsApp sau se printează. Dedesubt, „Se repară sau se schimbă?”.
- `/lucrari`: toate lucrările, cu filtre și lightbox.
- `/despre`: echipa (text provizoriu) + cum lucrăm + ce scrie în contract.
- `/contact`: telefon, WhatsApp, formular (deschide WhatsApp), întrebări.

## Ce e doar mock (caută `TODO(real)`)

- `src/data/site.ts`: numele firmei („Sîra Acoperișuri” e propunerea noastră), zona, programul.
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
