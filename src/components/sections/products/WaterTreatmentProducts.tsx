import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplets, Filter, TestTube, Zap, Activity, Waves, ArrowRight } from 'lucide-react';

const WaterTreatmentProducts = () => {
  const products = [
    {
      name: 'Industrial RO Systems',
      desc: 'Industrial reverse osmosis systems for water treatment requirements.',
      icon: <Droplets size={20} />
    },
    {
      name: 'UF & Nano Filtration Systems',
      desc: 'Membrane-based filtration systems for advanced water treatment applications.',
      icon: <Filter size={20} />
    },
    {
      name: 'Water Softener Systems',
      desc: 'Water softening systems for applications requiring treated and conditioned water.',
      icon: <Activity size={20} />
    },
    {
      name: 'DM & EDI Units',
      desc: 'Demineralization and electrodeionization systems for treated-water requirements.',
      icon: <Zap size={20} />
    },
    {
      name: 'Resin Based Water Treatment Systems',
      desc: 'Resin-based systems for water treatment applications.',
      icon: <TestTube size={20} />
    },
    {
      name: 'Sea Water Desalination Plants',
      desc: 'Desalination systems for seawater treatment requirements.',
      icon: <Waves size={20} />
    }
  ];

  return (
    <section id="water-treatment" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Featured Image */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[3/4] group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out"
                style={{ backgroundImage: 'url("/assets/equipment/filtration-skid.jpeg")' }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Water Treatment
                </span>
                <h2 className="text-3xl font-bold text-white leading-tight">
                  Systems Built for Reliability
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive List */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#0B192C] mb-4">
                Treatment and purification systems for industrial and process-water requirements.
              </h3>
              <p className="text-gray-600">
                Explore our range of engineered systems designed for consistent performance and longevity.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {products.map((product, index) => (
                <Link 
                  to="/contact"
                  key={index}
                  className="bg-[#F7FAFC] border border-gray-100 rounded-xl p-5 hover:border-[#00B4D8]/30 hover:bg-white hover:shadow-lg hover:shadow-[#00B4D8]/5 transition-all duration-300 flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 bg-white text-[#1A365D] rounded-lg flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#00B4D8]/10 group-hover:text-[#00B4D8] group-hover:border-[#00B4D8]/20 transition-colors">
                    {product.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-[#1A365D] font-bold mb-1 group-hover:text-[#00B4D8] transition-colors">{product.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>
                  </div>

                  <div className="text-gray-300 group-hover:text-[#00B4D8] shrink-0 transition-colors">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WaterTreatmentProducts;
