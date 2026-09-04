import { motion } from 'framer-motion';

const EngineeringWorkflow = () => {
  return (
    <section className="py-32 md:py-48 bg-[#F7FAFC] relative overflow-hidden">
      
      {/* Subtle Engineering Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#00B4D8 1px, transparent 1px), linear-gradient(90deg, #00B4D8 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      ></div>
      
      {/* Soft gradient mask for the grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7FAFC] via-transparent to-[#F7FAFC] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full"
          >
            <div className="flex items-center justify-center gap-6 mb-12">
              <span className="inline-block w-12 md:w-24 h-px bg-gray-300"></span>
              <span className="text-[#00B4D8] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
                One Engineering Partner
              </span>
              <span className="inline-block w-12 md:w-24 h-px bg-gray-300"></span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-[#0B192C] leading-[1.05] tracking-tight">
              Multiple Application <br className="hidden md:block" /> Areas.
            </h2>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
};

export default EngineeringWorkflow;
