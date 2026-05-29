import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';

import VideoSection from './components/VideoSection';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();
  const hideContact = location.pathname !== '/' && location.pathname !== '/kontakt';

  return (
    <>
      <Header />
      <Outlet />
      {!hideContact && <Contact />}
    </>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
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
      <ScrollToTop />
      <div className="min-h-screen font-sans">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projekter" element={
              <PageWrapper>
                <VideoSection />
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
              <div className="pt-32 lg:pt-48 pb-8">
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
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

