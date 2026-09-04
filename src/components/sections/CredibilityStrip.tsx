const CredibilityStrip = () => {
  // Using text placeholders for logos until official assets are provided
  const clients = [
    "LICIOUS",
    "ITC (ICML)",
    "VINTAGE COFFEE",
    "ULTRATECH CEMENT",
    "CIPLA",
    "GLOBAL GREEN",
    "BIG BASKET"
  ];

  return (
    <section className="bg-[#F7FAFC] py-10 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by Industry Leaders
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="text-xl md:text-2xl font-bold text-[#1A365D] tracking-tighter">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
