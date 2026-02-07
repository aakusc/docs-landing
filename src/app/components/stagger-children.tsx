'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function StaggerChildren({
  children,
  staggerDelay = 0.1
}: {
  children: React.ReactNode;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
