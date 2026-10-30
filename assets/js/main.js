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
    requestAnimationFrame(() => menu.classList.add('is-open'));
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

  /* ---------- Unterseiten noch nicht verfügbar (Konzeptphase) ---------- */
  const toast = document.querySelector('[data-toast]');
  let toastTimer;
  const showToast = (text) => {
    toast.textContent = text;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add('is-visible'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => { toast.hidden = true; }, 350);
    }, 2600);
  };
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="/"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href === '/' || href.startsWith('/#')) return;
    e.preventDefault();
    showToast('Diese Seite ist in Vorbereitung.');
  });

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

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let firstBad = null;
      Object.values(fields).forEach((f) => { if (!check(f) && !firstBad) firstBad = f.el; });
      const consentOk = consent.checked;
      consentErr.classList.toggle('is-visible', !consentOk);
      if (!consentOk && !firstBad) firstBad = consent;
      if (firstBad) { firstBad.focus(); return; }
      // Honeypot gefüllt → still verwerfen
      if (form.querySelector('#f-website').value) return;
      // Konzeptphase: Versand erfolgt später serverseitig (PHP, /kontakt/senden.php)
      form.querySelector('.form__success').hidden = false;
      form.querySelector('button[type="submit"]').disabled = true;
    });
  }
})();
