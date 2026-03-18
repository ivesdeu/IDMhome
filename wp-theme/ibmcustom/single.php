<?php
/**
 * Single post template.
 *
 * @package ibmhome
 */

get_header();
?>

<main class="min-h-screen bg-gradient-page pt-[120px]">
  <?php
  /* Single Post Hero */
  while ( have_posts() ) :
    the_post();

    $featured_url = get_the_post_thumbnail_url( get_the_ID(), 'large' );
    $post_date = get_the_date();
    $post_author = get_the_author();
    ?>

    <section class="w-full py-24 font-body">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="mb-8">
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="text-primary hover:text-gray-600 flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Back to Blog
          </a>
        </div>

        <?php if ( $featured_url ) : ?>
          <div class="rounded-2xl overflow-hidden shadow-lg mb-12 relative h-[400px] md:h-[500px]">
            <img src="<?php echo esc_url( $featured_url ); ?>" alt="<?php echo esc_attr( get_the_title() ); ?>" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8"></div>
          </div>
        <?php endif; ?>

        <div class="max-w-[800px] mx-auto">
          <div class="text-sm text-[#666666] flex items-center gap-3 mb-6">
            <span><?php echo esc_html( $post_date ); ?></span>
            <span aria-hidden="true">•</span>
            <span>by</span>
            <span><?php echo esc_html( $post_author ); ?></span>
          </div>

          <h1 class="font-headline text-4xl md:text-5xl text-primary mb-8">
            <?php the_title(); ?>
          </h1>

          <div class="text-lg leading-relaxed text-muted-foreground font-body">
            <?php the_content(); ?>
          </div>
        </div>
      </div>
    </section>
  <?php endwhile; ?>
</main>

<?php get_footer(); ?>

