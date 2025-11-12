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
    title: "Image Gallery",
    description: "A single-page gallery featuring nine clickable images with responsive design. Built with React.",
    image: "/images/image-page.png",
    link: "https://github.com/julitska/image-page",
  },
  {
    title: "Scroll Page Demo",
    description: "A single-page layout built with HTML, custom CSS, and JavaScript. Shows interactive scrolling.",
    image: "/images/scroll-pages.png",
    link: "https://github.com/julitska/scroll-pages",
  },
  {
    title: "Music Landing Page",
    description: "A responsive and interactive, single-page site built with HTML, custom CSS, and JavaScript.",
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
