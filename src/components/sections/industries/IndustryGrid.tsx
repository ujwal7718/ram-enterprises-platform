import { motion } from 'framer-motion';
import { 
  Factory, Fish, Cpu, Shirt, FlaskConical, Pill, Wheat, 
  Building2, Milk, FileText, Zap, Circle, GraduationCap, ArrowRight
} from 'lucide-react';

interface Industry {
  id: string;
  number: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const IndustryGrid = () => {
  const industries: Industry[] = [
    {
      id: 'sugar-breweries',
      number: '01',
      name: 'Sugar, Breweries & Distillery',
      icon: <Factory size={28} strokeWidth={1.5} />,
      description: 'Water and wastewater treatment requirements.'
    },
    {
      id: 'fisheries-food',
      number: '02',
      name: 'Fisheries, Seafood & Food Processing',
      icon: <Fish size={28} strokeWidth={1.5} />,
      description: 'Treatment systems for applicable process requirements.'
    },
    {
      id: 'semiconductor',
      number: '03',
      name: 'Semiconductor',
      icon: <Cpu size={28} strokeWidth={1.5} />,
      description: 'Industrial treatment and engineering requirements.'
    },
    {
      id: 'textiles-tanneries',
      number: '04',
      name: 'Textiles & Tanneries',
      icon: <Shirt size={28} strokeWidth={1.5} />,
      description: 'Water and wastewater treatment requirements.'
    },
    {
      id: 'chemicals-pesticides',
      number: '05',
      name: 'Chemicals & Pesticides',
      icon: <FlaskConical size={28} strokeWidth={1.5} />,
      description: 'Industrial treatment and engineering requirements.'
    },
    {
      id: 'pharma-biotech',
      number: '06',
      name: 'Pharma, Biotech & Bulk Drug',
      icon: <Pill size={28} strokeWidth={1.5} />,
      description: 'Treatment systems for applicable process requirements.'
    },
    {
      id: 'agro-oil',
      number: '07',
      name: 'Agro & Oil Extraction',
      icon: <Wheat size={28} strokeWidth={1.5} />,
      description: 'Water and wastewater treatment requirements.'
    },
    {
      id: 'it-infrastructure',
      number: '08',
      name: 'IT & Infrastructure',
      icon: <Building2 size={28} strokeWidth={1.5} />,
      description: 'Water treatment and infrastructure requirements.'
    },
    {
      id: 'dairy-allied',
      number: '09',
      name: 'Dairy & Allied',
      icon: <Milk size={28} strokeWidth={1.5} />,
      description: 'Treatment systems for applicable process requirements.'
    },
    {
      id: 'pulp-paper',
      number: '10',
      name: 'Pulp & Paper',
      icon: <FileText size={28} strokeWidth={1.5} />,
      description: 'Water and wastewater treatment requirements.'
    },
    {
      id: 'steel-power',
      number: '11',
      name: 'Steel & Power',
      icon: <Zap size={28} strokeWidth={1.5} />,
      description: 'Industrial treatment and engineering requirements.'
    },
    {
      id: 'rubber-glass',
      number: '12',
      name: 'Rubber & Glass',
      icon: <Circle size={28} strokeWidth={1.5} />,
      description: 'Water and wastewater treatment requirements.'
    },
    {
      id: 'municipalities',
      number: '13',
      name: 'Municipalities',
      icon: <Building2 size={28} strokeWidth={1.5} />,
      description: 'Water treatment and infrastructure requirements.'
    },
    {
      id: 'educational-institutions',
      number: '14',
      name: 'Educational Institutions',
      icon: <GraduationCap size={28} strokeWidth={1.5} />,
      description: 'Treatment systems for applicable process requirements.'
    }
  ];

  return (
    <section id="industry-grid" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Sectors We Serve
          </h2>
          <p className="text-gray-600 text-lg">
            Explore the industries and sectors covered by RAM Services Enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {industries.map((industry, index) => (
            <motion.div 
              key={industry.id}
              className="bg-white border border-gray-100 rounded-xl p-8 hover:border-[#00B4D8]/40 hover:shadow-xl hover:shadow-[#00B4D8]/5 hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-2xl font-mono font-light text-gray-200 group-hover:text-[#00B4D8]/30 transition-colors">
                  {industry.number}
                </div>
                <div className="text-[#1A365D] bg-[#F7FAFC] p-3 rounded-lg group-hover:bg-[#00B4D8] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {industry.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-[#1A365D] mb-3 group-hover:text-[#00B4D8] transition-colors leading-tight">
                {industry.name}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {industry.description}
              </p>
              
              <div className="mt-auto flex justify-end">
                <ArrowRight size={20} className="text-gray-300 group-hover:text-[#00B4D8] group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustryGrid;
