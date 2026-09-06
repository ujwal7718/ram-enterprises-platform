import { ChevronRight } from 'lucide-react';
import Reveal from '../motion/Reveal';
import Stagger from '../motion/Stagger';

const Industries = () => {
  const sectors = [
    'Sugar, Breweries & Distillery',
    'Fisheries, Seafood & Food Processing',
    'Semiconductor',
    'Textiles & Tanneries',
    'Chemicals & Pesticides',
    'Pharma, Biotech & Bulk Drug',
    'Agro & Oil Extraction plants',
    'IT & Infrastructure',
    'Dairy & Allied',
    'Pulp & Paper',
    'Steel & Power',
    'Rubber & Glass',
    'Municipalities',
    'Educational Institutions'
  ];

  return (
    <section className="py-24 bg-[#F7FAFC] relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Application Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-lg">
              Delivering customized turnkey solutions across diverse industrial sectors.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" amount={0.05}>
          {sectors.map((sector) => (
            <Stagger.Item key={sector}>
              <div className="bg-white p-5 rounded-lg border border-gray-100 hover:border-[#00B4D8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex items-center justify-between cursor-default h-full">
                <span className="font-medium text-[#1A365D] group-hover:text-[#00B4D8] transition-colors">
                  {sector}
                </span>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#00B4D8] group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Stagger.Item>
          ))}
        </Stagger>

      </div>
    </section>
  );
};

export default Industries;
