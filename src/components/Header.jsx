import React, { useEffect } from 'react';
import favicon from '../assets/images/favicon.ico';

const Header = () => {
  useEffect(() => {
    // Highlight active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const menu = document.getElementById('nav-menu');
    const toggle = document.getElementById('nav-toggle');

    const onScroll = () => {
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);
        if (navLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
          } else {
            navLink.classList.remove('active');
          }
        }
      });
    };
    window.addEventListener('scroll', onScroll);

    // Toggle mobile menu
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
      });
    }
    // Close menu on link click (mobile)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 767) {
          menu.classList.remove('show');
        }
      });
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav">
        {/* Logo always visible */}
        <a href="#home" className="nav__logo-link">
          <img src={favicon} alt="Logo" className="nav__logo-img" />
        </a>
        {/* Hamburger icon for mobile */}
        <button className="nav__toggle" id="nav-toggle" aria-label="Toggle menu">
          <i className="uil uil-bars"></i>
        </button>
        {/* Dropdown menu */}
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">Projects</a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link">Resume</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 