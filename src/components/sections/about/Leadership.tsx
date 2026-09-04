import { motion } from 'framer-motion';
import { leadershipData } from '../../../data/leadership';

const Leadership = () => {
  const founders = leadershipData.filter(m => m.role === 'Founder' || m.role === 'CEO');
  const team = leadershipData.filter(m => m.role !== 'Founder' && m.role !== 'CEO');

  const getInitials = (name: string) => {
    const parts = name.replace(/^(Dr\.|Mr\.|Mrs\.)\s*/i, '').split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <section id="leadership" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our People
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Leadership Team
          </h2>
          <p className="text-gray-600 text-lg">
            Backed by decades of engineering and industry experience.
          </p>
        </div>

        {/* Founders / Top Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {founders.map((member, index) => (
            <motion.div 
              key={member.id}
              className="bg-[#F7FAFC] rounded-2xl overflow-hidden border border-gray-100 group hover:border-[#00B4D8] transition-colors duration-300 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-64 bg-[#0B192C] overflow-hidden relative">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1A365D] to-[#0B192C] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                    <span className="text-6xl font-light text-white/40 tracking-widest relative z-10">{getInitials(member.name)}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <span className="text-[#00B4D8] font-bold tracking-widest text-xs uppercase mb-2 block">{member.role}</span>
                <h3 className="text-2xl font-bold text-[#1A365D] mb-6">{member.name}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Background</h4>
                    <p className="text-sm text-gray-700 font-medium">{member.education}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Experience</h4>
                    <p className="text-sm text-gray-700 font-medium">{member.experience}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Focus</h4>
                    <p className="text-sm text-gray-700 font-medium">{member.responsibilities}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div 
              key={member.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 group hover:border-[#00B4D8] transition-colors duration-300 shadow-sm flex items-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-[#1A365D] to-[#0B192C] flex items-center justify-center mr-4 shadow-inner relative overflow-hidden">
                {member.image ? (
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                   <span className="text-xl font-light text-white/50">{getInitials(member.name)}</span>
                )}
              </div>
              <div>
                <span className="text-[#00B4D8] font-bold tracking-widest text-[10px] uppercase mb-1 block">{member.role}</span>
                <h3 className="text-base font-bold text-[#1A365D] mb-1">{member.name}</h3>
                <p className="text-[11px] text-gray-500 line-clamp-1">{member.education}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
