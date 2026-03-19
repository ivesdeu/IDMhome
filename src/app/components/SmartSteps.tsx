import React from 'react';
import { SectionLabel } from './SectionLabel';
import { MessageCircle, ClipboardList, Settings, Trophy, Film, Handshake, MessageSquare, Flame } from 'lucide-react';
import { motion } from 'motion/react';

const calendarEvents = [
  { date: '01', label: 'Discovery', icon: Film },
  { date: '06', label: 'Website', icon: Handshake },
  { date: '17', label: 'Data Review', icon: MessageSquare },
  { date: '30', label: 'SEO Execution', icon: Flame },
];

const steps = [
  { number: '01', label: 'Discuss', icon: MessageCircle },
  { number: '02', label: 'Plan', icon: ClipboardList },
  { number: '03', label: 'Produce', icon: Settings },
  { number: '04', label: 'Succeed', icon: Trophy },
];

const serviceTags = ['Paid Media', 'SEO', 'CRO', 'Analytics', 'Optimization'];

const dayLabels = ['S', 'M', 'T', 'W', 'TH', 'F', 'S'];

export function SmartSteps() {
  return (
    <section className="w-full bg-[#F9F9F9] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel>Process</SectionLabel>
        <h2 className="text-5xl font-semibold text-primary mb-12 font-body">How we drive results.</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Top-Left: Plan your growth + calendar */}
          <motion.div
            className="bg-white border border-border rounded-2xl p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-1 font-body">Plan your growth</h3>
            <p className="text-sm text-muted-foreground mb-6 font-body">Clear steps to scale smart and fast.</p>
            <div className="grid grid-cols-7 gap-x-1 gap-y-2 text-center">
              {dayLabels.map((d, i) => (
                <div key={i} className="text-[10px] font-medium text-muted-foreground py-1">{d}</div>
              ))}
              {Array.from({ length: 35 }, (_, i) => {
                const dateNum = i >= 0 && i < 30 ? i + 1 : null;
                const dateStr = dateNum ? String(dateNum).padStart(2, '0') : null;
                const event = dateStr ? calendarEvents.find((e) => e.date === dateStr) : null;
                if (dateNum === null) return <div key={`empty-${i}`} />;
                return (
                  <div
                    key={dateNum}
                    className={`rounded flex flex-col items-center justify-center text-[10px] py-1 min-h-[28px] ${
                      event ? 'bg-cta/15 ring-1 ring-cta/40' : ''
                    }`}
                  >
                    {event ? (
                      <>
                        <span className="font-bold text-primary">{event.date}</span>
                        <span className="text-[9px] text-muted-foreground truncate w-full px-0.5">
                          {event.label}
                        </span>
                      </>
                    ) : (
                      <span className="text-muted-foreground/50">{dateNum}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Top-Right: Our 4-step plan (upward trending bars) */}
          <motion.div
            className="bg-white border border-border rounded-2xl p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-1 font-body">Our 4-step plan</h3>
            <p className="text-sm text-muted-foreground mb-6 font-body">A simple path to smart, scalable growth.</p>
            <div className="flex items-end justify-between gap-3 h-[200px]">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const heights = ['h-[96px]', 'h-[120px]', 'h-[152px]', 'h-[200px]'];
                return (
                  <div
                    key={i}
                    className={`flex-1 min-w-0 rounded-xl bg-muted/40 border border-border flex flex-col items-center justify-between py-2 px-2 min-h-[96px] ${heights[i]}`}
                  >
                    <span className="text-xs font-medium text-muted-foreground flex-shrink-0">{step.number}</span>
                    <Icon className="w-6 h-6 text-primary flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-xs font-semibold text-primary text-center leading-tight flex-shrink-0">{step.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom-Left: Project Success Rate */}
          <motion.div
            className="bg-white border border-border rounded-2xl p-8 flex flex-col justify-center min-h-[180px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="font-headline text-6xl md:text-7xl text-primary leading-none">98%</div>
            <div className="text-muted-foreground font-body mt-2">Project success rate</div>
          </motion.div>

          {/* Bottom-Right: Service tags */}
          <motion.div
            className="bg-white border border-border rounded-2xl p-8 flex flex-wrap items-center justify-center gap-4 min-h-[180px] relative"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {serviceTags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg text-white text-sm font-semibold uppercase tracking-wide"
                style={{
                  background: '#0F2A44',
                  transform: `rotate(${[-2, 1.5, -1, 2, -0.5][i % 5]}deg)`,
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
