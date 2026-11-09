import { pageHero, section, split, cards, facts, callout, steps, ticks, faq, related, cityBand, ctaBand, articleTeaser, AREA_SERVED, ORG_REF, SITE } from '../lib.mjs';

const FAQ = [
  ['Wer hat Anspruch auf Verhinderungspflege?', 'Pflegebedürftige ab Pflegegrad&nbsp;2, die zu Hause von Angehörigen, Freunden oder Nachbarn gepflegt werden. Ist diese private Pflegeperson verhindert, zahlt die Pflegekasse eine Ersatzpflege&nbsp;– zum Beispiel durch unseren Pflegedienst.'],
  ['Muss die Pflege vorher schon eine bestimmte Zeit bestanden haben?', 'Nein, nicht mehr. Seit Juli 2025 ist die frühere Vorpflegezeit von sechs Monaten entfallen. Sie können die Verhinderungspflege nutzen, sobald ein Pflegegrad ab&nbsp;2 vorliegt und Sie zu Hause gepflegt werden.'],
  ['Wie lange kann ich Verhinderungspflege nutzen?', 'Bis zu acht Wochen pro Kalenderjahr. Seit Juli 2025 teilen sich Verhinderungspflege und Kurzzeitpflege ein gemeinsames Jahresbudget. Wie viel davon noch frei ist, teilt Ihnen Ihre Pflegekasse mit&nbsp;– oder wir rechnen es gemeinsam mit Ihnen aus.'],
  ['Wird das Pflegegeld während der Verhinderungspflege weitergezahlt?', 'Ja, das Pflegegeld wird während der Verhinderungspflege teilweise weitergezahlt. Wie viel genau, hängt von Dauer und Umfang der Vertretung ab. Wir erklären Ihnen das gern an Ihrem konkreten Fall.'],
  ['Geht Verhinderungspflege auch nur für ein paar Stunden?', 'Ja. Viele Familien nutzen sie stundenweise, etwa für einen Arzttermin, einen Behördengang oder einen freien Nachmittag. Genauso ist eine Vertretung über mehrere Tage möglich, zum Beispiel während eines Urlaubs.'],
  ['Wie beantrage ich die Verhinderungspflege?', 'Der Antrag geht an Ihre Pflegekasse. Wir helfen Ihnen beim Ausfüllen, stimmen die Termine mit Ihnen ab und rechnen die Leistung anschließend direkt mit der Pflegekasse ab.'],
];

const crumbs = [['Leistungen', '/leistungen/'], ['Verhinderungspflege']];

export default {
  path: '/leistungen/verhinderungspflege/',
  title: 'Verhinderungspflege zu Hause | Pflegedienst Funk',
  description: 'Verhinderungspflege ambulant: Wir vertreten pflegende Angehörige bei Urlaub oder Krankheit – stundenweise oder tageweise. Pflegedienst Funk: 05459 5869825.',
  type: 'service',
  nav: 'leistungen',
  crumbs,
  heroImage: 'warum',
  ogImage: 'warum',
  faq: FAQ,
  schema: [{
    '@type': 'Service',
    '@id': `${SITE}/leistungen/verhinderungspflege/#service`,
    name: 'Verhinderungspflege zu Hause',
    serviceType: 'Ersatzpflege bei Verhinderung der Pflegeperson (§ 39 SGB XI)',
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    url: `${SITE}/leistungen/verhinderungspflege/`,
  }],
  body: `${pageHero({
    crumbs,
    eyebrow: 'Leistung · Entlastung für Angehörige',
    title: 'Verhinderungspflege <em>durch den Pflegedienst.</em>',
    lead: 'Wer einen Menschen zu Hause pflegt, braucht auch einmal Urlaub, wird krank oder schlicht müde. Dann springen wir ein&nbsp;– stundenweise oder tageweise, in der vertrauten Umgebung Ihres Angehörigen.',
    image: 'warum',
    mediaClass: 'pos-top',
    imageAlt: 'Pflegekraft des Pflegedienstes Funk wird von einem älteren Herrn an seiner Haustür begrüßt',
    checks: ['Ab Pflegegrad&nbsp;2&nbsp;– die Pflegekasse zahlt', 'Bis zu acht Wochen im Jahr'],
  })}

${section({
    id: 'was-ist',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Was ist Verhinderungspflege?</p>
            <h2>Damit die Pflege weitergeht, wenn <em>Sie einmal fehlen.</em></h2>
            <p class="lead">Verhinderungspflege ist eine Leistung der Pflegekasse. Sie greift, wenn die private Pflegeperson&nbsp;– meist Ehepartner, Tochter oder Sohn&nbsp;– vorübergehend nicht pflegen kann.</p>
            <p>Als ambulanter Pflegedienst übernehmen wir die Ersatzpflege direkt bei Ihnen zu Hause. Ihr Angehöriger muss dafür nicht in eine Einrichtung umziehen, sondern bleibt in seinen eigenen vier Wänden, mit seinem Bett, seinen Gewohnheiten und seinem Tagesablauf.</p>
            <p>Für pflegende Angehörige ist das eine wichtige Entlastung. Wer jahrelang pflegt, gerät leicht an seine Grenzen. Eine geplante Auszeit hilft, die Kraft für die Pflege zu erhalten&nbsp;– und das schlechte Gewissen hat Pause, weil Sie wissen, dass Fachleute da sind.</p>
            <p>Verhinderungspflege hilft nicht nur bei Pflege im hohen Alter. Sie steht allen offen, die mit Pflegegrad zu Hause versorgt werden, etwa nach einem Schlaganfall, bei einer chronischen Erkrankung oder mit einer Behinderung.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['shield', 'Ab Pflegegrad&nbsp;2', 'bei häuslicher Pflege durch Angehörige'],
    ['calendar', 'Bis zu acht Wochen', 'pro Kalenderjahr'],
    ['clock', 'Stunden- oder tageweise', 'ganz nach Ihrem Bedarf'],
    ['home', 'Bei Ihnen zu Hause', 'kein Umzug in eine Einrichtung'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'wann',
    cream: true,
    eyebrow: 'Wann?',
    title: 'Wann Sie Verhinderungspflege <em>nutzen können.</em>',
    lead: 'Einen besonderen Grund müssen Sie nicht nachweisen. Entscheidend ist, dass die private Pflegeperson für eine Zeit verhindert ist.',
    body: cards([
      ['calendar', 'Urlaub', 'Ein paar Tage an der See oder ein Besuch bei der Familie: Wir übernehmen die Pflege, während Sie unterwegs sind.'],
      ['heart', 'Krankheit', 'Wenn Sie selbst krank werden, ins Krankenhaus oder zur Kur müssen, springen wir kurzfristig ein, soweit unsere Planung es zulässt.'],
      ['clock', 'Eine Pause', 'Auch ein freier Nachmittag pro Woche ist Verhinderungspflege. Regelmäßige Auszeiten beugen Erschöpfung vor.'],
      ['route', 'Termine und Verpflichtungen', 'Arztbesuch, Behördengang, Familienfeier oder ein beruflicher Termin: Wir bleiben bei Ihrem Angehörigen, bis Sie zurück sind.'],
    ], 4),
  })}

${section({
    id: 'leistungen',
    body: split({
      reverse: true,
      image: 'hauswirtschaft',
      alt: 'Mitarbeiterin des Pflegedienstes Funk bereitet mit einer älteren Dame in der Küche Gemüse zu',
      text: `
            <p class="eyebrow">Was wir übernehmen</p>
            <h2>Verhinderungspflege ambulant: <em>vertraut und verlässlich.</em></h2>
            <p>Während Ihrer Abwesenheit kümmern wir uns um das, was sonst Sie erledigen. Vorher besprechen wir genau, was Ihrem Angehörigen wichtig ist.</p>
            ${ticks([
    'Körperpflege, An- und Auskleiden und Hilfe beim Toilettengang',
    'Unterstützung bei den Mahlzeiten und beim Trinken',
    'Mobilisation, Lagern und kleine Spaziergänge',
    'Hilfe im Haushalt: Ordnung, Wäsche, kleine Einkäufe',
    'Gesellschaft, Gespräche und Beschäftigung im gewohnten Rhythmus',
    'Erinnerung an die Medikamente nach Plan',
    'Ausführliche Übergabe, wenn Sie zurück sind',
  ])}
            <p>Ist ohnehin schon <a href="/leistungen/behandlungspflege/">Behandlungspflege</a> verordnet, läuft sie während der Vertretung selbstverständlich weiter.</p>`,
    }),
  })}

${section({
    id: 'kosten',
    cls: 'section--tight',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Kosten</p>
            <h2>Wer bezahlt die <em>Verhinderungspflege?</em></h2>
            <p>Die Verhinderungspflege bezahlt Ihre <strong>Pflegekasse</strong>. Seit Juli 2025 gibt es dafür ein gemeinsames Jahresbudget mit der Kurzzeitpflege. Sie entscheiden selbst, wofür Sie es einsetzen: für Ersatzpflege zu Hause, für einen Aufenthalt in der Kurzzeitpflege oder für beides.</p>
            <p>Während der Verhinderungspflege wird Ihr Pflegegeld teilweise weitergezahlt. Die genauen Beträge teilt Ihnen Ihre Pflegekasse mit. Wir rechnen gern mit Ihnen aus, wie viele Stunden oder Tage das Budget abdeckt.</p>
            <p>Als Vertragspartner aller Pflegekassen rechnen wir direkt ab&nbsp;– für Familien in Hörstel, Mettingen und Recke ebenso wie in Ibbenbüren und Rheine.</p>
          </div>
          <div class="split__aside prose" data-reveal>
            ${callout('Neu seit Juli 2025', 'Die frühere Vorpflegezeit von sechs Monaten ist entfallen. Sie können die Verhinderungspflege nutzen, sobald ein Pflegegrad ab&nbsp;2 vorliegt&nbsp;– auch wenn die Pflege gerade erst begonnen hat.', 'calendar')}
            ${callout('Früh planen lohnt sich', 'Für Urlaubszeiten und Feiertage melden Sie sich am besten einige Wochen vorher. Dann können wir die Besuche fest in unsere Tourenplanung aufnehmen.', 'route')}
          </div>
        </div>`,
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So läuft es ab',
    title: 'So organisieren wir <em>Ihre Vertretung.</em>',
    body: steps([
      ['Anruf &amp; Planung', 'Sie sagen uns, wann und wie lange Sie verhindert sind. Wir prüfen die freien Zeiten und helfen beim Antrag an die Pflegekasse.'],
      ['Kennenlernen &amp; Übergabe', 'Vor der Vertretung besuchen wir Sie zu Hause. Sie zeigen uns Abläufe, Gewohnheiten und alles, was Ihrem Angehörigen wichtig ist.'],
      ['Vertretung &amp; Abrechnung', 'Wir pflegen in Ihrer Abwesenheit wie besprochen. Danach erhalten Sie eine Übergabe, und wir rechnen direkt mit der Pflegekasse ab.'],
    ]),
  })}

${ctaBand({ title: 'Sie brauchen eine Pause? <em>Wir vertreten Sie.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir planen die Verhinderungspflege mit Ihnen und helfen beim Antrag an die Pflegekasse.' })}

${faq(FAQ, { title: 'Fragen zur <em>Verhinderungspflege.</em>', lead: 'Antworten auf das, was pflegende Angehörige uns zur Ersatzpflege am häufigsten fragen.' })}

${articleTeaser('pflegegrad-pflegeleistungen')}

${related(['grundpflege', 'hauswirtschaft', 'pflegeberatung-37-3'])}

${cityBand('Verhinderungspflege zu Hause in')}
`,
};
