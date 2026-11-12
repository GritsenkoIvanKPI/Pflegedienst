import fs from 'fs';
import path from 'path';
import { pageHero, ROOT } from '../lib.mjs';

/* Rechtstexte – Angaben aus dem bisherigen Internetauftritt übernommen.
   Vor dem Start vom Kunden prüfen lassen (insbesondere: Rechtsform GmbH, Geschäftsführung, Handelsregister, USt-IdNr., Hosting). */

const DS = fs.readFileSync(path.join(ROOT, 'build/content/datenschutz.html'), 'utf8');

const impressum = {
  path: '/impressum/',
  title: 'Impressum – Ambulanter Pflegedienst Funk GmbH',
  description: 'Impressum des Ambulanten Pflegedienstes Funk GmbH, Bahnhofstraße 33, 48477 Hörstel: Anbieterkennzeichnung, Kontakt, Berufsbezeichnung und Verantwortliche.',
  type: 'legal',
  crumbs: [['Impressum']],
  noContact: true,
  body: `${pageHero({
    crumbs: [['Impressum']],
    eyebrow: 'Rechtliches',
    title: 'Impressum',
    lead: 'Angaben gemäß §&nbsp;5 Digitale-Dienste-Gesetz (DDG).',
    compact: true,
    actions: false,
  })}

    <section class="section legal" aria-label="Impressum">
      <div class="container">
        <div class="legal-cards">
          <div data-reveal>
            <h2>Anbieter</h2>
            <p><strong>Jakob Funk</strong><br>Ambulanter Pflegedienst Funk GmbH<br>Bahnhofstraße&nbsp;33<br>48477 Hörstel</p>
          </div>
          <div data-reveal>
            <h2>Kontakt</h2>
            <p>Telefon: <a href="tel:+4954595869825">05459&nbsp;5869825</a><br>Telefax: 05459&nbsp;5869826<br>E-Mail: <a href="mailto:info@pflegedienst-funk.de">info@pflegedienst-funk.de</a></p>
          </div>
          <div data-reveal>
            <h2>Institutionskennzeichen</h2>
            <p>IK 460&nbsp;556&nbsp;488</p>
          </div>
          <div data-reveal>
            <h2>Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §&nbsp;27&nbsp;a Umsatzsteuergesetz: Der Antrag wurde gestellt und wird ergänzt, sobald die Nummer vorliegt.</p>
          </div>
        </div>

        <div class="prose" data-reveal>
          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>Berufsbezeichnung: Verantwortlich leitende Pflegefachkraft gemäß SGB&nbsp;XI<br>Verliehen in: Deutschland</p>

          <h2>Berufsverband</h2>
          <p>Mitglied im Deutschen Berufsverband für Pflegeberufe (DBfK).</p>

          <h2>Gewerbeanmeldung</h2>
          <p>Die Gewerbeerlaubnis nach §&nbsp;2 GewA wurde am 01.02.2018 von folgender Stelle erteilt: Stadt Hörstel.</p>

          <h2>Redaktionell verantwortlich</h2>
          <p>Jakob Funk, Bahnhofstraße&nbsp;33, 48477 Hörstel</p>

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <h2>Zentrale Kontaktstelle nach dem Digital Services Act&nbsp;– DSA (Verordnung (EU) 2022/2065)</h2>
          <p>Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art.&nbsp;11, 12 DSA erreichen Sie wie folgt:</p>
          <p>E-Mail: <a href="mailto:info@pflegedienst-funk.de">info@pflegedienst-funk.de</a><br>Telefon: <a href="tel:+4954595869825">05459&nbsp;5869825</a></p>
          <p>Sonstige Kontaktwege: Ambulanter Pflegedienst Funk GmbH, Bahnhofstraße&nbsp;33, 48477 Hörstel</p>
          <p>Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch.</p>

          <h2>Bildnachweis</h2>
          <p>Die Fotos auf dieser Website sind Symbolbilder.</p>
        </div>
      </div>
    </section>
`,
};

const datenschutz = {
  path: '/datenschutz/',
  title: 'Datenschutzerklärung – Pflegedienst Funk GmbH',
  description: 'Datenschutzerklärung des Ambulanten Pflegedienstes Funk GmbH: Welche Daten wir verarbeiten, wofür wir sie nutzen und welche Rechte Sie haben – verständlich erklärt.',
  type: 'legal',
  crumbs: [['Datenschutz']],
  noContact: true,
  body: `${pageHero({
    crumbs: [['Datenschutz']],
    eyebrow: 'Rechtliches',
    title: 'Datenschutzerklärung',
    lead: 'Der Schutz Ihrer persönlichen Daten ist uns wichtig. Hier erfahren Sie, welche Daten beim Besuch dieser Website verarbeitet werden und welche Rechte Sie haben.',
    compact: true,
    actions: false,
  })}

    <section class="section legal" aria-label="Datenschutzerklärung">
      <div class="container">
        <div class="prose">
${DS}
        </div>
      </div>
    </section>
`,
};

export default [impressum, datenschutz];
