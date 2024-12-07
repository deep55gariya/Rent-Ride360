import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage";
import CarList from "./components/CarList/CarList";
import ScootyList from "./components/ScootyList/ScootyList"; // ScootyList component
import BikeList from "./components/BikeList/BikeList"; // BikeList component

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/scooties" element={<ScootyList />} />
          <Route path="/bikes" element={<BikeList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


