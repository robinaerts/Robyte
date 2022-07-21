import Link from "next/link";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

export default function Art({ projects }) {
  const [enlarge, setEnlarge] = useState();

  if (enlarge !== undefined && process.browser) {
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  } else if (process.browser) {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  }

  return (
    <div id="art-container">
      <div id="art-text">
        <div className="section-title-badge">
          <h2 className="section-title">Recent Art</h2>
          <a
            className="nav-badge"
            style={{
              marginLeft: "2.5rem",
              backgroundColor: "#97C490",
            }}
          >
            ART
          </a>
        </div>
        <p className="section-title-description">
          I try to make beautiful and unique art pieces
        </p>
      </div>
      <div id="programming-projects-container">
        {projects &&
          projects.map((project, i) => {
            return (
              <div
                key={-project.timeStamp}
                onClick={() => setEnlarge(i)}
                className="art-project-container"
                style={{
                  background: `url('${project.preview}') top center/cover`,
                }}
              ></div>
            );
          })}
        <Link href="/art">
          <p id="view-more-projects">View more...</p>
        </Link>
      </div>
      {enlarge !== undefined && (
        <div style={{ top: window.scrollY + "px" }} className="backdrop">
          <ProjectDetail
            project={projects[enlarge]}
            setEnlarge={setEnlarge}
            id={enlarge}
          />
        </div>
      )}
    </div>
  );
}
