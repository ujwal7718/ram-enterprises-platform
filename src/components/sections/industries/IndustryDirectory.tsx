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
  featured?: boolean;
  colSpanClass?: string;
  image?: string;
  cssBackground?: string;
}

const IndustryDirectory = () => {
  const industries: Industry[] = [
    // ROW 1
    {
      id: 'sugar-breweries',
      number: '01',
      name: 'Sugar, Breweries & Distillery',
      icon: <Factory size={28} strokeWidth={1.5} />,
      description: 'Water and wastewater treatment requirements.',
      featured: true,
      colSpanClass: 'md:col-span-2 lg:col-span-2',
      image: '/assets/equipment/filtration-skid.jpeg'
    },
    {
      id: 'fisheries-food',
      number: '02',
      name: 'Fisheries, Seafood & Food Processing',
      icon: <Fish size={24} strokeWidth={1.5} />,
      description: 'Treatment systems for applicable process requirements.',
      colSpanClass: 'md:col-span-1 lg:col-span-1'
    },
    {
      id: 'semiconductor',
      number: '03',
      name: 'Semiconductor',
      icon: <Cpu size={24} strokeWidth={1.5} />,
      description: 'Industrial treatment and engineering requirements.',
      colSpanClass: 'md:col-span-1 lg:col-span-1'
    },
    
    // ROW 2
    {
      id: 'textiles-tanneries',
      number: '04',
      name: 'Textiles & Tanneries',
      icon: <Shirt size={24} strokeWidth={1.5} />,
      description: 'Water and wastewater treatment requirements.',
      colSpanClass: 'md:col-span-1 lg:col-span-1'
    },
    {
      id: 'chemicals-pesticides',
      number: '05',
      name: 'Chemicals & Pesticides',
      icon: <FlaskConical size={28} strokeWidth={1.5} />,
      description: 'Industrial treatment and engineering requirements.',
      featured: true,
      colSpanClass: 'md:col-span-2 lg:col-span-2',
      image: '/chemical-plant-bg.png'
    },
    {
      id: 'pharma-biotech',
      number: '06',
      name: 'Pharma, Biotech & Bulk Drug',
      icon: <Pill size={24} strokeWidth={1.5} />,
      description: 'Treatment systems for applicable process requirements.',
      colSpanClass: 'md:col-span-1 lg:col-span-1'
    },

    // ROW 3
    {
      id: 'agro-oil',
      number: '07',
      name: 'Agro & Oil Extraction',
      icon: <Wheat size={24} strokeWidth={1.5} />,
      description: 'Water and wastewater treatment requirements.',
      colSpanClass: 'md:col-span-1 lg:col-span-1'
    },
    {
      id: 'it-infrastructure',
      number: '08',
      name: 'IT & Infrastructure',
      icon: <Building2 size={24} strokeWidth={1.5} />,
      description: 'Water treatment and infrastructure requirements.',
      colSpanClass: 'md:col-span-1 lg:col-span-1'
    },
    {
      id: 'dairy-allied',
      number: '09',
      name: 'Dairy & Allied',
      icon: <Milk size={24} strokeWidth={1.5} />,
      description: 'Treatment systems for applicable process requirements.',
      colSpanClass: 'md:col-span-2 lg:col-span-2'
    },

    // ROW 4
    {
      id: 'pulp-paper',
      number: '10',
      name: 'Pulp & Paper',
      icon: <FileText size={28} strokeWidth={1.5} />,
      description: 'Water and wastewater treatment requirements.',
      featured: true,
      colSpanClass: 'md:col-span-2 lg:col-span-2',
      image: '/pulp-paper-bg.png'
    },
    {
      id: 'steel-power',
      number: '11',
      name: 'Steel & Power',
      icon: <Zap size={24} strokeWidth={1.5} />,
      description: 'Industrial treatment and engineering requirements.',
      colSpanClass: 'md:col-span-1 lg:col-span-1'
    },
    {
      id: 'rubber-glass',
      number: '12',
      name: 'Rubber & Glass',
      icon: <Circle size={24} strokeWidth={1.5} />,
      description: 'Water and wastewater treatment requirements.',
      colSpanClass: 'md:col-span-1 lg:col-span-1'
    },

    // ROW 5
    {
      id: 'municipalities',
      number: '13',
      name: 'Municipalities',
      icon: <Building2 size={24} strokeWidth={1.5} />,
      description: 'Water treatment and infrastructure requirements.',
      colSpanClass: 'md:col-span-2 lg:col-span-2'
    },
    {
      id: 'educational-institutions',
      number: '14',
      name: 'Educational Institutions',
      icon: <GraduationCap size={24} strokeWidth={1.5} />,
      description: 'Treatment systems for applicable process requirements.',
      colSpanClass: 'md:col-span-2 lg:col-span-2'
    }
  ];

  return (
    <section id="industry-grid" className="py-24 bg-white scroll-mt-20 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto auto-rows-fr">
          {industries.map((industry, index) => {
            
            if (industry.featured) {
              return (
                <motion.div 
                  key={industry.id}
                  className={`${industry.colSpanClass} relative bg-[#0B192C] rounded-sm overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-md hover:shadow-xl flex flex-col justify-end p-8 md:p-10 min-h-[360px]`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                >
                  {/* Background Layer */}
                  <div className="absolute inset-0 z-0">
                    {industry.image ? (
                      <img 
                        src={industry.image} 
                        alt={`${industry.name} industrial process`} 
                        className="w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-[1.5s] ease-out mix-blend-luminosity"
                      />
                    ) : (
                      <div 
                        className="w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                        style={{ 
                          backgroundImage: industry.cssBackground, 
                          backgroundSize: industry.cssBackground?.includes('linear-gradient') ? '30px 30px' : '100% 100%' 
                        }}
                      ></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/80 to-[#0B192C]/10"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex justify-between items-end w-full">
                    <div className="max-w-[85%]">
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-[#00B4D8] text-sm font-mono tracking-widest">{industry.number}</span>
                        <div className="text-[#00B4D8]">{industry.icon}</div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
                        {industry.name}
                      </h3>
                      <p className="text-gray-300 text-sm font-light leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                    <div className="w-14 h-14 border border-[#00B4D8]/30 rounded-full flex items-center justify-center bg-[#0B192C]/50 backdrop-blur-sm group-hover:bg-[#00B4D8] group-hover:border-[#00B4D8] transition-colors duration-500 cursor-default shrink-0">
                      <ArrowRight size={22} className="text-[#00B4D8] group-hover:text-[#0B192C] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={industry.id}
                className={`${industry.colSpanClass} bg-white border border-gray-100 rounded-sm p-8 md:p-10 flex flex-col group hover:-translate-y-1 hover:border-[#00B4D8] hover:shadow-[0_15px_30px_-15px_rgba(0,180,216,0.15)] transition-all duration-300 relative cursor-default min-h-[320px]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              >
                {/* Large Background Number */}
                <div className="absolute top-4 right-6 text-7xl font-mono font-bold text-gray-50 group-hover:text-[#00B4D8]/5 transition-colors duration-500 z-0 pointer-events-none select-none">
                  {industry.number}
                </div>

                <div className="relative z-10 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-[1px] bg-[#00B4D8]/30 group-hover:bg-[#00B4D8] transition-colors duration-300"></div>
                    <div className="text-[#1A365D] group-hover:text-[#00B4D8] transition-colors duration-300">
                      {industry.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[#0B192C] mb-4 leading-tight tracking-tight">
                    {industry.name}
                  </h3>
                  
                  <p className="text-gray-500 text-sm font-light leading-relaxed flex-grow">
                    {industry.description}
                  </p>
                  
                  <div className="mt-8 flex justify-between items-center border-t border-gray-100 pt-6 group-hover:border-[#00B4D8]/20 transition-colors duration-300">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-[#00B4D8] uppercase transition-colors duration-300">EXPLORE SECTOR</span>
                    <ArrowRight size={18} className="text-gray-300 group-hover:text-[#00B4D8] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IndustryDirectory;
