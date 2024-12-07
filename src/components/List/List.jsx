import React, { useState } from "react";
import { FaCar, FaBicycle } from "react-icons/fa"; // For Car and Bike
import { GiScooter } from "react-icons/gi"; // For Scooty
import { Link } from 'react-router-dom'; 

import CarList from "../CarList/CarList";  // Adjust path if necessary
import ScootyList from "../ScootyList/ScootyList";  // Adjust path if necessary

import BikeList from "../BikeList/BikeList";  // Adjust path if necessary


const skillsData = [
  {
    name: "Car",
    icon: (
      <FaCar className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "/cars",
    description: "Experience the luxury and convenience of our premium cars.",
    aosDelay: "0",
    component: <CarList />  // Link to CarList component
  },
  {
    name: "Scooty",
    icon: (
      <GiScooter className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "/scooties",
    description: "Enjoy the freedom and mobility of our modern scooters.",
    aosDelay: "500",
    component: <ScootyList />  // Link to ScootyList component
  },
  {
    name: "Bike",
    icon: (
      <FaBicycle className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "/bikes",
    description: "Feel the thrill of the ride with our top-notch bikes.",
    aosDelay: "1000",
    component: <BikeList />  // Link to BikeList component
  },
];

const List = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle the selection of a category (Car, Scooty, Bike)
  const handleSelection = (component) => {
    setSelectedItem(component);
  };

  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Choose by choice
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
                onClick={() => handleSelection(skill.component)}  // Handle click to set selected component
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <Link
                  to={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Let's Go
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render the selected component here */}
      {/* <div className="mt-12">
        {selectedItem ? selectedItem : <p>Please select a category to view the details.</p>}
      </div> */}
    </>
  );
};

export default List;