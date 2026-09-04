import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const IndustrialExperienceVisual = () => {
  const elements = [
    'Water',
    'Wastewater',
    'Filtration',
    'Recovery',
    'Engineering',
    'Operations'
  ];

  return (
    <section className="py-24 bg-[#0B192C] border-t border-[#1A365D]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Engineering for Real-World <br className="hidden xl:block" /> Operating Environments
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Treatment systems must work within the realities of industrial processes, infrastructure and day-to-day operations. RAM Services combines treatment technologies with engineering and operational support.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              {elements.map((el, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#1A365D]/30 border border-[#1A365D] px-6 py-4 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle2 size={20} className="text-[#00B4D8]" />
                  <span className="text-white font-medium">{el}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IndustrialExperienceVisual;
