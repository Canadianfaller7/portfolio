import { Outlet, Link } from "react-router-dom";

// import ProfPic from '../../assets/images/professional-photo.png';
import './nav.css';

const Nav = () => {
  return (
    <>
      <nav>
        <div className="navContainer">
          <h2>
            Spencer Merrill
          </h2>
          {/* <img className="navPic" src={ProfPic} alt="Logo" /> */}
          <ul className="navMenu">
            <li><Link to="/react-portfolio">About</Link></li>
            <li><Link to="/react-portfolio/projects">Projects</Link></li>
            <li><Link to="/react-portfolio/contact">Contact</Link></li>
            <li><Link to="https://docs.google.com/document/d/1aS4rCwNPa6NtA_HEjSf9jAVnAMHiTjzIM7FdoILagqM/edit?usp=sharing" target="_blank">Resume</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Nav;