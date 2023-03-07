import { Link } from 'react-router-dom';
import FamilyPhoto from '../../assets/images/mypicture.png';
import './about.css';

const About = () => {
  return (
    <section className="about">
      <h3 className='aboutHeader'>About Me</h3>
      <div className="aboutSection">
        <img className='heroImg' src={FamilyPhoto} alt="My family" />
        <div className="aboutText">
          <section>
            <p>My name is Spencer & Welcome to my Portfolio!<br/><br/>I am 26 years old and I currently live in Utah. I am a father to a loving daughter, and I love spending time her, my wife and our dog.<br/><br/>I currently work at Accela as a Technical Support Engineer while I am also enrolled in the University of Utah coding bootcamp to get my second certificate as a Full-Stack Developer using the MERN Stack.<br/><br/> Other than working, spending time with family, I love skateboarding, coding, and building retro gameboys. Feel free to <Link to='/contact'>contact me</Link>.</p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default About