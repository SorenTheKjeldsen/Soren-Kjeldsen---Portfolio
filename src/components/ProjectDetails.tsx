import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect, useState } from 'react';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (fullscreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [fullscreenImage]);

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
    <div className="bg-brand-sand-light min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
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
          className="w-full aspect-[16/9] bg-dark-800 mb-24 relative overflow-hidden rounded-2xl cursor-pointer group"
          onClick={() => setFullscreenImage(project.image)}
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
            className="bg-white p-10 border border-black/5 shadow-sm space-y-8"
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

        {project.images && project.images.length > 0 && (
          <div className="space-y-12">
            {project.images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full bg-dark-800 relative overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => setFullscreenImage(img)}
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

      <AnimatePresence>
        {fullscreenImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenImage(null);
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={fullscreenImage} 
              alt="Fullscreen view" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
