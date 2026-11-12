import { pageHero, section, contactFor, office, icon, TEL, PHONE, ORG_REF, SITE } from '../lib.mjs';

const MAIL = 'info@pflegedienst-funk.de';

const LEADERS = [
  { name: 'Olga Speiser', role: 'Pflegedienstleitung', initials: 'OS', text: 'Fragen zur Pflege, zum Pflegegrad und zum Ablauf Ihrer Versorgung.' },
  { name: 'Olga Janke', role: 'Koordination und Verwaltung', initials: 'OJ', text: 'Termine, Abrechnung mit den Kassen und alles Organisatorische.' },
  { name: 'Jakob Funk', role: 'Inhaber', initials: 'JF', text: 'Ihr Ansprechpartner für Anliegen rund um unser Unternehmen.' },
];

export default {
  path: '/kontakt/',
  title: 'Kontakt – Ambulanter Pflegedienst Funk GmbH, Hörstel',
  description: 'Kontakt zum Pflegedienst Funk GmbH in Hörstel: Tel. 05459 5869825, info@pflegedienst-funk.de, Bahnhofstraße 33. Rückruf anfordern – wir melden uns schnell.',
  type: 'kontakt',
  crumbs: [['Kontakt']],
  noContact: true,
  schema: [{ '@type': 'ContactPage', '@id': `${SITE}/kontakt/#contact`, url: `${SITE}/kontakt/`, name: 'Kontakt zum Pflegedienst Funk GmbH', about: ORG_REF }],
  body: `${pageHero({
    crumbs: [['Kontakt']],
    eyebrow: 'Kontakt',
    title: 'Kontakt zum <em>Pflegedienst Funk GmbH.</em>',
    lead: 'Wir sind für alle Fragen rund um die Pflege für Sie da. Rufen Sie uns an, schreiben Sie uns oder besuchen Sie uns in Hörstel&nbsp;– wir beraten Sie persönlich und finden gemeinsam die passende Lösung.',
    compact: true,
    actions: false,
    extra: `<ul class="contact-quick" role="list" data-reveal>
            <li><a class="contact-quick__item" href="${TEL}"><span class="card__icon">${icon('phone')}</span><span><small>Anrufen</small><strong>${PHONE}</strong><em>Mo–Fr 8–14&nbsp;Uhr</em></span></a></li>
            <li><a class="contact-quick__item" href="mailto:${MAIL}"><span class="card__icon">${icon('mail')}</span><span><small>Schreiben</small><strong>${MAIL}</strong><em>Antwort schnellstmöglich</em></span></a></li>
            <li><a class="contact-quick__item" href="https://www.google.com/maps/dir/?api=1&amp;destination=Bahnhofstra%C3%9Fe%2033%2C%2048477%20H%C3%B6rstel" target="_blank" rel="noopener"><span class="card__icon">${icon('pin')}</span><span><small>Besuchen</small><strong>Bahnhofstraße&nbsp;33</strong><em>48477 Hörstel&nbsp;– Route planen</em></span></a></li>
          </ul>`,
  })}

${contactFor({ formTitle: 'Rückruf oder Beratung anfragen', contactTitle: 'Schreiben Sie <em>uns.</em>' })}

${section({
    id: 'ansprechpartner',
    cream: true,
    eyebrow: 'Ihre Ansprechpartner',
    title: 'Persönlich für Sie <em>erreichbar.</em>',
    lead: 'Bei uns landen Sie nicht in einer Warteschleife. Sie sprechen mit Menschen, die Ihre Situation kennen und sich kümmern.',
    body: `<ul class="team team--3" role="list">
          ${LEADERS.map((l) => `<li class="member member--stack" data-reveal>
            <span class="member__avatar" aria-hidden="true">${l.initials}</span>
            <span><strong>${l.name}</strong><small>${l.role}</small><span class="member__text">${l.text}</span></span>
          </li>`).join('\n          ')}
        </ul>`,
  })}

${office({ eyebrow: 'Anfahrt', title: 'So finden <em>Sie uns.</em>', text: 'Unser Büro liegt in der Bahnhofstraße&nbsp;33 in Hörstel. Für ein persönliches Gespräch besuchen Sie uns gern&nbsp;– am besten nach kurzer telefonischer Absprache. Telefax: 05459&nbsp;5869826.' })}
`,
};
