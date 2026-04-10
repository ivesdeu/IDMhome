import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useBandWatermarkParallax } from '../hooks/useParallaxScroll';

export function FooterCTA() {
  const { bandRef, markY, reduced } = useBandWatermarkParallax();

  return (
    <section id="contact" className="w-full py-16 font-body">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={bandRef}
          className="relative w-full rounded-2xl overflow-hidden py-14 px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ background: 'var(--cta)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
        <motion.span
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-headline text-[clamp(4rem,12vw,8rem)] uppercase leading-none"
          style={{ color: 'rgba(255,255,255,0.08)', ...(reduced ? {} : { y: markY }) }}
          aria-hidden
        >
          GROW
        </motion.span>
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.02] relative z-10 max-w-xl">
          Get your free website assessment
        </h2>
        <Link
          to="/contact"
          className="relative z-10 shrink-0 px-8 py-3.5 rounded-full bg-white text-cta font-semibold hover:bg-white/95 transition-colors"
        >
          Schedule Your Strategy Call
        </Link>
      </motion.div>
      </div>
    </section>
  );
}
