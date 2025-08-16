import React from 'react';
import blisssfulllTreatsImg from '../assets/images/blisssfulll-treats-project-image.png';
import youtubeCloneImg from '../assets/images/youtube-clone-project-image.jpg';
import platinumPropertiesImg from '../assets/images/platinum-properties-project-image.jpg';
import pbtImg from '../assets/images/pbt-project-image.jpeg';
import sokobanImg from '../assets/images/sokoban-project-image.jpg';
import taskManagerImg from '../assets/images/taskmanager-project-image.jpg';

const Projects = () => (
  <section className="projects section" id="projects">
    <h2 className="section__title">Projects</h2>
    <span className="section__subtitle">View My Personal Projects</span>
    <div className="projects__container container">
      <div className="projects__scroll">
        {/* Project 1 - Blisssfulll Treats */}
        <div className="project__card" onClick={() => window.open('https://github.com/adamciszek/blisssfulll-treats', '_blank')}>
          <img src={blisssfulllTreatsImg} alt="Blisssfulll Treats Project" className="project__img" />
          <h3 className="project__title">Blisssfulll Treats business website</h3>
          <p className="project__description">Build a functional & reactive reactJS business website for a client to accept orders and display other business information. The gallery is integrated with a database to store images, tags, and metadata.</p>
        </div>
        {/* Project 2 - Youtube Clone */}
        <div className="project__card" onClick={() => window.open('https://github.com/adamciszek/youtube-clone', '_blank')}>
          <img src={youtubeCloneImg} alt="Project 2" className="project__img" />
          <h3 className="project__title">Youtube Clone</h3>
          <p className="project__description">Built a responsive replica of YouTube using ReactJS and Firebase.</p>
        </div>
        {/* Project 3 - Platinum Properties */}
        <div className="project__card" onClick={() => window.open('https://github.com/adamciszek/platinum-properties-landscaping', '_blank')}>
          <img src={platinumPropertiesImg} alt="Project 3" className="project__img" />
          <h3 className="project__title">Platinum Properties Business Website</h3>
          <p className="project__description">Built a functional static website using html and css for Platinum Properties, a landscaping company.</p>
        </div>
        {/* Project 4 - Property-Based Testing */}
        <div className="project__card" onClick={() => window.open('https://github.com/adamciszek/TSP-PBT', '_blank')}>
          <img src={pbtImg} alt="Project 4" className="project__img" />
          <h3 className="project__title">Property-Based Testing</h3>
          <p className="project__description">Used java and the jqwik library to evaluate algorithm efficiency and scalability of the traveling salesperson problem, which lead to insights for optimizing computational resources.</p>
        </div>
        {/* Project 5 - Sokoban */}
        <div className="project__card" onClick={() => window.open('https://github.com/adamciszek/sokoban-game', '_blank')}>
          <img src={sokobanImg} alt="Project 5" className="project__img" />
          <h3 className="project__title">Sokoban</h3>
          <p className="project__description">Created a fully functional sokoban game in java, incorporating classic mechanics and additional custom features</p>
        </div>
        {/* Project 6 - Task Manager */}
        <div className="project__card" onClick={() => window.open('https://github.com/Zachary-Kiz/CISC-327-Task-Management', '_blank')}>
          <img src={taskManagerImg} alt="Project 6" className="project__img" />
          <h3 className="project__title">Task Manager System</h3>
          <p className="project__description">Developed a task management system supporting user accounts, project tracking, task management, and more.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects; 