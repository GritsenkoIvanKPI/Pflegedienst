import { pageHero, icon, TEL, PHONE } from '../lib.mjs';
import JOBS from '../data/jobs.mjs';

/* Online-Bewerbung: Formular mit getrennten Uploads, Versand per PHP (karriere/bewerbung/senden.php) */
const SOURCES = ['Google / Internetsuche', 'Social Media', 'Empfehlung von Bekannten', 'Jobportal', 'Zeitung / Anzeige', 'Unser Dienstwagen / vor Ort', 'Sonstiges'];
const ACCEPT = '.pdf,.doc,.docx,.jpg,.jpeg,.png';

const upload = ({ id, name, label, hint, required = false, multiple = false }) => `
            <div class="upload" data-upload>
              <span class="upload__label" id="${id}-label">${label} ${required ? '<span class="req" aria-hidden="true">*</span>' : '<span class="optional">(freiwillig)</span>'}</span>
              <label class="upload__box" for="${id}">
                <input id="${id}" name="${name}${multiple ? '[]' : ''}" type="file" accept="${ACCEPT}"${multiple ? ' multiple' : ''}${required ? ' required' : ''} aria-describedby="${id}-hint ${id}-err" aria-labelledby="${id}-label">
                <span class="upload__icon">${icon('clipboard')}</span>
                <span class="upload__text"><strong data-upload-name>${multiple ? 'Dateien auswählen' : 'Datei auswählen'}</strong><small id="${id}-hint">${hint}</small></span>
                <span class="upload__btn">Durchsuchen</span>
              </label>
              <p class="field__error" id="${id}-err">Bitte laden Sie ${label.replace(/^\w/, (c) => c.toLowerCase())} hoch (PDF, Word oder Bild, max. 5&nbsp;MB).</p>
            </div>`;

export default {
  path: '/karriere/bewerbung/',
  title: 'Online bewerben | Ambulanter Pflegedienst Funk GmbH',
  description: 'Jetzt online beim Ambulanten Pflegedienst Funk GmbH in Hörstel bewerben: Stelle wählen, Lebenslauf und Anschreiben hochladen – wir melden uns schnell.',
  type: 'bewerbung',
  crumbs: [['Karriere', '/karriere/'], ['Online-Bewerbung']],
  noContact: true,
  robots: 'noindex, follow',
  body: `${pageHero({
    crumbs: [['Karriere', '/karriere/'], ['Online-Bewerbung']],
    eyebrow: 'Karriere · Online-Bewerbung',
    title: 'Jetzt online <em>bewerben.</em>',
    lead: 'In wenigen Minuten erledigt: Stelle auswählen, Lebenslauf und Anschreiben hochladen, absenden. Wir sichten jede Bewerbung persönlich und melden uns schnellstmöglich bei Ihnen.',
    compact: true,
    actions: false,
  })}

    <section class="section apply" aria-label="Bewerbungsformular">
      <div class="container apply__grid">
        <aside class="apply__aside" data-reveal>
          <p class="eyebrow">So geht es weiter</p>
          <ol class="reach__steps apply__steps" role="list">
            <li><span class="reach__num" aria-hidden="true">1</span><div><strong>Formular ausfüllen</strong><p>Pflichtfelder sind mit * markiert. Das dauert nur wenige Minuten.</p></div></li>
            <li><span class="reach__num" aria-hidden="true">2</span><div><strong>Wir melden uns</strong><p>Zeitnah per Telefon oder E-Mail&nbsp;– mit einem Vorschlag für ein Kennenlernen.</p></div></li>
            <li><span class="reach__num" aria-hidden="true">3</span><div><strong>Kennenlernen</strong><p>In unserem Büro in Hörstel, ganz in Ruhe und ohne Prüfungsstress.</p></div></li>
          </ol>
          <div class="apply__help">
            <p><strong>Fragen zur Bewerbung?</strong> Frau Janke und Frau Speiser helfen Ihnen gern.</p>
            <a class="reach__phone" href="${TEL}">${icon('phone')} ${PHONE}</a>
            <p class="apply__small">Lieber per E-Mail? <a href="mailto:info@pflegedienst-funk.de?subject=Bewerbung">info@pflegedienst-funk.de</a></p>
          </div>
        </aside>

        <form class="form apply__form" action="/karriere/bewerbung/senden.php" method="post" enctype="multipart/form-data" novalidate data-apply data-reveal>
          <div class="apply__form-body">
            <h2 class="form__title">Ihre Bewerbung</h2>

            <fieldset class="apply__group">
              <legend>Persönliche Angaben</legend>
              <div class="form__row">
                <div class="field">
                  <label for="a-first">Vorname <span class="req" aria-hidden="true">*</span></label>
                  <input id="a-first" name="vorname" type="text" autocomplete="given-name" required>
                  <p class="field__error" id="a-first-err">Bitte geben Sie Ihren Vornamen ein.</p>
                </div>
                <div class="field">
                  <label for="a-last">Nachname <span class="req" aria-hidden="true">*</span></label>
                  <input id="a-last" name="nachname" type="text" autocomplete="family-name" required>
                  <p class="field__error" id="a-last-err">Bitte geben Sie Ihren Nachnamen ein.</p>
                </div>
              </div>
              <div class="form__row">
                <div class="field">
                  <label for="a-mail">E-Mail-Adresse <span class="req" aria-hidden="true">*</span></label>
                  <input id="a-mail" name="email" type="email" autocomplete="email" required>
                  <p class="field__error" id="a-mail-err">Bitte geben Sie eine gültige E-Mail-Adresse ein.</p>
                </div>
                <div class="field">
                  <label for="a-phone">Telefonnummer <span class="req" aria-hidden="true">*</span></label>
                  <input id="a-phone" name="telefon" type="tel" autocomplete="tel" inputmode="tel" required>
                  <p class="field__error" id="a-phone-err">Bitte geben Sie eine Telefonnummer ein.</p>
                </div>
              </div>
            </fieldset>

            <fieldset class="apply__group">
              <legend>Ihre Bewerbung</legend>
              <div class="field">
                <label for="a-job">Auf welche Stelle bewerben Sie sich? <span class="req" aria-hidden="true">*</span></label>
                <div class="select">
                  <select id="a-job" name="stelle" required data-job>
                    <option value="">Bitte auswählen</option>
                    ${JOBS.map((j) => `<option value="${j.title.replace(/&amp;/g, '&')}" data-slug="${j.slug}">${j.title}</option>`).join('\n                    ')}
                    <option value="Initiativbewerbung" data-slug="initiativ">Initiativbewerbung</option>
                  </select>
                  ${icon('chevron')}
                </div>
                <p class="field__error" id="a-job-err">Bitte wählen Sie eine Stelle aus.</p>
              </div>
              <div class="field">
                <label for="a-source">Wie haben Sie von uns erfahren? <span class="optional">(freiwillig)</span></label>
                <div class="select">
                  <select id="a-source" name="quelle">
                    <option value="">Bitte auswählen</option>
                    ${SOURCES.map((s) => `<option>${s}</option>`).join('\n                    ')}
                  </select>
                  ${icon('chevron')}
                </div>
              </div>
              <div class="field">
                <label for="a-msg">Nachricht / kurzer Kommentar <span class="optional">(freiwillig)</span></label>
                <textarea id="a-msg" name="nachricht" rows="4" placeholder="z.&nbsp;B. gewünschter Stundenumfang oder frühester Starttermin"></textarea>
              </div>
            </fieldset>

            <fieldset class="apply__group">
              <legend>Ihre Unterlagen</legend>
              <p class="apply__files-hint">Erlaubt sind PDF, Word (DOC, DOCX) und Bilder (JPG, PNG), jeweils bis 5&nbsp;MB.</p>
              ${upload({ id: 'a-cv', name: 'lebenslauf', label: 'Lebenslauf', hint: 'Ihr aktueller Lebenslauf', required: true })}
              ${upload({ id: 'a-letter', name: 'anschreiben', label: 'Anschreiben', hint: 'Ihr Bewerbungsschreiben', required: true })}
              ${upload({ id: 'a-certs', name: 'zeugnisse', label: 'Zeugnisse und weitere Unterlagen', hint: 'z.&nbsp;B. Examen, Arbeitszeugnisse, Zertifikate (mehrere Dateien möglich)', multiple: true })}
            </fieldset>

            <div class="hp" aria-hidden="true">
              <label for="a-website">Website</label>
              <input id="a-website" name="website" type="text" tabindex="-1" autocomplete="off">
            </div>
            <input type="hidden" name="ts" value="" data-ts>

            <label class="check">
              <input type="checkbox" name="datenschutz" value="ja" required>
              <span class="check__box" aria-hidden="true">${icon('check')}</span>
              <span>Ich habe die <a href="/datenschutz/#bewerberdaten" target="_blank">Datenschutzerklärung</a> gelesen und bin damit einverstanden, dass meine Angaben und Unterlagen zur Bearbeitung meiner Bewerbung verarbeitet werden. <span class="req" aria-hidden="true">*</span></span>
            </label>
            <p class="field__error field__error--check" id="a-check-err">Bitte stimmen Sie der Datenschutzerklärung zu.</p>

            <div class="apply__error" role="alert" hidden data-apply-error>
              <strong>Ihre Bewerbung konnte leider nicht übertragen werden.</strong>
              <p>Bitte versuchen Sie es später noch einmal oder senden Sie Ihre Unterlagen per E-Mail an <a href="mailto:info@pflegedienst-funk.de?subject=Bewerbung">info@pflegedienst-funk.de</a>. Telefonisch erreichen Sie uns unter <a href="${TEL}">${PHONE}</a>.</p>
            </div>

            <button class="btn btn--accent btn--lg btn--block" type="submit" data-apply-submit><span>Bewerbung absenden</span> ${icon('arrow')}</button>
            <p class="form__hint">* Pflichtfelder. Ihre Daten werden verschlüsselt übertragen und vertraulich behandelt.</p>
          </div>

          <div class="apply__success" role="status" aria-live="polite" tabindex="-1" hidden data-apply-success>
            <span class="apply__success-icon">${icon('check')}</span>
            <h2>Vielen Dank für Ihre Bewerbung!</h2>
            <p>Wir haben Ihre Unterlagen erhalten und melden uns so schnell wie möglich bei Ihnen.</p>
            <a class="btn btn--outline" href="/karriere/">Zurück zur Karriereseite</a>
          </div>
        </form>
      </div>
    </section>
`,
};
