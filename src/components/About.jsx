import React from 'react';
import cibcImg from '../assets/images/cibc.png';
import savingStridesImg from '../assets/images/Saving-Strides-logo.png';
import queensLogoImg from '../assets/images/queenslogo.png';

const About = () => (
  <section className="about section" id="about">
    <h2 className="section__title">About Me</h2>
    <span className="section__subtitle">My Introduction</span>
    <div className="about__container container grid">
      {/* Left Column - Stacked Images (full height) */}
      <div className="about__images">
        <div className="about__image-item">
          <img src={cibcImg} alt="CIBC" className="about__image" />
        </div>
        <div className="about__image-item">
          <img src={savingStridesImg} alt="Saving Strides" className="about__image" />
        </div>
        <div className="about__image-item">
          <img src={queensLogoImg} alt="Queen's University" className="about__image" />
        </div>
      </div>
      {/* Right Column - Text Content */}
      <div className="about__data">
        <p className="about__description">
          I thrive on leading and learning from those around me and I have always set goals and outlined plans to achieve these.
          In 2024, I graduated from the Computing program at Queen's University with a specialization in fundamental computation.
          I look to enrich my strong foundation in data structures and algorithms, and further apply the experience I have using
          Python, Java, React, and javascript. Through consistency in applying my technical abilities, my strong communicative skills, and
          eagerness to learn, I thrive as a member of a dynamic team in a professional setting.
        </p>
        <div className="about__info">
          <div className="about__info-data">
            <span className="about__info-title">5+</span>
            <span className="about__info-name">Open-Source<br />Projects</span>
          </div>
          <div className="about__info-data">
            <span className="about__info-title">3+</span>
            <span className="about__info-name">Company<br />Initiatives</span>
          </div>
          <div className="about__info-data">
            <span className="about__info-title">100+</span>
            <span className="about__info-name">Developing<br />Hours</span>
          </div>
        </div>
        <p className="about__description">
          Currently I'm working as a Senior Analyst at CIBC, while continuing to pursue personal projects. I am also looking to make meaningful contributions within the community, along with supporting small businesses advance their digital presence. My
          goal is to grow within CIBC, contribute to more on Open source projects, and advance my knowledge on new and valuable tools that are widely used within the tech industry.
        </p>
      </div>
    </div>
  </section>
);

export default About; 