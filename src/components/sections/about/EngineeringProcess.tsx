import { motion } from 'framer-motion';
import { PenTool, PencilRuler, Building2, Truck, ArrowUpRight, CheckCircle2, Wrench, Settings, FileCheck } from 'lucide-react';

const EngineeringProcess = () => {
  const steps = [
    { num: '01', title: 'DESIGN', icon: <PenTool size={20} /> },
    { num: '02', title: 'DRAWING', icon: <PencilRuler size={20} /> },
    { num: '03', title: 'CONSTRUCTION', icon: <Building2 size={20} /> },
    { num: '04', title: 'SUPPLY', icon: <Truck size={20} /> },
    { num: '05', title: 'ERECTION', icon: <ArrowUpRight size={20} /> },
    { num: '06', title: 'COMMISSIONING', icon: <CheckCircle2 size={20} /> },
    { num: '07', title: 'SERVICING', icon: <Wrench size={20} /> },
    { num: '08', title: 'OPERATION & MAINTENANCE', icon: <Settings size={20} /> },
    { num: '09', title: 'AMC', icon: <FileCheck size={20} /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            End-To-End Delivery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Turnkey Engineering Approach
          </h2>
          <p className="text-gray-600 text-lg">
            A seamless, integrated process from initial blueprint to lifelong operation.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Flowing Water Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[5%] right-[5%] h-1 bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent opacity-30"></div>
          
          {/* Flowing Water Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-transparent via-[#00B4D8] to-transparent opacity-30"></div>

          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-y-12 gap-x-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex md:flex-col items-center md:w-[20%] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Node */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 bg-white border-2 border-[#1A365D] group-hover:border-[#00B4D8] rounded-full flex items-center justify-center text-[#1A365D] group-hover:text-[#00B4D8] transition-colors duration-300 z-10 relative">
                    {step.icon}
                  </div>
                  {/* Water Ripple Effect on Hover */}
                  <div className="absolute inset-0 bg-[#00B4D8] rounded-full opacity-0 group-hover:animate-ping z-0"></div>
                </div>

                {/* Content */}
                <div className="ml-6 md:ml-0 md:mt-6 md:text-center">
                  <div className="text-xs font-bold text-[#00B4D8] mb-1">{step.num}</div>
                  <h3 className="font-bold text-[#0B192C] text-sm tracking-wide">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngineeringProcess;
