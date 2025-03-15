import React from 'react'

const Card = ({ title, description, emoji }) => {
    return (
      <div className='w-full h-80 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center bg-gradient-to-r from-[#9eade5] to-[#546070] hover:bg-gradient-to-b hover:from-green-400 transition-all duration-300'>
        <div className='text-white text-center'>
          <div className='w-16 h-16 bg-red-500 rounded-full mb-4 mx-auto flex items-center justify-center'>
            <span className='text-2xl'>{emoji}</span>
          </div>
          <h3 className='text-xl font-bold mb-2'>{title}</h3>
          <p className='text-gray-300'>{description}</p>
        </div>
      </div>
    )           
  }

export default Card