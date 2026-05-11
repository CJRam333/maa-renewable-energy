import { Variants } from "framer-motion";

/**
 * Cinematic, smooth, and grounded animation presets for Framer Motion.
 * Built to feel high-quality without being distracting.
 */

import { Transition } from "framer-motion";

// A slightly longer, smooth bezier curve for an "expensive" feel
export const smoothTransition: Transition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.8,
};

// Subtle fade in
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: smoothTransition },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

// Elegant slide up and fade
export const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: smoothTransition },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4 } },
};

// Staggered children container
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Fade from left
export const fadeLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: smoothTransition },
  exit: { opacity: 0, x: -20, transition: { duration: 0.4 } },
};

// Fade from right
export const fadeRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: smoothTransition },
  exit: { opacity: 0, x: 20, transition: { duration: 0.4 } },
};

// Scale up elegantly
export const scaleUp: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: smoothTransition },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.4 } },
};
