import { pageHero, section, split, cards, facts, callout, steps, ticks, faq, related, cityBand, ctaBand, articleTeaser, AREA_SERVED, ORG_REF, SITE } from '../lib.mjs';

const FAQ = [
  ['Brauche ich für Behandlungspflege einen Pflegegrad?', 'Nein. Behandlungspflege ist häusliche Krankenpflege nach SGB&nbsp;V und wird von der Krankenkasse bezahlt. Entscheidend ist allein die ärztliche Verordnung&nbsp;– unabhängig von Alter und Pflegegrad.'],
  ['Wer stellt die Verordnung aus?', 'Ihre Hausärztin, Ihr Hausarzt, eine Fachärztin oder ein Facharzt. Auch das Krankenhaus kann bei der Entlassung häusliche Krankenpflege für die ersten Tage verordnen. Die Verordnung wird anschließend bei der Krankenkasse eingereicht&nbsp;– das übernehmen wir für Sie.'],
  ['Muss ich etwas zuzahlen?', 'Volljährige Versicherte leisten die gesetzliche Zuzahlung für häusliche Krankenpflege, sofern sie nicht davon befreit sind. Die übrigen Kosten rechnen wir direkt mit Ihrer Krankenkasse ab.'],
  ['Kann Behandlungspflege mit Grundpflege kombiniert werden?', 'Ja, und das ist oft praktisch. Bei einem Besuch übernehmen wir zum Beispiel die Körperpflege und messen anschließend den Blutzucker. Die Grundpflege zahlt die Pflegekasse, die Behandlungspflege die Krankenkasse. Die Abrechnung trennen wir für Sie.'],
  ['Wie lange gilt eine Verordnung?', 'Das legt die Ärztin oder der Arzt fest. Kurze Verordnungen gibt es etwa nach einer Operation, längere bei chronischen Erkrankungen. Rechtzeitig vor dem Ablauf erinnern wir Sie an eine Folgeverordnung.'],
];

export default {
  path: '/leistungen/behandlungspflege/',
  title: 'Behandlungspflege in Hörstel & Umgebung | Funk',
  description: 'Behandlungspflege zu Hause in Hörstel und Umgebung: Medikamente, Injektionen, Verbände, Blutzucker – nach ärztlicher Verordnung, die Krankenkasse zahlt.',
  type: 'service',
  nav: 'leistungen',
  crumbs: [['Leistungen', '/leistungen/'], ['Behandlungspflege']],
  heroImage: 'behandlungspflege',
  ogImage: 'behandlungspflege',
  faq: FAQ,
  schema: [{
    '@type': 'Service',
    '@id': `${SITE}/leistungen/behandlungspflege/#service`,
    name: 'Behandlungspflege – häusliche Krankenpflege',
    serviceType: 'Häusliche Krankenpflege nach SGB V',
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    url: `${SITE}/leistungen/behandlungspflege/`,
  }],
  body: `${pageHero({
    crumbs: [['Leistungen', '/leistungen/'], ['Behandlungspflege']],
    eyebrow: 'Leistung · Häusliche Krankenpflege',
    title: 'Behandlungspflege nach <em>ärztlicher Verordnung.</em>',
    lead: 'Was Ihre Ärztin oder Ihr Arzt anordnet, setzen unsere examinierten Pflegefachkräfte bei Ihnen zu Hause um&nbsp;– zuverlässig, pünktlich und in enger Abstimmung mit der Praxis.',
    image: 'behandlungspflege',
    imageAlt: 'Pflegefachkraft des Pflegedienstes Funk misst bei einem älteren Herrn am Tisch den Blutzucker',
    checks: ['Krankenkasse zahlt&nbsp;– kein Pflegegrad nötig', 'Examinierte Pflegefachkräfte, auch am Wochenende'],
  })}

${section({
    id: 'was-ist',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Was ist Behandlungspflege?</p>
            <h2>Medizinische Pflege, die zu Ihnen <em>nach Hause kommt.</em></h2>
            <p class="lead">Behandlungspflege umfasst alle medizinischen Aufgaben, die eine Ärztin oder ein Arzt verordnet und an eine Pflegefachkraft überträgt. Im Gesetz heißt sie <strong>häusliche Krankenpflege</strong> und ist im Sozialgesetzbuch&nbsp;V geregelt.</p>
            <p>Typische Beispiele sind Insulinspritzen, das Richten von Tabletten, ein Verbandswechsel oder das Anziehen von Kompressionsstrümpfen. Viele dieser Aufgaben fallen täglich an&nbsp;– manchmal mehrmals. Wir übernehmen sie, damit die Therapie wirkt und Sie nicht für jede Kleinigkeit in die Praxis müssen.</p>
            <p>Behandlungspflege ist keine Frage des Alters. Wir versorgen Menschen nach einer Operation oder einem Krankenhausaufenthalt, bei Diabetes, Herzschwäche, Krebs oder einer anderen chronischen Erkrankung. Wenn Sie zusätzlich Hilfe im Alltag brauchen, ergänzen wir die Versorgung um <a href="/leistungen/grundpflege/">Grundpflege</a>.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['shield', 'Krankenkasse zahlt', 'bei ärztlicher Verordnung'],
    ['clipboard', 'Kein Pflegegrad', 'Verordnung genügt'],
    ['stetho', 'Fachkräfte', 'examiniert und erfahren'],
    ['calendar', 'Auch am Wochenende', 'und an Feiertagen'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'schwerpunkte',
    cream: true,
    eyebrow: 'Unsere Schwerpunkte',
    title: 'Drei Schwerpunkte der <em>Behandlungspflege.</em>',
    lead: 'Zu diesen Teilen der Behandlungspflege finden Sie ausführliche Informationen auf eigenen Seiten.',
    body: cards([
      ['pill', 'Medikamentengabe', 'Tabletten richten und verabreichen, Augentropfen, Insulin und andere Injektionen&nbsp;– pünktlich und dokumentiert.', '/leistungen/medikamentengabe/'],
      ['leg', 'Kompressionsversorgung', 'Kompressionsstrümpfe an- und ausziehen, Kompressionsverbände anlegen und die Haut kontrollieren.', '/leistungen/kompressionsversorgung/'],
      ['bandage', 'Wundversorgung', 'Wundmanagement für chronische und frische Wunden&nbsp;– dokumentiert und mit der Praxis abgestimmt.', '/leistungen/wundversorgung/'],
    ]),
  })}

${section({
    id: 'leistungen',
    body: split({
      reverse: true,
      image: 'hero',
      mediaCls: 'pos-top',
      alt: 'Pflegefachkraft des Pflegedienstes Funk misst einer älteren Dame auf dem Sofa den Blutdruck',
      text: `
            <p class="eyebrow">Was wir für Sie tun</p>
            <h2>Leistungen der <em>Behandlungspflege.</em></h2>
            <p>Welche Maßnahmen wir übernehmen, steht auf Ihrer Verordnung. Häufig sind es diese:</p>
            ${ticks([
    'Gabe von Medikamenten, Augentropfen und Salben',
    'Injektionen, zum Beispiel Insulin oder Spritzen gegen Thrombose',
    'Blutdruck-, Puls- und Blutzuckerkontrolle',
    'Verbände und Wundbehandlung',
    'An- und Ausziehen von Kompressionsstrümpfen',
    'Schmerzbehandlung nach ärztlichem Plan',
    'Versorgung von Katheter, Stoma und Sonde',
  ])}
            <p>Alle Werte und Maßnahmen dokumentieren wir. Fällt uns etwas auf, melden wir uns bei Ihrer Ärztin oder Ihrem Arzt.</p>`,
    }),
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So läuft es ab',
    title: 'Von der Verordnung zur <em>Versorgung.</em>',
    body: steps([
      ['Verordnung ausstellen', 'Ihre Ärztin, Ihr Arzt oder das Krankenhaus verordnet häusliche Krankenpflege. Sie oder Ihre Angehörigen rufen uns an.'],
      ['Wir klären den Rest', 'Wir reichen die Verordnung bei Ihrer Krankenkasse ein und stimmen Uhrzeiten und Ablauf mit Ihnen und der Praxis ab.'],
      ['Versorgung zu Hause', 'Unsere Pflegefachkräfte kommen zu den festen Zeiten, dokumentieren jede Maßnahme und halten die Praxis auf dem Laufenden.'],
    ]),
  })}

${section({
    id: 'kosten',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Kosten</p>
            <h2>Wer bezahlt die <em>Behandlungspflege?</em></h2>
            <p>Die Kosten trägt Ihre <strong>Krankenkasse</strong>, sobald eine ärztliche Verordnung vorliegt und die Kasse sie genehmigt hat. Volljährige leisten die gesetzliche Zuzahlung, sofern sie nicht befreit sind. Als Vertragspartner aller Kranken- und Pflegekassen rechnen wir direkt ab.</p>
            <p>Ob Sie in Hörstel, Mettingen, Recke, Ibbenbüren oder Rheine wohnen: Für Sie ändert sich am Ablauf nichts. Sie müssen nichts vorstrecken und keine Anträge selbst stellen.</p>
          </div>
          <div class="split__aside" data-reveal>
            ${callout('Nach dem Krankenhaus', 'Steht eine Entlassung an, fragen Sie auf Station nach einer Verordnung für häusliche Krankenpflege. Rufen Sie uns am besten schon vor der Entlassung an, dann sind wir vom ersten Tag an da.', 'clock')}
          </div>
        </div>`,
  })}

${ctaBand({ title: 'Verordnung in der Hand? <em>Wir übernehmen.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir klären die Formalitäten mit Krankenkasse und Arztpraxis und planen den ersten Besuch.' })}

${faq(FAQ, { title: 'Fragen zur <em>Behandlungspflege.</em>', lead: 'Was Patientinnen, Patienten und Angehörige zur häuslichen Krankenpflege am häufigsten fragen.' })}

${articleTeaser('professionelle-wundversorgung-zu-hause')}

${related(['wundversorgung', 'medikamentengabe', 'kompressionsversorgung'])}

${cityBand('Behandlungspflege zu Hause in')}
`,
};
