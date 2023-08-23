import PropTypes from "prop-types";

const Project = ({ project }) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h5 className="">{project.title}</h5>
          <p className="">{project.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group gap-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-dark"
              >
                View
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-dark"
              >
                Code
              </a>
            </div>
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
