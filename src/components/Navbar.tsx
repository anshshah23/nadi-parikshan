"use client";
import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

interface MenuLink {
  id: number;
  name: string;
  link: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const MenuLinks: MenuLink[] = [
    { id: 1, name: "Home", link: "" },
    { id: 2, name: "Chat", link: "chat" },
    { id: 3, name: "Nadi Doctors", link: "doctors" },
    { id: 4, name: "PreviousChats", link: "calendar" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 800) {
      setIsOpen(false); // Close the menu on resize for larger screens
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <nav
          className={`fixed top-0 mt-0 md:mt-4 w-full ${isOpen ? 'h-[100vh]' : ''} md:max-w-max md:px-8 z-50 transition duration-300 lg:rounded-full ${isScrolled
            ? 'bg-black/70 border-white/40 border-1 text-white shadow-md shadow-opacity-30 shadow-black backdrop-blur-sm'
            : `${isDarkMode
              ? 'md:opacity-80 bg-black/80 text-white backdrop-blur-md'
              : 'md:opacity-80 bg-white/80 text-black backdrop-blur-md'
            }`
            }`}
        >
          <div className="container flex justify-between lg:justify-center items-center p-3">
            <div className="flex lg:hidden items-center justify-start left-0">
              <a
                href="/"
                className={`text-xl ${
                  isDarkMode
                    ? "text-white"
                    : `${isScrolled ? "text-white" : "text-black"}`
                } font-bold items-center flex`}
              >
                Prakriti<span className="text-gold pl-1"> Wellness</span>
              </a>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              {MenuLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/${link.link || ""}`}
                  className={`${
                    isDarkMode
                      ? "text-white"
                      : `${isScrolled ? "text-white" : "text-black"}`
                  } text-lg font-semibold pr-4 md:pr-8 lg:pr-12 xl:pr-16 relative group`}
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                  <span className="block absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-1/2 transition-all duration-300 ease-in-out"></span>
                </a>
              ))}
              <div className="hidden lg:flex items-center justify-end">
                <button
                  onClick={handleDarkMode}
                  className={`${
                    isDarkMode
                      ? "text-gold hover:text-white"
                      : `${
                          isScrolled ? "text-white" : "text-black"
                        } hover:text-gold`
                  } focus:outline-none`}
                >
                  {isDarkMode ? (
                    <SunIcon className="w-6 h-6" />
                  ) : (
                    <MoonIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            <div className="hidden lg:block"></div>
            {/* Mobile Menu Toggle Button (Hamburger) */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`text-gray-800 focus:outline-none ${
                  isOpen ? "hidden" : "block"
                }`}
                aria-label="Toggle Menu"
              >
                <svg
                  className={`w-6 h-6 transition-transform transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  } duration-300`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed lg:hidden inset-0 z-50 p-4 h-screen transform opacity-100 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
              } ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
          >
            {/* Dark Mode Toggle Button in Mobile */}
            <div className="absolute top-4 left-4">
              <button
                onClick={handleDarkMode}
                className={`${
                  isDarkMode
                    ? "text-gold hover:text-white"
                    : `${
                        isScrolled ? "text-gold" : "text-black"
                      } hover:text-gold`
                } focus:outline-none`}
              >
                {isDarkMode ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Close (Cross) Button on Right */}
            <div className="absolute top-4 right-4">
              <button
                title="Closemenu"
                type="button"
                onClick={toggleMenu}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col justify-center items-center">
              {MenuLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/${link.link || ""}`}
                  className="text-gray-600 text-md font-semibold pr-4 md:pr-8 lg:pr-12 xl:pr-16 relative group pt-10"
                  aria-label={`Navigate to ${link.name}`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
