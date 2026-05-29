import { motion } from 'motion/react';
import React from 'react';

export default function VideoSection() {
  return (
    <section className="py-24 bg-dark-900 border-y border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full aspect-video bg-dark-800 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Placeholder for video */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-50">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="m9 8 6 4-6 4Z" />
            </svg>
            <p className="font-serif text-xl md:text-2xl tracking-widest uppercase mb-2">Animationsvideo</p>
            <p className="font-sans text-sm font-light uppercase tracking-widest">Pladsholder for bygningsanimation</p>
          </div>
          
          {/* 
            To use a real video, replace the img with a video tag:
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover mix-blend-overlay">
              <source src="/your-video.mp4" type="video/mp4" />
            </video>
          */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 scale-105"
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          >
            <source src="https://cdn.pixabay.com/video/2020/06/15/42079-430932599_large.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
