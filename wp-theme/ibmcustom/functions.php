<?php
/**
 * Theme functions.
 *
 * @package ibmhome
 */

function ibmhome_enqueue_assets() {
  $theme_version = wp_get_theme()->get( 'Version' );

  wp_enqueue_style(
    'ibmhome-style',
    get_stylesheet_uri(),
    array(),
    $theme_version
  );

  wp_enqueue_style(
    'ibmhome-theme',
    get_template_directory_uri() . '/assets/css/theme.css',
    array('ibmhome-style'),
    $theme_version
  );

  wp_enqueue_script(
    'ibmhome-scripts',
    get_template_directory_uri() . '/assets/js/main.js',
    array(),
    $theme_version,
    true
  );
}
add_action( 'wp_enqueue_scripts', 'ibmhome_enqueue_assets' );

/**
 * Theme setup.
 */
function ibmhome_theme_setup() {
  add_theme_support( 'title-tag' );
  add_theme_support( 'post-thumbnails' );

  register_nav_menus(
    array(
      'primary' => __( 'Primary Navigation', 'ibmhome' ),
    )
  );
}
add_action( 'after_setup_theme', 'ibmhome_theme_setup' );

