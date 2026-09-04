import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Package, ArrowRight } from 'lucide-react';

const PackagedSystems = () => {
  const features = [
    'Packaged ETP Projects',
    'Packaged STP Projects'
  ];

  return (
    <section id="packaged" className="py-24 bg-[#F7FAFC] scroll-mt-20 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center max-w-7xl mx-auto">
          
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-4 block">
              Packaged Systems
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6 leading-tight">
              Compact Treatment Systems for Practical Deployment
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Packaged ETP and STP projects provide a compact treatment approach for applicable requirements.
            </p>

            <ul className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-[#00B4D8]/10 text-[#00B4D8] rounded-md flex items-center justify-center shrink-0">
                    <Package size={20} />
                  </div>
                  <span className="text-[#1A365D] font-bold text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00B4D8] text-[#0B192C] font-semibold rounded-sm hover:bg-[#1A365D] hover:text-white transition-all duration-300 group shadow-lg"
            >
              Talk to Our Team
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 bg-[#00B4D8]/10 z-10 mix-blend-multiply"></div>
              {/* Fallback industrial image */}
              <img 
                src="/assets/equipment/packaged-treatment-plant.jpeg" 
                alt="Packaged Treatment Systems" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PackagedSystems;
