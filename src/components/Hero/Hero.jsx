import React, { useEffect } from "react";
import carPng from "../../assets/car.jpeg";
import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";


const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  }, []); // Run AOS refresh only once for performance.

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* Image Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="800" // Reduced duration
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt="Car"
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p
              data-aos="fade-up"
              data-aos-duration="500" // Fast display
              className="text-primary text-2xl font-serif  ml-5"
            >
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="500" // Faster display
              className="text-5xl lg:text-7xl font-semibold font-serif  ml-5"
            >
              Rent Ride360
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="500" // Removed delay, faster display
              className="text-xl sm:text-2xl font-semibold text-gray-800   ml-5 "
            >
              Find your perfect ride and start your journey today! Whether you're
              looking for a car, bike, or scooter, we have a wide selection to
              make your adventure unforgettable.
            </p>

            {/* Button */}
            <button

              data-aos="fade-up"
              data-aos-duration="500" // Fast button display
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-300 py-2 px-6 text-black  ml-5"
            > 
              Get Started
             
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
