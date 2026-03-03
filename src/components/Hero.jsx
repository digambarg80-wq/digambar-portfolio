// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import heroImg from '../assets/images/heroimg.jpeg';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0.3]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative w-full min-h-screen overflow-hidden bg-[#0F0F0F]"
    >
      {/* Background Elements (kept for atmosphere) */}
      <div className="absolute inset-0 w-full h-full">
        {/* Dark base overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]" />
        
        {/* Decorative gold gradients */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#C8A87D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C8A87D]/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C8A87D]/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, '-30px', null],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Content - Text */}
            <motion.div 
              style={{ y: textY, opacity }}
              className="w-full"
            >
              {/* FULL STACK DEVELOPER Tag */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="text-[#C8A87D] font-semibold text-sm tracking-[0.3em] uppercase bg-[#C8A87D]/10 px-4 py-2 rounded-full inline-block">
                  Full Stack Developer
                </span>
              </motion.div>
              
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-[0.9] mb-6"
              >
                Digambar
                <br />
                <span className="text-[#C8A87D]">Gaikwad</span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed"
              >
                Building digital experiences with modern web technologies. 
                Passionate about creating elegant solutions to complex problems.
              </motion.p>
              
              {/* Social Links & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                {/* Social Icons */}
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: '#', label: 'GitHub' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Twitter, href: '#', label: 'Twitter' }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center text-gray-300 hover:text-[#C8A87D] hover:border-[#C8A87D]/30 hover:bg-white/10 transition-all"
                    >
                      <social.icon size={22} />
                    </motion.a>
                  ))}
                </div>
                
                {/* CTA Button */}
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 text-white bg-[#C8A87D] px-8 py-4 rounded-2xl hover:bg-[#B89A6D] transition-colors shadow-lg shadow-[#C8A87D]/25 group"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="font-medium">Explore My Work</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="group-hover:translate-y-1 transition-transform"
                  >
                    <ArrowDown size={18} />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Image Container */}
              <div className="relative">
                {/* Main Image with Proper Styling */}
                <div className="relative z-10">
                  <img
                    src={heroImg}
                    alt="Digambar Gaikwad"
                    className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                    style={{
                      filter: 'grayscale(20%) contrast(110%) brightness(0.95)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(200, 168, 125, 0.2) inset'
                    }}
                  />
                  
                  {/* Soft Gradient Overlay for Depth */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0F0F0F]/60 via-transparent to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-[#C8A87D]/20 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-40 h-40 border-2 border-[#C8A87D]/20 rounded-full" />
                
                {/* Gold Glow Effect */}
                <div className="absolute inset-0 bg-[#C8A87D]/10 blur-3xl rounded-full -z-10 transform scale-75" />
                
                {/* Subtle Light Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#C8A87D]/5 blur-3xl rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-sm bg-black/10"
        >
          <motion.div 
            animate={{ height: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 bg-[#C8A87D] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;