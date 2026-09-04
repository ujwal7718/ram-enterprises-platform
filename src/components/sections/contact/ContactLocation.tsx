import { motion } from 'framer-motion';
import { MapPin, Building2, Map } from 'lucide-react';

const ContactLocation = () => {
  const offices = [
    {
      title: "Registered Office",
      icon: <Building2 className="text-[#00B4D8]" size={24} />,
      address: "0, Shikandara, Phoolpur, Landmark: Gram Sabha Nari Prayagraj",
      region: "U.P. - 212109, India"
    },
    {
      title: "Branch Office - Hyderabad",
      icon: <MapPin className="text-[#00B4D8]" size={24} />,
      address: "SY NO. 492/U, Isnapur",
      region: "Hyderabad, Telangana – 502307, India"
    },
    {
      title: "Branch Office - Bangalore",
      icon: <Map className="text-[#00B4D8]" size={24} />,
      address: "Ajmera Layout, Lakesdie Attur, New Yehlanka",
      region: "Bangalore, Karnataka, India"
    }
  ];

  return (
    <section className="py-24 bg-[#F7FAFC] border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            className="mb-12 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <span className="inline-block w-8 h-[1px] bg-[#00B4D8]"></span>
              <span className="text-[#00B4D8] text-xs font-semibold tracking-[0.2em] uppercase">
                Location
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-4 tracking-tight">
              Our Offices
            </h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto md:mx-0">
              Operating from key locations across India to support industrial engineering and water treatment projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm flex flex-col group hover:border-[#00B4D8]/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="w-12 h-12 bg-[#F7FAFC] border border-gray-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#00B4D8]/10 transition-colors duration-300">
                  {office.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B192C] mb-3">{office.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-1">
                    {office.address}
                  </p>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {office.region}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactLocation;
