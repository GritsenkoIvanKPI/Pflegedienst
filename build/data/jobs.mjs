/* Aktuelle Stellenangebote.
   Bis zum Admin-Bereich hier pflegen: Eintrag hinzufügen, ändern oder löschen, dann `npm run build`.
   Leere Liste → die Seite zeigt automatisch den Hinweis auf die Initiativbewerbung.
   Felder: title, slug (für den Bewerbungslink), category, icon (Symbolname), text, requirement, time, place */
export default [
  {
    title: 'Pflegefachfrau / Pflegefachmann (m/w/d)',
    slug: 'pflegefachfrau-pflegefachmann',
    category: 'Fachkraft',
    icon: 'stetho',
    text: 'Sie übernehmen Behandlungspflege und Pflegeplanung, arbeiten in der Bezugspflege und sind feste Ansprechperson für Ihre Kundinnen, Kunden und deren Angehörige.',
    requirement: 'Examen als Pflegefachfrau / Pflegefachmann',
    time: 'Voll- oder Teilzeit',
    place: 'Hörstel und Umgebung',
  },
  {
    title: 'Gesundheits- und Krankenpfleger/in / Altenpfleger/in (m/w/d)',
    slug: 'krankenpfleger-altenpfleger',
    category: 'Fachkraft',
    icon: 'hands',
    text: 'Sie versorgen pflegebedürftige Menschen zu Hause, übernehmen Grund- und Behandlungspflege wie Wundversorgung und Medikamentengabe und begleiten Angehörige mit Ihrer Erfahrung.',
    requirement: 'Examen in der Kranken- oder Altenpflege',
    time: 'Voll- oder Teilzeit',
    place: 'Hörstel und Umgebung',
  },
  {
    title: 'Pflegefachassistent/in (m/w/d)',
    slug: 'pflegefachassistenz',
    category: 'Pflegefachassistenz',
    icon: 'clipboard',
    text: 'Sie unterstützen unsere Pflegefachkräfte bei der Grundpflege und bei ausgewählten Aufgaben der Behandlungspflege, achten auf das Wohlbefinden Ihrer Kundinnen und Kunden und dokumentieren Ihre Einsätze.',
    requirement: 'Ausbildung in der Pflegefachassistenz',
    time: 'Voll- oder Teilzeit',
    place: 'Hörstel und Umgebung',
  },
  {
    title: 'Krankenpflegehelfer/in (m/w/d)',
    slug: 'krankenpflegehelfer',
    category: 'Pflegehilfe',
    icon: 'heart',
    text: 'Sie helfen bei der Körperpflege, beim An- und Auskleiden, bei der Mobilisation und im Alltag&nbsp;– in einem festen Tourenteam und mit vertrauten Kundinnen und Kunden.',
    requirement: 'Ausbildung in der Krankenpflegehilfe',
    time: 'Voll- oder Teilzeit',
    place: 'Hörstel und Umgebung',
  },
  {
    title: 'Hauswirtschafts- und Betreuungskraft (m/w/d)',
    slug: 'hauswirtschaft-betreuung',
    category: 'Hauswirtschaft &amp; Betreuung',
    icon: 'home',
    text: 'Sie unterstützen im Haushalt&nbsp;– Einkaufen, Kochen, Wäsche&nbsp;– und schenken Zeit für Gespräche, Spaziergänge und Begleitung im Alltag.',
    requirement: 'Keine Pflegeausbildung nötig',
    time: 'Voll- oder Teilzeit',
    place: 'Hörstel und Umgebung',
  },
];
