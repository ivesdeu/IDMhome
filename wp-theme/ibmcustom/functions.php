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

/**
 * Route key marketing pages directly to theme templates.
 */
function ibmhome_register_page_templates_routes() {
  add_rewrite_rule( '^case-studies/?$', 'index.php?ibmhome_template=case-studies', 'top' );
  add_rewrite_rule( '^whirly-wash/?$', 'index.php?ibmhome_template=whirly-wash', 'top' );
  add_rewrite_rule( '^ama-uwm/?$', 'index.php?ibmhome_template=ama-uwm', 'top' );
  add_rewrite_rule( '^about/?$', 'index.php?ibmhome_template=about', 'top' );
  add_rewrite_rule( '^technology/?$', 'index.php?ibmhome_template=technology', 'top' );
  add_rewrite_rule( '^contact/?$', 'index.php?ibmhome_template=contact', 'top' );
  add_rewrite_rule( '^team/?$', 'index.php?ibmhome_template=team', 'top' );
  add_rewrite_rule( '^team/(mark|otto)/?$', 'index.php?ibmhome_template=team&founder=$matches[1]', 'top' );
}
add_action( 'init', 'ibmhome_register_page_templates_routes' );

function ibmhome_template_query_vars( $vars ) {
  $vars[] = 'ibmhome_template';
  $vars[] = 'founder';
  return $vars;
}
add_filter( 'query_vars', 'ibmhome_template_query_vars' );

/**
 * Ensure rewrite rules are flushed after code changes.
 * This avoids requiring manual "Permalinks -> Save Changes" after updates.
 */
function ibmhome_maybe_flush_rewrites_for_team() {
  // Bump this value whenever we change rewrite routing so WP regenerates them.
  $current = 'all_routes_v3';
  $stored = get_option( 'ibmhome_rewrite_flush_version', '' );
  if ( $stored === $current ) {
    return;
  }

  ibmhome_register_page_templates_routes();
  flush_rewrite_rules();
  update_option( 'ibmhome_rewrite_flush_version', $current );
}
add_action( 'init', 'ibmhome_maybe_flush_rewrites_for_team', 0 );

function ibmhome_template_include( $template ) {
  $template_key = get_query_var( 'ibmhome_template' );
  if ( ! $template_key ) {
    return $template;
  }

  $template_map = array(
    'case-studies' => 'page-case-studies.php',
    'whirly-wash'  => 'page-whirly-wash.php',
    'ama-uwm'      => 'page-ama-uwm.php',
    'about'        => 'page-about.php',
    'technology'   => 'page-technology.php',
    'contact'      => 'page-contact.php',
    'team'         => 'page-team.php',
  );

  if ( isset( $template_map[ $template_key ] ) ) {
    $path = get_template_directory() . '/' . $template_map[ $template_key ];
    if ( file_exists( $path ) ) {
      return $path;
    }
  }

  return $template;
}
add_filter( 'template_include', 'ibmhome_template_include', 99 );

function ibmhome_flush_rewrite_rules_on_theme_switch() {
  ibmhome_register_page_templates_routes();
  flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'ibmhome_flush_rewrite_rules_on_theme_switch' );

/**
 * Contact form: send email via AJAX (logged-in and guest visitors).
 */
add_action( 'wp_ajax_ibmhome_contact', 'ibmhome_handle_contact_form' );
add_action( 'wp_ajax_nopriv_ibmhome_contact', 'ibmhome_handle_contact_form' );

/**
 * Handle contact form submission from page-contact.php.
 *
 * Deliverability: wp_mail() uses PHP mail by default on many hosts. Install WP Mail SMTP
 * (or similar) and route through Gmail, SendGrid, etc., so messages reach the inbox.
 */
function ibmhome_handle_contact_form() {
	check_ajax_referer( 'ibmhome_contact', 'nonce' );

	$name    = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
	$email   = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$company = isset( $_POST['company'] ) ? sanitize_text_field( wp_unslash( $_POST['company'] ) ) : '';
	$phone   = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
	$service = isset( $_POST['service'] ) ? sanitize_text_field( wp_unslash( $_POST['service'] ) ) : '';
	$budget  = isset( $_POST['budget'] ) ? sanitize_text_field( wp_unslash( $_POST['budget'] ) ) : '';
	$message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';

	if ( '' === $name || '' === $email || ! is_email( $email ) || '' === $service || '' === $message ) {
		wp_send_json_error(
			array( 'message' => __( 'Please fill in all required fields with a valid email.', 'ibmhome' ) ),
			422
		);
	}

	if ( strlen( $message ) > 10000 ) {
		wp_send_json_error(
			array( 'message' => __( 'Your message is too long. Please shorten it and try again.', 'ibmhome' ) ),
			422
		);
	}

	/**
	 * Filter the contact form notification recipient.
	 *
	 * @param string $to Default: contact@ivesdeu.com
	 */
	$to = apply_filters( 'ibmhome_contact_mail_to', 'contact@ivesdeu.com' );

	$subject = sprintf(
		/* translators: %s: submitter name */
		__( '[IDM] Contact from %s', 'ibmhome' ),
		$name
	);

	$body_lines = array(
		sprintf( "Name: %s", $name ),
		sprintf( "Email: %s", $email ),
		sprintf( "Company: %s", $company !== '' ? $company : '—' ),
		sprintf( "Phone: %s", $phone !== '' ? $phone : '—' ),
		sprintf( "Service: %s", $service ),
		sprintf( "Monthly budget: %s", $budget !== '' ? $budget : '—' ),
		'',
		'Message:',
		$message,
		'',
		sprintf( 'Submitted: %s', gmdate( 'Y-m-d H:i:s \G\M\T' ) ),
		sprintf( 'IP: %s', isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) ) : '—' ),
	);

	$body = implode( "\n", $body_lines );

	$headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		sprintf( 'Reply-To: %s', $email ),
	);

	$sent = wp_mail( $to, $subject, $body, $headers );

	if ( ! $sent ) {
		wp_send_json_error(
			array( 'message' => __( 'Could not send your message. Please try again or email us directly.', 'ibmhome' ) ),
			500
		);
	}

	wp_send_json_success(
		array( 'message' => __( 'Message sent.', 'ibmhome' ) )
	);
}

