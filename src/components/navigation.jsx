import { useState } from "react";
import lauren from "/lauren.png";

const Navigation = () => {
  const [showProfile, setShowProfile] = useState(true);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <nav>
      <div>
        <img
          src={lauren}
          alt="Logo"
          onClick={toggleProfile}
          style={{ cursor: "pointer", width: "10rem" }}
        />
      </div>
      <ul>
        <li>
          <a
            href="mailto:rekenburg777@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </li>
        <li>
          <a href="https://github.com/Kwaku28" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/lawrence-amoafo-appoh"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
