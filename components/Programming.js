import ProgrammingProject from "./ProgrammingProject";

export default function Programming() {
  return (
    <div id="programming-container">
      <div id="programming-text">
        <div className="section-title-badge">
          <h2 className="section-title">Recent Programming Projects</h2>
          <button
            className="nav-badge"
            style={{
              marginLeft: "2.5rem",
              backgroundColor: "#8CA3BF",
            }}
          >
            DEV
          </button>
        </div>
        <p className="section-title-description">
          In my free time I love to program
        </p>
      </div>
      <div id="programming-projects-container">
        <ProgrammingProject />
        <ProgrammingProject />
        <ProgrammingProject />
        <ProgrammingProject />
      </div>
    </div>
  );
}
