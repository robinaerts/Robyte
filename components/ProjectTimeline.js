import { MdPlayCircleOutline } from "react-icons/md";
import { motion } from "framer-motion"

const animateInVariants = {
  hide: {
    opacity: 0,
    y: 50,
},
show: {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.3,
    },
},
}

const ProjectTimeline = () => {
  return (
    <div id="timeline-container">
      <h1 className="workflow-title">Project Workflow</h1>
      <div id="horizontal-timeline">
        <MdPlayCircleOutline id="timeline-start-icon" />
        <motion.div initial="hide" whileInView="show" exit="hide" variants={animateInVariants} className="workflow-section">
          <h2 className="workflow-undertitle">Research</h2>
          <p className="workflow-description">
            Dive deeper into the companies core values
          </p>
        </motion.div>
        <motion.div initial="hide" whileInView="show" exit="hide" variants={animateInVariants} className="workflow-section">
          <h2 className="workflow-undertitle">Brainstorm</h2>
          <p className="workflow-description">
            Think of ideas that make the company stand out
          </p>
        </motion.div>
      </div>
      <div id="timeline-path-down"></div>
      <div id="vertical-timeline">
        <motion.div initial="hide" whileInView="show" exit="hide" variants={animateInVariants} className="workflow-section">
          <h2 className="workflow-undertitle">Prototype</h2>
          <p className="workflow-description">
            Create a prototype of the app and send it to the client
          </p>
        </motion.div>
        <div id="timeline-path-down-2"></div>
        <motion.div initial="hide" whileInView="show" exit="hide" variants={animateInVariants} className="workflow-section" id="workflow-build">
          <h2 className="workflow-undertitle">Build</h2>
          <p className="workflow-description">
            Create a production ready version of the app and publish it
          </p>
        </motion.div>
      </div>
      <div id="code-video-container">
        <video id="code-video" autoPlay muted src="/code.mp4"></video>
      </div>
      {/* <button onClick={deployClicked} id="timeline-deploy">
        DEPLOY
      </button> */}
      <img className="asteroid asteroid3" src="/asteroid1.svg" />
      <img className="asteroid asteroid4" src="/asteroid2.svg" />

    </div>
  );
};

export default ProjectTimeline;
