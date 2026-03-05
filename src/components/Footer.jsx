// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/digambarg80-wq', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/digambar-gaikwad-7716153a2/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/digambarg80', label: 'Twitter' },
    { icon: Mail, href: 'mailto:digambarg80@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#C8A87D]">{'{'}</span>
              <span className="text-white">DG</span>
              <span className="text-[#C8A87D]">{'}'}</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Building digital experiences with modern web technologies. 
              Passionate about creating elegant solutions to complex problems.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#C8A87D] hover:bg-[#252525] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#C8A87D] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>India</li>
              <li>
                <a href="mailto:digambarg80@gmail.com" className="hover:text-[#C8A87D] transition-colors">
                  digambarg80@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919834000290" className="hover:text-[#C8A87D] transition-colors">
                  +91 98340 00290
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Digambar Gaikwad. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>using React & TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;