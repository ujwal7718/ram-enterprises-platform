import { motion } from 'framer-motion';

const IndustryGrouping = () => {
  const groups = [
    {
      title: 'INDUSTRIAL & MANUFACTURING',
      industries: [
        'Sugar, Breweries & Distillery',
        'Semiconductor',
        'Textiles & Tanneries',
        'Chemicals & Pesticides',
        'Pharma, Biotech & Bulk Drug',
        'Steel & Power',
        'Rubber & Glass'
      ]
    },
    {
      title: 'FOOD & PROCESSING',
      industries: [
        'Fisheries, Seafood & Food Processing',
        'Agro & Oil Extraction',
        'Dairy & Allied',
        'Pulp & Paper'
      ]
    },
    {
      title: 'INFRASTRUCTURE & INSTITUTIONAL',
      industries: [
        'IT & Infrastructure',
        'Municipalities',
        'Educational Institutions'
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0B192C]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Across Industrial, Infrastructure & Institutional Applications
          </h2>
          <div className="w-16 h-1 bg-[#00B4D8] rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {groups.map((group, index) => (
            <motion.div 
              key={index}
              className="bg-[#1A365D]/30 border border-[#1A365D] rounded-xl p-8 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-[#00B4D8] font-bold text-sm tracking-wider uppercase mb-8 border-b border-[#00B4D8]/20 pb-4">
                {group.title}
              </h3>
              
              <ul className="space-y-4">
                {group.industries.map((industry, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#00B4D8] mr-3 mt-1 text-xs">■</span>
                    <span className="text-gray-300 font-medium">{industry}</span>
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

export default IndustryGrouping;
