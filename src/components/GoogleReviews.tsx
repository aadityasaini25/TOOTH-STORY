import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "bhavin soneji",
      initials: "BS",
      date: "1 month ago",
      review: "I had a great experience. Dr Nikunj was extremely professional and very gentle while treating me, which made me feel comfortable throughout the procedure. I truly appreciate the care and attention given."
    },
    {
      name: "Tejas Pansuriya",
      initials: "TP",
      date: "3 months ago",
      review: "I visited Tooth Story for my first-ever teeth cleaning, and the experience was really smooth. From explaining why certain things were happening to the actual cleaning process, everything was handled very well. They made me feel comfortable throughout the procedure. I would totally recommend visiting for a brighter smile and any other dental care needs."
    },
    {
      name: "dixita dubal",
      initials: "DD",
      date: "5 months ago",
      review: "Good experience for my root canal and cap treatment. Doctor was very gentle and patient to me and I was very comfortable and painfree during and after the procedure. Overall a great experience to recommend for any teeth problems."
    },
    {
      name: "Maanit Agrawal",
      initials: "MA",
      date: "7 months ago",
      review: "Tooth story is a great place for you to get your teeth corrected. Dr. Nikunj was very helpful in the entire process, where he often behaved like an elder brother. He was very accommodative, where he helped me schedule appointments keeping in mind my academic engagements. He has a very calm and composed approach and maintains a very professional environment"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#485b51] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Testimonials</p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Image
            src="/images/google.png"
            alt="Google"
            width={112}
            height={38}
            className="object-contain opacity-90"
          />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Patient Experiences</h2>
        </div>
        <div className="w-16 h-0.5 bg-[#d4af37] rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg bg-[#485b51]">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">{review.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
              <div className="flex text-[#d4af37] mb-4 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed font-light flex-grow">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}