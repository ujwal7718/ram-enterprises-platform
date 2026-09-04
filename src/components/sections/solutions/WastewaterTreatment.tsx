import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const WastewaterTreatment = () => {
  const features = [
    'Effluent Treatment Plants (ETP)',
    'Sewage Treatment Plants (STP)',
    'Common Effluent Treatment (CETP)',
    'Leachate Treatment Plants (LTP)',
    'Membrane Bioreactors (MBR)',
    'Sequencing Batch Reactors (SBR)',
    'Packaged Systems',
    'Complete Recycling Solutions'
  ];

  return (
    <section id="wastewater" className="py-24 bg-[#0B192C] scroll-mt-20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Wastewater Treatment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Treat. Reuse. <br/> Recover.
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Integrated treatment solutions for effluent, sewage, leachate, and common effluent requirements, with systems focused on effective treatment and water recovery.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00B4D8] shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/contact"
              className="inline-flex items-center text-[#00B4D8] font-bold hover:text-white transition-colors group text-lg"
            >
              Discuss Your Requirement 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 aspect-[4/3] lg:aspect-[16/11] group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 ease-out"
                style={{ backgroundImage: 'url("/assets/equipment/aeration-system.jpeg")' }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-[#0B192C]/80"></div>
              
              {/* Decorative Tech Overlay */}
              <div className="absolute bottom-6 left-6 border-l-2 border-[#00B4D8] pl-4">
                <span className="text-white font-mono text-sm tracking-widest uppercase opacity-80">Biological Treatment</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WastewaterTreatment;
