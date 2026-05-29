import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';

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
      <div className="min-h-screen font-sans">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projekter" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/om-mig" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/projekt/:id" element={<ProjectDetails />} />
          </Route>
          {/* For kontakt we don't need double contact, the Layout has Contact as footer */}
          <Route path="/kontakt" element={
            <>
              <Header />
              <div className="pt-20 lg:pt-32">
                <Contact />
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

