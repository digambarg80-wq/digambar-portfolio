// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Make sure react-icons is installed first!
import { 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiFirebase,
  SiMongodb 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  ];

  return (
    <section id="skills" className="relative py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl text-[#C8A87D] font-bold mb-12 text-center">
          Skills & <span className="text-[#C8A87D]">Technologies</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#1A1A1A] p-6 rounded-xl flex flex-col items-center justify-center group cursor-pointer"
            >
              <skill.icon 
                className="text-5xl mb-3 transition-transform group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <span className="text-gray-300 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;