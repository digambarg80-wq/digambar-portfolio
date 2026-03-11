// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Save to Firebase
      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
        read: false
      });

      // Success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // You can also send email notification using EmailJS here
      
    } catch (error) {
      console.error('Error saving message:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#C8A87D]">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 text-lg">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat about technology.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300 group">
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center group-hover:bg-[#C8A87D]/10 transition-colors">
                  <Mail className="text-[#C8A87D]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:digambarg80@gmail.com" className="text-white hover:text-[#C8A87D] transition-colors">
                    digambarg80@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300 group">
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center group-hover:bg-[#C8A87D]/10 transition-colors">
                  <Phone className="text-[#C8A87D]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+919834000290" className="text-white hover:text-[#C8A87D] transition-colors">
                    +91 98340 00290
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300 group">
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center group-hover:bg-[#C8A87D]/10 transition-colors">
                  <MapPin className="text-[#C8A87D]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">India</p>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-4 bg-[#1A1A1A] rounded-xl border border-[#C8A87D]/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-300">Available for freelance work</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0F0F0F] border border-gray-800 rounded-xl focus:outline-none focus:border-[#C8A87D] text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0F0F0F] border border-gray-800 rounded-xl focus:outline-none focus:border-[#C8A87D] text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-[#0F0F0F] border border-gray-800 rounded-xl focus:outline-none focus:border-[#C8A87D] text-white transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-[#C8A87D] text-[#0F0F0F] font-semibold rounded-xl hover:bg-[#B89A6D] transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0F0F0F] border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-500"
                  >
                    <CheckCircle size={18} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-500"
                  >
                    <AlertCircle size={18} />
                    <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;