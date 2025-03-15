import React from 'react'
import ProjectCard from '../Projectcard/page'

const PageProject = () => {
  return (
    <section className="w-full min-h-screen py-20 border-b border-black bg-gray-100 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-red-600 mb-4 font-medium tracking-wider uppercase text-sm">
            VISIT MY PORTFOLIO AND SHARE YOUR FEEDBACK
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="E-Commerce Platform"
            description="Developed a user-friendly e-commerce interface with dedicated sections for Men, Women, and Kids products. Implemented informational pages (About, Contact) and focused on clean, organized visual design for optimal shopping experience."
            githubLink=" https://github.com/sandhyall/ecommers1.git" 
          />
          
          <ProjectCard 
            title="Product Landing Page"
            description="Created a dynamic clothing showcase using ReactJS and NextUI, featuring high-quality product imagery and responsive layouts with TailwindCSS. Focused on aesthetic presentation and seamless user interaction."
            githubLink = " https://github.com/sandhyall/landingpage.git"
          />
          
          <ProjectCard 
            title="Rock Paper Scissors Game"
            description="Built an interactive game with AI opponent using ReactJS. Integrated TailwindCSS for styling and React Icons for visual feedback, featuring score tracking and smooth animations."
            githubLink=" https://github.com/sandhyall/rockpaper.git" 
          />
          
          <ProjectCard 
            title="Todo App"
            description="Developed a task management application with ReactJS and TailwindCSS. Features include add/complete/delete functionality, responsive design, and persistent local storage."
            githubLink="https://github.com/sandhyall/todo-app.git"
          />
        </div>
      </div>
    </section>
  )
}

export default PageProject
