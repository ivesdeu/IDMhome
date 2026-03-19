<?php
/**
 * Footer template.
 *
 * @package ibmhome
 */
?>

<footer class="w-full bg-white/80 backdrop-blur-sm border-t border-border py-16">
  <div class="max-w-[1200px] mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-12 mb-12">
      <div>
        <h3 class="font-bold text-primary mb-4">Ives Deutschmann Marketing</h3>
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
          <a href="#" class="w-10 h-10 border border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <span class="sr-only">Instagram</span>
            <!-- Replace with SVG icon if desired -->
            <span class="text-sm font-bold">IG</span>
          </a>
          <a href="#" class="w-10 h-10 border border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <span class="sr-only">LinkedIn</span>
            <span class="text-sm font-bold">in</span>
          </a>
        </div>
      </div>

      <div>
        <h4 class="font-semibold text-primary mb-4">Quick Links</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#about" class="text-[#666666] hover:text-primary transition-colors">About</a></li>
          <li><a href="#core-capabilities" class="text-[#666666] hover:text-primary transition-colors">Services</a></li>
          <li><a href="<?php echo esc_url( home_url( '/case-studies' ) ); ?>" class="text-[#666666] hover:text-primary transition-colors">Case Studies</a></li>
          <li><a href="#contact" class="text-[#666666] hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold text-primary mb-4">Get In Touch</h4>
        <p class="text-sm text-[#666666] mb-2">Email: contact@ivesdeu.com</p>
        <p class="text-sm text-[#666666] mb-2">Phone: 224-602-5112</p>
        <p class="text-sm text-[#666666]">Available Mon-Fri, 9am-6pm PST</p>
      </div>
    </div>

    <div class="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" class="text-sm text-[#666666] hover:text-primary transition-colors">Privacy Policy</a>
      <div class="text-sm text-[#666666]">©<?php echo esc_html( date_i18n( 'Y' ) ); ?> Ives Deutschmann Marketing. All rights reserved.</div>
      <div class="font-bold text-primary">Ives Deutschmann Marketing</div>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>

