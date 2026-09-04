import { motion } from 'framer-motion';

const ContactCredibility = () => {
  const points = [
    {
      num: '01',
      title: 'Requirement Understanding',
      desc: 'Evaluating specific industrial and process requirements to define the right approach.'
    },
    {
      num: '02',
      title: 'Engineering & Project Execution',
      desc: 'Delivering robust engineering solutions and turnkey project implementation.'
    },
    {
      num: '03',
      title: 'Water & Wastewater Treatment',
      desc: 'Process-aligned treatment systems for commercial and institutional sectors.'
    },
    {
      num: '04',
      title: 'Ongoing Operational Support',
      desc: 'Long-term operations and maintenance to ensure consistent plant performance.'
    }
  ];

  return (
    <section className="py-24 bg-[#0B192C] border-t border-[#1A365D]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl">
              Engineering Support From <br className="hidden md:block" /> Requirement to Execution
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            {/* Desktop horizontal connector line */}
            <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-px bg-[#1A365D]"></div>
            
            {points.map((point, index) => (
              <motion.div 
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="w-14 h-14 rounded-full bg-[#0B192C] border-2 border-[#1A365D] flex items-center justify-center mb-6">
                  <span className="text-[#00B4D8] font-mono text-lg font-light tracking-wider">
                    {point.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactCredibility;
