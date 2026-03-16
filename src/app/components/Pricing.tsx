import React from 'react';
import { SectionLabel } from './SectionLabel';
import { Button } from './Button';
import { Check, Layers, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';

type PlanSection = { title: string; items: string[] };

const plans = [
  {
    name: 'Tier 1 — Essentials',
    tagline: 'Get online and stay online.',
    builtFor: 'Businesses that need a presence and reliability.',
    icon: Layers,
    sections: [
      { title: 'Website', items: ['Build & deploy', 'Hosting', 'On-call maintenance'] },
    ] as PlanSection[],
    outcome: 'A reliable online presence.',
  },
  {
    name: 'Tier 2 — Foundation',
    tagline: 'Launch with structure. Be visible. Track everything.',
    builtFor: 'Small businesses and early-stage brands.',
    icon: TrendingUp,
    sections: [
      { title: 'Website', items: ['Custom site', 'Mobile-first', 'Core pages'] },
      { title: 'Analytics', items: ['GA4 + GTM', 'Conversion tracking', 'KPI dashboard'] },
      { title: 'SEO', items: ['Keyword research', 'Technical SEO', 'On-page optimization'] },
    ] as PlanSection[],
    outcome: 'A professional digital presence and measurable system.',
  },
  {
    name: 'Tier 3 — Growth',
    tagline: 'Turn traffic into predictable acquisition.',
    builtFor: 'Brands ready to generate leads and sales.',
    icon: Zap,
    sections: [
      { title: 'Website & CRO', items: ['Landing pages', 'CRO framework', 'A/B testing'] },
      { title: 'Analytics', items: ['Custom dashboard', 'Funnel tracking', 'Attribution'] },
      { title: 'SEO', items: ['Keyword expansion', 'Content strategy', 'Technical audits'] },
      { title: 'Google Ads', items: ['Campaign structure', 'Optimization', 'Conversion bidding'] },
    ] as PlanSection[],
    outcome: 'Consistent, measurable growth from traffic',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Engagement Models</SectionLabel>
        <h2 className="text-5xl font-semibold text-primary mb-12">Flexible structures. Clear deliverables.</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const PlanIcon = plan.icon;
            return (
              <motion.div
                key={index}
                className="bg-white border-2 border-primary rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col min-h-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <PlanIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{plan.tagline}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary tracking-wide mb-0.5">Built for</p>
                  <p className="text-sm text-muted-foreground">{plan.builtFor}</p>
                </div>

                <div className="space-y-3 mb-5 flex-1">
                  {plan.sections.map((section, si) => (
                    <div key={si}>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">{section.title}</p>
                      <ul className="space-y-1">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mb-4 pt-3 border-t border-border">
                  <p className="text-xs font-semibold text-primary tracking-wide mb-0.5">Outcome</p>
                  <p className="text-sm text-muted-foreground">{plan.outcome}</p>
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
