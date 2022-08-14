import ProgrammingProject from "./ProgrammingProject";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import { auth } from "../helpers/firebaseconfig";
import AddProject from "./AddProject";

function Programming({ projects }) {
  const user = auth.currentUser;
  const [addProject, setAddProject] = useState(false);
  const [enlarge, setEnlarge] = useState();

  if (enlarge !== undefined && process.browser) {
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  } else if (process.browser) {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  }

  return (
    <div id="programming-container">
      <div id="programming-text">
        <div className="section-title-badge">
          <h2 className="section-title">Programming Projects</h2>
          <a
            className="nav-badge"
            style={{
              marginLeft: "2.5rem",
              backgroundColor: "#8CA3BF",
            }}
          >
            DEV
          </a>
          {user && user.email === "nibor.aerts@gmail.com" && (
            <button id="add-project-button" onClick={() => setAddProject(true)}>
              +
            </button>
          )}
        </div>
        <p className="section-title-description">
          I design and build software for multiple platforms
        </p>
      </div>
      <div id="programming-projects-container">
        {projects.map((project, i) => {
          return (
            <ProgrammingProject
              key={project.timestamp}
              index={i}
              project={project}
              setEnlarge={setEnlarge}
            />
          );
        })}
      </div>
      {enlarge !== undefined && (
        <>
          <div style={{ top: window.scrollY + "px" }} className="backdrop">
            <ProjectDetail
              project={projects[enlarge]}
              setEnlarge={setEnlarge}
              id={enlarge}
            />
          </div>
        </>
      )}
      {addProject && (
        <div style={{ top: window.scrollY + "px" }} className="backdrop">
          <AddProject setAddProject={setAddProject} />
        </div>
      )}
    </div>
  );
}

export default Programming;
