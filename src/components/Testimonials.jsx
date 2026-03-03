// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  // Placeholder testimonials - you can replace these later with real ones
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Project Manager, TechCorp",
      content: "Digambar is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are outstanding. He's a valuable asset to any team.",
      image: "https://via.placeholder.com/100",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "CTO, StartupHub",
      content: "Working with Digambar was a great experience. He understands requirements quickly and implements solutions efficiently. His code is clean, well-documented, and maintainable.",
      image: "https://via.placeholder.com/100",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Senior Developer, InnovateTech",
      content: "Digambar has a deep understanding of modern web technologies. He's always up to date with the latest trends and best practices. I highly recommend him for any React project.",
      image: "https://via.placeholder.com/100",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#0A0A0A]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Client <span className="text-[#C8A87D]">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's what some of my clients and colleagues have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#1A1A1A] p-6 rounded-xl relative group"
            >
              {/* Quote Icon */}
              <Quote 
                className="absolute top-4 right-4 text-[#C8A87D]/20 group-hover:text-[#C8A87D]/30 transition-colors" 
                size={40} 
              />

              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-[#C8A87D]' : 'text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-300 mb-6 italic relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C8A87D]/30"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8A87D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
            </motion.div>
          ))}
        </div>

        {/* Optional: Add a CTA for testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Want to work together?{' '}
            <a href="#contact" className="text-[#C8A87D] hover:underline">
              Get in touch
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;