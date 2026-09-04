import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Sprout, Heart, BadgeCheck } from 'lucide-react';

const Values = () => {
  const values = [
    {
      title: 'Integrity',
      desc: 'Upholding uncompromising ethical standards in every project.',
      icon: <ShieldCheck size={28} className="text-[#00B4D8]" />
    },
    {
      title: 'Innovation',
      desc: 'Adopting sustainable and advanced technologies for better outcomes.',
      icon: <Lightbulb size={28} className="text-[#00B4D8]" />
    },
    {
      title: 'Responsibility',
      desc: 'Committed to environmental conservation and safe engineering.',
      icon: <Sprout size={28} className="text-[#00B4D8]" />
    },
    {
      title: 'Passion',
      desc: 'Driven by excellence in engineering and client satisfaction.',
      icon: <Heart size={28} className="text-[#00B4D8]" />
    },
    {
      title: 'Reliability',
      desc: 'Delivering robust solutions on time, every time.',
      icon: <BadgeCheck size={28} className="text-[#00B4D8]" />
    }
  ];

  return (
    <section className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Our Values
          </h2>
          <div className="w-16 h-1 bg-[#00B4D8] rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00B4D8]/30 transition-all duration-300 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-[#0B192C] rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A365D] mb-3">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Values;
