import { pageHero, section, cards, ticks, faq, related, ctaBand, postCard, icon, callBtn, ctaBtn, ARTICLES, ORG_REF, SITE, text } from '../lib.mjs';

/* ---------- Gemeinsame Bausteine für die Ratgeber-Artikel ---------- */
const DATE = '2026-11-09';
const DATE_LABEL = '9. November 2026';

const summary = (items) => `<div class="callout" data-reveal>${icon('clipboard')}<div><strong>Das Wichtigste in Kürze</strong><ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul></div></div>`;

const table = (head, rows) => `<div class="table-wrap"><table><thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`;

/* Ein Artikel: Kopf, Fließtext mit Inhaltsverzeichnis, FAQ, weitere Artikel, passende Leistungen */
const article = (a) => {
  const meta = ARTICLES.find((x) => x.slug === a.slug);
  const url = `/ratgeber/${a.slug}/`;
  const crumbs = [['Ratgeber', '/ratgeber/'], [a.crumb]];
  const sectionsHtml = a.sections.map((s) => `<h2 id="${s.id}">${s.title}</h2>\n${s.html}`).join('\n');
  const words = text(`${a.intro} ${a.summary.join(' ')} ${sectionsHtml}`).split(' ').length;
  const minutes = Math.max(1, Math.round(words / 200));
  const others = ARTICLES.filter((x) => x.slug !== a.slug).map((x) => x.slug);

  return {
    path: url,
    title: a.title,
    description: a.description,
    type: 'article',
    ogType: 'article',
    crumbs,
    heroImage: meta.img,
    ogImage: meta.img,
    faq: a.faq,
    schema: [{
      '@type': 'Article',
      '@id': `${SITE}${url}#article`,
      headline: text(meta.title),
      description: a.description,
      image: `${SITE}/assets/img/${meta.img}-1200.webp`,
      datePublished: DATE,
      dateModified: DATE,
      inLanguage: 'de-DE',
      wordCount: words,
      author: ORG_REF,
      publisher: ORG_REF,
      mainEntityOfPage: { '@id': `${SITE}${url}#webpage` },
      keywords: a.keywords,
    }],
    body: `${pageHero({
      crumbs,
      eyebrow: `Ratgeber · ${a.eyebrow}`,
      title: a.h1,
      lead: a.lead,
      image: meta.img,
      imageAlt: a.imageAlt,
      actions: false,
    })}

    <section class="article" aria-label="Artikel">
      <div class="container article__layout">
        <article class="prose">
          <ul class="article__meta" role="list">
            <li>${icon('calendar')} <time datetime="${DATE}">${DATE_LABEL}</time></li>
            <li>${icon('clock')} ${minutes}&nbsp;Min. Lesezeit</li>
            <li>${icon('users')} Redaktion Pflegedienst Funk GmbH</li>
          </ul>
          <p class="lead">${a.intro}</p>
          ${summary(a.summary)}
          ${sectionsHtml}
          <div class="author-box">
            <span class="card__icon" aria-hidden="true">${icon('heart')}</span>
            <p><strong>Redaktion Pflegedienst Funk GmbH</strong><br>Geschrieben von unserem Team aus examinierten Pflegefachkräften in Hörstel. Dieser Ratgeber ersetzt keine persönliche Beratung&nbsp;– bei Fragen zu Ihrer Situation sind wir gern für Sie da.</p>
          </div>
        </article>
        <aside class="article__aside" aria-label="Inhalt und Kontakt">
          <nav class="toc" aria-labelledby="toc-title">
            <p class="toc__title" id="toc-title">Inhalt</p>
            <ol role="list">
              ${a.sections.map((s) => `<li><a href="#${s.id}">${s.toc}</a></li>`).join('\n              ')}
            </ol>
          </nav>
          <div class="aside-cta">
            <strong>${a.aside[0]}</strong>
            <p>${a.aside[1]}</p>
            ${ctaBtn('Beratung anfragen')}
            ${callBtn()}
          </div>
        </aside>
      </div>
    </section>

${faq(a.faq, { title: a.faqTitle, lead: 'Kurz und verständlich beantwortet&nbsp;– für Pflegebedürftige und ihre Angehörigen.' })}

${section({
      id: 'weitere-artikel',
      cls: 'section--tight',
      eyebrow: 'Ratgeber',
      title: 'Weitere <em>Artikel.</em>',
      body: `<ul class="post-rows" role="list">
          ${others.map((s) => `<li data-reveal>${postCard(s, false, true)}</li>`).join('\n          ')}
        </ul>`,
    })}

${related(a.related)}
`,
  };
};

/* ---------- Artikel 1: Pflegegrad & Pflegeleistungen ---------- */
const pflegegrad = article({
  slug: 'pflegegrad-pflegeleistungen',
  crumb: 'Pflegegrad &amp; Pflegeleistungen',
  title: 'Pflegegrad & Pflegeleistungen zu Hause erklärt | Funk GmbH',
  description: 'Pflegegrad beantragen, Begutachtung, Pflegegeld, Pflegesachleistung und Entlastungsbetrag: Welche Pflegeleistungen zu Hause es gibt – verständlich erklärt.',
  keywords: 'Pflegegrad beantragen, Pflegeleistungen zu Hause, Pflegesachleistung, Pflegegeld, ambulanter Pflegedienst Leistungen',
  eyebrow: 'Pflegegrad &amp; Leistungen',
  h1: 'Pflegegrad und Pflegeleistungen <em>zu Hause erklärt.</em>',
  lead: 'Ein Pflegegrad öffnet die Tür zu vielen Hilfen der Pflegekasse. Wir erklären verständlich, wie Sie ihn beantragen, was bei der Begutachtung passiert und welche Unterstützung es zu Hause gibt.',
  imageAlt: 'Älteres Ehepaar liest zu Hause gemeinsam einen Brief der Pflegekasse',
  intro: 'Wenn der Alltag nicht mehr allein gelingt, tauchen viele Fragen auf: Steht mir Hilfe zu? Wie bekomme ich einen Pflegegrad? Und was zahlt die Pflegekasse eigentlich? In diesem Ratgeber erklären wir Schritt für Schritt, wie Sie einen Pflegegrad beantragen und welche Pflegeleistungen zu Hause möglich sind&nbsp;– ohne Fachbegriffe, die niemand versteht.',
  summary: [
    'Einen Pflegegrad beantragen Sie bei Ihrer Pflegekasse&nbsp;– ein Anruf genügt.',
    'Es gibt fünf Pflegegrade. Entscheidend ist, wie selbstständig Sie im Alltag sind, nicht die Diagnose.',
    'Ab Pflegegrad&nbsp;1 gibt es den Entlastungsbetrag, ab Pflegegrad&nbsp;2 Pflegegeld und Pflegesachleistungen.',
    'Ein ambulanter Pflegedienst rechnet seine Leistungen direkt mit der Kasse ab.',
  ],
  sections: [
    {
      id: 'was-ist-ein-pflegegrad',
      toc: 'Was ist ein Pflegegrad?',
      title: 'Was ist ein Pflegegrad?',
      html: `<p>Der Pflegegrad zeigt, wie viel Unterstützung ein Mensch im Alltag braucht. Er ist die Grundlage für fast alle Leistungen der Pflegeversicherung. Es gibt fünf Pflegegrade: von Pflegegrad&nbsp;1 bei geringen Einschränkungen bis Pflegegrad&nbsp;5 bei schwersten Beeinträchtigungen, die besondere Anforderungen an die Pflege stellen.</p>
<p>Wichtig zu wissen: Ein Pflegegrad ist keine Frage des Alters. Auch jüngere Menschen können ihn bekommen&nbsp;– etwa nach einem Schlaganfall, bei einer chronischen Erkrankung, mit einer Behinderung oder nach einem schweren Unfall. Entscheidend ist nicht die Diagnose, sondern wie selbstständig jemand im Alltag zurechtkommt.</p>
<p>Bei der Einstufung schauen Gutachterinnen und Gutachter auf sechs Lebensbereiche:</p>
<ul>
  <li><strong>Mobilität</strong>, z.&nbsp;B. Aufstehen, Gehen und Treppensteigen</li>
  <li><strong>Geistige und kommunikative Fähigkeiten</strong>, z.&nbsp;B. Orientierung und Gespräche</li>
  <li><strong>Verhalten und Psyche</strong>, z.&nbsp;B. nächtliche Unruhe oder Ängste</li>
  <li><strong>Selbstversorgung</strong>, z.&nbsp;B. Waschen, Anziehen und Essen</li>
  <li><strong>Umgang mit der Erkrankung</strong>, z.&nbsp;B. Medikamente, Verbände und Arztbesuche</li>
  <li><strong>Alltag und soziale Kontakte</strong>, z.&nbsp;B. den Tag einteilen oder Besuch empfangen</li>
</ul>
<p>Aus allen Bereichen ergibt sich eine Punktzahl. Sie bestimmt, welcher Pflegegrad vergeben wird. Vereinfacht bedeuten die fünf Stufen:</p>
${table(['Pflegegrad', 'Bedeutung'], [
    ['1', 'geringe Beeinträchtigung der Selbstständigkeit'],
    ['2', 'erhebliche Beeinträchtigung der Selbstständigkeit'],
    ['3', 'schwere Beeinträchtigung der Selbstständigkeit'],
    ['4', 'schwerste Beeinträchtigung der Selbstständigkeit'],
    ['5', 'schwerste Beeinträchtigung mit besonderen Anforderungen an die Pflege'],
  ])}`,
    },
    {
      id: 'pflegegrad-beantragen',
      toc: 'Pflegegrad beantragen',
      title: 'Pflegegrad beantragen: So gehen Sie vor',
      html: `<p>Der Weg zum Pflegegrad ist einfacher, als viele denken. Diese vier Schritte erwarten Sie:</p>
<ol>
  <li><strong>Antrag stellen.</strong> Rufen Sie Ihre Pflegekasse an&nbsp;– sie gehört zu Ihrer Krankenkasse. Ein formloser Antrag genügt. Auch Angehörige können ihn stellen, wenn Sie das möchten. Die Leistungen gelten ab dem Monat der Antragstellung. Deshalb lohnt es sich, nicht lange zu warten.</li>
  <li><strong>Begutachtung zu Hause.</strong> Die Pflegekasse beauftragt eine Gutachterin oder einen Gutachter. Bei gesetzlich Versicherten ist das der Medizinische Dienst, bei Privatversicherten Medicproof. Der Termin findet in der Regel bei Ihnen zu Hause statt und wird vorher angekündigt.</li>
  <li><strong>Bescheid erhalten.</strong> Auf Grundlage des Gutachtens entscheidet die Pflegekasse und schickt Ihnen einen schriftlichen Bescheid. Liegt das Gutachten nicht bei, können Sie es anfordern.</li>
  <li><strong>Widerspruch, wenn nötig.</strong> Sind Sie mit der Entscheidung nicht einverstanden, können Sie innerhalb eines Monats schriftlich Widerspruch einlegen. Begründen Sie kurz, wobei Sie mehr Hilfe brauchen, als im Gutachten steht.</li>
</ol>
<p>Verändert sich Ihre Situation später, etwa nach einem Sturz oder einem Krankenhausaufenthalt, können Sie jederzeit einen höheren Pflegegrad beantragen.</p>`,
    },
    {
      id: 'tipps-begutachtung',
      toc: 'Tipps für die Begutachtung',
      title: 'Tipps für die Begutachtung',
      html: `<p>Die Begutachtung ist ein Gespräch in Ihrer vertrauten Umgebung. Viele Menschen zeigen sich an diesem Tag von ihrer besten Seite. Das ist verständlich, führt aber oft zu einem zu niedrigen Pflegegrad. Mit etwas Vorbereitung gelingt der Termin besser:</p>
${ticks([
    'Führen Sie ein bis zwei Wochen vorher ein Pflegetagebuch: Wobei brauchen Sie Hilfe, wann und wie lange?',
    'Legen Sie Arztberichte, Entlassungsbriefe und den aktuellen Medikamentenplan bereit.',
    'Bitten Sie eine vertraute Person, beim Termin dabei zu sein. Angehörige ergänzen, was man selbst leicht vergisst.',
    'Beschreiben Sie einen ganz normalen Tag&nbsp;– auch die schlechten Tage, nicht nur die guten.',
    'Erwähnen Sie auch Hilfe in der Nacht, Vergesslichkeit oder Ängste. Sie zählen genauso wie körperliche Einschränkungen.',
    'Werden Sie schon von einem Pflegedienst versorgt, hilft die Pflegedokumentation als zusätzlicher Nachweis.',
  ])}`,
    },
    {
      id: 'pflegeleistungen-zu-hause',
      toc: 'Pflegeleistungen im Überblick',
      title: 'Pflegeleistungen zu Hause im Überblick',
      html: `<p>Mit einem Pflegegrad stehen Ihnen verschiedene Leistungen der Pflegekasse zu. Viele lassen sich miteinander kombinieren. Die genauen Beträge hängen vom Pflegegrad ab und werden regelmäßig angepasst. Ihre Pflegekasse teilt Ihnen die aktuellen Summen mit&nbsp;– oder wir rechnen es gern für Sie aus.</p>
${table(['Leistung', 'Ab wann und wofür?'], [
    ['Pflegegeld', '<strong>ab Pflegegrad&nbsp;2</strong><br>Pflege durch Angehörige oder Bekannte'],
    ['Pflegesachleistung', '<strong>ab Pflegegrad&nbsp;2</strong><br>Einsätze eines ambulanten Pflegedienstes'],
    ['Kombinationsleistung', '<strong>ab Pflegegrad&nbsp;2</strong><br>Pflegedienst und Angehörige teilen sich die Pflege'],
    ['Entlastungsbetrag', '<strong>ab Pflegegrad&nbsp;1</strong><br>Hilfe im Alltag, z.&nbsp;B. im Haushalt'],
    ['Verhinderungspflege', '<strong>ab Pflegegrad&nbsp;2</strong><br>Vertretung, wenn Angehörige verhindert sind'],
    ['Pflegehilfsmittel', '<strong>ab Pflegegrad&nbsp;1</strong><br>z.&nbsp;B. Handschuhe, Desinfektion, Hausnotruf'],
    ['Wohnumfeldverbesserung', '<strong>ab Pflegegrad&nbsp;1</strong><br>Zuschuss für Umbauten in der Wohnung'],
    ['Beratungseinsatz', '<strong>ab Pflegegrad&nbsp;1</strong><br>Beratung zu Hause, bei reinem Pflegegeld Pflicht'],
  ])}
<h3>Pflegegeld</h3>
<p>Übernehmen Angehörige, Freunde oder Nachbarn die Pflege, zahlt die Pflegekasse ab Pflegegrad&nbsp;2 jeden Monat Pflegegeld. Sie entscheiden selbst, wofür Sie es verwenden. Wer nur Pflegegeld bezieht, muss regelmäßig einen <a href="/ratgeber/beratungseinsatz-37-3-sgb-xi/">Beratungseinsatz nach §&nbsp;37.3&nbsp;SGB&nbsp;XI</a> nachweisen.</p>
<h3>Pflegesachleistung</h3>
<p>Kommt ein ambulanter Pflegedienst zu Ihnen nach Hause, nutzen Sie die Pflegesachleistung. Der Pflegedienst rechnet direkt mit der Pflegekasse ab, Sie müssen nichts vorstrecken. Bezahlt werden damit vor allem <a href="/leistungen/grundpflege/">Grundpflege</a> und <a href="/leistungen/hauswirtschaft/">hauswirtschaftliche Versorgung</a>.</p>
<h3>Kombinationsleistung</h3>
<p>Schöpfen Sie die Sachleistung nicht ganz aus, erhalten Sie den Rest anteilig als Pflegegeld. So können sich Familie und Pflegedienst die Pflege teilen: Die Pflegefachkraft hilft zum Beispiel morgens beim Duschen, den Rest des Tages übernehmen die Angehörigen.</p>
<h3>Entlastungsbetrag</h3>
<p>Schon ab Pflegegrad&nbsp;1 gibt es jeden Monat einen Entlastungsbetrag. Er ist für Angebote gedacht, die den Alltag erleichtern, etwa Hilfe im Haushalt oder stundenweise Betreuung. Nicht genutzte Beträge verfallen nicht sofort, sondern können eine Zeit lang angespart werden.</p>
<h3>Verhinderungspflege</h3>
<p>Machen pflegende Angehörige Urlaub oder werden selbst krank, zahlt die Pflegekasse ab Pflegegrad&nbsp;2 eine Vertretung. Diese <a href="/leistungen/verhinderungspflege/">Verhinderungspflege</a> kann ein Pflegedienst zu Hause übernehmen. Seit Juli 2025 bilden Verhinderungspflege und Kurzzeitpflege ein gemeinsames Jahresbudget.</p>
<h3>Pflegehilfsmittel und Umbauten</h3>
<p>Für Verbrauchsmaterial wie Einmalhandschuhe, Desinfektionsmittel oder Bettschutzeinlagen gibt es jeden Monat einen festen Betrag. Technische Hilfen wie ein Pflegebett oder ein Hausnotruf kommen hinzu. Für Umbauten&nbsp;– etwa Haltegriffe, eine bodengleiche Dusche oder einen Treppenlift&nbsp;– zahlt die Pflegekasse einen Zuschuss. Stellen Sie den Antrag unbedingt, bevor die Arbeiten beginnen.</p>
<h3>Beratungseinsatz</h3>
<p>Wer Pflegegeld bezieht, bekommt regelmäßig Besuch von einer Pflegefachkraft. Dieser Beratungseinsatz ist kostenlos und hilft, die Pflege zu Hause gut zu organisieren. Ab Pflegegrad&nbsp;1 und für Empfänger von Sachleistungen ist er freiwillig. Mehr dazu lesen Sie bei unserer <a href="/leistungen/pflegeberatung-37-3/">Pflegeberatung</a>.</p>`,
    },
    {
      id: 'ambulanter-pflegedienst',
      toc: 'Was ein Pflegedienst leistet',
      title: 'Was ein ambulanter Pflegedienst leisten kann',
      html: `<p>Ein ambulanter Pflegedienst bringt professionelle Hilfe dorthin, wo Sie sich am wohlsten fühlen: in Ihr Zuhause. Die Leistungen werden aus zwei verschiedenen Kassen bezahlt.</p>
<p><strong>Die Pflegekasse</strong> übernimmt mit einem Pflegegrad die Hilfe im Alltag, also Körperpflege, Haushalt und Entlastung der Angehörigen. <strong>Die Krankenkasse</strong> bezahlt die medizinische <a href="/leistungen/behandlungspflege/">Behandlungspflege</a>, wenn Ihre Ärztin oder Ihr Arzt sie verordnet. Dafür brauchen Sie keinen Pflegegrad.</p>
${ticks([
    '<a href="/leistungen/grundpflege/">Grundpflege</a>: Körperpflege, An- und Auskleiden, Mobilisation und Hilfe beim Essen',
    '<a href="/leistungen/hauswirtschaft/">Hauswirtschaft</a>: Einkaufen, Kochen, Wäsche und Ordnung in der Wohnung',
    '<a href="/leistungen/medikamentengabe/">Medikamentengabe</a>, Injektionen sowie Blutdruck- und Blutzuckerkontrolle',
    '<a href="/leistungen/wundversorgung/">Wundversorgung</a> und <a href="/leistungen/kompressionsversorgung/">Kompressionsversorgung</a>',
    '<a href="/leistungen/verhinderungspflege/">Verhinderungspflege</a>, wenn Angehörige eine Pause brauchen',
    '<a href="/leistungen/pflegeberatung-37-3/">Pflegeberatung nach §&nbsp;37.3</a> für Pflegegeld-Empfänger',
  ])}
<p>Der Ambulante Pflegedienst Funk GmbH begleitet seit 2011 Menschen in Hörstel, Mettingen, Recke, Ibbenbüren und Rheine. Wir sind Vertragspartner aller Kranken- und Pflegekassen und rechnen direkt mit ihnen ab. Durch Bezugspflege kommen möglichst immer dieselben vertrauten Pflegekräfte zu Ihnen. Alle Angebote finden Sie in unserer <a href="/leistungen/">Übersicht der Leistungen</a>.</p>
<p>Sie wissen noch nicht, welche Leistungen zu Ihrer Situation passen? Rufen Sie uns an. Wir beraten Sie kostenlos und helfen auch bei den ersten Schritten mit der Pflegekasse.</p>`,
    },
  ],
  aside: ['Fragen zum Pflegegrad?', 'Wir erklären Ihnen, welche Leistungen Ihnen zustehen, und rechnen gern für Sie aus, was die Pflegekasse übernimmt.'],
  faqTitle: 'Fragen zu <em>Pflegegrad und Leistungen.</em>',
  faq: [
    ['Wo beantrage ich einen Pflegegrad?', 'Bei Ihrer Pflegekasse. Sie gehört zu Ihrer Krankenkasse, ein Anruf genügt. Die Kasse schickt Ihnen danach die Unterlagen und beauftragt die Begutachtung.'],
    ['Ab wann zahlt die Pflegekasse?', 'Die Leistungen gelten ab dem Monat, in dem Sie den Antrag gestellt haben. Auch wenn die Begutachtung erst später stattfindet, verlieren Sie dadurch keine Leistungen.'],
    ['Was kann ich tun, wenn der Pflegegrad zu niedrig ist?', 'Sie können innerhalb eines Monats nach Erhalt des Bescheids schriftlich Widerspruch bei der Pflegekasse einlegen. Fordern Sie das Gutachten an und beschreiben Sie, wobei Sie mehr Hilfe brauchen.'],
    ['Kann ich Pflegegeld und einen Pflegedienst kombinieren?', 'Ja. Mit der Kombinationsleistung übernimmt der Pflegedienst einen Teil der Pflege und Sie erhalten für den Rest anteilig Pflegegeld. Wir rechnen gern für Sie aus, wie sich das in Ihrem Fall verteilt.'],
    ['Brauche ich für Behandlungspflege einen Pflegegrad?', 'Nein. Medizinische Behandlungspflege wie Wundversorgung oder Medikamentengabe wird ärztlich verordnet und von der Krankenkasse bezahlt&nbsp;– unabhängig von einem Pflegegrad.'],
  ],
  related: ['grundpflege', 'hauswirtschaft', 'pflegeberatung-37-3'],
});

/* ---------- Artikel 2: Beratungseinsatz § 37.3 SGB XI ---------- */
const beratung = article({
  slug: 'beratungseinsatz-37-3-sgb-xi',
  crumb: 'Beratungseinsatz §&nbsp;37.3',
  title: 'Beratungseinsatz § 37.3 SGB XI: Das sollten Sie wissen',
  description: 'Pflichtberatung beim Pflegegeld: Wer den Beratungseinsatz nach § 37.3 SGB XI braucht, wie oft er fällig ist und wie Sie sich vorbereiten. Jetzt informieren.',
  keywords: 'Beratungseinsatz 37.3, Pflichtberatung Pflegegeld, Beratungsbesuch Pflegegeld',
  eyebrow: 'Beratung',
  h1: 'Beratungseinsatz nach §&nbsp;37.3&nbsp;SGB&nbsp;XI <em>einfach erklärt.</em>',
  lead: 'Wer Pflegegeld bezieht, bekommt regelmäßig Besuch von einer Pflegefachkraft. Hier lesen Sie, wer den Beratungseinsatz braucht, wie oft er fällig ist und wie Sie sich gut darauf vorbereiten.',
  imageAlt: 'Pflegefachkraft des Pflegedienstes Funk GmbH notiert sich im Gespräch mit einem älteren Herrn dessen Anliegen',
  intro: 'Viele Familien kennen den Brief: Die Pflegekasse erinnert an den Beratungseinsatz nach §&nbsp;37.3&nbsp;SGB&nbsp;XI. Was zunächst nach Kontrolle klingt, ist in Wahrheit eine Unterstützung. Bei diesem Beratungsbesuch schaut eine Pflegefachkraft gemeinsam mit Ihnen, ob die Pflege zu Hause gut gelingt und wo es Erleichterung geben kann. In diesem Ratgeber erfahren Sie, wer die Pflichtberatung beim Pflegegeld braucht, was dabei passiert und was Sie beachten sollten.',
  summary: [
    'Wer ausschließlich Pflegegeld bezieht, muss den Beratungseinsatz regelmäßig nachweisen.',
    'Pflegegrad&nbsp;2 und&nbsp;3: einmal im Halbjahr. Pflegegrad&nbsp;4 und&nbsp;5: einmal im Vierteljahr.',
    'Der Besuch ist für Sie kostenlos, die Pflegekasse bezahlt ihn.',
    'Fehlt der Nachweis, kann die Pflegekasse das Pflegegeld kürzen.',
  ],
  sections: [
    {
      id: 'was-ist-der-beratungseinsatz',
      toc: 'Was ist der Beratungseinsatz?',
      title: 'Was ist der Beratungseinsatz?',
      html: `<p>Der Beratungseinsatz ist ein Hausbesuch durch eine Pflegefachkraft. Er ist im Sozialgesetzbuch&nbsp;XI geregelt, genauer in §&nbsp;37 Absatz&nbsp;3. Daher kommt der Name „Beratungseinsatz nach §&nbsp;37.3“. Umgangssprachlich heißt er auch Beratungsbesuch oder Pflichtberatung.</p>
<p>Der Hintergrund: Wer Pflegegeld bekommt, wird meist von Angehörigen gepflegt. Diese leisten oft Großes&nbsp;– und das häufig ohne pflegerische Ausbildung. Der Beratungseinsatz soll die Qualität der Pflege zu Hause sichern und pflegende Angehörige praktisch unterstützen. Es geht also nicht darum, jemanden zu kontrollieren, sondern darum, Fragen zu klären und Überlastung früh zu erkennen.</p>
<p>Für Sie als Familie ist der Besuch eine gute Gelegenheit, sich fachlichen Rat zu holen: zu Hilfsmitteln, zu weiteren Leistungen der Pflegekasse oder zu ganz praktischen Handgriffen im Pflegealltag.</p>`,
    },
    {
      id: 'wer-muss',
      toc: 'Wer muss ihn nachweisen?',
      title: 'Pflichtberatung beim Pflegegeld: Wer muss den Besuch nachweisen?',
      html: `<p>Verpflichtend ist der Beratungseinsatz für alle, die <strong>ausschließlich Pflegegeld</strong> beziehen. Wie oft der Besuch stattfinden muss, hängt vom Pflegegrad ab. Alle anderen können die Beratung freiwillig nutzen.</p>
${table(['Ihre Situation', 'Beratungsbesuch'], [
    ['Pflegegrad&nbsp;1', 'einmal im Halbjahr, <strong>freiwillig</strong>'],
    ['Pflegegrad&nbsp;2 oder&nbsp;3, nur Pflegegeld', 'einmal im Halbjahr, <strong>Pflicht</strong>'],
    ['Pflegegrad&nbsp;4 oder&nbsp;5, nur Pflegegeld', 'einmal im Vierteljahr, <strong>Pflicht</strong>'],
    ['Pflegesachleistung (Pflegegrad&nbsp;2 bis&nbsp;5)', 'einmal im Halbjahr, <strong>freiwillig</strong>'],
  ])}
<p>Wer Pflegesachleistungen bezieht, also bereits von einem ambulanten Pflegedienst versorgt wird, ist nicht zum Beratungseinsatz verpflichtet. Hier hat ohnehin regelmäßig eine Pflegefachkraft einen Blick auf die Situation. Eine freiwillige Beratung kann trotzdem sinnvoll sein, wenn sich etwas verändert hat.</p>
<p>Gut zu wissen: Auch wer die Kombinationsleistung nutzt, also Pflegegeld und Pflegedienst miteinander verbindet, ist nicht zum Beratungsbesuch verpflichtet. Die Pflicht gilt nur, wenn die Pflege allein über das Pflegegeld organisiert wird.</p>`,
    },
    {
      id: 'nutzen',
      toc: 'Warum sich der Besuch lohnt',
      title: 'Warum sich der Beratungsbesuch für Sie lohnt',
      html: `<p>Viele Familien sehen den Beratungseinsatz zunächst als lästige Pflicht. Dabei steckt viel Nutzen darin. Pflegende Angehörige sind oft so sehr im Alltag gefangen, dass für Fragen kaum Zeit bleibt. Der Besuch schafft diesen Raum&nbsp;– ohne Kosten und bei Ihnen zu Hause.</p>
${ticks([
    'Sie erfahren, welche Leistungen der Pflegekasse Sie noch nicht nutzen, etwa den Entlastungsbetrag oder Pflegehilfsmittel.',
    'Sie bekommen praktische Tipps, zum Beispiel für rückenschonendes Umlagern oder sicheres Aufstehen.',
    'Gefahren wie Stolperfallen, Druckstellen auf der Haut oder zu wenig Trinken fallen früher auf.',
    'Sie erhalten eine fachliche Einschätzung, ob ein höherer Pflegegrad beantragt werden sollte.',
    'Pflegende Angehörige können offen über Belastung sprechen und erfahren, wo es Entlastung gibt.',
  ])}
<p>Gerade wenn sich die Situation schleichend verändert, ist der Blick von außen wertvoll. Eine erfahrene Pflegefachkraft erkennt oft Dinge, die im Alltag niemandem mehr auffallen.</p>`,
    },
    {
      id: 'kosten',
      toc: 'Wer bezahlt die Beratung?',
      title: 'Wer bezahlt den Beratungsbesuch?',
      html: `<p>Für Sie ist der Beratungseinsatz kostenlos. Die Kosten trägt Ihre Pflegekasse. Der Pflegedienst rechnet direkt mit ihr ab, Sie müssen nichts vorstrecken und keine Rechnung einreichen. Bei Privatversicherten übernimmt die private Pflegeversicherung die Kosten, bei Beihilfeberechtigten anteilig zusammen mit der Beihilfe.</p>
<p>Wichtig: Der Beratungsbesuch wird nicht von Ihrem Pflegegeld abgezogen. Sie bekommen das Pflegegeld weiterhin in voller Höhe, solange die Nachweise pünktlich bei der Pflegekasse eingehen.</p>
<p>Auch die freiwillige Beratung, etwa bei Pflegegrad&nbsp;1, übernimmt die Pflegekasse. Es lohnt sich also, das Angebot zu nutzen, selbst wenn keine Pflicht besteht.</p>`,
    },
    {
      id: 'fehlender-nachweis',
      toc: 'Wenn der Nachweis fehlt',
      title: 'Was passiert, wenn der Beratungseinsatz fehlt?',
      html: `<p>Nach jedem Besuch bestätigt die Pflegefachkraft, dass die Beratung stattgefunden hat. Dieser Nachweis geht an die Pflegekasse. Die Ergebnisse der Beratung werden nur weitergegeben, wenn Sie damit einverstanden sind.</p>
<p>Bleibt der Nachweis aus, erinnert die Pflegekasse in der Regel zunächst schriftlich daran. Wird der Beratungseinsatz trotzdem nicht abgerufen, <strong>darf die Pflegekasse das Pflegegeld kürzen</strong>. Fehlt der Nachweis wiederholt, kann sie das Pflegegeld sogar ganz entziehen.</p>
${callout_('Unser Tipp', 'Vereinbaren Sie den nächsten Termin am besten gleich beim aktuellen Besuch. So geraten die Fristen nicht in Vergessenheit.', 'calendar')}`,
    },
    {
      id: 'ablauf',
      toc: 'So läuft der Besuch ab',
      title: 'So läuft der Beratungsbesuch ab',
      html: `<p>Der Beratungseinsatz findet bei Ihnen zu Hause statt, in ruhiger Atmosphäre und mit genug Zeit für Fragen. Am besten sind die pflegebedürftige Person und die Hauptpflegeperson gemeinsam dabei. Typischerweise läuft der Besuch so ab:</p>
<ol>
  <li><strong>Gespräch über den Alltag.</strong> Die Pflegefachkraft fragt, wie es Ihnen geht, wobei Sie Hilfe brauchen und wie die Pflege organisiert ist.</li>
  <li><strong>Blick auf die Pflegesituation.</strong> Gemeinsam schauen Sie auf Wohnung, Hilfsmittel, Haut, Ernährung und Beweglichkeit. Gibt es Sturzgefahren? Passt das Pflegebett?</li>
  <li><strong>Entlastung der Angehörigen.</strong> Wie geht es der pflegenden Person? Gibt es Möglichkeiten, sie zu entlasten, etwa durch Verhinderungspflege oder Hilfe im Haushalt?</li>
  <li><strong>Konkrete Empfehlungen.</strong> Sie erhalten praktische Tipps und Hinweise auf Leistungen, die Ihnen zustehen&nbsp;– zum Beispiel, wenn ein höherer Pflegegrad sinnvoll sein könnte.</li>
  <li><strong>Nachweis für die Pflegekasse.</strong> Zum Schluss wird das Formular ausgefüllt und unterschrieben.</li>
</ol>
<p>Der Besuch ist ein Gespräch auf Augenhöhe. Niemand prüft, ob die Wohnung aufgeräumt ist, und niemand bewertet die Angehörigen. Im Mittelpunkt steht die Frage, was die Pflege zu Hause leichter und sicherer macht.</p>`,
    },
    {
      id: 'vorbereitung',
      toc: 'So bereiten Sie sich vor',
      title: 'So bereiten Sie sich vor',
      html: `<p>Eine große Vorbereitung ist nicht nötig. Mit ein paar Kleinigkeiten holen Sie aber mehr aus dem Gespräch heraus:</p>
${ticks([
    'Versichertenkarte und den Bescheid der Pflegekasse bereitlegen',
    'Aktuellen Medikamentenplan und neue Arztberichte zur Hand haben',
    'Fragen vorher auf einem Zettel notieren',
    'Veränderungen seit dem letzten Besuch aufschreiben, etwa Stürze oder Krankenhausaufenthalte',
    'Die Person, die hauptsächlich pflegt, zum Termin dazuholen',
    'Ehrlich sagen, was schwerfällt&nbsp;– nur so kann die Beratung wirklich helfen',
  ])}
<p>Planen Sie für den Termin etwas Ruhe ein. Wenn Angehörige berufstätig sind, lässt sich der Besuch oft so legen, dass sie dabei sein können. Sprechen Sie uns bei der Terminvereinbarung einfach darauf an.</p>`,
    },
    {
      id: 'wer-darf',
      toc: 'Wer darf beraten?',
      title: 'Wer darf den Beratungseinsatz durchführen?',
      html: `<p>Den Beratungseinsatz dürfen zugelassene Pflegedienste und anerkannte Beratungsstellen mit pflegefachlicher Kompetenz übernehmen. Sie können frei wählen, wen Sie beauftragen, und auch später wechseln. Viele Familien entscheiden sich für einen Pflegedienst aus der Nähe, der sich mit den Angeboten vor Ort auskennt&nbsp;– von Hilfsdiensten bis zum Hausnotruf. Wichtig ist vor allem, dass Sie sich bei der Beratung wohlfühlen und offen sprechen können.</p>
<p>Unsere examinierten Pflegefachkräfte führen die <a href="/leistungen/pflegeberatung-37-3/">Pflegeberatung nach §&nbsp;37.3&nbsp;SGB&nbsp;XI</a> in Hörstel, Mettingen, Recke, Ibbenbüren und Rheine durch&nbsp;– bei Ihnen zu Hause und mit genug Zeit für Ihre Fragen. Als Vertragspartner aller Pflegekassen kümmern wir uns auch um den Nachweis. Wenn Sie mehr über Pflegegrade und weitere Leistungen wissen möchten, lesen Sie auch unseren Ratgeber <a href="/ratgeber/pflegegrad-pflegeleistungen/">Pflegegrad und Pflegeleistungen</a>.</p>`,
    },
  ],
  aside: ['Beratungseinsatz fällig?', 'Wir kommen zu Ihnen nach Hause, beraten Sie in Ruhe und senden den Nachweis an Ihre Pflegekasse.'],
  faqTitle: 'Fragen zum <em>Beratungseinsatz.</em>',
  faq: [
    ['Ist der Beratungseinsatz Pflicht?', 'Ja, für alle, die ausschließlich Pflegegeld beziehen: bei Pflegegrad&nbsp;2 und&nbsp;3 einmal im Halbjahr, bei Pflegegrad&nbsp;4 und&nbsp;5 einmal im Vierteljahr. Bei Pflegegrad&nbsp;1 und für Empfänger von Pflegesachleistungen ist er freiwillig.'],
    ['Kostet der Beratungsbesuch etwas?', 'Nein. Die Pflegekasse bezahlt den Beratungseinsatz. Der Pflegedienst rechnet direkt mit ihr ab, und Ihr Pflegegeld wird dadurch nicht gekürzt.'],
    ['Was passiert, wenn ich den Termin verpasse?', 'Die Pflegekasse erinnert meist zunächst daran. Wird der Beratungseinsatz trotzdem nicht nachgewiesen, kann sie das Pflegegeld kürzen und im Wiederholungsfall ganz entziehen. Holen Sie einen verpassten Termin deshalb möglichst schnell nach.'],
    ['Kann ich mir den Pflegedienst selbst aussuchen?', 'Ja. Sie können jeden zugelassenen Pflegedienst oder eine anerkannte Beratungsstelle beauftragen. Ein Pflegedienst aus der Nähe kennt meist auch die Hilfsangebote vor Ort.'],
  ],
  related: ['pflegeberatung-37-3', 'verhinderungspflege', 'grundpflege'],
});

/* ---------- Artikel 3: Wundversorgung zu Hause ---------- */
const wunde = article({
  slug: 'professionelle-wundversorgung-zu-hause',
  crumb: 'Wundversorgung zu Hause',
  title: 'Wundversorgung zu Hause: Wann ein Wundexperte hilft',
  description: 'Chronische Wunden richtig versorgen: Warnzeichen, typische Wundarten und wie professionelle Wundversorgung zu Hause abläuft. Beratung: 05459 5869825.',
  keywords: 'Wundversorgung zu Hause, chronische Wunden, Wundexperte, Wundmanagement ambulant',
  eyebrow: 'Wundversorgung',
  h1: 'Wundversorgung zu Hause&nbsp;– <em>wann hilft ein Wundexperte?</em>',
  lead: 'Manche Wunden wollen einfach nicht heilen. Erfahren Sie, woran Sie eine chronische Wunde erkennen, wann fachkundige Hilfe sinnvoll ist und wie Wundversorgung zu Hause abläuft.',
  imageAlt: 'Pflegefachkraft des Pflegedienstes Funk GmbH bereitet am Schreibtisch sterile Verbandsmaterialien vor',
  intro: 'Eine kleine Wunde am Bein, die nach Wochen immer noch nicht zu ist. Eine Druckstelle, die größer wird. Viele Menschen kennen solche Sorgen&nbsp;– bei sich selbst oder bei einem Angehörigen. Gerade chronische Wunden brauchen Geduld und Fachwissen. In diesem Ratgeber erklären wir, was eine gute Wundversorgung zu Hause ausmacht, auf welche Warnzeichen Sie achten sollten und wann ein Wundexperte den Unterschied macht.',
  summary: [
    'Heilt eine Wunde nach etwa acht Wochen nicht ab, spricht man von einer chronischen Wunde.',
    'Häufige Ursachen sind Venenleiden, Diabetes und anhaltender Druck auf die Haut.',
    'Rötung, Wärme, Geruch, stärkere Schmerzen oder Fieber gehören ärztlich abgeklärt.',
    'Auf ärztliche Verordnung zahlt die Krankenkasse die Wundversorgung zu Hause.',
  ],
  sections: [
    {
      id: 'akut-und-chronisch',
      toc: 'Akute und chronische Wunden',
      title: 'Akute und chronische Wunden: der Unterschied',
      html: `<p>Eine <strong>akute Wunde</strong> entsteht plötzlich, etwa durch einen Schnitt, einen Sturz oder eine Operation. Bei gesunder Haut und guter Durchblutung heilt sie meist innerhalb weniger Tage oder Wochen von allein, wenn sie sauber gehalten wird.</p>
<p>Von einer <strong>chronischen Wunde</strong> spricht man, wenn eine Wunde nach etwa acht Wochen noch nicht abgeheilt ist. Meist steckt eine Grunderkrankung dahinter, die die Heilung bremst: Das Blut fließt schlecht, der Blutzucker ist zu hoch oder die Haut steht dauerhaft unter Druck. Solange diese Ursache nicht behandelt wird, hilft auch der beste Verband nur begrenzt.</p>
<p>Chronische Wunden betreffen nicht nur ältere Menschen. Auch Menschen mit Diabetes, nach einer Operation, mit eingeschränkter Beweglichkeit oder einer Behinderung können betroffen sein.</p>`,
    },
    {
      id: 'chronische-wunden',
      toc: 'Häufige chronische Wunden',
      title: 'Häufige chronische Wunden',
      html: `<p>Drei Arten chronischer Wunden begegnen uns in der ambulanten Pflege besonders oft. Jede hat eigene Ursachen und braucht deshalb eine eigene Behandlung.</p>
<h3>Offenes Bein (Ulcus cruris)</h3>
<p>Ein offenes Bein entsteht meist am Unterschenkel oder am Knöchel. Häufige Ursache ist eine Schwäche der Venen: Das Blut staut sich in den Beinen, die Haut wird schlechter versorgt und kann aufbrechen. Seltener sind Durchblutungsstörungen der Arterien die Ursache. Welche Form vorliegt, muss ärztlich geklärt werden, denn davon hängt die Behandlung ab.</p>
<h3>Diabetisches Fußsyndrom</h3>
<p>Bei Diabetes kann das Gefühl in den Füßen nachlassen. Kleine Verletzungen, Blasen oder Druckstellen werden dann oft lange nicht bemerkt. Gleichzeitig heilen Wunden durch den erhöhten Blutzucker schlechter. Deshalb ist eine regelmäßige Kontrolle der Füße so wichtig.</p>
<h3>Druckgeschwür (Dekubitus)</h3>
<p>Ein Dekubitus entsteht, wenn die Haut lange unter Druck steht, zum Beispiel bei Bettlägerigkeit oder im Rollstuhl. Besonders gefährdet sind Steißbein, Fersen und Hüften. Ein Druckgeschwür kann sich schnell verschlimmern. Vorbeugen ist hier besonders wichtig: regelmäßiges Umlagern, Bewegung und passende Hilfsmittel.</p>
<h3>Wunden nach Operationen</h3>
<p>Auch eine Operationswunde kann Probleme machen, etwa wenn sie nässt, aufgeht oder sich entzündet. Nach der Entlassung aus dem Krankenhaus übernimmt ein Pflegedienst auf Verordnung die Versorgung zu Hause, zieht Fäden oder Klammern und beobachtet die Heilung.</p>`,
    },
    {
      id: 'warnzeichen',
      toc: 'Warnzeichen erkennen',
      title: 'Warnzeichen: Wann Sie ärztlichen Rat brauchen',
      html: `<p>Nicht jede Veränderung ist ein Grund zur Sorge. Bei den folgenden Zeichen sollten Sie aber zeitnah Ihre Hausärztin oder Ihren Hausarzt informieren, denn sie können auf eine Infektion hindeuten:</p>
${ticks([
    'Die Haut rund um die Wunde ist gerötet, geschwollen oder fühlt sich warm an',
    'Die Wunde riecht unangenehm oder sondert mehr oder trübes Sekret ab',
    'Die Schmerzen nehmen zu, statt nachzulassen',
    'Die Wunde wird größer oder tiefer',
    'Fieber, Schüttelfrost oder ein allgemeines Krankheitsgefühl kommen hinzu',
  ])}
${callout_('Im Zweifel ärztlich abklären lassen', 'Dieser Ratgeber kann keine Diagnose ersetzen. Bei Fieber oder einer sich schnell ausbreitenden Rötung wenden Sie sich bitte umgehend an eine Ärztin oder einen Arzt, außerhalb der Sprechzeiten an den ärztlichen Bereitschaftsdienst unter 116&nbsp;117.', 'stetho')}`,
    },
    {
      id: 'wundexperte',
      toc: 'Warum ein Wundexperte hilft',
      title: 'Warum ein Wundexperte den Unterschied macht',
      html: `<p>Einen Verband wechseln kann man lernen. Eine chronische Wunde zum Heilen zu bringen, braucht dagegen Erfahrung. Pflegefachkräfte mit einer Weiterbildung im Wundmanagement achten auf weit mehr als den Verband:</p>
<ul>
  <li><strong>Genaue Wundbeurteilung:</strong> Größe, Tiefe, Wundrand, Belag und Anzeichen einer Infektion werden bei jedem Besuch eingeschätzt.</li>
  <li><strong>Moderne Wundauflagen:</strong> Viele chronische Wunden heilen besser in einem feuchten Wundmilieu. Moderne Auflagen schaffen dieses Milieu und können oft mehrere Tage auf der Wunde bleiben. Welche passt, wird mit der Ärztin oder dem Arzt abgestimmt.</li>
  <li><strong>Lückenlose Dokumentation:</strong> Fotos und Messungen zeigen, ob die Wunde kleiner wird. So fällt schnell auf, wenn die Behandlung angepasst werden muss.</li>
  <li><strong>Behandlung der Ursache:</strong> Beim offenen Bein ist oft eine Kompression wichtig, beim Dekubitus die Druckentlastung, beim diabetischen Fuß ein gut eingestellter Blutzucker. Ein Wundexperte behält das im Blick.</li>
  <li><strong>Schmerz und Hautschutz:</strong> Eine schonende Versorgung und der Schutz der Haut rund um die Wunde machen den Alltag leichter.</li>
</ul>
<p>Im Team des Ambulanten Pflegedienstes Funk GmbH arbeitet eine Fachkraft mit Spezialisierung im Wundmanagement. Mehr dazu lesen Sie auf unserer Seite zur <a href="/leistungen/wundversorgung/">professionellen Wundversorgung</a>.</p>`,
    },
    {
      id: 'heilung-foerdern',
      toc: 'Was die Heilung fördert',
      title: 'Was die Wundheilung unterstützt',
      html: `<p>Eine Wunde heilt von innen. Der Verband schafft gute Bedingungen, doch der Körper braucht dafür Kraft. Diese Faktoren spielen eine wichtige Rolle:</p>
<ul>
  <li><strong>Ernährung:</strong> Der Körper braucht für die Heilung ausreichend Eiweiß, Vitamine und Flüssigkeit. Gerade ältere Menschen essen und trinken oft zu wenig.</li>
  <li><strong>Bewegung:</strong> Schon kurze Wege in der Wohnung oder Fußgymnastik regen die Durchblutung an.</li>
  <li><strong>Grunderkrankungen:</strong> Ein gut eingestellter Blutzucker oder Blutdruck verbessert die Bedingungen für die Heilung.</li>
  <li><strong>Rauchen:</strong> Es verschlechtert die Durchblutung und bremst damit die Wundheilung.</li>
  <li><strong>Hygiene:</strong> Saubere Hände und steriles Material schützen vor Keimen.</li>
</ul>
<p>Welche Maßnahmen in Ihrem Fall sinnvoll sind, besprechen Sie am besten mit Ihrer Ärztin oder Ihrem Arzt. Wir unterstützen Sie dabei im Alltag.</p>`,
    },
    {
      id: 'ablauf',
      toc: 'So läuft es zu Hause ab',
      title: 'So funktioniert Wundversorgung zu Hause',
      html: `<p>Wundversorgung zu Hause gehört zur häuslichen Krankenpflege. Sie ist Teil der <a href="/leistungen/behandlungspflege/">Behandlungspflege</a> und wird von examinierten Pflegefachkräften übernommen. Der Weg dorthin ist einfach:</p>
<ol>
  <li><strong>Ärztliche Verordnung.</strong> Ihre Hausärztin, Ihr Hausarzt oder die Klinik verordnet die häusliche Krankenpflege für die Wundversorgung.</li>
  <li><strong>Pflegedienst beauftragen.</strong> Sie rufen uns an. Wir klären die Details mit der Praxis und der Krankenkasse.</li>
  <li><strong>Erstbesuch.</strong> Eine Pflegefachkraft schaut sich die Wunde an, bespricht den Ablauf mit Ihnen und legt die Besuchszeiten fest.</li>
  <li><strong>Regelmäßige Versorgung.</strong> Wir wechseln die Verbände, dokumentieren den Verlauf und halten die Praxis auf dem Laufenden.</li>
</ol>
<p>Die Kosten übernimmt die Krankenkasse. Volljährige leisten die gesetzliche Zuzahlung, sofern sie nicht davon befreit sind. Einen Pflegegrad brauchen Sie dafür nicht. Wir sind in Hörstel, Mettingen, Recke, Ibbenbüren und Rheine für Sie unterwegs&nbsp;– auch am Wochenende und an Feiertagen.</p>`,
    },
    {
      id: 'angehoerige',
      toc: 'Was Angehörige tun können',
      title: 'Was Angehörige tun können',
      html: `<p>Angehörige spielen bei der Heilung eine wichtige Rolle. Sie sehen die betroffene Person oft täglich und bemerken Veränderungen als Erste. Diese Punkte helfen:</p>
${ticks([
    'Den Verband nicht selbst öffnen oder wechseln, wenn das nicht abgesprochen ist',
    'Veränderungen sofort dem Pflegedienst oder der Arztpraxis melden',
    'Auf ausreichend Trinken und eiweißreiche Ernährung achten',
    'Bewegung fördern, so gut es geht&nbsp;– jeder Schritt verbessert die Durchblutung',
    'Bei Bettlägerigkeit regelmäßig die Lage wechseln und Druckstellen vermeiden',
    'Kompressionsstrümpfe wie verordnet tragen lassen',
    'Bei Diabetes die Füße täglich anschauen und auf gut sitzende Schuhe achten',
  ])}
<p>Bei Kompressionsstrümpfen unterstützen wir Sie gern: Das fachgerechte An- und Ausziehen übernimmt unsere <a href="/leistungen/kompressionsversorgung/">Kompressionsversorgung</a>. Und wenn Sie unsicher sind, ob eine Wunde fachkundige Hilfe braucht, rufen Sie uns einfach an.</p>`,
    },
  ],
  aside: ['Eine Wunde heilt nicht?', 'Unsere Fachkräfte für Wundmanagement kommen zu Ihnen nach Hause und stimmen sich mit Ihrer Arztpraxis ab.'],
  faqTitle: 'Fragen zur <em>Wundversorgung zu Hause.</em>',
  faq: [
    ['Ab wann gilt eine Wunde als chronisch?', 'Wenn sie nach etwa acht Wochen trotz Behandlung nicht abgeheilt ist. Oft steckt eine Grunderkrankung dahinter, etwa ein Venenleiden oder Diabetes. Die Ursache sollte ärztlich abgeklärt werden.'],
    ['Wer bezahlt die Wundversorgung zu Hause?', 'Liegt eine ärztliche Verordnung für häusliche Krankenpflege vor, übernimmt die Krankenkasse die Kosten. Volljährige zahlen in der Regel die gesetzliche Zuzahlung. Ein Pflegegrad ist nicht nötig.'],
    ['Kann ich den Verband auch selbst wechseln?', 'Bei kleinen, akuten Wunden ist das oft möglich. Chronische Wunden sollten aber fachkundig versorgt werden, weil die Wahl der Wundauflage und die Beurteilung der Wunde viel Erfahrung erfordern. Sprechen Sie das mit Ihrer Ärztin oder Ihrem Arzt ab.'],
    ['Was macht ein Wundexperte anders?', 'Er beurteilt die Wunde bei jedem Besuch genau, dokumentiert den Verlauf, wählt passende moderne Wundauflagen in Absprache mit der Praxis und achtet darauf, dass auch die Ursache der Wunde behandelt wird.'],
  ],
  related: ['wundversorgung', 'kompressionsversorgung', 'behandlungspflege'],
});

/* Hinweis-Kasten ohne <p>-Verschachtelungsproblem (Text ist reiner Inline-Inhalt) */
function callout_(title, body, ic) {
  return `<div class="callout" data-reveal>${icon(ic)}<div><strong>${title}</strong><p>${body}</p></div></div>`;
}

/* ---------- Übersicht /ratgeber/ ---------- */
const index = {
  path: '/ratgeber/',
  title: 'Ratgeber Pflege zu Hause | Pflegedienst Funk GmbH',
  description: 'Ratgeber zur Pflege zu Hause: Pflegegrad beantragen, Beratungseinsatz nach § 37.3 SGB XI und Wundversorgung verständlich erklärt. Fragen? 05459 5869825.',
  type: 'blog',
  crumbs: [['Ratgeber']],
  schema: [{
    '@type': 'CollectionPage',
    '@id': `${SITE}/ratgeber/#collection`,
    name: 'Ratgeber für die Pflege zu Hause',
    url: `${SITE}/ratgeber/`,
    inLanguage: 'de-DE',
    publisher: ORG_REF,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: ARTICLES.map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/ratgeber/${a.slug}/`, name: text(a.title) })),
    },
  }],
  body: `${pageHero({
    crumbs: [['Ratgeber']],
    eyebrow: 'Ratgeber',
    title: 'Ratgeber für die <em>Pflege zu Hause.</em>',
    lead: 'Pflegegrad, Pflegegeld, Beratungsbesuch oder eine Wunde, die nicht heilen will: Hier erklären unsere Pflegefachkräfte verständlich, was Sie wissen sollten&nbsp;– für Pflegebedürftige und ihre Familien.',
    compact: true,
  })}

${section({
    id: 'artikel',
    eyebrow: 'Alle Beiträge',
    title: 'Wissen, das im <em>Alltag hilft.</em>',
    body: `<div class="post-feature">
          <div class="post-feature__main" data-reveal>${postCard(ARTICLES[0].slug, true)}</div>
          <ul class="post-rows" role="list">
            ${ARTICLES.slice(1).map((a) => `<li data-reveal>${postCard(a.slug, false, true)}</li>`).join('\n            ')}
          </ul>
        </div>`,
  })}

${section({
    id: 'themen',
    cream: true,
    eyebrow: 'Häufig gefragt',
    title: 'Die Themen, nach denen <em>Familien am meisten fragen.</em>',
    lead: 'Vom ersten Antrag bis zur täglichen Versorgung: Diese Leistungen erklären wir auf eigenen Seiten ausführlich.',
    body: cards([
      ['hands', 'Grundpflege', 'Körperpflege, Anziehen, Mobilisation&nbsp;– über die Pflegekasse ab Pflegegrad&nbsp;2.', '/leistungen/grundpflege/'],
      ['stetho', 'Behandlungspflege', 'Medizinische Pflege auf ärztliche Verordnung, bezahlt von der Krankenkasse.', '/leistungen/behandlungspflege/'],
      ['clipboard', 'Pflegeberatung §&nbsp;37.3', 'Der Beratungsbesuch für Pflegegeld-Empfänger, kostenlos bei Ihnen zu Hause.', '/leistungen/pflegeberatung-37-3/'],
      ['bandage', 'Wundversorgung', 'Fachgerechtes Wundmanagement für chronische und schwer heilende Wunden.', '/leistungen/wundversorgung/'],
      ['swap', 'Verhinderungspflege', 'Vertretung, wenn pflegende Angehörige Urlaub machen oder krank sind.', '/leistungen/verhinderungspflege/'],
      ['home', 'Hauswirtschaft', 'Hilfe beim Einkaufen, Kochen und im Haushalt&nbsp;– auch mit dem Entlastungsbetrag.', '/leistungen/hauswirtschaft/'],
    ]),
  })}

${ctaBand({ title: 'Ihre Frage ist nicht dabei? <em>Fragen Sie uns.</em>', text: 'Wir beraten Sie kostenlos und persönlich zu Pflegegrad, Leistungen und Versorgung zu Hause&nbsp;– in Hörstel, Mettingen, Recke, Ibbenbüren und Rheine.' })}
`,
};

export default [index, pflegegrad, beratung, wunde];
