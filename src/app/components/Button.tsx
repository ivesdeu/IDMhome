import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const MotionLink = motion(Link);

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text';
  className?: string;
  onClick?: () => void;
  /** When set, renders a router link styled as a button (for CTAs to `/contact`, etc.). */
  to?: string;
}

export function Button({ children, variant = 'filled', className = '', onClick, to }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full transition-all duration-200 cursor-pointer';
  const widthLayout = className.includes('w-full') ? 'block w-full text-center' : 'inline-block';

  const variantStyles = {
    filled: 'bg-cta text-white hover:bg-cta-hover',
    outlined: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground',
    text: 'bg-transparent text-primary hover:text-muted-foreground',
  };

  const combined = `${baseStyles} ${variantStyles[variant]} ${className} ${widthLayout}`;

  if (to) {
    return (
      <MotionLink to={to} className={combined} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${className.includes('w-full') ? 'block w-full' : 'inline-block'}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}