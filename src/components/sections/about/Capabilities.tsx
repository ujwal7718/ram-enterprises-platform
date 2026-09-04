import { Droplet, Wrench, Zap, HardHat, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Capabilities = () => {
  const capabilities = [
    {
      title: 'Water & Wastewater',
      icon: <Droplet size={32} className="text-[#0B192C]" />,
      items: [
        'Water treatment',
        'Effluent treatment',
        'Sewage treatment',
        'Leachate treatment',
        'Common effluent treatment',
        'Advanced treatment systems'
      ]
    },
    {
      title: 'Engineering & Fabrication',
      icon: <Wrench size={32} className="text-[#0B192C]" />,
      items: [
        'Structural fabrication',
        'Pipeline work',
        'General fabrication',
        'Manufacturing'
      ]
    },
    {
      title: 'Electrical & Automation',
      icon: <Zap size={32} className="text-[#0B192C]" />,
      items: [
        'Electrical installations',
        'Cabling networks',
        'Process automation'
      ]
    },
    {
      title: 'Civil Engineering',
      icon: <HardHat size={32} className="text-[#0B192C]" />,
      items: [
        'Heavy civil works',
        'Industrial painting',
        'Site preparation'
      ]
    },
    {
      title: 'Operations',
      icon: <Settings size={32} className="text-[#0B192C]" />,
      items: [
        'Annual Maintenance Contracts (AMC)',
        'Operation & Maintenance',
        'Technical Consultancy',
        'Skilled Manpower Supply'
      ]
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-[#F0F8FF] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Complete Engineering Capabilities
          </h2>
          <p className="text-gray-600 text-lg">
            We deliver integrated solutions across all engineering disciplines required for complex industrial and environmental projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 border border-blue-50 shadow-md shadow-[#0B192C]/5 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-full flex items-center justify-center mb-6">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">{cap.title}</h3>
              <ul className="flex flex-col gap-3 flex-grow">
                {cap.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] shrink-0 mt-1.5"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
