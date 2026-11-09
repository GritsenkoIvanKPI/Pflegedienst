import { pageHero, section, split, cards, facts, callout, steps, ticks, faq, related, cityBand, ctaBand, articleTeaser, AREA_SERVED, ORG_REF, SITE } from '../lib.mjs';

const FAQ = [
  ['Wer bezahlt die Grundpflege zu Hause?', 'Ab Pflegegrad&nbsp;2 übernimmt die Pflegekasse die Grundpflege als Pflegesachleistung bis zu einem monatlichen Höchstbetrag. Wir rechnen direkt mit Ihrer Pflegekasse ab. Ihre Pflegekasse teilt Ihnen die genauen Beträge mit&nbsp;– wir rechnen es auch gern gemeinsam mit Ihnen durch.'],
  ['Kann ich Grundpflege und Pflegegeld kombinieren?', 'Ja. Mit der Kombinationsleistung nutzen Sie einen Teil der Pflegesachleistung für unseren Pflegedienst und erhalten den nicht genutzten Anteil anteilig als Pflegegeld. So können Angehörige einen Teil der Pflege weiter selbst übernehmen.'],
  ['Wir haben noch keinen Pflegegrad. Was nun?', 'Stellen Sie einen Antrag bei Ihrer Pflegekasse&nbsp;– ein kurzer Anruf oder ein formloses Schreiben genügt. Danach kommt eine Gutachterin oder ein Gutachter zu Ihnen nach Hause. Wir erklären Ihnen gern, worauf es bei diesem Termin ankommt.'],
  ['Kommt immer dieselbe Pflegekraft?', 'Wir arbeiten nach dem Prinzip der Bezugspflege. Das heißt: Ein festes, kleines Team ist für Sie zuständig. Urlaub und Krankheit lassen sich nicht ganz vermeiden, aber Sie sehen vertraute Gesichter statt ständig neuer Menschen.'],
  ['Zu welchen Uhrzeiten kommen Sie?', 'Die Besuchszeiten planen wir gemeinsam mit Ihnen, zum Beispiel morgens zum Waschen und Anziehen und abends zum Zubettgehen. Auch am Wochenende und an Feiertagen sind wir für unsere Klientinnen und Klienten im Einsatz.'],
];

export default {
  path: '/leistungen/grundpflege/',
  title: 'Grundpflege zu Hause in Hörstel | Pflegedienst Funk',
  description: 'Grundpflege zu Hause in Hörstel, Ibbenbüren, Rheine, Mettingen und Recke: Körperpflege, Anziehen, Mobilisation – ab Pflegegrad 2. Tel. 05459 5869825.',
  type: 'service',
  nav: 'leistungen',
  crumbs: [['Leistungen', '/leistungen/'], ['Grundpflege']],
  heroImage: 'grundpflege',
  ogImage: 'grundpflege',
  faq: FAQ,
  schema: [{
    '@type': 'Service',
    '@id': `${SITE}/leistungen/grundpflege/#service`,
    name: 'Grundpflege zu Hause',
    serviceType: 'Ambulante Pflege – Grundpflege',
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    url: `${SITE}/leistungen/grundpflege/`,
  }],
  body: `${pageHero({
    crumbs: [['Leistungen', '/leistungen/'], ['Grundpflege']],
    eyebrow: 'Leistung · Ambulante Pflege',
    title: 'Grundpflege <em>zu&nbsp;Hause.</em>',
    lead: 'Waschen, Anziehen, Aufstehen&nbsp;– wenn diese Dinge allein nicht mehr gelingen, unterstützen wir Sie. Unsere Grundpflege hilft Ihnen, so selbstständig wie möglich in den eigenen vier Wänden zu leben.',
    image: 'grundpflege',
    imageAlt: 'Pflegekraft des Pflegedienstes Funk hilft einem älteren Herrn an seinem Bett beim Anziehen',
    checks: ['Ab Pflegegrad&nbsp;2&nbsp;– Abrechnung direkt mit der Pflegekasse', 'Feste Bezugspflegekräfte statt wechselnder Gesichter'],
  })}

${section({
    id: 'was-ist',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Was ist Grundpflege?</p>
            <h2>Hilfe bei dem, was den Tag <em>ausmacht.</em></h2>
            <p class="lead">Grundpflege ist die Unterstützung bei alltäglichen Verrichtungen rund um Körper, Bewegung und Ernährung. Wir kommen dafür zu Ihnen nach Hause&nbsp;– in Hörstel, Mettingen, Recke, Ibbenbüren und Rheine.</p>
            <p>Dabei übernehmen wir nicht einfach alles. Wir schauen, was Sie selbst noch können, und helfen gezielt dort, wo es nötig ist. Das erhält Kräfte und Würde. Was heute noch allein geht, soll auch morgen möglichst allein gehen.</p>
            <p>Grundpflege brauchen nicht nur ältere Menschen. Auch nach einer Operation, bei einer chronischen Erkrankung, nach einem Schlaganfall oder mit einer Behinderung kann die Hilfe einer erfahrenen Pflegekraft den Alltag zu Hause erst möglich machen.</p>
            <p>Brauchen Sie zusätzlich medizinische Pflege, etwa Insulin oder einen Verbandswechsel, übernehmen wir auch die <a href="/leistungen/behandlungspflege/">Behandlungspflege</a>&nbsp;– aus einer Hand und im selben Besuch.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['users', 'Bezugspflege', 'ein festes Team für Sie'],
    ['shield', 'Pflegekasse zahlt', 'als Pflegesachleistung ab Pflegegrad&nbsp;2'],
    ['calendar', 'Auch am Wochenende', 'und an Feiertagen im Einsatz'],
    ['heart', 'Seit 2011', 'Pflege aus Hörstel für die Region'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'leistungen',
    cream: true,
    eyebrow: 'Was wir für Sie tun',
    title: 'Unsere Leistungen in der <em>Grundpflege.</em>',
    lead: 'Welche Hilfen Sie bekommen, legen wir gemeinsam fest. Das Paket lässt sich jederzeit anpassen, wenn sich Ihre Situation ändert.',
    body: cards([
      ['hands', 'Körperpflege', 'Waschen am Waschbecken oder im Bett, Duschen, Baden, Haare, Zahn- und Mundpflege, Rasur und Hautpflege.'],
      ['users', 'An- und Auskleiden', 'Hilfe beim Anziehen am Morgen und beim Umziehen am Abend&nbsp;– in Ihrem Tempo und mit Ihrer Kleidung.'],
      ['route', 'Mobilisation', 'Aufstehen, Gehen, Transfer in den Rollstuhl. Prophylaxen gegen Stürze, Druckgeschwüre und Versteifungen.'],
      ['home', 'Betten und Lagern', 'Regelmäßiges Umlagern bei Bettlägerigkeit, frisch bezogenes Bett und eine bequeme, druckentlastende Position.'],
      ['shield', 'Inkontinenzversorgung', 'Diskrete Hilfe beim Toilettengang, Wechsel von Vorlagen und Pflege der Haut. Auch Katheter- und Stomaversorgung.'],
      ['heart', 'Essen und Trinken', 'Unterstützung bei den Mahlzeiten, Blick auf ausreichendes Trinken und Versorgung bei Sondennahrung.'],
    ]),
  })}

${section({
    id: 'vorteile',
    body: split({
      reverse: true,
      image: 'warum',
      alt: 'Pflegekraft des Pflegedienstes Funk wird von einem älteren Herrn an seiner Haustür begrüßt',
      tall: true,
      text: `
            <p class="eyebrow">Ihre Vorteile</p>
            <h2>Gut versorgt und trotzdem <em>zu&nbsp;Hause.</em></h2>
            <p>Für viele Menschen ist das eigene Zuhause der wichtigste Ort. Mit ambulanter Pflege können Sie dort bleiben&nbsp;– in Bevergern, Riesenbeck, Dickenberg oder Altenrheine genauso wie im Ortskern.</p>
            ${ticks([
    'Vertraute Pflegekräfte durch Bezugspflege und feste Touren',
    'Hilfe zur Selbsthilfe statt Abnehmen aller Handgriffe',
    'Pflege, die sich nach Ihrem Tagesrhythmus richtet',
    'Entlastung für pflegende Angehörige, die sich auf uns verlassen können',
    'Besorgung von Medikamenten und Hilfsmitteln, Vermittlung eines Hausnotrufs',
    'Ein Ansprechpartner im Büro in Hörstel, der Ihre Situation kennt',
  ])}`,
    }),
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So läuft es ab',
    title: 'In drei Schritten zur <em>Grundpflege.</em>',
    body: steps([
      ['Anruf &amp; erstes Gespräch', 'Sie rufen uns an oder schreiben uns. Wir besprechen kurz Ihre Situation und vereinbaren einen Termin bei Ihnen zu Hause.'],
      ['Beratung vor Ort', 'Wir schauen gemeinsam, wobei Sie Hilfe brauchen, und stellen einen Pflegeplan zusammen. Den Antrag bei der Pflegekasse begleiten wir.'],
      ['Pflege beginnt', 'Ihr festes Pflegeteam kommt zu den vereinbarten Zeiten. Ändert sich Ihr Bedarf, passen wir die Leistungen an.'],
    ]),
  })}

${section({
    id: 'kosten',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Kosten</p>
            <h2>Wer bezahlt die <em>Grundpflege?</em></h2>
            <p>Grundpflege ist eine Leistung der Pflegeversicherung nach dem Sozialgesetzbuch&nbsp;XI. Ab Pflegegrad&nbsp;2 steht Ihnen dafür die <strong>Pflegesachleistung</strong> zu. Die Pflegekasse zahlt bis zu einem festen Monatsbetrag, der von Ihrem Pflegegrad abhängt. Als Vertragspartner aller Pflegekassen rechnen wir direkt ab.</p>
            <p>Pflegen Angehörige mit, ist die <strong>Kombinationsleistung</strong> oft sinnvoll: Was Sie von der Sachleistung nicht ausschöpfen, wird anteilig als Pflegegeld ausgezahlt. Ihre Pflegekasse teilt Ihnen die genauen Beträge mit. Gern rechnen wir vorab mit Ihnen aus, welche Kombination zu Ihnen passt.</p>
          </div>
          <div class="split__aside" data-reveal>
            ${callout('Noch kein Pflegegrad?', 'Dann lohnt sich ein Antrag bei Ihrer Pflegekasse. Was Ihnen mit welchem Pflegegrad zusteht, lesen Sie in unserem <a href="/ratgeber/pflegegrad-pflegeleistungen/">Ratgeber zu Pflegegrad und Pflegeleistungen</a>.', 'clipboard')}
          </div>
        </div>`,
  })}

${ctaBand({ title: 'Morgens Hilfe beim Waschen? <em>Wir kommen zu Ihnen.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir besprechen in Ruhe, welche Unterstützung Sie brauchen und wie sie bezahlt wird.' })}

${faq(FAQ, { title: 'Fragen zur <em>Grundpflege.</em>', lead: 'Was Pflegebedürftige und Angehörige vor dem Start der Grundpflege am häufigsten wissen möchten.' })}

${articleTeaser('pflegegrad-pflegeleistungen')}

${related(['behandlungspflege', 'hauswirtschaft', 'verhinderungspflege'])}

${cityBand('Grundpflege zu Hause in')}
`,
};
