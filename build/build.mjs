/* Baut alle Unterseiten: node build/build.mjs  (oder npm run build) */
import fs from 'fs';
import path from 'path';
import { ROOT, SITE, renderPage, write } from './lib.mjs';

const dir = path.join(ROOT, 'build/pages');
const pages = [];
for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.mjs')).sort()) {
  const mod = await import(path.join(dir, file));
  pages.push(...[].concat(mod.default));
}

const seen = new Set();
for (const p of pages) {
  if (seen.has(p.path)) throw new Error(`Doppelter Pfad: ${p.path}`);
  seen.add(p.path);
  write(p.path, renderPage(p));
}

// Sitemap aus Startseite + allen gebauten Seiten (Rechtliches mit niedriger Priorität)
const today = new Date().toISOString().slice(0, 10);
const urls = ['/', ...pages.filter((p) => !p.robots?.includes('noindex')).map((p) => p.path)];
const prio = (u) => (u === '/' ? '1.0' : /^\/(impressum|datenschutz)\//.test(u) ? '0.3' : u.split('/').length > 3 ? '0.7' : '0.8');
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod><priority>${prio(u)}</priority></url>`).join('\n')}
</urlset>
`);
console.log(`${pages.length} Seiten gebaut, Sitemap mit ${urls.length} URLs.`);
