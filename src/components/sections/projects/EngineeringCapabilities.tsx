import { motion } from 'framer-motion';
import { 
  Droplets, Recycle, Hammer, Zap, Settings2, HardHat, 
  PaintRoller, ShieldCheck, Settings, Users, BookOpen 
} from 'lucide-react';

const EngineeringCapabilities = () => {
  const capabilities = [
    { name: 'Water Treatment', icon: <Droplets size={20} /> },
    { name: 'Wastewater Treatment', icon: <Recycle size={20} /> },
    { name: 'Structural Fabrication', icon: <Hammer size={20} /> },
    { name: 'Electrical & Cabling', icon: <Zap size={20} /> },
    { name: 'Automation', icon: <Settings2 size={20} /> },
    { name: 'Civil Work', icon: <HardHat size={20} /> },
    { name: 'Painting Work', icon: <PaintRoller size={20} /> },
    { name: 'AMC', icon: <ShieldCheck size={20} /> },
    { name: 'Operations & Maintenance', icon: <Settings size={20} /> },
    { name: 'Manpower Supply', icon: <Users size={20} /> },
    { name: 'Consultancy', icon: <BookOpen size={20} /> }
  ];

  return (
    <section className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Integrated Engineering Support
          </h2>
          <div className="w-16 h-1 bg-[#C1121F] rounded-full mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-200 px-6 py-4 rounded-lg hover:border-[#00B4D8] hover:shadow-md transition-all duration-300 flex items-center gap-3 cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="text-[#00B4D8]">{cap.icon}</div>
              <span className="text-[#1A365D] font-medium text-sm">{cap.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngineeringCapabilities;
