(() => {
  // Remove legacy collaborations carousel if old homepage content still renders from WP data.
  const legacySections = Array.from(document.querySelectorAll('section'));
  legacySections.forEach((section) => {
    if (!(section instanceof HTMLElement)) return;
    const text = section.textContent || '';
    const hasLegacyHeading = text.includes('Trusted by growing businesses');
    const hasLegacyLogos =
      section.querySelector('img[src*="whirly-wash-logo"]') ||
      section.querySelector('img[src*="amauwm-logo"]') ||
      section.querySelector('img[src*="badger-window-cleaners-logo"]');
    if (hasLegacyHeading || hasLegacyLogos) {
      section.remove();
    }
  });

  // Hero glitch chars
  const glitchRoots = document.querySelectorAll('[data-glitch-hero]');
  if (glitchRoots.length) {
    const GLITCH_CHARS = '*#@$%&!?<>';
    const GLITCH_INTERVAL_MS = 100;

    const tick = () => {
      glitchRoots.forEach((root) => {
        const a = root.querySelector('[data-glitch-char-a]');
        const b = root.querySelector('[data-glitch-char-b]');
        if (a) a.textContent = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        if (b) b.textContent = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
      });
    };

    tick();
    setInterval(tick, GLITCH_INTERVAL_MS);
  }

  // Stats count-up (runs once when each [data-countup-root] enters the viewport)
  const countupRoots = document.querySelectorAll('[data-countup-root]');
  if (countupRoots.length && 'IntersectionObserver' in window) {
    const duration = 1600;
    const easeOutQuart = (t) => 1 - (1 - t) ** 4;

    const animateNumber = (el) => {
      if (el.dataset.countupDone === '1' || el.dataset.countupRunning === '1') return;
      el.dataset.countupRunning = '1';

      const value = parseFloat(el.getAttribute('data-stat-value') || '0');
      const decimals = parseInt(el.getAttribute('data-stat-decimals') || '0', 10);

      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuart(progress);
        const current = value * eased;

        if (decimals > 0) el.textContent = current.toFixed(decimals);
        else el.textContent = String(Math.round(current));

        if (progress < 1) requestAnimationFrame(step);
        else el.dataset.countupDone = '1';
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const root = entry.target;
          const numEls = root.querySelectorAll('[data-stat-value]');
          numEls.forEach(animateNumber);
          observer.unobserve(root);
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    countupRoots.forEach((root) => observer.observe(root));
  } else if (countupRoots.length) {
    // Fallback for very old browsers: just set final values.
    countupRoots.forEach((root) => {
      const numEls = root.querySelectorAll('[data-stat-value]');
      numEls.forEach((el) => {
        const value = parseFloat(el.getAttribute('data-stat-value') || '0');
        const decimals = parseInt(el.getAttribute('data-stat-decimals') || '0', 10);
        if (decimals > 0) el.textContent = value.toFixed(decimals);
        else el.textContent = String(Math.round(value));
      });
    });
  }

  // FAQ accordion
  const accordions = document.querySelectorAll('[data-faq-accordion]');
  accordions.forEach((accordion) => {
    const items = Array.from(accordion.querySelectorAll('[data-faq-item]'));
    items.forEach((item, idx) => {
      const trigger = item.querySelector('[data-faq-trigger]');
      const panel = item.querySelector('[data-faq-panel]');
      const chevron = item.querySelector('.faq-chevron');
      if (!trigger || !panel) return;

      const setOpen = (open) => {
        panel.classList.toggle('hidden', !open);
        if (chevron) chevron.classList.toggle('rotate-180', open);
      };

      // Default: first item open (matches React initial state = 0)
      setOpen(idx === 0);

      trigger.addEventListener('click', () => {
        const isOpen = !panel.classList.contains('hidden');
        items.forEach((it) => {
          const p = it.querySelector('[data-faq-panel]');
          const c = it.querySelector('.faq-chevron');
          if (p) p.classList.add('hidden');
          if (c) c.classList.remove('rotate-180');
        });
        setOpen(!isOpen);
      });
    });
  });

  // Mobile nav: overflow detection (show hamburger when inline links don’t fit) + hamburger toggle
  const siteNav = document.querySelector('[data-site-nav]');
  const desktopNav = siteNav?.querySelector('[data-desktop-nav]');
  const menuBtn = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.getElementById('ibm-mobile-menu');

  const updateNavOverflow = () => {
    if (!(siteNav instanceof HTMLElement) || !(desktopNav instanceof HTMLElement)) return;
    const mqWide = window.matchMedia('(min-width: 768px)');
    if (!mqWide.matches) {
      siteNav.removeAttribute('data-nav-overflow');
      return;
    }
    siteNav.removeAttribute('data-nav-overflow');
    void desktopNav.offsetWidth;
    if (desktopNav.scrollWidth > desktopNav.clientWidth + 2) {
      siteNav.setAttribute('data-nav-overflow', '');
    }
  };

  if (menuBtn instanceof HTMLButtonElement && mobileMenu instanceof HTMLElement) {
    const openLabel = menuBtn.dataset.labelOpen || 'Open menu';
    const closeLabel = menuBtn.dataset.labelClose || 'Close menu';

    const closeMenu = () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.setAttribute('aria-hidden', 'true');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', openLabel);
      document.body.classList.remove('ibm-mobile-nav-open');
    };

    const openMenu = () => {
      mobileMenu.classList.remove('hidden');
      mobileMenu.setAttribute('aria-hidden', 'false');
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.setAttribute('aria-label', closeLabel);
      document.body.classList.add('ibm-mobile-nav-open');
    };

    const syncNavLayout = () => {
      updateNavOverflow();
      const wide = window.matchMedia('(min-width: 768px)').matches;
      const overflow = siteNav instanceof HTMLElement && siteNav.hasAttribute('data-nav-overflow');
      if (wide && !overflow && !mobileMenu.classList.contains('hidden')) closeMenu();
    };

    updateNavOverflow();
    if (siteNav instanceof HTMLElement && 'ResizeObserver' in window) {
      new ResizeObserver(() => requestAnimationFrame(syncNavLayout)).observe(siteNav);
    }
    window.addEventListener('resize', () => requestAnimationFrame(syncNavLayout));

    menuBtn.addEventListener('click', () => {
      if (mobileMenu.classList.contains('hidden')) openMenu();
      else closeMenu();
    });

    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) closeMenu();
    });
  } else {
    updateNavOverflow();
    if (siteNav instanceof HTMLElement && 'ResizeObserver' in window && desktopNav instanceof HTMLElement) {
      new ResizeObserver(() => requestAnimationFrame(updateNavOverflow)).observe(siteNav);
    }
    window.addEventListener('resize', () => requestAnimationFrame(updateNavOverflow));
  }

  // Scroll reveal animations (light, one-time, reduced-motion aware)
  const reducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    const revealTargets = [
      ...document.querySelectorAll('[data-reveal]'),
      ...document.querySelectorAll(
        'main section h2, main section h3, main section .group.bg-card, main section [data-faq-item]'
      ),
      ...document.querySelectorAll(
        'main section .group.relative.rounded-2xl.overflow-hidden.cursor-pointer'
      ),
    ];

    const seen = new Set();
    const revealEls = revealTargets.filter((el) => {
      if (!(el instanceof HTMLElement)) return false;
      if (seen.has(el)) return false;
      seen.add(el);
      return true;
    });

    if (revealEls.length && 'IntersectionObserver' in window) {
      revealEls.forEach((el, idx) => {
        el.classList.add('ibm-reveal');
        if (!el.hasAttribute('data-reveal-delay')) {
          el.style.setProperty('--ibm-reveal-delay', `${(idx % 6) * 45}ms`);
        } else {
          el.style.setProperty('--ibm-reveal-delay', `${el.getAttribute('data-reveal-delay')}ms`);
        }
      });

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            if (!(el instanceof HTMLElement)) return;
            el.classList.add('ibm-reveal-visible');
            revealObserver.unobserve(el);
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      );

      revealEls.forEach((el) => revealObserver.observe(el));
    }
  }

  // Light scroll parallax ([data-parallax] = strength multiplier; respects prefers-reduced-motion)
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length) {
    const reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      const maxPx = 14;
      let ticking = false;

      const updateParallax = () => {
        ticking = false;
        const vh = window.innerHeight || 1;
        const vCenter = vh * 0.5;

        parallaxEls.forEach((el) => {
          if (!(el instanceof HTMLElement)) return;
          const raw = el.getAttribute('data-parallax') || '0.1';
          const strength = parseFloat(raw, 10);
          if (!Number.isFinite(strength)) return;

          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const progress = (vCenter - elCenter) / vh;
          const clamped = Math.max(-1, Math.min(1, progress));
          const y = clamped * strength * maxPx;
          el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
        });
      };

      const onScrollOrResize = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateParallax);
        }
      };

      window.addEventListener('scroll', onScrollOrResize, { passive: true });
      window.addEventListener('resize', onScrollOrResize, { passive: true });
      updateParallax();
    }
  }
})();

