import React from 'react';
import { Button } from './Button';
import { motion } from 'motion/react';

export function FooterCTA() {
  return (
    <section 
      id="contact"
      className="w-full relative py-32 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1633319987325-aae32f3d8dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYmFja2dyb3VuZCUyMHRleHR1cmUlMjBjb25jcmV0ZXxlbnwxfHx8fDE3NzI1NjY4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to build a real growth engine?
        </motion.h2>
        <motion.p 
          className="text-xl text-white/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's design a strategy that scales with your ambition.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">Schedule Your Strategy Call</Button>
        </motion.div>
      </div>
    </section>
  );
}