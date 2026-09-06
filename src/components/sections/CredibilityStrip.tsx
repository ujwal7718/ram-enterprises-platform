import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../motion/Reveal';

const CLIENTS = [
  'LICIOUS',
  'ITC (ICML)',
  'VINTAGE COFFEE',
  'ULTRATECH CEMENT',
  'CIPLA',
  'GLOBAL GREEN',
  'BIG BASKET',
];

const CredibilityStrip = () => {
  const prefersReducedMotion = useReducedMotion();
  // Duplicate the list so the marquee can loop seamlessly at -50%.
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-[#F7FAFC] py-10 border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Reveal direction="none">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
            Trusted by Industry Leaders
          </p>
        </Reveal>
      </div>

      <div
        className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        role="list"
        aria-label="Client logos"
      >
        {prefersReducedMotion ? (
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale px-4">
            {CLIENTS.map((client) => (
              <span
                key={client}
                role="listitem"
                className="text-xl md:text-2xl font-bold text-[#1A365D] tracking-tighter"
              >
                {client}
              </span>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex items-center gap-16 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {track.map((client, index) => (
              <span
                key={`${client}-${index}`}
                role="listitem"
                className="text-xl md:text-2xl font-bold text-[#1A365D] tracking-tighter opacity-50 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300 shrink-0"
              >
                {client}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CredibilityStrip;
