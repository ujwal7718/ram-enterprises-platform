import { motion } from 'framer-motion';
import { ArrowDown, Factory, CheckCircle2, Cog } from 'lucide-react';

const IndustryConnection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B192C] leading-tight">
            One Engineering Partner. <br className="hidden md:block" /> Multiple Application Areas.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Level 1: Industries */}
          <motion.div 
            className="bg-[#F7FAFC] border border-[#00B4D8]/30 px-8 py-4 rounded-xl flex items-center gap-3 shadow-sm z-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Factory size={24} className="text-[#00B4D8]" />
            <span className="text-[#1A365D] font-bold text-lg tracking-wide">INDUSTRIES</span>
          </motion.div>

          <motion.div 
            className="w-px h-12 md:h-16 bg-gray-300 relative"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-gray-400">
              <ArrowDown size={16} />
            </div>
          </motion.div>

          {/* Level 2: Project Requirement */}
          <motion.div 
            className="bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm z-10 mt-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-gray-600 font-medium text-sm">Project Requirement</span>
          </motion.div>

          <motion.div 
            className="w-px h-12 md:h-16 bg-gray-300 relative"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-gray-400">
              <ArrowDown size={16} />
            </div>
          </motion.div>

          {/* Level 3: RAM SERVICES ENGINEERING */}
          <motion.div 
            className="bg-[#0B192C] text-white px-10 py-5 rounded-xl flex items-center gap-4 shadow-xl shadow-[#0B192C]/20 z-10 mt-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Cog size={28} className="text-[#00B4D8]" />
            <span className="font-bold text-xl tracking-wider">RAM SERVICES ENGINEERING</span>
          </motion.div>

          <motion.div 
            className="w-px h-12 md:h-16 bg-gray-300 relative"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-gray-400">
              <ArrowDown size={16} />
            </div>
          </motion.div>

          {/* Level 4: Capabilities */}
          <motion.div 
            className="w-full max-w-3xl mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {/* Desktop Horizontal Line connecting the items */}
            <div className="hidden md:block w-3/4 mx-auto h-px bg-gray-200 mb-6"></div>
            
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6">
              {[
                'Water Treatment',
                'Wastewater Treatment',
                'Advanced Treatment',
                'Engineering',
                'O&M'
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="hidden md:block w-px h-6 bg-gray-200 mb-2"></div>
                  <div className="bg-white border border-gray-100 px-5 py-3 rounded-lg shadow-sm flex items-center gap-2 hover:border-[#00B4D8]/50 transition-colors cursor-default w-full md:w-auto justify-center">
                    <CheckCircle2 size={16} className="text-[#00B4D8]" />
                    <span className="text-[#1A365D] font-medium text-sm whitespace-nowrap">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default IndustryConnection;
