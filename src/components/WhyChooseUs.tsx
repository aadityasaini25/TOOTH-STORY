const points = [
  {
    title: "Gold Medalist Specialist",
    desc: "Your care is led by Dr. Nikunj Maniyar, a Gold Medalist Orthodontist & Pedodontist with 6 years of experience. Specialist in complex adult and kids orthodontic cases.",
  },
  {
    title: "iTero Smile Simulation",
    desc: "We use the advanced iTero Scanner to create 3D digital impressions. See your future smile even before starting your Invisalign treatment!",
  },
  {
    title: "Kids-Friendly Environment",
    desc: "Expertise in pediatric dentistry ensures a calm, positive, and fear-free experience for your little ones. Specialists in Junior Aligners and kids' jaw growth.",
  },
  {
    title: "Affordable Premium Care",
    desc: "Get world-class Invisalign treatment starting at ₹90,000. Benefit from our limited-time special offer of 20% off on Invisalign treatments.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f1f7f7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <p className="text-[#72b1b1] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Why Tooth Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Why Choose Tooth Story
          </h2>
          <div className="w-16 h-0.5 bg-[#72b1b1] rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {points.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200/80 transition-all duration-300"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
