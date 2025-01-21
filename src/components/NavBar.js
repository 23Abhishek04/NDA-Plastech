import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NDA from "./assest/NDA.png";
import rightlogo from "./assest/rightlogo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Top Header Section */}
      <div className="w-full bg-white">
        {/* Top Bar */}
        <div className="hidden w-full md:flex h-11">
          {/* Left Section */}
          <div className="w-8/12 h-4 bg-blue-950"></div>

          {/* Right Section */}
          <div className="flex items-center justify-between w-5/12 pr-8 bg-blue-950 h-11">
            {/* Decorative Element */}
            <div
              className="w-10 h-8 mt-5 bg-white"
              style={{
                clipPath: "polygon(0 0, 5% 0, 100% 100%, 0 100%)",
              }}
            ></div>

            {/* Social Media Links */}
            <div className="items-center hidden space-x-4 md:flex">
              <a
                href="https://www.facebook.com/profile.php?id=61553223065692"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-blue-600 rounded-3xl hover:bg-blue-700"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/nda-plastech/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-blue-800 rounded-3xl hover:bg-blue-900"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/ndaplastech2/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-pink-600 rounded-3xl hover:bg-pink-700"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            {/* Contact Information */}
            <div className="items-center hidden space-x-4 md:flex">
              <span className="flex items-center space-x-2">
                <i className="text-orange-700 fa-solid fa-phone"></i>
                <span className="text-white">+919923101417</span>
              </span>
              <span className="flex items-center space-x-2">
                <i className="text-orange-700 fa-solid fa-envelope"></i>
                <span className="text-white">enquiry@ndaplastech.com</span>
              </span>
            </div>
          </div>
        </div>

        {/* Logo and Main Navbar */}
        <div className="relative flex items-center justify-between py-2 px-14 md:flex-nowrap">
          {/* Logo Section - Centered on Mobile */}
          <div className="absolute overflow-hidden transform -translate-x-1/2 md:ml-16 md:static left-1/2">
            <img
              src={NDA}
              alt="NDA Logo"
              className="h-16 mt-1 w-36 md:w-48 md:h-20"
            />
            <div className="font-sans text-sm font-bold transform -translate-y-1/2 top-1/2 whitespace-nowrap animate-slide">
              Innovative Products. Global Needs
            </div>
          </div>

          {/* Hamburger Menu - Right on Mobile */}
          <button
            className="block p-2 text-2xl md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Navigation Links - Display as List on Mobile */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-white md:static md:flex md:items-center md:space-x-4 md:w-auto`}
          >
            <Link
              to="/"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              <i className="fa-solid fa-house mr-1.5 text-sm"></i>Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              About Us
            </Link>
            <Link
              to="/product"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              Products
            </Link>
            <Link
              to="/client"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              Client
            </Link>
            <Link
              to="/gallery"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              Gallery
            </Link>
            <Link
              to="/enquiry"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              Enquiry
            </Link>
            <Link
              to="/blog"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              <i className="fa-solid fa-blog mr-1.5 text-sm"></i>Blog
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-lg font-semibold tracking-wide text-center transition-colors duration-500 ease-in-out hover:text-orange-700 md:inline"
            >
              <i className="mr-1 text-sm fa-solid fa-phone"></i> Contact Us
            </Link>
          </div>

          {/* Right Logo (Visible Only on Desktop) */}
          <div className="hidden md:block">
            <img src={rightlogo} alt="Right Logo" className="h-16 md:h-20" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
