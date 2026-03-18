<?php
/**
 * Page template.
 *
 * @package ibmhome
 */

get_header();
?>

<main class="min-h-screen bg-gradient-page pt-[120px]">
  <?php
  /* Page Content */
  while ( have_posts() ) :
    the_post();
    $post_slug = get_post_field( 'post_name', get_the_ID() );
    $eyebrow_label = $post_slug ? str_replace( '-', ' ', $post_slug ) : 'Page';
    ?>
    <section class="w-full py-24 font-body">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="bg-white rounded-2xl border border-border p-8">
          <div class="flex items-center gap-3 text-cta mb-2">
            <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
            <span
              class="text-[0.72rem] uppercase tracking-[0.18em] font-medium"
              style="letter-spacing: 0.18em;"
            >
              <?php echo esc_html( $eyebrow_label ); ?>
            </span>
          </div>

          <h1 class="font-headline text-5xl md:text-6xl text-primary mb-6">
            <?php the_title(); ?>
          </h1>

          <div class="max-w-[800px] mx-auto text-lg text-muted-foreground leading-relaxed font-body">
            <?php the_content(); ?>
          </div>
        </div>
      </div>
    </section>
  <?php endwhile; ?>
</main>

<?php get_footer(); ?>

