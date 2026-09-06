import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquareText } from 'lucide-react';
import { motion } from 'framer-motion';

const WaveField = lazy(() => import('../../three/WaveField'));

const IndustriesCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0B192C]">
      {/* 3D flowing wave surface — same treatment as the homepage CTA */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Suspense fallback={null}>
          <WaveField />
        </Suspense>
      </div>

      {/* Premium Dark Background with Subtle Grid & Texture */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-[#0B192C] opacity-70"></div>
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        ></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00B4D8]/10 via-[#0B192C]/0 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Have a Water or <br className="hidden md:block" /> Wastewater Requirement?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Let's discuss your process, treatment and engineering requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#00B4D8] text-[#0B192C] font-semibold rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,180,216,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] group"
              >
                Request a Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 border border-[#1A365D] text-white font-medium rounded-sm hover:border-[#00B4D8] hover:bg-[#1A365D]/20 transition-all duration-300 group"
              >
                <MessageSquareText size={18} className="text-[#00B4D8] group-hover:scale-110 transition-transform" />
                Talk to Our Team
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default IndustriesCTA;
