import { motion } from 'framer-motion';
import TiltCard from '../../motion/TiltCard';
import Reveal from '../../motion/Reveal';

const ProjectCategories = () => {
  const capabilities = [
    {
      num: '01',
      title: 'Effluent Treatment',
      desc: 'ETP and CETP solutions for industrial effluent treatment requirements.'
    },
    {
      num: '02',
      title: 'Sewage Treatment',
      desc: 'STP systems for institutional, commercial and industrial applications.'
    },
    {
      num: '03',
      title: 'Advanced Recovery',
      desc: 'ZLD and advanced treatment systems for water recovery and reduced liquid discharge.'
    },
    {
      num: '04',
      title: 'Water Treatment',
      desc: 'RO, UF, filtration, softening and related water treatment systems.'
    },
    {
      num: '05',
      title: 'Engineering & Turnkey Execution',
      desc: 'Integrated design, supply, erection, commissioning and engineering support.'
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-[#0B192C] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Project Capabilities
          </h2>
          <div className="w-16 h-1 bg-[#00B4D8] rounded-full mx-auto"></div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className={`[perspective:800px] ${index === 3 ? 'lg:col-start-1 lg:ml-auto w-full lg:max-w-md' : ''} ${index === 4 ? 'lg:col-start-2 lg:mr-auto w-full lg:max-w-md' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard
                strength={6}
                className="bg-[#1A365D]/30 backdrop-blur-sm border border-[#1A365D] p-8 rounded-xl hover:bg-[#1A365D]/60 hover:border-[#00B4D8]/50 transition-colors duration-300 flex flex-col group h-full"
              >
                <div className="text-[#00B4D8] font-mono text-xl font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {cap.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00B4D8] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                  {cap.desc}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectCategories;
