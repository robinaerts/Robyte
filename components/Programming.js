import ProgrammingProject from "./ProgrammingProject";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

export default function Programming() {
  const [enlarge, setEnlarge] = useState();
  if (enlarge && process.browser) {
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  } else if (process.browser) {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  }
  console.log(enlarge);
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
        </div>
        <p className="section-title-description">
          In my free time I love to program
        </p>
      </div>
      <div id="programming-projects-container">
        <ProgrammingProject setEnlarge={setEnlarge} />
        <ProgrammingProject setEnlarge={setEnlarge} />
        <ProgrammingProject setEnlarge={setEnlarge} />
        <ProgrammingProject setEnlarge={setEnlarge} />
      </div>
      {enlarge && (
        <>
          <div
            // onClick={() => setEnlarge()}
            style={{ top: window.scrollY + "px" }}
            id="backdrop"
          >
            <ProjectDetail setEnlarge={setEnlarge} id={enlarge} />
          </div>
        </>
      )}
    </div>
  );
}
