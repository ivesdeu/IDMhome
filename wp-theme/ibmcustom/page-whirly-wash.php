<?php
/**
 * Page Whirly Wash template.
 * @package ibmhome
 */

get_header();
?>

<main class="min-h-screen bg-gradient-page">
  <?php /* Whirly Wash Case Study */ ?>
  <div class="max-w-[1200px] mx-auto px-6 pt-24 pb-16">
    <!-- Header: number + title + tags, brand description on right -->
    <div class="grid md:grid-cols-[1fr,1fr] gap-12 mb-12 pt-2">
      <div class="min-h-0">
        <p class="text-sm text-[#666666] mb-2 leading-normal pt-px">01</p>
        <h1 class="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
          Revenue Growth in 6 Months
        </h1>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1.5 rounded-full bg-[#e8e8e8] text-sm text-primary font-medium">Home Service</span>
          <span class="px-3 py-1.5 rounded-full bg-[#e8e8e8] text-sm text-primary font-medium">Paid Media</span>
        </div>
      </div>
      <div>
        <p class="text-[#666666] leading-relaxed">
          Professional window cleaning and exterior washing brand serving Lake County. They had strong local awareness but needed to turn inquiries into booked jobs and scale acquisition predictably.
        </p>
      </div>
    </div>

    <!-- Hero image -->
    <div class="rounded-2xl overflow-hidden shadow-lg mb-12">
      <img
        src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/revenue-growth-6months.png"
        alt="Revenue Growth in 6 Months"
        class="w-full h-[400px] md:h-[500px] object-cover"
        data-fallback-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
      />
    </div>

    <!-- Client info: labels left, values right -->
    <dl class="border-t border-border divide-y divide-border mb-16">
      <div class="flex justify-between items-center py-4 gap-4">
        <dt class="text-[#666666] font-medium">Client</dt>
        <dd class="text-primary font-semibold text-right">Whirly Wash</dd>
      </div>
      <div class="flex justify-between items-center py-4 gap-4">
        <dt class="text-[#666666] font-medium">Category</dt>
        <dd class="text-primary font-semibold text-right">Digital Marketing Analytics &amp; Web Development</dd>
      </div>
      <div class="flex justify-between items-center py-4 gap-4">
        <dt class="text-[#666666] font-medium">Work Period</dt>
        <dd class="text-primary font-semibold text-right">January 2025 – March 2025</dd>
      </div>
      <div class="flex justify-between items-center py-4 gap-4">
        <dt class="text-[#666666] font-medium">Industry</dt>
        <dd class="text-primary font-semibold text-right">Home Services</dd>
      </div>
    </dl>

    <!-- Challenge, Strategy (left), Results in primary box (right) -->
    <div class="grid md:grid-cols-[1fr,1fr] gap-8 mb-24 items-start">
      <div class="space-y-12">
        <div>
          <h2 class="text-xl font-bold text-primary mb-4">The Challenge</h2>
          <p class="text-[#666666] leading-relaxed">
            Whirly Wash had an outdated web presence and no structured approach to paid or organic search. Despite offering competitive services, they were invisible in local search results and had no reliable channel for generating new leads.
          </p>
        </div>
        <div>
          <h2 class="text-xl font-bold text-primary mb-4">Our Strategy</h2>
          <ul class="space-y-3 text-[#666666] leading-relaxed list-disc list-inside">
            <li>Website Development: Built a clean, conversion-focused site with clear service pages, strong calls to action, and mobile-first structure designed to turn visitors into leads.</li>
            <li>SEO &amp; Keyword Optimization: Conducted a full keyword audit targeting high-intent local search terms. Restructured page content and metadata to improve organic ranking across their service area.</li>
            <li>Google Ads Campaigns: Launched and managed search campaigns targeting service-area keywords with high purchase intent. Continuously refined match types, negatives, and ad copy to improve efficiency.</li>
            <li>Analytics Setup: Implemented full tracking infrastructure including conversion events, call tracking, and campaign attribution so every dollar of spend could be tied to an outcome.</li>
          </ul>
        </div>
      </div>
      <div class="bg-primary rounded-2xl p-8 sticky top-24">
        <h2 class="text-xl font-bold text-white mb-4">The Results</h2>
        <ul class="space-y-3 text-white/95 leading-relaxed list-disc list-inside">
          <li>2.7x return on ad spend within the first 60 days</li>
          <li>2x increase in inbound leads compared to the prior period</li>
          <li>Significant improvement in local search visibility across target keywords</li>
          <li>Fully attributable lead pipeline established for the first time</li>
        </ul>
      </div>
    </div>

    <div class="pt-8 border-t border-border">
      <a href="<?php echo esc_url( home_url( '/case-studies' ) ); ?>" class="text-cta hover:underline font-medium">
        ← Back to Case Studies
      </a>
    </div>
  </div>

  <script>
    (() => {
      const imgs = document.querySelectorAll('img[data-fallback-src]');
      imgs.forEach((img) => {
        img.onerror = () => {
          if (img.dataset.fallbackApplied === '1') return;
          img.dataset.fallbackApplied = '1';
          img.src = img.getAttribute('data-fallback-src');
        };
      });
    })();
  </script>
</main>

<?php get_footer(); ?>

