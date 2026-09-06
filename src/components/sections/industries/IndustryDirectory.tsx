import { motion } from 'framer-motion';
import TiltCard from '../../motion/TiltCard';
import Reveal from '../../motion/Reveal';
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

const INDUSTRIES: Industry[] = [
  { id: 'sugar-breweries', number: '01', name: 'Sugar, Breweries & Distillery', icon: <Factory size={24} strokeWidth={1.5} />, description: 'Water and wastewater treatment requirements.' },
  { id: 'fisheries-food', number: '02', name: 'Fisheries, Seafood & Food Processing', icon: <Fish size={24} strokeWidth={1.5} />, description: 'Treatment systems for applicable process requirements.' },
  { id: 'semiconductor', number: '03', name: 'Semiconductor', icon: <Cpu size={24} strokeWidth={1.5} />, description: 'Industrial treatment and engineering requirements.' },
  { id: 'textiles-tanneries', number: '04', name: 'Textiles & Tanneries', icon: <Shirt size={24} strokeWidth={1.5} />, description: 'Water and wastewater treatment requirements.' },
  { id: 'chemicals-pesticides', number: '05', name: 'Chemicals & Pesticides', icon: <FlaskConical size={24} strokeWidth={1.5} />, description: 'Industrial treatment and engineering requirements.' },
  { id: 'pharma-biotech', number: '06', name: 'Pharma, Biotech & Bulk Drug', icon: <Pill size={24} strokeWidth={1.5} />, description: 'Treatment systems for applicable process requirements.' },
  { id: 'agro-oil', number: '07', name: 'Agro & Oil Extraction', icon: <Wheat size={24} strokeWidth={1.5} />, description: 'Water and wastewater treatment requirements.' },
  { id: 'it-infrastructure', number: '08', name: 'IT & Infrastructure', icon: <Building2 size={24} strokeWidth={1.5} />, description: 'Water treatment and infrastructure requirements.' },
  { id: 'dairy-allied', number: '09', name: 'Dairy & Allied', icon: <Milk size={24} strokeWidth={1.5} />, description: 'Treatment systems for applicable process requirements.' },
  { id: 'pulp-paper', number: '10', name: 'Pulp & Paper', icon: <FileText size={24} strokeWidth={1.5} />, description: 'Water and wastewater treatment requirements.' },
  { id: 'steel-power', number: '11', name: 'Steel & Power', icon: <Zap size={24} strokeWidth={1.5} />, description: 'Industrial treatment and engineering requirements.' },
  { id: 'rubber-glass', number: '12', name: 'Rubber & Glass', icon: <Circle size={24} strokeWidth={1.5} />, description: 'Water and wastewater treatment requirements.' },
  { id: 'municipalities', number: '13', name: 'Municipalities', icon: <Building2 size={24} strokeWidth={1.5} />, description: 'Water treatment and infrastructure requirements.' },
  { id: 'educational-institutions', number: '14', name: 'Educational Institutions', icon: <GraduationCap size={24} strokeWidth={1.5} />, description: 'Treatment systems for applicable process requirements.' },
];

const IndustryDirectory = () => {
  return (
    <section id="industry-grid" className="py-24 bg-white scroll-mt-20 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            14 Sectors, One Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C]">
            Every Industry We Serve
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1400px] mx-auto">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.id}
              className="[perspective:1000px] h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
            >
              <TiltCard
                strength={5}
                glare={false}
                className="relative bg-white border border-gray-100 rounded-xl p-7 flex flex-col group hover:border-[#00B4D8] hover:shadow-[0_15px_30px_-15px_rgba(0,180,216,0.18)] transition-shadow duration-300 cursor-default h-full min-h-[260px]"
              >
                {/* Watermark number */}
                <div className="absolute top-4 right-5 text-5xl font-mono font-bold text-gray-50 group-hover:text-[#00B4D8]/10 transition-colors duration-500 pointer-events-none select-none">
                  {industry.number}
                </div>

                <div className="relative z-10 flex-grow flex flex-col">
                  <div className="w-11 h-11 rounded-lg bg-[#F0F8FF] text-[#1A365D] group-hover:bg-[#00B4D8] group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                    {industry.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#0B192C] mb-2.5 leading-snug">
                    {industry.name}
                  </h3>

                  <p className="text-gray-500 text-sm font-light leading-relaxed flex-grow">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex justify-between items-center border-t border-gray-100 pt-5 group-hover:border-[#00B4D8]/20 transition-colors duration-300">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-gray-400 group-hover:text-[#00B4D8] uppercase transition-colors duration-300">
                      Explore Sector
                    </span>
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#00B4D8] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryDirectory;
