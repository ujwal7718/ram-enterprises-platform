import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Flow SVG */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z" fill="#00B4D8" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Vision */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#0B192C] text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#0B192C]/20">
                <Compass size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[#0B192C] uppercase tracking-wide">
                Vision
              </h2>
            </div>
            <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed border-l-4 border-[#00B4D8] pl-6 italic">
              "To be a World Class Environmental Engineering and Infrastructure Company with focus on water, wastewater treatment as well as electrical and instrumentation segments by adopting sustainable technologies."
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#00B4D8] text-[#0B192C] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#00B4D8]/20">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold text-[#0B192C] uppercase tracking-wide">
                Mission
              </h2>
            </div>
            <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed border-l-4 border-[#1A365D] pl-6">
              To focus on innovative water pollution control solutions and enhance the recovery and recycling of water, while providing high-quality products at affordable prices.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
