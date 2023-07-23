import { BiGitCommit, BiTimer, BiWorld } from "react-icons/bi";
import { motion } from "framer-motion"

const statsVariants = {
  hide: {
      opacity: 0,
      y: 70,
  },
  show: {
      opacity: 1,
      y: 0,
      transition: {
          duration: 0.5,
      },
  },
};

const statsVariantsReverse = {
  hide: {
    opacity: 0,
    y: -70,
},
show: {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.5,
    },
},
}

const Stats = () => {
  return (
    <div id="stats-container">
      <motion.div initial="hide" whileInView="show" exit="hide" variants={statsVariants} className="statistic">
        <BiTimer className="stat-icon" />
        <span className="stats-number">1000+</span>
        <p>Hours of experience in modern technologies</p>
      </motion.div>
      <motion.div initial="hide" whileInView="show" exit="hide" variants={statsVariantsReverse} className="statistic">
        <BiGitCommit className="stat-icon" />
        <span className="stats-number">400+</span>
        <p>Contributions on Github in the last year</p>
      </motion.div>
      <motion.div initial="hide" whileInView="show" exit="hide" variants={statsVariants} className="statistic">
        <BiWorld className="stat-icon" />
        <span className="stats-number">5</span>
        <p>Big applications open to the public</p>
      </motion.div>
    </div>
  );
};

export default Stats;
