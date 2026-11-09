import { pageHero, section, split, cards, facts, callout, steps, ticks, faq, related, cityBand, ctaBand, articleTeaser, AREA_SERVED, ORG_REF, SITE } from '../lib.mjs';

const FAQ = [
  ['Bekomme ich Haushaltshilfe schon mit Pflegegrad&nbsp;1?', 'Ja. Mit Pflegegrad&nbsp;1 können Sie den monatlichen Entlastungsbetrag der Pflegekasse für hauswirtschaftliche Hilfe nutzen. Ab Pflegegrad&nbsp;2 kommt die Pflegesachleistung hinzu. Was in Ihrem Fall möglich ist, prüfen wir gern mit Ihnen.'],
  ['Was passiert, wenn ich den Entlastungsbetrag nicht nutze?', 'Nicht verbrauchte Beträge verfallen nicht sofort, sondern können für eine begrenzte Zeit angespart werden. Ihre Pflegekasse teilt Ihnen mit, wie viel Guthaben Sie noch haben. Wir helfen Ihnen, es sinnvoll einzusetzen.'],
  ['Putzen Sie auch die ganze Wohnung?', 'Wir übernehmen die Reinigung der Räume, die Sie im Alltag nutzen, also etwa Küche, Bad, Schlafzimmer und Wohnbereich. Große Sonderaufgaben wie eine Grundreinigung nach einem Umzug oder Gartenarbeit gehören nicht zur hauswirtschaftlichen Versorgung der Pflegekasse.'],
  ['Kann ich Hauswirtschaft ohne Pflege buchen?', 'Mit Pflegegrad ist das möglich: Viele unserer Klientinnen und Klienten beginnen mit Hilfe im Haushalt und nehmen später bei Bedarf Grundpflege dazu. Sprechen Sie uns an, wir finden eine passende Lösung.'],
  ['Kommt jedes Mal dieselbe Person?', 'Wir planen feste Zuständigkeiten, damit Sie vertraute Menschen im Haus haben, die Ihre Gewohnheiten kennen. Bei Urlaub oder Krankheit übernimmt eine Vertretung aus demselben Team.'],
];

export default {
  path: '/leistungen/hauswirtschaft/',
  title: 'Hilfe im Haushalt für Senioren | Pflegedienst Funk',
  description: 'Hauswirtschaftliche Versorgung in Hörstel und Umgebung: Einkaufen, Kochen, Wäsche, Reinigung – über Entlastungsbetrag oder Pflegesachleistung. 05459 5869825.',
  type: 'service',
  nav: 'leistungen',
  crumbs: [['Leistungen', '/leistungen/'], ['Hauswirtschaft']],
  heroImage: 'hauswirtschaft',
  ogImage: 'hauswirtschaft',
  faq: FAQ,
  schema: [{
    '@type': 'Service',
    '@id': `${SITE}/leistungen/hauswirtschaft/#service`,
    name: 'Hauswirtschaftliche Versorgung und Hilfe im Haushalt',
    serviceType: 'Ambulante Pflege – Hauswirtschaftliche Versorgung',
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    url: `${SITE}/leistungen/hauswirtschaft/`,
  }],
  body: `${pageHero({
    crumbs: [['Leistungen', '/leistungen/'], ['Hauswirtschaft']],
    eyebrow: 'Leistung · Hilfe im Haushalt',
    title: 'Hauswirtschaftliche <em>Versorgung.</em>',
    lead: 'Einkaufen, Kochen, Wäsche, ein sauberes Bad&nbsp;– wenn der Haushalt zur Last wird, packen wir mit an. Damit Sie sich in Ihrem Zuhause weiter wohlfühlen.',
    image: 'hauswirtschaft',
    imageAlt: 'Mitarbeiterin des Pflegedienstes Funk bereitet mit einer älteren Dame in der Küche Gemüse zu',
    checks: ['Entlastungsbetrag schon ab Pflegegrad&nbsp;1 nutzbar', 'Direkte Abrechnung mit Ihrer Pflegekasse'],
  })}

${section({
    id: 'was-ist',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Was ist hauswirtschaftliche Versorgung?</p>
            <h2>Ein gepflegter Haushalt ist ein <em>Stück Lebensqualität.</em></h2>
            <p class="lead">Hauswirtschaftliche Versorgung ist Hilfe im Haushalt für Menschen, die das nicht mehr allein schaffen. Sie gehört zu den Leistungen der Pflegeversicherung und kann mit einem Pflegegrad über die Pflegekasse abgerechnet werden.</p>
            <p>Oft beginnt es schleichend. Die Einkaufstasche wird zu schwer, das Fensterputzen zu gefährlich, das Kochen für eine Person zu mühsam. Mit unserer Haushaltshilfe bleibt der Alltag geordnet&nbsp;– und Sie behalten Kraft für das, was Ihnen Freude macht.</p>
            <p>Das gilt nicht nur im Alter. Auch nach einer Operation, bei einer Erkrankung, die viel Energie kostet, oder mit einer Behinderung kann Hilfe im Haushalt den entscheidenden Unterschied machen.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['home', 'Bei Ihnen zu Hause', 'in Ihren gewohnten Abläufen'],
    ['shield', 'Ab Pflegegrad&nbsp;1', 'über den Entlastungsbetrag'],
    ['users', 'Feste Ansprechpartner', 'vertraute Gesichter im Haus'],
    ['clipboard', 'Ohne Papierkram', 'wir rechnen direkt ab'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'leistungen',
    cream: true,
    eyebrow: 'Was wir für Sie tun',
    title: 'Hilfe im Haushalt, <em>wie Sie sie brauchen.</em>',
    lead: 'Wir richten uns nach Ihren Gewohnheiten. Wo das Geschirr steht und wie Sie Ihre Wäsche falten, bestimmen Sie.',
    body: cards([
      ['home', 'Reinigung der Wohnung', 'Staubsaugen, Wischen, Bad und Küche putzen, Betten frisch beziehen&nbsp;– in den Räumen, die Sie täglich nutzen.'],
      ['heart', 'Kochen und Mahlzeiten', 'Gemeinsam oder für Sie kochen, Mahlzeiten vorbereiten und auf eine ausgewogene Ernährung achten.'],
      ['route', 'Einkaufen und Besorgungen', 'Lebensmittel einkaufen, Rezepte einlösen und Medikamente oder Hilfsmittel besorgen.'],
      ['hands', 'Wäsche', 'Waschen, Aufhängen, Bügeln und Einräumen. Kleidung bleibt gepflegt und griffbereit.'],
      ['clock', 'Struktur im Alltag', 'Ein fester Rhythmus gibt Halt, gerade bei beginnender Vergesslichkeit oder nach einem Klinikaufenthalt.'],
      ['users', 'Vermittlung weiterer Hilfen', 'Wir vermitteln Hilfsdienste und einen Hausnotruf, wenn Sie zusätzliche Sicherheit möchten.'],
    ]),
  })}

${section({
    id: 'angehoerige',
    body: split({
      image: 'beratung-tall',
      tall: true,
      alt: 'Pflegeberaterin des Pflegedienstes Funk spricht mit einem älteren Herrn und seiner Tochter am Küchentisch',
      text: `
            <p class="eyebrow">Entlastung für Familien</p>
            <h2>Mehr Zeit füreinander, <em>weniger Pflichten.</em></h2>
            <p>Viele Angehörige erledigen Einkauf und Putzen neben Beruf und eigener Familie. Das geht eine Weile gut&nbsp;– und dann nicht mehr. Wenn wir den Haushalt übernehmen, bleibt bei Ihren Besuchen Zeit für Gespräche, Spaziergänge und gemeinsame Stunden.</p>
            ${ticks([
    'Verlässliche Termine, auf die sich die ganze Familie einstellen kann',
    'Ein Blick von außen: Wir merken, wenn sich etwas verändert',
    'Kombinierbar mit <a href="/leistungen/grundpflege/">Grundpflege</a> und <a href="/leistungen/verhinderungspflege/">Verhinderungspflege</a>',
    'Unterstützung in Hörstel, Mettingen, Recke, Ibbenbüren und Rheine',
  ])}`,
    }),
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So läuft es ab',
    title: 'So kommen Sie zu Ihrer <em>Haushaltshilfe.</em>',
    body: steps([
      ['Kurzes Telefonat', 'Sie erzählen uns, wobei Sie Hilfe brauchen. Wir fragen nach Ihrem Pflegegrad und klären, welche Leistungen Ihnen zustehen.'],
      ['Besuch und Plan', 'Wir kommen vorbei, schauen uns den Haushalt an und legen mit Ihnen Aufgaben, Tage und Uhrzeiten fest.'],
      ['Regelmäßige Hilfe', 'Ihre feste Ansprechpartnerin kommt zu den vereinbarten Zeiten. Die Abrechnung mit der Pflegekasse übernehmen wir.'],
    ]),
  })}

${section({
    id: 'kosten',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Kosten</p>
            <h2>Wer bezahlt die <em>Haushaltshilfe?</em></h2>
            <p>Mit einem Pflegegrad beteiligt sich die Pflegekasse an der hauswirtschaftlichen Versorgung. Ab Pflegegrad&nbsp;1 steht Ihnen jeden Monat der <strong>Entlastungsbetrag</strong> zu, den Sie dafür einsetzen können. Ab Pflegegrad&nbsp;2 lässt sich die Hilfe im Haushalt zusätzlich über die <strong>Pflegesachleistung</strong> abrechnen, auch in Kombination mit Pflegegeld.</p>
            <p>Ihre Pflegekasse teilt Ihnen die genauen Beträge mit. Wir rechnen gern gemeinsam mit Ihnen aus, wie viele Stunden Hilfe damit abgedeckt sind, und rechnen direkt mit der Kasse ab.</p>
          </div>
          <div class="split__aside" data-reveal>
            ${callout('Guthaben prüfen', 'Viele Familien wissen nicht, dass sich ungenutzte Entlastungsbeträge ansammeln. Ein Anruf bei der Pflegekasse lohnt sich. Mehr dazu im <a href="/ratgeber/pflegegrad-pflegeleistungen/">Ratgeber zu Pflegegrad und Pflegeleistungen</a>.', 'clipboard')}
          </div>
        </div>`,
  })}

${ctaBand({ title: 'Der Haushalt wird zu viel? <em>Wir packen mit an.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir prüfen, welche Leistungen Ihrer Pflegekasse Sie nutzen können, und finden passende Termine.' })}

${faq(FAQ, { title: 'Fragen zur <em>Haushaltshilfe.</em>', lead: 'Antworten rund um Hilfe im Haushalt, Pflegegrad und Abrechnung mit der Pflegekasse.' })}

${articleTeaser('pflegegrad-pflegeleistungen')}

${related(['grundpflege', 'verhinderungspflege', 'pflegeberatung-37-3'])}

${cityBand('Hilfe im Haushalt in')}
`,
};
