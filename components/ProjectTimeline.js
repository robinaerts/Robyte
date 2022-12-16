import { MdPlayCircleOutline } from "react-icons/md";

const ProjectTimeline = () => {
  return (
    <div id="timeline-container">
      <h1 className="workflow-title">Project Workflow</h1>
      <div id="horizontal-timeline">
        <MdPlayCircleOutline id="timeline-start-icon" />
        <div className="workflow-section">
          <h2 className="workflow-undertitle">Research</h2>
          <p className="workflow-description">
            Dive deeper into the companies core values
          </p>
        </div>
        <div className="workflow-section">
          <h2 className="workflow-undertitle">Brainstorm</h2>
          <p className="workflow-description">
            Think of ideas that make the company stand out
          </p>
        </div>
      </div>
      <div id="timeline-path-down"></div>
      <div id="vertical-timeline">
        <div className="workflow-section">
          <h2 className="workflow-undertitle">Prototype</h2>
          <p className="workflow-description">
            Create a prototype of the app and send it to the client
          </p>
        </div>
        <div id="timeline-path-down-2"></div>
        <div className="workflow-section" id="workflow-build">
          <h2 className="workflow-undertitle">Build</h2>
          <p className="workflow-description">
            Create a production ready version of the app and publish it
          </p>
        </div>
      </div>
      <div id="code-video-container">
        <video id="code-video" autoPlay muted src="/code.mp4"></video>
      </div>
      {/* <button onClick={deployClicked} id="timeline-deploy">
        DEPLOY
      </button> */}
    </div>
  );
};

export default ProjectTimeline;
