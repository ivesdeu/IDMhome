<?php
/**
 * Contact page (matches React ContactPage).
 *
 * @package ibmhome
 */

get_header();
?>

<main class="min-h-screen bg-gradient-page font-body">
  <section class="w-full pt-32 pb-16">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex items-center gap-3 text-cta mb-2">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">Contact</span>
      </div>
      <h1 class="font-headline text-5xl md:text-6xl lg:text-7xl text-primary mb-4 max-w-2xl">
        Let's Build Something.
      </h1>
      <p class="text-lg text-muted-foreground max-w-xl">
        Tell us about your business and what you're looking to achieve. We'll come back with a clear plan and a straight answer on whether we're the right fit.
      </p>
    </div>
  </section>

  <section class="w-full pb-24">
    <div class="max-w-[1200px] mx-auto px-6 grid md:grid-cols-[1fr_420px] gap-12 items-start">

      <div class="bg-white border border-border rounded-2xl p-8 md:p-10">
        <div id="contact-success" class="hidden flex-col items-center justify-center py-16 text-center">
          <span class="text-5xl mb-6" aria-hidden="true">✓</span>
          <h2 class="font-headline text-3xl text-primary mb-3">Message received.</h2>
          <p class="text-muted-foreground max-w-sm">
            Thanks for reaching out. We review every submission and will be in touch within one business day.
          </p>
          <button type="button" id="contact-reset" class="mt-8 text-sm font-semibold text-cta hover:text-cta-hover transition-colors">
            Send another message →
          </button>
        </div>

        <form id="contact-form" class="space-y-6" method="post" action="#" novalidate>
          <div>
            <h2 class="font-headline text-2xl text-primary mb-1">Start the conversation</h2>
            <p class="text-sm text-muted-foreground">No fluff. No obligation. Just a real conversation.</p>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5" for="cf-name">Full Name <span class="text-cta">*</span></label>
              <input type="text" id="cf-name" name="name" required placeholder="Your full name" class="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-border focus:outline-none focus:ring-2 focus:ring-cta/30 transition" />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5" for="cf-email">Email <span class="text-cta">*</span></label>
              <input type="email" id="cf-email" name="email" required placeholder="you@yourbusiness.com" class="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-border focus:outline-none focus:ring-2 focus:ring-cta/30 transition" />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5" for="cf-company">Company / Business</label>
              <input type="text" id="cf-company" name="company" placeholder="Your company name" class="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-border focus:outline-none focus:ring-2 focus:ring-cta/30 transition" />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5" for="cf-phone">Phone</label>
              <input type="tel" id="cf-phone" name="phone" placeholder="+1 (000) 000-0000" class="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-border focus:outline-none focus:ring-2 focus:ring-cta/30 transition" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5" for="cf-service">Service you're interested in <span class="text-cta">*</span></label>
            <select id="cf-service" name="service" required class="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-cta/30 transition appearance-none">
              <option value="" disabled selected>Select a service…</option>
              <option>Website Design &amp; Development</option>
              <option>Paid Media Management</option>
              <option>Search Engine Optimization</option>
              <option>Branding &amp; Messaging</option>
              <option>Business Intelligence &amp; Dashboards</option>
              <option>Growth Consulting</option>
            </select>
          </div>

          <div>
            <span class="block text-xs font-semibold uppercase tracking-wide text-primary mb-2">Monthly budget</span>
            <input type="hidden" name="budget" id="cf-budget" value="" />
            <div class="flex flex-wrap gap-2" id="cf-budget-chips">
              <?php
              $budgets = array( 'Under $1,000', '$1,000 – $3,000', '$3,000 – $7,500', '$7,500 – $15,000', '$15,000+' );
              foreach ( $budgets as $b ) {
                echo '<button type="button" class="cf-budget-chip px-4 py-2 rounded-full text-xs font-semibold border transition-colors bg-muted/30 border-border text-muted-foreground hover:border-primary hover:text-primary" data-budget="' . esc_attr( $b ) . '">' . esc_html( $b ) . '</button>';
              }
              ?>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wide text-primary mb-1.5" for="cf-message">Tell us about your goals <span class="text-cta">*</span></label>
            <textarea id="cf-message" name="message" required rows="5" placeholder="What are you trying to achieve? What's working, what isn't?" class="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-primary placeholder:text-border focus:outline-none focus:ring-2 focus:ring-cta/30 transition resize-none"></textarea>
          </div>

          <button type="submit" class="w-full py-4 rounded-full bg-cta hover:bg-cta-hover text-white font-semibold text-sm uppercase tracking-wide transition-colors">
            Send Message
          </button>
          <p class="text-xs text-center text-muted-foreground">We respond to every message within one business day.</p>
        </form>
      </div>

      <div class="space-y-6">
        <div class="bg-white border border-border rounded-2xl p-8">
          <h3 class="font-semibold text-primary mb-6">Contact Details</h3>
          <ul class="space-y-5 text-sm">
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-cta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <div>
                <div class="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">Email</div>
                <a href="mailto:contact@ivesdeu.com" class="text-primary hover:text-cta transition-colors font-medium">contact@ivesdeu.com</a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-cta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <div>
                <div class="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">Phone</div>
                <a href="tel:+12246025112" class="text-primary hover:text-cta transition-colors font-medium">+1 (224) 602-5112</a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-cta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <div>
                <div class="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">Location</div>
                <span class="text-primary font-medium">Milwaukee, WI 53211</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-cta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <div>
                <div class="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">Hours</div>
                <span class="text-primary font-medium">Mon – Fri, 9am – 6pm CST</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="relative rounded-2xl overflow-hidden p-8 flex flex-col gap-4" style="background: var(--cta);">
          <span class="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-headline text-[8rem] uppercase leading-none text-white/10" aria-hidden="true">CALL</span>
          <p class="relative z-10 text-xs font-semibold uppercase tracking-widest text-white/70">Prefer to talk?</p>
          <h3 class="relative z-10 font-headline text-3xl text-white">Book a strategy call</h3>
          <p class="relative z-10 text-sm text-white/80">
            30 minutes. No pitch. Just an honest look at where your business is and what growth could look like.
          </p>
          <a href="#contact-form" class="relative z-10 mt-2 inline-flex items-center gap-2 self-start px-6 py-3 rounded-full bg-white text-cta font-semibold text-sm hover:bg-white/90 transition-colors">
            Schedule Now
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
        </div>

        <div class="bg-white border border-border rounded-2xl p-8">
          <h3 class="font-semibold text-primary mb-5">What to expect</h3>
          <ol class="space-y-4">
            <li class="flex gap-4">
              <span class="shrink-0 w-6 h-6 rounded-full bg-cta/10 text-cta text-xs font-bold flex items-center justify-center mt-0.5">1</span>
              <div>
                <p class="text-sm font-semibold text-primary">We review your submission</p>
                <p class="text-sm text-muted-foreground">Within one business day we read every message in full.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="shrink-0 w-6 h-6 rounded-full bg-cta/10 text-cta text-xs font-bold flex items-center justify-center mt-0.5">2</span>
              <div>
                <p class="text-sm font-semibold text-primary">We respond with a plan</p>
                <p class="text-sm text-muted-foreground">You get a clear sense of scope, timeline, and fit — not a sales deck.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="shrink-0 w-6 h-6 rounded-full bg-cta/10 text-cta text-xs font-bold flex items-center justify-center mt-0.5">3</span>
              <div>
                <p class="text-sm font-semibold text-primary">We get to work</p>
                <p class="text-sm text-muted-foreground">If there's alignment, we move fast. No long onboarding, no bureaucracy.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</main>

<script>
(function () {
  var form = document.getElementById('contact-form');
  var success = document.getElementById('contact-success');
  var resetBtn = document.getElementById('contact-reset');
  var budgetInput = document.getElementById('cf-budget');
  if (!form || !success) return;

  document.querySelectorAll('.cf-budget-chip').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var v = btn.getAttribute('data-budget') || '';
      budgetInput.value = v;
      document.querySelectorAll('.cf-budget-chip').forEach(function (b) {
        b.classList.remove('bg-primary', 'text-primary-foreground', 'border-primary');
        b.classList.add('bg-muted/30', 'border-border', 'text-muted-foreground');
      });
      btn.classList.remove('bg-muted/30', 'border-border', 'text-muted-foreground');
      btn.classList.add('bg-primary', 'text-primary-foreground', 'border-primary');
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.classList.add('hidden');
    success.classList.remove('hidden');
    success.classList.add('flex');
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      form.reset();
      budgetInput.value = '';
      document.querySelectorAll('.cf-budget-chip').forEach(function (b) {
        b.classList.remove('bg-primary', 'text-primary-foreground', 'border-primary');
        b.classList.add('bg-muted/30', 'border-border', 'text-muted-foreground');
      });
      success.classList.add('hidden');
      success.classList.remove('flex');
      form.classList.remove('hidden');
    });
  }
})();
</script>

<?php get_footer(); ?>
