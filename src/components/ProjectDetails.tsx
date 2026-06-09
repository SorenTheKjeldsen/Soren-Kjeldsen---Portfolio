import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect, useState, useMemo } from 'react';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  
  const flatImages = useMemo(() => {
    if (!project) return [];
    const images: {src: string, title?: string}[] = [];
    images.push({ src: project.image, title: project.title });
    
    if (project.imageGroups) {
      project.imageGroups.forEach(g => {
        g.images.forEach(img => images.push({ src: img.src, title: img.title }));
      });
    }
    if (project.images) {
      project.images.forEach(img => images.push({ src: img }));
    }
    return images;
  }, [project]);

  const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (fullscreenImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [fullscreenImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (fullscreenImageIndex === null) return;
      if (e.key === 'ArrowLeft' && fullscreenImageIndex > 0) {
        setFullscreenImageIndex(prev => prev! - 1);
      } else if (e.key === 'ArrowRight' && fullscreenImageIndex < flatImages.length - 1) {
        setFullscreenImageIndex(prev => prev! + 1);
      } else if (e.key === 'Escape') {
        setFullscreenImageIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenImageIndex, flatImages.length]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-sand-light pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-dark-900 mb-4">Projekt ikke fundet</h1>
          <Link to="/projekter" className="text-brand-green hover:underline">Tilbage til projekter</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-sand min-h-screen">
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-7xl">
        <Link to="/projekter" className="inline-flex items-center gap-2 text-dark-800 hover:text-brand-green transition-colors uppercase tracking-widest text-xs font-medium mb-12">
          <ArrowLeft size={16} /> Tilbage til projekter
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-brand-green tracking-[0.3em] font-medium text-sm uppercase block mb-4">{project.category}</span>
          <h1 className="text-4xl md:text-6xl font-serif text-dark-900 leading-tight mb-8">
            {project.title}
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[16/9] bg-brand-sand-light mb-24 relative overflow-hidden rounded-2xl cursor-pointer group js-header-detect"
          onClick={() => setFullscreenImageIndex(0)}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-lg text-dark-800 font-light leading-relaxed space-y-6"
          >
            <h2 className="text-2xl font-serif text-dark-900 mb-6">Om projektet</h2>
            {project.longDescription?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            )) || <p>{project.description}</p>}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-sand-light p-10 border border-black/5 shadow-sm space-y-8"
          >
            <h3 className="text-xl font-serif text-dark-900 border-b border-black/10 pb-4">NØGLEFAKTA</h3>
            
            <div className="space-y-6">
              {project.details.map((detail, idx) => {
                const labels = ['Lokation', 'År', 'Bruttoareal', 'Projekttype'];
                return (
                  <div key={idx}>
                    <span className="block text-xs tracking-widest text-gray-500 uppercase mb-1">
                      {labels[idx]}
                    </span>
                    <span className="block text-dark-900 font-sans text-lg font-medium">{detail}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {((project.imageGroups && project.imageGroups.length > 0) || (project.images && project.images.length > 0)) && (
        <div className="bg-brand-sand-light py-24 border-t border-black/5">
          <div className="container mx-auto px-6 max-w-7xl">
            {project.imageGroups && project.imageGroups.length > 0 && (
              <div className="space-y-24">
                {project.imageGroups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-12">
                    <h3 className="text-2xl font-serif text-dark-900 border-b border-black/10 pb-4 text-center uppercase">{group.name}</h3>
                    <div className="flex flex-wrap justify-center -mx-4 md:-mx-6">
                      {group.images.map((imgObj, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-6 mb-8 md:mb-12 flex flex-col"
                        >
                          <div className="mb-4 flex justify-center">
                            <span className="text-brand-green tracking-[0.2em] font-medium text-xs uppercase text-center">{imgObj.title}</span>
                          </div>
                          <div 
                            className="w-full bg-brand-sand/50 relative overflow-hidden rounded-xl cursor-pointer group shadow-sm flex-1"
                            onClick={() => {
                              const fIdx = flatImages.findIndex(fi => fi.src === imgObj.src);
                              if (fIdx !== -1) setFullscreenImageIndex(fIdx);
                            }}
                          >
                            <img 
                              src={imgObj.src} 
                              alt={`${project.title} - ${imgObj.title}`} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {project.images && project.images.length > 0 && (
              <div className="space-y-12 mt-24">
                {project.images.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-brand-sand/50 relative overflow-hidden rounded-2xl cursor-pointer group js-header-detect"
                    onClick={() => {
                      const fIdx = flatImages.findIndex(fi => fi.src === img);
                      if (fIdx !== -1) setFullscreenImageIndex(fIdx);
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} - Billede ${idx + 1}`} 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <AnimatePresence>
        {fullscreenImageIndex !== null && flatImages[fullscreenImageIndex] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImageIndex(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4 md:p-10 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenImageIndex(null);
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            {/* Left Nav */}
            {fullscreenImageIndex > 0 && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenImageIndex(prev => prev! - 1);
                }}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-4 transition-all z-[110]"
              >
                <ChevronLeft size={32} />
              </button>
            )}

            {/* Right Nav */}
            {fullscreenImageIndex < flatImages.length - 1 && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenImageIndex(prev => prev! + 1);
                }}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-4 transition-all z-[110]"
              >
                <ChevronRight size={32} />
              </button>
            )}

            <motion.img 
              key={flatImages[fullscreenImageIndex].src}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={flatImages[fullscreenImageIndex].src} 
              alt={flatImages[fullscreenImageIndex].title || "Fullscreen view"} 
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
            {flatImages[fullscreenImageIndex].title && (
              <div className="absolute bottom-10 left-0 right-0 text-center text-white/80 tracking-[0.2em] uppercase text-sm font-medium" onClick={(e) => e.stopPropagation()}>
                {flatImages[fullscreenImageIndex].title}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
