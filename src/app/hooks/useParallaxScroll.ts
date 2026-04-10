import { useRef, type RefObject } from 'react';
import { useScroll, useTransform, useReducedMotion, type MotionValue } from 'motion/react';

/** Max vertical travel in px (scaled by per-element strength). */
export const PARALLAX_MAX_PX = 28;

export function useReducedParallax(): boolean {
  return useReducedMotion() ?? false;
}

/** Hero background depth while the hero scrolls away. */
export function useHeroSectionParallax(): {
  sectionRef: RefObject<HTMLElement | null>;
  glowY: MotionValue<number>;
  reduced: boolean;
} {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedParallax();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
    layoutEffect: false,
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 0.16 * PARALLAX_MAX_PX]);
  return { sectionRef, glowY, reduced };
}

/** Large watermark text inside CTA bands (GROW / BUILD). */
export function useBandWatermarkParallax(): {
  bandRef: RefObject<HTMLDivElement | null>;
  markY: MotionValue<number>;
  reduced: boolean;
} {
  const bandRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedParallax();
  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });
  const markY = useTransform(scrollYProgress, [0, 1], [0.12 * PARALLAX_MAX_PX, -0.12 * PARALLAX_MAX_PX]);
  return { bandRef, markY, reduced };
}

/** Symmetric drift while the element crosses the viewport. */
export function useInViewParallaxY(strength: number): {
  ref: RefObject<HTMLElement | null>;
  y: MotionValue<number>;
  reduced: boolean;
} {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedParallax();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength * PARALLAX_MAX_PX, -strength * PARALLAX_MAX_PX]);
  return { ref, y, reduced };
}
