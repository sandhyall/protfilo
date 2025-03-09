'use client'
import { Button ,Image} from '@heroui/react'; // Ensure this is the correct import for your Button component
import React, { useState, useEffect } from 'react'; // Import useState and useEffect for managing the mobile menu and background color change
import { MdArrowOutward } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';
import { CiMenuFries } from 'react-icons/ci';

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
      <nav className="flex justify-between items-center p-2 bg-gray-400">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            alt="Logo"
            src="logo.jpg"
            style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '50%' }}
          />
          <p className={`text-xl font-semibold ${isMoonClicked ? 'text-white' : 'text-black'}`}>Sandhya.</p>
        </div>

        {/* Navigation Buttons (Desktop) */}
        <div className="hidden md:flex gap-6 justify-end flex-1">
          <Button className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Home
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button>
          <Button className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Features
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button>
          <Button className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Aboutme
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button>
          <Button className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>projects
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button>
          <Button className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Contactus
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span> 
          </Button><br/> <br/>
        </div>

        {/* Right Section (Moon Icon and Contact) */}
        <div className="flex items-center space-x-4">

          {/* Moon Icon with Conditional Background Color */}
          <div
            className={`cursor-pointer p-2 rounded-full ${isMoonClicked ? 'bg-white' : 'bg-transparent'}`}
            onClick={toggleMoonIcon}
          >
            <IoMoonOutline size={30} className={`${isMoonClicked ? 'text-gray-800' : 'text-black'}`} />
          </div>

          {/* Contact Section */}
          {/* <div className={`flex items-center space-x-2 w-24 h-24 rounded-full shadow-lg p-2 cursor-pointer font-mono border ${isMoonClicked ? 'bg-gray-700' : 'bg-gray-100'} hover:bg-gray-200 transition-colors`}>
            <MdArrowOutward size={30} className={`${isMoonClicked ? 'text-white' : 'text-gray-800'}`} />
            <p className={`${isMoonClicked ? 'text-white' : 'text-gray-800'} font-bold`}>Contact</p>
          </div> */}

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
        <Button className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>Home
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button> <br/> <br/>
          <Button className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>ABOUT ME
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button><br/> <br/>
          <Button className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>PROJECT
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button><br/> <br/>
          <Button className={`text-black hover:text-red-700 focus:outline-none transition-all duration-300 relative ${isMoonClicked ? 'text-white' : 'text-black'}`}>CONTACT ME
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
          </Button>
      </div>
    </header>
  );
};

export default Navbar;
