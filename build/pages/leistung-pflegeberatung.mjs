import { pageHero, section, split, cards, facts, callout, steps, ticks, faq, related, cityBand, ctaBand, articleTeaser, AREA_SERVED, ORG_REF, SITE } from '../lib.mjs';

const FAQ = [
  ['Wer muss den Beratungseinsatz nach §&nbsp;37.3 machen?', 'Pflicht ist er für alle, die ausschließlich Pflegegeld beziehen, also ihre Pflege selbst mit Angehörigen oder Bekannten organisieren. Das gilt ab Pflegegrad&nbsp;2.'],
  ['Wie oft muss der Beratungsbesuch stattfinden?', 'Bei Pflegegrad&nbsp;2 und&nbsp;3 einmal im Halbjahr, bei Pflegegrad&nbsp;4 und&nbsp;5 einmal im Vierteljahr. Mit Pflegegrad&nbsp;1 oder wenn Sie Pflegesachleistungen erhalten, können Sie den Besuch freiwillig einmal im Halbjahr in Anspruch nehmen.'],
  ['Was kostet der Beratungseinsatz?', 'Für Sie nichts. Die Kosten übernimmt Ihre Pflegekasse, wir rechnen direkt mit ihr ab.'],
  ['Was passiert, wenn ich den Termin versäume?', 'Dann kann die Pflegekasse das Pflegegeld kürzen und im Wiederholungsfall ganz entziehen. Damit es nicht so weit kommt, vereinbaren wir die Termine rechtzeitig und senden den Nachweis direkt an Ihre Pflegekasse.'],
  ['Ist der Beratungsbesuch eine Kontrolle?', 'Nein. Es geht nicht darum, Sie zu prüfen, sondern darum, die Pflege zu Hause zu sichern und Sie zu entlasten. Wir beraten, geben praktische Tipps und hören zu. Kritik an Ihrer Pflege ist nicht das Ziel.'],
  ['Sollten Angehörige beim Termin dabei sein?', 'Ja, gern. Gerade die Menschen, die die Pflege übernehmen, haben oft die meisten Fragen. Wir richten den Termin so ein, dass möglichst alle Beteiligten dabei sein können.'],
];

const crumbs = [['Leistungen', '/leistungen/'], ['Pflegeberatung §&nbsp;37.3']];

export default {
  path: '/leistungen/pflegeberatung-37-3/',
  title: 'Beratungseinsatz § 37.3 SGB XI in Hörstel | Funk GmbH',
  description: 'Beratungseinsatz nach § 37.3 SGB XI für Pflegegeld-Empfänger: Pflichtberatung zu Hause in Hörstel und Umgebung, Nachweis an die Kasse. Termin: 05459 5869825.',
  type: 'service',
  nav: 'leistungen',
  crumbs,
  heroImage: 'beratung-tall',
  ogImage: 'beratung',
  faq: FAQ,
  schema: [{
    '@type': 'Service',
    '@id': `${SITE}/leistungen/pflegeberatung-37-3/#service`,
    name: 'Beratungseinsatz nach § 37.3 SGB XI',
    serviceType: 'Pflegeberatung – Beratungsbesuch für Pflegegeld-Empfänger',
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    url: `${SITE}/leistungen/pflegeberatung-37-3/`,
  }],
  body: `${pageHero({
    crumbs,
    eyebrow: 'Leistung · Pflegeberatung',
    title: 'Beratungseinsatz nach <em>§&nbsp;37.3&nbsp;SGB&nbsp;XI.</em>',
    lead: 'Wer Pflegegeld bezieht, braucht regelmäßig einen Beratungsbesuch. Wir kommen zu Ihnen nach Hause, nehmen uns Zeit für Ihre Fragen und senden den Nachweis direkt an Ihre Pflegekasse.',
    image: 'beratung-tall',
    imageAlt: 'Pflegeberaterin des Pflegedienstes Funk GmbH spricht mit einem älteren Herrn und seiner Tochter am Küchentisch',
    checks: ['Für Sie kostenlos&nbsp;– die Pflegekasse zahlt', 'Nachweis an die Pflegekasse übernehmen wir'],
  })}

${section({
    id: 'was-ist',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Was ist der Beratungseinsatz?</p>
            <h2>Pflichtberatung, die <em>Ihnen nützt.</em></h2>
            <p class="lead">Der Beratungseinsatz nach §&nbsp;37.3&nbsp;SGB&nbsp;XI ist ein Besuch einer Pflegefachkraft bei Ihnen zu Hause. Er ist für alle vorgeschrieben, die ausschließlich Pflegegeld erhalten und ihre Pflege selbst organisieren.</p>
            <p>Der Gesetzgeber möchte damit sicherstellen, dass die Pflege zu Hause gut gelingt&nbsp;– für den pflegebedürftigen Menschen und für die Angehörigen, die oft rund um die Uhr im Einsatz sind. Viele nennen den Termin deshalb auch Pflichtberatung zum Pflegegeld.</p>
            <p>Für uns ist der Besuch vor allem eine Gelegenheit, Sie zu unterstützen. Wir schauen gemeinsam, was gut läuft, wo es hakt und welche Hilfen Ihnen zustehen, die Sie vielleicht noch nicht nutzen. Viele Familien erfahren erst dabei, welche Möglichkeiten es gibt.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['calendar', 'Pflegegrad&nbsp;2 und&nbsp;3', 'Pflicht: einmal im Halbjahr'],
    ['calendar', 'Pflegegrad&nbsp;4 und&nbsp;5', 'Pflicht: einmal im Vierteljahr'],
    ['clipboard', 'Pflegegrad&nbsp;1 und Sachleistung', 'freiwillig, einmal im Halbjahr'],
    ['shield', 'Kostenlos für Sie', 'die Pflegekasse übernimmt die Kosten'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'inhalt',
    cream: true,
    eyebrow: 'Was besprechen wir?',
    title: 'Pflegeberatung zu Hause: <em>Darum geht es.</em>',
    lead: 'Jeder Besuch richtet sich nach Ihrer Situation. Diese Themen kommen in den Gesprächen am häufigsten vor.',
    body: cards([
      ['users', 'Ihre Pflegesituation', 'Wie geht es dem pflegebedürftigen Menschen, wie geht es Ihnen als Angehörige? Wir hören zu und schauen, ob die Pflege noch zum Alltag passt.'],
      ['hands', 'Praktische Tipps', 'Wie lagert man richtig, wie gelingt das Waschen im Bett, wie beugt man Stürzen vor? Wir zeigen Handgriffe, die den Alltag erleichtern.'],
      ['clipboard', 'Hilfsmittel', 'Pflegebett, Rollator, Toilettenstuhl oder Pflegehilfsmittel zum Verbrauch: Wir sagen Ihnen, was sinnvoll ist und wie Sie es bekommen.'],
      ['heart', 'Entlastungsangebote', 'Vom Entlastungsbetrag über die <a href="/leistungen/verhinderungspflege/">Verhinderungspflege</a> bis zur Tagespflege: Wir erklären, welche Hilfen Ihnen zustehen.'],
      ['home', 'Wohnraumanpassung', 'Schwellen, Badewanne, enge Türen: Wir geben Hinweise, wie Ihre Wohnung sicherer wird, und wo Sie Unterstützung beantragen können.'],
      ['shield', 'Pflegegrad', 'Hat sich der Bedarf verändert? Wir sagen Ihnen, wann ein Antrag auf Höherstufung sinnvoll sein kann.'],
    ]),
  })}

${section({
    id: 'haeufigkeit',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Pflicht oder freiwillig?</p>
            <h2>Wann die Pflichtberatung zum <em>Pflegegeld gilt.</em></h2>
            <p>Verpflichtend ist der Beratungseinsatz nur, wenn Sie <strong>ausschließlich Pflegegeld</strong> beziehen und die Pflege ohne Pflegedienst organisieren. Dann richtet sich der Rhythmus nach dem Pflegegrad: halbjährlich bei Pflegegrad&nbsp;2 und&nbsp;3, vierteljährlich bei Pflegegrad&nbsp;4 und&nbsp;5.</p>
            <p>Mit Pflegegrad&nbsp;1 oder wenn wir oder ein anderer Dienst bereits Pflegesachleistungen erbringen, ist der Besuch freiwillig. Sie können ihn trotzdem einmal im Halbjahr nutzen&nbsp;– gerade dann, wenn sich die Situation verändert hat und neue Fragen aufkommen.</p>
            <p>Den Termin vereinbaren wir mit Ihnen, ob Sie in Hörstel, Bevergern, Mettingen, Recke, Ibbenbüren oder Rheine wohnen.</p>
          </div>
          <div class="split__aside prose" data-reveal>
            ${callout('Wichtig für Ihr Pflegegeld', 'Findet der Beratungseinsatz nicht statt, kann die Pflegekasse das Pflegegeld kürzen und im Wiederholungsfall ganz entziehen. Deshalb senden wir den Nachweis nach jedem Besuch direkt an Ihre Pflegekasse.', 'shield')}
            ${callout('Kein Kontrollbesuch', 'Der Besuch dient Ihrer Unterstützung. Wir kommen als Beraterinnen und Berater, nicht als Prüfer. Alles, was Sie uns erzählen, behandeln wir vertraulich.', 'heart')}
          </div>
        </div>`,
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So läuft es ab',
    title: 'So läuft der <em>Beratungsbesuch ab.</em>',
    body: steps([
      ['Termin vereinbaren', 'Rufen Sie uns an oder schreiben Sie uns. Wir finden einen Termin, an dem auch Ihre pflegenden Angehörigen dabei sein können.'],
      ['Besuch bei Ihnen zu Hause', 'Eine erfahrene Pflegefachkraft kommt zu Ihnen, spricht mit Ihnen über die Pflege und beantwortet Ihre Fragen in Ruhe.'],
      ['Nachweis an die Pflegekasse', 'Sie unterschreiben das Beratungsprotokoll, wir senden den Nachweis an Ihre Pflegekasse und rechnen direkt mit ihr ab.'],
    ]),
  })}

${section({
    id: 'warum-funk',
    cls: 'section--tight',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Warum mit uns?</p>
            <h2>Beratung von Menschen, die <em>Pflege jeden Tag leben.</em></h2>
            <p>Seit 2011 pflegen wir Menschen in Hörstel und der Umgebung zu Hause. Dieses Wissen aus dem Alltag bringen wir in jedes Beratungsgespräch mit. Die Beratung übernehmen examinierte Pflegefachkräfte.</p>
            <p>Ändert sich Ihre Situation, können wir auch mehr als beraten: Mit <a href="/leistungen/grundpflege/">Grundpflege</a>, <a href="/leistungen/hauswirtschaft/">Hilfe im Haushalt</a> oder Verhinderungspflege entlasten wir Sie ganz praktisch&nbsp;– aber nur, wenn Sie es möchten.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${ticks([
    'Termine auch für Familien in Rheine, Ibbenbüren und Recke',
    'Vertragspartner aller Pflegekassen&nbsp;– direkte Abrechnung',
    'Mitglied im Deutschen Berufsverband für Pflegeberufe (DBfK)',
    'Feste Ansprechpartner durch unsere Bezugspflege',
  ])}
          </aside>`,
    }),
  })}

${ctaBand({ title: 'Ihr nächster Beratungsbesuch steht an? <em>Wir kommen gern.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir vereinbaren einen Termin und kümmern uns um den Nachweis für Ihre Pflegekasse.', button: 'Termin anfragen' })}

${faq(FAQ, { title: 'Fragen zum <em>Beratungseinsatz.</em>', lead: 'Was Pflegegeld-Empfänger und ihre Angehörigen zur Pflichtberatung am häufigsten wissen möchten.' })}

${articleTeaser('beratungseinsatz-37-3-sgb-xi')}

${related(['verhinderungspflege', 'grundpflege', 'hauswirtschaft'])}

${cityBand('Beratungseinsatz zu Hause in')}
`,
};
