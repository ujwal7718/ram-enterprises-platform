import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Locations = () => {
  return (
    <section className="py-24 bg-[#F0F8FF] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Our Locations
          </h2>
          <div className="w-16 h-1 bg-[#00B4D8] rounded-full mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            Strategically positioned to serve industrial and municipal clients across India.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          
          {/* Head Office */}
          <motion.div 
            className="flex-1 bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-[#0B192C]/5 text-center flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-[#1A365D] text-white rounded-full flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <span className="text-[#00B4D8] font-bold tracking-widest text-xs uppercase mb-2 block">Head Office</span>
            <h3 className="text-2xl font-bold text-[#0B192C] mb-4">Prayagraj</h3>
            <p className="text-gray-600">Uttar Pradesh, India</p>
          </motion.div>

          {/* Branch Office */}
          <motion.div 
            className="flex-1 bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-[#0B192C]/5 text-center flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-[#00B4D8] text-[#0B192C] rounded-full flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <span className="text-[#1A365D] font-bold tracking-widest text-xs uppercase mb-2 block">Branch Office</span>
            <h3 className="text-2xl font-bold text-[#0B192C] mb-4">Hyderabad</h3>
            <p className="text-gray-600">Telangana, India</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Locations;
