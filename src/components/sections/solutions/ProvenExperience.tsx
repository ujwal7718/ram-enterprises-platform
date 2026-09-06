import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import TiltCard from '../../motion/TiltCard';
import Reveal from '../../motion/Reveal';

const ProvenExperience = () => {
  const projects = [
    {
      capacity: '300 KLD ETP',
      client: 'Global Green',
      location: 'Bangalore',
      details: 'Includes RO, UF & 20 KLD ZLD'
    },
    {
      capacity: '450 KLD ETP',
      client: 'Koeleman India Pvt. Ltd.',
      location: 'Bangalore'
    },
    {
      capacity: '60 KLD ZLD',
      client: 'Cipla',
      location: 'Bangalore'
    },
    {
      capacity: '200 KLD ETP',
      client: 'Vintage Coffee',
      location: 'Hyderabad'
    },
    {
      capacity: '40 KLD ETP',
      client: 'Licious',
      location: 'Hyderabad'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Proven Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-4">
              Experience Across Real-World Applications
            </h2>
            <p className="text-gray-600 text-lg">
              Selected treatment projects demonstrate experience across industrial water, effluent, sewage, and advanced treatment applications.
            </p>
          </div>
          <div className="shrink-0">
            <Link 
              to="/projects"
              className="inline-flex items-center text-[#1A365D] font-bold hover:text-[#00B4D8] transition-colors group"
            >
              View All Projects 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="[perspective:800px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard strength={5} className="bg-[#F7FAFC] border border-gray-100 p-6 rounded-xl hover:border-[#00B4D8]/30 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <h3 className="text-lg font-bold text-[#1A365D] mb-2">{project.capacity}</h3>
                <p className="text-[#0B192C] font-semibold text-sm mb-4">{project.client}</p>

                <div className="mt-auto flex flex-col gap-3">
                  {project.details && (
                    <p className="text-xs text-gray-500 bg-white p-2 rounded border border-gray-100">
                      {project.details}
                    </p>
                  )}
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium uppercase tracking-wider">
                    <MapPin size={14} />
                    {project.location}
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

export default ProvenExperience;
