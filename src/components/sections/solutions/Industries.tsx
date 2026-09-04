import { motion } from 'framer-motion';

const Industries = () => {
  const industries = [
    'Sugar, Breweries & Distillery',
    'Fisheries, Seafood & Food Processing',
    'Semiconductor',
    'Textiles & Tanneries',
    'Chemicals & Pesticides',
    'Pharma, Biotech & Bulk Drug',
    'Agro & Oil Extraction Plants',
    'IT & Infrastructure',
    'Dairy & Allied',
    'Pulp & Paper',
    'Steel & Power',
    'Rubber & Glass',
    'Municipalities',
    'Educational Institutions'
  ];

  return (
    <section className="py-24 bg-[#F0F8FF] border-t border-[#E2E8F0]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Application Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Solutions Across Diverse Industries
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-200 px-6 py-3 rounded-full hover:border-[#00B4D8] hover:bg-[#F7FAFC] transition-colors duration-300 cursor-default shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="text-[#1A365D] font-medium text-sm">{industry}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
