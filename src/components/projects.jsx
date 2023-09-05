import PropTypes from "prop-types";
import '../styles/projects.css'

const Project = ({ project }) => {
  return (
    <div className="project-container">
      <h2>{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
