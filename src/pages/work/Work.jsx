import { Link } from "react-router-dom";
import './work.css';

const Work = () => {
  return (
    <section id="work">
      <h3>Projects</h3>
      <div className="project-1">
          <Link to="https://canadianfaller7.github.io/beer-finder/" target="_blank">
              <div className="project-info">
                  <h4>The Beer Finder</h4>
                  <p>jQuery / Bulma / API Integration</p>
              </div>
          </Link>
      </div>

      <div className="project-2">
          <Link to="https://canadianfaller7.github.io/weather-dashboard/" target="_blank">
              <div className="project-info">
                  <h4>Weather Dashboard</h4>
                  <p>HTML | CSS | API Integration | Javascript</p>
              </div>
          </Link>
      </div>

      <div className="project-3">
          <Link to="https://canadianfaller7.github.io/password-generator/" target="_blank">
              <div className="project-info">
                  <h4>Random Password Generator</h4>
                  <p>HTML | CSS | Javascript</p>
              </div>
          </Link>
      </div>

      <div className="project-4">
          <Link to="https://canadianfaller7.github.io/my-work-day-scheduler/" target="_blank">
              <div className="project-info">
                  <h4>Work Day Scheduler</h4>
                  <p>HTML | CSS | Javascript</p>
              </div>
          </Link>
      </div>

      <div className="project-5">
          <Link to="https://canadianfaller7.github.io/javascript-code-quiz/" target="_blank">
              <div className="project-info">
                  <h4>Javascript Quiz</h4>
                  <p>HTML | CSS | Javascript</p>
              </div>
          </Link>
      </div>

      <div className="project-6">
          <Link to="https://canadianfaller7.github.io/SimonSaysGame/" target="_blank">
              <div className="project-info">
                  <h4>Simon Says</h4>
                  <p>HTML | CSS | Javascript</p>
              </div>
          </Link>
      </div>

      <div className="project-7">
          <Link to="https://canadianfaller7.github.io/Calculator-app/" target="_blank">
              <div className="project-info">
                  <h4>Calculator</h4>
                  <p>HTML | CSS | Javascript</p>
              </div>
          </Link>
      </div>

      <div className="project-8">
          <Link to="https://canadianfaller7.github.io/Tic-Tac-Toe-App/" target="_blank">
              <div className="project-info">
                  <h4>Tic Tac Toe</h4>
                  <p>HTML | CSS | Javascript</p>
              </div>
          </Link>
      </div>

      <div className="project-9">
          <Link to="https://canadianfaller7.github.io/library-of-congress-searcher/" target="_blank">
              <div className="project-info">
                  <h4>Library of Congress Search</h4>
                  <p>HTML | CSS | Javascript</p>
              </div>
          </Link>
      </div>

      <div className="project-10">
          <Link to="https://canadianfaller7.github.io/To-Do-App/" target="_blank">
              <div className="project-info">
                  <h4>To Do List</h4>
                  <p>HTML | CSS | Javascript</p>
              </div>
          </Link>
      </div>
  </section>
  )
}

export default Work