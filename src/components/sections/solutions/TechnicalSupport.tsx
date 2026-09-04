import { motion } from 'framer-motion';
import { Microscope, Activity, FileSearch, Lightbulb } from 'lucide-react';

const TechnicalSupport = () => {
  const capabilities = [
    {
      title: 'Research & Development',
      desc: 'In-house R&D facilities focusing on advanced engineering solutions.',
      icon: <Lightbulb size={28} />
    },
    {
      title: 'Water Analysis',
      desc: 'Detailed analysis for precise treatment requirements and system design.',
      icon: <Activity size={28} />
    },
    {
      title: 'Treatability Studies',
      desc: 'Rigorous evaluation of treatment approaches to ensure optimal results.',
      icon: <FileSearch size={28} />
    },
    {
      title: 'Pilot Studies',
      desc: 'Pilot-scale evaluation to validate system performance prior to full-scale execution.',
      icon: <Microscope size={28} />
    }
  ];

  return (
    <section className="py-24 bg-[#F0F8FF]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Technical Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Engineering Backed by Analysis & R&D
          </h2>
          <p className="text-gray-600 text-lg">
            With in-house design and execution capabilities, RAM Services Enterprises also provides facilities for R&D, water analysis, treatability studies, and pilot studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm text-center hover:shadow-lg hover:border-[#00B4D8]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-[#F0F8FF] text-[#0B192C] rounded-full flex items-center justify-center mx-auto mb-6">
                {cap.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A365D] mb-3">{cap.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSupport;
