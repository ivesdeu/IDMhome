<?php
/**
 * Theme functions.
 *
 * @package ibmhome
 */

function ibmhome_enqueue_assets() {
  $theme_version = wp_get_theme()->get( 'Version' );
  $style_path = get_stylesheet_directory() . '/style.css';
  $tailwind_css_path = get_template_directory() . '/assets/css/tailwind-built.css';
  $theme_css_path = get_template_directory() . '/assets/css/theme.css';
  $main_js_path = get_template_directory() . '/assets/js/main.js';

  $style_version = file_exists( $style_path ) ? filemtime( $style_path ) : $theme_version;
  $tailwind_css_version = file_exists( $tailwind_css_path ) ? filemtime( $tailwind_css_path ) : $theme_version;
  $theme_css_version = file_exists( $theme_css_path ) ? filemtime( $theme_css_path ) : $theme_version;
  $main_js_version = file_exists( $main_js_path ) ? filemtime( $main_js_path ) : $theme_version;

  wp_enqueue_style(
    'ibmhome-style',
    get_stylesheet_uri(),
    array(),
    $style_version
  );

  wp_enqueue_style(
    'ibmhome-tailwind',
    get_template_directory_uri() . '/assets/css/tailwind-built.css',
    array('ibmhome-style'),
    $tailwind_css_version
  );

  wp_enqueue_style(
    'ibmhome-theme',
    get_template_directory_uri() . '/assets/css/theme.css',
    array('ibmhome-style', 'ibmhome-tailwind'),
    $theme_css_version
  );

  wp_enqueue_script(
    'ibmhome-scripts',
    get_template_directory_uri() . '/assets/js/main.js',
    array(),
    $main_js_version,
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

