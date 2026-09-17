import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import JobSearchBanner from './components/JobSearchBanner';
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
      <JobSearchBanner />
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
          {/* For kontakt vi don't need double contact, the Layout has Contact as footer */}
          <Route path="/kontakt" element={
            <main className="bg-brand-sand min-h-screen">
              <Header />
              <div className="pt-32 lg:pt-40 pb-0">
                <div className="container mx-auto px-6 max-w-7xl">
                  <div className="text-center">
                    <h2 className="text-4xl lg:text-6xl font-serif text-dark-900 uppercase">Kontakt</h2>
                    <p className="max-w-2xl mx-auto mt-6 text-dark-800 font-light leading-relaxed">
                      Har du et spørgsmål, eller vil du høre mere om, hvordan jeg kan bidrage til jeres team? Jeg tager gerne en uforpligtende snak og ser frem til at høre fra dig.
                    </p>
                  </div>
                </div>
              </div>
              <Contact />
              <Footer />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

