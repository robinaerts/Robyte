export default function ProgrammingProject(props) {
  return (
    <div
      className="programming-project-container"
      style={{
        background: `url(${props.project.preview}) center center/cover`,
      }}
      onClick={() => props.setEnlarge(props.index)}
    >
      <div className="programming-project-text">
        <h3 className="programming-project-title">{props.project.title}</h3>
        <p className="programming-project-description">{props.project.short}</p>
      </div>
    </div>
  );
}
