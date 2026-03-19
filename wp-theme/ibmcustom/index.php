<?php
/**
 * Main index template.
 *
 * @package ibmhome
 */

get_header();
?>

<main class="min-h-screen bg-gradient-page">
  <?php /* Hero section (from Hero.tsx) */ ?>
  <section class="relative min-h-screen overflow-hidden hero-grid-overlay flex flex-col justify-center">
    <div class="hero-coral-glow absolute inset-0 pointer-events-none" aria-hidden="true"></div>

    <div class="max-w-[900px] mx-auto w-full px-8 md:px-12 pt-[120px] pb-[80px] relative text-center">
      <p class="eyebrow flex items-center justify-center gap-3 text-cta mb-6 font-body">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span class="text-[0.72rem] uppercase tracking-[0.18em]">Performance Marketing</span>
      </p>
      <h1 class="font-headline text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.92]">
        <span class="block text-primary">Stop getting</span>
        <span class="block text-primary">Sh
          <span
            class="inline-flex font-mono w-[2ch] min-w-[2ch] h-[1.2em] flex-shrink-0 items-center justify-center align-middle overflow-hidden"
            style="line-height: 1; flex-wrap: nowrap;"
            data-glitch-hero
            aria-hidden="true"
          >
            <span class="whitespace-nowrap">
              <span data-glitch-char-a>*</span><span data-glitch-char-b>#</span>
            </span>
          </span>
          <span class="text-cta">leads.</span>
        </span>
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl mx-auto mb-10 font-body font-normal">
        We design and execute data-driven acquisition systems that turn attention into revenue.
      </p>
      <div class="flex flex-col items-center gap-6">
        <div class="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#contact"
            class="px-6 py-3 rounded-full bg-cta text-white font-medium hover:bg-cta-hover transition-colors text-sm font-body"
          >
            Book a Call
          </a>
          <a
            href="<?php echo esc_url( home_url( '/case-studies' ) ); ?>"
            class="px-6 py-3 rounded-full bg-white border border-border text-primary font-medium hover:bg-gray-50 transition-colors text-sm font-body"
          >
            View Case Studies
          </a>
        </div>
        <div class="flex flex-wrap items-stretch justify-center gap-8">
          <div class="w-[140px] md:w-[160px] bg-white rounded-lg border-2 border-cta p-4 shadow-lg flex flex-col justify-between" data-countup-root>
            <div class="font-headline text-3xl md:text-4xl text-cta">
              <span class="stat-number" data-stat-value="3" data-stat-decimals="0">0</span><span class="text-cta stat-suffix">+</span>
            </div>
            <div class="text-xs text-muted-foreground font-body mt-1">Clients Served</div>
          </div>
          <div class="w-[140px] md:w-[160px] bg-white rounded-lg border-2 border-cta p-4 shadow-lg flex flex-col justify-between" data-countup-root>
            <div class="font-headline text-3xl md:text-4xl text-cta">
              <span class="stat-number" data-stat-value="2.8" data-stat-decimals="1">0</span><span class="text-cta stat-suffix">x</span>
            </div>
            <div class="text-xs text-muted-foreground font-body mt-1">Avg. ROAS improvement</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <?php /* StatsBar section (from StatsBar.tsx) */ ?>
  <section
    class="w-full border-t border-b border-border"
    data-countup-root
    style="border-color: rgba(0,0,0,0.08);"
  >
    <div class="max-w-[1200px] mx-auto">
      <div class="grid grid-cols-3 divide-x font-body" style="border-color: rgba(0,0,0,0.08);">
        <div class="py-8 px-8 text-center">
          <div class="font-headline text-4xl md:text-5xl text-primary">
            <span class="stat-number" data-stat-value="3" data-stat-decimals="0">0</span><span class="text-cta stat-suffix">+</span>
          </div>
          <div class="text-sm text-muted-foreground mt-1">Clients Served</div>
        </div>
        <div class="py-8 px-8 text-center">
          <div class="font-headline text-4xl md:text-5xl text-primary">
            <span class="stat-number" data-stat-value="5" data-stat-decimals="0">0</span><span class="text-cta stat-suffix">+</span>
          </div>
          <div class="text-sm text-muted-foreground mt-1">Campaigns Launched</div>
        </div>
        <div class="py-8 px-8 text-center">
          <div class="font-headline text-4xl md:text-5xl text-primary">
            <span class="stat-number" data-stat-value="2.8" data-stat-decimals="1">0</span><span class="text-cta stat-suffix">x</span>
          </div>
          <div class="text-sm text-muted-foreground mt-1">Avg. ROAS Improvement</div>
        </div>
      </div>
    </div>
  </section>

  <?php /* About section (from About.tsx) */ ?>
  <section id="about" class="w-full py-24 font-body">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex items-center gap-3 text-cta mb-2 ">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">
          About Us
        </span>
      </div>

      <h2 class="font-headline text-4xl md:text-5xl text-primary mb-12 max-w-4xl">
        Strategy first. Execution second. Results always.
      </h2>

      <p class="text-lg text-muted-foreground max-w-4xl leading-relaxed">
        We partner with ambitious brands to build measurable growth engines. By combining paid media, search visibility, brand positioning, and conversion optimization, we create marketing systems that scale predictably. Every decision is backed by data. Every campaign is built for performance.
      </p>
    </div>
  </section>

  <?php /* Collaborations section (from Collaborations.tsx) */ ?>
  <section class="w-full bg-[#F5F5F5] py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="mb-10">
        <p class="text-sm text-primary/80 mb-2">• Collaborations</p>
        <h2 class="text-4xl md:text-5xl font-bold text-primary">Trusted across industries.</h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 collaborations-grid">
        <div class="bg-[#e8e8e8] rounded-2xl p-6 flex flex-col shadow-sm border border-white/50 h-full min-h-[260px]">
          <h3 class="font-bold text-primary text-lg mb-1">Home Improvement</h3>
          <p class="text-sm text-[#666666] mb-4">Working for 1 year</p>
          <span class="inline-block w-fit px-3 py-1.5 rounded-full bg-[#f0f0f0] text-sm text-primary/90 font-medium mb-6">
            Website Construction &amp; SEO
          </span>
          <div class="mt-auto pt-2">
            <div class="w-full rounded-full bg-white py-5 px-4 flex items-center justify-center min-h-[72px] shadow-inner text-primary">
              <img
                src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/whirly-wash-logo.png"
                alt="Whirly Wash"
                class="h-14 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div class="bg-[#e8e8e8] rounded-2xl p-6 flex flex-col shadow-sm border border-white/50 h-full min-h-[260px]">
          <h3 class="font-bold text-primary text-lg mb-1">Professional Development Services</h3>
          <p class="text-sm text-[#666666] mb-4">Working for 2 years</p>
          <span class="inline-block w-fit px-3 py-1.5 rounded-full bg-[#f0f0f0] text-sm text-primary/90 font-medium mb-6">
            Website Construction &amp; SEO
          </span>
          <div class="mt-auto pt-2">
            <div class="w-full rounded-full bg-white py-5 px-4 flex items-center justify-center min-h-[72px] shadow-inner text-primary">
              <img
                src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/amauwm-logo.png"
                alt="AMAUWM"
                class="h-14 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div class="bg-[#e8e8e8] rounded-2xl p-6 flex flex-col shadow-sm border border-white/50 h-full min-h-[260px]">
          <h3 class="font-bold text-primary text-lg mb-1">Industrial Cleaning Services</h3>
          <p class="text-sm text-[#666666] mb-4">Working for 1 year</p>
          <span class="inline-block w-fit px-3 py-1.5 rounded-full bg-[#f0f0f0] text-sm text-primary/90 font-medium mb-6">
            Full Growth Partner
          </span>
          <div class="mt-auto pt-2">
            <div class="w-full rounded-full bg-white py-5 px-4 flex items-center justify-center min-h-[72px] shadow-inner text-primary">
              <img
                src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/badger-window-cleaners-logo.png"
                alt="Badger Window Cleaners West"
                class="h-14 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <?php /* Services section (from Services.tsx) */ ?>
  <section id="core-capabilities" class="w-full py-24 font-body">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="mb-12">
        <div class="flex items-center gap-3 text-cta mb-2 ">
          <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
          <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">
            Core Capabilities
          </span>
        </div>
        <h2 class="font-headline text-4xl md:text-5xl lg:text-6xl text-primary mt-2 max-w-2xl">
          Everything required to scale acquisition.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-0.5" style="background: rgba(0,0,0,0.08);">
        <div class="group bg-card p-8 relative transition-colors duration-300 hover:bg-[#fef8f6]">
          <span class="font-headline text-7xl md:text-8xl text-cta/25 absolute top-6 right-6 leading-none">01</span>
          <h3 class="text-xl font-semibold text-primary mb-2 relative z-10">Paid Media Strategy &amp; Management</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">High-converting ad systems across Meta, Google, and emerging platforms.</p>
          <span class="absolute bottom-0 left-0 h-0.5 bg-cta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style="width: 100%;"></span>
        </div>

        <div class="group bg-card p-8 relative transition-colors duration-300 hover:bg-[#fef8f6]">
          <span class="font-headline text-7xl md:text-8xl text-cta/25 absolute top-6 right-6 leading-none">02</span>
          <h3 class="text-xl font-semibold text-primary mb-2 relative z-10">Search Engine Optimization</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">Long-term visibility built on technical precision and content authority.</p>
          <span class="absolute bottom-0 left-0 h-0.5 bg-cta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style="width: 100%;"></span>
        </div>

        <div class="group bg-card p-8 relative transition-colors duration-300 hover:bg-[#fef8f6]">
          <span class="font-headline text-7xl md:text-8xl text-cta/25 absolute top-6 right-6 leading-none">03</span>
          <h3 class="text-xl font-semibold text-primary mb-2 relative z-10">Conversion Rate Optimization</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">Landing pages and funnels engineered for measurable lift.</p>
          <span class="absolute bottom-0 left-0 h-0.5 bg-cta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style="width: 100%;"></span>
        </div>

        <div class="group bg-card p-8 relative transition-colors duration-300 hover:bg-[#fef8f6]">
          <span class="font-headline text-7xl md:text-8xl text-cta/25 absolute top-6 right-6 leading-none">04</span>
          <h3 class="text-xl font-semibold text-primary mb-2 relative z-10">Brand Positioning &amp; Messaging</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">Clear differentiation that turns attention into trust.</p>
          <span class="absolute bottom-0 left-0 h-0.5 bg-cta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style="width: 100%;"></span>
        </div>

        <div class="group bg-card p-8 relative transition-colors duration-300 hover:bg-[#fef8f6]">
          <span class="font-headline text-7xl md:text-8xl text-cta/25 absolute top-6 right-6 leading-none">05</span>
          <h3 class="text-xl font-semibold text-primary mb-2 relative z-10">Analytics &amp; Attribution</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">Tracking, reporting, and insight systems that guide decisions.</p>
          <span class="absolute bottom-0 left-0 h-0.5 bg-cta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style="width: 100%;"></span>
        </div>

        <div class="group bg-card p-8 relative transition-colors duration-300 hover:bg-[#fef8f6]">
          <span class="font-headline text-7xl md:text-8xl text-cta/25 absolute top-6 right-6 leading-none">06</span>
          <h3 class="text-xl font-semibold text-primary mb-2 relative z-10">Growth Consulting</h3>
          <p class="text-muted-foreground text-sm leading-relaxed">Executive-level strategy for brands ready to scale.</p>
          <span class="absolute bottom-0 left-0 h-0.5 bg-cta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style="width: 100%;"></span>
        </div>
      </div>
    </div>
  </section>

  <?php /* Works section (from Works.tsx + caseStudies.ts) */ ?>
  <section id="works" class="w-full py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex items-start justify-between mb-12">
        <div>
          <div class="flex items-center gap-3 text-cta mb-2 ">
            <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
            <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">
              Case Studies
            </span>
          </div>
          <h2 class="text-5xl font-semibold text-primary mb-4">Real performance. Documented results.</h2>
          <p class="text-lg text-[#666666] max-w-2xl">
            We don't measure success in impressions. We measure it in revenue, efficiency, and sustained growth.
          </p>
        </div>
        <a href="<?php echo esc_url( home_url( '/case-studies' ) ); ?>" class="text-primary hover:text-gray-600 flex items-center gap-2">
          Explore All Case Studies
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M7 7H17V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <a href="<?php echo esc_url( home_url( '/whirly-wash' ) ); ?>">
          <div class="group relative rounded-2xl overflow-hidden cursor-pointer h-[500px]">
            <img
              src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/revenue-growth-6months.png"
              alt="Revenue Growth in 6 Months"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <div class="flex gap-2 mb-4">
                <span class="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">Home Service</span>
                <span class="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">Paid Media</span>
              </div>
              <div class="text-6xl font-bold text-white mb-2">+142%</div>
              <h3 class="text-2xl font-semibold text-white mb-1">Revenue Growth in 6 Months</h3>
              <p class="text-lg text-white/80">3.1x Return on Ad Spend</p>
            </div>
          </div>
        </a>

        <a href="<?php echo esc_url( home_url( '/ama-uwm' ) ); ?>">
          <div class="group relative rounded-2xl overflow-hidden cursor-pointer h-[500px]">
            <img
              src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/ama-uwm-case-study.png"
              alt="Growth Marketing &amp; Partnerships"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <div class="flex gap-2 mb-4">
                <span class="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">Home Service</span>
                <span class="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">Website Creation</span>
              </div>
              <div class="text-6xl font-bold text-white mb-2">+$12,000 dollars raised</div>
              <h3 class="text-2xl font-semibold text-white mb-1">Growth Marketing &amp; Partnerships</h3>
              <p class="text-lg text-white/80">10+ corporate sponsors</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <?php /* SmartSteps section (from SmartSteps.tsx) */ ?>
  <section class="w-full bg-[#F9F9F9] py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex items-center gap-3 text-cta mb-2 ">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">
          Process
        </span>
      </div>
      <h2 class="text-5xl font-semibold text-primary mb-12 font-body">How we drive results.</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white border border-border rounded-2xl p-8">
          <h3 class="text-xl font-semibold text-primary mb-1 font-body">Plan your growth</h3>
          <p class="text-sm text-muted-foreground mb-6 font-body">Clear steps to scale smart and fast.</p>
          <div class="grid grid-cols-7 gap-x-1 gap-y-2 text-center">
            <div class="text-[10px] font-medium text-muted-foreground py-1">S</div>
            <div class="text-[10px] font-medium text-muted-foreground py-1">M</div>
            <div class="text-[10px] font-medium text-muted-foreground py-1">T</div>
            <div class="text-[10px] font-medium text-muted-foreground py-1">W</div>
            <div class="text-[10px] font-medium text-muted-foreground py-1">TH</div>
            <div class="text-[10px] font-medium text-muted-foreground py-1">F</div>
            <div class="text-[10px] font-medium text-muted-foreground py-1">S</div>

            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px] bg-cta/15 ring-1 ring-cta/40">
              <span class="font-bold text-primary">01</span>
              <span class="text-[9px] text-muted-foreground truncate w-full px-0.5">Discovery</span>
            </div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">2</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">3</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">4</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">5</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px] bg-cta/15 ring-1 ring-cta/40">
              <span class="font-bold text-primary">06</span>
              <span class="text-[9px] text-muted-foreground truncate w-full px-0.5">Website</span>
            </div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">7</span></div>

            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">8</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">9</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">10</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">11</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">12</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">13</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">14</span></div>

            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">15</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">16</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px] bg-cta/15 ring-1 ring-cta/40">
              <span class="font-bold text-primary">17</span>
              <span class="text-[9px] text-muted-foreground truncate w-full px-0.5">Data Review</span>
            </div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">18</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">19</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">20</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">21</span></div>

            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">22</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">23</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">24</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">25</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">26</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">27</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">28</span></div>

            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px]"><span class="text-muted-foreground/50">29</span></div>
            <div class="rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px] bg-cta/15 ring-1 ring-cta/40">
              <span class="font-bold text-primary">30</span>
              <span class="text-[9px] text-muted-foreground truncate w-full px-0.5">SEO Execution</span>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div class="bg-white border border-border rounded-2xl p-8">
          <h3 class="text-xl font-semibold text-primary mb-1 font-body">Our 4-step plan</h3>
          <p class="text-sm text-muted-foreground mb-6 font-body">A simple path to smart, scalable growth.</p>
          <div class="flex items-end justify-between gap-3 h-[200px]">
            <div class="flex-1 min-w-0 rounded-xl bg-muted/40 border border-border flex flex-col items-center justify-between py-2 px-2 min-h-[96px] h-[96px]">
              <span class="text-xs font-medium text-muted-foreground flex-shrink-0">01</span>
              <div class="w-6 h-6 text-primary flex-shrink-0"></div>
              <span class="text-xs font-semibold text-primary text-center leading-tight flex-shrink-0">Discuss</span>
            </div>
            <div class="flex-1 min-w-0 rounded-xl bg-muted/40 border border-border flex flex-col items-center justify-between py-2 px-2 min-h-[96px] h-[120px]">
              <span class="text-xs font-medium text-muted-foreground flex-shrink-0">02</span>
              <div class="w-6 h-6 text-primary flex-shrink-0"></div>
              <span class="text-xs font-semibold text-primary text-center leading-tight flex-shrink-0">Plan</span>
            </div>
            <div class="flex-1 min-w-0 rounded-xl bg-muted/40 border border-border flex flex-col items-center justify-between py-2 px-2 min-h-[96px] h-[152px]">
              <span class="text-xs font-medium text-muted-foreground flex-shrink-0">03</span>
              <div class="w-6 h-6 text-primary flex-shrink-0"></div>
              <span class="text-xs font-semibold text-primary text-center leading-tight flex-shrink-0">Produce</span>
            </div>
            <div class="flex-1 min-w-0 rounded-xl bg-muted/40 border border-border flex flex-col items-center justify-between py-2 px-2 min-h-[96px] h-[200px]">
              <span class="text-xs font-medium text-muted-foreground flex-shrink-0">04</span>
              <div class="w-6 h-6 text-primary flex-shrink-0"></div>
              <span class="text-xs font-semibold text-primary text-center leading-tight flex-shrink-0">Succeed</span>
            </div>
          </div>
        </div>

        <div class="bg-white border border-border rounded-2xl p-8 flex flex-col justify-center min-h-[180px]">
          <div class="font-headline text-6xl md:text-7xl text-primary leading-none">98%</div>
          <div class="text-muted-foreground font-body mt-2">Project success rate</div>
        </div>

        <div class="bg-white border border-border rounded-2xl p-8 flex flex-wrap items-center justify-center gap-4 min-h-[180px] relative">
          <span class="px-4 py-2 rounded-lg text-white text-sm font-semibold uppercase tracking-wide" style="background: #0F2A44; transform: rotate(-2deg);">Paid Media</span>
          <span class="px-4 py-2 rounded-lg text-white text-sm font-semibold uppercase tracking-wide" style="background: #0F2A44; transform: rotate(1.5deg);">SEO</span>
          <span class="px-4 py-2 rounded-lg text-white text-sm font-semibold uppercase tracking-wide" style="background: #0F2A44; transform: rotate(-1deg);">CRO</span>
          <span class="px-4 py-2 rounded-lg text-white text-sm font-semibold uppercase tracking-wide" style="background: #0F2A44; transform: rotate(2deg);">Analytics</span>
          <span class="px-4 py-2 rounded-lg text-white text-sm font-semibold uppercase tracking-wide" style="background: #0F2A44; transform: rotate(-0.5deg);">Optimization</span>
        </div>
      </div>
    </div>
  </section>

  <?php /* Team section (from Team.tsx) */ ?>
  <section id="team" class="w-full py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="mb-12">
        <div class="flex items-center gap-3 text-cta mb-2 ">
          <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
          <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">
            Team
          </span>
        </div>
        <h2 class="text-5xl font-semibold text-primary">Your growth partners.</h2>
      </div>

      <div class="overflow-x-auto pb-4">
        <div class="flex gap-6 justify-center">
          <div class="flex-shrink-0 w-[350px] bg-white border border-border rounded-2xl p-6 block hover:shadow-lg transition-shadow">
            <img
              src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/mark-deutschmann.png"
              alt="Mark Deutschmann"
              class="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
            />
            <p class="text-lg italic text-[#666666] mb-4 text-center">Revenue growth requires precision, not guesswork.</p>
            <h3 class="font-semibold text-primary text-center">Mark Deutschmann</h3>
            <p class="text-sm text-[#666666] text-center">Co-Founder</p>
            <p class="text-sm text-[#666666] text-center">Performance Analyst</p>
          </div>

          <div class="flex-shrink-0 w-[350px] bg-white border border-border rounded-2xl p-6 block hover:shadow-lg transition-shadow">
            <img
              src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/otto-ives.png"
              alt="Otto Ives"
              class="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
            />
            <p class="text-lg italic text-[#666666] mb-4 text-center">Visibility is earned through technical excellence.</p>
            <h3 class="font-semibold text-primary text-center">Otto Ives</h3>
            <p class="text-sm text-[#666666] text-center">Co-Founder</p>
            <p class="text-sm text-[#666666] text-center">SEO Strategist</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <?php /* Pricing section (from Pricing.tsx) */ ?>
  <section id="pricing" class="w-full py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex items-center gap-3 text-cta mb-2 ">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">
          Engagement Models
        </span>
      </div>
      <h2 class="text-5xl font-semibold text-primary mb-12">Flexible structures. Clear deliverables.</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white border-2 border-primary rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col min-h-0">
          <div class="flex items-center gap-2 mb-1">
            <div class="w-5 h-5 text-primary flex-shrink-0"></div>
            <h3 class="text-xl font-bold text-primary">Tier 1 — Essentials</h3>
          </div>
          <p class="text-sm text-muted-foreground mb-3">Get online and stay online.</p>
          <div class="mb-4">
            <p class="text-xs font-semibold text-primary tracking-wide mb-0.5">Built for</p>
            <p class="text-sm text-muted-foreground">Businesses that need a presence and reliability.</p>
          </div>

          <div class="space-y-3 mb-5 flex-1">
            <div>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Website</p>
              <ul class="space-y-1">
                <li class="flex items-start gap-2 text-sm text-foreground">
                  <span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span>
                  <span>Build &amp; deploy</span>
                </li>
                <li class="flex items-start gap-2 text-sm text-foreground">
                  <span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span>
                  <span>Hosting</span>
                </li>
                <li class="flex items-start gap-2 text-sm text-foreground">
                  <span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span>
                  <span>On-call maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-4 pt-3 border-t border-border">
            <p class="text-xs font-semibold text-primary tracking-wide mb-0.5">Outcome</p>
            <p class="text-sm text-muted-foreground">A reliable online presence.</p>
          </div>

          <button class="px-6 py-3 rounded-full transition-all duration-200 inline-block cursor-pointer bg-cta text-white hover:bg-cta-hover w-full mt-auto">Request Proposal</button>
        </div>

        <div class="bg-white border-2 border-primary rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col min-h-0">
          <div class="flex items-center gap-2 mb-1">
            <div class="w-5 h-5 text-primary flex-shrink-0"></div>
            <h3 class="text-xl font-bold text-primary">Tier 2 — Foundation</h3>
          </div>
          <p class="text-sm text-muted-foreground mb-3">Launch with structure. Be visible. Track everything.</p>
          <div class="mb-4">
            <p class="text-xs font-semibold text-primary tracking-wide mb-0.5">Built for</p>
            <p class="text-sm text-muted-foreground">Small businesses and early-stage brands.</p>
          </div>

          <div class="space-y-3 mb-5 flex-1">
            <div>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Website</p>
              <ul class="space-y-1">
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Custom site</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Mobile-first</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Core pages</span></li>
              </ul>
            </div>
            <div>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Analytics</p>
              <ul class="space-y-1">
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>GA4 + GTM</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Conversion tracking</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>KPI dashboard</span></li>
              </ul>
            </div>
            <div>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide mb-1">SEO</p>
              <ul class="space-y-1">
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Keyword research</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Technical SEO</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>On-page optimization</span></li>
              </ul>
            </div>
          </div>

          <div class="mb-4 pt-3 border-t border-border">
            <p class="text-xs font-semibold text-primary tracking-wide mb-0.5">Outcome</p>
            <p class="text-sm text-muted-foreground">A professional digital presence and measurable system.</p>
          </div>

          <button class="px-6 py-3 rounded-full transition-all duration-200 inline-block cursor-pointer bg-cta text-white hover:bg-cta-hover w-full mt-auto">Request Proposal</button>
        </div>

        <div class="bg-white border-2 border-primary rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col min-h-0">
          <div class="flex items-center gap-2 mb-1">
            <div class="w-5 h-5 text-primary flex-shrink-0"></div>
            <h3 class="text-xl font-bold text-primary">Tier 3 — Growth</h3>
          </div>
          <p class="text-sm text-muted-foreground mb-3">Turn traffic into predictable acquisition.</p>
          <div class="mb-4">
            <p class="text-xs font-semibold text-primary tracking-wide mb-0.5">Built for</p>
            <p class="text-sm text-muted-foreground">Brands ready to generate leads and sales.</p>
          </div>

          <div class="space-y-3 mb-5 flex-1">
            <div>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Website &amp; CRO</p>
              <ul class="space-y-1">
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Landing pages</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>CRO framework</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>A/B testing</span></li>
              </ul>
            </div>
            <div>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Analytics</p>
              <ul class="space-y-1">
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Custom dashboard</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Funnel tracking</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Attribution</span></li>
              </ul>
            </div>
            <div>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide mb-1">SEO</p>
              <ul class="space-y-1">
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Keyword expansion</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Content strategy</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Technical audits</span></li>
              </ul>
            </div>
            <div>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Google Ads</p>
              <ul class="space-y-1">
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Campaign structure</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Optimization</span></li>
                <li class="flex items-start gap-2 text-sm text-foreground"><span class="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5">✓</span><span>Conversion bidding</span></li>
              </ul>
            </div>
          </div>

          <div class="mb-4 pt-3 border-t border-border">
            <p class="text-xs font-semibold text-primary tracking-wide mb-0.5">Outcome</p>
            <p class="text-sm text-muted-foreground">Consistent, measurable growth from traffic</p>
          </div>

          <button class="px-6 py-3 rounded-full transition-all duration-200 inline-block cursor-pointer bg-cta text-white hover:bg-cta-hover w-full mt-auto">Request Proposal</button>
        </div>
      </div>
    </div>
  </section>

  <?php /* FAQ section (from FAQ.tsx) */ ?>
  <section class="w-full bg-[#F9F9F9] py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex items-center gap-3 text-cta mb-2 ">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">
          FAQ
        </span>
      </div>
      <h2 class="text-5xl font-semibold text-primary mb-12">Direct answers to strategic questions.</h2>

      <div class="grid md:grid-cols-2 gap-12">
        <div class="bg-white border border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Contact support"
            class="w-48 h-48 rounded-full object-cover mb-6"
          />
          <h3 class="text-2xl font-semibold text-primary mb-4">Didn't get the answer?</h3>
          <p class="text-[#666666] mb-6">Talk with a human expert on our team</p>
          <button class="px-6 py-3 rounded-full transition-all duration-200 inline-block cursor-pointer bg-cta text-white hover:bg-cta-hover">Contact Us</button>
        </div>

        <div class="space-y-4" data-faq-accordion>
          <div class="bg-white border border-border rounded-2xl overflow-hidden" data-faq-item>
            <button class="w-full p-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors" data-faq-trigger>
              <div class="flex-1">
                <h4 class="font-semibold text-primary mb-2">How long does a website build take?</h4>
                <div class="text-xs text-[#666666]">Answered by Web Team</div>
              </div>
              <svg class="w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <div class="px-6 pb-6" data-faq-panel>
              <p class="text-[#666666]">Given you provide or already have the needed amount of media, we can get it live within 3 weeks.</p>
            </div>
          </div>

          <div class="bg-white border border-border rounded-2xl overflow-hidden" data-faq-item>
            <button class="w-full p-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors" data-faq-trigger>
              <div class="flex-1">
                <h4 class="font-semibold text-primary mb-2">Do you require long-term contracts?</h4>
                <div class="text-xs text-[#666666]">Answered by Partnerships Team</div>
              </div>
              <svg class="w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <div class="px-6 pb-6 hidden" data-faq-panel>
              <p class="text-[#666666]">We focus on long-term partnerships but structure engagements around performance milestones.</p>
            </div>
          </div>

          <div class="bg-white border border-border rounded-2xl overflow-hidden" data-faq-item>
            <button class="w-full p-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors" data-faq-trigger>
              <div class="flex-1">
                <h4 class="font-semibold text-primary mb-2">What platforms do you specialize in?</h4>
                <div class="text-xs text-[#666666]">Answered by Performance Team</div>
              </div>
              <svg class="w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <div class="px-6 pb-6 hidden" data-faq-panel>
              <p class="text-[#666666]">Google Ads, Meta Ads, SEO infrastructure, analytics implementation, and conversion optimization systems.</p>
            </div>
          </div>

          <div class="bg-white border border-border rounded-2xl overflow-hidden" data-faq-item>
            <button class="w-full p-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors" data-faq-trigger>
              <div class="flex-1">
                <h4 class="font-semibold text-primary mb-2">What industries do you work with?</h4>
                <div class="text-xs text-[#666666]">Answered by Client Success</div>
              </div>
              <svg class="w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <div class="px-6 pb-6 hidden" data-faq-panel>
              <p class="text-[#666666]">We have experience across many industries but focus on small, community-focused businesses that show opportunity.</p>
            </div>
          </div>

          <div class="bg-white border border-border rounded-2xl overflow-hidden" data-faq-item>
            <button class="w-full p-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors" data-faq-trigger>
              <div class="flex-1">
                <h4 class="font-semibold text-primary mb-2">How do you measure success?</h4>
                <div class="text-xs text-[#666666]">Answered by Analytics Team</div>
              </div>
              <svg class="w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <div class="px-6 pb-6 hidden" data-faq-panel>
              <p class="text-[#666666]">Our custom KPIs and goals are structured around your personal needs. Success means something different to everyone.</p>
            </div>
          </div>

          <div class="bg-white border border-border rounded-2xl overflow-hidden" data-faq-item>
            <button class="w-full p-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors" data-faq-trigger>
              <div class="flex-1">
                <h4 class="font-semibold text-primary mb-2">What is included in your reporting?</h4>
                <div class="text-xs text-[#666666]">Answered by Reporting Team</div>
              </div>
              <svg class="w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform faq-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <div class="px-6 pb-6 hidden" data-faq-panel>
              <p class="text-[#666666]">Monthly performance dashboards, campaign analytics, attribution insights, and strategic recommendations based on data trends.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <?php /* FooterCTA section (from FooterCTA.tsx) */ ?>
  <section id="contact" class="w-full py-16 font-body">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="relative w-full rounded-2xl overflow-hidden py-14 px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style="background: var(--cta);">
        <span
          class="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-headline text-[clamp(4rem,12vw,8rem)] uppercase leading-none"
          style="color: rgba(255,255,255,0.08);"
          aria-hidden="true"
        >
          GROW
        </span>
        <h2 class="font-headline text-4xl md:text-5xl lg:text-6xl text-white relative z-10 max-w-xl">
          Get your free website assessment
        </h2>
        <a
          href="<?php echo esc_url( 'mailto:contact@ivesdeu.com' ); ?>"
          class="relative z-10 shrink-0 px-8 py-3.5 rounded-full bg-white text-cta font-semibold hover:bg-white/95 transition-colors"
        >
          Schedule Your Strategy Call
        </a>
      </div>
    </div>
  </section>
</main>

<?php
get_footer();

