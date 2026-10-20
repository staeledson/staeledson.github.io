"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Counts from 0 to `value` once it scrolls into view. Keeps one decimal for non-integer values. */
export default function CountUp({
  value, suffix = "", duration = 1400, locale = "pt",
}: { value: number; suffix?: string; duration?: number; locale?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  const decimals = Number.isInteger(value) ? 0 : 1;
  const factor = 10 ** decimals;

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setN(value); return; }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value * factor) / factor);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, duration]);

  const text = n.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return <span ref={ref}>{text}{suffix}</span>;
}
