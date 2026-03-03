import React from 'react';
import { SectionLabel } from './SectionLabel';
import { Button } from './Button';
import { Check, TrendingUp, Handshake, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Pricing() {
  const plans = [
    {
      name: 'Growth Foundation',
      badge: 'For brands building structured acquisition',
      badgeIcon: TrendingUp,
      price: '$2,500',
      services: ['Paid Media Strategy & Management', 'Search Engine Optimization', 'Analytics & Attribution Infrastructure', 'Monthly Performance Reporting']
    },
    {
      name: 'Scale Accelerator',
      badge: 'For brands optimizing and expanding paid acquisition',
      badgeIcon: Handshake,
      price: '$5,000',
      services: ['Paid Media Strategy & Management', 'Search Engine Optimization', 'Conversion Rate Optimization', 'Brand Positioning & Messaging', 'Analytics & Attribution Infrastructure']
    },
    {
      name: 'Full Growth Partner',
      badge: 'Dedicated strategy, execution, and analytics oversight',
      badgeIcon: Zap,
      price: 'Custom',
      services: ['Paid Media Strategy & Management', 'Search Engine Optimization', 'Conversion Rate Optimization', 'Brand Positioning & Messaging', 'Analytics & Attribution Infrastructure', 'Growth Consulting']
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Engagement Models</SectionLabel>
        <h2 className="text-5xl font-semibold text-black mb-12">Flexible structures. Clear deliverables.</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const BadgeIcon = plan.badgeIcon;
            return (
              <motion.div 
                key={index}
                className="bg-white border-2 border-black rounded-2xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-start gap-2 text-sm text-[#666666] mb-4 min-h-[40px]">
                  <BadgeIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{plan.badge}</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-2">{plan.name}</h3>
                <div className="text-5xl font-bold text-black mb-6">
                  {plan.price === 'Custom' ? (
                    <span>{plan.price}</span>
                  ) : (
                    <>{plan.price}<span className="text-xl text-[#666666]">/mo</span></>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.services.map((service, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-black">{service}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full">Request Proposal</Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}