import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = 'filled', className = '', onClick }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full transition-all duration-200 inline-block cursor-pointer';
  
  const variantStyles = {
    filled: 'bg-cta text-white hover:bg-cta-hover',
    outlined: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground',
    text: 'bg-transparent text-primary hover:text-gray-600'
  };

  return (
    <motion.button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}