<?php
/**
 * Team template.
 * @package ibmhome
 */

get_header();

$founder = get_query_var( 'founder' );
if ( ! in_array( $founder, array( 'mark', 'otto' ), true ) ) {
  $founder = 'mark';
}
?>

<main class="min-h-screen" style="background: #f4f3f0;">
  <?php /* Team Directory */ ?>
  <section class="w-full py-24">
    <div class="max-w-[760px] mx-auto px-6">
      <div class="flex items-center gap-3 text-cta mb-2">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">Team Directory</span>
      </div>
      <h1 class="font-headline text-5xl text-primary mb-8" style="color: #111110;">Meet the founders.</h1>

      <div class="inline-flex bg-white rounded-full p-1 border mb-8" style="border-color: rgba(0,0,0,0.08);">
        <button
          type="button"
          data-founder-toggle="mark"
          class="px-5 py-2 rounded-full font-body text-sm transition-colors"
          style="background: <?php echo $founder === 'mark' ? '#e84c1e' : 'transparent'; ?>; color: <?php echo $founder === 'mark' ? '#ffffff' : '#111110'; ?>;"
        >Mark Deutschmann</button>
        <button
          type="button"
          data-founder-toggle="otto"
          class="px-5 py-2 rounded-full font-body text-sm transition-colors"
          style="background: <?php echo $founder === 'otto' ? '#e84c1e' : 'transparent'; ?>; color: <?php echo $founder === 'otto' ? '#ffffff' : '#111110'; ?>;"
        >Otto Ives</button>
      </div>

      <article
        data-founder-profile="mark"
        class="<?php echo $founder === 'mark' ? '' : 'hidden'; ?> bg-white border rounded-2xl p-8"
        style="border-color: rgba(0,0,0,0.08);"
      >
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/mark-deutschmann.png" alt="Mark Deutschmann" class="w-28 h-28 rounded-full object-cover mb-5" />
        <p class="text-sm font-semibold mb-2" style="color: #e84c1e;">Co-Founder</p>
        <h2 class="font-headline text-4xl mb-2" style="color: #111110;">Mark Deutschmann</h2>
        <p class="text-lg mb-5" style="color: #111110;">Performance Analyst</p>
        <p class="text-base leading-relaxed mb-6" style="color: #888582;">
          Mark leads paid media performance and analytics systems across campaigns. He focuses on precision tracking, attribution clarity, and revenue-centric optimization.
        </p>
        <blockquote class="pl-4 italic mb-6" style="border-left: 4px solid #e84c1e; color: #111110;">
          Revenue growth requires precision, not guesswork.
        </blockquote>
        <div class="flex flex-wrap gap-2 mb-8">
          <span class="px-3 py-1.5 rounded-full bg-white border text-sm" style="border-color: rgba(0,0,0,0.12); color: #111110;">Paid Media</span>
          <span class="px-3 py-1.5 rounded-full bg-white border text-sm" style="border-color: rgba(0,0,0,0.12); color: #111110;">Attribution</span>
          <span class="px-3 py-1.5 rounded-full bg-white border text-sm" style="border-color: rgba(0,0,0,0.12); color: #111110;">Analytics</span>
        </div>
        <a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" class="px-6 py-3 rounded-full text-white inline-block font-body" style="background: #e84c1e;">Connect</a>
      </article>

      <article
        data-founder-profile="otto"
        class="<?php echo $founder === 'otto' ? '' : 'hidden'; ?> bg-white border rounded-2xl p-8"
        style="border-color: rgba(0,0,0,0.08);"
      >
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/otto-ives.png" alt="Otto Ives" class="w-28 h-28 rounded-full object-cover mb-5" />
        <p class="text-sm font-semibold mb-2" style="color: #e84c1e;">Co-Founder</p>
        <h2 class="font-headline text-4xl mb-2" style="color: #111110;">Otto Ives</h2>
        <p class="text-lg mb-5" style="color: #111110;">SEO Strategist</p>
        <p class="text-base leading-relaxed mb-6" style="color: #888582;">
          Otto drives organic visibility through technical SEO and high-intent content systems. His work centers on structure, authority, and compounding search performance.
        </p>
        <blockquote class="pl-4 italic mb-6" style="border-left: 4px solid #e84c1e; color: #111110;">
          Visibility is earned through technical excellence.
        </blockquote>
        <div class="flex flex-wrap gap-2 mb-8">
          <span class="px-3 py-1.5 rounded-full bg-white border text-sm" style="border-color: rgba(0,0,0,0.12); color: #111110;">Technical SEO</span>
          <span class="px-3 py-1.5 rounded-full bg-white border text-sm" style="border-color: rgba(0,0,0,0.12); color: #111110;">Content Strategy</span>
          <span class="px-3 py-1.5 rounded-full bg-white border text-sm" style="border-color: rgba(0,0,0,0.12); color: #111110;">Search Growth</span>
        </div>
        <a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" class="px-6 py-3 rounded-full text-white inline-block font-body" style="background: #e84c1e;">Connect</a>
      </article>
    </div>
  </section>

  <script>
    (() => {
      const toggles = document.querySelectorAll('[data-founder-toggle]');
      const profiles = {
        mark: document.querySelector('[data-founder-profile="mark"]'),
        otto: document.querySelector('[data-founder-profile="otto"]'),
      };
      if (!toggles.length || !profiles.mark || !profiles.otto) return;

      const applyToggleStyles = (active) => {
        toggles.forEach((btn) => {
          const key = btn.getAttribute('data-founder-toggle');
          const isActive = key === active;
          btn.style.background = isActive ? '#e84c1e' : 'transparent';
          btn.style.color = isActive ? '#ffffff' : '#111110';
        });
      };

      const animateIn = (el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(12px)';
        el.style.transition = 'opacity 350ms ease, transform 350ms ease';
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      };

      const showFounder = (key, shouldPushState = true) => {
        const other = key === 'mark' ? 'otto' : 'mark';
        profiles[other].classList.add('hidden');
        profiles[key].classList.remove('hidden');
        animateIn(profiles[key]);
        applyToggleStyles(key);
        if (shouldPushState) {
          history.replaceState({}, '', '<?php echo esc_url( home_url( '/team/' ) ); ?>' + key);
        }
      };

      toggles.forEach((btn) => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-founder-toggle');
          if (key !== 'mark' && key !== 'otto') return;
          showFounder(key);
        });
      });
    })();
  </script>
</main>

<?php get_footer(); ?>

