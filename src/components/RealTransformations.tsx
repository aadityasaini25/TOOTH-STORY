'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

type TransformationItem = {
  type: 'transformation';
  before?: string;
  after: string;
  title: string;
  description: string;
};

type KidsItem = {
  type: 'kids';
  image: string;
  title: string;
  badge: string;
};

type Item = TransformationItem | KidsItem;

const TRANSFORMATION_ITEMS: Item[] = [
  {
    type: 'kids',
    image: '/img/before-after/certifficate1.png',
    title: 'Kids Care Excellence',
    badge: 'Kids Care'
  },
  {
    type: 'kids',
    image: '/img/before-after/certifficate2.png',
    title: 'Gentle Dentistry',
    badge: 'Kids Care'
  },
  {
    type: 'transformation',
    after: '/img/before-after/beforeafter3.png',
    title: 'Advanced Orthodontics',
    description: 'Professional transformation'
  },
  {
    type: 'transformation',
    after: '/img/before-after/beforeafter4.png',
    title: 'Precision Aligners',
    description: 'Clear path to a perfect smile'
  },
  {
    type: 'transformation',
    after: '/img/before-after/beforeafter5.png',
    title: 'Smile Enhancement',
    description: 'Beautiful results'
  }
];

export default function RealTransformations() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate items for infinite scroll effect (3x to ensure NO gaps even on large screens)
  const allItems = [...TRANSFORMATION_ITEMS, ...TRANSFORMATION_ITEMS, ...TRANSFORMATION_ITEMS];

  return (
    <section className="py-20 md:py-32 bg-[#f8fafb] overflow-hidden relative" id="transformations">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">
              Real Smiles, <span className="text-[#485b51]">Real Transformations</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light">
              From expert orthodontic corrections to gentle kids&apos; care, see the impact of professional dentistry.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-10 group/marquee">
        {/* Gradient Overlays for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#f8fafb] via-[#f8fafb]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#f8fafb] via-[#f8fafb]/80 to-transparent z-20 pointer-events-none" />

        {/* Scrolling Row */}
        <div 
          className="flex w-max"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6 px-3"
            animate={{ x: isPaused ? undefined : [0, '-33.33%'] }}
            transition={{
              x: {
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }
            }}
          >
            {allItems.map((item, idx) => (
              <div 
                key={`${item.title}-${idx}`} 
                className="flex-shrink-0 w-[280px] md:w-[340px]"
              >
                <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-3 border border-gray-100 overflow-hidden h-full group">
                  <div className="p-4 flex flex-col h-full">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] rounded-[18px] overflow-hidden bg-gray-50 mb-5">
                      {item.type === 'transformation' ? (
                        item.before ? (
                          /* Stacked Before/After UI */
                          <div className="grid grid-cols-2 h-full gap-0.5">
                            <div className="relative h-full overflow-hidden">
                              <Image
                                src={item.before}
                                alt="Before"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                              />
                              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm z-10">
                                Before
                              </div>
                            </div>
                            <div className="relative h-full overflow-hidden">
                              <Image
                                src={item.after}
                                alt="After"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                              />
                              <div className="absolute top-3 left-3 bg-[#485b51] text-white text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm z-10">
                                After
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Single After Image UI */
                          <>
                            <Image
                              src={item.after}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute top-3 left-3 bg-[#485b51] text-white text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm z-10">
                              Result
                            </div>
                          </>
                        )
                      ) : (
                        /* Kids Care UI */
                        <>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain p-4 group-hover:scale-110 transition-transform duration-1000"
                          />
                          <div className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-lg z-10">
                            {item.badge}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="px-2 pb-2">
                      <h4 className="text-gray-900 font-bold text-xl mb-1.5 group-hover:text-[#485b51] transition-colors duration-500">
                        {item.title}
                      </h4>
                      {item.type === 'transformation' && (
                        <p className="text-gray-500 text-sm font-light leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      {item.type === 'kids' && (
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mt-1">
                          Gentle Pediatric Care
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats/Badge */}
      <div className="mt-12 text-center overflow-hidden">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                 <div className="w-full h-full bg-[#485b51]/10 flex items-center justify-center text-[10px] font-bold text-[#485b51]">
                   {i}
                 </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm font-medium">
            <span className="text-gray-900 font-bold">1,000+</span> Happy Patients
          </p>
        </motion.div>
      </div>
    </section>
  );
}


