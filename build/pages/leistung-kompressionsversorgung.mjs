import { pageHero, section, split, cards, facts, callout, steps, ticks, faq, related, cityBand, ctaBand, AREA_SERVED, ORG_REF, SITE } from '../lib.mjs';

const FAQ = [
  ['Zahlt die Krankenkasse das An- und Ausziehen von Kompressionsstrümpfen?', 'Ja, wenn Ihre Ärztin oder Ihr Arzt es als häusliche Krankenpflege verordnet. Das ist ab Kompressionsklasse&nbsp;2 möglich. Die Krankenkasse übernimmt dann die Kosten, Sie zahlen in der Regel nur die gesetzliche Zuzahlung.'],
  ['Brauche ich dafür einen Pflegegrad?', 'Nein. Die Kompressionsversorgung gehört zur Behandlungspflege nach dem Sozialgesetzbuch&nbsp;V. Entscheidend ist allein die ärztliche Verordnung, nicht ein Pflegegrad.'],
  ['Warum werden die Strümpfe morgens angezogen?', 'Morgens sind die Beine meist noch schlank, weil sich über Nacht wenig Flüssigkeit im Gewebe sammelt. Dann sitzt der Strumpf am besten und wirkt am stärksten. Abends ziehen wir ihn wieder aus, damit sich die Haut erholen kann. Die Besuchszeiten legen wir gemeinsam mit Ihnen fest.'],
  ['Was ist der Unterschied zwischen Kompressionsstrumpf und Kompressionsverband?', 'Der Strumpf ist ein fertiges, nach Maß angepasstes Hilfsmittel für die Dauertherapie. Ein Kompressionsverband wird mit Binden gewickelt und kommt oft zu Beginn einer Behandlung zum Einsatz, etwa wenn ein Bein noch stark geschwollen ist oder eine Wunde versorgt werden muss.'],
  ['Kann ich lernen, die Strümpfe selbst anzuziehen?', 'Oft ja. Mit einer passenden Anziehhilfe gelingt es vielen Menschen wieder ohne fremde Hilfe. Wir zeigen Ihnen und Ihren Angehörigen die Handgriffe und üben sie mit Ihnen, bis sie sicher sitzen.'],
  ['Was tue ich, wenn der Strumpf drückt oder die Haut gerötet ist?', 'Lassen Sie den Strumpf nicht einfach weg, sondern sprechen Sie uns an. Wir prüfen Sitz und Haut, beraten Sie zur Pflege und informieren bei Bedarf Ihre Arztpraxis, damit die Versorgung angepasst werden kann.'],
];

const crumbs = [['Leistungen', '/leistungen/'], ['Kompressionsversorgung']];

export default {
  path: '/leistungen/kompressionsversorgung/',
  title: 'Kompressionsversorgung zu Hause | Pflegedienst Funk GmbH',
  description: 'Kompressionsstrümpfe anziehen durch den Pflegedienst: Wir legen Strümpfe und Verbände fachgerecht an – in Hörstel und Umgebung. Auf Verordnung zahlt die Kasse.',
  type: 'service',
  nav: 'leistungen',
  crumbs,
  heroImage: 'hero',
  ogImage: 'hero',
  faq: FAQ,
  schema: [{
    '@type': 'Service',
    '@id': `${SITE}/leistungen/kompressionsversorgung/#service`,
    name: 'Kompressionsversorgung zu Hause',
    serviceType: 'Häusliche Krankenpflege – An- und Ausziehen von Kompressionsstrümpfen, Kompressionsverbände',
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    url: `${SITE}/leistungen/kompressionsversorgung/`,
  }],
  body: `${pageHero({
    crumbs,
    eyebrow: 'Leistung · Behandlungspflege',
    title: 'Kompressionsstrümpfe an- und <em>ausziehen.</em>',
    lead: 'Medizinische Kompressionsstrümpfe wirken nur, wenn sie jeden Tag richtig sitzen. Wir ziehen sie morgens an und abends aus, legen Kompressionsverbände an und achten dabei auf Ihre Haut&nbsp;– bei Ihnen zu Hause.',
    image: 'hero',
    mediaClass: 'pos-top',
    imageAlt: 'Pflegefachkraft des Pflegedienstes Funk GmbH betreut eine ältere Dame zu Hause auf dem Sofa',
    checks: ['Ab Kompressionsklasse&nbsp;2 auf Verordnung&nbsp;– die Krankenkasse zahlt', 'Morgens anziehen, abends ausziehen&nbsp;– zuverlässig geplant'],
  })}

${section({
    id: 'was-ist',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Was ist Kompressionsversorgung?</p>
            <h2>Gleichmäßiger Druck, der den <em>Beinen hilft.</em></h2>
            <p class="lead">Bei der Kompressionsversorgung übt ein medizinischer Strumpf oder ein gewickelter Verband gezielten Druck auf Beine oder Arme aus. Das unterstützt die Venen und den Lymphabfluss, lindert Schwellungen und beugt Komplikationen vor.</p>
            <p>Kompressionsstrümpfe der Klasse&nbsp;2 und höher sind fest und eng. Sie richtig anzuziehen, kostet Kraft und Übung&nbsp;– und gerade das fällt mit Arthrose in den Händen, nach einer Operation oder mit wenig Beweglichkeit im Rücken schwer. Sitzt der Strumpf schief oder schlägt Falten, schnürt er ein und verliert seine Wirkung.</p>
            <p>Hier unterstützen wir Sie: Unsere Pflegefachkräfte ziehen die Strümpfe faltenfrei an, kontrollieren den Sitz und nehmen sie abends wieder ab. So bleibt die Therapie wirksam, und Sie müssen sich nicht jeden Morgen allein abmühen.</p>
            <p>Die Kompressionsversorgung ist ein Teil der <a href="/leistungen/behandlungspflege/">Behandlungspflege</a>. Sie wird ärztlich verordnet und von der Krankenkasse bezahlt.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['shield', 'Kasse zahlt', 'ab Kompressionsklasse&nbsp;2 mit Verordnung'],
    ['leg', 'Strümpfe &amp; Verbände', 'fachgerecht an- und abgelegt'],
    ['clock', 'Feste Zeiten', 'morgens an, abends aus'],
    ['heart', 'Hautpflege inklusive', 'Druckstellen früh erkennen'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'fuer-wen',
    cream: true,
    eyebrow: 'Für wen?',
    title: 'Wobei Kompression <em>helfen kann.</em>',
    lead: 'Kompression hilft bei vielen Erkrankungen von Venen und Lymphgefäßen&nbsp;– in jedem Alter und ganz unabhängig von einem Pflegegrad.',
    body: cards([
      ['leg', 'Venenschwäche und Krampfadern', 'Wenn die Venen das Blut nicht mehr gut zum Herzen zurücktransportieren, werden die Beine schwer und schwellen an. Kompression entlastet sie spürbar.'],
      ['heart', 'Lymphödem', 'Staut sich Lymphflüssigkeit im Gewebe, hält die Kompression den Erfolg der Lymphdrainage. Hier ist ein besonders sorgfältiges Anlegen wichtig.'],
      ['shield', 'Nach einer Thrombose', 'Nach einem Blutgerinnsel im Bein sollen Kompressionsstrümpfe Beschwerden lindern und Folgeschäden an den Venen vorbeugen.'],
      ['bandage', 'Offenes Bein', 'Beim Ulcus cruris gehören Kompression und <a href="/leistungen/wundversorgung/">Wundversorgung</a> zusammen. Wir verbinden beides in einem Besuch.'],
      ['hands', 'Wenn die Kraft fehlt', 'Steife Finger, ein schmerzender Rücken oder eine neue Hüfte: Oft ist nicht die Krankheit das Problem, sondern das tägliche Anziehen.'],
      ['users', 'Wenn Angehörige entlastet werden möchten', 'Strümpfe der Klasse&nbsp;2 kosten auch Helfende viel Kraft. Wir übernehmen diese Aufgabe verlässlich jeden Tag.'],
    ]),
  })}

${section({
    id: 'leistungen',
    body: split({
      reverse: true,
      image: 'grundpflege',
      alt: 'Pflegekraft des Pflegedienstes Funk GmbH hilft einem älteren Herrn an der Bettkante beim Anziehen',
      text: `
            <p class="eyebrow">Was wir für Sie tun</p>
            <h2>Kompressionsstrümpfe anziehen, <em>sicher und faltenfrei.</em></h2>
            <p>Eine gute Kompressionsversorgung ist mehr als das Überstreifen eines Strumpfes. Bei jedem Besuch achten wir auf die Haut, den Sitz und Ihr Befinden.</p>
            ${ticks([
    'Anziehen medizinischer Kompressionsstrümpfe am Morgen, faltenfrei und ohne Einschnürungen',
    'Ausziehen am Abend und Kontrolle der Beine auf Druckstellen und Rötungen',
    'Anlegen von Kompressionsverbänden mit Kurzzugbinden nach ärztlicher Anordnung',
    'Hautpflege, damit die Haut unter dem Strumpf geschmeidig bleibt',
    'Einsatz und Erklärung von Anziehhilfen für Sie und Ihre Angehörigen',
    'Hinweise, wenn ein Strumpf ausgeleiert ist oder nicht mehr passt',
    'Rückmeldung an die Arztpraxis, wenn sich Beine oder Haut verändern',
  ])}`,
    }),
  })}

${section({
    id: 'strumpf-oder-verband',
    cls: 'section--tight',
    eyebrow: 'Gut zu wissen',
    title: 'Kompressionsstrumpf oder <em>Kompressionsverband?</em>',
    lead: 'Beide Formen haben ihren Platz. Welche für Sie richtig ist, entscheidet Ihre Ärztin oder Ihr Arzt&nbsp;– wir setzen die Verordnung fachgerecht um.',
    body: cards([
      ['leg', 'Der Kompressionsstrumpf', 'Er wird im Sanitätshaus nach Maß angepasst und ist für die tägliche Dauertherapie gedacht. Er sitzt gleichmäßig, wenn er morgens auf das noch schlanke Bein gezogen wird. Die Strümpfe selbst verordnet die Praxis gesondert als Hilfsmittel.'],
      ['bandage', 'Der Kompressionsverband', 'Er wird mit Binden in mehreren Lagen gewickelt und passt sich einem Bein an, das noch stark geschwollen ist. Häufig steht er am Anfang einer Behandlung oder wird bei einem offenen Bein über der Wundauflage angelegt.'],
    ], 2),
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So läuft es ab',
    title: 'In drei Schritten zur <em>Kompressionsversorgung.</em>',
    body: steps([
      ['Verordnung &amp; Anruf', 'Ihre Ärztin oder Ihr Arzt verordnet das An- und Ausziehen als häusliche Krankenpflege. Rufen Sie uns an&nbsp;– wir kümmern uns um die Genehmigung bei der Krankenkasse.'],
      ['Erstbesuch zu Hause', 'Eine Pflegefachkraft sieht sich Beine, Haut und Strümpfe an, bespricht mit Ihnen den Tagesablauf und plant feste Zeiten für morgens und abends.'],
      ['Tägliche Versorgung', 'Durch unsere Bezugspflege kommen möglichst dieselben vertrauten Pflegekräfte zu Ihnen&nbsp;– auch am Wochenende und an Feiertagen.'],
    ]),
  })}

${section({
    id: 'kosten',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Kosten</p>
            <h2>Wer bezahlt die <em>Kompressionsversorgung?</em></h2>
            <p>Das An- und Ausziehen medizinischer Kompressionsstrümpfe ist ab Kompressionsklasse&nbsp;2 als häusliche Krankenpflege verordnungsfähig. Dasselbe gilt für das Anlegen von Kompressionsverbänden. Liegt die Verordnung vor, <strong>übernimmt Ihre Krankenkasse die Kosten</strong>. Volljährige Versicherte leisten die gesetzliche Zuzahlung, sofern sie nicht befreit sind.</p>
            <p>Als Vertragspartner aller Kranken- und Pflegekassen rechnen wir direkt mit Ihrer Kasse ab. Ob Sie in Hörstel, Riesenbeck, Mettingen, Recke, Ibbenbüren oder Rheine wohnen: Sie müssen nichts vorstrecken.</p>
          </div>
          <div class="split__aside" data-reveal>
            ${callout('Mehr als Strümpfe nötig?', 'Brauchen Sie auch Hilfe bei der Körperpflege oder im Haushalt, lässt sich die Kompressionsversorgung gut mit <a href="/leistungen/grundpflege/">Grundpflege</a> verbinden. Wir beraten Sie gern, welche Leistungen Ihnen zustehen.', 'hands')}
          </div>
        </div>`,
  })}

${ctaBand({ title: 'Jeden Morgen ein Kampf mit den Strümpfen? <em>Wir übernehmen.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir klären die Verordnung mit Ihrer Praxis und planen feste Besuchszeiten für Sie.' })}

${faq(FAQ, { title: 'Fragen zur <em>Kompressionsversorgung.</em>', lead: 'Was Patientinnen, Patienten und Angehörige rund um Kompressionsstrümpfe und -verbände am häufigsten wissen möchten.' })}

${related(['behandlungspflege', 'wundversorgung', 'medikamentengabe'])}

${cityBand('Kompressionsstrümpfe anziehen lassen in')}
`,
};
