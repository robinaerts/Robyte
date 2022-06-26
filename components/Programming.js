import ProgrammingProject from "./ProgrammingProject";
import { useEffect, useState } from "react";
import ProjectDetail from "./ProjectDetail";
import { auth, db } from "../config/firebaseconfig";
import { collection, getDocs, query } from "firebase/firestore";
import AddProject from "./AddProject";

export default function Programming() {
  const user = auth.currentUser;
  const [addProject, setAddProject] = useState(false);

  const [enlarge, setEnlarge] = useState();
  if (enlarge !== undefined && process.browser) {
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  } else if (process.browser) {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  }

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProgrammingProjects();
  }, []);

  const getProgrammingProjects = async () => {
    const q = query(collection(db, "programming"));
    const proj = await getDocs(q);
    const myProjects = [];
    proj.forEach((doc) => {
      myProjects.push(doc.data());
    });
    setProjects(myProjects);
  };

  return (
    <div id="programming-container">
      <div id="programming-text">
        <div className="section-title-badge">
          <h2 className="section-title">Recent Programming Projects</h2>
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
            <button onClick={() => setAddProject(true)}>+</button>
          )}
        </div>
        <p className="section-title-description">
          In my free time I love to program
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
        {/*         
        <ProgrammingProject setEnlarge={setEnlarge} />
        <ProgrammingProject setEnlarge={setEnlarge} />
        <ProgrammingProject setEnlarge={setEnlarge} /> */}
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
