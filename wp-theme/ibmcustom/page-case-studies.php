<?php
/**
 * Page Case Studies template.
 * @package ibmhome
 */

get_header();
?>

<main class="min-h-screen bg-gradient-page">
  <?php /* Case Studies Hub */ ?>
  <section class="w-full py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="mb-12">
        <div class="flex items-center gap-3 text-cta mb-2">
          <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
          <span
            class="text-[0.72rem] uppercase tracking-[0.18em] font-medium"
            style="letter-spacing: 0.18em;"
          >
            Case Studies
          </span>
        </div>

        <h1 class="text-5xl font-semibold text-primary mb-4">
          Real performance. Documented results.
        </h1>
        <p class="text-lg text-[#666666] max-w-2xl">
          We don't measure success in impressions. We measure it in revenue, efficiency, and sustained growth.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <a
          href="<?php echo esc_url( home_url( '/whirly-wash' ) ); ?>"
          class="group relative rounded-2xl overflow-hidden cursor-pointer h-[500px] block"
        >
          <img
            src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/revenue-growth-6months.png"
            alt="Revenue Growth in 6 Months"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-fallback-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
            <div class="flex gap-2 mb-4">
              <span class="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">Home Service</span>
              <span class="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">Paid Media</span>
            </div>

            <div class="text-6xl font-bold text-white mb-2">+142%</div>
            <h2 class="text-2xl font-semibold text-white mb-1">Revenue Growth in 6 Months</h2>
            <p class="text-lg text-white/80">3.1x Return on Ad Spend</p>
          </div>
        </a>

        <a
          href="<?php echo esc_url( home_url( '/ama-uwm' ) ); ?>"
          class="group relative rounded-2xl overflow-hidden cursor-pointer h-[500px] block"
        >
          <img
            src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/ama-uwm-case-study.png"
            alt="Growth Marketing &amp; Partnerships"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-fallback-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
            <div class="flex gap-2 mb-4">
              <span class="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">Home Service</span>
              <span class="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">Website Creation</span>
            </div>

            <div class="text-6xl font-bold text-white mb-2">+$12,000 dollars raised</div>
            <h2 class="text-2xl font-semibold text-white mb-1">Growth Marketing &amp; Partnerships</h2>
            <p class="text-lg text-white/80">10+ corporate sponsors</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <script>
    (() => {
      const imgs = document.querySelectorAll('img[data-fallback-src]');
      imgs.forEach((img) => {
        img.onerror = () => {
          if (img.dataset.fallbackApplied === '1') return;
          img.dataset.fallbackApplied = '1';
          img.src = img.getAttribute('data-fallback-src');
        };
      });
    })();
  </script>
</main>

<?php get_footer(); ?>

