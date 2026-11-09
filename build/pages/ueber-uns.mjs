import { pageHero, section, split, cards, facts, ticks, ctaBand, cityBand, icon, ORG_REF, SITE } from '../lib.mjs';

/* Leitung – Zitate vom bisherigen Internetauftritt (vor dem Start vom Kunden bestätigen lassen) */
const LEADERS = [
  { name: 'Jakob Funk', role: 'Inhaber', initials: 'JF', quote: 'Als ambulanter Pflegedienst setzen wir uns mit Herz und Kompetenz dafür ein, unseren Kundinnen und Kunden ein würdevolles und selbstbestimmtes Leben in ihrer vertrauten Umgebung zu ermöglichen.' },
  { name: 'Olga Speiser', role: 'Pflegedienstleitung', initials: 'OS', quote: 'Als Pflegedienstleitung ist es mir ein persönliches Anliegen, unseren Kundinnen und Kunden eine qualitativ hochwertige und einfühlsame Pflege in ihrer vertrauten Umgebung zu bieten.' },
  { name: 'Olga Janke', role: 'Koordination und Verwaltung', initials: 'OJ', quote: 'Ich sorge für eine reibungslose Organisation, damit sich unsere Pflegekräfte voll auf die Betreuung unserer Kundinnen und Kunden konzentrieren können.' },
];

const VALUES = [
  'Menschenwürde und gegenseitiger Respekt sind die Grundlage unseres Handelns.',
  'Wir richten unsere Arbeit nach den Bedürfnissen und Wünschen unserer Kundinnen und Kunden.',
  'Wir fordern und fördern die Qualifikation und Weiterentwicklung aller Mitarbeitenden.',
  'Wir verbessern unsere Leistung und Qualität kontinuierlich.',
  'Das Vertrauen unserer Kundinnen und Kunden zu gewinnen und zu bewahren, liegt uns am Herzen.',
  'Wir begegnen neuen Herausforderungen offen und mit Kreativität.',
  'Soziale, ökologische und wirtschaftliche Aspekte leiten unser Denken und Handeln.',
  'Wir engagieren uns über unsere eigenen Aufgaben hinaus für das Gemeinwohl.',
  'Gute Zusammenarbeit und offene Kommunikation sind der Schlüssel zu unserem Erfolg.',
];

const quoteCard = (l) => `<li class="quote-card" data-reveal>
            <p>„${l.quote}“</p>
            <footer><span class="member__avatar" aria-hidden="true">${l.initials}</span><span><strong>${l.name}</strong><small>${l.role}</small></span></footer>
          </li>`;

export default {
  path: '/ueber-uns/',
  title: 'Über uns – Ambulanter Pflegedienst Funk, Hörstel',
  description: 'Seit 2011 ambulante Pflege mit Herz und Verstand: Lernen Sie den Pflegedienst Funk aus Hörstel kennen – unser Team, unser Leitbild und die Bezugspflege.',
  type: 'about',
  crumbs: [['Über uns']],
  heroImage: 'warum',
  ogImage: 'warum',
  schema: [{ '@type': 'AboutPage', '@id': `${SITE}/ueber-uns/#about`, url: `${SITE}/ueber-uns/`, name: 'Über den Pflegedienst Funk', about: ORG_REF }],
  body: `${pageHero({
    crumbs: [['Über uns']],
    eyebrow: 'Über uns · Seit 2011 in Hörstel',
    title: 'Über den <em>Pflegedienst Funk.</em>',
    lead: 'Wir sind ein regionaler ambulanter Pflegedienst aus Hörstel. Seit 2011 begleiten wir Menschen, die zu Hause Unterstützung brauchen&nbsp;– und ihre Familien. Persönlich, verlässlich und mit festen Ansprechpartnern.',
    image: 'warum',
    imageAlt: 'Pflegekraft des Pflegedienstes Funk wird an der Haustür von einem älteren Herrn freundlich begrüßt',
    mediaClass: 'pos-top',
    actions: `<a class="btn btn--accent btn--lg" href="#kontakt">Kennenlernen vereinbaren ${icon('arrow')}</a><a class="btn btn--outline btn--lg" href="/leistungen/">Unsere Leistungen</a>`,
    checks: ['Vertragspartner aller Kranken- und Pflegekassen', 'Mitglied im Deutschen Berufsverband für Pflegeberufe (DBfK)'],
  })}

${section({
    id: 'wer-wir-sind',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Wer wir sind</p>
            <h2>Pflege ist mehr als eine Dienstleistung&nbsp;– <em>sie ist eine Leistung von Mensch zu&nbsp;Mensch.</em></h2>
            <p class="lead">Zuwendung, Vertrautheit, Aufmerksamkeit und ein feines Gespür dafür, was ein Mensch wirklich braucht: Das gehört für uns zur Pflege dazu.</p>
            <p>Der Ambulante Pflegedienst Funk wurde 2011 in Hörstel gegründet. Seitdem sind wir für Pflegebedürftige und ihre Angehörigen ein verlässlicher Partner&nbsp;– in Hörstel, Mettingen, Recke, Ibbenbüren, Rheine und den umliegenden Orten.</p>
            <p>Wir versorgen Menschen jeden Alters: nach einer Operation, bei chronischer Krankheit, mit einer Behinderung oder wenn im Alter die Kräfte nachlassen. Unser Ziel ist immer dasselbe&nbsp;– ein würdevolles und möglichst selbstbestimmtes Leben in den eigenen vier Wänden.</p>
            <p>Dafür bieten wir das ganze Spektrum der ambulanten Pflege: von der <a href="/leistungen/grundpflege/">Grundpflege</a> über die medizinische <a href="/leistungen/behandlungspflege/">Behandlungspflege</a> und das professionelle <a href="/leistungen/wundversorgung/">Wundmanagement</a> bis zur <a href="/leistungen/hauswirtschaft/">Hilfe im Haushalt</a>.</p>`,
      aside: `<aside data-reveal>
            ${facts([
    ['calendar', 'Seit 2011', 'Erfahrung in der ambulanten Pflege'],
    ['shield', 'Alle Kassen', 'direkte Abrechnung, keine Vorkasse'],
    ['users', 'Bezugspflege', 'feste Pflegekräfte für jeden Menschen'],
    ['award', 'DBfK-Mitglied', 'Deutscher Berufsverband für Pflegeberufe'],
  ])}
          </aside>`,
    }),
  })}

    <section class="section dark-panel" id="pflegeleitbild" aria-labelledby="leitbild-title">
      <svg class="curve curve--top curve--navy" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90V70C400 20 960 0 1440 30V90Z"/></svg>
      <div class="container">
        <header class="section-head" data-reveal>
          <p class="eyebrow eyebrow--light">Unser Pflegeleitbild</p>
          <h2 id="leitbild-title">Vertrautheit gibt <em>Vertrauen.</em></h2>
          <p class="section-head__lead section-head__lead--light">Die vertraute Umgebung, vertraute Menschen und vertraute Gewohnheiten: Wir tun alles dafür, dass unsere Kundinnen und Kunden trotz körperlicher Einschränkungen ein erfülltes Leben zu Hause führen können. Diese Grundsätze leiten uns jeden Tag.</p>
        </header>
        <ol class="values" role="list">
          ${VALUES.map((v) => `<li data-reveal>${v}</li>`).join('\n          ')}
        </ol>
      </div>
      <svg class="curve curve--bottom curve--white" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90V40C500 88 1000 80 1440 20V90Z"/></svg>
    </section>

${section({
    id: 'bezugspflege',
    body: split({
      reverse: true,
      image: 'hero',
      alt: 'Bezugspflegekraft des Pflegedienstes Funk misst bei einer vertrauten Kundin zu Hause den Blutdruck',
      tall: true,
      mediaCls: 'pos-top',
      text: `
            <p class="eyebrow">So arbeiten wir</p>
            <h2>Bezugspflege: <em>vertraute Gesichter statt ständiger Wechsel.</em></h2>
            <p>Beim Pflegedienst Funk hat jeder Mensch, den wir versorgen, eine feste Bezugspflegekraft. Sie kennt die Gewohnheiten, Wünsche und Besonderheiten genau&nbsp;– und ist für Sie und Ihre Angehörigen erreichbar.</p>
            <p>Möglich macht das eine durchdachte Dienst- und Tourenplanung. Sie stellt nicht nur die bestmögliche Betreuung in den Mittelpunkt, sondern sorgt auch für gute Arbeitsbedingungen in unserem Team. Denn wer zufrieden arbeitet, pflegt mit Ruhe und Aufmerksamkeit.</p>
            ${ticks([
    'Feste Pflegekräfte, die Ihre Bedürfnisse kennen',
    'Verlässliche Zeiten durch strukturierte Tourenplanung',
    'Kurze Wege in der Kommunikation&nbsp;– auch für Angehörige',
    'Kontinuität, die Vertrauen schafft',
  ])}`,
    }),
  })}

${section({
    id: 'leitung',
    cream: true,
    eyebrow: 'Unsere Leitung',
    title: 'Menschen, die für Sie <em>Verantwortung übernehmen.</em>',
    lead: 'Hinter jeder guten Pflege steht eine gute Organisation. Diese Menschen sorgen dafür, dass bei uns alles zuverlässig ineinandergreift.',
    body: `<ul class="quotes" role="list">
          ${LEADERS.map(quoteCard).join('\n          ')}
        </ul>`,
  })}

${section({
    id: 'team',
    eyebrow: 'Unser Team',
    title: 'Vielfalt, die <em>überzeugt.</em>',
    lead: 'Bei uns arbeitet ein engagiertes Team erfahrener Pflegekräfte. Jede und jeder bringt eigene Stärken und besondere Qualifikationen mit&nbsp;– zusammen decken wir das ganze Spektrum der ambulanten Pflege ab.',
    body: cards([
      ['stetho', 'Examinierte Pflegefachkräfte', 'Gesundheits- und Krankenpflegerinnen und -pfleger für Behandlungspflege und die Planung Ihrer Versorgung.'],
      ['bandage', 'Wundmanagement', 'Speziell weitergebildete Fachkräfte für die Versorgung chronischer und schwer heilender Wunden.'],
      ['clipboard', 'Pflegeberatung', 'Erfahrene Beraterinnen für den Beratungseinsatz nach §&nbsp;37.3&nbsp;SGB&nbsp;XI und alle Fragen rund um Pflegegrad und Leistungen.'],
      ['hands', 'Pflegefachassistenz und Pflegehilfe', 'Qualifizierte Kräfte, die Sie bei der Grundpflege und im Alltag zuverlässig unterstützen.'],
      ['home', 'Hauswirtschaft', 'Hilfe beim Einkaufen, Kochen, Waschen und Putzen&nbsp;– damit der Haushalt nicht zur Last wird.'],
      ['users', 'Verwaltung und Koordination', 'Ihr direkter Draht ins Büro: für Termine, Abrechnung mit den Kassen und alle organisatorischen Fragen.'],
    ]),
  })}

${section({
    id: 'qualitaet',
    cls: 'section--tight',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Qualität &amp; Partner</p>
            <h2>Worauf Sie sich <em>verlassen können.</em></h2>
            <p>Wir sind Vertragspartner aller Kranken- und Pflegekassen und rechnen unsere Leistungen direkt mit ihnen ab. Als Mitglied im Deutschen Berufsverband für Pflegeberufe (DBfK) verpflichten wir uns zu professionellen Standards und bilden unser Team regelmäßig fort.</p>
            <p>Auch an Wochenenden und Feiertagen sind wir für unsere Kundinnen und Kunden da. Auf Wunsch besorgen wir Medikamente und Hilfsmittel und vermitteln weitere Hilfsdienste wie einen Hausnotruf.</p>
          </div>
          <div data-reveal>
            ${ticks([
    'Vertragspartner aller Kranken- und Pflegekassen',
    'Mitglied im DBfK',
    'Regelmäßige Fort- und Weiterbildung',
    'Wochenend- und Feiertagsdienst',
    'Besorgung von Medikamenten und Hilfsmitteln',
    'Vermittlung von Hilfsdiensten und Hausnotruf',
  ])}
          </div>
        </div>`,
  })}

${ctaBand({ title: 'Lernen Sie uns <em>persönlich kennen.</em>', text: 'Ob Sie selbst Unterstützung suchen oder für einen Angehörigen anfragen: Wir nehmen uns Zeit für ein unverbindliches Gespräch&nbsp;– am Telefon, in unserem Büro in Hörstel oder bei Ihnen zu Hause.', button: 'Gespräch vereinbaren' })}

${section({
    id: 'karriere-teaser',
    cls: 'section--tight',
    body: `<div class="career__card" data-reveal>
          <figure class="career__media media media--navy"><img src="/assets/img/karriere-1000.webp" srcset="/assets/img/karriere-640.webp 640w, /assets/img/karriere-1000.webp 1000w, /assets/img/karriere-1400.webp 1400w" sizes="(min-width: 1024px) 42vw, 100vw" width="1400" height="1400" loading="lazy" alt="Zwei Pflegekräfte des Pflegedienstes Funk auf dem Weg zum Dienstwagen"></figure>
          <div class="career__text">
            <p class="eyebrow eyebrow--light">Karriere</p>
            <h2>Teil unseres Teams <em>werden?</em></h2>
            <p>Wir suchen Menschen, die Pflege mit Herz und Verstand leben&nbsp;– examinierte Pflegefachkräfte ebenso wie Pflegehelferinnen und -helfer.</p>
            <div class="career__actions">
              <a class="btn btn--accent" href="/karriere/">Zu den Stellenangeboten ${icon('arrow')}</a>
              <a class="btn btn--ghost-light" href="/karriere/#initiativbewerbung">Initiativ bewerben</a>
            </div>
          </div>
        </div>`,
  })}

${cityBand('Wir sind für Sie da in')}
`,
};
