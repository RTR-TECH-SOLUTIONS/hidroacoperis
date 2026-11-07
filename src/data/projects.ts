import { u } from './site';
// Lucrări afișate în galerie. TODO(real): pozele și datele lucrărilor clientului.
export type Category = 'reparatii' | 'noi' | 'inlocuiri' | 'dulgherie';

export const categories: { id: Category | 'toate'; label: string }[] = [
  { id: 'toate', label: 'Toate' },
  { id: 'reparatii', label: 'Reparații' },
  { id: 'noi', label: 'Acoperișuri noi' },
  { id: 'inlocuiri', label: 'Înlocuiri' },
  { id: 'dulgherie', label: 'Dulgherie și mansarde' },
];

export type Photo = { src: string; w: number; h: number; alt: string };

export type Project = {
  id: string;
  title: string;
  category: Category;
  meta: string[];
  status: 'gata' | 'în lucru';
  year: number;
  note: string;
  size: 'tall' | 'wide' | 'normal';
  photos: Photo[];
};

const raw: Project[] = [
  {
    id: 'faltuita-gri',
    title: 'Acoperiș nou din tablă fălțuită, casă P+M',
    category: 'noi',
    meta: ['186 m²', 'tablă fălțuită gri', '12 zile'],
    status: 'gata',
    year: 2025,
    note: 'Fălțuire pe șantier, fără șuruburi la vedere. Parazăpezi pe toată lungimea, pentru că streașina dă spre alee.',
    size: 'tall',
    photos: [
      { src: '/img/l-faltuita-gri.webp', w: 933, h: 1400, alt: 'Casă cu acoperiș din tablă fălțuită gri' },
      { src: '/img/l-faltuita-alba.webp', w: 933, h: 1400, alt: 'Acoperiș din tablă fălțuită deschisă la culoare, văzut din colț' },
    ],
  },
  {
    id: 'reparatie-furtuna',
    title: 'Reparație după furtună: țigle mutate și coamă desprinsă',
    category: 'reparatii',
    meta: ['23 de țigle', '9 ml de coamă', 'o zi'],
    status: 'gata',
    year: 2025,
    note: 'Am venit a doua zi după vânt. Coama era prinsă doar în mortar, așa că am refăcut-o cu bandă de ventilare și cleme.',
    size: 'normal',
    photos: [
      { src: '/img/l-reparatie-furtuna.webp', w: 788, h: 1400, alt: 'Acoperișar care schimbă țigle pe un acoperiș închis la culoare' },
    ],
  },
  {
    id: 'inlocuire-ceramica',
    title: 'Înlocuire țiglă ceramică pe o casă din anii ’80',
    category: 'inlocuiri',
    meta: ['142 m²', 'țiglă ceramică', 'ziua 6 din 11'],
    status: 'în lucru',
    year: 2025,
    note: 'Țigla veche era bună pe jumătate. Am pus folie nouă peste tot și am păstrat-o pe cea întreagă pentru anexă.',
    size: 'tall',
    photos: [
      { src: '/img/tigla-veche-noua.webp', w: 787, h: 1400, alt: 'Țiglă ceramică nouă montată lângă țigla veche' },
      { src: '/img/l-ceramica-veche.webp', w: 934, h: 1400, alt: 'Țiglă ceramică veche, cu mușchi și rânduri strâmbe' },
    ],
  },
  {
    id: 'lucarne',
    title: 'Lucarne refăcute, învelitoare din tablă',
    category: 'dulgherie',
    meta: ['4 lucarne', '210 m²', '15 zile'],
    status: 'gata',
    year: 2024,
    note: 'Lucarnele aveau lemnul putred la bază. Le-am refăcut pe structură nouă și le-am îmbrăcat în lambriu și tablă.',
    size: 'wide',
    photos: [
      { src: '/img/l-lucarne.webp', w: 1200, h: 800, alt: 'Patru lucarne cu lambriu din lemn pe un acoperiș din tablă' },
    ],
  },
  {
    id: 'jgheaburi',
    title: 'Jgheaburi și burlane schimbate pe tot conturul',
    category: 'reparatii',
    meta: ['34 ml de jgheab', '4 burlane', 'o zi'],
    status: 'gata',
    year: 2025,
    note: 'Jgheabul vechi nu avea pantă și ținea apa la colț. Cârligele noi sunt la 60 cm.',
    size: 'normal',
    photos: [
      { src: '/img/srv-jgheaburi.webp', w: 933, h: 1400, alt: 'Jgheab alb nou montat sub streașină' },
    ],
  },
  {
    id: 'sarpanta',
    title: 'Șarpantă nouă din lemn ecarisat',
    category: 'dulgherie',
    meta: ['11 m³ de lemn', 'tratat ignifug', '7 zile'],
    status: 'gata',
    year: 2024,
    note: 'Lemn uscat, tratat înainte de montaj. Căpriorii la 80 cm, pentru țiglă ceramică.',
    size: 'wide',
    photos: [
      { src: '/img/hero-sarpanta.webp', w: 1920, h: 1280, alt: 'Șarpantă nouă din lemn pentru un acoperiș în patru ape' },
      { src: '/img/l-sarpanta-echipa.webp', w: 788, h: 1400, alt: 'Doi dulgheri care montează șarpanta' },
    ],
  },
  {
    id: 'mansarda',
    title: 'Mansardare cu ferestre de acoperiș',
    category: 'dulgherie',
    meta: ['68 m² izolați', '2 ferestre', '6 zile'],
    status: 'gata',
    year: 2025,
    note: 'Vată de 20 cm între și sub căpriori, barieră de vapori lipită la fiecare îmbinare.',
    size: 'tall',
    photos: [
      { src: '/img/srv-mansardari.webp', w: 932, h: 1400, alt: 'Mansardă cu lucarnă, văzută din interior' },
      { src: '/img/l-mansarda-fereastra.webp', w: 787, h: 1400, alt: 'Fereastră de mansardă într-un perete înclinat' },
    ],
  },
  {
    id: 'faltuita-maro',
    title: 'Tablă fălțuită cu fereastră în pantă',
    category: 'noi',
    meta: ['96 m²', 'fălțuită maro', '8 zile'],
    status: 'gata',
    year: 2024,
    note: 'Fereastra a venit cu rama de etanșare a producătorului. Tabla e întoarsă pe ramă, nu doar siliconată.',
    size: 'wide',
    photos: [
      { src: '/img/l-faltuita-maro.webp', w: 1400, h: 933, alt: 'Acoperiș din tablă fălțuită maro cu fereastră în pantă' },
      { src: '/img/l-faltuita-lucarna.webp', w: 933, h: 1400, alt: 'Acoperiș din tablă fălțuită cu lucarnă' },
    ],
  },
  {
    id: 'macara',
    title: 'Acoperiș în patru ape, materiale urcate cu macaraua',
    category: 'inlocuiri',
    meta: ['230 m²', 'țiglă de beton', 'ziua 3 din 14'],
    status: 'în lucru',
    year: 2025,
    note: 'Curtea era prea mică pentru schelă pe toate laturile, așa că paletii au urcat direct pe acoperiș.',
    size: 'normal',
    photos: [
      { src: '/img/l-macara.webp', w: 1200, h: 960, alt: 'Materiale de acoperiș ridicate cu macaraua' },
      { src: '/img/l-echipa-acoperis.webp', w: 1400, h: 933, alt: 'Doi acoperișari pe un acoperiș în lucru' },
    ],
  },
  {
    id: 'cos-fum',
    title: 'Coș de fum etanșat și țigle schimbate în jur',
    category: 'reparatii',
    meta: ['1 coș', '14 țigle', 'o zi'],
    status: 'gata',
    year: 2025,
    note: 'Silicon pus de trei ori în ultimii ani. L-am scos și am făcut șorț din tablă, cum trebuia de la început.',
    size: 'tall',
    photos: [
      { src: '/img/srv-cos-fum.webp', w: 788, h: 1400, alt: 'Acoperișar care lucrează lângă un coș de fum' },
    ],
  },
  {
    id: 'sindrila',
    title: 'Șindrilă bituminoasă cu ferestre de mansardă',
    category: 'noi',
    meta: ['120 m²', 'șindrilă antracit', '9 zile'],
    status: 'gata',
    year: 2024,
    note: 'Astereală din OSB de 22 mm sub șindrilă, cu rost lăsat între plăci.',
    size: 'wide',
    photos: [
      { src: '/img/l-sindrila.webp', w: 1400, h: 933, alt: 'Acoperiș din șindrilă închisă la culoare cu două ferestre roșii' },
    ],
  },
  {
    id: 'metalica-antracit',
    title: 'Casă nouă, țiglă metalică antracit',
    category: 'noi',
    meta: ['164 m²', 'țiglă metalică', '9 zile'],
    status: 'gata',
    year: 2025,
    note: 'Am preluat casa de la roșu, cu șarpanta deja făcută de altă echipă. Am verificat-o înainte de folie.',
    size: 'normal',
    photos: [
      { src: '/img/srv-acoperis-nou.webp', w: 933, h: 1400, alt: 'Casă nouă cu lambriu și acoperiș închis la culoare' },
      { src: '/img/srv-tigla-metalica.webp', w: 1400, h: 927, alt: 'Detaliu de țiglă metalică' },
    ],
  },
];

export const projects: Project[] = raw.map((p) => ({ ...p, photos: p.photos.map((ph) => ({ ...ph, src: u(ph.src) })) }));
