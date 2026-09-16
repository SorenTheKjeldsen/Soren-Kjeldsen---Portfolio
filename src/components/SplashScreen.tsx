import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import logoImage from '../assets/images/4K Logo.webp';

export default function SplashScreen() {
  const location = useLocation();
  const [show, setShow] = useState(location.pathname === '/');

  useEffect(() => {
    if (!show) {
      window.dispatchEvent(new Event('splash_end'));
      setTimeout(() => {
        window.dispatchEvent(new Event('logo_settled'));
      }, 1250);
      return;
    }
    
    // Hide the splash screen after 1.5 seconds to allow reading before animation
    const timer = setTimeout(() => {
      setShow(false);
      window.dispatchEvent(new Event('splash_end'));
      setTimeout(() => {
        window.dispatchEvent(new Event('logo_settled'));
      }, 1250);
    }, 1500);

    return () => clearTimeout(timer);
  }, [show]);

  if (location.pathname !== '/' && show) {
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash-screen-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[99998] bg-brand-sand pointer-events-none"
        />
      )}
      {show && (
        <motion.div
          key="splash-screen-logo-wrapper"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            layoutId="main-logo-container"
            initial={{ scale: 0.85, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-64 md:w-96 lg:w-[32rem] relative z-10 flex items-center justify-center"
          >
            <motion.img 
              layoutId="main-logo-img"
              src={logoImage} 
              alt="Søren Kjeldsen Logo" 
              className="w-full h-auto drop-shadow-sm" 
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
