import { pageHero, section, split, cards, facts, callout, steps, ticks, faq, related, cityBand, ctaBand, AREA_SERVED, ORG_REF, SITE } from '../lib.mjs';

const FAQ = [
  ['Wer bezahlt die Medikamentengabe durch den Pflegedienst?', 'Die Medikamentengabe ist Teil der häuslichen Krankenpflege. Mit einer ärztlichen Verordnung übernimmt Ihre Krankenkasse die Kosten, Volljährige leisten die gesetzliche Zuzahlung. Ein Pflegegrad ist nicht nötig.'],
  ['Was bedeutet „Medikamente stellen“?', 'Beim Stellen oder Richten verteilen wir Ihre Tabletten für die kommenden Tage in einen Wochendosierer, sortiert nach Tag und Uhrzeit. Grundlage ist Ihr aktueller Medikationsplan. So sehen Sie auf einen Blick, was Sie wann einnehmen.'],
  ['Können Sie auch Insulin spritzen?', 'Ja. Insulin, Spritzen zur Thromboseprophylaxe und andere Injektionen gehören zu unseren täglichen Aufgaben. Beim Insulin messen wir vorher den Blutzucker und spritzen die Dosis nach dem Plan Ihrer Ärztin oder Ihres Arztes.'],
  ['Was passiert, wenn ich eine Nebenwirkung bemerke?', 'Sagen Sie es uns beim nächsten Besuch oder rufen Sie im Büro an. Wir beobachten Veränderungen ohnehin aufmerksam und sprechen bei Auffälligkeiten mit der verordnenden Praxis. Ihre Medikamente setzen Sie bitte nie eigenmächtig ab.'],
  ['Wer besorgt die Medikamente?', 'Auf Wunsch kümmern wir uns darum. Wir behalten im Blick, wann ein Rezept nötig ist, holen es in der Praxis ab und lösen es in der Apotheke ein.'],
];

export default {
  path: '/leistungen/medikamentengabe/',
  title: 'Medikamentengabe durch den Pflegedienst | Funk',
  description: 'Medikamentengabe zu Hause in Hörstel und Umgebung: Tabletten richten, Insulin, Augentropfen, Einnahme kontrollieren – auf Verordnung zahlt die Krankenkasse.',
  type: 'service',
  nav: 'leistungen',
  crumbs: [['Leistungen', '/leistungen/'], ['Medikamentengabe']],
  heroImage: 'hero',
  ogImage: 'behandlungspflege',
  faq: FAQ,
  schema: [{
    '@type': 'Service',
    '@id': `${SITE}/leistungen/medikamentengabe/#service`,
    name: 'Medikamentengabe zu Hause',
    serviceType: 'Häusliche Krankenpflege – Medikamentengabe',
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    url: `${SITE}/leistungen/medikamentengabe/`,
  }],
  body: `${pageHero({
    crumbs: [['Leistungen', '/leistungen/'], ['Medikamentengabe']],
    eyebrow: 'Leistung · Behandlungspflege',
    title: 'Medikamentengabe <em>zu&nbsp;Hause.</em>',
    lead: 'Die richtige Tablette zur richtigen Zeit&nbsp;– das klingt einfach und ist es oft nicht. Unsere Pflegefachkräfte richten, verabreichen und kontrollieren Ihre Medikamente zuverlässig bei Ihnen zu Hause.',
    image: 'hero',
    mediaClass: 'pos-top',
    imageAlt: 'Pflegefachkraft des Pflegedienstes Funk mit Pflegetasche vor dem Dienstwagen in einer Wohnstraße in Hörstel',
    checks: ['Auf ärztliche Verordnung&nbsp;– die Krankenkasse zahlt', 'Pünktlich, sorgfältig und lückenlos dokumentiert'],
  })}

${section({
    id: 'was-ist',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Warum Medikamentengabe?</p>
            <h2>Sicherheit bei jeder <em>Tablette.</em></h2>
            <p class="lead">Wer mehrere Medikamente am Tag nimmt, verliert leicht den Überblick. Bei der Medikamentengabe durch den Pflegedienst übernehmen examinierte Pflegefachkräfte diese Aufgabe&nbsp;– ganz oder teilweise.</p>
            <p>Vergessene oder doppelt genommene Tabletten, verwechselte Packungen oder schwer zu öffnende Augentropfen: Das kommt häufiger vor, als man denkt. Gerade nach einem Krankenhausaufenthalt ändert sich der Medikationsplan oft, und neue Präparate kommen hinzu.</p>
            <p>Unsere Hilfe ist für alle gedacht, die ihre Medikamente nicht sicher allein richten oder einnehmen können: wegen nachlassender Sehkraft, zitternder Hände, Vergesslichkeit oder einer schweren Erkrankung. Die Medikamentengabe ist ein Teil der <a href="/leistungen/behandlungspflege/">Behandlungspflege</a> und wird deshalb von der Krankenkasse bezahlt.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['pill', 'Richtige Dosis', 'nach Ihrem Medikationsplan'],
    ['clock', 'Richtige Zeit', 'feste Besuche, auch am Wochenende'],
    ['clipboard', 'Dokumentiert', 'jede Gabe nachvollziehbar'],
    ['shield', 'Krankenkasse zahlt', 'bei ärztlicher Verordnung'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'leistungen',
    cream: true,
    eyebrow: 'Was wir für Sie tun',
    title: 'Medikamente richten, geben <em>und im Blick behalten.</em>',
    lead: 'Was genau wir übernehmen, steht auf Ihrer Verordnung. Diese Aufgaben gehören dazu.',
    body: cards([
      ['pill', 'Medikamente stellen', 'Wir richten Ihre Tabletten für die Woche in einen Wochendosierer&nbsp;– sortiert nach Tag und Uhrzeit.'],
      ['hands', 'Verabreichen', 'Wir reichen Ihnen die Medikamente zur richtigen Zeit und achten darauf, dass Sie sie wirklich einnehmen.'],
      ['heart', 'Augentropfen und Salben', 'Tropfen, Augensalben und Salben auf der Haut, sauber und in der richtigen Menge aufgetragen.'],
      ['stetho', 'Injektionen', 'Insulin nach Blutzuckermessung, Spritzen zur Thromboseprophylaxe und andere verordnete Injektionen.'],
      ['clipboard', 'Wirkung beobachten', 'Wir achten auf Wirkung und Nebenwirkungen, messen Blutdruck oder Puls und dokumentieren jede Gabe.'],
      ['route', 'Besorgung', 'Rezepte in der Praxis abholen und in der Apotheke einlösen, damit nichts ausgeht.'],
    ]),
  })}

${section({
    id: 'zusammenarbeit',
    body: split({
      reverse: true,
      image: 'behandlungspflege',
      alt: 'Pflegefachkraft des Pflegedienstes Funk misst bei einem älteren Herrn am Tisch den Blutzucker vor der Insulingabe',
      text: `
            <p class="eyebrow">Gut abgestimmt</p>
            <h2>Im Austausch mit <em>Arzt und Apotheke.</em></h2>
            <p>Medikamente wirken nur dann gut, wenn alle Beteiligten denselben Stand haben. Deshalb halten wir Ihren Medikationsplan aktuell und sprechen Änderungen mit der verordnenden Praxis ab.</p>
            ${ticks([
    'Rücksprache mit Ärztin oder Arzt bei Auffälligkeiten',
    'Abstimmung mit der Apotheke zu Wechselwirkungen und Präparaten',
    'Rechtzeitiger Hinweis, wenn ein neues Rezept nötig ist',
    'Angehörige bleiben auf Wunsch informiert',
  ])}
            <p>Brauchen Sie zusätzlich Hilfe mit Kompressionsstrümpfen oder einem Verband, verbinden wir das im selben Besuch, etwa mit unserer <a href="/leistungen/kompressionsversorgung/">Kompressionsversorgung</a>.</p>`,
    }),
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So läuft es ab',
    title: 'In drei Schritten zur <em>Medikamentengabe.</em>',
    body: steps([
      ['Verordnung holen', 'Ihre Ärztin oder Ihr Arzt verordnet die Medikamentengabe als häusliche Krankenpflege. Den aktuellen Medikationsplan legen Sie bereit.'],
      ['Anruf bei uns', 'Wir reichen die Verordnung bei Ihrer Krankenkasse ein und vereinbaren mit Ihnen die Besuchszeiten.'],
      ['Sicher versorgt', 'Unsere Pflegefachkräfte kommen zu den festen Zeiten, richten und geben die Medikamente und dokumentieren jede Gabe.'],
    ]),
  })}

${section({
    id: 'kosten',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Kosten</p>
            <h2>Was kostet die <em>Medikamentengabe?</em></h2>
            <p>Als Teil der häuslichen Krankenpflege nach dem Sozialgesetzbuch&nbsp;V wird die Medikamentengabe von Ihrer <strong>Krankenkasse</strong> bezahlt, wenn eine ärztliche Verordnung vorliegt. Volljährige zahlen die gesetzliche Zuzahlung, sofern sie nicht befreit sind.</p>
            <p>Wir rechnen direkt mit Ihrer Kasse ab&nbsp;– in Hörstel und Bevergern genauso wie in Mettingen, Recke, Ibbenbüren und Rheine. Haben Sie Fragen zur Verordnung, helfen wir Ihnen gern weiter.</p>
          </div>
          <div class="split__aside" data-reveal>
            ${callout('Kein Pflegegrad nötig', 'Für die Medikamentengabe auf Verordnung brauchen Sie keinen Pflegegrad. Brauchen Sie auch Hilfe bei der Körperpflege, ergänzen wir die Versorgung um <a href="/leistungen/grundpflege/">Grundpflege</a>.')}
          </div>
        </div>`,
  })}

${ctaBand({ title: 'Den Überblick über Tabletten verloren? <em>Wir sortieren.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir besprechen, welche Unterstützung Sie brauchen, und klären die Verordnung mit Ihrer Arztpraxis.' })}

${faq(FAQ, { title: 'Fragen zur <em>Medikamentengabe.</em>', lead: 'Was Patientinnen, Patienten und Angehörige zur Medikamentengabe durch den Pflegedienst wissen möchten.' })}

${related(['behandlungspflege', 'kompressionsversorgung', 'grundpflege'])}

${cityBand('Medikamentengabe zu Hause in')}
`,
};
