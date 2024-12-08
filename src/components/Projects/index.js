import React from 'react';

const Projects = () => {
  return (
    <div
      className="Projects min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 px-4 py-10"
      id="projects"
    >
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-8">
        My Projects
      </h1>

      {/* Projects List */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* First Project */}
        <a
          href="https://ecommerce-web-prod-build.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-item text-decoration-none bg-gradient-to-br from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-gray-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-2">Nexus Cartify Web App (Ecommerce)</h2>
          <p className="text-gray-300 mb-1">
            Description: A dynamic eCommerce platform designed for seamless online shopping experiences, featuring a modern user interface.
          </p>
          <p className="text-gray-300">Tech Stack: MERN Stack</p>
        </a>
        
        {/* Second Project */}
        <a
          href="https://billing-web-production.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-item text-decoration-none bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-gray-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-2">Billing Web Application</h2>
          <p className="text-gray-300 mb-1">
            Description: A complete solution for managing billing processes and customer invoices, optimized for efficiency.
          </p>
          <p className="text-gray-300">Tech Stack: MERN Stack</p>
        </a>


        {/* Third Project */}
        <a
          href="https://food-delivery-prod.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-item text-decoration-none bg-gradient-to-br from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-gray-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-2">Food Website</h2>
          <p className="text-gray-300 mb-1">
            Description: A sleek, modern website for ordering food with interactive UI elements and responsive design.
          </p>
          <p className="text-gray-300">Tech Stack: React.js</p>
        </a>

        {/* Fourth Project */}
        <a
          href="https://crud-application-main.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-item text-decoration-none bg-gradient-to-br from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-gray-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-2">CRUD Application</h2>
          <p className="text-gray-300 mb-1">
            Description: A flexible application to manage Create, Read, Update, and Delete operations with localStorage.
          </p>
          <p className="text-gray-300">Tech Stack: React.js</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
