import PropTypes from "prop-types";
import lauren from "/lauren.png";
import Nav from "react-bootstrap/Nav";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

const Navigation = ({ toggleProfile }) => {

  return (
    <>
      <Nav className="navbar navbar-expand-lg">
        <div className="navigaton container-fluid d-flex justify-content-between px-5">
          <a className="nav-brand">
            <img
              src={lauren}
              alt="Logo"
              onClick={toggleProfile}
              style={{ cursor: "pointer", width: "10rem" }}
              className="logo"
            />
          </a>
          <ul className="navbar-nav me-5 gap-5">
            <li className="nav-item">
              <a
                href="mailto:rekenburg777@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/Kwaku28"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://linkedin.com/in/lawrence-amoafo-appoh"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
};

Navigation.propTypes = {
  toggleProfile: PropTypes.func.isRequired,
};

export default Navigation;
