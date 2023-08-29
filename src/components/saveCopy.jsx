import { useState } from "react";
import Navigation from "./components/navigation";
import Profile from "./components/profile";
import Project from "./components/projects";
import projectData from "./components/data/projectData";
import "./styles/App.css";

function App() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [currentContent, setCurrentContent] = useState("profile");

  // Function to handle toggling between Profile and projects
  const toggleContent = () => {
    if (currentContent === "profile") {
      if (currentProjectIndex !== null) {
        setCurrentContent("project");
      }
    } else {
      setCurrentContent("profile");
    }
  };

  // Function to handle toggling between project titles and details
  const toggleProject = (index) => {
    if (currentProjectIndex === index) {
      toggleContent();
    } else {
      setCurrentProjectIndex(index);
      setCurrentContent("project");
    }
  };

  const toggleToProfile = () => {
    setCurrentContent('profile');
  };

  return (
    <>
      <div className="top-border"></div>
      <Navigation toggleProfile={toggleToProfile} />

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {currentContent === "profile" ? (
              <Profile />
            ) : (
              currentProjectIndex !== null && (
                <Project project={projectData[currentProjectIndex]} />
              )
            )}
          </div>
          <div className="col-md-3">
            <h2>Projects</h2>
            <aside></aside>
            <div className="overlay"></div>
            <ul>
              {projectData.map((project, index) => (
                <li key={index}>
                  <button
                    onClick={() => toggleProject(index)}
                    className={`project-btn ${
                      index === currentProjectIndex ? "" : ""
                    }`}
                  >
                    {project.title}
                  </button>
                  <span className="line"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
