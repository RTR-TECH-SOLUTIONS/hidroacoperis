import { u } from './site';
// Hero în formatul reelului: un serviciu pe cadru.
// TODO(real): pozele (sau clipurile) clientului de pe lucrările lui.
export type HeroSlide = {
  title: string;
  sub: string;
  img: string;
  w: number;
  h: number;
  alt: string;
  focus?: string; // object-position
};

const raw: HeroSlide[] = [
  {
    title: 'Reparații de acoperiș',
    sub: 'Țigle schimbate, coame refăcute, infiltrații oprite.',
    img: '/img/hero-reparatie.webp',
    w: 1920,
    h: 1280,
    alt: 'Doi acoperișari care lucrează pe un acoperiș din țiglă',
    focus: '50% 35%',
  },
  {
    title: 'Hidroizolații bituminoase',
    sub: 'Terase, garaje și acoperișuri plate, cu membrană în două straturi.',
    img: '/img/hidro-terasa.webp',
    w: 1920,
    h: 1280,
    alt: 'Acoperiș terasă cu membrană bituminoasă și buteliile de gaz pentru arzător',
    focus: '50% 55%',
  },
  {
    title: 'Montaj țiglă metalică',
    sub: 'Folie, caroiaj și tablă prinsă în șuruburi cu garnitură.',
    img: '/img/srv-tigla-metalica.webp',
    w: 1400,
    h: 927,
    alt: 'Țiglă metalică gri, văzută de aproape',
  },
  {
    title: 'Montaj țiglă ceramică',
    sub: 'Cu cleme pe fiecare rând, de la streașină la coamă.',
    img: '/img/srv-ceramica-detaliu.webp',
    w: 1400,
    h: 935,
    alt: 'Țiglă ceramică roșie, rânduri întregi văzute de aproape',
  },
  {
    title: 'Acoperișuri noi și înlocuiri',
    sub: 'De la demontarea celui vechi până la ultimul burlan.',
    img: '/img/l-macara.webp',
    w: 1200,
    h: 960,
    alt: 'Materiale de acoperiș ridicate cu macaraua pe o casă în lucru',
    focus: '50% 40%',
  },
  {
    title: 'Tablă fălțuită',
    sub: 'Fălțuită pe șantier, fără șuruburi la vedere.',
    img: '/img/l-faltuita-maro.webp',
    w: 1400,
    h: 933,
    alt: 'Acoperiș din tablă fălțuită maro cu fereastră în pantă',
  },
  {
    title: 'Sisteme pluviale',
    sub: 'Jgheaburi și burlane (scocuri), cu pantă refăcută spre burlan.',
    img: '/img/srv-jgheaburi.webp',
    w: 933,
    h: 1400,
    alt: 'Jgheab alb din care picură apă',
    focus: '50% 28%',
  },
  {
    title: 'Aticuri și copertine',
    sub: 'Copertină din tablă cu pantă spre terasă, racord etanș la hidroizolație.',
    img: '/img/atic-casa.webp',
    w: 1920,
    h: 1280,
    alt: 'Casă modernă cu acoperiș terasă și atice albe',
    focus: '50% 40%',
  },
  {
    title: 'Dulgherie de la A la Z',
    sub: 'Șarpante din lemn tratat, de la cosoroabă la astereală.',
    img: '/img/hero-sarpanta.webp',
    w: 1920,
    h: 1280,
    alt: 'Șarpantă nouă din lemn pentru un acoperiș în patru ape, pe cer senin',
  },
  {
    title: 'Mansarde și lucarne',
    sub: 'Lucarne refăcute, vată între căpriori, ferestre montate etanș.',
    img: '/img/l-lucarne.webp',
    w: 1200,
    h: 800,
    alt: 'Patru lucarne cu lambriu din lemn pe un acoperiș din tablă',
    focus: '50% 60%',
  },
];

export const heroSlides: HeroSlide[] = raw.map((s) => ({ ...s, img: u(s.img) }));
