// src/App.jsx
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navbar from './components/NavbarTemp';
import Hero from './components/Hero';
import About from './components/About';        // ADD THIS
import Skills from './components/Skills';      // ADD THIS
import Projects from './components/Projects';  // ADD THIS
import Experience from './components/Experience'; // ADD THIS
import Testimonials from './components/Testimonials'; // ADD THIS
import Contact from './components/Contact';    // ADD THIS
import Footer from './components/Footer';      // ADD THIS
import BackToTop from './components/BackToTop';

function App() {
  return (
    <HelmetProvider>
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