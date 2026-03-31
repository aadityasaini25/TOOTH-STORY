import Image from 'next/image';

export default function RealTransformations() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#f8fafb]" id="transformations">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 leading-tight">
            Real Smiles, <span className="text-[#485b51]">Real Transformations</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg font-light">
            Results you can see. Care you can trust.
          </p>
        </div>

        {/* Before & After Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          {/* Before Card */}
          <div className="relative group fade-up stagger-1">
            <div className="bg-white p-4 rounded-[20px] shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-gray-50 flex items-center justify-center">
                <Image
                  src="/img/before-after/beforeafter1.png"
                  alt="Before treatment"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="relative group fade-up stagger-2">
            <div className="bg-white p-4 rounded-[20px] shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-gray-50 flex items-center justify-center">
                <Image
                  src="/img/before-after/beforeafter2.png"
                  alt="After treatment"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Kids Section Heading */}
        <div className="text-center mb-10 fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Our <span className="text-[#485b51]">Kids Section</span>
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base font-light mt-2">
            Gentle care for the brightest young smiles.
          </p>
        </div>

        {/* Kids Section Row */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Kid Card 1 */}
          <div className="group fade-up stagger-3">
            <div className="bg-white p-4 rounded-[20px] shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="relative aspect-video w-full overflow-hidden rounded-[16px] bg-gray-50 flex items-center justify-center">
                <Image
                  src="/img/before-after/certifficate1.png"
                  alt="Gentle care for growing smiles"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Kid Card 2 */}
          <div className="group fade-up stagger-4">
            <div className="bg-white p-4 rounded-[20px] shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="relative aspect-video w-full overflow-hidden rounded-[16px] bg-gray-50 flex items-center justify-center">
                <Image
                  src="/img/before-after/certifficate2.png"
                  alt="Comfortable and child-friendly treatments"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
