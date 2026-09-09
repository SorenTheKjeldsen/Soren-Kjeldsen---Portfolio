import { motion } from 'motion/react';
import React from 'react';

export default function VideoSection() {
  return (
    <section id="video-section" className="w-full bg-dark-900 overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative w-full aspect-video shadow-2xl"
      >
        {/* Blur overlay with text */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-xl bg-black/40 pointer-events-none"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 200, damping: 20 }}
            className="text-white text-4xl md:text-6xl lg:text-8xl font-serif tracking-[0.3em] uppercase drop-shadow-2xl ml-4"
          >
            Projekter
          </motion.h2>
        </motion.div>

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
