import { ArrowRight, Droplet, Recycle, RefreshCcw, Activity } from 'lucide-react';

const FourRs = () => {
  const steps = [
    {
      title: 'Reduce',
      description: 'Avoid wastage of water and think before you use.',
      icon: <Droplet size={32} className="text-[#00B4D8]" />,
    },
    {
      title: 'Reuse',
      description: 'Reuse treated water for boilers, cooling towers, gardens & washrooms.',
      icon: <RefreshCcw size={32} className="text-[#00B4D8]" />,
    },
    {
      title: 'Recycle',
      description: 'Recycle correctly through advanced treatment workflows.',
      icon: <Recycle size={32} className="text-[#00B4D8]" />,
    },
    {
      title: 'Recover',
      description: 'Adopt advanced technologies for maximum recovery and quality.',
      icon: <Activity size={32} className="text-[#00B4D8]" />,
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Sustainability Core
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            The Four R's Framework
          </h2>
          <p className="text-gray-600 text-lg">
            Our approach to sustainable water management and environmental engineering.
          </p>
        </div>

        <div className="relative">
          {/* Circular/Flow layout representation for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-[#0B192C]/5 relative group hover:-translate-y-2 transition-transform duration-300">
                
                {/* Arrow connecting cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 w-8 h-8 bg-white border border-gray-100 rounded-full items-center justify-center -translate-y-1/2 z-20 shadow-sm text-[#00B4D8]">
                    <ArrowRight size={16} />
                  </div>
                )}
                
                <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-[#0B192C] mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FourRs;
