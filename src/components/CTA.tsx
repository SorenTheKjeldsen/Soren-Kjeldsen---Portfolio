import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { RevealText } from './RevealText';

export default function CTA() {
  return (
    <section className="py-24 bg-brand-sand overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-dark-900 uppercase tracking-wider flex justify-center flex-wrap gap-x-4">
            <RevealText text="Lyder det" delay={0.2} />
            <RevealText text="interessant?" delay={0.4} />
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-dark-700 font-light max-w-2xl mx-auto"
          >
            Så kontakt mig og lad os tage en uforpligtende snak om, hvordan vi kan samarbejde.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
            className="pt-8"
          >
            <Link 
              to="/kontakt" 
              className="inline-flex items-center justify-center border border-dark-900/10 text-dark-800 px-10 py-5 uppercase tracking-widest text-sm hover:border-brand-green hover:text-brand-green hover:bg-white/50 bg-white/30 transition-all"
            >
              KONTAKT MIG
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
