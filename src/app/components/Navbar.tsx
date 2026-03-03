import React from 'react';
import { Button } from './Button';
import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      className="w-full bg-white border-b border-border sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-xl text-primary">Marketra®</div>
        
        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">
          <a href="#about" className="text-primary hover:text-gray-600 transition-colors">About</a>
          <a href="#works" className="text-primary hover:text-gray-600 transition-colors">Case Studies</a>
          <a href="#services" className="text-primary hover:text-gray-600 transition-colors">Capabilities</a>
          <a href="#contact" className="text-primary hover:text-gray-600 transition-colors">Contact</a>
        </div>
        
        {/* Right CTA */}
        <Button>Book a Call</Button>
      </div>
    </motion.nav>
  );
}