import { motion } from 'motion/react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JobSearchBanner() {
  return (
    <section className="bg-brand-sand text-dark-900 py-16 md:py-24 relative overflow-hidden border-y border-brand-green/10">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16"
        >
          <div className="flex-1 text-center lg:text-left space-y-4">
            <motion.div 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-3 text-dark-900/60 tracking-[0.2em] uppercase text-xs font-bold mb-2"
            >
              <span className="w-8 h-[1px] bg-dark-900/20 hidden lg:block"></span>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-brand-green" 
              />
              Aktuelt Jobsøgende
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              Klar til nye udfordringer inden for <span className="italic text-brand-green">projektering, BIM og byggeledelse</span>
            </h2>
            <p className="text-dark-800 max-w-2xl mx-auto lg:mx-0 font-light mt-4 leading-relaxed">
              Jeg er klar til at samarbejde og bidrage til holdet fra dag ét. Med min praktiske tømrerbaggrund og stærke byggetekniske forståelse, glæder jeg mig til at bringe mine kompetencer i spil og være med til at skabe de bedste løsninger gennem hele byggeprocessen.
            </p>
          </div>
          
          <div className="w-full lg:w-auto shrink-0 flex justify-center">
            <Link 
              to="/kontakt"
              className="group flex items-center justify-center gap-4 bg-brand-green text-white px-10 py-5 uppercase tracking-[0.15em] text-sm font-semibold hover:bg-brand-green-dark transition-all w-full md:w-auto"
            >
              <Briefcase size={18} />
              Lad os tage en snak
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Abstract bg element */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-white/40 transform skew-x-[-20deg] translate-x-1/4 pointer-events-none" />
    </section>
  );
}
