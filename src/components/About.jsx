// src/components/About.jsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useInView as useInViewReact } from 'react-intersection-observer';
import { Code, Rocket, Users, Award, MapPin, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInViewReact({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, label: 'Happy Clients', value: '8+', color: 'from-green-500 to-emerald-500' },
    { icon: Rocket, label: 'Technologies', value: '15+', color: 'from-purple-500 to-pink-500' },
    { icon: Award, label: 'Experience', value: '2+ Years', color: 'from-orange-500 to-red-500' },
  ];

  const highlights = [
    { icon: MapPin, text: 'Based in Chhatrapati Sambhajinagar, Maharashtra' },
    { icon: Briefcase, text: 'Full Stack Developer specializing in React & Firebase' },
    { icon: Calendar, text: 'Available for freelance opportunities' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main image container */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-1 animate-float">
                <div className="w-full h-full rounded-2xl bg-dark-light flex items-center justify-center overflow-hidden">
                  {/* This is where your photo will go */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                    <span className="text-8xl font-bold text-primary/30">DG</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-700" />
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-dark border border-primary/30 rounded-lg px-3 py-1 text-sm"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-primary">●</span> Open to work
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Full Stack Developer with a passion for creating
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer based in <span className="text-primary">Chhatrapati Sambhajinagar, Maharashtra</span>, 
                specializing in building exceptional digital experiences. Currently, I focus on building responsive 
                full-stack web applications that solve real-world problems.
              </p>

              <p>
                With a strong foundation in modern web technologies like <span className="text-primary">React, Node.js, and Firebase</span>, 
                I enjoy creating seamless user experiences while writing clean, maintainable code. 
                I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or sharing my knowledge with the developer community.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-6 space-y-2">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <item.icon size={18} className="text-primary" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`text-center p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 border border-white/5`}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;