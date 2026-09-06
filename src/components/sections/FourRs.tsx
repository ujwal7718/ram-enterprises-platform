import { ArrowRight, Droplet, Recycle, RefreshCcw, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../motion/Reveal';
import Stagger from '../motion/Stagger';
import TiltCard from '../motion/TiltCard';

const FourRs = () => {
  const steps = [
    {
      title: 'Reduce',
      description: 'Avoid wastage of water and think before you use.',
      icon: <Droplet size={32} className="text-[#00B4D8]" />,
    },
    {
      title: 'Reuse',
      description: 'Reuse treated water for boilers, cooling towers, gardens & washrooms.',
      icon: <RefreshCcw size={32} className="text-[#00B4D8]" />,
    },
    {
      title: 'Recycle',
      description: 'Recycle correctly through advanced treatment workflows.',
      icon: <Recycle size={32} className="text-[#00B4D8]" />,
    },
    {
      title: 'Recover',
      description: 'Adopt advanced technologies for maximum recovery and quality.',
      icon: <Activity size={32} className="text-[#00B4D8]" />,
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Sustainability Core
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            The Four R's Framework
          </h2>
          <p className="text-gray-600 text-lg">
            Our approach to sustainable water management and environmental engineering.
          </p>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10" amount={0.15}>
            {steps.map((step, index) => (
              <Stagger.Item key={step.title} className="relative [perspective:800px]">
                <TiltCard
                  strength={6}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-[#0B192C]/5 group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B192C] mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </TiltCard>

                {/* Arrow connecting cards */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:flex absolute top-1/2 -right-6 w-8 h-8 bg-white border border-gray-100 rounded-full items-center justify-center -translate-y-1/2 z-20 shadow-sm text-[#00B4D8]"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                )}
              </Stagger.Item>
            ))}
          </Stagger>
        </div>

      </div>
    </section>
  );
};

export default FourRs;
