"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { slideUp } from "@/lib/animations";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variants?: Variants;
  /** Whether to animate once when in view, or everytime it enters viewport */
  viewportOnce?: boolean;
}

export function MotionWrapper({
  children,
  variants = slideUp,
  viewportOnce = true,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: viewportOnce, margin: "-100px" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
