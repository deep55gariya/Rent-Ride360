import React, { useEffect, useState, useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage";
import CarList from "./components/CarList/CarList";
import ScootyList from "./components/ScootyList/ScootyList";
import BikeList from "./components/BikeList/BikeList";
import ResponsiveMenu from "./components/Navbar/ResponsiveMenu"; // ResponsiveMenu import

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false); // Menu ke liye state
  const menuRef = useRef(null); // Reference for ResponsiveMenu

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

  // Close the menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden relative">
        {/* Navbar */}
        <Navbar theme={theme} setTheme={setTheme} setShowMenu={setShowMenu} />

        {/* Responsive Menu */}
        {showMenu && (
          <div ref={menuRef}>
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
          </div>
        )}

        {/* Routes */}
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
