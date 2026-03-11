// src/components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth > 768) {
      setVisible(true);
    }

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Add hover listeners to all interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .cursor-pointer'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true));
        el.addEventListener('mouseleave', () => setHovering(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Wait for DOM to load
    setTimeout(addHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] mix-blend-difference"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: hovering ? 1.5 : clicked ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 800,
          damping: 30,
        }}
      >
        <div className="w-4 h-4 bg-[#C8A87D] rounded-full" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: hovering ? 1.2 : clicked ? 0.9 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.4,
          stiffness: 400,
          damping: 40,
        }}
      >
        <div className="w-10 h-10 border border-[#C8A87D]/50 rounded-full" />
      </motion.div>

      {/* Trail effect - third dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[998]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 200,
          damping: 20,
          delay: 0.05,
        }}
      >
        <div className="w-2 h-2 bg-[#C8A87D]/30 rounded-full" />
      </motion.div>
    </>
  );
};

export default CustomCursor;