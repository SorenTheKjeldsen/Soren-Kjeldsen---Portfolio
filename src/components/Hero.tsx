import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import portraitImage from '../assets/images/Portræt.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-sand top-0">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-brand-green block"></span>
              <span className="text-brand-green tracking-[0.3em] font-medium text-xs lg:text-sm uppercase">Bygningskonstruktør | Tømrer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-dark-900 leading-[1.1] mb-6 font-normal">
              Søren <br />
              <span className="italic text-brand-green-light">Kjeldsen.</span>
            </h1>
            
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                backgroundColor: ["rgba(151,169,150,0.05)", "rgba(151,169,150,0.2)", "rgba(151,169,150,0.05)"] 
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                backgroundColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-flex items-center gap-3 px-4 py-2 border border-brand-green/30 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-brand-green font-medium">Jobsøgende</span>
            </motion.div>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-xl font-light leading-relaxed mb-12">
              Udadvendt og engageret bygningskonstruktør med håndværkerbaggrund og Revit i fingerspidserne. Jeg bygger bro mellem kompleks byggeteknik og praktisk udførelse.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/projekter" 
                className="bg-white/80 text-dark-900 border border-black/10 px-8 py-4 uppercase tracking-widest text-sm font-medium hover:border-brand-green hover:text-brand-green transition-all text-center flex items-center justify-center gap-2"
              >
                SE PROJEKTER <ArrowRight size={16} />
              </Link>
              <a 
                href="#om-mig-scroll" 
                className="group flex items-center justify-center gap-3 border border-dark-900/10 text-dark-800 px-8 py-4 uppercase tracking-widest text-sm hover:border-brand-green hover:text-brand-green transition-all"
              >
                LÆS MERE OM MIG
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto lg:mr-0">
              <div className="relative z-10 w-full h-full bg-dark-800 overflow-hidden shadow-xl rounded-2xl group xl:cursor-pointer">
                <img 
                  src={portraitImage} 
                  alt="Søren Kjeldsen" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-sand/10 mix-blend-overlay" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="w-full absolute bottom-8 left-0 flex justify-center z-20">
        <motion.a 
          href="#om-mig-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-2 group"
        >
          <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase group-hover:text-brand-green transition-colors hidden md:block">Scroll</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 border border-dark-900/20 rounded-full flex justify-center pt-2 group-hover:border-brand-green transition-colors"
          >
            <div className="w-1 h-2 bg-brand-green rounded-full" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
