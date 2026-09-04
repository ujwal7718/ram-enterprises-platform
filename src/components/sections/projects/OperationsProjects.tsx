import { motion } from 'framer-motion';

const OperationsProjects = () => {
  const projects = [
    { capacity: '40 KLD ETP Plant', client: 'Licious', location: 'Hyderabad' },
    { capacity: '200 KLD ETP Plant', client: 'Vintage Coffee', location: 'Hyderabad' },
    { capacity: '60 KLD CETP Plant', client: 'Tuvan Foods', location: 'Hyderabad' },
    { capacity: '300 KLD ETP Plant', client: 'Global Green', location: 'Bangalore, Karnataka' },
    { capacity: '20 KLD ZLD Plant', client: 'Global Green', location: 'Bangalore, Karnataka' },
    { capacity: '25 KLD ETP Plant', client: 'Tejas Food', location: 'Hyderabad' },
    { capacity: '150 KLD ETP Plant', client: 'Brilliant Bio Pharma', location: 'Hyderabad' },
    { capacity: '25 KLD ETP & 15 KLD STP Plant', client: 'Vibonum Tech. Pvt. Ltd.', location: 'Nanjangud, Karnataka' },
    { capacity: '10 KLD STP Plant', client: 'Big Basket', location: 'Hyderabad' },
    { capacity: '502 KLD ETP & 100 KLD STP', client: 'ICML', location: 'Medak, Hyderabad' }
  ];

  return (
    <section id="om" className="py-24 bg-[#0B192C] scroll-mt-20 border-t border-[#1A365D]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 items-start max-w-6xl mx-auto">
          
          <div className="md:w-1/3 sticky top-32">
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Operations & Maintenance
            </span>
            <h2 className="text-3xl font-bold text-white mb-6">
              Experience Beyond Project Execution
            </h2>
            <div className="w-16 h-1 bg-[#C1121F] rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              RAM Services Enterprises also provides operations, maintenance, and ongoing support for water and wastewater treatment facilities to ensure continuous optimal performance.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project, index) => {
              // Highlight the capacity by splitting it
              const capacityParts = project.capacity.split(/(&|\+)/).map(part => part.trim());

              return (
                <motion.div 
                  key={index}
                  className="bg-[#1A365D]/20 border border-[#1A365D] p-6 rounded-xl hover:bg-[#1A365D]/50 hover:border-[#00B4D8]/40 transition-colors duration-300 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-gray-500">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <div className="text-[#00B4D8] font-bold text-lg leading-snug">
                      {capacityParts.map((part, i) => (
                        <span key={i} className={part === '&' || part === '+' ? 'text-gray-400 mx-1' : ''}>
                          {part}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-1">{project.client}</h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1.5">
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default OperationsProjects;
