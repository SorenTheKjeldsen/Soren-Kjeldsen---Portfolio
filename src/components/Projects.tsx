import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '../data/projects';
import { Play, X } from 'lucide-react';

import detGroenneImage from '../assets/images/Det Grønne Enfamiliehus.jpg';
import detGroennePdf from '../data/Det grønne enfamiliehus - LF 7. Semester.pdf';
import jjmg9Image from '../assets/images/JJMG9 Forside.jpg';
import ledelseImage from '../assets/images/Ledelse_og_Kommunikation_Forside.jpg';
import ledelsePdf from '../data/Ledelse_og_Kommunikation_VUE_4_Semester.pdf';

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

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
                    <div className="relative z-10 overflow-hidden aspect-[4/3] lg:aspect-[16/10] bg-white shadow-sm cursor-pointer rounded-2xl group-hover:shadow-md transition-shadow">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${project.id === 'lokesvej' ? 'blur-[4px] brightness-75 scale-110 group-hover:scale-110' : ''}`}
                      />
                      <div className="absolute inset-0 bg-brand-sand/10 mix-blend-overlay border border-black/5" />
                      {project.id === 'lokesvej' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-dark-900/30">
                          <span className="text-white text-lg md:text-2xl lg:text-3xl font-serif tracking-widest uppercase border border-white/40 px-6 py-3 md:px-8 md:py-4 rounded-sm backdrop-blur-md drop-shadow-md">
                            Kommer snart
                          </span>
                        </div>
                      )}
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
            <h2 className="text-4xl lg:text-5xl font-serif text-dark-900 uppercase">Individuelt Arbejde</h2>
            <p className="mt-4 text-dark-700 font-light max-w-2xl mx-auto text-lg transition-colors cursor-pointer">
              Et udvalg af individuelle undersøgelser og rapporter, udarbejdet med et særligt fokus på faglig fordybelse og personlig udvikling inden for branchen.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
              { id: 1, title: 'Det Grønne Enfamiliehus', subtitle: 'Lokalt Fagelement Undersøgelse - 7. semester', description: 'Går vi på kompromis med kvaliteten af vores bygninger, når vi skal holde os indenfor de nye bæredygtighedskrav?', image: detGroenneImage, pdf: detGroennePdf, pdfName: 'Det grønne enfamiliehus - LF 7. Semester.pdf', imagePosition: 'object-top' },
              { id: 2, title: 'VISUALISERING AF RENOVERINGSPROJEKT', subtitle: 'Lokalt Fagelement Undersøgelse - 5. semester', description: 'Jeg vil undersøge, hvordan TwinMotion kan anvendes til at visualisere opsætningen af bygningsdele under en renovering', image: jjmg9Image, video: 'https://www.youtube.com/embed/Wso0tdiaCQ8?si=jJsJH9U0Delv0OIu', imagePosition: 'object-center' },
              { id: 3, title: 'LEDELSE OG KOMMUNIKATION', subtitle: 'Valgfrit Uddannelseselement - 4. semester', description: 'Med udgangspunkt i to interviews ønsker jeg at undersøge, hvilke problemer der er med ledelse og kommunikation i byggebranchen og hvad vi kan gøre ved dem', image: ledelseImage, pdf: ledelsePdf, pdfName: 'Ledelse & Kommunikation - VUE, 4. Semester.pdf', imagePosition: 'object-[center_35%]' }
            ].map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: item.id * 0.1 }}
                className={`bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm flex flex-col items-center hover:bg-white/80 transition-colors overflow-hidden relative ${item.image ? 'p-0 group h-auto' : 'p-8 justify-center h-full min-h-[16rem]'}`}
              >
                {item.image ? (
                   <div className="w-full flex flex-col h-full">
                    <div 
                      className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0 bg-brand-sand cursor-pointer"
                      onClick={() => setActiveImage(item.image)}
                    >
                      <img src={item.image} alt={item.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.imagePosition || 'object-top'}`} />
                    </div>
                    <div className="p-6 flex flex-col items-center text-center flex-grow w-full">
                      <div className="min-h-[56px] flex items-center justify-center w-full mb-2">
                        <h3 className="font-serif text-xl tracking-widest text-dark-900 uppercase text-center flex items-center justify-center gap-1.5 flex-wrap">
                          {item.title}
                        </h3>
                      </div>
                      <div className="min-h-[40px] flex items-center justify-center mb-3">
                        {item.subtitle && <p className="text-brand-green text-xs font-medium uppercase tracking-widest leading-relaxed">{item.subtitle}</p>}
                      </div>
                      <div className="flex-grow flex flex-col items-center w-full">
                        {item.description && <p className="text-dark-700 text-sm mb-6 font-light">{item.description}</p>}
                      </div>
                      
                      {item.pdf && (
                        <a href={item.pdf} download={item.pdfName || true} className="mt-auto bg-brand-sand text-dark-900 border border-black/10 hover:bg-brand-green hover:border-brand-green hover:text-white px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 uppercase tracking-widest inline-flex items-center justify-center gap-2 w-full max-w-[200px]">
                          Download Rapport
                        </a>
                      )}
                      {item.video && (
                        <button onClick={() => setActiveVideo(item.video)} className="mt-auto bg-brand-sand text-dark-900 border border-black/10 hover:bg-brand-green hover:border-brand-green hover:text-white px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 uppercase tracking-widest inline-flex items-center justify-center gap-2 w-full max-w-[200px]">
                          <Play size={14} /> Se Video
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-brand-sand mb-4 flex items-center justify-center text-brand-green opacity-50">
                      +
                    </div>
                    <h3 className="font-serif text-xl text-dark-800 uppercase tracking-widest text-center">{item.title}</h3>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12" onClick={() => setActiveVideo(null)}>
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <iframe 
              src={`${activeVideo}&autoplay=1`}
              title="YouTube video player" 
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8" onClick={() => setActiveImage(null)}>
          <button 
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <X size={32} />
          </button>
          <div className="w-full h-full max-w-6xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={activeImage} 
              alt="Project full view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
