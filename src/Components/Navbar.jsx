import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-6 py-4 md:px-20">
      <span className="text-xl font-bold tracking-wide"></span>

      {/* Menu Items */}
      <ul
        className={`${
          menu ? "block bg-[#0c0e19] bg-opacity-50" : "hidden"
        } absolute top-16 left-0 w-full text-center md:static md:flex md:gap-6 md:w-auto md:bg-transparent`}
      >
        <a href="#about">
          <li className="text-md py-2 md:py-0 hover:text-blue-500">About</li>
        </a>
        <a href="#CompetitiveProgramming">
          <li className="text-md py-2 md:py-0 hover:text-blue-500">
            Competitive Programming
          </li>
        </a>
        <a href="#experience">
          <li className="text-md py-2 md:py-0 hover:text-blue-500">
            Experience
          </li>
        </a>
        <a href="#projects">
          <li className="text-md py-2 md:py-0 hover:text-blue-500">Projects</li>
        </a>
        <a href="#contact">
          <li className="text-md py-2 md:py-0 hover:text-blue-500">Contact</li>
        </a>
      </ul>

      {/* Toggle Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenu(!menu)}
        aria-label="Toggle Menu"
      >
        <FontAwesomeIcon icon={menu ? faTimes : faBars} />
      </button>
    </nav>
  );
};

export default Navbar;
