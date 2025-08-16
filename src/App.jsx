import React, { useEffect } from 'react';
import './styles/styles.css';
import '@iconscout/unicons/css/line.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Qualification from './components/Qualification';

function App() {
  useEffect(() => {
    // Scroll header effect
    const scrollHeader = () => {
      const nav = document.getElementById('header');
      if (window.scrollY >= 80) {
        nav && nav.classList.add('scroll-header');
      } else {
        nav && nav.classList.remove('scroll-header');
      }
    };
    // Scroll up button
    const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up');
      if (window.scrollY >= 560) {
        scrollUp && scrollUp.classList.add('show-scroll');
      } else {
        scrollUp && scrollUp.classList.remove('show-scroll');
      }
    };
    window.addEventListener('scroll', scrollHeader);
    window.addEventListener('scroll', scrollUp);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
      window.removeEventListener('scroll', scrollUp);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
      <Footer />
    </>
  );
}

export default App;
