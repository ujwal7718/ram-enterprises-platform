import { motion } from 'framer-motion';

const EngineeringApplications = () => {
  const capabilities = [
    {
      num: '01',
      title: 'Water Treatment',
      desc: 'Treatment solutions for process, utility and application requirements.'
    },
    {
      num: '02',
      title: 'Wastewater Treatment',
      desc: 'Treatment approaches aligned with industrial and institutional needs.'
    },
    {
      num: '03',
      title: 'Engineering & O&M',
      desc: 'Engineering, project execution and ongoing operational support.'
    }
  ];

  return (
    <section id="engineering-applications" className="py-32 bg-[#0B192C] overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center max-w-[1400px] mx-auto">
          
          {/* LEFT: Industrial Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Technical grid background */}
            <div 
              className="absolute -inset-6 opacity-[0.03] z-0 pointer-events-none hidden lg:block" 
              style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            ></div>
            
            <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] rounded-sm overflow-hidden z-10 p-2 border border-[#1A365D]/50 bg-[#0B192C]">
              <div className="relative w-full h-full rounded-sm overflow-hidden group">
                <div className="absolute inset-0 bg-[#00B4D8]/20 mix-blend-multiply z-10 group-hover:bg-[#00B4D8]/10 transition-colors duration-700"></div>
                <img 
                  src="/assets/engineering/heavy-equipment-lifting.jpeg" 
                  alt="Industrial Engineering Applications" 
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent z-10 opacity-60"></div>
                
                {/* Technical Overlay Label */}
                <div className="absolute top-6 left-6 z-20 bg-[#0B192C]/90 backdrop-blur-md border border-[#1A365D] px-4 py-2 flex items-center gap-3 rounded-sm shadow-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-pulse"></span>
                  <span className="text-white font-mono text-[10px] tracking-[0.2em] uppercase">Engineering Applications</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-8 -right-8 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border border-[#1A365D]/80 rounded-sm z-0 hidden lg:block"></div>
          </motion.div>

          {/* RIGHT: Content & Editorial Strip */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block w-8 h-[1px] bg-[#00B4D8]"></span>
                <span className="text-[#00B4D8] text-xs font-semibold tracking-[0.2em] uppercase">
                  Engineering Across Applications
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white mb-8 leading-[1.1] tracking-tight">
                From Industrial Processes <br className="hidden xl:block" /> 
                <span className="text-gray-400 font-light">to Public Infrastructure</span>
              </h2>
              
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-lg">
                RAM Services Enterprises works across industrial, commercial and institutional sectors, supporting water and wastewater treatment requirements through engineering, project execution and ongoing operational support.
              </p>
            </motion.div>

            <div className="flex flex-col gap-0 border-t border-[#1A365D]">
              {capabilities.map((cap, index) => (
                <motion.div 
                  key={index} 
                  className="group relative border-b border-[#1A365D] py-8 lg:py-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-12 cursor-default"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="text-[#1A365D] font-mono text-xl md:text-2xl font-light group-hover:text-[#00B4D8] transition-colors duration-300 w-12 shrink-0">
                    {cap.num}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00B4D8] transition-colors duration-300 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-sm">
                      {cap.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EngineeringApplications;
