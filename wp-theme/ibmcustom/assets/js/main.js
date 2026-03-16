(() => {
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
})();

