import React, { useState } from 'react';
import './Projects.css';
import Star from '../Star/Star';
import EE from '../../assets/EE.png'; 
import BackStage from '../../assets/Backstage.png'; 
import Jarmony from '../../assets/Jarmony.png'; 
import KingPool from '../../assets/King Pool.png'; 
import Pharmacold from '../../assets/Pharmacold.png'; 
import PortImg from '../../assets/Portfolio Landing Page.png'; 
import SSM from '../../assets/SSM.png'; 
import Ascent from '../../assets/Ascent Img.png'; 
import Abode from '../../assets/Abode Img.jpg'; 
import Scraper from '../../assets/Scraper.png'; 
import Luminara from '../../assets/Luminara.png'; 

const projectsData = [
  {
    title: 'Backstage',
    types: ['UI/UX Design'],
    description: 'Designed a music event management interface prototype with Figma, focused on clean usability and navigation.',
    skills: ['Figma'],
    image: BackStage,
    buttons: [
      { text: ' Prototype', url: 'https://www.figma.com/proto/X5VRih01MqYC2Xzpu9NUk4/Backstage?node-id=64-5609&t=o7E0ptRN3yqKWTrc-1&starting-point-node-id=64%3A5609', type: 'primary' },
      { text: ' Slide Deck', url: 'https://drive.google.com/file/d/1pOwAnvpsDIeotwPubkfSYwOHcpqa-1fs/?usp=sharing', type: 'secondary' }
    ]
  },
  {
    title: 'SSM Heating & Cooling',
    types: ['Web Development', 'UI/UX Design'],
    description: 'Developed and designed a responsive company website for a heating and cooling business using WordPress and Figma.',
    skills: ['WordPress', 'Figma', 'CSS'],
    image: SSM,
    buttons: [
      { text: ' Live Site', url: 'https://heatingontario.com/', type: 'primary' },
      { text: ' Figma Design', url: 'https://www.figma.com/proto/VrdGjy97ibhMInpp0n9bZw/Schomberg-Sheet-Metal?node-id=1-2&p=f&t=E0QO59AUuDkqLTQd-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2', type: 'secondary' }
    ]
  },
  {
    title: "Elizabeth's Espresso's",
    types: ['Web Development', 'UI/UX Design'],
    description: 'Created a coffee shop website with an elegant design and interactive menu section for improved customer engagement.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    image: EE,
    buttons: [
      { text: ' Figma Design', url: 'https://www.figma.com/proto/4MtM4uwGqoQBS9hIfplqhd/Elizabeth-s-Espresso-s-Site?node-id=16-2&t=HxsUSwl6uVo0IH54-1', type: 'secondary' }
    ]
  },
  {
    title: 'Portfolio Website',
    types: ['Web Development'],
    description: 'A personal portfolio site to showcase my projects, skills, and contact information with a modern responsive design.',
    skills: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Figma'],
    image: PortImg,
    buttons: [
      { text: 'GitHub Repo', url: 'https://github.com/Naomi-Aiy/Naomi-Portfolio', type: 'primary' }
    ]
  },
  {
    title: 'Web Dev Job Scraper',
    types: ['Programming'],
    description: 'Created a website that scrapes job information from different job boards and consolidates it in one place.',
    skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'Flask', 'Selenium', 'Beautiful Soup'], 
    image: Scraper,
    buttons: [
      { text: 'GitHub Repo', url: 'https://github.com/Naomi-Aiy/Web-Dev-Job-Scraper', type: 'primary' }
    ]
  },
  {
    title: 'Luminara Landing Page',
    types: ['UI/UX Design'],
    description: 'Completed a commissioned project to design a landing page for a marketing agency.',
    skills: ['Figma'], 
    image: Luminara,
    buttons: [
      { text: 'Figma Link', url: 'https://www.figma.com/proto/gSPMFqHQCSQXcPUvrL6S7v/Luminara-Web-Trial?node-id=6-35&p=f&t=Q3wapqCvWps2tnUl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A35', type: 'primary' }
    ]
  },
  {
    title: 'Jarmony: Tales of Enchantment',
    types: ['Programming'],
    description: 'A Java-based text adventure game featuring object-oriented design principles and narrative branching.',
    skills: ['Java'],
    image: Jarmony,
    buttons: [
      { text: 'GitHub Repo', url: 'https://github.com/Naomi-Aiy/Jarmony-TalesofEnchantment', type: 'primary' }
    ]
  },
  {
    title: 'King Air',
    types: ['Web Development', 'UI/UX Design'],
    description: 'Built a modern website for a pool dehumidification company with a focus on showcasing services and client testimonials.',
    skills: ['WordPress', 'Figma', 'CSS'],
    image: KingPool,
    buttons: [
      { text: 'Live Site', url: 'https://king-air.com/', type: 'primary' },
      { text: 'Figma Design', url: 'https://www.figma.com/proto/0wN0NUx8ssc8VPVSRTVPNF/King-Air?node-id=0-1&t=wB8vIF9U61mOsstV-1', type: 'secondary' }
    ]
  },
  {
    title: 'Ascent',
    types: ['Web Development', 'UI/UX Design'],
    description: 'Created a community-driven platform that helps people with disabilities discover and review accessible public spaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    image: Ascent,
    buttons: [
      { text: 'Devpost ', url: 'https://devpost.com/software/ascent-4dg7fw', type: 'primary' },
      { text: 'Github Repo ', url: 'https://github.com/Naomi-Aiy/Ascent', type: 'secondary' }
    ]
  },
  {
    title: 'Pharmacold',
    types: ['Web Development', 'UI/UX Design'],
    description: 'Refreshed the landing page for an outdated website for a vaccine refridegeration company with an emphasis on showcasing products.',
    skills: ['WordPress', 'Figma', 'CSS'],
    image: Pharmacold,
    buttons: [
      { text: 'Live Site', url: 'https://pharmacold.ca/', type: 'primary' },
      { text: 'Figma Design', url: 'https://www.figma.com/proto/z6E9PmQKb7Gg3jqDjaDPSu/Pharmacold?t=wB8vIF9U61mOsstV-1', type: 'secondary' }
    ]
  },
  {
    title: 'Abode',
    types: ['Web Development', 'UI/UX Design'],
    description: 'Created a web platform that helps homeless individuals quickly find essential resources like food, shelter, and clothing.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    image: Abode,
    buttons: [
      { text: 'Devpost ', url: 'https://devpost.com/software/abode-ljsth4', type: 'primary' },
      { text: 'Figma Link ', url: 'https://www.figma.com/proto/KTgzAQpXn6G8kVoFRNMNRS/Abode?node-id=53-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=53%3A2', type: 'secondary' }
    ]
  },
];
;

const projectTypes = ['All','Web Development', 'Programming', 'UI/UX Design'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.types.includes(activeFilter));

  return (
    <section className="projects" id="projects">
      <Star count={80} />
      <h2>Projects*</h2>
      <p className='disclaimer'>*If the website differs from the product shown here, it is
      because the live site may have been updated or modified by the client after delivery.</p>

      <div className="filter-bar">
        {projectTypes.map((type) => (
          <button
            key={type}
            className={activeFilter === type ? 'active' : ''}
            onClick={() => setActiveFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="projects-grid">
  {filteredProjects.map((project, index) => (
    <div key={index} className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-skills">
        {project.skills.map((skill, i) => (
          <span key={i} className="skill-chip">{skill}</span>
        ))}
      </div>

      <div className="project-buttons">
  {project.buttons?.map((btn, i) => (
    <a
      key={i}
      href={btn.url}
      className={`project-btn ${btn.type === 'secondary' ? 'secondary' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {btn.text}
    </a>
  ))}
</div>

    </div>
  ))}
</div>

    </section>
  );
};

export default Projects;
