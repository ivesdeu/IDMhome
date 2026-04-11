(() => {
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

  // Testimonials carousel
  const root = document.querySelector('[data-testimonials]');
  if (root) {
    const quoteEl = root.querySelector('[data-testimonial-quote]');
    const nameEl = root.querySelector('[data-testimonial-name]');
    const titleEl = root.querySelector('[data-testimonial-title]');
    const indexEl = root.querySelector('[data-testimonial-index]');
    const totalEl = root.querySelector('[data-testimonial-total]');
    const prevBtn = root.querySelector('[data-testimonial-prev]');
    const nextBtn = root.querySelector('[data-testimonial-next]');

    const testimonials = [
      {
        quote:
          'Ives Deutschmann Marketing transformed our paid acquisition strategy. We scaled from $50K to $500K monthly revenue while improving ROAS by 2.7x.',
        name: 'Sarah Johnson',
        title: 'CEO, UrbanThread',
      },
      {
        quote:
          'Their analytics infrastructure gave us clarity we never had. Now every decision is backed by clean attribution data.',
        name: 'Marcus Chen',
        title: 'Founder, Elixify Supplements',
      },
      {
        quote:
          'We needed a partner who understood performance, not vanity metrics. Ives Deutschmann Marketing delivered a 3.1x return on ad spend within 90 days.',
        name: 'Emily Rodriguez',
        title: 'Marketing Director, Luxe Beauty',
      },
      {
        quote:
          'Their CRO work increased our conversion rate by 140%. Finally, an agency that focuses on what actually matters—revenue.',
        name: 'David Kim',
        title: 'Co-Founder, Modern Furniture Co.',
      },
      {
        quote:
          'The SEO strategy they built compounds every month. Our organic traffic grew 220% year-over-year with zero waste.',
        name: 'Rachel Adams',
        title: 'VP Marketing, Tech Startup',
      },
      {
        quote:
          'They restructured our entire growth model. The result? Predictable, scalable acquisition we can actually forecast.',
        name: 'James Martinez',
        title: 'Founder, Artisan Coffee Co.',
      },
    ];

    let currentIndex = 0;

    const pad2 = (n) => String(n).padStart(2, '0');

    const render = () => {
      if (quoteEl) quoteEl.textContent = `"${testimonials[currentIndex].quote}"`;
      if (nameEl) nameEl.textContent = testimonials[currentIndex].name;
      if (titleEl) titleEl.textContent = testimonials[currentIndex].title;
      if (indexEl) indexEl.textContent = pad2(currentIndex + 1);
      if (totalEl) totalEl.textContent = pad2(testimonials.length);
    };

    const next = () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      render();
    };
    const prev = () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      render();
    };

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    render();
  }

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

  // Light scroll parallax ([data-parallax] = strength multiplier; respects prefers-reduced-motion)
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length) {
    const reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      const maxPx = 28;
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

