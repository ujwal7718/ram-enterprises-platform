import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const AdvancedTreatmentProducts = () => {
  const products = [
    {
      num: '01',
      name: 'Multiple Effect Evaporators',
      desc: 'Multiple Effect Evaporation systems for advanced treatment and recovery applications.'
    },
    {
      num: '02',
      name: 'ATFD',
      desc: 'Agitated Thin Film Dryer systems for applicable treatment and concentration requirements.'
    },
    {
      num: '03',
      name: 'Zero Liquid Discharge',
      desc: 'Zero Liquid Discharge concepts for applications focused on water recovery and reduced liquid discharge.'
    }
  ];

  const processSteps = [
    'Treatment',
    'Concentration',
    'Recovery',
    'Reduced Liquid Discharge'
  ];

  return (
    <section id="advanced-treatment" className="py-24 bg-[#0B192C] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Advanced Treatment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Advanced Recovery & Zero Liquid Discharge
          </h2>
          <p className="text-gray-300 text-lg">
            For applications requiring advanced treatment and recovery, RAM Services provides technologies including Multiple Effect Evaporators, ATFD and Zero Liquid Discharge concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="bg-[#1A365D]/30 border border-[#1A365D] rounded-xl p-8 hover:bg-[#1A365D]/60 hover:border-[#00B4D8]/50 transition-all duration-300 flex flex-col group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-[#00B4D8] font-mono text-xl font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {product.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00B4D8] transition-colors">{product.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{product.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="max-w-4xl mx-auto border border-[#1A365D] rounded-xl p-8 md:p-12 bg-[#1A365D]/10">
          <div className="text-center mb-10">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm">Conceptual Process Flow</h4>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col md:flex-row items-center w-full md:w-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-[#1A365D] border border-[#00B4D8]/30 px-6 py-4 rounded-lg w-full md:w-auto text-center shadow-lg shadow-[#00B4D8]/5">
                  <span className="text-[#00B4D8] font-medium text-sm whitespace-nowrap">{step}</span>
                </div>
                
                {index < processSteps.length - 1 && (
                  <>
                    <div className="hidden md:block mx-4 text-gray-500">
                      <ArrowRight size={20} />
                    </div>
                    <div className="md:hidden my-3 text-gray-500">
                      <ArrowDown size={20} />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdvancedTreatmentProducts;
