import { motion } from 'framer-motion';
import { Hammer, Zap, HardHat, Users, Settings, ShieldCheck, Wrench } from 'lucide-react';

const EngineeringProducts = () => {
  const services = [
    {
      num: '01',
      title: 'Pipeline & Structural Fabrication',
      icon: <Hammer size={24} />
    },
    {
      num: '02',
      title: 'Electrical & Cabling',
      icon: <Zap size={24} />
    },
    {
      num: '03',
      title: 'Civil Work & Painting',
      icon: <HardHat size={24} />
    },
    {
      num: '04',
      title: 'Manpower Supply & Consultancy',
      icon: <Users size={24} />
    },
    {
      num: '05',
      title: 'Operation & Maintenance',
      icon: <Settings size={24} />
    },
    {
      num: '06',
      title: 'AMC',
      icon: <ShieldCheck size={24} />
    },
    {
      num: '07',
      title: 'Turnkey Projects',
      icon: <Wrench size={24} />
    }
  ];

  return (
    <section id="engineering" className="py-24 bg-[#0B192C] scroll-mt-20 border-t border-[#1A365D]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Engineering & Supporting Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            More Than Treatment Systems
          </h2>
          <div className="w-16 h-1 bg-[#00B4D8] rounded-full mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            RAM Services combines treatment systems with supporting engineering and project execution capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-[#1A365D]/30 border border-[#1A365D] p-6 rounded-xl hover:bg-[#1A365D]/60 hover:border-[#00B4D8]/40 transition-colors duration-300 flex flex-col items-center text-center group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="text-[#00B4D8] mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-white font-medium text-sm md:text-base group-hover:text-[#00B4D8] transition-colors leading-snug">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngineeringProducts;
