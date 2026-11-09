import { pageHero, section, split, facts, callout, steps, ticks, faq, cityBand, ctaBand, img, icon, SERVICES, ORG_REF, SITE, PHONE, TEL } from '../lib.mjs';

const FAQ = [
  ['Welche Leistungen übernimmt ein ambulanter Pflegedienst?', 'Ein ambulanter Pflegedienst hilft Ihnen zu Hause: bei der Körperpflege und im Alltag (Grundpflege), bei medizinischen Aufgaben wie Medikamenten, Injektionen, Verbänden und Kompressionsstrümpfen (Behandlungspflege), im Haushalt sowie mit Beratung und Entlastung für Angehörige.'],
  ['Brauche ich einen Pflegegrad, um Ihre Leistungen zu nutzen?', 'Nicht für alle. Behandlungspflege wie Wundversorgung oder Medikamentengabe gibt es auf ärztliche Verordnung auch ohne Pflegegrad. Für Grundpflege, Hauswirtschaft und Verhinderungspflege über die Pflegekasse brauchen Sie in der Regel Pflegegrad&nbsp;2 oder höher.'],
  ['Kann ich verschiedene Leistungen kombinieren?', 'Ja. Viele unserer Patientinnen und Patienten erhalten zum Beispiel morgens Grundpflege und gleichzeitig ihre Medikamente oder einen Verbandswechsel. Pflegesachleistungen lassen sich außerdem mit Pflegegeld kombinieren. Wir stellen die Hilfe so zusammen, wie sie zu Ihnen passt.'],
  ['Wie schnell können Sie mit der Pflege beginnen?', 'Das hängt von unseren freien Kapazitäten in Ihrem Ort ab. Rufen Sie uns am besten früh an, zum Beispiel schon vor der Entlassung aus dem Krankenhaus. Wir sagen Ihnen offen, ab wann wir die Versorgung übernehmen können.'],
  ['In welchen Orten sind Sie im Einsatz?', 'Wir versorgen Menschen in Hörstel mit Bevergern, Riesenbeck und Dreierwalde sowie in Mettingen, Recke, Ibbenbüren und Rheine mit ihren Ortsteilen. Fragen Sie gern nach, wenn Sie in der Nähe wohnen.'],
];

const BIG = [
  ['grundpflege', 'navy', 'Körperpflege, Hilfe beim An- und Auskleiden, Mobilisation und Unterstützung beim Essen.', 'Pflegekraft des Pflegedienstes Funk hilft einem älteren Herrn beim Anziehen'],
  ['behandlungspflege', 'deep', 'Medizinische Pflege nach ärztlicher Verordnung: Injektionen, Blutzucker, Blutdruck und Verbände.', 'Pflegefachkraft des Pflegedienstes Funk misst den Blutzucker eines älteren Mannes'],
  ['wundversorgung', 'accent', 'Professionelles Wundmanagement für akute und chronische Wunden, direkt bei Ihnen zu Hause.', 'Pflegefachkraft des Pflegedienstes Funk legt einer älteren Dame einen sterilen Wundverband an'],
  ['hauswirtschaft', 'sand', 'Einkaufen, Kochen, Wäsche und Ordnung&nbsp;– damit der Alltag zu Hause leichter wird.', 'Mitarbeiterin des Pflegedienstes Funk bereitet mit einer Seniorin Gemüse in der Küche zu'],
];
const MINI = [
  ['pflegeberatung-37-3', 'Pflegeberatung §&nbsp;37.3&nbsp;SGB&nbsp;XI', 'Beratungseinsatz für <span class="nowrap">Pflegegeld-Empfänger</span>'],
  ['verhinderungspflege', 'Verhinderungspflege', 'Vertretung, wenn Angehörige eine Pause brauchen'],
  ['medikamentengabe', 'Medikamentengabe', 'Sicher, pünktlich und dokumentiert'],
  ['kompressionsversorgung', 'Kompressionsversorgung', 'Strümpfe und Verbände fachgerecht angelegt'],
];
const byslug = (slug) => SERVICES.find((s) => s.slug === slug);

const servicesGrid = `
        <ul class="services__grid" role="list">
          ${BIG.map(([slug, tone, text, alt]) => `<li class="svc svc--${tone}" data-reveal>
            <a class="svc__link" href="/leistungen/${slug}/">
              <figure class="svc__media media">${img(slug, alt, { sizes: '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw' })}</figure>
              <div class="svc__body">
                <h3>${byslug(slug).name}</h3>
                <p>${text}</p>
                <span class="svc__more">Mehr erfahren ${icon('arrow')}</span>
              </div>
            </a>
          </li>`).join('\n          ')}
        </ul>

        <ul class="services__more" role="list">
          ${MINI.map(([slug, name, text]) => `<li data-reveal>
            <a class="svc-mini" href="/leistungen/${slug}/">
              <span class="svc-mini__icon">${icon(byslug(slug).icon)}</span>
              <span class="svc-mini__text"><strong>${name}</strong> ${text}</span>
              ${icon('arrow', 'svc-mini__arrow')}
            </a>
          </li>`).join('\n          ')}
        </ul>

        <p class="services__note" data-reveal>
          Nicht sicher, welche Hilfe Sie brauchen? <a href="#kontakt">Wir beraten Sie kostenlos</a> oder rufen Sie uns an: <a class="nowrap" href="${TEL}">${PHONE}</a>
        </p>`;

const crumbs = [['Leistungen']];

export default {
  path: '/leistungen/',
  title: 'Leistungen – Ambulante Pflege in Hörstel | Funk',
  description: 'Alle Leistungen des ambulanten Pflegedienstes Funk: Grundpflege, Behandlungspflege, Wundversorgung, Hauswirtschaft und Beratung in Hörstel und Umgebung.',
  type: 'hub',
  nav: 'leistungen',
  crumbs,
  heroImage: 'hero',
  ogImage: 'hero',
  faq: FAQ,
  schema: [{
    '@type': 'OfferCatalog',
    '@id': `${SITE}/leistungen/#leistungen`,
    name: 'Leistungen des Ambulanten Pflegedienstes Funk',
    provider: ORG_REF,
    url: `${SITE}/leistungen/`,
    itemListElement: SERVICES.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: { '@type': 'Service', name: s.plain ?? s.name, url: `${SITE}/leistungen/${s.slug}/`, provider: ORG_REF },
    })),
  }],
  body: `${pageHero({
    crumbs,
    eyebrow: 'Leistungen',
    title: 'Unsere Leistungen in der <em>ambulanten Pflege.</em>',
    lead: 'Von der Körperpflege am Morgen über die Medikamentengabe bis zur Hilfe im Haushalt: Wir unterstützen Sie zu Hause genau dort, wo Sie Hilfe brauchen&nbsp;– in Hörstel, Mettingen, Recke, Ibbenbüren und Rheine.',
    image: 'hero',
    mediaClass: 'pos-top',
    imageAlt: 'Pflegefachkraft des Pflegedienstes Funk misst einer älteren Dame zu Hause auf dem Sofa den Blutdruck',
    checks: ['Vertragspartner aller Kranken- und Pflegekassen', 'Kostenlose Beratung vor dem Start'],
  })}

${section({
    id: 'ueberblick',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Ambulante Pflege</p>
            <h2>Hilfe zu Hause, <em>so viel Sie brauchen.</em></h2>
            <p class="lead">Ambulante Pflege bedeutet: Sie bleiben in Ihrer Wohnung, und wir kommen zu Ihnen. Die Leistungen unseres Pflegedienstes reichen von einzelnen Handgriffen bis zur täglichen Versorgung.</p>
            <p>Unsere Hilfe ist nicht nur für ältere Menschen gedacht. Wir begleiten Sie auch nach einer Operation, bei einer chronischen Erkrankung, mit einer Behinderung oder wenn Angehörige Entlastung brauchen. Manche brauchen uns für ein paar Wochen, andere seit vielen Jahren.</p>
            <p>Seit 2011 arbeiten wir mit Bezugspflege: Möglichst dieselben Pflegekräfte kommen zu Ihnen, kennen Ihre Gewohnheiten und merken, wenn sich etwas verändert. Eine sorgfältige Dienst- und Tourenplanung sorgt dafür, dass Sie wissen, wann wir kommen.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['award', 'Seit 2011', 'ambulante Pflege aus Hörstel'],
    ['users', 'Bezugspflege', 'feste Pflegekräfte für Sie'],
    ['shield', 'Alle Kassen', 'direkte Abrechnung'],
    ['calendar', 'Auch am Wochenende', 'und an Feiertagen im Einsatz'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'alle-leistungen',
    cls: 'services',
    cream: true,
    center: true,
    eyebrow: 'Alle Leistungen',
    title: 'Ambulante Pflege&nbsp;– <em>alles aus einer Hand.</em>',
    lead: 'Wählen Sie eine Leistung, um mehr über Inhalte, Kosten und Ablauf zu erfahren.',
    body: servicesGrid,
  })}

${section({
    id: 'kosten',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Wer zahlt?</p>
            <h2>Krankenkasse oder <em>Pflegekasse?</em></h2>
            <p>Welche Kasse die Kosten trägt, hängt von der Leistung ab. Medizinische Pflege bezahlt die Krankenkasse, Pflege und Hilfe im Alltag die Pflegekasse. Als Vertragspartner aller Kassen rechnen wir direkt ab.</p>
            <div class="table-wrap">
              <table class="table--stack">
                <thead><tr><th scope="col">Leistung</th><th scope="col">Wer zahlt?</th><th scope="col">Voraussetzung</th></tr></thead>
                <tbody>
                  <tr><td data-label="Leistung"><a href="/leistungen/behandlungspflege/">Behandlungspflege</a>, Wundversorgung, Medikamentengabe, Kompressionsversorgung</td><td data-label="Wer zahlt?">Krankenkasse (SGB&nbsp;V)</td><td data-label="Voraussetzung">ärztliche Verordnung, kein Pflegegrad nötig</td></tr>
                  <tr><td data-label="Leistung"><a href="/leistungen/grundpflege/">Grundpflege</a> und Hauswirtschaft</td><td data-label="Wer zahlt?">Pflegekasse (SGB&nbsp;XI)</td><td data-label="Voraussetzung">Pflegegrad&nbsp;2 oder höher; Entlastungsbetrag ab Pflegegrad&nbsp;1</td></tr>
                  <tr><td data-label="Leistung"><a href="/leistungen/verhinderungspflege/">Verhinderungspflege</a></td><td data-label="Wer zahlt?">Pflegekasse (SGB&nbsp;XI)</td><td data-label="Voraussetzung">Pflegegrad&nbsp;2 oder höher</td></tr>
                  <tr><td data-label="Leistung"><a href="/leistungen/pflegeberatung-37-3/">Beratungseinsatz §&nbsp;37.3</a></td><td data-label="Wer zahlt?">Pflegekasse (SGB&nbsp;XI)</td><td data-label="Voraussetzung">Pflegegeld oder Pflegegrad</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="split__aside prose" data-reveal>
            ${callout('Krankenkasse: häusliche Krankenpflege', 'Verordnet Ihre Ärztin oder Ihr Arzt Behandlungspflege, zahlt die Krankenkasse. Volljährige leisten die gesetzliche Zuzahlung. Das gilt in jedem Alter, auch nur für einige Wochen nach einem Krankenhausaufenthalt.', 'stetho')}
            ${callout('Pflegekasse: Leistungen bei Pflegegrad', 'Ab Pflegegrad&nbsp;2 übernimmt die Pflegekasse Pflegesachleistungen, die sich mit Pflegegeld kombinieren lassen. Die genauen Beträge teilt Ihnen Ihre Pflegekasse mit&nbsp;– wir rechnen es gern für Sie aus.', 'shield')}
          </div>
        </div>`,
  })}

${section({
    id: 'zusatzleistungen',
    cream: true,
    eyebrow: 'Zusatzleistungen',
    title: 'Was wir <em>außerdem für Sie tun.</em>',
    lead: 'Gute Pflege endet nicht beim letzten Handgriff. Damit der Alltag zu Hause rund läuft, kümmern wir uns auch um vieles drumherum.',
    body: `<div data-reveal>${ticks([
    '<strong>Wochenend- und Feiertagsdienst:</strong> Wir sind auch samstags, sonntags und an Feiertagen für Sie unterwegs.',
    '<strong>Besorgung von Medikamenten und Hilfsmitteln:</strong> Wir kümmern uns darum, dass Medikamente und Hilfsmittel rechtzeitig bei Ihnen sind.',
    '<strong>Vermittlung von Hilfsdiensten und Hausnotruf:</strong> Wir stellen den Kontakt zu passenden Diensten her, damit Sie im Notfall schnell Hilfe bekommen.',
    '<strong>Unterstützung der Angehörigen:</strong> Wir beraten, leiten an und entlasten&nbsp;– damit Pflege in der Familie auf Dauer gelingt.',
  ], 'ticks--2')}</div>`,
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So starten Sie',
    title: 'In drei Schritten zur <em>Pflege zu Hause.</em>',
    body: steps([
      ['Anrufen oder schreiben', 'Erzählen Sie uns kurz, wie es Ihnen oder Ihrem Angehörigen geht. Wir beantworten erste Fragen und sagen Ihnen, welche Unterlagen wichtig sind.'],
      ['Kostenloses Beratungsgespräch', 'Wir besprechen Ihren Bedarf, gern auch bei Ihnen zu Hause, und klären, welche Leistungen Kranken- und Pflegekasse übernehmen.'],
      ['Start der Versorgung', 'Wir planen feste Zeiten, stellen Ihnen Ihre Bezugspflegekräfte vor und rechnen direkt mit Ihrer Kasse ab.'],
    ]),
  })}

${ctaBand({ title: 'Welche Leistung passt zu Ihnen? <em>Wir beraten Sie.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir hören zu, klären die Kostenfrage und stellen die Hilfe zusammen, die Sie wirklich brauchen.' })}

${faq(FAQ, { title: 'Fragen zu unseren <em>Leistungen.</em>', lead: 'Kurze Antworten auf das, was Familien vor dem Start der ambulanten Pflege am häufigsten wissen möchten.' })}

${cityBand('Ambulante Pflege zu Hause in')}
`,
};
