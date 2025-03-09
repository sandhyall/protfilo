'use client'
import { Image } from '@heroui/react';
import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoLogoLinkedin, IoLogoJavascript } from 'react-icons/io5';
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder', 'Frontend Developer', 'Tech Enthusiast'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full pt-10 pb-20 flex flex-col items-center justify-center border-b border-black bg-gray-300 text-black">
      {/* Image Section */}
      <div className="flex items-center justify-center">
        <Image
          alt="Logo"
          src="logo.jpg"
          className="w-48 h-48 object-cover rounded-full" // Tailwind classes for size and styling
        />
      </div>

      {/* Text Section */}
      <div className="mt-6 text-center">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl font-bold mt-2">
          Hi, I'm <span className="text-designColor capitalize text-red-500">Sandhya Dahal</span>
        </h1>
        <h2 className="text-2xl font-bold mt-2">
          a <span className="text-red-500">{text}</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          I am a dedicated front-end developer with a strong foundation in web technologies. As a fresher, I am eager to apply my skills to build responsive and user-friendly applications.
        </p>
      </div>

      {/* Combined Social Media and Skills Section */}
      <div className="mt-8 w-full max-w-2xl mx-auto flex justify-around items-center">
        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
          <div className="flex space-x-4 justify-center">
            
            <a
              href="https://www.facebook.com/profile.php?id=100056029621061"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600"
            >
              <FaFacebook size={24} />
            </a>
           
            <a
              href="https://www.linkedin.com/in/sandhya-dahal-04aa62292"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600"
            >
              <IoLogoLinkedin size={24} />
            </a>
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h2 className="text-base uppercase font-titleFont mb-4">Best skill on</h2>
          <div className="flex space-x-4 justify-center">
           
            <span className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              <FaReact size={24} />
            </span>
          
            <span className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              <FaHtml5 size={24} />
            </span>
            
            <span className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              <FaCss3 size={24} />
            </span>
            
            <span className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              <IoLogoJavascript size={24} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;