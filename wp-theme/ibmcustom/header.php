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
$team_href = is_front_page() ? '#team' : home_url( '/#team' );
$capabilities_href = is_front_page() ? '#core-capabilities' : home_url( '/#core-capabilities' );
$contact_href = is_front_page() ? '#contact' : home_url( '/#contact' );
?>

<nav
  class="fixed top-0 left-0 right-0 z-50 border-b border-border"
  style="background: rgba(250, 250, 249, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);"
>
  <div class="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center shrink-0" aria-label="Ives Deutschmann Marketing – Home">
      <img
        src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/idm-logo.png?v=2"
        alt="Ives Deutschmann Marketing"
        class="h-10 w-auto"
      />
    </a>

    <div class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
      <a href="<?php echo esc_url( $about_href ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em]">
        About
      </a>
      <a href="<?php echo esc_url( home_url( '/case-studies' ) ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em]">
        Case Studies
      </a>
      <a href="<?php echo esc_url( $team_href ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em]">
        Team
      </a>
      <a href="<?php echo esc_url( $capabilities_href ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em]">
        Capabilities
      </a>
      <a href="<?php echo esc_url( $contact_href ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em]">
        Contact
      </a>
    </div>

    <a
      href="<?php echo esc_url( 'mailto:contact@ivesdeu.com' ); ?>"
      class="px-5 py-2.5 rounded-full text-white text-[0.78rem] font-medium uppercase tracking-[0.12em] bg-cta hover:bg-cta-hover transition-colors font-body flex items-center justify-center"
    >
      Book a Call
    </a>
  </div>
</nav>

