// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Briefcase, Mail } from 'lucide-react';

const About = () => {
  const skills = ['React', 'Node.js', 'JavaScript', 'TypeScript', 'TailwindCSS', 'Firebase'];

  return (
    <section id="about" className="py-20 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8A87D]/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#C8A87D]">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 text-[#C8A87D]">
              <User size={24} />
              <h3 className="text-2xl font-semibold text-white">Who am I?</h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-[#C8A87D] font-semibold">Full Stack Developer</span> with a passion for creating 
              beautiful, functional, and user-friendly web applications. I love turning complex problems 
              into simple, elegant solutions.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
                and sharing problem-solving experiences on LinkedIn to connect with fellow developers.
            </p>

            <div className="flex items-center space-x-3 text-[#C8A87D] pt-4">
              <Code size={24} />
              <h3 className="text-2xl font-semibold text-white">Tech Stack</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-[#1A1A1A] text-gray-300 rounded-lg border border-[#C8A87D]/20 hover:border-[#C8A87D]/50 hover:text-[#C8A87D] transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats/Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Briefcase, label: 'Projects', value: '15+' },
              { icon: Code, label: 'Commits', value: '1k+' },
              { icon: User, label: 'Clients', value: '10+' },
              { icon: Mail, label: 'Support', value: '24/7' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="bg-[#1A1A1A] p-6 rounded-xl text-center group cursor-default"
              >
                <stat.icon className="w-8 h-8 text-[#C8A87D] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;