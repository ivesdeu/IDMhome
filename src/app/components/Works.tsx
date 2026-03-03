import React from 'react';
import { SectionLabel } from './SectionLabel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Works() {
  const works = [
    {
      tags: ['Home Service', 'Paid Media'],
      metric: '+142%',
      title: 'Revenue Growth in 6 Months',
      subtitle: '3.1x Return on Ad Spend',
      image: '/revenue-growth-6months.png'
    },
    {
      tags: ['Home Service', 'Website Creation'],
      metric: '-38%',
      title: 'Cost Per Acquisition Reduction',
      subtitle: '2.4x Conversion Rate Increase',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  return (
    <section id="works" className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-start justify-between mb-12">
          <div>
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="text-5xl font-semibold text-primary mb-4">Real performance. Documented results.</h2>
            <p className="text-lg text-[#666666] max-w-2xl">
              We don't measure success in impressions. We measure it in revenue, efficiency, and sustained growth.
            </p>
          </div>
          <a href="#" className="text-primary hover:text-gray-600 flex items-center gap-2">
            Explore All Case Studies <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[500px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback 
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <div className="flex gap-2 mb-4">
                  {work.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-6xl font-bold text-white mb-2">{work.metric}</div>
                <h3 className="text-2xl font-semibold text-white mb-1">{work.title}</h3>
                <p className="text-lg text-white/80">{work.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}