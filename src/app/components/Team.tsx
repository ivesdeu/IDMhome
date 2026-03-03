import React from 'react';
import { SectionLabel } from './SectionLabel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Team() {
  const team = [
    {
      name: 'Mark Deutschmann',
      role: 'Performance Analyst',
      quote: 'Revenue growth requires precision, not guesswork.',
      image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc3MjU2Njg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Otto Ives',
      role: 'SEO Strategist',
      quote: 'Visibility is earned through technical excellence.',
      image: 'https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbnxlbnwxfHx8fDE3NzI0NTcyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-start justify-between mb-12">
          <div>
            <SectionLabel>Team</SectionLabel>
            <h2 className="text-5xl font-semibold text-primary">Your growth partners.</h2>
          </div>
          <a href="#" className="text-primary hover:text-gray-600 flex items-center gap-2">
            More about us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 justify-center">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 w-[350px] bg-white border border-border rounded-2xl p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <ImageWithFallback 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
                />
                <p className="text-lg italic text-[#666666] mb-4 text-center">"{member.quote}"</p>
                <h3 className="font-semibold text-primary text-center">{member.name}</h3>
                <p className="text-sm text-[#666666] text-center">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}