import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    // Close the menu
    setIsOpen(false);
    // Scroll to the specified section
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar Toggle Button */}
      <nav className="fixed right-6 top-6 z-40">
        <button
          onClick={toggleMenu}
          className={`p-2 flex transition duration-300 transform ${
            isOpen ? 'bg-gray-800 text-white rotate-90' : 'bg-white text-black shadow-md'
          } rounded-lg focus:outline-none`}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
        </button>
      </nav>

      {/* Full-Screen Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white transition-all duration-300 ease-in-out">
          <ul className="space-y-8 text-center text-2xl font-semibold p-0">
            <li
              onClick={() => scrollToSection('/')}
              className="cursor-pointer hover:text-green-400 transition duration-200"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection('about')}
              className="cursor-pointer hover:text-green-400 transition duration-200"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection('projects')}
              className="cursor-pointer hover:text-green-400 transition duration-200"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection('skills')}
              className="cursor-pointer hover:text-green-400 transition duration-200"
            >
              Skills
            </li>
            <li
              onClick={() => scrollToSection('contact')}
              className="cursor-pointer hover:text-green-400 transition duration-200"
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
