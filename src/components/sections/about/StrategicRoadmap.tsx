import { motion } from 'framer-motion';
import { TrendingUp, Globe2, Network, PlusCircle } from 'lucide-react';

const StrategicRoadmap = () => {
  const roadmapItems = [
    {
      title: 'Large-Scale Execution',
      desc: 'Undertaking larger contracts in the water and wastewater treatment segment and strategic subcontracts for major players.',
      icon: <TrendingUp size={24} className="text-[#0B192C]" />
    },
    {
      title: 'Infrastructure & Manufacturing',
      desc: 'Expanding into broad network infrastructure and enhanced in-house manufacturing capabilities.',
      icon: <Network size={24} className="text-[#0B192C]" />
    },
    {
      title: 'Niche Capabilities & BOT',
      desc: 'Developing specialized expertise in new niche areas and engaging in Build-Operate-Transfer (BOT) projects.',
      icon: <PlusCircle size={24} className="text-[#0B192C]" />
    },
    {
      title: 'Global Reach',
      desc: 'Preparing the foundation for expansion into international markets.',
      icon: <Globe2 size={24} className="text-[#0B192C]" />
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Looking Ahead
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-4">
              Our Strategic Roadmap
            </h2>
            <p className="text-gray-600 text-lg">
              The future focus of RAM Services Enterprises involves sustainable expansion and increasing operational scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div 
              key={index}
              className="flex gap-6 items-start bg-[#F7FAFC] p-8 rounded-xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="shrink-0 w-12 h-12 bg-[#00B4D8]/20 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A365D] mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategicRoadmap;
