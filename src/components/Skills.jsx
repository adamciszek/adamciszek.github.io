import React, { useState } from 'react';

const skillsSections = [
  {
    title: 'Software Development',
    icon: 'uil uil-mobile-android',
    skills: [
      { name: 'Java', percent: '90', class: 'skills__90' },
      { name: 'Python', percent: '90', class: 'skills__90' },
      { name: 'C', percent: '70', class: 'skills__70' },
      { name: 'Bash', percent: '50', class: 'skills__50' },
    ],
  },
  {
    title: 'Web Development',
    icon: 'uil uil-brackets-curly',
    skills: [
      { name: 'React', percent: '70', class: 'skills__70' },
      { name: 'HTML', percent: '70', class: 'skills__70' },
      { name: 'CSS', percent: '80', class: 'skills__80' },
      { name: 'JavaScript', percent: '80', class: 'skills__80' },
      { name: 'Tailwind', percent: '70', class: 'skills__70' },
    ],
  },
  {
    title: 'Development Tools',
    icon: 'uil uil-analytics',
    skills: [
      { name: 'Firebase', percent: '80', class: 'skills__80' },
      { name: 'Figma', percent: '80', class: 'skills__80' },
      { name: 'RestAPI', percent: '90', class: 'skills__90' },
      { name: 'MongoDB', percent: '80', class: 'skills__80' },
      { name: 'Jqwik', percent: '80', class: 'skills__80' },
      { name: 'MS Office', percent: '90', class: 'skills__90' },
      { name: 'Photoshop', percent: '80', class: 'skills__80' },
      { name: 'ALM', percent: '90', class: 'skills__90' },
      { name: 'Visual Basic', percent: '80', class: 'skills__80' },
    ],
  },
];

const Skills = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = idx => {
    setOpenSections(openSections =>
      openSections.includes(idx)
        ? openSections.filter(i => i !== idx)
        : [...openSections, idx]
    );
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        {skillsSections.map((section, idx) => (
          <div
            className={`skills__content ${openSections.includes(idx) ? 'skills__open' : 'skills__close'}`}
            key={section.title}
          >
            <div className="skills__header" onClick={() => toggleSection(idx)}>
              <i className={`${section.icon} skills__icon`}></i>
              <div>
                <h1 className="skills__title">{section.title}</h1>
              </div>
              <i
                className="uil uil-angle-down skills__arrow"
                style={{ transform: openSections.includes(idx) ? 'rotate(180deg)' : 'rotate(0deg)' }}
              ></i>
            </div>
            <div className="skills__list grid" style={{ display: openSections.includes(idx) ? 'grid' : 'none' }}>
              {section.skills.map(skill => (
                <div className="skills__data" key={skill.name}>
                  <div className="skills__titles">
                    <h3 className="skills__name">{skill.name}</h3>
                    <span className="skills__number">{skill.percent}%</span>
                  </div>
                  <div className="skills__bar">
                    <span className={`skills__percentage ${skill.class}`}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 