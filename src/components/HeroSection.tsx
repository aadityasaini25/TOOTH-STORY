import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-10 md:mb-12">
        <p className="text-[#72b1b1] font-semibold text-sm uppercase tracking-[0.2em] mb-4">Tooth Story – Dental Clinic For All</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Building Bright Smiles<br className="hidden md:block" />
          <span className="text-[#72b1b1]">from the Start</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          Where we combine cutting-edge technology with compassionate care to craft perfect smiles with precision and comfort. Specializing in Braces, Aligners, and Pediatric Dentistry.
        </p>
      </div>

      <div className="md:flex md:items-center md:justify-center md:gap-16 md:mb-12 max-w-5xl mx-auto">
        <div className="relative rounded-2xl aspect-[9/16] md:aspect-auto md:h-[450px] md:w-[260px] mx-auto md:mx-0 mb-8 md:mb-0 md:flex-initial overflow-hidden shadow-2xl ring-1 ring-black/5">
          <div className="bg-black w-full h-full flex items-center justify-center">
            <video
              className="w-full h-full object-cover"
              src="/videos/My Movie.mp4"
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="relative md:w-[400px]">
          <div className="bg-[#2d3e40] text-white p-8 md:p-10 rounded-2xl shadow-xl border border-[#72b1b1]/20">
            <h2 className="text-lg font-semibold text-[#72b1b1] uppercase tracking-widest mb-6">Our Specializations</h2>
            <ul className="space-y-5 mb-10 text-[15px] text-gray-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#72b1b1] mt-0.5">—</span>
                Certified Invisalign Provider
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#72b1b1] mt-0.5">—</span>
                Junior Aligners & Kids Expanders
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#72b1b1] mt-0.5">—</span>
                iTero Scanner - See Your Future Smile
              </li>
            </ul>
            <button
              onClick={onBookAppointment}
              className="w-full bg-[#72b1b1] text-white px-6 py-4 rounded-xl text-base font-semibold hover:bg-[#5a8d8d] transition-colors"
            >
              Get Your Smile Simulation
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mt-12 md:mt-14">
        <button
          onClick={onBookAppointment}
          className="bg-[#72b1b1] text-white py-4 px-10 rounded-xl font-semibold text-base shadow-lg hover:bg-[#5a8d8d] transition-colors md:min-w-[220px]"
        >
          Book Appointment
        </button>
        <a
          href="tel:+919023523178"
          className="bg-white text-[#72b1b1] border-2 border-[#72b1b1] py-4 px-10 rounded-xl font-semibold text-base text-center hover:bg-[#f1f7f7] transition-colors md:min-w-[220px]"
        >
          Call +91 90235 23178
        </a>
      </div>
    </section>
  );
}