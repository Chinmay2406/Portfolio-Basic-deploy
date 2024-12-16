import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';

function App() {
  useEffect(() => {
    // Startup animation
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      <CustomCursor />
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8 relative">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;