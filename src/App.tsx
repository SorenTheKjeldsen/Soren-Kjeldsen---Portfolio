import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import VideoSection from './components/VideoSection';
import ProjectIntro from './components/ProjectIntro';
import SplashScreen from './components/SplashScreen';

function ScrollToTop() {
  const { pathname } = useLocation();
  const action = useNavigationType();

  React.useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, action]);

  return null;
}

function Layout() {
  const location = useLocation();
  const hideContact = location.pathname !== '/' && location.pathname !== '/kontakt';
  const [contentReady, setContentReady] = useState(location.pathname !== '/');

  useEffect(() => {
    if (location.pathname !== '/') {
      setContentReady(true);
      return;
    }
    const handleLogoSettled = () => setContentReady(true);
    window.addEventListener('logo_settled', handleLogoSettled);
    return () => window.removeEventListener('logo_settled', handleLogoSettled);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: location.pathname === '/' ? 0 : 1 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Outlet />
        {!hideContact && <Contact />}
        <Footer />
      </motion.div>
    </>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <ProjectIntro />
      <Projects />
    </main>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}

export default function App() {
  return (
    <Router>
      <SplashScreen />
      <ScrollToTop />
      <div className="min-h-screen font-sans bg-brand-sand">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projekter" element={
              <PageWrapper>
                <VideoSection />
                <ProjectIntro />
                <Projects />
              </PageWrapper>
            } />
            <Route path="/om-mig" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/projekt/:id" element={<ProjectDetails />} />
          </Route>
          {/* Kontakt-side med kontaktformular og tilhørende sektion */}
          <Route path="/kontakt" element={
            <main className="bg-brand-sand min-h-screen pt-12 md:pt-16">
              <Header />
              <Contact />
              <Footer />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

