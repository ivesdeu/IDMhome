import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SectionLabel } from '../components/SectionLabel';
import { Button } from '../components/Button';
import { Check, BarChart3, Wallet, LayoutDashboard, LineChart, Users, PieChart } from 'lucide-react';
import { motion } from 'motion/react';
import { useBandWatermarkParallax } from '../hooks/useParallaxScroll';

const RUNWAY_SITE = 'https://runway.marketing';
const COMPASS_SITE = 'http://compass.ivesdeu.com';

type TechnologyProduct = {
  name: string;
  tagline: string;
  tags: Array<{ label: string; highlight?: boolean }>;
  stats: Array<{ value: string; label: string }>;
  cta: string;
  mockup: 'runway' | 'moneymate' | 'compass';
  /** When set, product CTA opens this URL (e.g. marketing site) instead of /contact */
  ctaHref?: string;
};

const productMockup: Record<
  TechnologyProduct['mockup'],
  { src: string; alt: string; imgClass: string; shellClass: string }
> = {
  runway: {
    src: '/runway-product-preview.png',
    alt: 'Runway product preview: dashboard with revenue, profit, and AR metrics, charts, and expense breakdown',
    imgClass: 'h-full w-full object-cover object-top',
    shellClass: 'bg-[#f5f5f4]',
  },
  moneymate: {
    src: '/moneymate-dashboard.png',
    alt: 'MoneyMate personal finance dashboard: net worth, portfolio, cash buffer, and recent activity',
    imgClass: 'h-full w-full object-cover object-top',
    shellClass: 'bg-[#e8e8e6]',
  },
  compass: {
    src: '/compass-product-preview.png',
    alt: 'Compass business intelligence: performance dashboard with KPIs, revenue trend, and team overview',
    imgClass: 'h-full w-full object-cover object-top',
    shellClass: 'bg-[#f5f5f4]',
  },
};

const products: TechnologyProduct[] = [
  {
    name: 'Compass',
    tagline:
      'One dashboard. Live numbers. Built for SMBs who want revenue, spend, leads, and ops KPIs in one place—fast to set up, priced for teams, not enterprises.',
    tags: [{ label: 'Live', highlight: true }, { label: 'Business Intelligence' }, { label: 'Integrations' }],
    stats: [
      { value: 'Gmail', label: 'In sync' },
      { value: 'Stripe', label: 'Revenue' },
      { value: 'Calendar', label: 'Schedule' },
    ],
    cta: 'Learn More',
    ctaHref: COMPASS_SITE,
    mockup: 'compass',
  },
  {
    name: 'Runway',
    tagline: 'A modular business intelligence dashboard built for small to mid-size businesses. Track revenue, ad spend, lead volume, and operational KPIs — all in one place, without enterprise pricing.',
    tags: [{ label: 'Live', highlight: true }, { label: 'Business Intelligence' }, { label: 'Dashboard' }],
    stats: [
      { value: 'Real-Time', label: 'Data Sync' },
      { value: 'Custom', label: 'Per Client' },
      { value: 'No-Code', label: 'Setup' },
    ],
    cta: 'Learn More',
    ctaHref: RUNWAY_SITE,
    mockup: 'runway',
  },
  {
    name: 'MoneyMate',
    tagline: 'A personal finance and portfolio analytics platform built for young professionals who want more than a spreadsheet. Connects to accounts via Plaid, tracks spending, and surfaces insights automatically.',
    tags: [{ label: 'Beta', highlight: true }, { label: 'Personal Finance' }, { label: 'SaaS' }],
    stats: [
      { value: 'Plaid', label: 'Connected' },
      { value: 'AI', label: 'Insights' },
      { value: 'Beta', label: 'Access Open' },
    ],
    cta: 'Join Beta',
    mockup: 'moneymate',
  },
];

const biServices = [
  { icon: BarChart3, title: 'Revenue Dashboards', description: 'Custom-built views of your revenue data — by channel, campaign, period, or product line — connected to your actual sources.' },
  { icon: LineChart, title: 'Ad Performance Tracking', description: 'Unified reporting across Google, Meta, and other platforms. Stop logging into three dashboards to see one number.' },
  { icon: Users, title: 'Lead & Pipeline Views', description: 'Track lead volume, source quality, and conversion rates with dashboards built around how your sales process actually works.' },
  { icon: LayoutDashboard, title: 'Operations Reporting', description: 'Job completion rates, scheduling efficiency, customer retention — operational metrics that matter for service businesses.' },
  { icon: PieChart, title: 'Financial Summaries', description: 'P&L overviews, margin tracking, and cash flow visibility built for owners who want the numbers without the accountant delay.' },
  { icon: Wallet, title: 'White-Label Solutions', description: 'Need a reporting tool to deliver to your own clients? We build and brand BI tools for agencies and consultants.' },
];

type PricingPlan = {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
  /** External CTA (e.g. product app); omit to use /contact */
  ctaHref?: string;
};

const pricingPlans: PricingPlan[] = [
  {
    name: 'Runway Starter',
    price: '$499',
    priceNote: '/ one-time',
    description: 'Pre-built BI dashboard configured to your business. Ideal for service companies ready to stop guessing.',
    features: ['Up to 4 data sources', 'Revenue & ad spend views', 'Lead tracking module', '30-day setup support'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Compass Enterprise',
    price: 'Free',
    priceNote: '/ while we test',
    description:
      'Live Compass workspace with revenue, spend, and lead views plus integrations. Enterprise is free while we onboard early teams.',
    features: [
      'Gmail, Stripe & Calendar sync',
      'Revenue, spend & pipeline views',
      'Team KPI dashboard',
      'Guided onboarding',
    ],
    cta: 'Get Started',
    featured: false,
    ctaHref: COMPASS_SITE,
  },
  {
    name: 'Custom Build',
    price: 'From $1,200',
    priceNote: '',
    description: 'A dashboard scoped and built around your exact data, workflow, and reporting needs.',
    features: ['Unlimited data sources', 'Custom modules & views', 'Brand-matched design', '60-day support window', 'Optional monthly retainer'],
    cta: 'Request a Quote',
    featured: true,
  },
  {
    name: 'MoneyMate Beta',
    price: 'Free',
    priceNote: '/ during beta',
    description: 'Early access to the personal finance platform built for young professionals and founders.',
    features: ['Plaid bank connection', 'Spending breakdown', 'Portfolio tracking', 'AI insights (beta)'],
    cta: 'Join Beta',
    featured: false,
  },
];

function TechnologyCustomBuildCta() {
  const { bandRef, markY, reduced } = useBandWatermarkParallax();

  return (
    <section id="custom" className="w-full py-16 font-body">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={bandRef}
          className="relative w-full rounded-2xl overflow-hidden py-14 px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ background: 'var(--cta)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-headline text-[clamp(4rem,12vw,8rem)] uppercase leading-none"
            style={{ color: 'rgba(255, 255, 255, 0.08)', ...(reduced ? {} : { y: markY }) }}
            aria-hidden
          >
            BUILD
          </motion.span>
          <div className="relative z-10 max-w-xl md:max-w-[620px]">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.02] mb-3">
              Need Something Built for You?
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-[520px]">
              Every custom dashboard starts with a conversation. Tell us what you're tracking — we'll scope the build, set a timeline, and get it done.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative z-10 shrink-0 inline-flex items-center justify-center rounded-full bg-white text-cta px-8 py-3.5 text-sm font-semibold hover:bg-white/95 transition-colors"
          >
            Start a Custom Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function TechnologyPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Technology — IDM Agency';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navbar />

      {/* Hero */}
      <section className="w-full pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Technology</SectionLabel>
            <h1 className="text-5xl font-semibold text-primary mb-4 max-w-3xl">
              Tools Built For Business.
            </h1>
            <p className="text-lg text-[#666666] max-w-xl mb-8">
              We don't just run marketing — we build the infrastructure behind it. From personal finance platforms to custom BI dashboards, IDM develops software that turns data into decisions.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#products">
                <Button className="text-sm font-body font-medium">Explore Products</Button>
              </a>
              <Button to="/contact" variant="outlined" className="text-sm font-body font-medium">
                Request Custom Build
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="w-full py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Our Products</SectionLabel>
              <h2 className="text-5xl font-semibold text-primary leading-tight tracking-tight max-w-2xl lg:max-w-3xl">
                Software We've Built In-House.
              </h2>
            </div>
            <p className="text-lg text-[#666666] max-w-sm">
              Our in-house platforms available to clients and early users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const mock = productMockup[product.mockup];
              return (
              <motion.div
                key={product.name}
                className="bg-white border border-border rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Mockup */}
                <div
                  className={`h-52 w-full overflow-hidden flex items-center justify-center ${mock.shellClass}`}
                >
                  <img src={mock.src} alt={mock.alt} className={mock.imgClass} />
                </div>

                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-bold uppercase tracking-wide px-3 py-1 border rounded-full ${
                          tag.highlight
                            ? 'border-cta text-cta bg-cta/5'
                            : 'border-border text-muted-foreground bg-muted/30'
                        }`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-body text-[2rem] font-bold tracking-tight text-primary mb-3">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{product.tagline}</p>

                  {/* Stats */}
                  <div className="flex gap-8 border-t border-border pt-5 mb-6">
                    {product.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="font-body text-xl font-bold tracking-tight text-primary">{stat.value}</div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                {product.ctaHref ? (
                  <a
                    href={product.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wide text-primary hover:text-cta transition-colors inline-flex items-center gap-2"
                  >
                    {product.cta} <span>→</span>
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="text-xs font-bold uppercase tracking-wide text-primary hover:text-cta transition-colors inline-flex items-center gap-2"
                  >
                    {product.cta} <span>→</span>
                  </Link>
                )}
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Business Intelligence */}
      <section className="w-full py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel>Business Intelligence</SectionLabel>
          <h2 className="text-5xl font-semibold text-primary mb-12 max-w-2xl">What We Build for Clients.</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {biServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <Icon className="w-8 h-8 text-cta shrink-0" />
                    <span
                      className="font-headline text-5xl leading-none tabular-nums shrink-0 pointer-events-none select-none"
                      style={{ color: 'var(--cta)', opacity: 0.15 }}
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <TechnologyCustomBuildCta />

      {/* Pricing */}
      <section className="w-full py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-5xl font-semibold text-primary mb-4">Simple. Transparent.</h2>
          <p className="text-lg text-[#666666] mb-12 max-w-lg">
            Pick a pre-built product or scope a custom engagement. No retainer lock-ins unless you want ongoing support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={
                  plan.featured
                    ? 'flex flex-col rounded-2xl overflow-hidden bg-white border-2 border-primary shadow-sm'
                    : 'bg-white rounded-2xl p-6 flex flex-col border border-border shadow-sm flex-1 min-h-0'
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {plan.featured ? (
                  <>
                    <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider text-center py-2 shrink-0 font-body">
                      Most Popular
                    </div>
                    <div className="p-6 flex flex-col flex-1 min-h-0">
                      <h3 className="font-semibold text-primary mb-1 font-body">{plan.name}</h3>
                      <div className="flex flex-wrap items-baseline gap-x-1 gap-y-0 mb-4">
                        <span className="font-headline text-4xl text-primary leading-none">{plan.price}</span>
                        {plan.priceNote && (
                          <span className="text-sm text-muted-foreground font-body">{plan.priceNote}</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground border-t border-border pt-4 mb-5 font-body">
                        {plan.description}
                      </p>
                      <ul className="space-y-3 mb-8 flex-1 font-body">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-primary items-start">
                            <Check className="w-4 h-4 text-cta shrink-0 mt-px" strokeWidth={2} />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.ctaHref ? (
                        <motion.a
                          href={plan.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto block w-full text-center px-6 py-3 rounded-full transition-all duration-200 cursor-pointer bg-cta text-white hover:bg-cta-hover text-sm font-semibold font-body"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {plan.cta}
                        </motion.a>
                      ) : (
                        <Button to="/contact" variant="filled" className="mt-auto w-full text-sm font-semibold font-body">
                          {plan.cta}
                        </Button>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-primary mb-1 font-body">{plan.name}</h3>
                    <div className="flex flex-wrap items-baseline gap-x-1 gap-y-0 mb-4">
                      <span className="font-headline text-4xl text-primary leading-none">{plan.price}</span>
                      {plan.priceNote && (
                        <span className="text-sm text-muted-foreground font-body">{plan.priceNote}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground border-t border-border pt-4 mb-5 font-body">
                      {plan.description}
                    </p>
                    <ul className="space-y-3 mb-8 flex-1 font-body">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-primary items-start">
                          <Check className="w-4 h-4 text-cta shrink-0 mt-px" strokeWidth={2} />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.ctaHref ? (
                      <motion.a
                        href={plan.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto block w-full text-center px-6 py-3 rounded-full transition-all duration-200 cursor-pointer bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground text-sm font-semibold font-body"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {plan.cta}
                      </motion.a>
                    ) : (
                      <Button to="/contact" variant="outlined" className="mt-auto w-full text-sm font-semibold font-body">
                        {plan.cta}
                      </Button>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
