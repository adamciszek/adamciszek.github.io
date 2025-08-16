import React, { useState } from 'react';

const experienceData = [
  {
    title: 'Senior Analyst, IT Quality Assurance',
    subtitle: 'CIBC',
    date: 'April 2025 - Now',
    side: 'left',
  },
  {
    title: 'Front-End Developer',
    subtitle: 'Saving Strides',
    date: 'September 2024 - Now',
    side: 'right',
  },
  {
    title: 'Software Technical Support Analyst',
    subtitle: 'ADL Process',
    date: 'November 2024 - January 2025',
    side: 'left',
  },
  {
    title: 'Sales Development Researcher',
    subtitle: 'Cinchy',
    date: 'July 2024 - November 2024',
    side: 'right',
  },
  {
    title: 'Teachers Assistant',
    subtitle: "Queen's University",
    date: 'August 2023 - May 2024',
    side: 'left',
  },
];

const educationData = [
  {
    title: 'Bachelor of Computing (Honours)',
    subtitle: "Queen's University",
    date: 'September 2020 - May 2024',
    side: 'left',
  },
  {
    title: 'Ontario Secondary School Diploma',
    subtitle: "St. Michael's College School",
    date: 'September 2016 - June 2020',
    side: 'right',
  },
];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const renderTimeline = (data) => (
    data.map((item, idx) => (
      <div className="qualification__data" key={item.title + idx}>
        {item.side === 'left' ? (
          <>
            <div style={{ textAlign: 'right' }}>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                {item.date}
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              {idx !== data.length - 1 && <span className="qualification__line"></span>}
            </div>
            <div></div>
          </>
        ) : (
          <>
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              {idx !== data.length - 1 && <span className="qualification__line"></span>}
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                {item.date}
              </div>
            </div>
          </>
        )}
      </div>
    ))
  );

  return (
    <section className="qualifications section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex${activeTab === 'experience' ? ' qualification__active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={`qualification__button button--flex${activeTab === 'education' ? ' qualification__active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          {/* EXPERIENCE CONTENT */}
          <div
            className={`qualification__content${activeTab === 'experience' ? ' qualification__active' : ''}`}
            data-content
            id="experience"
          >
            {renderTimeline(experienceData)}
          </div>
          {/* EDUCATION CONTENT */}
          <div
            className={`qualification__content${activeTab === 'education' ? ' qualification__active' : ''}`}
            data-content
            id="education"
          >
            {renderTimeline(educationData)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification; 