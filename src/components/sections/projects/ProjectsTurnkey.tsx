import { motion } from 'framer-motion';
import { PencilRuler, Truck, ArrowUpRight, CheckCircle2, Settings } from 'lucide-react';

const ProjectsTurnkey = () => {
  const steps = [
    { num: '01', title: 'Design & Drawing', icon: <PencilRuler size={24} /> },
    { num: '02', title: 'Supply', icon: <Truck size={24} /> },
    { num: '03', title: 'Erection & Installation', icon: <ArrowUpRight size={24} /> },
    { num: '04', title: 'Commissioning', icon: <CheckCircle2 size={24} /> },
    { num: '05', title: 'Operation & Maintenance', icon: <Settings size={24} /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Turnkey Execution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            From Design to Commissioning
          </h2>
          <p className="text-gray-600 text-lg">
            Turnkey capability involving design, drawing, construction, supply, erection and commissioning of water, effluent, sewage, leachate, CETP and MEE systems.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0">
            <motion.div 
              className="h-full bg-[#00B4D8] origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-8 bottom-8 left-12 w-0.5 bg-gray-200 z-0">
             <motion.div 
              className="w-full bg-[#00B4D8] origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex md:flex-col items-center md:w-[20%] group relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Node */}
                <div className="w-16 h-16 shrink-0 bg-white border-2 border-gray-200 group-hover:border-[#00B4D8] rounded-full flex items-center justify-center text-gray-400 group-hover:text-[#00B4D8] transition-all duration-300 z-10 bg-clip-padding group-hover:shadow-[0_0_15px_rgba(0,180,216,0.3)]">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="ml-6 md:ml-0 md:mt-6 md:text-center w-full">
                  <div className="text-xs font-bold text-gray-400 group-hover:text-[#00B4D8] transition-colors mb-2">{step.num}</div>
                  <h3 className="font-bold text-[#0B192C] text-sm tracking-wide leading-tight group-hover:text-[#1A365D]">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsTurnkey;
