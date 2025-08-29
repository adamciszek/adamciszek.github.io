import React from 'react';
import adamImg from '../assets/images/adam.png';
import SplitText from './SplitText';
import TiltedCard from './TiltedCard'; // ⬅️ import new component

const Home = () => (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <aside className="home__social">
            <a href="https://www.linkedin.com/in/adamciszek/" target="_blank" rel="noopener noreferrer" className="home__social-icon">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://github.com/adamciszek" target="_blank" rel="noopener noreferrer" className="home__social-icon">
              <i className="uil uil-github-alt"></i>
            </a>
          </aside>

          <div className="blob">
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
              <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
            </svg>
          </div>

          {/* Replace static image with TiltedCard */}
          <div className="home__img">
            <TiltedCard
                imageSrc={adamImg}
                altText="My-photo"
                captionText="Adam Ciszek"
                containerHeight="320px"
                containerWidth="320px"
                imageHeight="320px"
                imageWidth="320px"
                rotateAmplitude={30}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip={true}
            />
          </div>

          <div className="home__data">
            <SplitText
                text="Hi, I'm Adam Ciszek"
                className="home__title"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                tag="h1"
            />
            <SplitText
                text="Senior Analyst @ CIBC"
                className="home__description"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                tag="p"
            />
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
);

export default Home;
