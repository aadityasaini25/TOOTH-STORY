'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do Invisalign aligners work?",
      answer:
        "Invisalign uses a series of custom-made, clear plastic trays to gradually shift your teeth into the desired position. Each set is worn for about 1-2 weeks before moving to the next in the series.",
    },
    {
      question: "What is the right age for a child's first orthodontic evaluation?",
      answer:
        "The American Association of Orthodontists recommends a first check-up by age 7. Early evaluation allows us to detect potential issues and intervene at the optimal time for the best results.",
    },
    {
      question: "How long will my orthodontic treatment take?",
      answer:
        "Treatment duration varies based on the complexity of the case. On average, Invisalign or braces treatment takes between 12 to 24 months, though some minor corrections can be completed in as little as 6 months.",
    },
    {
      question: "Can I eat normally with braces or aligners?",
      answer:
        "With Invisalign, you remove the trays to eat, so there are no dietary restrictions. With traditional braces, we recommend avoiding very hard, sticky, or crunchy foods to prevent damage to the brackets and wires.",
    },
    {
      question: "Are clear aligners as effective as traditional metal braces?",
      answer:
        "Yes, for most cases, modern clear aligners are just as effective as traditional braces. During your consultation, we will determine which option is best suited for your specific dental needs.",
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900">
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card !p-0 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 text-left font-bold hover:bg-emerald-50 transition-colors flex justify-between items-center group"
              >
                <span className="flex-grow pr-4 text-lg md:text-xl text-gray-800 group-hover:text-[#485b51] transition-colors">{faq.question}</span>
                <span className={`w-8 h-8 rounded-full border border-emerald-100 flex items-center justify-center text-[#485b51] transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180 bg-[#485b51] text-white' : ''}`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-8 md:px-8 md:pb-10 bg-white">
                  <div className="w-full h-px bg-emerald-50 mb-8"></div>
                  <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}