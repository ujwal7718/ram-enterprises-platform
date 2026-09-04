import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const IndustrySolutionFlow = () => {
  const steps = [
    'INDUSTRY',
    'REQUIREMENT',
    'ENGINEERING',
    'TREATMENT SYSTEM',
    'EXECUTION / O&M'
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                <div className="bg-[#F7FAFC] border border-gray-100 px-6 py-4 rounded-md shadow-sm hover:border-[#00B4D8]/30 hover:shadow-md transition-all duration-300 text-center w-48 lg:w-auto">
                  <span className="text-[#1A365D] font-bold text-xs tracking-[0.15em] uppercase whitespace-nowrap">
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-gray-300 transform lg:rotate-0 rotate-90">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default IndustrySolutionFlow;
