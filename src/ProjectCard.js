const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title}`}>
        <img
          src={image}
          alt={title}
          className="project-image"
        />
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={link}
        className="cta"
        target="_blank"
        rel="noopener noreferrer">
        Study Work
      </a>
    </div>
  );
};

export default ProjectCard;
