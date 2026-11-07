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
      'Reparăm orice învelitoare: țiglă ceramică și de beton, țiglă metalică, tablă fălțuită sau cutată, șindrilă bituminoasă și terase cu membrană. Venim și pentru o singură țiglă, iar vizita și constatarea sunt gratuite.',
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
      'Facem tot ce ține de acoperiș, de la șarpantă la jgheaburi, atice și accesorii, așa că nu cauți trei echipe pentru aceeași casă. Transportul materialelor până la tine e inclus în preț.',
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
    slug: 'hidroizolatii-bituminoase',
    name: 'Hidroizolații bituminoase',
    short: 'Terase, acoperișuri plate și garaje, cu membrană aplicată cu flacără.',
    price: '35–65 lei/m² manoperă',
    card: { src: '/img/hidro-terasa.webp', w: 1920, h: 1280, alt: 'Acoperiș terasă cu membrană bituminoasă și buteliile de gaz pentru arzător' },
    hero: { src: '/img/hidro-terasa.webp', w: 1920, h: 1280, alt: 'Acoperiș terasă cu membrană bituminoasă și buteliile de gaz pentru arzător', focus: '50% 55%' },
    intro: [
      'Pe un acoperiș plat apa nu se scurge ca pe o pantă, ci stă. O terasă, un garaj sau o anexă au nevoie de o hidroizolație continuă, fără nicio îmbinare deschisă, altfel apa găsește drumul spre tavan.',
      'Lucrăm cu membrană bituminoasă aplicată cu flacără, în două straturi: primul lipit pe suportul amorsat, al doilea cu ardezie, care o apără de soare. Îmbinările se suprapun cu cel puțin 10 cm și se topesc pe toată lățimea, nu doar pe margine.',
      'Pe acoperișurile în pantă montăm și șindrilă bituminoasă, pe astereală din OSB și membrană de bază.',
    ],
    includes: [
      'Curățarea suportului și scoaterea membranei vechi, unde s-a umflat',
      'Amorsă bituminoasă pe beton sau pe șapă',
      'Membrană în două straturi, a doua cu ardezie',
      'Racorduri la atice, coșuri și guri de scurgere, urcate pe perete cel puțin 15 cm',
      'Guri de scurgere și preaplinuri noi',
      'Probă cu apă la final, acolo unde se poate',
    ],
    watch: [
      'Membrana pusă peste una veche umflată prinde aer dedesubt și face bășici din prima vară.',
      'Cele mai multe infiltrații la terase nu apar în mijloc, ci la racordul cu aticul și la gurile de scurgere.',
      'O terasă perfect orizontală ține bălți. Panta de 1–2% spre scurgere se face din șapă, înainte de membrană.',
    ],
    projects: ['terasa-bloc', 'atic-casa', 'sindrila'],
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
    slug: 'sisteme-pluviale',
    name: 'Sisteme pluviale',
    short: 'Jgheaburi și burlane (scocuri), cu pantă refăcută și cârlige la fiecare 60 cm.',
    price: '45–130 lei/ml',
    card: { src: '/img/srv-jgheaburi.webp', w: 933, h: 1400, alt: 'Jgheab alb din care picură apă' },
    hero: { src: '/img/srv-jgheaburi.webp', w: 933, h: 1400, alt: 'Jgheab alb din care picură apă', focus: '50% 28%' },
    intro: [
      'Jgheaburile, sau scocurile, cum li se spune în multe zone, duc apa de pe acoperiș departe de casă. Un jgheab fără pantă ține apa la colț, iarna îngheață și se rupe, iar apa care curge pe perete strică tencuiala și, cu timpul, fundația.',
      'Montăm sistemul pluvial complet sau schimbăm doar bucățile rupte: jgheaburi, burlane, coturi, colțare și racorduri la canalizare. Desfundăm burlanele și punem site contra frunzelor, ca apa să curgă și toamna.',
    ],
    includes: [
      'Jgheaburi și burlane din tablă vopsită sau PVC',
      'Cârlige noi, la cel mult 60 cm',
      'Pantă refăcută spre fiecare burlan',
      'Racord la canalizare sau la rigolă',
      'Site contra frunzelor și parazăpezi deasupra jgheabului',
    ],
    watch: [
      'Cârligele puse prea rar lasă jgheabul să se încovoaie sub zăpadă.',
      'Un burlan la fiecare 10–12 metri de jgheab, nu mai rar.',
      'Parazăpezile se pun pe toată lungimea, nu doar deasupra intrării.',
    ],
    projects: ['jgheaburi'],
  },
  {
    slug: 'aticuri',
    name: 'Aticuri și copertine',
    short: 'Atice refăcute, cu copertină din tablă și racord etanș la hidroizolație.',
    price: '70–140 lei/ml',
    card: { src: '/img/atic-casa.webp', w: 1920, h: 1280, alt: 'Casă modernă cu acoperiș terasă și atice albe' },
    hero: { src: '/img/atic-casa.webp', w: 1920, h: 1280, alt: 'Casă modernă cu acoperiș terasă și atice albe', focus: '50% 40%' },
    intro: [
      'Aticul e zidul scund de pe marginea unei terase sau a unei case cu acoperiș ascuns. E partea cea mai expusă: îl bate ploaia din trei părți, iar apa care intră pe sus coboară prin zid și iese ca pată pe fațadă sau pe tavanul de sub el.',
      'Îl acoperim cu copertină din tablă vopsită, cu pantă spre terasă și picurător pe ambele fețe. Hidroizolația terasei o urcăm pe atic și o prindem sub copertină, ca apa să nu aibă pe unde intra între ele.',
    ],
    includes: [
      'Demontarea copertinei vechi sau a glafurilor de ciment fisurate',
      'Suport din lemn tratat sau OSB, cu pantă spre terasă',
      'Copertină din tablă vopsită, pe culoarea tâmplăriei sau a acoperișului',
      'Racordul hidroizolației, urcat pe atic și prins sub copertină',
      'Îmbinări fălțuite sau cu eclisă, nu cu silicon',
    ],
    watch: [
      'O copertină orizontală ține apa deasupra zidului. Cu pantă spre terasă, apa ajunge unde trebuie.',
      'Picurătorul de pe fața exterioară trebuie să iasă cel puțin 3 cm din zid, altfel apa curge pe tencuială și lasă dungi.',
      'Siliconul de la îmbinări crapă după câteva ierni. Fălțul sau eclisa cu garnitură rămân etanșe.',
    ],
    projects: ['atic-casa', 'terasa-bloc'],
  },
  {
    slug: 'accesorii-acoperis',
    name: 'Accesorii de acoperiș',
    short: 'Ferestre de mansardă, parazăpezi, aerisitoare și trepte de acces.',
    price: 'după accesoriu',
    card: { src: '/img/acc-fereastra.webp', w: 1920, h: 1280, alt: 'Fereastră de mansardă și aerisitor pe un acoperiș din țiglă ceramică roșie' },
    hero: { src: '/img/acc-fereastra.webp', w: 1920, h: 1280, alt: 'Fereastră de mansardă și aerisitor pe un acoperiș din țiglă ceramică roșie' },
    intro: [
      'Accesoriile sunt piesele mici de care depinde dacă un acoperiș ține: parazăpezile opresc zăpada să rupă jgheabul, aerisitoarele scot aburul din pod, iar o fereastră de mansardă montată cu rama ei nu lasă apă nici după 20 de ani.',
      'Le montăm pe acoperișurile noi, dar și separat, pe acoperișul pe care îl ai deja. Folosim accesoriile producătorului învelitorii, ca să se potrivească pe profil și să nu pierzi garanția.',
    ],
    includes: [
      'Ferestre de mansardă, cu rama de etanșare a producătorului',
      'Parazăpezi din țeavă sau grilaj, pe toată lungimea streșinii',
      'Aerisitoare și țigle de ventilare pentru pod',
      'Trepte și podeste pentru coșar',
      'Treceri prin acoperiș pentru hotă, centrală sau antenă',
      'Bandă de coamă ventilată și pieptene de streașină contra păsărilor',
    ],
    watch: [
      'Un pod fără aerisire face condens iarna, iar apa picură din folie ca și cum ar curge acoperișul.',
      'Parazăpezile se prind în căpriori sau în șipci întărite, nu doar în tablă.',
      'Trecerea pentru hotă sau centrală se face cu piesa producătorului, nu cu o gaură umplută cu spumă.',
    ],
    projects: ['sindrila', 'mansarda'],
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
