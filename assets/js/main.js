/* Ambulanter Pflegedienst Funk – Interaktionen */
(() => {
  const doc = document.documentElement;
  doc.classList.add('js');

  /* ---------- Schrift vergrößern (wird gemerkt) ---------- */
  const sizeBtn = document.querySelector('[data-textsize]');
  const applySize = (on) => {
    doc.classList.toggle('is-large', on);
    if (sizeBtn) {
      sizeBtn.setAttribute('aria-pressed', String(on));
      sizeBtn.querySelector('span').textContent = on ? 'Normale Schrift' : 'Schrift vergrößern';
    }
  };
  try { applySize(localStorage.getItem('funk-textsize') === 'large'); } catch (e) { /* Speicher nicht verfügbar */ }
  sizeBtn?.addEventListener('click', () => {
    const on = !doc.classList.contains('is-large');
    applySize(on);
    try { localStorage.setItem('funk-textsize', on ? 'large' : 'normal'); } catch (e) { /* ignorieren */ }
    window.dispatchEvent(new Event('funk:textsize'));
  });

  /* ---------- Header-Schatten beim Scrollen + mobile Schnellleiste ---------- */
  const header = document.querySelector('[data-header]');
  const quickbar = document.querySelector('[data-quickbar]');
  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('is-scrolled', y > 8);
    quickbar?.classList.toggle('is-visible', y > 420);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Desktop-Dropdowns (Klick, Tastatur, Hover) ---------- */
  const toggles = [...document.querySelectorAll('[data-panel-toggle]')];
  const closeAll = (except) => toggles.forEach((t) => {
    if (t === except) return;
    t.setAttribute('aria-expanded', 'false');
    document.getElementById(t.getAttribute('aria-controls'))?.classList.remove('is-open');
  });
  const setOpen = (btn, open) => {
    btn.setAttribute('aria-expanded', String(open));
    document.getElementById(btn.getAttribute('aria-controls'))?.classList.toggle('is-open', open);
  };
  toggles.forEach((btn) => {
    const item = btn.closest('.nav__item');
    let timer;
    let hoverOpenedAt = 0;
    btn.addEventListener('click', () => {
      // Klick direkt nach dem Öffnen per Maus-Hover soll das Menü nicht wieder schließen
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      const justHovered = Date.now() - hoverOpenedAt < 600;
      closeAll(btn);
      setOpen(btn, justHovered ? true : !isOpen);
    });
    if (window.matchMedia('(hover: hover)').matches) {
      item.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        if (btn.getAttribute('aria-expanded') !== 'true') hoverOpenedAt = Date.now();
        closeAll(btn);
        setOpen(btn, true);
      });
      item.addEventListener('mouseleave', () => { timer = setTimeout(() => setOpen(btn, false), 220); });
    }
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.nav__item')) closeAll(); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const open = toggles.find((t) => t.getAttribute('aria-expanded') === 'true');
    if (open) { closeAll(); open.focus(); }
    if (menu && !menu.hidden) closeMenu();
  });

  /* ---------- Mobiles Menü ---------- */
  const menu = document.querySelector('[data-mobile-menu]');
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const openMenu = () => {
    menu.hidden = false;
    requestAnimationFrame(() => { menu.classList.add('is-open'); fixAll(menu); });
    document.body.classList.add('menu-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menu.querySelector('[data-menu-close]')?.focus();
  };
  const closeMenu = () => {
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    setTimeout(() => { menu.hidden = true; }, 300);
    menuBtn.focus();
  };
  menuBtn?.addEventListener('click', openMenu);
  menu?.querySelectorAll('[data-menu-close]').forEach((el) => el.addEventListener('click', closeMenu));

  /* ---------- Zeilenumbrüche: keine Einzelwörter, keine kurzen Wörter am Zeilenende ----------
     Verbindet Wörter mit geschütztem Leerzeichen – nur dort, wo das Ergebnis in die Zeile passt.
     Läuft nach dem Laden der Schriften und erneut bei geänderter Fensterbreite. */
  const SHORT = new Set(('in im am an zu zum zur und die der das den dem des ein eine einen einer eines mit für bei '
    + 'beim von vor aus auf um ob so wie wir sie ihr ihre es er ist bis per pro nur oft ab da wo je oder nach über '
    + 'ohne auch sich wenn dass seit & + §').split(' '));
  const NBSP = ' ';
  let glued = [];

  // Inline-Elemente gehören zur Zeile ihres Blocks; Blöcke (auch Flex-Kinder, Buttons) sind eigene Textflächen
  const isInline = (e) => { const d = getComputedStyle(e).display; return d === 'inline' || d === 'contents'; };
  const wordsOf = (el) => {
    const words = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => {
        if (n.nodeType === 3) return NodeFilter.FILTER_ACCEPT;
        if (n.namespaceURI === 'http://www.w3.org/2000/svg') return NodeFilter.FILTER_REJECT;
        return isInline(n) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_REJECT;
      },
    });
    let node;
    while ((node = walker.nextNode())) {
      const re = /[^\s ]+/g;
      let m;
      while ((m = re.exec(node.data))) {
        const range = document.createRange();
        range.setStart(node, m.index);
        range.setEnd(node, m.index + m[0].length);
        const rect = range.getClientRects()[0];
        if (rect && rect.width) words.push({ node, start: m.index, end: m.index + m[0].length, text: m[0], top: rect.top });
      }
    }
    return words;
  };
  const linesOf = (words) => {
    const lines = [];
    words.forEach((w) => {
      const line = lines[lines.length - 1];
      if (line && Math.abs(line.top - w.top) < 6) line.words.push(w);
      else lines.push({ top: w.top, words: [w] });
    });
    return lines;
  };
  // Leerzeichen direkt nach Wort `w` schützen; rückgängig machen, wenn es nicht mehr passt
  const glueAfter = (el, w) => {
    const { node, end } = w;
    if (node.data[end] !== ' ') return false;
    // Breite VOR der Änderung messen – sonst könnte ein Grid-Spalte mitwachsen
    const box = el.getBoundingClientRect();
    const pageW = document.documentElement.scrollWidth;
    node.data = node.data.slice(0, end) + NBSP + node.data.slice(end + 1);
    const now = el.getBoundingClientRect();
    const fits = now.width <= box.width + 1 && document.documentElement.scrollWidth <= pageW
      && el.scrollWidth <= el.clientWidth + 1 && wordsOf(el).every((x) => {
      const r = document.createRange();
      r.setStart(x.node, x.start); r.setEnd(x.node, x.end);
      const rect = r.getBoundingClientRect();
      return rect.right <= box.right + 1 && rect.left >= box.left - 1;
    });
    if (!fits) { node.data = node.data.slice(0, end) + ' ' + node.data.slice(end + 1); return false; }
    glued.push({ node, index: end });
    return true;
  };
  const typeset = () => {
    // vorherige Anpassungen zurücksetzen (neue Breite → neue Umbrüche)
    glued.forEach(({ node, index }) => {
      if (node.data[index] === NBSP) node.data = node.data.slice(0, index) + ' ' + node.data.slice(index + 1);
    });
    glued = [];
    fixAll(document);
  };
  const fixAll = (root) => root.querySelectorAll('*').forEach((el) => {
    if (el.namespaceURI === 'http://www.w3.org/2000/svg' || /^(SCRIPT|STYLE|NOSCRIPT|SELECT|OPTION|TEXTAREA|INPUT)$/.test(el.tagName)) return;
    if (!el.getClientRects().length || isInline(el)) return;
    if (![...el.childNodes].some((n) => n.nodeType === 3 ? n.data.trim() : n.nodeType === 1 && isInline(n))) return;
    fixEl(el);
  });
  const fixEl = (el) => {
    for (let pass = 0; pass < 12; pass += 1) {
      const lines = linesOf(wordsOf(el));
      if (lines.length < 2) return;
      let changed = false;
      // 1) kurzes Wort am Zeilenende → an das nächste Wort binden
      for (const line of lines.slice(0, -1)) {
        const last = line.words[line.words.length - 1];
        const bare = last.text.toLowerCase().replace(/^[„"(]+/, '');
        if ((SHORT.has(bare) || (bare.length <= 2 && /^\p{L}/u.test(bare))) && glueAfter(el, last)) { changed = true; break; }
      }
      // 2) einzelnes Wort in der letzten Zeile → mit dem vorherigen Wort verbinden
      if (!changed) {
        const lastLine = lines[lines.length - 1];
        if (lastLine.words.length === 1) {
          const prevLine = lines[lines.length - 2].words;
          if (glueAfter(el, prevLine[prevLine.length - 1])) changed = true;
        }
      }
      if (!changed) return;
    }
  };
  let typesetWidth = 0;
  const runTypeset = () => {
    if (window.innerWidth === typesetWidth) return;
    typesetWidth = window.innerWidth;
    typeset();
  };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(runTypeset);
  let typesetTimer;
  window.addEventListener('resize', () => { clearTimeout(typesetTimer); typesetTimer = setTimeout(runTypeset, 200); });
  // andere Schriftgröße → Zeilenumbrüche neu berechnen
  window.addEventListener('funk:textsize', () => { typesetWidth = 0; runTypeset(); });
  // FAQ-Antworten werden erst beim Öffnen sichtbar
  document.addEventListener('toggle', (e) => { if (e.target.open) fixAll(e.target); }, true);

  /* ---------- Einblenden beim Scrollen ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    // Elemente in derselben Gruppe leicht versetzt einblenden
    const groups = new Map();
    revealEls.forEach((el) => {
      const parent = el.parentElement;
      const i = groups.get(parent) || 0;
      el.style.setProperty('--d', `${Math.min(i, 5) * 0.08}s`);
      groups.set(parent, i + 1);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Kontaktformular ---------- */
  const form = document.querySelector('[data-form]');
  if (form) {
    const ts = form.querySelector('[data-ts]');
    if (ts) ts.value = String(Date.now());

    const fields = {
      name: { el: form.querySelector('#f-name'), test: (v) => v.trim().length > 1 },
      phone: { el: form.querySelector('#f-phone'), test: (v) => v.replace(/[^\d]/g, '').length >= 6 },
      mail: { el: form.querySelector('#f-mail'), test: (v) => v.trim() === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
    };
    const consent = form.querySelector('input[name="datenschutz"]');
    const consentErr = form.querySelector('#f-check-err');

    const check = (f) => {
      const ok = f.test(f.el.value);
      const wrap = f.el.closest('.field');
      wrap.classList.toggle('has-error', !ok);
      f.el.setAttribute('aria-invalid', String(!ok));
      const err = wrap.querySelector('.field__error');
      if (!ok) f.el.setAttribute('aria-describedby', err.id); else f.el.removeAttribute('aria-describedby');
      return ok;
    };
    Object.values(fields).forEach((f) => f.el.addEventListener('blur', () => { if (f.el.value) check(f); }));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let firstBad = null;
      Object.values(fields).forEach((f) => { if (!check(f) && !firstBad) firstBad = f.el; });
      const consentOk = consent.checked;
      consentErr.classList.toggle('is-visible', !consentOk);
      if (!consentOk && !firstBad) firstBad = consent;
      if (firstBad) { firstBad.focus(); return; }
      // Honeypot gefüllt → still verwerfen
      if (form.querySelector('#f-website').value) return;
      // Versand an /kontakt/senden.php (PHP) – Erfolg nur bei bestätigter Zustellung anzeigen
      const btn = form.querySelector('[data-form-submit]');
      const err = form.querySelector('[data-form-error]');
      const page = form.querySelector('[data-page]');
      if (page) page.value = location.pathname;
      err.hidden = true;
      btn.disabled = true;
      btn.querySelector('span').textContent = 'Wird gesendet …';
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) throw new Error(data.error || 'send failed');
        form.querySelector('.form__success').hidden = false;
        btn.querySelector('span').textContent = 'Gesendet';
      } catch (ex) {
        err.hidden = false;
        btn.disabled = false;
        btn.querySelector('span').textContent = 'Anfrage senden';
      }
    });
  }

  /* FAQ: immer nur eine Frage offen (Fallback für Browser ohne <details name>) */
  const faqItems = document.querySelectorAll('.faq__item, .qa__item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      faqItems.forEach((other) => { if (other !== item && other.open) other.open = false; });
    });
  });

  /* ---------- Google Maps erst nach Klick laden (DSGVO), Wahl wird gemerkt ---------- */
  const gmap = document.querySelector('[data-gmap]');
  const loadMap = () => {
    if (!gmap) return;
    const frame = document.createElement('iframe');
    frame.className = 'map__frame';
    frame.title = 'Google Maps: Ambulanter Pflegedienst Funk, Bahnhofstraße 33, 48477 Hörstel';
    frame.src = 'https://maps.google.com/maps?q=' + encodeURIComponent('Ambulanter Pflegedienst Funk, Bahnhofstraße 33, 48477 Hörstel') + '&z=11&hl=de&output=embed';
    frame.referrerPolicy = 'no-referrer-when-downgrade';
    frame.allowFullscreen = true;
    gmap.replaceChildren(frame);
  };
  try { if (localStorage.getItem('funk-gmaps') === 'yes') loadMap(); } catch (e) { /* Speicher nicht verfügbar */ }
  gmap?.querySelector('[data-gmap-load]')?.addEventListener('click', () => {
    try { localStorage.setItem('funk-gmaps', 'yes'); } catch (e) { /* ignorieren */ }
    loadMap();
  });

  /* ---------- Online-Bewerbung: Prüfung, Dateiauswahl, Versand per PHP ---------- */
  const apply = document.querySelector('[data-apply]');
  if (apply) {
    const MAX = 5 * 1024 * 1024;
    const OK_EXT = /\.(pdf|docx?|jpe?g|png)$/i;
    const ts = apply.querySelector('[data-ts]');
    if (ts) ts.value = String(Date.now());

    // Stelle aus dem Link vorauswählen (?stelle=pflegefachkraft)
    const wanted = new URLSearchParams(location.search).get('stelle');
    const jobSel = apply.querySelector('[data-job]');
    if (wanted && jobSel) {
      const opt = [...jobSel.options].find((o) => o.dataset.slug === wanted);
      if (opt) jobSel.value = opt.value;
    }

    // Dateinamen anzeigen
    apply.querySelectorAll('[data-upload] input[type="file"]').forEach((inp) => {
      const name = inp.closest('[data-upload]').querySelector('[data-upload-name]');
      const empty = name.textContent;
      inp.addEventListener('change', () => {
        const files = [...inp.files];
        name.textContent = files.length ? files.map((f) => f.name).join(', ') : empty;
        inp.closest('[data-upload]').classList.toggle('has-file', files.length > 0);
        checkFile(inp);
      });
    });

    const mark = (el, ok) => {
      const wrap = el.closest('.field, [data-upload]');
      wrap.classList.toggle('has-error', !ok);
      el.setAttribute('aria-invalid', String(!ok));
      return ok;
    };
    const checkFile = (inp) => {
      const files = [...inp.files];
      if (inp.required && !files.length) return mark(inp, false);
      return mark(inp, files.every((f) => f.size <= MAX && OK_EXT.test(f.name)));
    };
    const rules = {
      '#a-first': (v) => v.trim().length > 1,
      '#a-last': (v) => v.trim().length > 1,
      '#a-mail': (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      '#a-phone': (v) => v.replace(/[^\d]/g, '').length >= 6,
      '#a-job': (v) => v !== '',
    };
    Object.entries(rules).forEach(([sel, test]) => {
      const el = apply.querySelector(sel);
      el.addEventListener('blur', () => { if (el.value) mark(el, test(el.value)); });
      ['input', 'change'].forEach((ev) => el.addEventListener(ev, () => { if (el.closest('.has-error')) mark(el, test(el.value)); }));
    });
    apply.querySelector('input[name="datenschutz"]').addEventListener('change', (ev) => { if (ev.target.checked) apply.querySelector('#a-check-err').classList.remove('is-visible'); });

    const errBox = apply.querySelector('[data-apply-error]');
    const btn = apply.querySelector('[data-apply-submit]');
    const consent = apply.querySelector('input[name="datenschutz"]');
    const consentErr = apply.querySelector('#a-check-err');

    apply.addEventListener('submit', async (e) => {
      e.preventDefault();
      errBox.hidden = true;
      let firstBad = null;
      Object.entries(rules).forEach(([sel, test]) => { const el = apply.querySelector(sel); if (!mark(el, test(el.value)) && !firstBad) firstBad = el; });
      apply.querySelectorAll('[data-upload] input[type="file"]').forEach((inp) => { if (!checkFile(inp) && !firstBad) firstBad = inp; });
      consentErr.classList.toggle('is-visible', !consent.checked);
      if (!consent.checked && !firstBad) firstBad = consent;
      if (firstBad) { firstBad.focus(); return; }
      if (apply.querySelector('#a-website').value) return; // Honeypot

      btn.disabled = true;
      btn.querySelector('span').textContent = 'Wird gesendet …';
      try {
        const res = await fetch(apply.action, { method: 'POST', body: new FormData(apply), headers: { Accept: 'application/json' } });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) throw new Error(data.error || 'send failed');
        apply.querySelector('.apply__form-body').hidden = true;
        const ok = apply.querySelector('[data-apply-success]');
        ok.hidden = false;
        ok.focus();
        ok.scrollIntoView({ block: 'center' });
      } catch (err) {
        errBox.hidden = false;
        errBox.scrollIntoView({ block: 'center' });
        btn.disabled = false;
        btn.querySelector('span').textContent = 'Bewerbung absenden';
      }
    });
  }
})();
