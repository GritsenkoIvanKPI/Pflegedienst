# Pflegedienst Funk — site structure, navigation & SEO plan

Status: home page implemented (concept for approval). All other pages are planned; their links already point to the final URLs but show "Diese Seite ist in Vorbereitung" when clicked.

## 1. Navigation logic

**Header (desktop)** — max. 6 items, every item one click from the home page:

| Item | Type | Target |
|---|---|---|
| Leistungen ▾ | Mega menu (2 groups + phone box) | 8 service pages + `/leistungen/` |
| Einsatzgebiete ▾ | Dropdown with sub-places | 5 city pages + `#einsatzgebiete` |
| Über uns | Link | `/ueber-uns/` |
| Ratgeber | Link | `/ratgeber/` |
| Karriere | Link | `/karriere/` |
| Kontakt | Link | `/kontakt/` |
| **Rückruf anfordern** | Gold CTA | contact form |

Above the header: office hours, e-mail, **phone number**, and a "Schrift vergrößern" (larger text) button for older visitors.

**Mobile:** logo + gold phone button + labelled "Menü" button (text, not just an icon). Full-screen menu with large tap targets; phone CTA at the bottom. After scrolling, a fixed bottom bar shows **Anrufen** and **Rückruf**.

**Every page** (template rule): breadcrumb → H1 → content → contact CTA block → footer with all service and city links. Dropdowns open on click (and on hover with a mouse) and close with Esc, so they work for keyboard and touch users.

## 2. URL structure

Flat, readable German URLs; keyword in the slug; umlauts transliterated (ö → oe, ü → ue).

```
/                                       Startseite
/leistungen/                            Leistungen (overview)
/leistungen/grundpflege/
/leistungen/behandlungspflege/          ← links to medikamentengabe + kompressionsversorgung
/leistungen/wundversorgung/
/leistungen/hauswirtschaft/
/leistungen/pflegeberatung-37-3/
/leistungen/verhinderungspflege/
/leistungen/medikamentengabe/           ← links back to behandlungspflege
/leistungen/kompressionsversorgung/     ← links back to behandlungspflege
/pflegedienst-hoerstel/                 (Bevergern, Riesenbeck, Dreierwalde)
/pflegedienst-mettingen/                (Schlickelde, Espel)
/pflegedienst-recke/                    (Steinbeck, Obersteinbeck, Uffeln)
/pflegedienst-ibbenbueren/              (Bockraden, Dickenberg, Püsselbüren)
/pflegedienst-rheine/                   (Rodde, Altenrheine)
/ueber-uns/
/ratgeber/                              Blog list
/ratgeber/pflegegrad-pflegeleistungen/
/ratgeber/beratungseinsatz-37-3-sgb-xi/
/ratgeber/professionelle-wundversorgung-zu-hause/
/karriere/                              (kept from old site)
/kontakt/                               (kept from old site)
/impressum/                             (kept from old site)
/datenschutz/                           (kept from old site)
```

City pages sit at root level (`/pflegedienst-hoerstel/`) because the slug then matches the main local search query exactly ("Pflegedienst Hörstel").

## 3. Page plan: H1, title, primary keywords

| Page | H1 | Title (≤ 60 chars) | Primary keywords |
|---|---|---|---|
| Startseite | Ihr ambulanter Pflegedienst in Hörstel und Umgebung | Pflegedienst Hörstel & Umgebung \| Ambulante Pflege Funk | pflegedienst hörstel, ambulanter pflegedienst hörstel, ambulante pflege |
| Grundpflege | Grundpflege zu Hause | Grundpflege zu Hause in Hörstel \| Pflegedienst Funk | grundpflege, körperpflege zu hause |
| Behandlungspflege | Behandlungspflege nach ärztlicher Verordnung | Behandlungspflege in Hörstel & Umgebung \| Funk | behandlungspflege, häusliche krankenpflege |
| Wundversorgung | Professionelle Wundversorgung zu Hause | Wundversorgung & Wundmanagement zu Hause \| Funk | wundversorgung zu hause, wundmanagement ambulant |
| Hauswirtschaft | Hauswirtschaftliche Versorgung | Hilfe im Haushalt für Senioren \| Pflegedienst Funk | haushaltshilfe pflegegrad, hauswirtschaftliche versorgung |
| Pflegeberatung §37.3 | Beratungseinsatz nach § 37.3 SGB XI | Beratungseinsatz § 37.3 SGB XI in Hörstel \| Funk | beratungseinsatz 37.3, pflichtberatung pflegegeld |
| Verhinderungspflege | Verhinderungspflege durch den Pflegedienst | Verhinderungspflege zu Hause \| Pflegedienst Funk | verhinderungspflege ambulant |
| Medikamentengabe | Medikamentengabe zu Hause | Medikamentengabe durch den Pflegedienst \| Funk | medikamentengabe pflegedienst |
| Kompressionsversorgung | Kompressionsstrümpfe an- und ausziehen | Kompressionsversorgung zu Hause \| Funk | kompressionsstrümpfe anziehen pflegedienst |
| City pages (×5) | Ambulanter Pflegedienst in {Stadt} | Pflegedienst {Stadt} \| Ambulante Pflege Funk | pflegedienst {stadt}, ambulante pflege {stadt}, + sub-place names |
| Über uns | Über den Pflegedienst Funk | Über uns – Ambulanter Pflegedienst Funk, Hörstel | |
| Karriere | Karriere in der ambulanten Pflege | Jobs Pflege Hörstel – Karriere beim Pflegedienst Funk | pflegefachkraft jobs hörstel, pflegehelfer stellen |
| Kontakt | Kontakt zum Pflegedienst Funk | Kontakt – Pflegedienst Funk Hörstel | |

The full semantic core (search-volume research, clusters per page) is the next step; this table defines which page owns which query group, so pages don't compete with each other.

## 4. Internal linking rules

- Home links to every service and city page (cards, chips, footer).
- Every service page links to: 2–3 related services, all 5 city pages (footer), 1 matching Ratgeber article, and the contact form.
- Medikamentengabe and Kompressionsversorgung ↔ Behandlungspflege (both directions, in the body text).
- Every city page links to all core services, using anchors like "Wundversorgung in Rheine".
- Ratgeber articles link to the service they explain (Pflegegrad → Leistungen, §37.3 → Pflegeberatung, Wunde → Wundversorgung).

## 5. SEO migration from the old WordPress site

Old URLs found in the sitemaps (Yoast) on 30.10.2026:

| Old URL | Action |
|---|---|
| `/` | keep |
| `/karriere/`, `/kontakt/`, `/impressum/`, `/datenschutz/` | keep (same URL) |
| `/pflegedienst-funk/` (already redirects to `/`) | 301 → `/ueber-uns/` |
| `/under-construction/` | 301 → `/` |
| `/recipe/*`, `/recipe-category/*` (theme demo content) | 410 Gone |
| `/fusion_tb_category/*`, `/element_category/*` (theme internals) | 410 Gone |
| `/wp-content/uploads/*` images | 301 → new images where an equivalent exists, otherwise leave to 404 |
| old sitemaps (`/sitemap_index.xml`, `/page-sitemap.xml`, …) | 301 → `/sitemap.xml` |

Implemented in [.htaccess](.htaccess). Before launch: export the top pages and inbound links from Google Search Console and add any further URLs to the table.

Launch checklist: copy metadata → upload `sitemap.xml` → submit in Search Console → check redirects (status codes) → monitor "Pages" and "Performance" reports for 4 weeks.

## 6. Technical decisions on the home page

- **No external requests** (fonts self-hosted, no Tailwind CDN, no Google Maps embed) → nothing needs cookie consent, which helps both DSGVO and page speed.
- Structured data: `MedicalBusiness` (address, phone, opening hours, all served places, service catalogue), `WebSite`, `FAQPage`.
- Images: WebP in 640/1200 px with `srcset`, lazy-loaded below the fold, hero preloaded.
- Contact form: honeypot + timestamp for spam protection (checked server-side in `kontakt/senden.php`, to be built in PHP).
- Accessibility for 70+: 19–20 px body text, buttons ≥ 56 px tall, high contrast (no gold text on white), visible focus rings, text-size toggle, `prefers-reduced-motion` respected.
