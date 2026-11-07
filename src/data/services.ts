import { u } from './site';
// Servicii: alimentează lista de pe prima pagină, /servicii și câte o pagină /servicii/<slug>.
// TODO(real): pozele clientului, prețurile lui și ce face efectiv pe fiecare serviciu.
export type Img = { src: string; w: number; h: number; alt: string; focus?: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  price: string;
  featured?: boolean;
  card: Img;
  hero: Img;
  intro: string[];
  includes: string[];
  watch: string[];
  projects: string[];
};

const raw: Service[] = [
  {
    slug: 'reparatii-acoperis',
    name: 'Reparații de acoperiș',
    short: 'Țigle schimbate, coame refăcute, infiltrații oprite.',
    price: 'de la 25 lei/țiglă',
    featured: true,
    card: { src: '/img/srv-reparatii.webp', w: 788, h: 1400, alt: 'Acoperișar care fixează țiglele pe un acoperiș' },
    hero: { src: '/img/hero-reparatie.webp', w: 1920, h: 1280, alt: 'Doi acoperișari care lucrează pe un acoperiș din țiglă', focus: '50% 35%' },
    intro: [
      'Cele mai multe reparații pornesc de la o singură țiglă mutată de vânt sau de la un coș etanșat cu silicon. Prinse devreme, costă câteva sute de lei. Lăsate o iarnă, apa ajunge în șipci și apoi în tavan.',
      'Venim, urcăm pe acoperiș și îți arătăm în poze ce am găsit. Abia apoi stabilim ce reparăm, pe bucată, ca să știi dinainte ce plătești.',
    ],
    includes: [
      'Țigle sparte sau mutate, înlocuite cu prinderi noi',
      'Coame refăcute cu bandă de ventilare, fără mortar',
      'Coșuri de fum etanșate cu șorț din tablă',
      'Folie refăcută local, acolo unde a intrat apa',
      'Ferestre de mansardă reetanșate',
      'Tablă prinsă din nou și șuruburi schimbate',
    ],
    watch: [
      'Siliconul pe coș ține un an, doi. Șorțul din tablă ține cât acoperișul.',
      'Pata de pe tavan apare de obicei la un metru sau doi de locul pe unde intră apa, nu chiar dedesubt.',
      'Dacă găsim șipci putrede pe o suprafață mare, îți spunem înainte să lucrăm, nu pe factură.',
    ],
    projects: ['reparatie-furtuna', 'cos-fum', 'jgheaburi'],
  },
  {
    slug: 'acoperisuri-noi',
    name: 'Acoperișuri noi și înlocuiri',
    short: 'De la demontarea celui vechi până la ultimul burlan.',
    price: 'de la 75 lei/m² manoperă',
    featured: true,
    card: { src: '/img/srv-inlocuire.webp', w: 933, h: 1400, alt: 'Acoperiș din țiglă ceramică pe jumătate montat, cu șipcile la vedere' },
    hero: { src: '/img/l-macara.webp', w: 1200, h: 960, alt: 'Materiale de acoperiș ridicate cu macaraua pe o casă în lucru', focus: '50% 40%' },
    intro: [
      'Facem acoperișul complet: pe casă nouă, de la șarpantă, sau în locul unuia vechi, de la demontare. Lucrăm pe apă, așa că seara casa e acoperită, chiar dacă lucrarea durează două săptămâni.',
      'Materialul îl alegi tu, după buget și după cum arată casa. Îți spunem sincer ce se potrivește pe panta și pe șarpanta ta.',
    ],
    includes: [
      'Demontarea acoperișului vechi și evacuarea molozului',
      'Verificarea șarpantei și schimbarea căpriorilor slabi',
      'Folie anticondens, contrașipci și șipci',
      'Montajul învelitorii, cu coame, borduri și dolii',
      'Jgheaburi, burlane și parazăpezi',
      'Curățenia curții la final, cu magnetul pentru șuruburi',
    ],
    watch: [
      'Prețul pe metru pătrat contează mai puțin decât folia și ventilația de sub învelitoare. Acolo se fac cele mai multe greșeli.',
      'Un acoperiș în patru ape are mai multe tăieturi decât unul în două ape, deci și mai multă manoperă.',
      'Dacă treci de la tablă la ceramică, șarpanta trebuie să ducă de câteva ori mai multă greutate.',
    ],
    projects: ['inlocuire-ceramica', 'macara', 'metalica-antracit'],
  },
  {
    slug: 'tigla-metalica',
    name: 'Montaj țiglă metalică',
    short: 'Folie, caroiaj și tablă prinsă în șuruburi cu garnitură.',
    price: '75–130 lei/m² manoperă',
    card: { src: '/img/srv-tigla-metalica.webp', w: 1400, h: 927, alt: 'Detaliu de țiglă metalică gri, cu șurub cu garnitură' },
    hero: { src: '/img/srv-tigla-metalica.webp', w: 1400, h: 927, alt: 'Țiglă metalică gri, văzută de aproape' },
    intro: [
      'Țigla metalică e cea mai des aleasă învelitoare pe casele din jur: e ușoară, se montează repede și nu cere o șarpantă grea.',
      'O montăm după instrucțiunile producătorului, ca garanția tablei să rămână valabilă: tăiată cu foarfeca, nu cu flexul, și prinsă în șuruburi cu garnitură, în locurile marcate.',
    ],
    includes: [
      'Folie anticondens, cu suprapuneri spre streașină',
      'Contrașipci pentru ventilație și șipci la pasul profilului',
      'Montajul plăcilor, cu coame, borduri și dolii',
      'Tinichigerie la coș, la ferestre și la pereți',
    ],
    watch: [
      'Pe ploaie se aude mai tare decât ceramica dacă vata din pod e subțire.',
      'Tabla tăiată cu flexul ruginește pe margine încă din primul an.',
      'Șuruburile strânse prea tare strivesc garnitura și lasă apa să intre.',
    ],
    projects: ['metalica-antracit', 'reparatie-furtuna'],
  },
  {
    slug: 'tigla-ceramica',
    name: 'Montaj țiglă ceramică',
    short: 'Cu cleme pe fiecare rând, de la streașină la coamă.',
    price: '110–180 lei/m² manoperă',
    card: { src: '/img/srv-tigla-ceramica.webp', w: 933, h: 1400, alt: 'Fronton de casă cu acoperiș din țiglă ceramică roșie' },
    hero: { src: '/img/srv-ceramica-detaliu.webp', w: 1400, h: 935, alt: 'Țiglă ceramică roșie, rânduri întregi văzute de aproape' },
    intro: [
      'Țigla ceramică ține zeci de ani, e liniștită pe ploaie și arată bine pe casele cu acoperiș înalt. Cere în schimb o șarpantă solidă și o montare atentă.',
      'Montăm ceramică și țiglă de beton, de la Tondach, Creaton sau Bramac, cu cleme pe fiecare rând de la streașină și pe toate marginile, ca vântul să nu le ridice.',
    ],
    includes: [
      'Verificarea șarpantei pentru greutatea țiglei',
      'Folie, contrașipci și șipci la distanța cerută de model',
      'Țigle de ventilare, de coamă și de margine',
      'Cleme pe rândurile expuse la vânt',
    ],
    watch: [
      'Pe același metru pătrat, țigla ceramică e de câteva ori mai grea decât tabla. Verificăm șarpanta înainte.',
      'Pe pante mici, sub 22°, multe modele nu mai țin apa. Îți spunem dacă panta ta merge.',
      'Păstrează câteva țigle de rezervă: peste ani găsești greu același model și aceeași culoare.',
    ],
    projects: ['inlocuire-ceramica', 'macara'],
  },
  {
    slug: 'tabla-faltuita',
    name: 'Tablă fălțuită',
    short: 'Fălțuită pe șantier, fără șuruburi la vedere.',
    price: '140–220 lei/m² manoperă',
    card: { src: '/img/l-faltuita-gri.webp', w: 933, h: 1400, alt: 'Casă cu acoperiș din tablă fălțuită gri' },
    hero: { src: '/img/l-faltuita-maro.webp', w: 1400, h: 933, alt: 'Acoperiș din tablă fălțuită maro cu fereastră în pantă' },
    intro: [
      'Tabla fălțuită are liniile drepte, fără valuri, și se potrivește pe casele moderne și pe pantele mici, unde țigla nu mai merge.',
      'Prinderea e ascunsă în fălțuri, deci nu rămân șuruburi la vedere prin care să intre apa peste ani.',
    ],
    includes: [
      'Astereală sau șipci dese, după profil',
      'Folie de separație cu structură, contra condensului',
      'Fălțuire pe șantier, cu clemele ascunse',
      'Tinichigerie făcută din aceeași tablă',
    ],
    watch: [
      'Fără folie de separație dedesubt, tabla se aude și face condens.',
      'Pe lungimi mari, tabla se dilată. Prinderile trebuie lăsate să lucreze.',
      'E mai scumpă la manoperă decât țigla metalică, pentru că se fălțuiește pe loc.',
    ],
    projects: ['faltuita-gri', 'faltuita-maro'],
  },
  {
    slug: 'jgheaburi-burlane',
    name: 'Jgheaburi, burlane și accesorii',
    short: 'Pantă refăcută spre burlan, cârlige la fiecare 60 cm.',
    price: '45–130 lei/ml',
    card: { src: '/img/srv-jgheaburi.webp', w: 933, h: 1400, alt: 'Jgheab alb din care picură apă' },
    hero: { src: '/img/srv-jgheaburi.webp', w: 933, h: 1400, alt: 'Jgheab alb din care picură apă', focus: '50% 28%' },
    intro: [
      'Un jgheab fără pantă ține apa la colț, iarna îngheață și se rupe. Apa care curge pe perete strică tencuiala și, cu timpul, fundația.',
      'Schimbăm sistemul pluvial complet sau doar bucățile rupte, desfundăm burlanele și montăm parazăpezi, ca zăpada să nu rupă jgheabul primăvara.',
    ],
    includes: [
      'Jgheaburi și burlane din tablă sau PVC',
      'Cârlige noi, la cel mult 60 cm',
      'Pantă refăcută spre fiecare burlan',
      'Parazăpezi și site contra frunzelor',
    ],
    watch: [
      'Cârligele puse prea rar lasă jgheabul să se încovoaie sub zăpadă.',
      'Un burlan la fiecare 10–12 metri de jgheab, nu mai rar.',
      'Parazăpezile se pun pe toată lungimea, nu doar deasupra intrării.',
    ],
    projects: ['jgheaburi'],
  },
  {
    slug: 'dulgherie-sarpante',
    name: 'Dulgherie de la A la Z',
    short: 'Șarpante din lemn tratat, de la cosoroabă la astereală.',
    price: 'după proiect',
    card: { src: '/img/hero-sarpanta.webp', w: 1920, h: 1280, alt: 'Șarpantă nouă din lemn pe cer senin' },
    hero: { src: '/img/hero-sarpanta.webp', w: 1920, h: 1280, alt: 'Șarpantă nouă din lemn pentru un acoperiș în patru ape, pe cer senin' },
    intro: [
      'Șarpanta e partea pe care n-o mai vezi după ce s-a terminat acoperișul, așa că trebuie făcută bine de prima dată. Lucrăm cu lemn uscat, tratat înainte de montaj.',
      'Facem șarpante noi, schimbăm căpriorii putrezi la acoperișurile vechi și construim foișoare și terase acoperite.',
    ],
    includes: [
      'Șarpante noi, după proiect sau după măsurătoare',
      'Căpriori și pane schimbate la acoperișuri vechi',
      'Astereală din scândură sau OSB',
      'Foișoare, terase și copertine din lemn',
    ],
    watch: [
      'Lemnul ud pus în șarpantă se strâmbă în primul an și strâmbă și învelitoarea.',
      'Căpriorii prea rari se lasă sub o țiglă grea.',
      'Prinderea de cosoroabă se verifică, mai ales după vânturi puternice.',
    ],
    projects: ['sarpanta', 'lucarne'],
  },
  {
    slug: 'mansarde-lucarne',
    name: 'Mansarde și lucarne',
    short: 'Lucarne refăcute, vată între căpriori, ferestre montate etanș.',
    price: '95–240 lei/m²',
    card: { src: '/img/srv-mansardari.webp', w: 932, h: 1400, alt: 'Mansardă cu lucarnă și fereastră, văzută din interior' },
    hero: { src: '/img/l-lucarne.webp', w: 1200, h: 800, alt: 'Patru lucarne cu lambriu din lemn pe un acoperiș din tablă', focus: '50% 60%' },
    intro: [
      'Podul devine cameră atunci când izolația, bariera de vapori și ferestrele sunt puse corect. Altfel e prea cald vara și apare condens iarna.',
      'Izolăm între și sub căpriori, montăm ferestre de mansardă cu rama de etanșare a producătorului și refacem lucarnele vechi.',
    ],
    includes: [
      'Vată minerală între și sub căpriori',
      'Barieră de vapori lipită la fiecare îmbinare',
      'Ferestre de mansardă cu rama de etanșare',
      'Lucarne refăcute pe structură nouă',
    ],
    watch: [
      'Vata nu trebuie să atingă folia de deasupra: între ele rămâne loc de aer.',
      'Bariera de vapori se lipește la fiecare îmbinare, altfel aburul din casă ajunge în vată.',
      'Fereastra de mansardă se montează cu rama ei, nu cu spumă și silicon.',
    ],
    projects: ['mansarda', 'lucarne'],
  },
];

export const services: Service[] = raw.map((s) => ({
  ...s,
  card: { ...s.card, src: u(s.card.src) },
  hero: { ...s.hero, src: u(s.hero.src) },
}));

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
