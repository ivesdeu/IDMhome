"use client";

import React from "react";
import { motion } from "motion/react";

import { cn } from "./utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 } as React.CSSProperties & { "--x"?: string },
  animate: { "--x": "-100%", scale: 1 } as React.CSSProperties & { "--x"?: string },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    repeatDelay: 1,
    type: "tween" as const,
    duration: 2,
    ease: "easeInOut",
    scale: {
      type: "tween" as const,
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.button
      {...animationProps}
      {...props}
      className={cn(
        "relative rounded-full px-6 py-3 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow bg-cta text-white hover:bg-cta-hover dark:bg-cta dark:hover:bg-cta-hover",
        className
      )}
    >
      <span
        className="relative block size-full text-sm uppercase tracking-wide text-white/90"
        style={{
          maskImage:
            "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(255,255,255,0.12)_calc(var(--x)+20%),rgba(255,255,255,0.35)_calc(var(--x)+25%),rgba(255,255,255,0.12)_calc(var(--x)+100%))] p-px"
      />
    </motion.button>
  );
};

export default ShinyButton;
