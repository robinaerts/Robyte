export default function ProgrammingProject(props) {
  return (
    <div
      className="programming-project-container"
      onClick={() => props.setEnlarge("Title")}
    >
      <div className="programming-project-text">
        <h3 className="programming-project-title">Project Title</h3>
        <p className="programming-project-description">
          Really short description
        </p>
      </div>
    </div>
  );
}
