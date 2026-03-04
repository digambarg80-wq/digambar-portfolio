// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://picsum.photos/600/400?random=1",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Mobile-responsive task manager with real-time updates",
      image: "https://picsum.photos/600/400?random=2",
      technologies: ["React", "Firebase", "TailwindCSS"],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "REST API Service",
      description: "Scalable REST API with authentication and rate limiting",
      image: "https://picsum.photos/600/400?random=3",
      technologies: ["Node.js", "Express", "JWT", "MongoDB"],
      category: "backend",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio with smooth animations and responsive design",
      image: "https://picsum.photos/600/400?random=4",
      technologies: ["React", "Framer Motion", "TailwindCSS"],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat app with rooms and private messaging",
      image: "https://picsum.photos/600/400?random=5",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#C8A87D]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent works
          </p>
        </motion.div>

        {/* Filter Buttons - Fixed styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-[#C8A87D] text-[#0F0F0F] shadow-lg shadow-[#C8A87D]/25 scale-105'
                  : 'bg-[#1A1A1A] text-gray-400 hover:text-[#C8A87D] hover:bg-[#252525]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#1A1A1A] rounded-xl overflow-hidden group cursor-default"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#C8A87D] rounded-full flex items-center justify-center text-[#0F0F0F] hover:scale-110 transition-transform"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#C8A87D] rounded-full flex items-center justify-center text-[#0F0F0F] hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#C8A87D] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#0F0F0F] text-xs rounded-lg text-[#C8A87D] border border-[#C8A87D]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show message if no projects */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;