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
/*
 * Always use absolute home URLs for section anchors. Custom rewrite routes (e.g. /case-studies/)
 * still run through index.php, so is_front_page() can be true while the marketing sections are
 * not on screen — bare #about would scroll the wrong page and feel like a dead link.
 */
$ibm_home = trailingslashit( home_url( '/' ) );
?>

<nav
  class="fixed top-0 left-0 right-0 z-50 border-b border-border"
  data-site-nav
  style="background: rgba(250, 250, 249, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);"
>
  <div class="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
    <div class="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0">
      <button
        type="button"
        class="ibm-mobile-menu-btn shrink-0"
        data-mobile-menu-toggle
        aria-controls="ibm-mobile-menu"
        aria-expanded="false"
        aria-label="<?php echo esc_attr__( 'Open menu', 'ibmhome' ); ?>"
        data-label-open="<?php echo esc_attr__( 'Open menu', 'ibmhome' ); ?>"
        data-label-close="<?php echo esc_attr__( 'Close menu', 'ibmhome' ); ?>"
      >
        <span class="ibm-mm-line" aria-hidden="true"></span>
        <span class="ibm-mm-line" aria-hidden="true"></span>
        <span class="ibm-mm-line" aria-hidden="true"></span>
      </button>
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center min-w-0" aria-label="Ives Deutschmann Management – Home">
        <img
          src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/idm-logo.png?v=14"
          alt="Ives Deutschmann Management"
          class="h-10 w-auto max-w-[min(100%,200px)] sm:max-w-none"
        />
      </a>
    </div>

    <div
      data-desktop-nav
      class="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 min-w-0 px-4"
    >
      <a href="<?php echo esc_url( $ibm_home ); ?>#about" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em] whitespace-nowrap">
        About
      </a>
      <a href="<?php echo esc_url( $ibm_home ); ?>#core-capabilities" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em] whitespace-nowrap">
        Services
      </a>
      <a href="<?php echo esc_url( home_url( '/technology' ) ); ?>" class="text-primary hover:text-muted-foreground transition-colors text-[0.78rem] uppercase tracking-[0.12em] whitespace-nowrap">
        Solutions
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
      class="shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-white text-[0.72rem] sm:text-[0.78rem] font-medium uppercase tracking-[0.12em] bg-cta hover:bg-cta-hover transition-colors font-body flex items-center justify-center whitespace-nowrap"
    >
      Book a Call
    </a>
  </div>

  <div
    id="ibm-mobile-menu"
    class="hidden border-t border-border"
    style="background: rgba(250, 250, 249, 0.98); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);"
    aria-hidden="true"
  >
    <div class="max-w-[1200px] mx-auto px-6 py-2 pb-5 flex flex-col">
      <a
        href="<?php echo esc_url( $ibm_home ); ?>#about"
        class="py-3.5 text-primary hover:text-muted-foreground transition-colors text-[0.85rem] uppercase tracking-[0.12em] border-b border-border font-body"
      >
        <?php echo esc_html__( 'About', 'ibmhome' ); ?>
      </a>
      <a
        href="<?php echo esc_url( $ibm_home ); ?>#core-capabilities"
        class="py-3.5 text-primary hover:text-muted-foreground transition-colors text-[0.85rem] uppercase tracking-[0.12em] border-b border-border font-body"
      >
        <?php echo esc_html__( 'Services', 'ibmhome' ); ?>
      </a>
      <a
        href="<?php echo esc_url( home_url( '/technology' ) ); ?>"
        class="py-3.5 text-primary hover:text-muted-foreground transition-colors text-[0.85rem] uppercase tracking-[0.12em] border-b border-border font-body"
      >
        <?php echo esc_html__( 'Solutions', 'ibmhome' ); ?>
      </a>
      <a
        href="<?php echo esc_url( home_url( '/case-studies' ) ); ?>"
        class="py-3.5 text-primary hover:text-muted-foreground transition-colors text-[0.85rem] uppercase tracking-[0.12em] border-b border-border font-body"
      >
        <?php echo esc_html__( 'Case Studies', 'ibmhome' ); ?>
      </a>
      <a
        href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
        class="py-3.5 text-primary hover:text-muted-foreground transition-colors text-[0.85rem] uppercase tracking-[0.12em] font-body"
      >
        <?php echo esc_html__( 'Contact', 'ibmhome' ); ?>
      </a>
    </div>
  </div>
</nav>

