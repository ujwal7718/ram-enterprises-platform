import { motion } from 'framer-motion';
import { Droplets, Recycle, Settings, Wrench, HeadphonesIcon } from 'lucide-react';
import TiltCard from '../../motion/TiltCard';
import Reveal from '../../motion/Reveal';

const SolutionPortfolio = () => {
  const categories = [
    {
      num: '01',
      title: 'Water Treatment',
      desc: 'Conventional and advanced systems for industrial and process water requirements.',
      icon: <Droplets size={24} />,
      link: '#water-treatment'
    },
    {
      num: '02',
      title: 'Wastewater & Effluent',
      desc: 'Integrated treatment for effluent, sewage, leachate, and common effluent.',
      icon: <Recycle size={24} />,
      link: '#wastewater'
    },
    {
      num: '03',
      title: 'Advanced Treatment & ZLD',
      desc: 'Multiple Effect Evaporators and Zero Liquid Discharge systems for high-recovery applications.',
      icon: <Settings size={24} />,
      link: '#advanced-treatment'
    },
    {
      num: '04',
      title: 'Industrial Engineering',
      desc: 'Fabrication, structural, electrical, automation, and civil works for turnkey projects.',
      icon: <Wrench size={24} />,
      link: '#industrial'
    },
    {
      num: '05',
      title: 'Operations & Support',
      desc: 'O&M, AMC, technical consultancy, and skilled manpower supply.',
      icon: <HeadphonesIcon size={24} />,
      link: '#operations'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            What We Deliver
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6 leading-tight">
            Complete Engineering & <br/> Treatment Solutions
          </h2>
          <div className="w-16 h-1 bg-[#C1121F] rounded-full mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            RAM Services Enterprises provides integrated engineering and turnkey solutions across water treatment, wastewater treatment, advanced treatment systems, and industrial infrastructure.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className={`[perspective:800px] h-full ${index === 3 ? 'lg:col-start-1 lg:ml-auto w-full lg:max-w-md' : ''} ${index === 4 ? 'lg:col-start-2 lg:mr-auto w-full lg:max-w-md' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard strength={6} className="h-full">
                <a
                  href={category.link}
                  className="block h-full bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#00B4D8]/5 hover:border-[#00B4D8]/30 transition-shadow duration-300 group flex flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-[#00B4D8]/10 text-[#00B4D8] group-hover:bg-[#00B4D8] group-hover:text-white rounded-lg flex items-center justify-center transition-colors duration-300">
                      {category.icon}
                    </div>
                    <span className="text-3xl font-light text-gray-200 group-hover:text-[#00B4D8]/20 transition-colors font-mono">{category.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A365D] mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">{category.desc}</p>

                  <div className="inline-flex items-center text-sm font-bold text-[#0B192C] group-hover:text-[#00B4D8] transition-colors mt-auto">
                    Explore <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionPortfolio;
