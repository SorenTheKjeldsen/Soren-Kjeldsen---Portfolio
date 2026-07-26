import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../assets/images/4K Logo.webp';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 1.2 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[99999] bg-brand-sand flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.05, opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="w-48 md:w-64 lg:w-80"
          >
            <img 
              src={logoImage} 
              alt="Søren Kjeldsen Logo" 
              className="w-full h-auto drop-shadow-sm" 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
