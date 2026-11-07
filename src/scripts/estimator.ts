// Calculatorul pas cu pas de pe /preturi.
type Range = [number, number];
type Brand = { id: string; name: string; product: string; price: Range };
type Material = { label: string; montaj: Range; brands: Brand[] };
type Data = {
  materials: Record<string, Material>;
  surfacePrices: {
    folieCaroiaj: Range;
    demontare: Range;
    tinichigerie: Range;
    patruApe: number;
    folieMat: Range;
    sipciMat: Range;
    pluvialMat: Range;
    accesoriiPct: number;
  };
  repairs: { id: string; label: string; unit: string; price: Range; step: number; max: number }[];
  whatsapp: string;
  firm: string;
};

const nf = new Intl.NumberFormat('ro-RO');
const roundTo = (n: number) => (n >= 1000 ? Math.round(n / 100) * 100 : Math.round(n / 10) * 10);
const money = ([a, b]: Range) => `${nf.format(roundTo(a))}–${nf.format(roundTo(b))} lei`;
const mul = ([a, b]: Range, k: number): Range => [a * k, b * k];
const add = (...rs: Range[]): Range => rs.reduce<Range>((acc, r) => [acc[0] + r[0], acc[1] + r[1]], [0, 0]);
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

const jobLabels: Record<string, string> = {
  nou: 'Acoperiș nou',
  inlocuire: 'Înlocuire acoperiș vechi',
  reparatie: 'Reparație',
};

const FLOWS: Record<string, string[]> = {
  surface: ['job', 'material', 'brand', 'dims', 'result'],
  repair: ['job', 'repairs', 'result'],
};

export function initEstimator() {
  const dataEl = document.getElementById('est-data');
  const root = document.querySelector<HTMLElement>('[data-wz]');
  const form = document.querySelector<HTMLFormElement>('[data-est-form]');
  if (!dataEl || !root || !form) return;
  const data: Data = JSON.parse(dataEl.textContent || '{}');

  const $ = <T extends Element = HTMLElement>(sel: string, el: ParentNode = document) => el.querySelector<T>(sel);
  const val = (name: string) => (form.elements.namedItem(name) as RadioNodeList | HTMLInputElement | null)?.value ?? '';

  const steps = new Map<string, HTMLElement>();
  form.querySelectorAll<HTMLElement>('[data-step]').forEach((s) => steps.set(s.dataset.step!, s));
  const back = $<HTMLButtonElement>('[data-wz-back]', root)!;
  const next = $<HTMLButtonElement>('[data-wz-next]', root)!;
  const restart = $<HTMLButtonElement>('[data-wz-restart]', root)!;
  const label = $('[data-wz-label]', root)!;
  const bar = $('[data-wz-bar]', root)!;
  const picks = $('[data-picks]')!;

  let index = 0;
  const flow = () => (val('job') === 'reparatie' ? FLOWS.repair : FLOWS.surface);

  const dims = () => {
    const L = Number(val('len'));
    const W = Number(val('wid'));
    const slope = Number(val('slope'));
    const shape = val('shape');
    const area = Math.round(((L + 1) * (W + 1)) / Math.cos((slope * Math.PI) / 180));
    const ml = Math.round(shape === '4' ? 2 * (L + 1) + 2 * (W + 1) : 2 * (L + 1));
    return { L, W, slope, shape, area, ml };
  };
  const brandOf = (matId: string) => {
    const id = val(`brand-${matId}`) || 'oricare';
    const m = data.materials[matId];
    if (id === 'oricare') {
      const lo = Math.min(...m.brands.map((b) => b.price[0]));
      const hi = Math.max(...m.brands.map((b) => b.price[1]));
      return { name: 'Nu am ales încă', product: `${m.label.toLowerCase()}, orice marcă`, price: [lo, hi] as Range, any: true };
    }
    const b = m.brands.find((x) => x.id === id)!;
    return { ...b, any: false };
  };
  const repairQty = () =>
    data.repairs.map((r) => {
      const input = $<HTMLInputElement>(`[data-repair="${r.id}"] input`, form);
      const qty = Math.max(0, Math.min(r.max, Number(input?.value) || 0));
      return { ...r, qty };
    });

  const renderPicks = () => {
    const job = val('job');
    const rows: [string, string][] = [['Lucrare', jobLabels[job]]];
    if (job !== 'reparatie') {
      const mat = data.materials[val('material')];
      const b = brandOf(val('material'));
      const d = dims();
      rows.push(['Învelitoare', mat.label]);
      rows.push(['Marca', b.any ? 'nealeasă' : b.name]);
      rows.push(['Casa', `${nf.format(d.L)} × ${nf.format(d.W)} m, ${d.slope}°, ${d.shape === '4' ? 'în patru ape' : 'în două ape'}`]);
      rows.push(['Suprafața', `cam ${nf.format(d.area)} m²`]);
    } else {
      const chosen = repairQty().filter((r) => r.qty);
      rows.push(['Reparații', chosen.length ? chosen.map((r) => `${r.label.toLowerCase()} ${r.qty} ${r.unit}`).join(', ') : 'încă nimic']);
    }
    picks.innerHTML = rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
  };

  const renderLive = () => {
    const d = dims();
    $('[data-out="len"]', form)!.textContent = `${nf.format(d.L)} m`;
    $('[data-out="wid"]', form)!.textContent = `${nf.format(d.W)} m`;
    $('[data-out="slope"]', form)!.textContent = `${d.slope}°`;
    $('[data-area-live]', form)!.textContent = `${nf.format(d.area)} m²`;
    form.querySelectorAll<HTMLInputElement>('input[type="range"]').forEach((r) => {
      const p = ((Number(r.value) - Number(r.min)) / (Number(r.max) - Number(r.min))) * 100;
      r.style.setProperty('--p', `${p}%`);
    });
    const mat = val('material');
    form.querySelectorAll<HTMLElement>('[data-brands-for]').forEach((g) => (g.hidden = g.dataset.brandsFor !== mat));
  };

  const row = (label: string, rate: string, value: string) =>
    `<tr><td>${esc(label)}</td><td class="r num muted">${esc(rate)}</td><td class="r num">${esc(value)}</td></tr>`;
  const subRow = (label: string, value: string) =>
    `<tr class="sub"><td>${esc(label)}</td><td class="r muted"></td><td class="r num">${esc(value)}</td></tr>`;
  const rate = ([a, b]: Range, unit: string) => `${Math.round(a)}–${Math.round(b)} lei/${unit}`;

  let waText = '';

  const renderResult = () => {
    const job = val('job');
    const body = $('[data-sheet-body]', form)!;
    const date = new Intl.DateTimeFormat('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
    $('[data-date]', form)!.textContent = date;
    const sp = data.surfacePrices;

    if (job === 'reparatie') {
      const chosen = repairQty().filter((r) => r.qty);
      $('[data-summary]', form)!.textContent = 'Reparație, socotită pe bucată';
      if (!chosen.length) {
        body.innerHTML = `<p class="empty">Nu ai trecut nicio reparație. Nu-i nimic: trimite-ne 2–3 poze și le socotim noi.</p>`;
        $('[data-total]', form)!.textContent = '–';
      } else {
        let total: Range = [0, 0];
        const rows = chosen.map((r) => {
          const v = mul(r.price, r.qty);
          total = add(total, v);
          return row(`${r.label}, ${r.qty} ${r.unit}`, rate(r.price, r.unit), money(v));
        });
        body.innerHTML = `<table class="rows"><caption>Manoperă</caption><tbody>${rows.join('')}</tbody></table>`;
        $('[data-total]', form)!.textContent = money(total);
      }
      $('[data-total-label]', form)!.textContent = 'Total manoperă';
      $('[data-note]', form)!.textContent =
        'La reparațiile mici aducem noi materialul și îl trecem separat, cu bonul.';
      waText = [
        'Bună ziua! Am o reparație la acoperiș.',
        ...chosen.map((r) => `${r.label}: ${r.qty} ${r.unit}`),
        ...(chosen.length ? [`Estimare de pe site: ${$('[data-total]', form)!.textContent}`] : []),
        'Vă trimit poze.',
      ].join('\n');
    } else {
      const matId = val('material');
      const mat = data.materials[matId];
      const b = brandOf(matId);
      const d = dims();
      const factor = d.shape === '4' ? sp.patruApe : 1;
      const montajRate = mul(mat.montaj, factor);

      const lab = {
        demontare: job === 'inlocuire' ? mul(sp.demontare, d.area) : ([0, 0] as Range),
        folie: mul(sp.folieCaroiaj, d.area),
        montaj: mul(montajRate, d.area),
        pluvial: mul(sp.tinichigerie, d.ml),
      };
      const labTotal = add(lab.demontare, lab.folie, lab.montaj, lab.pluvial);

      const invelitoare = mul(b.price, d.area);
      const mt = {
        invelitoare,
        folie: mul(sp.folieMat, d.area),
        sipci: mul(sp.sipciMat, d.area),
        accesorii: mul(invelitoare, sp.accesoriiPct),
        pluvial: mul(sp.pluvialMat, d.ml),
      };
      const matTotal = add(mt.invelitoare, mt.folie, mt.sipci, mt.accesorii, mt.pluvial);
      const total = add(labTotal, matTotal);

      const shapeLabel = d.shape === '4' ? 'în patru ape' : 'în două ape';
      $('[data-summary]', form)!.textContent = `${jobLabels[job]} · ${mat.label} · ${b.any ? 'marcă nealeasă' : b.name}`;

      const labRows = [
        job === 'inlocuire' ? row('Demontare acoperiș vechi, cu molozul', rate(sp.demontare, 'm²'), money(lab.demontare)) : '',
        row('Folie, contrașipci și șipci', rate(sp.folieCaroiaj, 'm²'), money(lab.folie)),
        row(`Montaj ${mat.label.toLowerCase()}`, rate(montajRate, 'm²'), money(lab.montaj)),
        row(`Jgheaburi și burlane, ${d.ml} ml`, rate(sp.tinichigerie, 'ml'), money(lab.pluvial)),
        subRow('Manoperă', money(labTotal)),
      ];
      const matRows = [
        row(`${b.any ? mat.label : `${b.name}, ${b.product}`}`, rate(b.price, 'm²'), money(mt.invelitoare)),
        row('Folie anticondens', rate(sp.folieMat, 'm²'), money(mt.folie)),
        row('Șipci și contrașipci tratate', rate(sp.sipciMat, 'm²'), money(mt.sipci)),
        row('Coame, borduri, șuruburi', `cam ${Math.round(sp.accesoriiPct * 100)}%`, money(mt.accesorii)),
        row(`Sistem pluvial, ${d.ml} ml`, rate(sp.pluvialMat, 'ml'), money(mt.pluvial)),
        subRow('Material', money(matTotal)),
      ];

      body.innerHTML = `
        <div class="area">
          <p>Suprafața acoperișului</p>
          <p class="area-num num">${nf.format(d.area)} m²</p>
          <p class="area-formula num">(${nf.format(d.L)} + 1) × (${nf.format(d.W)} + 1) m ÷ cos ${d.slope}°, ${shapeLabel}</p>
        </div>
        <table class="rows"><caption>Manoperă</caption><tbody>${labRows.join('')}</tbody></table>
        <table class="rows"><caption>Material${b.any ? ', interval pe toate mărcile' : `, ${esc(b.name)}`}</caption><tbody>${matRows.join('')}</tbody></table>`;
      $('[data-total-label]', form)!.textContent = 'Total cu material';
      $('[data-total]', form)!.textContent = money(total);
      $('[data-note]', form)!.textContent =
        job === 'inlocuire'
          ? 'Prețuri orientative. Dacă la demontare găsim căpriori putrezi, îi schimbăm doar după ce vă arătăm.'
          : 'Prețuri orientative. Șarpanta, dacă trebuie făcută, o socotim separat după ce o vedem.';

      waText = [
        'Bună ziua! Am socotit acoperișul pe site:',
        `Lucrare: ${jobLabels[job]}, ${mat.label.toLowerCase()}${b.any ? '' : `, ${b.name}`}, ${shapeLabel}`,
        `Casa: ${nf.format(d.L)} × ${nf.format(d.W)} m, pantă ${d.slope}°`,
        `Suprafață: cam ${nf.format(d.area)} m²`,
        `Manoperă: ${money(labTotal)}`,
        `Material: ${money(matTotal)}`,
        `Total: ${money(total)}`,
        'Vă trimit și câteva poze.',
      ].join('\n');
    }
    const wa = $<HTMLAnchorElement>('[data-wa]', form);
    if (wa) wa.href = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(waText)}`;
  };

  const show = (i: number, focus = true) => {
    const f = flow();
    index = Math.max(0, Math.min(f.length - 1, i));
    const current = f[index];
    steps.forEach((el, key) => (el.hidden = key !== current));
    const isResult = current === 'result';
    if (isResult) renderResult();
    back.hidden = index === 0;
    next.hidden = isResult;
    restart.hidden = !isResult;
    next.innerHTML = next.innerHTML.replace(/^[^<]*/, f[index + 1] === 'result' ? 'Vezi devizul ' : 'Mai departe ');
    label.textContent = isResult ? 'Devizul tău' : `Pasul ${index + 1} din ${f.length - 1}`;
    (bar as HTMLElement).style.width = `${Math.min(100, ((index + 1) / (f.length - 1)) * 100)}%`;
    renderPicks();
    if (focus) {
      const heading = steps.get(current)?.querySelector<HTMLElement>('.q, .sheet-title');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
      const top = root.getBoundingClientRect().top + window.scrollY - 96;
      if (window.scrollY > top) window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  next.addEventListener('click', () => show(index + 1));
  back.addEventListener('click', () => show(index - 1));
  restart.addEventListener('click', () => show(0));

  form.addEventListener('input', () => {
    renderLive();
    renderPicks();
  });
  form.addEventListener('change', () => {
    renderLive();
    renderPicks();
  });
  form.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-inc]');
    if (!btn) return;
    const input = btn.closest('li')?.querySelector<HTMLInputElement>('input');
    if (!input) return;
    const step = Number(input.step) || 1;
    const v = Number(input.value || 0) + Number(btn.dataset.inc) * step;
    input.value = String(Math.max(0, Math.min(Number(input.max), v)));
    renderPicks();
  });
  $('[data-print]', form)?.addEventListener('click', () => window.print());

  renderLive();
  show(0, false);
}
