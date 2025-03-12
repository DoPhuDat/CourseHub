import React from "react";
import { assets, dummyTestimonial } from "../../assets/img/assets";

export const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-medium text-gray-800">Testimonials</h2>
      <p className="md:text-base text-gray-500 mt-3">
       Hear from our learners as they share their journeys of transformation, success, and how our <br /> platform has made a difference in their lives.
       </p>
  
  <div className="grid grid-cols-auto gap-8 mt-14">
    {dummyTestimonial.map((testimonial, index) => (
      <div key={index} className="text-sm text-left border border-gray-500/30  rounded-lg bg-white shadow-lg overflow-hidden">
        <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10 rounded-t-lg">
          <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
          <div>
            <h1 className="text-lg font-medium text-gray-800">{testimonial.name}</h1>
            <p className="text-gray-800/80">{testimonial.rule}</p>
          </div>
        </div>
        <div className="p-5 pb-7">
          {/* Rating */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <img
                className="h-5"
                key={i}
                src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                alt="star"
              />
            ))}
          </div>

          {/* Feedback */}
          <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
          <a href="#" className="text-blue-500 mt-4 inline-block underline">Read more</a>
        </div>
      </div>
    ))}
  </div>
</div>


  );
};

export default TestimonialsSection;