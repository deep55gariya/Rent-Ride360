import React, { useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const menuRef = useRef(null); // Reference for the menu

  // Screen pe kahi bhi click kare to menu close ho
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the click happened outside the menu
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    // Add event listener when menu is open
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu, setShowMenu]);

  return (
    <div
      ref={menuRef} // Attach the menu reference
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[50%] flex-col justify-between 
      bg-white dark:bg-gray-900 dark:text-white px-4 pb-4 pt-12 text-black 
      transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-2">
          <FaUserCircle size={40} /> {/* Icon size chhota kiya */}
          <div>
            <h1 className="text-lg">Hello User</h1> {/* Text size reduce */}
            <h1 className="text-xs text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-8">
          <ul className="space-y-3 text-base"> {/* Link size reduce */}
            {Navlinks.map((data, index) => (
              <li key={index}>
                <a href={data.link} className="inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1 className="text-xs">
          Made with ❤ by{" "}
          <a href="https://deep55gariya.github.io/" className="underline">
            Deepak
          </a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
