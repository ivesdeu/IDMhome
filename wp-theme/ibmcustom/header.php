<?php
/**
 * Header template.
 *
 * @package ibmhome
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><?php bloginfo( 'name' ); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php
$about_href = is_front_page() ? '#about' : home_url( '/#about' );
$services_href = is_front_page() ? '#core-capabilities' : home_url( '/#core-capabilities' );
?>

<nav
  class="fixed top-0 left-0 right-0 z-50 border-b border-border"
  style="background: rgba(250, 250, 249, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);"
>
  <div class="max-w-[1200px] mx-auto px-6 py-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="col-start-1 row-start-1 flex items-center shrink-0" aria-label="Ives Deutschmann Marketing – Home">
      <img
        src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/idm-logo.png?v=2"
        alt="Ives Deutschmann Marketing"
        class="h-10 w-auto"
      />
    </a>

    <?php /* In-flow center column avoids paint-order overlap with the CTA (absolute center sat under “Book a Call” and blocked clicks). */ ?>
    <div class="hidden md:flex col-start-2 row-start-1 items-center justify-center gap-6 lg:gap-8 min-w-0">
      <a href="<?php echo esc_url( $about_href ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em] whitespace-nowrap">
        About
      </a>
      <a href="<?php echo esc_url( $services_href ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em] whitespace-nowrap">
        Services
      </a>
      <a href="<?php echo esc_url( home_url( '/technology' ) ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em] whitespace-nowrap">
        Technology
      </a>
      <a href="<?php echo esc_url( home_url( '/case-studies' ) ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em] whitespace-nowrap">
        Case Studies
      </a>
      <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em] whitespace-nowrap">
        Contact
      </a>
    </div>

    <a
      href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
      class="col-start-3 row-start-1 px-5 py-2.5 rounded-full text-white text-[0.78rem] font-medium uppercase tracking-[0.12em] bg-cta hover:bg-cta-hover transition-colors font-body flex items-center justify-center justify-self-end shrink-0"
    >
      Book a Call
    </a>
  </div>
</nav>

