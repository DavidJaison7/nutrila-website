import { motion } from 'framer-motion';
import { Star, StarHalf, User, UserRound } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Ananya Sharma",
      designation: "Director, Aarogyam Clinic",
      review: "Been working with Nutrila for about a year now. Honestly, their manufacturing process is super smooth. They handled our custom vitamin drops without any fuss. Highly recommend if you want zero headache.",
      gender: "female",
      rating: 5
    },
    {
      name: "Rajesh Iyer",
      designation: "Founder, FitLife India",
      review: "Good turnaround time and decent pricing. Their R&D team helped us fix a flavoring issue with our pre-workout powder that two other manufacturers couldn't figure out. Very satisfied overall.",
      gender: "male",
      rating: 4.5
    },
    {
      name: "Dr. Kavita Desai",
      designation: "Chief Physician, Wellness First",
      review: "We rely on them for our clinic's in-house probiotic range. Quality has been consistent over the last three batches. Just wish the minimum order quantities for custom packaging were slightly lower, but the product itself is top-notch.",
      gender: "female",
      rating: 4
    },
    {
      name: "Vikram Malhotra",
      designation: "CEO, NutriCore Supplements",
      review: "An exceptional manufacturing partner! Sourcing quality herbal ingredients is always tough in this market, but Nutrila has managed to keep the standard incredibly high. My customers love the new ashwagandha line.",
      gender: "male",
      rating: 5
    },
    {
      name: "Dr. Rohan Gupta",
      designation: "Head of Holistic Care Hospital",
      review: "They supply our hospital's post-surgery immunity boosters. Finding a manufacturer with proper cGMP certification who is actually transparent about their sourcing was a relief. Great team to work with.",
      gender: "male",
      rating: 5
    },
    {
      name: "Neha Verma",
      designation: "Owner, Pure Earth Organics",
      review: "From designing the label to the final formulation, their private label service is just brilliant. They really treat your brand like their own. Couldn't be happier with how our vegan protein turned out.",
      gender: "female",
      rating: 5
    }
  ];

  // Duplicate for seamless infinite scroll
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-primary-green uppercase tracking-wider mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Partners Say</h3>
          <p className="text-gray-600">Hear from leading healthcare centers and premium brands who trust our manufacturing.</p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradient fades for edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-6 px-3 w-max"
        >
          {scrollingTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[320px] md:w-[400px] bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green flex-shrink-0 border-2 border-primary-green/20">
                  {testimonial.gender === 'female' ? <UserRound size={26} /> : <User size={26} />}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500">{testimonial.designation}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-6 text-secondary-orange">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>
                    {testimonial.rating >= star ? (
                      <Star size={18} className="fill-secondary-orange text-secondary-orange" />
                    ) : testimonial.rating >= star - 0.5 ? (
                      <StarHalf size={18} className="fill-secondary-orange text-secondary-orange" />
                    ) : (
                      <Star size={18} className="text-secondary-orange" />
                    )}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed flex-grow text-[15px]">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
