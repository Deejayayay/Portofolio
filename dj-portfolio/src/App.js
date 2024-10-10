import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');

    const handleScroll = () => {
      const heroHeight = heroSection.offsetHeight;
      if (window.scrollY > heroHeight) {
        navbar.classList.add('show');
      } else {
        navbar.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
