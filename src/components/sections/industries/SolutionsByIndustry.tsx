import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplets, Recycle, Settings, Wrench, ShieldCheck } from 'lucide-react';

const SolutionsByIndustry = () => {
  const capabilities = [
    {
      num: '01',
      title: 'Water Treatment',
      desc: 'Water treatment systems and technologies for applicable industrial and infrastructure requirements.',
      icon: <Droplets size={24} />
    },
    {
      num: '02',
      title: 'Wastewater Treatment',
      desc: 'Treatment systems for effluent, sewage, common effluent and related wastewater applications.',
      icon: <Recycle size={24} />
    },
    {
      num: '03',
      title: 'Advanced Treatment',
      desc: 'Advanced treatment and recovery systems including MEE, ATFD and ZLD concepts.',
      icon: <Settings size={24} />
    },
    {
      num: '04',
      title: 'Engineering & Turnkey Execution',
      desc: 'Engineering, supply, erection, commissioning and supporting project execution capabilities.',
      icon: <Wrench size={24} />
    },
    {
      num: '05',
      title: 'Operations & Maintenance',
      desc: 'Operations, maintenance and AMC support for applicable treatment facilities.',
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <section className="py-24 bg-[#F7FAFC] border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Treatment & Engineering Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => (
            <motion.div 
              key={index}
              className={`bg-white border border-gray-200 rounded-xl p-8 hover:border-[#00B4D8]/30 hover:shadow-xl hover:shadow-[#00B4D8]/5 transition-all duration-300 flex flex-col group ${index === 3 ? 'lg:col-start-1 lg:ml-auto w-full lg:max-w-md' : ''} ${index === 4 ? 'lg:col-start-2 lg:mr-auto w-full lg:max-w-md' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-2xl font-mono font-light text-gray-300 group-hover:text-[#00B4D8]/30 transition-colors">
                  {cap.num}
                </div>
                <div className="w-12 h-12 bg-[#F7FAFC] text-[#1A365D] border border-gray-100 rounded-lg flex items-center justify-center group-hover:text-[#00B4D8] group-hover:border-[#00B4D8]/30 transition-colors shadow-sm">
                  {cap.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#1A365D] mb-3 group-hover:text-[#00B4D8] transition-colors leading-tight">
                {cap.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {cap.desc}
              </p>
              
              <Link 
                to="/solutions"
                className="mt-auto inline-flex items-center text-sm font-bold text-[#0B192C] group-hover:text-[#00B4D8] transition-colors"
              >
                Explore Solutions <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsByIndustry;
