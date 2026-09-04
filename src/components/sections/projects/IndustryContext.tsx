import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const IndustryContext = () => {
  const industries = [
    'Sugar, Breweries & Distillery',
    'Fisheries, Seafood & Food Processing',
    'Semiconductor',
    'Textiles & Tanneries',
    'Chemicals & Pesticides',
    'Pharma, Biotech & Bulk Drug',
    'Agro & Oil Extraction',
    'IT & Infrastructure',
    'Dairy & Allied',
    'Pulp & Paper',
    'Steel & Power',
    'Rubber & Glass',
    'Municipalities',
    'Educational Institutions'
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-[#0B192C] mb-6">
              Projects Across Diverse Industries
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our engineering teams have successfully executed projects addressing the unique water, wastewater, and operational requirements of diverse industrial sectors.
            </p>
            <Link 
              to="/industries"
              className="inline-flex items-center text-[#1A365D] font-bold hover:text-[#00B4D8] transition-colors group text-lg"
            >
              Explore Industries 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="md:w-2/3">
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#F0F8FF] text-[#1A365D] border border-[#00B4D8]/20 px-4 py-2 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IndustryContext;
