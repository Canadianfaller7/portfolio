import { NavLink } from "react-router-dom";

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
              <NavLink exact to="/" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
};

export default Nav;
