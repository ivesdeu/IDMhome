import React from 'react';
import { ShinyButton } from './ui/shiny-button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-primary leading-tight mb-6">
              Performance Marketing Built for Scalable Growth.
            </h1>
            <p className="text-lg text-[#666666] mb-8 leading-relaxed">
              We design and execute data-driven acquisition systems that turn attention into revenue.
            </p>
            <div className="flex items-center gap-6">
              <a href="#works" className="flex items-center gap-2 text-primary hover:text-gray-600 hover:underline underline-offset-4 active:scale-[0.98] cursor-pointer transition-all duration-200 font-medium">
                <span>View Case Studies</span>
              </a>
              <ShinyButton>Book a Strategy Call</ShinyButton>
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwbWV0cmljc3xlbnwxfHx8fDE3NzI0NTkzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Performance analytics and data dashboard"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}