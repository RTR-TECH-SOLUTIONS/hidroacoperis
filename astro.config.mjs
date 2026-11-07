// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Demo publicat pe GitHub Pages (repo RTR-TECH-SOLUTIONS/hidroacoperis), servit pe
// https://demo.mrwebsites.ro/hidroacoperis/.
// TODO(real): pe domeniul clientului se pune domeniul în `site` și se șterge `base`.
// Linkurile și pozele interne trec prin u() din src/data/site.ts, deci restul merge neschimbat.
export default defineConfig({
  site: 'https://demo.mrwebsites.ro',
  base: '/hidroacoperis',
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
