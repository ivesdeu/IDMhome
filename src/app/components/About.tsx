import React from 'react';
import { SectionLabel } from './SectionLabel';
import { motion } from 'motion/react';

export function About() {
  const stats = [
    { label: 'Clients Served', value: '3+' },
    { label: 'Campaigns', value: '5+' },
    { label: 'Avg. ROAS Improvement', value: '2.8x' },
    { label: 'Industries Served', value: '3+' }
  ];

  return (
    <section id="about" className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>About Us</SectionLabel>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-semibold text-primary mb-12 max-w-4xl leading-snug"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Strategy First. Execution Second. Results Always.
        </motion.h2>

        <motion.p 
          className="text-lg text-[#666666] mb-12 max-w-4xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We partner with ambitious brands to build measurable growth engines. By combining paid media, search visibility, brand positioning, and conversion optimization, we create marketing systems that scale predictably. Every decision is backed by data. Every campaign is built for performance.
        </motion.p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="border-t-2 border-primary pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg text-[#666666]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}