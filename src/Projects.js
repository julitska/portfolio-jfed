import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Sand Spa Study Website",
    description:
      "A Spa-themed landing page built with HTML and CSS. Includes a blurred background effect.",
    image: "/images/sand-spa-preview.png",
    link: "https://github.com/julitska/Spa_Study_Project",
  },
  {
    title: "Responsive Portfolio",
    description: "A personal portfolio built with React and styled-components.",
    image: "/images/image-page.png",
    link: "https://github.com/julitska/image-page",
  },
  {
    title: "Weather App",
    description: "A simple weather app using OpenWeather API and React hooks.",
    image: "/images/scroll-pages.png",
    link: "https://github.com/julitska/scroll-pages",
  },
  {
    title: "Weather App",
    description: "A simple weather app using OpenWeather API and React hooks.",
    image: "/images/music-site.png",
    link: "https://github.com/julitska/MyMusic-site",
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card">
            <img
              src={project.image}
              alt={project.title}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
