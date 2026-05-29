import { motion } from 'motion/react';
import React from 'react';

export default function VideoSection() {
  return (
    <section id="video-section" className="py-24 bg-dark-900 border-y border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full aspect-video bg-dark-800 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Da videoen er på over 25mb fra Google Drive, tvinger Google en "virus scan" advarsel frem ved direkte link. 
              Derfor bruger vi en iframe her. For et 100% rent baggrunds-video look udenom dette, 
              anbefales det at uploade til enten Vimeo, YouTube (som skjult), eller komprimere den til under 25mb. */}
          <iframe 
            src="https://drive.google.com/file/d/1sPBdT_WibkIidudpIcfU1rHp1d5FKLi3/preview?autoplay=1&mute=1"
            className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-auto"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>
          
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-black/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
