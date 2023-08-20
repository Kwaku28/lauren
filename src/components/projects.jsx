import PropTypes from "prop-types";

const Project = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img
          src={project.image}
          className="card-img-top"
          alt={project.title}
          style={{ height: "225px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-secondary"
              >
                Code
              </a>
            </div>
            <small className="text-muted">{project.date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
