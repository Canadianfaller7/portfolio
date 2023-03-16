import { Link } from "react-router-dom";

// import ProfPic from '../../assets/images/professional-photo.png';
import './nav.css';

const Nav = ({ currentPage, handlePageChange }) => {

  return (
    <>
      <nav>
        <div className="navContainer">
          <h2>
            Spencer Merrill
          </h2>
          {/* <img className="navPic" src={ProfPic} alt="Logo" /> */}
          <ul className="navMenu">
            {/* <li>
              <Link to="" onClick={() => handlePageChange("")} className={currentPage === "" ? "active" : ""}></Link>
            </li> */}
            <li>
              <Link to="/react-portfolio" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >About</Link>
            </li>
            <li>
              <Link to="/react-portfolio/projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</Link>
            </li>
            <li>
              <Link to="/react-portfolio/contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </li>
            <li>
              <Link to="/react-portfolio/resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
};

export default Nav;
