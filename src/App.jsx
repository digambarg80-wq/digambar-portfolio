// src/App.jsx
import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navbar from './components/NavbarTemp';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  // Hide default cursor on desktop
  useEffect(() => {
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none';
    }
    return () => {
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <HelmetProvider>
      <CustomCursor />
      <SEO />
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </HelmetProvider>
  );
}

export default App;