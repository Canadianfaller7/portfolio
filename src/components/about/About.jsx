import { Link } from 'react-router-dom';
import FamilyPhoto from '../../assets/images/mypicture.png';

const About = () => {
  return (
    <section id="about">
      <h3>About Me</h3>
      <img src={FamilyPhoto} alt="My family" />
      <p>My name is Spencer & Welcome to my Portfolio!<br/><br/>I am 26 years old who currently lives in Utah. I am a father to a loving daughter, and I love spending time her, my wife and our dog.<br/><br/>I currently work at Accela as a Technical Support Engineer while I am also enrolled in the University of Utah coding bootcamp to get my certificate as a Full-Stack Developer using the MERN Stack.<br/><br/> Other than working, spending time with family, I love skateboarding, coding, and building retro gameboys. Feel free to <Link to='/contact'>contact me</Link>.</p>
    </section>
  )
}

export default About