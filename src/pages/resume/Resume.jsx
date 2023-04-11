import ProfessionalResume from '../../assets/resume/spencer-merrill-resume.pdf'
import { SiHtml5, SiCsswizardry, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMysql, SiHandlebarsdotjs, SiMongodb, SiGraphql, SiSequelize, SiBootstrap, SiJquery, SiGit, SiGithub, SiPwa, SiAxios} from 'react-icons/si';
import './resume.css';

const Resume = () => {
  return (
    <div>
      <div className='my-resume'>
        <h1>Resume</h1>
        <button className='download-btn'>
          <a href={ProfessionalResume} download={"spencer-merrill-resume.pdf"}>Download My Resume</a>
        </button>
      </div>
      <div>
        <div className="skill-stack">
            <h2>Skills:</h2>
            <div className="my-skills">
              <div>
                <SiHtml5/>
              </div>
              <div>
                <SiCsswizardry/>
              </div>
              <div>
                <SiJavascript/>
              </div>
              <SiReact/>
              <SiNodedotjs/>
              <SiExpress/>
              <SiMysql/>
              <SiHandlebarsdotjs/>
              <SiMongodb/>
              <SiGraphql/>
              <SiSequelize/>
              <SiBootstrap/>
              <SiJquery/>
              <SiGit/>
              <SiGithub/>
              <SiPwa/>
              <SiAxios/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Resume