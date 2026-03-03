// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Developed responsive web applications using React and TailwindCSS'
    },
    {
      type: 'work',
      title: 'Web Developer Intern',
      company: 'Startup Name',
      period: '2021 - 2022',
      description: 'Assisted in building modern web interfaces and fixing bugs'
    },
    {
      type: 'education',
      title: 'Bachelor of Engineering',
      company: 'University Name',
      period: '2018 - 2022',
      description: 'Computer Science with specialization in Web Technologies'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Experience & <span className="text-[#C8A87D]">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[#C8A87D]/30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-start mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#C8A87D] border-4 border-[#1A1A1A]" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-[#1A1A1A] p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    {exp.type === 'work' ? (
                      <Briefcase className="text-[#C8A87D]" size={20} />
                    ) : (
                      <GraduationCap className="text-[#C8A87D]" size={20} />
                    )}
                    <span className="text-sm text-[#C8A87D] font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-gray-400 mb-3">{exp.company}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// IMPORTANT: Add this default export
export default Experience;