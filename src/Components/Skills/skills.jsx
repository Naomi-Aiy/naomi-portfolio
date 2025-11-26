// Skills.jsx
import React from 'react';
import './Skills.css';
import Star from '../Star/Star';

const skillsData = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript','VBA']
  },
  {
    category: 'Frameworks',
    skills: ['React.js','Flask', 'Selenium', 'Beautiful Soup', 'MATLAB', 'Replit', 'Excel', 'Maple',]
  },
  {
    category: 'Tools',
    skills: ['Github','Shopify', 'Wordpress']
  },
  {
    category: 'Design Tools',
    skills: ['Figma', 'Photoshop', 'Illustrator', 'InDesign','Adobe XD']
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Star count={30} />
      <h2>Skills</h2>
      <div className="Group-Of-Cards">
        {skillsData.map((item, index) => (
          <div className="Card">
          <h1>{item.category}</h1>
          <p>{item.skills.join(', ')}</p>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default Skills;
