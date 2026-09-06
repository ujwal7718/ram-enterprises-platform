import { type ReactNode, type FC } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  amount?: number;
}

interface StaggerComponent extends FC<StaggerProps> {
  Item: FC<{ children: ReactNode; className?: string }>;
}

/**
 * Wrap a grid/list with <Stagger> and each direct child with <Stagger.Item>
 * to get a coordinated cascade-in on scroll, instead of every card
 * animating independently at the same moment.
 */
const Stagger: StaggerComponent = ({ children, className, amount = 0.15 }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
};

Stagger.Item = StaggerItem;

export default Stagger;
