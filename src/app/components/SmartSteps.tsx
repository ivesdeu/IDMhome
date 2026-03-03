import React from 'react';
import { SectionLabel } from './SectionLabel';
import { Video, HandHeart, Users, Flame } from 'lucide-react';

export function SmartSteps() {
  const steps = [
    { number: '01', title: 'Audit', description: 'Analyze current performance and identify opportunities' },
    { number: '02', title: 'Strategy', description: 'Design scalable acquisition systems and KPIs' },
    { number: '03', title: 'Execute', description: 'Launch campaigns with precision tracking' },
    { number: '04', title: 'Optimize', description: 'Continuously improve based on performance data' }
  ];

  const skills = ['Paid Media', 'SEO', 'CRO', 'Analytics', 'Attribution'];
  
  const calendarEvents = [
    { day: 'Week 1', icon: Video, title: 'Performance Audit' },
    { day: 'Week 2', icon: HandHeart, title: 'Strategy Workshop' },
    { day: 'Week 3', icon: Users, title: 'Campaign Launch' },
    { day: 'Week 4', icon: Flame, title: 'Optimization Cycle' }
  ];

  return (
    <section className="w-full bg-[#F9F9F9] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Process</SectionLabel>
        <h2 className="text-5xl font-semibold text-black mb-12">How we drive results.</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Calendar Widget */}
          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-black mb-6">Engagement Timeline</h3>
            <div className="space-y-4">
              {calendarEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-[#666666]">{event.day}</div>
                      <div className="font-semibold text-black">{event.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Process Steps */}
          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-black mb-6">Our Process</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-semibold">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-lg">{step.title}</h4>
                    <p className="text-[#666666] text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats and Skills */}
        <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-5xl font-bold text-black mb-2">98%</div>
            <div className="text-[#666666]">Project Success Rate</div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-black text-white rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}