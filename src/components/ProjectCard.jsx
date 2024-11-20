function ProjectCard({ project = {} }) {
  return (
    <a href={project.siteLink} target="_blank" className="card-container">
      <div className="card">
        <div className="front-content">
          <img src={project.siteImg} alt="Project Screenshot" />
        </div>
        <div className="content">
          <p className="heading">{project.title}</p>
          <p>Technologies: {project.technologies}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
