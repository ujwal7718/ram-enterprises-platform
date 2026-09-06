import { motion } from 'framer-motion';
import TiltCard from '../../motion/TiltCard';
import Reveal from '../../motion/Reveal';

const AdvancedTreatment = () => {
  const technologies = [
    { num: '01', title: 'Multiple Effect Evaporators' },
    { num: '02', title: 'ATFD' },
    { num: '03', title: 'Zero Liquid Discharge' },
  ];

  const processFlow = ['Treatment', 'Concentration', 'Recovery', 'Reduced Liquid Discharge'];

  return (
    <section id="advanced-treatment" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Advanced Treatment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Advanced Recovery & Zero Liquid Discharge
          </h2>
          <p className="text-gray-600 text-lg">
            For applications requiring advanced treatment and recovery, RAM Services Enterprises works with sophisticated technologies to minimize environmental footprint.
          </p>
        </Reveal>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="[perspective:800px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard strength={6} className="bg-[#F7FAFC] border border-gray-100 rounded-xl p-8 text-center hover:border-[#00B4D8]/40 hover:shadow-md transition-shadow duration-300">
                <div className="text-[#00B4D8] font-mono text-xl font-bold mb-4 opacity-50">{tech.num}</div>
                <h3 className="text-[#1A365D] font-bold text-lg">{tech.title}</h3>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="max-w-4xl mx-auto relative pt-0">
          <h4 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">The Recovery Process</h4>
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[108px] left-[10%] right-[10%] h-1 bg-gray-100 rounded-full z-0 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent w-[50%]"
              animate={{ x: ['-100%', '300%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            {processFlow.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#1A365D] flex items-center justify-center mb-4 group-hover:border-[#00B4D8] transition-colors relative z-10">
                  <div className="w-2 h-2 rounded-full bg-[#1A365D] group-hover:bg-[#00B4D8] transition-colors"></div>
                </div>
                <span className="font-bold text-[#0B192C] text-sm text-center">{step}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile connecting line */}
          <div className="md:hidden absolute top-[100px] bottom-12 left-1/2 -translate-x-1/2 w-1 bg-gray-100 rounded-full -z-10">
             <motion.div 
              className="w-full bg-gradient-to-b from-transparent via-[#00B4D8] to-transparent h-[30%]"
              animate={{ y: ['-100%', '400%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdvancedTreatment;
