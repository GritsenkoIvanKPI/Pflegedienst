/* Kopiert die fertige Website nach public/ (für Vercel). Lokal nicht nötig. */
import fs from 'fs';
import path from 'path';
import { ROOT } from './lib.mjs';

const OUT = path.join(ROOT, 'public');
const SKIP = new Set(['public', 'build', 'node_modules', 'brand_assets', 'temporary screenshots', '.git', '.github', '.vercel']);
const FILES = /\.(html|xml|txt|css|js|webp|png|jpg|jpeg|svg|ico|woff2|webmanifest)$/i;

fs.rmSync(OUT, { recursive: true, force: true });
const copy = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const src = path.join(dir, e.name);
    const rel = path.relative(ROOT, src);
    if (e.isDirectory()) {
      if (SKIP.has(rel) || rel.startsWith('assets/img/src')) continue;
      copy(src);
    } else if (FILES.test(e.name) && !(dir === ROOT && /\.(md|mjs|json)$/.test(e.name))) {
      if (dir === ROOT && !['index.html', 'robots.txt', 'sitemap.xml'].includes(e.name) && !/\.(png|ico|svg)$/.test(e.name)) continue;
      if (dir === ROOT && e.name.endsWith('.png')) continue;
      fs.mkdirSync(path.dirname(path.join(OUT, rel)), { recursive: true });
      fs.copyFileSync(src, path.join(OUT, rel));
    }
  }
};
copy(ROOT);
const count = (d) => fs.readdirSync(d, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? count(path.join(d, e.name)) : 1), 0);
console.log(`public/ erstellt: ${count(OUT)} Dateien.`);
