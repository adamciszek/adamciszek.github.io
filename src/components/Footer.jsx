import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer__bg">
      <div className="footer__container container">
        <div className="footer__col footer__col--left">
          <h1 className="footer__title">Adam Ciszek</h1>
          <span className="footer__subtitle">Software Developer</span>
        </div>
        <ul className="footer__links footer__col footer__col--center">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#resume" className="footer__link">Resume</a>
          </li>
          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>
        <div className="footer__socials footer__col footer__col--right">
          <a
            href="https://github.com/adamciszek"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
            aria-label="GitHub"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/adamciszek/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
            aria-label="LinkedIn"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
      </div>
      <hr className="footer__divider" />
      <p className="footer__copy">
        &#169; Ciszek, 2024 All rights reserved.
        <br />v3.1
      </p>
    </div>
  </footer>
);

export default Footer; 