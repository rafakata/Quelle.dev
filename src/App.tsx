import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ScrollProgress from './components/ScrollProgress';
import CursorSpotlight from './components/CursorSpotlight';
import PageTransition from './components/PageTransition';
import './App.css';

const App: React.FC = () => {
  const basename = import.meta.env.BASE_URL !== '/' ? import.meta.env.BASE_URL : undefined;

  return (
    <Router basename={basename}>
      <div className="app-container">
        <ScrollProgress />
        <CursorSpotlight />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/trabajos/:id" element={<ProjectDetail />} />
            <Route path="/quienes-somos" element={<AboutMe />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
