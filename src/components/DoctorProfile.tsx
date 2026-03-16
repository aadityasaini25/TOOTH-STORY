import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center md:text-left mb-12">
          <p className="text-[#72b1b1] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Specialist</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Meet Your Doctor</h2>
          <div className="w-16 h-0.5 bg-[#72b1b1] rounded-full mx-auto md:mx-0" />
          <p className="mt-4 text-gray-600 max-w-3xl text-sm md:text-base">
            Expert orthodontic and pediatric dental care led by{" "}
            <span className="font-semibold">Dr. Nikunj Maniyar (BDS, MDS – Orthodontist & Pedodontist)</span>, 
            a Gold Medalist specialist with over 6 years of experience.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center md:items-start">
            <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-100">
                <Image
                  src="/images/doctor/NIKUNJ.jpeg"
                  alt="Dr. Nikunj Maniyar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                Dr. Nikunj Maniyar
              </h3>
              <p className="text-[#72b1b1] font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-4">
                BDS, MDS – Orthodontist & Pedodontist
              </p>
              <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  Dr. Nikunj Maniyar is a Gold Medalist Orthodontist and a certified Invisalign provider, specializing in both adult and pediatric orthodontics. With over 6 years of experience, he brings a unique combination of clinical excellence and a gentle, patient-focused approach.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#72b1b1] mt-1">✓</span>
                    <span>Gold Medalist in-house Orthodontist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#72b1b1] mt-1">✓</span>
                    <span>Certified Invisalign & Junior Aligners Specialist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#72b1b1] mt-1">✓</span>
                    <span>Expertise in Kids Expanders & Early Orthodontics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#72b1b1] mt-1">✓</span>
                    <span>Recognized for Excellence with Multiple Awards</span>
                  </li>
                </ul>
                <p>
                  Being a specialist in Kids Orthodontics, he ensures a calm and positive environment for children, making their dental journey comfortable and fear-free.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={onBookAppointment}
            className="bg-[#72b1b1] text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-[#5a8d8d] transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Free Smile Consultation
          </button>
        </div>
      </div>
    </section>
  );
}