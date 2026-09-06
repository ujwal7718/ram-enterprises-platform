import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CAPABILITIES = ['STP', 'ETP', 'WTP', 'Turnkey', 'Civil', 'Electrical', 'Automation', 'Pipeline', 'Structural', 'AMC', 'O&M'];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  // Background drifts slightly slower than scroll for a subtle parallax depth cue.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0B192C]">
      {/* Dynamic Water-Inspired Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: 'url("/assets/projects/aerial-treatment-plant.jpeg")', y: bgY }}
        />
        {/* Gradient overlay for readability and premium look */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/80 to-[#0B192C]/40"></div>

        {/* Subtle gradient meshes, gently breathing */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#00B4D8]/10 blur-[120px] rounded-full mix-blend-overlay"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#48CAE4]/10 blur-[120px] rounded-full mix-blend-overlay"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#00B4D8]/20 text-[#00B4D8] text-sm font-semibold tracking-wider mb-6 border border-[#00B4D8]/30">
              EPC & TURNKEY CONTRACTORS
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineering Solutions for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#48CAE4]">Sustainable Water Future</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Delivering world-class design, supply, installation, and commissioning for water and wastewater treatment plants, alongside integrated industrial capabilities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00B4D8] text-[#0B192C] font-semibold rounded-sm hover:bg-white hover:scale-[1.03] transition-all duration-300 group"
            >
              Explore Our Solutions
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-500 text-white font-medium rounded-sm hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              Request a Quote
            </Link>
          </motion.div>

          {/* Capability Strip */}
          <motion.div
            className="flex flex-wrap items-center gap-3 text-sm md:text-base text-gray-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {CAPABILITIES.map((cap, index) => (
              <div key={cap} className="flex items-center gap-3">
                <span className="hover:text-white transition-colors cursor-default">{cap}</span>
                {index < CAPABILITIES.length - 1 && (
                  <span className="text-[#00B4D8]">•</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom curved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-[#F7FAFC]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
