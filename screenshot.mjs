// Usage: node screenshot.mjs <url> [label] [width]   e.g. node screenshot.mjs http://localhost:3000 mobile 390
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(root, 'temporary screenshots');
fs.mkdirSync(dir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3040';
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const width = parseInt(process.argv[4] || '1440', 10);
const mobile = width < 768;

const nums = fs.readdirSync(dir).map(f => +(f.match(/^screenshot-(\d+)/)?.[1] || 0));
const n = nums.length ? Math.max(...nums) + 1 : 1;
const out = path.join(dir, `screenshot-${n}${label}.png`);

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width, height: mobile ? 844 : 900, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
await page.evaluate(() => document.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; }));
await page.evaluate(() => Promise.race([
  Promise.all([...document.images].filter(i => !i.complete).map(i => new Promise(r => { i.onload = i.onerror = r; }))),
  new Promise(r => setTimeout(r, 8000)),
]));
await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible')));
await new Promise(r => setTimeout(r, 1200));
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(`Saved: ${out}`);
