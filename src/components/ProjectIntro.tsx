import { motion } from 'motion/react';

export default function ProjectIntro() {
  return (
    <section className="bg-brand-sand-light py-16 md:py-24 relative overflow-hidden border-b border-brand-sand">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="text-center mb-8">
            <span className="text-brand-green tracking-[0.3em] font-medium text-sm uppercase block mb-4">2024 - 2026</span>
            <h2 className="text-4xl lg:text-6xl font-serif text-dark-900 uppercase">Udvalgte Projekter</h2>
          </div>
          
          <div className="space-y-6 text-dark-800 md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
            <p>
              De projekter, som fremgår her på siden, tager udgangspunkt i skolesituationer. De er udarbejdet som en del af min uddannelse for at arbejde med opgaver og problemstillinger, der minder om dem, man møder i praksis.
            </p>
            <p>
              Selvom projekterne oftest er udført i studiegrupper, repræsenterer det viste tegnings- og projektmateriale hovedsageligt min egen indsats. Jeg har stået for hovedparten af det materiale, der fremvises herunder.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
