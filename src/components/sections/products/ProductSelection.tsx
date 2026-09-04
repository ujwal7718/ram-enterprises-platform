import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquareText, Lightbulb, PenTool, CheckCircle2 } from 'lucide-react';

const ProductSelection = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Requirement assessment and discussion.',
      icon: <Lightbulb size={32} />
    },
    {
      num: '02',
      title: 'Engineer',
      desc: 'Treatment and engineering approach.',
      icon: <PenTool size={32} />
    },
    {
      num: '03',
      title: 'Execute',
      desc: 'Supply, installation, erection and commissioning where applicable.',
      icon: <CheckCircle2 size={32} />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#C1121F] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Not Sure What You Need?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B192C] mb-6 leading-tight">
            Let's Identify the Right System <br className="hidden md:block" /> for Your Requirement.
          </h2>
          <p className="text-gray-600 text-lg">
            Tell us about your water, wastewater or industrial requirement and our team can discuss the appropriate treatment and engineering approach.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-20 px-4 sm:px-8">
          
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gray-200 z-0">
             <motion.div 
              className="h-full bg-[#00B4D8] origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex md:flex-col items-center md:text-center md:w-1/3 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-24 h-24 shrink-0 bg-white border border-gray-200 rounded-full flex flex-col items-center justify-center group-hover:border-[#00B4D8] transition-colors duration-300 z-10 group-hover:shadow-[0_0_20px_rgba(0,180,216,0.15)] relative">
                  <div className="text-[#00B4D8] mb-1">{step.icon}</div>
                </div>
                
                <div className="ml-6 md:ml-0 md:mt-8 w-full">
                  <div className="text-[#00B4D8] font-bold font-mono text-sm mb-2">{step.num}</div>
                  <h3 className="text-2xl font-bold text-[#0B192C] mb-3 group-hover:text-[#1A365D] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0B192C] text-white font-bold rounded-sm hover:bg-[#00B4D8] hover:text-[#0B192C] transition-all duration-300 group shadow-lg"
          >
            Request a Quote
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 text-[#0B192C] font-medium rounded-sm hover:border-[#0B192C] hover:bg-gray-50 transition-all duration-300"
          >
            <MessageSquareText size={20} />
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductSelection;
