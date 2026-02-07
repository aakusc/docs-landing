'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function AnimatedNumber({
  value,
  duration = 2
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration, isInView]);

  return (
    <span ref={ref}>
      {displayValue}
    </span>
  );
}

export function PulsingDot({
  color = "cyan"
}: {
  color?: "cyan" | "violet" | "amber" | "emerald" | "orange" | "pink" | "blue";
}) {
  const colorClasses = {
    cyan: "bg-cyan-400",
    violet: "bg-violet-400",
    amber: "bg-amber-400",
    emerald: "bg-emerald-400",
    orange: "bg-orange-400",
    pink: "bg-pink-400",
    blue: "bg-blue-400",
  };

  return (
    <motion.div
      className={`h-2 w-2 rounded-full ${colorClasses[color]}`}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [1, 0.6, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function ProgressBar({
  progress,
  color = "cyan"
}: {
  progress: number;
  color?: "cyan" | "violet" | "amber" | "emerald";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const colorClasses = {
    cyan: "bg-cyan-400",
    violet: "bg-violet-400",
    amber: "bg-amber-400",
    emerald: "bg-emerald-400",
  };

  return (
    <div ref={ref} className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className={`h-full ${colorClasses[color]}`}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${progress}%` } : { width: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}
