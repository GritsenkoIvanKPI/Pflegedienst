/* Lokale Landingpages: Pflegedienst in Hörstel, Mettingen, Recke, Ibbenbüren und Rheine.
   Gemeinsam sind nur die Bausteine – jeder Text ist pro Ort einzeln geschrieben. */
import { intro, pageHero, section, split, cards, facts, callout, steps, ticks, faq, cityBand, ctaBand, office, ORG_REF, SITE, SERVICES, city } from '../lib.mjs';

/* Alle Leistungen als verlinkte Karten mit Ortsbezug ("Grundpflege in Rheine") */
/* "Kompressionsversorgung in Ibbenbüren" passt bei 4 Spalten (1140–1250 px) nicht in die Karte – daher kürzer */
const CARD_NAME = { kompressionsversorgung: 'Kompression' };
const svcCards = (c, texts) => cards(SERVICES.map((s) => [s.icon, `${CARD_NAME[s.slug] ?? s.name} in ${c.name}`, texts[s.slug], `/leistungen/${s.slug}/`]), 4);

const crumbsFor = (c) => [['Einsatzgebiete', '/#einsatzgebiete'], [c.name]];

const serviceSchema = (c) => ({
  '@type': 'Service',
  '@id': `${SITE}/${c.slug}/#service`,
  name: `Ambulante Pflege in ${c.name}`,
  serviceType: 'Ambulante Pflege',
  provider: ORG_REF,
  areaServed: [{ '@type': 'City', name: c.name }, ...c.parts.map((p) => ({ '@type': 'Place', name: p }))],
  url: `${SITE}/${c.slug}/`,
});

/* ======================================================================
   HÖRSTEL – Heimatbasis, kurze Wege, Büro vor Ort
   ====================================================================== */
const HOE = city('pflegedienst-hoerstel');
const HOE_FAQ = [
  ['Versorgt der Pflegedienst Funk auch Dreierwalde, Bevergern und Riesenbeck?', 'Ja. Alle Ortsteile von Hörstel gehören zu unserem Einsatzgebiet. Sie erhalten dort dieselben Leistungen wie in der Kernstadt, und Ihre Ansprechpartner sitzen in unserem Büro an der Bahnhofstraße&nbsp;33.'],
  ['Wie schnell kann die Pflege in Hörstel beginnen?', 'Das hängt von Ihrem Bedarf und unserer Tourenplanung ab. Rufen Sie uns an&nbsp;– wir sagen Ihnen offen, ab wann wir Sie versorgen können. Gerade nach einem Krankenhausaufenthalt bemühen wir uns um einen zügigen Start.'],
  ['Kann ich persönlich im Büro vorbeikommen?', 'Gern. Unser Büro in der Bahnhofstraße&nbsp;33 ist montags bis freitags von 8 bis 14&nbsp;Uhr besetzt. Damit sich jemand in Ruhe Zeit für Sie nehmen kann, rufen Sie am besten vorher kurz an.'],
  ['Wer bezahlt die ambulante Pflege?', 'Behandlungspflege auf ärztliche Verordnung zahlt die Krankenkasse, einen Pflegegrad brauchen Sie dafür nicht. Grundpflege und Hauswirtschaft werden ab Pflegegrad&nbsp;2 über die Pflegekasse abgerechnet. Wir rechnen direkt mit Ihrer Kasse ab und erklären Ihnen vorab, was auf Sie zukommt.'],
  ['Habe ich feste Ansprechpartner?', 'Ja. Durch die Bezugspflege kommen möglichst immer dieselben Pflegekräfte zu Ihnen. Für Fragen zur Planung oder Abrechnung erreichen Sie unser Büro unter 05459&nbsp;5869825.'],
];

const hoerstel = {
  path: '/pflegedienst-hoerstel/',
  title: 'Pflegedienst Hörstel | Ambulante Pflege Funk',
  description: 'Ihr ambulanter Pflegedienst in Hörstel, Bevergern, Riesenbeck und Dreierwalde: Grundpflege, Behandlungspflege und Beratung aus dem Ort. Tel. 05459 5869825',
  type: 'city',
  nav: 'orte',
  crumbs: crumbsFor(HOE),
  heroImage: 'warum',
  ogImage: 'warum',
  faq: HOE_FAQ,
  schema: [serviceSchema(HOE)],
  body: `${pageHero({
    crumbs: crumbsFor(HOE),
    eyebrow: 'Einsatzgebiet · Hörstel',
    title: 'Ambulanter Pflegedienst in <em>Hörstel.</em>',
    lead: 'Seit 2011 ist der Pflegedienst Funk in Hörstel zu Hause. Von unserem Büro in der Bahnhofstraße&nbsp;33 fahren wir zu Ihnen nach Hörstel, Bevergern, Riesenbeck und Dreierwalde&nbsp;– mit kurzen Wegen und vertrauten Gesichtern.',
    image: 'warum',
    imageAlt: 'Pflegekraft des Pflegedienstes Funk wird von einem älteren Herrn an seiner Haustür begrüßt',
    mediaClass: 'pos-top',
    checks: ['Büro direkt in Hörstel, Mo–Fr 8–14&nbsp;Uhr', 'Vertragspartner aller Kranken- und Pflegekassen'],
  })}

${section({
    id: 'vor-ort',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Ihr Pflegedienst vor Ort</p>
            <h2>Pflege aus Hörstel <em>für Hörstel.</em></h2>
            <p class="lead">Der Pflegedienst Funk ist ein ambulanter Pflegedienst mit Sitz in Hörstel. Wir pflegen Menschen dort, wo sie sich am wohlsten fühlen: in der eigenen Wohnung, im eigenen Haus, in der vertrauten Nachbarschaft.</p>
            <p>Häusliche Pflege in Hörstel bedeutet für uns mehr als pünktliche Einsätze. Weil unser Büro im Ort liegt, sind die Wege kurz&nbsp;– für unsere Pflegekräfte ebenso wie für Sie, wenn Sie einmal persönlich vorbeikommen und Unterlagen besprechen möchten.</p>
            <p>Wir arbeiten nach dem Prinzip der <strong>Bezugspflege</strong>: Ein festes, kleines Team kennt Sie und Ihre Gewohnheiten. Unsere Dienst- und Tourenplanung sorgt dafür, dass möglichst dieselben Pflegekräfte zu Ihnen kommen.</p>
            <p>Ambulante Pflege ist dabei nicht nur etwas für das hohe Alter. Wir unterstützen auch nach einer Operation, bei chronischen Erkrankungen oder mit einer Behinderung&nbsp;– so lange, wie Sie Hilfe brauchen.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['pin', 'Bahnhofstraße 33', 'unser Büro in 48477 Hörstel'],
    ['calendar', 'Seit 2011', 'ambulante Pflege in der Region'],
    ['users', 'Bezugspflege', 'feste Pflegekräfte für Sie'],
    ['clock', 'Auch am Wochenende', 'und an Feiertagen im Einsatz'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'leistungen',
    cream: true,
    eyebrow: 'Leistungen in Hörstel',
    title: 'Ambulante Pflege in Hörstel&nbsp;– <em>alles aus einer Hand.</em>',
    lead: 'Von der täglichen Körperpflege bis zur ärztlich verordneten Behandlung: Diese Leistungen bringen wir zu Ihnen nach Hause.',
    body: svcCards(HOE, {
      grundpflege: 'Waschen, Anziehen, Mobilisation und Hilfe beim Essen&nbsp;– in Ihrem Tempo und mit Respekt vor Ihren Gewohnheiten.',
      behandlungspflege: 'Injektionen, Blutzucker- und Blutdruckkontrolle oder Verbände auf ärztliche Verordnung. Die Krankenkasse zahlt.',
      wundversorgung: 'Fachkundiges Wundmanagement für chronische und frische Wunden, dokumentiert und mit der Arztpraxis abgestimmt.',
      hauswirtschaft: 'Einkaufen, Wäsche, Ordnung und Mahlzeiten&nbsp;– damit der Haushalt nicht zur Last wird.',
      'pflegeberatung-37-3': 'Der regelmäßige Beratungsbesuch für Pflegegeld-Empfänger, gern bei Ihnen zu Hause.',
      verhinderungspflege: 'Wir springen ein, wenn pflegende Angehörige Urlaub machen, krank sind oder eine Pause brauchen.',
      medikamentengabe: 'Ihre Medikamente richtig gestellt und pünktlich verabreicht&nbsp;– ein Teil der Behandlungspflege.',
      kompressionsversorgung: 'Kompressionsstrümpfe und -verbände fachgerecht an- und ausziehen, jeden Tag zuverlässig.',
    }),
  })}

${section({
    id: 'ortsteile',
    eyebrow: 'Unsere Ortsteile',
    title: 'Pflegedienst für Bevergern, <em>Riesenbeck und Dreierwalde.</em>',
    lead: 'Hörstel ist mehr als die Kernstadt. Auch in den Ortsteilen sind wir unterwegs&nbsp;– mit denselben Leistungen und denselben Ansprechpartnern.',
    body: cards([
      ['pin', 'Pflegedienst Bevergern', 'Ob Grundpflege am Morgen oder Medikamente am Abend: Unsere Touren führen auch nach Bevergern. Sie erreichen uns über dieselbe Telefonnummer wie in Hörstel.'],
      ['route', 'Pflegedienst Riesenbeck', 'In Riesenbeck begleiten wir Menschen, die nach einem Krankenhausaufenthalt Hilfe brauchen, ebenso wie Familien, die eine Pflege langfristig planen.'],
      ['home', 'Pflegedienst Dreierwalde', 'Auch Dreierwalde gehört zu unserem Einsatzgebiet. Gerade in kleineren Orten ist es uns wichtig, dass Sie Ihre Pflegekräfte persönlich kennen.'],
    ]),
  })}

${office({ eyebrow: 'Unser Standort', title: 'Ihr Pflegedienst <em>vor Ort in Hörstel.</em>', text: 'Von hier aus planen wir alle Touren. Sie möchten uns kennenlernen oder Unterlagen vorbeibringen? Besuchen Sie uns gern&nbsp;– am besten nach kurzer telefonischer Absprache.' })}

${section({
    id: 'warum',
    body: split({
      reverse: true,
      image: 'hero',
      alt: 'Pflegefachkraft des Pflegedienstes Funk mit Pflegetasche vor dem Dienstwagen in einer Wohnstraße in Hörstel',
      mediaCls: 'pos-top',
      text: `
            <p class="eyebrow">Warum Pflegedienst Funk</p>
            <h2>Kurze Wege, <em>feste Gesichter.</em></h2>
            <p>Viele Familien suchen bewusst einen Pflegedienst aus dem eigenen Ort. Das hat ganz praktische Vorteile für Sie:</p>
            ${ticks([
    'Persönliche Gespräche im Büro an der Bahnhofstraße&nbsp;– montags bis freitags von 8 bis 14&nbsp;Uhr',
    'Feste Bezugspflegekräfte statt ständig wechselnder Gesichter',
    'Examinierte Pflegefachkräfte und eine Fachkraft für Wundmanagement im Team',
    'Direkte Abrechnung mit allen Kranken- und Pflegekassen',
    'Hilfe bei Medikamenten und Hilfsmitteln, Vermittlung von Hausnotruf und Hilfsdiensten',
  ])}`,
    }),
  })}

${ctaBand({ title: 'Pflege in Hörstel gesucht? <em>Wir sind ganz in der Nähe.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Auf Wunsch kommen wir zu einem ersten Gespräch zu Ihnen nach Hause.' })}

${faq(HOE_FAQ, { title: 'Fragen zur Pflege <em>in Hörstel.</em>', lead: 'Was Familien aus Hörstel und den Ortsteilen uns am häufigsten fragen.' })}

${cityBand('Weitere Einsatzgebiete')}
`,
};

/* ======================================================================
   METTINGEN – kleine Gemeinde, persönliche Nähe, Hauswirtschaft + Beratungseinsatz
   ====================================================================== */
const MET = city('pflegedienst-mettingen');
const MET_FAQ = [
  ['Fahren Sie auch nach Schlickelde und Espel?', 'Ja. Neben dem Ortskern von Mettingen versorgen wir auch Schlickelde und Espel. Sprechen Sie uns einfach an&nbsp;– wir klären, wie wir Ihre Besuche in unsere Touren einplanen.'],
  ['Ab welchem Pflegegrad hilft der Pflegedienst im Haushalt?', 'Den Entlastungsbetrag der Pflegekasse können Sie schon ab Pflegegrad&nbsp;1 für hauswirtschaftliche Hilfe nutzen. Ab Pflegegrad&nbsp;2 kommen die Pflegesachleistungen hinzu. Die genauen Beträge teilt Ihnen Ihre Pflegekasse mit&nbsp;– wir rechnen es auch gern für Sie aus.'],
  ['Wie schnell kann ein Pflegedienst in Mettingen starten?', 'Nach Ihrem Anruf vereinbaren wir zeitnah ein Gespräch. Wann die regelmäßigen Besuche beginnen, hängt von Ihrem Bedarf und unserer Tourenplanung ab. Wir sagen Ihnen ehrlich, was möglich ist.'],
  ['Kommen immer dieselben Pflegekräfte?', 'Wir arbeiten mit Bezugspflege: Ein festes, kleines Team ist für Sie zuständig. Bei Urlaub oder Krankheit übernimmt eine Kollegin oder ein Kollege, die oder der Ihre Pflegeplanung kennt.'],
  ['Wer bezahlt den Beratungsbesuch nach §&nbsp;37.3?', 'Die Kosten für den Beratungseinsatz übernimmt Ihre Pflegekasse. Wir rechnen direkt mit ihr ab, für Sie entstehen dafür keine Kosten.'],
];

const mettingen = {
  path: '/pflegedienst-mettingen/',
  title: 'Pflegedienst Mettingen | Ambulante Pflege Funk',
  description: 'Ambulanter Pflegedienst für Mettingen, Schlickelde und Espel: Pflege, Hilfe im Haushalt und Beratungsbesuch nach § 37.3 – feste Pflegekräfte. Rufen Sie an.',
  type: 'city',
  nav: 'orte',
  crumbs: crumbsFor(MET),
  heroImage: 'hauswirtschaft',
  ogImage: 'hauswirtschaft',
  faq: MET_FAQ,
  schema: [serviceSchema(MET)],
  body: `${pageHero({
    crumbs: crumbsFor(MET),
    eyebrow: 'Einsatzgebiet · Mettingen',
    title: 'Ambulanter Pflegedienst in <em>Mettingen.</em>',
    lead: 'Ob im Ortskern, in Schlickelde oder in Espel: Als Pflegedienst für Mettingen unterstützen wir Sie mit Pflege, Hilfe im Haushalt und Beratung&nbsp;– damit Sie in Ihrem gewohnten Umfeld bleiben können.',
    image: 'hauswirtschaft',
    imageAlt: 'Hauswirtschaftskraft des Pflegedienstes Funk bereitet mit einer Seniorin in deren Küche Gemüse zu',
    checks: ['Pflege, Haushalt und Beratung aus einer Hand', 'Direkte Abrechnung mit Ihrer Kasse'],
  })}

${section({
    id: 'naehe',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Ambulante Pflege in Mettingen</p>
            <h2>Vertraute Menschen <em>an Ihrer Seite.</em></h2>
            <p class="lead">In einer Gemeinde wie Mettingen kennt man sich. Diese Nähe soll auch in der Pflege spürbar sein: Wir kommen mit einem festen Team zu Ihnen, das Sie und Ihre Familie kennenlernt.</p>
            <p>Unser Büro liegt in Hörstel im Tecklenburger Land. Von dort planen wir die Touren so, dass Sie in Mettingen verlässlich versorgt werden&nbsp;– zu Zeiten, die zu Ihrem Tagesablauf passen. Dank <strong>Bezugspflege</strong> kommen möglichst immer dieselben Pflegekräfte.</p>
            <p>Häusliche Pflege in Mettingen beginnt oft mit kleinen Dingen: Der Einkauf fällt schwer, das Duschen wird unsicher, die Tabletten geraten durcheinander. Genau hier setzen wir an&nbsp;– früh genug, damit aus kleinen Hürden keine großen werden.</p>
            <p>Wird mehr Hilfe nötig, wächst die Unterstützung mit: von der Hauswirtschaft über die Grundpflege bis zur medizinischen Behandlungspflege nach einer Operation oder bei einer chronischen Erkrankung.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${callout('Erst einmal in Ruhe reden', 'Sie sind unsicher, welche Hilfe passt? Wir beraten Sie kostenlos am Telefon oder bei Ihnen zu Hause und erklären, welche Leistungen Ihre Kasse übernimmt.', 'heart')}
            ${facts([
    ['home', 'Hauswirtschaft', 'Einkauf, Wäsche, Mahlzeiten'],
    ['clipboard', 'Beratungsbesuch', 'nach §&nbsp;37.3&nbsp;SGB&nbsp;XI'],
    ['users', 'Bezugspflege', 'feste Pflegekräfte für Sie'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'ortsteile',
    cream: true,
    eyebrow: 'Schlickelde und Espel',
    title: 'Auch in Schlickelde und Espel <em>für Sie da.</em>',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p>Wer außerhalb des Ortskerns wohnt, hat oft weitere Wege zur Arztpraxis, zur Apotheke oder zum Einkaufen. Gerade dann ist ein Pflegedienst, der ins Haus kommt, eine echte Entlastung.</p>
            <p>Wenn Sie einen Pflegedienst in Schlickelde oder Espel suchen, sind Sie bei uns richtig. Unsere Pflegekräfte bringen auf Wunsch Medikamente aus der Apotheke mit, kümmern sich um Hilfsmittel und behalten im Blick, wie es Ihnen geht.</p>
            <p>Angehörige, die nicht im selben Haus wohnen, wissen so: Es schaut regelmäßig jemand vorbei, der sich auskennt.</p>
          </div>
          <div class="split__aside prose" data-reveal>
            <h3>Was wir dort übernehmen</h3>
            ${ticks([
    'Grund- und Behandlungspflege zu Hause',
    'Besorgung von Medikamenten und Hilfsmitteln',
    'Hauswirtschaftliche Hilfe im Alltag',
    'Vermittlung von Hilfsdiensten und Hausnotruf',
  ])}
          </div>
        </div>`,
  })}

${section({
    id: 'leistungen',
    eyebrow: 'Leistungen in Mettingen',
    title: 'Unsere Leistungen <em>in Mettingen.</em>',
    lead: 'Alles, was Sie für ein gutes Leben zu Hause brauchen&nbsp;– einzeln oder kombiniert.',
    body: svcCards(MET, {
      grundpflege: 'Unterstützung bei der Körperpflege, beim Anziehen und bei der Bewegung&nbsp;– so viel wie nötig, so wenig wie möglich.',
      behandlungspflege: 'Medizinische Pflege auf Verordnung: Spritzen, Blutzuckermessung, Verbände. Ohne Pflegegrad, die Krankenkasse zahlt.',
      wundversorgung: 'Schwer heilende Wunden versorgen wir fachgerecht und halten Ihre Hausarztpraxis auf dem Laufenden.',
      hauswirtschaft: 'Wir kaufen ein, waschen, putzen und kochen mit Ihnen&nbsp;– auch über den Entlastungsbetrag ab Pflegegrad&nbsp;1.',
      'pflegeberatung-37-3': 'Pflichtberatung für Pflegegeld-Empfänger: Wir kommen zu Ihnen und nehmen uns Zeit für Ihre Fragen.',
      verhinderungspflege: 'Fallen Ihre pflegenden Angehörigen aus, übernehmen wir vorübergehend die Versorgung.',
      medikamentengabe: 'Tabletten, Tropfen und Spritzen genau nach Plan&nbsp;– sicher und dokumentiert.',
      kompressionsversorgung: 'Das tägliche An- und Ausziehen der Kompressionsstrümpfe übernehmen wir für Sie.',
    }),
  })}

${section({
    id: 'beratung',
    cls: 'section--tight',
    body: split({
      reverse: true,
      image: 'ratgeber-beratung',
      alt: 'Pflegekraft des Pflegedienstes Funk macht sich im Gespräch mit einem älteren Herrn Notizen',
      text: `
            <p class="eyebrow">Beratungseinsatz in Mettingen</p>
            <h2>Sie beziehen Pflegegeld? <em>Wir beraten Sie zu Hause.</em></h2>
            <p>Viele Familien in Mettingen pflegen ihre Angehörigen selbst und erhalten dafür Pflegegeld. Wer Pflegegeld bezieht, muss in regelmäßigen Abständen einen Beratungsbesuch nach §&nbsp;37.3&nbsp;SGB&nbsp;XI nachweisen.</p>
            <p>Diesen Besuch übernehmen wir gern. Wir schauen gemeinsam, wie die Pflege im Alltag klappt, geben praktische Tipps und zeigen, welche Entlastung Ihnen zusteht. Die Bestätigung für die Pflegekasse erhalten Sie von uns, die Kosten trägt die Pflegekasse.</p>
            <p>Mehr dazu lesen Sie auf unserer Seite zur <a href="/leistungen/pflegeberatung-37-3/">Pflegeberatung nach §&nbsp;37.3</a> und im <a href="/ratgeber/beratungseinsatz-37-3-sgb-xi/">Ratgeber zum Beratungseinsatz</a>.</p>`,
    }),
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So geht es los',
    title: 'So beginnt Ihre Pflege <em>in Mettingen.</em>',
    body: steps([
      ['Anruf oder Nachricht', 'Sie erreichen uns unter 05459&nbsp;5869825 oder über das Kontaktformular. Wir hören zu und klären erste Fragen.'],
      ['Besuch bei Ihnen', 'Wir kommen zu Ihnen nach Hause, lernen Sie kennen und besprechen, welche Hilfe Sie brauchen.'],
      ['Feste Touren', 'Ihre Bezugspflegekräfte kommen zu den vereinbarten Zeiten. Ändert sich Ihr Bedarf, passen wir den Plan gemeinsam an.'],
    ]),
  })}

${faq(MET_FAQ, { title: 'Fragen aus <em>Mettingen.</em>', lead: 'Kurze Antworten auf das, was uns Pflegebedürftige und Angehörige aus Mettingen, Schlickelde und Espel fragen.' })}

${ctaBand({ title: 'Unterstützung in Mettingen? <em>Sprechen Sie uns an.</em>', text: 'Wir nehmen uns Zeit für Ihre Fragen und beraten Sie kostenlos&nbsp;– am Telefon oder bei Ihnen zu Hause.' })}

${cityBand('Weitere Einsatzgebiete')}
`,
};

/* ======================================================================
   RECKE – ländliche Wege, Verlässlichkeit, Angehörige oft nicht vor Ort
   ====================================================================== */
const REC = city('pflegedienst-recke');
const REC_FAQ = [
  ['Versorgen Sie auch Steinbeck, Obersteinbeck und Uffeln?', 'Ja. Diese Orte gehören zu unserem Einsatzgebiet rund um Recke. Rufen Sie uns an, dann besprechen wir, wie wir Ihre Besuche einplanen.'],
  ['Kommt der Pflegedienst auch am Wochenende nach Recke?', 'Ja. Wir haben einen Wochenend- und Feiertagsdienst. Wenn Sie zum Beispiel täglich Medikamente oder Kompressionsstrümpfe brauchen, ist die Versorgung auch samstags, sonntags und an Feiertagen gesichert.'],
  ['Meine Angehörigen wohnen weiter weg. Geht das trotzdem?', 'Ja, das ist häufig so. Auf Wunsch und mit Ihrem Einverständnis halten wir Ihre Angehörigen auf dem Laufenden, stimmen Termine mit ihnen ab und vermitteln bei Bedarf einen Hausnotruf.'],
  ['Wie schnell kann die Pflege in Recke beginnen?', 'Nach Ihrem Anruf melden wir uns zeitnah für ein Erstgespräch. Den Starttermin legen wir gemeinsam fest&nbsp;– abhängig von Ihrem Bedarf und unserer Tourenplanung.'],
  ['Wer zahlt die Pflege zu Hause?', 'Behandlungspflege auf ärztliche Verordnung zahlt die Krankenkasse. Grundpflege und Hauswirtschaft übernimmt ab Pflegegrad&nbsp;2 die Pflegekasse im Rahmen der Pflegesachleistungen. Wir rechnen direkt ab und sagen Ihnen vorher, ob ein Eigenanteil entsteht.'],
];

const recke = {
  path: '/pflegedienst-recke/',
  title: 'Pflegedienst Recke | Ambulante Pflege Funk',
  description: 'Ambulanter Pflegedienst für Recke, Steinbeck, Obersteinbeck und Uffeln: häusliche Pflege mit festen Pflegekräften, auch am Wochenende. Tel. 05459 5869825',
  type: 'city',
  nav: 'orte',
  crumbs: crumbsFor(REC),
  heroImage: 'karriere',
  ogImage: 'karriere',
  faq: REC_FAQ,
  schema: [serviceSchema(REC)],
  body: `${pageHero({
    crumbs: crumbsFor(REC),
    eyebrow: 'Einsatzgebiet · Recke',
    title: 'Ambulanter Pflegedienst in <em>Recke.</em>',
    lead: 'Wir sind Ihr Pflegedienst für Recke, Steinbeck, Obersteinbeck und Uffeln&nbsp;– mit Pflegekräften, die Sie kennen, und einer Planung, auf die Sie sich verlassen können.',
    image: 'karriere',
    imageAlt: 'Zwei Mitarbeitende des Pflegedienstes Funk vor dem Büro in der Bahnhofstraße in Hörstel',
    checks: ['Feste Bezugspflegekräfte', 'Auch am Wochenende und an Feiertagen'],
  })}

${section({
    id: 'zuhause',
    body: split({
      image: 'grundpflege',
      alt: 'Pflegekraft des Pflegedienstes Funk hilft einem älteren Herrn an seinem Bett beim Anziehen',
      text: `
            <p class="eyebrow">Häusliche Pflege in Recke</p>
            <h2>Zu Hause bleiben&nbsp;– <em>auch auf dem Land.</em></h2>
            <p class="lead">Als ambulanter Pflegedienst für Recke sorgen wir dafür, dass Sie in Ihrem eigenen Zuhause gut versorgt sind&nbsp;– auch wenn die nächsten Angehörigen nicht um die Ecke wohnen.</p>
            <p>In ländlichen Gemeinden liegen die Häuser oft weiter auseinander, und nicht jeder hat Familie im Ort. Umso wichtiger ist ein Pflegedienst, der zuverlässig kommt. Unsere Touren starten in Hörstel und sind so geplant, dass wir Sie zu festen Zeiten erreichen.</p>
            <p>Wir pflegen nach dem Prinzip der <strong>Bezugspflege</strong>. Ihre Pflegekräfte kennen Ihre Wohnung, Ihre Vorlieben und Ihre gesundheitliche Situation. Veränderungen fallen ihnen früh auf&nbsp;– und sie stimmen sich bei Bedarf mit Ihrer Hausarztpraxis ab.</p>
            <p>Ambulante Pflege in Recke ist für alle da, die zu Hause Unterstützung brauchen: im Alter, nach einem Unfall oder einer Operation, mit einer chronischen Erkrankung oder einer Behinderung.</p>`,
    }),
  })}

${section({
    id: 'leistungen',
    cream: true,
    eyebrow: 'Leistungen in Recke',
    title: 'Was wir in Recke <em>für Sie tun.</em>',
    lead: 'Pflege, Behandlung und Hilfe im Alltag&nbsp;– wir stellen die Unterstützung so zusammen, wie Sie sie brauchen.',
    body: svcCards(REC, {
      grundpflege: 'Hilfe beim Waschen, Ankleiden, Lagern und Essen&nbsp;– damit der Tag gut beginnt und ruhig endet.',
      behandlungspflege: 'Ärztlich verordnete Pflege wie Injektionen, Blutdruckkontrolle oder Verbandswechsel&nbsp;– abgerechnet mit der Krankenkasse.',
      wundversorgung: 'Ob offenes Bein oder Operationswunde: Unsere Fachkraft für Wundmanagement behält die Heilung im Blick.',
      hauswirtschaft: 'Saubere Wohnung, frische Wäsche, ein gefüllter Kühlschrank: Wir helfen dort, wo es im Alltag hakt.',
      'pflegeberatung-37-3': 'Der vorgeschriebene Beratungsbesuch bei Pflegegeld, mit Zeit für Ihre Fragen und praktischen Tipps.',
      verhinderungspflege: 'Pflegende Angehörige brauchen auch einmal frei. In dieser Zeit übernehmen wir die Pflege.',
      medikamentengabe: 'Wir richten Ihre Medikamente und geben sie zur richtigen Zeit&nbsp;– auch Insulin und andere Spritzen.',
      kompressionsversorgung: 'Kompressionsstrümpfe und -verbände, die richtig sitzen: Wir legen sie morgens an und abends wieder ab.',
    }),
  })}

${section({
    id: 'ortsteile',
    eyebrow: 'Rund um Recke',
    title: 'Auch in Steinbeck, Obersteinbeck <em>und Uffeln.</em>',
    lead: 'Wer etwas abseits wohnt, soll nicht schlechter versorgt sein. Deshalb planen wir die umliegenden Orte fest in unsere Touren ein.',
    body: cards([
      ['pin', 'Pflegedienst Steinbeck', 'Auch in Steinbeck sind unsere Pflegekräfte unterwegs. Sie erhalten dort dieselben Leistungen und dieselbe Bezugspflege wie in Recke selbst.'],
      ['route', 'Pflegedienst Obersteinbeck', 'Etwas außerhalb zu wohnen, ist kein Hindernis für gute Pflege. Wir stimmen die Besuchszeiten so ab, dass sie verlässlich bleiben.'],
      ['home', 'Pflegedienst Uffeln', 'In Uffeln helfen wir bei Pflege und Haushalt und besorgen auf Wunsch Medikamente und Hilfsmittel, damit Ihnen Wege erspart bleiben.'],
    ]),
  })}

${section({
    id: 'warum',
    cream: true,
    body: intro({
      text: `
            <p class="eyebrow">Darauf können Sie sich verlassen</p>
            <h2>Was Sie von uns <em>erwarten können.</em></h2>
            <p>Pflege ist Vertrauenssache. Seit 2011 arbeiten wir als ambulanter Pflegedienst im Kreis Steinfurt und wissen, worauf es Familien ankommt: dass jemand pünktlich kommt, zuhört und mitdenkt.</p>
            <p>Mehr über unser Team und unsere Arbeitsweise lesen Sie auf der Seite <a href="/ueber-uns/">Über uns</a>.</p>`,
      facts: facts([
    ['users', 'Feste Bezugspflege', 'vertraute Gesichter statt Wechsel'],
    ['calendar', 'Wochenende &amp; Feiertage', 'wir sind auch dann für Sie da'],
    ['shield', 'Alle Kassen', 'direkte Abrechnung ohne Papierkram'],
    ['award', 'Mitglied im DBfK', 'Berufsverband für Pflegeberufe'],
    ['pill', 'Besorgungen', 'Medikamente und Hilfsmittel'],
    ['phone', 'Hausnotruf', 'wir vermitteln Notruf und Hilfsdienste'],
  ]),
    }),
  })}

${ctaBand({ title: 'Pflegedienst in Recke gesucht? <em>Rufen Sie uns an.</em>', text: 'Wir besprechen Ihre Situation in Ruhe und sagen Ihnen offen, wie und ab wann wir Sie unterstützen können.' })}

${faq(REC_FAQ, { title: 'Häufige Fragen <em>aus Recke.</em>', lead: 'Antworten für Pflegebedürftige und Familien in Recke und Umgebung.' })}

${cityBand('Weitere Einsatzgebiete')}
`,
};

/* ======================================================================
   IBBENBÜREN – Familien zwischen Beruf und Pflege, Verhinderungspflege
   ====================================================================== */
const IBB = city('pflegedienst-ibbenbueren');
const IBB_FAQ = [
  ['Gehören Bockraden, Dickenberg und Püsselbüren zu Ihrem Einsatzgebiet?', 'Ja. Wir versorgen Ibbenbüren einschließlich dieser Ortsteile. Ihr Angebot und Ihre Ansprechpartner sind dort dieselben wie in der Innenstadt.'],
  ['Ich arbeite Vollzeit. Wie kann der Pflegedienst helfen?', 'Wir übernehmen feste Einsätze, zum Beispiel morgens die Körperpflege und die Medikamente, abends die Hilfe beim Zubettgehen. Auf Wunsch melden wir uns, wenn uns etwas auffällt. So wissen Sie Ihre Angehörigen gut versorgt, während Sie arbeiten.'],
  ['Was ist Verhinderungspflege und wer bezahlt sie?', 'Verhinderungspflege ist die Vertretung, wenn eine private Pflegeperson ausfällt, etwa wegen Urlaub oder Krankheit. Ab Pflegegrad&nbsp;2 beteiligt sich die Pflegekasse an den Kosten. Die genauen Beträge teilt Ihnen Ihre Pflegekasse mit&nbsp;– wir rechnen es gern für Sie aus.'],
  ['Wie schnell kann ein Pflegedienst in Ibbenbüren anfangen?', 'Rufen Sie uns an, sobald absehbar ist, dass Hilfe nötig wird. Wir vereinbaren zeitnah ein Gespräch und nennen Ihnen dann einen realistischen Starttermin, der zu unserer Tourenplanung passt.'],
  ['Haben wir als Familie einen festen Ansprechpartner?', 'Ja. Durch die Bezugspflege kennen Sie Ihr Pflegeteam persönlich. Für Fragen zu Terminen, Leistungen oder Abrechnung ist unser Büro montags bis freitags von 8 bis 14&nbsp;Uhr für Sie da.'],
];

const ibbenbueren = {
  path: '/pflegedienst-ibbenbueren/',
  title: 'Pflegedienst Ibbenbüren | Ambulante Pflege Funk',
  description: 'Ambulanter Pflegedienst in Ibbenbüren, Bockraden, Dickenberg und Püsselbüren: Pflege zu Hause und Entlastung für Angehörige. Kostenlose Beratung: 05459 5869825',
  type: 'city',
  nav: 'orte',
  crumbs: crumbsFor(IBB),
  heroImage: 'beratung-tall',
  ogImage: 'beratung',
  faq: IBB_FAQ,
  schema: [serviceSchema(IBB)],
  body: `${pageHero({
    crumbs: crumbsFor(IBB),
    eyebrow: 'Einsatzgebiet · Ibbenbüren',
    title: 'Ambulanter Pflegedienst in <em>Ibbenbüren.</em>',
    lead: 'Als Pflegedienst für Ibbenbüren, Bockraden, Dickenberg und Püsselbüren pflegen wir Menschen zu Hause&nbsp;– und entlasten Familien, die Beruf und Pflege unter einen Hut bringen müssen.',
    image: 'beratung-tall',
    imageAlt: 'Pflegeberaterin des Pflegedienstes Funk bespricht mit einem älteren Herrn und seiner Tochter Unterlagen am Küchentisch',
    mediaClass: 'pos-top',
    checks: ['Kostenlose Beratung für Angehörige', 'Verhinderungspflege, wenn Sie eine Pause brauchen'],
  })}

${section({
    id: 'alltag',
    body: split({
      reverse: true,
      tall: true,
      mediaCls: 'pos-top',
      image: 'warum',
      alt: 'Pflegekraft des Pflegedienstes Funk wird von einem älteren Herrn an seiner Haustür begrüßt',
      text: `
            <p class="eyebrow">Ambulante Pflege in Ibbenbüren</p>
            <h2>Pflege, die sich nach <em>Ihrem Alltag richtet.</em></h2>
            <p class="lead">Wenn ein Elternteil Hilfe braucht, ändert sich für die ganze Familie viel. Wir übernehmen die häusliche Pflege in Ibbenbüren, damit Sie als Angehörige wieder Luft haben.</p>
            <p>Viele pflegende Angehörige arbeiten selbst, haben Kinder oder wohnen nicht im selben Haushalt. Wir übernehmen die Aufgaben, die Fachwissen oder feste Zeiten brauchen: die Körperpflege am Morgen, die Medikamente, den Verbandswechsel. Den Rest des Tages gestalten Sie so, wie es für Ihre Familie passt.</p>
            <p>Unser Büro sitzt in Hörstel im Tecklenburger Land. Von dort planen wir die Touren nach Ibbenbüren mit festen Zeiten. Durch die <strong>Bezugspflege</strong> kommt möglichst immer dasselbe kleine Team&nbsp;– für Ihre Angehörigen und für Sie eine verlässliche Konstante.</p>
            <p>Pflege zu Hause ist nicht nur eine Frage des Alters. Wir helfen auch nach einem Krankenhausaufenthalt, bei chronischen Erkrankungen oder mit einer Behinderung.</p>`,
    }),
  })}

${section({
    id: 'angehoerige',
    cream: true,
    eyebrow: 'Für pflegende Angehörige',
    title: 'So entlasten wir <em>Ihre Familie.</em>',
    lead: 'Pflege muss nicht allein auf Ihren Schultern liegen. Diese Bausteine lassen sich frei miteinander kombinieren.',
    body: cards([
      ['swap', 'Verhinderungspflege', 'Sie fahren in den Urlaub, werden krank oder brauchen eine Pause? Wir übernehmen die <a href="/leistungen/verhinderungspflege/">Verhinderungspflege</a> stundenweise oder für mehrere Tage.'],
      ['calendar', 'Pflege und Beruf vereinbaren', 'Feste Einsatzzeiten am Morgen oder Abend geben Ihnen Planungssicherheit für den Arbeitstag. Ändert sich etwas, sprechen wir gemeinsam über eine neue Planung.'],
      ['clipboard', 'Beratung und Leistungen', 'Wir erklären, was Ihnen zusteht, helfen beim Kombinieren von Pflegegeld und Sachleistung und führen den <a href="/leistungen/pflegeberatung-37-3/">Beratungseinsatz nach §&nbsp;37.3</a> durch.'],
    ]),
  })}

${section({
    id: 'leistungen',
    eyebrow: 'Leistungen in Ibbenbüren',
    title: 'Ambulante Pflege in Ibbenbüren: <em>unsere Leistungen.</em>',
    lead: 'Jede Leistung können Sie einzeln buchen oder mit anderen kombinieren&nbsp;– wir beraten Sie, was zu Ihrer Situation passt.',
    body: svcCards(IBB, {
      grundpflege: 'Morgens waschen und anziehen, abends ins Bett helfen&nbsp;– feste Zeiten, auf die sich Ihre Familie einstellen kann.',
      behandlungspflege: 'Was die Ärztin oder der Arzt verordnet, setzen wir zu Hause um. Die Kosten trägt die Krankenkasse.',
      wundversorgung: 'Wunden nach Operationen oder chronische Wunden versorgen wir sauber, sicher und dokumentiert.',
      hauswirtschaft: 'Wir übernehmen Einkäufe, Wäsche und Putzen&nbsp;– Zeit, die Sie lieber miteinander verbringen.',
      'pflegeberatung-37-3': 'Der Pflichtbesuch für Pflegegeld-Empfänger, mit ehrlichen Hinweisen, wo Sie sich Arbeit abnehmen lassen können.',
      verhinderungspflege: 'Vertretung, wenn Sie als pflegende Angehörige verhindert sind&nbsp;– ob geplant oder wegen Krankheit.',
      medikamentengabe: 'Wir sorgen dafür, dass Medikamente richtig gestellt und pünktlich eingenommen werden.',
      kompressionsversorgung: 'Kompressionsstrümpfe anzuziehen kostet Kraft. Wir übernehmen das fachgerecht, morgens und abends.',
    }),
  })}

${section({
    id: 'ortsteile',
    cls: 'section--tight',
    eyebrow: 'Bockraden, Dickenberg, Püsselbüren',
    title: 'Auch in Bockraden, Dickenberg <em>und Püsselbüren.</em>',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p>Ibbenbüren hat viele Ortsteile, und Pflege wird überall gebraucht. Wir fahren deshalb nicht nur in die Innenstadt, sondern auch nach Bockraden, Dickenberg und Püsselbüren.</p>
            <p>Wer einen Pflegedienst in Dickenberg, Bockraden oder Püsselbüren sucht, bekommt bei uns dasselbe Angebot wie in der Kernstadt: Grund- und Behandlungspflege, Wundversorgung, Hilfe im Haushalt und Beratung. Ihre Ansprechpartner bleiben dieselben, ganz gleich, wo Sie wohnen.</p>
          </div>
          <div class="split__aside" data-reveal>
            ${callout('Ihr Ort ist nicht genannt?', 'Rufen Sie uns unter 05459&nbsp;5869825 an. Wir prüfen gern, ob wir Sie in unsere Touren aufnehmen können.', 'pin')}
          </div>
        </div>`,
  })}

${section({
    id: 'ablauf',
    cls: 'steps',
    center: true,
    eyebrow: 'So läuft es ab',
    title: 'In drei Schritten <em>zur Entlastung.</em>',
    body: steps([
      ['Gespräch mit der Familie', 'Sie rufen an, wir hören zu. Das Erstgespräch führen wir bei Ihnen zu Hause, auf Wunsch gemeinsam mit allen, die an der Pflege beteiligt sind.'],
      ['Pflegeplan &amp; Kosten', 'Wir besprechen, welche Hilfe sinnvoll ist, und klären, was Pflegekasse und Krankenkasse übernehmen.'],
      ['Start der Pflege', 'Ihr festes Pflegeteam beginnt mit den Besuchen. Über das Team und unser Büro bleiben Sie im Austausch.'],
    ]),
  })}

${faq(IBB_FAQ, { title: 'Fragen von Familien <em>aus Ibbenbüren.</em>', lead: 'Antworten auf die Fragen, die Angehörige uns am häufigsten stellen.' })}

${ctaBand({ title: 'Sie pflegen einen Angehörigen? <em>Wir entlasten Sie.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir beraten Sie kostenlos und finden gemeinsam eine Lösung für Ihre Familie.' })}

${cityBand('Weitere Einsatzgebiete')}
`,
};

/* ======================================================================
   RHEINE – größere Stadt an der Ems, Alleinlebende, Pflege nach dem Krankenhaus
   ====================================================================== */
const RHE = city('pflegedienst-rheine');
const RHE_FAQ = [
  ['Versorgt der Pflegedienst Funk auch Rodde und Altenrheine?', 'Ja. Rodde und Altenrheine gehören ebenso zu unserem Einsatzgebiet wie die Innenstadt von Rheine. Rufen Sie uns an, dann klären wir die Einzelheiten.'],
  ['Kann die Pflege direkt nach der Entlassung aus dem Krankenhaus beginnen?', 'Melden Sie sich am besten schon, bevor Sie entlassen werden. Dann können wir den Start rechtzeitig planen. Wichtig ist eine Verordnung für häusliche Krankenpflege, die die Klinik oder Ihre Hausarztpraxis ausstellt.'],
  ['Ich lebe allein. Was ist, wenn zwischen den Besuchen etwas passiert?', 'Wir vermitteln Ihnen gern einen Hausnotruf, mit dem Sie per Knopfdruck Hilfe rufen können. Außerdem achten Ihre Pflegekräfte bei jedem Besuch darauf, wie es Ihnen geht, und sprechen Veränderungen offen an.'],
  ['Wer bezahlt die häusliche Pflege in Rheine?', 'Das hängt von der Leistung ab. Behandlungspflege auf ärztliche Verordnung zahlt die Krankenkasse, ohne dass Sie einen Pflegegrad brauchen. Grundpflege und Hauswirtschaft rechnen wir ab Pflegegrad&nbsp;2 mit der Pflegekasse ab. Wir sagen Ihnen vorher, ob Kosten für Sie entstehen.'],
  ['Habe ich in Rheine feste Pflegekräfte?', 'Ja. Wir arbeiten mit Bezugspflege, das heißt: Ein kleines, festes Team kommt zu Ihnen. So müssen Sie nicht jedes Mal einem neuen Gesicht erklären, was Sie brauchen.'],
];

const rheine = {
  path: '/pflegedienst-rheine/',
  title: 'Pflegedienst Rheine | Ambulante Pflege Funk',
  description: 'Ambulanter Pflegedienst für Rheine, Rodde und Altenrheine: Pflege zu Hause, Behandlungspflege nach dem Krankenhaus, feste Pflegekräfte. Tel. 05459 5869825',
  type: 'city',
  nav: 'orte',
  crumbs: crumbsFor(RHE),
  heroImage: 'behandlungspflege',
  ogImage: 'behandlungspflege',
  faq: RHE_FAQ,
  schema: [serviceSchema(RHE)],
  body: `${pageHero({
    crumbs: crumbsFor(RHE),
    eyebrow: 'Einsatzgebiet · Rheine',
    title: 'Ambulanter Pflegedienst in <em>Rheine.</em>',
    lead: 'Als Pflegedienst für Rheine, Rodde und Altenrheine kommen wir zu Ihnen nach Hause&nbsp;– für die tägliche Pflege, nach einem Krankenhausaufenthalt oder wenn Sie allein leben und Unterstützung brauchen.',
    image: 'behandlungspflege',
    imageAlt: 'Pflegefachkraft des Pflegedienstes Funk misst bei einem älteren Herrn zu Hause den Blutzucker',
    checks: ['Behandlungspflege auf Verordnung&nbsp;– ohne Pflegegrad', 'Feste Pflegekräfte durch Bezugspflege'],
  })}

${section({
    id: 'stadt',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Ambulante Pflege in Rheine</p>
            <h2>Gut versorgt in der <em>Stadt an der Ems.</em></h2>
            <p class="lead">Viele Menschen in Rheine möchten auch mit Unterstützungsbedarf in ihrer eigenen Wohnung bleiben. Als ambulanter Pflegedienst machen wir das möglich&nbsp;– Tag für Tag, mit einem festen Team.</p>
            <p>Gerade in einer größeren Stadt leben viele Ältere allein, oder die Angehörigen sind beruflich stark eingespannt. Dann ist es gut zu wissen, dass regelmäßig jemand vorbeikommt, der sich auskennt&nbsp;– und der merkt, wenn es Ihnen nicht gut geht.</p>
            <p>Unsere Pflegekräfte fahren von unserem Büro in Hörstel zu Ihnen nach Rheine. Mit <strong>Bezugspflege</strong> und einer festen Tourenplanung sorgen wir dafür, dass Sie Ihr Pflegeteam kennen und die Besuchszeiten verlässlich bleiben.</p>
            <p>Ambulante Pflege richtet sich an alle, die zu Hause Hilfe brauchen&nbsp;– ob im Alter, nach einer Operation, mit einer chronischen Erkrankung oder einer Behinderung.</p>`,
      aside: `<aside class="split__aside" data-reveal>
            ${facts([
    ['stetho', 'Behandlungspflege', 'auf Verordnung, die Kasse zahlt'],
    ['bandage', 'Wundmanagement', 'Fachkraft im Team'],
    ['calendar', 'Auch am Wochenende', 'und an Feiertagen'],
    ['phone', 'Hausnotruf', 'wir vermitteln ihn für Sie'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'krankenhaus',
    cream: true,
    eyebrow: 'Nach dem Krankenhaus',
    title: 'Entlassen&nbsp;– und dann? <em>Wir sind für Sie da.</em>',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p>Nach einem Krankenhausaufenthalt ist vieles anders. Eine Wunde muss versorgt werden, neue Medikamente kommen dazu, die Kraft reicht noch nicht für den Alltag. Wer in Rheine allein lebt, steht dann oft vor der Frage, wie es zu Hause weitergeht.</p>
            <p>Mit einer ärztlichen Verordnung über häusliche Krankenpflege übernehmen wir die medizinische Versorgung: <a href="/leistungen/wundversorgung/">Wundversorgung</a>, Injektionen, <a href="/leistungen/medikamentengabe/">Medikamentengabe</a>, Kontrolle von Blutdruck und Blutzucker. Einen Pflegegrad brauchen Sie dafür nicht. Die Krankenkasse trägt die Kosten, Erwachsene leisten die gesetzliche Zuzahlung.</p>
            ${ticks([
    'Versorgung von Operationswunden',
    'Medikamente richten und verabreichen',
    'Injektionen, z.&nbsp;B. zur Thromboseprophylaxe',
    'Hilfe bei Körperpflege und Mobilisation',
    'Besorgung von Hilfsmitteln',
  ])}
          </div>
          <div class="split__aside" data-reveal>
            ${callout('Unser Tipp', 'Fragen Sie schon vor der Entlassung nach einer Verordnung für häusliche Krankenpflege und rufen Sie uns an. Dann können wir die Versorgung rechtzeitig planen.', 'clipboard')}
          </div>
        </div>`,
  })}

${section({
    id: 'leistungen',
    eyebrow: 'Leistungen in Rheine',
    title: 'Unsere Pflege <em>in Rheine.</em>',
    lead: 'Ob kurzfristig nach der Klinik oder dauerhaft im Alltag: Diese Leistungen bringen wir zu Ihnen nach Hause.',
    body: svcCards(RHE, {
      grundpflege: 'Wir helfen bei Körperpflege, Ankleiden und Bewegung, damit Sie selbstständig in Ihrer Wohnung bleiben können.',
      behandlungspflege: 'Häusliche Krankenpflege nach ärztlicher Verordnung&nbsp;– gerade dann wichtig, wenn Sie aus der Klinik kommen.',
      wundversorgung: 'Operationswunden und chronische Wunden fachkundig versorgt, der Heilungsverlauf sorgfältig dokumentiert.',
      hauswirtschaft: 'Hilfe beim Einkauf, bei der Wäsche und im Haushalt&nbsp;– besonders wertvoll, wenn Sie allein leben.',
      'pflegeberatung-37-3': 'Der Beratungsbesuch nach §&nbsp;37.3&nbsp;SGB&nbsp;XI für alle, die Pflegegeld beziehen und zu Hause gepflegt werden.',
      verhinderungspflege: 'Wir vertreten pflegende Angehörige, wenn sie eine Auszeit brauchen oder verhindert sind.',
      medikamentengabe: 'Neue Medikamente nach der Entlassung? Wir richten sie und achten auf die richtige Einnahme.',
      kompressionsversorgung: 'Fachgerechtes An- und Ausziehen von Kompressionsstrümpfen und Anlegen von Kompressionsverbänden.',
    }),
  })}

${section({
    id: 'ortsteile',
    cls: 'section--tight',
    body: split({
      reverse: true,
      image: 'beratung',
      alt: 'Pflegeberaterin des Pflegedienstes Funk im Gespräch mit einem älteren Herrn und seiner Tochter am Küchentisch',
      text: `
            <p class="eyebrow">Rodde und Altenrheine</p>
            <h2>Auch in Rodde und Altenrheine <em>für Sie da.</em></h2>
            <p>Wir versorgen nicht nur die Innenstadt von Rheine. Auch in Rodde und Altenrheine besuchen unsere Pflegekräfte Menschen, die zu Hause Unterstützung brauchen.</p>
            <p>Wer einen Pflegedienst in Rodde oder Altenrheine sucht, bekommt bei uns dasselbe wie in der Kernstadt: feste Bezugspflegekräfte, alle Leistungen von der Grundpflege bis zur Wundversorgung und eine direkte Abrechnung mit Ihrer Kasse.</p>
            <p>Am Anfang steht immer ein Gespräch&nbsp;– am Telefon oder bei Ihnen zu Hause, gern auch gemeinsam mit Ihren Angehörigen.</p>`,
    }),
  })}

${section({
    id: 'warum',
    eyebrow: 'Warum Pflegedienst Funk',
    title: 'Darauf können Sie <em>sich verlassen.</em>',
    body: `<div data-reveal>${ticks([
      'Seit 2011 ambulante Pflege im Kreis Steinfurt',
      'Feste Pflegekräfte durch Bezugspflege',
      'Examinierte Pflegefachkräfte und eine Fachkraft für Wundmanagement',
      'Mitglied im Deutschen Berufsverband für Pflegeberufe (DBfK)',
      'Wochenend- und Feiertagsdienst',
      'Vertragspartner aller Kranken- und Pflegekassen',
    ], 'ticks--2')}</div>`,
  })}

${faq(RHE_FAQ, { title: 'Fragen zur Pflege <em>in Rheine.</em>', lead: 'Was Pflegebedürftige und Angehörige aus Rheine, Rodde und Altenrheine von uns wissen möchten.' })}

${ctaBand({ title: 'Pflege in Rheine gesucht? <em>Wir beraten Sie gern.</em>', text: 'Rufen Sie uns an oder fordern Sie einen Rückruf an&nbsp;– auch schon vor der Entlassung aus dem Krankenhaus.' })}

${cityBand('Weitere Einsatzgebiete')}
`,
};

export default [hoerstel, mettingen, recke, ibbenbueren, rheine];
