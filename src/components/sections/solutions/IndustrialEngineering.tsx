import { motion } from 'framer-motion';
import { Network, Hammer, Wrench, Zap, HardHat, PaintRoller } from 'lucide-react';

const IndustrialEngineering = () => {
  const capabilities = [
    { title: 'Pipeline Fabrication', icon: <Network size={24} className="text-[#00B4D8]" /> },
    { title: 'Structural Fabrication', icon: <Hammer size={24} className="text-[#00B4D8]" /> },
    { title: 'General Fabrication', icon: <Wrench size={24} className="text-[#00B4D8]" /> },
    { title: 'Electrical & Cabling', icon: <Zap size={24} className="text-[#00B4D8]" /> },
    { title: 'Civil Works', icon: <HardHat size={24} className="text-[#00B4D8]" /> },
    { title: 'Painting Works', icon: <PaintRoller size={24} className="text-[#00B4D8]" /> },
  ];

  return (
    <section id="industrial" className="py-24 bg-[#0B192C] relative overflow-hidden scroll-mt-20">
      {/* Dark Technical Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDBCNEQ4IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0wIDYwaDYwTTAgMzBoNjBNMCAwaDYwTTAgMHY2ME0zMCAwdjYwTTYwIDB2NjAiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Industrial Engineering
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Beyond Water <br/> Treatment
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our capabilities extend beyond treatment systems into fabrication, structural, electrical, automation, and civil works for industrial turnkey projects.
            </p>
            <div className="flex gap-4 items-center border-l-4 border-[#C1121F] pl-4">
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest leading-relaxed">
                Integrated execution across multiple engineering disciplines.
              </p>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="bg-[#1A365D]/30 backdrop-blur-sm border border-[#1A365D] p-6 rounded-xl hover:bg-[#1A365D]/60 hover:border-[#00B4D8]/50 transition-all duration-300 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 w-12 h-12 rounded-full bg-[#0B192C] border border-[#1A365D] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <h3 className="text-white font-bold text-sm tracking-wide">{cap.title}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustrialEngineering;
