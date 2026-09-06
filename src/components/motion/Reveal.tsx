import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  /** Portion of the element that must be visible before it animates in. */
  amount?: number;
  once?: boolean;
}

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
  scale: { scale: 0.92 },
  none: {},
};

/**
 * Wraps children in a whileInView reveal. This is the single reusable
 * building block for the "flowing" scroll motion across the whole site —
 * every section uses the same easing/timing so the page reads as one
 * coherent system rather than a grab-bag of effects.
 */
const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  amount = 0.2,
  once = true,
}: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();
  const offset = offsets[direction];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
