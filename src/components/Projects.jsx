// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Sample projects - replace with your actual projects later
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      image: "https://via.placeholder.com/600x400",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Mobile-responsive e-commerce platform",
      image: "https://via.placeholder.com/600x400",
      technologies: ["React", "Tailwind", "Firebase"],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Project 3",
      description: "REST API with authentication and real-time features",
      image: "https://via.placeholder.com/600x400",
      technologies: ["Node.js", "Express", "Socket.io"],
      category: "backend",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  const categories = ['all', 'frontend', 'backend', 'fullstack'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-[#C8A87D]">Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg capitalize transition-colors duration-300 ${
                filter === cat
                  ? 'bg-[#C8A87D] text-[#0F0F0F]'
                  : 'bg-[#1A1A1A] text-gray-300 hover:bg-[#2A2A2A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1A1A1A] rounded-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#0F0F0F] text-xs rounded-lg text-[#C8A87D]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#C8A87D] transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#C8A87D] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;