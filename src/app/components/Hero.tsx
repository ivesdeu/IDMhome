import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const GLITCH_CHARS = '*#@$%&!?<>';
const GLITCH_INTERVAL_MS = 100;

function GlitchChars() {
  const [chars, setChars] = useState(['*', '#']);

  useEffect(() => {
    const id = setInterval(() => {
      setChars([
        GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)],
        GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)],
      ]);
    }, GLITCH_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="inline-flex font-mono w-[2ch] min-w-[2ch] h-[1.2em] flex-shrink-0 items-center justify-center align-middle overflow-hidden"
      style={{ lineHeight: 1, flexWrap: 'nowrap' }}
      aria-hidden
    >
      <span className="whitespace-nowrap">{chars[0]}{chars[1]}</span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden hero-grid-overlay flex flex-col justify-center">
      <div className="hero-coral-glow absolute inset-0 pointer-events-none" aria-hidden />

      <div className="max-w-[900px] mx-auto w-full px-8 md:px-12 pt-[120px] pb-[80px] relative text-center">
        <motion.p
          className="eyebrow flex items-center justify-center gap-3 text-cta mb-6 font-body"
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="w-6 h-px bg-cta shrink-0" aria-hidden />
          <span className="text-[0.72rem] uppercase tracking-[0.18em]">Performance Marketing</span>
        </motion.p>
        <motion.h1
          className="font-headline text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.92]"
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block text-primary">Stop getting</span>
          <span className="block text-primary">Sh<GlitchChars /> <span className="text-cta">leads.</span></span>
        </motion.h1>
        <motion.p
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 font-body font-normal"
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          We design and execute data-driven acquisition systems that turn attention into revenue.
        </motion.p>
        <motion.div
          className="flex flex-col items-center gap-6"
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-cta text-white font-medium hover:bg-cta-hover transition-colors text-sm font-body"
            >
              Book a Call
            </a>
            <Link
              to="/case-studies"
              className="px-6 py-3 rounded-full bg-white border border-border text-primary font-medium hover:bg-gray-50 transition-colors text-sm font-body"
            >
              View Case Studies
            </Link>
          </div>
          <div className="flex flex-wrap items-stretch justify-center gap-8">
            <div className="w-[140px] md:w-[160px] bg-white rounded-lg border-2 border-cta p-4 shadow-lg flex flex-col justify-between">
              <div className="font-headline text-3xl md:text-4xl text-cta">3+</div>
              <div className="text-xs text-muted-foreground font-body mt-1">Clients Served</div>
            </div>
            <div className="w-[140px] md:w-[160px] bg-white rounded-lg border-2 border-cta p-4 shadow-lg flex flex-col justify-between">
              <div className="font-headline text-3xl md:text-4xl text-cta">2.8x</div>
              <div className="text-xs text-muted-foreground font-body mt-1">Avg. ROAS improvement</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
