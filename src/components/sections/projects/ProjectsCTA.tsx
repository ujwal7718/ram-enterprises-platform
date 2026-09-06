import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../motion/Reveal';
import { ArrowRight, MessageSquareText } from 'lucide-react';

const WaveField = lazy(() => import('../../three/WaveField'));

const ProjectsCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0B192C]">
      {/* 3D flowing wave surface — same treatment as the homepage CTA */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Suspense fallback={null}>
          <WaveField />
        </Suspense>
      </div>

      {/* Abstract Flow Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#00B4D8] via-[#1A365D] to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <Reveal direction="up" className="max-w-4xl mx-auto text-center">
          
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-4 block">
            Let's Build Together
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Have a Water or Wastewater <br className="hidden md:block" /> Project in Mind?
          </h2>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us about your requirement and our team can discuss the appropriate engineering, treatment, and execution approach.
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
              <MessageSquareText size={20} />
              Contact Us
            </Link>
          </div>
          
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsCTA;
