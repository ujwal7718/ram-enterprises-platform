import { motion } from 'framer-motion';
import { Droplets, Recycle, Settings, Wrench, ShieldCheck } from 'lucide-react';

const IndustriesOverview = () => {
  const capabilities = [
    { name: 'Water Treatment', icon: <Droplets size={20} /> },
    { name: 'Wastewater Treatment', icon: <Recycle size={20} /> },
    { name: 'Advanced Treatment', icon: <Settings size={20} /> },
    { name: 'Engineering', icon: <Wrench size={20} /> },
    { name: 'O&M', icon: <ShieldCheck size={20} /> }
  ];

  return (
    <section className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Industry Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B192C] mb-6 leading-tight">
            Water & Wastewater Challenges <br className="hidden md:block"/> Vary by Industry
          </h2>
          <div className="w-16 h-1 bg-[#C1121F] rounded-full mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Different industries have different processes, operating environments and treatment requirements. RAM Services Enterprises brings together water treatment, wastewater treatment, advanced treatment and engineering capabilities to address project-specific requirements.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
          
          <motion.div 
            className="flex flex-col items-center justify-center text-center p-8 bg-white border border-gray-100 shadow-sm rounded-full w-48 h-48 shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-[#1A365D] font-mono text-5xl font-bold mb-2 leading-none">14</div>
            <div className="text-[#00B4D8] text-sm font-bold uppercase tracking-wider leading-tight">Industries &<br/>Sectors Listed</div>
          </motion.div>

          <div className="w-full md:w-px h-px md:h-32 bg-gray-200"></div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="bg-white px-5 py-3 rounded-lg border border-gray-100 flex items-center gap-3 shadow-sm hover:border-[#00B4D8]/30 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-[#00B4D8]">{cap.icon}</div>
                <span className="text-[#1A365D] font-semibold text-sm">{cap.name}</span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default IndustriesOverview;
