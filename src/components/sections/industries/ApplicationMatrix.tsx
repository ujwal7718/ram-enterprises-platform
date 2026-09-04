import { motion } from 'framer-motion';

const ApplicationMatrix = () => {
  const steps = [
    'Industry Requirement',
    'Water Treatment',
    'Wastewater Treatment',
    'Advanced Treatment',
    'Engineering',
    'Operations & Maintenance'
  ];

  return (
    <section className="py-24 bg-[#0B192C]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00B4D8] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
              Application Focus
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Built Around Process <br className="hidden md:block" /> Requirements.
            </h2>
          </motion.div>

          {/* Matrix Representation */}
          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[15px] left-0 right-0 h-px bg-[#1A365D]"></div>
            
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex md:flex-col items-center md:items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#0B192C] border-2 border-[#1A365D] flex items-center justify-center group-hover:border-[#00B4D8] transition-colors duration-300 z-10 shrink-0 mb-0 md:mb-6 mr-6 md:mr-0">
                    <div className="w-2 h-2 rounded-full bg-[#00B4D8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="border-l md:border-l-0 md:border-t border-[#1A365D] pl-6 md:pl-0 md:pt-6 group-hover:border-[#00B4D8]/50 transition-colors duration-300 w-full h-full min-h-[60px] md:min-h-0">
                    <span className="text-white font-medium text-sm md:text-base leading-tight block group-hover:text-[#00B4D8] transition-colors">
                      {step}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ApplicationMatrix;
