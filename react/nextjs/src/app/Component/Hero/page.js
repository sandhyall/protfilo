'use client';
import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { FaFacebook, FaTwitter, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { IoLogoLinkedin, IoLogoJavascript } from 'react-icons/io5';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder', 'Frontend Developer', 'Tech Enthusiast'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full pt-10 pb-20 flex flex-col items-center justify-center border-b border-black bg-gray-300 text-black px-4">
      {/* Image Section */}
      <div className="flex items-center justify-center">
        <img
          alt="Profile"
          src="/logo.jpg" // Ensure the image is in the public directory
          className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="mt-6 text-center">
        <h4 className="text-lg font-normal text-gray-700">WELCOME TO MY WORLD</h4>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">
          Hi, I'm <span className="text-red-500 capitalize">Sandhya Dahal</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mt-2">
          A <span className="text-red-500">{text}</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          I am a dedicated front-end developer with a strong foundation in web technologies. As a fresher, 
          I am eager to apply my skills to build responsive and user-friendly applications.
        </p>
      </div>

      {/* Combined Sections */}
      <div className="mt-8 w-full max-w-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-sm uppercase font-semibold mb-3 text-gray-600">Find me on</h2>
          <div className="flex space-x-4">
            <SocialIcon 
              href="https://www.facebook.com/profile.php?id=100056029621061"
              icon={<FaFacebook size={24} />}
            />
            <SocialIcon 
              href="https://www.linkedin.com/in/sandhya-dahal-04aa62292"
              icon={<IoLogoLinkedin size={24} />}
            />
            <SocialIcon 
              href="https://twitter.com"
              icon={<FaTwitter size={24} />}
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h2 className="text-sm uppercase font-semibold mb-3 text-gray-600">Expert in</h2>
          <div className="flex space-x-4">
            <SkillIcon icon={<FaReact size={24} />} />
            <SkillIcon icon={<FaHtml5 size={24} />} />
            <SkillIcon icon={<FaCss3 size={24} />} />
            <SkillIcon icon={<IoLogoJavascript size={24} />} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 hover:text-blue-600"
  >
    {icon}
  </a>
);

// Reusable Skill Icon Component
const SkillIcon = ({ icon }) => (
  <span className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 hover:text-blue-600">
    {icon}
  </span>
);

export default Hero;