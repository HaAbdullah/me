import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsArray = ['HTML/CSS', 'Python', 'Java', 'JavaScript', 'React', 'Node.js', 'Flask'];

  return (
    <div className='rectangle'>
      {skillsArray.map((skill, index) => (
        <div key={index} className='skill'>
          {skill}
        </div>
      ))}
      {skillsArray.map((skill, index) => (
        <div key={index} className='skill2'>
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;
