// BASE_URL e "/" pe domeniul clientului și "/sira-acoperisuri/" pe demo.mrwebsites.ro.
// u() pune prefixul pe linkurile și pozele interne, ca site-ul să meargă în ambele locuri.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => (path === '/' ? `${base}/` : `${base}${path}`);

// Datele firmei, într-un singur loc.
// TODO(real): numele firmei, CUI, zona exactă și programul, de la client.
export const site = {
  name: 'Sîra Acoperișuri',
  short: 'Sîra',
  tagline: 'reparații și acoperișuri noi',
  owner: 'Ștefan Sîra',
  phoneDisplay: '0753 771 370',
  phoneHref: 'tel:+40753771370',
  whatsapp: '40753771370',
  hours: 'Luni–sâmbătă, 8:00–19:00',
  hoursShort: 'L–S 8–19',
  // TODO(real): orașul și județele în care lucrează clientul.
  area: 'Venim în tot județul. Pentru acoperișuri întregi ne deplasăm și în județele vecine.',
  brands: ['Bilka', 'Wetterbest', 'Lindab', 'Bramac', 'Tondach', 'Creaton'],
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const waDefault = waLink(
  'Bună ziua! Vă trimit câteva poze cu acoperișul. Mă puteți ajuta?',
);
