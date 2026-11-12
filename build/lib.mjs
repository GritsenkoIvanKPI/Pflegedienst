/* Gemeinsame Bausteine für alle Unterseiten.
   Kopf, Menüs, Kontaktformular und Fuß kommen aus index.html – dort einmal ändern, `npm run build` überträgt es auf alle Seiten. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const SITE = 'https://pflegedienst-funk.de';
export const PHONE = '05459&nbsp;5869825';
export const TEL = 'tel:+4954595869825';

/* ---------- Teile aus der Startseite ---------- */
const home = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const between = (a, b, from = 0) => {
  const i = home.indexOf(a, from);
  const j = home.indexOf(b, i + a.length);
  if (i < 0 || j < 0) throw new Error(`Marker fehlt in index.html: ${a} … ${b}`);
  return home.slice(i, j);
};
const sectionById = (marker) => {
  const i = home.indexOf(marker);
  const j = home.indexOf('</section>', i);
  if (i < 0 || j < 0) throw new Error(`Abschnitt fehlt in index.html: ${marker}`);
  return home.slice(i, j + '</section>'.length);
};
const CHROME_TOP = between('<body>', '<main id="inhalt">').slice('<body>'.length);
const CHROME_BOTTOM = between('</main>', '</body>').slice('</main>'.length);
export const CONTACT = sectionById('<section class="section contact" id="kontakt"');
export const AREAS = sectionById('<section class="areas" id="einsatzgebiete"');

/* ---------- Daten ---------- */
export const SERVICES = [
  { slug: 'grundpflege', name: 'Grundpflege', icon: 'hands', short: 'Körperpflege, Mobilisation und Hilfe beim Essen', img: 'grundpflege' },
  { slug: 'behandlungspflege', name: 'Behandlungspflege', icon: 'stetho', short: 'Medizinische Pflege nach ärztlicher Verordnung', img: 'behandlungspflege' },
  { slug: 'wundversorgung', name: 'Wundversorgung', icon: 'bandage', short: 'Professionelles Wundmanagement zu Hause', img: 'wundversorgung' },
  { slug: 'hauswirtschaft', name: 'Hauswirtschaft', icon: 'home', short: 'Hilfe im Haushalt und Alltag', img: 'hauswirtschaft' },
  { slug: 'pflegeberatung-37-3', name: 'Pflegeberatung §&nbsp;37.3', plain: 'Pflegeberatung § 37.3', icon: 'clipboard', short: 'Beratungseinsatz für Pflegegeld-Empfänger', img: 'ratgeber-beratung' },
  { slug: 'verhinderungspflege', name: 'Verhinderungspflege', icon: 'swap', short: 'Vertretung, wenn Angehörige verhindert sind', img: 'warum' },
  { slug: 'medikamentengabe', name: 'Medikamentengabe', icon: 'pill', short: 'Sicher, pünktlich und dokumentiert', img: 'behandlungspflege' },
  { slug: 'kompressionsversorgung', name: 'Kompressionsversorgung', icon: 'leg', short: 'Kompressionsstrümpfe und -verbände fachgerecht', img: 'grundpflege' },
];
export const CITIES = [
  { slug: 'pflegedienst-hoerstel', name: 'Hörstel', parts: ['Bevergern', 'Riesenbeck', 'Dreierwalde'] },
  { slug: 'pflegedienst-mettingen', name: 'Mettingen', parts: ['Schlickelde', 'Espel'] },
  { slug: 'pflegedienst-recke', name: 'Recke', parts: ['Steinbeck', 'Obersteinbeck', 'Uffeln'] },
  { slug: 'pflegedienst-ibbenbueren', name: 'Ibbenbüren', parts: ['Bockraden', 'Dickenberg', 'Püsselbüren'] },
  { slug: 'pflegedienst-rheine', name: 'Rheine', parts: ['Rodde', 'Altenrheine'] },
];
export const service = (slug) => SERVICES.find((s) => s.slug === slug);
export const city = (slug) => CITIES.find((c) => c.slug === slug);
export const listJoin = (arr, last = 'und') => (arr.length < 2 ? arr.join('') : `${arr.slice(0, -1).join(', ')} ${last} ${arr[arr.length - 1]}`);

/* ---------- Bilder (vorhandene WebP-Größen) ---------- */
const IMAGES = {
  grundpflege: { sizes: [640, 1200], w: 1200, h: 896 },
  behandlungspflege: { sizes: [640, 1200], w: 1200, h: 896 },
  wundversorgung: { sizes: [640, 1200], w: 1200, h: 896 },
  hauswirtschaft: { sizes: [640, 1200], w: 1200, h: 896 },
  'ratgeber-beratung': { sizes: [640, 1200], w: 1200, h: 896 },
  'ratgeber-pflegegrad': { sizes: [640, 1200], w: 1200, h: 896 },
  'ratgeber-wunde': { sizes: [640, 1200], w: 1200, h: 896 },
  hero: { sizes: [640, 960, 1400], w: 1400, h: 1875 },
  inhaber: { sizes: [640, 1200], w: 1200, h: 896 },
  warum: { sizes: [640, 960, 1200], w: 1200, h: 1789 },
  'beratung-tall': { sizes: [640, 960, 1200], w: 1200, h: 1789 },
  beratung: { sizes: [800, 1600], w: 1600, h: 894 },
  karriere: { sizes: [640, 1000, 1400], w: 1400, h: 1400 },
};
export const img = (name, alt, { sizes = '(min-width: 1024px) 45vw, 100vw', lazy = true, cls = '', priority = false } = {}) => {
  const m = IMAGES[name];
  if (!m) throw new Error(`Unbekanntes Bild: ${name}`);
  const srcset = m.sizes.map((s) => `/assets/img/${name}-${s}.webp ${s}w`).join(', ');
  const mid = m.sizes[Math.min(1, m.sizes.length - 1)];
  return `<img${cls ? ` class="${cls}"` : ''} src="/assets/img/${name}-${mid}.webp" srcset="${srcset}" sizes="${sizes}" width="${m.w}" height="${m.h}"${lazy ? ' loading="lazy"' : ''}${priority ? ' fetchpriority="high"' : ''} alt="${alt}">`;
};
export const preload = (name, sizes = '(min-width: 1024px) 45vw, 100vw') => {
  const m = IMAGES[name];
  const srcset = m.sizes.map((s) => `/assets/img/${name}-${s}.webp ${s}w`).join(', ');
  return `<link rel="preload" as="image" href="/assets/img/${name}-${m.sizes[Math.min(1, m.sizes.length - 1)]}.webp" imagesrcset="${srcset}" imagesizes="${sizes}">`;
};

/* ---------- Kleine HTML-Helfer ---------- */
export const icon = (name, cls = '') => `<svg class="icon${cls ? ` ${cls}` : ''}"><use href="#i-${name}"/></svg>`;
export const ticks = (items, cls = '') => `<ul class="ticks${cls ? ` ${cls}` : ''}" role="list">${items.map((t) => `<li>${icon('check')}<span>${t}</span></li>`).join('')}</ul>`;
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
export const text = strip;

export const callBtn = (small = 'Direkt anrufen') => `<a class="btn btn--call btn--lg" href="${TEL}">${icon('phone')}<span><small>${small}</small>${PHONE}</span></a>`;
export const ctaBtn = (label = 'Jetzt Kontakt aufnehmen', href = '#kontakt') => `<a class="btn btn--accent btn--lg" href="${href}">${label} ${icon('arrow')}</a>`;

/* Seitenkopf mit Brotkrumen, H1 und Bild */
/* Drei Gruppen bekommen eigene Kopfbereiche:
   Pflege & Medizin (klinisch, dunkel), Entlastung & Beratung (warm, hell), Einsatzgebiete (lokal, Karte) */
const MEDICAL = {
  Grundpflege: ['Pflegekasse (SGB&nbsp;XI)', 'ab Pflegegrad&nbsp;2', 'feste Bezugspflegekräfte'],
  Behandlungspflege: ['Krankenkasse (SGB&nbsp;V)', 'ärztliche Verordnung', 'examinierte Pflegefachkräfte'],
  Wundversorgung: ['Krankenkasse (SGB&nbsp;V)', 'ärztliche Verordnung', 'Fachkräfte für Wundmanagement'],
  Medikamentengabe: ['Krankenkasse (SGB&nbsp;V)', 'ärztliche Verordnung', 'examinierte Pflegefachkräfte'],
  Kompressionsversorgung: ['Krankenkasse (SGB&nbsp;V)', 'ärztliche Verordnung', 'examinierte Pflegefachkräfte'],
};
const RELIEF = new Set(['Hauswirtschaft', 'Verhinderungspflege', 'Pflegeberatung §&nbsp;37.3']);

export const pageHero = (o) => {
  const last = o.crumbs[o.crumbs.length - 1][0];
  const group = o.crumbs[0][0];
  if (group === 'Leistungen' && MEDICAL[last]) return medicalHero(o, MEDICAL[last]);
  if (group === 'Leistungen' && RELIEF.has(last)) return reliefHero(o);
  if (group === 'Einsatzgebiete' && city(`pflegedienst-${last.toLowerCase().replace('ö', 'oe').replace('ü', 'ue')}`)) return cityHero(o, city(`pflegedienst-${last.toLowerCase().replace('ö', 'oe').replace('ü', 'ue')}`));
  return defaultHero(o);
};

const heroText = ({ crumbs, eyebrow, title, lead, actions }, eyebrowCls = 'eyebrow') => `
          ${breadcrumbNav(crumbs)}
          ${eyebrow ? `<p class="${eyebrowCls}" data-reveal>${eyebrow}</p>` : ''}
          <h1 class="page-hero__title" id="page-title" data-reveal>${title}</h1>
          ${lead ? `<p class="page-hero__lead" data-reveal>${lead}</p>` : ''}
          ${actions === false ? '' : `<div class="hero__actions" data-reveal>${actions ?? `${ctaBtn()}${callBtn()}`}</div>`}`;
const heroImg = (o, sizes = '(min-width: 1024px) 44vw, 100vw') => img(o.image, o.imageAlt, { lazy: false, priority: true, sizes });

/* Pflege & Medizin */
const medicalHero = (o, [payer, need, who]) => `
    <section class="med-hero" aria-labelledby="page-title">
      <div class="container med-hero__grid">
        <div class="med-hero__text">${heroText(o, 'eyebrow eyebrow--light')}
          ${o.checks ? `<ul class="med-hero__checks" role="list" data-reveal>${o.checks.map((c) => `<li>${icon('check')} ${c}</li>`).join('')}</ul>` : ''}
        </div>
        <div class="med-hero__media" data-reveal>
          <figure class="med-hero__photo media${o.mediaClass ? ` ${o.mediaClass}` : ''}">${heroImg(o)}</figure>
          <dl class="med-hero__card">
            <div><dt>${icon('shield')} Kostenträger</dt><dd>${payer}</dd></div>
            <div><dt>${icon('clipboard')} Voraussetzung</dt><dd>${need}</dd></div>
            <div><dt>${icon('stetho')} Durch</dt><dd>${who}</dd></div>
          </dl>
        </div>
      </div>
      <svg class="curve curve--bottom" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90V62C380 18 900 0 1440 22V90Z"/></svg>
    </section>`;

/* Entlastung & Beratung */
const reliefHero = (o) => `
    <section class="relief-hero" aria-labelledby="page-title">
      <div class="container relief-hero__grid">
        <div class="relief-hero__media" data-reveal>
          <figure class="relief-hero__photo media${o.mediaClass ? ` ${o.mediaClass}` : ''}">${heroImg(o, '(min-width: 1024px) 40vw, 100vw')}</figure>
          ${o.checks ? `<div class="relief-hero__note"><p class="relief-hero__note-title">${icon('heart')} Gut zu wissen</p><ul role="list">${o.checks.map((c) => `<li>${c}</li>`).join('')}</ul></div>` : ''}
        </div>
        <div class="relief-hero__text">
          ${heroText(o).replace('</ol></nav>', `</ol></nav>
          <p class="relief-hero__tag" data-reveal>${icon('users')} Für Pflegebedürftige und Angehörige</p>`)}
        </div>
      </div>
      <svg class="curve curve--bottom" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90V30C460 80 1000 86 1440 50V90Z"/></svg>
    </section>`;

/* Einsatzgebiete */
const cityHero = (o, c) => `
    <section class="city-hero" aria-labelledby="page-title">
      <div class="container city-hero__grid">
        <div class="city-hero__text">${heroText(o)}
          ${o.checks ? `<ul class="hero__checks" role="list" data-reveal>${o.checks.map((ch) => `<li>${icon('check')} ${ch}</li>`).join('')}</ul>` : ''}
        </div>
        <aside class="city-hero__card" data-reveal aria-label="Einsatzgebiet ${c.name}">
          <figure class="city-hero__photo media${o.mediaClass ? ` ${o.mediaClass}` : ''}">${heroImg(o, '(min-width: 1024px) 36vw, 100vw')}
            <figcaption class="city-hero__badge">${icon('pin')} ${c.name}</figcaption>
          </figure>
          <div class="city-hero__places">
            <p class="city-hero__label">Unterwegs in</p>
            <ul class="city-hero__route" role="list">
              <li class="is-main"><strong>${c.name}</strong></li>
              ${c.parts.map((part) => `<li>${part}</li>`).join('\n              ')}
            </ul>
            <p class="city-hero__office">${icon('home')} <span>Büro: Bahnhofstraße&nbsp;33, Hörstel · <a href="${TEL}">${PHONE}</a></span></p>
          </div>
        </aside>
      </div>
      <svg class="curve curve--bottom" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90V54C420 6 1000 0 1440 40V90Z"/></svg>
    </section>`;

const defaultHero = ({ crumbs, eyebrow, title, lead, image, imageAlt, actions, checks, compact = false, mediaClass = '', extra = '' }) => `
    <section class="page-hero${compact ? ' page-hero--compact' : ''}${image ? '' : ' page-hero--noimg'}" aria-labelledby="page-title">
      <div class="container page-hero__grid">
        <div class="page-hero__text">
          ${breadcrumbNav(crumbs)}
          ${eyebrow ? `<p class="eyebrow" data-reveal>${eyebrow}</p>` : ''}
          <h1 class="page-hero__title" id="page-title" data-reveal>${title}</h1>
          ${lead ? `<p class="page-hero__lead" data-reveal>${lead}</p>` : ''}
          ${actions === false ? '' : `<div class="hero__actions" data-reveal>${actions ?? `${ctaBtn()}${callBtn()}`}</div>`}
          ${checks ? `<ul class="hero__checks" role="list" data-reveal>${checks.map((c) => `<li>${icon('check')} ${c}</li>`).join('')}</ul>` : ''}
          ${extra}
        </div>
        ${image ? `<figure class="page-hero__media media${mediaClass ? ` ${mediaClass}` : ''}" data-reveal>${img(image, imageAlt, { lazy: false, priority: true, sizes: '(min-width: 1024px) 42vw, 100vw' })}</figure>` : ''}
      </div>
      <svg class="curve curve--bottom" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90V62C380 18 900 0 1440 22V90Z"/></svg>
    </section>`;

export const breadcrumbNav = (crumbs) => `<nav class="breadcrumb" aria-label="Brotkrumen"><ol role="list">
            <li><a href="/">Startseite</a></li>${crumbs.map(([label, href], i) => (i < crumbs.length - 1 && href
    ? `<li><a href="${href}">${label}</a></li>`
    : `<li><span aria-current="page">${label}</span></li>`)).join('')}
          </ol></nav>`;

/* Verwandte Leistungen als Link-Index (bewusst anders als die Kacheln der Startseite) */
export const related = (slugs, title = 'Passende <em>Leistungen.</em>', eyebrow = 'Das könnte Sie auch interessieren') => `
    <section class="section related" aria-labelledby="related-title">
      <div class="container related__grid">
        <header class="section-head" data-reveal>
          <p class="eyebrow">${eyebrow}</p>
          <h2 id="related-title">${title}</h2>
          <a class="link-arrow" href="/leistungen/">Alle Leistungen ${icon('arrow')}</a>
        </header>
        <ul class="link-index" role="list">
          ${slugs.map((slug) => { const s = service(slug); return `<li data-reveal>
            <a class="link-index__item" href="/leistungen/${s.slug}/">
              <span class="link-index__icon">${icon(s.icon)}</span>
              <span class="link-index__text"><strong>${s.name}</strong><small>${s.short}</small></span>
              <span class="link-index__arrow">${icon('arrow')}</span>
            </a>
          </li>`; }).join('\n          ')}
        </ul>
      </div>
    </section>`;

/* Orte als Chips – interne Verlinkung zu den Stadtseiten */
export const cityBand = (lead = 'Wir sind für Sie da in') => `
    <section class="city-band" aria-label="Einsatzgebiete">
      <div class="container city-band__inner" data-reveal>
        <p class="city-band__lead">${icon('pin')} ${lead}</p>
        <ul class="city-band__list" role="list">
          ${CITIES.map((c) => `<li><a class="city-chip" href="/${c.slug}/"><strong>${c.name}</strong><small>${listJoin(c.parts)}</small></a></li>`).join('\n          ')}
        </ul>
      </div>
    </section>`;

/* FAQ für Unterseiten: Überschrift oben, nummerierte Fragen als Liste (ohne Karten) */
export const faq = (items, { title = 'Häufige <em>Fragen.</em>', lead = 'Kurze Antworten auf das, was Familien uns am häufigsten fragen.', eyebrow = 'Häufige Fragen' } = {}) => `
    <section class="section qa" aria-labelledby="faq-title">
      <div class="container">
        <header class="qa__head" data-reveal>
          <div>
            <p class="eyebrow">${eyebrow}</p>
            <h2 id="faq-title">${title}</h2>
          </div>
          <div class="qa__aside">
            <p>${lead}</p>
            <a class="qa__phone" href="${TEL}">${icon('phone')} <span>Ihre Frage ist nicht dabei? <strong>${PHONE}</strong></span></a>
          </div>
        </header>
        <div class="qa__list">
          ${items.map(([q, a], i) => `<details class="qa__item" name="faq" data-reveal>
            <summary><span class="qa__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><h3>${q}</h3><span class="qa__toggle" aria-hidden="true">${icon('plus')}</span></summary>
            <div class="qa__answer">${a.startsWith('<') ? a : `<p>${a}</p>`}</div>
          </details>`).join('\n          ')}
        </div>
      </div>
    </section>`;
export const faqSchema = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })),
});

/* Dunkles Band mit Handlungsaufforderung */
export const ctaBand = ({ title = 'Wir beraten Sie <em>kostenlos.</em>', text: t = 'Rufen Sie uns an oder schreiben Sie uns&nbsp;– wir melden uns schnellstmöglich und besprechen Ihre Situation in Ruhe.', button = 'Rückruf anfordern' } = {}) => `
    <section class="cta-band" aria-label="Kontakt aufnehmen">
      <div class="container">
        <div class="cta-band__card" data-reveal>
          <div class="cta-band__text">
            <h2>${title}</h2>
            <p>${t}</p>
          </div>
          <div class="cta-band__actions">
            ${ctaBtn(button)}
            ${callBtn('Oder direkt anrufen')}
          </div>
        </div>
      </div>
    </section>`;

/* Büro & Anfahrt mit Google Maps per Klick (anders als die Einsatzgebiets-Karte der Startseite) */
export const office = ({ eyebrow = 'Anfahrt', title = 'Unser Büro <em>in Hörstel.</em>', text: t = 'Für ein persönliches Gespräch besuchen Sie uns gern&nbsp;– am besten nach kurzer telefonischer Absprache.' } = {}) => `
    <section class="section office" aria-labelledby="office-title">
      <div class="container office__grid">
        <div class="office__card" data-reveal>
          <p class="eyebrow">${eyebrow}</p>
          <h2 id="office-title">${title}</h2>
          <p>${t}</p>
          <dl class="office__list">
            <div><dt>${icon('pin')} Adresse</dt><dd>Ambulanter Pflegedienst Funk GmbH<br>Bahnhofstraße&nbsp;33, 48477 Hörstel</dd></div>
            <div><dt>${icon('clock')} Bürozeiten</dt><dd>Montag bis Freitag, 8–14&nbsp;Uhr</dd></div>
            <div><dt>${icon('phone')} Telefon</dt><dd><a href="${TEL}">${PHONE}</a></dd></div>
          </dl>
          <a class="btn btn--navy" href="https://www.google.com/maps/dir/?api=1&amp;destination=Bahnhofstra%C3%9Fe%2033%2C%2048477%20H%C3%B6rstel" target="_blank" rel="noopener">Route planen ${icon('arrow')}</a>
        </div>
        <div class="office__map" data-gmap data-reveal>
          <div class="office__placeholder">
            <span class="office__pin">${icon('pin')}</span>
            <p><strong>Bahnhofstraße&nbsp;33</strong><br>48477 Hörstel</p>
            <button class="btn btn--accent btn--sm" type="button" data-gmap-load>${icon('pin')} Google Maps anzeigen</button>
            <p class="office__note">Erst nach Klick wird die Karte geladen. Dabei werden Daten an Google übertragen (<a href="/datenschutz/">Datenschutz</a>).</p>
          </div>
        </div>
      </div>
    </section>`;

/* ---------- Strukturierte Daten ---------- */
const ORG = {
  '@type': 'MedicalBusiness',
  '@id': `${SITE}/#organisation`,
  name: 'Ambulanter Pflegedienst Funk GmbH',
  alternateName: 'Pflegedienst Funk',
  url: `${SITE}/`,
  logo: `${SITE}/assets/img/logo-funk.png`,
  image: `${SITE}/assets/img/og-image.jpg`,
  telephone: '+49 5459 5869825',
  email: 'info@pflegedienst-funk.de',
  address: { '@type': 'PostalAddress', streetAddress: 'Bahnhofstraße 33', postalCode: '48477', addressLocality: 'Hörstel', addressRegion: 'Nordrhein-Westfalen', addressCountry: 'DE' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '14:00' }],
};
export const ORG_REF = { '@id': `${SITE}/#organisation` };
export const AREA_SERVED = CITIES.flatMap((c) => [{ '@type': 'City', name: c.name }, ...c.parts.map((p) => ({ '@type': 'Place', name: p }))]);

const breadcrumbSchema = (crumbs, url) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [['Startseite', '/'], ...crumbs].map(([label, href], i, all) => ({
    '@type': 'ListItem', position: i + 1, name: strip(label), item: `${SITE}${href ?? (i === all.length - 1 ? url : '/')}`,
  })),
});

/* Kontaktformular – optional mit vorausgewähltem Anliegen (z. B. Karriere) */
const FORM = CONTACT.slice(CONTACT.indexOf('<form'), CONTACT.indexOf('</form>') + 7);
export const contactFor = (p) => {
  let form = FORM.replace('<h3 class="form__title">Rückruf oder Beratung anfragen</h3>', `<h3 class="form__title">${p.formTitle ?? 'Ihre Anfrage'}</h3>`);
  if (p.formTopic) form = form.replace('value="Pflegeanfrage" checked', 'value="Pflegeanfrage"').replace(`value="${p.formTopic}"`, `value="${p.formTopic}" checked`);
  const next = p.formTopic === 'Karriere / Bewerbung'
    ? [['Sie schreiben uns', 'Ein paar Zeilen genügen&nbsp;– Lebenslauf und Zeugnisse können Sie später nachreichen.'], ['Wir melden uns', 'Zeitnah&nbsp;– mit einem Vorschlag für ein persönliches Kennenlernen.'], ['Kennenlernen', 'In unserem Büro in Hörstel&nbsp;– ganz in Ruhe und ohne Prüfungsstress.']]
    : [['Sie senden die Anfrage', 'Name und Telefonnummer genügen. Alles andere besprechen wir persönlich.'], ['Wir rufen zurück', 'Schnellstmöglich während unserer Bürozeiten&nbsp;– auch wenn Sie abends oder am Wochenende schreiben.'], ['Beratung bei Ihnen', 'Auf Wunsch kommen wir zu Ihnen nach Hause&nbsp;– kostenlos und unverbindlich.']];
  return `
    <section class="section reach" id="kontakt" aria-labelledby="contact-title">
      <div class="container reach__grid">
        <div class="reach__info" data-reveal>
          <p class="eyebrow eyebrow--light">Kontakt</p>
          <h2 id="contact-title">${p.contactTitle ?? 'Sprechen Sie <em>mit uns.</em>'}</h2>
          <ol class="reach__steps" role="list">
            ${next.map(([t, d], i) => `<li><span class="reach__num" aria-hidden="true">${i + 1}</span><div><strong>${t}</strong><p>${d}</p></div></li>`).join('\n            ')}
          </ol>
          <div class="reach__direct">
            <a class="reach__phone" href="${TEL}">${icon('phone')} ${PHONE}</a>
            <p>Mo–Fr 8–14&nbsp;Uhr · <a href="mailto:info@pflegedienst-funk.de">info@pflegedienst-funk.de</a></p>
          </div>
        </div>
        ${form.replace('data-form data-reveal', 'data-form data-reveal')}
      </div>
    </section>`;
};

/* ---------- Ganze Seite ---------- */
export const renderPage = (p) => {
  const url = p.path;
  const crumbs = p.crumbs;
  const graph = [ORG, { '@type': 'WebPage', '@id': `${SITE}${url}#webpage`, url: `${SITE}${url}`, name: strip(p.title), description: p.description, inLanguage: 'de-DE', isPartOf: { '@id': `${SITE}/#website` }, about: ORG_REF, breadcrumb: { '@id': `${SITE}${url}#breadcrumb` } },
    { ...breadcrumbSchema(crumbs, url), '@id': `${SITE}${url}#breadcrumb` }, ...(p.schema ?? [])];
  if (p.faq) graph.push(faqSchema(p.faq));

  // Kopf/Fuß der Startseite anpassen: Anker zur Startseite, aktiver Menüpunkt
  let top = CHROME_TOP.replace(/href="#einsatzgebiete"/g, 'href="/#einsatzgebiete"');
  let bottom = CHROME_BOTTOM;
  if (p.noContact) {
    top = top.replace(/href="#kontakt"/g, 'href="/kontakt/#kontakt"');
    bottom = bottom.replace(/href="#kontakt"/g, 'href="/kontakt/#kontakt"');
  }
  top = top.replace(new RegExp(`(<a class="nav__link" href="${url.replace(/[/.]/g, '\\$&')}")`), '$1 aria-current="page"');
  if (p.nav) top = top.replace(`aria-controls="panel-${p.nav}" data-panel-toggle>`, `aria-controls="panel-${p.nav}" data-panel-toggle data-current>`);
  const markCurrent = (html) => html.replace(new RegExp(`(<a(?: class="[^"]*")? href="${url.replace(/[/.]/g, '\\$&')}")(?! aria-current)`, 'g'), '$1 aria-current="page"');
  top = markCurrent(top);
  bottom = markCurrent(bottom);
  const body = markCurrent(p.body);

  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>${p.title}</title>
  <meta name="description" content="${p.description}">
  <link rel="canonical" href="${SITE}${url}">
  <meta name="robots" content="${p.robots ?? 'index, follow, max-image-preview:large'}">
  <meta name="theme-color" content="#0C335A">
  <meta name="format-detection" content="telephone=yes">

  <meta property="og:locale" content="de_DE">
  <meta property="og:type" content="${p.ogType ?? 'website'}">
  <meta property="og:site_name" content="Ambulanter Pflegedienst Funk GmbH">
  <meta property="og:title" content="${p.ogTitle ?? p.title}">
  <meta property="og:description" content="${p.description}">
  <meta property="og:url" content="${SITE}${url}">
  <meta property="og:image" content="${SITE}/assets/img/${p.ogImage ? `${p.ogImage}-1200.webp` : 'og-image.jpg'}">

  <link rel="icon" type="image/png" href="/assets/img/favicon-72.png">
  <link rel="preload" href="/assets/fonts/figtree-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossorigin>
  ${p.heroImage ? preload(p.heroImage, '(min-width: 1024px) 42vw, 100vw') : ''}
  <link rel="stylesheet" href="/assets/css/main.css">
  <script>document.documentElement.classList.add('js');</script>

  <script type="application/ld+json">
${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2).replace(/^/gm, '  ')}
  </script>
</head>

<body class="page page--${p.type ?? 'default'}">${top}<main id="inhalt">
${body}
${p.noContact ? '' : contactFor(p)}
  </main>
${bottom}</body>
</html>
`;
};

export const write = (url, html) => {
  const dir = path.join(ROOT, url);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
};

/* ---------- Abschnitts-Bausteine für Seiteninhalte ---------- */
const CURVE_TOP = '<svg class="curve curve--top" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90V58C420 14 980 0 1440 12V90Z"/></svg>';
const CURVE_BOTTOM = '<svg class="curve curve--bottom curve--white" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90V30C460 80 1000 86 1440 50V90Z"/></svg>';

/* Abschnitt mit optionalem Kopf (eyebrow, h2, lead). cream=true: heller Hintergrund mit geschwungenen Kanten */
export const section = ({ id, eyebrow, title, lead, center = false, cream = false, cls = '', body }) => {
  const hid = id ? `${id}-title` : undefined;
  if (/\bsteps\b/.test(cls)) { cls = cls.replace(/\bsteps\b/, 'process'); center = false; cream = true; }
  if (title && /class="(features|cards)/.test(body) && !/class="split/.test(body)) center = true;
  return `
    <section class="section${cream ? ' section--cream' : ''}${cls ? ` ${cls}` : ''}"${id ? ` id="${id}"` : ''}${hid && title ? ` aria-labelledby="${hid}"` : ''}>
      ${cream ? CURVE_TOP : ''}
      <div class="container${/\bprocess\b/.test(cls) ? ' process__grid' : ''}">
        ${title ? `<header class="section-head${center ? ' section-head--center' : ''}" data-reveal>
          ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
          <h2${hid ? ` id="${hid}"` : ''}>${title}</h2>
          ${lead ? `<p class="section-head__lead">${lead}</p>` : ''}
        </header>` : ''}
        ${body}
      </div>
      ${cream ? CURVE_BOTTOM : ''}
    </section>`;
};

/* Text links, Bild rechts (reverse: Bild links) */
/* Einleitung mit Kennzahlen: links Überschrift + Einstieg, rechts der weitere Text,
   darunter die Fakten als dunkles Band über die volle Breite */
export const intro = ({ text: t, facts: factsHtml, extra = '' }) => {
  const head = t.match(/^\s*(?:<p class="eyebrow">[\s\S]*?<\/p>\s*)?<h2>[\s\S]*?<\/h2>\s*(?:<p[^>]*>[\s\S]*?<\/p>)?/);
  const headHtml = head ? head[0] : '';
  const rest = t.slice(headHtml.length).trim();
  const n = (factsHtml.match(/class="fact"/g) || []).length;
  return `
        <div class="intro${rest ? '' : ' intro--single'}">
          <div class="intro__head prose" data-reveal>${headHtml}${extra}</div>
          ${rest ? `<div class="intro__body prose" data-reveal>${rest}</div>` : ''}
          <div class="intro__band" data-reveal>${factsHtml.replace('<ul class="facts" role="list" data-reveal>', `<ul class="facts facts--band facts--${n}" role="list">`)}</div>
        </div>`;
};

export const split = ({ text: t, image, alt, reverse = false, tall = false, top = false, mediaCls = '', aside }) => {
  // Text + Faktenkasten → neues Einleitungs-Layout (kein leerer Raum rechts)
  if (aside && aside.includes('<ul class="facts"')) {
    const f = aside.match(/<ul class="facts"[\s\S]*?<\/ul>/)[0];
    const extra = aside.replace(f, '').replace(/<\/?aside[^>]*>/g, '').trim();
    return intro({ text: t, facts: f, extra });
  }
  return `
        <div class="split${reverse ? ' split--reverse' : ''}${top ? ' split--top' : ''}">
          <div class="split__text prose" data-reveal>${t}</div>
          ${aside ?? `<figure class="split__media media${tall ? ' split__media--tall' : ''}${mediaCls ? ` ${mediaCls}` : ''}" data-reveal>${img(image, alt, { sizes: '(min-width: 1024px) 45vw, 100vw' })}</figure>`}
        </div>`;
};

export const cards = (items, cols = 3) => (items.every((i) => !i[3])
  ? `
        <ul class="features features--${items.length % 3 === 0 && cols !== 2 ? 3 : 2}" role="list">
          ${items.map(([ic, title, body]) => `<li class="feature" data-reveal><span class="feature__icon">${icon(ic)}</span><div><h3>${title}</h3><p>${body}</p></div></li>`).join('\n          ')}
        </ul>`
  : `
        <ul class="cards cards--${cols}" role="list">
          ${items.map(([ic, title, body, href]) => (href
    ? `<li data-reveal><a class="card" href="${href}"><span class="card__icon">${icon(ic)}</span><h3>${title}</h3><p>${body}</p><span class="link-arrow">Mehr erfahren ${icon('arrow')}</span></a></li>`
    : `<li class="card" data-reveal><span class="card__icon">${icon(ic)}</span><h3>${title}</h3><p>${body}</p></li>`)).join('\n          ')}
        </ul>`);

export const facts = (items) => `<ul class="facts" role="list" data-reveal>${items.map(([ic, strong, small]) => `<li class="fact"><span class="fact__icon" aria-hidden="true">${icon(ic)}</span><div><strong>${strong}</strong><span>${small}</span></div></li>`).join('')}</ul>`;

export const callout = (title, body, ic = 'shield') => `<div class="callout" data-reveal>${icon(ic)}<div><strong>${title}</strong><p>${body}</p></div></div>`;

export const steps = (items) => `
        <ol class="timeline" role="list">
          ${items.map(([title, body], i) => `<li class="timeline__item" data-reveal>
            <span class="timeline__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
            <div class="timeline__body"><h3>${title}</h3><p>${body}</p></div>
          </li>`).join('\n          ')}
        </ol>`;

/* Ratgeber-Artikel als Teaser-Karte */
export const ARTICLES = [
  { slug: 'pflegegrad-pflegeleistungen', tag: 'Pflegegrad &amp; Leistungen', title: 'Pflegegrad und Pflegeleistungen&nbsp;– welche Unterstützung gibt es zu Hause?', short: 'Was Ihnen mit Pflegegrad zusteht und welche Leistungen ein ambulanter Pflegedienst übernehmen kann.', img: 'ratgeber-pflegegrad', alt: 'Älteres Ehepaar liest gemeinsam einen Brief der Pflegekasse' },
  { slug: 'beratungseinsatz-37-3-sgb-xi', tag: 'Beratung', title: 'Beratungseinsatz nach §&nbsp;37.3&nbsp;SGB&nbsp;XI&nbsp;– was Pflegebedürftige wissen sollten', short: 'Wer den Beratungsbesuch braucht, wie oft er stattfindet und warum er sich für Sie lohnt.', img: 'ratgeber-beratung', alt: 'Pflegekraft notiert im Gespräch mit einem Senior dessen Anliegen' },
  { slug: 'professionelle-wundversorgung-zu-hause', tag: 'Wundversorgung', title: 'Professionelle Wundversorgung zu Hause&nbsp;– wann ist ein Wundexperte sinnvoll?', short: 'Warum chronische Wunden fachkundige Hilfe brauchen und wie Wundmanagement zu Hause funktioniert.', img: 'ratgeber-wunde', alt: 'Wundexperte bereitet sterile Verbandsmaterialien vor' },
];
export const postCard = (slug, wide = false, row = false) => {
  const a = ARTICLES.find((x) => x.slug === slug);
  return `<article class="post${wide ? ' post--wide' : ''}${row ? ' post--row' : ''}">
              <figure class="post__media media">${img(a.img, a.alt, { sizes: '(min-width: 1024px) 30vw, 100vw' })}</figure>
              <div class="post__body">
                <p class="post__tag">${a.tag}</p>
                <h3><a class="post__link" href="/ratgeber/${a.slug}/">${a.title}</a></h3>
                <p>${a.short}</p>
                <span class="post__more">Weiterlesen ${icon('arrow')}</span>
              </div>
            </article>`;
};
export const articleTeaser = (slug, title = 'Mehr dazu im <em>Ratgeber.</em>') => section({
  id: 'ratgeber', eyebrow: 'Ratgeber', title, cls: 'section--tight',
  body: `<div class="article-teaser" data-reveal>${postCard(slug, true)}</div>`,
});
