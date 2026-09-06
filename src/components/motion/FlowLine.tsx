import { motion, useReducedMotion } from 'framer-motion';

const FlowLine = ({ className = '' }: { className?: string }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`h-[3px] bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] rounded-full origin-left ${className}`}
      initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
      whileInView={prefersReducedMotion ? undefined : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
  );
};

export default FlowLine;
