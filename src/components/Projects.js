import React from 'react';
import '../App.css';

// Функция для динамической загрузки изображений
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const projects = [
  {
    title: 'Проект 1',
    description: 'ToDoList',
    image: 'project1.png',
    link: 'https://my-pwa-ap.netlify.app'
  },
  {
    title: 'Проект 2',
    description: 'Hover',
    image: 'project2.png',
    link: 'https://task4-1.netlify.app'
  },
  {
    title: 'Проект 3',
    description: 'Expenses',
    image: 'project3.png',
    link: 'https://expense2024.netlify.app'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Мои проекты</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={images[project.image]} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Подробнее</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
