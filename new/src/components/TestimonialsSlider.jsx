 import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content: "Absolutely love this free service! Created beautiful Christmas cards for my entire team without spending a dime.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Small Business Owner",
    content: "The preview feature is fantastic. I can see exactly what my clients will receive before sending.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Event Planner",
    content: "Completely free and better than paid services. The templates are gorgeous and professional.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Teacher",
    content: "Used it for classroom holiday cards. Parents loved the personalized touch. Best free tool ever!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Freelancer",
    content: "The quality is incredible for a free service. Saves me so much time and money on client greetings.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5"
  }
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
        What Our Users Say
      </h2>
      <p className="text-xl text-center text-slate-600 mb-12">
        Loved by thousands, completely free forever
      </p>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-200 shadow-xl">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow"
                    />
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-slate-600">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        {renderStars(testimonial.rating)}
                        <span className="ml-2 text-slate-600 font-medium">{testimonial.rating}.0</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-[#002D89] w-8' 
                  : 'bg-blue-200'
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg border border-blue-200 hover:bg-blue-50 transition"
        >
          <svg className="w-6 h-6 text-[#002D89]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg border border-blue-200 hover:bg-blue-50 transition"
        >
          <svg className="w-6 h-6 text-[#002D89]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}