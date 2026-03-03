import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`text-xs uppercase tracking-widest text-[#666666] mb-4 ${className}`}>
      {children}
    </div>
  );
}
