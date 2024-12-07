import React from "react";

const testimonialData = [
  {
    name: "Dilshad",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    name: "Satya",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    name: "Sabir",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iure consectetur tempora amet.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((testimonial, index) => (
              <div
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={index * 200} // Optimized delay
                className="card text-center space-y-4 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 rounded-lg duration-300"
              >
                <div className="grid place-items-center">
                  <img
                    src="https://via.placeholder.com/100"
                    alt={testimonial.name}
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{testimonial.description}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
