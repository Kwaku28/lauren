import { useState } from "react";
import Navigation from "./components/navigation";
import Profile from "./components/profile";
import Project from "./components/projects";
import projectData from "./components/data/projectData";
import "./styles/App.css";
import "./styles/gradient.css"

function App() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [currentContent, setCurrentContent] = useState("profile");
  const [activeGradients, setActiveGradients] = useState([]);

  // Function to handle toggling between Profile and projects
  const toggleContent = (gradient) => {
    if (currentContent === "profile") {
      if (currentProjectIndex !== null) {
        setCurrentContent("project");
      }
    } else {
      setCurrentContent("profile");
    }

    toggleGradient(gradient);
  };

  // Function to handle toggling between project titles and details
  const toggleProject = (index, gradient) => {
    if (currentProjectIndex === index) {
      toggleContent();
    } else {
      setCurrentProjectIndex(index);
      setCurrentContent("project");
    }

    toggleGradient(gradient);
  };

  const toggleToProfile = () => {
    setCurrentContent('profile');
  };

  const toggleGradient = (gradient) => {
    if (activeGradients.includes(gradient)) {
      setActiveGradients(activeGradients.filter((g) => g !== gradient));
    } else {
      setActiveGradients([...activeGradients, gradient]);
    }
  };

  return (
    <>
      <div className={`${activeGradients.includes('gradient1') ? 'gradient1' : ''} ${activeGradients.includes('gradient2') ? 'gradient2' : ''} ${activeGradients.includes('gradient3') ? 'gradient3' : ''} ${activeGradients.includes('gradient4') ? 'gradient4' : ''}`}>
      <div className="hello">
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
                    onClick={() => toggleProject(index, 'gradient4')}
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
      </div>
      </div>
    </>
  );
}

export default App;
