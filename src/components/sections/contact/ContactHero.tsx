import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center pt-40 pb-20 overflow-hidden bg-[#0B192C]">
      
      {/* Dark Navy Technical Grid Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        ></div>
        <div className="absolute top-0 right-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00B4D8]/10 via-[#0B192C]/0 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1A365D] to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block w-8 h-[1px] bg-[#00B4D8]"></span>
              <span className="text-[#00B4D8] text-sm font-semibold tracking-[0.2em] uppercase">
                GET IN TOUCH
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.1] mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Discuss Your <br className="hidden md:block" /> 
            <span className="text-gray-400 font-light">Requirement</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-12 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you are planning a new treatment system, upgrading an existing facility, or looking for ongoing operational support, our team can help evaluate your requirements.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#contact-form"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#00B4D8] text-[#0B192C] font-semibold rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,180,216,0.15)] group"
            >
              Request a Quote
            </a>
            <a 
              href="#contact-info"
              className="inline-flex items-center justify-center px-10 py-4 border border-[#1A365D] text-white font-medium rounded-sm hover:border-[#00B4D8] hover:bg-[#1A365D]/30 transition-all duration-300 group"
            >
              Contact Our Team
            </a>
          </motion.div>
          
        </div>
      </div>
      
    </section>
  );
};

export default ContactHero;
