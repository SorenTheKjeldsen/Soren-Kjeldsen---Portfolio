import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <>
      <section className="pt-32 pb-8 lg:pb-12 bg-brand-sand overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <span className="text-brand-green tracking-[0.3em] font-medium text-sm uppercase block mb-4">2024 - 2026</span>
            <h2 className="text-4xl lg:text-6xl font-serif text-dark-900 uppercase">Udvalgte Projekter</h2>
          </motion.div>
        </div>
      </section>

      {projects.map((project, index) => {
        const bgColors = ['bg-brand-sand', 'bg-brand-sand-light'];
        const bgColor = bgColors[index % bgColors.length];
        
        return (
          <section key={project.id} className={`${index === 0 ? 'pt-8 pb-24 lg:pt-12 lg:pb-32' : 'py-24 lg:py-32'} overflow-hidden ${bgColor}`}>
            <div className="container mx-auto px-6 max-w-7xl">
              <div 
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                  project.align === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: project.align === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-[60%] relative group"
                >
                  <Link to={`/projekt/${project.id}`}>
                    <div className="relative z-10 overflow-hidden aspect-[4/3] lg:aspect-[16/10] bg-white shadow-sm cursor-pointer rounded-2xl">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-sand/10 mix-blend-overlay border border-black/5" />
                    </div>
                  </Link>
                  
                  {/* Number Watermark */}
                  <span className={`absolute -top-12 ${project.align === 'left' ? '-right-8' : '-left-8'} text-8xl lg:text-[12rem] font-serif text-black/5 z-0 select-none pointer-events-none`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-[40%] relative z-10"
                >
                  <span className="text-brand-green tracking-[0.2em] font-medium text-xs uppercase mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-serif text-dark-900 mb-6 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-dark-800 font-light leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 py-8 border-y border-black/10 mb-8">
                    {project.details.filter((_, i) => i !== 2).map((detail, i) => (
                      <div key={i} className="text-center">
                        <span className="block text-dark-900 font-sans text-sm">
                          {i === 2 ? (
                            <>
                              {detail.includes('·') ? detail.split('·')[0].trim() : 'Projekt'}
                              <br />
                              {detail.includes('·') ? detail.split('·')[1].trim() : detail}
                            </>
                          ) : (
                            detail
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/projekt/${project.id}`} className="inline-flex items-center gap-4 text-dark-900 hover:text-brand-green transition-colors uppercase tracking-widest text-xs font-medium group cursor-pointer">
                    Se Projektdetaljer
                    <span className="w-8 h-[1px] bg-brand-green block group-hover:w-16 transition-all" />
                  </Link>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24 lg:py-32 bg-brand-sand-light overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-dark-900 uppercase">Andre Projekter</h2>
            <p className="mt-4 text-dark-700 font-light max-w-2xl mx-auto text-lg hover:text-brand-green transition-colors cursor-pointer">
              Sektion under opbygning - flere projekter vil løbende blive tilføjet
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: item * 0.1 }}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-center items-center h-64 hover:bg-white/80 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-brand-sand mb-4 flex items-center justify-center text-brand-green opacity-50">
                  +
                </div>
                <h3 className="font-serif text-xl text-dark-800 uppercase tracking-widest text-center">Kommer snart</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
