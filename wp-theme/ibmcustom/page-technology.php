<?php
/**
 * Technology page (matches React TechnologyPage).
 *
 * @package ibmhome
 */

get_header();

$u   = get_template_directory_uri() . '/assets/images';
$cta = home_url( '/contact' );
?>

<main class="min-h-screen bg-gradient-page font-body">
  <section class="w-full pt-32 pb-16">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex items-center gap-3 text-cta mb-2">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">Technology</span>
      </div>
      <h1 class="font-headline text-5xl md:text-6xl lg:text-7xl text-primary mb-6 max-w-3xl">
        Tools Built For Business.
      </h1>
      <p class="text-lg text-muted-foreground max-w-xl mb-8">
        We don't just run marketing — we build the infrastructure behind it. From personal finance platforms to custom BI dashboards, IDM develops software that turns data into decisions.
      </p>
      <div class="flex gap-4 flex-wrap">
        <a href="#products" class="px-6 py-3 rounded-full transition-all duration-200 inline-block cursor-pointer bg-cta text-white hover:bg-cta-hover text-sm font-body">Explore Products</a>
        <a href="<?php echo esc_url( $cta ); ?>" class="px-6 py-3 rounded-full transition-all duration-200 inline-block cursor-pointer bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground text-sm font-body">Request Custom Build</a>
      </div>
    </div>
  </section>

  <section id="products" class="w-full py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div class="flex items-center gap-3 text-cta mb-2">
            <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
            <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">Our Products</span>
          </div>
          <h2 class="text-5xl font-semibold text-primary">Software We've Built In-House.</h2>
        </div>
        <p class="text-muted-foreground max-w-sm">
          Two platforms developed by the IDM team — available to clients, early users, and businesses that want proven tools without the build cost.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <article class="bg-white border border-border rounded-2xl overflow-hidden">
          <div class="h-52 w-full overflow-hidden flex items-center justify-center bg-[#f5f5f4]">
            <img src="<?php echo esc_url( $u . '/runway-dashboard.png' ); ?>" alt="Runway business dashboard: revenue, MRR, expenses, charts, and CRM tasks" class="h-full w-full object-cover object-left-top" loading="lazy" width="800" height="400" />
          </div>
          <div class="p-8">
            <div class="flex flex-wrap gap-2 mb-5">
              <span class="text-[10px] font-bold uppercase tracking-wide px-3 py-1 border rounded-full border-cta text-cta bg-cta/5">Live</span>
              <span class="text-[10px] font-bold uppercase tracking-wide px-3 py-1 border rounded-full border-border text-muted-foreground bg-muted/30">Business Intelligence</span>
              <span class="text-[10px] font-bold uppercase tracking-wide px-3 py-1 border rounded-full border-border text-muted-foreground bg-muted/30">Dashboard</span>
            </div>
            <h3 class="font-headline text-3xl text-primary mb-3">Runway</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-6">
              A modular business intelligence dashboard built for small to mid-size businesses. Track revenue, ad spend, lead volume, and operational KPIs — all in one place, without enterprise pricing.
            </p>
            <div class="flex gap-8 border-t border-border pt-5 mb-6">
              <div><div class="font-headline text-xl text-primary">Real-Time</div><div class="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Data Sync</div></div>
              <div><div class="font-headline text-xl text-primary">Custom</div><div class="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Per Client</div></div>
              <div><div class="font-headline text-xl text-primary">No-Code</div><div class="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Setup</div></div>
            </div>
            <a href="<?php echo esc_url( $cta ); ?>" class="text-xs font-bold uppercase tracking-wide text-primary hover:text-cta transition-colors inline-flex items-center gap-2">Learn More <span>→</span></a>
          </div>
        </article>

        <article class="bg-white border border-border rounded-2xl overflow-hidden">
          <div class="h-52 w-full overflow-hidden flex items-center justify-center bg-[#e8e8e6]">
            <img src="<?php echo esc_url( $u . '/moneymate-dashboard.png' ); ?>" alt="MoneyMate personal finance dashboard: net worth, portfolio, cash buffer, and recent activity" class="h-full w-full object-cover object-top" loading="lazy" width="800" height="400" />
          </div>
          <div class="p-8">
            <div class="flex flex-wrap gap-2 mb-5">
              <span class="text-[10px] font-bold uppercase tracking-wide px-3 py-1 border rounded-full border-cta text-cta bg-cta/5">Beta</span>
              <span class="text-[10px] font-bold uppercase tracking-wide px-3 py-1 border rounded-full border-border text-muted-foreground bg-muted/30">Personal Finance</span>
              <span class="text-[10px] font-bold uppercase tracking-wide px-3 py-1 border rounded-full border-border text-muted-foreground bg-muted/30">SaaS</span>
            </div>
            <h3 class="font-headline text-3xl text-primary mb-3">MoneyMate</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-6">
              A personal finance and portfolio analytics platform built for young professionals who want more than a spreadsheet. Connects to accounts via Plaid, tracks spending, and surfaces insights automatically.
            </p>
            <div class="flex gap-8 border-t border-border pt-5 mb-6">
              <div><div class="font-headline text-xl text-primary">Plaid</div><div class="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Connected</div></div>
              <div><div class="font-headline text-xl text-primary">AI</div><div class="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Insights</div></div>
              <div><div class="font-headline text-xl text-primary">Beta</div><div class="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Access Open</div></div>
            </div>
            <a href="<?php echo esc_url( $cta ); ?>" class="text-xs font-bold uppercase tracking-wide text-primary hover:text-cta transition-colors inline-flex items-center gap-2">Join Beta <span>→</span></a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <?php
  $bi = array(
    array( 'title' => 'Revenue Dashboards', 'body' => 'Custom-built views of your revenue data — by channel, campaign, period, or product line — connected to your actual sources.' ),
    array( 'title' => 'Ad Performance Tracking', 'body' => 'Unified reporting across Google, Meta, and other platforms. Stop logging into three dashboards to see one number.' ),
    array( 'title' => 'Lead & Pipeline Views', 'body' => 'Track lead volume, source quality, and conversion rates with dashboards built around how your sales process actually works.' ),
    array( 'title' => 'Operations Reporting', 'body' => 'Job completion rates, scheduling efficiency, customer retention — operational metrics that matter for service businesses.' ),
    array( 'title' => 'Financial Summaries', 'body' => 'P&L overviews, margin tracking, and cash flow visibility built for owners who want the numbers without the accountant delay.' ),
    array( 'title' => 'White-Label Solutions', 'body' => 'Need a reporting tool to deliver to your own clients? We build and brand BI tools for agencies and consultants.' ),
  );
  $bi_icons = array(
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>',
  );
  ?>
  <section class="w-full py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex items-center gap-3 text-cta mb-2">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">Business Intelligence</span>
      </div>
      <h2 class="text-5xl font-semibold text-primary mb-12 max-w-2xl">What We Build for Clients.</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <?php foreach ( $bi as $i => $row ) : ?>
          <div class="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow relative">
            <span class="absolute top-4 right-5 font-headline text-5xl text-cta/15 leading-none pointer-events-none select-none"><?php echo esc_html( str_pad( (string) ( $i + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
            <svg class="w-8 h-8 text-cta mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><?php echo $bi_icons[ $i ]; ?></svg>
            <h4 class="font-semibold text-primary mb-2"><?php echo esc_html( $row['title'] ); ?></h4>
            <p class="text-sm text-muted-foreground leading-relaxed"><?php echo esc_html( $row['body'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section id="custom" class="w-full py-16">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="relative w-full rounded-2xl overflow-hidden py-14 px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style="background: var(--primary);">
        <span class="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-headline text-[clamp(4rem,12vw,8rem)] uppercase leading-none text-white/5" aria-hidden="true">BUILD</span>
        <div class="relative z-10">
          <h2 class="font-headline text-4xl md:text-5xl text-white mb-4">Need Something Built for You?</h2>
          <p class="text-white/70 max-w-md">
            Every custom dashboard starts with a conversation. Tell us what you're tracking — we'll scope the build, set a timeline, and get it done.
          </p>
        </div>
        <a href="<?php echo esc_url( $cta ); ?>" class="relative z-10 shrink-0 px-8 py-3.5 rounded-full bg-cta text-white font-semibold hover:bg-cta-hover transition-colors">Start a Custom Project</a>
      </div>
    </div>
  </section>

  <?php
  $plans = array(
    array(
      'name'        => 'Runway Starter',
      'price'       => '$499',
      'note'        => '/ one-time',
      'description' => 'Pre-built BI dashboard configured to your business. Ideal for service companies ready to stop guessing.',
      'features'    => array( 'Up to 4 data sources', 'Revenue & ad spend views', 'Lead tracking module', '30-day setup support' ),
      'cta'         => 'Get Started',
      'featured'    => false,
    ),
    array(
      'name'        => 'Custom Build',
      'price'       => 'From $1,200',
      'note'        => '',
      'description' => 'A dashboard scoped and built around your exact data, workflow, and reporting needs.',
      'features'    => array( 'Unlimited data sources', 'Custom modules & views', 'Brand-matched design', '60-day support window', 'Optional monthly retainer' ),
      'cta'         => 'Request a Scope',
      'featured'    => true,
    ),
    array(
      'name'        => 'MoneyMate Beta',
      'price'       => 'Free',
      'note'        => '/ during beta',
      'description' => 'Early access to the personal finance platform built for young professionals and founders.',
      'features'    => array( 'Plaid bank connection', 'Spending breakdown', 'Portfolio tracking', 'AI insights (beta)' ),
      'cta'         => 'Join Beta',
      'featured'    => false,
    ),
  );
  ?>
  <section class="w-full py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex items-center gap-3 text-cta mb-2">
        <span class="w-6 h-px bg-cta shrink-0" aria-hidden="true"></span>
        <span class="text-[0.72rem] uppercase tracking-[0.18em] font-medium" style="letter-spacing: 0.18em;">Pricing</span>
      </div>
      <h2 class="text-5xl font-semibold text-primary mb-4">Simple. Transparent.</h2>
      <p class="text-muted-foreground mb-12 max-w-lg">
        Pick a pre-built product or scope a custom engagement. No retainer lock-ins unless you want ongoing support.
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <?php foreach ( $plans as $plan ) : ?>
          <div class="bg-white rounded-2xl p-6 flex flex-col relative <?php echo $plan['featured'] ? 'border-2 border-primary' : 'border border-border'; ?>">
            <?php if ( $plan['featured'] ) : ?>
              <div class="absolute -top-px left-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-wider text-center py-1.5 rounded-t-2xl">Most Popular</div>
            <?php endif; ?>
            <div class="<?php echo $plan['featured'] ? 'pt-4' : ''; ?>">
              <h3 class="font-semibold text-primary mb-1"><?php echo esc_html( $plan['name'] ); ?></h3>
              <div class="flex items-baseline gap-1 mb-4">
                <span class="font-headline text-4xl text-primary"><?php echo esc_html( $plan['price'] ); ?></span>
                <?php if ( $plan['note'] ) : ?>
                  <span class="text-sm text-muted-foreground"><?php echo esc_html( $plan['note'] ); ?></span>
                <?php endif; ?>
              </div>
              <p class="text-sm text-muted-foreground border-t border-border pt-4 mb-5"><?php echo esc_html( $plan['description'] ); ?></p>
              <ul class="space-y-3 mb-8 flex-1">
                <?php foreach ( $plan['features'] as $f ) : ?>
                  <li class="flex items-start gap-2 text-sm text-primary">
                    <svg class="w-4 h-4 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    <span><?php echo esc_html( $f ); ?></span>
                  </li>
                <?php endforeach; ?>
              </ul>
              <a href="<?php echo esc_url( $cta ); ?>" class="block w-full text-center px-6 py-3 rounded-full transition-all duration-200 text-sm font-body <?php echo $plan['featured'] ? 'bg-cta text-white hover:bg-cta-hover' : 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground'; ?>">
                <?php echo esc_html( $plan['cta'] ); ?>
              </a>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
