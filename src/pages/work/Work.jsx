import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import "./work.css";

const Work = () => {
  const { loading } = useState(false);

  let projectsArray = [
    {
      id: 1,
      name: "PokeDex",
      skills: "React | CSS | JSX | API INTEGRATION",
      repo: "https://github.com/Canadianfaller7/react-pokedex",
      liveSite: "https://canadianfaller7.github.io/weather-dashboard/",
    },
    {
      id: 2,
      name: "The Beer Finder",
      skills: "JQUERY | BULMA | API INTEGRATION",
      repo: "https://github.com/Canadianfaller7/beer-finder",
      liveSite: "https://canadianfaller7.github.io/beer-finder/",
    },
    {
      id: 3,
      name: "Weather Dashboard",
      skills: "HTML | CSS | JAVASCRIPT | API INTEGRATION",
      repo: "https://github.com/Canadianfaller7/weather-dashboard",
      liveSite: "https://canadianfaller7.github.io/weather-dashboard/",
    },
    {
      id: 4,
      name: "Random Password Generator",
      skills: "HTML | CSS | JAVASCRIPT",
      repo: "https://github.com/Canadianfaller7/password-generator",
      liveSite: "https://canadianfaller7.github.io/password-generator/",
    },
    {
      id: 5,
      name: "Work Day Scheduler",
      skills: "HTML | CSS | JAVASCRIPT",
      repo: "https://github.com/Canadianfaller7/work-day-scheduler",
      liveSite: "https://canadianfaller7.github.io/work-day-scheduler/",
    },
    {
      id: 6,
      name: "JavaScript Quiz",
      skills: "HTML | CSS | JAVASCRIPT",
      repo: "https://github.com/Canadianfaller7/javascript-code-quiz",
      liveSite: "https://canadianfaller7.github.io/javascript-code-quiz/",
    },
    {
      id: 7,
      name: "Simon Says",
      skills: "HTML | CSS | JAVASCRIPT",
      repo: "https://github.com/Canadianfaller7/SimonSaysGame",
      liveSite: "https://canadianfaller7.github.io/SimonSaysGame/",
    },
    {
      id: 8,
      name: "Calculator",
      skills: "HTML | CSS | JAVASCRIPT",
      repo: "https://github.com/Canadianfaller7/Calculator-app",
      liveSite: "https://canadianfaller7.github.io/Calculator-app/",
    },
    {
      id: 9,
      name: "Library of Congress Search ",
      skills: "HTML | CSS | JAVASCRIPT",
      repo: "https://github.com/Canadianfaller7/library-of-congress-searcher",
      liveSite: "https://canadianfaller7.github.io/library-of-congress-searcher/",
    },
    {
      id: 10,
      name: "ToDo List",
      skills: "HTML | CSS | JAVASCRIPT",
      repo: "https://github.com/Canadianfaller7/To-Do-App",
      liveSite: "https://canadianfaller7.github.io/To-Do-App/",
    },
  ];

  return (
    <section id="work">
      <h3>Projects</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        projectsArray.map((project) => {
          return (
            <div className={`project-${project.id}`} key={project.id}>
              <div className='card-info'>
                <div className='project-info'>
                  <h4>
                    <Link to={project.liveSite} rel='noreferrer' target='_blank'>
                      {project.name}
                    </Link>
                    <div className='repo-link'>
                      <Link to={project.repo} rel='noreferrer' target='_blank'>
                        <AiFillGithub />
                      </Link>
                    </div>
                  </h4>
                  <p>{project.skills}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </section>
    //     <section id="work">
    //       <h3>Projects</h3>
    //       <div className="project-1">
    //           <Link to="https://canadianfaller7.github.io/beer-finder/" target="_blank">
    //               <div className="project-info">
    //                   <h4>The Beer Finder</h4>
    //                   <p>jQuery / Bulma / API Integration</p>
    //               </div>
    //           </Link>
    //       </div>

    //       <div className="project-2">
    //           <Link to="https://canadianfaller7.github.io/weather-dashboard/" target="_blank">
    //               <div className="project-info">
    //                   <h4>Weather Dashboard</h4>
    //                   <p>HTML | CSS | API Integration | Javascript</p>
    //               </div>
    //           </Link>
    //       </div>

    //       <div className="project-3">
    //           <Link to="https://canadianfaller7.github.io/password-generator/" target="_blank">
    //               <div className="project-info">
    //                   <h4>Random Password Generator</h4>
    //                   <p>HTML | CSS | Javascript</p>
    //               </div>
    //           </Link>
    //       </div>

    //       <div className="project-4">
    //           <Link to="https://canadianfaller7.github.io/my-work-day-scheduler/" target="_blank">
    //               <div className="project-info">
    //                   <h4>Work Day Scheduler</h4>
    //                   <p>HTML | CSS | Javascript</p>
    //               </div>
    //           </Link>
    //       </div>

    //       <div className="project-5">
    //           <Link to="https://canadianfaller7.github.io/javascript-code-quiz/" target="_blank">
    //               <div className="project-info">
    //                   <h4>Javascript Quiz</h4>
    //                   <p>HTML | CSS | Javascript</p>
    //               </div>
    //           </Link>
    //       </div>

    //       <div className="project-6">
    //           <Link to="https://canadianfaller7.github.io/SimonSaysGame/" target="_blank">
    //               <div className="project-info">
    //                   <h4>Simon Says</h4>
    //                   <p>HTML | CSS | Javascript</p>
    //               </div>
    //           </Link>
    //       </div>

    //       <div className="project-7">
    //           <Link to="https://canadianfaller7.github.io/Calculator-app/" target="_blank">
    //               <div className="project-info">
    //                   <h4>Calculator</h4>
    //                   <p>HTML | CSS | Javascript</p>
    //               </div>
    //           </Link>
    //       </div>

    //       <div className="project-8">
    //           <Link to="https://canadianfaller7.github.io/Tic-Tac-Toe-App/" target="_blank">
    //               <div className="project-info">
    //                   <h4>Tic Tac Toe</h4>
    //                   <p>HTML | CSS | Javascript</p>
    //               </div>
    //           </Link>
    //       </div>

    //       <div className="project-9">
    //           <Link to="https://canadianfaller7.github.io/library-of-congress-searcher/" target="_blank">
    //               <div className="project-info">
    //                   <h4>Library of Congress Search</h4>
    //                   <p>HTML | CSS | Javascript</p>
    //               </div>
    //           </Link>
    //       </div>

    //       <div className="project-10">
    //           <Link to="https://canadianfaller7.github.io/To-Do-App/" target="_blank">
    //               <div className="project-info">
    //                   <h4>To Do List</h4>
    //                   <p>HTML | CSS | Javascript</p>
    //               </div>
    //           </Link>
    //       </div>
    //   </section>
  );
};

export default Work;
