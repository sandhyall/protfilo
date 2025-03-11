'use client'
import { Button, Image } from '@heroui/react'; // Ensure this is the correct import for your Button component
import React, { useState, useEffect } from 'react'; // Import useState and useEffect for managing the mobile menu and background color change
import { IoMoonOutline } from 'react-icons/io5';
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';

const Navbar = () => {
  // State to control the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State to control the Moon icon background color and page background
  const [isMoonClicked, setIsMoonClicked] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to toggle Moon icon background color and page background
  const toggleMoonIcon = () => {
    setIsMoonClicked(!isMoonClicked);
  };

  // useEffect to update the background color of the page when isMoonClicked state changes
  useEffect(() => {
    if (isMoonClicked) {
      document.body.classList.add('bg-white'); // Add white background to body
    } else {
      document.body.classList.remove('bg-white'); // Remove white background
    }
  }, [isMoonClicked]);

  return (
    <header className={`text-black shadow-md ${isMoonClicked ? 'bg-gray-800' : 'bg-white'}`}>
      <nav className="flex justify-between items-center p-4 bg-gray-400">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            alt="Logo"
            src="logo.jpg"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <p className={`text-xl font-semibold ${isMoonClicked ? 'text-white' : 'text-black'}`}>Sandhya.</p>
        </div>

        {/* Navigation Buttons (Desktop) */}
        <div className="hidden md:flex gap-6 justify-end flex-1">
          <Button as={Link} href='/Home' className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Home
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button>
          <Button as={Link} href='/Feature' className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Features
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button>
          <Button as={Link} href='/About me' className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>About Me
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button>
          <Button as={Link} href='/Project' className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Projects
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button>
          <Button as={Link} href='/Contactus' className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button>
        </div>

        {/* Right Section (Moon Icon and Menu Icon) */}
        <div className="flex items-center space-x-4">
          {/* Moon Icon with Conditional Background Color */}
          <div
            className={`cursor-pointer p-2 rounded-full ${isMoonClicked ? 'bg-white' : 'bg-transparent'}`}
            onClick={toggleMoonIcon}
          >
            <IoMoonOutline size={30} className={`${isMoonClicked ? 'text-gray-800' : 'text-black'}`} />
          </div>

          {/* Menu Icon for Mobile (Visible on smaller screens) */}
          <div className="block md:hidden ml-3 cursor-pointer" onClick={toggleMobileMenu}>
            <CiMenuFries size={30} className={`${isMoonClicked ? 'text-white' : 'text-black'}`} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Hidden by default, visible when toggled) */}
      <div
        className={`md:hidden fixed top-0 bottom-0 right-0 w-64 bg-green-400 z-50 p-4 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <Button as={Link} href='/Home' className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Home
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
        </Button>
        <Button as={Link} href='/Aboutme' className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>About Me
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
        </Button>
        <Button as={Link} href='/Project' className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Projects
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
        </Button>
        <Button as={Link} href='/Contactus' className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Contact Us
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
