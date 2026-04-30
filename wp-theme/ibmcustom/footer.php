<?php
/**
 * Footer template.
 *
 * @package ibmhome
 */

$ibm_home = trailingslashit( home_url( '/' ) );
?>

<footer class="w-full bg-white/80 backdrop-blur-sm border-t border-border py-16">
  <div class="max-w-[1200px] mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-12 mb-12">
      <div>
        <h3 class="font-bold text-primary mb-4">Ives Deutschmann Management</h3>
        <p class="text-sm text-[#666666] mb-4">
          Performance marketing and growth infrastructure for ambitious brands.
        </p>
        <p class="text-sm text-[#666666]">
          Milwaukee, WI 53211<br />
          contact@ivesdeu.com
        </p>
      </div>

      <div>
        <h4 class="font-semibold text-primary mb-4">Follow Us</h4>
        <div class="flex gap-4">
          <a
            href="<?php echo esc_url( 'https://www.linkedin.com/in/markdeutschmann/' ); ?>"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 border border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors no-underline hover:no-underline text-primary"
            aria-label="<?php echo esc_attr__( 'Mark Deutschmann on LinkedIn', 'ibmhome' ); ?>"
          >
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="<?php echo esc_url( 'https://www.linkedin.com/in/william-otto-ives/' ); ?>"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 border border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors no-underline hover:no-underline text-primary"
            aria-label="<?php echo esc_attr__( 'William Otto Ives on LinkedIn', 'ibmhome' ); ?>"
          >
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h4 class="font-semibold text-primary mb-4">Quick Links</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="<?php echo esc_url( $ibm_home ); ?>#about" class="text-[#666666] hover:text-primary transition-colors">About</a></li>
          <li><a href="<?php echo esc_url( $ibm_home ); ?>#core-capabilities" class="text-[#666666] hover:text-primary transition-colors">Services</a></li>
          <li><a href="<?php echo esc_url( home_url( '/technology' ) ); ?>" class="text-[#666666] hover:text-primary transition-colors">Solutions</a></li>
          <li><a href="<?php echo esc_url( home_url( '/case-studies' ) ); ?>" class="text-[#666666] hover:text-primary transition-colors">Case Studies</a></li>
          <li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="text-[#666666] hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold text-primary mb-4">Get In Touch</h4>
        <p class="text-sm text-[#666666] mb-2">Email: contact@ivesdeu.com</p>
        <p class="text-sm text-[#666666] mb-2">Phone: +1 (224) 602-5112</p>
        <p class="text-sm text-[#666666]">Available Mon-Fri, 9am-6pm PST</p>
      </div>
    </div>

    <div class="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" class="text-sm text-[#666666] hover:text-primary transition-colors">Privacy Policy</a>
      <div class="text-sm text-[#666666]">©<?php echo esc_html( date_i18n( 'Y' ) ); ?> Ives Deutschmann Management. All rights reserved.</div>
      <div class="font-bold text-primary">Ives Deutschmann Management</div>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
