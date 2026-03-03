// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, X, Calendar, Users, Star } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="bg-dark rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 cursor-pointer group shadow-xl"
        onClick={() => setShowModal(true)}
      >
        {/* Project Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
          
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30" />
          </div>

          {/* Project title overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.slice(0, 3).map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs px-2 py-1 bg-dark-light rounded-full text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
              {project.technologies?.length > 3 && (
                <span className="text-xs px-2 py-1 bg-dark-light rounded-full text-gray-300">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              {project.categories?.join(' • ')}
            </span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <span className="text-sm">View Details</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </div>
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-dark-light rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary pr-8">
                    {project.title}
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-dark rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-primary rounded-full" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 bg-dark rounded-full text-sm text-gray-300 border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-primary rounded-full" />
                    Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.fullDescription || project.shortDescription}
                  </p>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary-light transition-colors shadow-lg shadow-primary/25"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;