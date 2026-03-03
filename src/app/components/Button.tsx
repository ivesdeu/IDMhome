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
    filled: 'bg-black text-white hover:bg-gray-800',
    outlined: 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
    text: 'bg-transparent text-black hover:text-gray-600'
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