import { PenTool, Truck, Wrench, ArrowRight, CheckSquare, Settings } from 'lucide-react';

const HowWeWork = () => {
  const steps = [
    { name: 'Design', icon: <PenTool size={24} /> },
    { name: 'Supply', icon: <Truck size={24} /> },
    { name: 'Installation', icon: <Wrench size={24} /> },
    { name: 'Erection', icon: <ArrowRight size={24} className="-rotate-45" /> },
    { name: 'Commissioning', icon: <CheckSquare size={24} /> },
    { name: 'O&M / AMC', icon: <Settings size={24} /> },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            End-to-End Execution
          </h2>
          <p className="text-gray-600 text-lg">
            We handle every phase of your engineering project with precision, from initial blueprints to lifelong maintenance.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#00B4D8]/20 via-[#00B4D8] to-[#00B4D8]/20 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-20 h-20 bg-white border-2 border-[#E2E8F0] group-hover:border-[#00B4D8] rounded-full flex items-center justify-center mb-4 text-[#1A365D] group-hover:text-[#00B4D8] group-hover:shadow-lg group-hover:shadow-[#00B4D8]/20 transition-all duration-300 relative z-10">
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#0B192C] text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-center font-bold text-[#0B192C] group-hover:text-[#00B4D8] transition-colors">
                  {step.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
