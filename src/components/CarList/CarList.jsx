import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    id: 1,
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    fuel: "Petrol",
    model: "2023",
    distance: "12Km",
  },
  {
    id: 2,
    name: "KIA UX",
    price: 140,
    image: car2,
    fuel: "Diesel",
    model: "2022",
    distance: "15Km",
  },
  {
    id: 3,
    name: "Audi Q5",
    price: 120,
    image: car3,
    fuel: "Electric",
    model: "2023",
    distance: "18Km",
  },
];

const CarList = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (car) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === car.id);

    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity
    } else {
      updatedCart.push({ ...car, quantity: 1 }); // Add new item with quantity 1
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="pb-24">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center">
          Choose Your Perfect Car
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((data) => (
            <div
              key={data.id}
              className="border-2 p-6 rounded-xl bg-white shadow-lg"
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-[200px] object-cover mb-4 rounded-lg"
              />
              <h1 className="text-xl font-semibold">{data.name}</h1>
              <p>{data.model} Model</p>
              <p>{data.fuel}</p>
              <p className="text-lg font-semibold">${data.price}/Day</p>
              <button
                onClick={() => addToCart(data)}
                className="mt-4 py-2 px-4 bg-primary text-white rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={goToCart}
          className="mt-8 py-3 px-8 bg-primary text-white rounded-lg"
        >
          View Cart
        </button>
      </div>
    </div>
  );
};

export default CarList;
