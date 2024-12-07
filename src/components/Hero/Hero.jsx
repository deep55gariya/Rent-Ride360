import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.webp";
import yellowCar from "../../assets/banner-car.webp";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="order-1 sm:order-2">
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt="Car Image"
              loading="lazy"
              width="600"
              height="400"
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p className="text-primary text-2xl font-serif">Effortless</p>
            <h1 className="text-5xl lg:text-7xl font-semibold font-serif">
              Rent Ride360
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800">
              Find your perfect ride and start your journey today! Whether you're
              looking for a car, bike, or scooter, we have a wide selection to
              make your adventure unforgettable.
            </p>
            <button
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
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
