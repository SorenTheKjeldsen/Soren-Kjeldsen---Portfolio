import { motion } from 'motion/react';
import React from 'react';

export default function VideoSection() {
  return (
    <section id="video-section" className="w-full bg-dark-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative w-full aspect-video shadow-2xl"
      >
        {/* Vimeo background video embed */}
        <iframe 
          src="https://player.vimeo.com/video/1196727076?background=1&autoplay=1&loop=1&muted=1"
          className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
        
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-black/10 pointer-events-none" />
      </motion.div>
    </section>
  );
}
