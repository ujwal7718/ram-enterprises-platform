import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Factory, Home, Building2, Trash2, Box, Replace } from 'lucide-react';

const WastewaterProducts = () => {
  const products = [
    {
      name: 'Effluent Treatment Plants (ETP)',
      desc: 'Treatment systems designed for industrial effluent requirements.',
      icon: <Factory size={24} />
    },
    {
      name: 'Sewage Treatment Plants (STP)',
      desc: 'Sewage treatment systems for applicable institutional, commercial and industrial requirements.',
      icon: <Home size={24} />
    },
    {
      name: 'Common Effluent Treatment Plants (CETP)',
      desc: 'Centralized treatment systems for common effluent treatment requirements.',
      icon: <Building2 size={24} />
    },
    {
      name: 'Leachate Treatment Plants (LTP)',
      desc: 'Treatment systems for leachate generated from municipal solid waste applications.',
      icon: <Trash2 size={24} />
    },
    {
      name: 'MBR Systems',
      desc: 'Membrane bioreactor systems with complete recycling.',
      icon: <Box size={24} />
    },
    {
      name: 'SBR Systems',
      desc: 'Sequencing batch reactor systems with complete recycling.',
      icon: <Replace size={24} />
    }
  ];

  return (
    <section id="wastewater" className="py-24 bg-[#F7FAFC] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Wastewater Treatment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Effluent, Sewage & Wastewater Systems
          </h2>
          <p className="text-gray-600 text-lg">
            Treatment systems for effluent, sewage, common effluent and leachate treatment requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-md hover:border-[#00B4D8]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-[#F7FAFC] text-[#1A365D] border border-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:text-[#00B4D8] group-hover:border-[#00B4D8]/30 transition-colors shadow-sm">
                {product.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A365D] mb-3">{product.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{product.desc}</p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-[#0B192C] group-hover:text-[#00B4D8] transition-colors mt-auto"
              >
                Discuss Your Requirement <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WastewaterProducts;
