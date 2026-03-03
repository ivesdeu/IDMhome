import React, { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: 'Marketra transformed our paid acquisition strategy. We scaled from $50K to $500K monthly revenue while improving ROAS by 2.7x.',
      name: 'Sarah Johnson',
      title: 'CEO, UrbanThread'
    },
    {
      quote: 'Their analytics infrastructure gave us clarity we never had. Now every decision is backed by clean attribution data.',
      name: 'Marcus Chen',
      title: 'Founder, Elixify Supplements'
    },
    {
      quote: 'We needed a partner who understood performance, not vanity metrics. Marketra delivered a 3.1x return on ad spend within 90 days.',
      name: 'Emily Rodriguez',
      title: 'Marketing Director, Luxe Beauty'
    },
    {
      quote: 'Their CRO work increased our conversion rate by 140%. Finally, an agency that focuses on what actually matters—revenue.',
      name: 'David Kim',
      title: 'Co-Founder, Modern Furniture Co.'
    },
    {
      quote: 'The SEO strategy they built compounds every month. Our organic traffic grew 220% year-over-year with zero waste.',
      name: 'Rachel Adams',
      title: 'VP Marketing, Tech Startup'
    },
    {
      quote: 'They restructured our entire growth model. The result? Predictable, scalable acquisition we can actually forecast.',
      name: 'James Martinez',
      title: 'Founder, Artisan Coffee Co.'
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-start justify-between mb-12">
          <div>
            <SectionLabel>Testimonial</SectionLabel>
            <h2 className="text-5xl font-semibold text-black">Words that inspire us.</h2>
          </div>
          <a href="#works" className="text-black hover:text-gray-600 flex items-center gap-2">
            Visit Case Studies <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="relative bg-[#F9F9F9] rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-3xl italic text-black mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <h4 className="font-bold text-black text-xl">{testimonials[currentIndex].name}</h4>
            <p className="text-[#666666]">{testimonials[currentIndex].title}</p>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-black font-semibold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[#666666]">/</span>
              <span className="text-[#666666]">
                {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
            
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}