'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function InteractiveCard({
  children,
  className = "",
  glowColor = "cyan"
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "violet" | "amber" | "emerald" | "accent";
}) {
  const [isHovered, setIsHovered] = useState(false);

  const glowColors = {
    cyan: "rgba(6, 182, 212, 0.15)",
    violet: "rgba(167, 139, 250, 0.15)",
    amber: "rgba(251, 191, 36, 0.15)",
    emerald: "rgba(52, 211, 153, 0.15)",
    accent: "var(--accent-glow)",
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {isHovered && (
        <motion.div
          className="absolute -inset-0.5 rounded-xl opacity-75 blur-lg"
          style={{ background: glowColors[glowColor] }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}

export function HoverCard({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)"
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
