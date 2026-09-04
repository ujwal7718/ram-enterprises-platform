import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#1A365D]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00B4D8] via-[#1A365D] to-[#0B192C]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Have an Engineering Requirement?
          </h2>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss your water, wastewater, or industrial engineering requirement. Our team of experts is ready to deliver a robust turnkey solution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00B4D8] text-[#0B192C] font-bold rounded-sm hover:bg-white transition-all duration-300 group shadow-lg shadow-[#00B4D8]/20"
            >
              Request a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-400 text-white font-medium rounded-sm hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <PhoneCall size={20} />
              Talk to Our Experts
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
