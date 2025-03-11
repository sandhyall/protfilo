'use client'
import { Image } from '@heroui/react'
import React from 'react'

const Pageaboutus = () => {
  return (
    <div className='w-full min-h-screen py-20 px-4 sm:px-8 bg-gray-300 text-black'>
      {/* Main Content Container */}
      <div className=''>
        
        <div className='flex justify-center mb-12'>
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 overflow-hidden rounded-full border-4 border-gray-200">
            <Image
              alt="Sandhya"
              src="/sandhya.png"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-8'>About Me</h1>

        {/* Text Content */}
        <div className='space-y-6 mb-12'>
          <p className='text-lg leading-relaxed text-center'>
            I am a front-end developer with a strong passion for the field and a fresh perspective.
            Currently, I am a third-year CSIT student, which has allowed me to learn and grow both 
            academically and professionally. Throughout my studies, I have had the privilege of 
            exploring various technologies and frameworks. This journey has been key to my personal 
            and professional development.
          </p>

          {/* Skills Section */}
          <div className='flex flex-wrap justify-center gap-4'>
            {['HTML & CSS', 'React Js', 'Javascript', 'Next Js','Tailwind CSS'].map((skill) => (
              <div 
                key={skill}
                className='px-4 py-2 bg-gray-200 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
          <div className='p-4 bg-blue-100 rounded-lg'>
            <h2 className='text-xl font-bold mb-2'>Fresher</h2>
            <p className='text-gray-600 text-sm'>Starting my development journey</p>
          </div>
          <div className='p-4 bg-pink-100 rounded-lg'>
            <h2 className='text-xl font-bold mb-2'>Education</h2>
            <p className='text-gray-600 text-sm'>B.Sc. CSIT (3rd Year)</p>
          </div>
          <div className='p-4 bg-green-100 rounded-lg'>
            <h2 className='text-xl font-bold mb-2'>4+ Projects</h2>
            <p className='text-gray-600 text-sm'>Completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pageaboutus