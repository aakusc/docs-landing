'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "medium"
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string | React.ReactNode;
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "xlarge";
}) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
    xlarge: "max-w-6xl"
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`relative w-full ${sizeClasses[size]} my-8`}
            >
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[var(--card-border)] px-6 py-4">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">{title}</h2>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--card-hover)] hover:text-[var(--text-primary)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, open, close, toggle };
}

export function ClickableCard({
  children,
  onClick,
  className = "",
  glowColor = "cyan"
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  glowColor?: "cyan" | "violet" | "amber" | "emerald";
}) {
  const [isHovered, setIsHovered] = useState(false);

  const glowColors = {
    cyan: "rgba(6, 182, 212, 0.2)",
    violet: "rgba(167, 139, 250, 0.2)",
    amber: "rgba(251, 191, 36, 0.2)",
    emerald: "rgba(52, 211, 153, 0.2)",
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`relative text-left w-full ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
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
        {/* Click indicator */}
        <div className="absolute right-3 top-3 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 text-[var(--text-primary)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}
