import { pageHero, section, split, cards, facts, callout, steps, ticks, faq, related, cityBand, ctaBand, articleTeaser, AREA_SERVED, ORG_REF, SITE } from '../lib.mjs';

const FAQ = [
  ['Wer bezahlt die Wundversorgung zu Hause?', 'Wenn Ihre Ärztin oder Ihr Arzt die Wundversorgung als häusliche Krankenpflege verordnet, übernimmt die Krankenkasse die Kosten. Sie zahlen in der Regel nur die gesetzliche Zuzahlung. Einen Pflegegrad brauchen Sie dafür nicht.'],
  ['Wie bekomme ich eine Verordnung für die Wundversorgung?', 'Sprechen Sie Ihre Hausärztin, Ihren Hausarzt oder die behandelnde Klinik an. Die Verordnung für häusliche Krankenpflege wird auf einem eigenen Formular ausgestellt. Wenn Sie möchten, stimmen wir uns direkt mit der Praxis ab.'],
  ['Wie oft wird der Verband gewechselt?', 'Das hängt von der Wunde und dem Verbandsmaterial ab. Moderne Wundauflagen bleiben oft mehrere Tage auf der Wunde. Den Rhythmus legen wir gemeinsam mit Ihrer Ärztin oder Ihrem Arzt fest und passen ihn an, wenn sich die Wunde verändert.'],
  ['Was ist eine chronische Wunde?', 'Von einer chronischen Wunde spricht man, wenn sie nach etwa acht Wochen noch nicht abgeheilt ist. Typisch sind ein offenes Bein, ein Druckgeschwür oder Wunden am Fuß bei Diabetes. Solche Wunden brauchen eine konsequente und fachkundige Versorgung.'],
  ['Arbeiten Sie mit Ärzten und Sanitätshäusern zusammen?', 'Ja. Wir berichten der behandelnden Praxis regelmäßig über den Heilungsverlauf, besprechen Änderungen der Therapie und helfen bei der Beschaffung des passenden Verbandsmaterials.'],
];

export default {
  path: '/leistungen/wundversorgung/',
  title: 'Wundversorgung & Wundmanagement zu Hause | Funk GmbH',
  description: 'Professionelle Wundversorgung zu Hause in Hörstel, Ibbenbüren, Rheine, Mettingen und Recke: Wundmanagement für chronische Wunden – auf Verordnung, Kasse zahlt.',
  type: 'service',
  nav: 'leistungen',
  crumbs: [['Leistungen', '/leistungen/'], ['Wundversorgung']],
  heroImage: 'wundversorgung',
  ogImage: 'wundversorgung',
  faq: FAQ,
  schema: [{
    '@type': 'Service',
    '@id': `${SITE}/leistungen/wundversorgung/#service`,
    name: 'Wundversorgung und Wundmanagement zu Hause',
    serviceType: 'Häusliche Krankenpflege – Wundversorgung',
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    url: `${SITE}/leistungen/wundversorgung/`,
  }],
  body: `${pageHero({
    crumbs: [['Leistungen', '/leistungen/'], ['Wundversorgung']],
    eyebrow: 'Leistung · Wundmanagement',
    title: 'Professionelle <em>Wundversorgung zu&nbsp;Hause.</em>',
    lead: 'Chronische oder schwer heilende Wunden brauchen Erfahrung, Geduld und saubere Abläufe. Unser Wundmanagement bringt die fachgerechte Versorgung direkt zu Ihnen nach Hause&nbsp;– in Hörstel und der ganzen Umgebung.',
    image: 'wundversorgung',
    imageAlt: 'Pflegefachkraft des Pflegedienstes Funk GmbH legt einer älteren Dame zu Hause einen sterilen Wundverband an',
    checks: ['Auf ärztliche Verordnung&nbsp;– die Krankenkasse zahlt', 'Erfahrene Pflegefachkräfte mit Schwerpunkt Wundmanagement'],
  })}

${section({
    id: 'was-ist',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Was ist Wundversorgung?</p>
            <h2>Wunden heilen besser, wenn jemand <em>genau hinschaut.</em></h2>
            <p class="lead">Wundversorgung umfasst alles, was eine Wunde zum Heilen braucht: die sorgfältige Reinigung, den passenden Verband, den Schutz vor Infektionen und die laufende Beobachtung.</p>
            <p>Gerade bei chronischen Wunden reicht ein einfacher Verbandswechsel nicht aus. Hier kommt das <strong>Wundmanagement</strong> ins Spiel: Wir beurteilen die Wunde bei jedem Besuch, dokumentieren den Verlauf mit Fotos und Messungen und stimmen die Behandlung eng mit Ihrer Ärztin oder Ihrem Arzt ab.</p>
            <p>So erkennen wir früh, ob die Therapie wirkt&nbsp;– und können reagieren, bevor sich eine Wunde verschlechtert. Für Sie bedeutet das: weniger Schmerzen, weniger Wege in die Praxis und mehr Sicherheit im Alltag.</p>
            <p>Die Wundversorgung ist ein Teil der <a href="/leistungen/behandlungspflege/">Behandlungspflege</a> und wird von unseren examinierten Pflegefachkräften durchgeführt.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['shield', 'Kasse zahlt', 'bei ärztlicher Verordnung'],
    ['stetho', 'Fachkräfte', 'mit Schwerpunkt Wundmanagement'],
    ['clipboard', 'Dokumentiert', 'Heilungsverlauf mit Foto und Messung'],
    ['home', 'Bei Ihnen zu Hause', 'keine Wege in die Praxis'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'fuer-wen',
    cream: true,
    eyebrow: 'Für wen?',
    title: 'Wann professionelle <em>Wundversorgung hilft.</em>',
    lead: 'Wir versorgen akute und chronische Wunden&nbsp;– unabhängig vom Alter und ohne Pflegegrad, sobald eine ärztliche Verordnung vorliegt.',
    body: cards([
      ['bandage', 'Offenes Bein (Ulcus cruris)', 'Langwierige Wunden an Unterschenkel und Knöchel, oft durch Venen- oder Durchblutungsstörungen. Häufig in Kombination mit einer <a href="/leistungen/kompressionsversorgung/">Kompressionsversorgung</a>.'],
      ['heart', 'Diabetisches Fußsyndrom', 'Wunden am Fuß bei Diabetes heilen schlecht und werden oft spät bemerkt. Wir kontrollieren regelmäßig und handeln sofort.'],
      ['shield', 'Druckgeschwür (Dekubitus)', 'Bei Bettlägerigkeit oder wenig Bewegung. Neben der Wundversorgung achten wir auf Druckentlastung und Lagerung.'],
      ['stetho', 'Wunden nach Operationen', 'Nach dem Krankenhaus versorgen wir Operationswunden, ziehen Fäden oder Klammern und beobachten die Heilung.'],
      ['users', 'Tumor- und Strahlenwunden', 'Einfühlsame Versorgung mit Blick auf Schmerzen, Geruch und Lebensqualität&nbsp;– in enger Absprache mit den Ärzten.'],
      ['clock', 'Wunden, die nicht heilen', 'Ist eine Wunde nach Wochen nicht besser, lohnt sich ein frischer, fachkundiger Blick auf Material und Behandlung.'],
    ]),
  })}

${section({
    id: 'leistungen',
    body: split({
      reverse: true,
      image: 'ratgeber-wunde',
      alt: 'Pflegefachkraft bereitet sterile Verbandsmaterialien für die Wundversorgung vor',
      text: `
            <p class="eyebrow">Was wir für Sie tun</p>
            <h2>Unser Wundmanagement <em>Schritt für Schritt.</em></h2>
            <p>Jede Wunde ist anders. Deshalb beginnen wir mit einer gründlichen Einschätzung und planen die Versorgung individuell&nbsp;– nach aktuellen fachlichen Standards.</p>
            ${ticks([
    'Beurteilung der Wunde: Größe, Tiefe, Wundrand und Anzeichen einer Infektion',
    'Fachgerechte Wundreinigung und steriler Verbandswechsel',
    'Auswahl moderner Wundauflagen in Absprache mit der Ärztin oder dem Arzt',
    'Fotodokumentation und Messung des Heilungsverlaufs',
    'Schmerzlinderung und Hautschutz rund um die Wunde',
    'Beratung zu Ernährung, Bewegung und Druckentlastung',
    'Anleitung für Angehörige: Was Sie zwischen den Besuchen beachten sollten',
  ])}`,
    }),
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So läuft es ab',
    title: 'In drei Schritten zur <em>Wundversorgung.</em>',
    body: steps([
      ['Verordnung &amp; Anruf', 'Ihre Ärztin oder Ihr Arzt verordnet die häusliche Krankenpflege. Sie rufen uns an&nbsp;– wir klären alles Weitere mit der Praxis und der Krankenkasse.'],
      ['Erstbesuch zu Hause', 'Eine Pflegefachkraft schaut sich die Wunde an, bespricht mit Ihnen den Ablauf und legt die Besuchszeiten fest.'],
      ['Regelmäßige Versorgung', 'Wir versorgen die Wunde zuverlässig, dokumentieren jeden Fortschritt und halten die Praxis auf dem Laufenden.'],
    ]),
  })}

${section({
    id: 'kosten',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Kosten</p>
            <h2>Was kostet die <em>Wundversorgung?</em></h2>
            <p>Die Wundversorgung gehört zur häuslichen Krankenpflege nach dem Sozialgesetzbuch&nbsp;V. Liegt eine ärztliche Verordnung vor, <strong>übernimmt Ihre Krankenkasse die Kosten</strong>. Volljährige Versicherte leisten die übliche gesetzliche Zuzahlung, sofern sie nicht davon befreit sind.</p>
            <p>Als Vertragspartner aller Kranken- und Pflegekassen rechnen wir direkt mit Ihrer Kasse ab. Sie müssen nichts vorstrecken und keine Formulare selbst einreichen.</p>
          </div>
          <div class="split__aside" data-reveal>
            ${callout('Kein Pflegegrad nötig', 'Für die Wundversorgung auf Verordnung brauchen Sie keinen Pflegegrad. Haben Sie zusätzlich Unterstützung im Alltag nötig, beraten wir Sie gern zu <a href="/leistungen/grundpflege/">Grundpflege</a> und Leistungen der Pflegekasse.')}
          </div>
        </div>`,
  })}

${ctaBand({ title: 'Eine Wunde, die nicht heilen will? <em>Wir helfen.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir besprechen Ihre Situation und kümmern uns um die Abstimmung mit der Arztpraxis.' })}

${faq(FAQ, { title: 'Fragen zur <em>Wundversorgung.</em>', lead: 'Antworten auf die Fragen, die uns Patientinnen, Patienten und Angehörige am häufigsten stellen.' })}

${articleTeaser('professionelle-wundversorgung-zu-hause')}

${related(['behandlungspflege', 'kompressionsversorgung', 'medikamentengabe'])}

${cityBand('Wundversorgung zu Hause in')}
`,
};
