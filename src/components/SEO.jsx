// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Digambar Gaikwad | Full Stack Developer",
  description = "Full Stack Developer specializing in modern web applications with React, Node.js, and TailwindCSS. Passionate about creating elegant solutions to complex problems.",
  keywords = "Full Stack Developer, React Developer, Node.js, JavaScript, TailwindCSS, Web Developer, Portfolio",
  image = "https://i.postimg.cc/vBp6pFz9/Whats-App-Image-2026-03-03-at-1-30-21-PM.jpg",
  url = "https://yourdomain.com"
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Digambar Gaikwad" />
      
      {/* Social Sharing - Facebook, LinkedIn, WhatsApp */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;