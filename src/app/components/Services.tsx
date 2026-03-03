import React from 'react';
import { SectionLabel } from './SectionLabel';
import { Button } from './Button';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      number: '01',
      title: 'Paid Media Strategy & Management',
      description: 'We build high-converting ad systems across Meta, Google, and emerging platforms.'
    },
    {
      number: '02',
      title: 'Search Engine Optimization',
      description: 'Long-term visibility built on technical precision and content authority.'
    },
    {
      number: '03',
      title: 'Conversion Rate Optimization',
      description: 'Landing pages and funnels engineered for measurable lift.'
    },
    {
      number: '04',
      title: 'Brand Positioning & Messaging',
      description: 'Clear differentiation that turns attention into trust.'
    },
    {
      number: '05',
      title: 'Analytics & Attribution Infrastructure',
      description: 'Accurate tracking, reporting, and insight systems that guide decisions.'
    },
    {
      number: '06',
      title: 'Growth Consulting',
      description: 'Executive-level strategy for brands ready to scale aggressively.'
    }
  ];

  return (
    <section id="services" className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-start justify-between mb-12">
          <div>
            <SectionLabel>Core Capabilities</SectionLabel>
            <h2 className="text-5xl font-semibold text-black">Everything required to scale acquisition.</h2>
          </div>
          <Button className="hidden md:inline-block">Request Proposal</Button>
        </div>
        
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="border-b border-[#E5E5E5] py-8 grid md:grid-cols-12 gap-6 items-center hover:bg-gray-50 transition-colors cursor-pointer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className="md:col-span-2">
                <span className="text-7xl font-light text-black opacity-30">{service.number}</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-2xl font-semibold text-black mb-2">{service.title}</h3>
                <p className="text-[#666666]">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}