// ProjectsList.js
import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust the path based on your project structure
import projectsData from './projectsData'; // Adjust the path based on your project structure
import './ProjectsList.css'

const ProjectsList = () => {
  return (
    <ul className="projects-grid">
      {Object.keys(projectsData).map((key) => (
        <ProjectCard key={key} projects={projectsData} projectKey={key} />
      ))}
    </ul>
  );
};

export default ProjectsList;
