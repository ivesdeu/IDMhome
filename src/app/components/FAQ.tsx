import React, { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { Button } from './Button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Paid media performance typically stabilizes within 30–60 days. SEO and organic strategies compound over 3–6 months. We prioritize early momentum while building long-term scalability.',
      answeredBy: 'Strategy Team'
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'We focus on long-term partnerships but structure engagements around performance milestones.',
      answeredBy: 'Partnerships Team'
    },
    {
      question: 'What platforms do you specialize in?',
      answer: 'Google Ads, Meta Ads, SEO infrastructure, analytics implementation, and conversion optimization systems.',
      answeredBy: 'Performance Team'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We serve growth-stage brands and founder-led companies across e-commerce, SaaS, B2B services, and DTC brands.',
      answeredBy: 'Client Success'
    },
    {
      question: 'How do you measure success?',
      answer: 'We measure success through revenue growth, ROAS improvement, cost per acquisition efficiency, and sustained conversion rate increases.',
      answeredBy: 'Analytics Team'
    },
    {
      question: 'What is included in your reporting?',
      answer: 'Monthly performance dashboards, campaign analytics, attribution insights, and strategic recommendations based on data trends.',
      answeredBy: 'Reporting Team'
    }
  ];

  return (
    <section className="w-full bg-[#F9F9F9] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="text-5xl font-semibold text-primary mb-12">Direct answers to strategic questions.</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Image and CTA */}
          <div className="bg-white border border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Contact support"
              className="w-48 h-48 rounded-full object-cover mb-6"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4">Didn't get the answer?</h3>
            <p className="text-[#666666] mb-6">Talk with a human expert on our team</p>
            <Button>Contact Us</Button>
          </div>
          
          {/* Right: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-2">{faq.question}</h4>
                    <div className="text-xs text-[#666666]">Answered by {faq.answeredBy}</div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#666666]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}