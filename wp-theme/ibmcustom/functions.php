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
    get_template_directory_uri() . '/style.css',
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

