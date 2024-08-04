// ProjectCard.js
import React from 'react';
import './ProjectCard.css'; 


const ProjectCard = ({ projects, projectKey }) => {
  const project = projects[projectKey];

  return (
    <li className="projects-card">
      <div className="card-header">
        <div className="folder-icon">
          <span role="img" aria-label="folder-icon" style={{ fontSize: '35px' }}>
            📂
          </span>
        </div>
        <div className="external-links">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
          <svg className="hoverIcon" xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
            <path d="M14 0.689255C12.1615 0.689255 10.341 1.05328 8.64243 1.76054C6.94387 2.4678 5.40053 3.50445 4.1005 4.81131C1.475 7.45061 0 11.0303 0 14.7628C0 20.9833 4.018 26.2609 9.576 28.1327C10.276 28.2453 10.5 27.809 10.5 27.429V25.0506C6.622 25.895 5.796 23.1647 5.796 23.1647C5.152 21.5322 4.242 21.0959 4.242 21.0959C2.968 20.2234 4.34 20.2515 4.34 20.2515C5.74 20.35 6.482 21.7011 6.482 21.7011C7.7 23.8403 9.758 23.207 10.556 22.8692C10.682 21.9544 11.046 21.3352 11.438 20.9833C8.33 20.6315 5.068 19.4212 5.068 14.0591C5.068 12.497 5.6 11.2444 6.51 10.2452C6.37 9.89336 5.88 8.42971 6.65 6.52978C6.65 6.52978 7.826 6.1498 10.5 7.96529C11.606 7.65567 12.81 7.50086 14 7.50086C15.19 7.50086 16.394 7.65567 17.5 7.96529C20.174 6.1498 21.35 6.52978 21.35 6.52978C22.12 8.42971 21.63 9.89336 21.49 10.2452C22.4 11.2444 22.932 12.497 22.932 14.0591C22.932 19.4352 19.656 20.6174 16.534 20.9693C17.038 21.4055 17.5 22.264 17.5 23.5729V27.429C17.5 27.809 17.724 28.2594 18.438 28.1327C23.996 26.2468 28 20.9833 28 14.7628C28 12.9147 27.6379 11.0846 26.9343 9.3771C26.2307 7.66961 25.1995 6.11816 23.8995 4.81131C22.5995 3.50445 21.0561 2.4678 19.3576 1.76054C17.659 1.05328 15.8385 0.689255 14 0.689255Z" fill="currentColor"/>
          </svg>
        </a>
        </div>
      </div>

      <div className="card-title">{project.title}</div>
      <div className="card-desc">{project.desc}</div>
      <div className="card-tech">{project.techStack}</div>
    </li>
  );
};

export default ProjectCard;
