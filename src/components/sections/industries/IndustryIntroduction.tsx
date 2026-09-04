import { motion } from 'framer-motion';

const IndustryIntroduction = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white border-b border-gray-100">
      
      {/* Subtle Engineering Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#0B192C 1px, transparent 1px), linear-gradient(90deg, #0B192C 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-7xl mx-auto items-start">
          
          {/* Left Column: Heading */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#00B4D8] text-sm font-semibold tracking-widest uppercase mb-6 block">
              INDUSTRY EXPERIENCE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#0B192C] leading-[1.1] mb-8 tracking-tight">
              Water & Wastewater Challenges <br className="hidden lg:block" />
              <span className="text-gray-400 font-light">Vary by Industry</span>
            </h2>
            <div className="w-16 h-1 bg-[#C1121F]"></div>
          </motion.div>

          {/* Right Column: Content & Metric */}
          <motion.div 
            className="w-full lg:w-7/12 pt-2 lg:pt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-[#1A365D] text-xl md:text-2xl leading-relaxed font-light mb-16 max-w-2xl">
              Different industries have different processes, operating environments and treatment requirements. RAM Services Enterprises brings together water treatment, wastewater treatment, advanced treatment and engineering capabilities to address project-specific requirements.
            </p>

            <div className="flex items-center gap-8">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl md:text-7xl font-light text-[#0B192C] font-mono leading-none tracking-tighter">14</span>
                <div className="flex flex-col">
                  <span className="text-[#00B4D8] font-bold text-sm tracking-[0.2em] uppercase">Industries &</span>
                  <span className="text-gray-500 font-medium text-sm tracking-[0.2em] uppercase">Sectors Listed</span>
                </div>
              </div>
            </div>
            
            <div className="w-full h-px bg-gray-200 mt-12"></div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default IndustryIntroduction;
