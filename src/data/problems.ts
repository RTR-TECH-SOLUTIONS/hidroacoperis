// „Ce se întâmplă cu acoperișul?”: fiecare problemă deschide WhatsApp cu mesajul scris.
export type Problem = { title: string; detail: string; message: string };

export const problems: Problem[] = [
  {
    title: 'Picură în casă după ploaie',
    detail: 'Pete pe tavan, apă în pod sau tencuiala umflată lângă un perete.',
    message:
      'Bună ziua! Îmi picură în casă după ploaie. Vă trimit poze cu tavanul și cu acoperișul.',
  },
  {
    title: 'Țigle sparte sau mutate de vânt',
    detail: 'Se vede de jos un rând strâmb, o gaură sau bucăți căzute în curte.',
    message:
      'Bună ziua! Am țigle sparte sau mutate de vânt. Vă trimit poze de afară.',
  },
  {
    title: 'Apă pe lângă coșul de fum',
    detail: 'Urme de umezeală pe coș, în pod sau pe tavanul din jurul lui.',
    message:
      'Bună ziua! Intră apă pe lângă coșul de fum. Vă trimit poze cu coșul și din pod.',
  },
  {
    title: 'Plouă prin terasă sau prin garaj',
    detail: 'Pete pe tavanul de sub terasă, bășici în membrană sau apă care stă după ploaie.',
    message:
      'Bună ziua! Îmi intră apă prin terasă (sau garaj). Suprafața e de aproximativ __ m². Vă trimit poze.',
  },
  {
    title: 'Jgheab rupt sau înfundat',
    detail: 'Apa curge pe perete, pe lângă burlan sau stă în jgheab după ploaie.',
    message:
      'Bună ziua! Am un jgheab rupt sau înfundat. Vă trimit poze.',
  },
  {
    title: 'Tabla a ruginit sau s-a desprins',
    detail: 'Șuruburi slăbite, foi ridicate la margine, rugină pe la îmbinări.',
    message:
      'Bună ziua! Tabla de pe acoperiș a ruginit sau s-a desprins. Vă trimit poze.',
  },
  {
    title: 'Vreau acoperiș nou',
    detail: 'Casă nouă la roșu sau un acoperiș vechi care nu mai merită reparat.',
    message:
      'Bună ziua! Vreau un acoperiș nou. Casa are aproximativ __ x __ m. Vă trimit poze.',
  },
];
