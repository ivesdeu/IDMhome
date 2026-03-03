import React from 'react';
import { SectionLabel } from './SectionLabel';

export function Collaborations() {
  const clients = [
    { name: 'E-Commerce Growth', years: '3', service: 'Paid Media & CRO' },
    { name: 'B2B SaaS Platform', years: '2', service: 'SEO & Attribution' },
    { name: 'DTC Consumer Brand', years: '4', service: 'Full Growth Partner' },
    { name: 'Marketplace Platform', years: '5', service: 'Performance Marketing' }
  ];

  return (
    <section className="w-full bg-[#F9F9F9] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Trusted Partners — Growth-stage brands and founder-led companies.</SectionLabel>
        
        <div className="overflow-hidden mt-8">
          <div className="flex gap-6 animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 bg-white border border-[#E5E5E5] rounded-2xl p-6 w-[300px]"
              >
                <h3 className="font-semibold text-black mb-2">{client.name}</h3>
                <p className="text-sm text-[#666666] mb-1">Working for {client.years} years</p>
                <p className="text-sm text-black">{client.service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}