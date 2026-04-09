import React from 'react';
import { motion } from 'motion/react';
import { NumberTicker } from './ui/number-ticker';

const stats: { value: number; suffix: string; label: string; decimalPlaces?: number }[] = [
  { value: 4, suffix: '+', label: 'Clients Served' },
  { value: 5, suffix: '+', label: 'Campaigns Launched' },
  { value: 2.8, suffix: 'x', label: 'Avg. ROAS Improvement', decimalPlaces: 1 },
];

export function StatsBar() {
  return (
    <section
      className="w-full border-t border-b border-border"
      style={{ borderColor: 'rgba(0,0,0,0.08)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 divide-x font-body" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="py-8 px-8 text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="font-headline text-4xl md:text-5xl text-primary">
                <NumberTicker
                  value={stat.value}
                  delay={index * 0.1}
                  decimalPlaces={stat.decimalPlaces ?? 0}
                  className="font-headline text-primary"
                />
                <span className="text-cta">{stat.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
