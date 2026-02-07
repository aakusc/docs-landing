'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function ExpandableSection({
  title,
  children,
  defaultOpen = false,
  className = "",
  titleClassName = "",
  icon = "+"
}: {
  title: string | React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  titleClassName?: string;
  icon?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border-2 border-[var(--card-border)] rounded-xl overflow-hidden bg-[var(--card-bg)] transition-colors duration-200 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-4 flex items-center justify-between hover:bg-[var(--card-hover)] transition-colors text-[var(--text-primary)] ${titleClassName}`}
      >
        <span className="text-left font-medium">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-2xl font-light"
        >
          {icon}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 border-t border-[var(--card-border)]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TabContainer({
  tabs,
  className = "",
  tabClassName = "",
  contentClassName = ""
}: {
  tabs: Array<{
    label: string;
    content: React.ReactNode;
    color?: "cyan" | "violet" | "amber" | "emerald";
  }>;
  className?: string;
  tabClassName?: string;
  contentClassName?: string;
}) {
  const [activeTab, setActiveTab] = useState(0);

  const colorClasses = {
    cyan: "border-[var(--bhg-blue)] text-[var(--bhg-blue)]",
    violet: "border-[var(--bhg-coral)] text-[var(--bhg-coral)]",
    amber: "border-amber-600 text-amber-600",
    emerald: "border-[var(--success)] text-[var(--success)]",
  };

  return (
    <div className={`border-2 border-[var(--card-border)] rounded-xl overflow-hidden bg-[var(--card-bg)] transition-colors duration-200 ${className}`}>
      <div className="flex border-b border-[var(--card-border)]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-all relative ${
              activeTab === index
                ? `${colorClasses[tab.color || "cyan"]}`
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--card-hover)]"
            } ${tabClassName}`}
          >
            {tab.label}
            {activeTab === index && (
              <motion.div
                layoutId="activeTab"
                className={`absolute bottom-0 left-0 right-0 h-0.5 ${tab.color === "violet" ? "bg-[var(--bhg-coral)]" : tab.color === "emerald" ? "bg-[var(--success)]" : tab.color === "amber" ? "bg-amber-600" : "bg-[var(--bhg-blue)]"}`}
                initial={false}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`px-6 py-6 ${contentClassName}`}
        >
          {tabs[activeTab].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function AccordionGroup({
  items,
  className = "",
  allowMultiple = false
}: {
  items: Array<{
    title: string | React.ReactNode;
    content: React.ReactNode;
  }>;
  className?: string;
  allowMultiple?: boolean;
}) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="border-2 border-[var(--card-border)] rounded-xl overflow-hidden bg-[var(--card-bg)] transition-colors duration-200">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-[var(--card-hover)] transition-colors text-[var(--text-primary)]"
          >
            <span className="text-left font-medium">{item.title}</span>
            <motion.span
              animate={{ rotate: openIndexes.includes(index) ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-xl"
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openIndexes.includes(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-[var(--card-border)]">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
