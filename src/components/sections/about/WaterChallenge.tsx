import { motion } from 'framer-motion';

const WaterChallenge = () => {
  const steps = [
    { num: '01', title: 'Challenge', desc: 'Understanding complex industrial requirements and environmental constraints.' },
    { num: '02', title: 'Engineering', desc: 'Designing robust, custom systems tailored for optimal efficiency.' },
    { num: '03', title: 'Execution', desc: 'Deploying expert teams for seamless turnkey construction and supply.' },
    { num: '04', title: 'Sustainable Result', desc: 'Delivering reliable, long-term water treatment and recovery solutions.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6 leading-tight">
              From Water Challenge <br/> to Working Solution
            </h2>
            <div className="w-16 h-1 bg-[#00B4D8] rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              We combine engineering expertise, disciplined execution, and sustainable technologies to transform complex water and industrial requirements into reliable working systems.
            </p>
            
            <div className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="text-2xl font-light text-[#00B4D8]/40 group-hover:text-[#00B4D8] transition-colors duration-300 font-mono mt-1">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A365D] mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 w-full h-[600px] relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0B192C]/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* The Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{ backgroundImage: 'url("/assets/equipment/aeration-system.jpeg")' }}
            ></div>
            
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[#00B4D8]/10 mix-blend-overlay"></div>
            
            {/* Decorative Tech Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                <div className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse"></div>
                <span className="text-white/80 font-mono text-xs tracking-widest uppercase">System Integrated • Active Monitoring</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WaterChallenge;
