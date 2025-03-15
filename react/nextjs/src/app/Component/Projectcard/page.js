import React from 'react'
import { FaGithub } from "react-icons/fa"

const ProjectCard = ({ title, description, githubLink }) => {
  return (
    <article className="group relative h-80 w-full overflow-hidden rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Gradient background with animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-indigo-300 transition-all duration-300 group-hover:from-blue-300 group-hover:to-indigo-400" />
      
      {/* Content container */}
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        {/* Text content */}
        <div className="max-w-[90%]">
          <h3 className="mb-4 text-2xl font-bold text-white drop-shadow-md">{title}</h3>
          <p className="text-gray-100/90 mb-6 line-clamp-3">{description}</p>
        </div>

        {/* GitHub link */}
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 rounded-lg bg-black/20 px-4 py-2 text-gray-100 backdrop-blur-sm transition-all hover:bg-black/30 hover:text-white"
          aria-label={`View ${title} on GitHub`}
        >
          <FaGithub className="shrink-0" />
          <span className="text-sm font-medium">View Code</span>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard