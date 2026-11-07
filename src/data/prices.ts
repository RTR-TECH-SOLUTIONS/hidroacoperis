import { u } from './site';
// Prețurile folosite de calculatorul de pe /preturi.
// TODO(real): manopera clientului și prețurile de material de la distribuitorul cu care lucrează.

export type Range = [number, number];

export type Brand = { id: string; name: string; product: string; price: Range };

export type Material = {
  label: string;
  note: string;
  img: string;
  montaj: Range; // lei/m², manoperă
  brands: Brand[]; // lei/m², material
};

const rawMaterials: Record<string, Material> = {
  metalica: {
    label: 'Țiglă metalică',
    note: 'ușoară, se montează repede',
    img: '/img/srv-tigla-metalica.webp',
    montaj: [75, 130],
    brands: [
      { id: 'bilka', name: 'Bilka', product: 'țiglă metalică 0,45 mm', price: [42, 62] },
      { id: 'wetterbest', name: 'Wetterbest', product: 'țiglă metalică 0,5 mm', price: [48, 72] },
      { id: 'lindab', name: 'Lindab', product: 'țiglă metalică 0,5 mm', price: [68, 98] },
    ],
  },
  ceramica: {
    label: 'Țiglă ceramică sau beton',
    note: 'liniștită pe ploaie, cere șarpantă solidă',
    img: '/img/srv-ceramica-detaliu.webp',
    montaj: [110, 180],
    brands: [
      { id: 'bramac', name: 'Bramac', product: 'țiglă de beton', price: [52, 80] },
      { id: 'tondach', name: 'Tondach', product: 'țiglă ceramică', price: [85, 140] },
      { id: 'creaton', name: 'Creaton', product: 'țiglă ceramică', price: [105, 170] },
    ],
  },
  faltuita: {
    label: 'Tablă fălțuită',
    note: 'linii drepte, merge și pe pante mici',
    img: '/img/l-faltuita-maro.webp',
    montaj: [140, 220],
    brands: [
      { id: 'bilka', name: 'Bilka', product: 'tablă fălțuită click', price: [78, 112] },
      { id: 'wetterbest', name: 'Wetterbest', product: 'tablă fălțuită click', price: [84, 120] },
      { id: 'lindab', name: 'Lindab', product: 'tablă fălțuită', price: [110, 158] },
    ],
  },
};

export const materials: Record<string, Material> = Object.fromEntries(
  Object.entries(rawMaterials).map(([k, m]) => [k, { ...m, img: u(m.img) }]),
);

export const surfacePrices = {
  // manoperă
  folieCaroiaj: [30, 55] as Range, // lei/m²
  demontare: [20, 40] as Range, // lei/m², acoperișul vechi dat jos + moloz
  tinichigerie: [45, 90] as Range, // lei/ml de streașină
  patruApe: 1.08, // mai multe tăieturi la coame și dolii
  // material
  folieMat: [8, 15] as Range, // lei/m²
  sipciMat: [12, 20] as Range, // lei/m², șipci + contrașipci tratate
  pluvialMat: [60, 110] as Range, // lei/ml, jgheab + burlane + accesorii
  accesoriiPct: 0.12, // coame, borduri, șuruburi: cam 12% din învelitoare
};

export type RepairItem = {
  id: string;
  label: string;
  detail: string;
  unit: string;
  price: Range;
  step: number;
  max: number;
};

export const repairs: RepairItem[] = [
  { id: 'tigle', label: 'Țigle înlocuite', detail: 'ceramică, beton sau metalică, cu prinderi noi', unit: 'buc', price: [25, 45], step: 5, max: 200 },
  { id: 'coama', label: 'Coamă refăcută', detail: 'cu bandă de ventilare, fără mortar', unit: 'ml', price: [60, 110], step: 1, max: 60 },
  { id: 'cos', label: 'Coș de fum etanșat', detail: 'șorț din tablă și bandă de plumb', unit: 'buc', price: [450, 900], step: 1, max: 4 },
  { id: 'jgheab', label: 'Jgheab înlocuit', detail: 'cu cârlige noi și pantă spre burlan', unit: 'ml', price: [70, 130], step: 1, max: 80 },
  { id: 'folie', label: 'Folie refăcută local', detail: 'țiglele scoase, folie și șipci noi, țiglele puse la loc', unit: 'm²', price: [90, 160], step: 1, max: 60 },
  { id: 'fereastra', label: 'Fereastră de mansardă reetanșată', detail: 'ramă de etanșare nouă', unit: 'buc', price: [350, 700], step: 1, max: 6 },
];
