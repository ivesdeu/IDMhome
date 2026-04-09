import React from 'react';
import { SectionLabel } from './SectionLabel';
import { motion } from 'motion/react';

const services = [
  { number: '01', title: 'Website Design & Development', description: 'Custom-built websites and landing pages engineered to convert visitors into customers.' },
  { number: '02', title: 'Paid Media Management', description: 'High-performing ad systems across Google, Meta, and beyond — built to drive measurable return.' },
  { number: '03', title: 'Search Engine Optimization', description: 'Long-term visibility built on technical precision, content authority, and local dominance.' },
  { number: '04', title: 'Branding & Messaging', description: 'Positioning, identity, and copy that differentiate your business and build lasting trust.' },
  { number: '05', title: 'Business Intelligence & Dashboards', description: 'Custom reporting tools and analytics dashboards that turn your data into decisions.' },
  { number: '06', title: 'Growth Consulting', description: 'Strategic guidance for owners ready to scale — from funnel audits to market expansion.' },
];

export function Services() {
  return (
    <section id="core-capabilities" className="w-full py-24 font-body">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>Core Capabilities</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary mt-2 max-w-2xl">
            Everything required to scale acquisition.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5" style={{ background: 'rgba(0,0,0,0.08)' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="group bg-card p-8 relative transition-colors duration-300 hover:bg-[#fef8f6]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <span className="font-headline text-7xl md:text-8xl text-cta/25 absolute top-6 right-6 leading-none">
                {service.number}
              </span>
              <h3 className="text-xl font-semibold text-primary mb-2 relative z-10">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-cta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ width: '100%' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
