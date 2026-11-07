// BASE_URL e "/" pe domeniul clientului și "/hidroacoperis/" pe demo.mrwebsites.ro.
// u() pune prefixul pe linkurile și pozele interne, ca site-ul să meargă în ambele locuri.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => (path === '/' ? `${base}/` : `${base}${path}`);

// Datele firmei, într-un singur loc.
// Numele e propunerea noastră: hidroacoperis.ro era liber la 7 noiembrie 2026.
// TODO(real): numele confirmat de client, CUI, zona exactă și programul.
export const site = {
  name: 'HidroAcoperiș',
  short: 'HidroAcoperiș',
  tagline: 'acoperișuri și hidroizolații',
  owner: 'Ștefan',
  phoneDisplay: '0753 771 370',
  phoneHref: 'tel:+40753771370',
  whatsapp: '40753771370',
  hours: 'Luni–sâmbătă, 8:00–19:00',
  hoursShort: 'L–S 8–19',
  // TODO(real): orașul și județele în care lucrează clientul.
  area: 'Venim în tot județul. Pentru acoperișuri întregi ne deplasăm și în județele vecine.',
  brands: ['Bilka', 'Wetterbest', 'Lindab', 'Bramac', 'Tondach', 'Creaton'],
};

// Ce intră din oficiu, fără cost separat. Apare pe prima pagină, pe servicii și în deviz.
export const included = [
  {
    title: 'Consultanță gratuită',
    detail: 'Venim, urcăm pe acoperiș și îți spunem ce e de făcut. Nu plătești deplasarea și nici măsurătorile.',
  },
  {
    title: 'Transportul materialelor, inclus',
    detail: 'Aducem materialul de la distribuitor până în curtea ta. Nu apare separat pe deviz.',
  },
  {
    title: 'Deviz scris, pe rânduri',
    detail: 'Manopera și materialul separat, ca să știi dinainte ce plătești pe fiecare.',
  },
  {
    title: 'Garanție în contract',
    detail: '10 ani la acoperișurile noi, 5 ani la hidroizolații și 2 ani la reparații.',
  },
];

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const waDefault = waLink(
  'Bună ziua! Vă trimit câteva poze cu acoperișul. Mă puteți ajuta?',
);
