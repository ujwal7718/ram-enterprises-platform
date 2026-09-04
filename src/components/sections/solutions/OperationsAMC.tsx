import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Settings, Users, BookOpen } from 'lucide-react';

const OperationsAMC = () => {
  const services = [
    { title: 'Operation & Maintenance', icon: <Settings size={20} /> },
    { title: 'Annual Maintenance (AMC)', icon: <ShieldCheck size={20} /> },
    { title: 'Technical Consultancy', icon: <BookOpen size={20} /> },
    { title: 'Manpower Supply', icon: <Users size={20} /> },
  ];

  return (
    <section id="operations" className="py-24 relative overflow-hidden bg-[#0B192C] scroll-mt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/engineering/structural-erection-2.jpeg")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/95 to-[#0B192C]/70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Operations & Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Support Beyond <br/> Commissioning
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Our involvement can continue beyond project execution through operation, maintenance, and annual maintenance support, ensuring your systems operate at peak efficiency for their entire lifecycle.
            </p>
            
            <Link 
              to="/contact"
              className="inline-flex items-center text-[#00B4D8] font-bold hover:text-white transition-colors group text-lg"
            >
              Talk to Our Team 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#1A365D]/40 backdrop-blur-sm border border-[#1A365D] p-6 rounded-xl hover:border-[#00B4D8]/50 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="text-[#00B4D8] mt-0.5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-sm leading-tight">{service.title}</h3>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OperationsAMC;
