"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: ReactNode;
  delay?: number;
  y?: number;
};

/**
 * Scroll-reveal wrapper. Animates from hidden to visible the first time it
 * enters the viewport. Respects prefers-reduced-motion.
 */
export default function Reveal({ children, delay = 0, y = 22, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: delay / 1000 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
