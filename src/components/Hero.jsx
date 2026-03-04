// src/components/Hero.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import heroImg from '../assets/images/heroimg.jpeg';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '10%' : '30%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '5%' : '20%']);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative w-full min-h-screen overflow-hidden bg-[#0F0F0F]"
      style={{position: 'relative'}}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]" />
      
      {/* Decorative elements - hidden on mobile */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#C8A87D]/5 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C8A87D]/5 rounded-full blur-3xl hidden md:block" />

      {/* Main Content */}
      <div className="relative z-20 w-full min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-20">
          {/* Mobile: Image on Top, Text Below */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            
            {/* Image - Shows on top for mobile, right side for desktop */}
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full md:order-last mb-6 md:mb-0"
            >
              <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-md mx-auto">
                {/* Main Image */}
                <div className="relative z-10">
                  <img
                    src={heroImg}
                    alt="Digambar Gaikwad"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    style={{
                      boxShadow: '0 20px 40px -10px rgba(200, 168, 125, 0.3)',
                      border: '1px solid rgba(200, 168, 125, 0.15)'
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0F0F0F]/60 via-transparent to-transparent md:from-[#0F0F0F]/40" />
                </div>

                {/* Decorative Elements - Smaller on mobile */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-2 border-[#C8A87D]/20 rounded-full" />
                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-20 h-20 md:w-32 md:h-32 border-2 border-[#C8A87D]/20 rounded-full" />
                
                {/* Glow Effect - Reduced on mobile */}
                <div className="absolute inset-0 bg-[#C8A87D]/10 blur-2xl md:blur-3xl rounded-full -z-10 transform scale-75" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              style={{ y: textY }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full text-center md:text-left"
            >
              {/* Tag */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block text-[#C8A87D] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase bg-[#C8A87D]/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4"
              >
                Full Stack Developer
              </motion.span>
              
              {/* Name - Responsive text sizes */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-4"
              >
                Digambar
                <br />
                <span className="text-[#C8A87D]">Gaikwad</span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0 mb-6 md:mb-8 px-2 sm:px-0"
              >
                Building digital experiences with modern web technologies. 
                Passionate about creating elegant solutions to complex problems.
              </motion.p>
              
              {/* Social Links & CTA - Stack on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6"
              >
                {/* Social Icons - Horizontal scroll on very small screens */}
                <div className="flex space-x-3 overflow-x-auto pb-2 sm:pb-0 max-w-full">
                  {[
                    { icon: Github, href: '#', label: 'GitHub' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Twitter, href: '#', label: 'Twitter' }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-[#C8A87D] hover:border-[#C8A87D]/30 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
                
                {/* CTA Button - Full width on mobile */}
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-white bg-[#C8A87D] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#B89A6D] transition-colors shadow-lg shadow-[#C8A87D]/25 group"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  <span className="font-medium text-sm sm:text-base">Explore My Work</span>
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-[#C8A87D] rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;