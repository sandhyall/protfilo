import React from 'react'
import Card from '../Card/page'
import { FaGlobe } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Page = () => {
  return (
    <div>
      <section 
        id='features' 
        className='w-full min-h-screen py-20 border-b border-black bg-gray-300 text-black'
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-2xl mx-auto text-center mb-16'>
            <h3 className='text-sm uppercase font-semibold tracking-wide text-red-500 mb-4'>
              Features
            </h3>
            <h1 className='text-4xl md:text-5xl font-bold capitalize mb-6'>
              What I Do
            </h1>
          </div>

          {/* Grid Layout with Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Card
              title="Web Development"
              description="Building modern, responsive websites with cutting-edge technologies"
              emoji="🚀"
            />
            <Card
              title="UI/UX Design"
              description="Creating user-friendly interfaces with optimal experience"
              emoji="🎨"
            />
            <Card
              title="React"
              description="React is a JavaScript library for building interactive user interfaces by creating reusable components."
              emoji={<FaReact  className='text-3xl'/>}
            />
             <Card
              title="Hosting Website"
              description="Hosting a website involves storing its files on a server, making them accessible on the internet for users to view and interact with."
              emoji={<FaGlobe className="text-3xl" />}
              />
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page