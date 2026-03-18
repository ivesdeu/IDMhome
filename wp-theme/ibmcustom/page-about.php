<?php
/**
 * Page About template.
 * @package ibmhome
 */

get_header();
?>

<main class="min-h-screen bg-gradient-page">
  <?php /* About Page */ ?>
  <section id="about" class="w-full py-24 font-body">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex items-center gap-3 text-cta mb-2">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span
          class="text-[0.72rem] uppercase tracking-[0.18em] font-medium"
          style="letter-spacing: 0.18em;"
        >
          About Us
        </span>
      </div>

      <h2 class="font-headline text-4xl md:text-5xl text-primary mb-12 max-w-4xl">
        Strategy first. Execution second. Results always.
      </h2>

      <p class="text-lg text-muted-foreground max-w-4xl leading-relaxed">
        We partner with ambitious brands to build measurable growth engines. By combining paid media, search visibility, brand positioning, and conversion optimization, we create marketing systems that scale predictably. Every decision is backed by data. Every campaign is built for performance.
      </p>
    </div>
  </section>
</main>

<?php get_footer(); ?>

