import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
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
        
        // Ensure it's a block with a recognized background string
        if (
          !foundMatchingSection &&
          rect.top <= headerCenterY && 
          rect.bottom >= headerCenterY &&
          rect.width > window.innerWidth * 0.5 // Mostly full-width elements
        ) {
          if (classes.includes('bg-dark-900') || classes.includes('bg-dark-800') || section.id === 'video-section') {
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
  
  const textColorClass = isTransparentOnDark ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-brand-green';
  const logoFilter = isTransparentOnDark ? 'brightness-0 invert opacity-90' : 'mix-blend-multiply';

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
            {navLinks.map((link) => (
              link.name === 'PROJEKTER' ? (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className={`text-sm tracking-[0.15em] transition-colors uppercase py-4 ${textColorClass}`}
                  >
                    {link.name}
                  </Link>
                  <div className="absolute top-full left-0 mt-0 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-brand-sand/95 backdrop-blur-md border border-black/5 shadow-sm py-2 text-gray-600">
                      <Link to="/projekt/halgaard-daginstitution" className="block px-4 py-3 text-[11px] tracking-widest hover:text-brand-green hover:bg-brand-sand-light transition-colors uppercase">
                        HALGÅRD DAGINSTITUTION
                      </Link>
                      <Link to="/projekt/jm-moerks-gade" className="block px-4 py-3 text-[11px] tracking-widest hover:text-brand-green hover:bg-brand-sand-light transition-colors uppercase">
                        J. M. MØRKS GADE
                      </Link>
                      <Link to="/projekt/lokesvej" className="block px-4 py-3 text-[11px] tracking-widest hover:text-brand-green hover:bg-brand-sand-light transition-colors uppercase">
                        LOKESVEJ
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm tracking-[0.15em] transition-colors uppercase ${textColorClass}`}
                >
                  {link.name}
                </Link>
              )
            ))}
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif tracking-widest text-dark-900 hover:text-brand-green transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
