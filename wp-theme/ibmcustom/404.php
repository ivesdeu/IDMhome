<?php
/**
 * 404 template.
 *
 * @package ibmhome
 */

get_header();
?>

<main class="min-h-screen bg-gradient-page flex items-center justify-center pt-[120px]">
  <?php /* Page Not Found */ ?>
  <div class="max-w-[600px] mx-auto text-center relative px-6">
    <div class="font-headline text-[clamp(6rem,20vw,12rem)] text-cta/20 absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10">
      404
    </div>

    <h1 class="font-headline text-4xl md:text-5xl text-primary mb-4">
      Page not found.
    </h1>

    <p class="text-lg text-muted-foreground font-body mb-8">
      The page you're looking for doesn't exist or has been moved.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="bg-cta text-white rounded-full px-6 py-3 font-body">
        Go Home
      </a>
      <a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" class="bg-white border border-border text-primary rounded-full px-6 py-3 font-body">
        Contact Us
      </a>
    </div>
  </div>
</main>

<?php get_footer(); ?>

