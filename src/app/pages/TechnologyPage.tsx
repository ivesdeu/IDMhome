import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SectionLabel } from '../components/SectionLabel';
import { Button } from '../components/Button';
import { Check, BarChart3, Wallet, LayoutDashboard, LineChart, Users, PieChart } from 'lucide-react';
import { motion } from 'motion/react';

const products = [
  {
    number: '01',
    name: 'Runway',
    tagline: 'A modular business intelligence dashboard built for small to mid-size businesses. Track revenue, ad spend, lead volume, and operational KPIs — all in one place, without enterprise pricing.',
    tags: [{ label: 'Live', highlight: true }, { label: 'Business Intelligence' }, { label: 'Dashboard' }],
    stats: [
      { value: 'Real-Time', label: 'Data Sync' },
      { value: 'Custom', label: 'Per Client' },
      { value: 'No-Code', label: 'Setup' },
    ],
    cta: 'Learn More',
    mockup: 'runway',
  },
  {
    number: '02',
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

const pricingPlans = [
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
    name: 'Custom Build',
    price: 'From $1,200',
    priceNote: '',
    description: 'A dashboard scoped and built around your exact data, workflow, and reporting needs.',
    features: ['Unlimited data sources', 'Custom modules & views', 'Brand-matched design', '60-day support window', 'Optional monthly retainer'],
    cta: 'Request a Scope',
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
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-primary mb-6 max-w-3xl">
              Tools Built For Business.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              We don't just run marketing — we build the infrastructure behind it. From personal finance platforms to custom BI dashboards, IDM develops software that turns data into decisions.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#products">
                <Button>Explore Products</Button>
              </a>
              <a href="#custom">
                <Button variant="outlined">Request Custom Build</Button>
              </a>
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
              <h2 className="text-5xl font-semibold text-primary">Software We've Built In-House.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Two platforms developed by the IDM team — available to clients, early users, and businesses that want proven tools without the build cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className="bg-white border border-border rounded-2xl overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Large watermark number */}
                <span className="absolute top-4 right-6 font-headline text-8xl text-cta/20 leading-none pointer-events-none select-none">
                  {product.number}
                </span>

                {/* Mockup */}
                <div
                  className={`h-52 w-full overflow-hidden flex items-center justify-center ${
                    product.mockup === 'runway' ? 'bg-[#f5f5f4]' : 'bg-[#e8e8e6]'
                  }`}
                >
                  {product.mockup === 'runway' ? (
                    <img
                      src="/runway-dashboard.png"
                      alt="Runway business dashboard: revenue, MRR, expenses, charts, and CRM tasks"
                      className="h-full w-full object-cover object-left-top"
                    />
                  ) : (
                    <img
                      src="/moneymate-dashboard.png"
                      alt="MoneyMate personal finance dashboard: net worth, portfolio, cash buffer, and recent activity"
                      className="h-full w-full object-cover object-top"
                    />
                  )}
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

                  <h3 className="font-headline text-3xl text-primary mb-3">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{product.tagline}</p>

                  {/* Stats */}
                  <div className="flex gap-8 border-t border-border pt-5 mb-6">
                    {product.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="font-headline text-xl text-primary">{stat.value}</div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <a href="#" className="text-xs font-bold uppercase tracking-wide text-primary hover:text-cta transition-colors inline-flex items-center gap-2">
                    {product.cta} <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
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
                  className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="absolute top-4 right-5 font-headline text-5xl text-cta/15 leading-none pointer-events-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon className="w-8 h-8 text-cta mb-4" />
                  <h4 className="font-semibold text-primary mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="custom" className="w-full py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="relative w-full rounded-2xl overflow-hidden py-14 px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{ background: 'var(--primary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-headline text-[clamp(4rem,12vw,8rem)] uppercase leading-none"
              style={{ color: 'rgba(255,255,255,0.05)' }}
              aria-hidden
            >
              BUILD
            </span>
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-5xl text-white mb-4">
                Need Something Built for You?
              </h2>
              <p className="text-white/70 max-w-md">
                Every custom dashboard starts with a conversation. Tell us what you're tracking — we'll scope the build, set a timeline, and get it done.
              </p>
            </div>
            <a
              href="#contact"
              className="relative z-10 shrink-0 px-8 py-3.5 rounded-full bg-cta text-white font-semibold hover:bg-cta-hover transition-colors"
            >
              Start a Custom Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-5xl font-semibold text-primary mb-4">Simple. Transparent.</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Pick a pre-built product or scope a custom engagement. No retainer lock-ins unless you want ongoing support.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`bg-white rounded-2xl p-6 flex flex-col relative ${
                  plan.featured ? 'border-2 border-primary' : 'border border-border'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {plan.featured && (
                  <div className="absolute -top-px left-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-wider text-center py-1.5 rounded-t-2xl">
                    Most Popular
                  </div>
                )}
                <div className={plan.featured ? 'pt-4' : ''}>
                  <h3 className="font-semibold text-primary mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-headline text-4xl text-primary">{plan.price}</span>
                    {plan.priceNote && <span className="text-sm text-muted-foreground">{plan.priceNote}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground border-t border-border pt-4 mb-5">{plan.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-primary">
                        <Check className="w-4 h-4 text-cta flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.featured ? 'filled' : 'outlined'} className="w-full">
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
