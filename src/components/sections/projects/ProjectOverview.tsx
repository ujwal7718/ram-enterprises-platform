import { motion } from 'framer-motion';

const ProjectOverview = () => {
  const metrics = [
    { value: '20+', label: 'Listed project references' },
    { value: 'Multiple', label: 'Water & Wastewater Applications' },
    { value: 'Core', label: 'ETP • STP • CETP • ZLD' },
    { value: 'India', label: 'Project Locations' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Project Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6 leading-tight">
            Projects Across Water, Wastewater & Industrial Applications
          </h2>
          <div className="w-16 h-1 bg-[#C1121F] rounded-full mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            RAM Services Enterprises has executed and supported water, effluent, sewage, leachate, ZLD, and related treatment projects across industrial, institutional, and commercial applications.
          </p>
        </div>

        {/* Metrics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-2">{metric.value}</div>
              <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Anchor Links for Navigation */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            { name: 'Effluent Treatment', link: '#etp' },
            { name: 'Sewage Treatment', link: '#stp' },
            { name: 'O&M Experience', link: '#om' },
            { name: 'Project Capabilities', link: '#capabilities' },
          ].map((cat, index) => (
            <a 
              key={index}
              href={cat.link}
              className="px-6 py-3 bg-white border border-gray-200 text-[#1A365D] font-medium rounded-full hover:border-[#00B4D8] hover:text-[#00B4D8] hover:shadow-md transition-all duration-300 text-sm"
            >
              {cat.name}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectOverview;
