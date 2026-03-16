export default function ServiceHighlights() {
  const serviceData = [
    {
      title: "Invisalign & Clear Aligners",
      image: "/images/ortho/invisalign.png",
      description:
        "The world's most advanced clear aligner system. Get a perfect smile without wires or brackets.",
      benefits: [
        "Virtually invisible treatment",
        "Removable & easy to clean",
        "iTero Digital Scanning",
        "Starting from ₹90,000",
      ],
    },
    {
      title: "Junior Aligners for Kids",
      image: "/images/ortho/junior.png",
      description:
        "Specialized clear aligner treatment designed specifically for the unique needs of growing children.",
      benefits: [
        "Designed for kids & teens",
        "Comfortable & wire-free",
        "Corrects overcrowding & gaps",
        "Gentle on young teeth",
      ],
    },
    {
      title: "Kids Jaw Expanders",
      image: "/images/ortho/expander.png",
      description:
        "Early intervention to create space and guide jaw growth for a healthier, straighter smile.",
      benefits: [
        "Prevent future extractions",
        "Improve speech and breathing",
        "Correct crossbites early",
        "Painless orthopedic growth",
      ],
    },
    {
      title: "Adult Orthodontics",
      image: "/images/ortho/braces.png",
      description:
        "Customized orthodontic solutions for adults who want to enhance their smile and oral health.",
      benefits: [
        "Ceramic & Lingual braces",
        "Metal self-ligating braces",
        "Smile redesign & alignment",
        "Long-term stability planning",
      ],
    },
  ];

  return (
    <section className="relative bg-[#0b1120] text-white py-20 md:py-28 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#d4af37] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Advanced Orthodontics
        </h2>
        <div className="w-16 h-0.5 bg-[#485b51] rounded-full mb-4" />
        <p className="text-gray-400 max-w-2xl mb-14">
          From Invisalign and Junior Aligners to early jaw expansion — we specialize in creating beautiful smiles for all ages with a fully digital workflow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700/60 p-6 rounded-2xl flex flex-col hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="relative rounded-xl mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden bg-white/5 border border-slate-600/50 p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold mb-3 text-lg text-white">{service.title}</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed mb-5 flex-grow">{service.description}</p>
              <ul className="space-y-2 text-[13px] text-gray-400">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4af37] mt-0.5">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}