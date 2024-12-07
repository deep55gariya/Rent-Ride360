import React from "react";
import whiteCar from "../../assets/bike1.jpg";
import car2 from "../../assets/bike2.jpg";
import car3 from "../../assets/bike3.jpg";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    fuel: "Petrol",
    model: "2023",
    distance: "12Km",
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    fuel: "Diesel",
    model: "2022",
    distance: "15Km",
    aosDelay: "500",
  },
  {
    name: "Audi Q5",
    price: 120,
    image: car3,
    fuel: "Electric",
    model: "2023",
    distance: "18Km",
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center"
        >
          Choose Your Perfect Car
        </h1>
        <p
          data-aos="fade-up"
          aos-delay="400"
          className="text-sm pb-10 text-center text-gray-500"
        >
          Find the best cars for your adventure with affordable prices.
        </p>

        {/* Car listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="space-y-4 border-2 border-gray-300 hover:border-primary p-6 rounded-xl relative group bg-white shadow-lg transition-all duration-300"
            >
              <div className="w-full h-[200px] mb-4 relative overflow-hidden rounded-lg">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="space-y-2">
                <h1 className="text-primary font-semibold text-xl">{data.name}</h1>
                <div className="flex justify-between items-center text-lg font-medium text-gray-700">
                  <p>{data.model} Model</p>
                  <p>{data.fuel}</p>
                </div>
                <div className="flex justify-between items-center text-xl font-semibold text-gray-700">
                  <p>${data.price}/Day</p>
                </div>
                <p className="text-lg font-semibold text-gray-500">{data.distance}</p>
              </div>

              <div className="absolute top-3 left-3 text-white bg-black py-1 px-3 rounded-lg">
                12Km
              </div>

              {/* Book Now Button */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
                <button className="py-2 px-6 text-white bg-primary rounded-lg w-full group-hover:w-[130%] group-hover:bg-dark-primary transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* End of car listing */}

        <div className="grid place-items-center mt-8">
          <button
            data-aos="fade-up"
            className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
