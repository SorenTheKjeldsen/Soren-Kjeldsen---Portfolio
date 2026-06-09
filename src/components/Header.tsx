import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/4K Logo.webp';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [headerBgClass, setHeaderBgClass] = useState('bg-brand-sand/95');
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine background color based on what is underneath the header
      const sections = document.querySelectorAll('section, footer, main, div');
      let currentBg = 'bg-brand-sand/95';
      let darkSection = false;
      let foundMatchingSection = false;
      
      const headerCenterY = 40; // top area
      
      // Look at elements in reverse order so children override parents if they are full width
      const arr = Array.from(sections);
      for (let i = arr.length - 1; i >= 0; i--) {
        const section = arr[i];
        const rect = section.getBoundingClientRect();
        const classes = typeof section.className === 'string' ? section.className : '';
        
        const isHeaderDetect = classes.includes('js-header-detect');
        
        // Ensure it's a block with a recognized background string
        if (
          !foundMatchingSection &&
          rect.top <= headerCenterY && 
          rect.bottom >= headerCenterY &&
          (rect.width > window.innerWidth * 0.5 || isHeaderDetect) // Mostly full-width elements or explicitly marked
        ) {
          if (classes.includes('bg-dark-900') || classes.includes('bg-dark-800') || section.id === 'video-section' || isHeaderDetect) {
            currentBg = 'transparent';
            darkSection = true;
            foundMatchingSection = true;
          } else if (classes.includes('bg-brand-sand-light')) {
            currentBg = 'bg-brand-sand-light/95';
            foundMatchingSection = true;
          } else if (classes.includes('bg-brand-sand') && !classes.includes('bg-brand-sand-light')) {
            currentBg = 'bg-brand-sand/95';
            foundMatchingSection = true;
          } else if (classes.includes('bg-white ')) {
            currentBg = 'bg-white/95';
            foundMatchingSection = true;
          } else if (classes.includes('bg-brand-green')) {
            currentBg = 'bg-brand-green/95';
            foundMatchingSection = true;
          }
        }
      }
      
      setHeaderBgClass(currentBg);
      setIsOverDarkSection(darkSection);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // setTimeout to allow initial layout to settle
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  const navLinks = [
    { name: 'FORSIDE', href: '/' },
    { name: 'PROJEKTER', href: '/projekter' },
    { name: 'OM MIG', href: '/om-mig' },
    { name: 'KONTAKT', href: '/kontakt' },
  ];
  
  // When over a dark section (like video) OR at the top of /projekter
  const isTransparentOnDark = isOverDarkSection || (!isScrolled && location.pathname === '/projekter');
  
  const isSolidHeader = (isScrolled || (location.pathname !== '/' && location.pathname !== '/projekter')) && !isTransparentOnDark;
  
  const textColorClass = isTransparentOnDark ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:text-brand-green' : 'text-gray-600 hover:text-brand-green';
  const logoFilter = isTransparentOnDark ? 'brightness-0 invert opacity-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]' : 'mix-blend-multiply';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolidHeader 
            ? `${headerBgClass} backdrop-blur-md py-2 border-b border-black/5` 
            : isTransparentOnDark && isScrolled
              ? 'bg-transparent py-2'
              : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 relative z-50">
            <img 
              src={logoImage} 
              alt="Søren Kjeldsen Logo" 
              className={`h-14 md:h-16 w-auto transition-all duration-500 ${logoFilter}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href === '/projekter' && location.pathname.startsWith('/projekt/'));
              const linkColorClass = isActive 
                ? (isTransparentOnDark ? 'text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]' : 'text-brand-green font-semibold') 
                : (isTransparentOnDark ? 'text-white hover:text-brand-green drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]' : 'text-gray-600 hover:text-brand-green');
              return link.name === 'PROJEKTER' ? (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className={`text-sm tracking-[0.15em] transition-colors uppercase py-4 ${linkColorClass}`}
                  >
                    {link.name}
                  </Link>
                  <div className="absolute top-[80%] left-0 pt-6 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className={`bg-transparent flex flex-col gap-3 pt-2 ${isTransparentOnDark ? 'text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]' : 'text-gray-500'}`}>
                      <Link to="/projekt/halgaard-daginstitution" className={`flex items-center gap-1 text-[11px] tracking-widest transition-all uppercase ${isTransparentOnDark ? 'hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:translate-x-1' : 'hover:text-brand-green hover:translate-x-1'}`}>
                        <ChevronRight size={12} className="opacity-70" />
                        HALGÅRD DAGINSTITUTION
                      </Link>
                      <Link to="/projekt/jm-moerks-gade" className={`flex items-center gap-1 text-[11px] tracking-widest transition-all uppercase ${isTransparentOnDark ? 'hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:translate-x-1' : 'hover:text-brand-green hover:translate-x-1'}`}>
                        <ChevronRight size={12} className="opacity-70" />
                        J. M. MØRKS GADE
                      </Link>
                      <Link to="/projekt/lokesvej" className={`flex items-center gap-1 text-[11px] tracking-widest transition-all uppercase ${isTransparentOnDark ? 'hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:translate-x-1' : 'hover:text-brand-green hover:translate-x-1'}`}>
                        <ChevronRight size={12} className="opacity-70" />
                        LOKESVEJ
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm tracking-[0.15em] transition-colors uppercase ${linkColorClass}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden relative z-50 transition-colors ${isTransparentOnDark ? 'text-white hover:text-white/80' : 'text-gray-600 hover:text-dark-900'}`}
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-brand-sand flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-gray-500 hover:text-dark-900"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (link.href === '/projekter' && location.pathname.startsWith('/projekt/'));
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-serif tracking-widest transition-colors ${isActive ? 'text-brand-green' : 'text-dark-900 hover:text-brand-green'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
