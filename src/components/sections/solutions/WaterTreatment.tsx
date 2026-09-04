import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const WaterTreatment = () => {
  const features = [
    'Industrial RO Systems',
    'UF & Nano Filtration Systems',
    'Water Softener Systems',
    'DM & EDI Units',
    'Resin-Based Water Treatment Systems',
    'Sea Water Desalination Plants'
  ];

  return (
    <section id="water-treatment" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0B192C]/10 aspect-[4/3] group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("/assets/equipment/membrane-skid.jpeg")' }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B192C]/60 to-transparent"></div>
              
              {/* Decorative Tech Overlay */}
              <div className="absolute bottom-6 left-6 border-l-2 border-[#00B4D8] pl-4">
                <span className="text-white font-mono text-sm tracking-widest uppercase">Pure Water Systems</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Water Treatment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6 leading-tight">
              Reliable Water <br/> Treatment Systems
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We provide conventional and advanced water treatment systems designed for industrial and process-water requirements.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00B4D8] shrink-0 mt-0.5" size={20} />
                  <span className="text-[#1A365D] font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F0F8FF] p-6 rounded-xl border-l-4 border-[#0B192C] mb-10">
              <p className="text-[#0B192C] font-medium text-sm leading-relaxed">
                Turnkey execution available from design and drawing through supply, erection, and commissioning.
              </p>
            </div>

            <Link 
              to="/contact"
              className="inline-flex items-center text-[#1A365D] font-bold hover:text-[#00B4D8] transition-colors group text-lg"
            >
              Discuss Your Requirement 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WaterTreatment;
