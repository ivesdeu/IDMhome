import React from 'react';
import { SectionLabel } from './SectionLabel';
import { Button } from './Button';
import { Check, Layers, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';

type PlanSection = { title: string; items: string[] };

const plans = [
  {
    name: 'Tier 1 — Foundation',
    tagline: 'Launch with structure. Be visible. Track everything.',
    builtFor: 'Small businesses, early-stage brands, or companies without a formal digital infrastructure.',
    icon: Layers,
    sections: [
      {
        title: 'Website',
        items: [
          'Custom high-performance website',
          'Mobile-first build',
          'Conversion-optimized layout',
          'Core service pages',
          'Basic speed optimization',
        ],
      },
      {
        title: 'Analytics',
        items: [
          'Google Analytics 4 setup',
          'Google Tag Manager configuration',
          'Conversion tracking (forms, calls, purchases)',
          'Baseline KPI reporting dashboard',
        ],
      },
      {
        title: 'SEO',
        items: [
          'Foundational keyword research',
          'Technical SEO setup',
          'On-page optimization',
          'Search Console integration',
        ],
      },
    ] as PlanSection[],
    outcome: 'You leave this phase with a professional digital presence and a measurable system in place.',
  },
  {
    name: 'Tier 2 — Growth',
    tagline: 'Turn traffic into predictable acquisition.',
    builtFor: 'Businesses ready to actively generate leads or sales through paid and organic channels.',
    icon: TrendingUp,
    sections: [
      {
        title: 'Website & CRO',
        items: [
          'Campaign-specific landing pages',
          'Conversion rate optimization framework',
          'Heatmaps + behavioral tracking',
          'A/B testing capability',
        ],
      },
      {
        title: 'Analytics & Reporting',
        items: [
          'Custom KPI dashboard',
          'Funnel tracking',
          'Attribution mapping',
          'Ongoing performance reporting',
        ],
      },
      {
        title: 'SEO',
        items: [
          'Ongoing keyword expansion',
          'Content strategy development',
          'Competitor research',
          'Technical audits',
        ],
      },
      {
        title: 'Google Ads',
        items: [
          'Multi-campaign structure',
          'Strategic keyword sculpting',
          'Continuous optimization',
          'Conversion-focused bidding strategy',
        ],
      },
    ] as PlanSection[],
    outcome: 'You move from having traffic to generating consistent, measurable growth.',
  },
  {
    name: 'Tier 3 — Performance Partner',
    tagline: 'Scale with full-funnel strategy and executive-level data.',
    builtFor: 'Companies serious about aggressive growth and long-term market positioning.',
    icon: Zap,
    sections: [
      {
        title: 'Advanced Conversion Strategy',
        items: [
          'Dedicated testing roadmap',
          'Copy refinement & messaging optimization',
          'Ongoing landing page builds',
          'Conversion experimentation cycles',
        ],
      },
      {
        title: 'Advanced Analytics',
        items: [
          'Cohort analysis',
          'LTV modeling',
          'Multi-touch attribution',
          'Forecasting models',
        ],
      },
      {
        title: 'Paid Media Expansion',
        items: [
          'Full Google ecosystem (Search, Display, YouTube, Shopping)',
          'Advanced audience segmentation',
          'Budget scaling strategy',
          'Testing frameworks',
        ],
      },
      {
        title: 'SEO Authority Strategy',
        items: [
          'Content cluster architecture',
          'Link-building initiatives',
          'Authority positioning strategy',
        ],
      },
      {
        title: 'Executive Strategy',
        items: [
          'Monthly strategic review',
          'Quarterly growth roadmap',
          'Market positioning refinement',
        ],
      },
    ] as PlanSection[],
    outcome: 'You operate with a data-driven growth engine instead of isolated marketing efforts.',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Engagement Models</SectionLabel>
        <h2 className="text-5xl font-semibold text-primary mb-12">Flexible structures. Clear deliverables.</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const PlanIcon = plan.icon;
            return (
              <motion.div
                key={index}
                className="bg-white border-2 border-primary rounded-2xl p-8 hover:shadow-lg transition-shadow flex flex-col min-h-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <PlanIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
                </div>
                <p className="text-sm text-[#666666] mb-4">{plan.tagline}</p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Built For</p>
                  <p className="text-sm text-[#666666]">{plan.builtFor}</p>
                </div>

                <div className="space-y-5 mb-8 flex-1">
                  {plan.sections.map((section, si) => (
                    <div key={si}>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">{section.title}</p>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mb-6 pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Outcome</p>
                  <p className="text-sm text-[#666666]">{plan.outcome}</p>
                </div>

                <Button className="w-full mt-auto">Request Proposal</Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
