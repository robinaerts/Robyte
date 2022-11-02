import { BiGitCommit, BiTimer, BiWorld } from "react-icons/bi";

const Stats = () => {
  return (
    <div id="stats-container">
      <div className="statistic">
        <BiTimer className="stat-icon" />
        <span className="stats-number">1000+</span>
        <p>Hours of experience in modern technologies</p>
      </div>
      <div className="statistic">
        <BiGitCommit className="stat-icon" />
        <span className="stats-number">300+</span>
        <p>Contributions on Github in the last year</p>
      </div>
      <div className="statistic">
        <BiWorld className="stat-icon" />
        <span className="stats-number">5</span>
        <p>Big applications open to the public</p>
      </div>
    </div>
  );
};

export default Stats;
