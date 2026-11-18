import { pageHero, section, split, cards, facts, ticks, steps, faq, icon, TEL, PHONE, ORG_REF, SITE } from '../lib.mjs';
import JOBS from '../data/jobs.mjs';

const MAIL = 'info@pflegedienst-funk.de';
const mailto = (subject) => `mailto:${MAIL}?subject=${encodeURIComponent(subject)}`;

const FAQ = [
  ['Brauche ich eine abgeschlossene Pflegeausbildung?', 'Für Stellen als Pflegefachkraft ja. Als Pflegehelferin oder Pflegehelfer und in der Hauswirtschaft ist eine Ausbildung wünschenswert, aber keine Voraussetzung. Wichtiger sind Einfühlungsvermögen, Zuverlässigkeit und Freude am Umgang mit Menschen&nbsp;– das Fachliche bringen wir Ihnen in der Einarbeitung bei.'],
  ['Kann ich in Teilzeit arbeiten?', 'Ja. Wir stimmen die Arbeitszeiten so weit wie möglich auf Ihre persönliche Situation ab&nbsp;– ob Vollzeit, Teilzeit oder mit festen Tagen.'],
  ['Wie läuft die Einarbeitung ab?', 'Sie lernen Ihre Touren und Kundinnen und Kunden Schritt für Schritt kennen, zunächst gemeinsam mit erfahrenen Kolleginnen und Kollegen. Die Pflegedienstleitung steht Ihnen für alle Fragen zur Seite.'],
  ['Was gehört in meine Bewerbung?', 'Ein kurzes Anschreiben, Ihr Lebenslauf und&nbsp;– falls vorhanden&nbsp;– Ihre Abschluss- und Arbeitszeugnisse. Sie können uns die Unterlagen per E-Mail oder per Post schicken. Haben Sie Fragen vorab, rufen Sie uns gern an.'],
  ['Wie schnell melden Sie sich?', 'Wir sichten jede Bewerbung persönlich und melden uns zeitnah bei Ihnen, meist mit einem Vorschlag für ein Kennenlerngespräch.'],
];

const jobList = JOBS.length
  ? `<p class="jobs__count" data-reveal><strong>${JOBS.length} offene Stellen</strong> in Hörstel, Mettingen, Recke, Ibbenbüren und Rheine</p>
        <ul class="vacancies" role="list">
          ${JOBS.map((j) => `<li class="vacancy" data-reveal>
            <div class="vacancy__top">
              <span class="vacancy__icon">${icon(j.icon)}</span>
              <span class="vacancy__cat">${j.category}</span>
            </div>
            <h3 class="vacancy__title">${j.title}</h3>
            <p class="vacancy__text">${j.text}</p>
            <ul class="vacancy__meta" role="list">
              <li>${icon('clock')} ${j.time}</li>
              <li>${icon('pin')} ${j.place}</li>
              <li>${icon('award')} ${j.requirement}</li>
            </ul>
            <div class="vacancy__actions">
              <a class="btn btn--accent" href="/karriere/bewerbung/?stelle=${j.slug}">Jetzt bewerben ${icon('arrow')}</a>
              <a class="vacancy__call" href="${TEL}">${icon('phone')} Fragen? Anrufen</a>
            </div>
          </li>`).join('\n          ')}
        </ul>`
  : `<div class="jobs__empty" data-reveal>
          <h3>Aktuell keine ausgeschriebenen Stellen</h3>
          <p>Wir freuen uns trotzdem über Ihre <a href="#initiativbewerbung">Initiativbewerbung</a>&nbsp;– gute Menschen sind bei uns immer willkommen.</p>
        </div>`;

export default {
  path: '/karriere/',
  title: 'Jobs Pflege Hörstel – Karriere | Pflegedienst Funk GmbH',
  description: 'Jobs in der ambulanten Pflege in Hörstel: Pflegefachkräfte und Pflegehelfer (m/w/d) gesucht. Flexible Arbeitszeiten, faire Vergütung, herzliches Team.',
  type: 'karriere',
  crumbs: [['Karriere']],
  heroImage: 'karriere',
  ogImage: 'karriere',
  formTopic: 'Karriere / Bewerbung',
  faq: FAQ,
  schema: [{ '@type': 'WebPage', '@id': `${SITE}/karriere/#jobs`, name: 'Karriere beim Pflegedienst Funk GmbH', about: ORG_REF }, ...JOBS.map((j) => ({
    '@type': 'JobPosting',
    title: j.title.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&'),
    description: `<p>${j.text.replace(/&nbsp;/g, ' ')}</p><p>${j.requirement}. ${j.time}. Einsatzgebiet: ${j.place}.</p>`,
    datePosted: '2026-11-18',
    employmentType: ['FULL_TIME', 'PART_TIME'],
    hiringOrganization: { '@type': 'Organization', name: 'Ambulanter Pflegedienst Funk GmbH', sameAs: SITE, logo: `${SITE}/assets/img/logo-funk@2x.png` },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', streetAddress: 'Bahnhofstraße 33', postalCode: '48477', addressLocality: 'Hörstel', addressRegion: 'Nordrhein-Westfalen', addressCountry: 'DE' } },
    directApply: false,
  }))],
  body: `${pageHero({
    crumbs: [['Karriere']],
    eyebrow: 'Karriere · Jobs in der Pflege',
    title: 'Karriere in der <em>ambulanten Pflege.</em>',
    lead: 'Sie möchten Pflege mit Herz und Verstand leben&nbsp;– in einem Team, in dem Sie keine Nummer sind? Beim Pflegedienst Funk GmbH in Hörstel arbeiten Sie mit festen Touren, vertrauten Kundinnen und Kunden und Kolleginnen und Kollegen, die zusammenhalten.',
    image: 'karriere',
    imageAlt: 'Zwei Pflegekräfte des Pflegedienstes Funk GmbH auf dem Weg zum Dienstwagen',
    actions: `<a class="btn btn--accent btn--lg" href="#stellen">Zu den Stellenangeboten ${icon('arrow')}</a><a class="btn btn--outline btn--lg" href="/karriere/bewerbung/?stelle=initiativ">Initiativ bewerben</a>`,
    checks: ['Flexible Arbeitszeiten, Voll- oder Teilzeit', 'Faire Vergütung inklusive Zuschlägen und Prämien'],
  })}

${section({
    id: 'arbeitgeber',
    body: split({
      top: true,
      text: `
            <p class="eyebrow">Wir als Arbeitgeber</p>
            <h2>Ein Pflegedienst, der <em>wächst&nbsp;– mit Ihnen.</em></h2>
            <p class="lead">Die Nachfrage nach guter Pflege zu Hause steigt&nbsp;– bei der Pflege und Betreuung kranker und pflegebedürftiger Menschen ebenso wie bei der Hilfe im Haushalt. Deshalb verstärken wir unser Team.</p>
            <p>Seit 2011 sind wir in Hörstel und Umgebung ein verlässlicher Partner für Pflegebedürftige und ihre Familien. Wir arbeiten nach dem Prinzip der Bezugspflege: Sie betreuen feste Kundinnen und Kunden, lernen sie gut kennen und sehen, was Ihre Arbeit bewirkt.</p>
            <p>Bei uns erwartet Sie ein abwechslungsreiches, verantwortungsvolles Arbeitsumfeld&nbsp;– und ein Team, das Hand in Hand arbeitet, sich gegenseitig unterstützt und für eine gute Atmosphäre sorgt.</p>`,
      aside: `<aside data-reveal>
            ${facts([
    ['calendar', 'Seit 2011', 'stabiler, regionaler Arbeitgeber'],
    ['users', 'Bezugspflege', 'feste Touren, vertraute Menschen'],
    ['route', 'Kurze Wege', 'Einsätze rund um Hörstel'],
    ['award', 'DBfK-Mitglied', 'professionelle Pflegestandards'],
  ])}
          </aside>`,
    }),
  })}

${section({
    id: 'angebot',
    cream: true,
    eyebrow: 'Was wir bieten',
    title: 'Gute Gründe, bei uns <em>anzufangen.</em>',
    body: cards([
      ['heart', 'Wertschätzendes Arbeitsumfeld', 'Bei uns sind Sie keine Nummer, sondern ein geschätztes Teammitglied. Ihre Meinung zählt.'],
      ['shield', 'Faire Vergütung', 'Ihre Arbeit wird leistungsgerecht bezahlt&nbsp;– inklusive Zuschlägen, Prämien und attraktiver Zusatzleistungen.'],
      ['clock', 'Flexible Arbeitszeiten', 'Wir wissen, wie wichtig ein gutes Gleichgewicht zwischen Beruf und Privatleben ist, und planen mit Ihnen gemeinsam.'],
      ['award', 'Fort- und Weiterbildung', 'Ob Schulungen oder Weiterbildungen&nbsp;– etwa im Wundmanagement: Wir fördern Ihre berufliche Entwicklung.'],
      ['users', 'Herzliches Team', 'Ein motiviertes Team heißt Sie willkommen und begleitet Sie durch eine gründliche Einarbeitung.'],
      ['route', 'Strukturierte Touren', 'Eine durchdachte Dienst- und Tourenplanung sorgt für verlässliche Abläufe und weniger Stress.'],
    ]),
  })}

${section({
    id: 'stellen',
    eyebrow: 'Aktuelle Stellenangebote',
    title: 'Wir suchen <em>Verstärkung.</em>',
    lead: 'Alle Stellen sind für Frauen, Männer und diverse Menschen gleichermaßen offen. Ihr Einsatzgebiet: Hörstel, Mettingen, Recke, Ibbenbüren, Rheine und Umgebung.',
    body: jobList,
  })}

${section({
    id: 'profil',
    cls: 'section--tight',
    body: `<div class="split split--top">
          <div class="prose" data-reveal>
            <p class="eyebrow">Das bringen Sie mit</p>
            <h2>Herz zählt. <em>Fachwissen auch.</em></h2>
            <p>Wir pflegen Menschen nicht nur professionell, sondern mit Menschlichkeit und Respekt. Wenn Sie das genauso sehen, passen Sie zu uns.</p>
          </div>
          <div data-reveal>
            ${ticks([
    'Freude am Umgang mit Menschen und Einfühlungsvermögen',
    'Eine abgeschlossene Ausbildung in der Pflege&nbsp;– für Pflegehelferinnen und -helfer wünschenswert, aber kein Muss',
    'Teamgeist und Zuverlässigkeit',
    'Die Motivation, Menschen mit Herz und Verstand zu unterstützen',
  ])}
          </div>
        </div>`,
  })}

${section({
    id: 'initiativbewerbung',
    cream: true,
    eyebrow: 'Bewerbung &amp; Initiativbewerbung',
    title: 'So einfach bewerben Sie sich <em>bei uns.</em>',
    lead: 'Keine passende Stelle dabei? Bewerben Sie sich trotzdem&nbsp;– wir freuen uns über Ihre Initiativbewerbung. Für Fragen stehen Ihnen Frau Janke und Frau Speiser gern telefonisch zur Verfügung.',
    body: `${steps([
      ['Online bewerben', 'Über unser <a href="/karriere/bewerbung/">Bewerbungsformular</a>: Lebenslauf und Anschreiben hochladen, fertig. Alternativ per E-Mail oder Post.'],
      ['Kennenlernen', 'Wir melden uns zeitnah und laden Sie zu einem persönlichen Gespräch in unser Büro in Hörstel ein.'],
      ['Willkommen im Team', 'Nach einer gründlichen Einarbeitung übernehmen Sie Ihre eigenen Touren&nbsp;– mit einem Team im Rücken.'],
    ])}
        <ul class="facts facts--apply" role="list" data-reveal>
          <li class="fact"><span class="fact__icon" aria-hidden="true">${icon('mail')}</span><div><strong>Per E-Mail</strong><span><a href="${mailto('Bewerbung')}">${MAIL}</a></span></div></li>
          <li class="fact"><span class="fact__icon" aria-hidden="true">${icon('phone')}</span><div><strong>Telefonisch</strong><span><a href="${TEL}">${PHONE}</a></span></div></li>
          <li class="fact"><span class="fact__icon" aria-hidden="true">${icon('pin')}</span><div><strong>Per Post</strong><span>Ambulanter Pflegedienst Funk GmbH, Bahnhofstraße&nbsp;33, 48477&nbsp;Hörstel</span></div></li>
        </ul>
        <p class="apply__cta" data-reveal><a class="btn btn--accent btn--lg" href="/karriere/bewerbung/?stelle=initiativ">Jetzt online bewerben ${icon('arrow')}</a></p>
        <p class="apply__note" data-reveal>Hinweise zum Umgang mit Ihren Bewerbungsdaten finden Sie in unserer <a href="/datenschutz/">Datenschutzerklärung</a>.</p>`,
  })}

${faq(FAQ, { title: 'Fragen zur <em>Bewerbung.</em>', lead: 'Was Bewerberinnen und Bewerber uns häufig fragen.' })}
`,
};
